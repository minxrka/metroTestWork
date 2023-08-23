/* Фильтр на моб.устройствах */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.onclick = function(){
  menuIcon.classList.toggle('menu-icon-active');
  sidebar.classList.toggle('sidebar--mobile-active');
};

/* Показ 3-х нижних карточек */
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function () {
  hiddenCards.forEach(function (card) {
    card.classList.remove('card-link--hidden');
  })
})

/* Показать/Скрыть виджеты */

const widgets = document.querySelectorAll('.widget__title');
widgets.forEach(function(widget){
  widget.addEventListener('click', function(e){
    if (e.target.classList.contains('widget__title')) {
      e.target.classList.toggle('widget__title--active');
      e.target.nextElementSibling.classList.toggle('widget__body--hidden');
    }
  });
});


/* location Кнопка любая */

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

/* Выбор кнопки Любая и отключение других чекбоксов */
checkBoxAny.addEventListener('change', function () {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
			item.checked = false;
		});

    }
})

/* Клик по другим чекбоксам и отключение бокса любая */
topLocationCheckboxes.forEach(function (item){
  item.addEventListener('change', function(){
    if (checkBoxAny.checked){
      checkBoxAny.checked = false;
    }
    
  })
})

/* Показ еще две доп.опции с чекбоксами */

/* const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function(){
  hiddenCheckBoxes.forEach(function(item){
    item.classList.remove('checkbox--hidden');
  })
  showMoreOptions.remove();
} */

const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault();

    // Если блоки были скрыты - значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
		hiddenCheckBoxes.forEach(function (item) {
			item.style.display = 'block';
		});
		showMoreOptions.innerText = 'Скрыть';
		showMoreOptions.dataset.options = 'visible';
	}
	// Если блоки были видны - значит скрываем
	else if (showMoreOptions.dataset.options == 'visible') {
		hiddenCheckBoxes.forEach(function (item) {
			item.style.display = 'none';
		});
		showMoreOptions.innerText = 'Показать ещё';
		showMoreOptions.dataset.options = 'hidden';
	}

}