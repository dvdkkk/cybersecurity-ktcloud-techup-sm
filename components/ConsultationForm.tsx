
import React, { useRef, useEffect, ReactNode } from 'react';
import { Phone, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { handlePhoneClick } from '../constants';

// 스크롤 애니메이션 컴포넌트
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ConsultationForm: React.FC = () => {
  return (
    <section id="consultation" className="py-12 md:py-16 bg-yellow-400 text-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 text-zinc-950">
                망설이지 마세요.<br/>
                보안 전문가가 <br/>
                친절하게 안내해드립니다.
              </h2>
              <p className="text-lg font-medium text-zinc-800 mb-6 leading-relaxed">
                국비지원 자격 여부부터 취업 및 교육과정까지<br/>
                <span className="border-b-2 border-black font-bold">무료로 상담해드립니다.</span>
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-70">교육문의</p>
                    <a 
                      href="tel:18775280" 
                      onClick={handlePhoneClick}
                      className="text-2xl font-black block hover:opacity-80 transition-opacity text-zinc-950 cursor-pointer"
                    >
                      1877-5280
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-70">교육방식</p>
                    <p className="text-lg font-bold text-zinc-950">100% 온라인</p>
                  </div>
                </div>
              </div>
              <p className="font-bold text-base mt-4 text-zinc-950">여러분의 꿈을 응원합니다!</p>
            </Reveal>
          </div>

          {/* Right Consultation CTA Button Area (Targeted Element) */}
          <Reveal delay={200} className="w-full">
            <div className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-zinc-800 flex flex-col items-center text-center relative overflow-hidden group">
              {/* Decorative background glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/25 transition-all duration-500" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-bold mb-4 shadow-sm">
                  <Sparkles size={14} className="text-red-500 animate-pulse" />
                  <span>국비지원 & 1:1 맞춤 상담</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
                  교육상담 & 수강신청
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base mb-8 max-w-sm leading-relaxed">
                  국비지원 대상 여부 및 취업 연계 혜택을<br className="hidden sm:inline" />
                  전문 컨설턴트가 빠르고 정확하게 안내해 드립니다.
                </p>

                <a
                  href="https://naver.me/5ajXDpLu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 sm:py-5 px-6 sm:px-8 bg-red-600 hover:bg-red-500 active:scale-98 text-white font-black text-lg sm:text-xl rounded-2xl shadow-[0_10px_25px_rgba(220,38,38,0.45)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.65)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                  id="consultation-cta-button"
                >
                  <span>상담신청하기</span>
                  <ArrowUpRight size={22} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>

                <p className="text-xs text-zinc-500 mt-4 flex items-center justify-center gap-1.5">
                  <span>안전한 네이버 폼 상담 접수 페이지로 연결됩니다.</span>
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
