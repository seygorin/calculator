let prevNum = "";
let newNum = "";
let result = "";
let mathOperator = "";
let decimalClicked = false;

function numBtnPress(num){
     if(result){
        newNum = num;
        result = "";

    } else {
        if(num === '.'){
            if(decimalClicked != true){
                newNum += num;
                decimalClicked = true;
            }
        } else {
            newNum += num;
        }
    }

    let fontSize = document.getElementById("entry").innerText = newNum;
    if (fontSize.length > 10) {
		document.getElementById("entry").style.fontSize = "30px";
	} 
}

function mathBtnPress(operator){
    if(!result){
        prevNum = newNum;
    } else {
        prevNum = result;
    }
    
    newNum = "";
    decimalClicked = false;
    mathOperator = operator;
	result = "";
	document.getElementById("entry").innerText = `${operator}`; 
    document.getElementById("compute").innerText = `${prevNum} ${operator}`; 
}
 
function equalBtnPress(){
    decimalClicked = false;
    prevNum = Number(prevNum);
    newNum = Number(newNum);


    switch(mathOperator){
        case "+":
            result = prevNum + newNum;
            break;
        case "-":
            result = prevNum - newNum;
            break;
        case "×":
            result = prevNum * newNum;
            break;
        case "÷":
            result = prevNum / newNum;
            break;
        case "%":
            result = prevNum / 100;
			break;
		case "x":
			result = prevNum ** newNum;
			break;
        default:
            result = newNum;

	}


    if (result){

		document.getElementById("entry").innerText = result;
		document.getElementById("history-compute").innerText = `${prevNum} ${mathOperator} ${newNum}`;
		document.getElementById("history-result").innerText = `= ${result}`;
		document.getElementById("compute").innerText = `${prevNum} ${mathOperator} ${newNum}`;
    } else {
        document.getElementById("entry").innerText = "0";
    }
}
 

function clearBtnPress(){
    prevNum = "";
    newNum = "";
    result = "";
    mathOperator = "";
    decimalClicked = false;
	document.getElementById("entry").innerText = "0";
	document.getElementById("compute").innerText = '';
	document.getElementById("entry").style.fontSize = "";
	
	let doubleClick = document.getElementById('clearBtn');
		doubleClick.addEventListener('dblclick', function (e) {
			document.getElementById("history-compute").innerText = '';
			document.getElementById("history-result").innerText = '';
});
}


function clearBtnPressOnce(){
	let elem = document.getElementById("entry").innerText;
	let a = elem.slice(0, -1);
	document.getElementById("entry").innerText = a;
    newNum = a;


	
    if (elem.length == 11) {
		document.getElementById("entry").style.fontSize = "";
	}
    else if(elem.length == 1) {
		document.getElementById("entry").innerText = "0";
    }
}

document.addEventListener('keydown', function (e) {
	console.log(e.which);
	switch (e.which) {
		case 48:
			numBtnPress(0);
			break;
		case 49:
			numBtnPress(1);
			break;
		case 50:
			numBtnPress(2);
			break;
		case 51:
			numBtnPress(3);
			break;
		case 52:
			numBtnPress(4);
			break;
		case 53:
			numBtnPress(5);
			break;
		case 54:
			numBtnPress(6);
			break;
		case 55:
			numBtnPress(7);
			break;
		case 56:
			numBtnPress(8);
			break;
		case 57:
			numBtnPress(9);
			break;
		
		case 191:
			mathBtnPress('÷');
			break;
		case 190:
			numBtnPress('.');
			break;
		case 88:
			mathBtnPress('×');
			break;
		case 189:
			mathBtnPress('-');
			break;
		case 187:
			mathBtnPress('+');
			break;
		case 53:
			mathBtnPress('%');
			break;
		case 67:
			clearBtnPress();
			break;
		case 8:
			clearBtnPressOnce();
			break;
		case 96:
			numBtnPress(0);
			break;
		case 97:
			numBtnPress(1);
			break;
		case 98:
			numBtnPress(2);
			break;
		case 99:
			numBtnPress(3);
			break;
		case 100:
			numBtnPress(4);
			break;
		case 101:
			numBtnPress(5);
			break;
		case 102:
			numBtnPress(6);
			break;
		case 103:
			numBtnPress(7);
			break;
		case 104:
			numBtnPress(8);
			break;
		case 105:
			numBtnPress(9);
			break;
		
		case 111:
			mathBtnPress('÷');
			break;
		case 109:
			mathBtnPress('-');
			break;
		case 106:
			mathBtnPress('×');
			break;
		case 107:
			mathBtnPress('+');
			break;
		case 13:
			equalBtnPress();
			break;
		case 110:
			numBtnPress('.');
			break;
		case 27:
			clearBtnPress();
			break;
		default:
			return false;
        }

});


