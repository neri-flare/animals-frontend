import styled from "styled-components";

export const Styled = {
  MainContainer: styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background: rgb(249, 247, 243);
  `,
  Header: styled.h1`
    font-size: 48px;
    font-family: TomatoGroteskMedium sans-serif;
    line-height: 32px;
  `,
  HeaderContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-bottom: 32px;
  `,
  Section: styled.section`
    display: flex;
    gap: 64px;
  `,
  ResultsContainer: styled.div`
    box-shadow: 2px 5px 16px 0px #00000044;
    border-radius: 10px;
    padding: 28px;
    background: #fff;

    &:hover {
      background: rgb(210, 232, 150);
    }
  `,
  BoldText: styled.span`
    font-weight: 700;
  `,
};
