import { Link } from "react-router-dom";
import useGetConnections from "../hooks/useGetConnections";

const MyConnections = () => {
  const { connections } = useGetConnections();

  if (!connections)
    return (
      <h1 className="text-xl font-bold text-center mt-7">
        No connections found
      </h1>
    );

  return (
    <>
      <div className="w-1/2 flex flex-col justify-center items-center space-y-2 mx-auto mt-6">
        {connections.map(
          ({ _id, firstName, lastName, age, about, photoUrl, skills }) => (
            <div
              key={_id}
              className="flex items-center space-x-2 w-full min-h-[5rem] p-4 bg-base-300 rounded-md my-2"
            >
              <img
                src={photoUrl}
                alt="profile pic"
                className="w-30 h-30 rounded-full mr-4 object-fit"
              />
              <div className="flex flex-col space-y-1">
                <span className="font-bold">
                  {firstName} {lastName}
                </span>
                <span>{age}</span>
                <span className="text-sm">{about}</span>
                <span className="text-sm text-gray-500">
                  {skills.join(", ")}
                </span>
              </div>
              <Link
                to={`/chat/${_id}`}
                className="bg-purple-600 p-2 rounded-md"
              >
                Chat
              </Link>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default MyConnections;
