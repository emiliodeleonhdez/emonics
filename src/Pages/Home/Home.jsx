import React from "react";
import HomeButton from "../../Components/Button/HomeButton/HomeButton";
import SideButton from "../../Components/Button/side-button/SideButton";
import "./Home.scss";
import ReactDOM from "react-dom/client";

class Title extends React.Component {
    constructor(){
        super()
        this.state = {subtitle: "Emilio De Leon - React JS Developer"}
    }
    render() {
        return <h2>My projects | {this.state.subtitle}</h2>;
    }
}

const Home = (props) => {
    const root = ReactDOM.createRoot(document.getElementById("root"));

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
                {props.title || <Title/>}

                {props.children || (
                    <HomeButton buttontext="Login with Redux" path="/login" />
                )}
            </div>
        </div>
    );
};

export default Home;
