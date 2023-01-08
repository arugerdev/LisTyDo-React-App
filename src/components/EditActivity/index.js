import { useState } from 'react'
import './EditActivity.css'

export default function EditActivity({ activityData, handleClose, handleSave }) {
    const [newName, setNewName] = useState(activityData.name)
    const [newDesc, setNewDesc] = useState(activityData.description)

    const HandleChangeName = (e) => {
        setNewName(e.target.value)
    }

    const HandleChangeDesc = (e) => {
        setNewDesc(e.target.value)
    }

    return (
        <div className='edit-activity-parent'>
            <div className='edit-activity-background'></div>
            <div className='edit-activity-panel'>
                <h1 className='title'>Edit Activity</h1>
                <form className='edit-activity-form' onSubmit={(e) => handleSave(e, newName, newDesc)}>
                    <label className='edit-activity-label' >*Name:
                        <input onChange={HandleChangeName} className='edit-activity-input-text name' required={true} placeholder='New Activity' defaultValue={activityData.name} type="text"></input>
                    </label>
                    <label className='edit-activity-label' >Description:
                        <textarea onChange={HandleChangeDesc} className='edit-activity-input-text description' defaultValue={activityData.description} placeholder='Description of activity....' ></textarea>
                    </label>
                    <div className='edit-activity-form-buttons'>
                        <button  className='edit-activity-save'>Save</button>
                        <button onClick={handleClose} className='edit-activity-cancel'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}