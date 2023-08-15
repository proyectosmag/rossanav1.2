import Link from "next/link";
import { FaSistrix } from "react-icons/fa";
import {  useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import styles from '../styles/StyleSearch.module.css';

export default function SearchGlobal () {
    const [valueInputs, setValueInputs] = useState(''); 
    return (
        <div className="flex justify-end absolute top-3 right-4 text-neutral-100">
            
        <Popover>
         <Popover.Button aria-describedby="1" variant="contained">
            <FaSistrix className={styles.font_size_20px} />
        </Popover.Button>
        <Popover.Panel >
          <div className={styles.background_light_ag +' '+ styles.search_float_main+ " top-10"}>
          <input
                type="text"
                className={styles.input_search} 
                placeholder="¿En que te podemos ayudar"
                value={valueInputs}
                onChange={e => { setValueInputs(e.currentTarget.value); }}
            />
                <Link href={`/search?match=${valueInputs}`} className={styles.btn_primary_ag}>
                    Buscar
                </Link>
          </div>
          </Popover.Panel>
          </Popover> 
        </div>
    )
            
    
}