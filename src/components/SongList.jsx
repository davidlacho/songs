/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import SongDetail from './SongDetail';

// eslint-disable-next-line react/prefer-stateless-function
class SongList extends Component {
  render() {
    // eslint-disable-next-line no-shadow
    const { songs, selectSong, selectedSong } = this.props;
    const songList = (
      <div className="ui divided list">
        {songs.map(song => (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button className="ui button primary" type="submit" onClick={() => selectSong(song)}>
                Select
              </button>
            </div>
            <div className="content">
              {`${song.title} | ${song.duration}`}
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            {songList}
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ songs, selectedSong }) => ({ songs, selectedSong });

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
