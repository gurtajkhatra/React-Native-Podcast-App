import Realm from 'realm'
import { subscribedPodcasts } from './reducers';

//TODO: Change to read this value from state/pass it as an argument
const NUMBER_EPISODES_TO_SAVE = 5

class Episode extends Realm.Object{}
Episode.schema = {
    name: 'Episode',
    primaryKey: 'id',
    properties: {
        id: {type: 'string'},
        title:{type: 'string'},
        summary:{type: 'string'},
        datePublished:{type: 'date'},
        duration:{type: 'int',default:-1},
        audioLink:{type: 'string'},
        audioFilePath:{type: 'string',default:''},
        timestamp:{type: 'int',default:0},
        savedOffline:{type:'bool',default:false}
    }
}


class SubscribedPodcast extends Realm.Object{}
SubscribedPodcast.schema = {
    name: 'SubscribedPodcast',
    primaryKey: 'rssLink',
    properties: {
        rssLink:{type: 'string'},
        title: {type: 'string'},
        author: {type: 'string'},
        summary:{type: 'string'},
        imgLink:{type: 'string'},
        imgFilePath:{type: 'string', default:''},
        episodesArray:{type:'list',objectType:'Episode',default:[]},
        isFavorite:{type:'bool',default:false}
    }
}

//Search all values of an object for any value matching a function
const deepsearchObject = (obj, matchFunction) => {
    var returnArray = []
    //If it fits our criteria
    if (matchFunction(obj)) {
        returnArray.push(obj)
    }
    //Recursivly search the object
    if (typeof obj === "object") {
        values = Object.values(obj)
        for(var i = 0;i<values.length;i++) {
            currVal = values[i]
            resArray = deepsearchObject(currVal,matchFunction)
            if (resArray.length !== 0) {
                returnArray = returnArray.concat(resArray)
            }
        }
    }
    return returnArray
}

module.exports.printPodcasts = () => {
    let podcasts = realm.objects(SubscribedPodcast.schema.name)
    for(var i=0;i<podcasts.length;i++) {
        console.log(podcasts[i].episodesArray.length)
    }
}

//------------
//Episode Functions
//------------

//Creates a new "Episode" object, writes it to the realm, and returns it
const addNewEpisode = (episodeInfo) => {
    const guid = deepsearchObject(episodeInfo['guid'][0], (object) => {
        return (typeof object === 'string' && object.length > 5)
    })[0]
    const audioLink = deepsearchObject(episodeInfo['enclosure'][0], (object) => {
        //TODO: Use a better way of checking it the string is a url
        return (typeof object === 'string' && object.length > 15)
    })[0]
    //Check if we already have it
    var existingEpisodes = realm.objects(Episode.schema.name).filtered('id="' + guid+'"')
    var newEpisode = null
    if (existingEpisodes.length == 0) {
        realm.write(() => {
            newEpisode = realm.create(Episode.schema.name, {
                id: guid,
                title:episodeInfo['title'][0],
                summary:episodeInfo['description'][0],
                datePublished:episodeInfo['pubDate'][0],
                audioLink:audioLink,
            })
        })
    }
    else {
        newEpisode = existingEpisodes[0]
    }
    return newEpisode
}


//------------
//Podcast Functions
//------------

module.exports.addNewPodcast = (podInfo) => {
    let alreadyExistingPodcasts = realm.objects(SubscribedPodcast.schema.name).filtered('rssLink="' + podInfo['rssLink']+'"')
    var newPodcast = null
    if (alreadyExistingPodcasts.length === 0) {
        var savedEpisodes = []
        for(var i=0;i<NUMBER_EPISODES_TO_SAVE;i++) {
            var episode = addNewEpisode(podInfo['episodesArray'][i])
            savedEpisodes.push(episode)
        }
        newPodcast = realm.write(() => {
            realm.create(SubscribedPodcast.schema.name, {
                rssLink:podInfo['rssLink'],
                title:podInfo['title'],
                author:podInfo['author'],
                summary:podInfo['summary'],
                imgLink:podInfo['imgLink'],
                episodesArray:savedEpisodes
            })
        })
    }
}

module.exports.updatePodcastImageFilePath = (rssLink, imgFilePath) => {
    //Check if the podcast exists in the realm
    let podcast = realm.objects(SubscribedPodcast.schema.name).filtered('rssLink="' + rssLink+'"')
    if(podcast.length == 1) {
        realm.write(() => {
            podcast[0].imgFilePath = imgFilePath
        })
    }
}


const realm = new Realm({schema: [Episode,SubscribedPodcast]})
