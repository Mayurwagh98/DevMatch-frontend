import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/authSlices/loginSlice";
import Toast from "./Toast";

const UpdateProfile = ({ user: userData }) => {
  const dispatch = useDispatch();
  const [profileMessage, setProfileMessage] = useState("");
  const [profileUpdateData, setProfileUpdateData] = useState({
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    photoUrl: userData?.photoUrl,
    age: userData?.age,
    skills: userData?.skills,
    about: userData?.about,
  });

  const { firstName, lastName, age, photoUrl, skills, about } =
    profileUpdateData;

  const updateProfile = async () => {
    try {
      const { data } = await axios.patch(
        BASE_URL + "/profile/edit",
        profileUpdateData,
        { withCredentials: true }
      );
      if (data.success) {
        dispatch(addUser(data.loggedInUser));
        setProfileMessage(data.message);
      }
      setTimeout(() => {
        setProfileMessage("");
      }, 3000);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      {profileMessage && <Toast text={profileMessage} />}
      <div className="flex mx-3 w-full">
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
                  value={firstName}
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
                  value={lastName}
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
                  value={photoUrl}
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
                  value={age}
                  onChange={(e) =>
                    setProfileUpdateData({
                      ...profileUpdateData,
                      age: e.target.value,
                    })
                  }
                />
              </label>

              <textarea
                className="textarea"
                placeholder="something about you"
                value={about}
                onChange={(e) =>
                  setProfileUpdateData({
                    ...profileUpdateData,
                    about: e.target.value,
                  })
                }
              ></textarea>

              <label className="input validator my-2">
                <input
                  type="text"
                  placeholder="Enter your skills"
                  required
                  value={skills}
                  onChange={(e) =>
                    setProfileUpdateData({
                      ...profileUpdateData,
                      skills: e.target.value,
                    })
                  }
                />
              </label>
              <div className="card-actions justify-end my-3">
                <button className="btn btn-primary" onClick={updateProfile}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-[150px]">
          <p className="mt-10">Your profile will look like this:</p>
          <UserCard
            user={{ firstName, lastName, age, photoUrl, about, skills }}
          />
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
