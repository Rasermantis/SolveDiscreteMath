class Formula extends Rectangle_container {
    constructor() {
        super();
        this.strFormula = "";
    }

    GetStrFormula(n) {
        var res = "";
        for (var i = 0; i < this.listOfRects.length; i++) {
            if (i != this.listOfRects.length - 1)
                res += this.listOfRects[i].XYZTName() + " + ";
            else
                res += this.listOfRects[i].XYZTName();
        }

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
}