// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут.
// По клику на кнопку вызвать alert и отобразить сообщение из значения инпута

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
	const inp = document.querySelector('input');

	alert(inp.value);
})