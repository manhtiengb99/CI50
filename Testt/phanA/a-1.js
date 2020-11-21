function arrsolve(arr1,arr2){
    let res=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                res.push(arr1[i]);
            }
        }
    }
    let tmp = arr1.concat(arr2);
    for(let i=0;i<res.length;i++){
        let tmpp = res[i];
        tmp.filter(function(res){
            return res!=tmpp;
        });
    }
    return tmp;
}

console.log(arrsolve( [1, 2, "a"] ,  [1, 3, "b"]));