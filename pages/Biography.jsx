import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaEnvelopeSquare,
} from "react-icons/fa";
import ContainerBibliographyInfo from "../components/Container/ContainerBibliographyInfo";
import TitleThird from "../components/Titles/TitleThird";
import CarouselBiography from "../components/carrouselBiography";

const Biography = () => {
  return (
    <div className="container xl:px-20 px-6 mx-auto">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden  mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
              <img src="/images/Rossana_foto.jpeg" className="block lg:hidden shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"/>
            </div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Rossana Ulloque</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-dorado opacity-25"></div>
            <div className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-dorado-light pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              Abogada de profesión
            </div>
            <div className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-dorado pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              Barranquilla - Atlántico
            </div>
            <div className="pt-8 text-sm">
              SOY UNA PERSONA CONVENCIDA, QUE LO BUENO QUE HAY EN ESTE
              MUNDO NO ES PARA POCOS, ES PARA LOS QUE PENSAMOS QUE LA CALIDAD DE
              VIDA ESTÁ LIGADA AL ESFUERZO POR DESARROLLAR TODA LA CAPACIDAD
              INNOVADORA Y CREATIVA QUE TIENE NUESTRO CEREBRO PARA GENERAR
              MULTIPLES IDEAS AL SERVICIO DE LOS DEMAS.
            </div>

            <div className="pt-12 pb-8">
              <button className="bg-dorado hover:bg-dorado-light text-white font-bold py-2 px-4 rounded-full">
                Marcas aliadas
              </button>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <Link href="https://www.facebook.com/rossanaulloque/">
                <FaFacebookSquare className="text-3xl text-black hover:text-dorado" />
              </Link>

              <Link href="https://www.instagram.com/rossanaulloque/">
                <FaInstagramSquare className="text-3xl text-black hover:text-dorado" />
              </Link>

              <Link href="https://api.whatsapp.com/send/?phone=573205178956&text&type=phone_number&app_absent=0">
                <FaWhatsappSquare className="text-3xl text-black hover:text-dorado" />
              </Link>

              <Link href="mailto:Luxury@rossanaulloque.com">
                <FaEnvelopeSquare className="text-3xl text-black hover:text-dorado" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img  src="/images/Rossana_foto.jpeg" className="rounded-none shadow-2xl hidden lg:block" style={{height:"520px"}}/>
        </div>
        <div className="absolute top-0 right-0 h-12 w-18 p-4"></div>
      </div>

      <div className="flex flex-row ">
        <div className="pr-8 text-justify">
          <ContainerBibliographyInfo
            title="Objetivo"
            src="/images/logotypeYellow.png"
            abstract="Maximizar visibilidad , generando
                                    demanda y aumento de contactos y leads cualificados, logrando maximizar nuestra visibilidad
                                    online, mejoramos las comunicaciones de la empresa generando más leads y generamos un gran
                                    impacto en nuestros clientes potenciales fidelizándolos y en definitiva mejoramos en prestigio y
                                    reputación , que es donde reside gran parte del éxito en las ventas y crecimiento del negocio"
          />
          <ContainerBibliographyInfo
            title="Propuesta"
            src="/images/logotypeYellow.png"
            abstract="Interactuar con el cliente
                                    ofreciendo un servicio integral , toda una gama de servicios complementarios a su compra y darles
                                    Una gama exponencial de servicios de lujo , de acuerdo a su estilo de vida. Esa sería una asesoría 
                                    donde se trasmitan valores, compromiso, transparencia y confianza y sobretodo complemente todo lo
                                    que envuelve esa vida de glamour y sofisticación."
          />

          <ContainerBibliographyInfo
            title="Desarrollo"
            src="/images/logotypeYellow.png"
            abstract="Los procesos de ventas hoy en día suelen ser lentos, ya no basta con una buena presentación de
                                    nuestros productos o servicios en redes sociales y un presupuesto ajustado para ganarnos la
                                    confianza del cliente y cerrar el acuerdo comercial."
          />
        </div>
      </div>

      <TitleThird />

      <div className="pt-8">
        <CarouselBiography
        />
      </div>
      <br />
      <br />
    </div>

  );
};

export default Biography;
