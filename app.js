// https://calculator.swiftutors.com/dividend-payout-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const dividendPayoutRatioRadio = document.getElementById('dividendPayoutRatioRadio');
const dividendsRadio = document.getElementById('dividendsRadio');
const netIncomeRadio = document.getElementById('netIncomeRadio');

let dividendPayoutRatio;
let dividends = v1;
let netIncome = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

dividendPayoutRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividends';
  variable2.textContent = 'Net Income';
  dividends = v1;
  netIncome = v2;
});

dividendsRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividend Payout Ratio';
  variable2.textContent = 'Net Income';
  dividendPayoutRatio = v1;
  netIncome = v2;
});

netIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividend Payout Ratio';
  variable2.textContent = 'Dividends';
  dividendPayoutRatio = v1;
  dividends = v2;
});

btn.addEventListener('click', function() {
  
  if(dividendPayoutRatioRadio.checked)
    result.textContent = `Dividend Payout Ratio = ${computeDividendPayoutRatio().toFixed(2)}%`;

  else if(dividendsRadio.checked)
    result.textContent = `Dividends = ${computeDividends().toFixed(2)}`;

  else if(netIncomeRadio.checked)
    result.textContent = `Net Income = ${computeNetIncome().toFixed(2)}`;
})

// calculation

function computeDividendPayoutRatio() {
  return (Number(dividends.value) / Number(netIncome.value)) * 100;
}

function computeDividends() {
  return (Number(dividendPayoutRatio.value) / 100) * Number(netIncome.value);
}

function computeNetIncome() {
  return Number(dividends.value) / (Number(dividendPayoutRatio.value) / 100);
}