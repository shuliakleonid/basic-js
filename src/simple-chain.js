const CustomError = require("../extensions/custom-error");

const chainMaker = {
  myArr: [],
  getLength() {
    return this.myArr.length;    
  },
  addLink(value) {
    this.myArr.push('( ' + value + ' )');
    return this;
   
  },
  removeLink(position) {
    if (this.myArr[position - 1] === undefined){
      this.myArr = [];
      throw 'Error!';
    }
    this.myArr.splice(position-1,1);
    return this;

  },
  reverseChain() {
    this.myArr.reverse();
    return this;
    
  },
  finishChain() {
    let result = this.myArr.join('~~');
    this.myArr = [];
    return result;
   
  }
};

module.exports = chainMaker;
