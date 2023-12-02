import { playfair } from "@/fonts/font";

const SubNav = () => {
  return (
    <div className="container flex items-center justify-between  pl-24">
      <ul className="pl-9 flex">
        <li className="px-3 md:pt-2 pt-4">
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-all duration-300 ease-in-out text-zinc-600"
          >
            Mask
          </a>
        </li>
        <li className="px-3 md:pt-2 pt-4">
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-all duration-300 ease-in-out text-zinc-700"
          >
            Facial Form
          </a>
        </li>
        <li className="px-3 md:pt-2 pt-4">
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-all duration-300 ease-in-out text-zinc-700"
          >
            Toner
          </a>
        </li>
        <li className="px-3 md:pt-2 pt-4">
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-all duration-300 ease-in-out text-zinc-700"
          >
            Essence
          </a>
        </li>
        <li className="px-3 md:pt-2 pt-4">
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-all duration-300 ease-in-out text-zinc-700"
          >
            Serum
          </a>
        </li>
        <li className="px-3 md:pt-2 pt-4">
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-all duration-300 ease-in-out text-zinc-700"
          >
            Moisturizer
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SubNav;
