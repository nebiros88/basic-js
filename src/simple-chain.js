const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:  [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined) {
      this.chain.push('( )');
    }
    else  {
      this.chain.push('( ' + value + ' )');
    }
    return this;
  },
  removeLink(position) { 
    if(position > 0 && position <= this.chain.length) this.chain.splice(position - 1 , 1);
    else {
      this.chain = [];
      throw new Error ('Wrong index');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain = [];
    return str;

  }
};

module.exports = chainMaker;
