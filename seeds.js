const mongoose = require('mongoose');
const Song = require('./models/song');

mongoose
  .connect('mongodb://0.0.0.0/makersmas_test', {
    useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!!');
  })
  .catch((err) => {
    console.log(err);
  });

const seedSong = [
  {
    songTitle: 'Fairytale of New York',
    artistName: 'Kirsty MacColl',
    votes: 0,
    voters: []
  },
  {
    songTitle: 'Last Christmas',
    artistName: 'Wham!',
    votes: 0,
    voters: []
  },
  {
    songTitle: 'Jingle Bell Rock',
    artistName: 'Bobby Helms',
    votes: 0,
    voters: []
  },
  {
    songTitle: "Do They Know It's Christmas?",
    artistName: 'Band Aid',
    votes: 0,
    voters: []
  },
  {
    songTitle: "Wonderful Christmas Time",
    artistName: 'Paul McCartney',
    votes: 0,
    voters: []
  },
  {
    songTitle: "Grandma Got Run Over by a Reindeer",
    artistName: 'Elmo & Patsy',
    votes: 0,
    voters: []
  },
  {
    songTitle: "Little Drummer Boy",
    artistName: 'Bing Crosby',
    votes: 0,
    voters: []
  },
  {
    songTitle: "Santa Tell Me",
    artistName: 'Ariana Grande',
    votes: 0,
    voters: []
  },
  {
    songTitle: "The Christmas Song",
    artistName: 'Nat King Cole',
    votes: 0,
    voters: []
  },
  {
    songTitle: "Holly Jolly Christmas",
    artistName: 'Michael Bublé',
    votes: 0,
    voters: []
  }
];

const seedDB = async () => {
  await Song.deleteMany({});
  await Song.insertMany(seedSong);
};

seedDB().then(() => {
  mongoose.connection.close()
});