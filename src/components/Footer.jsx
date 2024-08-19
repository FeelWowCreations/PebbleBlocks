import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import FooterBackground from "../images/AboutUs/footerBackground.jpg"

const Footer = () => {
  return (
    <footer className="bg-white text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">

      {/* Footer Content */}

      <div className="mx-6 py-10 text-center md:text-left">
        
        <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="w-60 h-40 flex flex-col  justify-center justify-self-center">
            <StaticImage
              src="../images/Logo/p24.jpg"
              width={640}
              alt="Logo"
              className="cursor-pointer mb-4"
            />
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4 hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out">
              <a href="#!">Why Pebble</a>
            </p>
            <p className="mb-4 hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out">
              <a href="#!">Products</a>
            </p>
            <p className="mb-4 hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out">
              <a href="#!">Contact Us</a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Reach us
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              114/B Pudu Kinathu Thottam
              <br>
              </br>
              Paruvai (P.O), Palladam Taluk
              <br></br>
              Tiruppur , Tamil Nadu-641658
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              pebbleblocks@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              +91 888 333 7674 <br></br> +91 888 333 2822
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Follow Us
            </h6>

            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center justify-center md:justify-start hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out"
            >
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  id="facebook"
                >
                  <path
                    fill="#1877f2"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  ></path>
                </svg>
              </span>
              Facebook
            </a>

            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center justify-center md:justify-start hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out"
            >
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="102"
                  height="102"
                  viewBox="0 0 102 102"
                  id="instagram"
                >
                  <defs>
                    <radialGradient
                      id="a"
                      cx="6.601"
                      cy="99.766"
                      r="129.502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".09" stop-color="#fa8f21"></stop>
                      <stop offset=".78" stop-color="#d82d7e"></stop>
                    </radialGradient>
                    <radialGradient
                      id="b"
                      cx="70.652"
                      cy="96.49"
                      r="113.963"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset=".64"
                        stop-color="#8c3aaa"
                        stop-opacity="0"
                      ></stop>
                      <stop offset="1" stop-color="#8c3aaa"></stop>
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                  ></path>
                  <path
                    fill="#fff"
                    d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                    transform="translate(-422.637 -426.196)"
                  ></path>
                </svg>{" "}
              </span>
              Instagram
            </a>

            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center justify-center md:justify-start hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out"
            >
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                  id="whatsapp"
                >
                  <rect width="48" height="48" fill="#0DC143" rx="24"></rect>
                  <path
                    fill="#fff"
                    d="M34.7507 13.2115C32.1777 10.5628 28.621 9.125 24.9885 9.125C17.2696 9.125 11.0642 15.4061 11.1399 23.0493C11.1399 25.4709 11.821 27.8169 12.9561 29.9358L10.9885 37.125L18.3291 35.2331C20.3723 36.3682 22.6426 36.898 24.9128 36.898C32.5561 36.898 38.7615 30.6169 38.7615 22.9736C38.7615 19.2655 37.3237 15.7845 34.7507 13.2115ZM24.9885 34.552C22.9453 34.552 20.902 34.0223 19.1615 32.9628L18.7074 32.7358L14.3183 33.8709L15.4534 29.5574L15.1507 29.1034C11.821 23.7304 13.4101 16.6169 18.8588 13.2872C24.3074 9.95743 31.3453 11.5466 34.675 16.9953C38.0047 22.4439 36.4156 29.4818 30.9669 32.8115C29.2264 33.9466 27.1074 34.552 24.9885 34.552ZM31.648 26.152L30.8156 25.7736C30.8156 25.7736 29.6047 25.2439 28.848 24.8655C28.7723 24.8655 28.6966 24.7899 28.621 24.7899C28.3939 24.7899 28.2426 24.8655 28.0912 24.9412C28.0912 24.9412 28.0156 25.0169 26.9561 26.2277C26.8804 26.3791 26.7291 26.4547 26.5777 26.4547H26.502C26.4264 26.4547 26.275 26.3791 26.1993 26.3034L25.821 26.152C24.9885 25.7736 24.2318 25.3196 23.6264 24.7142C23.475 24.5628 23.248 24.4115 23.0966 24.2601C22.5669 23.7304 22.0372 23.125 21.6588 22.4439L21.5831 22.2926C21.5074 22.2169 21.5074 22.1412 21.4318 21.9899C21.4318 21.8385 21.4318 21.6872 21.5074 21.6115C21.5074 21.6115 21.8101 21.2331 22.0372 21.0061C22.1885 20.8547 22.2642 20.6277 22.4156 20.4764C22.5669 20.2493 22.6426 19.9466 22.5669 19.7196C22.4912 19.3412 21.5831 17.298 21.3561 16.8439C21.2047 16.6169 21.0534 16.5412 20.8264 16.4655H20.5993C20.448 16.4655 20.221 16.4655 19.9939 16.4655C19.8426 16.4655 19.6912 16.5412 19.5399 16.5412L19.4642 16.6169C19.3128 16.6926 19.1615 16.8439 19.0101 16.9196C18.8588 17.0709 18.7831 17.2223 18.6318 17.3736C18.102 18.0547 17.7993 18.8872 17.7993 19.7196C17.7993 20.325 17.9507 20.9304 18.1777 21.4601L18.2534 21.6872C18.9345 23.125 19.8426 24.4115 21.0534 25.5466L21.3561 25.8493C21.5831 26.0764 21.8101 26.2277 21.9615 26.4547C23.5507 27.8169 25.3669 28.8007 27.4101 29.3304C27.6372 29.4061 27.9399 29.4061 28.1669 29.4818C28.3939 29.4818 28.6966 29.4818 28.9237 29.4818C29.302 29.4818 29.7561 29.3304 30.0588 29.1791C30.2858 29.0277 30.4372 29.0277 30.5885 28.8764L30.7399 28.725C30.8912 28.5736 31.0426 28.498 31.1939 28.3466C31.3453 28.1953 31.4966 28.0439 31.5723 27.8926C31.7237 27.5899 31.7993 27.2115 31.875 26.8331C31.875 26.6818 31.875 26.4547 31.875 26.3034C31.875 26.3034 31.7993 26.2277 31.648 26.152Z"
                  ></path>
                </svg>
              </span>
              WhatsApp
            </a>

            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center justify-center md:justify-start hover:text-pebblePrimary transition-all duration-300 cursor-pointer ease-in-out"
            >
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 38.5 38.5"
                  id="x"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="2.59"
                      x2="35.91"
                      y1="9.63"
                      y2="28.87"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#646464"></stop>
                      <stop offset=".72" stop-color="#1d1d1d"></stop>
                      <stop offset="1"></stop>
                    </linearGradient>
                  </defs>
                  <g>
                    <g>
                      <path
                        fill="url(#a)"
                        d="M38.5,19.25c0,.52-.02,1.03-.07,1.54-.37,4.68-2.44,8.91-5.58,12.06-3.49,3.49-8.3,5.65-13.6,5.65-1.43,0-2.82-.16-4.15-.46-.94-.2-1.84-.47-2.72-.81C5.16,34.45,0,27.42,0,19.25c0-5.29,2.17-10.11,5.65-13.6C9.14,2.16,13.95,0,19.25,0s10.11,2.16,13.6,5.65c2.18,2.19,3.85,4.9,4.79,7.92.41,1.33.68,2.71.79,4.14.01.1.02.21.02.31.04.41.05.81.05,1.23Z"
                      ></path>
                      <g>
                        <path
                          fill="#161616"
                          d="M38.5,19.25c0,.52-.02,1.03-.07,1.54-.37,4.68-2.44,8.91-5.58,12.06-3.49,3.49-8.3,5.65-13.6,5.65-1.43,0-2.82-.16-4.15-.46l-6.99-7.32,8.59-9.97-8.46-12.31h7.33l6.28,6.32,5.43-6.32h3.04l7.81,8.36c.12.4.23.81.32,1.22.04.41.05.81.05,1.23Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M30.88,30.72h-7.33l-5.5-8.01-6.89,8.01h-3.04l8.58-9.97-8.45-12.3h7.33l5.2,7.57,6.51-7.57h3.04l-8.2,9.53,8.76,12.74ZM24.03,29.81h5.13l-8.18-11.9,7.37-8.57h-.65l-7.01,8.15-5.6-8.15h-5.13l7.88,11.46-7.75,9.01h.65l7.39-8.59,5.9,8.59ZM28.36,29.39h-3.94L10.74,9.83h3.94l13.68,19.56ZM24.89,28.49h1.73L14.21,10.74h-1.73l12.41,17.75Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>{" "}
              </span>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
