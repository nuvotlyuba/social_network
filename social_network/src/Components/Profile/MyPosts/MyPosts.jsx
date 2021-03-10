import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <>
        <div className={classes.post}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            
            <button>Post!</button>
        </div>
        <Post props={"Hello!"} />
        
        </>
    )
}

export default MyPosts;