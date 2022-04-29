import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainButton from "./Components/Button/mainButton";
import MainTitle from "./Components/Title/MainTitle";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter";
import Login from "./Pages/Login/Login";



function App() {
  const { count } = useSelector((state) => state.count)
  const dispatch = useDispatch()
    return (
        <div className="App mt-5">
            <MainTitle title={`The count is: ${count}`}/>
            <div className="d-flex justify-content-center mt-3">
                <MainButton
                    className="m-1"
                    variant="success"
                    buttonText="Increment"
                    onClick={() => dispatch(increment())}
                />
                <MainButton
                    className="m-1"
                    variant="secondary"
                    buttonText="Decrement"
                    onClick={() => dispatch(decrement())}
                />
            </div>

            <Login/>
        </div>
    );
}

export default App;
