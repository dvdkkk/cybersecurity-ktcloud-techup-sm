
import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Monitor, Building2, Layers } from 'lucide-react';

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

export const LearningSpaceSection: React.FC = () => {
  // Marquee images
  const spaceImages = [
    "https://postfiles.pstatic.net/MjAyNjAyMTNfMjU0/MDAxNzcwOTY4NDUxNjEy.idTgUzFyCw6gekvQ0fIu7aqboJ2zumTCLUCW4avDk2cg.cGgnisvE7kRqnTuFegSGwK8bziruVCtl7VENTU6UQjwg.PNG/techup_learning_place_02.png?type=w966", 
    "https://postfiles.pstatic.net/MjAyNjAyMTNfMjI5/MDAxNzcwOTY4NDUxNzkx.IqG1hBeHhq1Gmj93BI9JQykR5GXQVTGpIWRbXxl7Jmwg.KPXIzcd3cbVnZLawCsh78lccwLqMo0gwdWiz8_wYwT0g.PNG/5.png?type=w966", 
    "https://postfiles.pstatic.net/MjAyNjAyMTNfNDMg/MDAxNzcwOTY4NDUxNjE5.591OWwUJSnBWA9DwlmaYSoDSYpAjriX0X57uKfwjdy4g.Jqib9AJzXW_lgPd-DoNFY5Gf3SzwgQm1w7YGZWaTHAQg.PNG/techup_learning_place_03.png?type=w966", 
    "https://postfiles.pstatic.net/MjAyNjAyMTNfMTg2/MDAxNzcwOTY4NDUxNjEy.8amY2OKWNQ5xGWpz8qF3nEuUoujNVrKxq9-j9E101G0g._kNERBC0F2uyAJiWEvauAz3uZZQ2s4XTrrOWTU0uEHog.PNG/techup_learning_place_05.png?type=w966", 
    "https://postfiles.pstatic.net/MjAyNjAyMTNfMTIx/MDAxNzcwOTY4NDUxOTA0.s5sa4IwsLBaMlpmFM-oXI0NQ8pd-rBPZ32ZqxDJTGrsg.q0I84MbjXHoUYT5x9Xyt15eYSii8Eq56tXS9zOBkDc4g.PNG/8.png?type=w966", 
    "https://postfiles.pstatic.net/MjAyNjAyMTNfMjE3/MDAxNzcwOTY4NDUxNTg5.4LfiWhIq0VnySVbh5i_4fBUjffdLvZsTJURwGaC6740g.E9oR6xohusnI5kNPXHT9Ur1-YnR0E0TtPHhiTntrJKAg.PNG/6_(1).png?type=w966", 
    "https://postfiles.pstatic.net/MjAyNjAyMTNfODAg/MDAxNzcwOTY4NDUxOTEx.m-kASXuHTi6jO4TJ9BuMan5oypX9bSa3c2rO7_2WtUkg.Fv2MEglGM-k-LvMxuEhmIhEWaIVlIDSGDu-wCaEeJgcg.PNG/4.png?type=w966", 
    "https://postfiles.pstatic.net/MjAyNjAyMTNfNTIg/MDAxNzcwOTY4NDUxOTAz.1N_0vEqDetBUBzxU5nyX9jYlfofeNlP2oKci5kMX2yog.DMzMzyNJmg1nz6YVGXB7pLrL1mXsrStGBHhZV6i7qOog.PNG/2.png?type=w966", 
  ];

  const marqueeList = [...spaceImages, ...spaceImages];

  return (
    <section id="learning-space" className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      {/* Section Background Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 mb-16 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
              <Building2 size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">Learning Space</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              몰입과 협업이 공존하는<br />
              <span className="text-red-600">열린 학습 공간</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* TECH UP 강남 */}
          <Reveal delay={100} className="h-full">
            <div className="h-full bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-red-900/50 transition-all duration-500 group relative overflow-hidden shadow-2xl min-h-[320px]">
              {/* Background Image Layer: Opacity increased and blend removed for visibility */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="강남 오피스 배경" 
                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                />
                {/* Darker Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-zinc-900/40"></div>
              </div>
              
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">TECH UP 강남</h3>
                  <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-950/60 px-3 py-1.5 rounded-full border border-red-900/50 backdrop-blur-md">
                    <MapPin size={12} />
                    오프라인
                  </span>
                </div>
                <p className="text-white leading-relaxed mb-6 break-keep font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  TECH UP 강남의 쾌적한 공간에서 팀원들과 직접 협업하며 실무와 같은 프로젝트 경험을 쌓을 수 있습니다. 대면 소통을 통해 커뮤니케이션과 팀워크 역량을 자연스럽게 키울 수 있습니다.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="text-[10px] text-zinc-300 bg-black/80 px-2 py-1 rounded border border-zinc-700 backdrop-blur-sm">#쾌적한환경</span>
                  <span className="text-[10px] text-zinc-300 bg-black/80 px-2 py-1 rounded border border-zinc-700 backdrop-blur-sm">#대면협업</span>
                  <span className="text-[10px] text-zinc-300 bg-black/80 px-2 py-1 rounded border border-zinc-700 backdrop-blur-sm">#강남역접근성</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* TECH UP 메타버스 */}
          <Reveal delay={200} className="h-full">
            <div className="h-full bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-blue-900/50 transition-all duration-500 group relative overflow-hidden shadow-2xl min-h-[320px]">
              {/* Background Image Layer: Higher contrast image used */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" 
                  alt="메타버스 배경" 
                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-zinc-900/40"></div>
              </div>

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">TECH UP 메타버스</h3>
                  <span className="flex items-center gap-1 text-xs font-bold text-blue-400 bg-blue-950/60 px-3 py-1.5 rounded-full border border-blue-900/50 backdrop-blur-md">
                    <Monitor size={12} />
                    온라인
                  </span>
                </div>
                <p className="text-white leading-relaxed mb-6 break-keep font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  가상현실 기반의 메타버스 환경에서 시간과 장소 제약 없이 몰입감 있는 학습과 협업을 경험할 수 있습니다. 실제와 유사한 협업 과정을 온라인에서도 생생하게 체험할 수 있습니다.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="text-[10px] text-zinc-300 bg-black/80 px-2 py-1 rounded border border-zinc-700 backdrop-blur-sm">#ZEP</span>
                  <span className="text-[10px] text-zinc-300 bg-black/80 px-2 py-1 rounded border border-zinc-700 backdrop-blur-sm">#시공간초월</span>
                  <span className="text-[10px] text-zinc-300 bg-black/80 px-2 py-1 rounded border border-zinc-700 backdrop-blur-sm">#몰입형학습</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee Image Strip */}
      <div className="w-full bg-black py-4 border-y border-zinc-900 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="animate-marquee flex gap-4 items-center">
          {marqueeList.map((src, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-80 h-52 rounded-xl overflow-hidden transition-all duration-500 relative group"
            >
              <img 
                src={src} 
                alt="학습 공간 이미지"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
