import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import IconDown from '../assets/IconDown';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<IconDown />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
