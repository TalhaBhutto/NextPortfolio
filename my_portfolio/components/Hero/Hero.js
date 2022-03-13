import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

function Hero(props) {
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            My name is Talha Hussain Bhutto. I am a Software Engineer working on
            web and mobile application development using MERN stack for more
            then a year.
          </SectionText>
          <Button onClick={props.handleClick}>Learn More</Button>
        </LeftSection>
      </Section>
    </>
  );
}

export default Hero;
