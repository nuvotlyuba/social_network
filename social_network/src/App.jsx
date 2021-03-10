import "./App.css";

import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar />
        <Route path ="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

export default App;
