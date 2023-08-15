import React from "react";
import Image from "next/image";

import { FaHouseUser, FaShoppingCart, FaLocationArrow } from "react-icons/fa";
import Head from "next/head";

const Testimony = () => {
  return (
    <>
      <Head>
        <title>Testimonios</title>
      </Head>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto">
          <div class="flex flex-col text-center w-full pt-10">
            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4  text-gray-900">
              TESTIMOS DE ROSSANA
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Contamos con una gran variedad de clientes satisfecho en todos los
              campos: para consulta, para compra/venta, para asesoria entre
              otros. Somos capaces de lograr tus sueños realidad partiendo desde
              tu perspectiva.{" "}
            </p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-12 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EAB308"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  A veces los procesos de compra y venta son muy tediosos y
                  confunso, agradezco a Rossana ulloque por su entrega en el
                  trabajo y paciencia ante los desconocedores de este negocio,
                  junto a ella he aprendido inmesidad de cosas relacionadas a
                  esta area
                </p>
                <a class="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src={"/images/profile.jpg"}
                    width={106}
                    height={106}
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Andres Perez
                    </span>
                    <span class="text-gray-500 text-sm">
                      DESARROLLADOR DE SOFTWARE
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EAB308"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Reconozco el trabajo de está profesional entregada, su blog
                  tiene demasiadas entradas relacionadas a la compra de
                  inmueble, pero también se enfoca en varios ambitos de bienes y
                  raices. Debo de agradecerte por mucho Rossana
                </p>
                <a class="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src={"/images/profile.jpg"}
                    width={106}
                    height={106}
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Mario Casas
                    </span>
                    <span class="text-gray-500 text-sm">ABOGADO</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-12 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EAB308"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Las asesorias de Rossana son consejos para la vida, su carisma
                  e impetu hacia los negocios la hace un gran ser humano,
                  gracias a ella logre cumplir mi objetivo. Estoy muy agradecido
                  por su equipo y consejos que da dia a dia en su blog
                </p>
                <a class="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    height={106}
                    width={106}
                    src={"/images/profile.jpg"}
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Pedro Perez
                    </span>
                    <span class="text-gray-500 text-sm">DISEÑADOR GRAFICO</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EAB308"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Siempre en mis planes estuvo en comprar una casa, es algo
                  realmente importante para mi, gracias a rossana logre este
                  sueño que parecia imposible, con mucha dedicación y entrega
                  todo se pudo realizar
                </p>
                <a class="inline-flex items-center">
                  <Image
                    width={106}
                    height={106}
                    alt="testimonial"
                    src={"/images/profile.jpg"}
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Maria Rendon
                    </span>
                    <span class="text-gray-500 text-sm">POLICIA</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div className="container mx-auto px-5 pt-10">
          <div className="flex flex-col text-center w-full mb-20">
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-yellow-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    {/* icon    */}
                    <FaHouseUser className="text-2xl" />
                    {/* icon    */}
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    +100
                  </h2>
                  <p class="leading-relaxed">Compras realizadas</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-yellow-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    {/* icon    */}
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    {/* icon    */}
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    3K
                  </h2>
                  <p class="leading-relaxed">Seguidores</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-yellow-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    {/* icon    */}
                    <FaShoppingCart className="text-2xl" />
                    {/* icon    */}
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    +200
                  </h2>
                  <p class="leading-relaxed">Inmuebles</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-yellow-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    {/* icon    */}
                    <FaLocationArrow className="text-2xl" />
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    5
                  </h2>
                  <p class="leading-relaxed">Oficinas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full pb-20 mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EAB308"
              class="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              {/* icon */}
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              {/* icon */}
            </svg>
            <p class="leading-relaxed text-lg">
              Actualmente lleva 10 años en el mercado inmobiliario, su éxito
              radica en la experiencia de más de 30 años en el manejo de gente y
              su profesionalismo en el servicio al cliente, capacitándose todos
              estos años en diferentes áreas del marketing inmobiliario,
              perteneciendo a varias asociaciones de profesionales en el sector
              y creando un modelo de negocio diferente donde asocia la finca
              raíz especializada en un concepto de alto estilo de vida. Hay un
              hogar para cada etapa de su vida y ROSSANA lo ayudará a
              encontrarlo, llámela para una consulta gratuita y pondrá su
              dedicación y experiencia a trabajar para usted.
            </p>
            <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
              ROSSANA ULLOQUE
            </h2>
            <p class="text-gray-500">Consultoría especializada en propiedades de alta gama</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimony;
