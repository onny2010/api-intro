// javascript object notation
// JSON
const user = { id: 11, name: 'gorib Amir', job: 'actor' };

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.products);