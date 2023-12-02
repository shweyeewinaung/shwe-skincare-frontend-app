import { playfair } from "@/fonts/font";
import {
  UserIcon,
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const MainRightNav = () => {
  return (
    <div className="flex flex items-center justify-between">
      <section className="relative border border-zinc-200 rounded-3xl px-3 py-1 flex mr-3">
        <input
          type="text"
          placeholder="Search..."
          className="text-sm h-7 outline-none w-32 focus:w-44 transition-all duration-300 ease-in-out"
        />
        <button className="absolute right-0.5 top-0.5 bottom-0 rounded-full w-8 h-8 bg-softprimary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
          <MagnifyingGlassIcon className="h-5 w-5 block mx-auto" />
        </button>
      </section>
      <a
        href="#"
        className="hover:text-primary px-3 md:py-2 py-4  transition-all duration-300 ease-in-out"
      >
        <HeartIcon className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="hover:text-primary px-3 md:py-2 py-4  transition-all duration-300 ease-in-out"
      >
        <ShoppingCartIcon className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="hover:text-primary px-3 md:py-2 py-4  transition-all duration-300 ease-in-out"
      >
        <UserIcon className="h-6 w-6" />
      </a>
    </div>
  );
};
export default MainRightNav;
