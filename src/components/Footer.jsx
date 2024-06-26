/* eslint-disable no-unused-vars */
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-theme_1 shadow ">
      <div className="w-full px-8 mx-auto py-8 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <a
            href="https://dhruVersestudios.in"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={logo} className="w-24" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/policy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            {/* <li>
                    <a href="/licensing" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li> */}
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
          Three Comma Studios™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
