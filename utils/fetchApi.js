import axios from "axios";

export const baseUrl = 'https://api.wasi.co/v1';

export const fetchApi = async (url, take) => {
  // const data = await propertysAll.json();
  const { data } = await axios.get((url), {
    
    params: {
      'id_company': process.env.ID_COMPANY,
      'wasi_token': process.env.WASI_TOKEN,
      'take': take,
      
    }
  });
  return data;
}

