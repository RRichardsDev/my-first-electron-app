const { ipcRenderer } = require('electron');

$(document).ready(function(){
  addToList($("#list li"))

  $("#newTask").keyup((event) => {
    if (event.keyCode === 13) {
        $("#addTask").click();
    }
});

  $("#addTask").click( () => {
    $("#list").append(`<li role = "button" class="list-group-item list-group-item-action">${$("#newTask").val()}</li>`);
    ipcRenderer.invoke('show-notification', $("#newTask").val());
    $("#newTask").val("");
    addToList($("#list li"))
  });
});

function addToList(list){
  for (let li of list) {
    $(li).click(() => { $(li).remove()} )
}
}