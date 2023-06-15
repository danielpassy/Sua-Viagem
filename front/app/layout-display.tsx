import { Layouts } from '@/app/page';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

export default function LayoutDisplay({ layout }: { layout: Layouts }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {/* convert layout to string and display it */}
          {layout.toString()}
        </Typography>
        <Typography variant="h5" component="div">
          AASDSADAS
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
