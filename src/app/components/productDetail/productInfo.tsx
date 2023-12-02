"use client";
import { SkincareInterface } from "@/types/skincareTypes";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

interface ProductInfoComponentProps {
  data: SkincareInterface;
}

const ProductInfoComponent = (props: ProductInfoComponentProps) => {
  const { data } = props;
  return (
    <div className="basis-1/2">
      <span className="text-xs font-medium text-zinc-600">{data?.brand}</span>
      <h4 className="text-xl font-semibold mb-6">{data?.name}</h4>

      <p>{data?.description}</p>

      <section className="mt-9">
        <span className="text-2xl text-primary font-bold">
          {data?.currency === "baht" ? "฿" : "$"} {data?.price}
        </span>
      </section>

      <section className="mt-9">
        <label htmlFor="" className="flex items-center">
          <span>Quantity</span>
          <div className="flex items-center ml-6">
            <button className="bg-softprimary rounded-full w-8 h-8 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
              <PlusIcon className="h-5 w-5 block mx-auto" />
            </button>
            <input
              type="number"
              min="0"
              max="100"
              className="w-10 text-center outline-none"
              inputMode="numeric"
              pattern="[0-9]*"
            />
            <button className="bg-softprimary rounded-full w-8 h-8 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
              <MinusIcon className="h-5 w-5 block mx-auto" />
            </button>
          </div>
        </label>
      </section>

      <section className="mt-9 flex flex-row">
        <button className="uppercase bg-primary text-white text-xl font-semibold basis-3/4 rounded-lg py-3 hover:bg-pink-900 transition-all duration-300 ease-in-out">
          Add to cart
        </button>
        <button className="border border-zinc-300 rounded-full hover:text-primary px-2 transition-all duration-300 ease-in-out ml-4 w-12 h-12 hover:border-primary hover:text-primary transition-all duration-300 ease-in-out">
          <HeartIcon className="h-7 w-7 block mx-auto" />
        </button>
      </section>
    </div>
  );
};
export default ProductInfoComponent;
