import { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { LOCAL_STORAGE_IS_AUTH_KEY } from "../const";
import { routes } from "../route";

type NavProps = {
  isAuthenticated: boolean;
};

export const Nav: FC<NavProps> = ({ isAuthenticated }) => {
  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_IS_AUTH_KEY);
    window.dispatchEvent(new Event("storage"));
  }, []);

  return (
    <div className="flex items-center justify-between p-4 border-b mb-4">
      <Link to={routes.home} className="hover:underline">
        Home
      </Link>
      {isAuthenticated && (
        <button
          type="button"
          className="border px-4 py-2 rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
};
