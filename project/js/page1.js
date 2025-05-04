document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputField = document.getElementById('inp1');
    const inputValue = inputField.value.trim();

    if (inputValue) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = inputValue;
        newParagraph.classList.add('fornewpgph');

        inputField.replaceWith(newParagraph);
    }
});
document.getElementById("name1html").innerHTML =
    document.getElementById("name1xml").firstChild.nodeValue;
document.getElementById("name2html").innerHTML =
    document.getElementById("name2xml").firstChild.nodeValue;
document.getElementById("name3html").innerHTML =
    document.getElementById("name3xml").firstChild.nodeValue;
document.getElementById("name4html").innerHTML =
    document.getElementById("name4xml").firstChild.nodeValue;
document.getElementById("name5html").innerHTML =
    document.getElementById("name5xml").firstChild.nodeValue;
document.getElementById("name6html").innerHTML =
    document.getElementById("name6xml").firstChild.nodeValue;
document.getElementById("name7html").innerHTML =
    document.getElementById("name7xml").firstChild.nodeValue;
document.getElementById("name8html").innerHTML =
    document.getElementById("name8xml").firstChild.nodeValue;
document.getElementById("name9html").innerHTML =
    document.getElementById("name9xml").firstChild.nodeValue;




document.querySelectorAll('.linkto1').forEach(element => {
    element.addEventListener('click', function () {

        const newElement = document.createElement('span');
        newElement.className = 'fornewpph1';
        newElement.textContent = '«аведение скоро будет в нашем сервисе!';


        this.style.opacity = '0';


        this.addEventListener('transitionend', () => {

            this.replaceWith(newElement);

            //
            requestAnimationFrame(() => {
                newElement.style.opacity = '1';
            });
        }, { once: true });
    });
});
document.querySelectorAll('.linkto2').forEach(element => {
    element.addEventListener('click', function () {

        const newElement = document.createElement('span');
        newElement.className = 'fornewpph2';
        newElement.textContent = '«аведение скоро будет в нашем сервисе!';


        this.style.opacity = '0';


        this.addEventListener('transitionend', () => {

            this.replaceWith(newElement);

            //
            requestAnimationFrame(() => {
                newElement.style.opacity = '1';
            });
        }, { once: true });
    });
});
document.querySelectorAll('.linkto3').forEach(element => {
    element.addEventListener('click', function () {

        const newElement = document.createElement('span');
        newElement.className = 'fornewpph3';
        newElement.textContent = '«аведение скоро будет в нашем сервисе!';


        this.style.opacity = '0';


        this.addEventListener('transitionend', () => {

            this.replaceWith(newElement);

            //
            requestAnimationFrame(() => {
                newElement.style.opacity = '1';
            });
        }, { once: true });
    });
});
document.querySelectorAll('.linkto4').forEach(element => {
    element.addEventListener('click', function () {

        const newElement = document.createElement('span');
        newElement.className = 'fornewpph4';
        newElement.textContent = '«аведение скоро будет в нашем сервисе!';


        this.style.opacity = '0';


        this.addEventListener('transitionend', () => {

            this.replaceWith(newElement);

            //
            requestAnimationFrame(() => {
                newElement.style.opacity = '1';
            });
        }, { once: true });
    });
});
document.querySelectorAll('.linkto5').forEach(element => {
    element.addEventListener('click', function () {

        const newElement = document.createElement('span');
        newElement.className = 'fornewpph5';
        newElement.textContent = '«аведение скоро будет в нашем сервисе!';


        this.style.opacity = '0';


        this.addEventListener('transitionend', () => {

            this.replaceWith(newElement);

            //
            requestAnimationFrame(() => {
                newElement.style.opacity = '1';
            });
        }, { once: true });
    });
});
document.querySelectorAll('.linkto6').forEach(element => {
    element.addEventListener('click', function () {

        const newElement = document.createElement('span');
        newElement.className = 'fornewpph6';
        newElement.textContent = '«аведение скоро будет в нашем сервисе!';


        this.style.opacity = '0';


        this.addEventListener('transitionend', () => {

            this.replaceWith(newElement);

            //
            requestAnimationFrame(() => {
                newElement.style.opacity = '1';
            });
        }, { once: true });
    });
});



