import { apiWasiNewClient } from "@/lib/apiWasiNewClient";
import { baseUrl, fetchApiPdf } from "../../../utils/fetchApiPdf";
import jsPDF from "jspdf";
import { Input } from "postcss";
import { useState } from "react";


const GeneratePdf = ({ property }) => {
    const [name, setName] = useState('');
  // convertir a PDF el contenido
const convertHTMLtoPDF = ()=>{
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
        callback: function(pdf){
            pdf.save(property.title+".pdf");
        }
    });
}
const valor_inmueble = ()=>{
       if(property.rent_price > 0){
            return property.rent_price_label;
        }else if(property.sale_price > 0){
            return property.sale_price_label;
        }else{
            return "$0.00";
        }
}
const type_inmueble = () => {
    if(property.rent_price > 0){
        return "En Renta."
    }else if(property.sale_price > 0){
        return "En Venta."
    }
}
const status_inmueble = () => {
    if(property.id_availability == 1){
        return "Disponible";
    }else if(property.id_availability == 2){
        return "Vendido";
    }else if(property.id_availability == 3){
        return "Rentado";
    }else{
        return "Sin Estado ";
    }
}

const sendingForm = async (event) => {
    event.preventDefault();
    const data = await apiWasiNewClient(event, property.id_property );
    console.log(data);
}
// vista previa del HTML
    return (
        <div style={{padding:"50px", margin:"0 auto", backgroundImage:"url('/images/catedral.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"100%, cover"}}>
                <div style={{width:"100%",paddingTop:"50px", paddingBottom:"50px", display:"flex", margin:"auto 0px", justifyContent:"center"}}>
                <form className="flex flex-col" onSubmit={sendingForm} style={{width:"30%", borderRadius:"10px", background:"rgba(0,0,0,0.4)", padding:"30px"}}>
                    <h1 style={{fontSize:"21px", color:"#fff", textTransform:"uppercase", textAlign:"center"}}>Descargar Información</h1>
                    <hr></hr>
                    <p style={{fontSize:"14px", color:"#fff", marginTop:"15px", marginBottom:"15px"}}>Para poder descargar el inmueble que te interesa, necesitamos que proporciones la siguiente información:</p>
                    <label style={{color:"#fff", fontSize:"18px"}}>Nombre</label>
                    <input id="name" name="name" style={{color:"#000", padding:"5px", borderRadius:"4px", marginBottom:"10px"}} type="text"/>
                    <label style={{color:"#fff", fontSize:"18px"}}>Correo</label>
                    <input id="email" name="email" style={{color:"#000", padding:"5px", borderRadius:"4px", marginBottom:"10px"}} type="email"/>
                    <label style={{color:"#fff", fontSize:"18px"}}>Telefono</label>
                    <input id="tel" name="tel" style={{color:"#000", padding:"5px", borderRadius:"4px"}} type="number"/>
                    
                     <button style={{marginTop:"20px", color:"#fff",padding:"10px",border:"1px solid #000", borderRadius:"8px", background:"#000"}} type="submit">Descargar</button>
                </form>
                <Link href="#" onClick={GeneratePdf}>
                    <Image alt="boton de descarga" className="md:mt-6" width={201} height={55} src={'/images/Boton-descarga.png'} />
                </Link>
                
                </div>
                {/* contenido general */}
                <div style={{display:"none"}}>
                <div id="content" style={{ background:"#fff", width:"600px"}}>
                    {/* banner de rossanaoulloque */}
                    <div style={{ display: "flex"}}>
                        <img src={'/images/banner.jpg'} style={{width:'600px', height:'150px'}} />
                    </div>
                    {/* fin banner principal */}
                    <div style={{display: "flex", width: "100%", paddingLeft:"10px", paddingRight:"10px"}}>
                        {/* imagen principal de inmueble */}
                        <div style={{width: "45%", padding:"5px"}}>
                            <img style={{marginBottom:"30px",width:"100%",height:"360px", boxShadow:"0px 0px 8px 1px rgba(0,0,0,0.04)"}} src={property.main_image['url']} />
                        </div>
                        {/* fin image del inmueble */}
                        {/* Div Derecho contenido del inmueble */}
                        <div style={{width: "55%"}}>
                        <div style={{padding:"10px", marginTop:"10px",height:"360px", border:"1px solid #F3F3F3", borderRadius:"10px" }}>
                                <h1 style={{marginBottom:"10px", fontWeight:"800", fontSize:"16px", }}>{property.title}  </h1>
                                <h4><span style={{fontWeight:"800", fontSize:"14px"}}>Precio: </span> {valor_inmueble()} <span style={{paddingLeft:"10px"}}>{property.iso_currency}</span></h4>
                                <h4><span style={{fontWeight:"800", fontSize:"14px"}}>Inmueble: </span> {type_inmueble()}</h4>
                                <h4><span style={{fontWeight:"800", fontSize:"14px"}}>Estado: </span> {status_inmueble()} </h4>
                                <h4 style={{fontSize:"14px", fontWeight:"800", marginTop:"10px"}}>Detalle del inmueble  </h4>
                                <hr style={{marginBottom:"10px",marginTop:"10px"}} />
                                <div style={{display:"flex", width:"100%", }}>
                                    {/* Columna 1 */}
                                            <div style={{width:"50%" }}>
                                                <div style={{display:"flex", width:"100%", }}>
                                                    {/* item de la caracteristica  */}
                                                    <div style={{ width:"10%"}}>
                                                    <img style={{marginTop:"11px", width:"10px"}} src="/icons/code.png"></img>
                                                    </div>
                                                    <div style={{fontSize:"12px", width:"90%"}}>
                                                        {"Ref. "+property.id_property}.
                                                    </div>
                                                </div>
                                                <div style={{display:"flex", width:"100%"}}>
                                                    {/* item de la caracteristica  */}
                                                    <div style={{ width:"10%"}}>
                                                    <img style={{marginTop:"11px", width:"10px"}} src="/icons/map.png"></img>
                                                    </div>
                                                    <div style={{fontSize:"12px", width:"90%"}}>
                                                        {property.location_label}.
                                                    </div>
                                                </div>
                                                <div style={{display:"flex", width:"100%" }}>
                                                    {/* item de la caracteristica  */}
                                                    <div style={{ width:"10%"}}>
                                                    <img style={{marginTop:"11px", width:"10px"}} src="/icons/location.png"></img>
                                                    </div>
                                                    <div style={{fontSize:"12px", width:"90%"}}>
                                                    {property.city_label+ " / " + property.country_label }.
                                                    </div>
                                                </div>
                                                <div style={{display:"flex", width:"100%"}}>
                                                    {/* item de la caracteristica  */}
                                                    <div style={{ width:"10%"}}>
                                                    <img style={{marginTop:"11px", width:"10px"}} src="/icons/states.png"></img>
                                                    </div>
                                                    <div style={{fontSize:"12px", width:"90%"}}>
                                                        {property.zone_label}.
                                                    </div>
                                                </div>
                                            </div>
                                    {/* fin Columna 1 */}
                                    {/* columna 2 */}
                                            <div style={{width:"50%" }}>
                                                <div style={{display:"flex", width:"100%", }}>
                                                    {/* item de la caracteristica  */}
                                                    <div style={{ width:"10%"}}>
                                                    <img style={{marginTop:"11px", width:"10px"}} src="/icons/money.png"></img>
                                                    </div>
                                                    <div style={{fontSize:"12px", width:"90%"}}>
                                                    {"Costo Administración. "+property.maintenance_fee_label}.
                                                    </div>
                                                </div>
                                                <div style={{display:"flex", width:"100%", }}>
                                                    {/* item de la caracteristica  */}
                                                    <div style={{ width:"10%"}}>
                                                    <img style={{marginTop:"11px", width:"10px"}} src="/icons/cama.png"></img>
                                                    </div>
                                                    <div style={{fontSize:"12px", width:"90%"}}>
                                                        {property.bedrooms} Habitaciones.
                                                    </div>
                                                </div>
                                                <div style={{display:"flex", width:"100%", }}>
                                                    {/* item de la caracteristica  */}
                                                    <div style={{ width:"10%"}}>
                                                    <img style={{marginTop:"11px", width:"10px"}} src="/icons/baño.png"></img>
                                                    </div>
                                                    <div style={{fontSize:"12px", width:"90%"}}>
                                                        {property.bathrooms} Baños.
                                                    </div>
                                                </div>
                                                <div style={{display:"flex", width:"100%", }}>
                                                    {/* item de la caracteristica  */}
                                                    <div style={{ width:"10%"}}>
                                                    <img style={{marginTop:"11px", width:"10px"}} src="/icons/area.png"></img>
                                                    </div>
                                                    <div style={{fontSize:"12px", width:"90%"}}>
                                                        {property.built_area} m² Área Construida.
                                                    </div>
                                                </div>
                                                <div style={{display:"flex", width:"100%", }}>
                                                    {/* item de la caracteristica  */}
                                                    <div style={{ width:"10%"}}>
                                                    <img style={{marginTop:"11px", width:"10px"}} src="/icons/edificio.png"></img>
                                                    </div>
                                                    <div style={{fontSize:"12px", width:"90%"}}>
                                                        {property.floor} Pisos.
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                    {/* fin columna 2 */}
                                </div>
                                
                        </div>
                        
                    </div>
                    
                    {/* fin DIV drechos */}
                    </div>
                    <div style={{display:"flex", width: "100%", paddingLeft:"5px", paddingRight:"5px", paddingBottom:"10px", marginTop:"-40px"}}>
                    <div style={{width:"50%", background:"#FFFEFE", borderRadius:"12px", padding:"30px", marginRight:"5px", marginLeft:"5px"}}>
                        <h2 style={{marginBottom:"10px", fontWeight:"bolder"}}>Caracteristica Internas</h2>
                            {property.features.internal.map((item) => (
                                        <div
                                        key={item.id}
                                        className="-m-3 p-2 flex items-start rounded-lg"
                                        >
                                        <img style={{marginTop:"11px", width:"10px"}} src="/icons/check2.png"></img>
                                        <div className="ml-4">
                                            <p style={{fontSize:"14px"}}>
                                                {item.nombre}
                                            </p>
                                        </div>
                                        </div>
                            ))}
                        </div>
                        <div style={{width:"50%", background:"#FFFEFE", borderRadius:"12px", padding:"30px", marginRight:"5px", marginLeft:"5px"}}>
                        <h2 style={{marginBottom:"10px", fontWeight:"bolder"}}>Caracteristica Externas</h2>
                            {property.features.external.map((item) => (
                                        <div
                                        key={item.id}
                                        className="-m-3 p-2 flex items-start rounded-lg"
                                        >
                                        <img style={{marginTop:"11px", width:"10px"}} src="/icons/check2.png"></img>
                                        <div className="ml-4">
                                            <p style={{fontSize:"14px"}}>
                                                {item.nombre}
                                            </p>
                                        </div>
                                        </div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
               
        </div>
    );
    // fin HTML
}
export default GeneratePdf;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApiPdf(`${baseUrl}/property/get/${id}`)
    return {
        props: {
            property: data,
        },
    };
}



