
import React, { useRef, useState, useEffect } from 'react';
import { Youtube, Play } from 'lucide-react';

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

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // kt cloud 공식 브랜드 필름 (임베딩 허용됨)
  const videoId = "ysz5S6PUM-U"; 

  return (
    <section className="py-24 bg-zinc-950 relative border-b border-zinc-900">
      <div className="container mx-auto px-4">
        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-black group">
              {!isPlaying ? (
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none cursor-pointer"
                  aria-label="영상 재생"
                >
                  {/* Thumbnail */}
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                    alt="Video Thumbnail" 
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-300">
                    <Play fill="white" className="text-white w-8 h-8" />
                  </div>
                </button>
              ) : (
                <iframe 
                  width="100%" 
                  height="100%" 
                  // autoplay=1과 함께 mute=1을 추가하여 브라우저 자동 재생 정책 준수
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&playsinline=1`} 
                  title="kt cloud Brand Film" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-zinc-500 text-sm">
                치열하게 고민하고 함께 성장했던 교육생들의 생생한 모습을 영상으로 확인해보세요.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
