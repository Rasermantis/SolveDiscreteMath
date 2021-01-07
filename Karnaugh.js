class Karnaugh {
    constructor() {
        this.listOfFormulas = [];
    }

    //Method
    AddToListFormulas(formula) {
        if (!this.isExist(formula))
            this.listOfFormulas.push(formula);

        var smallest = this.listOfFormulas[0].listOfRects.length;
        for (var i = 0; i < this.listOfFormulas.length; i++) {
            if (smallest > this.listOfFormulas[i].listOfRects.length)
                smallest = this.listOfFormulas[i].listOfRects.length;
        }

        for (var i = 0; i < this.listOfFormulas.length; i++) {
            if (this.listOfFormulas[i].listOfRects.length != smallest) {
                this.listOfFormulas.splice(i, 1);
                i--;
            }

        }
    }

    DoShortFormulas(table) {
        //Check if all cells of table is 1
        var checkTruth = true;
        for (var i = 0; i < table.cells.length; i++) {
            if (table.cells[i].value == 0) {
                checkTruth = false;
                break;
            }
        }

        if (!checkTruth) {
            // Create table2 and set biggestRect_CellBelo1 to it
            var table2 = this.TableBasicBiggestRects(table);

            // get different cells
            var diffCells = table.listOfCellsDiff(table2);

            // get begin and end number
            var biggestRects = table.BiggestRects();
            var strBegin = "";
            var strEnd = "";
            for (var k = 0; k < diffCells.listOfCells.length; k++) {
                strBegin += "1";
                strEnd += diffCells.listOfCells[k].BelongTo(biggestRects.listOfRects).listOfRects.length;
            }

            // get all possible formula 
            for (var k = strBegin; true; k = increaK(k, strEnd, strEnd.length - 1)) {
                var formuTmp = this.ListOfFormulaBasicBiggestRects(table);
                var tmp = k.toString();
                var tbTmp = this.TableBasicBiggestRects(table);

                for (var i = 0; i < tmp.length; i++) {
                    var order = parseInt(tmp[i]) - 1;
                    var diffCellsBeloTo = diffCells.listOfCells[i].BelongTo(biggestRects.listOfRects);
                    var rectTmp = diffCellsBeloTo.listOfRects[order];

                    if (!table.isEqual(tbTmp)) {
                        formuTmp.Add(rectTmp);
                        rectTmp.SetToTable(tbTmp);
                    }
                }
                this.AddToListFormulas(formuTmp);

                if (k == strEnd)
                    break;
            }

            function increaK(strK, strEnd, idx) {
                var tmp = parseInt(strK[idx]);
                var str = "";

                if (tmp < parseInt(strEnd[idx])) {
                    tmp++;
                    for (var i = 0; i < strK.length; i++) {
                        if (i == idx)
                            str += tmp.toString();
                        else
                            str += strK[i];
                    }

                    return str;
                } else {
                    for (var i = 0; i < strK.length; i++) {
                        if (i == idx)
                            str += '1';
                        else
                            str += strK[i];
                    }

                    return increaK(str, strEnd, idx - 1);
                }
            }
        } else
            this.listOfFormulas.push(1);

    }

    static FormulaStrToTable(formula) {
        var res = new Table(4, 4);

        function subFormuToCellCont(subformu) {
            var res = new Cell_container();

            // set 16 cells to res container 
            for (var i = 1; i <= 16; i++)
                res.AddCell(Cell.Cell1(i));

            // process
            var x = false,
                _x = false;
            var y = false,
                _y = false;
            var z = false,
                _z = false;
            var t = false,
                _t = false;
            if (subformu.includes('x') && !subformu.includes('!x'))
                x = true;
            _x = subformu.includes('!x');

            if (subformu.includes('y') && !subformu.includes('!y'))
                y = true;
            _y = subformu.includes('!y');

            if (subformu.includes('z') && !subformu.includes('!z'))
                z = true;
            _z = subformu.includes('!z');

            if (subformu.includes('t') && !subformu.includes('!t'))
                t = true;
            _t = subformu.includes('!t');


            if (x != _x) {
                if (x)
                    res.RemoveCellsByName([3, 4, 7, 8, 11, 12, 15, 16]);
                else if (_x)
                    res.RemoveCellsByName([1, 2, 5, 6, 9, 10, 13, 14]);
            }
            if (y != _y) {
                if (y)
                    res.RemoveCellsByName([1, 5, 9, 13, 4, 8, 12, 16]);
                else if (_y)
                    res.RemoveCellsByName([2, 3, 6, 7, 10, 11, 14, 15]);
            }
            if (z != _z) {
                if (z)
                    res.RemoveCellsByName([9, 10, 11, 12, 13, 14, 15, 16]);
                else if (_z)
                    res.RemoveCellsByName([1, 2, 3, 4, 5, 6, 7, 8]);
            }
            if (t != _t) {
                if (t)
                    res.RemoveCellsByName([1, 2, 3, 4, 13, 14, 15, 16]);
                else if (_t)
                    res.RemoveCellsByName([5, 6, 7, 8, 9, 10, 11, 12]);
            }

            return res;
        }

        // Remove space and split 
        while (formula.includes(' '))
            formula = formula.replace(' ', '');
        var subFormuList = formula.split('+');

        for (var i = 0; i < subFormuList.length; i++) {
            var cellCont = subFormuToCellCont(subFormuList[i]);
            cellCont.SetToTable(res);
        }

        return res;
    }

    // properties
    TableBasicBiggestRects(table) {
        var table2 = new Table(4, 4);
        var BigRects_CellBelo1 = table.ListOfRectsContainCellsBelongOnly1BiggestRect();
        for (var k = 0; k < BigRects_CellBelo1.listOfRects.length; k++)
            BigRects_CellBelo1.listOfRects[k].SetToTable(table2);

        return table2;
    }

    ListOfFormulaBasicBiggestRects(table) {
        var formula = new Formula();
        var BigRects_CellBelo1 = table.ListOfRectsContainCellsBelongOnly1BiggestRect();
        for (var k = 0; k < BigRects_CellBelo1.listOfRects.length; k++) {
            formula.Add(BigRects_CellBelo1.listOfRects[k]);
        }

        return formula;
    }

    StrListOfFormulas(n) {
        var res = "";
        for (var i = 0; i < this.listOfFormulas.length; i++)
            if (this.listOfFormulas[i] != 1)
                res += this.listOfFormulas[i].GetStrFormula(n) + '\n';
            else {
                res += "1";
                break;
            }

        return res;
    }

    ListOfFormulaStrs(n) {
        var res = [];
        for (var i = 0; i < this.listOfFormulas.length; i++)
            if (this.listOfFormulas[i] != 1)
                res += this.listOfFormulas[i].ToFormula(n);
            else {
                res.push(1);
                break;
            }

        return res;
    }

    // Check
    isExist(formula) {
        for (var k = 0; k < this.listOfFormulas.length; k++) {
            if (formula.isEqual(this.listOfFormulas[k]))
                return true;
        }

        return false;
    }
}