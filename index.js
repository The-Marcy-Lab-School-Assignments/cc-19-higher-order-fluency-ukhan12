const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}];

//write your code here


//Q1
function averageAge(arr){
    const arr2 = arr.map(el => el.age);
    const sum = arr2.reduce((currentValue, initialValue) => currentValue + initialValue);
    return Math.floor(sum/arr2.length);
}

//Q2
function bananaBread(arr){
   const arr2 = arr.map((el) => {
       el[`bananaBread`] = `${el.name} got banana bread at ${el.job}`;
       return el;
    });
    return (arr2);
}

//Q3
function ninetiesBabies(arr){
   const arr2 = arr.filter(el => el.age > 21);
    return (arr2);
}

//Q4
function addSchool(arr){
   const arr2 = arr.map((el) => {
    el['school'] = 'The Marcy Lab School';
    return el;
   });
    return (arr2);
};

//Q5
function allUseJavaScript(arr){
   const bool = arr.every((el) => {
        return el.language = 'JavaScript';
   });
    return (bool);
}

