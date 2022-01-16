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
  Price2,
  Wrapper2,
} from "./TrainingPlansSectionElements";
/*import WhitePlanIcon from "../../images/plan_white.svg";
import BronzePlanIcon from "../../images/plan_bronze.svg";
import SilverPlanIcon from "../../images/plan_silver.svg";
import GoldPlanIcon from "../../images/plan_gold.svg";
import DiamondPlanIcon from "../../images/plan_diamond.svg";*/

const TrainingPlans = () => {
  return (
    <Container id="training-plans">
      <H1>Pakiety Treningowe</H1>
      <Wrapper>
        <PlanCard>
          <Icon style={{color: 'black'}}/>
          <H2>Pakiet Black</H2>
          <P>1 trening</P>
          <Price>150 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon style={{color: 'brown'}} />
          <H2>Pakiet Bronze</H2>
          <P>6 treningów</P>
          <Price>750 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon style={{color: 'silver'}} />
          <H2>Pakiet Silver</H2>
          <P>12 treningów</P>
          <Price>1400 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon style={{color: 'gold'}} />
          <H2>Pakiet Gold</H2>
          <P>25 treningów</P>
          <Price>2750 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon style={{color: '#b9f2ff'}} />
          <H2>Pakiet Diamond</H2>
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
          <H2>Plan Treningowy (tydzień)</H2>
          <P>W pełni spersonalizowany tygodniowy plan</P>
          <Price2>150 zł</Price2>
          <H2>Plan Treningowy (miesiąc)</H2>
          <P>
            1 wspólny trening w tygodniu oraz układanie planów na pozostałe
            treningi
          </P>
          <Price2>600 zł</Price2>
          <H2>Porady Żywieniowe</H2>
          <P>Konsultacja + korekta</P>
          <Price2>150 zł</Price2>
        </Wrapper2>
      </PlanCard>
    </Container>
  );
};

export default TrainingPlans;
