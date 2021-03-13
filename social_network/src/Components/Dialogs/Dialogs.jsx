import classes from "./Dialogs.module.css";
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
let UserDialogs = DialogsData.map( dialogs => {
    return <DialogItem  name={dialogs.name} id={dialogs.id}/>
})
let UserMessages = MessagesData.map( messages => {
    return <Message message={messages.message} id={messages.id} />
})

const Dialogs = (props) => {
    return (
        <> <h1>Dialogs:</h1>
            <div className={classes.dialogs}>
                <div className={classes.DialogItem}>
                    {UserDialogs}
                </div>
                <div className={classes.Border}></div>
                <div className={classes.Messages}>
                    {UserMessages}
                </div>
            </div>
        </>
    )
}

export default Dialogs;