import Image from "next/image";

const Testimony = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2" >
                <Image
                    src="/images/starbucks.png"
                    width={900}
                    height={795}
                    className="rounded-lg"
                />
                <div className="px-2 lg:px-0">
                    <h2 className="text-dorado font-bold text-5xl">CONOCE NUESTRAS MARCAS</h2>
                    <br/>
                    <p className="text-gray-800 text-xl lg:pr-28 lg:pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan nisl eget interdum imperdiet. Pellentesque eget turpis nibh. </p>
                    <br/>
                    <div>
                        <h2 className="text-dorado text-4xl font-bold">12k +</h2>
                        <p className="text-black text-2xl">Lorem ipsum dolor sit amet</p>
                    </div>
                    <hr class="w-11/12 h-px my-4 bg-gray-200 border-0 " />
                    <div>
                        <h2 className="text-dorado text-4xl font-bold">500k</h2>
                        <p className="text-black text-2xl">Lorem ipsum dolor sit amet</p>
                    </div>
                    <hr class="w-11/12 h-px my-4 bg-gray-200 border-0 " />
                    <div>
                        <h2 className="text-dorado text-4xl font-bold">4.3k</h2>
                        <p className="text-black text-2xl">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimony;
