import React from "react";
import SideButton from "../../Components/Button/side-button/SideButton";
import "./Home.scss";

const Home = (props) => {
    return (
        <div className="container d-flex home">
            <div className="container side-menu">
                <h1 className="side-menu-title">Hello World</h1>
                <div className="container side-menu-list">
                    <SideButton buttontext="About me" />
                    <SideButton buttontext="Proyectos" />
                    <SideButton buttontext="Cuenta" />
                    <SideButton buttontext="Log out" />
                </div>
            </div>
            <div className="container main-content">
              {props.children}
              </div>
        </div>
    );
};

export default Home;
