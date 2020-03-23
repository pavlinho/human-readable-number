module.exports = function toReadable(number) {
    let output = [];
    let zero = 'zero';
    let one = 'one';
    let two = 'two';
    let three = 'three';
    let four = 'four';
    let five = 'five';
    let six = 'six';
    let seven = 'seven';
    let eight = 'eight';
    let nine = 'nine';
    let ten = 'ten';
    let eleven = 'eleven';
    let twelve = 'twelve';
    let thirteen = 'thirteen';
    let fourteen = 'fourteen';
    let fifteen = 'fifteen';
    let sixteen = 'sixteen';
    let seventeen = 'seventeen';
    let eighteen = 'eighteen';
    let nineteen = 'nineteen';
    let twenty = 'twenty';
    let thirty = 'thirty';
    let forty = 'forty';
    let fifty = 'fifty';
    let sixty = 'sixty';
    let seventy = 'seventy';
    let eighty = 'eighty';
    let ninety = 'ninety';
    let hundred = ' hundred';

    let obj = {
        0: zero,
        1: one,
        2: two,
        3: three,
        4: four,
        5: five,
        6: six,
        7: seven,
        8: eight,
        9: nine,
        10: ten,
        11: eleven,
        12: twelve,
        13: thirteen,
        14: fourteen,
        15: fifteen,
        16: sixteen,
        17: seventeen,
        18: eighteen,
        19: nineteen,
        20: twenty,
        30: thirty,
        40: forty,
        50: fifty,
        60: sixty,
        70: seventy,
        80: eighty,
        90: ninety,
        100: hundred,
    }

    let obj2 = {
        2: twenty,
        3: thirty,
        4: forty,
        5: fifty,
        6: sixty,
        7: seventy,
        8: eighty,
        9: ninety,
    }

    let obj3 = {
        1: eleven,
        2: twelve,
        3: thirteen,
        4: fourteen,
        5: fifteen,
        6: sixteen,
        7: seventeen,
        8: eighteen,
        9: nineteen,
    }
    let res;
    let str = number.toString(); /// str == '22'
    console.log(str);
    if (number < 10) {
        res = obj[number];
    }
    if (number >= 10 && number <= 20) {
        res = obj[number];
    }

    for (let i = 0; i < str.length - 1; i++) {

        if (number > 20 && number < 100) {
            if (i == 0) {
                res = obj2[str[i]];
            }
            if (str[i + 1] == '0') {
                return obj2[str[i]];
            }
            res = res + ' ' + obj[str[i + 1]];
        }

    }

    for (let i = 0; i < str.length - 2; i++) { // 111
        if (number >= 100) {
            if (i == 0) {
                res = obj[str[i]] + hundred;
                if (str[i + 2] == '0' && str[i + 1] == '0') {
                    return res;
                }
            }
            if ((number > 109 && number < 120) ||
                (number > 209 && number < 220) ||
                (number > 309 && number < 320) ||
                (number > 409 && number < 420) ||
                (number > 509 && number < 520) ||
                (number > 609 && number < 620) ||
                (number > 709 && number < 720) ||
                (number > 809 && number < 820) ||
                (number > 909 && number < 920)) {
                if (str[i + 2] == '0') {
                    return res = res + ' ' + 'ten';
                }
                if (str[i + 1] != '0') {
                    return res = res + ' ' + obj3[str[i + 2]];
                }
            }
            if (str[i + 1] != '0') {
                res = res + ' ' + obj2[str[i + 1]];
            }
            if (str[i + 2] != '0') {
                res = res + ' ' + obj[str[i + 2]];
            }


        }
    }
    return res;
}
