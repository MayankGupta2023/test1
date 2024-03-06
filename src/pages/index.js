import Image from "next/image";
import { Inter } from "next/font/google";
import phn1 from "../assets/phn1.jpg"
import phn2 from "../assets/phn2.jpeg"
import phn3 from "../assets/phn3.jpeg"
import phn4 from "../assets/phn4.jpeg"
import phn5 from "../assets/phn5.jpeg"
import phn6 from "../assets/phn6.jpeg"
import phn7 from "../assets/phn7.jpeg"
import phn8 from "../assets/phn8.jpeg"
import phn9 from "../assets/phn9.jpeg"


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <div style={{ backgroundColor: '#f1faff' }} className="relative h-screen flex items-center gap-4 md:gap-2 flex-col justify-center font-sans">

      <h1 className="font-inter text-center w-80 text-3xl font-semibold md:w-1/2 md:text-4xl lg:w-1/3">Why Apple is Best Place to Buy iPhone</h1>
      <p className="font-inter text-center w-80 md:w-1/2 md:text-xl lg:w-1/3">
        You can choose payment option that works for you, pay less with a trade-in, connect your new iPhone to your carrier, and get set
        up quickly. You can also chat with a Specialist anytime. Learn more about your options.
      </p>
      <button className="font-inter border-2 py-2 px-4 shadow-lg mt-2">Learn More </button>
      {/* <img className="shadow-2xl hidden absolute bottom-0 lg:inline " src={phn1.src} /> */}
      <img className="shadow-2xl hidden absolute right-2 lg:inline lg:w-64 lg:h-40 xl:w-72 xl:right-36 2xl:right-48" src={phn2.src} />
      <img className="shadow-2xl hidden absolute left-2 lg:inline lg:w-64 lg:h-40 xl:w-72 xl:left-36 2xl:left-48" src={phn3.src} />
      <img className="shadow-2xl hidden absolute min-[420px]:left-10  min-[420px]:top-0  min-[420px]:h-40 min-[420px]:w-40 min-[420px]:inline md:top-20 xl:w-72 xl:h-44 lg:top-8" src={phn4.src} />
      <img className="shadow-2xl hidden absolute min-[420px]:right-10 min-[420px]:top-0 min-[420px]:h-40 min-[420px]:w-40 min-[420px]:inline md:top-20 xl:w-72 xl:h-44 lg:top-8" src={phn5.src} />
      <img className="shadow-2xl absolute bottom-0 h-40 w-64 min-[420px]:right-10 min-[420px]:w-40 md:bottom-20 xl:w-72 xl:h-44 lg:bottom-8" src={phn6.src} />
      <img className="shadow-2xl absolute bottom-0 h-40 w-64 min-[420px]:left-10 min-[420px]:w-40  md:bottom-20 xl:w-72 xl:h-44 lg:bottom-8" src={phn7.src} />


      <img className="shadow-2xl hidden absolute h-40 inset-x-1/2 w-48 bottom-0 lg:inline " src={phn8.src} />
      <img className="shadow-2xl hidden absolute h-40 inset-x-1/3 w-48 bottom-0 lg:inline " src={phn9.src} />


    </div >
  );
}
