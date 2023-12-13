import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from './Modal';
import { useState } from 'react';

interface ExperienceComponentProps {
  imgSrc: string;
  title: string;
  description: string;
  skills: string[];
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ imgSrc, title, description, skills }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button onClick={handleOpenModal}>View Details</Button>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          src={imgSrc}
          alt={`Image for ${title}`}
        />
      </Card>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        title={title}
        description={description}
        skills={skills}
      />
    </>
  );
};

export default ExperienceComponent;
