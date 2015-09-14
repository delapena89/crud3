$(document).on('ready', function() {

});

// create payload to render Pet to page
$('form').on('submit', function(e) {
  e.preventDefault();
  var payload = {
    name: $('#name').val(),
    type: $('#type').val(),
    age: $('#age').val()
  };
  $.post('/pets', payload, function(data)
  {
  listPets();
  $('#name').val(''),
  $('#type').val(''),
  $('#age').val('')
  });
});

// // delete request
// $(document).on('click', '.delete-button', function() {
//   $.ajax({
//     method: "DELETE",
//     url: '/pet/' + $(this).attr('id')
//   }).done(function(data) {
//     $("#all").html("");
//     listPets();
//   });
// });

// // editing a single pet functionality
// $(document).on('click', 'edit-button', function() {
//   $.get('/pet/' + $(this).attr('id'),function(data) {
//     $('#edit-name').val(data.name);
//     $('#edit-type').val(data.type);
//     $('#edit-age').val(data.age);
//     $('#update-button').attr('id', data._id);
//   });
//   $('#edit-form').show();
//   $('#pet-table').hide();
//   $('#new-pet').hide();
// });

// // cancel request from edit view
// $(document).on('click', '#cancel-edit', function(e) {
//   e.preventDefault();
//   $('#edit-form').hide();
//   $('#pet-table').show();
//   $('#new-pet').show();
// });

// // creating request to update pets
// $(document).on('click', '.update-button', function(e) {
//   e.preventDefault();
//   // form inputs
//   var $updatedPetName = $('#edit-name').val();
//   var $updatedPetType = $('#edit-type').val();
//   var $updatedPetAge = $('#edit-age').val();

//   // creating payload
//   var payload = {
//     name: $updatedPetName,
//     type: $updatedPetType,
//     age: $updatedPetAge
//   };
//   $.ajax({
//     method: "PUT",
//     url: '/animal/' + $(this).attr('id'),
//     data: payload
//   }).done(function(data) {
//     $("#all").html("");
//     listPets();
//     $('#edit-form').hide();
//   $('#pet-table').show();
//   $('#new-pet').show();
//   });
// });


// function to render the new Pets to the page
function listPets() {
  $('#all').html();
  $.get('/pets', function(data) {
    for (var i = 0; i < data.length; i++) {
      $('#all').prepend(
        '<tr>' +
        '<td><a href="#">' + data[i].name + '</a></td>' +
        '<td><a href="#">' + data[i].type + '</a></td>' +
        '<td><a href="#">' + data[i].age + '</a></td>' + '<td><a class="btn btn-danger btn-xs delete-button" id="' + data[i]._id + '" role="button">Delete</a>' +
        '&nbsp;<a class="btn btn-primary btn-xs edit-button" id="' + data[i]._id + '" role="button">Edit</a></td>' +
        '</tr>'
        );
    }
  });
}
