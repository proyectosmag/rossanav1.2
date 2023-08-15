
import Link from "next/link";

const TitleSecondary = (props) =>
(
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto flex flex-wrap">
            <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">{props.title}</h2>
            <div class="md:w-3/5 md:pl-6">
                <p class="leading-relaxed text-base">{props.body}</p>
                <div class="flex md:mt-4 mt-6">

                    <Link href="/Blog/Section">
                        <button class="inline-flex text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded">
                            {props.bLabel}
                        </button>
                    </Link>

                    <Link href="https://wa.link/4trztg" class="text-yellow-500 inline-flex items-center ml-4 hover:text-yellow-600">
                        Contactanos
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>

                </div>
            </div>
        </div>
    </section>
);


export default TitleSecondary