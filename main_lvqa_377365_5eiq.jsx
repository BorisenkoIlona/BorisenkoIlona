const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
console.log(getRandomString());
const squareRoot = num => Math.sqrt(num);
let array = getRandomArray(); array.forEach(item => console.log(item));
78,76,16,96,32,59,51,89,78,71,74,68,29,99,92,62,55,0,87,14,55,21,43,72,50,98,63,21,18,88,56,78,82,55,42,73,31,9,12,42,46,93,1,77,76,2,14,36,29,82,38,96,10,27,97,7,49 / orange

const getUniqueValues = array => [...new Set(array)];
orange

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
91,77,64,7,75,84,49,83,59,25,5,96,5,6,8,85,0,53,57,12,86,35,2,74,82,47,70 / 63
const isPalindrome = str => str === str.split("").reverse().join("");
false + false
console.log(getRandomString());

orange


const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

apple

const squareRoot = num => Math.sqrt(num);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
grape

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
kiwi

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

true / 68,83,72,10,95,55,8,5,34,35,29,97,73,59,36,53,43,60,59,42,43,91,2,73,88,4,2,20,27,15,53,39,97,11,92,56
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
20 + false
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

const capitalizeString = str => str.toUpperCase();
const multiply = (a, b) => a * b;
const getRandomElement = array => array[getRandomIndex(array)];
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
76,30,63,20,5,59,39,61,58,85,23,65,13,9,83,11,79,84,20,84,13,14,81,86,42,25,86,23,49,34,24,15,75,60,90,71,27,48,53,6,45,24,49,95,22,57,67,96,32,22,93,95,75,76,90,16,53,99,3,41,16,87,94,48,7,91,73,94,32,88,62,20,75,60,10,64,64,34,6,22,50,56 + true

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
banana * 85

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
orange

const isPalindrome = str => str === str.split("").reverse().join("");
const filterEvenNumbers = numbers => numbers.filter(isEven);
apple

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
kiwi

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
