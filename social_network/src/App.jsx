import "./App.css";

import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";
import {state} from "./redux/state";


import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header/>
        <Navbar />
        <div className="pageWrapper">
          <Route path ="/dialogs" render={ () => <Dialogs state={props.state.MessagesPage} /> }/>
          <Route path="/profile" render={ () => <Profile state={props.state.ProfilePage} />} />
          <Route path="/friends" render={ () => <Friends/>}/>
          <Route path="/music" render={ () => <Music/> }/>
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
