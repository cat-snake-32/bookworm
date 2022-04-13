import React, { Component } from "react";
// import { useState } from 'react';
// import OtherCurrentContainer from './OtherCurrentContainer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import InputAdornment from '@mui/material/InputAdornment';
// import Button from '@mui/material/Button';

class CurrentEntry extends Component {
  constructor(props) {
    super(props);
  }

render() {
  return (
    <Box
      component="form"
      // sx={{
      //   '& .MuiTextField-root': { m: 1, width: '25ch' },
      // }}
      noValidate
      autoComplete="off"
    >
    <div>
      <TextField
          id="outlined-read-only-input"
          label="Title: "
          sx={{ m: 1, width: '25ch' }}
          defaultValue={this.props.title}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Author: "
          sx={{ m: 1, width: '23ch' }}
          defaultValue={this.props.author}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Genre: "
          sx={{ m: 1, width: '23ch' }}
          defaultValue={this.props.genre}
          InputProps={{
            readOnly: true,
          }}
        />
    </div>
    </Box>
  )
}
}

export default CurrentEntry;