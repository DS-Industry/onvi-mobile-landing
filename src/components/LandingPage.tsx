import Image from "next/image";
import Link from "next/link";
import RunningImage from "@images/OnviLandingBg.jpg";
import Mobile1 from "@images/Mobile1.jpg";
import Mobile2 from "@images/Mobile2.jpg";
import Mobile3 from "@images/Mobile3.jpg";
import Mobile4 from "@images/Mobile4.jpg";

export default function LandingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Elements */}
        <Image
          src={RunningImage}
          alt="Running Background"
          layout="fill"
          className="-z-10 object-cover"
        />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10 px-4 sm:px-6 md:px-10">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              ONVI: <span className="text-secondary">Автомойки по пути</span>
            </h1>
            <p className="text-white text-lg">
              Удобное приложение для поиска моек самообслуживания рядом с вами.
              Оплата услуг, кешбэк и более 80 партнёров в 10 регионах России.
            </p>
            <Link href="#">
              <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-200 transition">
                Скачать приложение
              </button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 relative">
            <div className="absolute w-40 sm:w-60 h-1 bg-secondary top-20 left-10 rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Centered Text Section */}
      <div className="flex flex-col items-center justify-center h-auto md:h-[400px] mx-auto space-y-2 w-full max-w-[580px] text-center px-4 sm:px-0">
        <div className="font-medium text-4xl sm:text-5xl">Onvi — мойка с выгодой</div>
        <div className="text-lg max-w-full sm:max-w-[580px]">
          Накапливайте кешбэк и оплачивайте им следующие мойки. Более 80 моек партнёров в 10 регионах России.
        </div>
      </div>

      {/* Mobile App Screenshots */}
      <div className="flex flex-nowrap justify-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 overflow-hidden">
        <Image
          src={Mobile1}
          alt="Mobile 1"
          className="h-64 w-[40%] sm:h-72 sm:w-[22%] md:h-80 md:w-[18%] lg:h-96 lg:w-[15%] transition-all duration-300"
        />
        <Image
          src={Mobile2}
          alt="Mobile 2"
          className="h-64 w-[40%] sm:h-72 sm:w-[22%] md:h-80 md:w-[18%] lg:h-96 lg:w-[15%] transition-all duration-300"
        />
        <Image
          src={Mobile3}
          alt="Mobile 3"
          className="h-64 w-[40%] sm:h-72 sm:w-[22%] md:h-80 md:w-[18%] lg:h-96 lg:w-[15%] transition-all duration-300"
        />
        <Image
          src={Mobile4}
          alt="Mobile 4"
          className="h-64 w-[40%] sm:h-72 sm:w-[22%] md:h-80 md:w-[18%] lg:h-96 lg:w-[15%] transition-all duration-300"
        />
      </div>
    </div>
  );
}
