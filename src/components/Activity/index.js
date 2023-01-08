/* eslint-disable eqeqeq */
import { useState } from 'react'
import EditActivity from 'components/EditActivity'
import './Activity.css'

export default function Activity({ handleChangeActivityColumnPosition, handleSaveActivityMods, handleRemoveActivity, branch_id, column_id, activity_id, branchs, activity_data }) {
    const [editActivity, setEditActivity] = useState(false)
    const [activityData] = useState(activity_data)
    const [allColumns] = useState(branchs.find(e => e.props.id == branch_id).props.columns)
    const [currentColumnIndex] = useState(allColumns.indexOf(allColumns.find(e => e.id == column_id)))
    const changeEditActivity = () => {
        setEditActivity((editActivity == true ? false : true))
    }
    const HandleClose = () => {
        setEditActivity(false)
    }
    const HandleSave = (e, newName, newDesc) => {
        e.preventDefault()

        handleSaveActivityMods(branch_id, column_id, activity_id, newName, newDesc)

        setEditActivity(false)
    }

    return (
        <div className='activity-parent'>
            {(allColumns.length > 1 && allColumns[currentColumnIndex - 1]) &&
                < button className='directions-buttons' onClick={() => {
                    handleChangeActivityColumnPosition(branch_id, column_id, activity_data.id, currentColumnIndex - 1)
                }}>
                    <svg fill='currentcolor' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591zm-.289 7.563v-5.446l-3.522 2.719z" fillRule="nonzero" /></svg>
                </button>
            }
            <div className='activity-buttons'>
                <button className='activity-button' onClick={changeEditActivity}>
                    <svg clipRule="evenodd" fill="currentcolor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-12.023-7.083c-1.334 3.916-1.48 4.232-1.48 4.587 0 .527.46.749.749.749.352 0 .668-.137 4.574-1.493zm1.06-1.061 3.846 3.846 8.824-8.814c.195-.195.293-.451.293-.707 0-.255-.098-.511-.293-.706-.692-.691-1.742-1.741-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z" fillRule="nonzero" /></svg>
                </button>
                <button onClick={() => handleRemoveActivity(branch_id, column_id, activity_id)} className="remove-activity-button">
                    <svg clipRule="evenodd" fill="currentcolor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fillRule="nonzero" /></svg>
                </button>
            </div>
            <div className='activity'>
                <div className='activity-content'>
                    <h2 className='activity-name'>{activity_data.name}</h2>
                    <p className='activity-description'>{activity_data.description}</p>
                </div>

            </div>
            {(allColumns.length > 1 && allColumns[currentColumnIndex + 1]) &&
                <button className='directions-buttons' onClick={() => {
                    handleChangeActivityColumnPosition(branch_id, column_id, activity_data.id, currentColumnIndex + 1)
                }}>
                    <svg fill='currentcolor' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z" fillRule="nonzero" /></svg>
                </button>
            }
            {
                (editActivity == true) &&
                <EditActivity activityData={activityData} handleClose={HandleClose} handleSave={HandleSave}></EditActivity>
            }

        </div >
    )
}