"use client";
import { useAllSkincares } from "@/hooks/skincareHook";
import ProductCard from "../components/common/productCard";
import Image from "next/image";

type BrandDetailProps = { brand: string };

const BrandDetailPage = ({ params }: { params: BrandDetailProps }) => {
  console.log(params.brand, "params");
  const { data, isLoading, error } = useAllSkincares(
    "brandDetail",
    params.brand
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data, "data from brand detail");

  return (
    <div className="container pt-5">
      <section className="block w-full text-zinc-500 text-xs pb-4">
        <a
          href="/"
          className="hover:text-gray transition-all duration-300 ease-in-out"
        >
          Home /{" "}
        </a>
        <a
          href="/brands"
          className="hover:text-gray transition-all duration-300 ease-in-out"
        >
          Brands /{" "}
        </a>
        <a
          href={`/${params.brand.toLowerCase()}`}
          className="hover:text-gray transition-all duration-300 ease-in-out"
        >
          {params.brand}
        </a>
      </section>

      <section className="mt-5 mb-12">
        <h4 className="mb-5">Brand Detail</h4>
        <div className="flex flex-row">
          <div className="basis-1/4">
            <Image
              src={data?.data[0].brandInfo.logo}
              width={900}
              height={900}
              alt={data?.data.name}
              className="w-10/12 block mx-auto"
            />
          </div>
          <div className="basis-3/4">
            <h5 className="mb-4">
              <small>Brand Name </small>: {data?.data[0].brand}
            </h5>
            <p>{data?.data[0].brandInfo.description}</p>
          </div>
        </div>
      </section>

      <h5 className="mb-4 text-lg font-medium">
        {data?.data[0].brand}&apos;s Products
      </h5>
      <ProductCard data={data?.data} />
    </div>
  );
};
export default BrandDetailPage;
