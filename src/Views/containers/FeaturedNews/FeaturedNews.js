import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  NavLink
} from "react-router-dom";


class FeaturedNews extends Component {



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <span className="main-new-head">Featured News</span>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="featured-news-section">

              {/* Featured news  */}
              <div className="new-block-left">
                {/* Loader for feature section  */}
                {(this.props.featuredNews) ? '' : (<div className="loader-wrapper-body"><div className="loader"></div></div>)}
                {/* End of loader  */}
                {(this.props.featuredNews) &&
                  this.props.featuredNews.slice(0, 1).map((array, i) =>
                    <div className="news-block" key={i}>

                      <NavLink to={{ pathname: '/details', linkState: array }}>
                        <div className="new-img">
                          <img src={`http://nytimes.com/${array.multimedia[16].url}`} />
                        </div>
                        <div className="news-cnt-main">
                          <p className="main-name">{array.headline.main}</p>
                          <p className="main-para">{array.snippet}</p>
                        </div>
                      </NavLink>

                    </div>

                  )}
              </div>
              <div className="new-block-right">
                {(this.props.featuredNews) &&
                  this.props.featuredNews.slice(1, 3).map((array, i) =>
                    <div className="news-block" key={i}>

                      <NavLink to={{ pathname: '/details', linkState: array }}>
                        <div className="new-img">
                          <img src={`http://nytimes.com/${array.multimedia[0].url}`} />
                        </div>
                        <div className="news-cnt-main">
                          <p className="main-name">{array.headline.main}</p>
                          <p className="main-para">{array.snippet}</p>
                        </div>
                      </NavLink>

                    </div>
                  )}
              </div>
            </div>





          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state => {
  return state;
});


export default connect(mapStateToProps, null)(FeaturedNews);
