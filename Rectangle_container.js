class Rectangle_container {
    constructor() {
        this.listOfRects = [];
    }

    Input(listOfRects) {
        this.listOfRects = listOfRects;
    }

    Add(rect) {
        //check rect exist already
        var checkExist = false;
        for (var k = 0; k < this.listOfRects.length; k++)
            if (this.listOfRects[k].isEqual(rect))
                checkExist = true;

        if (!checkExist)
            this.listOfRects.push(rect);
    }

    isEqual(rectCont) {

        if (rectCont.listOfRects.length != this.listOfRects.length)
            return false;

        for (var k = 0; k < this.listOfRects.length; k++) {
            if (!this.listOfRects[k].isEqual(rectCont.listOfRects[k]))
                return false;
        }

        return true;
    }

    isExist(rect) {
        for (var k = 0; k < this.listOfRects.length; k++) {
            if (rect.isEqual(this.listOfRects[k]))
                return true;
        }
        return false;
    }

    ToFormula(n) {
        var res = "";
        for (var i = 0; i < this.listOfRects.length; i++) {
            if (i != this.listOfRects.length - 1)
                res += this.listOfRects[i].XYZTName() + " + ";
            else
                res += this.listOfRects[i].XYZTName();
        }

        if (n == 3) {
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

}