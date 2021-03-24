let count=0;
let result=[];
let i;
let exactCount;
function fishHit(k,l,m,n,total){
    let exactHit=countHits(k,l,m,n,total);
    console.log(exactHit);
};
function countHits(k,l,m,n,total){
    let totalHit=0;
    if(k== 1 || l==1 || m==1 ||n==1){
        return total;
    }
    else if(k==l==m==n){
        totalHit=Math.floor(total/k);
        return totalHit;
    }
    else{
        let totalHits=Math.floor(total/k+total/l+total/m+total/n);
        for(let i=k;i<=total;i=k+i){
            result.push(i);
        }
        for(let j=l;j<=total;j=j+l){
            result.push(j);
        }
        for(let j=m;j<=total;j=j+m){
            result.push(j);
        }
        for(let j=n;j<=total;j=j+n){
            result.push(j);
        }
        let eachHits=new Set(result);
        return eachHits.size;

    }
}
fishHit(2,3,4,5,24);
