const checkbox = document.querySelector('#price-toggle');
const label = document.querySelector('.label');

checkbox.addEventListener('change', togglePrices);

function togglePrices(e) {
    label.classList.toggle('active');
    checkbox.classList.toggle('active');

    const showYearlyPrices = e.target.checked;
    if (showYearlyPrices) {
        document.body.classList.add("show-yearly-prices");
    } else {
        document.body.classList.remove("show-yearly-prices");
    }
}
