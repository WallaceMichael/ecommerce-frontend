import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        type="button"
        className={i18n.language === "pt" ? "active" : ""}
        onClick={() => changeLanguage("pt")}
      >
        PT
      </button>
      <span className="language-divider">|</span>
      <button
        type="button"
        className={i18n.language === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;