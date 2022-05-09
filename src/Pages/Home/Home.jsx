import React, { useEffect, useState } from "react";
import HomeButton from "../../Components/Button/HomeButton/HomeButton";
import SideButton from "../../Components/Button/side-button/SideButton";
import "./Home.scss";

const Home = (props) => {

    return (
        <div className="home">
            <div className="container side-menu">
                <h1 className="side-menu-title">Hello World</h1>
                <div className="container side-menu-list">
                    <SideButton buttontext="My Projects" path="/" />
                    <SideButton buttontext="Log out" />
                </div>
            </div>
            <div className="container main-content ">
                {props.title || "Project name!"}

                {props.children || <div>
                    
                    <HomeButton buttontext="Login with Redux" path="/login" />
                    <HomeButton buttontext="Pagination" path="/pagination" />
                    
                    
                    </div>}
            </div>
        </div>
    );
};

export default Home;
