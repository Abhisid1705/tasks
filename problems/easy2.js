function countStep(n){
    let count=0;
    while(n!=1){
        count++;
        if(n%2==0){
            n=n/2;
        }
        else{
            n=n*3+1;
          }

    }
    console.log(count);
 
}
countStep(12);