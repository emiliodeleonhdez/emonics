import React from "react";
import { Button } from "react-bootstrap";

const MainButton = (props) => {
    return (
        <div>
            <Button {...props}>{props.buttonText}</Button>
        </div>
    );
};

export default MainButton;
