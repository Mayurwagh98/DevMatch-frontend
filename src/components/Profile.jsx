import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";
import UserCard from "./UserCard";

const Profile = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    userData && (
      <div className="flex mx-3 w-full">
        <UpdateProfile user={userData} />
        <div className="mr-[150px]">
          <p className="mt-10">Your profile will look like this:</p>
          <UserCard user={userData} />
        </div>
      </div>
    )
  );
};
export default Profile;
