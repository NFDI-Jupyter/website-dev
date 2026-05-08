import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeSwitch() {
  return (
    <button onClick={() => {}}>
      {document.documentElement.getAttribute("data-theme") === "light" ? (
        <LuMoon />
      ) : (
        <LuSun />
      )}
    </button>
  );
}
