
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Users, Trophy, Mic2, FileCode, Award, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface RevealProps {
  children: ReactNode;
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

export const EmploymentSupport: React.FC = () => {
  const programs = [
    {
      id: 1,
      title: "kt cloud 현직자 멘토링",
      desc: "현직 전문가와의 1:1 혹은 그룹 멘토링을 통해 실무 경험과 진로 방향에 대한 깊이 있는 인사이트를 얻습니다.",
      icon: Users,
      color: "text-blue-500",
      bgHover: "group-hover:bg-blue-500/10",
      borderHover: "group-hover:border-blue-500/50"
    },
    {
      id: 2,
      title: "TECH UP 연합 해커톤",
      desc: "TECH UP의 훈련생들이 모여 아이디어를 구체화하고 팀워크로 완성하며 실전 같은 프로젝트 경험을 쌓는 대규모 해커톤입니다.",
      icon: Trophy,
      color: "text-yellow-500",
      bgHover: "group-hover:bg-yellow-500/10",
      borderHover: "group-hover:border-yellow-500/50"
    },
    {
      id: 3,
      title: "kt cloud 현직자 특강",
      desc: "업계 전문가들이 직접 전하는 생생한 현장 사례와 노하우를 통해 최신 기술 동향과 직무 역량을 배울 수 있습니다.",
      icon: Mic2,
      color: "text-purple-500",
      bgHover: "group-hover:bg-purple-500/10",
      borderHover: "group-hover:border-purple-500/50"
    },
    {
      id: 4,
      title: "kt cloud 현직자 코드리뷰",
      desc: "현업 개발자에게 코드 품질과 구조에 대한 피드백을 받아 실무 수준의 개발 역량을 빠르게 성장시킬 수 있습니다.",
      icon: FileCode,
      color: "text-emerald-500",
      bgHover: "group-hover:bg-emerald-500/10",
      borderHover: "group-hover:border-emerald-500/50"
    },
    {
      id: 5,
      title: "우수 수료생 채용 지원 시 우대",
      desc: "탁월한 성과를 인정받은 우수 수료생은 kt cloud 채용 과정에서 우대 혜택을 받아 취업 경쟁력을 높일 수 있습니다.",
      icon: Award,
      color: "text-red-500",
      bgHover: "group-hover:bg-red-500/10",
      borderHover: "group-hover:border-red-500/50"
    },
    {
      id: 6,
      title: "이력서, 포트폴리오 컨설팅",
      desc: "체계적인 피드백을 통해 직무에 맞는 이력서와 포트폴리오를 완성도 있게 준비할 수 있습니다.",
      icon: FileText,
      color: "text-pink-500",
      bgHover: "group-hover:bg-pink-500/10",
      borderHover: "group-hover:border-pink-500/50"
    }
  ];

  return (
    <section id="employment-support" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
                <CheckCircle2 size={14} />
                <span className="text-xs font-bold tracking-wide uppercase">Career Support Program</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight break-keep">
              목표를 현실로 만드는<br />
              <span className="text-red-600">맞춤형 커리어 지원</span>
            </h2>
            <p className="text-zinc-500 mt-4 text-sm">
                kt cloud TECH UP만의 차별화된 프로그램으로 취업 경쟁력을 완성하세요.
            </p>
          </Reveal>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={idx * 100} className="h-full">
                <div className={`h-full bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl transition-all duration-300 group hover:-translate-y-2 flex flex-col relative overflow-hidden ${item.borderHover} hover:shadow-2xl`}>
                    
                    {/* Background Hover Effect */}
                    <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${item.bgHover}`}></div>

                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className={`w-14 h-14 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                            <Icon size={28} />
                        </div>
                        <div className="p-2 rounded-full bg-zinc-800/50 text-zinc-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors relative z-10 break-keep pr-4">
                        {item.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed relative z-10 break-keep">
                        {item.desc}
                    </p>

                    {/* Bottom Line */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-50 w-full transition-opacity duration-500 ${item.color}`}></div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={600} className="mt-16 text-center">
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-zinc-800 via-red-900 to-zinc-800">
                <div className="bg-black rounded-full px-6 py-3 flex items-center gap-3">
                    <span className="text-zinc-400 text-xs md:text-sm font-medium">이 모든 혜택을 국비지원을 통해 누리세요</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                    <span className="text-white text-xs md:text-sm font-bold">95~100% 국비지원 교육</span>
                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};
