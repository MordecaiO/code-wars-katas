
function productFib(prod){
  
   const recur = (a,b)=>{
        if (a * b > prod)
            return [a, b, false];
        if (a * b === prod)
            return [a, b, true];
        return recur(b, a + b);
    }

    return recur(0, 1);

}
