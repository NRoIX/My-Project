import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { routes } from "src/route";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
};

export type AuthContextValues = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const isUser = (arg: unknown): arg is User => {
  if (!arg || typeof arg !== "object") return false;
  const { name, email, password, id } = arg as Partial<User>;

  return (
    typeof id === "string" &&
    typeof name === "string" &&
    typeof email === "string" &&
    typeof password === "string"
  );
};

const LOCAL_STORAGE_USER_KEY = "user";

const USERS = [
  {
    id: "1",
    name: "Emil",
    email: "admin",
    password: "admin",
    isAdmin: true,
  },
  {
    id: "2",
    name: "Emil 3",
    email: "user",
    password: "user",
    isAdmin: false,
  },
  {
    id: "3",
    name: "Emil 3",
    email: "user 2",
    password: "user 2",
    isAdmin: false,
  },
] as const satisfies readonly User[];

export const AuthContext = createContext<AuthContextValues>({
  user: null,
  isAuthenticated: false,
  login: () => null,
  logout: () => null,
});

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const cachedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (!cachedUser) return null;

      const parsedUser = JSON.parse(cachedUser);

      return isUser(parsedUser) ? parsedUser : null;
    } catch {
      return null;
    }
  });

  const history = useHistory();

  const isAuthenticated = useMemo(() => !!user, [user]);

  const handleUserChange = useCallback((newUser: User | null) => {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(newUser));

    setUser(newUser);
  }, []);

  const handleLogin = useCallback(
    (email: string, password: string) => {
      const foundUser = USERS.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) return;

      handleUserChange(foundUser);
    },
    [handleUserChange]
  );

  const handleLogout = useCallback(() => {
    handleUserChange(null);
  }, [handleUserChange]);

  useEffect(() => {
    if (isAuthenticated) return;

    history.push(routes.auth);
  }, [isAuthenticated, history]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
