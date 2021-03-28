
$('#list').sortable();

function newItem(){

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  function crossOut () {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

  let deleteButton = $('<crossOutButton></crossOutButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

  deleteButton.on("click", deleteListItem);

  function deleteListItem(){
    li.remove();
  }
}
