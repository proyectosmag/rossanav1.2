import Link from "next/link";
import BGreen from "../Badges/BGreen";
import BPurple from "../Badges/BPurple";
import BBlue from "../Badges/BBlue";
import { FaCalendarDay } from "react-icons/fa";

export const SectionCardBlog = ({ post }) => {

  // let eliminar = (/\s+/g,[=¿]/g)
  return(
  
    <>
      {Object.entries(post).map((post) =>
        
        post[0] === "total" || post[0] === "status" ? null : (
          <div key={post[1].id_news} className="p-4 md:w-1/3">
            {/*  */}
            <Link href={`/Blog/${post[1].title.replace(/\s+|[¿]|[?]/g, '-' ) }/${post[1].id_news}`}> {/* enlace */}
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={post[1].image}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {post[1].position === 0 ? (
                      <BGreen label="Ofertas" />
                    ) : false || post[1].position === 1 ? (
                      <BPurple label="Novedades" />
                    ) : false || post[1].position === 2 ? (
                      <BBlue label="Informacion general" />
                    ) : (
                      false
                    )}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {post[1].title}
                  </h1>
                  <p className="leading-relaxed mb-3">{post[1].abstract}</p>
                  <div className="flex items-center flex-grow  left-0">
                    <p
                      href="/Blog/Detail"
                      className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Conoce más
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </p>
                    <span className="text-gray-400 bottom-0 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      {post[1].date} <FaCalendarDay className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      )}
    </>
  );

}



export default SectionCardBlog;
