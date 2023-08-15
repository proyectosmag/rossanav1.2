import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Example() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl lg:max-w-4xl xl:max-w-7xl  z-50 ">
                <section className=" relative overflow-hidden rounded-lg  shadow-2xl lg:pb-0">
                  <>
                    <img
                      src="/images/comedor.svg"
                      className=" w-full block absolute inset-0 object-cover object-center transition ease-in-out delay-15 hover:scale-105 duration-500"
                    />
                    <div class="text-center relative z-10  w-full content-center items-center">
                      <h2 class="px-4 pt-4  font-medium py-10 sm:text-3xl sm:py-10 text-white lg:py-28 lg:font-medium lg:title-font lg:mb-2">
                        Conoce nuestras marcas aliadas
                      </h2>
                    </div>
                    <center>
                      <div className="text-6xl text-yellow-600 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <a href="#" className="mb-4">
                          <FaFacebook />
                          <p className="text-sm text-black font-semibold">
                            Facebook
                          </p>
                        </a>

                        <a href="#" className="mb-4">
                          <FaFacebook />
                          <p className="text-sm text-black font-semibold">
                            Facebook
                          </p>
                        </a>

                        <a href="#" className="mb-4">
                          <FaFacebook />
                          <p className="text-sm text-black font-semibold">
                            Facebook
                          </p>
                        </a>

                        <a href="#" className="mb-4">
                          <FaFacebook />
                          <p className="text-sm text-black font-semibold">
                            Facebook
                          </p>
                        </a>
                      </div>
                     {/*  <div className="py-4 space-x-10">
                        <button class=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                          Siguenos
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                          Inmuebles
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                          Consultorias
                        </button>
                      </div> */}
                    </center>


                  </>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
