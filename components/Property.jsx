import Link from 'next/link'
import Image from 'next/image'
import { FaBath, FaTh, FaBed, FaCar, FaRegBuilding, FaMapMarkerAlt } from 'react-icons/fa'

const image_style_object = {
   height:'150px!important'
}

const Property = ({ property: {
   area,
   title,
   id_property,
   main_image,
   city_label,
   for_rent,
   for_sale,
   rent_price_label,
   sale_price_label,
   bathrooms,
   zone_label,
   bedrooms,
   floor,
   garages } }) => (
   // hover:scale-105 
   <Link key={id_property} href={`/propiedad/${id_property}`} className="group shadow-lg rounded-lg 
   transition ease-in-out delay-150 hover:-translate-y-1 hover:border-spacing-1.5 duration-300 border-2 border-dorado">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-3 xl:aspect-h-2">
         <img
            src={main_image.url != undefined ? main_image.url_original : '/images/imagen-no-disponible.svg'}
            alt="house"
            className="imagen_height h-full w-full object-cover object-center transition ease-in-out delay-15 hover:scale-105 duration-500 "
         />
         {for_sale === 'true' ? <span className="m-4 text-xs inline-flex py-2 px-4 leading-none text-center whitespace-nowrap align-baseline font-bold text-neutral-50 rounded-lg mb-1 max-w-min max-h-7 bg-gradient-to-r from-dorado via-dorado-super-light to-dorado venta">Venta</span> : null}
         {for_rent === 'true' && for_sale === 'true' ? <span className="m-4 ml-24 text-xs inline-flex py-2 px-4 leading-none text-center whitespace-nowrap align-baseline font-bold from-dorado via-dorado-super-light bg-gradient-to-r to-dorado text-neutral-50 rounded-lg mb-1 max-w-min max-h-7 ">Renta</span> : null}
         {for_rent === 'true' && for_sale === 'false' ? <span className="m-4 text-xs inline-flex py-2 px-4 leading-none text-center whitespace-nowrap align-baseline font-bold from-dorado via-dorado-super-light to-dorado text-neutral-50 rounded-lg mb-1 max-w-min max-h-7  ">Renta</span> : null}
      </div>
      <div className="px-3 pb-3 ">
         <div className="rounded-md w-full mt-2">
            <ol className="list-reset flex">
               <FaMapMarkerAlt className='mr-1 mt-1 text-dorado text-sm' />
               <li className="text-dorado text-sm ">{city_label}, {zone_label}</li>
            </ol>
         </div >
         {sale_price_label != '$0' ? <p className="mt-1 text-lg  text-zinc-900 font-semibold">{sale_price_label} </p> : false}
         {rent_price_label != '$0' ? <p className="mt-1 text-sm  text-zinc-900 font-semibold">{rent_price_label} Precio renta</p> : false}
         <h3 className="mb-3 pb-3  font-normal text-zinc-900 lowercase border-b border-dorado">{title}</h3>
         {bathrooms != 0 ? <span className="mr-3 text-sm inline-flex py-2 px-4 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-100 text-zinc-800 rounded-lg mb-3"><FaBath className='mr-2 text-dorado text-base' />{bathrooms}</span> : null}
         {bedrooms != 0 ? <span className="mr-3 text-sm inline-flex py-2 px-4 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-100 text-zinc-800 rounded-lg mb-3"><FaBed className='mr-2 text-dorado text-base' />{bedrooms}</span> : null}
         {garages != 0 ? <span className="mr-3 text-sm inline-flex py-2 px-4 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-100 text-zinc-800 rounded-lg mb-3"><FaCar className='mr-2 text-dorado text-base' />{garages}</span> : null}
         {floor != 0 ? <span className="mr-3 text-sm inline-flex py-2 px-4 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-100 text-zinc-800 rounded-lg mb-3"><FaRegBuilding className='mr-2 text-dorado text-base' />{floor} P</span> : null}
         {area != 0 ? <span className="mr-3 text-sm inline-flex py-2 px-4 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-100 text-zinc-800 rounded-lg mb-3"><FaTh className='mr-2 text-dorado text-base' />{area} m²</span> : null}
      </div>
   </Link>
  

)

export default Property;
