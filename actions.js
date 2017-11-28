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

export const updateSelectedPodcast = (podcastKey) => {
    return {
        type:C.CHANGE_SELECTED_PODCAST,
        payload:podcastKey
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

//Adds a new podcast to the users "subscribed" podcasts
export const addNewPodcast = rssFeedUrl => dispatch => {
    fetch(rssFeedUrl)
        .then(response => {
            const xmlText = response._bodyText
            parseString(xmlText, function (err, result) {
                const channelInfo = result.rss.channel[0]
                const title = channelInfo.title[0]
                const imgLink =  channelInfo.image["0"].url[0]
                const fn = '/podcastData/podcastArtwork/' + sanitize(title)
                var podInfo = {
                    key:title,
                    title: title,
                    summary: channelInfo['itunes:summary'][0],
                    imgLink: imgLink,
                    imgFilePath:'',
                    rssLink:rssFeedUrl,
                    episodesArray: channelInfo.item 
                }
                dispatch({
                    type: C.ADD_PODCAST,
                    payload: podInfo
                })
                downloadFromUrl(imgLink,fn).then(fp => {
                    dispatch({
                        type:C.ADD_PODCAST_IMG_FP,
                        payload:{
                            podTitle:title,
                            filePath:fp,
                        }
                    })
                })
            });
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: C.HANDLE_ERROR,
                payload: error,
            })
        })
    
    }