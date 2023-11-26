// this is what an article object will look like:

 const article1 = {
                    headline: "Article 1",
                    preview: "This is a preview of article 1",
                    url: "https://www.google.com",
                    img_url: "https://via.placeholder.com/150",
};


// this is what the userArticles Collection looks like:

const user_articles = [
     { userID1: [articleID1, articleID2, articleID3] },
     { userID2: [articleID1, articleID2, articleID3] },
     { userID3: [articleID1, articleID2, articleID3] },
     { userID4: [articleID1, articleID2, articleID3] },
 ];

 const userEvents = [
        { userID1: [eventID1, eventID2, eventID3] },
        { userID2: [eventID1, eventID2, eventID3] },
        { userID3: [eventID1, eventID2, eventID3] },
        { userID4: [eventID1, eventID2, eventID3] },
    ];

 //npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler

 //npm install react-native-paper

 //npm install react-native-vector-icons

 //npm i puppeteer

//  Event Object


const event1 = {
    eventName: 'Manchester - People, Planet, Pint: Sustainability...',
    date: '30',
    month: 'NOV',
    dayAndTime: 'Thu, 18:00–20:00',
    location: 'Manchester',
    image_Url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qtRdgj6DzyelKBVI4RLwckwSPWz9ni0KrPWc5zU7IrKJ_6cdtmIkU7w&s'
  }