import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import { GET_NEWS_HEADINGS } from '../../../redux/actionTypes/index';
import { get_news_headings, get_features_news_headings, removeLocalStorage } from '../../../redux/actions/index'
import FeaturedNews from '../FeaturedNews/FeaturedNews';
import LatestNews from '../LatestNews/LatestNews';
require('dotenv').config();

class Home extends Component {
  constructor(props) {
    super(props)
    this.fNewsisReady = this.fNewsisReady.bind(this);
    this.LNewsisReady = this.LNewsisReady.bind(this);
  }
  state = {
    fNews: false,
    lNews: false
  }
  componentDidMount() {

    // console.log(db, "db")
    if (localStorage.getItem('refreshTime') == "0" || localStorage.getItem('refreshTime') == null) {
      localStorage.getItem('refreshTime', 0)
      this.props.get_features_headingsFn(this.fNewsisReady);
      this.props.get_news_headingsFn(this.LNewsisReady);

    }

    if (localStorage.getItem('refreshTime') == "1") {
      this.props.get_Local_news_headingsFn(this.LNewsisReady);
      this.props.get_local_features_headingsFn(this.fNewsisReady);
      this.setState({
        fNews: true,
        lNews: true
      })
    }


    //Refresh the news in time a interval
    setInterval(() => {
      removeLocalStorage(); // From action
      localStorage.setItem('refreshTime', 0)

    }, 60000)
  }

  //Component condition
  fNewsisReady() {
    localStorage.setItem('refreshTime', 1)
    this.setState({
      fNews: true // Featured news

    })
  }

  //Component condition
  LNewsisReady() {
    localStorage.setItem('refreshTime', 1)
    this.setState({
      lNews: true //Latest news
    })
  }
  render() {
    return (
      <div>
        <div className="main-container">
          {(!this.state.fNews || !this.state.lNews) ? (<div className="loader-wrapper-body"><div className="loader"></div></div>) : ''}
          {(this.state.fNews) ? (<FeaturedNews />) : ''}
          {(this.state.lNews) ? (<LatestNews />) : ''}
        </div>
        <div className="custom-footer">
          <div>
            Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          </div>
          <div>

            Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          </div>
        </div>
      </div>
    )
  }
}


Home.propTypes = {};

Home.defaultProps = {};

//Fetching datas from here.
const mapStateToProps = (state => {
  return state;
});

//Dispatch actions here.
const mapDispatchToProps = (dispatch) => {
  return {
    get_news_headingsFn: (LNewsisReady) => dispatch(get_news_headings(LNewsisReady)), //Get news headings
    get_features_headingsFn: (fNewsisReady) => dispatch(get_features_news_headings(fNewsisReady)), //Get featured news here
    get_Local_news_headingsFn: (LNewsisReady) => dispatch(get_news_headings(LNewsisReady)), //Get news headings
    get_local_features_headingsFn: (fNewsisReady) => dispatch(get_features_news_headings(fNewsisReady)) //Get featured news here
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);



