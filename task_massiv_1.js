const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {

    
    return arr.filter(item=>item.rating>=8);
    

      
}

console.log(showGoodFilms(films));




function showListOfFilms(arr) {
    

    const res=arr.reduce((acc,curr)=>`${typeof(acc)==='object'?acc.name:acc}, ${curr.name}`);
    return res;

}

console.log(showListOfFilms(films));




function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;

    });
}//map создает новый массив и добавляет в каждый объект поле id и в качестве значения поля id подставляет индекс i

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {

    return arr.every(film => film.id );
    // return arr.every(film => film.id || film.id === 0 ? true : false);
    
}

console.log(checkFilms(tranformedArray));