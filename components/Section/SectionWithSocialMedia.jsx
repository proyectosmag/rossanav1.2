import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSkype } from 'react-icons/fa';

import Link from 'next/link';



const SectionWithSocialMedia = (props) =>
(
    <div className="text-gray-600 body-font">
        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>

                <span className="ml-3 text-xl">{props.name}</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Luxury Real Estate Agent—
                <Link href="https://rossanaulloque.com" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@RossanaUlloque</Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-lg">

                <Link href="https://www.facebook.com/rossanaulloque/"
                    className="text-gray-500 hover:text-dorado">
                    <FaFacebookF />
                </Link>

                <Link href="https://twitter.com/rossanaulloque"
                    className="ml-3 hover:text-dorado">
                    <FaTwitter />
                </Link>

                <Link href="https://www.instagram.com/rossanaulloque/"
                    className="ml-3 text-gray-500 hover:text-dorado">
                    <FaInstagram />
                </Link>


                <Link href="https://www.linkedin.com/in/rossana-ulloque-urueta-00409a26"
                    className="ml-3 text-gray-500 hover:text-dorado">
                    <FaLinkedinIn />
                </Link>

                <Link href="skype:rossanapatricia64@hotmail.com"
                    className="ml-3 text-gray-500 hover:text-dorado">
                    <FaSkype />
                </Link>

            </span>
        </div>
    </div>);

export default SectionWithSocialMedia