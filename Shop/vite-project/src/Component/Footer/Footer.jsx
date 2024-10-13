import React from 'react';
import FooterImage from '/img/Footer.png';
import Logo from '/img/Logo.png.jpg';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaMobileAlt, FaLocationArrow, FaGithub } from 'react-icons/fa';

const footerStyle = {
  backgroundImage: `url(${FooterImage})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingBottom: "2rem",
  paddingTop: "2rem",
  color: "#ffffff",
};

const footerLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const FooterComponent = () => {
  return (
    <div style={footerStyle} className="text-white mb-10 mt-14  bg-slate-800">
      <div className="container mx-auto">
        <div data-aos="zoom-in"
         className="grid sm:grid-cols-3 gap-8 pb-10 pt-5">
          {/* Logo and Description */}
          <div className="py-8 px-4">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <img src={Logo} alt="Shop Aura Logo" className="max-w-[50px] rounded-full shadow-lg" />
              Shop Aura
            </h1>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam ipsam esse? Magni, deleniti accusantium.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="py-8 px-4">
              <h2 className="text-xl font-bold mb-4">Important Links</h2>
              <ul className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <li key={link.title} className="cursor-pointer text-gray-300 hover:text-primary hover:translate-x-1 duration-300">
                    <a href={link.link} className="block transition ease-in-out hover:underline">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact and Social Icons */}
          <div className="py-8 px-4">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-primary" />
                <p>Bhilai, Chhattisgarh</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-primary" />
                <p>+91 9109251588</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/_komal.rajput_22/" className="hover:text-primary transition duration-300">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="hover:text-primary transition duration-300">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://github.com/komal1522" className="hover:text-primary transition duration-300">
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/komal-singh-498bb5257/" className="hover:text-primary transition duration-300">
                <FaLinkedinIn className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
