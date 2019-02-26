import React, { Component } from 'react';
import Button from '../components/Button';

class Home extends Component {
    render() {
      const { history } = this.props;
      return (
        <div className="home">
            <div className="home__title">
                <label className="text-bold">Find your market worth - get a</label>
                <label className="text-bold">personalized salary report</label>
            </div>
            
            <label className="text">Choose and option that fits your situation</label>

            <div className="home__buttons">
              <Button
                iconSrc="https://cdn-payscale.com/content/choose-page-icon-currentjob.png"
                text="Current Job"
                onClick={() => history.push('/current-job?profileType=currentJob')}
              />
              <Button
                iconSrc="https://cdn-payscale.com/content/choose-page-icon-joboffer.png"
                text="Job Offer"
                onClick={() => history.push('/job-offer?profileType=jobOffer')}
              />
              <Button
                iconSrc="https://cdn-payscale.com/content/choose-page-icon-whatif.png"
                text="Research"
                onClick={() => history.push('/research?profileType=informational')}
              />
            </div>

            <label className="text --blue">Employer: Price a Job</label>
        </div>
      );
    }
  }
  
  export default Home;