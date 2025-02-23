import React, { Component } from "react";
// import { useState } from 'react';
// import OtherCurrentContainer from './OtherCurrentContainer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


// Since this is stateless, we don't need a constructor.
class PastEntry extends Component {
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
      {/* <h3>title: {this.props.title }</h3>
      <h3>author: {this.props.author}</h3>
      <h3>genre: {this.props.genre} </h3> */}
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
        <TextField
          id="outlined-read-only-input"
          label="Recommendation: "
          sx={{ m: 1, width: '20ch' }}
          defaultValue={this.props.recommend}
          InputProps={{
            readOnly: true,
          }}
        />
         <TextField
          id="outlined-read-only-input"
          label="Review: "
          sx={{ m: 1, width: '50ch' }}
          multiline
          maxRows= {4}
          defaultValue={this.props.review}
          InputProps={{
            readOnly: true,
          }}
        />
    </div>
    </Box>
  )
}
}

export default PastEntry;