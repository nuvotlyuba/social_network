import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Posts = () => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Posts;
