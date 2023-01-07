/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import MainSpace from 'components/MainSpace'
import { useLocalStorage } from "services/useLocalStorage"
import { Switch, useLocation, useRoute } from "wouter"
import { handError } from 'services/handError'
import LeftBar from 'components/LeftBar'
import { Route } from 'wouter'
import Branch from 'components/Branch'
import AboutPage from 'pages/AboutPage'
import { useEffect, useState } from 'react'
import './SaveLocalData.css'

export default function SaveLocalData() {
    const columns = [{ name: 'New Column', id: 0, activities: [{ id: 0, name: 'New Element', description: 'Element description.' }] }]
    var [branchs, setBranchs] = useLocalStorage('branchs', [{ props: { key: 0, id: 0, name: 'New List', columns: columns } }])
    const [path, pushLocation] = useLocation()
    const [match, params] = useRoute("/branch/:id")
    const [updates, setUpdates] = useState(0);

    const [currentMaxBranch, setMaxBranch] = useState({ props: { id: [-1] } })

    useEffect(() => {
        if (branchs.length != 0)
            setMaxBranch(branchs.reduce((prev, current) => (prev.props.id > current.props.id) ? prev : current))
    }, [branchs, path, match])

    const HandleChangeName = (evt, id) => {
        const currentBranch = branchs.filter((e) => e.props.id == id)

        currentBranch[0].props.name = evt.target.value
        setBranchs(branchs)
    }

    const HandleCreateColumn = (id) => {
        const currentBranch = branchs.filter((e) => e.props.id == id)

        if (currentBranch[0].props.columns.length < 5) {
            var MaxColumn = { column: { id: [-1] } }

            if (currentBranch[0].props.columns.length > 0) {
                MaxColumn = currentBranch[0].props.columns.reduce((prev, current) => (prev.id > current.id) ? prev : current)
            }

            currentBranch[0].props.columns.push({ name: "New Column " + (parseInt(MaxColumn.id) + 1), id: parseInt(MaxColumn.id) + 1, activities: [{ id: 0, name: 'New Element', description: 'Description of element.' }] })
            setBranchs(branchs)

            window.location.reload(false)
        }
        else {
            handError('Error: Max 5 columns')
        }
    }

    const HandleChangeColumnName = (evt, id, column_id) => {
        branchs[id].props.columns[column_id].name = evt.target.value
        setBranchs(branchs)
    }


    const HandleClickRemoveColumn = (id, column_id) => {
        const currentBranch = branchs.filter((e) => e.props.id == id)
        const index = currentBranch[0].props.columns.indexOf(currentBranch[0].props.columns.find(e => e.id === column_id))
        currentBranch[0].props.columns.splice(index, 1)
        setBranchs(branchs)

        window.location.reload(false)
    }

    const HandleClickRemove = (id) => {
        setBranchs(branchs.filter((e) => e.props.id != id))
        pushLocation('/')

        window.location.reload(false)
    }


    const HandleCreateBranch = () => {
        var MaxBranch = { props: { id: [-1] } }

        if (branchs.length != 0) {
            MaxBranch = branchs.reduce((prev, current) => (prev.props.id > current.props.id) ? prev : current)
        }
        branchs.push(<Branch id={parseInt(MaxBranch.props.id) + 1} name={'New Branch ' + branchs.length} columns={columns}></Branch>)
        setBranchs(branchs)
        window.location.reload(false)
    }
    const HandleRemoveActivity = (branch_id, column_id, activity_id) => {
        const currentBranch = branchs.filter((e) => e.props.id == branch_id)
        const currentColumn = currentBranch[0].props.columns.filter((e) => e.id == column_id)
        const index = currentColumn[0].activities.indexOf(currentColumn[0].activities.find(e => e.id == activity_id))

        currentColumn[0].activities.splice(index, 1)
        setBranchs(branchs)

        window.location.reload(false)
    }
    const HandleSaveActivityMods = (branch_id, column_id, activity_id, newName, newDesc) => {
        const currentBranch = branchs.filter((e) => e.props.id == branch_id)
        const currentColumn = currentBranch[0].props.columns.filter((e) => e.id == column_id)
        const index = currentColumn[0].activities.indexOf(currentColumn[0].activities.find(e => e.id == activity_id))

        currentColumn[0].activities[index].name = newName;
        currentColumn[0].activities[index].description = newDesc;

        setBranchs(branchs)
    }
    const HandleCreateActivity = (branch_id, column_id, newName, newDesc) => {
        const currentBranch = branchs.filter((e) => e.props.id == branch_id)
        const currentColumn = currentBranch[0].props.columns.filter((e) => e.id == column_id)
        var MaxActivity = { id: [-1] }

        if (currentColumn[0].activities.length > 0) {
            MaxActivity = currentColumn[0].activities.reduce((prev, current) => (prev.id > current.id) ? prev : current)
        }
        currentColumn[0].activities.push({ name: newName, description: newDesc, id: parseInt(MaxActivity.id) + 1 })
        setBranchs(branchs)

        window.location.reload(false)
    }

    useEffect(() => {
        setUpdates(updates + 1)
        if (updates > 0) {
            window.location.reload(false)
        }
    }, [path, match])

    return (
        <div className='main'>
            <LeftBar MaxBranchId={parseInt(currentMaxBranch.props.id) + 1} handleCreateBranch={HandleCreateBranch} newbranchs={branchs}></LeftBar>
            <Switch>
                <Route path="/" component={AboutPage} ></Route>
                {
                    (match) &&
                    <MainSpace id={params.id} branchs={branchs} handleCreateActivity={HandleCreateActivity} handleSaveActivityMods={HandleSaveActivityMods} handleRemoveActivity={HandleRemoveActivity} handleChangeColumnName={HandleChangeColumnName} handleClickRemoveColumn={HandleClickRemoveColumn} handleChangeName={HandleChangeName} handleCreateColumn={HandleCreateColumn} handleClickRemove={HandleClickRemove}></MainSpace>
                }
            </Switch>
        </div>
    )
}