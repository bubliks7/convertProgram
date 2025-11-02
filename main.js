const FlatrateSpan = document.getElementById('Flatrate');
const pitSpan = document.getElementById('pit');
const vatSpan = document.getElementById('vat');

const firstChoice = document.getElementById('firstChoice');

const FlatrateMenu = document.getElementById('FlatrateMenu');
const FlatrateValueInput = document.getElementById('FlatrateValueInput');
const FlatrateValueSubmit = document.getElementById('FlatrateValueSubmit');

const pitMenu = document.getElementById('pitMenu');
const pitValueInput = document.getElementById('pitValueInput');
const pitValueSubmit = document.getElementById('pitValueSubmit');

const vatMenu = document.getElementById('vatMenu');
const vatValueInput = document.getElementById('vatValueInput');
const vatValueSubmit = document.getElementById('vatValueSubmit');

const FlatrateResult = FlatrateMenu.querySelector('.result');
const pitResult = pitMenu.querySelector('.result');
const vatResult = vatMenu.querySelector('.result');

function FlatrateChoice() {
    firstChoice.style.display = 'none';
    pitMenu.style.display = 'none';
    vatMenu.style.display = 'none';
    FlatrateMenu.style.display = 'block';
}

function pitChoice() {
    firstChoice.style.display = 'none';
    FlatrateMenu.style.display = 'none';
    vatMenu.style.display = 'none';
    pitMenu.style.display = 'block';
}

function vatChoice() {
    firstChoice.style.display = 'none';
    FlatrateMenu.style.display = 'none';
    pitMenu.style.display = 'none';
    vatMenu.style.display = 'block';
}

FlatrateSpan.addEventListener('click', FlatrateChoice)
pitSpan.addEventListener('click', pitChoice)
vatSpan.addEventListener('click', vatChoice)

function pitCalculate() {
    let price = parseFloat(pitValueInput.value);
    let tax = 1.12;

    if (isNaN(price)) {
        resultWarning.textContent = 'Enter the correct number';
        return;
    }

    let result = price / tax;

    pitResult.innerHTML = `Value after VAT deduction: <span class="vat-value">${result.toFixed(2)}$</span>`;

}
pitValueSubmit.addEventListener('click', pitCalculate)

function FlatrateCalculate() {
    let price = parseFloat(FlatrateValueInput.value);
    let tax = 1.085;

    if (isNaN(price)) {
        resultWarning.textContent = 'Enter the correct number';
        return;
    }

    let result = price / tax;

    FlatrateResult.innerHTML = `Value after deducting the lump sum from the lease agreement: <span class="vat-value">${result.toFixed(2)}$</span>`;
}
FlatrateValueSubmit.addEventListener('click', FlatrateCalculate)

function vatCalculate() {
    let price = parseFloat(vatValueInput.value);
    let tax = 1.23;

    if (isNaN(price)) {
        resultWarning.textContent = 'Enter the correct number';
        return;
    }

    let result = price / tax;

    vatResult.innerHTML = `Value after VAT deduction: <span class="vat-value">${result.toFixed(2)}$</span>`;
}
vatValueSubmit.addEventListener('click', vatCalculate);


// dev: Bubliksiur
