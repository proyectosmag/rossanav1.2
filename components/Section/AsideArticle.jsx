const AsideArticle = (props) => {
    return (
        <>
            <div className="max-w-xs">
                <div href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1" />
                </div>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-black">
                    {props.title}
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">{props.resoomer}</p>
                <div href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 2 minutes
                </div>
            </div>
        </>
    )
}

export default AsideArticle