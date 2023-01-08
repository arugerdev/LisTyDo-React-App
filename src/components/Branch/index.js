import "./Branch.css"
import { Link, useLocation } from "wouter"
export default function Branch({ id, color }) {
    const [path] = useLocation()

    const pathid = path.replace("/branch/", "")

    return (
        <div className="branch" >
            <Link to={"/branch/" + id}>
                <button style={(color ? { background: color } : null)} className={"branch-button" + (id == pathid ? " active" : "")} >
                    <svg clipRule="evenodd" fill="currentcolor" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.4 19.25c0-.414.336-.75.75-.75h5.1c.414 0 .75.336.75.75s-.336.75-.75.75h-5.1c-.414 0-.75-.336-.75-.75zm-1.4-14.25c0-.53-.47-1-1-1h-10c-.53 0-1 .47-1 1v14c0 .53.47 1 1 1h10c.53 0 1-.47 1-1zm-10.5.5h9v13h-9zm11.9 10.125c0-.414.336-.75.75-.75h5.1c.414 0 .75.336.75.75s-.336.75-.75.75h-5.1c-.414 0-.75-.336-.75-.75zm0-3.625c0-.414.336-.75.75-.75h5.1c.414 0 .75.336.75.75s-.336.75-.75.75h-5.1c-.414 0-.75-.336-.75-.75zm0-3.625c0-.414.336-.75.75-.75h5.1c.414 0 .75.336.75.75s-.336.75-.75.75h-5.1c-.414 0-.75-.336-.75-.75zm0-3.625c0-.414.336-.75.75-.75h5.1c.414 0 .75.336.75.75s-.336.75-.75.75h-5.1c-.414 0-.75-.336-.75-.75z" fillRule="nonzero" /></svg>
                </button>
            </Link>
        </div >
    )
}