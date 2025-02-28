'use strict';

class Utils {
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static shuffle(someArray) {
    for (let i = someArray.length - 1; i > 0; i--) {
      const randomPosition = Math.floor(Math.random() * i);
      [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
    }

    return someArray;
  }

  static formatDate(date) {
    const dateISO = date.toISOString().split(`T`);
    return `${dateISO[0]} ${dateISO[1].split(`.`)[0]}`;
  }
}

module.exports = Utils;
