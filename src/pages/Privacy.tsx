import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/4275a9e9-69d9-4302-8cbc-8541a96c7d22/bucket/491cceaa-dd7a-4b3b-99c3-d10acbe0e41e.png";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-10 md:pt-14 mb-10">
        <Link to="/">
          <img src={LOGO} alt="Noproblem" className="h-7 md:h-9" />
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[14px] text-[#56140E] hover:text-[#56140E]/70 font-medium transition-colors mb-10"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>

        <h1 className="text-[34px] md:text-[48px] font-extrabold text-black leading-[1.02] tracking-[-0.03em] mb-12">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-lg max-w-3xl text-[#3C3C3C] text-[16px] leading-[1.8] space-y-6">
          <p className="text-[#999] italic">
            Здесь будет размещён текст Политики конфиденциальности. Вставьте ваш готовый юридический текст вместо этого абзаца.
          </p>
        </div>
      </div>

      <footer className="py-14 border-t border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            <div>
              <Link to="/">
                <img src={LOGO} alt="Noproblem" className="h-6 mb-2" />
              </Link>
              <p className="text-[13px] text-[#999] mt-2">Подбор сиделок в Москве</p>
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
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-8 border-t border-[#e5e5e5]">
            <Link to="/privacy" className="text-[13px] text-[#999] hover:text-[#3C3C3C] transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/consent" className="text-[13px] text-[#999] hover:text-[#3C3C3C] transition-colors">
              Согласие на обработку персональных данных
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
