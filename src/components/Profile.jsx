import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
  const { userData } = useSelector((state) => state.user);

  return userData && <UpdateProfile user={userData} />;
};
export default Profile;
