
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Eye, Banknote, ArrowUpRight, User, Zap, Trophy, Check } from 'lucide-react';

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
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

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

export const VisionSection: React.FC = () => {
  const [startAnimate, setStartAnimate] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 연봉 데이터 (단위: 만원)
  const salaryData = [
    { label: "평균연봉", value: 5400, color: "bg-zinc-600" },
    { label: "대기업", value: 6340, color: "bg-red-600" },
    { label: "중소기업", value: 4600, color: "bg-zinc-700" },
    { label: "주요 보안전문 기업", value: 6130, color: "bg-red-800" },
  ];

  // 최대값 기준 (그래프 비율 계산용, 6500만원 기준)
  const maxValue = 6500;

  return (
    <section id="vision" className="py-24 bg-black relative border-b border-zinc-900 overflow-hidden min-h-[800px] flex flex-col justify-center">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        
        {/* Header Section */}
        <Reveal className="mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
              <Eye size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">Vision</span>
           </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            모든 기업이 원하는 보안 전문가,<br />
            <span className="text-red-600">전문인력 부족으로 고연봉 취업!</span>
          </h2>
           <p className="text-zinc-500 mt-4 text-sm">
             미래 산업의 핵심 인재로 성장할 수 있는 확실한 비전을 제시합니다.
           </p>
        </Reveal>

        {/* Separator Dots */}
        <div className="mb-12 flex flex-col gap-2 opacity-50">
          <div className="w-2 h-2 bg-zinc-800 rounded-full mx-auto"></div>
          <div className="w-2 h-2 bg-zinc-600 rounded-full mx-auto"></div>
          <div className="w-2 h-2 bg-zinc-400 rounded-full mx-auto"></div>
        </div>

        {/* Chart Section */}
        <div ref={chartRef} className="w-full max-w-3xl mx-auto mb-20 px-4">
          <Reveal delay={200} className="mb-10 text-center">
             <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 px-6 py-4 rounded-2xl shadow-2xl">
                <div className="p-3 bg-emerald-900/30 rounded-full text-emerald-400 border border-emerald-500/20">
                  <Banknote size={28} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Market Analysis</span>
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    국내 기업 내 <span className="text-emerald-400">보안인력 연봉</span>
                  </h3>
                </div>
             </div>
          </Reveal>

          {/* Horizontal Bar Chart */}
          <div className="bg-zinc-900/40 p-6 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden shadow-2xl">
             <div className="space-y-6 relative z-10">
               {salaryData.map((item, index) => {
                 const widthPercentage = (item.value / maxValue) * 100;
                 return (
                   <div key={index} className="group">
                     <div className="flex justify-between items-end mb-2">
                       <span className={`text-sm md:text-base font-bold ${item.label === '대기업' || item.label.includes('보안') ? 'text-white' : 'text-zinc-400'}`}>
                         {item.label}
                       </span>
                       <div className="flex items-center gap-1">
                          <span className={`text-lg md:text-xl font-black ${item.color.includes('red') ? 'text-red-500' : 'text-white'}`}>
                            {startAnimate ? item.value.toLocaleString() : 0}
                          </span>
                          <span className="text-xs text-zinc-500 font-bold">만원</span>
                       </div>
                     </div>
                     <div className="h-4 md:h-5 bg-zinc-800 rounded-full overflow-hidden relative">
                       <div 
                          className={`h-full rounded-full ${item.color} shadow-[0_0_15px_rgba(0,0,0,0.5)] relative`}
                          style={{ 
                            width: startAnimate ? `${widthPercentage}%` : '0%',
                            transition: `width 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.2}s`
                          }}
                       >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                       </div>
                     </div>
                   </div>
                 );
               })}
             </div>

             {/* Background Grid Lines (Decorative) */}
             <div className="absolute inset-0 px-6 md:px-10 py-10 flex justify-between pointer-events-none opacity-10">
                <div className="h-full w-px border-l border-dashed border-zinc-500"></div>
                <div className="h-full w-px border-l border-dashed border-zinc-500"></div>
                <div className="h-full w-px border-l border-dashed border-zinc-500"></div>
             </div>
          </div>

          <Reveal delay={400} className="mt-6 flex justify-end">
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold bg-black/40 backdrop-blur-sm inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-white/5">
              <span>자료 = 한국거래소</span>
              <ArrowUpRight size={10} />
            </p>
          </Reveal>
        </div>

        {/* Final CTA Text */}
        <Reveal delay={500} className="space-y-8 max-w-3xl mb-24">
          <p className="text-zinc-200 text-lg md:text-2xl font-medium leading-relaxed break-keep px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
            비전공자도, 초보자도 상관없습니다.<br />
            실무 중심의 보안 기술은 <span className="text-white font-bold underline decoration-red-700 decoration-4 underline-offset-8">당신의 연봉을 바꾸는 가장 확실한 카드</span>입니다.
          </p>
          <div className="pt-6">
            <h4 className="text-4xl md:text-7xl font-black text-white tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,1)]">
              비전공자도 경력자로!<br />
              <span className="text-white">kt</span> <span className="text-red-600">cloud</span> <span className="text-white">TECH UP</span>
            </h4>
          </div>
        </Reveal>

        {/* New Roadmap Section */}
        <Reveal delay={700} className="w-full max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-800 via-red-900 to-zinc-800 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              {/* Step 1: 입문 */}
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center text-center group hover:border-zinc-600 transition-all duration-300">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-zinc-500 group-hover:bg-zinc-700 group-hover:text-white transition-colors">
                  <User size={32} />
                </div>
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Start</h4>
                <p className="text-white font-black text-2xl mb-6">IT 입문 / 비전공자</p>
                <ul className="text-sm text-zinc-400 space-y-3 text-left w-full pl-4 bg-zinc-950/50 py-4 rounded-xl">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                        코딩 경험 부족
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                        보안 지식 전무
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                        막막한 취업 준비
                    </li>
                </ul>
              </div>

              {/* Step 2: 성장 (Highlighted) */}
              <div className="bg-gradient-to-b from-zinc-900 to-black border border-red-900/50 p-8 rounded-3xl flex flex-col items-center text-center transform md:-translate-y-6 shadow-[0_0_40px_rgba(185,28,28,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                   <Zap size={40} fill="currentColor" />
                </div>
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Process</h4>
                <p className="text-white font-black text-2xl mb-6">6개월 실무 완성</p>
                 <ul className="text-sm text-zinc-300 space-y-3 text-left w-full pl-4 bg-red-900/10 py-4 rounded-xl border border-red-900/20">
                    <li className="flex items-center gap-2">
                        <Check size={14} className="text-red-500" />
                        <span className="font-bold text-white">체계적인 커리큘럼</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={14} className="text-red-500" />
                        <span className="font-bold text-white">실전 프로젝트 3회</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={14} className="text-red-500" />
                        <span className="font-bold text-white">현직자 1:1 멘토링</span>
                    </li>
                </ul>
              </div>

              {/* Step 3: 완성 */}
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center text-center group hover:border-red-600 transition-all duration-300">
                 <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-zinc-500 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <Trophy size={32} />
                </div>
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Goal</h4>
                <p className="text-white font-black text-2xl mb-6">보안 전문가</p>
                <ul className="text-sm text-zinc-400 space-y-3 text-left w-full pl-4 bg-zinc-950/50 py-4 rounded-xl">
                    <li className="flex items-center gap-2">
                        <Check size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                        경력자급 실무 능력
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                        나만의 기술 무기
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                        우수 기업 취업 성공
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};
