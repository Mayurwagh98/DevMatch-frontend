import useIgnore from "../hooks/useIgnore";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import ToolTip from "./ToolTip";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, age, photoUrl, about, skills } = user;
  const { handleIgnore } = useIgnore();

  return (
    user && (
      <div className="card bg-base-300 w-96 shadow-sm min-h-[30rem] mx-auto my-5">
        <figure className="h-[15rem]">
          <img
            src={photoUrl}
            alt="image"
            className="w-full h-full object-fit"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{age}</p>
          <p>{about}</p>
          <p>{skills}</p>
          <div className="card-actions justify-center items-center w-full">
            <ToolTip
              children={
                <button
                  className="flex justify-center items-center p-2 cursor-pointer border border-gray-600 rounded-md mx-2"
                  onClick={() => handleIgnore("ignored", _id)}
                >
                  <FcDislike className="text-2xl" />
                </button>
              }
              text="Ignore"
            />
            <ToolTip
              children={
                <button
                  className="flex justify-center items-center p-2 cursor-pointer border border-gray-600 rounded-md"
                  onClick={() => handleIgnore("interested", _id)}
                >
                  <FcLike className="text-2xl" />
                </button>
              }
              text="Interested"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
