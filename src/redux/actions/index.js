import { GET_NEWS_HEADINGS, GET_FEATURED_NEWS, SEARCH_NEWS, GET_LOCAL_FT_NEWS, GET_LOCAL_LATEST_NEWS, PAGINATION_NEWS } from '../actionTypes/index';
import { APIkey } from '../../config/api'
const axios = require('axios').default;


// ***********************************************************************************
// Check for localStorage 
// ***********************************************************************************



function localStoragefnewsFn(value) {
    //Fnews: Featured news, 
    if (localStorage.getItem('fnews') == null && value) {
        localStorage.setItem('fnews', JSON.stringify(value))
    }
}

// Lnews: Latest news,
function localStoragelnewsFn(value) {
    if (localStorage.getItem('lnews') == null && value) {
        localStorage.setItem('lnews', JSON.stringify(value))
    }
}


export function removeLocalStorage() {
    localStorage.removeItem('fnews');
    localStorage.removeItem('lnews');

}

// ***********************************************************************************
// Action creators 
// ***********************************************************************************
function getHeadinlesData(hData) {
    return {
        type: GET_NEWS_HEADINGS,
        payload: hData
    }
}

function getFeaturesHeadinlesData(fData) {
    return {
        type: GET_FEATURED_NEWS,
        payload: fData
    }
}



function getlocalLatestData(hData) {
    return {
        type: GET_LOCAL_LATEST_NEWS,
        payload: hData
    }
}

function getLocalFeaturesHeadinlesData(fData) {
    return {
        type: GET_LOCAL_FT_NEWS,
        payload: fData
    }
}




function searchNewsWithKeyword(sData) {
    return {
        type: SEARCH_NEWS,
        payload: sData
    }
}





// ***********************************************************************************
// Thunk
// ***********************************************************************************



export function get_news_headings(LNewsisReady) { //News headings only

    return function (dispatch) {


        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=latest&api-key=${APIkey}`;
        axios.get(url).then((val) => {
            localStoragelnewsFn(val.data.response.docs); //Featured news. Storing data to localStorage
            dispatch(getHeadinlesData(val.data.response.docs));
            LNewsisReady();
        })

    }
}



export function get_features_news_headings(fNewsisReady) { //Get featured news here
    return function (dispatch) {

        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trending&api-key=${APIkey}`;
        axios.get(url).then((val) => {
            localStoragefnewsFn(val.data.response.docs); //Featured news. Storing data to localStorage
            dispatch(getFeaturesHeadinlesData(val.data.response.docs));
            fNewsisReady();
        })


    }
}

export function pagination_news(pageNumber, paginationNewsIsReay) { //Get pagination news here
    return function (dispatch) {
        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=latest&page=${pageNumber}&api-key=${APIkey}`;
        axios.get(url).then((val) => {
            localStoragelnewsFn(val.data.response.docs); //Featured news. Storing data to localStorage
            dispatch(getHeadinlesData(val.data.response.docs));
            paginationNewsIsReay();
        })
    }
}

export function filterNews(filterString, filterIsReay) { //Get filter news here
    return function (dispatch) {

        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=${filterString}&api-key=${APIkey}`;
        axios.get(url).then((val) => {
            localStoragelnewsFn(val.data.response.docs); //Featured news. Storing data to localStorage
            dispatch(getHeadinlesData(val.data.response.docs));
            filterIsReay();
        })
    }
}



export function search_news(searchKeyword, searchIsDone) { //Get news here
    return function (dispatch) {
        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchKeyword}&api-key=${APIkey}`;
        axios.get(url).then((val) => {
            dispatch(searchNewsWithKeyword(val.data.response.docs));
            searchIsDone();
        })
    }
}


//State update using localStorage
export function get_features_news_headings_local() {
    return function (dispatch) {
        let dataFromLocalStorageFNews = localStorage.getItem('fnews')
        dispatch(getFeaturesHeadinlesData(JSON.parse(dataFromLocalStorageFNews)));
    }
}


//State update using localStorage
export function get_latestnews_headings_local() {
    return function (dispatch) {
        let dataFromLocalStorageLNews = localStorage.getItem('lnews')
        dispatch(getHeadinlesData(JSON.parse(dataFromLocalStorageLNews)));
    }
}
