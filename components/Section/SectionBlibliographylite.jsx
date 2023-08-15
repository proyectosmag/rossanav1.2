import Link from "next/link"
import Image from "next/image"
const SectionBibliographyLite = () => {

    return (
        <div className="my-6 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex p-0.5 items-center justify-center bg-dorado-light">
                <Image
                    alt="Foto Rossana Uoque"
                    className="rounded-full"
                    src={'/images/foto-perfil-ru.jpg'}
                    height={400}
                    width={400}
                />
            </div>
            <div className="flex flex-col items-center text-center justify-center px-4">
                <h2 className="font-semibold title-font mt-4 text-gray-900 text-lg">ROSSANA ULLOQUE</h2>
                <p className="font-normal">ROSSANA es abogada , profesión que le ha servido de base estructural a lo largo de sus experiencias laborales.</p>
                <span className="" >
                    <Link className="font-semibold" href={'/Biography'} >LEER MÁS</Link>
                    <div className="h-1 bg-dorado rounded mt-1 mb-1"></div>
                </span>

            </div>
        </div>
    )

}
export default SectionBibliographyLite