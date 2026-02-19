import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/491cceaa-dd7a-4b3b-99c3-d10acbe0e41e.png";

const IMG_HERO = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/469d8b55-4562-4e76-893a-8cfb2df9bec6.jpg";
const IMG_CARE_HANDS = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/26d54366-d682-494d-a3a6-44109d1d7cf1.jpg";
const IMG_WHEELCHAIR = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/ad68136a-68da-42da-8c84-c63a622b879f.jpg";
const IMG_MEDICINE = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/caba07d1-b21d-46e6-b672-b611baf92915.jpg";
const IMG_DOCUMENTS = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/1277330e-eac2-4a79-ad5c-282bbecfbf72.jpg";

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
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${dark ? "bg-white/10" : "bg-[#56140E]/10"}`}>
          <Icon name="Check" size={24} className={dark ? "text-white" : "text-[#56140E]"} />
        </div>
        <p className={`text-xl font-semibold ${dark ? "text-white" : "text-black"}`}>Заявка отправлена</p>
        <p className={`text-sm mt-2 ${dark ? "text-white/60" : "text-[#3C3C3C]"}`}>Перезвоним в течение 15 минут</p>
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
          className={`h-14 text-[16px] rounded-xl px-5 ${dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-white border-[#ddd] text-black placeholder:text-[#999]"}`}
        />
        <Input
          placeholder="Телефон"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`h-14 text-[16px] rounded-xl px-5 ${dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-white border-[#ddd] text-black placeholder:text-[#999]"}`}
        />
      </div>
      <Button
        type="submit"
        className={`w-full h-14 text-[16px] font-semibold rounded-xl transition-colors ${dark ? "bg-white text-[#56140E] hover:bg-white/90" : "bg-[#56140E] text-white hover:bg-[#56140E]/90"}`}
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
        className="w-full flex items-center justify-between py-7 text-left"
      >
        <span className="text-[18px] font-medium text-black pr-8">{question}</span>
        <Icon name={open ? "Minus" : "Plus"} size={20} className="text-[#56140E] shrink-0" />
      </button>
      {open && (
        <div className="pb-7 text-[#3C3C3C] leading-relaxed text-[16px]">
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
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-10 md:pt-14 mb-14 md:mb-20">
          <img src={LOGO} alt="Noproblem" className="h-7 md:h-9" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1">
              <h1 className="text-[40px] md:text-[54px] lg:text-[62px] font-extrabold text-black leading-[1.02] tracking-[-0.03em] mb-7">
                Срочный подбор сиделки с проживанием в Москве
              </h1>

              <p className="text-[18px] text-[#3C3C3C] leading-relaxed mb-5 max-w-xl">
                Для ухода после инсульта, при деменции и за лежачими пациентами
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-[15px] text-[#3C3C3C] mb-10">
                <span>Кандидат за 24–72 часа</span>
                <span className="text-[#ddd]">·</span>
                <span>Гарантия замены 1 месяц</span>
              </div>

              <div className="max-w-lg mb-8">
                <ContactForm id="hero-form" />
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-2 text-[14px] text-[#3C3C3C]">
                <span className="flex items-center gap-2">
                  <Icon name="Check" size={15} className="text-[#56140E]" />
                  Работаем по договору
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Check" size={15} className="text-[#56140E]" />
                  Оформление онлайн
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Check" size={15} className="text-[#56140E]" />
                  Не нужно никуда ехать
                </span>
              </div>
            </div>

            <div className="w-full lg:w-[440px] shrink-0">
              <img
                src={IMG_HERO}
                alt="Забота о пожилых"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 2 — Когда к нам обращаются */}
      <section className="py-24 md:py-32 border-t border-[#eaeaea]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold text-black leading-[1.02] tracking-[-0.03em] mb-16 md:mb-20 text-center">
            Когда к нам обращаются
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                num: "01",
                title: "Круглосуточный уход",
                text: "Когда человек лежачий или полностью утратил самостоятельность и требуется постоянный контроль состояния, гигиены и питания.",
                img: IMG_WHEELCHAIR,
              },
              {
                num: "02",
                title: "Присмотр и помощь по быту",
                text: "При деменции, возрастных нарушениях памяти или снижении самостоятельности, когда важно присутствие, контроль лекарств и помощь в повседневных делах.",
                img: IMG_CARE_HANDS,
              },
              {
                num: "03",
                title: "Уход после острого состояния",
                text: "После инсульта, инфаркта, перелома шейки бедра или выписки из стационара, когда требуется восстановление и помощь в реабилитации на дому.",
                img: IMG_MEDICINE,
              },
            ].map((item) => (
              <div key={item.num}>
                <img src={item.img} alt={item.title} className="w-full rounded-xl mb-6" />
                <span className="text-[13px] text-[#56140E] tracking-widest font-medium">{item.num}</span>
                <h3 className="text-[23px] font-bold text-black mt-3 mb-3 leading-tight">{item.title}</h3>
                <p className="text-[#3C3C3C] text-[15px] leading-[1.75]">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-[#3C3C3C] text-[16px] mt-16 border-l-2 border-[#56140E]/30 pl-6 max-w-lg mx-auto md:mx-0">
            Мы подключаемся в ситуациях, где важна точность подбора и надёжность.
          </p>
        </div>
      </section>

      {/* БЛОК 3 — Как проходит подбор */}
      <section className="py-24 md:py-32 border-t border-[#eaeaea]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold text-black leading-[1.02] tracking-[-0.03em] mb-14">
                Как проходит подбор
              </h2>

              <div className="space-y-0 mb-12">
                {[
                  "Вы описываете ситуацию и свои ожидания от сиделки",
                  "Подписываем договор — онлайн",
                  "Мы проводим телефонные и видео-интервью с кандидатами",
                  "Приводим на видео-собеседование к вам только подходящих",
                ].map((text, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#56140E] text-white flex items-center justify-center text-[15px] font-semibold shrink-0">
                        {i + 1}
                      </div>
                      {i < 3 && <div className="w-px h-8 bg-[#e5e5e5]" />}
                    </div>
                    <p className="text-[#3C3C3C] text-[16px] pt-2.5 pb-4 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-8">
              <div className="space-y-2 text-[#3C3C3C] text-[16px] mb-10 leading-relaxed">
                <p>Персональный подбор под вашу ситуацию. Без массовых баз и «потока».</p>
                <p>Вы избежите ошибок и стресса. Сэкономите время и нервы.</p>
              </div>

              <ContactForm id="process-form" buttonText="Заказать звонок" />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 4 — Почему дешёвый подбор */}
      <section className="py-24 md:py-32 border-t border-[#eaeaea]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-[34px] md:text-[48px] lg:text-[52px] font-extrabold text-black leading-[1.02] tracking-[-0.03em] mb-10">
                Почему дешёвый подбор часто заканчивается заменой
              </h2>

              <p className="text-[#3C3C3C] text-[16px] mb-8 leading-relaxed">
                Минимальная стоимость подбора обычно означает:
              </p>

              <div className="space-y-4 mb-10">
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

              <p className="text-[#3C3C3C] text-[16px] leading-relaxed mb-2">
                Экономия на качестве подбора приводит к повторному поиску уже через 1–2 недели.
              </p>
              <p className="text-black font-bold text-[17px]">
                Наша задача — сделать один точный подбор.
              </p>
            </div>

            <div>
              <img
                src={IMG_DOCUMENTS}
                alt="Проверка документов"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 5 — Стоимость */}
      <section className="py-24 md:py-32 border-t border-[#eaeaea]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold text-black leading-[1.02] tracking-[-0.03em] mb-16 md:mb-20 text-center">
            Стоимость
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="border border-[#e5e5e5] rounded-2xl p-8 md:p-12">
              <p className="text-[13px] text-[#56140E] tracking-widest uppercase font-medium mb-6">Стандартный</p>
              <h3 className="text-[26px] font-bold text-black mb-1">Подбор сиделки</h3>
              <p className="text-[#3C3C3C] text-[16px] mb-8">Под ваш запрос</p>
              <p className="text-[40px] md:text-[48px] font-extrabold text-black tracking-tight">50 000 ₽</p>
              <p className="text-[15px] text-[#3C3C3C] mt-2">Гарантия — 1 месяц</p>
            </div>

            <div className="bg-[#56140E] rounded-2xl p-8 md:p-12">
              <p className="text-[13px] text-white/60 tracking-widest uppercase font-medium mb-6">Приоритет</p>
              <h3 className="text-[26px] font-bold text-white mb-1">Срочный подбор</h3>
              <p className="text-white/70 text-[16px] mb-8">24–48 часов</p>
              <p className="text-[40px] md:text-[48px] font-extrabold text-white tracking-tight">70 000 ₽</p>
              <p className="text-[15px] text-white/70 mt-2">Гарантия — 1 месяц</p>
            </div>
          </div>

          <div className="border border-[#e5e5e5] rounded-2xl p-8 md:p-12">
            <p className="text-[14px] font-bold text-black tracking-widest uppercase mb-8">Дополнительно</p>
            {[
              { name: "Проверка благонадёжности", price: "5 000 ₽" },
              { name: "Замена вне гарантии", price: "25 000 ₽" },
              { name: "Перевозка лежачих пациентов", price: "от 15 000 ₽" },
              { name: "Выезд психиатра-геронтолога на дом", price: "от 25 000 ₽", note: "возможно дальнейшее сопровождение пациента" },
              { name: "Выезд врача-реабилитолога на дом", price: "от 8 000 ₽", note: "оценивает состояние и подключает команду для восстановления" },
            ].map((item, i, arr) => (
              <div key={item.name} className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-8 py-5 ${i < arr.length - 1 ? "border-b border-[#e5e5e5]" : ""}`}>
                <div>
                  <span className="text-black text-[16px]">{item.name}</span>
                  {item.note && <p className="text-[13px] text-[#3C3C3C]/70 mt-1">{item.note}</p>}
                </div>
                <span className="text-black font-bold text-[16px] shrink-0">{item.price}</span>
              </div>
            ))}
            <p className="text-[13px] text-[#999] mt-8">
              *Стоимость может меняться, подробнее уточняйте у менеджера
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 6 — Почему нам доверяют */}
      <section className="py-24 md:py-32 border-t border-[#eaeaea]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <h2 className="text-[34px] md:text-[48px] lg:text-[52px] font-extrabold text-black leading-[1.02] tracking-[-0.03em] mb-14">
                Почему нам доверяют семьи предпринимателей
              </h2>

              <div className="space-y-6">
                {[
                  "Конфиденциальность",
                  "Быстрое принятие решений",
                  "Онлайн-оформление без лишних встреч",
                  "Чёткие договорённости и ответственность",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#56140E] flex items-center justify-center shrink-0">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    <p className="text-black text-[17px] font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-8">
              <ContactForm id="trust-form" buttonText="Оставить заявку" />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 7 — Отзывы */}
      <section className="py-24 md:py-32 border-t border-[#eaeaea]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold text-black leading-[1.02] tracking-[-0.03em] mb-5">
              Отзывы
            </h2>
            <p className="text-[#3C3C3C] text-[17px] leading-relaxed max-w-lg mx-auto">
              Каждый подбор индивидуален. Вот что говорят наши клиенты:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
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
                className="block border border-[#e5e5e5] rounded-2xl p-8 md:p-10 hover:border-[#56140E]/30 transition-colors"
              >
                <div className="flex gap-0.5 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Icon key={s} name="Star" size={15} className="text-[#56140E] fill-[#56140E]" />
                  ))}
                </div>
                <p className="text-black text-[16px] leading-[1.75] mb-6">
                  «{review.text}»
                </p>
                <span className="text-[13px] text-[#999] tracking-wider uppercase">Яндекс.Карты</span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://yandex.com/maps/org/97350777975/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] text-[#56140E] hover:text-[#56140E]/70 font-medium transition-colors"
            >
              Все отзывы на Яндекс.Картах
              <Icon name="ArrowUpRight" size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* БЛОК 8 — FAQ */}
      <section className="py-24 md:py-32 border-t border-[#eaeaea]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold text-black leading-[1.02] tracking-[-0.03em]">
                Частые вопросы
              </h2>
            </div>
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
      <section className="py-28 md:py-36 bg-[#56140E]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-5">
              В сложных ситуациях время имеет значение
            </h2>
            <p className="text-white/60 text-[18px] mb-14">
              Оставьте номер, чтобы начать подбор сегодня.
            </p>
            <div className="max-w-lg mx-auto">
              <ContactForm id="final-form" buttonText="Начать подбор" dark />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 10 — Футер */}
      <footer className="py-14 border-t border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            <div>
              <img src={LOGO} alt="Noproblem" className="h-6 mb-2" />
              <p className="text-[13px] text-[#999] mt-2">Подбор сиделок в Москве</p>
            </div>
            <div className="text-[14px] text-[#3C3C3C] space-y-1">
              <p>ИП Горшенёва Анастасия Юрьевна</p>
              <p>ОГРНИП 325774600458353</p>
              <p>ИНН 773774314704</p>
            </div>
            <div className="text-[15px] space-y-1.5">
              <a href="tel:+79163191286" className="block text-black font-medium hover:text-[#56140E] transition-colors">
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
          className="flex items-center gap-2.5 bg-[#56140E] text-white px-10 py-4 rounded-full font-semibold text-[15px] shadow-lg shadow-[#56140E]/20"
        >
          <Icon name="Phone" size={16} />
          Позвонить
        </a>
      </div>
    </div>
  );
};

export default Index;
