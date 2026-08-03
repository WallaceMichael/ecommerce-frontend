// src/components/MobileIcons/MobileIcons.jsx
import cartIcon from "../../assets/icons/cart.svg";
import userIcon from "../../assets/icons/user.svg";

const MobileIcons = () => (
  <div className="nav-icons-mobile d-flex align-items-center gap-2 d-lg-none ms-auto me-2">
    <a href="/cart" className="icon-link">
      <img src={cartIcon} alt="Cart" />
    </a>
    <a href="/account" className="icon-link">
      <img src={userIcon} alt="User" />
    </a>
  </div>
);

export default MobileIcons;