import { useRef } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useSelector } from "react-redux";

const Login = () => {
  const { loginError } = useSelector((state) => state.user);
  const { login } = useLogin();
  const emailRef = useRef("elon@gmail.com");
  const passwordRef = useRef("Elon@1234");

  const handleLogin = async () => {
    const loginData = {
      email: emailRef.current,
      password: passwordRef.current,
    };
    login(loginData);
  };
  return (
    <>
      <div className="flex justify-center items-center mx-auto my-24">
        <div className="card bg-neutral text-neutral-content min-h-[300px] w-[30%]">
          <div className="card-body items-center text-center">
            <h1 className="text-2xl font-bold">Login</h1>
            {/* email */}
            <label className="input validator my-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                onChange={(e) => (emailRef.current = e.target.value)}
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            {/* password */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                onChange={(e) => (passwordRef.current = e.target.value)}
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            <span className="text-red-500 flex justify-start items-start w-full">
              {loginError?.toUpperCase()}
            </span>
            <div className="card-actions justify-end my-3">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
            <div className="divider my-2">OR</div>
            <div className="card-actions justify-end">
              <p>
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-blue-400">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
