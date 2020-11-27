class RowOfTruthTable {
    constructor() {
        this.Name = null; // int
        this.ListOfVaris = [];
        this.Value = null; // int
        this.NOfVaris = null; // int
    }

    // Input 
    Input(name, value, nOfVaris) {
        this.Name = name;
        this.Value = value;
        this.NOfVaris = nOfVaris;
        this.ListOfVaris = this.GetListOfVaris(name, nOfVaris);
    }

    GetListOfVaris(name, nOfVaris) {
        // nOfVaris : int
        // return []

        var res = [];
        var nStr = IntToBinaryString(name);
        for (var i = 0; i < nOfVaris; i++) {
            if (i < nStr.length)
                res.push(parseInt(nStr[i]));
            else
                res.splice(0, 0, 0);
        }

        function IntToBinaryString(n) {
            // n : int
            // return string

            var res = "";
            while (n) {
                res = (n % 2).toString() + res;
                n = parseInt(n / 2);
            }
            return res;
        }
        return res;
    }

    GetFormulaStr() {
        // return string
        var formula = "";
        for (var i = 1; i <= this.NOfVaris; i++) {
            if (i == 1) {
                if (this.ListOfVaris[0] == 1)
                    formula += "x";
                else
                    formula += "!x";
            } else if (i == 2) {
                if (this.ListOfVaris[1] == 1)
                    formula += "y";
                else
                    formula += "!y";
            } else if (i == 3) {
                if (this.ListOfVaris[2] == 1)
                    formula += "z";
                else
                    formula += "!z";
            } else if (i == 4) {
                if (this.ListOfVaris[3] == 1)
                    formula += "t";
                else
                    formula += "!t";
            }
        }

        return formula;
    }


}