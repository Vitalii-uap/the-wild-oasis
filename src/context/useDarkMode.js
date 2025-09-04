import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("DarkModeContext was used of DarkModeProvider");
  }
  return context;
}
