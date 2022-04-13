import React, { Component } from "react";
import CurrentEntry from './CurrentEntry';
import BlankEntry from './BlankCurrentEntry';
import Button from '@mui/material/Button';
import OtherCurrentContainer from './otherCurrentContainer';

class CurrentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      view: true,
      submit: false,
      cancel: false,
<<<<<<< HEAD:client/components/current/CurrentContainer.jsx
      hidden: true,
    }
=======
      hidden: true
    };

>>>>>>> dev:client/components/CurrentContainer.jsx
    //bind functions
    this.addBook = this.addBook.bind(this);
    this.viewOtherCurrent = this.viewOtherCurrent.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  addBook(){
<<<<<<< HEAD:client/components/current/CurrentContainer.jsx
      this.setState({added: true})
=======
    this.setState({ added: true });
>>>>>>> dev:client/components/CurrentContainer.jsx
  }

  viewOtherCurrent(){
    if(this.state.hidden === true) this.setState({ hidden: false });
    else this.setState({ hidden: true });
  }

  handleCancel(e){
    e.preventDefault();
    this.setState({added: false});
  }

  render () {
    const { current, past, future, otherCurrent, otherPast, otherFuture, addBookFetch } = this.props;
    const { hidden } = this.state;
    const currentEntries = [];

    if(this.state.submit === true){
      currentEntries.push(
        <CurrentEntry handleSubmit={this.handleSubmit} />
      )
      this.state.addBook = false;
    }
    if(this.state.added === true) {
      currentEntries.push(
        <BlankEntry handleCancel={this.handleCancel} addBookFetch={addBookFetch} />
      ) 
    }
    for(let i=0; i<this.props.current.length; i++){
      currentEntries.push(
        <CurrentEntry key={this.props.current[i].readinglistid}
          title={this.props.current[i].title}
          author={this.props.current[i].author}
          genre={this.props.current[i].genre}
        />
      );
    }
    return (
        <div className="currentContainer" id="currentCon">
          <h2>CURRENT READS</h2>
          <Button onClick= {this.addBook} className='addBooksButton' id= 'addButton' size="small" color="secondary" variant="contained">Add Book</Button>
          { currentEntries }
           <div>
             <Button onClick={this.viewOtherCurrent} id='viewOtherCurrent' size="small" color="secondary" variant="contained"> + What My Friends Are Reading</Button>
           </div >
           <div style={{ display: hidden ? "none" : "contents" }}>
             <OtherCurrentContainer 
                otherCurrent={this.props.otherCurrent}
            />
          </div>
        </div>
    )
   } 
 }

export default CurrentContainer;