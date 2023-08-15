
const SectionRectangle = (props) => {
    return (
        <>
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400" />
            <div className="flex flex-wrap -m-2">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={props.src} />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">{props.title}</h2>
                        <div className="text-gray-500">{props.abstract}</div>
                    </div>
                </div>
                <br />
            </div>
        </>

    )
}

export default SectionRectangle