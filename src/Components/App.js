import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

const App = () => {
    return (<div  ><h1 style={{ color: 'white', fontSize: '100px', textAlign:'center' }}>My PlayList!!!</h1>
        <SongList />
        <SongDetails/>
    </div>
    );
}

export default App;