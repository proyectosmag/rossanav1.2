import Link from "next/link";
import { FaUserTie } from "react-icons/fa";

const SectionInfo = () => {
    return (
        <Link href="https://linktr.ee">
            <div className="shadow-lg flex flex-row  bg-gradient-to-r from-dorado via-dorado to-yellow-900 p-6 gap-8 rounded-lg border-2 border-dorado hover:scale-110 ease-in duration-200">
                <div className="my-auto">
                    <div className="text-lg text-yellow-50">Seguidores</div>
                    <div className="text-4xl text-black font-semibold">100k</div>
                </div>
                <div className="text-yellow-50 my-auto bg-gradient-to-l from-dorado via-dorado to-yellow-900 rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="-2 -2 20 20" fill="currentColor">
                        <FaUserTie />
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default SectionInfo