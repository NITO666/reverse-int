module.exports = function reverse (n) {
    let b = String(n)
    c = '';
    for(let i = b.length-1;i >= 0 ;i--){
        if (b[i] === '-'){
        c = c + ''
        }else{
        c = c + b[i]
        }
        
    }
    return Number(c)
}
