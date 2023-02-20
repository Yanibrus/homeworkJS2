var age = +prompt('Введите свой возраст')

if (age >= 0 && age <= 18) {
    alert('Вы ещё молоды, Вам нужно учиться');
}else if (age >= 19 && age <= 50) {
    alert('Вам нужно работать');
}else if (age >= 51 && age <= 59) {
    alert('Вам скоро на пенсию');
}else if (age >= 59 && age <= 100) {
    alert('Вы пенсионер');
}else if (age >= 101 && age <= 120) {
    alert('Вы удивительно долго живете')
}else{
    alert('Что-то пошло не так ((( ');
}


var time = +prompt('Введите время в цифрах от 1 до 24: ')

switch (time) {
    case 1:
        alert('1 час ночи');
        break;
    case 2:
    case 3:
    case 4:
        alert(time + ' часа ночи');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert(time +' часов утра');
        break;
    case 11:
    case 12:
        alert(time +' часов дня');
        break;
    case 13:
        alert('1 час дня');
        break;
    case 14:
    case 15:
    case 16:
        alert(time + ' часа дня');
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
        alert((time - 12) + ' часов вечера');
        break;
    case 22:
    case 23:
    case 24:
        alert((time - 12) + ' часов ночи');
        break;

    default:
    alert('Что-то пошло не так ((( ')
        break;
}
