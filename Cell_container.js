class Cell_container {
    constructor() {
        this.listOfCells = [];
    }

    Input(listOfCells) {
        this.listOfCells = listOfCells;
    }

    // Method
    AddCell(cell) {
        if (!this.isExist(cell))
            this.listOfCells.push(cell);
    }

    AddCellContainer(cellContainer) {
        for (var i = 0; i < cellContainer.listOfCells.length; i++)
            this.AddCell(cellContainer.listOfCells[i]);
    }

    ToRect() {
        var res = new Rectangle(this.listOfCells);
        return res;
    }

    SetToTable(tb) {
        for (var k = 0; k < this.listOfCells.length; k++) {
            for (var z = 0; z < tb.cells.length; z++) {
                if (this.listOfCells[k].name == tb.cells[z].name)
                    tb.cells[z] = this.listOfCells[k];
            }
        }
    }

    RemoveCell(name) {
        for (var i = 0; i < this.listOfCells.length; i++) {
            if (this.listOfCells[i].name == name) {
                this.listOfCells.splice(i, 1);
                break;
            }
        }
    }

    RemoveCellsByName(listOfCellsName) {
        for (var i = 0; i < listOfCellsName.length; i++) {
            this.RemoveCell(listOfCellsName[i]);
        }
    }

    // Check
    isExist(cell) {
        for (var i = 0; i < this.listOfCells.length; i++)
            if (this.listOfCells[i].isEqual(cell))
                return true;
        return false;
    }

    isAllValueCellsEqual1() {
        for (var k = 0; k < this.listOfCells.length; k++)
            if (this.listOfCells[k].value != 1)
                return false;
        return true;
    }
}