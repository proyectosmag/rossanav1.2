import React from 'react';

import Link from 'next/link';

const BCategory = (props) => {

    return (

        <div className="grid sm:h-8 sm:grid-flow-row sm:gap-4 ">

            <Link href="#">
                <div className="hover:scale-110 ease-in duration-200 shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
                    <div className="flex w-full h-full">
                        <div className="w-1/3 flex items-center justify-center bg-green-500">
                            <p className="text-3xl font-semibold text-center text-white">0</p>
                        </div>
                        <div className="w-2/3 flex items-center justify-center ">
                            <p className=" text-center text-gray-900">Ofertas</p>
                        </div>
                    </div>
                </div>
            </Link>


            <Link href="#">
                <div className="hover:scale-110 ease-in duration-200 shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
                    <div className="flex w-full h-full">
                        <div className="w-1/3 flex items-center justify-center bg-blue-500">
                            <p className="text-3xl font-semibold text-center text-white">3</p>
                        </div>
                        <div className="w-2/3 flex items-center justify-center ">
                            <p className=" text-center text-gray-900">Información general</p>
                        </div>
                    </div>
                </div>
            </Link>


            <Link href="#">
                <div className="hover:scale-110 ease-in duration-200 shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
                    <div className="flex w-full h-full">
                        <div className="w-1/3 flex items-center justify-center bg-purple-500">
                            <p className="text-3xl font-semibold text-center text-white">3</p>
                        </div>
                        <div className="w-2/3 flex items-center justify-center ">
                            <p className=" text-center text-gray-900">Novedades</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BCategory