import React from "react";
import Image from "next/image";

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const data = await getData(slug);

  console.log(data);


  return (
    <div className="container">
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl mb-8">{data?.title}</h1>
          <div className="flex items-center gap-4">
            {data?.user?.image && (
              <div className="relative w-12 h-12">
                <Image
                  src={data.user.image}
                  alt={data.user.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-1">
              <span className="text-xl font-medium">{data?.user.name}</span>
              <span>Create at: {data?.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="relative flex-1 h-80">
            <Image src={data.img} alt={data.id} fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="flex gap-8">
        <div className="mt-5">
          <div
            className="text-xl font-light mb-5"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
