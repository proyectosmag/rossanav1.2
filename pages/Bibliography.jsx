import ContainerBibliographyInfo from "../components/Container/ContainerBibliographyInfo"
import ContainerProjects from "../components/Container/ContainerProjects"
import ImageBanner from "../components/Gallery/ImageBanner"

import SectionCards from "../components/Section/SectionCards"
import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa"
import ImageWithText from "../components/Gallery/ImageWithText"


const Bibliography = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-col">
                    <ImageBanner alt="banner" url="/" src="/images/banner.jpg" />
                    <div className="lg:w-10/12 mx-auto">
                        <div className="flex">
                            {/*   Imagen redonda */}
                            <div className="flex w-6/12 rounded-lg justify-center  ">
                                {/* <div className=" p-2 bg-dorado rounded-full  ">
                                   
                                </div> */}
                                <div className="">
                                    <Image
                                        alt="rossana profile"
                                        src="/images/rossanaprofile.jpg"
                                        className="rounded-full object-center m-20 "
                                        width={250}
                                        height={250} /> </div>

                            </div>

                            {/*  comentario  */}
                            <div className="flex columns w-6/12 max-lg:flex ">
                                <p className="pt-20 text-justify italic">
                                    <FaQuoteLeft className="text-dorado text-5xl " />
                                    SOY UNA SER HUMANO CONVENCIDO DE QUE LO BUENO QUE HAY EN ESTE
                                    MUNDO NO ES PARA POCOS, ES PARA LOS QUE PENSAMOS QUE LA
                                    CALIDAD DE VIDA VA LIGADA AL ESFUERZO POR DESARROLLAR TODA LA
                                    CAPACIDAD INNOVADORA Y CREATIVA QUE TIENE NUESTRO CEREBRO PARA
                                    GENERAR MULTIPLES IDEAS AL SERVICIO DE LOS DEMAS QUE, COMO UN
                                    EFECTO DOMINO, NOS AYUDAN A ALCAZAR NUESTROS OBJETIVOS CON LOS
                                    MAS ALTOS ESTANDARES DE CALIDAD.
                                    <br />
                                    <br />
                                    <b>ROSSANA ULLOQUE</b>
                                </p>

                            </div>

                        </div>

                        <div className="flex flex-row ">

                            <div className="w-2/3 pr-8 text-justify">
                                <ContainerBibliographyInfo
                                    title="Objetivo"
                                    abstract="Maximizar visibilidad , generando
                                    demanda y aumento de contactos y leads cualificados, logrando maximizar nuestra visibilidad
                                    online, mejoramos las comunicaciones de la empresa generando más leads y generamos un gran
                                    impacto en nuestros clientes potenciales fidelizándolos y en definitiva mejoramos en prestigio y
                                    reputación , que es donde reside gran parte del éxito en las ventas y crecimiento del negocio"

                                />


                                <ContainerBibliographyInfo
                                    title="Propuesta"
                                    abstract="Interactuar con el cliente
                                    ofreciendo un servicio integral , toda una gama de servicios complementarios a su compra y darles
                                    Una gama exponencial de servicios de lujo , de acuerdo a su estilo de vida. Esa sería una asesoría 
                                    donde se trasmitan valores, compromiso, transparencia y confianza y sobretodo complemente todo lo
                                    que envuelve esa vida de glamour y sofisticación." />


                                <ContainerBibliographyInfo
                                    title="Desarrollo"
                                    abstract="Los procesos de ventas hoy en día suelen ser lentos, ya no basta con una buena presentación de
                                    nuestros productos o servicios en redes sociales y un presupuesto ajustado para ganarnos la
                                    confianza del cliente y cerrar el acuerdo comercial." />

                            </div>

                            <div className="w-1/3 pt-10 hover:scale-95 ease-in duration-200">
                                <ImageBanner src="/images/playa.jpg" />
                                <p className="text-center italic text-slate-800">
                                    Alto prado miami beach - 2022
                                </p>
                            </div>

                        </div>


                        <div className="flex flex-col sm:flex-row leading-relaxed text-lg  mb-4 text-justify pt-12">
                            <p className="">
                                Logrando optimizar sus habilidades comerciales y laborales al manejar personas vinculadas a diferentes sectores de la economía lo que la llevo a convertirse en una persona profesional en temas de atención al cliente. En el año 1992 decide independizarse y armar una compañía especializada en merchandising de productos que se exhiben y venden en los supermercados a nivel nacional, convirtiéndose esta compañía en una evolución de las empresas de servicios temporales, puesto que, además de ejercer labores de empleador, presentaba informes estadísticos de los puntos de venta contratados; convirtiéndose esta empresa en el tercer operador logístico de uno de las tiendas más importantes en Colombia.
                                <br />
                                <br />
                                Al poco tiempo decide independizarse e iniciar su propia empresa pero como agente inmobiliario especializada en un nicho de mercado especifico, el de las ventas de propiedades de lujo primordialmente en el sector residencial y corporativo.
                                <br />
                                <br />
                                Actualmente llevo 6 años en el mercado inmobiliario, su éxito radica en la experiencia de más de 30 años en el manejo de gente y su profesionalismo en el servicio al cliente, capacitándose todos estos años en diferentes áreas del marketing inmobiliario, perteneciendo a varias asociaciones de profesionales en el sector y creando un modelo de negocio diferente donde asocia la finca raíz especializada en un concepto de alto estilo de vida.
                                <br />

                                <br />
                                Hay un hogar para cada etapa de su vida y <b>ROSSANA</b> lo ayudará a encontrarlo, llámela para una consulta gratuita y pondrá su dedicación y experiencia a trabajar para usted.
                                Deseo poder trasmitir a través de mi página, un profesionalismo en el
                                servicio, identificando el deseo que impulsa la decisión de COMPRA de
                                aquella persona o familia que me contacta, logrando captar la atención a
                                través de herramientas digitales motivadoras, que atraiga el nicho de
                                mercado que pretendo alcanzar, procurando ser muy selectiva en la
                                escogencia de la propiedad .
                            </p>

                        </div>

                    </div>

                </div >
                <ImageWithText />
            </section >
            <br />
            <br />
        </div >
    )
}

export default Bibliography
