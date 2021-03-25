import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {

  return (
    <div className={classes.profile}>
      <ProfileInfo />

      <MyPosts posts={props.state.posts}  />
    </div>
  );
};

export default Profile;
