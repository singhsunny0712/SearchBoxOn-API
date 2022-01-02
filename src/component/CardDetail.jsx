import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard({cardData}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           {cardData.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {cardData.artist.name}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151,marginLeft:8 }}
        src="data:image/png;base64,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"
        alt="Live from space album cover"
      />
    </Card>
  );
}
