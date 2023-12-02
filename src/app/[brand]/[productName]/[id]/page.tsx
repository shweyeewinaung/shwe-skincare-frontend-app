"use client";
import DashboardFeature from "@/app/components/dashboard/dashboardFeature";
import ProductInfoComponent from "@/app/components/productDetail/productInfo";
import { useSkincarebyId } from "@/hooks/skincareHook";
import Image from "next/image";

type ProjectDetailProps = { brand: string; productName: string; id: string };

const ProjectDetail = ({ params }: { params: ProjectDetailProps }) => {
  const { data, isLoading, error } = useSkincarebyId(params.id);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

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
          href={`/${data?.data.brand}`}
          className="hover:text-gray transition-all duration-300 ease-in-out"
        >
          {data?.data.brand} /{" "}
        </a>
        <a
          href="/"
          className="hover:text-gray transition-all duration-300 ease-in-out"
        >
          {data?.data.name}{" "}
        </a>
      </section>

      <div className="flex flex-row pb-5">
        <div className="basis-1/2">
          <Image
            src={data?.data.image}
            width={900}
            height={900}
            alt={data?.data.name}
            className="w-10/12 block mx-auto"
          />
        </div>
        <ProductInfoComponent data={data?.data} />
      </div>

      <DashboardFeature type="sameBrand" brand={data?.data.brand} />
    </div>
  );
};
export default ProjectDetail;
