var BattleV = [
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var DragManager = new function () {

    /**
     * составной объект для хранения информации о переносе:
     * {
     *   elem - элемент, на котором была зажата мышь
     *   avatar - аватар
     *   downX/downY - координаты, на которых был mousedown
     *   shiftX/shiftY - относительный сдвиг курсора от угла элемента
     * }
     */
    var dragObject = {};
    var old = {};
    var self = this;

    function onMouseDown(e) {

        if (e.which != 1) {
            return;
        }

        var elem = e.target.closest('.draggable');

        if (!elem) return;

        dragObject.elem = elem;

        // запомним, что элемент нажат на текущих координатах pageX/pageY
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;


        return false;
    }

    function onMouseMove(e) {
        if (!dragObject.elem) return; // элемент не зажат

        if (!dragObject.avatar) { // если перенос не начат...
            var moveX = e.pageX - dragObject.downX;
            var moveY = e.pageY - dragObject.downY;

            // если мышь передвинулась в нажатом состоянии недостаточно далеко
            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                return;
            }


            // начинаем перенос
            dragObject.avatar = createAvatar(e); // создать аватар

            if (!dragObject.avatar) { // отмена переноса, нельзя "захватить" за эту часть элемента
                dragObject = {};
                return;
            }

            // аватар создан успешно
            // создать вспомогательные свойства shiftX/shiftY
            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(e); // отобразить начало переноса
        }

        // отобразить перенос объекта при каждом движении мыши



        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

        return false;
    }

    function checkNeighbours() {
        var nRow = dragObject.avatar.value.trN,
            nCol = dragObject.avatar.value.tdN;
        if (nRow == 0 && nCol == 0) return false;
        var h = 1,
            v = dragObject.avatar.value.vertical;

        (v == 1) ? h = 0: h = 1;
        for (var i = 0; i < dragObject.avatar.childElementCount; i++) {
            if (!checkNeighbour(BattleV, nRow + i * v, nCol + i * h, v, h))
                return false;
        }
        return true;
    }


    function checkNeighbour(data, row, col, v, h) {
        var kol = 0,
            i = 0,
            j = 0,
            r = 0,
            c = 0;
        for (i = row - 1; i <= row + 1; i++)
            for (j = col - 1; j <= col + 1; j++) {
                if (i < 0) continue
                else {
                    if (i > data.length - 1) {
                        continue;
                    } else r = i
                };
                if (j < 0) continue
                else {
                    if (j > data[row].length - 1) {
                        continue;
                    } else c = j
                };
                if (dragObject.avatar.childElementCount == 1) {
                    if (data[r][c] != 0 && (r != row || c != col)) return false;
                } else {
                    if (data[r][c] != 0 && (r * v + c * h != row * v + col * h)) return false;
                };

            }
        return true;
    }



    function onMouseUp(e) {
        if (dragObject.avatar) { // если перенос идет
            var coords = getCoords(dragObject.avatar);

            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            //координируем avatart по клеткам

            placeShip(e);

            finishDrag(e);
        }


        // перенос либо не начинался, либо завершился
        // в любом случае очистим "состояние переноса" dragObject

        dragObject = {};
    }

    function finishDrag(e) {
        var dropElem = findDroppable(e);

        if (!dropElem) {
            self.onDragCancel(dragObject);
        } else {
            self.onDragEnd(dragObject, dropElem);
        }
    }

    function placeShip(e) {

        var sea = document.getElementById('sea'),
            tr = sea.getElementsByTagName('tr'),
            td = tr[1].getElementsByTagName('td')[0],
            th = tr[0].getElementsByTagName('th')[0],
            dropLeft = sea.offsetLeft + td.offsetWidth + 6, //6= 2px-border*3   
            dropTop = sea.offsetTop + th.offsetHeight + 6,
            dropWidth = sea.offsetWidth - (td.offsetWidth + 6),
            dropHeight = sea.offsetHeight - 4,
            tdHalf = parseInt((td.offsetWidth + 2) / 2);

        var placeH, numberTd, placeV, numberTr, placeLeft;


        //горизонт.положение на поле относительно начала таблицы
        placeH = dragObject.avatar.offsetLeft - dropLeft;

        //проверка на выход за границы поля
        if (placeH < 0) {
            placeH = tdHalf
        } else {
            if (placeH > dropWidth - dragObject.avatar.offsetWidth) {
                placeH = dropWidth - dragObject.avatar.offsetWidth;
            } else {
                placeH = dragObject.avatar.offsetLeft - dropLeft;
            }
        };

        //если выходит за середину ячейки, то сдвигаем на следующую
        (placeH % (td.offsetWidth + 2) > tdHalf) ? numberTd = Math.round(placeH / (td.offsetWidth + 2)): numberTd = Math.floor(placeH / (td.offsetWidth + 2));


        placeLeft = dropLeft + numberTd * (td.offsetWidth + 2) + 'px';

        //повторяем по вертикали
        placeV = (dragObject.avatar.offsetTop - dropTop);

        if (placeV < 0) {
            placeV = tdHalf
        } else {
            if (placeV > dropHeight - dragObject.avatar.offsetHeight) {
                placeV = dropHeight - dragObject.avatar.offsetHeight;
            } else {
                placeV = dragObject.avatar.offsetTop - dropTop
            }
        };

        (placeV % (td.offsetHeight + 2) > tdHalf) ? numberTr = Math.round(placeV / (td.offsetHeight + 2)): numberTr = Math.floor(placeV / (td.offsetHeight + 2));

        var h = 1,
            v = dragObject.avatar.value.vertical;
        (v == 1) ? h = 0: h = 1;


        ///////////////////////////////////ставим на поле , запоминаем значения
        dragObject.avatar.style.left = placeLeft;
        dragObject.avatar.style.top = (dropTop - 5) + numberTr * (td.offsetHeight + 2) + 'px';
        dragObject.avatar.value = {
            palubFire: 0,
            trN: numberTr + 1,
            tdN: numberTd + 1,
            vertical: dragObject.avatar.value.vertical
        };

        //обнуляем ячейки, где стоял корабль
        for (var i = 0; i < dragObject.avatar.childElementCount; i++) {
            if (old.value.trN != 0) {
                //                tr[old.value.trN + i * v].getElementsByTagName('td')[old.value.tdN + i * h].value = '0';
                BattleV[old.value.trN + i * v][old.value.tdN + i * h] = 0;
            }
        }

        /////////////////////////////////// проверяем на соседние - (м-ду соседними кораблями д.б. >1 пустой ячейки)

        if (!checkNeighbours()) {
            vrungelTalk(frazVrungel[5]);
            setTimeout(function () {
                document.getElementById('talkVrungel').style.display = 'none'
            }, 4000);
            /*$('#talkPirate').fadeOut(2000);*/
            dragObject.avatar.rollback(); //откатываемся назад
            if (dragObject.avatar.value.trN != 0) placeShip(e);
            return;
        }


        //заполняем ячейки на поле боя значениями корабля '30'= 3-х палубный,горизонтальный    '31'= 3-х палубный,вертикальный    
        for (var i = 0; i < dragObject.avatar.childElementCount; i++) {

            //            tr[numberTr + 1 + i * v].getElementsByTagName('td')[numberTd + 1 + i * h].value = '1';
            switch (dragObject.avatar.childElementCount) {
                case 1:
                    {
                        (dragObject.avatar.value.vertical == 1) ? BattleV[numberTr + 1 + i * v][numberTd + 1 + i * h] = '11' : BattleV[numberTr + 1 + i * v][numberTd + 1 + i * h] = '10';
                        break;
                    }
                case 2:
                    {
                        (dragObject.avatar.value.vertical == 1) ? BattleV[numberTr + 1 + i * v][numberTd + 1 + i * h] = '21' : BattleV[numberTr + 1 + i * v][numberTd + 1 + i * h] = '20';
                        break;
                    }
                case 3:
                    {
                        (dragObject.avatar.value.vertical == 1) ? BattleV[numberTr + 1 + i * v][numberTd + 1 + i * h] = '31' : BattleV[numberTr + 1 + i * v][numberTd + 1 + i * h] = '30';
                        break;
                    }
                case 4:
                    {
                        (dragObject.avatar.value.vertical == 1) ? BattleV[numberTr + 1 + i * v][numberTd + 1 + i * h] = '41' : BattleV[numberTr + 1 + i * v][numberTd + 1 + i * h] = '40';
                        break;
                    }
            }

        }

        return;
    };



    function createAvatar(e) {

        // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
        var avatar = dragObject.elem;
        old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: getComputedStyle(avatar).position || '',
            left: getComputedStyle(avatar).left || '',
            top: getComputedStyle(avatar).top || '',
            zIndex: getComputedStyle(avatar).zIndex || '',
            value: avatar.value
        };

        // функция для отмены переноса
        avatar.rollback = function () {
            old.parent.insertBefore(avatar, old.nextSibling);
            avatar.style.position = old.position;
            avatar.style.left = old.left;
            avatar.style.top = old.top;
            avatar.style.zIndex = old.zIndex;
            avatar.value = old.value;
        };

        return avatar;
    }

    function startDrag(e) {

        var avatar = dragObject.avatar;
        //        for (var i = 0; i < avatar.children.length; i++) {
        //                    avatar.children[i].style.backgroundImage = "url('img/parus4.png')"
        //                           }

        // инициировать начало переноса
        document.body.appendChild(avatar);
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';

    };

    function findDroppable(event) {
        // спрячем переносимый элемент
        dragObject.avatar.hidden = true;

        // получить самый вложенный элемент под курсором мыши
        var elem = document.elementFromPoint(event.clientX, event.clientY);

        // показать переносимый элемент обратно
        dragObject.avatar.hidden = false;

        if (elem == null) {
            // такое возможно, если курсор мыши "вылетел" за границу окна
            return null;
        }

        return elem.closest('.droppable');
    }

    //двойной клик - смена вертикального на горизонтальный корабль
    function onMouseDblclick(e) {
        var elem = e.target.closest('.draggable'),
            tr = document.getElementById('sea').getElementsByTagName('tr');
        if ((elem.value.vertical == 0) && (elem.children.length != 1)) {
            elem.value = {
                palubFire: 0,
                trN: elem.value.trN,
                tdN: elem.value.tdN,
                vertical: 1
            };
            //            elem.style.width = (elem.children[0].offsetHeight - 4) + "px";
            elem.style.width = "48px";
            //            elem.style.height = (elem.children[0].offsetHeight * elem.children.length + 2 * (elem.children.length + 1)) + "px";
            elem.children[0].style.marginLeft = "0px";

            for (var i = 0; i < elem.children.length; i++) {
                elem.children[i].style.height = (elem.offsetWidth + elem.children.length) + "px";
                //                elem.children[i].style.height = "50px";
                if (elem.value.trN != 0) {
                    //                    tr[elem.value.trN].getElementsByTagName('td')[elem.value.tdN + i].value = 0;
                    BattleV[elem.value.trN][elem.value.tdN + i] = 0;
                    //                tr[elem.value.trN].getElementsByTagName('td')[elem.value.tdN + i].innerHTML = '0';
                    switch (elem.children.length) {
                        case 1:
                            {
                                (elem.value.vertical == 1) ? BattleV[elem.value.trN + i][elem.value.tdN] = '11' : BattleV[elem.value.trN + i][elem.value.tdN] = '10';
                                break;
                            }
                        case 2:
                            {
                                (elem.value.vertical == 1) ? BattleV[elem.value.trN + i][elem.value.tdN] = '21' : BattleV[elem.value.trN + i][elem.value.tdN] = '20';
                                break;
                            }
                        case 3:
                            {
                                (elem.value.vertical == 1) ? BattleV[elem.value.trN + i][elem.value.tdN] = '31' : BattleV[elem.value.trN + i][elem.value.tdN] = '30';
                                break;
                            }
                        case 4:
                            {
                                (elem.value.vertical == 1) ? BattleV[elem.value.trN + i][elem.value.tdN] = '41' : BattleV[elem.value.trN + i][elem.value.tdN] = '40';
                                break;
                            }
                    }

                }

            }

            elem.style.height = (elem.children[0].offsetHeight * elem.children.length - 5) + "px";
            //elem.style.height = (elem.children[0].offsetHeight * elem.children.length - 2 * (elem.children.length )+elem.children.length-2) + "px";

        } else {
            if (elem.children.length != 1) {
                elem.value = {
                    palubFire: 0,
                    trN: elem.value.trN,
                    tdN: elem.value.tdN,
                    vertical: 0
                };
                //                elem.style.width = (elem.children[0].offsetHeight * elem.children.length+elem.children.length+(4-elem.children.length)) + "px";
                //                elem.style.width = (elem.children[0].offsetHeight * elem.children.length + 4) + "px";
                elem.style.height = "40px";
                elem.children[0].style.marginLeft = "10px";
                for (var i = 0; i < elem.children.length; i++) {
                    elem.children[i].style.height = (elem.children[i].offsetHeight - 10) + "px";
                    elem.children[i].style.width = (elem.children[i].offsetWidth) + "px";

                    if (elem.value.trN != 0) {
                        //                        tr[elem.value.trN + i].getElementsByTagName('td')[elem.value.tdN].value = 0;
                        BattleV[elem.value.trN + i][elem.value.tdN] = 0;
                        //                tr[elem.value.trN + i].getElementsByTagName('td')[elem.value.tdN].innerHTML = '0';
                        //                        tr[elem.value.trN].getElementsByTagName('td')[elem.value.tdN + i].value = 1;
                        switch (elem.children.length) {
                            case 1:
                                {
                                    (elem.value.vertical == 1) ? BattleV[elem.value.trN][elem.value.tdN + i] = '11' : BattleV[elem.value.trN][elem.value.tdN + i] = '10';
                                    break;
                                }
                            case 2:
                                {
                                    (elem.value.vertical == 1) ? BattleV[elem.value.trN][elem.value.tdN + i] = '21' : BattleV[elem.value.trN][elem.value.tdN + i] = '20';
                                    break;
                                }
                            case 3:
                                {
                                    (elem.value.vertical == 1) ? BattleV[elem.value.trN][elem.value.tdN + i] = '31' : BattleV[elem.value.trN][elem.value.tdN + i] = '30';
                                    break;
                                }
                            case 4:
                                {
                                    (elem.value.vertical == 1) ? BattleV[elem.value.trN][elem.value.tdN + i] = '41' : BattleV[elem.value.trN][elem.value.tdN + i] = '40';
                                    break;
                                }
                        }

                    }
                }
                elem.style.width = (52 * elem.children.length + elem.children.length) + "px";
            }
        }
        if (!elem) return;

        dragObject.elem = elem;

        return dragObject.elem
    }



    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;
    document.ondblclick = onMouseDblclick;

    this.onDragEnd = function (dragObject, dropElem) {};
    this.onDragCancel = function (dragObject) {};




    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    };

    //  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//    var field = document.getElementById('sea');
