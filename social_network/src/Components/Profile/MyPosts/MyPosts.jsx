import classes from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
// debugger;
    let Posts = props.posts.map( posts => {
        return <Post message={posts.message}
                    likeCounter={posts.likeCounter}
                    id={posts.id}/>
    })

    return (
        <>
        <div className={classes.post}>
            <textarea name="txt" id="" cols="30" rows="10"></textarea>
            <div>
                <button>Post!</button>
            </div>
            {Posts}  
        </div>
        </>
    )
}

export default MyPosts;