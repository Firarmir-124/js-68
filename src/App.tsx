import React from 'react';
import Todo from "./containers/Todo/Todo";
import {Box} from "@mui/material";

function App() {
  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Todo/>
    </Box>
  );
}

export default App;
