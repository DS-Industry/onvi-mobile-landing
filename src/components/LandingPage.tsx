import Image from "next/image";
import Link from "next/link";
import RunningImage from "../../public/images/Group 125 (2).png";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Elements */}
      <Image
        src={RunningImage}
        alt="Running Background"
        layout="fill"
        className="-z-10"
      />
      {/* Main Content */}
      <div className="bg-[url('public/images/Group 125 (2).png')] max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10 px-6">
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

        {/* Right Section (Image & Illustration) */}
        <div className="md:w-1/2 relative">
          <div className="absolute w-60 h-1 bg-secondary top-20 left-10 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
