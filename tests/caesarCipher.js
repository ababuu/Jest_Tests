
const punctuations=['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','^','`','{','|','}','~'];
function encrypt(key,message){
    const convertedDigits=lettersToDigits(message);
    const encryptedDigits=convertedDigits.map((val)=>{
        if(punctuations.includes(val)) return val;
        return val+key;
    });
    const encryptedMessage=digitsToLetters(encryptedDigits);
    console.log(encryptedDigits);
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
            digit=message.charCodeAt(i) - 97;
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
            letter=String.fromCharCode(97 + Number(digit));
        }
        letters.push(letter);
    });
    const word=letters.join('');
    return word;
}

module.exports= encrypt;