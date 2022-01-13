import React from "react";
import {
  Container,
  H1,
  Wrapper,
  PlanCard,
  Icon,
  H2,
  P,
  Price,
  Wrapper2,
} from "./TrainingPlansSectionElements";
import WhitePlanIcon from "../../images/plan_white.svg";
import BronzePlanIcon from "../../images/plan_bronze.svg";
import SilverPlanIcon from "../../images/plan_silver.svg";
import GoldPlanIcon from "../../images/plan_gold.svg";
import DiamondPlanIcon from "../../images/plan_diamond.svg";

const TrainingPlans = () => {
  return (
    <Container id="training-plans">
      <H1>Plany Treningowe</H1>
      <Wrapper>
        <PlanCard>
          <Icon src={WhitePlanIcon} />
          <H2>Plan White</H2>
          <P>1 trening</P>
          <Price>150 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon src={BronzePlanIcon} />
          <H2>Plan Bronze</H2>
          <P>6 treningów</P>
          <Price>750 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon src={SilverPlanIcon} />
          <H2>Plan Silver</H2>
          <P>12 treningów</P>
          <Price>1400 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon src={GoldPlanIcon} />
          <H2>Plan Gold</H2>
          <P>25 treningów</P>
          <Price>2750 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon src={DiamondPlanIcon} />
          <H2>Plan Diamond</H2>
          <P>50 treningów</P>
          <Price>5000 zł</Price>
        </PlanCard>
      </Wrapper>
      <br />
      <br />
      <br />
      <H1>Pozostałe Opcje</H1>
      <PlanCard>
        <Wrapper2>
          <H2>Plan Treningowy</H2>
          <P>X treningów</P>
          <Price>150 zł</Price>
          <H2>Plan Treningowy (miesiąc)</H2>
          <P>
            1 wspólny trening w tygodniu oraz układanie planów na pozostałe
            treningi
          </P>
          <Price>600 zł</Price>
          <H2>Porady Żywieniowe</H2>
          <P>Konsultacja + korekta</P>
          <Price>150 zł</Price>
        </Wrapper2>
      </PlanCard>
    </Container>
  );
};

export default TrainingPlans;
