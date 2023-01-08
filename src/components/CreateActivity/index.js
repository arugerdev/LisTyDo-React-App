import { useState } from 'react'
import './CreateActivity.css'

export default function CreateActivity({ handleClose, handleCreate }) {
    const [newName, setNewName] = useState()
    const [newDesc, setNewDesc] = useState()

    const HandleChangeName = (e) => {
        setNewName(e.target.value)
    }

    const HandleChangeDesc = (e) => {
        setNewDesc(e.target.value)
    }

    return (
        <div className='create-activity-parent'>
            <div className='create-activity-background'></div>
            <div className='create-activity-panel'>
                <h1 className='title'>Create new Activity</h1>
                <form className='create-new-activity-form' onSubmit={(e) => handleCreate(e, newName, newDesc)}>
                    <label className='create-new-activity-label' >*Name:
                        <input onChange={HandleChangeName} className='create-new-activity-input-text name' required={true} placeholder='New Activity' type="text"></input>
                    </label>
                    <label className='create-new-activity-label' >Description:
                        <textarea onChange={HandleChangeDesc} className='create-new-activity-input-text description' placeholder='Description of activity....' ></textarea>
                    </label>
                    <div className='create-new-activity-form-buttons'>
                        <button className='create-new-activity-save'>Create</button>
                        <button onClick={handleClose} className='create-new-activity-cancel'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}