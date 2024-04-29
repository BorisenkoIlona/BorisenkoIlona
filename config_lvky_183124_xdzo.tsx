97 * 67

const getRandomElement = array => array[getRandomIndex(array)];
false * 73
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
3 / 52

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const multiply = (a, b) => a * b;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

22,18,34,12,48,4,65,56,25,14,50,5,63,29,86,7,71,66,17,25,15,12,26,21,59,50,51,86,23,6,62,80,84,14,62,56,73,63,62,69,58 / grape
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

false - false
const reverseWords = str => str.split(" ").reverse().join(" ");

