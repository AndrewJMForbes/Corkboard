const { eventData } = require('../seeds/event-seeds');

module.exports = {
  format_birthday: (date) => {
    const options = {
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  },
  format_time: (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  },
  get_emoji: () => {
    let randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },
  // list_attendees: (users) => {

  // }
};

