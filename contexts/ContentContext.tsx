
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, VisitorLog } from '../types';
import { COURSES, EMPLOYMENT_STATUS, PROCESS_STEPS } from '../constants';

const defaultContent: SiteContent = {
  hero: {
    badge: "AI시대 유망직종 1위",
    title: "미래를 여는 보안 기술",
    highlight: "kt cloud 사이버 보안전문가",
    description: "데이터와 서비스를 수호하는 보안 전문가 과정입니다.",
    stats: [
      { label: '모집여부', value: '모집 중(7개월과정)' },
      { label: '교육시간', value: '월~금 09:00~18:00' },
      { label: '수강료', value: '96%~100% 국비지원' },
      { label: '수업형태', value: '100%온라인/실시간 비대면' },
      { label: '모집 인원', value: '50명' },
      { label: '선발방법', value: '문의신청 > 인터뷰 > 최종합격' },
    ]
  },
  intro: {
    badge: "Education Mission",
    title1: "전공·경력·성별 상관없이",
    highlight: "‘할 수 있는 사람’",
    title2: "을 만들어냅니다",
    description: "성별과 전공을 넘어 다양한 수료생들이 지금 이 순간에도 IT 현장에서 보안 전문가로 활약하고 있습니다.",
    images: [
      "https://postfiles.pstatic.net/MjAyNjAyMDdfMTI5/MDAxNzcwNDczMzk4MzM5.j6rX1bGlkkwNbV77txNgK14lBHAYbiKYfjFpgFzk1RAg.WXfNRwdBQeh3Zhcovjw_scv8iSDnJAuGWqby2eYoZvQg.JPEG/grok%EF%BC%BFimage%EF%BC%BF1770466544356.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAyMDdfMjI5/MDAxNzcwNDczMzk5OTE3.zw8tAXItIlc5CRfOO4Q5suU3s0dKbyxIM49ParhCvqQg.I1bS28bnL015uE1pv3IkM5ToKsiZLT1XO7W_3L0UYV8g.JPEG/grok%EF%BC%BFimage%EF%BC%BF1770469035959.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAyMDdfNTMg/MDAxNzcwNDczMzk3NjA4.oSduxbDJ8lN2Rj54VF-pvaOKz3yoxorBpC5fdpO3qVIg.eipwPaOlxxF2j76bRk7vW_Uk_HJ1_mD0P1LOq2W3mP0g.JPEG/grok%EF%BC%BFimage%EF%BC%BF1770469319485.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAyMDdfMTU2/MDAxNzcwNDczMzk5MTU0.dwY7j_8HCvh85ssKo5vCmDSdfa2ynn8h6P6zSLm60lkg.CRWZXZGGUt_mnKEyLxg7F1WcWjGN1uCGMrNat_zRoy8g.JPEG/grok%EF%BC%BFimage%EF%BC%BF1770469274109.jpg?type=w966"
    ]
  },
  vision: {
    items: [
      { num: '01', title: '고연봉 전문직', desc: '클라우드 보안 및 사이버 보안 기술력을 갖춘 전문가는 업계 최고의 대우' },
      { num: '02', title: 'AI시대 산업 수요 폭발', desc: '금융, 공공, 제조 등 모든 분야에서 보안 중요성 증대로 구인난 심화' },
      { num: '03', title: '평생 경력 자산', desc: '보안 기술과 대응 능력은 대체 불가능한 핵심 역량' },
      { num: '04', title: '개인정보/보안 규제 강화', desc: '법적 보안 기준이 높아지면서 기업은 전문 보안 인력을 반드시 확보해야 하는 상황' }
    ]
  },
  courses: COURSES,
  examSchedule: {
    technician: [
      {
        round: "1회",
        writtenApp: "1.20~1.23",
        writtenExam: "2.15~2.21",
        writtenRes: "2.26",
        practicalApp: "3.24~3.27",
        practicalExam: "4.19~4.25",
        practicalRes: "5.14",
      },
      {
        round: "2회",
        writtenApp: "4.7~4.10",
        writtenExam: "5.10~5.16",
        writtenRes: "5.21",
        practicalApp: "6.16~6.19",
        practicalExam: "7.12~7.18",
        practicalRes: "8.6",
      },
      {
        round: "3회",
        writtenApp: "6.23~6.26",
        writtenExam: "7.26~7.31",
        writtenRes: "8.6",
        practicalApp: "9.8~9.11",
        practicalExam: "10.11~10.17",
        practicalRes: "11.5",
      },
      {
        round: "4회",
        writtenApp: "9.8~9.11",
        writtenExam: "10.4~10.10",
        writtenRes: "10.15",
        practicalApp: "11.3~11.6",
        practicalExam: "11.29~12.5",
        practicalRes: "12.24",
      }
    ],
    engineer: [
      {
        round: "1회",
        writtenApp: "1.20~1.23",
        writtenExam: "2.15~2.21",
        writtenRes: "2.26",
        practicalApp: "3.24~3.27",
        practicalExam: "4.19~5.2",
        practicalRes: "6.18",
      },
      {
        round: "2회",
        writtenApp: "4.7~4.10",
        writtenExam: "5.10~5.16",
        writtenRes: "6.4",
        practicalApp: "6.16~6.19",
        practicalExam: "7.12~7.25",
        practicalRes: "9.3",
      },
      {
        round: "3회",
        writtenApp: "6.23~6.26",
        writtenExam: "7.26~7.31",
        writtenRes: "8.20",
        practicalApp: "9.8~9.11",
        practicalExam: "10.11~10.24",
        practicalRes: "12.10",
      }
    ]
  },
  strategy: {
    items: [
      { title: "실전 프로젝트 중심 교육", desc: "이론에 그치지 않고 실제 보안 위협을 시뮬레이션하고 대응하여 포트폴리오를 완성합니다." },
      { title: "비전공자 맞춤 코칭", desc: "복잡한 네트워크 구조도 쉽게! 기초부터 차근차근 단계별로 실력을 향상시킵니다." },
      { title: "최신 보안 트렌드 반영", desc: "클라우드 보안, 네트워크 해킹, 모의해킹 등 현업 필수 기술 스택을 마스터합니다." },
      { title: "1:1 취업 밀착 지원", desc: "자소서 첨삭부터 기술 면접 대비까지, IT 전문 취업 컨설턴트가 끝까지 동행합니다." }
    ],
    reviews: [
      { name: "김*교님", text:"현직자의 생생한 경험을 바탕으로 질문의 의도를 정확히 파악하여 조언해주신 점이 인상적이었습니다. 실무적인 관점에서 상황을 해석해주시는 과정을 통해 앞으로의 과제를 어떻게 풀어나가야 할지 구체적인 방향을 잡을 수 있었습니다.", tag: "비전공자" },
      { name: "정*우님", text:"프로젝트의 진도가 느린 상황에서도 유하게 대안을 제시해주시고, 기업 문화 등 실무적인 내용까지 폭넓게 공유해주셨습니다. 덕분에 현직자의 관점을 다각도로 접하며 멘토링 시간을 내실 있게 채울 수 있었습니다.", tag: "최종합격" },
      { name: "김*찬님", text:"교육 과정이 실무에 적합하게 설계되어 있어 단순한 이론 학습 이상의 많은 인사이트를 얻을 수 있었습니다. 현업에서 필요로 하는 내용을 중심으로 이론을 접할 수 있어 만족스러웠습니다.", tag: "실무역량" },
      { name: "이*수님", text: "이론을 실제 코드로 구현하는 과정에서 Git 공유와 핵심 부분 공백 활용 등 효율적인 학습 환경이 제공되었습니다. 이를 통해 길어지는 코드 사이에서도 핵심 이론이 어떻게 적용되는지 집중해서 파악할 수 있었고, 이론을 실제 결과물로 체화하는 데 큰 도움이 되었습니다.", tag: "공부전략" },
      
    ]
  },
  employment: {
    status: EMPLOYMENT_STATUS,
    process: PROCESS_STEPS
  }
};

