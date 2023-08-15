const TitleSimple = (props) =>
(
    <div className="container px-5 py-3 mx-auto">
        <div className="flex w-full flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                {props.title}</h1>

            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"> {props.body}
            </p>

        </div>
    </div>
)


export default TitleSimple