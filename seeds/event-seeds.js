const { Event } = require('../models');

const eventData = [
    {
        "eventName": "Rich's Birthday Party",
        "eventDescription": "Come celebrate Rich's birthday! There will be a bouncy house and clowns.",
        "eventDate": "8/8/2023",
        "eventTime": "7:00 - 10:00PM CST",
        "eventLocation": "Rich's house"
    },
    {
        "eventName": "Northwestern Class of '89 Reunion",
        "eventDescription": "Show off your cool job and hot spouse to people whose approval you secretly still crave 25 years later!",
        "eventDate": "6/20/2024",
        "eventTime": "12:00 - 6:00PM CST",
        "eventLocation": "Evanston, IL"
    },
    {
        "eventName": "Danny's 93rd Birthday",
        "eventDescription": "Dermatologists hate him!",
        "eventDate": "4/20/2024",
        "eventTime": "3:00 - 5:00PM CST",
        "eventLocation": "Denny's parking lot"
    },
    {
        "eventName": "Andrew's Movie Night",
        "eventDescription": "Star Wars marathon (maybe a Spaceballs watch too)",
        "eventDate": "7/31/2023",
        "eventTime": "6:00PM CST",
        "eventLocation": "The man cave"
    },
    {
        "eventName": "Teylor's Boat Party",
        "eventDescription": "Everybody look at me 'cuz I'm sailing on a boat (sailing on a booooaaat)",
        "eventDate": "8/17/2023",
        "eventTime": "10:00AM - 4:00PM CST",
        "eventLocation": "The exact center of Lake Michigan (transport out won't be provided)"
    }
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;