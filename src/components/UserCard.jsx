const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, photoUrl, about } = user;

  return (
    user && (
      <div className="card bg-base-300 w-96 shadow-sm h-[30rem] mx-auto my-5">
        <figure>
          <img
            src={photoUrl}
            alt="image"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{age + " " + gender}</p>
          <p>{about}</p>
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
