/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.song.title}
      </p>
      <p>
        Duration: {selectedSong.song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => ({ selectedSong: state.selectedSong });

export default connect(mapStateToProps)(SongDetail);
