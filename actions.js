import C from './constants'
import {parseString} from 'xml2js'
import RNFetchBlob from 'react-native-fetch-blob'
import fetch from 'cross-fetch'
import sanitize from 'sanitize-filename'
import Platform from 'react-native'



let docDir = RNFetchBlob.fs.dirs.DocumentDir

//Downloads from a url and returns the file path where it is saved
const downloadFromUrl = (url,fileName) => {
    var newFp = {fp:'',isSame:"True"};
    var prom = RNFetchBlob
    .config({
      // response data will be saved to this path if it has access right.
      path : docDir + fileName + '.png',
    })
    .fetch('GET', url, {
      //some headers ..
    })
    .then((res) => Platform.OS === 'android' ? 'file://' + res.path() : '' + res.path())
    .catch((err) => {
        console.log(err)
    })
    return prom
}

//Changes the currently selected podcast from the browser (i.e. unsure if subscribed to or not)
export const updateSelectedPodcastFromRssLink = (rssLink,callback) => dispatch => {
    getPodcastInfoFromRss(rssLink,(podcastInfo) => {
        dispatch (
            updateSelectedPodcast(podcastInfo)
        )
        callback()
    })
}

//Changes the currently selected podcast from already subscribed to podcasts
export const updateSelectedPodcast = (podcastInfo) => {
    console.log(podcastInfo)
    return {
        type:C.CHANGE_SELECTED_PODCAST,
        payload:podcastInfo
    }
}


export const togglePlaying = (playing) => {
    return {
        type:C.TOGGLE_PLAYING,
        payload:(!playing)
    }
}

//Update the currently playing podcast
export const updatePlayingPodcast = (podcastTitle, episodeObj, currTimestamp=0) => {
    const episodeInfo = {
        podcast:podcastTitle,
        episodeKey:episodeObj['title'][0],
        episodeTitle:episodeObj['title'][0],
        audioLink:episodeObj['enclosure'][0]['$']['url'],
        description:episodeObj['description'][0],
        date:episodeObj['pubDate'][0],
        duration:episodeObj['itunes:duration'][0],
        timestamp:currTimestamp,
    }
    return {
        type:C.CURRENT_EPISODE,
        payload:episodeInfo
    }
}

const getPodcastInfoFromRss = (rssFeedUrl,callback) => {
    fetch(rssFeedUrl)
    .then(response => {
        const xmlText = response._bodyText
        parseString(xmlText, function (err, result) {
            const channelInfo = result.rss.channel[0]
            const title = channelInfo.title[0]
            const imgLink =  channelInfo.image[0].url[0]
            const imageFileName = '/podcastData/podcastArtwork/' + sanitize(title)
            const description =  channelInfo['description'][0]
            var podInfo = {
                key:title,
                title: title,
                summary: description,
                imgLink: imgLink,
                imgFilePath:'',
                rssLink:rssFeedUrl,
                episodesArray: channelInfo.item 
            }
            callback(podInfo,imageFileName)
        })
    }).catch(error => {
            console.log(error)
            dispatch({
                type: C.HANDLE_ERROR,
                payload: error,
            })
        })
}

//Adds a new podcast to the users "subscribed" podcasts
export const addNewPodcast = rssFeedUrl => dispatch => {
    getPodcastInfoFromRss(rssFeedUrl,(parsedInfo, imageFileName) => {
        dispatch({
            type: C.ADD_PODCAST,
            payload: parsedInfo
        })
        downloadFromUrl(parsedInfo.imgLink,imageFileName).then(fp => {
            dispatch({
                type:C.ADD_PODCAST_IMG_FP,
                payload:{
                    podTitle:parsedInfo.title,
                    filePath:fp,
                }
            })
        })
    })
}
    // .then((err,result) => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    //     dispatch({
    //         type: C.HANDLE_ERROR,
    //         payload: error,
    //     })
    // })
  
    // })
// export const removePodcastFromSubscribed