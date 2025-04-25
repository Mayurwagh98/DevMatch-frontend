import { useSelector } from "react-redux";
import useGetMyFeed from "../hooks/useGetMyFeed";
import UserCard from "./UserCard";

const Feed = () => {
  const { feed } = useSelector((state) => state.feed);
  useGetMyFeed();
  if (!feed)
    return (
      <h1 className="text-xl font-bold text-center mt-7">No feed found</h1>
    );
  if (!feed.length)
    return (
      <h1 className="text-xl font-bold text-center mt-7">No feed found</h1>
    );
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
