import React, { Component } from 'react';

class Redirect extends Component {

    componentDidMount() {
      this.timeOut = setTimeout(() => {
        // window.location = 'https://web.ci.consumer.underpaid.com/wizards/choose.aspx';
      }, 5000);
    }

    componentWillUnmount() {
      clearTimeout(this.timeOut);
    }

    render() {
      return (
        <div className="redirect">
            <div className="redirect__title">
                <label className="text-bold">You're one step closer to a free report!</label>
            </div>
            
            
            <div className="redirect__content">
              <img className="redirect__content__icon" src="https://cdn-payscale.com/content/vwo/schwingy-market-worth-graphic%402x.png" alt="" />
              
              <div className="redirect__content__right">
                <label className="text">Hold tight while we</label>
                <label className="text">redirect you...</label>
                <i className="fas fa-sync-alt fa-spin text"></i>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default Redirect;