import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <>
        <div className={classes.post}>
            <img width="50" height="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BYflcuyHHV_L1-ecMCoDqYV4bigfH9UAvg&usqp=CAU" alt=""/>
            <div className={classes.message}>
                {props.message}
            </div>
            <div>
                <button>Like!</button>
            </div>
        </div>
        </>
    )
}

export default Post;