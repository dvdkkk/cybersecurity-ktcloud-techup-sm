
import React, { useEffect } from 'react';
import { Star, Calendar, Clock, MapPin, Home, UserCheck, Flame, Cpu } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero } = content;

  // Icon mapping for stats (Recruitment Summary)
  const statIcons = [
    <Flame size={16} className="text-red-600 animate-pulse" />,
    <Clock size={16} className="text-red-600" />,
    <Calendar size={16} className="text-red-600" />,
    <MapPin size={16} className="text-red-600" />,
    <Home size={16} className="text-red-600" />,
    <UserCheck size={16} className="text-red-600" />,
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      
      {/* Background Layers (z-0) */}
      <div className="absolute inset-0 z-0 bg-black pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000000_100%)]" />
        
        {/* Minimal Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-700/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
      </div>

      {/* Content (z-10) */}
      <div className="container mx-auto px-4 z-10 relative text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-700/10 border border-red-700/30 text-red-600 mb-6 animate-fade-in-up shadow-[0_0_20px_rgba(185,28,28,0.3)]">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-bold tracking-wide">{hero.badge}</span>
        </div>
        
        <h1 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          {hero.title} <br />
          <span className="text-red-600">
            {hero.highlight}
          </span>로 거듭나세요
        </h1>
        
        <p className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed whitespace-pre-line drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
          {hero.description}
        </p>

        {/* Course Title Plate */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up delay-300">
          <div className="relative p-6 md:p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent opacity-60"></div>
            <div className="absolute inset-0 bg-red-700/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-700"></span>
                </span>
                <span className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.3em]">Official Course Name</span>
              </div>
              <div className="flex items-center gap-3">
                <Cpu className="text-red-600 hidden md:block" size={32} />
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter">
                  kt cloud 사이버 보안
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment Info Summary (6 Items) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full border-t border-white/10 pt-10 bg-black/10 backdrop-blur-sm rounded-2xl">
          {hero.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-red-600/30 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                {statIcons[idx]}
                <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
              <p className={`text-sm md:text-lg font-black break-keep ${stat.value.includes('모집 중') ? 'text-red-600' : 'text-white'}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
