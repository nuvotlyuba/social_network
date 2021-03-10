import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Posts = () => {
  return (
    <div className={classes.profile}>
      <div>
        <div className={classes.box}></div>
      </div>
      <div className={classes.userInfo}>
        <div className={classes.avatar}>
          <img width="150" src="https://d8mkdcmng3.imgix.net/90ae/collectables-and-hobbies-gothic-and-fantasy-home-and-decor-signs-and-wall-art-looney-tunes-daffy-duck-canvas.jpg?auto=format&bg=0FFF&fit=fill&h=600&q=100&w=600&s=69449116a2a184023ef978eeb5571958" alt=""/>
        </div>
        <div className={classes.description}>
            <h1>Duffy Duck</h1>
            <p>Sex:Male</p>
            <p>Date of Birth: 15 september</p>
            <p>City: Kiev</p>
            <p>Web Site: hollyshit.com</p>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Posts;
