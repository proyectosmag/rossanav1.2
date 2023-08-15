import Image from "next/image";
import Link from "next/link";

export const ImageBanner = (props) =>
(
    <div className="rounded-lg h-96 w-auto overflow-hidden">
        <Link href="/search">
            <Image alt="content"
                className="object-cover object-center h-full w-full"
                src={props.src}
                width={1040}
                height={720}
            /></Link>
    </div>
);

export default ImageBanner
