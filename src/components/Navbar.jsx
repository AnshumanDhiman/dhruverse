

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeLink =
    "group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-theme_2";
  const inactiveLink =
    "group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-theme_2 before:origin-right before:scale-x-0  before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100";

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    document.getElementById("hamburger").checked = false;
  };

  const handleMenuLinkClick = () => {
    closeMenu();
  };

  // eslint-disable-next-line no-unused-vars
  const handleDropdownLinkClick = () => {
    closeMenu();
    toggleDropdown();
  };

  return (
    <div
      className={`shadow-sm fixed w-full top-0 transition-all duration-300 z-50 ${
        isSticky ? "bg-white shadow-xl z-[999]" : ""
      }`}
    >
      <header>
        <div className="z-20 bg-theme_1">
          <div className="px-4 md:px-6 lg:mx-auto lg:px-24 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <Link to="">
                  <div className="flex justify-center items-center">
                    <img src={logo} alt="logo" className="w-20 md:w-32 lg:w-32" />
                  </div>
                </Link>
              </div>

              <div className="flex items-center justify-end border-l lg:border-l-0 z-20">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-4 -mr-4 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-theme_2 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-theme_2 transition duration-300"
                  ></div>
                </label>

                <div className="peer-checked:translate-x-0 z-50 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-theme_1 border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul className="px-4 pt-12 text-white space-y-4 md:px-6 lg:space-y-0 lg:flex lg:space-x-6 lg:pt-0">
                    <li>
                        <NavLink
                          to=""
                          className={({ isActive }) =>
                            isActive ? `${activeLink}` : `${inactiveLink}`
                          }
                          onClick={handleMenuLinkClick}
                        >
                          <span className="relative text-white">Home</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="about"
                          className={({ isActive }) =>
                            isActive ? `${activeLink}` : `${inactiveLink}`
                          }
                          onClick={handleMenuLinkClick}
                        >
                          <span className="relative group-hover:text-white">
                            About Us
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="contact"
                          className={({ isActive }) =>
                            isActive ? `${activeLink}` : `${inactiveLink}`
                          }
                          onClick={handleMenuLinkClick}
                        >
                          <span className="relative group-hover:text-white">
                            Contact
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