//
//    // полное решение - в массиве result
//
//    var fieldCoords = field.getBoundingClientRect();
//
//    var result = [
//      [ // 1
//        fieldCoords.left,
//        fieldCoords.top
//      ],
//      [ // 2
//        fieldCoords.right,
//        fieldCoords.bottom
//      ],
//      [ // 3
//        fieldCoords.left + field.clientLeft,
//        fieldCoords.top + field.clientTop
//      ],
//      [ // 4
//        fieldCoords.left + field.clientLeft + field.clientWidth,
//        fieldCoords.top + field.clientTop + field.clientHeight
//      ]
//    ];
//    document.onclick = function (e) { // выводит текущие координаты при клике
//        document.getElementById('coords').innerHTML = result.join('  ');
//        document.getElementById('coordsTd').innerHTML = e.clientX + ':' + e.clientY;;
//    }




};
//***************************************************
//***************************************************
var vrungel = document.getElementById("vrungel");
var pirate = document.getElementById("pirate");

var talkVrungel = document.getElementById("talkVrungel");
var talkPirate = document.getElementById("talkPirate");

function vrungelTalk(words) {
    talkVrungel.innerHTML = words.text;
    talkVrungel.style.display = "block";
    document.getElementById(words.aud).play();
};

function pirateTalk(words) {
    talkPirate.innerHTML = words.text;
    talkPirate.style.display = "block";

    document.getElementById(words.aud).play();
};

