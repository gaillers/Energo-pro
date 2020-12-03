/* Form  */
function checkParams() {
  let code = $('#code').val();
  let name = $('#name').val();
  let phone = $('#phone').val();

  if (code.length != 5 && name.length != 0 && phone.length != 0 && file.length != 1) {
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
  }
}

// проверка файла
function showNoFile() {
  let file_selected = false;

  if (!file_selected) {
    console.log('Файл не выбран!');
  }
}

document.getElementById('file').addEventListener('change', function () {
  if (this.value) {
    console.log('Выбран файл!');
    console.log(this.value);
  } else {
    console.log('Файл не выбран');
  }
});

