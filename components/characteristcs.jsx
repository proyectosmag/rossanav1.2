const Characteristics = ({ content , imagesrc }) => {
    return (
        <div className="-m-3 p-2 flex items-start rounded-lg">
            <img style={{width:"10px"}} src={imagesrc} className="mt-1 text-sm text-dorado" />
            <div className="ml-4">
                <p className="text-base font-normal text-gray-800">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Characteristics;