import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let PostData= [
    {message:"Hello, what the fucking shit?", id:1, likeCounter:11},
    {message:"Please, stop the planet!", id:2, likeCounter:12},
    {message:"Hello, what the fucking shit?", id:3, likeCounter:13},
    {message:"Hello, what the fucking shit?", id:4, likeCounter:14},
    {message:"Please, stop the planet!", id:5, likeCounter:16},
    {message:"Please, stop the planet!", id:6, likeCounter:15},
]
let Posts = PostData.map( message => {
    return <Post message={message.message}
                likeCounter={message.likeCounter}
                id={message.id}/>
})


const MyPosts = () => {
    return (
        <>
        <div className={classes.post}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div>
                <button>Post!</button>
            </div>
            {Posts}  
        </div>
        </>
    )
}

export default MyPosts;