//AIGLE
const inventors =
[
    { first: 'Albert', last: 'Einstein', year:   1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643,    passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year:   1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year:   1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year:   1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858,  passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year:    1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815,    passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855,  passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878,    passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

let inventorsFiltered = inventors.filter(i => i.year>1500 && i.year<=1599);

let inventorsNames = inventors.map(i => (`${i.first} ${i.last}`));

let inventorsDate = inventors.sort((first, second) => first.year > second.year ? 1 : -1);

let inventorsYears = inventors.reduce((totalYears, i) => totalYears + (i.passed - i.year), 0);

let inventorsSort = inventors.sort((first, second) => (((first.passed - first.year) < (second.passed - second.year)) ? 1 : -1));

const people =
[
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker,Carl', 'Bentsen, Lloyd', 'Beckett, Samuel','Blake, William', 'Berger, Ric', 'Beddoes,Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow,Saul', 'Benchley, Robert', 'Blair, Robert','Benenson, Peter', 'Benjamin, Walter', 'Berlin,Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas','Berle, Milton', 'Berry, Halle', 'Biko, Steve','Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk','Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell','Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel,Ken', 'Biden, Joseph', 'Bennington, Chester','Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair,Tony', 'Beecher, Henry', 'Biondo, Frank'
];

let peopleSort = people.sort((first, next) => 
{
    let splitFirst = first.split(",");
    let splitNext = next.split(",");

    return (splitFirst[0]>splitNext[0]?1:-1);
});


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

let dataReduced = data.reduce((object, item) =>
{
    if (!(object[item]))
    {
        object[item] = 0;
    }
    object[item]++;
    return object;
},{});
console.log(dataReduced);