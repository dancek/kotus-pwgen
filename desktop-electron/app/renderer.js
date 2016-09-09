const fs = require('fs')

new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/kotus_sanat.txt`, {encoding: 'utf-8'}, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    })
})
    .then(text => text.split('\n'))
    .then(lines => {
        // modifying global state
        const btn = document.getElementById('generate')
        btn.removeAttribute('disabled')
        btn.onclick = () => generate(10, 3)
        window.wordlist = lines
        generate(10, 3)
    })

function generate(pwd_count, pwd_len) {
    var pwds = []
    for (var i = pwd_count + 1; --i;) {
        var pwd_words = []
        for (var j = pwd_len + 1; --j;) {
            const pos = Math.floor(Math.random() * wordlist.length)
            const word = wordlist[pos]
            pwd_words.push(word)
        }
        const pwd = pwd_words.join(' ')
        pwds.push(pwd)
    }
    document.getElementById('pwds').innerText = pwds.join('\n')
}
