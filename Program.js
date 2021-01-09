var table = new Table(4, 4);
var biggest_rects_table_ul = document.getElementById('biggest_rects');
var cell_only1s_table_ul = document.getElementById('cell_only1s');
var table_basic_biggest_rects_ul = document.getElementById('table_basic_rectangles');

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

function CreateChildTable(listOfChosenCells, listOfChosenCells2, isShowName) {
    var res = document.createElement('div');

    // create 16 div (cell)
    for (var i = 1; i <= 16; i++) {
        var cell = document.createElement('div');
        cell.setAttribute("class", "cell " + i);
        if (isShowName)
            cell.appendChild(document.createTextNode(i));

        var style = "";
        // make color for cell if it exists in listOfChosenCells 
        var checkExist1 = false;
        for (var k = 0; k < listOfChosenCells.cells.length; k++)
            if (listOfChosenCells.cells[k].name == i) {
                checkExist1 = true;
                break;
            }
        if (checkExist1)
            style += "background-color: red;";

        if (listOfChosenCells2 != null) {
            var checkExist2 = false;
            for (var k = 0; k < listOfChosenCells2.listOfCells.length; k++)
                if (listOfChosenCells2.listOfCells[k].name == i) {
                    checkExist2 = true;
                    break;
                }

            if (checkExist2)
                style += "background-color: green;";
        }

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

    var table_of_biggest_rect = CreateChildTable(rect, null, false);
    var h4 = document.createElement('h4');
    var h4Style = "width: 100%; text-align: center; border-bottom: 1px solid #000; line-height: 0.1em; margin: 10px 0 20px;";
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
    biggest_rects_table_ul.appendChild(table_of_biggest_rect_li);
}

function AddTableContainBiggestRectContainCellOnly1(rect, cell_only1) {
    // create li (table of biggest rect)
    var cell_only1_li = document.createElement('li');
    cell_only1_li.setAttribute("class", "cell_only1");

    // create div and child of div
    var cellCont = new Cell_container();
    cellCont.AddCell(cell_only1);
    var table_cell_only1 = CreateChildTable(rect, cellCont, true); // div
    var h4 = document.createElement('h4');
    var h4Style = "width: 100%; text-align: center; border-bottom: 1px solid #000; line-height: 0.1em; margin: 10px 0 20px;"
    h4.setAttribute('style', h4Style);

    var span = document.createElement('p');
    var spanStyle = "background:#fff; padding:0 10px;";
    span.setAttribute('style', spanStyle);
    var xyztName = rect.XYZTName(8);
    span.setAttribute('style', "font-family: 'Nunito', sans-serif;")
    span.innerHTML = "Cell " + cell_only1.name + " belongs to " + ConvRawFormuToStdFormu(xyztName);

    // add everything to site
    h4.appendChild(span);
    table_cell_only1.appendChild(document.createElement('br'));
    table_cell_only1.appendChild(h4);
    table_cell_only1.appendChild(document.createElement('br'));

    cell_only1_li.appendChild(table_cell_only1);
    cell_only1s_table_ul.appendChild(cell_only1_li);
}

function AddTableBasicBiggestRects(tableBasicBiggestRects) {
    // create li (table of biggest rect)
    var table_basic_biggest_rects_li = document.createElement('li');
    table_basic_biggest_rects_li.setAttribute("class", "table_basic_biggest_rects");

    // create div and child of div
    var cellCont = new Cell_container();
    for (var i = 0; i < tableBasicBiggestRects.cells.length; i++) {
        if (tableBasicBiggestRects.cells[i].name == 1) {
            cellCont.AddCell(tableBasicBiggestRects.cells[i]);
        }
    }

    var rectTmp = new Rectangle(cellCont.listOfCells);
    var table_basic_biggest_rects = CreateChildTable(rectTmp, null, false); // div

    //var h4 = document.createElement('h4');
    //var h4Style = "width: 100%; text-align: center; border-bottom: 1px solid #000; line-height: 0.1em; margin: 10px 0 20px;"
    //h4.setAttribute('style', h4Style);

    // var span = document.createElement('p');
    // var spanStyle = "background:#fff; padding:0 10px;";
    // span.setAttribute('style', spanStyle);
    // var xyztName = rect.XYZTName(8);
    // span.setAttribute('style', "font-family: 'Nunito', sans-serif;")
    // span.innerHTML = "Cell " + cell_only1.name + " belongs to " + ConvRawFormuToStdFormu(xyztName);

    // add everything to site
    //h4.appendChild(span);
    table_basic_biggest_rects.appendChild(document.createElement('br'));
    //table_basic_biggest_rects.appendChild(h4);
    table_basic_biggest_rects.appendChild(document.createElement('br'));

    table_basic_biggest_rects_li.appendChild(table_basic_biggest_rects);
    table_basic_biggest_rects_ul.appendChild(table_basic_biggest_rects_li);
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

    // add biggest rect section 
    var biggest_rects = table.BiggestRects();
    document.getElementById("biggest_rects_section").style.display = "block";
    // remove all element child of Biggest Rectangles section  
    while (biggest_rects_table_ul.lastElementChild)
        biggest_rects_table_ul.removeChild(biggest_rects_table_ul.lastElementChild);

    if (biggest_rects.listOfRects.length != 0) {
        // add biggest rects to Biggest Rectangles section
        for (var i = 0; i < biggest_rects.listOfRects.length; i++) {
            AddTableContainBiggestRect(biggest_rects.listOfRects[i]);
        }
    } else {
        //document.getElementById("biggest_rects_section").style.display = "none";
        var label = document.createElement('div');
        label.appendChild(document.createTextNode('There is no biggest rectangle.'));
        biggest_rects_table_ul.appendChild(label);
    }

    // add cell only 1 section 
    var cell_only1s = table.ListOfCellsBelongOnly1BiggestRect();
    document.getElementById("cell_only1s_section").style.display = "block";
    // remove all element child of cell_only1s section  
    while (cell_only1s_table_ul.lastElementChild)
        cell_only1s_table_ul.removeChild(cell_only1s_table_ul.lastElementChild);

    if (cell_only1s.listOfCells.length != 0) {
        // add cells to cell_only1s section
        var biggest_rects = table.BiggestRects();
        for (var i = 0; i < cell_only1s.listOfCells.length; i++) {
            AddTableContainBiggestRectContainCellOnly1(cell_only1s.listOfCells[i].BelongToRect(biggest_rects.listOfRects), cell_only1s.listOfCells[i]);
        }
    } else {
        //document.getElementById("biggest_rects_section").style.display = "none";
        var label = document.createElement('div');
        label.appendChild(document.createTextNode('There is no cell belonging to only 1 biggest rectangle.'));
        cell_only1s_table_ul.appendChild(label);
    }

    // add table with basic biggest rectangles 
    var karna = new Karnaugh();
    var table_basic_biggest_rects = karna.TableBasicBiggestRects(table);
    document.getElementById("table_basic_rectangles_section").style.display = "block";
    // remove all element child of table_basic_rectangles section  
    while (table_basic_biggest_rects_ul.lastElementChild)
        table_basic_biggest_rects_ul.removeChild(table_basic_biggest_rects_ul.lastElementChild);

    if (!table_basic_biggest_rects.isAllCellEqual0()) {
        AddTableBasicBiggestRects(table_basic_biggest_rects);
    } else {
        //document.getElementById("biggest_rects_section").style.display = "none";
        var label = document.createElement('div');
        label.appendChild(document.createTextNode('Do nothing.'));
        table_basic_biggest_rects_ul.appendChild(label);
    }
}