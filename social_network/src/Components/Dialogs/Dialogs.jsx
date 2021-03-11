import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}> {props.name}</NavLink> 
        </div>
    )
}
const Message = (props) => {
    return(
        <div className={classes.dialog}>
            {props.message}
        </div>
        )
}

const Dialogs = (props) => {
    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.DialogItem}>
                    <DialogItem  name = "Tweety" id="1"/>
                    <DialogItem  name = "Sylvester" id="2"/>
                    <DialogItem  name = "Bugs Bunny " id="3"/>
                    <DialogItem  name = "The Road Runner" id="4"/>
                    <DialogItem  name = "Wile E. Coyote" id="5"/>
                    <DialogItem  name = "Speedy Gonzales" id="6"/>
                </div>
                <div className={classes.messages}>
                    <Message message="Hi" />
                    <Message message="Ho" />
                    <Message message="Ha" />
                    <Message message="Hay" />
                    <Message message="Holla" />
                    <Message message="Hue" />
                </div>
            </div>
        </>
    )
}

export default Dialogs;