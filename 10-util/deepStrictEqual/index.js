const util = require('util');

const user1 = {
    firstName: "Mate",
    lastName: "Matic",
    address: {
        city: "Split",
        street: "Vukovarska 1"
    }
}

const user2 = {
    firstName: "Mate",
    lastName: "Matic",
    address: {
        city: "Yagreb",
        street: "Vukovarska 1"
    }
}

console.log(user1 === user2);
console.log(util.isDeepStrictEqual(user1, user2));