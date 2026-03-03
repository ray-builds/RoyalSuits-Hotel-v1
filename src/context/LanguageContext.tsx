import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  direction: "ltr" | "rtl";
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.rooms": "Rooms",
    "nav.dining": "Dining",
    "nav.facilities": "Facilities",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",

    // Hero
    "hero.tagline": "A Royal Experience in the Heart of Nablus",
    "hero.subtitle":
      "Experience luxury hospitality where tradition meets comfort",
    "hero.cta": "Book Your Stay",
    "hero.scrollDown": "Scroll Down",

    // Booking Widget
    "booking.checkIn": "Check-in",
    "booking.checkOut": "Check-out",
    "booking.guests": "Guests",
    "booking.adults": "Adults",
    "booking.children": "Children",
    "booking.roomType": "Room Type",
    "booking.checkAvailability": "Check Availability",
    "booking.selectRoom": "Select Room Type",

    // About
    "about.title": "Welcome to Royal Suites Hotel",
    "about.description":
      "Nestled in the heart of Nablus, Royal Suites Hotel offers a perfect blend of Palestinian hospitality and modern luxury. Our 4-star boutique hotel provides an unforgettable experience with stunning mountain views, exquisite dining, and world-class service.",
    "about.discoverMore": "Discover More",
    "about.location": "Prime Location",
    "about.locationDesc": "1.3 km from city center, near Old City",
    "about.luxury": "Luxury Accommodations",
    "about.luxuryDesc": "Elegant rooms with premium amenities",
    "about.hospitality": "Warm Hospitality",
    "about.hospitalityDesc": "Authentic Palestinian welcome",

    // Rooms
    "rooms.title": "Our Rooms & Suites",
    "rooms.subtitle":
      "Choose from our selection of elegantly appointed rooms and suites",
    "rooms.viewDetails": "View Details",
    "rooms.bookNow": "Book This Room",
    "rooms.startingFrom": "Starting from",
    "rooms.perNight": "/night",
    "rooms.size": "Room Size",
    "rooms.sqm": "sqm",
    "rooms.maxGuests": "Max Guests",
    "rooms.bedType": "Bed Type",
    "rooms.amenities": "Room Amenities",
    "rooms.compare": "Compare Rooms",

    // Room Types
    "rooms.deluxeSingle": "Deluxe Single Room",
    "rooms.deluxeSingleAr": "غرفة مفردة ديلوكس",
    "rooms.deluxeSingleDesc":
      "Quiet comfort with mountain view balcony, perfect for solo travelers seeking tranquility.",
    "rooms.deluxeDouble": "Deluxe Double Room",
    "rooms.deluxeDoubleAr": "غرفة مزدوجة ديلوكس",
    "rooms.deluxeDoubleDesc":
      "Spacious room with city view terrace, ideal for couples seeking a romantic getaway.",
    "rooms.twinRoom": "Twin Room",
    "rooms.twinRoomAr": "غرفة توأم",
    "rooms.twinRoomDesc":
      "Comfortable twin beds with satellite TV and private bath, perfect for friends or colleagues.",
    "rooms.suiteBalcony": "Suite with Balcony",
    "rooms.suiteBalconyAr": "جناح مع شرفة",
    "rooms.suiteBalconyDesc":
      "Luxurious suite with mountain views, living area, and private balcony for families.",
    "rooms.familySuite": "Family Suite",
    "rooms.familySuiteAr": "جناح عائلي",
    "rooms.familySuiteDesc":
      "Two-bedroom suite with Jacuzzi, kitchenette, and city views - perfect for families.",
    "rooms.honeymoonSuite": "Honeymoon Suite",
    "rooms.honeymoonSuiteAr": "جناح شهر العسل",
    "rooms.honeymoonSuiteDesc":
      "Romantic suite with Jacuzzi, private entrance, and luxury bath for special occasions.",
    "rooms.deluxeFamily": "Deluxe Family Room",
    "rooms.deluxeFamilyAr": "غرفة عائلية ديلوكس",
    "rooms.deluxeFamilyDesc":
      "Family-friendly room with king bed and additional space for children.",
    "rooms.spaSuite": "Deluxe Suite with Spa Bath",
    "rooms.spaSuiteAr": "جناح ديلوكس مع حمام سبا",
    "rooms.spaSuiteDesc":
      "Ultimate relaxation with private Jacuzzi and spa-inspired bathroom.",

    // Badges
    "badge.mostPopular": "Most Popular",
    "badge.bestValue": "Best Value",
    "badge.familyFriendly": "Best for Families",
    "badge.romantic": "Romantic Escape",

    // Packages
    "packages.roomOnly": "Room Only",
    "packages.bedBreakfast": "Bed & Breakfast",
    "packages.fullBoard": "Full Board",
    "packages.includes": "Includes",

    // Amenities
    "amenities.title": "Hotel Amenities",
    "amenities.wifi": "Free WiFi",
    "amenities.restaurant": "Restaurant",
    "amenities.rooftop": "Rooftop Café",
    "amenities.jacuzzi": "Jacuzzi",
    "amenities.parking": "Free Parking",
    "amenities.reception": "24H Reception",
    "amenities.gym": "Fitness Center",
    "amenities.meeting": "Meeting Rooms",
    "amenities.transfer": "Airport Transfer",
    "amenities.roomService": "Room Service",
    "amenities.tv": "Flat-screen TV",
    "amenities.minibar": "Minibar",
    "amenities.ac": "Air Conditioning",
    "amenities.safe": "Safety Box",
    "amenities.hairdryer": "Hairdryer",
    "amenities.housekeeping": "Daily Housekeeping",

    // Dining
    "dining.title": "Dining Experience",
    "dining.subtitle": "Savor the flavors of Palestine and beyond",
    "dining.restaurant.title": "The Restaurant",
    "dining.restaurant.desc":
      "Located on the 2nd floor, our restaurant serves authentic Middle Eastern and Palestinian halal cuisine. Enjoy our breakfast buffet featuring continental, vegetarian, and halal options with local specialties.",
    "dining.restaurant.hours": "Open: 7:00 AM - 11:00 PM",
    "dining.rooftop.title": "The Rooftop Café",
    "dining.rooftop.desc":
      "Open to hotel guests and the public, our rooftop offers breathtaking city and mountain views. Enjoy shisha, refreshing beverages, and entertainment on large screen TVs.",
    "dining.rooftop.hours": "Open: 4:00 PM - 2:00 AM",
    "dining.roomService.title": "In-Room Dining",
    "dining.roomService.desc":
      "Enjoy gourmet meals in the comfort of your room with our 24-hour room service menu.",
    "dining.coffee.title": "Coffee & Snack Bar",
    "dining.coffee.desc":
      "Located in the lobby, enjoy complimentary Palestinian coffee served at check-in.",
    "dining.breakfast.title": "Breakfast Buffet",
    "dining.breakfast.types": "Types: Continental, Buffet, Vegetarian, Halal",
    "dining.breakfast.specialties":
      "Local specialties include Palestinian cheeses, warm dishes, and traditional spreads.",
    "dining.explore": "Explore Dining",

    // Facilities
    "facilities.title": "Facilities & Services",
    "facilities.subtitle": "Everything you need for a comfortable stay",
    "facilities.accommodation": "Accommodation Services",
    "facilities.inRoom": "In-Room Amenities",
    "facilities.recreation": "Recreation",
    "facilities.business": "Business Services",
    "facilities.safety": "Safety & Security",
    "facilities.family": "Family Services",

    // Testimonials
    "testimonials.title": "What Our Guests Say",
    "testimonials.subtitle": "Rated 8.2/10 - Very Good (45 reviews)",
    "testimonials.staff": "Staff: 8.3",
    "testimonials.cleanliness": "Cleanliness: 8.3",
    "testimonials.location": "Location: 8.6",
    "testimonials.wifi": "Free WiFi: 8.8",
    "testimonials.facilities": "Facilities: 7.8",

    // Location
    "location.title": "Our Location",
    "location.address":
      "Rafidya Main Road, Next to Al-Rawda Mosque, Nablus, Palestine",
    "location.distance": "1.3 km from Nablus city center",
    "location.nearby": "Nearby Attractions",
    "location.oldCity": "Nablus Old City",
    "location.mosque": "Al-Rawda Mosque",
    "location.soapFactory": "Arafat Soap Factory",
    "location.mountGerizim": "Mount Gerizim",
    "location.jacobsWell": "Jacob's Well Church",
    "location.directions": "Get Directions",
    "location.checkIn": "Check-in: 2:00 PM",
    "location.checkOut": "Check-out: 12:30 PM",

    // About Page
    "about.story.title": "Our Story",
    "about.story.desc":
      "Royal Suites Hotel was founded with a vision to provide world-class hospitality while celebrating the rich cultural heritage of Nablus. Our family-friendly hotel combines traditional Palestinian warmth with modern luxury.",
    "about.mission.title": "Our Mission",
    "about.mission.desc":
      "To provide a royal experience in the heart of Nablus, bridging tradition and comfort. We strive to make every guest feel at home while experiencing the best of Palestinian hospitality.",
    "about.awards.title": "Awards & Recognition",
    "about.awards.desc":
      "Ranked #2 hotel in Nablus on TripAdvisor with a 4/5 guest rating. Our commitment to excellence has earned us recognition as one of the premier hospitality destinations in Palestine.",
    "about.team.title": "Our Team",
    "about.team.desc":
      "Our multilingual staff (English & Arabic) is dedicated to providing warm, personalized service. From the moment you arrive, you'll experience the genuine hospitality that defines Royal Suites.",

    // Gallery
    "gallery.title": "Photo Gallery",
    "gallery.all": "All",
    "gallery.rooms": "Rooms",
    "gallery.dining": "Dining",
    "gallery.rooftop": "Rooftop",
    "gallery.facilities": "Facilities",
    "gallery.views": "Nablus Views",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We'd love to hear from you",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.subject": "Subject",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.whatsapp": "WhatsApp",
    "contact.info.facebook": "Facebook",
    "contact.form.selectSubject": "Select a subject",
    "contact.form.general": "General Inquiry",
    "contact.form.booking": "Booking Question",
    "contact.form.feedback": "Feedback",
    "contact.form.business": "Business Inquiry",

    // Booking Page
    "booking.title": "Book Your Stay",
    "booking.subtitle": "Complete your reservation in just a few steps",
    "booking.priceMatch": "Price Match Guarantee",
    "booking.form.firstName": "First Name",
    "booking.form.lastName": "Last Name",
    "booking.form.email": "Email Address",
    "booking.form.phone": "Phone Number",
    "booking.form.specialRequests": "Special Requests",
    "booking.form.specialRequestsPlaceholder":
      "Early check-in, baby cot, airport transfer, dietary requirements...",
    "booking.form.mealPlan": "Meal Plan",
    "booking.form.payment": "Payment Method",
    "booking.form.payAtHotel": "Pay at Hotel",
    "booking.form.submit": "Complete Booking",
    "booking.summary.title": "Booking Summary",
    "booking.summary.nights": "nights",
    "booking.summary.guests": "guests",
    "booking.summary.total": "Total",
    "booking.confirmation.title": "Booking Confirmed!",
    "booking.confirmation.message":
      "Thank you for choosing Royal Suites Hotel. A confirmation email has been sent to your email address.",
    "booking.confirmation.reference": "Booking Reference",

    // Footer
    "footer.tagline": "A Royal Experience in the Heart of Nablus",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Info",
    "footer.location": "Location",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.payment": "We Accept",

    // CTA
    "cta.title": "Ready for a Royal Stay?",
    "cta.subtitle": "Book now and experience luxury hospitality in Nablus",
    "cta.button": "Book Now",

    // Language Toggle
    "lang.english": "English",
    "lang.arabic": "العربية",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.rooms": "الغرف",
    "nav.dining": "المطاعم",
    "nav.facilities": "المرافق",
    "nav.about": "من نحن",
    "nav.gallery": "معرض الصور",
    "nav.contact": "اتصل بنا",
    "nav.bookNow": "احجز الآن",

    // Hero
    "hero.tagline": "فندق الأجنحه الملكية",
    "hero.subtitle": "تجربة ملكية في قلب نابلس",
    "hero.subtitle1": "جرب الضيافة الفاخرة حيث يلتقي التراث بالراحة",
    "hero.cta": "احجز إقامتك",
    "hero.scrollDown": "انتقل للأسفل",

    // Booking Widget
    "booking.checkIn": "تاريخ الوصول",
    "booking.checkOut": "تاريخ المغادرة",
    "booking.guests": "الضيوف",
    "booking.adults": "البالغين",
    "booking.children": "الأطفال",
    "booking.roomType": "نوع الغرفة",
    "booking.checkAvailability": "تحقق من التوفر",
    "booking.selectRoom": "اختر نوع الغرفة",

    // About
    "about.title": "مرحباً بكم في فندق الأجنحه الملكية",
    "about.description":
      "يقع فندق الأجنحه الملكية في قلب نابلس، ويقدم مزيجاً مثالياً من الضيافة الفلسطينية والفخامة الحديثة. يوفر فندقنا البوتيكي من فئة 4 نجوم تجربة لا تُنسى مع إطلالات خلابة على الجبال، وطعام رائع، وخدمة عالمية المستوى.",
    "about.discoverMore": "اكتشف المزيد",
    "about.location": "موقع متميز",
    "about.locationDesc": "١.٣ كم من وسط المدينة، بالقرب من البلدة القديمة",
    "about.luxury": "إقامة فاخرة",
    "about.luxuryDesc": "غرف أنيقة مع وسائل راحة متميزة",
    "about.hospitality": "ضيافة دافئة",
    "about.hospitalityDesc": "ترحيل فلسطيني أصيل",

    // Rooms
    "rooms.title": "غرفنا وأجنحتنا",
    "rooms.subtitle": "اختر من مجموعتنا من الغرف والأجنحة الأنيقة",
    "rooms.viewDetails": "عرض التفاصيل",
    "rooms.bookNow": "احجز هذه الغرفة",
    "rooms.startingFrom": "تبدأ من",
    "rooms.perNight": "/ليلة",
    "rooms.size": "مساحة الغرفة",
    "rooms.sqm": "م²",
    "rooms.maxGuests": "الحد الأقصى للضيوف",
    "rooms.bedType": "نوع السرير",
    "rooms.amenities": "وسائل الراحة",
    "rooms.compare": "مقارنة الغرف",

    // Room Types
    "rooms.deluxeSingle": "غرفة مفردة ديلوكس",
    "rooms.deluxeSingleAr": "Deluxe Single Room",
    "rooms.deluxeSingleDesc":
      "راحة هادئة مع شرفة ذات إطلالة على الجبل، مثالية للمسافرين المنفردين الباحثين عن الهدوء.",
    "rooms.deluxeDouble": "غرفة مزدوجة ديلوكس",
    "rooms.deluxeDoubleAr": "Deluxe Double Room",
    "rooms.deluxeDoubleDesc":
      "غرفة فسيحة مع تراس ذو إطلالة على المدينة، مثالية للأزواج الباحثين عن رحلة رومانسية.",
    "rooms.twinRoom": "غرفة توأم",
    "rooms.twinRoomAr": "Twin Room",
    "rooms.twinRoomDesc":
      "أسرة مريحة مزدوجة مع تلفزيون فضائي وحمام خاص، مثالية للأصدقاء أو الزملاء.",
    "rooms.suiteBalcony": "جناح مع شرفة",
    "rooms.suiteBalconyAr": "Suite with Balcony",
    "rooms.suiteBalconyDesc":
      "جناح فاخر مع إطلالات على الجبال ومنطقة جلوس وشرفة خاصة للعائلات.",
    "rooms.familySuite": "جناح عائلي",
    "rooms.familySuiteAr": "Family Suite",
    "rooms.familySuiteDesc":
      "جناح بغرفتي نوم مع جاكوزي ومطبخ صغير وإطلالات على المدينة - مثالي للعائلات.",
    "rooms.honeymoonSuite": "جناح شهر العسل",
    "rooms.honeymoonSuiteAr": "Honeymoon Suite",
    "rooms.honeymoonSuiteDesc":
      "جناح رومانسي مع جاكوزي ومدخل خاص وحمام فاخر للمناسبات الخاصة.",
    "rooms.deluxeFamily": "غرفة عائلية ديلوكس",
    "rooms.deluxeFamilyAr": "Deluxe Family Room",
    "rooms.deluxeFamilyDesc": "غرفة عائلية مع سرير كينج ومساحة إضافية للأطفال.",
    "rooms.spaSuite": "جناح ديلوكس مع حمام سبا",
    "rooms.spaSuiteAr": "Deluxe Suite with Spa Bath",
    "rooms.spaSuiteDesc": "استرخاء تام مع جاكوزي خاص وحمام مستوحى من السبا.",

    // Badges
    "badge.mostPopular": "الأكثر شعبية",
    "badge.bestValue": "أفضل قيمة",
    "badge.familyFriendly": "مثالي للعائلات",
    "badge.romantic": " escape رومانسي",

    // Packages
    "packages.roomOnly": "الغرفة فقط",
    "packages.bedBreakfast": "الإقامة والإفطار",
    "packages.fullBoard": "الإقامة الكاملة",
    "packages.includes": "يشمل",

    // Amenities
    "amenities.title": "مرافق الفندق",
    "amenities.wifi": "واي فاي مجاني",
    "amenities.restaurant": "مطعم",
    "amenities.rooftop": "مقهى السطح",
    "amenities.jacuzzi": "جاكوزي",
    "amenities.parking": "موقف مجاني",
    "amenities.reception": "استقبال ٢٤ ساعة",
    "amenities.gym": "مركز اللياقة",
    "amenities.meeting": "قاعات اجتماعات",
    "amenities.transfer": "نقل من المطار",
    "amenities.roomService": "خدمة الغرف",
    "amenities.tv": "تلفزيون بشاشة مسطحة",
    "amenities.minibar": "ميني بار",
    "amenities.ac": "تكييف",
    "amenities.safe": "خزنة",
    "amenities.hairdryer": "مجفف شعر",
    "amenities.housekeeping": "تنظيف يومي",

    // Dining
    "dining.title": "تجربة الطعام",
    "dining.subtitle": "تذوق نكهات فلسطين وما وراءها",
    "dining.restaurant.title": "المطعم",
    "dining.restaurant.desc":
      "يقع في الطابق الثاني، يقدم مطعمنا المأكولات الشرقية والفلسطينية الحلال الأصيلة. استمتع ببوفيه الإفطار الذي يضم خيارات قارية ونباتية وحلال مع أطباق محلية.",
    "dining.restaurant.hours": "مفتوح: ٧:٠٠ ص - ١١:٠٠ م",
    "dining.rooftop.title": "مقهى السطح",
    "dining.rooftop.desc":
      "مفتوح لنزلاء الفندق والجمهور، يقدم سطحنا إطلالات خلابة على المدينة والجبال. استمتع بالشيشة والمشروبات المنعشة والترفيه على شاشات التلفزيون الكبيرة.",
    "dining.rooftop.hours": "مفتوح: ٤:٠٠ م - ٢:٠٠ ص",
    "dining.roomService.title": "الطعام في الغرفة",
    "dining.roomService.desc":
      "استمتع بالوجبات الفاخرة في راحة غرفتك مع قائمة خدمة الغرف على مدار الساعة.",
    "dining.coffee.title": "بار القهوة والوجبات الخفيفة",
    "dining.coffee.desc":
      "يقع في الردهة، استمتع بالقهوة الفلسطينية المجانية عند تسجيل الوصول.",
    "dining.breakfast.title": "بوفيه الإفطار",
    "dining.breakfast.types": "الأنواع: قاري، بوفيه، نباتي، حلال",
    "dining.breakfast.specialties":
      "تشمل الأطباق المحلية الأجبان الفلسطينية والأطباق الساخنة والمقبلات التقليدية.",
    "dining.explore": "استكشف المطاعم",

    // Facilities
    "facilities.title": "المرافق والخدمات",
    "facilities.subtitle": "كل ما تحتاجه لإقامة مريحة",
    "facilities.accommodation": "خدمات الإقامة",
    "facilities.inRoom": "وسائل الراحة في الغرفة",
    "facilities.recreation": "الترفيه",
    "facilities.business": "خدمات الأعمال",
    "facilities.safety": "السلامة والأمان",
    "facilities.family": "خدمات العائلات",

    // Testimonials
    "testimonials.title": "ماذا يقول ضيوفنا",
    "testimonials.subtitle": "تقييم ٨.٢/١٠ - جيد جداً (٤٥ تقييم)",
    "testimonials.staff": "الموظفين: ٨.٣",
    "testimonials.cleanliness": "النظافة: ٨.٣",
    "testimonials.location": "الموقع: ٨.٦",
    "testimonials.wifi": "واي فاي مجاني: ٨.٨",
    "testimonials.facilities": "المرافق: ٧.٨",

    // Location
    "location.title": "موقعنا",
    "location.address": "شارع رفيدية الرئيسي، بجانب مسجد الروضة، نابلس، فلسطين",
    "location.distance": "١.٣ كم من وسط مدينة نابلس",
    "location.nearby": "معالم قريبة",
    "location.oldCity": "البلدة القديمة في نابلس",
    "location.mosque": "مسجد الروضة",
    "location.soapFactory": "مصنع عرفات للصابون",
    "location.mountGerizim": "جبل جرزيم",
    "location.jacobsWell": "كنيسة بئر يعقوب",
    "location.directions": "احصل على الاتجاهات",
    "location.checkIn": "تسجيل الوصول: ٢:٠٠ م",
    "location.checkOut": "تسجيل المغادرة: ١٢:٣٠ م",

    // About Page
    "about.story.title": "قصتنا",
    "about.story.desc":
      "تأسس فندق الأجنحه الملكية برؤية تتمثل في تقديم ضيافة عالمية المستوى مع الاحتفال بالتراث الثقافي الغني لنابلس. يجمع فندقنا الصديق للعائلات بين الدفء الفلسطيني التقليدي والفخامة الحديثة.",
    "about.mission.title": "مهمتنا",
    "about.mission.desc":
      "توفير تجربة ملكية في قلب نابلس، ربط التراث بالراحة. نسعى لجعل كل ضيف يشعر كأنه في منزله مع تجربة أفضل ما في الضيافة الفلسطينية.",
    "about.awards.title": "الجوائز والتقدير",
    "about.awards.desc":
      "مصنف #٢ في نابلس على TripAdvisor بتقييم ٤/٥ من النزلاء. لقد كرسنا التزامنا بالتميز الاعتراف بنا كواحد من أبرز وجهات الضيافة في فلسطين.",
    "about.team.title": "فريقنا",
    "about.team.desc":
      "فريقنا متعدد اللغات (الإنجليزية والعربية) مكرس لتقديم خدمة دافئة وشخصية. من اللحظة التي تصل فيها، ستختبر الضيافة الحقيقية التي تحدد الأجنحه الملكية.",

    // Gallery
    "gallery.title": "معرض الصور",
    "gallery.all": "الكل",
    "gallery.rooms": "الغرف",
    "gallery.dining": "المطاعم",
    "gallery.rooftop": "السطح",
    "gallery.facilities": "المرافق",
    "gallery.views": "إطلالات نابلس",

    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle": "نود أن نسمع منك",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "رسالتك",
    "contact.form.send": "إرسال الرسالة",
    "contact.info.title": "معلومات الاتصال",
    "contact.info.phone": "الهاتف",
    "contact.info.email": "البريد الإلكتروني",
    "contact.info.whatsapp": "واتساب",
    "contact.info.facebook": "فيسبوك",
    "contact.form.selectSubject": "اختر موضوعاً",
    "contact.form.general": "استفسار عام",
    "contact.form.booking": "سؤال عن الحجز",
    "contact.form.feedback": "ملاحظات",
    "contact.form.business": "استفسار تجاري",

    // Booking Page
    "booking.title": "احجز إقامتك",
    "booking.subtitle": "أكمل حجزك في بضع خطوات بسيطة",
    "booking.priceMatch": "ضمان تطابق السعر",
    "booking.form.firstName": "الاسم الأول",
    "booking.form.lastName": "الاسم الأخير",
    "booking.form.email": "البريد الإلكتروني",
    "booking.form.phone": "رقم الهاتف",
    "booking.form.specialRequests": "طلبات خاصة",
    "booking.form.specialRequestsPlaceholder":
      "تسجيل وصول مبكر، سرير أطفال، نقل من المطار، متطلبات غذائية...",
    "booking.form.mealPlan": "خطة الوجبات",
    "booking.form.payment": "طريقة الدفع",
    "booking.form.payAtHotel": "الدفع في الفندق",
    "booking.form.submit": "إكمال الحجز",
    "booking.summary.title": "ملخص الحجز",
    "booking.summary.nights": "ليالي",
    "booking.summary.guests": "ضيوف",
    "booking.summary.total": "المجموع",
    "booking.confirmation.title": "تم تأكيد الحجز!",
    "booking.confirmation.message":
      "شكراً لاختيارك فندق الأجنحه الملكية. تم إرسال رسالة تأكيد إلى بريدك الإلكتروني.",
    "booking.confirmation.reference": "رقم الحجز",

    // Footer
    "footer.tagline": "تجربة ملكية في قلب نابلس",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "معلومات الاتصال",
    "footer.location": "الموقع",
    "footer.followUs": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "الشروط والأحكام",
    "footer.payment": "نقبل",

    // CTA
    "cta.title": "مستعد لإقامة ملكية؟",
    "cta.subtitle": "احجز الآن واختبر الضيافة الفاخرة في نابلس",
    "cta.button": "احجز الآن",

    // Language Toggle
    "lang.english": "English",
    "lang.arabic": "العربية",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("royal-suites-language") as Language;
      return saved || "en";
    }
    return "en";
  });

  const direction = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", direction);
    localStorage.setItem("royal-suites-language", language);
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    const translationSet = translations[language] as Record<string, string>;
    return translationSet[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, direction, toggleLanguage, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
