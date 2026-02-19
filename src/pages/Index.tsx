import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/491cceaa-dd7a-4b3b-99c3-d10acbe0e41e.png";
const PHOTO_HERO = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/files/a9faa77b-4f04-4f0b-a91e-ee17b0da2984.jpg";
const PHOTO_PROCESS = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/files/2dcd0a8f-28a9-4452-89d1-fe0e30735584.jpg";
const PHOTO_HANDS = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/files/ca3c63d3-2538-4a84-a729-0d671679bfec.jpg";

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
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${dark ? "bg-white/10" : "bg-primary/10"}`}>
          <Icon name="Check" size={24} className={dark ? "text-white" : "text-primary"} />
        </div>
        <p className={`text-xl font-heading font-semibold ${dark ? "text-white" : "text-foreground"}`}>Заявка отправлена</p>
        <p className={`text-sm mt-2 ${dark ? "text-white/50" : "text-muted-foreground"}`}>Перезвоним в течение 15 минут</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full" id={id}>
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`h-14 font-body text-[15px] rounded-lg ${dark ? "bg-white/10 border-white/15 text-white placeholder:text-white/40 focus:border-white/30" : "bg-white border-border/80 text-foreground placeholder:text-muted-foreground focus:border-primary/40"}`}
        />
        <Input
          placeholder="Телефон"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`h-14 font-body text-[15px] rounded-lg ${dark ? "bg-white/10 border-white/15 text-white placeholder:text-white/40 focus:border-white/30" : "bg-white border-border/80 text-foreground placeholder:text-muted-foreground focus:border-primary/40"}`}
        />
      </div>
      <Button
        type="submit"
        className={`w-full h-14 text-[15px] font-body font-semibold rounded-lg tracking-wide transition-all duration-200 ${dark ? "bg-white text-[#1a2e25] hover:bg-white/90" : "bg-primary text-primary-foreground hover:opacity-90"}`}
      >
        {buttonText}
      </Button>
      <p className={`text-xs text-center pt-1 ${dark ? "text-white/40" : "text-muted-foreground"}`}>Перезвоним в течение 15 минут</p>
    </form>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-foreground/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <span className="text-xl md:text-2xl font-heading font-medium text-foreground pr-6">{question}</span>
        <div className="w-8 h-8 rounded-full border border-foreground/15 flex items-center justify-center shrink-0 group-hover:border-foreground/30 transition-colors">
          <Icon name={open ? "Minus" : "Plus"} size={14} className="text-foreground/60" />
        </div>
      </button>
      {open && (
        <div className="pb-7 text-muted-foreground leading-relaxed font-body text-[16px] max-w-2xl">
          {answer}
        </div>
      )}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* БЛОК 1 — Hero */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 bg-[#1a2e25]">
          <img
            src={PHOTO_HERO}
            alt=""
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="container pt-8 md:pt-12">
            <img src={LOGO_URL} alt="Noproblem" className="h-8 md:h-10 invert brightness-200" />
          </div>

          <div className="container flex-1 flex items-center py-16">
            <div className="max-w-3xl">
              <h1 className="text-[44px] md:text-[64px] lg:text-[80px] font-heading font-bold text-white leading-[0.95] mb-8">
                Срочный подбор<br />сиделки с проживанием<br />
                <span className="text-white/50">в Москве</span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 font-body font-light leading-relaxed mb-3 max-w-xl">
                Для ухода после инсульта, при деменции<br className="hidden md:block" /> и за лежачими пациентами
              </p>

              <div className="flex gap-6 text-sm text-white/40 font-body mb-12">
                <span>Кандидат за 24–72 часа</span>
                <span>Гарантия замены 1 месяц</span>
              </div>

              <div className="max-w-lg">
                <ContactForm id="hero-form" dark />
              </div>
            </div>
          </div>

          <div className="container pb-10">
            <div className="flex flex-wrap gap-x-10 gap-y-2 text-[13px] text-white/35 font-body tracking-wide uppercase">
              <span>Работаем по договору</span>
              <span>Оформление онлайн</span>
              <span>Не нужно никуда ехать</span>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 2 — Когда к нам обращаются */}
      <section className="py-24 md:py-36">
        <div className="container">
          <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-heading font-bold text-foreground leading-[0.95] mb-20 max-w-2xl">
            Когда к нам обращаются
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
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
              <div key={item.num} className="border-t border-foreground/10 pt-8">
                <span className="text-xs font-body text-muted-foreground/60 tracking-[0.2em] uppercase">{item.num}</span>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mt-4 mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-[16px] leading-[1.7] font-body font-light">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground font-body text-[15px] mt-16 border-l-2 border-primary/30 pl-6 max-w-lg">
            Мы подключаемся в ситуациях, где важна точность подбора и надёжность.
          </p>
        </div>
      </section>

      {/* БЛОК 3 — Как проходит подбор */}
      <section className="py-24 md:py-36 bg-[#1a2e25] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-heading font-bold leading-[0.95] mb-14">
                Как проходит подбор
              </h2>

              <div className="space-y-0">
                {[
                  "Вы описываете ситуацию и свои ожидания от сиделки",
                  "Подписываем договор — онлайн",
                  "Мы проводим телефонные и видео-интервью с кандидатами",
                  "Приводим на видео-собеседование к вам только подходящих",
                ].map((text, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-body text-white/70 shrink-0">
                        {i + 1}
                      </div>
                      {i < 3 && <div className="w-px h-8 bg-white/10" />}
                    </div>
                    <p className="text-white/80 font-body text-[16px] pt-2.5 pb-4 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-1.5 text-white/40 font-body text-[15px]">
                <p>Персональный подбор под вашу ситуацию. Без массовых баз и «потока».</p>
                <p>Вы избежите ошибок и стресса. Сэкономите время и нервы.</p>
              </div>

              <div className="mt-10 max-w-lg">
                <ContactForm id="process-form" buttonText="Заказать звонок" dark />
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src={PHOTO_PROCESS}
                alt="Забота о пожилых"
                className="w-full aspect-[3/4] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 4 — Почему дешёвый подбор */}
      <section className="py-24 md:py-36">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-heading font-bold text-foreground leading-[0.95] mb-10">
                Почему дешёвый подбор часто заканчивается заменой
              </h2>

              <p className="text-muted-foreground font-body text-[16px] mb-8 leading-relaxed">
                Минимальная стоимость подбора обычно означает:
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Отсутствие глубинных интервью и проверки опыта",
                  "Неподтверждённую практику работы с диагнозом",
                  "Формальную передачу контакта",
                  "Отсутствие проверки документов",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 shrink-0" />
                    <span className="text-foreground font-body text-[16px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-xl p-8">
                <p className="text-muted-foreground font-body text-[16px] leading-relaxed">
                  Экономия на качестве подбора приводит к повторному поиску уже через 1–2 недели.
                </p>
                <p className="text-foreground font-body font-semibold text-[17px] mt-3">
                  Наша задача — сделать один точный подбор.
                </p>
              </div>
            </div>

            <div className="hidden lg:block sticky top-24">
              <img
                src={PHOTO_HANDS}
                alt="Забота"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 5 — Стоимость */}
      <section className="py-24 md:py-36 bg-card">
        <div className="container">
          <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-heading font-bold text-foreground leading-[0.95] mb-20 text-center">
            Стоимость
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-background rounded-2xl p-8 md:p-10 border border-border/50">
                <p className="text-xs font-body text-muted-foreground/60 tracking-[0.2em] uppercase mb-6">Стандартный</p>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">Подбор сиделки</h3>
                <p className="text-muted-foreground text-[15px] font-body mb-8">Под ваш запрос</p>
                <p className="text-4xl md:text-5xl font-heading font-bold text-foreground">50 000 ₽</p>
                <p className="text-sm text-muted-foreground font-body mt-2">Гарантия — 1 месяц</p>
              </div>

              <div className="bg-[#1a2e25] rounded-2xl p-8 md:p-10 text-white">
                <p className="text-xs font-body text-white/40 tracking-[0.2em] uppercase mb-6">Приоритет</p>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-1">Срочный подбор</h3>
                <p className="text-white/50 text-[15px] font-body mb-8">24–48 часов</p>
                <p className="text-4xl md:text-5xl font-heading font-bold">70 000 ₽</p>
                <p className="text-sm text-white/50 font-body mt-2">Гарантия — 1 месяц</p>
              </div>
            </div>

            <div className="bg-background rounded-2xl border border-border/50 p-8 md:p-10">
              <p className="text-sm font-body font-semibold text-foreground mb-8 tracking-wide uppercase">Дополнительно</p>
              <div className="space-y-0">
                {[
                  { name: "Проверка благонадёжности", price: "5 000 ₽" },
                  { name: "Замена вне гарантии", price: "25 000 ₽" },
                  { name: "Перевозка лежачих пациентов", price: "от 15 000 ₽" },
                  { name: "Выезд психиатра-геронтолога на дом", price: "от 25 000 ₽", note: "возможно дальнейшее сопровождение пациента" },
                  { name: "Выезд врача-реабилитолога на дом", price: "от 8 000 ₽", note: "оценивает состояние и подключает команду для восстановления" },
                ].map((item, i, arr) => (
                  <div key={item.name} className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-8 py-5 ${i < arr.length - 1 ? "border-b border-border/50" : ""}`}>
                    <div>
                      <span className="text-foreground text-[16px] font-body">{item.name}</span>
                      {item.note && (
                        <p className="text-[13px] text-muted-foreground font-body mt-1">{item.note}</p>
                      )}
                    </div>
                    <span className="text-foreground font-body font-semibold text-[16px] shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/60 font-body mt-8">
                *Стоимость может меняться, подробнее уточняйте у менеджера
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 6 — Почему нам доверяют */}
      <section className="py-24 md:py-36">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-heading font-bold text-foreground leading-[0.95] mb-16 text-center">
              Почему нам доверяют<br />семьи предпринимателей
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              {[
                { icon: "Lock", title: "Конфиденциальность", text: "Полная защита информации о вашей семье и ситуации" },
                { icon: "Zap", title: "Быстрое принятие решений", text: "Без бюрократии и лишних согласований" },
                { icon: "Monitor", title: "Онлайн-оформление", text: "Без лишних встреч, поездок и ожидания менеджера" },
                { icon: "FileCheck", title: "Чёткие договорённости", text: "Прозрачные условия и юридическая ответственность" },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-7 border border-border/30">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Icon name={item.icon} size={18} className="text-primary" />
                  </div>
                  <p className="font-heading font-semibold text-foreground text-xl mb-2">{item.title}</p>
                  <p className="text-muted-foreground text-[15px] font-body leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="max-w-lg mx-auto">
              <ContactForm id="trust-form" buttonText="Оставить заявку" />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 7 — Отзывы */}
      <section className="py-24 md:py-36 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-heading font-bold text-foreground leading-[0.95] mb-6 text-center">
              Отзывы
            </h2>

            <p className="text-center text-muted-foreground font-body text-[16px] leading-relaxed mb-16 max-w-lg mx-auto">
              Каждый подбор индивидуально. Вот что говорят наши клиенты:
            </p>

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
                  className="block bg-background rounded-xl p-7 border border-border/30 hover:border-primary/20 transition-colors"
                >
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Icon key={s} name="Star" size={14} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-foreground text-[15px] font-body leading-[1.7] mb-6">
                    «{review.text}»
                  </p>
                  <span className="text-xs text-muted-foreground/60 font-body uppercase tracking-wider">Яндекс.Карты</span>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://yandex.com/maps/org/97350777975/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-body transition-colors border-b border-muted-foreground/30 hover:border-foreground/30 pb-0.5"
              >
                Все отзывы на Яндекс.Картах
                <Icon name="ArrowUpRight" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 8 — FAQ */}
      <section className="py-24 md:py-36">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-heading font-bold text-foreground leading-[0.95] mb-14 text-center">
              Частые вопросы
            </h2>

            <div className="border-t border-foreground/10">
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
      <section className="relative py-28 md:py-40 bg-[#1a2e25] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={PHOTO_HANDS}
            alt=""
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-heading font-bold leading-[0.95] mb-6">
              В сложных ситуациях<br />время имеет значение
            </h2>
            <p className="text-white/45 font-body text-lg mb-12">
              Оставьте номер, чтобы начать подбор сегодня.
            </p>
            <div className="max-w-lg mx-auto">
              <ContactForm id="final-form" buttonText="Начать подбор" dark />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 10 — Футер */}
      <footer className="py-14 bg-[#141c18] text-white/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
              <div>
                <img src={LOGO_URL} alt="Noproblem" className="h-6 invert brightness-200 opacity-60 mb-3" />
                <p className="text-sm font-body text-white/30">Подбор сиделок в Москве</p>
              </div>
              <div className="text-[13px] font-body space-y-1 text-white/30">
                <p>ИП Горшенёва Анастасия Юрьевна</p>
                <p>ОГРНИП 325774600458353</p>
                <p>ИНН 773774314704</p>
              </div>
              <div className="text-sm font-body space-y-1.5">
                <a href="tel:+79163191286" className="block text-white/60 hover:text-white transition-colors">
                  +7 (916) 319-12-86
                </a>
                <a href="mailto:noproblem.msk@yandex.ru" className="block text-white/35 hover:text-white/60 transition-colors">
                  noproblem.msk@yandex.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Фиксированная кнопка звонка (мобильная) */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden px-4">
        <a
          href="tel:+79163191286"
          className="flex items-center gap-2.5 bg-[#1a2e25] text-white px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide"
        >
          <Icon name="Phone" size={16} />
          Позвонить
        </a>
      </div>
    </div>
  );
};

export default Index;
