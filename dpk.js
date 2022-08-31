const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;
let key;
exports.deterministicPartitionKey = (obj) => {


  return new Key(obj).key;

};
class Key {

    constructor(obj) {
        this.initKey(obj);
        this.nullCheck();
        this.typeCheck();
        this.lengthCheck();
    }

    initKey(obj){
      if(obj&&obj.partitionKey)
        this.key=obj.partitionKey;
      else if(obj&&!obj.partitionKey)
        this.key=this.createHash(JSON.stringify(obj));
    }

    nullCheck(){
      if(!this.key)
        this.key=TRIVIAL_PARTITION_KEY;
    }
    typeCheck(){
      if (typeof this.key !== "string")
        this.key=JSON.stringify(this.key);
    }
    lengthCheck(){
      if (this.key.length > MAX_PARTITION_KEY_LENGTH)
        this.key=this.createHash(this.key);
    }
    createHash(str){
      return crypto.createHash("sha3-512").update(str).digest("hex");
    }
}
