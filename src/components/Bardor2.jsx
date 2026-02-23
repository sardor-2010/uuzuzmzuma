// Bardor2.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import rasm from '../assets/uzum punkt.png';

// ─── DATA ───────────────────────────────────────────
const steps = [
  {
    number: 1,
    title: "Joy toping",
    content: (
      <p className="text-gray-400 text-sm leading-relaxed">
        • Maydoni <strong className="text-white">20 m² va undan kattaroq</strong><br />
        • Avtoturargohi bor<br />
        • Fasadga Uzum Market belgisini osish mumkin
      </p>
    ),
    image: "🗺️",
  },
  {
    number: 2,
    title: "Ariza qoldiring",
    content: (
      <p className="text-gray-400 text-sm leading-relaxed">
        Biz sizdan joy manzili va suratlarini so'raymiz. Hammasini tekshirib,{" "}
        <strong className="text-white">3-5 kun</strong> ichida tasdiqlaymiz
      </p>
    ),
    image: "💬",
  },
  {
    number: 3,
    title: "Shartnomani imzolang",
    content: (
      <p className="text-gray-400 text-sm leading-relaxed">
        Yuridik shaxs bo'lmasangiz, uni rasmiylashtiring. Biz shartnoma tuzib,
        imzolash uchun sizga yuboramiz.
      </p>
    ),
    image: "📝",
  },
  {
    number: 4,
    title: "Binoni ta'mirlang",
    content: (
      <p className="text-gray-400 text-sm leading-relaxed">
        • Topshirish punktingiz brendbukdagidek bo'lishi uchun sizga dizayn-loyihani
        sovg'a qilamiz. Ortiqcha narsalarni o'ylashga hojat qolmaydi<br /><br />
        • Ochilish jarayonining barcha bosqichlarida yordam beradigan Uzum Market'dan
        yordamchi biriktiramiz
      </p>
    ),
    image: "🏗️",
  },
  {
    number: 5,
    title: "Xodim toping",
    content: (
      <p className="text-gray-400 text-sm leading-relaxed">
        Biz unga buyurtmalarni qanday topshirish va mijozlar bilan qanday muloqot
        qilishni o'rgatamiz. Xodim yollashning imkoni bo'lmasa, biz yordam beramiz
      </p>
    ),
    image: "👩‍💼",
  },
  {
    number: 6,
    title: "Birinchi xaridorlarni kutib oling",
    content: (
      <p className="text-gray-400 text-sm leading-relaxed">
        • Xaridorlar topshirish punktingizni Uzum Market'da ko'rishadi<br />
        • Birinchi buyurtmalaringiz ombordan yetkazib beriladi<br /><br />
        Biz sizni ochilgandan keyin ham qo'llab-quvvatlaymiz va barcha shartlar
        bajarilganda moliyaviy yordam ko'rsatamiz.
      </p>
    ),
    image: "🎉",
  },
];

const photos = [
  { emoji: "🏪", label: "Uzum do'kon fasadi" },
  { emoji: "🏬", label: "Uzum Market filiali" },
  { emoji: "📋", label: "Uzum reklama" },
];

const faqs = [
  { q: "BTP nima?" },
  { q: "Topshirish punkti orqali qanday daromad olaman?" },
  { q: "Nechta topshirish punktini ochish mumkin?" },
  { q: "Qaysi binolar topshirish punktiga mos keladi?" },
  { q: "Yuridik shaxs bo'lmasdan topshirish punktini ochishim mumkinmi?" },
  { q: "Bino ijaraga olib, unda BTP ochishim mumkinmi?" },
  { q: "Qaysi joylashuvlar BTP uchun mos keladi?" },
  { q: "Ta'mirlash ishlarini qilishim shartmi?" },
  { q: "Ta'mirlash ishlarini qachon boshlash kerak?" },
  { q: "Topshirish punktini ochish uchun qanday texnika va uskunalar kerak?" },
  { q: "Topshirish punkti qaysi vaqtlarda ishlashi kerak?" },
  { q: "BTPni supermarket yoki boshqa ishlayotgan biznes ichida ochishim mumkinmi?" },
  { q: "Buyurtmalarni qanday qabul qilib, xaridorlarga topshiraman?" },
  { q: "Nega mening arizam tasdiqlanmadi?" },
];

