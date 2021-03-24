
function amIperfect(n){
let checkPerfect=0;
    for(let i=1;i<=Math.sqrt(n);i++){
        if(n%i==0){
            if(n/i==n){
                checkPerfect=checkPerfect+i;
            }
            else{
                checkPerfect=checkPerfect+i+n/i;
            }
        }

    }
    
    if(checkPerfect==n){
        console.log("perfect");
    }
    else if(checkPerfect>n){
        console.log("Abundant");
    }
    else{
        console.log("Deficient");
    }
}

amIperfect(8);