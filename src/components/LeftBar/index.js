import React from "react";
import Branch from "components/Branch";
import "./LeftBar.css"
import { Link } from "wouter";
import { useLocalStorage } from "services/useLocalStorage";

export default function LeftBar({ MaxBranchId, handleClickGoToBranch, handleCreateBranch, branchs }) {
    const [attached, setAttached] = useLocalStorage('attached', 'true')

    function changeAttachedMode() {
        setAttached((attached === 'true' ? 'false' : 'true'))
    }

    console.log(branchs)

    return (
        <div className="leftbar-parent">
            <div className={(attached === 'true' ? "leftbar-attached" : "leftbar")}>
                <div className="main-logo">
                    <Link to="/">
                        <button className="leftbar-button">
                            <svg clipRule="evenodd" fill="currentcolor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.394 15.759s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm0-3.113s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm10.271-9.455c-.246-.128-.471-.191-.692-.191-.223 0-.443.065-.675.191l-8.884 5.005c-.276.183-.414.444-.414.698 0 .256.139.505.414.664l8.884 5.006c.221.133.447.203.678.203.223 0 .452-.065.689-.203l8.884-5.006c.295-.166.451-.421.451-.68 0-.25-.145-.503-.451-.682z" fillRule="nonzero" /></svg>
                        </button>
                    </Link>
                </div>
                <div className="main-branchs">
                    {branchs.map((item, i) =>
                        <Branch key={item.props.id} color={item.props.color} id={item.props.id} name={item.props.name} handleClickGoToBranch={() => handleClickGoToBranch(item.props.id)}></Branch>
                    )
                    }
                </div>
                <div className="create-button">
                    <Link to={"/branch/" + MaxBranchId} onClick={handleCreateBranch}>
                        <button className="leftbar-button" onClick={handleCreateBranch} >
                            <svg clipRule="evenodd" fill="currentcolor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero" /></svg>
                        </button>
                    </Link>
                </div>
                <button className="attachment-button" onClick={changeAttachedMode} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="24" height="24" viewBox="0 0 24 24"><path d="M6.166 16.943l1.4 1.4-4.622 4.657h-2.944l6.166-6.057zm11.768-6.012c2.322-2.322 4.482-.457 6.066-1.931l-8-8c-1.474 1.584.142 3.494-2.18 5.817-3.016 3.016-4.861-.625-10.228 4.742l9.6 9.6c5.367-5.367 1.725-7.211 4.742-10.228z" /></svg>
                </button>
            </div>
        </div>
    )
}