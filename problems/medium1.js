 //encode number is main function

function encodeNumber(n){

    let binaryRepresentation=parseInt(convertBinary(n));
    let tens=10;
    let encoded=[];
    while(binaryRepresentation>tens / 10){
      let op=binaryRepresentation % tens -binaryRepresentation % (tens/10);
      tens=tens*10;
      if(op==1){
          encoded.push("pop");
      }
      else if(op==10){
          encoded.push("double rip");
      }
      else if(op==100){
          encodeNumber.push("hide your mint");
      }
      else if(op==1000){
          encoded.push("fall");
      }
      else{
          encoded=encoded.reverse();
      }
    }
    return encoded;
}
function convertBinary(n){
    let convertedResult='';
    let lsb;
    while(n/2>0){
       lsb=n%2;
       n=Math.floor(n/2);
       convertedResult=(String(lsb))+convertedResult;
    }
    lsb=n%2;
    return convertedResult;
}
let result=encodeNumber(19);
console.log(result);