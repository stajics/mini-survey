import React, { Component } from 'react';

class CurrentJob extends Component {
    constructor(props) {
      super(props);

      this.state = {
        jobTitle: '',
      };
    }

    render() {
      const { history } = this.props;
      const { jobTitle } = this.state;

      return (
        <div className="input-page --curent-job">
            <div className="input-page__title">
                <label className="text-bold">What is your job title?</label>
            </div>
            
            <input value={jobTitle} onChange={e => this.setState({ jobTitle: e.target.value })} />

            <div className="input-page__buttons">
              <label className="back-link text" onClick={() => history.goBack()}>Back</label>
              <button className="next-button" onClick={() => history.push(`/redirect?jobTitle=${jobTitle}`)}>Next</button>
            </div>
        </div>
      );
    }
  }
  
  export default CurrentJob;