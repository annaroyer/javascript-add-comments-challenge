$(document).ready(function(){
  // add your code here
  // * When the user clicks on the `New Comment` button, the new comment form should appear.
    $('<form></form>', {id: 'new_comment'}).appendTo('#comments')
    $('<input>', {type: 'textarea', placeholder: 'comment'}).appendTo('#new_comment')
    $('<input>', {id: 'authorName', placeholder: 'author'}).appendTo('#new_comment')
    $('<input>', {type: 'submit'}).appendTo('#new_comment')

    $('#new_comment_button').click(function(){
      $('#new_comment').show()
    })
  // * When the user enters text into the two fields and presses the `Create Comment` button,
   //a new comment should be created and added to the end of the comment list.

   $("input[type='submit']").click(function(){
     const comment = $("input[type='textarea']").val()
     const author = $('#authorName').val()
     if(comment){
       $(`<li>${comment}<span class="author">${author}</span></li>`).appendTo('#comment_list')
     } else {
       alert('comment field cannot be blank!')
     }
     event.preventDefault()
   })
  // * A new comment should not be empty, i.e. if the user submits the form without
    //entering anything into the text area, an empty comment element should not be created.
   // A user can submit the form without adding in the author's information though.
})
