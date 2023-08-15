import Image from "next/image"

const RossanaUlloque = () => (
    <>
        <Image 
        src={'/images/logo.png'}
        width={200}
        height={300}
        alt="Logo"
        />
        {/*  <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start border-b-4 border-dorado">
            Rossana Ulloque
        </h6> */}

        <p>
            Soy Rossana Ulloque, Consultora Inmobiliaria de propiedades de lujo y Corporativo. Me identifico con las personas que persiguen un estilo de vida exclusivo y sofisticado. Si las inversiones, el confort y el buen vivir hacen parte de tus sueños, yo me comprometo a hacerlo realidad.
        </p>
    </>
)


export default RossanaUlloque