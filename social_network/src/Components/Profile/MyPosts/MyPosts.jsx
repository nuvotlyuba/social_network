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


const MyPosts = () => {
    return (
        <>
        <div className={classes.post}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div>
                <button>Post!</button>
            </div>
        </div>
        <Post message={PostData[0].message} likeCounter={PostData[0].likeCounter} id={PostData[0].id}/>
        <Post message={PostData[1].message} likeCounter={PostData[1].likeCounter} id={PostData[1].id} />
        <Post message={PostData[2].message} likeCounter={PostData[2].likeCounter} id={PostData[2].id} />
        <Post message={PostData[3].message} likeCounter={PostData[3].likeCounter} id={PostData[3].id} />
        <Post message={PostData[4].message} likeCounter={PostData[4].likeCounter} id={PostData[4].id} />
        <Post message={PostData[5].message} likeCounter={PostData[5].likeCounter} id={PostData[5].id} />
        
        </>
    )
}

export default MyPosts;