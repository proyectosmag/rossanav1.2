import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { FaWindowClose, FaFunnelDollar, FaMinus, FaPlus, FaRedo,} from "react-icons/fa";
import Head from "next/head";
import dynamic from "next/dynamic";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Image from "next/image";
const Property = dynamic(() => import('../components/Property'), {
  loading: () => <div className="w-full rounded-2xl h-96 bg-dorado-ph"></div>,
  ssr: false
})

import Select from "react-select";
import Link from "next/link";

const sortOptions = [
  { label: "Más Recientes", value: "created_at" },
  { label: "Mayor Precio", value: "max_price" },
  { label: "Menor Precio", value: "min_price" },
];

const subCategories = [
  { name: "Venta", href: "?venta=true" },
  { name: "Alquiler", href: "?alquiler=true" },
  { name: "Apartamento", href: "#" },
  { name: "Casa", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

const options = [
  { value: "venta", label: "Venta" },
  { value: "renta", label: "Renta" },
  { value: "vanilla", label: "Permuta" },
];

const Bedrooms = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];


const Search = ({ properties, categories, Regions, FromCity, FromLocation}) => {

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [minBedrooms, setminBedrooms] = useState({ value: "1", label: "1" });
  const router = useRouter();
  const path = router.pathname;
  const { query } = router;

  function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
      ans.push({ value: i, label: i });
    }
    return ans;
  }

  const filterRegions = () => {
    let newRegions = [{ label: "Todos", value: "" }];

    Object.entries(Regions).map((region) => {
      if (region[1].quantity > 0) {
        newRegions.push({
          label: `${region[1].name}`,
          value: region[1].id_region,
        });
      }
    });
    return newRegions;
  };

  const filterCity = () => {
    let newCety = [{ label: "Todos", value: "" }];

    Object.entries(FromCity).map((region) => {
      if (region[1].quantity > 0) {
        newCety.push({ label: `${region[1].name}`, value: region[1].id_city });
      }
    });
    return newCety;
  };

  const filterLocation = () => {
    let newCety = [{ label: "Todos", value: "" }];

    Object.entries(FromLocation).map((region) => {
      if (region[1].quantity > 0) {
        newCety.push({ label: `${region[1].name}`, value: region[1].id_zone });
      }
    });
    return newCety;
  };

  const filterTypeProperti = () => {
    let newCategories = [{ label: "Todos", value: "" }];
    Object.entries(categories).map((category) => {
      if (category[1].quantity > 0) {
        newCategories.push({
          label: `${category[1].name}`,
          value: category[1].id_property_type,
        });
      }
    });
    return newCategories;
  };

  const handleSelectRegion = (event) => {
    query["departamento"] = event["value"];
    query["ciudad"] = "";
    query["barrio"] = "";
    router.push({ pathname: path, query });
  };
  const handleSelectCity = (event) => {
    query["ciudad"] = event["value"];
    query["barrio"] = "";
    router.push({ pathname: path, query });
  };
  const handleSelectLocation = (event) => {
    query["barrio"] = event["value"];
    router.push({ pathname: path, query });
  };

  const handleSelectLooking = (event) => {
    if (event["value"] === "venta") {
      query[event["value"]] = true;
      query["renta"] = "";
    }
    if (event["value"] === "renta") {
      query[event["value"]] = true;
      query["venta"] = "";
    }

    router.push({ pathname: path, query });
  };

  const handleSelectTypeProperti = (event) => {
    // const path = router.pathname;
    // const { query } = router;
    query["tipo_propiedad"] = event["value"];
    router.push({ pathname: path, query });
  };

  const handleMinBedrooms = (event) => {
    setminBedrooms(event);
    query["habitaciones_min"] = event["label"];
    router.push({ pathname: path, query });
  };
  const handleMaxBedrooms = (event) => {
    query["habitaciones_max"] = event["label"];
    router.push({ pathname: path, query });
  };

  const valueMinPrice = (event) => {
    query['min_price'] = event['target']['value'];
    router.push({pathname: path, query});
  };

  const valueMaxPrice = (event) => {
    
    query['max_price'] = event['target']['value'];
    router.push({pathname: path, query});
  };
  const handleBathrooms = (event) => {
    console.log(event);
    query["baños"] = event["label"];
    router.push({ pathname: path, query });
  };
  const handleOrder = (event) => {
    console.log(event["value"]);
    if (event["value"] == "max_price") {
      query["ordenar"] = event["value"];
    }
    if (event["value"] == "min_price") {
      query["ordenar"] = event["value"];
    }
    if (event["value"] == "created_at") {
      query["ordenar"] = event["value"];
    }
    router.push({ pathname: path, query });
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Busqueda de inmueble</title>
      </Head>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <FaWindowClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>

                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <FaMinus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <FaPlus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="radio"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        {/* <Breadcrumbs/> */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-2 pb-2">
            <div className="text-2xl font-bold tracking-tight text-gray-900"></div>
            <div className="flex items-center">
              <Select
                className="w-40"
                instanceId="long-value-select"
                onChange={handleOrder}
                defaultValue={{ label: "Ordenar", value: "" }}
                options={sortOptions}
              />

              <Link
                href="/search"
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <FaRedo className="h-5 w-5" aria-hidden="true" />
              </Link>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FaFunnelDollar className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 ">
              {/* Filters */}

              <form className="hidden lg:block">
                <h3 className="">Departamento</h3>
                <Select
                  className="w-full"
                  instanceId="long-value-select"
                  onChange={handleSelectRegion}
                  defaultValue={{ label: "Atlántico", value: "" }}
                  options={filterRegions()}
                />
                <h3 className="mt-4">Ciudad</h3>

                <Select
                  className="w-full"
                  instanceId="long-value-select"
                  onChange={handleSelectCity}
                  defaultValue={{ label: "Seleccionar", value: "" }}
                  options={
                    FromCity["status"] === "success" ? filterCity() : null
                  }
                />
                <h3 className="mt-4">Barrio</h3>
                <Select
                  className="w-full"
                  instanceId="long-value-select"
                  onChange={handleSelectLocation}
                  defaultValue={{ label: "Seleccionar", value: "" }}
                  options={filterLocation()}
                />
                <h3 className="mt-4">Tipo de venta</h3>
                <Select
                  instanceId="long-value-select"
                  onChange={handleSelectLooking}
                  defaultValue={{ label: "Selecionar", value: "" }}
                  options={options}
                />
                <h3 className="mt-4">Tipo de inmueble</h3>
                <Select
                  instanceId="long-value-select"
                  onChange={handleSelectTypeProperti}
                  defaultValue={{ label: "Selecionar", value: "" }}
                  options={filterTypeProperti()}
                />
                <h3 className="mt-4">Dormitorios</h3>
                <div className="flex">
                  <Select
                    className="w-2/4 "
                    instanceId="long-value-select"
                    onChange={handleMinBedrooms}
                    defaultValue={{ label: "Minimo", value: "" }}
                    options={Bedrooms}
                  />
                  <Select
                    className="w-2/4 ml-2"
                    instanceId="long-value-select"
                    onChange={handleMaxBedrooms}
                    defaultValue={{ label: "Maximo", value: "" }}
                    options={range(minBedrooms["value"], 10)}
                  />
                </div>
                <h3 className="mt-4">Baños</h3>
                <Select
                  className="w-full"
                  instanceId="long-value-select"
                  onChange={handleBathrooms}
                  defaultValue={{ label: "Maximo", value: "" }}
                  options={range(1, 7)}
                />
                 <h3 className="mt-4">Precio</h3>
                                <div className="flex" >
                                    <input
                                        type="number"
                                        name="price-min"
                                        id="price-min"
                                        className="p-2 border-2 w-2/4 block flex-1 rounded-md  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Minimo"
                                        onChange={valueMinPrice}
                                    />
                                    <input
                                        type="number"
                                        name="price-max"
                                        id="price-max"
                                        className="ml-2 p-2  w-2/4 block flex-1 border-2 rounded-md  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Maximo"
                                        onChange={valueMaxPrice}
                                    />
                                </div> 
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {properties["total"] == 0 ? (
                  <Image
                    alt="Propiedad no encontrada"
                    src={"/images/noresult.png"}
                    width={500}
                    height={500}
                  />
                ) : (
                  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                      {Object.entries(properties).map((property) =>
                        property[0] === "total" ||
                        property[0] === "status" ? null : (
                          <Property
                            property={property[1]}
                            key={property[1].id_property}
                          />
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Search;

export async function getServerSideProps({ query }) {
  const forSale = query.venta || "for_sale";
  const forRent = query.renta || "for_rent";
  const minBedrooms = query.habitaciones_min || "min_bedrooms";
  const maxBedrooms = query.habitaciones_max || "max_bedrooms";
  const bathrooms = query.baños || "bathrooms";
  const propertyType = query.tipo_propiedad || "";
  const region = query.departamento || "4";
  const City = query.ciudad || "0";
  const Location = query.barrio || "0";
  const ordenar = query.ordenar || "";
  const minprice = query.min_price || "0";
  const maxprice = query.max_price || "0";
  const match_search = query.match || "";

  const properties = await fetchApi(
    `${baseUrl}/property/search?for_sale=${forSale}&for_rent=${forRent}&min_bedrooms=${minBedrooms}&max_bedrooms=${maxBedrooms}&bathrooms=${bathrooms}&id_property_type=${propertyType}&id_region=${region}&id_city=${City}&id_zone=${Location}&order_by=${ordenar}&short=true&id_country=1&min_price=${minprice}&max_price=${maxprice}&match=${match_search}`,
    "21"
  );
  const Categories = await fetchApi(
    `${baseUrl}/property-type/all?&quantity=true`
  );
  const Regions = await fetchApi(
    `${baseUrl}/location/regions-from-country/1?&quantity=true`
  );

  const FromCity = await fetchApi(
    `${baseUrl}/location/cities-from-region/${region}?&quantity=true`
  );
  const FromLocation = await fetchApi(
    `${baseUrl}/location/zones-from-city/${City}?&quantity=true`
  );
  return {
    props: {
      properties: properties,
      categories: Categories,
      Regions: Regions,
      FromCity: FromCity,
      FromLocation: FromLocation,
    },
  };
}
