import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import logo from "../images/Logo/p24.jpg";
import rightArrow from "../images/Navbar/right-arrow.svg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false); // state for dropdown in mobile

  const toggleHamburgerIcon = () => {
    setNavOpen(!navOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen); // toggle dropdown in mobile view
  };

  useEffect(() => {
    setActiveTab(window.location.pathname);
  }, []);

  return (
    <header className="bg-white h-16">
      <nav className="flex justify-between items-center w-[92%] mx-auto animate-nav-load">
        <Link to="/">
          <div>
            <img className="w-40 cursor-pointer" src={logo} alt="..." />
          </div>
        </Link>

        <div
          className={`z-20 duration-700 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            navOpen ? "top-[-9%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li className="transform scale-0 animate-nav-link-load fill-mode-forwards">
              <Link
                to="/"
                className={`hover:text-blue-700 ${
                  activeTab === "/"
                    ? "border-b-2 md:pb-2 border-pebblePrimary text-pebblePrimary"
                    : ""
                } transition-all duration-300 ease-in-out hover:border-b-2 hover:md:pb-2 hover:border-pebblePrimary hover:text-pebblePrimary`}
                onClick={() => setActiveTab("/")}
              >
                Home
              </Link>
            </li>
            <li className="transform scale-0 animate-nav-link-load fill-mode-forwards">
              <Link
                to="/about-us"
                className={`hover:text-blue-700 ${
                  activeTab?.includes("/about-us")
                    ? "border-b-2 md:pb-2 border-pebblePrimary text-pebblePrimary"
                    : ""
                } transition-all duration-300 ease-in-out hover:border-b-2 hover:md:pb-2 hover:border-pebblePrimary hover:text-pebblePrimary`}
                onClick={() => setActiveTab("/about-us")}
              >
                Why Pebble
              </Link>
            </li>

            {/* Products with Dropdown */}
            <li
              className="transform scale-0 animate-nav-link-load fill-mode-forwards relative md:hover:cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)} // open dropdown on hover in desktop
              onMouseLeave={() => setDropdownOpen(false)} // close dropdown on mouse leave in desktop
            >
              <div
                onClick={handleDropdownToggle} // open/close dropdown on click in mobile
                className={`${
                  activeTab?.includes("/products")
                    ? "border-b-2 md:pb-2 border-pebblePrimary text-pebblePrimary"
                    : ""
                } flex items-center transition-all duration-300 ease-in-out hover:border-b-2 hover:md:pb-2 hover:border-pebblePrimary hover:text-pebblePrimary cursor-pointer`}
              >
                <span>Products</span>
                {/* <img
                  src={rightArrow}
                  alt="right-arrow"
                  className="h-5 w-5 mt-0.5"
                /> */}
              </div>

              {/* Dropdown Menu */}
              <ul
                className={`md:absolute w-max md:top-full md:left-0 md:bg-white md:shadow-lg md:p-4 md:space-y-4 transition-all duration-300 ease-in-out ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    to="/products/paver-blocks"
                    className="hover:text-blue-700"
                    onClick={() => setActiveTab("/products/paver-blocks")}
                  >
                    Paver Blocks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/solid-blocks"
                    className="hover:text-blue-700"
                    onClick={() => setActiveTab("/products/solid-blocks")}
                  >
                    {`Solid Blocks`}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/projects"
                    className="hover:text-blue-700"
                    onClick={() => setActiveTab("/products/projects")}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </li>

            <li className="transform scale-0 animate-nav-link-load fill-mode-forwards">
              <Link
                to="/contact-us"
                className={`hover:text-blue-700 ${
                  activeTab?.includes("/contact-us")
                    ? "border-b-2 md:pb-2 border-pebblePrimary text-pebblePrimary"
                    : ""
                } transition-all duration-300 ease-in-out hover:border-b-2 hover:md:pb-2 hover:border-pebblePrimary hover:text-pebblePrimary`}
                onClick={() => setActiveTab("/contact-us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="z-20 flex items-center gap-6">
          <div
            onClick={toggleHamburgerIcon}
            className="cursor-pointer md:hidden"
          >
            <StaticImage
              src="../images/hamburger.svg"
              width={20}
              height={20}
              alt="hambuger-menu"
              className="cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
