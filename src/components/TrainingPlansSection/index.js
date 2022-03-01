import React from "react";
import {
  Container,
  H1,
  Wrapper,
  PlanCard,
  PlanCard2,
  H2,
  H3,
  P,
  Price,
  Price2,
  Wrapper2,
} from "./TrainingPlansSectionElements";


const TrainingPlans = () => {
  return (
    <Container id="training-plans">
      <H1>Pakiety Treningowe</H1>
      <Wrapper>
        <PlanCard>
          <H2>Pakiet Gray</H2>
          <P>1 trening</P>
          <Price>150 zł</Price>
        </PlanCard>
        <PlanCard>
          <H2>Pakiet Bronze</H2>
          <P>6 treningów</P>
          <Price>750 zł</Price>
        </PlanCard>
        <PlanCard>
          <H2>Pakiet Silver</H2>
          <P>12 treningów</P>
          <Price>1400 zł</Price>
        </PlanCard>
        <PlanCard>
          <H2>Pakiet Gold</H2>
          <P>25 treningów</P>
          <Price>2750 zł</Price>
        </PlanCard>
        <PlanCard>
          <H2>Pakiet Diamond</H2>
          <P>50 treningów</P>
          <Price>5000 zł</Price>
        </PlanCard>
      </Wrapper>
      <br />
      <br />
      <br />
      <H1>Pozostałe Opcje</H1>
      <PlanCard2>
        <Wrapper2>
          <H3>Plan Treningowy (tydzień)</H3>
          <P>W pełni spersonalizowany tygodniowy plan</P>
          <Price2>150 zł</Price2>
          <H3>Plan Treningowy (miesiąc)</H3>
          <P>
            1 wspólny trening w tygodniu oraz układanie planów na pozostałe
            treningi
          </P>
          <Price2>600 zł</Price2>
          <H3>Porady Żywieniowe</H3>
          <P>Konsultacja + korekta</P>
          <Price2>150 zł</Price2>
        </Wrapper2>
      </PlanCard2>
    </Container>
  );
};

export default TrainingPlans;
