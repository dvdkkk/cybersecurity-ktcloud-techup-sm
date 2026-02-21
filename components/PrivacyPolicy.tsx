import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen p-8 md:p-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 border-b-2 border-black pb-4">kt cloud TECH UP 개인정보처리방침</h1>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-4">개인정보 처리방침</h2>
            <p className="mb-4">
              kt cloud TECH UP은 개인정보 보호법, 정보통신망 이용 촉진 및 정보보호 등에 관한 법률 등 관련 법령상의 개인정보보호 규정을 준수하며, 지원자의 개인정보를 안전하게 취급하는 데 최선을 다합니다.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                수집한 개인정보는 “개인정보보호법” 제 15조(개인정보의 수집/이용)와 제17조(개인 정보의 제공)에 의거하여 초상권 동의 확인 자료로만 사용되며 “개인정보보호법” 제 21조(개인정보의 파기)에 따라 적절하게 파기 및 관리합니다.
              </li>
            </ul>
            <p className="font-bold">
              kt cloud TECH UP의 교육 과정에 지원하는 경우, 아래 개인정보 처리방침에 동의하는 것으로 간주합니다.
            </p>
          </section>

          <hr className="border-gray-300" />

          <section>
            <h2 className="text-lg font-bold mb-4">1. 개인정보 수집 및 이용에 대한 동의</h2>
            <p className="mb-4">
              이용자가 제공한 모든 정보는 아래 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지 않습니다.
            </p>
            
            <h3 className="font-bold mb-2">① 개인정보 수집 항목 및 수집∙이용 목적</h3>
            
            <div className="pl-4 mb-4">
              <h4 className="font-bold mb-1">가) 수집 항목</h4>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>지원서에 기재된 정보 또는 참가자가 제공한 정보</li>
                <li className="list-none pl-4 text-gray-600">- 성명, 성별, 소속 과정명, 훈련일정, 생년월일, 이메일, 전화번호, 주소, 학력/경력/자격, 인터뷰 영상, 포트폴리오 등</li>
              </ul>

              <h4 className="font-bold mb-1">나) 수집 및 이용 목적</h4>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>초상권 동의 확인</li>
                <li>교육 지원·참가자와의 연락 및 자격 확인 등 본인 확인용</li>
                <li>입과전형 진행, 자격요건의 확인, 합격여부 확인, 지원자와의 원활한 의사소통 경로 확보</li>
                <li>고충 처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락 및 통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.</li>
                <li>재화 또는 서비스 제공 물품 배송, 서비스 제공, 청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인 인증, 요금 결제 및 정산 등을 목적으로 개인정보를 처리합니다.</li>
              </ul>
            </div>

            <h3 className="font-bold mb-2">② 개인정보 보유 및 이용 기간</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>수집∙이용 동의일로부터 개인정보의 수집∙이용 목적 달성 후 5년</li>
            </ul>

            <h3 className="font-bold mb-2">③ 동의 거부 권리</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다.</li>
              <li>다만, 개인정보의 수집/이용에 동의를 거부하시는 경우 본 교육 과정에 지원할 수 없습니다.</li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          <section>
            <h2 className="text-lg font-bold mb-4">2. 고유식별정보 처리에 대한 동의</h2>
            
            <h3 className="font-bold mb-2">① 고유식별정보 수집 항목 및 수집∙이용 목적</h3>
            <div className="pl-4 mb-4">
              <h4 className="font-bold mb-1">가) 수집 항목</h4>
              <ul className="list-disc pl-5 mb-3">
                <li>주민등록번호</li>
              </ul>

              <h4 className="font-bold mb-1">나) 수집 및 이용 목적</h4>
              <ul className="list-disc pl-5 mb-3">
                <li>「근로자직업능력 개발법」, 「고용보험법」, 「산업재해보상보험법」 등 관계 법령에 따른 훈련생 등록, 고용보험 및 재해보험 가입 등 행정 처리 목적</li>
              </ul>
            </div>

            <h3 className="font-bold mb-2">② 고유식별정보 보유 및 이용 기간</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>수집∙이용 동의일로부터 개인정보의 수집∙이용 목적 달성 후 5년</li>
            </ul>

            <h3 className="font-bold mb-2">③ 동의 거부 권리</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>귀하께서는 본 안내에 따른 고유식별정보 처리에 대하여 동의를 거부하실 권리가 있습니다.</li>
              <li>다만, 고유식별정보 처리에 동의를 거부하시는 경우 본 교육 과정에 지원할 수 없습니다.</li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          <section>
            <h2 className="text-lg font-bold mb-4">3. 개인정보의 제3자 제공</h2>
            <p className="mb-4">원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래 경우에는 동의를 얻어 최소한으로 제공합니다.</p>
            
            <ul className="list-none space-y-2 mb-4">
              <li><span className="font-bold">① 제공받는 자 :</span> 고용노동부, 기획재정부, 과기정통부, 한국산업인력공단, 한국고용정보원, (주)케이티클라우드, (주)에이콘이즈(에이콘아카데미), (주)구름</li>
              <li><span className="font-bold">② 제공목적 :</span> 훈련생 등록, 출결 관리, 재해보험 가입, 행정보고, 취업 지원</li>
              <li><span className="font-bold">③ 제공하는 항목 :</span> 성명, 성별, 생년월일, 주민등록번호, 이메일, 전화번호, 주소, 소속 과정명, 훈련일정, 포트폴리오, 인터뷰 영상 등</li>
              <li><span className="font-bold">④ 보유기간 :</span> 제공 목적 달성 후 5년</li>
            </ul>
            <p className="text-gray-600 text-xs">※ 법령 근거에 따른 제공이 필요한 경우(세법·형사소송법 등)에는 동의 없이 관계기관에 제공될 수 있습니다.</p>
          </section>

          <hr className="border-gray-300" />

          <section>
            <h2 className="text-lg font-bold mb-4">4. 정보주체와 법정대리인의 권리·의무 및 행사방법</h2>
            <ol className="list-decimal pl-5 space-y-3 mb-4">
              <li>
                정보주체는 케이티클라우드에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                <p className="text-gray-600 text-xs mt-1">※ 만 14세 미만 아동에 관한 개인정보의 열람등 요구는 법정대리인이 직접 해야 하며, 만 14세 이상의 미성년자인 정보주체는 정보주체의 개인정보에 관하여 미성년자 본인이 권리를 행사하거나 법정대리인을 통하여 권리를 행사할 수도 있습니다.</p>
              </li>
              <li>권리 행사는 케이티클라우드에 대해 개인정보 보호법 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 케이티클라우드는 이에 대해 지체없이 조치하겠습니다.</li>
              <li>권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다. 이 경우 "개인정보 처리 방법에 관한 고시(제2020-7호)" 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</li>
              <li>개인정보 열람 및 처리정지 요구는 개인정보 보호법 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.</li>
              <li>개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</li>
              <li>케이티클라우드는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          <section>
            <h2 className="text-lg font-bold mb-4">5. 개인정보의 파기 및 절차</h2>
            
            <h3 className="font-bold mb-2">① 파기 원칙</h3>
            <ul className="list-disc pl-5 mb-3">
              <li>개인정보 보유기간이 경과하거나 처리 목적이 달성되어 개인정보가 불필요하게 되었을 때는 지체 없이 해당 정보를 파기합니다.</li>
            </ul>

            <h3 className="font-bold mb-2">② 파기 절차</h3>
            <ul className="list-disc pl-5 mb-3">
              <li>개인정보는 수집 목적 달성 후 내부 방침 및 관련 법령에 따라 일정 기간 저장된 후 파기되거나 즉시 삭제됩니다.</li>
              <li>법령에 따른 보존 기간 동안에는 별도의 DB(종이 문서의 경우 별도 서류)로 분리하여 보관하며, 보존 목적 외의 다른 용도로는 사용하지 않습니다.</li>
            </ul>

            <h3 className="font-bold mb-2">③ 파기 방법</h3>
            <ul className="list-disc pl-5 mb-3">
              <li>전자적 파일 형태의 개인정보는 복구·재생이 불가능한 기술적 방법(영구 삭제, 디가우징 등)을 사용하여 파기합니다.</li>
              <li>종이 문서에 기록·출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          <section>
            <h2 className="text-lg font-bold mb-4">6. 개인정보의 안전성 확보조치</h2>
            <p className="mb-4">kt cloud TECH UP은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            
            <h3 className="font-bold mb-2">① 관리적 조치</h3>
            <ul className="list-disc pl-5 mb-3">
              <li>내부관리계획 수립 및 시행</li>
              <li>개인정보 접근 권한의 최소화 및 정기적 점검</li>
              <li>임직원 대상 개인정보 보호 교육 실시</li>
            </ul>

            <h3 className="font-bold mb-2">② 기술적 조치</h3>
            <ul className="list-disc pl-5 mb-3">
              <li>개인정보 암호화 저장(AES-256 등 안전한 알고리즘 적용)</li>
              <li>접속기록의 보관 및 위·변조 방지</li>
              <li>보안 프로그램 설치 및 주기적 갱신·점검</li>
              <li>네트워크 구간 전송 시 SSL/TLS 등 암호화 통신 적용</li>
            </ul>

            <h3 className="font-bold mb-2">③ 물리적 조치</h3>
            <ul className="list-disc pl-5 mb-3">
              <li>전산실, 자료보관실 등의 접근 통제</li>
              <li>문서 보관 시 잠금장치 적용</li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          <section>
            <h2 className="text-lg font-bold mb-4">7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h2>
            
            <h3 className="font-bold mb-2">① 쿠키(cookie) 등의 사용 목적</h3>
            <ul className="list-disc pl-5 mb-3">
              <li>이용자의 접속 빈도, 방문 시간 등을 분석하여 서비스 개선에 활용</li>
              <li>맞춤형 서비스 제공 및 보안 세션 유지</li>
            </ul>

            <h3 className="font-bold mb-2">② 쿠키 설치·운영 및 거부 방법</h3>
            <ul className="list-disc pl-5 mb-3">
              <li>이용자는 웹브라우저의 [도구] &gt; [인터넷 옵션] &gt; [개인정보] 메뉴에서 쿠키 저장을 거부할 수 있습니다.</li>
              <li>단, 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
