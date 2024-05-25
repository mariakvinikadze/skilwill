//დავალება 1

function sumAndMultiplication() {
    if (arguments.length < 3) {
        throw new Error("The function requires at least 3 arguments");
    }

    let sumFirstTwo = arguments[0] + arguments[1];
    let productOfOthers = 1;

    for (let i = 2; i < arguments.length; i++) {
        productOfOthers *= arguments[i];
    }

    return [sumFirstTwo, productOfOthers];
}

console.log(sumAndMultiplication(3, 4, 5, 6, 7));


// დავალება 2


function getCityFromBank(user) {
    const { banks } = user;
    const { address } = (banks && banks[2]) || {};
    const { city } = address || {};
    return city;
}

function getCityFromUser(user) {
    const {
        banks: [
            , ,
            {
                address: {
                    city
                } = {}
            } = {}
        ] = []
    } = user;

    return city;
}

// Example usage:
const user1 = {
    banks: [
        { address: { city: 'New York' } },
        { address: { city: 'Los Angeles' } },
        { address: { city: 'Chicago' } }
    ]
};

const user2 = {
    banks: [
        { address: { city: 'New York' } },
        { address: { city: 'Los Angeles' } }
    ]
};

console.log(getCityFromUser(user1));
console.log(getCityFromUser(user2));

