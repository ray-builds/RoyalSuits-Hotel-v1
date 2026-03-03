import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const { language } = useLanguage();

  const message =
    language === "en"
      ? "Hello, I would like to inquire about booking a room at Royal Suites Hotel."
      : "مرحباً، أود الاستفسار عن حجز غرفة في فندق الأجنحه الملكية.";

  return (
    <a
      href={`https://wa.me/970000000000?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
