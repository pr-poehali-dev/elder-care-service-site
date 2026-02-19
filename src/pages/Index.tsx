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
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 ${dark ? "bg-white/10" : "bg-foreground/5"}`}>
          <Icon name="Check" size={20} className={dark ? "text-white" : "text-foreground"} />
        </div>
        <p className={`text-lg font-heading font-semibold ${dark ? "text-white" : "text-foreground"}`}>Заявка отправлена</p>
        <p className={`text-sm mt-1 ${dark ? "text-white/50" : "text-muted-foreground"}`}>Перезвоним в течение 15 минут</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-sm" id={id}>
      <Input
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`h-12 font-body text-[15px] rounded-md ${dark ? "bg-white/10 border-white/15 text-white placeholder:text-white/40" : "bg-white border-border text-foreground placeholder:text-muted-foreground"}`}
      />
      <Input
        placeholder="Телефон"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={`h-12 font-body text-[15px] rounded-md ${dark ? "bg-white/10 border-white/15 text-white placeholder:text-white/40" : "bg-white border-border text-foreground placeholder:text-muted-foreground"}`}
      />
      <Button
        type="submit"
        className={`w-full h-12 text-[15px] font-body font-medium rounded-md ${dark ? "bg-white text-foreground hover:bg-white/90" : ""}`}
      >
        {buttonText}
      </Button>
      <p className={`text-xs text-center ${dark ? "text-white/40" : "text-muted-foreground"}`}>Перезвоним в течение 15 минут</p>
    </form>
  );
};

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-3xl md:text-[40px] lg:text-[48px] font-heading font-semibold text-foreground leading-[1.1] tracking-tight ${className}`}>
    {children}
  </h2>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-heading font-medium text-foreground pr-4">{question}</span>
        <Icon
          name={open ? "Minus" : "Plus"}
          size={18}
          className="text-muted-foreground shrink-0"
        />
      </button>
      {open && (
        <div className="pb-6 text-muted-foreground leading-relaxed font-body text-[15px]">
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
      <section className="min-h-screen flex items-center">
        <div className="container py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-heading text-xl md:text-2xl text-foreground tracking-wide mb-12">
              Noproblem
            </p>

            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-heading font-semibold text-foreground leading-[1.05] mb-6">
              Подбор сиделки<br />с проживанием в Москве
            </h1>

            <p className="text-[17px] text-muted-foreground font-body font-light leading-relaxed mb-3 max-w-lg mx-auto">
              Для ухода после инсульта, при деменции и за лежачими пациентами
            </p>

            <p className="text-sm text-muted-foreground font-body mb-12">
              Кандидат за 24–72 часа · Гарантия замены 1 месяц
            </p>

            <div className="flex justify-center mb-10">
              <ContactForm id="hero-form" />
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[13px] text-muted-foreground font-body">
              <span>Работаем по договору</span>
              <span>Оформление онлайн</span>
              <span>Не нужно никуда ехать</span>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 2 — Когда к нам обращаются */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <SectionTitle className="text-center mb-20">Когда к нам обращаются</SectionTitle>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16 max-w-4xl mx-auto">
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
                <span className="text-xs font-body text-muted-foreground tracking-widest">{item.num}</span>
                <h3 className="text-2xl font-heading font-semibold text-foreground mt-3 mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed font-body font-light">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground font-body text-sm mt-16 max-w-md mx-auto">
            Мы подключаемся в ситуациях, где важна точность подбора и надёжность.
          </p>
        </div>
      </section>

      {/* БЛОК 3 — Как проходит подбор */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <SectionTitle className="text-center mb-20">Как проходит подбор</SectionTitle>

          <div className="max-w-xl mx-auto">
            <div className="space-y-0">
              {[
                "Вы описываете ситуацию и свои ожидания от сиделки",
                "Подписываем договор — онлайн",
                "Мы проводим телефонные и видео-интервью с кандидатами",
                "Приводим на видео-собеседование к вам только подходящих",
              ].map((text, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center text-xs font-body text-foreground shrink-0">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-px h-10 bg-border" />}
                  </div>
                  <p className="text-foreground font-body text-[15px] pt-1.5 pb-6">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-2 text-[15px] text-muted-foreground font-body">
              <p>Персональный подбор под вашу ситуацию. Без массовых баз и «потока».</p>
              <p>Вы избежите ошибок и стресса. Сэкономите время и нервы.</p>
            </div>

            <div className="mt-10 flex justify-center">
              <ContactForm id="process-form" buttonText="Заказать звонок" />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 4 — Почему дешёвый подбор */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionTitle className="mb-10">
              Почему дешёвый подбор часто заканчивается заменой
            </SectionTitle>

            <p className="text-muted-foreground font-body text-[15px] mb-8">
              Минимальная стоимость подбора обычно означает:
            </p>

            <div className="space-y-3 mb-10">
              {[
                "Отсутствие глубинных интервью и проверки опыта",
                "Неподтверждённую практику работы с диагнозом",
                "Формальную передачу контакта",
                "Отсутствие проверки документов",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1 shrink-0">—</span>
                  <span className="text-foreground font-body text-[15px]">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground font-body text-[15px] leading-relaxed">
              Экономия на качестве подбора приводит к повторному поиску уже через 1–2 недели.
            </p>
            <p className="text-foreground font-body font-medium text-[15px] mt-2">
              Наша задача — сделать один точный подбор.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5 — Стоимость */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <SectionTitle className="text-center mb-20">Стоимость</SectionTitle>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden mb-10">
              <div className="bg-background p-8 md:p-10">
                <p className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-4">Стандартный</p>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-1">Подбор сиделки</h3>
                <p className="text-muted-foreground text-sm font-body mb-6">Под ваш запрос</p>
                <p className="text-3xl font-heading font-bold text-foreground">50 000 ₽</p>
                <p className="text-sm text-muted-foreground font-body mt-1">Гарантия — 1 мес.</p>
              </div>

              <div className="bg-foreground p-8 md:p-10 text-background">
                <p className="text-xs font-body text-background/50 tracking-widest uppercase mb-4">Приоритет</p>
                <h3 className="text-2xl font-heading font-semibold mb-1">Срочный подбор</h3>
                <p className="text-background/60 text-sm font-body mb-6">24–48 часов</p>
                <p className="text-3xl font-heading font-bold">70 000 ₽</p>
                <p className="text-sm text-background/60 font-body mt-1">Гарантия — 1 мес.</p>
              </div>
            </div>

            <div className="rounded-lg border border-border p-8 md:p-10">
              <p className="text-sm font-body font-medium text-foreground mb-6">Дополнительно</p>
              <div className="space-y-0">
                {[
                  { name: "Проверка благонадёжности", price: "5 000 ₽" },
                  { name: "Замена вне гарантии", price: "25 000 ₽" },
                  { name: "Перевозка лежачих пациентов", price: "от 15 000 ₽" },
                  { name: "Выезд психиатра-геронтолога на дом", price: "от 25 000 ₽", note: "возможно дальнейшее сопровождение пациента" },
                  { name: "Выезд врача-реабилитолога на дом", price: "от 8 000 ₽", note: "оценивает состояние и подключает команду для восстановления" },
                ].map((item, i, arr) => (
                  <div key={item.name} className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
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
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionTitle className="text-center mb-16">
              Почему нам доверяют<br />семьи предпринимателей
            </SectionTitle>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 mb-14">
              {[
                { title: "Конфиденциальность" },
                { title: "Быстрое принятие решений" },
                { title: "Онлайн-оформление без лишних встреч" },
                { title: "Чёткие договорённости и ответственность" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 shrink-0">
                    <Icon name="Check" size={16} />
                  </span>
                  <p className="font-body text-foreground text-[15px]">{item.title}</p>
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
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionTitle className="text-center mb-6">Отзывы</SectionTitle>

            <p className="text-center text-muted-foreground font-body text-[15px] leading-relaxed mb-16 max-w-lg mx-auto">
              Мы специализируемся на подборе сиделок для сложных случаев в Москве.
              Работаем без массового «потока». Каждый подбор индивидуально.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
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
                  className="block p-6 border border-border rounded-lg hover:border-foreground/20 transition-colors"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Icon key={s} name="Star" size={13} className="text-foreground/30 fill-foreground/30" />
                    ))}
                  </div>
                  <p className="text-foreground text-[15px] font-body leading-relaxed mb-5">
                    «{review.text}»
                  </p>
                  <span className="text-xs text-muted-foreground font-body">Яндекс.Карты</span>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://yandex.com/maps/org/97350777975/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground font-body transition-colors"
              >
                Все отзывы на Яндекс.Картах
                <Icon name="ArrowUpRight" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 8 — FAQ */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionTitle className="text-center mb-14">Частые вопросы</SectionTitle>

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
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-[40px] lg:text-[48px] font-heading font-semibold leading-[1.1] mb-4">
              В сложных ситуациях<br />время имеет значение
            </h2>
            <p className="text-background/50 font-body text-[17px] mb-12">
              Оставьте номер, чтобы начать подбор сегодня.
            </p>
            <div className="flex justify-center">
              <ContactForm id="final-form" buttonText="Начать подбор" dark />
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 10 — Футер */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div>
                <span className="font-heading text-lg font-semibold text-foreground">Noproblem</span>
                <p className="text-sm text-muted-foreground font-body mt-1">Подбор сиделок в Москве</p>
              </div>
              <div className="text-[13px] text-muted-foreground font-body space-y-1">
                <p>ИП Горшенёва Анастасия Юрьевна</p>
                <p>ОГРНИП 325774600458353</p>
                <p>ИНН 773774314704</p>
              </div>
              <div className="text-sm font-body space-y-1">
                <a href="tel:+79163191286" className="block text-foreground hover:text-foreground/70 transition-colors">
                  +7 (916) 319-12-86
                </a>
                <a href="mailto:noproblem.msk@yandex.ru" className="block text-muted-foreground hover:text-foreground transition-colors">
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
          className="flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-body font-medium text-sm"
        >
          <Icon name="Phone" size={15} />
          Позвонить
        </a>
      </div>
    </div>
  );
};

export default Index;
