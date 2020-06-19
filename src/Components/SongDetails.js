import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    console.log(props);
    if (props.selectedsong) {
        return (

            <div className="ui card" style={{
                float: 'right', margin: 'auto', marginTop: '50px', textAlign: 'center', marginRight:'100px'
            }}>
                <div class="content">
                    <a class="header">Current Song Playing</a>
                    <a >{props.selectedsong.title}</a>
                    <div class="description">
                        duration of the Song: {props.selectedsong.duration}
                    </div>
                </div>


            </div>

        );
    }
    else {
        return <div></div>
    }
};

const mapStateToProps = (state) => {

    return { selectedsong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);