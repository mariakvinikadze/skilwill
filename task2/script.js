const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];

//დავალება 1

function getNameOfYoungestUser(users) {
    let youngestUser = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngestUser.age) {
            youngestUser = users[i];
        }
    }

    return youngestUser.name;
}
console.log(getNameOfYoungestUser(users));

//დავალება 2

function getUsersArray() {
    return users.map(user => ({ ...user }));
}

const newArray = getUsersArray();
console.log(newArray);