const mongoose = require('mongoose');
const Song = require('./models/song');
const User = require('./models/user');
const Event = require('./models/event');
const List = require('./models/list');


mongoose
  .connect('mongodb://0.0.0.0/makersmas', {
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
    votes: 2,
    voters: ["638a268f62aa60a6cbe2b72e", "638a21d4ea605663c24851e1"]
  },
  {
    songTitle: 'Last Christmas',
    artistName: 'Wham!',
    votes: 2,
    voters: ["638a30b3cba077b39a384827", "638a32f7c0decb6dfd0e12a2"]
  },
  {
    songTitle: 'Jingle Bell Rock',
    artistName: 'Bobby Helms',
    votes: 1,
    voters: ["638a32f7c0decb6dfd0e12a3"]
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
    votes: 1,
    voters: ["638890d40edc1bb3f22b1e5f"]
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
    votes: 1,
    voters: ["6390cbf6ffe23828ebb7c9c3"]
  }
];

const seedUser = [
  {
    _id: "638a30b3cba077b39a384827",
    first_name: "Mariah",
    last_name: "Carey",
    email: "mariah@example.com",
    password: "qu33nofXm@s",
    friends: [
      "638a268f62aa60a6cbe2b72e"
    ],
    dietary_requirements: "None",
    wish_list: [],
  },
  {
    _id: "6390cbf6ffe23828ebb7c9c3",
    first_name: "Michael",
    last_name: "Buble",
    email: "michael@example.com",
    password: "j!ngl3bubles",
    friends: [
      "638a268f62aa60a6cbe2b72e"
    ],
    dietary_requirements: "None",
    wish_list: [],
  },
  {
    _id: "638890d40edc1bb3f22b1e5f",
    first_name: "Noddy",
    last_name: "Holder",
    email: "noddy@example.com",
    password: "1i!tsXM@S",
    friends: [
      "6389e36c43aa1ab885e2db23"
    ],
    dietary_requirements: "None",
    wish_list: [],
  },

  {
    _id: "6389e36c43aa1ab885e2db23",
    first_name: "Ebenezer",
    last_name: "Scrooge",
    email: "ebenezer@bahhumbug.com",
    password: "8@hhumbug!",
    friends: [
      "638890d40edc1bb3f22b1e5f"
    ],
    dietary_requirements: "None",
    wish_list: [
      "Socks",
      "Candles",
      "Money",
      "New cutlery",
      "Generosity",
      "Compassion"
    ],
  },
  {
    _id: "638a21d4ea605663c24851e1",
    first_name: "John",
    last_name: "McClane",
    email: "john@example.com",
    password: "Y1pp33kiy@y",
    friends: [],
    dietary_requirements: "None",
    wish_list: [],
  },
  {
    _id: "638a268f62aa60a6cbe2b72e",
    first_name: "Mary",
    last_name: "Christmas",
    email: "mary@example.com",
    password: "@nd@happyn3wyr",
    friends: [
      "6390cbf6ffe23828ebb7c9c3", 
      "638a30b3cba077b39a384827"
    ],
    dietary_requirements: "None",
    wish_list: [],
  },
  {
    _id: "638a32f7c0decb6dfd0e12a2",
    first_name: "Chris",
    last_name: "Maspast",
    email: "past@ghost.com",
    password: "P@55word!",
    friends: [
      "638a32f7c0decb6dfd0e12a3", 
      "638a32f7c0decb6dfd0e12a4"
    ],
    dietary_requirements: "None",
    wish_list: [
      "Electric Blanket",
      "Books",
      "Piano"
    ],
  },
  {
    _id: "638a32f7c0decb6dfd0e12a3",
    first_name: "Chris",
    last_name: "Maspresent",
    email: "present@ghost.com",
    password: "P@55word!",
    friends: [
      "638a32f7c0decb6dfd0e12a2", 
      "638a32f7c0decb6dfd0e12a4"
    ],
    dietary_requirements: "Lactose Intolerant",
    wish_list: [
      "Wrapping paper",
      "Stationery",
      "Arts and Crafts things (like Googley eyes)",
      "Scissors",
      "Ribbon"
    ],
  },
  {
    _id: "638a32f7c0decb6dfd0e12a4",
    first_name: "Chris",
    last_name: "Masfuture",
    email: "future@ghost.com",
    password: "P@55word!",
    friends: [
      "638a32f7c0decb6dfd0e12a2",
      "638a32f7c0decb6dfd0e12a3"
    ],
    dietary_requirements: "Vegan",
    wish_list: [
      "Sunglasses"
    ],
  }
  
];

