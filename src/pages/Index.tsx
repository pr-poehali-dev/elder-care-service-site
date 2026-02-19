import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/491cceaa-dd7a-4b3b-99c3-d10acbe0e41e.png";

const ContactForm = ({ id, buttonText = "Получить кандидатов", dark = false }: { id: string; buttonText?: string; dark?: boolean }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${dark ? "bg-white/10" : "bg-[#56140E]/10"}`}>
          <Icon name="Check" size={22} className={dark ? "text-white" : "text-[#56140E]"} />
        </div>
        <p className={`text-xl font-semibold ${dark ? "text-white" : "text-black"}`}>Заявка отправлена</p>
        <p className={`text-sm mt-2 ${dark ? "text-white/50" : "text-[#3C3C3C]"}`}>Перезвоним в течение 15 минут</p>
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
          className={`h-13 text-[15px] rounded-lg ${dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-white border-[#ddd] text-black placeholder:text-[#999]"}`}
        />
        <Input
          placeholder="Телефон"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`h-13 text-[15px] rounded-lg ${dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-white border-[#ddd] text-black placeholder:text-[#999]"}`}
        />
      </div>
      <Button
        type="submit"
        className={`w-full h-13 text-[15px] font-semibold rounded-lg transition-colors ${dark ? "bg-white text-[#56140E] hover:bg-white/90" : "bg-[#56140E] text-white hover:bg-[#56140E]/90"}`}
      >
        {buttonText}
      </Button>
      <p className={`text-xs text-center mt-3 ${dark ? "text-white/40" : "text-[#999]"}`}>Перезвоним в течение 15 минут</p>
    </form>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-[17px] font-medium text-black pr-6">{question}</span>
        <Icon name={open ? "Minus" : "Plus"} size={18} className="text-[#56140E] shrink-0" />
      </button>
      {open && (
        <div className="pb-6 text-[#3C3C3C] leading-relaxed text-[15px] max-w-2xl">
          {answer}
        </div>
      )}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* БЛОК 1 — Hero */}
      <section className="pb-20 md:pb-28">
        <div className="container pt-10 md:pt-14 mb-16 md:mb-20">
          <img src={LOGO} alt="Noproblem" className="h-7 md:h-9" />
        </div>

        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-[38px] md:text-[50px] lg:text-[58px] font-bold text-black leading-[1.05] tracking-tight mb-6">
              Срочный подбор сиделки с проживанием в Москве
            </h1>

            <p className="text-[17px] text-[#3C3C3C] leading-relaxed mb-4 max-w-lg">
              Для ухода после инсульта, при деменции и за лежачими пациентами
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#3C3C3C] mb-10">
              <span>Кандидат за 24–72 часа</span>
              <span className="text-[#ddd]">·</span>
              <span>Гарантия замены 1 месяц</span>
            </div>

            <div className="max-w-md mb-8">
              <ContactForm id="hero-form" />
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-[13px] text-[#3C3C3C]">
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-[#56140E]" />
                Работаем по договору
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-[#56140E]" />
                Оформление онлайн
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-[#56140E]" />
                Не нужно никуда ехать
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 2 — Когда к нам обращаются */}
      <section className="py-20 md:py-28 border-t border-[#e5e5e5]">
        <div className="container">
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-black leading-[1.05] tracking-tight mb-16">
            Когда к нам обращаются
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                num: "01",
                title: "Круглосуточный уход",
                text: "Когда человек лежачий или полностью утратил самостоятельность и требуется постоянный контроль состояния, гигиены и питания.",
              },
              {
                num: "02",
                title: "Присмотр и помощь по быту",
                text: "При деменции, возрастных нарушениях памяти или снижении самостоятельности, когда важно присутствие, контроль лекарств и помощь в повседневных делах.",
              },
              {
                num: "03",
                title: "Уход после острого состояния",
                text: "После инсульта, инфаркта, перелома шейки бедра или выписки из стационара, когда требуется восстановление и помощь в реабилитации на дому.",
              },
            ].map((item) => (
              <div key={item.num}>
                <span className="text-[13px] text-[#56140E] tracking-widest font-medium">{item.num}</span>
                <h3 className="text-[22px] font-semibold text-black mt-3 mb-3 leading-tight">{item.title}</h3>
                <p className="text-[#3C3C3C] text-[15px] leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-[#3C3C3C] text-[15px] mt-14 border-l-2 border-[#56140E]/30 pl-5 max-w-md">
            Мы подключаемся в ситуациях, где важна точность подбора и надёжность.
          </p>
        </div>
      </section>

      {/* БЛОК 3 — Как проходит подбор */}
      <section className="py-20 md:py-28 border-t border-[#e5e5e5]">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-black leading-[1.05] tracking-tight mb-14">
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
                    <div className="w-9 h-9 rounded-full bg-[#56140E] text-white flex items-center justify-center text-sm font-medium shrink-0">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-px h-8 bg-[#e5e5e5]" />}
                  </div>
                  <p className="text-[#3C3C3C] text-[15px] pt-2 pb-4 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="space-y-1.5 text-[#3C3C3C] text-[15px] mb-10">
              <p>Персональный подбор под вашу ситуацию. Без массовых баз и «потока».</p>
              <p>Вы избежите ошибок и стресса. Сэкономите время и нервы.</p>
            </div>

            <div className="max-w-md">
              <ContactForm id="process-form" buttonText="Заказать звонок" />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 4 — Почему дешёвый подбор */}
      <section className="py-20 md:py-28 border-t border-[#e5e5e5]">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-bold text-black leading-[1.05] tracking-tight mb-10">
              Почему дешёвый подбор часто заканчивается заменой
            </h2>

            <p className="text-[#3C3C3C] text-[16px] mb-8 leading-relaxed">
              Минимальная стоимость подбора обычно означает:
            </p>

            <div className="space-y-3.5 mb-10">
              {[
                "Отсутствие глубинных интервью и проверки опыта",
                "Неподтверждённую практику работы с диагнозом",
                "Формальную передачу контакта",
                "Отсутствие проверки документов",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#56140E]/40 mt-2.5 shrink-0" />
                  <span className="text-black text-[16px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[#3C3C3C] text-[15px] leading-relaxed mb-2">
              Экономия на качестве подбора приводит к повторному поиску уже через 1–2 недели.
            </p>
            <p className="text-black font-semibold text-[16px]">
              Наша задача — сделать один точный подбор.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5 — Стоимость */}
      <section className="py-20 md:py-28 border-t border-[#e5e5e5]">
        <div className="container">
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-black leading-[1.05] tracking-tight mb-16">
            Стоимость
          </h2>

          <div className="max-w-4xl">
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <div className="border border-[#e5e5e5] rounded-xl p-8 md:p-10">
                <p className="text-[13px] text-[#56140E] tracking-widest uppercase font-medium mb-5">Стандартный</p>
                <h3 className="text-[24px] font-bold text-black mb-1">Подбор сиделки</h3>
                <p className="text-[#3C3C3C] text-[15px] mb-6">Под ваш запрос</p>
                <p className="text-[36px] md:text-[42px] font-bold text-black tracking-tight">50 000 ₽</p>
                <p className="text-sm text-[#3C3C3C] mt-1">Гарантия — 1 месяц</p>
              </div>

              <div className="bg-[#56140E] rounded-xl p-8 md:p-10 text-white">
                <p className="text-[13px] text-white/50 tracking-widest uppercase font-medium mb-5">Приоритет</p>
                <h3 className="text-[24px] font-bold mb-1">Срочный подбор</h3>
                <p className="text-white/60 text-[15px] mb-6">24–48 часов</p>
                <p className="text-[36px] md:text-[42px] font-bold tracking-tight">70 000 ₽</p>
                <p className="text-sm text-white/60 mt-1">Гарантия — 1 месяц</p>
              </div>
            </div>

            <div className="border border-[#e5e5e5] rounded-xl p-8 md:p-10">
              <p className="text-[13px] font-semibold text-black tracking-widest uppercase mb-6">Дополнительно</p>
              {[
                { name: "Проверка благонадёжности", price: "5 000 ₽" },
                { name: "Замена вне гарантии", price: "25 000 ₽" },
                { name: "Перевозка лежачих пациентов", price: "от 15 000 ₽" },
                { name: "Выезд психиатра-геронтолога на дом", price: "от 25 000 ₽", note: "возможно дальнейшее сопровождение пациента" },
                { name: "Выезд врача-реабилитолога на дом", price: "от 8 000 ₽", note: "оценивает состояние и подключает команду для восстановления" },
              ].map((item, i, arr) => (
                <div key={item.name} className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-8 py-4 ${i < arr.length - 1 ? "border-b border-[#e5e5e5]" : ""}`}>
                  <div>
                    <span className="text-black text-[15px]">{item.name}</span>
                    {item.note && <p className="text-[13px] text-[#3C3C3C]/70 mt-0.5">{item.note}</p>}
                  </div>
                  <span className="text-black font-semibold text-[15px] shrink-0">{item.price}</span>
                </div>
              ))}
              <p className="text-[13px] text-[#999] mt-6">
                *Стоимость может меняться, подробнее уточняйте у менеджера
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 6 — Почему нам доверяют */}
      <section className="py-20 md:py-28 border-t border-[#e5e5e5]">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-bold text-black leading-[1.05] tracking-tight mb-12">
              Почему нам доверяют семьи предпринимателей
            </h2>

            <div className="space-y-5 mb-12">
              {[
                "Конфиденциальность",
                "Быстрое принятие решений",
                "Онлайн-оформление без лишних встреч",
                "Чёткие договорённости и ответственность",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#56140E] flex items-center justify-center shrink-0">
                    <Icon name="Check" size={13} className="text-white" />
                  </div>
                  <p className="text-black text-[16px] font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="max-w-md">
              <ContactForm id="trust-form" buttonText="Оставить заявку" />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 7 — Отзывы */}
      <section className="py-20 md:py-28 border-t border-[#e5e5e5]">
        <div className="container">
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-black leading-[1.05] tracking-tight mb-4">
            Отзывы
          </h2>

          <p className="text-[#3C3C3C] text-[16px] leading-relaxed mb-14 max-w-lg">
            Каждый подбор индивидуально. Вот что говорят наши клиенты:
          </p>

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
                className="block border border-[#e5e5e5] rounded-xl p-7 hover:border-[#56140E]/30 transition-colors"
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Icon key={s} name="Star" size={14} className="text-[#56140E] fill-[#56140E]" />
                  ))}
                </div>
                <p className="text-black text-[15px] leading-[1.7] mb-5">
                  «{review.text}»
                </p>
                <span className="text-[13px] text-[#999] tracking-wider uppercase">Яндекс.Карты</span>
              </a>
            ))}
          </div>

          <a
            href="https://yandex.com/maps/org/97350777975/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#56140E] hover:text-[#56140E]/70 font-medium transition-colors"
          >
            Все отзывы на Яндекс.Картах
            <Icon name="ArrowUpRight" size={14} />
          </a>
        </div>
      </section>

      {/* БЛОК 8 — FAQ */}
      <section className="py-20 md:py-28 border-t border-[#e5e5e5]">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-black leading-[1.05] tracking-tight mb-12">
              Частые вопросы
            </h2>

            <div className="border-t border-[#e5e5e5]">
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
      <section className="py-24 md:py-32 bg-[#56140E] text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-tight mb-4 text-white">
              В сложных ситуациях время имеет значение
            </h2>
            <p className="text-white/55 text-[17px] mb-12">
              Оставьте номер, чтобы начать подбор сегодня.
            </p>
            <div className="max-w-md mx-auto">
              <ContactForm id="final-form" buttonText="Начать подбор" dark />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 10 — Футер */}
      <footer className="py-12 border-t border-[#e5e5e5]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div>
              <img src={LOGO} alt="Noproblem" className="h-5 mb-2" />
              <p className="text-[13px] text-[#999] mt-1">Подбор сиделок в Москве</p>
            </div>
            <div className="text-[13px] text-[#3C3C3C] space-y-1">
              <p>ИП Горшенёва Анастасия Юрьевна</p>
              <p>ОГРНИП 325774600458353</p>
              <p>ИНН 773774314704</p>
            </div>
            <div className="text-sm space-y-1">
              <a href="tel:+79163191286" className="block text-black hover:text-[#56140E] transition-colors">
                +7 (916) 319-12-86
              </a>
              <a href="mailto:noproblem.msk@yandex.ru" className="block text-[#3C3C3C] hover:text-[#56140E] transition-colors">
                noproblem.msk@yandex.ru
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Фиксированная кнопка звонка (мобильная) */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden px-4">
        <a
          href="tel:+79163191286"
          className="flex items-center gap-2 bg-[#56140E] text-white px-8 py-3.5 rounded-full font-semibold text-sm"
        >
          <Icon name="Phone" size={15} />
          Позвонить
        </a>
      </div>
    </div>
  );
};

export default Index;
