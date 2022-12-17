import React from 'react';
import {Box, Checkbox, IconButton, Paper, Typography} from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import {Task} from "../../types";

interface Props {
  task: Task;
}


const TaskItem:React.FC<Props> = ({task}) => {
  return (
    <Paper
      elevation={3}
      sx={{py: 3, pl: 1, mb: 3,
        backgroundColor: '#ff6767',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography component='h3' variant='h5' sx={{color: '#fff' }} >{task.title}</Typography>
      <Box>
        <IconButton aria-label="delete">
          <DeleteIcon sx={{fontSize: 28, color: '#fff'}} />
        </IconButton>
        <Checkbox
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#fff' }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{color: '#fff'}}/>}
        />
      </Box>
    </Paper>
  );
};

export default TaskItem;