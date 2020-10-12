/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  handleClickLesson() {
    this.setState({ isModalOpen: true });
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-header" />
            <div className="modal-introduction">
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => {
                this.handleClickClose();
              }}
            >
              Close
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="lesson-card">
        <div
          className="lesson-item"
          onClick={() => {
            this.handleClickLesson();
          }}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;
