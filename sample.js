var kuroko = require('./utils/kuroko')

kuroko.analyse('川崎市の人口は何人ですか？').then(function(result) {
    console.log(result)
})

// kuroko.analyse('川崎市の人口は何人？').then(function(result) {
//     console.log(result)
// })
