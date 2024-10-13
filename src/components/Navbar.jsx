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
    <header>
      {/* Top Bar */}
      <div className="bg-gray-100 h-7 ">
        <div className="ml-2.5 md:ml-5 flex h-full items-center gap-2 md:gap-5">
          <span className="flex items-center gap-1">
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="#6b7280"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-2.5 h-2.5 md:w-4 md:h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              ></path>
            </svg>

            <a
              href="mailto:contact@velavanenterprise.com"
              className="text-[8px] md:text-xs text-gray-500"
            >
              contact@velavanenterprise.com
            </a>
          </span>
          <span className="flex items-center gap-1">
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="#6b7280"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-2.5 h-2.5 md:w-3 md:h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              ></path>
            </svg>

            <div className="flex items-center gap-2 md:gap-4">
              <a href="tel:+918883332822" className="text-xs text-gray-500">
                <h2 className="text-[8px] md:text-sm"> +91 888 333 2822 </h2>
              </a>
              <a
                href="tel:+918883337674"
                className="text-xs lg:ml-6 text-gray-500"
              >
                <h2 className="text-[8px] md:text-sm"> +91 888 333 7674 </h2>
              </a>{" "}
            </div>
          </span>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white h-16">
        <nav className="flex justify-between items-center w-[92%] mx-auto animate-nav-load">
          {/* Existing navbar content */}
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
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6">
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
                  } w-fit flex items-center transition-all duration-300 ease-in-out hover:border-b-2 hover:md:pb-2 hover:border-pebblePrimary hover:text-pebblePrimary cursor-pointer`}
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
                  className={`md:absolute w-max md:top-full md:left-0 md:bg-white md:shadow-lg p-2 md:p-4 md:space-y-4 transition-all duration-300 ease-in-out ${
                    dropdownOpen
                      ? "md:opacity-100 md:visible md:translate-y-0 max-h-[300px]"
                      : "md:opacity-0 md:invisible md:translate-y-[-10px] max-h-0"
                  } ${
                    dropdownOpen ? "block" : "hidden md:block"
                  } overflow-hidden`}
                >
                  <li className="mb-3 md:mb-2">
                    <Link
                      to="/products/paver-blocks"
                      className="hover:text-blue-700"
                      onClick={() => setActiveTab("/products/paver-blocks")}
                    >
                      Paver Blocks
                    </Link>
                  </li>
                  <li className="mb-3 md:mb-2">
                    <Link
                      to="/products/solid-blocks"
                      className="hover:text-blue-700"
                      onClick={() => setActiveTab("/products/solid-blocks")}
                    >
                      Solid Blocks
                    </Link>
                  </li>
                  {/* <li className="mb-3 md:mb-2">
                    <Link
                      to="/products/flyash-bricks"
                      className="hover:text-blue-700"
                      onClick={() => setActiveTab("/products/projects")}
                    >
                      Flyash Bricks
                    </Link>
                  </li> */}
                </ul>
              </li>

              <li className="transform scale-0 animate-nav-link-load fill-mode-forwards">
                <Link
                  to="/projects"
                  className={`hover:text-blue-700 ${
                    activeTab?.includes("/projects")
                      ? "border-b-2 md:pb-2 border-pebblePrimary text-pebblePrimary"
                      : ""
                  } transition-all duration-300 ease-in-out hover:border-b-2 hover:md:pb-2 hover:border-pebblePrimary hover:text-pebblePrimary`}
                  onClick={() => setActiveTab("/contact-us")}
                >
                  Projects
                </Link>
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
      </div>
    </header>
  );
};

export default Navbar;
