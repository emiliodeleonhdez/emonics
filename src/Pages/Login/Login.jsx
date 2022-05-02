import MainButton from "../../Components/Button/mainButton";
import MainTitle from "../../Components/Title/MainTitle";
import { useDispatch, useSelector } from "react-redux";
import { userlogin, userlogout } from "../../redux/login";
import Home from "../Home/Home";
import Input from "../../Components/Inputs/Input";
import { useState } from "react";

const Login = () => {
    const dispatch = useDispatch();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [userstatus, setUserstatus] = useState("");

    const handleChangeIdentifier = (value) => {
        setIdentifier(value);
    };

    const handleChangePassword = (value) => {
        setPassword(value);
    };

    const handelLogin = () => {
        fetch("http://localhost:1337/api/auth/local", {
            method: "POST",
            body: JSON.stringify({ identifier, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((response) => {
                console.log("Success:", response.user);
                // console.log(response)
                if (response.jwt) {
                    console.log(`User ${response.user.username} is authorized`);
                    dispatch(userlogin());
                    setUserstatus("Credentials OK");
                } else {
                    setUserstatus("Bad Credentials");
                }
            });
    };

    const loginStatus = useSelector((state) => state.login.value);

    return (
        <Home title="Working login with Redux and StrapiJS as Backend">
            <MainTitle title={`User is: ${loginStatus} `} />
            <div className="container login-container">
                <form>
                    <Input
                        lableText="Email"
                        inputPlaceholder="name@email.com"
                        inputType="text"
                        value={identifier}
                        onChangeValue={handleChangeIdentifier}
                    />
                    <Input
                        lableText="Password"
                        inputPlaceholder="******"
                        inputType="Password"
                        value={password}
                        onChangeValue={handleChangePassword}
                    />
                    <MainButton
                        className="m-1"
                        variant="primary"
                        buttontext="Login"
                        onClick={() => handelLogin()}
                    />
                    {userstatus}
                </form>
            </div>
        </Home>
    );
};

export default Login;
