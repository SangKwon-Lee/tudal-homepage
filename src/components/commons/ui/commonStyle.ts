import styled from "@emotion/styled";

export const Body = styled.div`
  @media (max-width: 600px) {
    padding: 30px 10px 30px 10px;
  }
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.02);
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s;
`;

export const Contents = styled.section`
  display: flex;
  background-color: white;
  max-width: 592px;
  width: 100%;
  padding: 30px;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 10px;
  transition: 0.7s;
  overflow: hidden;
`;

export const Title = styled.h3`
  @media (max-width: 600px) {
    font-size: 16px;
  }
  display: flex;
  align-items: center;
`;
