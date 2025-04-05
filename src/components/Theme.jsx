import { useEffect } from "react";
import { useState } from "react";
import { Show } from "react-smart-conditional";

function Theme() {
  const [isDark, setIsDark] = useState(false);




  useEffect(() => {
    document.documentElement.classList.toggle("Dark-mode")
  },[isDark])
  return (
    <button className="theme-btn" onClick={() => setIsDark((s) => !s)}>
      <Show>
        <Show.If condition={isDark} as={"span"}>
          ☀️
        </Show.If>
        <Show.Else>🌙</Show.Else>
      </Show>
    </button>
  );
}

export default Theme;
