"use client";
import { useAllSkincares } from "@/hooks/skincareHook";
import { playfair } from "@/fonts/font";
import ProductCard from "../common/productCard";
import { SkincareFilterType } from "@/types/skincareTypes";

interface DashboardFeatureProps {
  type: SkincareFilterType;
  brand?: string;
}

const DashboardFeature = (props: DashboardFeatureProps) => {
  const { type, brand } = props;
  //const skincares = skincareStore((state: any) => state.skincare);
  const { data, isLoading, error } = useAllSkincares(type, brand);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data, "data");

  return (
    <div className="mt-9">
      <h4 className={`font-bold ${playfair.className} text-2xl mb-4`}>
        {type === "new"
          ? "New & Trendy"
          : type === "sameBrand"
          ? "Customers Also Viewed"
          : "Luxury Items"}
      </h4>
      <ProductCard data={data?.data} />
    </div>
  );
};
export default DashboardFeature;
