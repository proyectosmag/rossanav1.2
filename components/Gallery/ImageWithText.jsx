import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ImageWithText = (props) => (
  <Link href="/search">
    <div className="flex flex-wrap w-full bg-black sm:py-24 py-16 sm:px-10 px-6 relative hover:scale-95 ease-in duration-200">
      <Image
        alt="gallery"
        className="w-full object-cover h-full object-center block opacity-25 absolute inset-0 "
        src="/images/edificio.jpg"
        width={542}
        height={460}
      />

      <h2 className="text-xl text-center relative z-10 w-full text-slate-100 font-medium title-font mb-2">
        Compra y ventas
      </h2>
      <div className="text-center relative z-10 w-full leading-relaxed text-slate-200">
        Ingresa a más de 200 viviendas en todo el atlantico
        <div className="mt-3 text-center relative w-full text-yellow-500 ">
          <>Conocer más </>
        </div>
      </div>
    </div>
  </Link>
);

export default ImageWithText;
