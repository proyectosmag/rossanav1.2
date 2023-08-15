import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

const FSocialMediaBlock = () => (
  <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
    <div className="mr-12 hidden lg:block">
      <span>Conéctate con nosotros en las redes sociales:</span>
    </div>
    <div className="flex justify-center text-lg">
      <Link
        href="https://www.facebook.com/rossanaulloque/"
        target="_blank"
        className="text-gray-500 hover:text-dorado mr-2"
      >
        <FaFacebookF />
      </Link>

      <Link
        href="https://www.instagram.com/rossanaulloque/"
        target="_blank"
        className="ml-3 text-gray-500 hover:text-dorado mr-2"
      >
        <FaInstagram />
      </Link>


      <Link
        href="mailto:Luxury@rossanaulloque.com"
        target="_blank"
        className="ml-3 text-gray-500 hover:text-dorado mr-4"
      >
        <FaEnvelope />
      </Link>
    </div>
  </div>
);

export default FSocialMediaBlock;
