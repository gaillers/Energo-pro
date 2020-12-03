/* Form  */
function checkParams () {
  let code = $ ('#code').val();
  let name = $ ('#name').val();
  let phone = $ ('#phone').val();

  if (code.length != 5 && name.length != 0 && phone.length != 0) {
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
  }
}
