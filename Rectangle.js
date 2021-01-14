class Rectangle {
    constructor(listOfCells) {
        this.cells = listOfCells;
    }

    // method
    isEqual(rect) {
        if (rect.cells.length != this.cells.length)
            return false;

        for (var k = 0; k < this.cells.length; k++) {
            if (!this.cells[k].isEqual(rect.cells[k]))
                return false;
        }

        return true;
    }

    isInRect(rect) {
        // Set this vao table 1
        var tb1 = new Table(4, 4);
        this.SetToTable(tb1)

        // Set rect vao table 2 
        var tb2 = new Table(4, 4);
        rect.SetToTable(tb2)

        // Set this and rect to tbAdd
        var tbAdd = new Table(4, 4);
        this.SetToTable(tbAdd);
        rect.SetToTable(tbAdd);

        if (tb1.isEqual(tbAdd) ||
            tb1.isEqual(tb2) ||
            tb2.isEqual(tbAdd) == false)
            return false;
        return true;
    }

    SetToTable(tb) {
        for (var k = 0; k < this.cells.length; k++) {
            for (var z = 0; z < tb.cells.length; z++) {
                if (this.cells[k].name == tb.cells[z].name)
                    tb.cells[z] = this.cells[k];
            }
        }
    }

    isBiggestCell(listOfRects) {
        for (var i = 0; i < listOfRects.length; i++) {
            var rect = listOfRects[i];
            if (this.isInRect(rect))
                return false;
        }
        return true;
    }

    XYZTName(n) {
        var showX = "";
        var showY = "";
        var showZ = "";
        var showT = "";

        var x = false;
        var y = false;
        var z = false;
        var t = false;
        var _x = false;
        var _y = false;
        var _z = false;
        var _t = false;

        for (var k = 0; k < this.cells.length; k++) {
            var cell = this.cells[k];
            //x 
            if (cell.name == 1 ||
                cell.name == 2 ||
                cell.name == 5 ||
                cell.name == 6 ||
                cell.name == 9 ||
                cell.name == 10 ||
                cell.name == 13 ||
                cell.name == 14)
                x = true;

            if (cell.name == 3 ||
                cell.name == 4 ||
                cell.name == 7 ||
                cell.name == 8 ||
                cell.name == 11 ||
                cell.name == 12 ||
                cell.name == 15 ||
                cell.name == 16)
                _x = true;

            //y
            if (cell.name == 2 ||
                cell.name == 3 ||
                cell.name == 6 ||
                cell.name == 7 ||
                cell.name == 10 ||
                cell.name == 11 ||
                cell.name == 14 ||
                cell.name == 15)
                y = true;

            if (cell.name == 1 ||
                cell.name == 5 ||
                cell.name == 9 ||
                cell.name == 13 ||
                cell.name == 4 ||
                cell.name == 8 ||
                cell.name == 12 ||
                cell.name == 16)
                _y = true;

            //z
            if (cell.name == 1 ||
                cell.name == 2 ||
                cell.name == 3 ||
                cell.name == 4 ||
                cell.name == 5 ||
                cell.name == 6 ||
                cell.name == 7 ||
                cell.name == 8)
                z = true;

            if (cell.name == 9 ||
                cell.name == 10 ||
                cell.name == 11 ||
                cell.name == 12 ||
                cell.name == 13 ||
                cell.name == 14 ||
                cell.name == 15 ||
                cell.name == 16)
                _z = true;

            //t
            if (cell.name == 5 ||
                cell.name == 6 ||
                cell.name == 7 ||
                cell.name == 8 ||
                cell.name == 9 ||
                cell.name == 10 ||
                cell.name == 11 ||
                cell.name == 12)
                t = true;

            if (cell.name == 1 ||
                cell.name == 2 ||
                cell.name == 3 ||
                cell.name == 4 ||
                cell.name == 13 ||
                cell.name == 14 ||
                cell.name == 15 ||
                cell.name == 16)
                _t = true;
        }

        // Show process
        if (x != _x) {
            if (x)
                showX = "x";
            if (_x)
                showX = "!x";
        }

        if (y != _y) {
            if (y)
                showY = "y";
            if (_y)
                showY = "!y";
        }

        if (z != _z) {
            if (z)
                showZ = "z";
            if (_z)
                showZ = "!z";
        }

        if (t != _t) {
            if (t)
                showT = "t";
            if (_t)
                showT = "!t";
        }
        var res = showX + showY + showZ + showT;

        // Check of num of variables
        if (n == 4) {
            while (res.includes('t'))
                res = res.replace('t', '');
        } else if (n == 2) {
            while (res.includes('t'))
                res = res.replace('t', '');
            while (res.includes('z'))
                res = res.replace('z', '');
        }

        return res;
    }
};