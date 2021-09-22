
const punctuations=['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','^','`','{','|','}','~',' '];
function encrypt(key,message){
    const convertedDigits=lettersToDigits(message);
    const encryptedDigits=convertedDigits.map((val)=>{
        let charCode=val+key;
        if(punctuations.includes(val)) return val;
        if(((charCode)>90 && (charCode)<96) || ((charCode)>122 && (charCode)<300)){
            return charCode-26;
        }
        else{
            return charCode;
        }
    });
    const encryptedMessage=digitsToLetters(encryptedDigits);
    return encryptedMessage;
}

function decrypt(key,message){

}
function lettersToDigits(message){
    let digits=[];
    for(let i=0;i<message.length;i++){
        let digit;
        if(punctuations.includes(message.charAt(i))){
            digit=message.charAt(i);
        }
        else{
            digit=message.charCodeAt(i);
        }
        digits.push(digit);
    }
    return digits;
}
function digitsToLetters(d){
    const letters=[];
    const digits=d;
    digits.forEach((digit)=>{
        let letter;
        if(punctuations.includes(digit)){
            letter=digit;
        }
        else{
        letter=String.fromCharCode(Number(digit));
        }
        letters.push(letter);
    });
    const word=letters.join('');
    return word;
}
module.exports= encrypt;