import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { LOCAL_STORAGE_IS_AUTH_KEY } from "../const";
import { routes } from "../route";

const credentials = {
  email: "xuy",
  password: "xuy",
};

type LoginProps = {
  isAuthenticated: boolean;
};

export const Login: FC<LoginProps> = ({ isAuthenticated }) => {
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setEmailError("");
      setPasswordError("");

      let isValid = true;

      if (email === "") {
        setEmailError("Email is required");
        isValid = false;
      } else if (email !== credentials.email) {
        setEmailError("Email is incorrect");
        isValid = false;
      }

      if (password === "") {
        setPasswordError("Password is required");
        isValid = false;
      } else if (password !== credentials.password) {
        setPasswordError("Password is incorrect");
        isValid = false;
      }

      if (!isValid) return;

      localStorage.setItem(LOCAL_STORAGE_IS_AUTH_KEY, "true");
      window.dispatchEvent(new Event("storage"));

      history.push(routes.home);
    },
    [email, password, history]
  );

  useEffect(() => {
    if (!isAuthenticated) return;

    history.push(routes.home);
  }, [isAuthenticated, history]);

  return (
    <div className="absolute left-1/2 top-1/2 border p-4 rounded-md transform -translate-x-1/2 -translate-y-1/2">
      <form action="#" onSubmit={handleSubmit}>
        <div className="flex flex-col w-[320px]">
          <h3 className="text-center mb-4 text-xl font-bold">Login</h3>
          <div className="flex flex-col mb-4">
            <input
              type="text"
              className="border px-2 py-1 rounded-md"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            {emailError && <span className="text-red-600">{emailError}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="border px-2 py-1 rounded-md w-full"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
              <button
                className="absolute right-5 top-1/2 transform -translate-y-1/2"
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </button>
            </div>

            {passwordError && (
              <span className="text-red-600">{passwordError}</span>
            )}
          </div>

          <div className="flex justify-center flex-grow">
            <button type="submit" className="border px-4 py-2 rounded-lg">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
