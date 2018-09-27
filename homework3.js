const first = function(a,b,c){
return(a+c)*b
}
const d = first(1,2,3)
console.log(d)

const second = function(){
  return "hello world"
}
const q=second();
console.log(q);
  
  
  const third = function(num1,num2){
    num1=num1+2
    return
  }
  
  const forth = function(c,v,l) {
if((c.lenght > v.lenght) && (c.lenght > l.lenght)){
return c }
else if ((v.lenght > c.lenght) && (v.lenght > l.lenght)){
return v}
else{
return l
}
    }
const longest=forth("yaaay","what's up my dudes","homework lamework")
console.log(longest);
  
  
const fifth = function(a1,b2,){
if (a1===b2){
return 0
}
else if (a1>b2){
return 1}
else{
return -1
}
            }
const w=fifth(55,7)
console.log(w);

    const sixth = function(a3,b3){
    return a3*b3
  }
  const mult=sixth(5,4);
  console.log(mult);
  
  
  
   const seventh=function(a4,b4){
  return a4/b4
  }
  const div=seventh(24,12);
  console.log(div);
  
  
    const triangleArea=function(base,height){
    return (base*height)/2
  }
  const area=triangleArea(1345,12)
  console.log(area)
  
    const numLenght=function(r){
    return r.length }
  const t=numLenght("2000");
  console.log(t);
  
  const runStuff = function(u,p,s){
       if ( s ==='rectangle'){
    return u*p;
} else if (s === 'triangle'){
  return (u*p)/2;
} else {
    return -1;
} 
 
};
  const tup = runStuff(1433,560,'triangle');
  console.log(tup);
  
  
    const u=function(str,str2,num){
    if ((str+str2).lenght > num){
      return 1;
    }
        else {return -1;
             }
      }
  const aua=u("barekamutyun", "esiminch",12)
  console.log(aua);

