import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 28px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 14px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 660px) {
    align-items: flex-start;
  }
`;

const Index = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>My Educational Journey</Title>
        <Desc>
          Education has been a significant part of my life. Here's a glimpse of my academic journey.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={edu} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Index;
