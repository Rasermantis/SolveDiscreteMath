var table = new Table(4, 4);
var biggest_rects_table = document.getElementById('biggest_rects');

function SelectCell(name) {
    var idBtn = "btn" + name;

    if (document.getElementById(idBtn).style.color == "black" ||
        document.getElementById(idBtn).style.color == "") {
        table.setCellTo1(name);
        SetColorForBtn(idBtn);
    } else {
        table.setCellTo0(name);
        RemoveColorForBtn(idBtn);
    }

}

function SetColorForBtn(idBtn) {
    document.getElementById(idBtn).style.color = "red";
    // document.getElementById(idBtn).style.backgroundColor = "#A52A2A";
}

function RemoveColorForBtn(idBtn) {
    document.getElementById(idBtn).style.color = "black";
    //document.getElementById(idBtn).style.backgroundColor = "#ccc4c4";
}

function CreateChildTable(listOfChosenCells) {
    var res = document.createElement('div');

    // create 16 div (cell)
    for (var i = 1; i <= 16; i++) {
        var cell = document.createElement('div');
        cell.setAttribute("class", "cell " + i);

        var style = "";
        // make color for cell if it exists in listOfChosenCells 
        var checkExist = false;
        for (var k = 0; k < listOfChosenCells.cells.length; k++)
            if (listOfChosenCells.cells[k].name == i) {
                checkExist = true;
                break;
            }

        if (checkExist)
            style += "background-color: red;";

        // set cell 4, 8, 12 endline
        if (i == 1 || i == 5 || i == 9 || i == 13) {
            style += "clear : both;";
        }
        cell.setAttribute('style', style);

        // add it to li (table of biggest rect)
        res.appendChild(cell);

        // add line and endline
        if (i == 4 || i == 8 || i == 12 || i == 16)
            res.appendChild(document.createElement('br'));

        if (i == 16) {

        }
    }

    return res;
}

function AddTableContainBiggestRect(rect) {
    // create li (table of biggest rect)
    var table_of_biggest_rect_li = document.createElement('li');
    table_of_biggest_rect_li.setAttribute("class", "table_of_biggest_rect");

    var table_of_biggest_rect = CreateChildTable(rect);
    var h4 = document.createElement('h4');
    var h4Style = "width: 100%; text-align: center; border-bottom: 1px solid #000; line-height: 0.1em; margin: 10px 0 20px;"
    h4.setAttribute('style', h4Style);

    var span = document.createElement('p');
    var spanStyle = "background:#fff; padding:0 10px;";
    span.setAttribute('style', spanStyle);
    var xyztName = rect.XYZTName(8);
    span.setAttribute('style', "font-family: 'Nunito', sans-serif;")
    span.innerHTML = ConvRawFormuToStdFormu(xyztName);

    h4.appendChild(span);
    table_of_biggest_rect.appendChild(document.createElement('br'));
    table_of_biggest_rect.appendChild(h4);
    table_of_biggest_rect.appendChild(document.createElement('br'));

    table_of_biggest_rect_li.appendChild(table_of_biggest_rect);
    biggest_rects_table.appendChild(table_of_biggest_rect_li);
}

function ConvRawFormuToStdFormu(rawFormuStr) {
    var res = rawFormuStr;
    while (res.includes("!x"))
        res = res.replace("!x", "x&#773");
    while (res.includes("!y"))
        res = res.replace("!y", "y&#773");
    while (res.includes("!z"))
        res = res.replace("!z", "z&#773");
    while (res.includes("!t"))
        res = res.replace("!t", "t&#773");
    while (res.includes("+"))
        res = res.replace("+", "&#8897");
    return res;
}

function Solve() {
    var karna = new Karnaugh();
    karna.DoShortFormulas(table);
    var strRes = karna.StrListOfFormulas(8);
    strRes = ConvRawFormuToStdFormu(strRes);

    document.getElementById("result").innerHTML = strRes;

    var biggest_rects = table.BiggestRects();
    if (biggest_rects.listOfRects.length != 0) {
        document.getElementById("biggest_rects_section").style.display = "block";

        // remove all element child of Biggest Rectangles section  
        while (biggest_rects_table.lastElementChild)
            biggest_rects_table.removeChild(biggest_rects_table.lastElementChild);

        // add biggest rests to Biggest Rectangles section

        for (var i = 0; i < biggest_rects.listOfRects.length; i++) {
            AddTableContainBiggestRect(biggest_rects.listOfRects[i]);
        }
    } else
        document.getElementById("biggest_rects_section").style.display = "none";

}