const UserCard = ({ user }) => {
  const { firstName, lastName, age, photoUrl, about, skills } = user;

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
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