// ─── FAQ ITEM ────────────────────────────────────────
function FaqItem({ q }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-gray-200 last:border-0 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-4 px-2">
        <span className="text-gray-800 text-sm font-medium">{q}</span>
        <span className={`text-gray-400 text-lg transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ⌄
        </span>
      </div>
      {open && (
        <p className="text-gray-500 text-sm px-2 pb-4 leading-relaxed">
          Bu savol bo'yicha batafsil ma'lumot tez orada qo'shiladi.
        </p>
      )}
    </div>
  );
}

// ─── TELEGRAM SVG ────────────────────────────────────
function TelegramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

// ─── MAIN ────────────────────────────────────────────
const Bardor2 = () => {
  const [menuOchiq, setMenuOchiq] = useState(false);
  const [tanlanganTil, setTanlanganTil] = useState("O'zbekcha");
  const [activeTab, setActiveTab] = useState('Toshkent');
  const menuRef = useRef(null);

  useEffect(() => {
    const tashqarigaBos = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOchiq(false);
    };
    document.addEventListener('mousedown', tashqarigaBos);
    return () => document.removeEventListener('mousedown', tashqarigaBos);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ══════════════ HEADER ══════════════ */}
      <header className="bg-[#6B3FF6] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-black text-sm">ⓤ</div>
              <div className="leading-tight text-xs font-bold">
                <div>uzum</div>
                <div>market</div>
              </div>
            </div>

            {/* Nav */}
            <div className="flex items-center gap-6 md:gap-10 text-sm font-medium">
              <a href="#" className="hover:underline hidden md:block">Topshirish punktini qanday ochish mumkin</a>
              <a href="#" className="hover:underline hidden md:block">Ochish uchun nima kerak</a>
              <a href="#" className="hover:underline hidden md:block">Brendbuk</a>

              {/* Language */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOchiq(!menuOchiq)}
                  className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
                >
                  <Globe size={18} />
                  <span className="font-medium">{tanlanganTil === "O'zbekcha" ? 'UZ' : 'RU'}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${menuOchiq ? 'rotate-180' : ''}`} />
                </button>
                {menuOchiq && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl z-50 border border-gray-200 overflow-hidden">
                    <div className="py-1">
                      {[{ label: "O'zbekcha", flag: "🇺🇿" }, { label: "Русский", flag: "🇷🇺" }].map(({ label, flag }) => (
                        <button
                          key={label}
                          onClick={() => { setTanlanganTil(label); setMenuOchiq(false); }}
                          className="w-full px-5 py-3.5 flex items-center gap-4 hover:bg-purple-50 transition-colors text-gray-900"
                        >
                          <span className="text-2xl">{flag}</span>
                          <span className="flex-1 font-medium">{label}</span>
                          {tanlanganTil === label && <span className="text-green-600 text-xl">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════ HERO ══════════════ */}
      <section className="bg-[#6B3FF6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Uzum Market topshirish<br />punktini oching
              </h1>
              <p className="text-xl md:text-2xl mb-10 opacity-90">
                Ochilishda va ishning birinchi oylarida moliyaviy jihatdan yordam beramiz
              </p>
              <button className="bg-yellow-400 text-black font-bold text-lg px-10 py-5 rounded-xl shadow-lg hover:bg-yellow-300 transition transform hover:scale-105">
                Topshirish punktini ochish
              </button>
            </div>
            <div className="flex justify-center">
              <img src={rasm} alt="Uzum Market topshirish punkti" className="w-full max-w-md rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ DAROMAD ══════════════ */}
      <section className="bg-[#3d1f8a] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-10 leading-tight">
            Birinchi oydan oq pul ishlashni boshlang
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Toshkent', 'Yirik shaharlar', 'Boshqa shaharlar va qishloqlar'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium text-lg transition-all ${
                  activeTab === tab
                    ? 'bg-white text-purple-900 shadow-lg scale-105'
                    : 'bg-purple-800 hover:bg-purple-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Har bir olib ketilgan tovardan",
                value: <span>6<span className="text-6xl">%</span></span>,
                sub: "daromad",
                note: "Lekin har bir tovar uchun ko'pi bilan 36 000 so'm",
              },
              {
                title: "Birinchi 6 oyda haqiqiy daromadni kafolatlaymiz",
                value: "17 400 000",
                sub: "so'm oyiga",
                note: "Bundan kam topsangiz, farqini to'lab beramiz",
              },
              {
                title: "Ochilish bonusi",
                value: "6 100 000",
                sub: "so'm",
                note: "Topshirish punkti 25 kun ichida ochilganda",
                badge: "🎁",
              },
            ].map((card, i) => (
              <div key={i} className="bg-[#5230a0] rounded-3xl p-8 text-center shadow-2xl hover:scale-105 transition-transform relative overflow-hidden">
                <h3 className="text-xl font-bold mb-6 opacity-90">{card.title}</h3>
                <div className="text-6xl md:text-7xl font-black text-yellow-400 mb-4">{card.value}</div>
                <p className="text-2xl font-bold">{card.sub}</p>
                <p className="text-sm mt-4 opacity-80">{card.note}</p>
                {card.badge && (
                  <div className="absolute -bottom-6 -right-6 text-7xl opacity-20">{card.badge}</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <button className="bg-yellow-400 text-purple-900 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:bg-yellow-300 transition hover:scale-105">
              Topshirish punktini ochish
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════ OSON ══════════════ */}
      <section className="bg-[#e8e8f0] py-16 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-12">
            O'z topshirish punktingizni<br />ochish — oson
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-3xl p-9 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300">
              <h3 className="text-base font-bold text-gray-900 mb-3">Boshlashda yordam beramiz</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[60%]">Tayyor dasturiy ta'minotni taqdim etamiz, xodimlarni o'qitib, dizayn-loyiha sovg'a qilamiz</p>
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-7xl select-none pointer-events-none animate-bounce">🚀</span>
            </div>
            <div className="bg-white rounded-3xl p-9 shadow-sm hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300">
              <h3 className="text-base font-bold text-gray-900 mb-3">Minimal sarmoya</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Boshlanishda — faqat ishlash joyingizning remonti</p>
            </div>
            <div className="bg-white rounded-3xl p-9 shadow-sm hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300">
              <h3 className="text-base font-bold text-gray-900 mb-3">Tezkor<br />ishga tushirish</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Arizadan birinchi buyurtmani topshirishgacha — ikki oy</p>
            </div>
            <div className="bg-white rounded-3xl p-9 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300">
              <h3 className="text-base font-bold text-gray-900 mb-3">Hech qanday yashirin<br />to'lovlarsiz</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[60%]">Biz qat'iy shartnoma asosida ishlaymiz</p>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-6xl select-none pointer-events-none animate-bounce">🪙</span>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button className="bg-[#6B3FF6] text-white font-medium text-base px-10 py-5 rounded-2xl shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              Topshirish punktini ochish
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════ ISHONISH ══════════════ */}
      <section className="bg-white py-16 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-12">
            Bizga ishonishning sabablari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1e1e2e] rounded-3xl p-9 row-span-2 flex flex-col justify-between min-h-[320px] hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
              <div>
                <p className="text-[#f5d923] text-5xl font-black mb-4">&gt; 23 000 000</p>
                <p className="text-gray-300 text-base">bir yilda berilgan buyurtmalar</p>
              </div>
              <div className="flex justify-center mt-6">
                <span className="text-9xl">📦</span>
              </div>
            </div>
            <div className="bg-[#1e1e2e] rounded-3xl p-9 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
              <p className="text-[#f5d923] text-5xl font-black mb-4">&gt; 17 000</p>
              <p className="text-gray-300 text-base">Uzum Market'dagi faol sotuvchilar</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1e1e2e] rounded-3xl p-7 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
                <p className="text-[#f5d923] text-4xl font-black mb-3">1 282</p>
                <p className="text-gray-300 text-sm leading-relaxed">topshirish punktlari va do'konlar</p>
              </div>
              <div className="bg-[#1e1e2e] rounded-3xl p-7 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
                <p className="text-[#f5d923] text-4xl font-black mb-3">416</p>
                <p className="text-gray-300 text-sm leading-relaxed">aholi punktlari</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button className="bg-[#f5d923] text-gray-900 font-bold text-base px-10 py-5 rounded-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              Topshirish punktini ochish
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════ TARTIB ══════════════ */}
      <section className="bg-[#111118] py-16 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-16">
            Topshirish punktini<br />ochish tartibi
          </h2>
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#6B3FF6] flex items-center justify-center text-white font-black text-lg shrink-0 z-10">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 bg-[#6B3FF6] flex-1 my-2 opacity-40" />
                  )}
                </div>
                <div className={`flex flex-col md:flex-row gap-6 w-full ${index < steps.length - 1 ? "pb-12" : "pb-0"}`}>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-3 mt-2">{step.title}</h3>
                    {step.content}
                  </div>
                  <div className="w-full md:w-56 h-40 bg-[#1e1e2e] rounded-2xl flex items-center justify-center text-6xl shrink-0">
                    {step.image}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button className="bg-[#f5d923] text-gray-900 font-bold text-base px-10 py-5 rounded-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              Topshirish punktini ochish
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════ BOSHLASH ══════════════ */}
      <section className="bg-white py-16 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-12">
            Boshlash uchun nima kerak
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            <div className="bg-[#6B3FF6] rounded-3xl p-8 flex flex-col justify-between min-h-[280px] relative overflow-hidden hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
              <div>
                <h3 className="text-white text-xl font-bold mb-3">Bino</h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  20-50 m² oralig'ida — buyurtmalarni topshirish zonasini joylashtirish
                  va xaridorlarga navbatsiz xizmat ko'rsatish uchun yetarli
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white opacity-5" />
              <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-white opacity-5" />
              <div className="mt-8 text-7xl text-center">🏪</div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-7 flex items-center justify-between hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
                <div>
                  <h3 className="text-gray-900 text-lg font-bold mb-2">Uskunalar va mebel</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                    Videokameralar, telefon, noutbuk, skaner, stol, stullar va buyurtmalar uchun stellajlar
                  </p>
                </div>
                <span className="text-5xl ml-4 shrink-0">💻</span>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-7 flex items-center justify-between hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
                <div>
                  <h3 className="text-gray-900 text-lg font-bold mb-2">Xodim</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                    10:00-20:00 oralig'ida xaridorlarga buyurtmalarni topshiradigan kishi
                  </p>
                </div>
                <span className="text-5xl ml-4 shrink-0">👥</span>
              </div>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-10">
            Topshirish punktingiz qanday ko'rinishi mumkin
          </h3>
          <div className="grid grid-cols-3 gap-3 mb-12">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`bg-gray-100 rounded-2xl flex items-center justify-center hover:scale-[1.02] transition-all duration-300 ${i === 1 ? "h-64" : "h-52"}`}
              >
                <span className="text-7xl">{photo.emoji}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 font-medium text-base px-8 py-4 rounded-2xl hover:border-[#6B3FF6] hover:text-[#6B3FF6] transition-all duration-300 bg-white">
              <span>⬇️</span> Brendbukni yuklab olish
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="bg-white py-16 px-4">
        <div className="w-full max-w-2xl mx-auto">

          {/* CTA Banner */}
          <div className="bg-[#6B3FF6] rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white opacity-5" />
            <div className="absolute bottom-0 right-20 w-24 h-24 rounded-full bg-white opacity-5" />
            <div className="z-10">
              <h2 className="text-white text-2xl font-black leading-snug mb-3">
                Hoziroq daromad<br />topishni<br />boshlang
              </h2>
              <p className="text-purple-200 text-sm mb-5 leading-relaxed">
                Balki aynan siz shahringizdagi birinchi Uzum Market topshirish punktini ochasiz!
              </p>
              <button className="bg-[#f5d923] text-gray-900 font-bold text-sm px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300">
                Topshirish punktini ochish
              </button>
              <p className="text-purple-300 text-xs mt-3 leading-relaxed">
                Davom etib, siz{" "}
                <span className="underline cursor-pointer">oferta</span> shartlarini qabul qilgan va{" "}
                <span className="underline cursor-pointer">shaxsiy ma'lumotlarni qayta ishlash siyosatiga</span>{" "}
                rozilik bildirilgan bo'lasiz.
              </p>
            </div>
            <div className="text-8xl z-10 shrink-0">🏪</div>
          </div>

          {/* FAQ */}
          <h2 className="text-center text-4xl font-black text-gray-900 tracking-tight mb-10">
            Savollarga javob beramiz
          </h2>
          <div className="bg-gray-50 rounded-3xl px-6 py-2">
            {faqs.map((item, i) => (
              <FaqItem key={i} q={item.q} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="bg-[#6B3FF6] text-white py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-black text-lg">
              ⓤ
            </div>
            <div className="leading-tight text-sm font-bold">
              <div>uzum</div>
              <div>market</div>
            </div>
          </div>

          {/* Hamkorlar uchun */}
          <div>
            <h3 className="font-bold text-base mb-4">Hamkorlar uchun</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-purple-200 text-sm hover:text-white underline transition-colors">Sotuvchi bo'lish</a></li>
              <li><a href="#" className="text-purple-200 text-sm hover:text-white underline transition-colors">Brendbuk</a></li>
            </ul>
          </div>

          {/* Kompaniya */}
          <div>
            <h3 className="font-bold text-base mb-4">Kompaniya</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-purple-200 text-sm hover:text-white underline transition-colors">Oferta shartnomasi</a></li>
              <li><a href="#" className="text-purple-200 text-sm hover:text-white underline transition-colors">Maxfiylik siyosati</a></li>
            </ul>
          </div>

          {/* Telegram */}
          <div>
            <h3 className="font-bold text-base mb-4">
              Uzum Market<br />hamkorlarining chati
            </h3>
        
          </div>

        </div>
      </footer>

    </div>
  );
};


export default Bardor2;