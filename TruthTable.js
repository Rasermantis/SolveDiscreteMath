class TruthTable {
    constructor(nOfVaris) {
        this.NOfVaris = 0;
        this.ListOfRows = [];

        //create default truth table
        for (var i = 0; i < Math.pow(2, nOfVaris); i++) {
            var tmp = new RowOfTruthTable();
            tmp.Input(i, 0, nOfVaris);
            this.ListOfRows.push(tmp);
        }

        this.NOfRows = this.ListOfRows.length;
    }

    // Input
    Input(listOfRows) {
        // listOfRows : []

        // check if n of variables of rows is the same
        var check = true;
        for (var i = 0; i < listOfRows.length; i++) {
            if (listOfRows[i].NOfVaris != listOfRows[0].NOfVaris) {
                check = false;
                break;
            }
        }
        if (check) {
            this.ListOfRows = listOfRows;
            this.NOfRows = listOfRows.length;
            this.NOfVaris = listOfRows[0].NOfVaris;
            console.log("Input list of rows successfully!");
        }
    }

    // Method
    AddRow(row) {
        if (!this.isRowExist(row) &&
            row.NOfVaris == this.ListOfRows[0].NOfVaris) {
            this.ListOfRows.push(row);
            this.NOfRows = this.ListOfRows.length;
        }
    }

    SetValueRowTo1(name) {
        this.GetRowByName(name).Value = 1;
    }

    SetValueRowTo0(name) {
        this.GetRowByName(name).Value = 0;
    }

    GetRowByName(name) {
        // name : int
        // return Row

        for (var i = 0; i < this.NOfRows; i++)
            if (this.ListOfRows[i].Name == name)
                return this.ListOfRows[i];
        return null;
    }

    ToTable() {
        // return Table

        var resTable = new Table(4, 4);
        for (var i = 0; i < this.NOfRows; i++) {
            if (i == 0 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(16);
            else if (i == 1 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(12);
            else if (i == 2 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(4);
            else if (i == 3 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(8);
            else if (i == 4 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(15);
            else if (i == 5 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(11);
            else if (i == 6 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(3);
            else if (i == 7 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(7);
            else if (i == 8 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(13);
            else if (i == 9 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(9);
            else if (i == 10 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(1);
            else if (i == 11 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(5);
            else if (i == 12 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(14);
            else if (i == 13 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(10);
            else if (i == 14 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(2);
            else if (i == 15 &&
                this.ListOfRows[i].Value == 1)
                resTable.setCellTo1(6);
        }

        return resTable;
    }

    // Check
    isRowExist(row) {
        for (var i = 0; i < this.ListOfRows.length; i++) {
            if (row.isEqual(this.ListOfRows[i]))
                return true;
        }
        return false;
    }

}