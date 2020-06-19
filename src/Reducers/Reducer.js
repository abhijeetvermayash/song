import { combineReducers } from 'redux';


const SongReducer = () => {
    return [
        { title: 'Tum hi ho', duration: '3:25' },
        { title: 'Yahi hoon mai', duration: '3:15' },
        { title: 'Mera Mann', duration: '3:00' },
        { title: 'Paniyoon Sa', duration: '2:45' } 


    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;

    }
    else {
        return selectedSong;
    }

};

export default combineReducers({
    song: SongReducer,
    selectedSong: selectedSongReducer
});