import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

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
      <div className="text-center py-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${dark ? "bg-white/10" : "bg-primary/10"}`}>
          <Icon name="Check" size={24} className={dark ? "text-white" : "text-primary"} />
        </div>
        <p className={`text-lg font-heading font-semibold ${dark ? "text-white" : "text-primary"}`}>Заявка отправлена</p>
        <p className={`text-sm mt-1 ${dark ? "text-white/60" : "text-muted-foreground"}`}>Перезвоним в течение 15 минут</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-md" id={id}>
      <Input
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`h-12 font-body ${dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : "bg-white border-border/60 text-foreground placeholder:text-muted-foreground/60"}`}
      />
      <Input
        placeholder="Телефон"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={`h-12 font-body ${dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : "bg-white border-border/60 text-foreground placeholder:text-muted-foreground/60"}`}
      />
      <Button
        type="submit"
        className={`w-full h-12 text-base font-body font-medium tracking-wide ${dark ? "bg-white text-primary hover:bg-white/90" : ""}`}
      >
        {buttonText}
      </Button>
      <p className={`text-xs text-center ${dark ? "text-white/50" : "text-muted-foreground"}`}>Перезвоним в течение 15 минут</p>
    </form>
  );
};

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary tracking-tight ${className}`}>
    {children}
  </h2>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-heading font-medium text-foreground pr-4">{question}</span>
        <Icon
          name={open ? "Minus" : "Plus"}
          size={20}
          className="text-muted-foreground shrink-0"
        />
      </button>
      {open && (
        <div className="pb-5 text-muted-foreground leading-relaxed font-body text-[15px]">
          {answer}
        </div>
      )}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* БЛОК 1 — Первый экран */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-10">
              <span className="font-heading text-2xl md:text-3xl font-semibold text-primary tracking-wide">
                Noproblem
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-[1.1] mb-6">
              Срочный подбор сиделки <br className="hidden md:block" />с проживанием в Москве
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed mb-4 max-w-2xl mx-auto">
              Для ухода после инсульта, при деменции
              <br className="hidden md:block" /> и за лежачими пациентами
            </p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground font-body mb-10">
              <span>Кандидат за 24–72 часа</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>Гарантия замены — 1 месяц</span>
            </div>

            <div className="flex justify-center mb-8">
              <ContactForm id="hero-form" />
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground/80 font-body">
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-primary/60" />
                Работаем по договору
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-primary/60" />
                Оформление онлайн
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-primary/60" />
                Не нужно никуда ехать
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 2 — Когда к нам обращаются */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionTitle className="text-center mb-16">Когда к нам обращаются</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Нужен круглосуточный уход",
                text: "Когда человек лежачий или полностью утратил самостоятельность и требуется постоянный контроль состояния, гигиены и питания.",
                icon: "Clock",
              },
              {
                num: "02",
                title: "Нужен присмотр и помощь по быту",
                text: "При деменции, возрастных нарушениях памяти или снижении самостоятельности, когда важно присутствие, контроль лекарств и помощь в повседневных делах.",
                icon: "Heart",
              },
              {
                num: "03",
                title: "Нужен уход после острого состояния",
                text: "После инсульта, инфаркта, перелома шейки бедра или выписки из стационара, когда требуется восстановление и помощь в реабилитации на дому.",
                icon: "Activity",
              },
            ].map((item) => (
              <div key={item.num} className="group">
                <div className="mb-5">
                  <span className="text-xs font-body text-accent tracking-widest uppercase">{item.num}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={18} className="text-primary/70" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed font-body font-light">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground font-body text-[15px] mt-12 max-w-xl mx-auto">
            Мы подключаемся в ситуациях, где важна точность подбора и надёжность.
          </p>
        </div>
      </section>

      {/* БЛОК 3 — Как проходит подбор */}
      <section className="py-20 md:py-28 bg-primary/[0.02]">
        <div className="container">
          <SectionTitle className="text-center mb-16">Как проходит подбор</SectionTitle>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {[
                { step: "1", text: "Вы описываете ситуацию и свои ожидания от сиделки" },
                { step: "2", text: "Подписываем договор — онлайн" },
                { step: "3", text: "Мы проводим телефонные и видео-интервью с кандидатами" },
                { step: "4", text: "Приводим на видео-собеседование к вам только подходящих" },
              ].map((item, i) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-body font-medium shrink-0">
                      {item.step}
                    </div>
                    {i < 3 && <div className="w-px h-12 bg-border/80" />}
                  </div>
                  <div className="pt-2.5 pb-8">
                    <p className="text-foreground font-body text-[15px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-white border border-border/40">
              <div className="space-y-2 text-[15px] text-muted-foreground font-body mb-8">
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary/60 mt-0.5 shrink-0" />
                  Персональный подбор под вашу ситуацию
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary/60 mt-0.5 shrink-0" />
                  Без массовых баз и «потока»
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary/60 mt-0.5 shrink-0" />
                  Сэкономите время и нервы
                </p>
              </div>

              <div className="flex justify-center">
                <ContactForm id="process-form" buttonText="Заказать звонок" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 4 — Почему дешёвый подбор */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionTitle className="mb-10">
              Почему дешёвый подбор часто заканчивается заменой
            </SectionTitle>

            <p className="text-muted-foreground font-body text-[15px] mb-8">
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
                  <Icon name="X" size={16} className="text-destructive/60 mt-0.5 shrink-0" />
                  <span className="text-foreground font-body text-[15px]">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-primary/20 pl-6">
              <p className="text-muted-foreground font-body text-[15px] leading-relaxed">
                Экономия на качестве подбора приводит к повторному поиску уже через 1–2 недели.
              </p>
              <p className="text-foreground font-body font-medium text-[15px] mt-2">
                Наша задача — сделать один точный подбор.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 5 — Стоимость */}
      <section className="py-20 md:py-28 bg-primary/[0.02]">
        <div className="container">
          <SectionTitle className="text-center mb-16">Стоимость</SectionTitle>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-lg border border-border/40 p-8">
                <p className="text-xs font-body text-accent tracking-widest uppercase mb-3">Стандартный</p>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                  Подбор сиделки
                </h3>
                <p className="text-muted-foreground text-sm font-body mb-6">Под ваш запрос</p>
                <p className="text-3xl font-heading font-bold text-primary mb-1">50 000 ₽</p>
                <p className="text-sm text-muted-foreground font-body">Гарантия — 1 мес.</p>
              </div>

              <div className="bg-primary rounded-lg p-8 text-primary-foreground">
                <p className="text-xs font-body text-primary-foreground/60 tracking-widest uppercase mb-3">Приоритет</p>
                <h3 className="text-2xl font-heading font-semibold mb-2">
                  Срочный подбор
                </h3>
                <p className="text-primary-foreground/70 text-sm font-body mb-6">24–48 часов</p>
                <p className="text-3xl font-heading font-bold mb-1">70 000 ₽</p>
                <p className="text-sm text-primary-foreground/70 font-body">Гарантия — 1 мес.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-border/40 p-8">
              <p className="text-sm font-body font-medium text-foreground mb-5">Дополнительно</p>
              <div className="space-y-4">
                {[
                  { name: "Проверка благонадёжности", price: "5 000 ₽" },
                  { name: "Замена вне гарантии", price: "25 000 ₽" },
                  { name: "Перевозка лежачих пациентов", price: "от 15 000 ₽" },
                  { name: "Выезд психиатра-геронтолога на дом", price: "от 25 000 ₽", note: "возможно дальнейшее сопровождение пациента" },
                  { name: "Выезд врача-реабилитолога на дом", price: "от 8 000 ₽", note: "оценивает состояние пациента и подключает профессиональную команду для восстановления" },
                ].map((item) => (
                  <div key={item.name} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-2 border-b border-border/30 last:border-0">
                    <div>
                      <span className="text-foreground text-[15px] font-body">{item.name}</span>
                      {item.note && (
                        <p className="text-xs text-muted-foreground font-body mt-0.5">{item.note}</p>
                      )}
                    </div>
                    <span className="text-foreground font-body font-medium text-[15px] shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-body mt-6">
                *Стоимость может меняться, подробнее уточняйте у менеджера
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 6 — Почему нам доверяют */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle className="mb-12">
              Почему нам доверяют семьи предпринимателей
            </SectionTitle>

            <div className="grid sm:grid-cols-2 gap-6 mb-12 text-left">
              {[
                { icon: "Lock", title: "Конфиденциальность", text: "Полная защита информации о вашей семье" },
                { icon: "Zap", title: "Быстрое принятие решений", text: "Без бюрократии и лишних согласований" },
                { icon: "Monitor", title: "Онлайн-оформление", text: "Без лишних встреч и поездок" },
                { icon: "FileCheck", title: "Чёткие договорённости", text: "Прозрачные условия и ответственность" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start p-5 rounded-lg bg-primary/[0.02] border border-border/30">
                  <div className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={16} className="text-primary/70" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-lg">{item.title}</p>
                    <p className="text-muted-foreground text-sm font-body mt-0.5">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <ContactForm id="trust-form" buttonText="Оставить заявку" />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 7 — Отзывы */}
      <section className="py-20 md:py-28 bg-primary/[0.02]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle className="mb-6">Отзывы</SectionTitle>

            <p className="text-muted-foreground font-body text-[15px] leading-relaxed mb-4 max-w-xl mx-auto">
              Мы специализируемся на подборе сиделок для сложных случаев в Москве.
              Работаем без массового «потока». Каждый подбор индивидуально.
            </p>
            <p className="text-muted-foreground font-body text-[15px] mb-10">
              Вот что говорят наши клиенты:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  name: "Клиент на Яндекс.Картах",
                  text: "Обратилась за подбором сиделки для мамы после инсульта. Подобрали очень быстро, кандидат замечательный. Спасибо за профессионализм!",
                  link: "https://yandex.com/maps/org/97350777975/reviews?reviews%5BpublicId%5D=zt841g5tfbm4uzpfte7emdhqcc&utm_source=review",
                },
                {
                  name: "Клиент на Яндекс.Картах",
                  text: "Нужна была сиделка с проживанием для папы с деменцией. Noproblem подобрали именно того человека, который подошёл нашей семье.",
                  link: "https://yandex.com/maps/org/97350777975/reviews?reviews%5BpublicId%5D=xpnca7dg4g22ynemryyg08k7bm&utm_source=review",
                },
                {
                  name: "Клиент на Яндекс.Картах",
                  text: "Всё оформили онлайн, никуда не нужно было ехать. Очень удобно и профессионально. Рекомендую.",
                  link: "https://yandex.com/maps/org/97350777975/reviews?reviews%5BpublicId%5D=m9f5r7maa4dr0dx031rn5dvg4m&utm_source=review",
                },
                {
                  name: "Клиент на Яндекс.Картах",
                  text: "Благодарю за оперативную работу и внимательное отношение. Замена по гарантии прошла быстро и без проблем.",
                  link: "https://yandex.com/maps/org/97350777975/reviews?reviews%5BpublicId%5D=0g292p9ta4w02yg3dmfc7u1prr&utm_source=review",
                },
              ].map((review, i) => (
                <a
                  key={i}
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-left p-6 bg-white rounded-lg border border-border/40 hover:border-primary/20 transition-colors"
                >
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Icon key={s} name="Star" size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-[15px] font-body leading-relaxed mb-4">
                    «{review.text}»
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={14} className="text-primary/50" />
                    </div>
                    <span className="text-xs text-muted-foreground font-body">{review.name}</span>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://yandex.com/maps/org/97350777975/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-body transition-colors"
            >
              Все отзывы на Яндекс.Картах
              <Icon name="ExternalLink" size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* БЛОК 8 — FAQ */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionTitle className="text-center mb-12">Частые вопросы</SectionTitle>

            <div>
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

      {/* БЛОК 9 — Финальный */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold leading-tight mb-4">
              В сложных ситуациях <br />время имеет значение
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-10">
              Оставьте номер, чтобы начать подбор сегодня.
            </p>
            <div className="flex justify-center">
              <ContactForm id="final-form" buttonText="Начать подбор" dark />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 10 — Футер */}
      <footer className="py-12 border-t border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div>
                <span className="font-heading text-xl font-semibold text-primary">Noproblem</span>
                <p className="text-sm text-muted-foreground font-body mt-2">Подбор сиделок в Москве</p>
              </div>
              <div className="text-sm text-muted-foreground font-body space-y-1.5">
                <p>ИП Горшенёва Анастасия Юрьевна</p>
                <p>ОГРНИП 325774600458353</p>
                <p>ИНН 773774314704</p>
              </div>
              <div className="text-sm font-body space-y-1.5">
                <a href="tel:+79163191286" className="block text-foreground hover:text-primary transition-colors">
                  +7 (916) 319-12-86
                </a>
                <a href="mailto:noproblem.msk@yandex.ru" className="block text-muted-foreground hover:text-primary transition-colors">
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
          className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 font-body font-medium text-sm"
        >
          <Icon name="Phone" size={16} />
          Позвонить
        </a>
      </div>
    </div>
  );
};

export default Index;