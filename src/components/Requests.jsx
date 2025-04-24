import useRequestsReceived from "../hooks/useRequestsReceived";

const Requests = () => {
  useRequestsReceived();
  return (
    <div>
      <h1>Requests</h1>
    </div>
  );
};

export default Requests;
