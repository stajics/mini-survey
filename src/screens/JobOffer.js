import React, { Component } from 'react';

class JobOffer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        jobOffer: '',
      };
    }

    render() {
      const { history } = this.props;
      const { jobOffer } = this.state;

      return (
        <div className="input-page --curent-job">
            <div className="input-page__title">
                <label className="text-bold">What job title were you offered?</label>
            </div>
            
            <input value={jobOffer} onChange={e => this.setState({ jobOffer: e.target.value })} />

            <div className="input-page__buttons">
              <label className="back-link text" onClick={() => history.goBack()}>Back</label>
              <button className="next-button" onClick={() => history.push(`/redirect?jobTitle=${jobOffer}`)}>Next</button>
            </div>
        </div>
      );
    }
  }
  
  export default JobOffer;