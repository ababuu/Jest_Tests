
function encrypt(key,message){

}

function decrypt(key,message){

}
function lettersToDigits(message){
    const digits=[];
    for(let i=0;i<=message.length;i++){
        const digit=message.charCodeAt(i) - 97;
        digits.push(digit);
    }
    return digits;
}
function digitsToLetters(digits){
    const letters=[];
    digits.forEach((digit)=>{
        const letter=String.fromCharCode(97 + Number(digit));
        letters.push(letter);
    });
    const word=letters.join('');
    console.log(word);
}


module.exports= {encrypt,decrypt};