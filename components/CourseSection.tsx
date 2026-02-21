
import React, { useRef, useState, useEffect } from 'react';
import { 
  Shield, CheckCircle2, Cpu, ArrowRight
} from 'lucide-react';

// Curriculum Data Structure
const CURRICULUM_DATA = [
  {
    id: "month-1",
    month: "1개월",
    title: "기초 보안 개념 및 실무 전략",
    desc: "보안의 기초를 다지고 최신 기술 트렌드를 익힙니다.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop",
    subjects: [
      { title: "오리엔테이션", desc: "과정 목표와 방향성을 설명하고, 상세 커리큘럼 및 학습 일정 소개합니다." },
      { title: "사이버 시큐리티 개요", desc: "정보보안 핵심 개념, 위협 모델, 공격 유형(DDoS 등), 보안 정책, 거버넌스 및 규제(ISO 27001, GDPR 등)를 학습합니다." },
      { title: "네트워크 보안", desc: "방화벽, IDS/IPS 실습과 네트워크 패킷 분석, 취약점 대응 전략을 익히고 VLAN/VPN 등 네트워크 아키텍처 설계 기술을 학습합니다." },
      { title: "클라우드 보안", desc: "클라우드 책임 공유 모델, CSP 보안 서비스 실습(AWS, Azure), 클라우드 네이티브 보안 전략, IAM 정책 설정 및 감사를 학습합니다." },
      { title: "최신 사이버 보안 기술", desc: "제로 트러스트, EDR/XDR 위협 탐지, Threat Intelligence, 머신러닝 기반 보안 분석 등 최신 보안 기술 트렌드를 실습과 함께 학습합니다." },
      { title: "침투 테스트", desc: "침투 테스트 절차, Metasploit/Nmap 툴 실습, 웹/네트워크 취약점 공격 사례 분석, 보고서 작성 및 대응 방안을 학습합니다." },
      { title: "취업 준비 역량 테스트 대비", desc: "매월 과정 별 역량 평가 및 피드백. 최신 구직 동향 및 사례 연구, 자기 PR을 위한 효과적인 취업 전략 학습." }
    ]
  },
  {
    id: "month-2",
    month: "2개월",
    title: "심화 보안 기술 및 대응",
    desc: "암호학부터 취약점진단까지 심화기술을 습득합니다.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format&fit=crop",
    subjects: [
      { title: "암호학", desc: "대칭/비대칭 키 암호화, 해시 함수(MD5, SHA 등), PKI 인증서, TLS/SSL 통신 보안 등 암호화 기법과 양자 암호화 기술 동향을 학습합니다." },
      { title: "보안 관제 및 로그 분석", desc: "SIEM 개념, 로그 수집/정규화 및 상관분석, 탐지 규칙 설정, 알림 시스템 구성, 침해 사고 대응 시나리오와 포렌식 연계를 실습합니다." },
      { title: "취약점 진단 및 대응", desc: "취약점 스캐너(Nessus, OpenVAS) 활용, CVE 기반 위험도 평가, 패치 관리와 구성 오류 점검, 취약점 리포트 작성 및 대응 프로세스를 학습합니다." },
      { title: "특강 1", desc: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { title: "취업 준비 역량 테스트 대비", desc: "역량 평가 및 피드백, 최신 구직 동향 연구 및 자기 PR 전략 학습." },
      { title: "기본 프로젝트 (Intro)", desc: "네트워크 보안 설정, 침투 테스트, 클라우드 IAM 정책 수립 등 기초 보안 운영 실습." }
    ]
  },
  {
    id: "month-3",
    month: "3개월",
    title: "기본 프로젝트 시작",
    desc: "배운 지식을 활용하여 보안 관제 시스템을 직접 구축합니다.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2940&auto=format&fit=crop",
    subjects: [
      { title: "기본 프로젝트", desc: "보안 취약점 진단, 클라우드 IAM/보안 정책 수립, 기본 보안 관제 시스템 구축 및 로그 분석을 통한 위협 탐지/대응 실습." },
      { title: "심화 프로젝트", desc: "SIEM 활용 및 암호학 기반 보안 솔루션 구현, 팀 단위 복합 보안 시스템 설계 및 운영." },
      { title: "특강 2", desc: "현직자 초빙 심화 주제 특강." },
      { title: "취업 준비 역량 테스트 대비", desc: "역량 평가 및 피드백, 취업 전략 학습." }
    ]
  },
  {
    id: "month-5",
    month: "5개월",
    title: "실무 통합 프로젝트 시작",
    desc: "멀티클라우드 환경에서의 통합 보안 아키텍처를 설계합니다.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
    subjects: [
      { title: "실무 통합 프로젝트", desc: "멀티클라우드 통합 보안 아키텍처 설계, 실시간 DevSecOps 위협 대응 시스템 구축. 타 과정(클라우드, AI) 협업 및 재해 복구 역량 완성." },
      { title: "특강 4", desc: "사이버 보안 사례 및 심화 주제 전문가 특강." },
      { title: "취업 준비 역량 테스트 대비", desc: "매월 과정 별 역량 평가 및 피드백 진행." },
      { title: "커리어 성장 전략", desc: "개인 목표/학습 로드맵 설계, 전문가 멘토링 및 네트워크 확장 전략 학습." },
      { title: "협업 및 커뮤니케이션", desc: "팀워크 강화 커뮤니케이션 전략 및 갈등 해결 기법 실습." }
    ]
  },
  {
    id: "month-6",
    month: "6개월",
    title: "실무 통합 프로젝트 집중 개발",
    desc: "애자일 환경에서 보안 솔루션을 고도화하고 포트폴리오를 준비합니다.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop",
    subjects: [
      { title: "실무 통합 프로젝트 (고도화)", desc: "보안 강화를 위한 종합 솔루션 구현, 고가용성 운영 역량 완성." },
      { title: "특강 5", desc: "전문가 초빙 심화 특강." },
      { title: "취업 준비 역량 테스트 대비", desc: "역량 평가 및 피드백." },
      { title: "제품 개발 프로세스와 문화", desc: "애자일 환경 기반 제품 아이디어 발굴부터 출시까지의 과정 사례 학습." },
      { title: "포트폴리오 기획 및 구성", desc: "개인 역량과 기술을 구성하는 효과적인 포트폴리오 설계와 성공 사례 분석." }
    ]
  },
  {
    id: "month-7",
    month: "7개월",
    title: "프로젝트 마무리 및 수료",
    desc: "최종 발표와 함께 보안 전문가로서의 첫발을 내딛습니다.",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de0?q=80&w=2940&auto=format&fit=crop",
    subjects: [
      { title: "실무 통합 프로젝트 (완성)", desc: "종합 보안 솔루션 최종 점검 및 완성." },
      { title: "특강 6", desc: "마지막 심화 주제 전문가 특강." },
      { title: "취업 준비 역량 테스트 대비", desc: "최종 역량 평가 및 피드백." },
      { title: "이력서 작성 및 자기 PR", desc: "강점 부각 이력서 작성 및 효과적인 자기 PR 전략 학습." },
      { title: "프로젝트 발표회", desc: "결과물 발표, 심사위원/현직자 피드백 및 성과 평가." },
      { title: "수료식", desc: "7개월 간의 학습/프로젝트 회고 및 향후 계획 공유." }
    ]
  }
];

export const CourseSection: React.FC = () => {
  const [activeId, setActiveId] = useState(CURRICULUM_DATA[0].id);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Resize Listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for Active State (Fixed Logic)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 교차 중인 항목 중 가장 화면 중앙/상단에 가까운 항목 선택
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
           setActiveId(visibleEntries[0].target.id);
        }
      },
      { 
        // rootMargin 수정: 화면 상단 30% 지점부터 하단 70% 지점까지만 감지 영역으로 설정
        rootMargin: '-30% 0px -70% 0px' 
      } 
    );

    CURRICULUM_DATA.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 모바일 스크롤 버그 수정:
  // auto-scroll 기능 제거. 모든 버튼이 화면에 보이므로 스크롤 할 필요가 없으며,
  // scrollIntoView가 페이지 전체 스크롤을 유발하여 위로 튀는 현상을 방지함.

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150; // Adjusted for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="courses" className="py-12 md:py-24 bg-black relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
            <Shield size={14} />
            <span className="text-xs font-bold tracking-wide uppercase">Curriculum</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            단계별 학습 설계로<br />
            <span className="text-red-600">완성하는 보안 전문가</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sticky Navigation Bar */}
          <div className="lg:w-64 flex-shrink-0 relative z-40">
            <div 
              className={`
                sticky top-[72px] lg:top-24 transition-all duration-300
                ${isMobile 
                  ? 'bg-yellow-400 backdrop-blur-xl border-b border-yellow-500 -mx-4 px-4 shadow-2xl' 
                  : ''}
              `}
            >
              <div 
                 ref={scrollContainerRef}
                 // 모바일에서 flex-row + 버튼 flex-1을 사용하여 모든 버튼을 한 줄에 균등 배치
                 className={`flex ${isMobile ? 'flex-row w-full py-3 gap-1.5' : 'flex-col gap-2'}`}
              >
                {CURRICULUM_DATA.map((item) => (
                  <button
                    key={item.id}
                    data-id={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative group flex items-center transition-all duration-300 border whitespace-nowrap
                      ${isMobile 
                        ? 'flex-1 justify-center text-[11px] py-2.5 px-0 rounded-lg shadow-sm font-bold' // 모바일: 꽉 찬 너비, 작은 폰트, 중앙 정렬
                        : 'w-full gap-3 px-4 py-3 rounded-xl text-left' // PC: 기존 스타일 유지
                      }
                      ${activeId === item.id 
                        ? (isMobile 
                            ? 'bg-black text-white border-black ring-1 ring-black/20' 
                            : 'bg-red-700 text-white border-red-600 shadow-[0_0_15px_rgba(185,28,28,0.4)]')
                        : (isMobile
                            ? 'bg-white/40 text-black border-transparent hover:bg-white/60'
                            : 'bg-zinc-900/80 text-zinc-500 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-300')
                      }
                    `}
                  >
                    <span className={`font-black uppercase tracking-wider ${activeId === item.id ? 'opacity-100' : 'opacity-70'}`}>
                      {item.month}
                    </span>
                    {!isMobile && activeId === item.id && (
                      <ArrowRight size={14} className="ml-auto animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* 모바일 Fade Indicator 제거 (모든 항목이 보이므로 불필요) */}
            </div>
          </div>

          {/* Right Content Stream */}
          <div className="flex-1 space-y-16 md:space-y-24">
            {CURRICULUM_DATA.map((item) => (
              <div 
                key={item.id} 
                id={item.id} 
                className="scroll-mt-48 md:scroll-mt-28 group"
              >
                {/* Section Header */}
                <div className="relative rounded-3xl overflow-hidden mb-6 md:mb-8 border border-zinc-800 bg-zinc-900 shadow-2xl">
                    <div className="absolute inset-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
                    </div>
                    
                    <div className="relative p-6 md:p-10 z-10">
                        <span className="inline-block px-3 py-1 rounded bg-red-700/90 text-white text-[10px] md:text-xs font-bold mb-3 shadow-lg backdrop-blur-sm">
                            {item.month} 과정
                        </span>
                        <h3 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-zinc-400 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </div>

                {/* Subjects Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {item.subjects.map((subject, idx) => (
                    <div 
                        key={idx} 
                        className="bg-zinc-900/30 border border-zinc-800/50 p-5 md:p-6 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-red-600 border border-zinc-700">
                           {subject.title.includes("프로젝트") ? <Cpu size={16} /> : <CheckCircle2 size={16} />}
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-base md:text-lg mb-2">
                                {subject.title}
                            </h4>
                            <p className="text-zinc-400 text-sm leading-relaxed text-justify break-keep">
                                {subject.desc}
                            </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider Line */}
                <div className="mt-16 md:mt-24 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
