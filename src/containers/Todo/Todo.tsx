import React from 'react';
import {Box, Paper} from "@mui/material";
import Form from "../../components/Form/Form";


const Todo = () => {

  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: '#42a5f5',
        width: 600,
        height: 600,
        borderRadius: 3
    }}
    >
      <Form/>

      <Box sx={{mt: 5, mx: 2,
        overflowY: 'scroll',
        height: 460,
        '&::-webkit-scrollbar': {width: 0}}
      }>

      </Box>

    </Paper>
  );
};

export default Todo;