class Cell {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.point = [0, 0];
        this.x = 0;
        this.y = 0;

        this.ConvNameToPoint(name);
    }

    // Method
    static Cell(name, value) {
        var res = new Cell(name, value);
        return res;
    }

    static Cell0(name) {
        var res = new Cell(name, 0);
        return res;
    }

    static Cell1(name) {
        var res = new Cell(name, 1);
        return res;
    }

    isEqual(cell) {
        if (this.name != cell.name ||
            this.value != cell.value)
            return false;

        return true;
    }

    isInRect(rect) {
        for (var k = 0; k < rect.cells.length; k++) {
            if (this.isEqual(rect.cells[k]))
                return true;
        }
        return false;
    }

    isInOnly1BiggestRect(biggestRectContainer) {
        var _count = 0;
        for (var k = 0; k < biggestRectContainer.listOfRects.length; k++) {
            if (this.isInRect(biggestRectContainer.listOfRects[k]))
                _count++;
        }

        if (_count == 1)
            return true;
        return false;
    }

    BelongToRect(listOfRects) {
        for (var k = 0; k < listOfRects.length; k++) {
            if (this.isInRect(listOfRects[k]))
                return listOfRects[k];
        }

        return null;
    }

    BelongTo(listOfRects) {
        var res = new Rectangle_container();

        for (var k = 0; k < listOfRects.length; k++) {
            if (this.isInRect(listOfRects[k]))
                res.Add(listOfRects[k]);
        }
        res.Add(new Rectangle([this]));

        return res;
    }

    ConvNameToPoint(name) {
        // X
        if (name == 1 || name == 2 ||
            name == 3 || name == 4) {
            this.point[0] = 0;
            this.x = 0;
        }
        if (name == 5 || name == 6 ||
            name == 7 || name == 8) {
            this.point[0] = 1;
            this.x = 1;
        }
        if (name == 9 || name == 10 ||
            name == 11 || name == 12) {
            this.point[0] = 2;
            this.x = 2;
        }
        if (name == 13 || name == 14 ||
            name == 15 || name == 16) {
            this.point[0] = 3;
            this.x = 3;
        }

        //Y
        if (name == 1 || name == 5 ||
            name == 9 || name == 13) {
            this.point[1] = 0;
            this.y = 0;
        }
        if (name == 2 || name == 6 ||
            name == 10 || name == 14) {
            this.point[1] = 1;
            this.y = 1;
        }
        if (name == 3 || name == 7 ||
            name == 11 || name == 15) {
            this.point[1] = 2;
            this.y = 2;
        }
        if (name == 4 || name == 8 ||
            name == 12 || name == 16) {
            this.point[1] = 3;
            this.y = 3;
        }
    }
}