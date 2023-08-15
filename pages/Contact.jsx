import ContactInfo from "../components/Gallery/ContactInfo";
import Form from "../components/Form/contacto";
import Head from "next/head";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <Head>
        <title>Contactanos</title>
      </Head>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <ContactInfo
          title="PROPOSITO"
          body="Asesoría que trasmite: valores, compromiso, transparencia y confianza y sobre
        todo lo complemente esa vida de glamour y sofisticación."
          secondTitle="CORREEO"
          bodyEmail="luxury@rossanaulloque.com"
          threeTitle="TELEFONO"
          bodyPhone="(+57) 320 517 8956"
        />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
