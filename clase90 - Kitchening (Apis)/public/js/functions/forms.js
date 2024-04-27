const textarea = document.querySelector('#autoHeightTextarea');

textarea.style.height = textarea.scrollHeight + 'px';

textarea.addEventListener('input', function () {
    this.style.height = this.scrollHeight + 'px';
});

textarea.addEventListener('keydown', function () {
  this.style.height = this.scrollHeight + 'px';
});