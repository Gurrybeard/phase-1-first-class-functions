function receivesAFunction(cb){
    cb();
}
let hi = () => 1+2;
function returnsANamedFunction(){
    return hi;
}
function returnsAnAnonymousFunction(){
    return function(){};
}