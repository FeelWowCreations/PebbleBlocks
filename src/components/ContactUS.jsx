import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import FooterBackground from "../images/AboutUs/footerBackground.jpg"
import ContactUS from "../images/AboutUs/contactUS.jpeg"
import ContactUS2 from "../images/AboutUs/contactUS2.jpg"
import emailjs from 'emailjs-com';



const ContactUs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg|png)/" }
          relativeDirectory: { eq: "ContactUs" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
        }
      }
    }
  `);

  const sendEmail = (e) => {
    e.preventDefault();

    // Use your EmailJS service ID, template ID, and user ID here
    emailjs.sendForm('service_3w9ux2t', 'template_o8v6t8c', e.target, 'bGSllFnbAIFCmLRtW')
      .then((result) => {
        console.log('Success:', result.text);
        alert('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        console.log('Error:', error.text);
        alert('Failed to send message.');
      });
  };


  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSff2CvzEnE0hi7mHlw3SvYRXelCZ6xH5zDaN-RgDxVijUwTEQ/viewform?embedded=true";
  const googleMapURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4467.541924224169!2d77.18337973928766!3d11.003358394964332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8557738869f03%3A0x526230936713b17!2sPebble%20Blocks!5e0!3m2!1sen!2sin!4v1722668539467!5m2!1sen!2sin";

  const images = data.allFile.edges.map(
    (edge) => edge.node.childImageSharp.gatsbyImageData
  );

  const contactInfo = [
    {
      icon: "icofont-ui-call",
      title: "+91 888 333 7674",
      description: "pebbleblocks@gmail.com",
    },
    {
      icon: "icofont-google-map",
      title: "114/B Pudu Kinathu Thottam",
      description: "Paruvai, Palladam",
    },
    {
      icon: "icofont-wall-clock",
      title: "Mon - Sat: 8am - 5pm",
      description: "Sunday Closed",
    },
  ];

  return (
    <section>
      {/* Top Image Section */}
      <div className="relative w-full h-32 lg:h-[20rem] flex items-center rounded-lg justify-center mb-0">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${ContactUS2})`,
            opacity: 1,
          }}
        ></div>
        {/* Content */}

      </div>

      <section className=" relative py-8 sm:py-12 lg:mt-5 lg:py-16 bg-gray-50">
        <div className="absolute inset-0">
          <img
            src={FooterBackground}
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className=" relative container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Map Section */}
            <div className="flex-1 w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="contact-us-left bg-white px-4 py-[1.65rem] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:border hover:border-blue-300 hover:shadow-lg h-full">
                <h2 className="text-2xl sm:text-3xl lg:text-2xl font-semibold mb-4">
                  Find Us Here
                </h2>
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src={googleMapURL}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Map"
                    className="absolute top-0 left-0"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="flex-1 w-full lg:w-1/2">
              <div className="contact-us-form bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:border hover:border-blue-300 hover:shadow-lg h-full">
                <h2 className="text-2xl sm:text-3xl lg:text-2xl font-semibold mb-4">
                  Connect With Us
                </h2>
                <p className="text-base sm:text-md mb-6">
                  If you have any questions, please feel free to contact us.
                </p>
                <section className="py-3 sm:py-3 lg:py-3 bg-gray-50">
                  <div className="container mx-auto px-4">
                    <form
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      onSubmit={sendEmail}
                    >
                      {/* Name */}
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Phone */}
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Subject */}
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Message */}
                      <div className="form-group md:col-span-2">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="4"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="form-group md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border hover:border-blue-300 hover:shadow-lg hover:animate-pulse"
                >
                  <i
                    className={`${info.icon} text-blue-500 text-xl sm:text-2xl mr-4`}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{info.title}</h3>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
