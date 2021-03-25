import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let UserDialogs = props.state.dialogs.map( dialogs => {
        return <DialogItem  name={dialogs.name} id={dialogs.id}/>
    })
    let UserMessages = props.state.messages.map( messages => {
        return <Message message={messages.message} id={messages.id} />
    })

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