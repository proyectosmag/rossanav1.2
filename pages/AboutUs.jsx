import GroupImage from "../components/Gallery/GroupImage";
import SectionInfoIcons from "../components/Section/SectionInfoIcons";
import SectionWithSocialMedia from "../components/Section/SectionWithSocialMedia";
import TitleSecondary from "../components/Titles/TitleSecondary";
import TitleSimple from "../components/Titles/TitleSimple";
import Head from "next/head";

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>Sobre nosotros</title>
      </Head>
      <SectionWithSocialMedia name="Rossana ULLOQUE" />

      <TitleSimple
        title="Conoce la nueva perspectiva de Rossana Ulloque"
        body="Todo lo que sueñas y sientes que mereces vivelo intensamente con la convicción de que ya lo tienes, posicionarse mentalmente en conseguir esa vida que todos nos merecemos, nos hara lograr el más alto nivel de vida que nos conduce al disfrute de todo lo concebido como material, creando una atmosfera de: Comodidad, seguridad, confort y placeres que nos ofrece está vida, sin discriminaciones. "
      />

      <GroupImage
        src1={"/images/properties/propiedad1.jpg"}
        src2={"/images/properties/propiedad2.jpg"}
        src3={"/images/properties/propiedad3.jpg"}
        src4={"/images/properties/propiedad4.jpg"}
        src5={"/images/properties/propiedad5.jpg"}
        src6={"/images/properties/propiedad6.jpg"}
      />

      <SectionInfoIcons
        firstTitle="Busqueda de proovedores"
        firstBody="Colaboraciones o proveedores con empresas afines con las que se identifique en
                concepto de cultura empresarial Luxury Lifes Style y ofrecer ese valor diferencial en el mercado
                , de forma no intrusiva , combinando técnicas de marketing y publicidad."
        secondTitle="¿Como lo haremos?"
        secondBody="Mediante el contenido
                apropiado al comprador desde el inicio del proceso, para satisfacer las necesidades de ese cliente
                potencial y brindar no solo una venta de una propiedad raíz , sino interactuar con el cliente
                ofreciendo un servicio integral."
        threeTitle="Proposito"
        threeBody="Es proyectarme en el tema inmobiliario con un plus
                diferenciador en el mercado asesorándote en el proceso de escogencia de
                tu casa, transformando tu sueño en una realidad espacial cálida con
                elegancia y confort con nuestras alianzas obtendremos tus sueños"
      />

      <TitleSecondary
        title="Como objetivo convertir esos leads a ventas predecibles"
        body="Alinear la fuerza comercial y el equipo de marketing para maximizar los resultados, lo
                que también se conoce como SMARKETING. Con esto, maximizamos visibilidad, generando
                demanda y aumento de contactos y leads cualificados."
        bLabel="Descubre"
      />
    </div>
  );
};

export default AboutUs;
