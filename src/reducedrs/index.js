/* eslint-disable import/prefer-default-export */
export const songsReducer = () => [{
  title: 'Happier',
  duration: '4:05',
}, {
  title: 'Macarena',
  duration: '2:30',
}, {
  title: 'All Star',
  duration: '3:15',
}, {
  title: 'I want it that way',
  duration: '1:45',
},
];

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
