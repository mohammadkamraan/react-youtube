import { FC } from "react";

import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes["icons-container"]}>
        {/* burger menu */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={classes["burger-menu"]}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
        {/* youtube logo */}
        <div className={classes["youtube-logo"]}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 48 48'
            width='480px'
            height='480px'
          >
            <path
              fill='#FF3D00'
              d='M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z'
            />
            <path fill='#FFF' d='M20 31L20 17 32 24z' />
          </svg>
          <h1>Youtube</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
