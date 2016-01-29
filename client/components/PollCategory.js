import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class PollCategory extends React.Component {
  constructor(){
    super();
    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(e){
    const { sendPollChoices, updatePoll } = this.props.pollActions;
    const { username } = this.props;
    let selected, unselected;

    if (e.target.alt === 'choice1') {
      selected = this.props.businesses[0].categories;
      unselected = this.props.businesses[1].categories;
    } else if (e.target.alt === 'choice2') {
      selected = this.props.businesses[1].categories;
      unselected = this.props.businesses[0].categories;
    }

    const response = {
      selected: selected,
      unselected: unselected,
      username: username
    }

    sendPollChoices(response);
    updatePoll(this.props.businesses, username);
  }

  render(){
    console.log('this.props in pollcat', this.props);
    let poll = this.props.businesses.length > 0 ? (
        <div>
          <img
            src={this.props.businesses[0].image_url}
            alt='choice1'
            height='500px'
            width='500px'
            onClick={this.selectImage} />
          <img
          src={this.props.businesses[1].image_url}
          alt='choice2'
          height='500px'
          width='500px'
          onClick={this.selectImage} />
        </div>
      ) : null;

    return (
      <div>
        {poll}
      </div>
    )
  }
}

export default PollCategory;
