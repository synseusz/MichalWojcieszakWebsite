import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";
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
  IFrame,
  IFrameContainer,
} from "./InfoElements";
import { useInView } from "react-intersection-observer";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  img,
  alt,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      <Helmet>
        <title>O mnie</title>
        <meta
          name="description"
          content="Najwazniejsze informacje o mnie oraz moim doswiadczeniu"
        />
        <link rel="cannonical" href="/o_mnie" />
      </Helmet>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine data-aos="fade-right" data-aos-duration="800">
                  {topLine}
                </TopLine>
                <Heading
                  lightText={lightText}
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  {headline}
                </Heading>
                <Text
                  darkText={darkText}
                  data-aos="fade"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
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
                <TopLine data-aos="fade-right" data-aos-duration="800">
                  Kim jest Trener Personalny i na czym polega moja praca?
                </TopLine>
                <Text
                  darkText={darkText}
                  data-aos="fade"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
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
                <TopLine data-aos="fade-right" data-aos-duration="800">
                  Doświadczenie i umiejętności
                </TopLine>
                <Text
                  data-aos="fade"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  Dyplom z AWF-u wiąże się z wyposażeniem w solidne podstawy
                  przygotowujące do zawodu trenera personalnego, jednak nie jest
                  to warunek konieczny. Wiedzę zdobywałem również podczas
                  specjalistycznych kursów na trenera personalnego,
                  ukierunkowanych na przygotowanie do tego zawodu. Ich specyfika
                  jest z reguły nastawiona na pracę indywidualną z Klientem, jak
                  i na prowadzenie zajęć grupowych.
                  <br />
                  <br />
                  Naturalne środowisko pracy to oczywiście siłownia i klub
                  fitness. Zdaję sobie sprawę, że w mojej profesji szczególnie
                  ważne są rekomendacje, dlatego podchodzę z troską i
                  zaangażowaniem do każdego Klienta. Komunikatywność i otwartość
                  na drugiego człowieka są w moim zawodzie podstawą, a
                  rekomendacje najlepszą formą marketingu.
                </Text>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap
                data-aos="fade"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <IFrameContainer>
            <IFrame
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrener.michal.wojcieszak%2Fphotos%2Fa.906223889465662%2F927044647383586%2F%3Ftype%3D3&show_text=true&width=500&colorscheme=dark"
              width="500"
              height="583"
              style={{ border:"none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              colorscheme="dark"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              data-hide-cover="false"
            >
            </IFrame>
            {/*<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrener.michal.wojcieszak%2Fphotos%2Fa.906223889465662%2F927044647383586%2F%3Ftype%3D3&show_text=true&width=500" width="500" height="583" style={{border:"none",overflow:"hidden", color:"white"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />*/}
          </IFrameContainer>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

export default InfoSection;
