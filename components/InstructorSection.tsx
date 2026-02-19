
import React, { useRef, useState, useEffect } from 'react';
import { UserCheck, Briefcase, Award, GraduationCap } from 'lucide-react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const InstructorSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
              <GraduationCap size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">Instructor</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              탄탄한 기술과<br />
              <span className="text-red-600">경험을 지닌 전문 강사</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <Reveal delay={200}>
            <div className="flex flex-col md:flex-row bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-red-900/30 transition-colors shadow-2xl">
              
              {/* Profile Image Area */}
              <div className="md:w-2/5 relative min-h-[400px] md:min-h-full bg-zinc-800">
                <img 
                  src="https://postfiles.pstatic.net/MjAyNjAyMTNfMjYg/MDAxNzcwOTcwMDg4ODQw.KZ1Vlz6i1wBPZwH1AVCfuCvoN6VpbyEehyb03M73bpcg.JhENNjkiZbbk0hEMa9reVdKH_9X3STtNKiYqLJwMeMUg.PNG/techup_lecturer_security_taewoon.png?type=w966" 
                  alt="강태운 강사" 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-black text-white mb-1">강태운</h3>
                  <p className="text-red-500 font-bold text-sm uppercase tracking-wider">Expert Instructor</p>
                  <p className="text-zinc-400 text-sm mt-2 font-medium">정보보안 및 데이터 분석 전문가</p>
                </div>
              </div>

              {/* Content Area */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-zinc-800 pb-4">
                    <UserCheck className="text-red-600" size={24} />
                    이력 소개
                  </h4>
                  
                  <ul className="space-y-6">
                    <li className="flex gap-4 items-start group">
                      <div className="mt-1 w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] group-hover:scale-150 transition-transform"></div>
                      <div>
                        <span className="text-xs font-bold text-red-500 bg-red-950/30 px-2 py-0.5 rounded border border-red-900/30 mb-1 inline-block">Current</span>
                        <p className="text-zinc-200 font-bold text-lg">kt cloud TECH UP 사이버 보안 강사</p>
                      </div>
                    </li>
                    
                    <li className="flex gap-4 items-start group">
                      <div className="mt-1 w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] group-hover:scale-150 transition-transform"></div>
                      <div>
                        <span className="text-xs font-bold text-red-500 bg-red-950/30 px-2 py-0.5 rounded border border-red-900/30 mb-1 inline-block">Current</span>
                        <p className="text-zinc-200 font-bold text-lg">마켓인사이트 대표</p>
                      </div>
                    </li>

                    <li className="flex gap-4 items-start group">
                      <div className="mt-1 w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-zinc-400 transition-colors"></div>
                      <div>
                        <p className="text-zinc-400 font-medium">제이앤에이치프랜즈 정보보안 담당</p>
                      </div>
                    </li>

                    <li className="flex gap-4 items-start group">
                      <div className="mt-1 w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-zinc-400 transition-colors"></div>
                      <div>
                        <p className="text-zinc-400 font-medium">정보보호 취약점 제보 및 대회 출제 다수</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
                  <Award className="text-zinc-500 flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    ※ 운영상의 이유로 강사가 변경될 수 있습니다.
                  </p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
