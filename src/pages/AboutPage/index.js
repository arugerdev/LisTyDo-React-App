import React from "react";
import './AboutPage.css'
import Logo from 'images/logo.png'
import SocialNetworks from "components/SocialNetworks";

export default function AboutPage() {
    return (
        <div className="about-space-parent">
            <div className="about-content">

                <div className="logo-parent">
                    <img draggable='false' className="logo" src={Logo} alt="logo"></img>
                    <p className="text name">LisTyDo</p>
                </div>

                <h1 className="title">How To Use</h1>
                <p className="text">
                    -To create new list:
                </p>
                <p className="text no-bold">
                    Click or touch on '+' button in the bar. Then, automatically you gonna redirect to your new list, once there, you can start modify all elements !
                </p>

                <p className="text">
                    -To modify the title of list or column:
                </p>
                <p className="text no-bold">
                    Is so easy! You only need click in the title, and begin write to change the title!
                </p>

                <p className="text">
                    -To create a column:
                </p>
                <p className="text no-bold">
                    You can create column cliking in the large '+' button in the bottom of the list. Automatically appears in the right of all columns, with a default name, you can  change when like!
                </p>

                <p className="text">
                    -To create a element:
                </p>
                <p className="text no-bold">
                    In a similar way to the previous step, you can create a new element clicking in the large '+' button, but this button is in bottom of all elements, once clicked, you will select the name and description. (The name is neded!)
                </p>

                <p className="text">
                    -To edit a element:
                </p>
                <p className="text no-bold">
                    In computers: Just need hover with the mouse on the element and then, the buttons will be displayed. The first button is to edit the element, click and select the new name and description, the second button, is to delete there element. <br /><br /> In mobile: Just click in the element and the sames buttons will be displayed.
                </p>

                <h1 className="title">
                    About me
                </h1>
                <p className="text no-bold">
                    I'm a beginner web developer, with experience in Unity 2D/3D game development, working with C#. I also worked with C++ and .NET, I also know some HTML, CSS and JS. Now I am learning React. <br /><br />
                    I want to learn a lot about web development and work on it in the future. But my real dream is work at the video games development, in the part of programming and design.
                </p>
                <br />
                <h1 className="title">
                    Thanks!
                </h1>
                <p className="text no-bold small">
                    The goal is to create a website where you can use the features and your data is not lost, and learn how to use the 'localStorage' system.
                </p>

                <h1 className="title warning">
                    Warning!
                </h1>
                <p className="text no-bold small red">
                    To remove al data please, click in this button:
                </p>

                <button className="remove-data" onClick={() => {
                    window.localStorage.clear()
                    window.location.reload(false)
                }}>Remove all data</button>
                <div className='sn-parent'>
                    <SocialNetworks></SocialNetworks>
                </div>
            </div>
        </div >
    )
}