import "./App.css";

import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header/>
        <Navbar />
        <div className="pageWrapper">
          <Route path ="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/friends" component={Friends} />
          <Route path="/music" component={Music} />
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