function soon() {
    let yes = document.getElementById('YES').value;
	return confirm(yes);
  }

//RUS math

let prevNumRus = "";
let newNumRus = "";
let resultRus = "";
let mathOperatorRus = "";
let decimalClickedRus = false;
  
function numBtnPressRus(numRus){
	   if(resultRus){
		  newNumRus = numRus;
		  resultRus = "";
  
	  } else {
		  if(numRus === '.'){
			  if(decimalClickedRus != true){
				  newNumRus += numRus;
				  decimalClickedRus = true;
			  }
		  } else {
			  newNumRus += numRus;
		  }
	  }
  
	  let fontSize = document.getElementById("entry-Rus").innerText = newNumRus;
	  if (fontSize.length > 10) {
		  document.getElementById("entry-Rus").style.fontSize = "30px";
	  } 
}
  
function mathBtnPressRus(operatorRus){
	  if(!resultRus){
		  prevNumRus = newNumRus;
	  } else {
		  prevNumRus = resultRus;
	  }
	  
	  newNumRus = "";
	  decimalClickedRus = false;
	  mathOperatorRus = operatorRus;
	  resultRus = "";
	  document.getElementById("entry-Rus").innerText = `${operatorRus}`; 
	  document.getElementById("compute-Rus").innerText = `${prevNumRus} ${operatorRus}`; 
}
   
function equalBtnPressRus(){
	  decimalClickedRus = false;
	  prevNumRus = Number(prevNumRus);
	  newNumRus = Number(newNumRus);
  
  
	  switch(mathOperatorRus){
		  case "+":
			  resultRus = prevNumRus + newNumRus;
			  break;
		  case "-":
			  resultRus = prevNumRus - newNumRus;
			  break;
		  case "x":
			  resultRus = prevNumRus ** newNumRus;
			  break;
		  default:
			  resultRus = newNumRus;
  
	  }
  
  
	  if (resultRus){
  
		  document.getElementById("entry-Rus").innerText = resultRus;
		  document.getElementById("compute-Rus").innerText = `${prevNumRus} ${mathOperatorRus} ${newNumRus}`;
	  } else {
		  document.getElementById("entry-Rus").innerText = "0";
	  }
}
   
  
function clearBtnPressRus(){
	  prevNumRus = "";
	  newNumRus = "";
	  resultRus = "";
	  mathOperatorRus = "";
	  decimalClickedRus = false;
	  document.getElementById("entry-Rus").innerText = "0";
	  document.getElementById("compute-Rus").innerText = '';
	  document.getElementById("entry-Rus").style.fontSize = "";
	  
}
  
  
function clearBtnPressOnceRus(){
	  let elem = document.getElementById("entry-Rus").innerText;
	  let a = elem.slice(0, -1);
	  document.getElementById("entry-Rus").innerText = a;
	  newNum = a;
  
  
	  
	  if (elem.length == 11) {
		  document.getElementById("entry-Rus").style.fontSize = "";
	  }
	  else if(elem.length == 1) {
		  document.getElementById("entry-Rus").innerText = "0";
	  }
} 

// Background canvas

const canv = document.querySelector("#canv");
const ctx = canv.getContext("2d");

const colorPalette = ["#fff", "#000", "#ffe599", "#fcf652", "#d4d4d4"];

const rand = (max) => {
  return Math.floor(Math.random() * max);
};

const makeRects = (maxX, maxY) => {
  let rects = "";
  for (let i = 0; i < 300; i++) {
    rects += `
      <rect
        x="${rand(maxX + 200) - 30}"
        y="${rand(maxY + 200) - 30}"
        width="${rand(200) + 30}"
        height="${rand(200) + 30}"
        opacity="0.6${rand(20)}"
        fill="${colorPalette[rand(5)]}"
      />
    `;
  }
  return rects;
};

const makeSVG = () => {
  const w = document.body.offsetWidth;
  const h = document.body.offsetHeight;
  const svg = `<svg width="${w}" height="${h}" id="svg" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="${w}" height="${h}" fill="${
    colorPalette[rand(5)]
  }" fill-opacity="0.5"/>
    ${makeRects(w, h)}
  </svg>`;
  window.globalSVGStore = svg;
  return svg;
};

const setup = () => {
  const v = canvg.Canvg.fromString(ctx, makeSVG());
  v.start();
};

setup();
window.onresize = setup;

const rollButton = document.querySelector("#roll-button");
rollButton.addEventListener("click", () => {
  setup();
});
