import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Text,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  buttonLabel,
  buttonRedirectId,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Text darkText={darkText}>
                  Troska o własne zdrowie i budowanie formy skłania coraz więcej
                  osób do szukania wsparcia u trenera personalnego. Co prawda
                  ten trend pojawił się w Polsce stosunkowo niedawno, jednak
                  dynamicznie się rozwija.
                  <br />
                  <br />
                  Swoją przygodę ze sportem zaczynałem ponad 20 lat temu. Sporty
                  zespołowe, jak wioślarstwo czy siatkówka w ostateczności
                  zostały wyparte przez siłownię, gdzie od początku do końca
                  mogłem kontrolować przebieg wydarzeń oraz progres włożonej w
                  budowanie sylwetki pracy. Od tego czasu przechodząc przez
                  kolejne szczeble kariery: instruktora, trenera, managera
                  klubów fitness, ostatecznie wybrałem formę indywidualnej pracy
                  z Podopiecznymi zakładając własną działalność gospodarczą i
                  stając się freelancerem nieograniczonym miejscem i czasem.
                </Text>
                <TopLine>
                  Kim jest Trener Personalny i na czym polega moja praca?
                </TopLine>
                <Text darkText={darkText}>
                  Praca trenera personalnego opiera się głównie na indywidualnej
                  formie współpracy z Klientem. Dobór treningu, a niekiedy także
                  diety – to jego główne zadania. Taki personalny instruktor
                  pełni także rolę motywatora, gdy jego podopiecznego dotknie
                  spadek wiary w sens dalszych treningów i wysiłku. Przyczyny
                  korzystania z usług trenera mogą mieć różne podłoża: chęć
                  utraty zbędnych kilogramów, wyrzeźbienie sylwetki lub dojście
                  do dawnej sprawności np. po ciąży czy po chorobie. Trener
                  personalny opracowuje plan ćwiczeń skrojony na miarę potrzeb
                  każdego klienta – musi wziąć pod uwagę takie czynniki jak
                  wiek, kontuzje czy dotychczasowa aktywność fizyczna. Nie bez
                  znaczenia pozostają także możliwości czasowe, jakie
                  podopieczny może faktycznie przeznaczyć na treningi. Do zadań
                  trenera personalnego należy także czuwanie nad właściwym
                  wykonywaniem ćwiczeń, aby uniknąć urazów.
                </Text>
                <TopLine>Doświadczenie i umiejętności</TopLine>
                <Text>
                  Dyplom z AWF-u wiąże się z wyposażeniem w solidne podstawy
                  przygotowujące do zawodu trenera personalnego, jednak nie jest
                  to warunek konieczny. Wiedzę zdobywałem również podczas
                  specjalistycznych kursów na trenera personalnego,
                  ukierunkowanych na przygotowanie do tego zawodu. Ich specyfika
                  jest z reguły nastawiona na pracę indywidualną z Klientem, jak
                  i na prowadzenie zajęć grupowych.
                  <br />
                  <br />Naturalne środowisko pracy to oczywiście siłownia i
                  klub fitness. Zdaję sobie sprawę, że w mojej profesji
                  szczególnie ważne są rekomendacje, dlatego podchodzę z troską
                  i zaangażowaniem do każdego Klienta. Komunikatywność i
                  otwartość na drugiego człowieka są w moim zawodzie podstawą, a
                  rekomendacje najlepszą formą marketingu.
                </Text>
                <BtnWrap>
                  <Button
                    to={buttonRedirectId}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 0 : 1}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
