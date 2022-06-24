let processContacts = {
  loadData() {
    let contacts =
      document.querySelectorAll("header")[1].childNodes[1].childNodes[1]
        .childNodes[0].innerText;
    let title =
      document.querySelectorAll("header")[1].childNodes[1].childNodes[0]
        .innerText;
    let dd =
      "Group Name: <span style = 'color:red;' >" +
      title +
      "</span><br> Group members are: <div style = 'color:blue;'>" +
      contacts +
      "</div>";

    let chats = document.querySelector("._2gzeB").innerText;
    let chat = chats.replace("\n", "<br>");

    console.log(chat);

    dd = dd + "<br> Chats: <br>" + chat;

    var tab = window.open(dd, "_blank");
    tab.document.write(dd);
    tab.document.close();
  },
};


let createButton = {
  create() {
    let $ = document;
    let exportButton = $.createElement("button");
    let $$ = exportButton.style;
    exportButton.id = "ExportButton";
    exportButton.innerText = "DETAILS";
    $$.zIndex = "999";
    $$.height = "42px";
    $$.width = "88px";
    $$.color = "white";
    $$.fontSize = "14px";
    $$.fontWeight = "bold";
    $$.position = "fixed";
    $$.right = "2%";
    $$.bottom = "80%";
    $$.backgroundColor = "green";
    $$.borderRadius = "21px";
    $$.boxShadow = "0 1px 1px 0 rgba(0,0,0,.06), 0 2px 5px 0 rgba(0,0,0,.2)";
    let place = $.querySelector("footer");
    place.prepend(exportButton);
    exportButton.addEventListener("click", processContacts.loadData);
  },
};
setInterval(() => {
  if (
    document.querySelector("footer") &&
    !document.querySelector("#ExportButton")
  )
    setTimeout(createButton.create, 1000);
}, 2000);
