import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

function Technologies() {
  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I&apos;ve worked with a range a technologies in the web development
        world.
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiece with <br />
              ReactJS , html , css ,  
               <br />
              NextTS , ReactTS , Redux ,
              <br />
              Material UI , stripe , ReactNative ,
              <br />
              Web sockets , Google maps , DnD etc
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              NodeJS , Express , MongoDB ,
              <br />
              GraphQL , DGraph , Jest ,
              <br />
              Multer , JWT , Nodemailer , etc
              <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </Section>
  );
}

export default Technologies;
