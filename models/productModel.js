const products = require('../data/products.json')
const {v4: uuidv4 } = require('uuid')
const { writeToFile } = require('../utils/utils')

function findAll (){
    return new Promise((resolve, reject)=>{
        resolve(products);
    })
}
function findById (id){
    return new Promise((resolve, reject)=>{
        const product = products.find((p)=> p.id === id);
        resolve(product);
    })
}
function create(product){
    return new Promise((resolve, reject)=>{
        const newP = {id: uuidv4(), ...product}
        products.push(newP);
        writeToFile('./data/products.json', products);
        resolve(newP);
    })
}

module.exports = {
    findAll,
    findById
}