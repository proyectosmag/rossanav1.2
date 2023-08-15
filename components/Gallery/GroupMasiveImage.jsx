import Image from "next/image"
import Link from "next/link"

const GroupMasiveImage = () => (
    <section>
        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <Image alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" /* src=" " */ width={20} height={340} />
            <div className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                <Link href="#" className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    </section>
)


export default GroupMasiveImage