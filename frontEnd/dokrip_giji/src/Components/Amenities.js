import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Amenities({ img, option }) {
  return (
    <>
      <SAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>업종 이미지</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>옵션들</Typography>
        </AccordionDetails>
      </SAccordion>
    </>
  );
}

export default Amenities;

const SAccordion = styled(Accordion)`
  && {
    width: 150px;
    height: 50px;
  }
`;
