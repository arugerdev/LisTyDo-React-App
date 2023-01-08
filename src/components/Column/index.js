/* eslint-disable eqeqeq */
import "./Column.css"
import Activity from "components/Activity"
import { useState, useEffect } from "react"
import CreateActivity from "components/CreateActivity"
export default function Column({ branchs, handleChangeActivityColumnPosition, handleChangeColumnColor, handleCreateActivity, handleSaveActivityMods, handleRemoveActivity, defaultName, branch_id, column_id, handleClickRemoveColumn, handleChangeColumnName }) {
    const index = branchs.indexOf(branchs.find(e => e.props.id == branch_id))
    const currentBranch = branchs[index]
    const indexColumn = currentBranch.props.columns.indexOf(currentBranch.props.columns.find(e => e.id == column_id))
    const currentColumn = currentBranch.props.columns[indexColumn]
    const [createMode, setCreateMode] = useState(false)
    const [colorBg, setColorBg] = useState(branchs.find(e => e.props.id == branch_id).props.columns.find(e => e.id == column_id).color)

    const HandleClose = () => {
        setCreateMode(false)
    }
    const CreateNewActivity = () => {

        setCreateMode(true)
    }

    const HandleCreate = (e, newName, newDesc) => {
        e.preventDefault()

        handleCreateActivity(branch_id, column_id, newName, newDesc)

    }
    useEffect(() => {
        handleChangeColumnColor(branch_id, column_id, colorBg)
    }, [colorBg])

    const HandleChangeColor = (e) => {
        setColorBg(e.target.value)
    }

    return (
        <div style={(colorBg ? { background: colorBg } : null)} className="column" id="column">
            <div className="top-column-buttons">
                <button className="remove-column" onClick={() => handleClickRemoveColumn(branch_id, column_id)} >
                    <svg clipRule="evenodd" fill="currentcolor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fillRule="nonzero" /></svg>
                </button>
                <input onChange={HandleChangeColor} defaultValue={(colorBg ? colorBg : '#0BB3F0')} type='color' className='column-color-input'></input>
            </div>
            <textarea className="column-name" defaultValue={defaultName} onChange={(e) => handleChangeColumnName(e, branch_id, column_id)}>
            </textarea>

            <div className="actvitys-parent">
                {currentColumn.activities.map((act, i) =>
                    <Activity key={act.id} branchs={branchs} handleChangeActivityColumnPosition={handleChangeActivityColumnPosition} handleSaveActivityMods={handleSaveActivityMods} branch_id={branch_id} column_id={column_id} activity_id={act.id} handleRemoveActivity={handleRemoveActivity} activity_data={act}></Activity>
                )
                }
                <button className="create-new-activity-button" onClick={CreateNewActivity}>
                    <svg clipRule="evenodd" fill="currentcolor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero" /></svg>
                </button>
            </div>

            {
                (createMode == true) &&
                <CreateActivity handleClose={HandleClose} handleCreate={HandleCreate}>
                </CreateActivity>
            }

        </div >
    )
}