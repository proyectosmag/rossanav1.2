import Link from "next/link";
const ContactInfo = (props) => (
  <div className="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <img
      src="/images/ventana.jpg"
      className="absolute inset-0"
      alt="ventana del mundo barranquilla"
    />
    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
      <div className="lg:w-1/2 px-6">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
          {props.title}
        </h2>
        <p className="mt-1">{props.body}</p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
          {props.secondTitle}
        </h2>
        <Link href="#" className="text-yellow-500 leading-relaxed">
          {props.bodyEmail}
        </Link>
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
          {props.threeTitle}
        </h2>
        <p className="leading-relaxed">{props.bodyPhone}</p>
      </div>
    </div>
  </div>
);

export default ContactInfo;
