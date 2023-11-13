const checkbox = document.querySelector('#checkbox');
const label = document.querySelector('.label');

checkbox.addEventListener('change', showPlan);

function showPlan () {
    label.classList.toggle('active');
    checkbox.classList.toggle('active');
    displayPrice();
}

function displayPrice() {
    const prices = document.querySelectorAll('.price');

    prices.forEach(item=>{
        item.classList.toggle('.price__selected');
    })
}

