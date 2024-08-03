import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../images/Logo/p24.jpg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(window.location.pathname);

  const toggleHamburgerIcon = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-white h-16">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <Link to="/">
          <div>
            <img className="w-40 cursor-pointer" src={logo} alt="..." />
          </div>
        </Link>

        <div
          className={`duration-700 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            navOpen ? "top-[-9%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
              <Link
                to="/"
                className={`hover:text-blue-700 ${
                  activeTab === "/"
                    ? "border-b-2 md:pb-2 border-primary text-primary"
                    : ""
                } hover:border-b-2 hover:md:pb-2 hover:border-primary hover:text-primary`}
                onClick={() => setActiveTab("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`hover:text-blue-700 ${
                  activeTab?.includes("/about-us")
                    ? "border-b-2 md:pb-2 border-primary text-primary"
                    : ""
                } hover:border-b-2 hover:md:pb-2 hover:border-primary hover:text-primary`}
                onClick={() => setActiveTab("/about-us")}
              >
                Why Pebble
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={` ${
                  activeTab?.includes("/products")
                    ? "border-b-2 md:pb-2 border-primary text-primary"
                    : ""
                } hover:border-b-2 hover:md:pb-2 hover:border-primary hover:text-primary`}
                onClick={() => setActiveTab("/products")}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`hover:text-blue-700 ${
                  activeTab?.includes("/res")
                    ? "border-b-2 md:pb-2 border-primary text-primary"
                    : ""
                } hover:border-b-2 hover:md:pb-2 hover:border-primary hover:text-primary`}
                onClick={() => setActiveTab("/res")}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`hover:text-blue-700 ${
                  activeTab?.includes("/contact-us")
                    ? "border-b-2 md:pb-2 border-primary  text-primary"
                    : ""
                } hover:border-b-2 hover:md:pb-2 hover:border-primary hover:text-primary`}
                onClick={() => setActiveTab("/contact-us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
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
