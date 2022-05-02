import React from "react";

const Input = (props) => {
    return (
            <div className="mb-3">
                <label
                    className="form-label"
                >
                    {props.lableText}
                </label>
                <input
                    value={props.value}
                    type={props.inputType}
                    className="form-control"
                    placeholder={props.inputPlaceholder}
                    onChange={(e)=>props.onChangeValue(e.target.value)}
                    />
            </div>
    );
};

export default Input;
