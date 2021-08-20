function megafriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please Provide a String'
    }

    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Shakil', 'Love', 'happyness', 'lion'];
const myBigBuddy = megafriend(friends);

if (friends.indexOf('lion') != -1) {
    console.log('lion Exist');
}

if (friends.includes('lion')) {
    console.log('lion Exist');
}

console.log(myBigBuddy);