import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useState,
} from "react";

export const THEME_MODE = ["dark", "light"] as const;

export type ThemeMode = typeof THEME_MODE[number];

export const isThemeMode = (arg: unknown): arg is ThemeMode =>
  THEME_MODE.includes(arg as ThemeMode);

export type ThemeContextValues = {
  mode: ThemeMode;
  setMode: (newMode: ThemeMode) => void;
};

const THEME_CONTEXT_DEFAULT_VALUE: ThemeContextValues = {
  mode: "light",
  setMode: () => null,
};

const LOCAL_STORAGE_THEME_MODE_KEY = "mode";

const getThemeClassName = (mode: ThemeMode): string => `${mode}-mode`;

export const ThemeContext = createContext<ThemeContextValues>(
  THEME_CONTEXT_DEFAULT_VALUE
);

const switchBodyThemeClassName = (prevMode: ThemeMode, newMode?: ThemeMode) => {
  if (!newMode) {
    document.body.classList.add(getThemeClassName(prevMode));
  } else {
    document.body.classList.remove(getThemeClassName(prevMode));
    document.body.classList.add(getThemeClassName(newMode));
  }
};

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const cachedMode = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY);

    const modeValue = isThemeMode(cachedMode) ? cachedMode : "light";

    switchBodyThemeClassName(modeValue);

    return modeValue;
  });

  const handleChange = useCallback(
    (newMode: ThemeMode) => {
      localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, newMode);

      switchBodyThemeClassName(mode, newMode);

      setMode(newMode);
    },
    [mode]
  );

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode: handleChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