interface ContentContextType {
  content: SiteContent;
  visitorLogs: VisitorLog[];
  updateContent: (newContent: SiteContent) => void;
  addVisitorLog: (log: Omit<VisitorLog, 'id'>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// 버전을 v9로 올려서 로컬 스토리지를 강제 갱신함
const STORAGE_KEY = 'site_content_v9';
const LOG_KEY = 'visitor_logs_v9';

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [visitorLogs, setVisitorLogs] = useState<VisitorLog[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedContent = localStorage.getItem(STORAGE_KEY);
      if (savedContent) {
        try {
          const parsed = JSON.parse(savedContent);
          setContent({ ...defaultContent, ...parsed });
        } catch (e) {
          console.error("Failed to load content", e);
        }
      }

      const savedLogs = localStorage.getItem(LOG_KEY);
      if (savedLogs) {
        try {
          setVisitorLogs(JSON.parse(savedLogs));
        } catch (e) {
          console.error("Failed to load logs", e);
        }
      }
    } catch (e) {
      console.error("LocalStorage access failed", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
  };

  const addVisitorLog = (logData: Omit<VisitorLog, 'id'>) => {
    const newLog: VisitorLog = {
      ...logData,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    setVisitorLogs(prev => {
      const updated = [newLog, ...prev].slice(0, 500);
      localStorage.setItem(LOG_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const resetContent = () => {
    if (window.confirm("모든 변경사항을 초기화하시겠습니까?")) {
      setContent(defaultContent);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  if (!isLoaded) return null;

  return (
    <ContentContext.Provider value={{ content, visitorLogs, updateContent, addVisitorLog, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within a ContentProvider");
  return context;
};
