import { useSelector } from "react-redux";
import useLogout from "../hooks/useLogout";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  const { logoutUser } = useLogout();

  return (
    <div className="navbar bg-base-300 shadow-md">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          DevMatch
        </Link>
      </div>
      <div className="flex items-center gap-1">
        {userData && <p>Welcome, {userData?.firstName}</p>}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mx-3"
          >
            <div className="w-10 rounded-full">
              {userData && <img alt="user image" src={userData?.photoUrl} />}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between" to={"/profile"}>
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to={"/connections"}>My Connections</Link>
            </li>
            <li>
              <a onClick={logoutUser}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
