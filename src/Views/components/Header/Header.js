import React, { Component } from 'react'
import { search_news } from '../../../redux/actions/index';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  withRouter

} from "react-router-dom";
import SearchResult from '../../containers/SearchResult/SearchResult';


class Header extends Component {
  constructor(props) {
    super(props);
    this.searchIsDone = this.searchIsDone.bind(this)
  }
  state = {
    searchKeyword: '',
    search_word: 0,
    serachDone: true
  }

  onChangeFn(e) {
    this.setState({
      searchKeyword: e.target.value, // Keyword values
      serachDone: true
    })
  }

  searchIsDone() {
    this.setState({
      serachDone: true
    });

  }

  closeSearchPanel(e) {
    e.preventDefault();
    // this.setState({ serachDone: false });
    this.setState({ search_word: 0 });

  }

  searchNews(e) {
    e.preventDefault();
    this.setState({ serachDone: false, search_word: 1 });

    this.props.search_newsFn(this.state.searchKeyword, this.searchIsDone); //Search, using state value
    if (this.state.search_word == 1 && this.state.serachDone && this.state.serachDone) {
      this.props.history.push('/serach_result')
    }
  }

  inputClickEvent() {

  }
  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="hero-text">
            <span>NewsApp</span>
          </div>
          <div className="header-text">
            <div className="header-search-panel">
              <input type="text" onClick={() => this.inputClickEvent()} onChange={(e) => this.onChangeFn(e)} placeholder="Search news here..." />
              {(this.state.serachDone) ? '' : (<span className="search-loader"></span>)}
              <a className="search-icon" onClick={(e) => this.searchNews(e)}></a>
            </div>
          </div>

        </div>
        {
          (this.state.search_word == 1 && this.state.serachDone && this.state.serachDone) ?
            (<div><SearchResult searchState={this.props.searchNews} /><a href="" className="remove-icon" onClick={(e) => this.closeSearchPanel(e)}>Close</a></div>) : ''
        }
        {

        }
        {/* <Router>
          {(this.state.search_word == 1 && this.state.serachDone && this.state.serachDone) ? (<Redirect to={{
            pathname: "/serach_result",
            searchState: this.props.searchNews
          }} />) : ''}
        </Router> */}
        {/* {(this.state.serachDone) ? (<div className="search-result search-result-active">
          <a href="" className="remove-icon" onClick={(e) => this.closeSearchPanel(e)}></a>
          <ul>
            {this.props.searchNews.map((index, e_index) =>
              <li key={e_index}><a href={index.web_url}>{index.abstract}</a></li>
            )}
          </ul>

        </div>) : (<div className="search-result hidden-result">SOrry</div>)} */}
      </div>
    )
  }
}

//Fetching datas from here.
const mapStateToProps = (state => {
  return state;
});

//Dispatch actions here.
const mapDispatchToProps = (dispatch) => {
  return {
    search_newsFn: (searchKeyword, searchIsDone) => dispatch(search_news(searchKeyword, searchIsDone)), //Search_news news using keywords
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
