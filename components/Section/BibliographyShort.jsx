const BibliographyShort = (props) => (
    <div className="grid grid-flow-col hover:grid-flow-row">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            </div>
            <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Rossana Ulloque</h2>
                <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-center" >{props.label}</p>
            </div>
        </div>
        <div className="sm:w-2/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            </div>
            <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Rossana Ulloque</h2>
                <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-center" >{props.label}</p>
            </div>
        </div>
    </div>

)


export default BibliographyShort