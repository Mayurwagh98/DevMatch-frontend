import { useSelector } from "react-redux";
import useGetMyFeed from "../hooks/useGetMyFeed";
import UserCard from "./UserCard";

const Feed = () => {
  const { feed } = useSelector((state) => state.feed);
  useGetMyFeed();
  return (
    <>
      {feed && (
        <div className="flex justify-center items-center mt-10">
          <UserCard user={feed[0]} />
        </div>
      )}
    </>
  );
};

export default Feed;
