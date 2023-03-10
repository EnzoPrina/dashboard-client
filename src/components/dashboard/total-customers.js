import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const TotalCustomers = (props) => (
  <Card {...props}
  sx={{ backgroundColor: '#2D3748', color:'#fff'}}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            /* color="textSecondary" */
            gutterBottom
            variant="overline"
          >
            TOTAL CLIENTES

          </Typography>
          <Typography
            /* color="textPrimary" */
            variant="h4"
          >
            45
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          6%
        </Typography>
        <Typography
          /* color="textSecondary" */
          variant="caption"
        >
          Desde el mes pasado
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
