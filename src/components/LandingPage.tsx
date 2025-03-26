"use client";

import Image from "next/image";
// import RunningImage from "@images/OnviLandingBg.jpg";
// import Mobile1 from "@images/Mobile1.jpg";
// import Mobile2 from "@images/Mobile2.jpg";
// import Mobile3 from "@images/Mobile3.jpg";
// import Mobile4 from "@images/Mobile4.jpg";
// import AppleLogo from "@images/AppStoreLogo.jpg";
// import GooglePlayLogo from "@images/GooglePlayStoreLogo.jpg";
// import OnviLogo from "@images/OnviLogo.jpg";
// import TelegramLogo from "@images/telegramLogo.jpg";
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
          src={"/onvi-mobile-landing/images/OnviLandingBg.jpg"}
          alt="Running Background"
          layout="fill"
          className="-z-10 object-cover"
          unoptimized
        />
        <Image
          src={"/onvi-mobile-landing/images/OnviLogo.jpg"}
          alt="Onvi Logo"
          width={20}
          height={20}
          className="absolute top-10 left-10 w-20 h-20 rounded-lg"
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
      <div className="flex flex-nowrap gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 mb-10">
        <Image
          src={"/onvi-mobile-landing/images/Mobile1.jpg"}
          alt="Mobile 1"
          width={20}
          height={20}
          className="h-[500px] w-[80px] sm:w-[150x] md:w-[150px] lg:w-[400px]"
        />
        <Image
          src={"/onvi-mobile-landing/images/Mobile2.jpg"}
          alt="Mobile 2"
          width={20}
          height={20}
          className="h-[500px] w-[80px] sm:w-[150x] md:w-[150px] lg:w-[400px]"
        />
        <Image
          src={"/onvi-mobile-landing/images/Mobile3.jpg"}
          alt="Mobile 3"
          width={20}
          height={20}
          className="h-[500px] w-[80px] sm:w-[150x] md:w-[150px] lg:w-[400px]"
        />
        <Image
          src={"/onvi-mobile-landing/images/Mobile4.jpg"}
          alt="Mobile 4"
          width={20}
          height={20}
          className="h-[500px] w-[80px] sm:w-[150x] md:w-[150px] lg:w-[400px]"
        />
      </div>

      <div ref={bottomRef} className="relative bg-[#1e1e1e] text-white text-center px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold mt-40 mb-4">ONVI: ваш надёжный помощник в уходе за авто</h1>
          <p className="text-sm mb-4 text-[#afafaf]">Приложение Onvi доступно бесплатно в App Store и Google Play.</p>

          <div className="flex gap-4 mb-8">
            <button className="flex items-center">
              <Image src={"/onvi-mobile-landing/images/AppStoreLogo.jpg"} alt="Download on the App Store" width={20}
          height={20} className="h-12 w-48" />
            </button>
            <button className="flex items-center">
              <Image src={"/onvi-mobile-landing/images/GooglePlayStoreLogo.jpg"} alt="Get it on Google Play" width={20}
          height={20} className="h-12 w-48" />
            </button>
          </div>
          <h2 className="text-4xl font-semibold mt-32 mb-2">Наши контакты:</h2>
          <p className="text-2xl mt-10">Телефон поддержки: +7(800)250-20-19</p>
          <p className="text-2xl mb-4">Почта поддержки: support@onvione.ru</p>
          <a href="https://docs.google.com/document/d/1H5DFxDJfFBxK6wNK3iIydC9Qp1zaQsuSxZkjaPcCVyc/edit?tab=t.0" target="_blank" rel="noreferrer noopener" className="text-[#ff8652] mt-10">
            Политика конфиденциальности
          </a>
          <Image src={"/onvi-mobile-landing/images/telegramLogo.jpg"} alt="Telegram Logo" width={20}
          height={20} className="w-16 h-16 mt-10" />
        </div>
      </div>
      <div className="bg-[#1e1e1e] text-white pt-10">
        <hr className="bg-white" />
        <div className="h-20 flex items-center">
          <div className="text-xs ml-10 text-start font-semibold">© &quot;Onvione&quot; 2024 Все права защищены.</div>
        </div>
      </div>
    </div>
  );
}
