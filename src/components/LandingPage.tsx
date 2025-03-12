"use client";

import Image from "next/image";
import RunningImage from "@images/OnviLandingBg.jpg";
import Mobile1 from "@images/Mobile1.jpg";
import Mobile2 from "@images/Mobile2.jpg";
import Mobile3 from "@images/Mobile3.jpg";
import Mobile4 from "@images/Mobile4.jpg";
import { useRef } from "react";

export default function LandingPage() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
            <button className="bg-white cursor-pointer text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-200 transition" onClick={scrollToBottom}>
              Скачать приложение
            </button>
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
      <div className="flex flex-nowrap justify-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 overflow-hidden mb-10">
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
      <div ref={bottomRef} className="relative min-h-screen bg-[#1e1e1e] text-white text-center px-4">
        <div className="flex flex-col items-center mb-20">
          <h1 className="text-3xl font-semibold mt-40 mb-4">ONVI: ваш надёжный помощник в уходе за авто</h1>
          <p className="text-sm mb-4 text-[#afafaf]">Приложение Onvi доступно бесплатно в App Store и Google Play.</p>

          <div className="flex gap-4 mb-8">
            <a href="#" className="flex items-center">
              <Image src={Mobile1} alt="Download on the App Store" className="h-12 w-12" />
            </a>
            <a href="#" className="flex items-center">
              <Image src={Mobile2} alt="Get it on Google Play" className="h-12 w-12" />
            </a>
          </div>

          <h2 className="text-4xl font-semibold mb-2">Наши контакты:</h2>
          <p className="text-2xl">Телефон поддержки: +7(800)250-20-19</p>
          <p className="text-2xl mb-4">Почта поддержки: support@onvione.ru</p>
          <a href="https://docs.google.com/document/d/1H5DFxDJfFBxK6wNK3iIydC9Qp1zaQsuSxZkjaPcCVyc/edit?tab=t.0" target="_blank" rel="noreferrer noopener" className="text-[#ff8652]">
            Политика конфиденциальности
          </a>
        </div>
        <hr className="bg-white" />
        <div className="text-xs ml-10 mt-10 text-start font-semibold">© &quot;Onvione&quot; 2024 Все права защищены.</div>
      </div>
    </div>
  );
}
