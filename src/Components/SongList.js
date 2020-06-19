import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../Actions/AselectSong';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div /*style={{ marginLeft: '200px', marginTop: '50px', float:'left' }}*/
                    style={{ textAlign: 'center', margin: 'auto', marginLeft: '60px', marginTop:'40px', float: 'left' }}
                    class="ui card">
                    
               
  
                        <div class="content">
                        <a class="header">{song.title}</a>
                            <div class="meta">
                                <span class="date">Released on 2015</span>
                            </div>
                            <div class="description">
                            duration of the Song: {song.duration}
                           </div>
                        </div>
                    <div class="right floated content">
                        <button onClick={() => this.props.selectSong(song)} className="ui green button">Play</button>
                        </div>
                    </div>
                );
        });
    }
    render() {
        console.log(this.props.songs);
        console.log(this.props.selectSong);
        return <div>{this.renderList()}</div>
    }
    
}
const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.song };

}
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);