import React from "react";
import {
  Container,
  H1,
  Wrapper,
  PlanCard,
  Icon,
  H2,
  P,
  Price
} from "./TrainingPlansSectionElements";
import Icon1 from '../../images/svg3.svg'

const TrainingPlans = () => {
  return (
    <Container id="training-plans">
      <H1>Plany Treningowe</H1>
      <Wrapper>
        <PlanCard>
          <Icon src={Icon1} />
          <H2>Plan 1</H2>
          <P>X treningów</P>
          <Price>999 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon src={Icon1} />
          <H2>Plan 2</H2>
          <P>X treningów</P>
          <Price>999 zł</Price>
        </PlanCard>
        <PlanCard>
          <Icon src={Icon1} />
          <H2>Plan 3</H2>
          <P>X treningów</P>
          <Price>999 zł</Price>
        </PlanCard>
      </Wrapper>
    </Container>
  );
};

export default TrainingPlans;
