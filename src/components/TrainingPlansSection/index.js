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
  P,
  Price,
  Wrapper2,
} from "./TrainingPlansSectionElements";
import { useInView } from "react-intersection-observer";

const TrainingPlans = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { ref } = useInView({
    threshold: 0.2,
  });

  const cardGradients = [
    ["#2687F4", "#3E47C4"],
    //["#3E47C4", "#2687F4"],
  ];

  const goldGradients = [
    ["#B07032", "#EDBF61"],
    ["#FBF295", "#BC8B3D"],
    ["#BC8B3D", "#FBF295"],
  ];

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
                angle="45deg"
                property="text"
                duration={1000}
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
                angle="45deg"
                property="text"
                duration={1000}
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
                angle="45deg"
                property="text"
                duration={1000}
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
                angle="45deg"
                property="text"
                duration={1000}
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
                angle="45deg"
                property="text"
                duration={1000}
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
          <Wrapper2>
            <Gradient
              style={{ borderRadius: "10px" }}
              gradients={cardGradients}
              angle="45deg"
            >
              <PlanCard2>
                <H2>Plan Treningowy (tydzień)</H2>
                <P>W pełni spersonalizowany tygodniowy plan</P>
                <Gradient
                  gradients={goldGradients}
                  angle="45deg"
                  property="text"
                  duration={1000}
                >
                  <Price>150 zł</Price>
                </Gradient>
              </PlanCard2>
            </Gradient>
            <Gradient
              style={{ borderRadius: "10px" }}
              gradients={cardGradients}
              angle="45deg"
            >
              <PlanCard2>
                <H2>Plan Treningowy (miesiąc)</H2>
                <P>
                  1 wspólny trening w tygodniu oraz układanie planów na
                  pozostałe treningi
                </P>
                <Gradient
                  gradients={goldGradients}
                  angle="45deg"
                  property="text"
                  duration={1000}
                >
                  <Price>600 zł</Price>
                </Gradient>
              </PlanCard2>
            </Gradient>
            <Gradient
              style={{ borderRadius: "10px" }}
              gradients={cardGradients}
              angle="45deg"
            >
              <PlanCard2>
                <H2>Porady Żywieniowe</H2>
                <P>Konsultacja + korekta</P>
                <Gradient
                  gradients={goldGradients}
                  angle="45deg"
                  property="text"
                  duration={1000}
                >
                  <Price>150 zł</Price>
                </Gradient>
              </PlanCard2>
            </Gradient>
          </Wrapper2>
        </div>
      </Container>
    </div>
  );
};

export default TrainingPlans;
