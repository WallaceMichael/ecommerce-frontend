import { Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/new-logo-3.svg";
import MobileIcons from "./MobileIcons";
import DesktopIcons from "./DesktopIcons";
import SearchBox from "./SearchBox";
import LanguageSwitcher from "./LanguageSwitcher";
import LoginCadastro from "./LoginCadastro";

const NAV_LINKS = [
  { key: "men", href: "#men" },
  { key: "women", href: "#women" },
  { key: "fragrance", href: "#fragrance" },
  { key: "footwear", href: "#footwear" },
  { key: "kids", href: "#kids" },
];

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" width={120} />
          </Navbar.Brand>

          <MobileIcons />

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="navbar-collapse-custom">
            <Nav className="ms-lg-3 w-lg-auto">
              {NAV_LINKS.map(({ key, href }) => (
                <Nav.Link key={key} href={href}>
                  {t(`nav.${key}`)}
                </Nav.Link>
              ))}
            </Nav>

            <div className="nav-right d-flex align-items-center gap-2 ms-lg-auto w-lg-auto">
              <LanguageSwitcher />
              <LoginCadastro />
              <SearchBox />
              <DesktopIcons />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;