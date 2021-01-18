
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';

class DetailsPage extends Component {
  state = {
    detData: ''
  }

  componentDidMount() {
    this.getPropsData();

  }

  async getPropsData() {
    let propData = await this.props.location.linkState;
    let localStorageData;
    if (propData == undefined) {
      localStorageData = localStorage.getItem('newsValue');
      this.setState({
        detData: JSON.parse(localStorageData)
      })

    }

    if (propData) {
      localStorage.setItem('newsValue', JSON.stringify(propData));
      this.setState({
        detData: propData
      });
    }

    // console.log(this.state.detData.multimedia.length > 0, this.state.detData.multimedia[16].url)



  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="news-block-main">
              <div className="news-image-hero">

                {(this.state.detData && this.state.detData.multimedia.length > 0) ? (<img src={`http://nytimes.com/${this.state.detData.multimedia[1].url}`} />) : ''}

              </div >
              <div className="news-content-section">

                {(this.state.detData) ? (
                  <div>
                    <h1>{this.state.detData.headline.main}</h1>
                    <h2>{this.state.detData.abstract}</h2>
                    <p>{this.state.detData.lead_paragraph}</p>
                  </div>
                ) : ''}

              </div>
            </div >
          </div >
        </div >

      </div >
    )
  }
}

const mapStateToProps = (state => {
  return state;
});
export default connect(mapStateToProps, null)(DetailsPage);
