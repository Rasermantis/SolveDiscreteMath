class Projection {
    static CellAbove(beginCell, table) {
        if (beginCell.name == 1 ||
            beginCell.name == 2 ||
            beginCell.name == 3 ||
            beginCell.name == 4)
            return table.GetCellByName(beginCell.name + 12);
        else
            return table.GetCellByName(beginCell.name - 4);
    }

    static CellRight(beginCell, table) {
        if (beginCell.name == 4 ||
            beginCell.name == 8 ||
            beginCell.name == 12 ||
            beginCell.name == 16)
            return table.GetCellByName(beginCell.name - 3);
        else
            return table.GetCellByName(beginCell.name + 1);
    }

    static CellBelow(beginCell, table) {
        if (beginCell.name == 13 ||
            beginCell.name == 14 ||
            beginCell.name == 15 ||
            beginCell.name == 16)
            return table.GetCellByName(beginCell.name - 12);
        else
            return table.GetCellByName(beginCell.name + 4);
    }

    static CellLeft(beginCell, table) {
        if (beginCell.name == 1 ||
            beginCell.name == 5 ||
            beginCell.name == 9 ||
            beginCell.name == 13)
            return table.GetCellByName(beginCell.name + 3);
        else
            return table.GetCellByName(beginCell.name - 1);
    }


    static Up(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        for (var i = 0; i < nOfCells; i++) {
            cellContainer.AddCell(buffCell);
            buffCell = Projection.CellAbove(buffCell, table);
        }

        Projection.SortCellContainer(cellContainer);
        return cellContainer;
    }

    static Right(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        for (var i = 0; i < nOfCells; i++) {
            cellContainer.AddCell(buffCell);
            buffCell = Projection.CellRight(buffCell, table);
        }

        Projection.SortCellContainer(cellContainer);
        return cellContainer;
    }

    static Down(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        for (var i = 0; i < nOfCells; i++) {
            cellContainer.AddCell(buffCell);
            buffCell = Projection.CellBelow(buffCell, table);
        }

        Projection.SortCellContainer(cellContainer);
        return cellContainer;
    }

    static Left(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        for (var i = 0; i < nOfCells; i++) {
            cellContainer.AddCell(buffCell);
            buffCell = Projection.CellLeft(buffCell, table);
        }

        Projection.SortCellContainer(cellContainer);
        return cellContainer;
    }

    static UpLeft(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        if (nOfCells == 4) {
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellAbove(buffCell, table);
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellLeft(buffCell, table);
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellBelow(buffCell, table);
            cellContainer.AddCell(buffCell);

            Projection.SortCellContainer(cellContainer);
            return cellContainer;
        } else if (nOfCells == 8) {
            var cellCont1 = Projection.Up(buffCell, 4, table);
            buffCell = Projection.CellLeft(buffCell, table);
            var cellCont2 = Projection.Up(buffCell, 4, table);

            var cellContRes = new Cell_container();
            cellContRes.AddCellContainer(cellCont1);
            cellContRes.AddCellContainer(cellCont2);
            Projection.SortCellContainer(cellContRes);
            return cellContRes;
        }
    }

    static UpRight(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        if (nOfCells == 4) {
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellAbove(buffCell, table);
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellRight(buffCell, table);
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellBelow(buffCell, table);
            cellContainer.AddCell(buffCell);

            Projection.SortCellContainer(cellContainer);
            return cellContainer;
        } else if (nOfCells == 8) {
            var cellCont1 = Projection.Up(buffCell, 4, table);
            buffCell = Projection.CellRight(buffCell, table);
            var cellCont2 = Projection.Up(buffCell, 4, table);

            var cellContRes = new Cell_container();
            cellContRes.AddCellContainer(cellCont1);
            cellContRes.AddCellContainer(cellCont2);
            Projection.SortCellContainer(cellContRes);
            return cellContRes;
        }
    }

    static DownLeft(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        if (nOfCells == 4) {
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellBelow(buffCell, table);
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellLeft(buffCell, table);
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellAbove(buffCell, table);
            cellContainer.AddCell(buffCell);

            Projection.SortCellContainer(cellContainer);
            return cellContainer;
        } else if (nOfCells == 8) {
            var cellCont1 = Projection.Down(buffCell, 4, table);
            buffCell = Projection.CellLeft(buffCell, table);
            var cellCont2 = Projection.Down(buffCell, 4, table);

            var cellContRes = new Cell_container();
            cellContRes.AddCellContainer(cellCont1);
            cellContRes.AddCellContainer(cellCont2);
            Projection.SortCellContainer(cellContRes);
            return cellContRes;
        }
    }

    static DownRight(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        if (nOfCells == 4) {
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellBelow(buffCell, table);
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellRight(buffCell, table);
            cellContainer.AddCell(buffCell);

            buffCell = Projection.CellAbove(buffCell, table);
            cellContainer.AddCell(buffCell);

            Projection.SortCellContainer(cellContainer);
            return cellContainer;
        } else if (nOfCells == 8) {
            var cellCont1 = Projection.Down(buffCell, 4, table);
            buffCell = Projection.CellRight(buffCell, table);
            var cellCont2 = Projection.Down(buffCell, 4, table);

            var cellContRes = new Cell_container();
            cellContRes.AddCellContainer(cellCont1);
            cellContRes.AddCellContainer(cellCont2);
            Projection.SortCellContainer(cellContRes);
            return cellContRes;
        }
    }

    static LeftUp(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        if (nOfCells == 8) {
            var cellCont1 = Projection.Left(buffCell, 4, table);
            buffCell = Projection.CellAbove(buffCell, table);
            var cellCont2 = Projection.Left(buffCell, 4, table);

            var cellContRes = new Cell_container();
            cellContRes.AddCellContainer(cellCont1);
            cellContRes.AddCellContainer(cellCont2);
            Projection.SortCellContainer(cellContRes);
            return cellContRes;
        }
    }

    static LeftDown(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        if (nOfCells == 8) {
            var cellCont1 = Projection.Left(buffCell, 4, table);
            buffCell = Projection.CellBelow(buffCell, table);
            var cellCont2 = Projection.Left(buffCell, 4, table);

            var cellContRes = new Cell_container();
            cellContRes.AddCellContainer(cellCont1);
            cellContRes.AddCellContainer(cellCont2);
            Projection.SortCellContainer(cellContRes);
            return cellContRes;
        }
    }

    static RightUp(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        if (nOfCells == 8) {
            var cellCont1 = Projection.Right(buffCell, 4, table);
            buffCell = Projection.CellAbove(buffCell, table);
            var cellCont2 = Projection.Right(buffCell, 4, table);

            var cellContRes = new Cell_container();
            cellContRes.AddCellContainer(cellCont1);
            cellContRes.AddCellContainer(cellCont2);
            Projection.SortCellContainer(cellContRes);
            return cellContRes;
        }
    }

    static RightDown(beginCell, nOfCells, table) {
        var cellContainer = new Cell_container();
        var buffCell = beginCell;

        if (nOfCells == 8) {
            var cellCont1 = Projection.Right(buffCell, 4, table);
            buffCell = Projection.CellBelow(buffCell, table);
            var cellCont2 = Projection.Right(buffCell, 4, table);

            var cellContRes = new Cell_container();
            cellContRes.AddCellContainer(cellCont1);
            cellContRes.AddCellContainer(cellCont2);
            Projection.SortCellContainer(cellContRes);
            return cellContRes;
        }
    }


    static SortCellContainer(cellContainer) {
        for (var i = 0; i < cellContainer.listOfCells.length - 1; i++)
            for (var j = i + 1; j < cellContainer.listOfCells.length; j++)
                if (cellContainer.listOfCells[i].name > cellContainer.listOfCells[j].name) {
                    var tmp = cellContainer.listOfCells[i];
                    cellContainer.listOfCells[i] = cellContainer.listOfCells[j];
                    cellContainer.listOfCells[j] = tmp;
                }
    }
}