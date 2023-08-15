import React from "react";
import Image from "next/image";

const ContainerBibliographyInfo = (props) => (
  <div className="flex flex-wrap pb-2 py-4 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
    <div className="p-4 flex">
      <div className="w-12 h-12  inline-flex items-center justify-center rounded-full bg-black text-dorado-light  mb-4 flex-shrink-0">
        <Image className="text-xs" alt="bibliography" width={20} height={20} src={props.src} />
      </div>
      <div className="flex-grow pl-6">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          {props.title}
        </h2>
        <p className="leading-relaxed text-base">{props.abstract}</p>
      </div>
    </div>
  </div>
);

export default ContainerBibliographyInfo;
