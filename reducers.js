import C from './constants'
import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './AppNavigator';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('MainPageView');
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


export const podcasts = (state={}, action) => {
      switch(action.type) {
        case C.ADD_PODCAST : 
            podInfo = action.payload
            newState = Object.assign({}, state)
            if (newState.subscribedPodcasts === undefined) {
                newState = {'subscribedPodcasts':{}}
            }
            newState.subscribedPodcasts[action.payload.title] = action.payload
            return newState
        case C.ADD_PODCAST_IMG_FP:
            if (state.subscribedPodcasts !== undefined) {
              newState = Object.assign({}, state)
              newState.subscribedPodcasts[action.payload.podTitle].imgFilePath = action.payload.filePath
              return newState
            }
            return state
        case C.REMOVE_PODCAST :
          return state
        case C.GET_PODCAST_INFO:
          return state
        default:
          return state
      }
    }

export const selectedPodcast = (state='',action) => {
  switch(action.type) {
    case C.CHANGE_SELECED_PODCAST :
      return action.payload
    default:
      return state
  }
}


export default combineReducers({
    podcasts,
    selectedPodcast, 
    nav
})