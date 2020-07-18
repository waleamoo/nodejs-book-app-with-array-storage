/*
ES 5
module.exports = function Product() {

}

*/

const products = [];

// Next Gen JavaScript
module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save() {
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}