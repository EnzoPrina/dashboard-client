import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';

export const Budget = (props) => (
  <Card
    sx={{ height: '100%', backgroundColor: '#2D3748', color: '#fff'}}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            /* color="textSecondary" */ // saque el color de fuente, para que sea blanca por defecto
            gutterBottom
            variant="overline"
          >
            PRESUPUESTO
          </Typography>
          <Typography
            /* color="textPrimary" */
            variant="h4"
          >
            $30K
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          2%
        </Typography>
        <Typography
         /*  color="textSecondary" */
          variant="caption"
        >

Desde el mes pasado
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
