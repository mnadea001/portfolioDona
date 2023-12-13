import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface ExperienceComponentProps {
  imgSrc: string;
  title: string;
  description: string;
  skills: string[];
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ imgSrc, title, description, skills }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            Skills: {skills.join(', ')}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        src={imgSrc}
        alt={`Image for ${title}`}
      />
    </Card>
  );
};

export default ExperienceComponent;
