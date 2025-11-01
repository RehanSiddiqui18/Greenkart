import { FaLongArrowAltRight, FaLocationArrow, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { navOptions } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <section className="bg-secondary text-primary">
      <div className="flex md:flex-row flex-col md:justify-between items-center md:mx-20 md:mt-5">
        <div className="md:my-6 mt-3 md:mr-20 flex flex-col md:w-2/4 p-5">
          <div className="flex justify-start">
            <Image
              src="/shopBag.png"
              width={100}
              height={80}
              priority
              className="mr-2 my-1 md:-my-1 w-12 h-10 md:w-20 md:h-16 ml-2 md:ml-0"
            />
            <h1 className="md:text-6xl text-5xl font-bold font-heading">
              Greenkart
            </h1>
          </div>
          <p className="md:mt-9 my-4 text-justify tracking-wide font-medium md:text-base md:w-8/12 w-11/12 mx-auto md:ml-4">
            For Marketing/Partnerships, contact us at sujalsamai123@gmail.com
          </p>
          <h3 className="font-heading text-2xl font-bold tracking-wide w-11/12 mx-auto my-4 md:ml-4">
            GET IN TOUCH
          </h3>
          <p className="md:w-8/12 w-11/12 mx-auto md:ml-4">
            MediCaps University, AB Road, Pigdambar, Rau, Indore (M.P.) - 453331
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-10/12 md:w-2/4">
          <div className="flex flex-col md:my-6 my-2 md:p-5 md:w-2/4">
            <h1 className="text-2xl font-bold flex font-heading mb-2 tracking-wide">
              <GiShoppingBag className="mt-1 mr-1" />
              SHOP
            </h1>
            <ul className="">
              {navOptions.map((item) => {
                return (
                  <li
                    className="hover:underline hover:underline-offset-4 hover:scale-105 hover:duration-300 hover: ease-in-out hover:transition-all my-4 tracking-wide font-medium md:text-sm text-xs"
                    key={item.id}
                  >
                    <a href={item.path}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:my-6 my-2 md:p-5 flex flex-col w-full">
            <h1 className="text-2xl font-bold flex font-heading mb-2 tracking-wide">
              <MdMail className="mt-1.5 mr-1" />
              CONTACT US
            </h1>
            <div className="rounded-md text-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="md:h-10 h-4 p-4 placeholder-gray-400 border focus:outline-none focus:border-black w-full lg:p-4 my-4 ml-0 text-sm lg:text-base block bg-transparent border-gray-300 rounded-md md:placeholder:text-sm placeholder:text-xs"
              />
              <textarea
                placeholder="Enter your message"
                className="px-4 py-2 placeholder-gray-400 border focus:outline-none focus:border-black w-full my-2 text-sm lg:text-base block bg-transparent border-gray-300 rounded-md md:placeholder:text-sm placeholder:text-xs"
                rows={3}
              />
            </div>
            <button className="font-buttons mt-1.5 flex justify-center items-center bg-black md:px-5 md:py-1 px-2 py-1 md:text-sm rounded-md font-medium tracking-wide text-white shadow-custom hover:bg-hover hover:scale-105">
              <p className="text-sm md:mt-0 mt-1">Send</p>
              <IoIosArrowRoundForward className="md:text-3xl text-2xl font-bold md:ml-1.5 ml-1 md:mt-0 mt-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
