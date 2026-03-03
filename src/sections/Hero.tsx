import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, Calendar, Users, Bed, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Hero() {
  const { t, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const roomTypes = [
    {
      value: "deluxe-single",
      labelEn: "Deluxe Single",
      labelAr: "غرفة مفردة ديلوكس",
    },
    {
      value: "deluxe-double",
      labelEn: "Deluxe Double",
      labelAr: "غرفة مزدوجة ديلوكس",
    },
    { value: "twin", labelEn: "Twin Room", labelAr: "غرفة توأم" },
    {
      value: "suite-balcony",
      labelEn: "Suite with Balcony",
      labelAr: "جناح مع شرفة",
    },
    { value: "family-suite", labelEn: "Family Suite", labelAr: "جناح عائلي" },
    {
      value: "honeymoon",
      labelEn: "Honeymoon Suite",
      labelAr: "جناح شهر العسل",
    },
  ];

  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRooms = () => {
    const element = document.querySelector("#rooms");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-lobby.jpg"
          alt="Royal Suites Hotel Lobby"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Gold shimmer effect */}
        <div className="absolute inset-0 gold-shimmer pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Animation */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="/images/image.png"
              alt="Royal Suites Hotel"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain"
            />
          </div>

          {/* Stars */}
          <div
            className={`flex justify-center gap-1 mb-6 transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-gold text-2xl">
                ★
              </span>
            ))}
          </div>

          {/* Tagline */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream mb-6 leading-tight transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t("hero.tagline") as string}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t("hero.subtitle1") as string}
          </p>
          {/* Subtitle 1 */}
          <p
            className={`text-sm md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t("hero.subtitle") as string}
          </p>
          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={scrollToBooking}
              className="btn-gold text-lg px-8 py-4"
            >
              {t("hero.cta") as string}
            </button>
            <button
              onClick={scrollToRooms}
              className="btn-outline-gold text-lg px-8 py-4"
            >
              {t("rooms.title") as string}
            </button>
          </div>

          {/* Booking Widget */}
          <div
            className={`bg-black/60 backdrop-blur-md border border-gold/30 rounded-xl p-6 md:p-8 transition-all duration-1000 delay-900 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Check-in */}
              <div className="lg:col-span-1">
                <label className="block text-gold text-sm mb-2 font-medium">
                  {t("booking.checkIn") as string}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream focus:border-gold"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="lg:col-span-1">
                <label className="block text-gold text-sm mb-2 font-medium">
                  {t("booking.checkOut") as string}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                  <Input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream focus:border-gold"
                  />
                </div>
              </div>

              {/* Adults */}
              <div className="lg:col-span-1">
                <label className="block text-gold text-sm mb-2 font-medium">
                  {t("booking.adults") as string}
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                  <Select value={adults} onValueChange={setAdults}>
                    <SelectTrigger className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-gold/30">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem
                          key={num}
                          value={num.toString()}
                          className="text-cream"
                        >
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Children */}
              <div className="lg:col-span-1">
                <label className="block text-gold text-sm mb-2 font-medium">
                  {t("booking.children") as string}
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                  <Select value={children} onValueChange={setChildren}>
                    <SelectTrigger className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-gold/30">
                      {[0, 1, 2, 3, 4].map((num) => (
                        <SelectItem
                          key={num}
                          value={num.toString()}
                          className="text-cream"
                        >
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Room Type */}
              <div className="lg:col-span-1">
                <label className="block text-gold text-sm mb-2 font-medium">
                  {t("booking.roomType") as string}
                </label>
                <div className="relative">
                  <Bed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                  <Select value={roomType} onValueChange={setRoomType}>
                    <SelectTrigger className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream">
                      <SelectValue
                        placeholder={t("booking.selectRoom") as string}
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-gold/30 max-h-60">
                      {roomTypes.map((room) => (
                        <SelectItem
                          key={room.value}
                          value={room.value}
                          className="text-cream"
                        >
                          {language === "en" ? room.labelEn : room.labelAr}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Check Availability Button */}
              <div className="lg:col-span-1 flex items-end">
                <Button
                  onClick={scrollToBooking}
                  className="w-full btn-gold flex items-center justify-center gap-2 h-10"
                >
                  <Search className="w-4 h-4" />
                  {t("booking.checkAvailability") as string}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToRooms}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-gold transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
