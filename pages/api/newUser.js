import { baseUrl, fetchApi } from "../../utils/fetchApi";


const handler = async (req, res) => {
  const body = req.body;
  if (!body.name || !body.mail || !body.tel) {
    return res.status(500).json({ msg: 'Name was not found' });
  }
  try {
    const data = await fetchApi(`${baseUrl}/client/contact?&email=${body.mail}&first_name=${body.name}&id_country=1&id_region=4&id_city=82&phone=${body.tel}&comment=${body.mensage ? `${body.mensage} Código de propiedad: ${body.property}` : `Código de propiedad: ${body.property}` }`);
    res.status(200).json({ msg: data });
  } catch (error) {
    return res.status(400).json({ msg: 'error en api' });
  }
}
export default handler;
