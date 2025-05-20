import {Link } from "react-router-dom";
const SideBar = (/*{selectedTab, setSelectedTab }*/) => {

    // const handleOnClick=(tabName) =>{

    //     selectedTab(tabName);
    // }
return (

    <div
    className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
    style={{ width: "280px" }}
    >
    <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
        <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
        <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Side bar</span>
    </Link>

    <hr />

    <ul className="nav nav-pills flex-column mb-auto">
        <li /*className="nav-item" onClick={() => setSelectedTab("Home")}*/>
        <Link to="/" className="nav-link text-white " /*${ selectedTab=="Home" &&"active"}`*/ aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#home" />
            </svg>
            Home
        </Link>
        </li>

        <li /*onClick ={()=> setSelectedTab("Create Post")}*/>
        <Link to="create-post" className="nav-link text-white" /* $ selectedTab=="Create Post" &&"active"*/> 
            <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#speedometer2" />
            </svg>
        Create Post
        </Link>
        </li>
    </ul>

    </div>
);
};

export default SideBar;
