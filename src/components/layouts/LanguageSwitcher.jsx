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
        className={i18n.language === "pt-BR" ? "active" : ""}
        onClick={() => changeLanguage("pt-BR")}
      >
        PT
      </button>
      <span className="language-divider">|</span>
      <button
        type="button"
        className={i18n.language === "en-US" ? "active" : ""}
        onClick={() => changeLanguage("en-US")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;