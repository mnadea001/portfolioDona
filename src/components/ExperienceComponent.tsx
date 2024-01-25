import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Modal from './Modal';
import { useState } from 'react';
import './ExperienceSection.css';
import { Typography } from '@mui/material';
interface ExperienceComponentProps {
  imgSrc: string;
  title: string;
  description: string;
  images: string[];
  skills: string[];
  context: string,
  date: string,
  position: string,
  expImg: string
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ imgSrc, title, description, skills, context, date, position, expImg, images }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card className='card' sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardMedia
            component="img"
            sx={{ flex: '1 0 auto', width: 200 }}
            src={imgSrc}
            alt={`Image for ${title}`}
          />
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1 }}>
            <Button className='btnVoir' onClick={handleOpenModal}>voir</Button>
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
        context={context}
        date={date}
        position={position}
        expImg={expImg}
        images={images}
      />
    </>
  );
};

export default ExperienceComponent;
