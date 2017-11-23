import C from './constants'
import { combineReducers } from 'redux'

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

export default combineReducers({
    podcasts,
  })
  