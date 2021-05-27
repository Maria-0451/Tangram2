window.addEventListener('load', main, false);
function main() {
	
	// функция для канваса
	var ctx = canvas_example.getContext('2d'); // отрисовка поля
	var w = canvas_example.width; // длина поля = w
	var h = canvas_example.height; // ширина поля = h
	console.log(w, h, ctx)
	
	
	
	var m = {}; //краткая запись объекта
	var ChisloPovorota;
	var reshX;
	var reshY;
	var kartinochka = 0;
	
	
	///// Переменные для tr№1
	var n1x = 60; // tr N1 x  
	var n1y = 90; // tr N1 y
	var n1w = 60; // tr N1 width
	var n1h = 60; // tr N1 height
	var isDrugN1 = false; // Бинарная хрень
	var n1fs = {n1x:0, n1y:0}   // вспомогательная переменная для пересвоения значений
	var colcoemochkiT1 = "yellow";
	var betaT1 = Math.PI*10;
	var C1T1;
	var C2T1;
	var C3T1;
	/////
	
	///// Переменные для square2
	var n2x = 165; // square N2 x  
	var n2y = 90; // square N2 y
	var n2w = 60; // square N2 width
	var n2h = 60; // square N2 height
	var alfa = Math.PI*20;// +  Math.PI*3/4; // square N2 angle
	var maxX = 6;
	var maxY = 66;
	var minX = 7;
	var minY = 77;
	var midmoreX = 0;
	var midmoreY = 0;
	var koef1 = 1;
	var koef2 = 1;
	var C1 = 1;
	var C2 = 1;
	var C3 = 1;
	var C4 = 1;
	var colcoemochkiS = "lawngreen";
	var isDrugN2 = false; 
	var n2fs = {n2x:0, n2y:0}
	/////
	
	
	///// Переменные для треугольника №3
	var n3x = 255; // tr N1 x  
	var n3y = 90; // tr N1 y
	var n3w = 60; // tr N1 width
	var n3h = 60; // tr N1 height
	var isDrugN3 = false; // Бинарная хрень
	var n3fs = {n3x:0, n3y:0}   // вспомогательная переменная для пересвоения значений
	var colcoemochkiT3 = "orange";
	var betaT3 = Math.PI*10;
	var C1T3;
	var C2T3;
	var C3T3;
	
	
	///// Переменные для треугольника №4
	var n4x = 60; // tr N1 x  
	var n4y = 210; // tr N1 y
	var n4w = 120; // tr N1 width
	var n4h = 120; // tr N1 height
	var isDrugN4 = false; // Бинарная хрень
	var n4fs = {n4x:0, n4y:0}   // вспомогательная переменная для пересвоения значений
	var colcoemochkiT4 = "blue";
	var betaT4 = Math.PI*10;
	var C1T4;
	var C2T4;
	var C3T4;
	
	///// Переменные для треугольника №5
	var n5x = 410; // tr N1 x  
	var n5y = 210; // tr N1 y
	var n5w = 120; // tr N1 width
	var n5h = 120; // tr N1 height
	var isDrugN5 = false; // Бинарная хрень
	var n5fs = {n5x:0, n5y:0}   // вспомогательная переменная для пересвоения значений
	var colcoemochkiT5 = "purple";
	var betaT5 = Math.PI*10;
	var C1T5;
	var C2T5;
	var C3T5;
	
	///// Переменные для треугольника №6
	var n6x = 60; // tr N1 x  
	var n6y = 390; // tr N1 y
	var n6w = 84.85281; // tr N6 width
	var n6h = 84.85281; // tr N6 height
	var isDrugN6 = false; // Бинарная хрень
	var n6fs = {n6x:0, n6y:0}   // вспомогательная переменная для пересвоения значений
	var colcoemochkiT6 = "DarkSlateGray";
	var betaT6 = Math.PI*10;
	var C1T6;
	var C2T6;
	var C3T6;
	
		///// Переменные для параллелограмма 7
	var n7x = 400; // tr N1 x  
	var n7y = 90; // tr N1 y
	var n7w = 60; // tr N1 width
	var n7h = 60; // tr N1 height
	var dg7 = Math.sqrt((1.5*n7w*Math.sqrt(2))*(1.5*n7w*Math.sqrt(2)) + 0.5*n7h*n7h);
	var isDrugN7 = false; // Бинарная хрень
	var n7fs = {n7x:0, n7y:0}   // вспомогательная переменная для пересвоения значений
	var colcoemochkiP = "green";
	var gamma = Math.PI*10 + 0.25*Math.PI;
	var C1P;
	var C2P;
	var C3P;
	var C4P;
	var C5P;
	var C6P;
	var C1P2;
	var C2P2;
	var C3P2;
	var C4P2;
	var C5P2;
	var C6P2;
	var tAx = n7x;
	var tAy = n7y;
	var tBx = n7x + n7w*Math.cos(gamma + Math.PI/4);
	var tBy = n7y + n7h*Math.sin(gamma + Math.PI/4);
	var tCx = n7x + dg7*Math.cos(gamma + Math.PI/4 - Math.atan(0.5));
	var tCy = n7y + dg7*Math.sin(gamma + Math.PI/4 - Math.atan(0.5));
	var tDx = n7x + Math.sqrt(2)*n7w*Math.cos(gamma);
	var tDy = n7y + Math.sqrt(2)*n7h*Math.sin(gamma);
	var tAx2 = n7x;
	var tAy2 = n7y;
	var tBx2 = n7x + n7w*Math.sin(gamma + Math.PI/4);
	var tBy2 = n7y + n7h*Math.cos(gamma + Math.PI/4);
	var tCx2 = n7x + dg7*Math.sin(gamma + Math.PI/4 - Math.atan(0.5));
	var tCy2 = n7y + dg7*Math.cos(gamma + Math.PI/4 - Math.atan(0.5));
	var tDx2 = n7x + Math.sqrt(2)*n7w*Math.sin(gamma);
	var tDy2 = n7y + Math.sqrt(2)*n7h*Math.cos(gamma);
	var pagram = 1;
	
	///// ONE
	var aX = 450;
	var aY = 450;
	var aA = 20;
	
	
	

function objects() {   // САМАЯ ГЛАВНАЯ ФУНКЦИЯ!!!
	ctx.clearRect(0, 0, w, h); // очищает все поле
	ctx.beginPath(); // Избежание повторной отрисовки	

for(var i = 1; i <= 120; i++){ // РИСУЕМ СЕТКУ
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle='silver';
	ctx.moveTo(15*i, 1);
	ctx.lineTo(15*i, 600);
	ctx.stroke();
	
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle='grey';
	ctx.moveTo(1, 15*i);
	ctx.lineTo(600, 15*i);
	ctx.stroke();
}

// строим tr№5
	ctx.beginPath();
	ctx.moveTo(n5x, n5y);
    ctx.lineTo(n5x + n5w*Math.sin(betaT5), n5y + n5h*Math.cos(betaT5));
	ctx.lineTo(n5x + n5w*Math.sqrt(2)*Math.sin(betaT5 + Math.PI/4), n5y + n5h*Math.sqrt(2)*Math.cos(betaT5 + Math.PI/4));
	ctx.lineTo(n5x, n5y);
	ctx.fillStyle = 'purple';
	ctx.fill();
	// и его контур
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle=colcoemochkiT5;
	ctx.moveTo(n5x, n5y);
    ctx.lineTo(n5x + n5w*Math.sin(betaT5), n5y + n5h*Math.cos(betaT5));
	ctx.lineTo(n5x + n5w*Math.sqrt(2)*Math.sin(betaT5 + Math.PI/4), n5y + n5h*Math.sqrt(2)*Math.cos(betaT5 + Math.PI/4));
	ctx.lineTo(n5x, n5y);
	ctx.stroke();
	// и его точку
	ctx.beginPath(); 
	ctx.arc(n5x, n5y, 1.5, 0, 2*Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();


// строим tr№4
	ctx.beginPath();
	ctx.moveTo(n4x, n4y);
    ctx.lineTo(n4x + n4w*Math.sin(betaT4), n4y + n4h*Math.cos(betaT4));
	ctx.lineTo(n4x + n4w*Math.sqrt(2)*Math.sin(betaT4 + Math.PI/4), n4y + n4h*Math.sqrt(2)*Math.cos(betaT4 + Math.PI/4));
	ctx.lineTo(n4x, n4y);
	ctx.fillStyle = 'blue';
	ctx.fill();
	// и его контур
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle=colcoemochkiT4;
	ctx.moveTo(n4x, n4y);
    ctx.lineTo(n4x + n4w*Math.sin(betaT4), n4y + n4h*Math.cos(betaT4));
	ctx.lineTo(n4x + n4w*Math.sqrt(2)*Math.sin(betaT4 + Math.PI/4), n4y + n4h*Math.sqrt(2)*Math.cos(betaT4 + Math.PI/4));
	ctx.lineTo(n4x, n4y);
	ctx.stroke();
	// и его точку
	ctx.beginPath(); 
	ctx.arc(n4x, n4y, 1.5, 0, 2*Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();


// строим tr№6
	ctx.beginPath();
	ctx.moveTo(n6x, n6y);
    ctx.lineTo(n6x + n6w*Math.sin(betaT6), n6y + n6h*Math.cos(betaT6));
	ctx.lineTo(n6x + n6w*Math.sqrt(2)*Math.sin(betaT6 + Math.PI/4), n6y + n6h*Math.sqrt(2)*Math.cos(betaT6 + Math.PI/4));
	ctx.lineTo(n6x, n6y);
	ctx.fillStyle = 'DarkSlateGray';
	ctx.fill();
	// и его контур
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle=colcoemochkiT6;
	ctx.moveTo(n6x, n6y);
    ctx.lineTo(n6x + n6w*Math.sin(betaT6), n6y + n6h*Math.cos(betaT6));
	ctx.lineTo(n6x + n6w*Math.sqrt(2)*Math.sin(betaT6 + Math.PI/4), n6y + n6h*Math.sqrt(2)*Math.cos(betaT6 + Math.PI/4));
	ctx.lineTo(n6x, n6y);
	ctx.stroke();
	// и его точку
	ctx.beginPath(); 
	ctx.arc(n6x, n6y, 1.5, 0, 2*Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();


	if (pagram == 1){
	// строим Параллелограмм
	ctx.beginPath();
	ctx.moveTo(n7x, n7y);
    ctx.lineTo(n7x + n7w*Math.cos(gamma + Math.PI/4), n7y + n7h*Math.sin(gamma + Math.PI/4));
	ctx.lineTo(n7x + dg7*Math.cos(gamma + Math.PI/4 - Math.atan(0.5)), n7y + dg7*Math.sin(gamma + Math.PI/4 - Math.atan(0.5)));
	ctx.lineTo(n7x + Math.sqrt(2)*n7w*Math.cos(gamma), n7y + Math.sqrt(2)*n7h*Math.sin(gamma));
	ctx.lineTo(n7x, n7y);
	ctx.fillStyle = 'green';
	ctx.fill();
	// и его контур
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle=colcoemochkiP;
	ctx.moveTo(n7x, n7y);
    ctx.lineTo(n7x + n7w*Math.cos(gamma + Math.PI/4), n7y + n7h*Math.sin(gamma + Math.PI/4));
	ctx.lineTo(n7x + dg7*Math.cos(gamma + Math.PI/4 - Math.atan(0.5)), n7y + dg7*Math.sin(gamma + Math.PI/4 - Math.atan(0.5)));
	ctx.lineTo(n7x + Math.sqrt(2)*n7w*Math.cos(gamma), n7y + Math.sqrt(2)*n7h*Math.sin(gamma));
	ctx.lineTo(n7x, n7y);
	ctx.stroke();
	// и его точку
	ctx.beginPath(); 
	ctx.arc(n7x, n7y, 1.5, 0, 2*Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();
	}
	
	if (pagram == 2){
	// строим Параллелограмм
	ctx.beginPath();
	ctx.moveTo(n7x, n7y);
    ctx.lineTo(n7x + n7w*Math.sin(gamma + Math.PI/4), n7y + n7h*Math.cos(gamma + Math.PI/4));
	ctx.lineTo(n7x + dg7*Math.sin(gamma + Math.PI/4 - Math.atan(0.5)), n7y + dg7*Math.cos(gamma + Math.PI/4 - Math.atan(0.5)));
	ctx.lineTo(n7x + Math.sqrt(2)*n7w*Math.sin(gamma), n7y + Math.sqrt(2)*n7h*Math.cos(gamma));
	ctx.lineTo(n7x, n7y);
	ctx.fillStyle = 'green';
	ctx.fill();
	// и его контур
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle=colcoemochkiP;
	ctx.moveTo(n7x, n7y);
    ctx.lineTo(n7x + n7w*Math.sin(gamma + Math.PI/4), n7y + n7h*Math.cos(gamma + Math.PI/4));
	ctx.lineTo(n7x + dg7*Math.sin(gamma + Math.PI/4 - Math.atan(0.5)), n7y + dg7*Math.cos(gamma + Math.PI/4 - Math.atan(0.5)));
	ctx.lineTo(n7x + Math.sqrt(2)*n7w*Math.sin(gamma), n7y + Math.sqrt(2)*n7h*Math.cos(gamma));
	ctx.lineTo(n7x, n7y);
	ctx.stroke();
	// и его точку
	ctx.beginPath(); 
	ctx.arc(n7x, n7y, 1.5, 0, 2*Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();
	}
	


	// строим квадрат 
	ctx.beginPath();
	ctx.moveTo(n2x, n2y);
    ctx.lineTo(n2x + n2h*Math.sin(alfa), n2y + n2h*Math.cos(alfa));
	ctx.lineTo(n2x + n2w*Math.sqrt(2)*Math.sin(alfa + Math.PI/4), n2y + n2h*Math.sqrt(2)*Math.cos(alfa + Math.PI/4));
	ctx.lineTo(n2x + n2w*Math.sin(alfa + Math.PI/2), n2y + n2h*Math.cos(alfa + Math.PI/2));
	ctx.lineTo(n2x, n2y);
	ctx.fillStyle = 'lawngreen';
	ctx.fill();
	// и его контур
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle=colcoemochkiS;
	ctx.moveTo(n2x, n2y);
    ctx.lineTo(n2x + n2w*Math.sin(alfa), n2y + n2h*Math.cos(alfa));
	ctx.lineTo(n2x + n2w*Math.sqrt(2)*Math.sin(alfa + Math.PI/4), n2y + n2h*Math.sqrt(2)*Math.cos(alfa + Math.PI/4));
	ctx.lineTo(n2x + n2w*Math.sin(alfa + Math.PI/2), n2y + n2h*Math.cos(alfa + Math.PI/2));
	ctx.lineTo(n2x, n2y);
	ctx.stroke();
	// и его точку
	ctx.beginPath(); 
	ctx.arc(n2x, n2y, 1.5, 0, 2*Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();
	
	
	
	// строим tr№1
	ctx.beginPath();
	ctx.moveTo(n1x, n1y);
    ctx.lineTo(n1x + n1w*Math.sin(betaT1), n1y + n1h*Math.cos(betaT1));
	ctx.lineTo(n1x + n1w*Math.sqrt(2)*Math.sin(betaT1 + Math.PI/4), n1y + n1h*Math.sqrt(2)*Math.cos(betaT1 + Math.PI/4));
	ctx.lineTo(n1x, n1y);
	ctx.fillStyle = 'yellow';
	ctx.fill();
	// и его контур
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle=colcoemochkiT1;
	ctx.moveTo(n1x, n1y);
    ctx.lineTo(n1x + n1w*Math.sin(betaT1), n1y + n1h*Math.cos(betaT1));
	ctx.lineTo(n1x + n1w*Math.sqrt(2)*Math.sin(betaT1 + Math.PI/4), n1y + n1h*Math.sqrt(2)*Math.cos(betaT1 + Math.PI/4));
	ctx.lineTo(n1x, n1y);
	ctx.stroke();
	// и его точку
	ctx.beginPath(); 
	ctx.arc(n1x, n1y, 1.5, 0, 2*Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();
	
	
	// строим tr№3
	ctx.beginPath();
	ctx.moveTo(n3x, n3y);
    ctx.lineTo(n3x + n3w*Math.sin(betaT3), n3y + n3h*Math.cos(betaT3));
	ctx.lineTo(n3x + n3w*Math.sqrt(2)*Math.sin(betaT3 + Math.PI/4), n3y + n3h*Math.sqrt(2)*Math.cos(betaT3 + Math.PI/4));
	ctx.lineTo(n3x, n3y);
	ctx.fillStyle = 'orange';
	ctx.fill();
	// и его контур
	ctx.beginPath(); 
	ctx.lineWidth="1";
	ctx.strokeStyle=colcoemochkiT3;
	ctx.moveTo(n3x, n3y);
    ctx.lineTo(n3x + n3w*Math.sin(betaT3), n3y + n3h*Math.cos(betaT3));
	ctx.lineTo(n3x + n3w*Math.sqrt(2)*Math.sin(betaT3 + Math.PI/4), n3y + n3h*Math.sqrt(2)*Math.cos(betaT3 + Math.PI/4));
	ctx.lineTo(n3x, n3y);
	ctx.stroke();
	// и его точку
	ctx.beginPath(); 
	ctx.arc(n3x, n3y, 1.5, 0, 2*Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();
	
	
	// строим ONE
	if(kartinochka == 1){
	ctx.beginPath(); 
	ctx.lineWidth="3";
	ctx.strokeStyle="black";
	ctx.moveTo(aX, aY);
    ctx.lineTo(aX + aA*0.5*Math.sqrt(2), aY - aA*0.5*Math.sqrt(2));
	ctx.lineTo(aX + aA*1.5*Math.sqrt(2), aY - aA*0.5*Math.sqrt(2));
	ctx.lineTo(aX + aA*1.5*Math.sqrt(2), aY + aA*2.5*Math.sqrt(2));
	ctx.lineTo(aX + aA*2*Math.sqrt(2), aY + aA*3*Math.sqrt(2));
	ctx.lineTo(aX, aY + aA*3*Math.sqrt(2));
	ctx.lineTo(aX + aA*0.5*Math.sqrt(2), aY + aA*2.5*Math.sqrt(2));
	ctx.lineTo(aX + aA*0.5*Math.sqrt(2), aY + aA*0.5*Math.sqrt(2));
	ctx.lineTo(aX, aY);
	ctx.stroke();
	}
	
	// строим TRIANGLE
	if(kartinochka == 2){
	ctx.beginPath(); 
	ctx.lineWidth="3";
	ctx.strokeStyle="black";
	ctx.moveTo(aX, aY);
    ctx.lineTo(aX, aY + aA*4);
	ctx.lineTo(aX + aA*4, aY + aA*4);
	ctx.lineTo(aX, aY);
	ctx.stroke();
	}
	
	
	// строим Алмаз-намаз
	if(kartinochka == 3){
	ctx.beginPath(); 
	ctx.lineWidth="3";
	ctx.strokeStyle="black";
	ctx.moveTo(aX, aY);
    ctx.lineTo(aX + aA, aY);
	ctx.lineTo(aX + aA*3, aY + aA*2);
	ctx.lineTo(aX + aA*3, aY + aA*4);
	ctx.lineTo(aX + aA*2, aY + aA*4);
	ctx.lineTo(aX, aY + aA*2);
	ctx.lineTo(aX, aY);
	ctx.stroke();
	}
	
}
objects(); // отрисовка


function dotcoordsS2(e) {  // получение координат углов квадрата и вычисление по ним углов наклона и Цешек
	var arrY = [n2y, n2y + n2h*Math.cos(alfa), n2y + n2h*Math.sqrt(2)*Math.cos(alfa + Math.PI/4), n2y + n2h*Math.cos(alfa + Math.PI/2)];
	var arrX = [n2x, n2x + n2w*Math.sin(alfa), n2x + n2w*Math.sqrt(2)*Math.sin(alfa + Math.PI/4), n2x + n2w*Math.sin(alfa + Math.PI/2)];
	
	for (i = 0; i <= 3; i++){  // цикл для нахождения координат вершин
	if (i == 0){
	  maxY = arrY[0];
	  maxX = arrX[0];
	  minY = arrY[0];
	  minX = arrX[0];
	  midmoreX = arrX[0];
	  midmoreY = arrY[0];
	}
	else{
	if (arrY[i] > maxY){
	    maxY = arrY[i];
		maxX = arrX[i];
	  }
	if (arrY[i] < minY){
		minY = arrY[i];
		minX = arrX[i];
	  }
	if (arrX[i] > midmoreX){
	    midmoreX = arrX[i];
		midmoreY = arrY[i];
	}
	}
    }
	
	koef1 = (maxY - midmoreY)/(maxX - midmoreX);
	C1 = maxY - maxX*koef1;  // verh
	C2 = minY - minX*koef1;  // niz
	
	koef2 = (midmoreY - minY)/(midmoreX - minX);
	C3 = midmoreY - midmoreX*koef2; // niz
	C4 = maxY - maxX*koef2;         // verh
			
}



function dotcoordsT1(e){
  C1T1 = (n1x - m.x)*((n1y + n1h*Math.cos(betaT1)) - (n1y)) - ((n1x + n1w*Math.sin(betaT1)) - n1x)*(n1y - m.y);
  C2T1 = ((n1x + n1w*Math.sin(betaT1)) - m.x)*((n1y + n1h*Math.sqrt(2)*Math.cos(betaT1 + Math.PI/4)) - (n1y + n1h*Math.cos(betaT1))) - (n1x + n1w*Math.sqrt(2)*Math.sin(betaT1 + Math.PI/4) - (n1x + n1w*Math.sin(betaT1)))*((n1y + n1h*Math.cos(betaT1)) - m.y);
  C3T1 = (n1x + n1w*Math.sqrt(2)*Math.sin(betaT1 + Math.PI/4) - m.x)*(n1y - ((n1y + n1h*Math.sqrt(2)*Math.cos(betaT1 + Math.PI/4)))) - (n1x - (n1x + n1w*Math.sqrt(2)*Math.sin(betaT1 + Math.PI/4)))*(n1y + n1h*Math.sqrt(2)*Math.cos(betaT1 + Math.PI/4) - m.y);  

}



function dotcoordsT3(e){
  C1T3 = (n3x - m.x)*((n3y + n3h*Math.cos(betaT3)) - (n3y)) - ((n3x + n3w*Math.sin(betaT3)) - n3x)*(n3y - m.y);
  C2T3 = ((n3x + n3w*Math.sin(betaT3)) - m.x)*((n3y + n3h*Math.sqrt(2)*Math.cos(betaT3 + Math.PI/4)) - (n3y + n3h*Math.cos(betaT3))) - (n3x + n3w*Math.sqrt(2)*Math.sin(betaT3 + Math.PI/4) - (n3x + n3w*Math.sin(betaT3)))*((n3y + n3h*Math.cos(betaT3)) - m.y);
  C3T3 = (n3x + n3w*Math.sqrt(2)*Math.sin(betaT3 + Math.PI/4) - m.x)*(n3y - ((n3y + n3h*Math.sqrt(2)*Math.cos(betaT3 + Math.PI/4)))) - (n3x - (n3x + n3w*Math.sqrt(2)*Math.sin(betaT3 + Math.PI/4)))*(n3y + n3h*Math.sqrt(2)*Math.cos(betaT3 + Math.PI/4) - m.y);  

}

function dotcoordsT4(e){
  C1T4 = (n4x - m.x)*((n4y + n4h*Math.cos(betaT4)) - (n4y)) - ((n4x + n4w*Math.sin(betaT4)) - n4x)*(n4y - m.y);
  C2T4 = ((n4x + n4w*Math.sin(betaT4)) - m.x)*((n4y + n4h*Math.sqrt(2)*Math.cos(betaT4 + Math.PI/4)) - (n4y + n4h*Math.cos(betaT4))) - (n4x + n4w*Math.sqrt(2)*Math.sin(betaT4 + Math.PI/4) - (n4x + n4w*Math.sin(betaT4)))*((n4y + n4h*Math.cos(betaT4)) - m.y);
  C3T4 = (n4x + n4w*Math.sqrt(2)*Math.sin(betaT4 + Math.PI/4) - m.x)*(n4y - ((n4y + n4h*Math.sqrt(2)*Math.cos(betaT4 + Math.PI/4)))) - (n4x - (n4x + n4w*Math.sqrt(2)*Math.sin(betaT4 + Math.PI/4)))*(n4y + n4h*Math.sqrt(2)*Math.cos(betaT4 + Math.PI/4) - m.y);  

}

function dotcoordsT5(e){
  C1T5 = (n5x - m.x)*((n5y + n5h*Math.cos(betaT5)) - (n5y)) - ((n5x + n5w*Math.sin(betaT5)) - n5x)*(n5y - m.y);
  C2T5 = ((n5x + n5w*Math.sin(betaT5)) - m.x)*((n5y + n5h*Math.sqrt(2)*Math.cos(betaT5 + Math.PI/4)) - (n5y + n5h*Math.cos(betaT5))) - (n5x + n5w*Math.sqrt(2)*Math.sin(betaT5 + Math.PI/4) - (n5x + n5w*Math.sin(betaT5)))*((n5y + n5h*Math.cos(betaT5)) - m.y);
  C3T5 = (n5x + n5w*Math.sqrt(2)*Math.sin(betaT5 + Math.PI/4) - m.x)*(n5y - ((n5y + n5h*Math.sqrt(2)*Math.cos(betaT5 + Math.PI/4)))) - (n5x - (n5x + n5w*Math.sqrt(2)*Math.sin(betaT5 + Math.PI/4)))*(n5y + n5h*Math.sqrt(2)*Math.cos(betaT5 + Math.PI/4) - m.y);  

}

function dotcoordsT6(e){
  C1T6 = (n6x - m.x)*((n6y + n5h*Math.cos(betaT6)) - (n6y)) - ((n6x + n5w*Math.sin(betaT6)) - n6x)*(n6y - m.y);
  C2T6 = ((n6x + n5w*Math.sin(betaT6)) - m.x)*((n6y + n5h*Math.sqrt(2)*Math.cos(betaT6 + Math.PI/4)) - (n6y + n5h*Math.cos(betaT6))) - (n6x + n5w*Math.sqrt(2)*Math.sin(betaT6 + Math.PI/4) - (n6x + n5w*Math.sin(betaT6)))*((n6y + n5h*Math.cos(betaT6)) - m.y);
  C3T6 = (n6x + n5w*Math.sqrt(2)*Math.sin(betaT6 + Math.PI/4) - m.x)*(n6y - ((n6y + n5h*Math.sqrt(2)*Math.cos(betaT6 + Math.PI/4)))) - (n6x - (n6x + n5w*Math.sqrt(2)*Math.sin(betaT6 + Math.PI/4)))*(n6y + n5h*Math.sqrt(2)*Math.cos(betaT6 + Math.PI/4) - m.y);  

}



function dotcoordsP(e){
  C1P = (tAx - m.x)*(tBy - tAy) - (tBx - tAx)*(tAy - m.y);
  C2P = (tBx - m.x)*(tCy - tBy) - (tCx - tBx)*(tBy - m.y);
  C3P = (tCx - m.x)*(tAy - tCy) - (tAx - tCx)*(tCy - m.y);  
  
  C4P = (tAx - m.x)*(tCy - tAy) - (tCx - tAx)*(tAy - m.y);
  C5P = (tCx - m.x)*(tDy - tCy) - (tDx - tCx)*(tCy - m.y);
  C6P = (tDx - m.x)*(tAy - tDy) - (tAx - tDx)*(tDy - m.y); 
  
  C1P2 = (tAx2 - m.x)*(tBy2 - tAy2) - (tBx2 - tAx2)*(tAy2 - m.y);
  C2P2 = (tBx2 - m.x)*(tCy2 - tBy2) - (tCx2 - tBx2)*(tBy2 - m.y);
  C3P2 = (tCx2 - m.x)*(tAy2 - tCy2) - (tAx2 - tCx2)*(tCy2 - m.y);  
  
  C4P2 = (tAx2 - m.x)*(tCy2 - tAy2) - (tCx2 - tAx2)*(tAy2 - m.y);
  C5P2 = (tCx2 - m.x)*(tDy2 - tCy2) - (tDx2 - tCx2)*(tCy2 - m.y);
  C6P2 = (tDx2 - m.x)*(tAy2 - tDy2) - (tAx2 - tDx2)*(tDy2 - m.y); 
  
	tAx = n7x;
	tAy = n7y;
	tBx = n7x + n7w*Math.cos(gamma + Math.PI/4);
	tBy = n7y + n7h*Math.sin(gamma + Math.PI/4);
	tCx = n7x + dg7*Math.cos(gamma + Math.PI/4 - Math.atan(0.5));
	tCy = n7y + dg7*Math.sin(gamma + Math.PI/4 - Math.atan(0.5));
	tDx = n7x + Math.sqrt(2)*n7w*Math.cos(gamma);
	tDy = n7y + Math.sqrt(2)*n7h*Math.sin(gamma);
	
	tAx2 = n7x;
	tAy2 = n7y;
	tBx2 = n7x + n7w*Math.sin(gamma + Math.PI/4);
	tBy2 = n7y + n7h*Math.cos(gamma + Math.PI/4);
	tCx2 = n7x + dg7*Math.sin(gamma + Math.PI/4 - Math.atan(0.5));
	tCy2 = n7y + dg7*Math.cos(gamma + Math.PI/4 - Math.atan(0.5));
	tDx2 = n7x + Math.sqrt(2)*n7w*Math.sin(gamma);
	tDy2 = n7y + Math.sqrt(2)*n7h*Math.cos(gamma);
}


	

function get_mouse_coords(e) {      // эта функция получает координаты мыши
	
	var rect = canvas_example.getBoundingClientRect();
	m.x = e.clientX - rect.left;   // т.к. поле занимает не весь экран, то координаты окажутся смещенными, а нам нужно получить 0;0 в левой верхней точке
	m.y = e.clientY - rect.top;    // m.x и m.y - координаты мыши!!!
	
	dotcoordsS2(e)
	dotcoordsT1(e)
	dotcoordsT3(e)
	dotcoordsT4(e)
	dotcoordsT5(e)
	dotcoordsT6(e)
	dotcoordsP(e)
	
	
	console.log(m, ChisloPovorota);
	return m;
	
} 



canvas_example.onmousedown = function(e) { // функция, описывающая что выполняется при нажатии мыши
	var m = get_mouse_coords(e);

	
	if (C1T1 >= 0 && C2T1 >= 0 && C3T1 >= 0 || C1T1 <= 0 && C2T1 <= 0 && C3T1 <= 0){
		objects(); // изменение цвета
		isDrugN1 = true;
		ChisloPovorota = 1;
		colcoemochkiS = "lawngreen";
		colcoemochkiT1 = "red";
		colcoemochkiT3 = "orange";
		colcoemochkiT4 = "blue";
		colcoemochkiT5 = "purple";
		colcoemochkiT6 = "DarkSlateGray";
		colcoemochkiP = "green";
		n1fs.x = m.x - n1x;  // следующие 4 строчки - обеспечение захвата tr№1 без перемещения его центра в мышь
		n1fs.y = m.y - n1y;
		n1x = m.x - n1fs.x;
		n1y = m.y - n1fs.y;
		objects();
	}
	
	
	if (C1T3 >= 0 && C2T3 >= 0 && C3T3 >= 0 || C1T3 <= 0 && C2T3 <= 0 && C3T3 <= 0){
		objects(); // изменение цвета
		isDrugN3 = true;
		ChisloPovorota = 3;
		colcoemochkiS = "lawngreen";
		colcoemochkiT1 = "yellow";
		colcoemochkiT3 = "red";
		colcoemochkiT4 = "blue";
		colcoemochkiT5 = "purple";
		colcoemochkiT6 = "DarkSlateGray";
		colcoemochkiP = "green";
		n3fs.x = m.x - n3x;  // следующие 4 строчки - обеспечение захвата tr№3 без перемещения его центра в мышь
		n3fs.y = m.y - n3y;
		n3x = m.x - n3fs.x;
		n3y = m.y - n3fs.y;
		objects();
	}
	
	if (C1T4 >= 0 && C2T4 >= 0 && C3T4 >= 0 || C1T4 <= 0 && C2T4 <= 0 && C3T4 <= 0){
		objects(); // изменение цвета
		isDrugN4 = true;
		ChisloPovorota = 4;
		colcoemochkiS = "lawngreen";
		colcoemochkiT1 = "yellow";
		colcoemochkiT3 = "orange";
		colcoemochkiT4 = "red";
		colcoemochkiT5 = "purple";
		colcoemochkiT6 = "DarkSlateGray";
		colcoemochkiP = "green";
		n4fs.x = m.x - n4x;  // следующие 4 строчки - обеспечение захвата tr№3 без перемещения его центра в мышь
		n4fs.y = m.y - n4y;
		n4x = m.x - n4fs.x;
		n4y = m.y - n4fs.y;
		objects();
	}
	
	if (C1T5 >= 0 && C2T5 >= 0 && C3T5 >= 0 || C1T5 <= 0 && C2T5 <= 0 && C3T5 <= 0){
		objects(); // изменение цвета
		isDrugN5 = true;
		ChisloPovorota = 5;
		colcoemochkiS = "lawngreen";
		colcoemochkiT1 = "yellow";
		colcoemochkiT3 = "orange";
		colcoemochkiT4 = "blue";
		colcoemochkiT5 = "red";
		colcoemochkiT6 = "DarkSlateGray";
		colcoemochkiP = "green";
		n5fs.x = m.x - n5x;  // следующие 4 строчки - обеспечение захвата tr№3 без перемещения его центра в мышь
		n5fs.y = m.y - n5y;
		n5x = m.x - n5fs.x;
		n5y = m.y - n5fs.y;
		objects();
	}
	
	if (C1T6 >= 0 && C2T6 >= 0 && C3T6 >= 0 || C1T6 <= 0 && C2T6 <= 0 && C3T6 <= 0){
		objects(); // изменение цвета
		isDrugN6 = true;
		ChisloPovorota = 6;
		colcoemochkiS = "lawngreen";
		colcoemochkiT1 = "yellow";
		colcoemochkiT3 = "orange";
		colcoemochkiT4 = "blue";
		colcoemochkiT5 = "purple";
		colcoemochkiT6 = "red";
		colcoemochkiP = "green";
		n6fs.x = m.x - n6x;  // следующие 4 строчки - обеспечение захвата tr№3 без перемещения его центра в мышь
		n6fs.y = m.y - n6y;
		n6x = m.x - n6fs.x;
		n6y = m.y - n6fs.y;
		objects();
	}
	
	if (C1P >= 0 && C2P >= 0 && C3P >= 0 || C1P <= 0 && C2P <= 0 && C3P <= 0 || C4P >= 0 && C5P >= 0 && C6P >= 0 || C4P <= 0 && C5P <= 0 && C6P <= 0){
		if(pagram == 1){
		objects(); // изменение цвета
		isDrugN7 = true;
		ChisloPovorota = 7;
		colcoemochkiS = "lawngreen";
		colcoemochkiT1 = "yellow";
		colcoemochkiT3 = "orange";
		colcoemochkiT4 = "blue";
		colcoemochkiT5 = "purple";
		colcoemochkiT6 = "DarkSlateGray";
		colcoemochkiP = "red";
		n7fs.x = m.x - n7x;  // следующие 4 строчки - обеспечение захвата Параллелограмма без перемещения его центра в мышь
		n7fs.y = m.y - n7y;
		n7x = m.x - n7fs.x;
		n7y = m.y - n7fs.y;
		objects();
		}
	}
	
	if (C1P2 >= 0 && C2P2 >= 0 && C3P2 >= 0 || C1P2 <= 0 && C2P2 <= 0 && C3P2 <= 0 || C4P2 >= 0 && C5P2 >= 0 && C6P2 >= 0 || C4P2 <= 0 && C5P2 <= 0 && C6P2 <= 0){
		if(pagram == 2){
		objects(); // изменение цвета
		isDrugN7 = true;
		ChisloPovorota = 7;
		colcoemochkiS = "lawngreen";
		colcoemochkiT1 = "yellow";
		colcoemochkiT3 = "orange";
		colcoemochkiT4 = "blue";
		colcoemochkiT5 = "purple";
		colcoemochkiT6 = "DarkSlateGray";
		colcoemochkiP = "red";
		n7fs.x = m.x - n7x;  // следующие 4 строчки - обеспечение захвата Параллелограмма без перемещения его центра в мышь
		n7fs.y = m.y - n7y;
		n7x = m.x - n7fs.x;
		n7y = m.y - n7fs.y;
		objects();
		}
	}

	
	
	/////////////////////////////////////////// SQUARE GOES!!!
	if (maxY != midmoreY || maxX != midmoreX){
	if((m.y - m.x*koef1)<= C1 && (m.y - m.x*koef1)>= C2 && (m.y - m.x*koef2) <= C4 && (m.y - m.x*koef2) >= C3){
		objects(); // изменение цвета
		isDrugN2 = true;
		ChisloPovorota = 2;
		colcoemochkiS = "red";
		colcoemochkiT1 = "yellow";
		colcoemochkiT3 = "orange";
		colcoemochkiT4 = "blue";
		colcoemochkiT5 = "purple";
		colcoemochkiT6 = "DarkSlateGray";
		colcoemochkiP = "green";
		n2fs.x = m.x - n2x;  // следующие 4 строчки - обеспечение захвата square№2 без перемещения его центра в мышь
		n2fs.y = m.y - n2y;
		n2x = m.x - n2fs.x;
		n2y = m.y - n2fs.y;	
		objects();
	}
	}
	
	if (maxY == midmoreY || maxX == midmoreX){
	if ((m.x - minX) <= n2w && (m.y - minY) <= n2h && (m.x - minX) >= 0 && (m.y - minY) >= 0){
	objects(); // изменение цвета
		isDrugN2 = true;
		ChisloPovorota = 2;
		colcoemochkiS = "red";
		colcoemochkiT1 = "yellow";
		colcoemochkiT3 = "orange";
		colcoemochkiT4 = "blue";
		colcoemochkiT5 = "purple";
		colcoemochkiT6 = "DarkSlateGray";
		colcoemochkiP = "green";
		n2fs.x = m.x - n2x;  // следующие 4 строчки - обеспечение захвата square№2 без перемещения его центра в мышь
		n2fs.y = m.y - n2y;
		n2x = m.x - n2fs.x;
		n2y = m.y - n2fs.y;	
		objects();
	}
	}	
	/////////////////////////////////////////// SQUARE FINISHES!!!
	
	
}





    window.addEventListener('keydown', function(event){  // функция поворота квадрата
	
    if (ChisloPovorota == 2){
	if (event.code == 'KeyZ'){
	alfa = alfa + Math.PI/24;
	}
	else if (event.code == 'KeyX'){
	alfa = alfa - Math.PI/24;
	}
	else if (event.code == 'KeyA'){
	n2x = n2x - (n2x % 15);
	n2y = n2y - (n2y % 15);
	}
	else if (event.code == 'ArrowUp'){
	n2y--;
	}
	else if (event.code == 'ArrowDown'){
	n2y++;
	}
	else if (event.code == 'ArrowLeft'){
	n2x--;
	}
	else if (event.code == 'ArrowRight'){
	n2x++;
	}
	}
	
	if (ChisloPovorota == 1){
	if (event.code == 'KeyZ'){
	betaT1 = betaT1 + Math.PI/24;
	}
	else if (event.code == 'KeyX'){
	betaT1 = betaT1 - Math.PI/24;
	}
	else if (event.code == 'KeyA'){
	n1x = n1x - (n1x % 15);
	n1y = n1y - (n1y % 15);
	}
	else if (event.code == 'ArrowUp'){
	n1y--;
	}
	else if (event.code == 'ArrowDown'){
	n1y++;
	}
	else if (event.code == 'ArrowLeft'){
	n1x--;
	}
	else if (event.code == 'ArrowRight'){
	n1x++;
	}
	}
	
	
	if (ChisloPovorota == 3){
	if (event.code == 'KeyZ'){
	betaT3 = betaT3 + Math.PI/24;
	}
	else if (event.code == 'KeyX'){
	betaT3 = betaT3 - Math.PI/24;
	}
	else if (event.code == 'KeyA'){
	n3x = n3x - (n3x % 15);
	n3y = n3y - (n3y % 15);
	}
	else if (event.code == 'ArrowUp'){
	n3y--;
	}
	else if (event.code == 'ArrowDown'){
	n3y++;
	}
	else if (event.code == 'ArrowLeft'){
	n3x--;
	}
	else if (event.code == 'ArrowRight'){
	n3x++;
	}
	}
	
	
	if (ChisloPovorota == 4){
	if (event.code == 'KeyZ'){
	betaT4 = betaT4 + Math.PI/24;
	}
	else if (event.code == 'KeyX'){
	betaT4 = betaT4 - Math.PI/24;
	}
	else if (event.code == 'KeyA'){
	n4x = n4x - (n4x % 15);
	n4y = n4y - (n4y % 15);
	}
	else if (event.code == 'ArrowUp'){
	n4y--;
	}
	else if (event.code == 'ArrowDown'){
	n4y++;
	}
	else if (event.code == 'ArrowLeft'){
	n4x--;
	}
	else if (event.code == 'ArrowRight'){
	n4x++;
	}
	}
	
	
	if (ChisloPovorota == 5){
	if (event.code == 'KeyZ'){
	betaT5 = betaT5 + Math.PI/24;
	}
	else if (event.code == 'KeyX'){
	betaT5 = betaT5 - Math.PI/24;
	}
	else if (event.code == 'KeyA'){
	n5x = n5x - (n5x % 15);
	n5y = n5y - (n5y % 15);
	}
	else if (event.code == 'ArrowUp'){
	n5y--;
	}
	else if (event.code == 'ArrowDown'){
	n5y++;
	}
	else if (event.code == 'ArrowLeft'){
	n5x--;
	}
	else if (event.code == 'ArrowRight'){
	n5x++;
	}
	}
	
	
	if (ChisloPovorota == 6){
	if (event.code == 'KeyZ'){
	betaT6 = betaT6 + Math.PI/24;
	}
	else if (event.code == 'KeyX'){
	betaT6 = betaT6 - Math.PI/24;
	}
	else if (event.code == 'KeyA'){
	n6x = n6x - (n6x % 15);
	n6y = n6y - (n6y % 15);
	}
	else if (event.code == 'ArrowUp'){
	n6y--;
	}
	else if (event.code == 'ArrowDown'){
	n6y++;
	}
	else if (event.code == 'ArrowLeft'){
	n6x--;
	}
	else if (event.code == 'ArrowRight'){
	n6x++;
	}
	}
	
	if (ChisloPovorota == 7){
	if (event.code == 'KeyZ'){
	gamma = gamma + Math.PI/24;
	}
	else if (event.code == 'KeyX'){
	gamma = gamma - Math.PI/24;
	}
	else if (event.code == 'KeyA'){
	n7x = n7x - (n7x % 15);
	n7y = n7y - (n7y % 15);
	}
	else if (event.code == 'ArrowUp'){
	n7y--;
	}
	else if (event.code == 'ArrowDown'){
	n7y++;
	}
	else if (event.code == 'ArrowLeft'){
	n7x--;
	}
	else if (event.code == 'ArrowRight'){
	n7x++;
	}
	else if (event.code == 'KeyS'){
	if(pagram == 1){
		pagram = 2;
	}
	else pagram = 1;
	}
	}
	
	objects();
	});





canvas_example.onmousemove = function(e) {  // функция обеспечивает перемещение мышки вместе с объектом
	var m = get_mouse_coords(e);

	if (isDrugN1) {                     //  за tr№1 и за Отечество
		n1x = m.x - n1fs.x;
		n1y = m.y - n1fs.y;
		objects();
	}
	
	if (isDrugN2) {                     //  за square№2
		n2x = m.x - n2fs.x;
		n2y = m.y - n2fs.y;
		objects();
	}
	
	if (isDrugN3) {                  
		n3x = m.x - n3fs.x;
		n3y = m.y - n3fs.y;
		objects();
	}
	
	if (isDrugN4) {                    
		n4x = m.x - n4fs.x;
		n4y = m.y - n4fs.y;
		objects();
	}
	
	if (isDrugN5) {                    
		n5x = m.x - n5fs.x;
		n5y = m.y - n5fs.y;
		objects();
	}
	
	if (isDrugN6) {                     
		n6x = m.x - n6fs.x;
		n6y = m.y - n6fs.y;
		objects();
	}
	
	if (isDrugN7) {                   
		n7x = m.x - n7fs.x;
		n7y = m.y - n7fs.y;
		objects();
	}
	
}




	one.onclick = function(){
			aA = 20;
			aX = 450;
			aY = 450;
			kartinochka = 1;
			objects();
	}
	
	help.onclick = function(){ // 
	if(kartinochka != 0){
			aA = 60;
			aX = 240;
			aY = 240;
			objects();
	}
	}
	
	clean.onclick = function(){
			kartinochka = 0;
			aA = 20;
			aX = 450;
			aY = 450;
			objects();
	}
	
	triangle.onclick = function(){
			aA = 20;
			aX = 450;
			aY = 450;
			kartinochka = 2;
			objects();
	}
	
	almaz.onclick = function(){
			aA = 20;
			aX = 450;
			aY = 450;
			kartinochka = 3;
			objects();
	}





canvas_example.onmouseup = function(e) {  // функция обеспечивает действия после отпускания мыши
	isDrugN1 = false;
	isDrugN2 = false;
	isDrugN3 = false;
	isDrugN4 = false;
	isDrugN5 = false;
	isDrugN6 = false;
	isDrugN7 = false;
	
	

	objects();
}



}
