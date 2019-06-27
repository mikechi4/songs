import { combineReducers } from 'redux';

// Reducers
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration : '4:05' },
        { title: 'idek man', duration : '3:05' },
        { title: 'test', duration : '1:05' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    } else {
        return selectedSong;
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});