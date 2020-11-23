var table = new Table(4, 4);

function SelectCell(name) {
    var idBtn = "btn" + name;

    if (document.getElementById(idBtn).style.color == "black" ||
        document.getElementById(idBtn).style.color == "") {
        table.setCellTo1(name);
        SetColorForBtn(idBtn);
    } else {
        table.setCellTo0(name);
        RemoveColorForBtn(idBtn);
    }

}

function SetColorForBtn(idBtn) {
    document.getElementById(idBtn).style.color = "red";
    // document.getElementById(idBtn).style.backgroundColor = "#A52A2A";
}

function RemoveColorForBtn(idBtn) {
    document.getElementById(idBtn).style.color = "black";
    //document.getElementById(idBtn).style.backgroundColor = "#ccc4c4";
}

function Solve() {
    var karna = new Karnaugh();
    karna.DoShortFormulas(table);
    var strRes = karna.StrListOfFormulas(8);

    while (strRes.includes("!x"))
        strRes = strRes.replace("!x", "x&#773");
    while (strRes.includes("!y"))
        strRes = strRes.replace("!y", "y&#773");
    while (strRes.includes("!z"))
        strRes = strRes.replace("!z", "z&#773");
    while (strRes.includes("!t"))
        strRes = strRes.replace("!t", "t&#773");
    while (strRes.includes("+"))
        strRes = strRes.replace("+", "&#8897");

    document.getElementById("result").innerHTML = strRes;
}