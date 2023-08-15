import GroupSocialMedia from "../Gallery/GroupSocialMedia"
import ContainerBlog from "./ContainerBlog"

import ContainerImageWithText from "./ContainerImageWithText"
const RecentArticle = [
    { image: '/images/oficina.png', title: 'Our first office1', abstract: "Over the past year, Volosoft has undergone changes.", href: "#" },
    { image: '/images/oficina.png', title: 'Our first office2', abstract: "Over the past year, Volosoft has undergone changes.", href: "#" },
    { image: '/images/oficina.png', title: 'Our first office3', abstract: "Over the past year, Volosoft has undergone changes.", href: "#" },
    { image: '/images/oficina.png', title: 'Our first office4', abstract: "Over the past year, Volosoft has undergone changes.", href: "#" }
]


const ContainerDetailBlog = () =>
(
    <>
        <div className="container mx-auto rounded-3xl pl-9">
            <p className="text-neutral-100 md:text-lg" >Publicado en <span className="font-bold ">Rossana Ulloque </span></p>
            <h1 className="text-neutral-100 text-5xl pb-12 font-medium md:text-7xl">Esto es un titulo</h1>
        </div>
        <div className="md:container md:mx-40 max-w-none bg-white px-10 py-8  rounded-3xl  md:px-16 md:py-16">
            <div className="flex">
                <div className="md:w-9/12 text-2xl text-justify ">
                    <p>El invertir en bienes inmuebles es un complemento a otros instrumentos de inversi&oacute;n y forman parte de la estrategia de diversificaci&oacute;n de una cartera. Este tipo de inversi&oacute;n es muy atractiva por su modelo de negocio, ya que al comprar una propiedad para ponerla en renta nos permite generar un flujo que nos ayuda a pagar la inversi&oacute;n y hacernos de un activo que vaya incrementando su valor con el paso del tiempo.
                    </p>
                    <br />

                    <p>Esto no significa que este tipo de inversi&oacute;n sea libre de riesgos. Es importante considerar que en bienes ra&iacute;ces &ndash; as&iacute; como las inversiones en la bolsa &ndash; hay muchos factores externos y riesgos que se tienen que considerar para tomar una decisi&oacute;n informada.</p>
                    <br />

                    <p>De acuerdo con un estudio de BBVA, se&ntilde;ala que se debe tomar en cuenta que las inversiones inmobiliarias son m&aacute;s desafiantes que otras, pues requieren de cumplir con algunos requisitos financieros, legales y otras diligencias antes, durante y despu&eacute;s del proceso de compra y venta.</p>
                    <p>De tal manera que se destacan 10 puntos a considerar para lograr una inversi&oacute;n inmobiliaria rentable:</p>
                    <br />

                    <p><strong>1. El valor futuro es desconocido.</strong>&nbsp;Considera que hay factores como la oferta y la demanda del mercado, la ubicaci&oacute;n, el estado f&iacute;sico del inmueble y la situaci&oacute;n y perspectiva econ&oacute;mica que provocan fluctuaciones en el valor del bien inmueble. Un d&iacute;a se puede tener un valor muy alto por distintos factores como la demanda de cierta zona, y tiempo despu&eacute;s el valor puede ser menor por otros factores como el estado del edificio o una perspectiva econ&oacute;mica negativa.</p>
                    <p><strong>2. Define tu presupuesto.</strong>&nbsp;Lo primero que debes hacer es determinar la cantidad de dinero que destinar&aacute;s a esta inversi&oacute;n, considerando que cuando se habla de invertir en bienes ra&iacute;ces, se trata de un movimiento de largo plazo y que no es una opci&oacute;n tan l&iacute;quida como otras.</p>
                    <p><strong>3. Horizonte de inversi&oacute;n.</strong>&nbsp;Para generar plusval&iacute;a deber&aacute;s dejar que la inversi&oacute;n madure un periodo de tres a cinco a&ntilde;os, por lo tanto, considera esto en tu evaluaci&oacute;n y proyecci&oacute;n de tu inversi&oacute;n. Tienes que ser paciente para que tu inmueble aumente de valor y valga la pena venderlo.</p>
                    <p><strong>4. Seguridad.</strong>&nbsp;Al invertir en bienes ra&iacute;ces deber&aacute;s considerar que la propiedad debe estar inscrita en el Registro P&uacute;blico, procurar conocer su situaci&oacute;n fiscal e investigar el proceso para escriturarla. Evita adquirir una propiedad que est&eacute; intestada.</p>
                    <p><strong>5. Investiga para adquirir en preventa.</strong>&nbsp;Esta es una opci&oacute;n atractiva para invertir debido a los altos niveles de plusval&iacute;a que se pueden generar, pues encontrar un proyecto que est&eacute; en una etapa muy temprana, ya sea en maqueta o en plano, tendr&aacute; un incremento importante de valor al concluir su construcci&oacute;n. La clave es que te des el tiempo de investigar en Profeco al desarrollador, de tal forma de asegurarte de su trayectoria y confiabilidad.</p>
                    <p><strong>6. Busca ciudades, estados, municipios y alcald&iacute;as atractivas para invertir.</strong>&nbsp;Las ciudades m&aacute;s estables ofrecen una mayor plusval&iacute;a para invertir, pues adem&aacute;s de que poco a poco se convierten en un im&aacute;n de otros inversores, se llenan de gente que demanda servicios, y con la popularidad que ganen pueden haber buenas oportunidades de comprar para rentar o vender despu&eacute;s.</p>
                    <p><strong>7. Remodelar y vender.</strong>&nbsp;Otra opci&oacute;n es comprar propiedades antiguas para remodelar y despu&eacute;s vender. Los expertos se&ntilde;alan que se puede obtener hasta un 30% de utilidades.</p>
                    <p><strong>8. Invierte para rentar a un mayor valor.</strong>&nbsp;La renta de tu bien ra&iacute;z te permite obtener beneficios en un menor plazo, pero no debes olvidar que probablemente tengas que hacer una inversi&oacute;n inicial y darle mantenimiento a la propiedad para que tenga m&aacute;s valor al rentarla.</p>
                    <p><strong>9. Liquidez.</strong>&nbsp;la venta de un inmueble no se da de la noche a la ma&ntilde;ana. Dependiendo de la oferta y demanda en un momento dado, podr&aacute; ser necesario reducir el precio de la venta o esperar m&aacute;s tiempo para encontrar a un comprador dispuesto a pagar el monto deseado.</p>
                    <strong>10. Flujo del efectivo.</strong>&nbsp;A mayor oferta, mayor competencia. A menor demanda, mayor dificultad de encontrar inquilinos. Se debe considerar el riesgo de no encontrar inquilinos por periodos que pueden ser prolongados, y con ello, no contar con ese flujo.

                    <div class="container mx-auto px-4">

                    </div>
                </div>

                <div className="md:w-3/12 pl-8 ">

                    <ContainerImageWithText
                        src='/images/office-laptops.png'
                        category="INSTAGRAM"
                        abstract="Top 10 ventas para este 2023, encuentra tu casa ideal a un precio ideal conoce más aqui"
                        labelBotton="Conoce más" 
                        />

                    <br />

                    <ContainerImageWithText
                        src='/images/office-laptops.png'
                        category="FACEBOOK"
                        abstract="Conoces la nueva casa de aquel famoso de barranquilla, no imaginas cuanto costo"
                        labelBotton="Saber más" />


                    <br />

                    <ContainerImageWithText
                        src='/images/office-laptops.png'
                        category="TWITTER"
                        abstract="Muchas personas han vendido sus apartamentos a final de año conoces el por qué"
                        labelBotton="Comenta" />


                    <br />

                    <ContainerImageWithText
                        src='/images/office-laptops.png'
                        category="YOUTUBE"
                        abstract="Mansión valorada en más de 100 Millones de pesos, tiene un total de 5 habitaciones y 3 baños"
                        labelBotton="Descubre" />


                    <br />





                </div>
            </div>
        </div>
    </>
)

export default ContainerDetailBlog