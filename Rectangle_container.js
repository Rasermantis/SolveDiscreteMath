class Rectangle_container {
    constructor() {
        this.listOfRects = [];
    }

    //Method
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

    // Check 
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

    // Conversion 
    ToFormula(n) {
        var res = new Formula();
        res.Input(this.listOfRects);
        res.GetStrFormula(n);
        return res;
    }

}