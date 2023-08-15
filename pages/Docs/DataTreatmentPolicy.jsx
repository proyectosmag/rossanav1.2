import { useState } from "react";
import Link from "next/link";
import ImageBanner from "../../components/Gallery/ImageBanner";
import DataPolicy from "../../components/Form/DataPolicy";
import Head from "next/head";

export default function DataTreatmentPolicy() {
  /*  const [value, setValue] = useState("0");

    function logValue() {
        console.log(value);
    } */

  return (
    <>
      <Head>
        <title>Política de tratamiento de datos</title>
      </Head>
      <ImageBanner src="/images/banner.jpg" />
      <div className="px-80 ">
        <br />
        <h3 className="text-4xl text-center font-bold">VER POLÍTICA</h3>
        <br />
        <p className="text-xl text-justify ">
          Por lo tanto luego de leer la{" "}
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline"
            href="/Docs/DataTreatment"
          >
            Politica de Tratamiento de Datos Personales
          </Link>{" "}
          de <b>ROSSANA ULLOQUE LTDA</b>., otorgo mi autorizacion para que el
          responsable continúe o inicie el Tratamiento de mis datos personales
          de acuerdo con lo allí dispuesto La información para el Tratamiento de
          mis datos personales la he suministrado de forma voluntaria y es
          verídica
        </p>
        <div className="grid h-screen place-items-center">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ">
            <DataPolicy />
          </div>
        </div>
      </div>
    </>
  );
}
