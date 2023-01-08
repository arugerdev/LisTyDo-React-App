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
    const columns = [{ name: 'New Column', id: 0, color: null, activities: [] }]
    var [branchs, setBranchs] = useLocalStorage('branchs', [{ props: { key: 0, id: 0, name: 'New List', color: null, columns: columns } }])
    const [path, pushLocation] = useLocation()
    const [match, params] = useRoute("/branch/:id")
    const [updates, setUpdates] = useState(0);

    const [currentMaxBranch, setMaxBranch] = useState({ props: { id: [-1] } })

    useEffect(() => {
        if (branchs.length != 0)
            setMaxBranch(branchs.reduce((prev, current) => (prev.props.id > current.props.id) ? prev : current))
    }, [branchs, path, match])

    const HandleChangeName = (evt, id) => {
        const currentBranch = branchs.find((e) => e.props.id == id)

        currentBranch.props.name = evt.target.value
        setBranchs(branchs)
    }

    const HandleCreateColumn = (id) => {
        const currentBranch = branchs.find((e) => e.props.id == id)

        if (currentBranch.props.columns.length < 5) {
            var MaxColumn = { column: { id: [-1] } }

            if (currentBranch.props.columns.length > 0) {
                MaxColumn = currentBranch.props.columns.reduce((prev, current) => (prev.id > current.id) ? prev : current)
            }

            currentBranch.props.columns.push({ name: "New Column " + (parseInt(MaxColumn.id) + 1), id: parseInt(MaxColumn.id) + 1, color: null, activities: [] })
            setBranchs(branchs)

            window.location.reload(false)
        }
        else {
            handError('Error: Max 5 columns')
        }
    }

    const HandleChangeColumnName = (evt, id, column_id) => {
        const currentBranch = branchs.find((e) => e.props.id == id)
        const currentColumn = currentBranch.props.columns.find((e) => e.id == column_id)
        currentColumn.name = evt.target.value
        setBranchs(branchs)
    }


    const HandleClickRemoveColumn = (id, column_id) => {
        const currentBranch = branchs.find((e) => e.props.id == id)
        const index = currentBranch.props.columns.indexOf(currentBranch.props.columns.find(e => e.id === column_id))
        currentBranch.props.columns.splice(index, 1)
        setBranchs(branchs)

        window.location.reload(false)
    }

    const HandleClickRemove = (id) => {
        branchs.splice(
            branchs.indexOf(branchs.find((e) => e.props.id == id))
            , 1
        )
        setBranchs(branchs)
        pushLocation('/')

        window.location.reload(false)
    }


    const HandleCreateBranch = () => {
        var MaxBranch = { props: { id: [-1] } }

        if (branchs.length != 0) {
            MaxBranch = branchs.reduce((prev, current) => (prev.props.id > current.props.id) ? prev : current)
        }
        branchs.push(<Branch id={parseInt(MaxBranch.props.id) + 1} name={'New List ' + branchs.length} columns={columns}></Branch>)
        setBranchs(branchs)
        window.location.reload(false)
    }
    const HandleRemoveActivity = (branch_id, column_id, activity_id) => {
        const currentBranch = branchs.find((e) => e.props.id == branch_id)
        const currentColumn = currentBranch.props.columns.find((e) => e.id == column_id)
        const index = currentColumn.activities.indexOf(currentColumn.activities.find(e => e.id == activity_id))

        currentColumn.activities.splice(index, 1)
        setBranchs(branchs)

        window.location.reload(false)
    }
    const HandleSaveActivityMods = (branch_id, column_id, activity_id, newName, newDesc) => {
        const currentBranch = branchs.find((e) => e.props.id == branch_id)
        const currentColumn = currentBranch.props.columns.find((e) => e.id == column_id)
        const index = currentColumn.activities.indexOf(currentColumn.activities.find(e => e.id == activity_id))

        currentColumn.activities[index].name = newName;
        currentColumn.activities[index].description = newDesc;

        setBranchs(branchs)
    }
    const HandleCreateActivity = (branch_id, column_id, newName, newDesc) => {
        const currentBranch = branchs.find((e) => e.props.id == branch_id)
        const currentColumn = currentBranch.props.columns.find((e) => e.id == column_id)
        var MaxActivity = { id: [-1] }

        if (currentColumn.activities.length > 0) {
            MaxActivity = currentColumn.activities.reduce((prev, current) => (prev.id > current.id) ? prev : current)
        }
        currentColumn.activities.push({ name: newName, description: newDesc, id: parseInt(MaxActivity.id) + 1 })
        setBranchs(branchs)

        window.location.reload(false)
    }

    const HandleChangeBranchColor = (branch_id, newColor) => {
        const currentBranch = branchs.find((e) => e.props.id == branch_id)
        currentBranch.props.color = newColor;
        setBranchs(branchs)
    }
    const HandleChangeColumnColor = (branch_id, column_id, newColor) => {
        const currentBranch = branchs.find((e) => e.props.id == branch_id)
        const currentColumn = currentBranch.props.columns.find((e) => e.id == column_id)

        currentColumn.color = newColor
        setBranchs(branchs)
    }

    const HandleChangeActivityColumnPosition = (branch_id, column_id, activity_id, toColumn_index) => {
        const currentBranch = branchs.find((e) => e.props.id == branch_id)
        const currentColumn = currentBranch.props.columns.find((e) => e.id == column_id)
        const activityData = currentColumn.activities.find(e => e.id == activity_id)

        if (currentColumn.activities.filter((e) => e.id == activity_id).length > 1) {
            const MaxActivity = currentColumn.activities.reduce((prev, current) => (prev.id > current.id) ? prev : current)

            activityData.id = parseInt(MaxActivity.id) + 1;
            activity_id = parseInt(activity_id) + 1;
        }

        const index = currentColumn.activities.indexOf(currentColumn.activities.find(e => e.id == activity_id))

        currentColumn.activities.splice(index, 1)
        currentBranch.props.columns[toColumn_index].activities.push(activityData);

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
            <LeftBar MaxBranchId={parseInt(currentMaxBranch.props.id) + 1} handleCreateBranch={HandleCreateBranch} branchs={branchs}></LeftBar>
            <Switch>
                <Route path="/" component={AboutPage} ></Route>
                {
                    (match) &&
                    <MainSpace id={params.id} branchs={branchs} handleChangeActivityColumnPosition={HandleChangeActivityColumnPosition} handleChangeColumnColor={HandleChangeColumnColor} handleChangeBranchColor={HandleChangeBranchColor} handleCreateActivity={HandleCreateActivity} handleSaveActivityMods={HandleSaveActivityMods} handleRemoveActivity={HandleRemoveActivity} handleChangeColumnName={HandleChangeColumnName} handleClickRemoveColumn={HandleClickRemoveColumn} handleChangeName={HandleChangeName} handleCreateColumn={HandleCreateColumn} handleClickRemove={HandleClickRemove}></MainSpace>
                }
            </Switch>
        </div>
    )
}