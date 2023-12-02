"use client";
import { useAllSkincares } from "@/hooks/skincareHook";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BrandInterface } from "@/types/skincareTypes";

const BrandListPage = () => {
  const router = useRouter();
  const { data, isLoading, error } = useAllSkincares("brandList");

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data, "data from BrandList");
  console.log(data.data);

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
          href={`/brands`}
          className="hover:text-gray transition-all duration-300 ease-in-out"
        >
          Brands
        </a>
      </section>
      {data?.data.length > 0 &&
        data?.data.map((brand: BrandInterface, index: number) => {
          return (
            <div
              className={`w-1/6 float-left flex flex-row items-center border border-zinc-200 hover:border-primary transition-all duration-300 ease-in-out rounded-lg h-14 p-3 my-3 mx-3 cursor-pointer ${
                index === 0 || index === 5 ? "ml-0" : ""
              } ${
                index === data?.data.length - 1 || index === 4 ? "mr-0" : ""
              }`}
              key={brand._id}
              onClick={() => router.push(`/${brand?.brand}`)}
            >
              <div className="basis-1/3">
                <Image
                  src={brand.brandInfo.logo}
                  width={200}
                  height={200}
                  alt={brand?.brand}
                  className="w-10/12 block mx-auto"
                />
              </div>
              <div className="basis-2/3">
                <h5>{brand?.brand}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default BrandListPage;
