import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Modal from './Modal';
import { useState } from 'react';
import './ExperienceSection.css';
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
      <Card className='card' sx={{ display: 'flex', justifyContent: 'center'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            sx={{ flex: '1 0 auto', width: 200 }}
            src={imgSrc}
            alt={`Image for ${title}`}
          />
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'center', pl: 1, pb: 1 }}>
            <Button className='btn' onClick={handleOpenModal}>VIEW</Button>
          </Box>
        </Box>
      </Card>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        title={title}
        imgSrc={imgSrc}
        description={description}
        skills={skills}
      />
    </>
  );
};

export default ExperienceComponent;
