import React, { Component } from 'react';

class Research extends Component {
    constructor(props) {
      super(props);

      this.state = {
        research: '',
      };
    }

    render() {
      const { history } = this.props;
      const { research } = this.state;

      return (
        <div className="input-page --curent-job">
            <div className="input-page__title">
                <label className="text-bold">What job title would you like to research?</label>
            </div>
            
            <input value={research} onChange={e => this.setState({ research: e.target.value })} />

            <div className="input-page__buttons">
              <label className="back-link text" onClick={() => history.goBack()}>Back</label>
              <button className="next-button" onClick={() => history.push(`/redirect?jobTitle=${research}`)}>Next</button>
            </div>
        </div>
      );
    }
  }
  
  export default Research;