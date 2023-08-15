import React from 'react'

import Link from 'next/link'

import { FaFacebookF, FaInstagramSquare, FaYoutube, FaTiktok, FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


export const Footerft = () =>
(
    <>
        {/*  Centro de ayuda y contactanos */}
        <div className="grid grid-cols-4 gap-4">
            <div className='grid grid-cols-1'>
                <h3>Centro de ayuda y contacto</h3>

                <label className="inline-flex items-center">
                    <FaRegQuestionCircle />
                    <span>¿Tienes alguna duda?</span>
                </label>

                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Te ayudamos aqui
                    </button>
                </div>
                <div>Consulta tus dudas sobre medicamentos con nuestros farmaceuticos aqui</div>
            </div>

            <div className='grid grid-cols-1'>
                <h3>Conócenos</h3>
                <p>¿Qué es farmacia Torres?</p>
                <p>Trabaja con nosotros</p>
            </div>

            <div className='grid grid-cols-1'>Siguenos en
                <div className="flex justify-start">
                    <div className="">
                        <button
                            className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                            <FaFacebookF className='w-9 h-9 p-2 hover:text-white text-black' />
                        </button>
                        <button
                            className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                            <FaInstagramSquare className='w-9 h-9 p-2 hover:text-white text-black' />
                        </button>
                        <button
                            className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                            <FaYoutube className='w-9 h-9 p-2 hover:text-white text-black' />
                        </button>
                        <button
                            className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                            <FaTiktok className='w-9 h-9 p-2 hover:text-white text-black' />
                        </button>
                    </div>
                </div>
            </div>

        </div>

        <hr width="100%" />

        {/* Newslestter */}
        <h3>Suscríbete a nuestro Newsletter</h3>
        <form>
            <div className="grid grid-cols-1">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Your Email</label>
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44">
                    <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdown-button">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Shopping</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Images</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">News</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Finance</a>
                        </li>
                    </ul>
                </div>
                <div className="relative w-64">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Digite su correo electronico" />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <AiOutlineMail className='text-xl' />
                    </button>
                </div>
                <p>Entérate primero de nuestras exclusivas ofertas y promociones. ¡Suscríbete!</p>
                <div className="flex ">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">He leido la <span className='text-bold'>politica y privaidad</span>  <span className="underline">privacy policy</span></span>
                    </label>
                </div>
            </div>
        </form>

    </>

)



export default Footerft