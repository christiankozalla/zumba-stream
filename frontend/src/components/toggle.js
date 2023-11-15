const checkbox = document.querySelector('#price-toggle');
const label = document.querySelector('.label');

checkbox.addEventListener('change', togglePrices);

function togglePrices(e) {
    const showMonthlyPrices = e.target.checked;
    if (showMonthlyPrices) {
        document.body.classList.add("show-monthly-prices");
    } else {
        document.body.classList.remove("show-monthly-prices");
    }
}
