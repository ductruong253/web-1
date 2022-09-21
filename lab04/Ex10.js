function addItem() {
    var item = document.getElementById("item");
    if (item.value != "") {
        var ul = document.getElementById("todolist");
        var li = document.createElement("li");

        li.innerHTML = item.value + " (<a onclick='delItem(this.parentNode);' href='#''>remove</a>)";

        ul.append(li);
        return true;
    }
    return false;
}

function delItem(li) {
    var ul = li.parentNode;
    ul.removeChild(li);
}