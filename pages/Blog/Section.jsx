import BCategory from "../../components/Badges/BCategory";
import { SliderImage } from "../../components/Gallery/SliderImage";
/* import SectionBibliography from "../../components/Section/SectionBibliography"; */
import SectionCardBlog from "../../components/Section/SectionCardBlog"
import SectionInfo from "../../components/Section/SectionInfo";
import TitleSimple from "../../components/Titles/TitleSimple";
import { baseUrl, fetchApi } from '../../utils/fetchApi'
import Image from "next/image";
import Head from "next/head";

const Blog = (NewSearchBlogs) => {

  const socialMedia = [
    { number: "0", label: "Ofertas" },
    { number: "1", label: "Información general" },
    { number: "1", label: "Novedades" }
  ]

  return (
    
    <div className="container px-5 py-6 mx-auto ">
      <Head>
        <title>Entrada de blogs</title>
      </Head>
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-yellow-500"></div>
        </div>
      </div>
      <TitleSimple title="ENTRADAS DE BLOGS" body="Encuentra los mejores consejos de Rossana en un solo lugar, además puedes compartir los que mas te interesen con tus amigos/conocidos en las redes sociales" />
      <SliderImage />
      <div className="flex ml-30 py-3 mx-auto " >
        <div className="w-4/5 ">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto ">
              <div className="flex flex-wrap -m-4" >
                {Object.entries(NewSearchBlogs).map(post =>
                (
                  <SectionCardBlog key={post} post={post[1]} />
                ))}
                
              </div>
            </div>
          </section >
        </div>
        <div className="w-1/5 ">
          <div className="container px-5 py-24 mx-10 ml-4">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="text-center">
                <div className="w-25 h-25 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    className="rounded-full "
                    src='/images/rossana.jpg'
                    width={100}
                    height={100}
                  />

                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Rossana Ulloque</h2>
                  <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Consultora Inmobiliaria de propiedades de lujo y Corporativo. Me identifico con las personas que persiguen un estilo de vida exclusivo y sofisticado. </p>
                </div>
              </div>
            </div>
            <br />
            <div><SectionInfo /></div>
            <br />
            <div><BCategory /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const NewSearchBlogs = await fetchApi(`${baseUrl}/news/search`);
  return {
    props: {
      NewSearchBlogs
    },
  };
}

export default Blog