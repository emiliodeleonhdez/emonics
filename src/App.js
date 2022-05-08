import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home"
import {
    Route,
    BrowserRouter,
    Routes
  } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
