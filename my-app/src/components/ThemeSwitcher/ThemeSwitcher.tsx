import React, { ChangeEvent, useState } from "react";
import cn from "classnames";

import { useTheme } from "../../hooks/useTheme";

import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher: React.FC = () => {
  const { isDark, setIsDark } = useTheme();
  const [pointer, setPointer] = useState("enable dark theme");

  const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDark(event.target.checked);
    if (isDark) setPointer("enable dark theme");
    if (!isDark) setPointer("turn off dark theme");
  };

  return (
    <div className={styles.CheckboxContainer}>
      <input
        type="checkbox"
        className={styles.Checkbox}
        id="checkbox"
        onChange={toggleTheme}
      />
      <label
        htmlFor="checkbox"
        className={cn({
          [styles.LabelDark]: isDark,
        })}
      >
        {pointer}
      </label>
    </div>
  );
};