frazVrungel = [{
    text: "Бросим жребий!!!",
    aud: "Grebiy"
}, {
    text: "Свистать всех на верх!!!",
    aud: "NaVerh"
}, {
    text: "Лево руля!!!",
    aud: "LeftRul"
}, {
    text: "На абордаж!!!",
    aud: "Abordag"
}, {
    text: "Мазила!!!",
    aud: "Mazila"
}, {
    text: "Куда прешь! Нейтральные воды!!!",
    aud: "NeitrSea"
}, {
    text: "Попал! Стреляй еще!!!",
    aud: "Popal"
}];

frazPirate = [{
    text: "You Win!!!",
    aud: "YouWin"
}, {
    text: "You Lost!!!",
    aud: "YouLost"
}, {
    text: "You`ve hitted! Shoot more!!",
    aud: "ShotNo"
}];



//vrungel.addEventListener("mouseover", function () {
//                vrungelTalk(frazVrungel[Math.floor(Math.random() * 8)]);
//    
//});
//
//pirate.addEventListener("mouseover", function () {
//    pirateTalk(frazPirate[Math.floor(Math.random() * 3)]);
//});
//
//
//vrungel.addEventListener("mouseout", function () {
//    talkVrungel.style.display = "none";
//});
//
//pirate.addEventListener("mouseout", function () {
//    talkPirate.style.display = "none";
//});
