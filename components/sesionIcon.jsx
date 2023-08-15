// import {
//     CloudUploadIcon,
//     CogIcon,
//     LockClosedIcon,
//     RefreshIcon,
//     ServerIcon,
//     ShieldCheckIcon,
//   } from '@heroicons/react/outline'
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

import { BsXDiamondFill, BsXDiamond } from "react-icons/bs";
const features = [
  {
    name: "¿Como lo haremos?",
    icon: BsXDiamondFill,
    label:
      "El marketing creativo y distinguido es uno de los sellos distintivos que trabajo con cada cliente para crear un plan específicio para cada propiedad dirigida a compradores locales, nacionales e internacionales.",
  },

  {
    name: "Busqueda de proovedores",
    icon: BsXDiamond,
    label:
      "Buscar colaboraciones o proveedores con empresas afines con las que se identifique en concepto de cultura empresarial (Luxury Lifes Style) y ofrecer ese valor diferencial en el mercado, de forma no intrusiva.",
  },

  {
    name: "Proposito",
    icon: BsXDiamondFill,
    label:
      "Mi pagina web esta direccionada a esa clase de personas que tienen unos intereses, opiniones y comportamientos dentro de una cultura del buen vivir, este nicho de mercado que es el que mantiene una posición mental ganadora.",
  },
];

export default function Example() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-full sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-1 md:gap-8 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 ">
                <div className="pt-4 group block transition ease-in-out hover:-translate-y-1 hover:scale-102 bg-gray-100 hover:drop-shadow-2xl hover:bg-dorado  text-gray-500 rounded-lg px-6 pb-8 ">
                  <center>
                    <FaTelegramPlane className="text-5xl  text-dorado group-hover:text-white" />
                  </center>
                  <div className="-mt-6">
                    <h3 className="mt-8 text-xl font-medium group-hover:text-white text-dorado tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 font-light group-hover:text-white ">
                      {feature.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
