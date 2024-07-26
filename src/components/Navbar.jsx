import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from '../components/p3.jpg';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(window.location.pathname);
  }, []);

  const toggleHamburgerIcon = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-white h-16">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <Link to="/">
          <div>
            <img
              className="w-40 cursor-pointer"
              src={logo}
              alt="..."
            />
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
                to="/about-us"
                className={`hover:text-blue-700 ${
                  activeTab === '/about-us' ? 'border-b-4 p-3 border-blue-600 text-lg text-blue-800' : ''
                }`}
                onClick={() => setActiveTab('/about-us')}
              >
                Why Pebble
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`hover:text-blue-700 ${
                  activeTab === '/products' ? 'border-b-4 p-3 border-blue-600 text-lg text-blue-800' : ''
                }`}
                onClick={() => setActiveTab('/products')}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/solutions"
                className={`hover:text-blue-700 ${
                  activeTab === '/solutions' ? 'border-b-4 p-3 border-blue-600 text-lg text-blue-800' : ''
                }`}
                onClick={() => setActiveTab('/solutions')}
              >
                Solution
              </Link>
            </li>
            <li>
              <Link
                to="/res"
                className={`hover:text-blue-700 ${
                  activeTab === '/res' ? 'border-b-4 p-3 border-blue-600 text-lg text-blue-800' : ''
                }`}
                onClick={() => setActiveTab('/res')}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className={`hover:text-blue-700 ${
                  activeTab === '/pricing' ? 'border-b-4 p-3 border-blue-600 text-lg text-blue-800' : ''
                }`}
                onClick={() => setActiveTab('/pricing')}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`hover:text-blue-700 ${
                  activeTab === '/contact-us' ? 'border-b-4 p-3 border-blue-600 text-lg text-blue-800' : ''
                }`}
                onClick={() => setActiveTab('/contact-us')}
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
