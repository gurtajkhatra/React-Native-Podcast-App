import C from './constants'
import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator';


//Initial Navigation State
const firstAction = AppNavigator.router.getActionForPathAndParams('MainPageView');//PodcastDescriptionView
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  } 
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

//Mapping from Podcast RSS Link -> {Title:String, Image File Path:String}
export const subscribedPodcasts = (state={}, action) => {
      switch(action.type) {
        case C.ADD_PODCAST : 
            podInfo = action.payload
            newState = Object.assign({}, state)
            newState[action.payload.rssLink] = action.payload.podcastInfo
            return newState
        case C.ADD_PODCAST_IMG_FP:
            if (state !== undefined) {
              newState = Object.assign({}, state)
              newState[action.payload.rssLink].imgFilePath = action.payload.filePath
              return newState
            }
            return state
        case C.REMOVE_PODCAST :
          newState = Object.assign({}, state)
          delete newState[action.payload.rssLink]
          return newState
        case C.GET_PODCAST_INFO:
          return state
        default:
          return state
      }
    }

export const currentEpisode = (state={}, action) => {
  switch(action.type) {
    case C.CURRENT_EPISODE :
      return action.payload
    default:
      return state
  }
}

export const selectedPodcast = (state='',action) => {
  switch(action.type) {
    case C.CHANGE_SELECTED_PODCAST:
      return action.payload
    default:
      return state
  }
}


export const isPlaying = (state=false,action) => {
  switch(action.type) {
    case C.TOGGLE_PLAYING:
      return action.payload
  }
  return state
}

export default combineReducers({
    subscribedPodcasts,
    selectedPodcast, 
    nav,
    currentEpisode,
    isPlaying
})