import MainButton from "../../Components/Button/mainButton";
import MainTitle from "../../Components/Title/MainTitle";
import { useDispatch, useSelector } from "react-redux";
import { userlogin, userlogout } from "../../redux/login";
import Home from "../Home/Home";

const Login = () => {
    const loginStatus = useSelector((state) => state.login.value);
    const dispatch = useDispatch();

    return (
        <div>
            <Home>
                <MainTitle title={`User is: ${loginStatus} `} />
                <div className="d-flex justify-content-center">
                <MainButton
                    className="m-1"
                    variant="success"
                    buttonText="Login"
                    onClick={() => dispatch(userlogin())}
                />
                <MainButton
                    className="m-1"
                    variant="warning"
                    buttonText="Logout"
                    onClick={() => dispatch(userlogout())}
                />
            </div>
            </Home>
        </div>
    );
};

export default Login;
