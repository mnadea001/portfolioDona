
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
    <Card sx={{ minWidth: 175, backgroundColor: '#333333' }}>
      <CardContent>
        <Typography component="div" sx={{ fontSize: 14 }} color="#D5FF3C">
        {data.diploma}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="white">
        {data.school}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="white">
        {data.year}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default DiplomaItem;