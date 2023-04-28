import { FC, useCallback, useContext, useEffect, useMemo } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { routes } from "../../route";
import { AuthContext, ThemeContext } from "src/provider";
import { BsFillSunFill, BsFillMoonFill, BsFillCartFill } from "react-icons/bs";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { useTranslation } from "react-i18next";
import { LANGUAGES, LOCAL_STORAGE_LANGUAGE_KEY, i18n } from "src/services";
import logo from "src/img/logo.png";
import "./nav.css";
import { useCart } from "react-use-cart";

export const Nav: FC = () => {
  const { t } = useTranslation();
  const { mode, setMode } = useContext(ThemeContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const { totalItems } = useCart();

  const history = useHistory();
  const location = useLocation();

  const shouldShowDashboardButton = useMemo(
    () => !!user?.isAdmin && location.pathname !== routes.dashboard,
    [user, location]
  );

  const shouldShowCart = useMemo(
    () => isAuthenticated && location.pathname !== routes.cart,
    [isAuthenticated, location]
  );

  const handleGoToCart = useCallback(() => {
    history.push(routes.cart);
  }, [history]);

  const handleLogin = useCallback(() => {
    history.push(routes.auth);
  }, [history]);

  const handleGoToDashboard = useCallback(() => {
    history.push(routes.dashboard);
  }, [history]);

  const handleLanguageChange = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, lng);
  }, []);

  useEffect(() => {
    initTE({ Collapse, Dropdown });
  }, []);

  return (
    <nav
      className="nav top-0 flex-no-wrap fixed z-50 flex w-full items-center justify-between  py-2 shadow-md shadow-black/5  dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <Link
            to={routes.home}
            className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0 max-w-xs transition duration-300 ease-in-out hover:scale-110"
            href="#"
          >
            <img src={logo} style={{ height: 45 }} alt="logo" />
          </Link>

          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row "
            data-te-navbar-nav-ref
          >
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                to={routes.home}
                className="disabled:text-black/30 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 "
                data-te-nav-link-ref
              > {t("navbar.home")}
              </Link>
            </li>

            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                to={routes.Products}
                className="disabled:text-black/30 dark:hover:text-neutral-300 dark:focus:text-neutral-300   lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400  "
                href="#"
                data-te-nav-link-ref
              >
                {t("navbar.products")}
              </Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              {shouldShowDashboardButton && (
                <button
                  type="button"
                  className="disabled:text-black/30 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  onClick={handleGoToDashboard}
                  data-te-nav-link-ref
                >
                  Dashboard
                </button>
              )}
            </li>

            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                to={routes.aboutus}
                className="disabled:text-black/30   dark:hover:text-neutral-300 dark:focus:text-neutral-300   lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 "
                data-te-nav-link-ref
              >
                {t("navbar.aboutus")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center">
          <div className="flex justify-center items-center gap-4">
            <button
              type="button"
              className="border px-4 py-2 rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110"
              onClick={isAuthenticated ? logout : handleLogin}
            >
              {t(isAuthenticated ? "common.logout" : "common.login")}
            </button>
            {user && <p className="text-red-400 username">{user.name}</p>}
            {shouldShowCart && (
              <button
                type="button"
                onClick={handleGoToCart}
                className="ax-w-xs transition duration-300 ease-in-out hover:scale-110 cart flex items-center gap-1"
              >
                <BsFillCartFill size="26" />({totalItems})
              </button>
            )}
            <div
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "light" ? (
                <BsFillSunFill size="26" />
              ) : (
                <BsFillMoonFill color="#F1F5FB" size="26" />
              )}
            </div>
            <div className="flex gap-2">
              {LANGUAGES.map((language) => (
                <button
                  key={language}
                  className={`uppercase ${
                    language === i18n.language ? "text-red-400 languagebtn" : ""
                  }`}
                  onClick={() => handleLanguageChange(language)}
                >
                  {language}
                </button>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};
