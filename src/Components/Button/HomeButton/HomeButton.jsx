import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeButton.scss";

const HomeButton = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <button
                className="button-36"
                role="button"
                onClick={ ()=> navigate(props.path)}
            >
                {props.buttontext}
            </button>
        </div>
    );
};

export default HomeButton;
