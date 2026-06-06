var maxFreqSum = function (s) {
    let freq = {};
    let vowels = "aeiou";
    let vowMax = 0;
    let conMax = 0;
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;

    }

    for (let ch in freq) {
        if (vowels.includes(ch)) {
            vowMax = Math.max(vowMax, freq[ch])

        } else {
            conMax = Math.max(conMax, freq[ch]);
        }
    }

    return vowMax + conMax;
}

let result = maxFreqSum("successes");
console.log(result);
