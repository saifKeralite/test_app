import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PAGINATION_NEWS } from '../../../redux/actionTypes/index';
import { pagination_news } from '../../../redux/actions/index';
import { filterNews } from '../../../redux/actions/index';
import {
  NavLink
} from "react-router-dom";
import Pagination from "react-js-pagination";

class LatestNews extends Component {

  constructor(props) {
    super(props);
    this.paginationNewsIsReay = this.paginationNewsIsReay.bind(this);
    this.filterIsReay = this.filterIsReay.bind(this);
    this.state = {
      activePage: 1,
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  handlePageChange(pageNumber) {
    this.props.pageination_news(pageNumber, this.paginationNewsIsReay);
    this.setState({ isLoading: true, activePage: pageNumber });
  }

  paginationNewsIsReay() {
    this.setState({
      isLoading: false
    })
  }

  filterIsReay() {
    this.setState({
      isLoading: false
    })
  }

  //Filter
  filterValue(e) {

    this.props.filter_news(e.target.value, this.filterIsReay);
  }
  render() {
    return (
      <div className="container latest-news-wrap">
        <div className="row">
          <div className="col s6">
            <span className="main-new-head">Latest News</span>
          </div>
          <div className="col s6">
            <label>Filter</label>
            <select className="browser-default" onChange={(e) => this.filterValue(e)}>
              <option value="" disabled>Choose your option</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="relevance">Relevance</option>
            </select>

          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className={(this.state.isLoading) ? 'latest-news-section loading-wrapper' : 'latest-news-section'}>
              <div className={(this.state.isLoading) ? 'loading-contnet' : ''}></div>
              {/* Featured news  */}

              {(this.props.latestNews) &&
                this.props.latestNews.map((array, i) =>
                  <div className="latest-block" key={i}>
                    <NavLink to={{ pathname: '/details', linkState: array }}>
                      <p className="main-name">{array.headline.main}</p>


                    </NavLink>
                    <p>{array.snippet}</p>
                  </div>
                )
              }

              {/* <div className="news-f-block"></div>
              <div className="news-f-block"></div> */}
            </div>
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={9}
              totalItemsCount={90}
              pageRangeDisplayed={10}
              onChange={this.handlePageChange.bind(this)}
            />
          </div>
        </div>


      </div>
    )
  }
}


const mapStateToProps = (state => {
  return state;
});


//Dispatch actions here.
const mapDispatchToProps = (dispatch) => {
  return {
    pageination_news: (pageNumber, paginationNewsIsReay) => dispatch(pagination_news(pageNumber, paginationNewsIsReay)), //Get news based on the page count
    filter_news: (filterString, filterIsReay) => dispatch(filterNews(filterString, filterIsReay)) //Get news based on the page count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestNews);
