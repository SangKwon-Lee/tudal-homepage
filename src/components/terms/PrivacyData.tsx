import styled from "@emotion/styled";

const TermsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TermsBody = styled.div`
  @media (min-width: 680px) {
    width: 1200px;
  }
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
`;

const TermsTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 15px;
`;

const TermsSubTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 15px;
`;

const TermsText = styled.div`
  font-size: 15px;
  padding-bottom: 20px;
`;

const TermsTable = styled.table`
  border: 1px solid #444444;
  border-collapse: collapse;
`;

const TermsTh = styled.th`
  border: 1px solid #444444;
  padding: 10px;
  width: 25%;
  font-size: 15px;
`;
const TermsTd = styled.td`
  border: 1px solid #444444;
  padding: 20px;
  width: 25%;
  text-align: start;
  vertical-align: top;
  font-size: 15px;
`;

const PrivacyDataContainer = () => {
  return (
    <TermsWrapper>
      <TermsBody>
        <TermsTitle>개인정보 수집 및 이용</TermsTitle>
        <TermsText>
          이노핀(이하 “회사”)은 귀사의 투자의달인 “모바일 어플리케이션”(이하
          “서비스”)이용과 관련하여 귀사가 본인의 개인정보를 처리하는 경우에는
          「개인정보 보호법」, 「정보통신망 이용 촉진 및 정보보호 등에 관한
          법률」, 「신용정보법」에 따라 본인의 동의가 필요합니다. 다음 개인정보
          처리에 관한 동의는 본 서비스 이용을 위하여 필수적이므로, 위 사항에
          동의하셔야만 본 서비스 이용이 가능합니다. 이에 귀사가 아래와 같이
          본인의 개인정보를 처리하는 것에 동의합니다.
        </TermsText>
        <TermsSubTitle>1. 개인정보 수집 항목 및 이용 목적</TermsSubTitle>
        <TermsTable>
          <thead>
            <tr>
              <TermsTh>수집 항목</TermsTh>
              <TermsTh>이용 목적</TermsTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TermsTd>
                이용자의 성명, 성별, 생년월일, 이동통신사, 휴대전화번호, 본인
                인증시 수집되는 연계정보(CI)/중복확인정보(DI) 값, 닉네임 등 회원
                본인 확인을 위해 필요한 개인식별정보
              </TermsTd>
              <TermsTd>
                본인 확인/인증, 회원가입 및 회원정보 관리 서비스 관련 공지사항
                전달 및 제공안내, 고객만족도 조사, 서비스 이용에 따른 민원 처리
                서비스 이용현황 통계분석 및 활용, 모니터링, 부정이용
              </TermsTd>
            </tr>
            <tr>
              <TermsTd>
                카드사/은행사/보험사/증권사등의 금융사 또는 국세청 ID/비밀번호,
                공인인증서 비밀번호 입력을 통해 수집하는 회원 보유 금융상품
                정보(금융사, 금융상품명, 수시입출금/대출/보험/펀드등의 금융상품
                종류, 계좌번호, 신용/체크카드 번호) 및 신용정보, 계좌 잔액,
                입출금내역, 카드 결제 내역, 구매품목정보, 카드 이용한도,
                단기카드대출 이용 내역 및 한도, 카드론 이용 내역 및 한도, 보유
                포인트 내역, 대출 정보 등의 회원 금융 거래 정보
              </TermsTd>
              <TermsTd>
                보유 계좌 기반 거래내역 정보 분석 및 관리 보유 상품/종목 분석을
                통한 진단 및 관리 맞춤형 상품 추천 기타 고객에게 유익하다고
                판단되는 정보 및 서비스 제공
              </TermsTd>
            </tr>
          </tbody>
        </TermsTable>
        <br />
        <TermsSubTitle>2. 개인정보의 보유 및 이용 기간</TermsSubTitle>
        <TermsText>
          이용자의 개인정보는 회원 탈퇴 후 1년간 보관 후 파기합니다. 단,
          부정이용자에 대한 기록은 10년간 보관하며, 법령에서 일정 기간 동안
          보유할 의무를 부과한 경우 에는 해당 기간 동안 보유합니다.
          <br />
          *본인은 동의를 거부할 권리가 있으며, 동의하지 않으실 경우 서비스를
          이용하실 수 없습니다.
        </TermsText>
      </TermsBody>
    </TermsWrapper>
  );
};

export default PrivacyDataContainer;
