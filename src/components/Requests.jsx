import useRequestsReceived from "../hooks/useRequestsReceived";

const Requests = () => {
  const { requests } = useRequestsReceived();

  if (!requests)
    return (
      <h1 className="text-xl font-bold text-center mt-7">No requests found</h1>
    );
  return (
    <div>
      <div className="w-1/2 flex flex-col justify-center items-center space-y-2 mx-auto mt-6">
        {requests?.map(({ senderUserId }) => {
          const { _id, firstName, lastName, age, about, photoUrl, skills } =
            senderUserId;
          return (
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
                  {skills && skills.join(", ")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
