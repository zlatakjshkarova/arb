let phone = document.querySelector('#phone');


//keydown - нажатие клавиши на клавиатуре

//event - объект содержание информацию о событии

//event.preventDefault() - отмена действия по умолчанию

phone.addEventListener('keydown', (event) => {
    let isDigit = false;
    let isDashedPlus = false;
    let isContol = false;


    //Если водится цифра то 

    if (event.key >= 0 && event.key <= 9) {
        isDigit = true;

    }

    // Если водится - или + то
    if (event.key == '-' || event.key == '+') {
        isDashedPlus = true;
    }

    //Если вводится стрелка влево /вправо ,Backspace ,Delete' то

    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Delete') {
        isContol = true;

    }

    // Если введено  не число И не + или - , не Стрелки или ИЛИ нажать пробел то
    //отменить действие по умолчанию для поля ввода
    if (!isDigit && !isDashedPlus && !isContol || event.keyCode == 32) {
        event.preventDefault();
    }

    if (isDigit == true) {
        console.log('цифра')
    } else {
        event.preventDefault();

    }





})
