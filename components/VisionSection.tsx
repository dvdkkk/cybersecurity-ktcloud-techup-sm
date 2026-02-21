
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Eye, Banknote, ArrowUpRight, User, Zap, Trophy, Check, BarChart2 } from 'lucide-react';

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

// 숫자 카운팅 컴포넌트
const Counter: React.FC<{ end: number; duration?: number; start: boolean }> = ({ end, duration = 2000, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // EaseOutExpo 효과
      const easeValue = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeValue * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return <>{count.toLocaleString()}</>;
};

export const VisionSection: React.FC = () => {
  const [startAnimate, setStartAnimate] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 약간의 딜레이를 주어 사용자가 차트를 인식한 직후 애니메이션 시작
          setTimeout(() => setStartAnimate(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 연봉 데이터 (단위: 만원)
  const salaryData = [
    { label: "중소기업", value: 4600, color: "bg-zinc-700", width: "70%" },
    { label: "평균연봉", value: 5400, color: "bg-zinc-500", width: "83%" },
    { label: "주요 보안전문 기업", value: 6130, color: "bg-gradient-to-r from-red-900 to-red-600", width: "94%", highlight: true },
    { label: "대기업", value: 6340, color: "bg-gradient-to-r from-red-800 to-red-500", width: "97%", highlight: true },
  ];

  return (
    <section id="vision" className="py-24 bg-black relative border-b border-zinc-900 overflow-hidden min-h-[900px] flex flex-col justify-center">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#220505_0%,_#000000_70%)] opacity-40"></div>
        <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        
        {/* Header Section */}
        <Reveal className="mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4 shadow-[0_0_15px_rgba(220,38,38,0.3)] animate-pulse">
              <Eye size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">Vision</span>
           </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            기업이 원하는 보안 전문가,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white animate-pulse">전문인력 부족 고연봉 취업!</span>
          </h2>
           <p className="text-zinc-500 mt-4 text-sm">
             미래 산업의 핵심 인재로 성장할 수 있는 확실한 비전을 제시합니다.
           </p>
        </Reveal>

        {/* Chart Section Container */}
        <div ref={chartRef} className="w-full max-w-4xl mx-auto mb-20 px-2 md:px-4 perspective-1000">
          
          <Reveal delay={100} className="mb-8 text-center relative z-20">
             <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-zinc-900/90 border border-zinc-700 px-8 py-6 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] transform transition-transform hover:scale-105 duration-500">
                <div className="p-4 bg-red-900/20 rounded-full text-red-500 border border-red-500/20 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                  <BarChart2 size={32} />
                </div>
                <div className="text-center md:text-left">
                  <span className="block text-[10px] text-red-400 font-bold uppercase tracking-[0.2em] mb-1">Market Insight</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-none">
                    국내 기업 <span className="text-red-500 underline decoration-4 underline-offset-4 decoration-red-900">보안인력 연봉</span>
                  </h3>
                </div>
             </div>
          </Reveal>

          {/* Dynamic Chart */}
          <div className={`
              bg-gradient-to-b from-zinc-900/80 to-black p-6 md:p-10 rounded-[2rem] border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl transition-all duration-1000
              ${startAnimate ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}
          `}>
             {/* Glow Effect behind chart */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/5 blur-3xl rounded-full"></div>

             <div className="space-y-6 md:space-y-8 relative z-10">
               {salaryData.map((item, index) => (
                 <div key={index} className="relative">
                   
                   {/* Label & Value Row */}
                   <div className="flex justify-between items-end mb-2 px-1">
                       <span className={`text-xs md:text-base font-bold transition-colors duration-500 ${item.highlight ? 'text-white' : 'text-zinc-500'}`}>
                         {item.label}
                       </span>
                       <div className={`flex items-baseline gap-1 transition-all duration-500 ${startAnimate && item.highlight ? 'scale-110' : 'scale-100'}`}>
                          <span className={`text-lg md:text-2xl font-black ${item.highlight ? 'text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'text-zinc-300'}`}>
                            <Counter end={item.value} start={startAnimate} />
                          </span>
                          <span className="text-xs text-zinc-600 font-bold">만원</span>
                       </div>
                   </div>

                   {/* Bar Container */}
                   <div className="h-6 md:h-8 bg-zinc-800/50 rounded-full overflow-hidden relative shadow-inner">
                      {/* Grid Lines inside bar */}
                      <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, transparent 99%, rgba(255,255,255,0.05) 100%)', backgroundSize: '10% 100%' }}></div>
                      
                      {/* Animated Bar */}
                      <div 
                          className={`h-full rounded-full ${item.color} relative flex items-center justify-end pr-2 box-border shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                          style={{ 
                            width: startAnimate ? item.width : '0%',
                            transition: `width 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s` // Elastic Easing
                          }}
                       >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] translate-x-[-150%] animate-[shimmer_2.5s_infinite_linear]"></div>
                          
                          {/* Highlight Glow for top bars */}
                          {item.highlight && (
                             <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[4px]"></div>
                          )}
                       </div>
                   </div>
                 </div>
               ))}
             </div>

             {/* Background Grid Lines (Decorative) */}
             <div className="absolute inset-0 px-6 md:px-10 py-10 flex justify-between pointer-events-none opacity-20">
                <div className="h-full w-px border-l border-dashed border-zinc-600"></div>
                <div className="h-full w-px border-l border-dashed border-zinc-600"></div>
                <div className="h-full w-px border-l border-dashed border-zinc-600"></div>
             </div>
          </div>

          <Reveal delay={800} className="mt-6 flex justify-end">
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold bg-black/60 backdrop-blur-sm inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 shadow-lg">
              <span>자료 출처: 한국거래소(KRX) 기업 공시 데이터</span>
              <ArrowUpRight size={10} />
            </p>
          </Reveal>
        </div>

        {/* Final CTA Text */}
        <Reveal delay={1000} className="space-y-8 max-w-3xl mb-24">
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
        <Reveal delay={1200} className="w-full max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-800 via-red-900 to-zinc-800 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              {/* Step 1: 입문 */}
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center text-center group hover:border-zinc-600 transition-all duration-300 shadow-xl">
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
              <div className="bg-gradient-to-b from-zinc-900 to-black border border-red-900/50 p-8 rounded-3xl flex flex-col items-center text-center transform md:-translate-y-6 shadow-[0_0_40px_rgba(185,28,28,0.25)] relative overflow-hidden group">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300 animate-bounce">
                   <Zap size={40} fill="currentColor" />
                </div>
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Process</h4>
                <p className="text-white font-black text-2xl mb-6">7개월 실무 완성</p>
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
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center text-center group hover:border-red-600 transition-all duration-300 shadow-xl">
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
          0% { transform: translateX(-150%) skewX(-20deg); }
          50% { transform: translateX(150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};
