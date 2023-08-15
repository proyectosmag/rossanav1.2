import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Bibliography from "../components/Section/SectionBlibliographylite";
import Popup from "../components/Popup";
import SesionIcosn from "../components/sesionIcon";


const ReactPlayer = dynamic(() => import("react-player"), {
  loading: () => <div className="w-full rounded-2xl h-96 -mb-16 bg-dorado-ph"></div>,
  ssr: false,
 });

const Property = dynamic(() => import('../components/Property'), {
  loading: () => <div className="w-full rounded-2xl h-96 bg-dorado-ph"></div>,
  ssr: false,
})

import { useState } from "react";

export default function Home({ propertysAll, Banner, Categories }) {
  const [Categorie, setCategorie] = useState(null);

  return (
    <>
      <Head>
        <title>Rossana Ulloque</title>
        
      </Head>

      <ReactPlayer
        url={"/videos/video.webm"}
        autoPlay
        className="mobil-mt-0 react-player md:-mb-16 -mb-4 -mt-28"
        playing={true}
        width="100%"
        height="100%"
        muted
        loop
        style={{ objectFit: "cover" }}
        controls={false}
      />

      <div className="relative">
        <div className="absolute inset-0 h-1/2 " />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg grid grid-cols-2  sm:grid sm:grid-cols-4 ">
              <Link
                href="/search?tipo_propiedad=1"
                className="flex flex-col border-b border-gray-100 rounded-lg p-4 text-center sm:border-0 sm:border-r"
              >
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Casa
                </dt>
                <dd className="order-1 text-5xl  ">
                  <Image
                    alt="icon-casa"
                    className="mx-auto "
                    src={"/images/casa.svg"}
                    width={60}
                    height={60}
                  />
                </dd>
              </Link>
              <Link
                href="/search?tipo_propiedad=2"
                className="flex flex-col border-t border-b border-gray-100 p-4 text-center sm:border-0 sm:border-l sm:border-r"
              >
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Apartamento
                </dt>
                <dd className="order-1 text-5xl  ">
                  <Image
                    alt="icon-Apartamento"
                    className="mx-auto"
                    src={"/images/apartamento.svg"}
                    width={60}
                    height={60}
                  />
                </dd>
              </Link>
              <Link
                href="/search?tipo_propiedad=21"
                className="flex flex-col border-t border-gray-100 p-4 text-center sm:border-0 sm:border-l"
              >
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Penthouse
                </dt>
                <dd className="order-1 text-5xl  ">
                  <Image
                    alt="icon-Penthouse"
                    className="mx-auto"
                    src={"/images/penthouse.svg"}
                    width={60}
                    height={60}
                  />
                </dd>
              </Link>
              <Link
                href="/search?tipo_propiedad=24"
                className="flex flex-col border-t border-gray-100 p-4 text-center sm:border-0 sm:border-l"
              >
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Casa de Playa
                </dt>
                <dd className="order-1 text-5xl  ">
                  <Image
                    alt="icon-Casa-de-Playa"
                    className="mx-auto"
                    src={"/images/beachhouse.svg"}
                    width={60}
                    height={60}
                  />
                </dd>
              </Link>
            </dl>
          </div>
        </div>
      </div>

      <div className="mx-0 mb-8 max-w-full pt-16 px-6 -mt-24 lg:px-0 bg-slate-50">
        <div className="sm:text-center">
          <div className="relative  py-16 sm:py-24 lg:pb-8 lg:pt-20">

            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-dorado uppercase">
                Luxury Real Estate Agent
              </h2>
              <p className="mt-2 text-3xl text-gray-900 tracking-tight sm:text-4xl">
                Conoce la nueva perspectiva de Rossana Ulloque
              </p>
              <p className="mt-5 max-w-prose mx-auto font-light text-xl text-gray-500">
              “Todo lo que sueñas y sientes, que mereces, 
              vívelo intensamente con la convicción de que ya lo tienes. 
              Posiciónate mentalmente en conseguir esa vida que todos nos merecemos.”
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-base text-center font-semibold tracking-wider text-dorado uppercase">
          Propiedades destacadas
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {Object.entries(propertysAll).map((property) =>
            property[0] === "total" || property[0] === "status" ? null : (
              <Property property={property[1]} key={property[1].id_property} />
            )
          )}
        </div>
        
        
        

        {/* <div className="max-w-3xl mx-auto">Content goes here</div> */}
      </div>
      <div className="bg-slate-50 pb-8" >
        <SesionIcosn />
        </div >
        <Bibliography />
      {/* <Popup /> */}
    </>
  );
}

export async function getServerSideProps() {
  const propertysAll = await fetchApi(
    `${baseUrl}/property/search?&short=true`,
    "8"
  );
  // const propertysDest = await fetchApi(`${baseUrl}/property/highlighted?&short=true`, '2');
  // const Categories = await fetchApi(`${baseUrl}/property-type/all?&quantity=true`);
  // const Banner = await fetchApi(`${baseUrl}/banner/search`);
  return {
    props: {
      propertysAll: propertysAll,
    },
  };
}
