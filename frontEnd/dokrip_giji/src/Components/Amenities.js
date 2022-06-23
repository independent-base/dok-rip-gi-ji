import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Amenities({ list }) {
  return (
    <Container>
      <SAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{list}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>옵션들</Typography>
        </AccordionDetails>
      </SAccordion>
    </Container>
  );
}

export default Amenities;

const Container = styled.div`
  display: flex;
  //justify-content: center;
  //align-items: center;
`;

const SAccordion = styled(Accordion)`
  && {
    width: 150px;
    height: 50px;
  }
`;
