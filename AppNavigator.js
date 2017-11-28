
// import { StackNavigator } from 'react-navigation';
// import MainPageContainer from './MainPage/MainPageContainer';
// import YourPodcasts from './YourPodcasts/YourPodcastsViewContainer';
// import PodcastDescriptionContainer from './PodcastDescription/PodcastDescriptionContainer'
// export const AppNavigator = StackNavigator(
//     {
//       MainPageView: { screen: MainPageContainer },
//       YourPodcastsView: { screen: YourPodcasts },
//       PodcastDescriptionView: { screen:PodcastDescriptionContainer}
//     },
//     { 
//       headerMode:"none",
//     }
//   );
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import MainPageContainer from './MainPage/MainPageContainer';
import YourPodcasts from './YourPodcasts/YourPodcastsViewContainer';
import PodcastDescriptionContainer from './PodcastDescription/PodcastDescriptionContainer'
import PlayingEpisodeContainer from './PlayingEpisode/PlayingEpisodeContainer'

export const AppNavigator = StackNavigator(
  {
    MainPageView: { screen: MainPageContainer },
    YourPodcastsView: { screen: YourPodcasts },
    PodcastDescriptionView: { screen:PodcastDescriptionContainer},
    PlayingEpisodeView:{ screen:PlayingEpisodeContainer },
  },
  { 
    headerMode:"none",
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);