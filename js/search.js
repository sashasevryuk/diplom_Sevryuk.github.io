let isVisible = true;
const div = document.getElementById('search');

function trigger() {
  isVisible = !isVisible;
  div.style.display = isVisible ? "block" : "none";
};

document
  .getElementById('btn_search')
  .addEventListener('click', trigger);

$(document).ready(function() {
    $('#search').hideseek();
});

$('#search-highlight').hideseek({
    highlight: true
});

$('#search-nodata').hideseek({
    nodata: 'Результаты не найдены'
});

$('#search-ignore').hideseek({
    highlight: true,
    ignore: '.ignore'
});

$('#search-hidden-mode').hideseek({
    hidden_mode: true
});

$('.after_event').hideseek();
$('.after_event').on("_after", function() {
    alert('Это сообщение выводится после того, как поиск закончен!')
});