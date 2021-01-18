
import React, { Component } from 'react'
class SearchResult extends Component {

  render() {
    return (
      <div className="container search-result-container">
        <div className="row">
          <div className="col s12">
            <ul>
              {this.props.searchState.map((array, iVal) =>
                <li className=""><a href={array.web_url}>{array.abstract}</a></li>
              )}
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default SearchResult;
