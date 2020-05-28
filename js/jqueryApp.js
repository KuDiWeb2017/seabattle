$(document).ready(function () {
    var BattleVariant = [

[
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, '40', '40', '40', '40', 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, '30', '30', '30', 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, '20', '20', 00, '21', 00, '10', 00, 00, 00, 00]
           , [00, 00, 00, 00, '21', 00, 00, 00, '31', 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, '31', 00, 00]
           , [00, 00, 00, 00, 00, '10', 00, 00, '31', 00, 00]
           , [00, 00, '10', 00, 00, 00, 00, 00, 00, 00, '10']
           , [00, 00, 00, 00, '20', '20', 00, 00, 00, 00, 00]

]
, [
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, '10', 00, 00, 00, '30', '30', '30', 00, 00, 00]
           , [00, 00, 00, '41', 00, 00, 00, 00, 00, 00, '10']
           , [00, 00, 00, '41', 00, 00, 00, 00, '31', 00, 00]
           , [00, '21', 00, '41', 00, '20', '20', 00, '31', 00, 00]
           , [00, '21', 00, '41', 00, 00, 00, 00, '31', 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, '10', 00, 00, 00, '20', '20', 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, '10', 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, '10', 00],


]
            , [
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, '10', 00, 00, 00, 00, '20', '20']
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, '10', 00, 00]
           , [00, 00, '41', 00, 00, 00, 00, 00, 00, 00, '31']
           , [00, 00, '41', 00, '20', '20', 00, 00, 00, 00, '31']
           , [00, 00, '41', 00, 00, 00, 00, 00, 00, 00, '31']
           , [00, 00, '41', 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, '10', 00, 00, 00, '10']
           , [00, 00, '20', '20', 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, '30', '30', '30', 00, 00],


]
           , [
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, '20', '20', 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, '30', '30', '30', 00]
           , [00, 00, '20', '20', 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, '10', 00, 00, 00, 00]
           , [00, '41', 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, '41', 00, 00, 00, 00, 00, 00, 00, '20', '20']
           , [00, '41', 00, 00, '10', 00, 00, 00, 00, 00, 00]
           , [00, '41', 00, 00, 00, 00, 00, 00, 00, '31', 00]
           , [00, 00, 00, 00, 00, '10', 00, 00, 00, '31', 00]
           , [00, 00, 00, '10', 00, 00, 00, 00, 00, '31', 00],


]
            , [
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, '10', 00, '21', 00, 00, 00, 00, 00, '10', 00]
           , [00, 00, 00, '21', 00, '10', 00, '31', 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, '31', 00, 00, 00]
           , [00, '10', 00, 00, 00, 00, 00, '31', 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, '21']
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, '21']
           , [00, '20', '20', 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, '31', 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, '31', 00]
           , [00, '40', '40', '40', '40', 00, 00, 00, 00, '31', 00],


]
            , [
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, '31', 00, 00, '30', '30', '30', 00]
           , [00, 00, 00, 00, '31', 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, '31', 00, 00, 00, 00, 00, 00]
           , [00, '21', 00, 00, 00, 00, 00, 00, '20', '20', 00]
           , [00, '21', 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, '10', 00]
           , [00, 00, '10', 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, '10', 00, '10']
           , [00, '20', '20', 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, '40', '40', '40', '40'],


]
            , [
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, '20', '20', 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, '10', 00]
           , [00, 00, 00, '41', 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, '41', 00, 00, 00, 00, '20', '20', 00]
           , [00, '21', 00, '41', 00, 00, 00, 00, 00, 00, 00]
           , [00, '21', 00, '41', 00, 00, 00, '10', 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, '31']
           , [00, 00, '10', 00, 00, 00, 00, 00, 00, 00, '31']
           , [00, 00, 00, 00, 00, 00, 00, 00, '10', 00, '31']
           , [00, 00, '30', '30', '30', 00, 00, 00, 00, 00, 00],


]
            , [
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, '40', '40', '40', '40', 00]
           , [00, '31', 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, '31', 00, 00, '10', 00, 00, 00, 00, '21', 00]
           , [00, '31', 00, 00, 00, 00, 00, 00, 00, '21', 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, '21', 00, 00, 00, 00, 00, 00, '10', 00, '21']
           , [00, '21', 00, 00, 00, 00, 00, 00, 00, 00, '21']
           , [00, 00, 00, '31', 00, 00, '10', 00, 00, 00, 00]
           , [00, 00, 00, '31', 00, 00, 00, 00, 00, '10', 00]
           , [00, 00, 00, '31', 00, 00, 00, 00, 00, 00, 00],


]
            , [
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, '20', '20', 00, 00, 00, 00, 00, 00, '10']
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, '41', 00, 00, 00, 00, 00]
           , [00, '20', '20', 00, 00, '41', 00, 00, 00, '20', '20']
           , [00, 00, 00, 00, 00, '41', 00, 00, 00, 00, 00]
           , [00, 00, 00, '10', 00, '41', 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, '10']
           , [00, '31', 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, '31', 00, 00, 00, 00, 00, '30', '30', '30', 00]
           , [00, '31', 00, 00, '10', 00, 00, 00, 00, 00, 00],


]
            , [
           [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, '10', 00, 00, 00, 00, 00, 00]
           , [00, '21', 00, 00, 00, 00, 00, 00, '20', '20', 00]
           , [00, '21', 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, '31', 00, 00, 00, 00, 00, '20', '20']
           , [00, 00, 00, '31', 00, 00, '10', 00, 00, 00, 00]
           , [00, 00, 00, '31', 00, 00, 00, 00, 00, '10', 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, 00, 00, 00, '40', '40', '40', '40', 00, 00, 00]
           , [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
           , [00, '30', '30', '30', 00, 00, 00, 00, '10', 00, 00],


],

    ],
        BattleP = BattleVariant[Math.floor(Math.random() * 10)];

    var winV = 0,
        winP = 0,
        r = 0,
        rF = 0,
        c = 0,
        cF = 0,
        vF = 0,
        checkFire = 0;

    $('.corabl').val({
        palubFire: 0,
        trN: 0,
        tdN: 0,
        vertical: 0
    });
    $('.corablP').val({
        palubFire: 0,
        trN: 0,
        tdN: 0,
        vertical: 0
    });
    $('.corablP').removeClass('draggable');
    /////////----main///////////////////
    $('#start').click(function () {
        //        vrungelTalk(frazVrungel[0]);
        //        $('#talkVrungel').fadeOut(4500);
        var finish = false;
        $('.corabl').filter(function (index) {
            return $(this).val().trN == 0;
        }).map(function () {
            vrungelTalk(frazVrungel[3]);
            $('#talkVrungel').fadeOut(1000);
            finish = true;
        });
        if (finish) return;
        $('.corabl').removeClass('draggable');
        $('.corabl').fadeOut(20);
        $('.corablP').fadeOut(20);
        ShipsCoords();
        $('#start').off("click");
        BattlePirate();
    });
    
    $('#startNew').click(function () {
        location.reload()
    });

    function ShipsCoords() {
        //        ff: {
        for (var i = 1; i <= 10; i++) {
            for (var j = 1; j <= 10; j++) {
                if (BattleP[i][j] != 0) {
                    var sh = BattleP[i][j];
                    $ship = $('[class ^= "corablP palub' + sh[0] + '"]');
                    ff: {
                        for (var n = 0; n < $ship.length; n++) {
                            if (($ship[n].value.trN == 0) && sh[1] == 0) {

                                $($ship[n]).val({
                                    palubFire: 0,
                                    trN: i,
                                    tdN: j,
                                    vertical: sh[1]
                                });
                                var sh = '#' + $ship[n].id;
                                $(sh).css('position', 'absolute');
                                $(sh).css('border-bottom', ' 10px solid red');
                                $(sh).offset({
                                    top: (144 + (i - 1) * 52) + 2 * i,
                                    left: (306 + (j - 1) * 54)
                                });
                                j = j + $(sh).children().length;
                                break ff;
                            }
                        }
                    }
                }
            }
        };
        for (var j = 1; j <= 10; j++) {
            for (var i = 1; i <= 10; i++) {
                if (BattleP[i][j] != 0) {
                    var sh = BattleP[i][j];
                    $ship = $('[class ^= "corablP palub' + sh[0] + '"]'); //'[class *= "corablP palub4"]'
                    ff: {
                        for (var n = 0; n < $ship.length; n++) {
                            if (($ship[n].value.trN == 0) && sh[1] == 1) {
                                //                            $($ship[n]).fadeOut(10);
                                $($ship[n]).val({
                                    palubFire: 0,
                                    trN: i,
                                    tdN: j,
                                    vertical: sh[1]
                                });
                                var sh = '#' + $ship[n].id;
                                $(sh).css('position', 'absolute');
                                $(sh).css('border-bottom', ' 10px solid red');
                                $(sh).css('width', "48px");
                                $(sh).children(0).css('marginLeft', '0px');
                                $(sh).children().css('height', '50px');
                                $(sh).offset({
                                    top: (144 + (i - 1) * 50) + 3 * i,
                                    left: (308 + (j - 1) * 54)
                                });
                                i = i + $($ship[n]).children().length;
                                break ff;
                            }
                        }
                    }
                }
            }
        }

    }

    function BattlePirate() {
        $('.fireV').fadeOut(2000);
        $('.fireP').fadeIn(5000);

        $('#blackSea').delay(1000).fadeIn(2000);
        $("#blackSea td").click(function (event) {
            $("#blackSea .N").css('background-color', 'aqua');
            ShotV(event);
            return false;
        });

        function ShotV(event) {
            MyShot(); //звук выстрела
            $('#pushka').css('background-image', "url('img/pushka3.gif')").delay(1000);
            var elem = document.elementFromPoint(event.clientX, event.clientY),
                c = elem.cellIndex || 0,
                r = elem.parentElement.rowIndex || 0,
                checkShip = BattleP[r][c];
            if (checkShip == 0) {
                setTimeout(Splash, 1000);
                setTimeout(function () {
                    $(event.target).css("color", "aqua").html('&#128166;');
                }, 1100);
                setTimeout(function () {
                    $(event.target).css("color", "lightgrey").html('&#128163;');
                }, 1500);
                pirateTalk(frazPirate[1]);
                $('#talkPirate').fadeOut(1700);

                BattleP[r][c] = 'X';
                setTimeout(function () {
                    $('#pushka').css('background-image', "url('img/pushka4.png')")
                }, 1700);
                BattleVrungel();
                return;
            } else {
                if (checkShip == 'X') return;
                setTimeout(MyFire, 1000);
                setTimeout(function () {
                    $(event.target).css("color", "red").html('&#128293;'); //.css("text-shadow", "2px 2px orange").delay(3000).css("color", "red")
                }, 1000);

            };
            setTimeout(function () {
                $('#pushka').css('background-image', "url('img/pushka4.png')")
            }, 1700);
            var ship = document.querySelectorAll('.corablP');
            for (var i = ship.length - 1; i >= 0; i--) {
                var fireOk = false;
                if (ship[i].value.trN == r && (ship[i].value.vertical == 0) || ship[i].value.tdN == c && (ship[i].value.vertical == 1)) {
                    if (c >= ship[i].value.tdN && c <= (ship[i].value.tdN + ship[i].childElementCount) && (ship[i].value.vertical == 0)) {
                        fireOk = true;
                    } else {
                        if (r >= ship[i].value.trN && r <= (ship[i].value.trN + ship[i].childElementCount) && (ship[i].value.vertical == 1)) {
                            fireOk = true;
                        }
                    }
                    if (fireOk) {
                        if (BattleP[r][c] != 0 && BattleP[r][c] != 1) {
                            BattleP[r][c] = 1;
                            ship[i].value.palubFire++;
                            pirateTalk(frazPirate[2]);
                            $('#talkPirate').fadeOut(2000);
                        }
                        if (ship[i].childElementCount == ship[i].value.palubFire) {
                            var shId = '#' + ship[i].id + '>.parusP';
                            $(shId).html('&#128293;');
                            ship[i].style.display = "block";
                            ship[i].className += ' fireP';
                            winP++;
                            var $shClone = ship[i].cloneNode(true);
                            document.getElementById("ships").appendChild($shClone);
                            $shClone.style.position = "";
                            $shClone.style = {};
                            $shClone.style.display = "block";
                            //                            $shClone.className += ' cloneP';
                            $shClone.className = ' cloneP';
                            if (winP == 10) {
                                pirateTalk(frazPirate[0]);
//                                $('#talkPirate').fadeOut(2000);
                                $('#blackSea,#sea').fadeOut();
                                $('.corabl, .corablP').fadeOut();
                                $('#sunduk').fadeIn(100);
                                //появление сундука
                               
                                return;
                            };
                        }
                    }
                }
            }
        }
    }

    function caseCellFire() {
        switch (checkFire) {
            case 0:
                {
                    r = Math.floor(Math.random() * 9 + 2);
                    c = Math.floor(Math.random() * 9 + 2);
                    break;
                }
            case 1:
                {
                    var randomR = Math.floor(Math.random() * 2);
                    if (randomR == 0) {
                        randomR = Math.floor(Math.random() * 2);
                        if (randomR == 0) {
                            r = rF + 1;
                            (r > 10) ? r = rF - 1: r = r;
                            c = cF;
                        } else {
                            c = cF + 1;
                            (c > 10) ? c = cF - 1: c = c;
                            r = rF;
                        }
                    } else {
                        randomR = Math.floor(Math.random() * 2);
                        if (randomR == 0) {
                            r = rF - 1;
                            (r == 0) ? r = rF + 2: r = r;
                            c = cF;
                        } else {
                            c = cF - 1;
                            (c == 0) ? c = cF + 2: c = c;
                            r = rF;
                        }
                    }

                    rFF = rF,
                    cFF = cF;

                    break;
                }
            default:
                {

                    if (cF - cFF > 0) {
                        c = c + 1;
                        rFF = rF,
                            cFF = cF;

                    } else {
                        if (cF - cFF < 0) {
                            c = c - 1;
                            rFF = rF,
                                cFF = cF;

                        } else {

                            if ((cF == cFF) && (rF == rFF)) {
                                if (c - cF < 0) {
                                    cF = cFF;
                                    c = c + checkFire + 1;
                                    cFF = c - 1;
                                } else {
                                    if (c - cF > 0) {
                                        cF = cFF;
                                        c = c - checkFire - 1;
                                        cFF = c + 1;
                                    } else {


                                        if (r - rF < 0) {
                                            rF = rFF;
                                            r = r + checkFire + 1;
                                            rFF = r - 1;
                                        } else {
                                            rF = rFF;
                                            r = r - checkFire - 1;
                                            rFF = r + 1;
                                        }
                                    }
                                }
                            } else {

                                if (rF - rFF > 0) {
                                    r = r + 1;
                                    rFF = rF,
                                        cFF = cF;

                                } else {
                                    if (rF - rFF < 0) {
                                        r = r - 1;
                                        rFF = rF,
                                            cFF = cF;
                                    } else {


                                    }
                                }
                            }
                        }
                    }




                    break;
                }

        }


    }

    function BattleVrungel() {
        $('.fireP').fadeOut(2600);
        $('.fireV').fadeIn(5000);
        $('#blackSea').delay(1000).fadeOut(2000);
        $("#sea .N").css('background-color', 'aqua');
        setTimeout(ShotP(), 4000);

        function ShotP() {
            caseCellFire();
            var checkShip = BattleV[+r][+c];
//            document.getElementById("coordsTd").innerHTML = 'r-' + r + ' c-' + c;
            if (checkShip == 0) {
                setTimeout(Splash, 4000);
                setTimeout(function () {
                    $('#pushkaPirate').css('background-image', "url('img/pushka3.gif')"); //.delay(1000);
                    EnemyShot();

                    $('#sea tr:nth-child(' + (r + 1) + ') td:nth-child(' + (c + 1) + ')').css("color", "aqua").html('&#128166;');
                }, 3500);
                setTimeout(function () {

                    $('#sea tr:nth-child(' + (r + 1) + ') td:nth-child(' + (c + 1) + ')').css("color", "lightgrey").html('&#128163;');
                    vrungelTalk(frazVrungel[4]);
                    $('#talkVrungel').fadeOut(4700);
                    BattleV[r][c] = 'X';

                    BattlePirate();
                    return;
                }, 4000);
                setTimeout(function () {
                    $('#pushkaPirate').css('background-image', "url('img/pushka4.png')");
                }, 4700);


            } else {
                if (checkShip == 'X' || checkShip == 1) {
                    ShotP();
                    return
                }
                setTimeout(EnemyFire, 4000);
                setTimeout(function () {
                    var ship = document.querySelectorAll('.corabl');
                    for (var i = ship.length - 1; i >= 0; i--) {
                        var fireOk = false;
                        if (ship[i].value.trN == r && (ship[i].value.vertical == 0) || ship[i].value.tdN == c && (ship[i].value.vertical == 1)) {
                            if (c >= ship[i].value.tdN && c <= (ship[i].value.tdN + ship[i].childElementCount) && (ship[i].value.vertical == 0)) {
                                fireOk = true;
                            } else {
                                if (r >= ship[i].value.trN && r <= (ship[i].value.trN + ship[i].childElementCount) && (ship[i].value.vertical == 1)) {
                                    fireOk = true;
                                }
                            }
                            if (fireOk) {

                                if (BattleV[r][c] != 0 && BattleV[r][c] != 1 && BattleV[r][c] != 'X') {
                                    $('#pushkaPirate').css('background-image', "url('img/pushka3.gif')"); //.delay(1000);
                                    EnemyShot();

                                    $('#sea tr:nth-child(' + (r + 1) + ') td:nth-child(' + (c + 1) + ')').css("color", "red").html('&#128293;'); //.css("text-shadow", "2px 2px orange").delay(3000).css("color", "red")
                                    vrungelTalk(frazVrungel[6]);
                                    $('#talkVrungel').fadeOut(4700);
                                    rF = r;
                                    cF = c;
                                    BattleV[r][c] = 1;
                                    checkFire++;
                                    ship[i].value.palubFire++;

                                }
                                if (ship[i].childElementCount == ship[i].value.palubFire) {
                                    $('[class *="' + ship[i].className + '"]>.parus').html('&#128293;');
                                    ship[i].style.display = "block";
                                    ship[i].className += ' fireV';
                                    var $shClone = ship[i].cloneNode(true);
                                    document.getElementById("shipsPirate").appendChild($shClone);
                                    $shClone.style.position = "";
                                    $shClone.style = {};
                                    $shClone.style.display = "block";

                                    $shClone.className = ' cloneV';
                                    winV++;
                                    checkFire = 0;
                                    rF = 0,
                                        rFF = 0;
                                    cF = 0;
                                    cFF = 0;
                                    var rowBattle = ship[i].value.trN,
                                        colBattle = ship[i].value.tdN,
                                        vv = +ship[i].value.vertical,
                                        nCh = +ship[i].childElementCount || 1;
                                    BattleV[rowBattle][colBattle - 1] = 'X';
                                    BattleV[rowBattle][colBattle + nCh] = 'X';
                                    for (var i = 1 * rowBattle - 1; i <= rowBattle + 1; i = i + 2) {
                                        for (var j = 1 * colBattle - 1; j <= colBattle + 1 * nCh; j++) {
                                            if (i >= 1 && i <= 10 && j >= 1 && j <= 10)
                                                BattleV[i][j] = 'X';
                                        }
                                    }
                                    checkFire = 0;
                                    if (winV == 10) {
                                        $('.fireV').fadeIn(5000);
                                        pirateTalk(frazPirate[1]);
                                        $('#blackSea,#sea').fadeOut();
                                        $('.corabl, .corablP').fadeOut();
                                        $('#flag').fadeIn(100);
                                        //появление флага
                                        return;
                                    } else {
                                        setTimeout(ShotP(), 8500);
                                    }
                                } else {
                                    setTimeout(ShotP(), 8500);
                                }
                            }
                        }
                    }
                }, 4500);
                setTimeout(function () {
                    $('#pushkaPirate').css('background-image', "url('img/pushka4.png')")
                }, 4700);

            }
        }
    }

    function MyFire() {
        document.getElementById("MyFire").play();
    };

    function MyShot() {
        document.getElementById("MyShot").play();
    };

    function EnemyShot() {
        document.getElementById("EnemyShot").play();
    };

    function EnemyFire() {
        document.getElementById("EnemyFire").play();
    };

    function Splash() {
        document.getElementById("Splash").play();
    };
    var pushka = document.getElementById("pushka");
    pushka.addEventListener("mouseover", MyShot);
    var pushkaPirate = document.getElementById("pushkaPirate");
    pushkaPirate.addEventListener("mouseover", EnemyShot);
})
