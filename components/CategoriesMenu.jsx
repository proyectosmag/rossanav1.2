import Link from "next/link"
import Select from 'react-tailwindcss-select';
import { useState } from "react";

const handleChange = value => {
    // console.log("value:", value);
    setAnimal(value);
};
const CategoriesMenu = (Categories) => {
    let g = Object.entries(Categories)
    console.log(g[0][1])
    const [animal, setAnimal] = useState(null);
    return (
        <>
         <Select
            value={animal}
            onChange={handleChange}
            options={Object.entries(g[0][1])}
        />
         <div class="bg-white relative">
            {Object.entries(Categories['props']).map((item) => (
                item[1].quantity > '0' ?
                    <Link key={item[1].id_property_type} class="-m-3 p-3 flex items-start rounded-lg hover:bg-dorado-ph" href="/#">
                        <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-dorado to-dorado-light text-white sm:h-8 sm:w-8">
                            <p class="mt-1 text-sm text-neutral-100">{item[1].quantity}</p>
                        </div>
                        <div class="ml-4"><p class="text-base font-medium text-gray-900">{item[1].name}</p>
                        </div>
                    </Link>

                    : false
            ))}
        </div>
        </>
       
    )
}
export default CategoriesMenu