import { useEffect, useState } from "react";

const UpdateProfile = ({ user: userData }) => {
  const [profileUpdateData, setProfileUpdateData] = useState({
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    photoUrl: userData?.photoUrl,
    age: userData?.age,
    gender: userData?.gender,
    skills: userData?.skills,
  });

  return (
    <div className="flex justify-center items-center mx-auto my-24">
      <div className="card bg-neutral text-neutral-content min-h-[300px] w-96">
        <div className="card-body items-center text-center">
          <h1 className="text-2xl font-bold">Profile</h1>
          {/* firstname */}
          <label className="input validator my-2">
            <input
              type="text"
              placeholder="Enter your firstname"
              required
              value={profileUpdateData?.firstName}
              onChange={(e) =>
                setProfileUpdateData({
                  ...profileUpdateData,
                  firstName: e.target.value,
                })
              }
            />
          </label>
          {/* last name */}
          <label className="input validator my-2">
            <input
              type="text"
              placeholder="Enter your lastname"
              required
              value={profileUpdateData?.lastName}
              onChange={(e) =>
                setProfileUpdateData({
                  ...profileUpdateData,
                  lastName: e.target.value,
                })
              }
            />
          </label>
          {/* photo url */}
          <label className="input validator my-2">
            <input
              type="text"
              placeholder="Enter your photourl"
              required
              value={profileUpdateData?.photoUrl}
              onChange={(e) =>
                setProfileUpdateData({
                  ...profileUpdateData,
                  photoUrl: e.target.value,
                })
              }
            />
          </label>
          {/* age */}
          <label className="input validator my-2">
            <input
              type="number"
              placeholder="Enter your age"
              required
              value={profileUpdateData?.age}
              onChange={(e) =>
                setProfileUpdateData({
                  ...profileUpdateData,
                  age: e.target.value,
                })
              }
            />
          </label>
          {/* gender */}
          {userData?.gender && (
            <label className="input validator my-2">
              <input
                type="text"
                placeholder="Enter your gender"
                required
                value={profileUpdateData?.gender}
                onChange={(e) =>
                  setProfileUpdateData({
                    ...profileUpdateData,
                    gender: e.target.value,
                  })
                }
              />
            </label>
          )}

          <label className="input validator my-2">
            <input
              type="text"
              placeholder="Enter your skills"
              required
              value={profileUpdateData?.skills}
              onChange={(e) =>
                setProfileUpdateData({
                  ...profileUpdateData,
                  skills: e.target.value,
                })
              }
            />
          </label>
          <div className="card-actions justify-end my-3">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
