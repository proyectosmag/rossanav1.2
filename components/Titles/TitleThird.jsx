import Image from "next/image";
import Link from "next/link";
const TitleSecondary = (props) => (
  <div className="container  py-2 pt-14  mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 className="text-xs text-dorado tracking-widest font-medium title-font mb-1">
        Luxury Life Style
      </h2>
      <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
        INSPIRACIONES, LUJOS SOBRE ROSSANA
      </h1>
    </div>
    <div className="flex md:ml-auto md:mr-0  mx-auto items-center flex-shrink-0 space-x-4">
      <Link href="/">
        <button className="bg-dorado-light inline-flex py-3 px-5 rounded-lg items-center hover:bg-dorado focus:outline-none">
          <Image
            width={20}
            height={20}
            alt="logotype"
            src="/images/logotype.png"
          />
        </button>
      </Link>
    </div>
  </div>
);

export default TitleSecondary;
