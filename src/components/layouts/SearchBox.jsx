// src/components/layouts/SearchBox.jsx
import { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const SearchBox = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded(true);
  };

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`search-box-wrapper ${isExpanded ? "expanded" : ""}`}
    >
      <button
        type="button"
        className="search-icon-toggle"
        onClick={handleToggle}
        aria-label="Search"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>

      <Form className="search-box">
        <Form.Control
          ref={inputRef}
          type="search"
          placeholder={t("nav.searchPlaceholder")}
          className="search-input"
        />
      </Form>
    </div>
  );
};

export default SearchBox;