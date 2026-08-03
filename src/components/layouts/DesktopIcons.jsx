// src/components/DesktopIcons/DesktopIcons.jsx
import cartIcon from "../../assets/icons/cart.svg";
import userIcon from "../../assets/icons/user.svg";
import vectorIcon from "../../assets/icons/vector.svg";

const DesktopIcons = () => (
  <div className="d-none d-lg-flex align-items-center gap-2">
    <a href="/cart" className="icon-link">
      <img src={cartIcon} alt="Cart" />
    </a>
    {/* <a href="/account" className="icon-link">
      <img src={userIcon} alt="User" />
    </a> */}
    <a href="/vector" className="icon-link">
      <img src={vectorIcon} alt="Vector" />
    </a>
  </div>
);

export default DesktopIcons;