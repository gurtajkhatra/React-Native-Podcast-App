
import { StackNavigator } from 'react-navigation';
import MainPageContainer from './MainPage/MainPageContainer';
import YourPodcasts from './YourPodcasts/YourPodcastsViewContainer';

export const AppNavigator = StackNavigator(
    {
      MainPageView: { screen: MainPageContainer },
      YourPodcastsView: { screen: YourPodcasts },
    },
    { 
      headerMode:"none",
    }
  );
