/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Column from "components/Column";
import "./MainSpace.css"

export default function MainSpace({ id, handleChangeActivityColumnPosition, handleChangeColumnColor, handleChangeBranchColor, handleCreateActivity, handleSaveActivityMods, handleRemoveActivity, handleChangeName, handleClickRemove, handleCreateColumn, branchs, handleChangeColumnName, handleClickRemoveColumn }) {
    const [colorBg, setColorBg] = useState(branchs.find(e => e.props.id == id).props.color)
    const index = branchs.indexOf(branchs.find(e => e.props.id == id))
    const currentBranch = branchs[index]

    useEffect(() => {
        handleChangeBranchColor(id, colorBg)
    }, [colorBg])

    const HandleChangeColor = (e) => {
        setColorBg(e.target.value)
    }

    return (

        <div className="main-space-parent">
            <div className="main-space" style={(colorBg ? { background: colorBg } : null)}>

                <div className="main-top-inputs-parents">
                    <div className="main-top-inputs">
                        <input onChange={HandleChangeColor} defaultValue={(colorBg ? colorBg : '#0BB3F0')} type='color' className='main-space-color-input'></input>
                        <button className="remove-branch" onClick={() => handleClickRemove(currentBranch.props.id)} >
                            <svg clipRule="evenodd" fill="currentcolor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fillRule="nonzero" /></svg>
                        </button>
                    </div>
                    <textarea className="main-branch-name" defaultValue={currentBranch.props.name} onChange={(e) => handleChangeName(e, currentBranch.props.id)}></textarea>

                </div>

                {currentBranch.props.columns &&
                    <div className="main-columns">
                        {
                            currentBranch.props.columns.map((col, i) =>
                                <Column branchs={branchs} column={col} handleChangeActivityColumnPosition={handleChangeActivityColumnPosition} handleChangeColumnColor={handleChangeColumnColor} handleCreateActivity={handleCreateActivity} handleSaveActivityMods={handleSaveActivityMods} handleRemoveActivity={handleRemoveActivity} key={'branch: ' + currentBranch.props.id + 'column: ' + col.id} handleChangeColumnName={handleChangeColumnName} handleClickRemoveColumn={handleClickRemoveColumn} column_id={col.id} branch_id={currentBranch.props.id} defaultName={col.name} ></Column>
                            )
                        }
                    </div>
                }
                <button className="add-column-button" onClick={() => handleCreateColumn(currentBranch.props.id)}>
                    <svg clipRule="evenodd" fill="currentcolor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero" /></svg>
                </button>
            </div>
        </div>
    )
}