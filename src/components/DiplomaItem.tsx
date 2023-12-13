
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const DiplomaItem: React.FC = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      LIcence
        </Typography>
        <Typography variant="h5" component="div">
          2022
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Ecole
        </Typography>

      </CardContent>
    </Card>
  );
}

export default DiplomaItem;