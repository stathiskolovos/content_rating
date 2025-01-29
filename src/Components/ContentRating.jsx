
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings:0,

      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },

      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    };
  }
  render() {
    return (
      <div className='content-rating'>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library
          that aims to make building user interfaces based on components more "seamless".
          It is maintained by Meta (formerly Facebook) and a community of individual developers and companies
        </p>
        <div className='rating-buttons'>
          <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </div>
    );
  }
}

export default ContentRating;
