function fillNumber() {
    var codeNum;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "030":
            codeNum = "Jazz";
            break;
        case "031":
            codeNum = "Zong";
            break;
        case "032":
            codeNum = "Warid";
            break;
        case "033":
            codeNum = "Ufone";
            break;
        case "034":
            codeNum = "telenor";
            break;
    }
    document.getElementById("code").value = codeNum;
}
function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species - dependent.The hands and feet of slow lorises have several adaptations that give them a pincer - like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}