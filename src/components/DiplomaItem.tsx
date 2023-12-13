
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface DiplomaItemProps {
    data: {
      school: string;
      diploma: string;
      year: string;
    };
  }

const DiplomaItem: React.FC<DiplomaItemProps> = ({ data }) => {
  return (
    <Card variant="outlined" sx={{ width: 450, backgroundColor: '#333333', margin: 'auto', marginTop: 2,   boxShadow: '10px 10px #D5FF3C' }}>
      <CardContent>
        <Typography component="div" sx={{ fontSize: 18 }} color="#D5FF3C">
        {data.diploma}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="white">
        {data.school}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="white">
        {data.year}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default DiplomaItem;