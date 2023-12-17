const inventors = [
    { first:'Albert', last: 'Einstein' , year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed:1727 },
    { first: 'Galileo', last: 'Galiled', year: 1564, passed: 1642 },
    {first:'Marie', last: 'Curie', year: 1867, passed:1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];
    const people = ['Beck, Glenn','Beckett, Samuel' , 'Beddoes, Mick', 'Beecher, Henry', ' Beethoven, Ludwig','Begin, Menachem','Belloc , Hilaire',
    'Bellow,Saul',
    'Benchley,Robert',
    'Benenson,Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent , silas','Bentsen,Lloyd', 'Berger, Ric','Bergman,Ingmar', 'Berio, Luciano',

    'Berle, Milton',
    'Berlin, Irving', 'Berne, Rric',
    'Bernhard, Sandra',
    'Berra,Yogi',
    'Berry,Halle', 'Berry,wendell', 'Bethea,Erin', 
    'Bevan, Aneurin',
    'Bevel,Ken',
    'Biden , Joseph', 
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',
    'Biondo,Frank',
    'Birrell, Augustine', 'Black Elk', 'Blair, Robert',
    'Blair, Tony',
    'Blake,Willian'];

// Array.prototype.filter()
// Filter the list of inverntors for those who wew born in the 1500

const fifteen = inventors.filter((inventor) =>{
    return inventor.year >= 1500 && inventor.year<=1599
})
console.log(fifteen);

// 2.) Give us an array of the inventory first and last names
// Array.prototype.map() Kind of factory which takes raw material 
// Map returns same amount of data back but filter may reduce the no of items 

const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last)
console.log(fullNames)

// Array.prototype.sort()
// Q3.) Sort the inventors by birthdate , oldest to youngest
// In sort function we just take two elements where we only sort two items

const ordered = inventors.sort(function(a,b){
    if(a.year>b.year) return 1
    else return -1;
})

ordered = inventors.sort(function(a,b){
    return  a>b?a:b
})

// Q4.) Array.prototype.reduce()
// Reduce allow to do something on every product
// How many years did all the inventors live?
var totalYears = 0;
for(var i = 0; i<inventors.length ; i++){
    totalYears += inventors[i].years
}
console.log(totalYears)

totalYears = inventors.reduce((total , inventor) =>{
    return total + inventor.passed-inventor.year
} , 0)
console.log(totalYears)

// First time the total will be undefined becuase total is sum of all years till then

// Sort the inventors by years lived
const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed-a.year;
    const nextGuy = b.passed -b.year;
    return lastGuy>nextGuy?-1:1
})
console(oldest)

// Create a list of Boulevards in paris that contain 'de' anywhere in the name

const category = document.querySelector('mw-category');
const links = Array.from(category.querySelectorAll('a'));
console.log(typeof(category.querySelectorAll('a')))

const de = links
.map(link => link.textContent)
.filter(streetName => streetName.includes('de'))


// sort the people alpha