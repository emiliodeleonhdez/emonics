import React from "react";
import { Button } from "react-bootstrap";

const MainButton = (props) => {
    return (
        <div>
            <Button {...props}>{props.buttontext}</Button>
        </div>
    );
};

export default MainButton;
