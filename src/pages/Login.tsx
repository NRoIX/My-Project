import {
  FC,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { routes } from "../route";
import { AuthContext } from "src/provider";
import { useTranslation } from "react-i18next";

export const Login: FC = () => {
  const { user, login } = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleLogin = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      login(email, password);
    },
    [email, password, login]
  );
  const {t} = useTranslation();

  useEffect(() => {
    if (!user) return;

    history.push(user.isAdmin ? routes.dashboard : routes.home);
  }, [user, history]);

  return (
    <section>
      <div className="container h-full px-5 py-36  ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form action="#" onSubmit={handleLogin}>
              <div className="flex flex-col ">
                <h3 className="text-center mb-4 text-xl font-bold">Login</h3>
                <div className="flex flex-col mb-4">
                  <input
                    type="text"
                    className="border px-3 py-2  rounded-md "
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className="border px-3 py-2 rounded-md w-full"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value.trim())}
                    />

                    <button
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 logineye  "
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
                </div>

                <div className="flex justify-center flex-grow">
                  <button
                    type="submit"
                    className="border px-5 py-2 rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110 "
                  >
                   {t("common.login")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
