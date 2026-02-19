import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/491cceaa-dd7a-4b3b-99c3-d10acbe0e41e.png";

const IMG_HERO = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/files/4a714f5d-8578-4fc6-8002-8704a4c4927f.jpg";
const IMG_CARE_HANDS = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/files/c4562386-52b5-45be-8349-782c86146ff5.jpg";
const IMG_INTERIOR = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/files/5128686f-263f-4dd8-a6a0-dc2296bb0586.jpg";
const IMG_MEDICINE = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/files/8f3d05e1-f746-4b8c-89d9-983f1a1a6fc5.jpg";

const SEND_URL = "https://functions.poehali.dev/15eda7c0-7bf7-47b0-b1f5-5c7b89543d11";

const ContactForm = ({ id, buttonText = "Получить кандидатов", dark = false }: { id: string; buttonText?: string; dark?: boolean }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !consent || loading) return;
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(SEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), formId: id }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="py-8">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${dark ? "bg-white/10" : "bg-[#56140E]/10"}`}>
          <Icon name="Check" size={22} className={dark ? "text-white" : "text-[#56140E]"} />
        </div>
        <p className={`text-xl font-semibold ${dark ? "text-white" : "text-black"}`}>Заявка отправлена</p>
        <p className={`text-sm mt-2 ${dark ? "text-white/60" : "text-[#888]"}`}>Мы перезвоним в течение 15 минут</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" id={id}>
      <div className="flex flex-col sm:flex-row gap-3 mb-3">
        <Input
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`h-14 text-[16px] rounded-xl px-5 ${dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-[#f7f7f7] border-transparent text-black placeholder:text-[#aaa]"}`}
        />
        <Input
          placeholder="Телефон"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`h-14 text-[16px] rounded-xl px-5 ${dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-[#f7f7f7] border-transparent text-black placeholder:text-[#aaa]"}`}
        />
      </div>
      {error && (
        <p className={`text-[13px] mb-3 ${dark ? "text-red-300" : "text-red-600"}`}>
          Не удалось отправить заявку, попробуйте ещё раз
        </p>
      )}
      <label className="flex items-start gap-2.5 mb-4 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 shrink-0 accent-[#56140E] cursor-pointer"
        />
        <span className={`text-[12px] leading-[1.5] ${dark ? "text-white/50" : "text-[#aaa]"}`}>
          Я даю согласие на{" "}
          <Link to="/consent" className={`underline ${dark ? "text-white/70 hover:text-white" : "text-[#888] hover:text-black"}`}>
            обработку персональных данных
          </Link>
          {" "}в соответствии с{" "}
          <Link to="/privacy" className={`underline ${dark ? "text-white/70 hover:text-white" : "text-[#888] hover:text-black"}`}>
            Политикой конфиденциальности
          </Link>
        </span>
      </label>
      <Button
        type="submit"
        disabled={!consent || loading}
        className={`w-full h-14 text-[16px] font-semibold rounded-xl transition-colors ${dark ? "bg-white text-[#56140E] hover:bg-white/90 disabled:bg-white/40" : "bg-[#56140E] text-white hover:bg-[#56140E]/90 disabled:bg-[#56140E]/40"}`}
      >
        {loading ? "Отправка..." : buttonText}
      </Button>
      <p className={`text-xs mt-3 ${dark ? "text-white/40" : "text-[#bbb]"}`}>Перезвоним в течение 15 минут</p>
    </form>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#eee]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-[17px] font-medium text-black pr-8">{question}</span>
        <Icon name={open ? "Minus" : "Plus"} size={18} className="text-[#56140E] shrink-0" />
      </button>
      {open && (
        <div className="pb-6 text-[#666] leading-relaxed text-[15px]">
          {answer}
        </div>
      )}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="max-w-[1120px] mx-auto px-6 md:px-10 pt-8 md:pt-10 pb-6">
        <div className="flex items-center justify-between">
          <img src={LOGO} alt="Noproblem" className="h-6 md:h-7" />
          <a
            href="tel:+79163191286"
            className="text-[15px] text-[#333] font-medium hover:text-[#56140E] transition-colors hidden sm:block"
          >
            +7 (916) 319-12-86
          </a>
        </div>
      </header>

      {/* БЛОК 1 — Hero */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex-1 pt-4 md:pt-8">
              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-black leading-[1.08] tracking-[-0.02em] mb-6">
                Срочный подбор сиделки <br className="hidden md:block" />с проживанием в Москве
              </h1>

              <p className="text-[17px] text-[#666] leading-relaxed mb-4 max-w-lg">
                Для ухода после инсульта, при деменции и за лежачими пациентами
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-1 text-[14px] text-[#999] mb-10">
                <span>Кандидат за 24–72 часа</span>
                <span>·</span>
                <span>Гарантия замены 1 месяц</span>
              </div>

              <div className="max-w-md mb-8">
                <ContactForm id="hero-form" />
              </div>

              <div className="flex flex-wrap gap-x-7 gap-y-2 text-[13px] text-[#888]">
                <span className="flex items-center gap-2">
                  <Icon name="Check" size={14} className="text-[#56140E]" />
                  Работаем по договору
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Check" size={14} className="text-[#56140E]" />
                  Оформление онлайн
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Check" size={14} className="text-[#56140E]" />
                  Не нужно никуда ехать
                </span>
              </div>
            </div>

            <div className="w-full lg:w-[420px] shrink-0">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={IMG_HERO}
                  alt="Забота о пожилых"
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 2 — Когда к нам обращаются */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-black leading-[1.08] tracking-[-0.02em] mb-14 md:mb-16">
            Когда к нам обращаются
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                num: "01",
                title: "Круглосуточный уход",
                text: "Когда человек лежачий или полностью утратил самостоятельность и требуется постоянный контроль состояния, гигиены и питания.",
                img: IMG_CARE_HANDS,
              },
              {
                num: "02",
                title: "Присмотр и помощь по быту",
                text: "При деменции, возрастных нарушениях памяти или снижении самостоятельности, когда важно присутствие, контроль лекарств и помощь в повседневных делах.",
                img: IMG_INTERIOR,
              },
              {
                num: "03",
                title: "Уход после острого состояния",
                text: "После инсульта, инфаркта, перелома шейки бедра или выписки из стационара, когда требуется восстановление и помощь в реабилитации на дому.",
                img: IMG_MEDICINE,
              },
            ].map((item) => (
              <div key={item.num}>
                <div className="rounded-xl overflow-hidden mb-5">
                  <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                </div>
                <span className="text-[12px] text-[#56140E] tracking-[0.15em] font-medium uppercase">{item.num}</span>
                <h3 className="text-[20px] font-bold text-black mt-2 mb-2 leading-tight">{item.title}</h3>
                <p className="text-[#888] text-[14px] leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-[#888] text-[15px] mt-14 border-l-2 border-[#56140E]/20 pl-5 max-w-lg">
            Мы подключаемся в ситуациях, где важна точность подбора и надёжность.
          </p>
        </div>
      </section>

      {/* БЛОК 3 — Как проходит подбор */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-black leading-[1.08] tracking-[-0.02em] mb-12">
                Как проходит подбор
              </h2>

              <div className="space-y-0 mb-10">
                {[
                  "Вы описываете ситуацию и свои ожидания от сиделки",
                  "Подписываем договор — онлайн",
                  "Мы проводим телефонные и видео-интервью с кандидатами",
                  "Приводим на видео-собеседование к вам только подходящих",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-[#56140E] text-white flex items-center justify-center text-[14px] font-semibold shrink-0">
                        {i + 1}
                      </div>
                      {i < 3 && <div className="w-px h-7 bg-[#e5e5e5]" />}
                    </div>
                    <p className="text-[#555] text-[15px] pt-2 pb-3 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-6">
              <div className="space-y-2 text-[#666] text-[15px] mb-8 leading-relaxed">
                <p>Персональный подбор под вашу ситуацию. Без массовых баз и «потока».</p>
                <p>Вы избежите ошибок и стресса. Сэкономите время и нервы.</p>
              </div>

              <ContactForm id="process-form" buttonText="Заказать звонок" />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 4 — Почему дешёвый подбор */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-[30px] md:text-[40px] lg:text-[44px] font-bold text-black leading-[1.08] tracking-[-0.02em] mb-8">
                Почему дешёвый подбор часто заканчивается заменой
              </h2>

              <p className="text-[#888] text-[15px] mb-7 leading-relaxed">
                Минимальная стоимость подбора обычно означает:
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  "Отсутствие глубинных интервью и проверки опыта",
                  "Неподтверждённую практику работы с диагнозом",
                  "Формальную передачу контакта",
                  "Отсутствие проверки документов",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#56140E]/40 mt-2 shrink-0" />
                    <span className="text-[#333] text-[15px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#888] text-[15px] leading-relaxed mb-2">
                Экономия на качестве подбора приводит к повторному поиску уже через 1–2 недели.
              </p>
              <p className="text-black font-bold text-[16px]">
                Наша задача — сделать один точный подбор.
              </p>
            </div>

            <div className="lg:pt-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={IMG_INTERIOR}
                  alt="Аккуратный интерьер"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 5 — Стоимость */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-black leading-[1.08] tracking-[-0.02em] mb-14 md:mb-16">
            Стоимость
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="border border-[#eee] rounded-2xl p-7 md:p-10">
              <p className="text-[12px] text-[#56140E] tracking-[0.15em] uppercase font-medium mb-5">Стандартный</p>
              <h3 className="text-[22px] font-bold text-black mb-1">Подбор сиделки</h3>
              <p className="text-[#999] text-[14px] mb-7">Под ваш запрос</p>
              <p className="text-[36px] md:text-[42px] font-bold text-black tracking-tight">50 000 ₽</p>
              <p className="text-[14px] text-[#999] mt-2">Гарантия — 1 месяц</p>
            </div>

            <div className="bg-[#56140E] rounded-2xl p-7 md:p-10">
              <p className="text-[12px] text-white/50 tracking-[0.15em] uppercase font-medium mb-5">Приоритет</p>
              <h3 className="text-[22px] font-bold text-white mb-1">Срочный подбор</h3>
              <p className="text-white/60 text-[14px] mb-7">24–48 часов</p>
              <p className="text-[36px] md:text-[42px] font-bold text-white tracking-tight">70 000 ₽</p>
              <p className="text-[14px] text-white/60 mt-2">Гарантия — 1 месяц</p>
            </div>
          </div>

          <div className="border border-[#eee] rounded-2xl p-7 md:p-10">
            <p className="text-[12px] font-bold text-black tracking-[0.15em] uppercase mb-7">Дополнительно</p>
            {[
              { name: "Проверка благонадёжности", price: "5 000 ₽" },
              { name: "Замена вне гарантии", price: "25 000 ₽" },
              { name: "Перевозка лежачих пациентов", price: "от 15 000 ₽" },
              { name: "Выезд психиатра-геронтолога на дом", price: "от 25 000 ₽", note: "возможно дальнейшее сопровождение пациента" },
              { name: "Выезд врача-реабилитолога на дом", price: "от 8 000 ₽", note: "оценивает состояние и подключает команду для восстановления" },
            ].map((item, i, arr) => (
              <div key={item.name} className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-8 py-4 ${i < arr.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}>
                <div>
                  <span className="text-[#333] text-[15px]">{item.name}</span>
                  {item.note && <p className="text-[12px] text-[#bbb] mt-0.5">{item.note}</p>}
                </div>
                <span className="text-black font-bold text-[15px] shrink-0">{item.price}</span>
              </div>
            ))}
            <p className="text-[12px] text-[#ccc] mt-7">
              *Стоимость может меняться, подробнее уточняйте у менеджера
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 6 — Почему нам доверяют */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <h2 className="text-[30px] md:text-[40px] lg:text-[44px] font-bold text-black leading-[1.08] tracking-[-0.02em] mb-12">
                Почему нам доверяют семьи предпринимателей
              </h2>

              <div className="space-y-5">
                {[
                  "Конфиденциальность",
                  "Быстрое принятие решений",
                  "Онлайн-оформление без лишних встреч",
                  "Чёткие договорённости и ответственность",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#56140E] flex items-center justify-center shrink-0">
                      <Icon name="Check" size={13} className="text-white" />
                    </div>
                    <p className="text-[#333] text-[16px] font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-6">
              <ContactForm id="trust-form" buttonText="Оставить заявку" />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 7 — Отзывы */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="mb-14 md:mb-16">
            <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-black leading-[1.08] tracking-[-0.02em] mb-4">
              Отзывы
            </h2>
            <p className="text-[#888] text-[16px] leading-relaxed max-w-md">
              Каждый подбор индивидуален. Вот что говорят наши клиенты:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              {
                text: "Обратилась за подбором сиделки для мамы после инсульта. Подобрали очень быстро, кандидат замечательный. Спасибо за профессионализм!",
                link: "https://yandex.com/maps/org/97350777975/reviews?reviews%5BpublicId%5D=zt841g5tfbm4uzpfte7emdhqcc&utm_source=review",
              },
              {
                text: "Нужна была сиделка с проживанием для папы с деменцией. Noproblem подобрали именно того человека, который подошёл нашей семье.",
                link: "https://yandex.com/maps/org/97350777975/reviews?reviews%5BpublicId%5D=xpnca7dg4g22ynemryyg08k7bm&utm_source=review",
              },
              {
                text: "Всё оформили онлайн, никуда не нужно было ехать. Очень удобно и профессионально. Рекомендую.",
                link: "https://yandex.com/maps/org/97350777975/reviews?reviews%5BpublicId%5D=m9f5r7maa4dr0dx031rn5dvg4m&utm_source=review",
              },
              {
                text: "Благодарю за оперативную работу и внимательное отношение. Замена по гарантии прошла быстро и без проблем.",
                link: "https://yandex.com/maps/org/97350777975/reviews?reviews%5BpublicId%5D=0g292p9ta4w02yg3dmfc7u1prr&utm_source=review",
              },
            ].map((review, i) => (
              <a
                key={i}
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#eee] rounded-2xl p-7 md:p-8 hover:border-[#ddd] transition-colors"
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Icon key={s} name="Star" size={14} className="text-[#56140E] fill-[#56140E]" />
                  ))}
                </div>
                <p className="text-[#333] text-[15px] leading-[1.7] mb-5">
                  «{review.text}»
                </p>
                <span className="text-[12px] text-[#bbb] tracking-[0.1em] uppercase">Яндекс.Карты</span>
              </a>
            ))}
          </div>

          <a
            href="https://yandex.com/maps/org/97350777975/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-[#56140E] hover:text-[#56140E]/70 font-medium transition-colors"
          >
            Все отзывы на Яндекс.Картах
            <Icon name="ArrowUpRight" size={14} />
          </a>
        </div>
      </section>

      {/* БЛОК 8 — FAQ */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-black leading-[1.08] tracking-[-0.02em]">
                Частые вопросы
              </h2>
            </div>
            <div className="border-t border-[#eee]">
              <FAQItem
                question="Сколько занимает подбор?"
                answer="Обычно 24–72 часа. Всё зависит от вашей ситуации."
              />
              <FAQItem
                question="Мы общаемся с кандидатом до выхода?"
                answer="Да. Организуем видео-собеседование, мы не просто присутствуем, а при необходимости помогаем проводить собеседование с кандидатами."
              />
              <FAQItem
                question="Что если сиделка не подойдёт?"
                answer="Гарантия замены действует 1 месяц. Если что-то не устроит, мы снова пройдём весь путь от телефонных собеседований до согласования подходящего кандидата."
              />
              <FAQItem
                question="Нужно ли приезжать в офис?"
                answer="Нет. Всё оформление и подписание документов происходит онлайн, все инструкции, гайды и чек-листы направляем онлайн, все встречи с кандидатами также проходят онлайн."
              />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 9 — Финальный CTA */}
      <section className="relative py-24 md:py-32 bg-[#56140E] overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-4">
              В сложных ситуациях время имеет значение
            </h2>
            <p className="text-white/50 text-[16px] mb-12">
              Оставьте номер, чтобы начать подбор сегодня.
            </p>
            <div className="max-w-md">
              <ContactForm id="final-form" buttonText="Начать подбор" dark />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 10 — Футер */}
      <footer className="py-12 border-t border-[#f0f0f0]">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div>
              <img src={LOGO} alt="Noproblem" className="h-5 mb-2" />
              <p className="text-[12px] text-[#bbb] mt-2">Подбор сиделок в Москве</p>
            </div>
            <div className="text-[13px] text-[#999] space-y-0.5">
              <p>ИП Горшенёва Анастасия Юрьевна</p>
              <p>ОГРНИП 325774600458353</p>
              <p>ИНН 773774314704</p>
            </div>
            <div className="text-[14px] space-y-1">
              <a href="tel:+79163191286" className="block text-[#333] font-medium hover:text-[#56140E] transition-colors">
                +7 (916) 319-12-86
              </a>
              <a href="mailto:noproblem.msk@yandex.ru" className="block text-[#999] hover:text-[#56140E] transition-colors">
                noproblem.msk@yandex.ru
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-8 pt-6 border-t border-[#f0f0f0]">
            <Link to="/privacy" className="text-[12px] text-[#bbb] hover:text-[#888] transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/consent" className="text-[12px] text-[#bbb] hover:text-[#888] transition-colors">
              Согласие на обработку персональных данных
            </Link>
          </div>
        </div>
      </footer>

      {/* Фиксированная кнопка звонка (мобильная) */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden px-4">
        <a
          href="tel:+79163191286"
          className="flex items-center gap-2.5 bg-[#56140E] text-white px-10 py-4 rounded-full font-semibold text-[14px] shadow-lg shadow-black/10"
        >
          <Icon name="Phone" size={15} />
          Позвонить
        </a>
      </div>
    </div>
  );
};

export default Index;
