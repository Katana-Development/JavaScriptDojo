const fs = require('fs');
const {Buffer} = require('buffer');

class SumClassName {
  constructor(alpha, beta, gamma) {
    this.alpha = alpha;
    this.beta = beta;
    this.gamma = gamma;
  }

  readSumTextFile(filepath){
      this.fd = fs.openSync(this.gamma, fs.constants.O_RDONLY | fs.constants.O_WRONLY);
      
      fs.read(this.fd, Buffer.alloc(25600128), 0, 1000, 0, (err, data)=>{
        if(err) throw new Error('Error Occured');
        
        console.log(data);

        this.fileData = data;
      })

      return 0;
  }

  helloWorld(zeta = 'Hello World!'){
    console.log(zeta);
  }
  
}

module.exports.SumClassName = SumClassName;
