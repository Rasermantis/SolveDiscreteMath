class Table {
    constructor(row, column) {
        this.row = row;
        this.column = column;

        //create board, in this board have 16 cells (value = 0)
        this.cells = [];
        for (var k = 1; k <= this.row * this.column; k++)
            this.cells.push(Cell.Cell0(k));
    }

    // Properties
    GetCellByName(name) {
        for (var k = 0; k < this.row * this.column; k++)
            if (this.cells[k].name == name)
                return this.cells[k];
    }

    BiggestRects() {
        var rectCont = new Rectangle_container();
        for (var k = 0; k < table.cells.length; k++) {
            var beginCell = table.GetCellByName(k + 1);

            // 2 cells
            var proUp = Projection.Up(beginCell, 2, table);
            var proRight = Projection.Right(beginCell, 2, table);
            var proDown = Projection.Down(beginCell, 2, table);
            var proLeft = Projection.Left(beginCell, 2, table);

            if (proUp.isAllValueCellsEqual1())
                rectCont.Add(proUp.ToRect());
            if (proRight.isAllValueCellsEqual1())
                rectCont.Add(proRight.ToRect());
            if (proDown.isAllValueCellsEqual1())
                rectCont.Add(proDown.ToRect());
            if (proLeft.isAllValueCellsEqual1())
                rectCont.Add(proLeft.ToRect());

            // 4 cells
            var proUp = Projection.Up(beginCell, 4, table);
            var proRight = Projection.Right(beginCell, 4, table);
            var proDown = Projection.Down(beginCell, 4, table);
            var proLeft = Projection.Left(beginCell, 4, table);

            var proUpLeft = Projection.UpLeft(beginCell, 4, table);
            var proUpRight = Projection.UpRight(beginCell, 4, table);
            var proDownRight = Projection.DownRight(beginCell, 4, table);
            var proDownLeft = Projection.DownLeft(beginCell, 4, table);

            if (proUp.isAllValueCellsEqual1())
                rectCont.Add(proUp.ToRect());
            if (proRight.isAllValueCellsEqual1())
                rectCont.Add(proRight.ToRect());
            if (proDown.isAllValueCellsEqual1())
                rectCont.Add(proDown.ToRect());
            if (proLeft.isAllValueCellsEqual1())
                rectCont.Add(proLeft.ToRect());

            if (proUpLeft.isAllValueCellsEqual1())
                rectCont.Add(proUpLeft.ToRect());
            if (proUpRight.isAllValueCellsEqual1())
                rectCont.Add(proUpRight.ToRect());
            if (proDownRight.isAllValueCellsEqual1())
                rectCont.Add(proDownRight.ToRect());
            if (proDownLeft.isAllValueCellsEqual1())
                rectCont.Add(proDownLeft.ToRect());


            // 8 cells
            var proLeftUp = Projection.UpLeft(beginCell, 8, table);
            var proUpLeft = Projection.UpLeft(beginCell, 8, table);
            var proUpRight = Projection.UpRight(beginCell, 8, table);
            var proRightUp = Projection.DownRight(beginCell, 8, table);
            var proRightDown = Projection.DownLeft(beginCell, 8, table);
            var proDownRight = Projection.DownLeft(beginCell, 8, table);
            var proDownLeft = Projection.DownLeft(beginCell, 8, table);
            var proLeftDown = Projection.LeftDown(beginCell, 8, table);

            if (proLeftUp.isAllValueCellsEqual1())
                rectCont.Add(proLeftUp.ToRect());
            if (proUpLeft.isAllValueCellsEqual1())
                rectCont.Add(proUpLeft.ToRect());
            if (proUpRight.isAllValueCellsEqual1())
                rectCont.Add(proUpRight.ToRect());
            if (proRightUp.isAllValueCellsEqual1())
                rectCont.Add(proRightUp.ToRect());
            if (proRightDown.isAllValueCellsEqual1())
                rectCont.Add(proRightDown.ToRect());
            if (proDownRight.isAllValueCellsEqual1())
                rectCont.Add(proDownRight.ToRect());
            if (proDownLeft.isAllValueCellsEqual1())
                rectCont.Add(proDownLeft.ToRect());
            if (proLeftDown.isAllValueCellsEqual1())
                rectCont.Add(proLeftDown.ToRect());
        }

        var res = new Rectangle_container();
        for (var k = 0; k < rectCont.listOfRects.length; k++) {
            var rect1 = rectCont.listOfRects[k];
            var check = false;
            for (var z = 0; z < rectCont.listOfRects.length; z++) {
                var rect2 = rectCont.listOfRects[z];
                if (rect1.isInRect(rect2))
                    check = true;
            }

            if (!check)
                res.Add(rect1);
        }

        return res;
    }

    ListOfCellsBelongOnly1BiggestRect() {
        var res = new Cell_container();
        var biggestRects = this.BiggestRects();

        for (var i = 0; i < this.cells.length; i++) {
            if (this.cells[i].isInOnly1BiggestRect(biggestRects))
                res.AddCell(this.cells[i]);
        }

        return res;
    }

    ListOfRectsContainCellsBelongOnly1BiggestRect() {
        var res = new Rectangle_container();

        var cellsBelong1 = this.ListOfCellsBelongOnly1BiggestRect();
        var biggestRects = this.BiggestRects();
        //debugger;
        for (var i = 0; i < cellsBelong1.listOfCells.length; i++) {
            var RectCellBelongTo = cellsBelong1.listOfCells[i].BelongToRect(biggestRects.listOfRects);
            res.Add(RectCellBelongTo);
        }

        return res;
    }

    listOfCellsDiff(table) {
        var res = new Cell_container();
        for (var k = 0; k < table.cells.length; k++) {
            if (!this.cells[k].isEqual(table.cells[k]))
                res.AddCell(this.cells[k]);
        }

        return res;
    }

    // Check 
    isEqual(tb) {
        for (var k = 0; k < this.row * this.column; k++) {
            if (this.cells[k].value != tb.cells[k].value)
                return false;
        }
        return true;
    }

    isAllCellEqual1() {
        for (var i = 0; i < this.cells.length; i++)
            if (this.cells[i].value == 0)
                return false;
        return true;
    }

    isAllCellEqual0() {
        for (var i = 0; i < this.cells.length; i++)
            if (this.cells[i].value == 1)
                return false;
        return true;
    }

    // Method
    setCellTo0(name) {
        this.GetCellByName(name).value = 0;
    }

    setCellTo1(name) {
        this.GetCellByName(name).value = 1;
    }

    setCellTo1ByNameCellList(nameCellList) {
        for (var i = 0; i < nameCellList.length; i++)
            this.setCellTo1(nameCellList[i]);
    }

    setCellTo1ByCellCont(cellCont) {
        for (var i = 0; i < cellCont.listOfCells.length; i++)
            this.setCellTo1(cellCont.listOfCells[i].name);
    }
};