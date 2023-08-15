import axios from "axios";
export const baseUrl = '';
export const apiWasiNewClient = async (event, property) => {
const {data} = await axios.post("https://api.wasi.co/v1/client/add", {
      
            'id_company': '1819614',
            'wasi_token': '4VhK_p32G_kZxR_pKEz',
            'id_user':3,
            "first_name": event.target.name.value,
            "email": event.target.email.value,
            "cell_phone": event.target.tel.value,
            "comment": "es una prueba descargado el inmueble, con la referencia #"+property,
            "send_information": true,
        
    }).then((res) => {
        if (!res.ok) throw new Error("Ha fallado su mensaje intentelo nuevamente");
        return res.json();
    });

    return data;
}