const seedList = [
  {
    userID: "6389e36c43aa1ab885e2db23" ,
    listName: "Shopping List",
    tasks: [{
      task: "Carrots",
      isComplete: false,
    },
    {
      task: "Brussel Sprouts",
      isComplete: true,
    },
    {
      task: "Potatoes",
      isComplete: false,
    },
    {
      task: "Red Cabbage",
      isComplete: true,
    },
    {
      task: "Yorkshire Puddings",
      isComplete: false,
    },
    {
      task: "Turkey",
      isComplete: false,
    }
  ]},
  {
    userID: "6389e36c43aa1ab885e2db23" ,
    listName: "Present buying",
    tasks: [{
      task: "Karaoke machine for Mariah",
      isComplete: false,
    },
    {
      task: "Basketball for Michael",
      isComplete: true,
    },
    {
      task: "Summer hat for Chris Masfuture",
      isComplete: false,
    },
    {
      task: "Ribbon for Chris Maspresent",
      isComplete: true,
    }
  ]},
  {
    userID: "6389e36c43aa1ab885e2db23" ,
    listName: "Christmas tree decorations",
    tasks: [{
      task: "Tinsel",
      isComplete: false,
    },
    {
      task: "Fairy Lights",
      isComplete: true,
    },
    {
      task: "Star",
      isComplete: false,
    },
    {
      task: "Buble's Baubles",
      isComplete: false,
    },
    {
      task: "Tree chocolates!",
      isComplete: false,
    },
    {
      task: "Noddy's candle holders",
      isComplete: true,
    }
  ]}
];

const seedEvent = [
  {
    eventName: "Noddy's CHRISTMAAAAAAAS Party!",
    organiser_id: "638890d40edc1bb3f22b1e5f",
    eventDate: "2022-12-25",
    location: "Birmingham",
    number_attending: 3,
    attendees: [
      "638a30b3cba077b39a384827",
      "6390cbf6ffe23828ebb7c9c3",
      "638a268f62aa60a6cbe2b72e" 
    ]
  },
  {
    eventName: "Mariah's Queen of Christmas Coronation Ceremony!",
    organiser_id: "638890d40edc1bb3f22b1e5f",
    eventDate: "2022-12-20",
    location: "Sheffield",
    number_attending: 2,
    attendees: [
      "638a32f7c0decb6dfd0e12a4",
      "638a32f7c0decb6dfd0e12a3"
    ]
  },
  {
    eventName: "Michael's Buble Ball",
    organiser_id: "6390cbf6ffe23828ebb7c9c3",
    eventDate: "2022-12-18",
    location: "London",
    number_attending: 3,
    attendees: [
      "638a30b3cba077b39a384827",
      "638a21d4ea605663c24851e1",
      "638a268f62aa60a6cbe2b72e" 
    ]
  },
  {
    eventName: "A Christmas Carol",
    organiser_id: "6389e36c43aa1ab885e2db23",
    eventDate: "2022-12-24",
    location: "London",
    number_attending: 3,
    attendees: [
      "638a32f7c0decb6dfd0e12a2",
      "638a32f7c0decb6dfd0e12a3",
      "638a32f7c0decb6dfd0e12a4"
    ]
  }
];

const seedDB = async () => {
  await Song.deleteMany({});
  await Song.insertMany(seedSong);
  await User.deleteMany({});
  await User.insertMany(seedUser);
  await List.deleteMany({});
  await List.insertMany(seedList);
  await Event.deleteMany({});
  await Event.insertMany(seedEvent);
};

seedDB().then(() => {
  mongoose.connection.close()
});
