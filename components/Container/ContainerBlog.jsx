import Image from "next/image"

const ContainerBlog = (props) => {
    return (
        <div className="flex pb-12">
            <div className="md:w-4/12">
                <Image
                    src={props.image}
                    width={150}
                    height={150}
                    className="rounded-xl"
                    alt='Imagen cualquiera'
                />
            </div>

            <div className="md:w-8/12 md:pl-4 text-justify">
                <p className="font-bold md:pb-2">{props.title}</p>
                <p className="md:pb-2">{props.abstract}</p>
                <p className="text-dorado">Leer más</p>
            </div>
        </div>
    )
}

export default ContainerBlog