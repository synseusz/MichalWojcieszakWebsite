import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Gradient } from "react-gradient";
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
import { useInView } from "react-intersection-observer";

const TrainingPlans = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const cardGradients = [
    ["#2687F4", "#3E47C4"],
    //["#3E47C4", "#2687F4"],
  ];

  const ironGradients = [
    //["#E4E1DF", "#E5E3E0"],
    //["#E5E3E0", "#503A36"],
    ["#E5E3E0", "#503A36"],
  ];
  const bronzeGradients = [
    //["#E6D4B8", "#6D4136"],
    ["#fff", "#fff"],
    //["#6D4136", "#E6D4B8"],
    //["#90644A", "#643331"],
  ];
  const silverGradients = [
    ["#B0C8C5", "#536769"],
    //["#536769", "#B0C8C5"]
  ];
  const goldGradients = [["#B07032", "#EDBF61"]];
  const diamondGradients = [["#CAFBFE", "#D8F3FF"]];

  return (
    <div ref={ref}>
      <Container id="training-plans">
        <H1 data-aos="fade-down" data-aos-duration="800">
          Pakiety Treningowe
        </H1>
        <Wrapper data-aos="fade" data-aos-duration="1000" data-aos-delay="800">
          <Gradient
            style={{ borderRadius: "10px" }}
            gradients={cardGradients}
            angle="45deg"
          >
            <PlanCard>
              <H2>Pakiet Iron</H2>
              <P>1 trening</P>
              <Gradient
                gradients={goldGradients}
                angle="180deg"
                property="text"
                duration={2000}
              >
                <Price>150 zł</Price>
              </Gradient>
            </PlanCard>
          </Gradient>
          <Gradient
            style={{ borderRadius: "10px" }}
            gradients={cardGradients}
            angle="45deg"
          >
            <PlanCard>
              <H2>Pakiet Bronze</H2>
              <P>6 treningów</P>
              <Gradient
                gradients={goldGradients}
                angle="180deg"
                property="text"
                duration={2000}
              >
                <Price>750 zł</Price>
              </Gradient>
            </PlanCard>
          </Gradient>
          <Gradient
            style={{ borderRadius: "10px" }}
            gradients={cardGradients}
            angle="45deg"
          >
            <PlanCard>
              <H2>Pakiet Silver</H2>
              <P>12 treningów</P>
              <Gradient
                gradients={goldGradients}
                angle="180deg"
                property="text"
                duration={2000}
              >
                <Price>1400 zł</Price>
              </Gradient>
            </PlanCard>
          </Gradient>
          <Gradient
            style={{ borderRadius: "10px" }}
            gradients={cardGradients}
            angle="45deg"
          >
            <PlanCard>
              <H2>Pakiet Gold</H2>
              <P>25 treningów</P>
              <Gradient
                gradients={goldGradients}
                angle="180deg"
                property="text"
                duration={2000}
              >
                <Price>2750 zł</Price>
              </Gradient>
            </PlanCard>
          </Gradient>
          <Gradient
            style={{ borderRadius: "10px" }}
            gradients={cardGradients}
            angle="45deg"
          >
            <PlanCard>
              <H2>Pakiet Diamond</H2>
              <P>50 treningów</P>
              <Gradient
                gradients={goldGradients}
                angle="180deg"
                property="text"
                duration={2000}
              >
                <Price>5000 zł</Price>
              </Gradient>
            </PlanCard>
          </Gradient>
        </Wrapper>
        <br />
        <br />
        <br />
        <H1 data-aos="fade-down" data-aos-duration="800" data-aos-delay="1100">
          Pozostałe Opcje
        </H1>
        <div data-aos="fade" data-aos-duration="1000" data-aos-delay="1500">
          <Gradient
            style={{ borderRadius: "10px" }}
            gradients={cardGradients}
            angle="45deg"
          >
            <PlanCard2>
              <Wrapper2>
                <H3>Plan Treningowy (tydzień)</H3>
                <P>W pełni spersonalizowany tygodniowy plan</P>
                <Gradient
                  gradients={goldGradients}
                  angle="180deg"
                  property="text"
                  duration={2000}
                >
                  <Price2>150 zł</Price2>
                </Gradient>
                <H3>Plan Treningowy (miesiąc)</H3>
                <P>
                  1 wspólny trening w tygodniu oraz układanie planów na
                  pozostałe treningi
                </P>
                <Gradient
                  gradients={goldGradients}
                  angle="180deg"
                  property="text"
                  duration={2000}
                >
                  <Price2>600 zł</Price2>
                </Gradient>
                <H3>Porady Żywieniowe</H3>
                <P>Konsultacja + korekta</P>
                <Gradient
                  gradients={goldGradients}
                  angle="180deg"
                  property="text"
                  duration={2000}
                >
                  <Price2>150 zł</Price2>
                </Gradient>
              </Wrapper2>
            </PlanCard2>
          </Gradient>
        </div>
      </Container>
    </div>
  );
};

export default TrainingPlans;
