import { rootState } from '../../api/initStates';
import { GET_NEWS_HEADINGS } from '../actionTypes/index';
import { GET_FEATURED_NEWS } from '../actionTypes/index';
import { SEARCH_NEWS } from '../actionTypes/index';
import { GET_LOCAL_LATEST_NEWS } from '../actionTypes/index';
import { GET_LOCAL_FT_NEWS } from '../actionTypes/index';
export const rootReducer = function (state = rootState, action) {

    switch (action.type) {
        case GET_NEWS_HEADINGS: {
            return { ...state, latestNews: action.payload };
        }

        case GET_LOCAL_LATEST_NEWS: {
            return { ...state, latestNews: action.payload }
        }

        case GET_FEATURED_NEWS: {
            return { ...state, featuredNews: action.payload }
        }

        case GET_LOCAL_FT_NEWS: {
            return { ...state, featuredNews: action.payload }
        }


        case SEARCH_NEWS: {
            return { ...state, searchNews: action.payload }
        }
        default:
            return state;
    }

}