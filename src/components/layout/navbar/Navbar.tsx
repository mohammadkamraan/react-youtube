import { FC, memo } from "react";

import NavbarBrand from "../../UI/navbar-brand/NavbarBrand";
import NavbarOptions from "../../UI/navbar-options/NavbarOptions";
import SearchForm from "../../UI/search-form/SearchForm";

import styles from "./navbar.module.scss";

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <NavbarBrand />
      <SearchForm />
      <NavbarOptions />
    </nav>
  );
};

export default memo(Navbar);
