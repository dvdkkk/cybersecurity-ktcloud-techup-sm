
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
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
              <Youtube size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">Brand Film</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              kt cloud가 만들어가는<br />
              <span className="text-red-600">디지털 혁신의 미래</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-black aspect-video relative group">
            {!isPlaying ? (
              <div 
                className="absolute inset-0 cursor-pointer" 
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                  alt="kt cloud Brand Film" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(185,28,28,0.5)] group-hover:scale-110 transition-transform duration-300">
                    <Play fill="white" className="text-white" size={32} />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="kt cloud Brand Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};