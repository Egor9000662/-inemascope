import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function InputSerch() {
  const [searchString, setSearchString] = useState("");
  const focusInput = useRef();
  const onSearch = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSearchString("");
      focusInput.current.blur();
      return;
    }
  };
  const onClickSearch = () => {
    setSearchString("");
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search"
        onChange={onSearch}
        onKeyDown={handleKeyDown}
        ref={focusInput}
        value={searchString}
      />
      <Link
        to={`/search/${searchString}`}
        onClick={onClickSearch}
        className={styles.double_border_button}
      >
        Search
      </Link>
    </div>
  );
}
export default InputSerch;
