import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, Users, Bed, Check, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function Booking() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    roomType: '',
    mealPlan: 'breakfast',
    paymentMethod: 'pay-at-hotel',
    specialRequests: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const roomTypes = [
    { value: 'deluxe-single', labelEn: 'Deluxe Single', labelAr: 'غرفة مفردة ديلوكس', price: 70 },
    { value: 'deluxe-double', labelEn: 'Deluxe Double', labelAr: 'غرفة مزدوجة ديلوكس', price: 85 },
    { value: 'twin', labelEn: 'Twin Room', labelAr: 'غرفة توأم', price: 80 },
    { value: 'suite-balcony', labelEn: 'Suite with Balcony', labelAr: 'جناح مع شرفة', price: 120 },
    { value: 'family-suite', labelEn: 'Family Suite', labelAr: 'جناح عائلي', price: 150 },
    { value: 'honeymoon', labelEn: 'Honeymoon Suite', labelAr: 'جناح شهر العسل', price: 180 },
    { value: 'deluxe-family', labelEn: 'Deluxe Family Room', labelAr: 'غرفة عائلية ديلوكس', price: 100 },
    { value: 'spa-suite', labelEn: 'Deluxe Suite with Spa Bath', labelAr: 'جناح ديلوكس مع حمام سبا', price: 140 },
  ];

  const mealPlans = [
    { value: 'room-only', label: 'packages.roomOnly', price: 0 },
    { value: 'breakfast', label: 'packages.bedBreakfast', price: 15 },
    { value: 'full-board', label: 'packages.fullBoard', price: 40 },
  ];

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const diffTime = checkOut.getTime() - checkIn.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const calculateTotal = () => {
    const room = roomTypes.find(r => r.value === formData.roomType);
    const meal = mealPlans.find(m => m.value === formData.mealPlan);
    const nights = calculateNights();
    const guests = parseInt(formData.adults) + parseInt(formData.children);
    
    if (!room || !meal || nights === 0) return 0;
    
    const roomTotal = room.price * nights;
    const mealTotal = meal.price * nights * guests;
    return roomTotal + mealTotal;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'RS' + Date.now().toString(36).toUpperCase();
    setBookingRef(ref);
    setShowConfirmation(true);
  };

  const selectedRoom = roomTypes.find(r => r.value === formData.roomType);
  const nights = calculateNights();
  const total = calculateTotal();

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="py-24 bg-[#0D0D0D] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Reservation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              {t('booking.title') as string}
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              {t('booking.subtitle') as string}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div
              className={`lg:col-span-2 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <form onSubmit={handleSubmit} className="card-luxury p-8">
                {/* Price Match Guarantee */}
                <div className="flex items-center gap-3 mb-8 p-4 bg-gold/10 rounded-lg border border-gold/20">
                  <Shield className="w-6 h-6 text-gold" />
                  <span className="text-gold font-medium">{t('booking.priceMatch') as string}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Info */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-cream mb-4">{language === 'en' ? 'Personal Information' : 'المعلومات الشخصية'}</h3>
                  </div>

                  <div>
                    <Label className="text-cream/80 mb-2 block">{t('booking.form.firstName') as string}</Label>
                    <Input
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="bg-[#1A1A1A] border-gold/30 text-cream focus:border-gold"
                    />
                  </div>

                  <div>
                    <Label className="text-cream/80 mb-2 block">{t('booking.form.lastName') as string}</Label>
                    <Input
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="bg-[#1A1A1A] border-gold/30 text-cream focus:border-gold"
                    />
                  </div>

                  <div>
                    <Label className="text-cream/80 mb-2 block">{t('booking.form.email') as string}</Label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#1A1A1A] border-gold/30 text-cream focus:border-gold"
                    />
                  </div>

                  <div>
                    <Label className="text-cream/80 mb-2 block">{t('booking.form.phone') as string}</Label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#1A1A1A] border-gold/30 text-cream focus:border-gold"
                    />
                  </div>

                  {/* Stay Details */}
                  <div className="md:col-span-2 mt-4">
                    <h3 className="text-lg font-semibold text-cream mb-4">{language === 'en' ? 'Stay Details' : 'تفاصيل الإقامة'}</h3>
                  </div>

                  <div>
                    <Label className="text-cream/80 mb-2 block">{t('booking.checkIn') as string}</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                      <Input
                        type="date"
                        required
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-cream/80 mb-2 block">{t('booking.checkOut') as string}</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                      <Input
                        type="date"
                        required
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-cream/80 mb-2 block">{t('booking.adults') as string}</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                      <Select value={formData.adults} onValueChange={(value) => setFormData({ ...formData, adults: value })}>
                        <SelectTrigger className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1A1A] border-gold/30">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()} className="text-cream">{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-cream/80 mb-2 block">{t('booking.children') as string}</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                      <Select value={formData.children} onValueChange={(value) => setFormData({ ...formData, children: value })}>
                        <SelectTrigger className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1A1A] border-gold/30">
                          {[0, 1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()} className="text-cream">{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <Label className="text-cream/80 mb-2 block">{t('booking.roomType') as string}</Label>
                    <div className="relative">
                      <Bed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                      <Select value={formData.roomType} onValueChange={(value) => setFormData({ ...formData, roomType: value })}>
                        <SelectTrigger className="pl-10 bg-[#1A1A1A] border-gold/30 text-cream">
                          <SelectValue placeholder={t('booking.selectRoom') as string} />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1A1A] border-gold/30 max-h-60">
                          {roomTypes.map((room) => (
                            <SelectItem key={room.value} value={room.value} className="text-cream">
                              {language === 'en' ? room.labelEn : room.labelAr} - ${room.price}/night
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Meal Plan */}
                  <div className="md:col-span-2 mt-4">
                    <h3 className="text-lg font-semibold text-cream mb-4">{t('booking.form.mealPlan') as string}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {mealPlans.map((plan) => (
                        <label
                          key={plan.value}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            formData.mealPlan === plan.value
                              ? 'border-gold bg-gold/10'
                              : 'border-gold/30 hover:border-gold/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="mealPlan"
                            value={plan.value}
                            checked={formData.mealPlan === plan.value}
                            onChange={(e) => setFormData({ ...formData, mealPlan: e.target.value })}
                            className="hidden"
                          />
                          <div className="text-cream font-medium">{t(plan.label) as string}</div>
                          <div className="text-gold text-sm">+${plan.price}/person/night</div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="md:col-span-2 mt-4">
                    <h3 className="text-lg font-semibold text-cream mb-4">{t('booking.form.payment') as string}</h3>
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-gold/30 bg-[#1A1A1A]">
                      <CreditCard className="w-6 h-6 text-gold" />
                      <div>
                        <div className="text-cream font-medium">{t('booking.form.payAtHotel') as string}</div>
                        <div className="text-cream/60 text-sm">{language === 'en' ? 'Pay with cash or card at check-in' : 'ادفع نقداً أو بالبطاقة عند الوصول'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="md:col-span-2">
                    <Label className="text-cream/80 mb-2 block">{t('booking.form.specialRequests') as string}</Label>
                    <Textarea
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder={t('booking.form.specialRequestsPlaceholder') as string}
                      className="bg-[#1A1A1A] border-gold/30 text-cream focus:border-gold min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full mt-8 btn-gold py-4 text-lg"
                >
                  {t('booking.form.submit') as string}
                </Button>
              </form>
            </div>

            {/* Booking Summary */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="card-luxury p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-cream mb-6">{t('booking.summary.title') as string}</h3>

                {selectedRoom ? (
                  <div className="space-y-4">
                    <div className="flex justify-between text-cream/80">
                      <span>{language === 'en' ? selectedRoom.labelEn : selectedRoom.labelAr}</span>
                      <span className="text-gold">${selectedRoom.price}</span>
                    </div>
                    
                    <div className="flex justify-between text-cream/80">
                      <span>{nights} {t('booking.summary.nights') as string}</span>
                      <span className="text-gold">${selectedRoom.price * nights}</span>
                    </div>

                    <div className="flex justify-between text-cream/80">
                      <span>{parseInt(formData.adults) + parseInt(formData.children)} {t('booking.summary.guests') as string}</span>
                      <span></span>
                    </div>

                    <div className="border-t border-gold/20 pt-4 mt-4">
                      <div className="flex justify-between text-cream font-semibold text-lg">
                        <span>{t('booking.summary.total') as string}</span>
                        <span className="text-gold">${total}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-cream/60 text-center py-8">
                    {language === 'en' ? 'Select a room to see pricing' : 'اختر غرفة لرؤية الأسعار'}
                  </div>
                )}

                {/* Accepted Payment */}
                <div className="mt-8 pt-6 border-t border-gold/20">
                  <p className="text-cream/60 text-sm mb-4">{language === 'en' ? 'We Accept' : 'نقبل'}</p>
                  <div className="flex gap-3">
                    <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VISA</span>
                    </div>
                    <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">MC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="bg-[#1A1A1A] border-gold/30 text-cream max-w-md">
          <DialogHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
              <Check className="w-8 h-8 text-gold" />
            </div>
            <DialogTitle className="text-2xl font-bold text-cream">
              {t('booking.confirmation.title') as string}
            </DialogTitle>
            <DialogDescription className="text-cream/70">
              {t('booking.confirmation.message') as string}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20 text-center">
            <p className="text-cream/60 text-sm mb-2">{t('booking.confirmation.reference') as string}</p>
            <p className="text-gold text-2xl font-bold font-mono">{bookingRef}</p>
          </div>
          <Button
            onClick={() => setShowConfirmation(false)}
            className="w-full mt-6 btn-gold"
          >
            {language === 'en' ? 'Close' : 'إغلاق'}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
