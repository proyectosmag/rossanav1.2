import ContainerDetailBlog from "../../components/Container/ContainerDetailBlog";
import AsideArticle from "../../components/Section/AsideArticle";
import Link from "next/link";
import Head from "next/head";

const Detail = () => {
  const RecentArticle = [
    {
      title: "Our first office1",
      resoomer:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      href: "#",
    },

    {
      title: "Our first office2",
      resoomer:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      href: "#",
    },

    {
      title: "Our first office3",
      resoomer:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      href: "#",
    },

    {
      title: "Our first offices4",
      resoomer:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      href: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>Inmueble</title>
      </Head>
      <div className="-mb-80 h-screen bg-no-repeat bg-cover bg-[url('https://mdbootstrap.com/img/Photos/Slides/img%20(10).jpg')]"></div>

      <ContainerDetailBlog />

      <aside aria-label="Related articles" className=" bg-gray-50 ">
        <div className="px-4 mx-auto max-w-screen-xl py-12">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-black">
            Related articles
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {RecentArticle.map((item) => (
              <Link href={item.href} key={item.title}>
                <AsideArticle
                  title={item.title}
                  resoomer={item.resoomer}
                  src={item.src}
                />
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Detail;
