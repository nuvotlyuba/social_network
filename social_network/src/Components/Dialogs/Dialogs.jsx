import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let DialogsData= [
    {name:"Tweety", id:1},
    {name:"Sylvester", id:2},
    {name:"Bugs Bunny", id:3},
    {name:"The Road Runner", id:4},
    {name:"Wile E. Coyote", id:5},
    {name:"Speedy Gonzales", id:6},
]
let MessagesData= [
    {message:"Ho", id:1},
    {message:"Hey", id:2},
    {message:"La", id:3},
    {message:"La", id:4},
    {message:"Lay", id:5},
    {message:"Yo", id:6},
]

const Dialogs = (props) => {
    return (
        <> <h1>Dialogs:</h1>
            <div className={classes.dialogs}>
                <div className={classes.DialogItem}>
                    <DialogItem  name={DialogsData[0].name} id={DialogsData[0].id}/>
                    <DialogItem  name={DialogsData[1].name} id={DialogsData[1].id}/>
                    <DialogItem  name={DialogsData[2].name} id={DialogsData[2].id}/>
                    <DialogItem  name={DialogsData[3].name} id={DialogsData[3].id}/>
                    <DialogItem  name={DialogsData[4].name} id={DialogsData[4].id}/>
                    <DialogItem  name={DialogsData[5].name} id={DialogsData[5].id}/>
                </div>
                <div className={classes.Border}></div>
                <div className={classes.Messages}>
                    <Message message={MessagesData[0].message} id={MessagesData[0].id} />
                    <Message message={MessagesData[1].message} id={MessagesData[1].id} />
                    <Message message={MessagesData[2].message} id={MessagesData[2].id} />
                    <Message message={MessagesData[3].message} id={MessagesData[3].id} />
                    <Message message={MessagesData[4].message} id={MessagesData[4].id} />
                    <Message message={MessagesData[5].message} id={MessagesData[5].id} />
                </div>
            </div>
        </>
    )
}

export default Dialogs;