import Image from "next/image"

const GroupSocialMedia = () =>
(
    <div className="flex ">
        <div className="md:w-6/12">
            <Image 
                className="pb-4"
                src='/images/Linkedin.png'
                width={154}
                height={94}
                alt="Linkedin"
            />

            <Image
                src='/images/Instagram.png'
                width={154}
                height={157}
            />
        </div>

        <div className="md:w-6/12">
            <Image
                className="pb-4"
                src='/images/Youtube.png'
                width={154}
                height={94}
                alt="Linkedin"
            />

            <Image
                src='/images/Facebook.png'
                width={154}
                height={157}
            />
        </div>



    </div>
)


export default GroupSocialMedia