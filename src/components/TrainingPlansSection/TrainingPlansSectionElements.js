import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1300px) {
    height: 100%;
  }
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;
export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const PlanCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 350px;
  min-width: 230px;
  padding: 30px;
  box-shadow: 0 1px 3px #f9f9f9;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const Icon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const H1 = styled.h1`
  font-size: 2.5rem;
  color: #f9f9f9;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const H2 = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 20px;
  text-align: center;
`;
export const P = styled.p`
  font-size: 1rem;
  text-align: center;
`;
export const Price = styled.h2`
  font-size: 1.5rem;
  margin-top: 30px;
  color: #0195fe;
`;
export const PlanCard2 = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 350px;
  min-width: 230px;
  padding: 30px;
  box-shadow: 0 1px 3px #f9f9f9;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    padding-left: auto;
    padding-right: auto;
  }
  @media screen and (max-width: 480px) {
    transform: scale(0.9);
    width: 90vw;
    padding: 0
  }
`;
export const Wrapper2 = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  align-self: center;
  text-align: center;
  grid-gap: 16px;

  @media screen and (max-width: 480px) {
    transform: scale(0.9);
  }
`;
export const H3 = styled.h2`
  font-size: 1.2rem;
  text-align: center;
`;
export const Price2 = styled.h2`
  font-size: 1.5rem;
  color: #0195fe;
`;
