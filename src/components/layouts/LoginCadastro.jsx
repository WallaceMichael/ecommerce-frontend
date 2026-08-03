import { useTranslation } from "react-i18next";

const LoginCadastro = () => {
  const { t } = useTranslation();

  return (
    <div className="login-cadastro">
      <a href="/login">{t("auth.login")}</a>
      <span className="login-cadastro-divider">|</span>
      <a href="/cadastro">{t("auth.signup")}</a>
    </div>
  );
};

export default LoginCadastro;