"use client";
import {
  SkincareInterface,
  SkincaresArrayInterface,
} from "@/types/skincareTypes";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";

interface ProductCardProps {
  data: SkincareInterface[];
}

const ProductCard = (props: ProductCardProps) => {
  const { data } = props;
  return (
    <section className="flex flex-row">
      {data?.length > 0 &&
        data.map((skincare: SkincareInterface, index: number) => {
          return (
            <div
              className={`basis-1/5 p-4 border border-zinc-200 rounded-lg mx-2 ${
                index === 0 ? "ml-0" : ""
              } ${index === data?.length - 1 ? "mr-0" : ""}`}
              key={skincare._id}
            >
              <a
                href={`/${skincare.brand.toLowerCase()}/${skincare.slug}/${
                  skincare._id
                }`}
              >
                <Image
                  src={skincare.image}
                  width={200}
                  height={200}
                  alt={skincare.name}
                />
              </a>
              <div>
                <h4 className="text-xs font-medium">
                  {skincare.brand} {skincare.name}
                </h4>
                <div className="flex items-center">
                  <span className="font-bold">
                    {skincare.currency === "baht" ? "฿" : "$"} {skincare.price}
                  </span>
                  <button className="hover:text-primary px-3 md:py-2 py-4  transition-all duration-300 ease-in-out ml-auto">
                    <HeartIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};
export default ProductCard;
