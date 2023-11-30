import { playfair } from "@/app/font";
import {
  UserIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const MainRightNav = () => {
  return (
    <div className="flex flex items-center justify-between">
      <a
        href="#"
        className="hover:text-primary px-3 md:py-2 py-4  transition-all duration-300 ease-in-out"
      >
        <UserIcon className="h-6 w-6" />
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
        <HeartIcon className="h-6 w-6" />
      </a>
    </div>
  );
};
export default MainRightNav;
