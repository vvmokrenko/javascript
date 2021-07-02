//1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.


function createChessBoard() {
    const chessBoard = document.createElement('div');
    document.body.appendChild(chessBoard);

    for (let row = 0; row < 10; row++) { //цикл по строкам

        for (let col = 0; col < 10; col++) { //цикл по столбцам
            let css = col ? {} : { clear: 'left' }; //Когда столбец равен 0 clear отменяет float = 'left' 
            let content = '';

            if (row == 0 || row == 9) // Если самый верх или самый низ
                content = col > 0 && col < 9 ? 'ABCDEFGH'.charAt(col - 1) : null; //рисуем только ддля столбцов от 1 до 8
            else if (col == 0 || col == 9) //если самое лево или право
                content = 9 - row; //Отображаем номер строки для строк от 1 до 8
            else css.background = (col + row) % 2 ? '#000' : '#fff'; //чередуем цвета в зависимости от четности суммы

            let node = document.createElement('div'); //Каждая клетка будет отдельным блоком
            css.width = '30px';
            css.height = css.width;
            css.textAlign = 'center';
            css.float = 'left'; //помещаем максимально высоко как только можно и потом встает влево как только можно 
            for (let i in css) node.style[i] = css[i];
            if (content) node.innerHTML = content;

            chessBoard.appendChild(node);
        }
    }
}

createChessBoard();
