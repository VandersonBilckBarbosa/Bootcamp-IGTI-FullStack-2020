window.addEventListener('load', start);

var inputRangeR = null;
var inputRangeG = null;
var inputRangeB = null;

var inputR = null;
var inputG = null;
var inputB = null;

var divCorRGB = null;

function start() {
  inputRangeR = document.querySelector('#ranger');
  inputRangeG = document.querySelector('#rangeg');
  inputRangeB = document.querySelector('#rangeb');

  inputR = document.querySelector('#inputr');
  inputG = document.querySelector('#inputg');
  inputB = document.querySelector('#inputb');

  divCorRGB = document.querySelector('#corRGB');

  inputRangeR.addEventListener('input', handleRangeRChange);
  inputRangeG.addEventListener('input', handleRangeGChange);
  inputRangeB.addEventListener('input', handleRangeBChange);
}
function handleRangeRChange(event) {
  var rangeRValue = event.target.value;
  inputR.value = rangeRValue;
}
function handleRangeGChange(event) {
  var rangeGValue = event.target.value;
  inputG.value = rangeGValue;
}
function handleRangeBChange(event) {
  var rangeBValue = event.target.value;
  inputB.value = rangeBValue;
}
function renderCor() {
  var corR = document.getElementById('ranger').value;
  var corG = document.getElementById('rangeg').value;
  var corB = document.getElementById('rangeb').value;

  var cor = 'rgb(' + corR + ', ' + corG + ', ' + corB + ')';

  divCorRGB.style.backgroundColor = cor;
  document.getElementById('corRGB').innerHTML = `<p>${cor}</p>`;

  if (corR < 100 && corG < 100 && corB < 256) {
    document.getElementById('corRGB').style.color = '#f5f5f5';
  } else {
    document.getElementById('corRGB').style.color = 'black';
  }
}

document.getElementById('ranger').addEventListener('input', renderCor);
document.getElementById('rangeg').addEventListener('input', renderCor);
document.getElementById('rangeb').addEventListener('input', renderCor);
