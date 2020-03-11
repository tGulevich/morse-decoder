const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }

    let arr2 = arr.map(el => {
        if (el !== '**********') {
            el = el.split('');
            let sym = '';
            for (let i = 0; i < el.length; i+=2) {
                if (el[i] + el[i+1] === '00') {
                    sym += '';
                } else if (el[i] + el[i+1] === '10') {
                    sym += '.';
                } else if (el[i] + el[i+1] === '11') {
                    sym += '-';
                }
            }
            return sym;
        } else {
            return el;
        } 
    });

    let res = '';
    arr2.forEach(el => {
        res += MORSE_TABLE[el] || ' ';
    });

    return res;

}

module.exports = {
    decode
}