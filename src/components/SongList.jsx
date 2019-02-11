/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class SongList extends Component {
  render() {
    const { songs, dispatch } = this.props;
    const songList = (
      <ul>
        {songs.map(({ title, duration }) => (<li key={title}>{`${title}, ${duration}`}</li>))}
      </ul>
    );

    return (
      <div>
        {songList}
      </div>
    );
  }
}

const mapStateToProps = ({ songs }) => ({ songs });

export default connect(mapStateToProps)(SongList);
