import React from "react";
import logo from "../images/Logo/p24.jpg";
// import Dalmia from "../images/CustomerLogo/dalmia.svg"
// import Ultratec from "../images/CustomerLogo/ultratec.svg"
// import Tamilnadu from "../images/CustomerLogo/tamilnadu.png"
// import Mhrd from "../images/CustomerLogo/mhrd.jpeg"
// import Make from "../images/CustomerLogo/make.png"
import Gsquare from "../images/CustomerLogo/gsquare.png"
import Zoho from "../images/CustomerLogo/zoho.svg"
//import Bni from "../images/CustomerLogo/bni.jpg"
import logo1 from "../images/CustomerLogo/logo1.jpg"
import logo2 from "../images/CustomerLogo/logo2.png"
import logo3 from "../images/CustomerLogo/logo3.png"
import logo4 from "../images/CustomerLogo/logo4.png"
import logo5 from "../images/CustomerLogo/logo5.webp"
import logo6 from "../images/CustomerLogo/logo6.png"
import logo7 from "../images/CustomerLogo/logo7.webp"
import logo8 from "../images/CustomerLogo/logo8.svg"

const LogoScroller = () => {
    return (
        <div className="bg-white p-6 md:p-10 rounded-lg mb-10 ">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-center mb-12 text-gray-800">
                Our Customers and Suppliers
            </h2>
            <div className="relative w-full overflow-hidden">
                <div
                    className="w-[calc(200%+64px)] flex flex-nowrap animate-infinite-scroll-sm lg:animate-infinite-scroll"
                >
                    {/* First set of logos */}
                    <ul className="flex items-center [&_li]:mx-16 [&_img]:max-w-none">
                        <li>
                            <img src={logo} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo1} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo2} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo3} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo4} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo5} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={Gsquare} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={Zoho} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo6} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo7} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo8} alt="Logo 1" width="110" height="24" />
                        </li>
                    </ul>
                    {/* Duplicate set of logos for infinite scroll */}
                    <ul className="flex items-center [&_li]:mx-16 [&_img]:max-w-none">
                        <li>
                            <img src={logo} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo1} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo2} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo3} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo4} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo5} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={Gsquare} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={Zoho} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo6} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo7} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo8} alt="Logo 1" width="110" height="24" />
                        </li>
                    </ul>
                    {/* Duplicate set of logos for infinite scroll */}
                    <ul className="flex items-center [&_li]:mx-16 [&_img]:max-w-none">
                        <li>
                            <img src={logo} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo1} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo2} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo3} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo4} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo5} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={Gsquare} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={Zoho} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo6} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo7} alt="Logo 1" width="110" height="24" />
                        </li>
                        <li>
                            <img src={logo8} alt="Logo 1" width="110" height="24" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LogoScroller;
