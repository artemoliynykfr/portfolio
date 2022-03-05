// webp
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
// header burger
function burger(){
	let header__burger = document.querySelector('.burger'),
		 header__menu = document.querySelector('.menu__list');
	header__burger.addEventListener('click', function(){
		if (header__burger.classList.contains('active-burger'), header__menu.classList.contains('active')){
			header__burger.classList.remove('active-burger') || header__menu.classList.remove('active')
		} else {
			header__burger.classList.add('active-burger') || header__menu.classList.add('active')
		}
	})
}
burger();
// tabs
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabs__content-item");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab__header-item");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].onclick = function(){
			if ( tablinks[i].classList.contains('active')) {
				tablinks[i].classList.remove('active')
			} else {
				tablinks[i].classList.add('active')
			}
		}
	}
	document.getElementById(cityName).style.display = "flex";
	evt.currentTarget.className += " active";
 }
// accordion
function accordion(){
	const items = document.querySelectorAll('.accordion__item-trigger')
	items.forEach(item => {
		item.addEventListener("click", () => {
			const parent = item.parentNode
			if (parent.classList.contains('accordion__item-active')){
				parent.classList.remove('accordion__item-active')
			} else {
				document
					.querySelectorAll('.accordion__item')
					.forEach(child => child.classList.remove('accordion__item-active'))
				parent.classList.add('accordion__item-active')
			}
		})
	})
}
accordion()
// modal
function bindModal(trigger, modal, close){
	trigger = document.querySelector(trigger)
	modal = document.querySelector(modal)
	close = document.querySelector(close)
	trigger.addEventListener('click', e =>{
		e.preventDefault()
		modal.style.display = 'flex'
	})
	close.addEventListener('click', () =>{
		modal.style.display = 'none'
	})
	modal.addEventListener('click', e =>{
		if (e.target === modal){
			modal.style.display = 'none'
		}
	})
}
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')
// slider
new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: !0,
	spaceBetween: 23,
	breakpoints:{
		320:{
			slidesPerView: 1,
		},
		768:{
			slidesPerView: 2,
		}
	},
	navigation:{
		nextEl: '.arrow__btn-next',
		prevEl: '.arrow__btn-prev',
	},
	keyboard: {
		enabled: !0,
		onlyInViewport: !1
	},
});
// imask
const element = document.querySelector('.phone__input')
const maskOption = {
	mask: '+(380)(00)000-00-00'
}
const mask = IMask(element, maskOption)
/// scroll
new SmoothScroll('a[href*="#"]')
// cursor
function changeCursor(){
	const cursor = document.querySelector('.cursor')
	const follower = document.querySelector('.follower')
	const link = document.querySelectorAll('.link')

	let posX = 0
	let posY = 0

	let mouseX = 0
	let mouseY = 0

	TweenMax.to({}, 0.001, {
		repeat: -1,
		onRepeat: () =>{
			posX += (mouseX - posX) / 5
			posY += (mouseY - posY) / 5
			TweenMax.set(follower, {
				css: {
					left: posX - 12,
					top: posY - 12
				}
			})
			TweenMax.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY
				}
			})
		}
	})
	window.addEventListener('mousemove', e =>{
		mouseX = e.clientX
		mouseY = e.clientY
	})
	link.forEach(links => {
		links.addEventListener('mouseenter', () =>{
			cursor.classList.add('active')
			follower.classList.add('active')
		})
		links.addEventListener('mouseleave', () =>{
			cursor.classList.remove('active')
			follower.classList.remove('active')
		})
	})
}
changeCursor()
window.addEventListener("load", windowLoadHandler, false);
		var Debugger = function() { };
		Debugger.log = function(message) {
			try {
				console.log(message);
			}
			catch (exception) {
				return;
			}
		}
		function windowLoadHandler() {
			canvasApp();
		}
		function canvasApp() {
			var theCanvas = document.getElementById("canvasOne");
			var context = theCanvas.getContext("2d");
			var displayWidth;
			var displayHeight;
			var timer;
			var wait;
			var count;
			var numToAddEachFrame;
			var particleList;
			var recycleBin;
			var particleAlpha;
			var r,g,b;
			var fLen;
			var m;
			var projCenterX;
			var projCenterY;
			var zMax;
			var turnAngle;
			var turnSpeed;
			var sphereRad, sphereCenterX, sphereCenterY, sphereCenterZ;
			var particleRad;
			var zeroAlphaDepth;
			var randAccelX, randAccelY, randAccelZ;
			var gravity;
			var rgbString;
			//we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.
			var p;
			var outsideTest;
			var nextParticle;
			var sinAngle;
			var cosAngle;
			var rotX, rotZ;
			var depthAlphaFactor;
			var i;
			var theta, phi;
			var x0, y0, z0;
			init();
			function init() {
				wait = 1;
				count = wait - 1;
				numToAddEachFrame = 8;
				r = 255;
				g = 255;
				b = 255;
				rgbString = "rgba("+r+","+g+","+b+","; //partial string for color which will be completed by appending alpha value.
				particleAlpha = 1; //maximum alpha
				displayWidth = theCanvas.width;
				displayHeight = theCanvas.height;
				fLen = 320; //represents the distance from the viewer to z=0 depth.
				projCenterX = displayWidth/2;
				projCenterY = displayHeight/2;
				zMax = fLen-2;
				
				particleList = {};
				recycleBin = {};
				
				//random acceleration factors - causes some random motion
				randAccelX = 0.1;
				randAccelY = 0.1;
				randAccelZ = 0.1;
				
				gravity = 0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.
				
				particleRad = 2.5;
				sphereRad = 280;
				sphereCenterX = 0;
				sphereCenterY = 0;
				sphereCenterZ = -3 - sphereRad;
				zeroAlphaDepth = -750; 
				turnSpeed = 2*Math.PI/1600; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
				turnAngle = 0; //initial angle
				timer = setInterval(onTimer, 1000/24);
			}
			function onTimer() {
				count++;
					if (count >= wait) {
					count = 0;
					for (i = 0; i < numToAddEachFrame; i++) {
						theta = Math.random()*2*Math.PI;
						phi = Math.acos(Math.random()*2-1);
						x0 = sphereRad*Math.sin(phi)*Math.cos(theta);
						y0 = sphereRad*Math.sin(phi)*Math.sin(theta);
						z0 = sphereRad*Math.cos(phi);
						var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002*x0, 0.002*y0, 0.002*z0);
						p.attack = 50;
						p.hold = 50;
						p.decay = 160;
						p.initValue = 0;
						p.holdValue = particleAlpha;
						p.lastValue = 0;
						p.stuckTime = 80 + Math.random()*20;
						p.accelX = 0;
						p.accelY = gravity;
						p.accelZ = 0;
					}
				}
				turnAngle = (turnAngle + turnSpeed) % (2*Math.PI);
				sinAngle = Math.sin(turnAngle);
				cosAngle = Math.cos(turnAngle);
				context.fillStyle = "#1F1F1F";
				context.fillRect(0,0,displayWidth,displayHeight);
				p = particleList.first;
				while (p != null) {
					nextParticle = p.next;
					p.age++;
					if (p.age > p.stuckTime) {	
						p.velX += p.accelX + randAccelX*(Math.random()*2 - 1);
						p.velY += p.accelY + randAccelY*(Math.random()*2 - 1);
						p.velZ += p.accelZ + randAccelZ*(Math.random()*2 - 1);
						
						p.x += p.velX;
						p.y += p.velY;
						p.z += p.velZ;
					}
					rotX = cosAngle*p.x + sinAngle*(p.z - sphereCenterZ);
					rotZ = -sinAngle*p.x + cosAngle*(p.z - sphereCenterZ) + sphereCenterZ;
					m = fLen/(fLen - rotZ);
					p.projX = rotX*m + projCenterX;
					p.projY = p.y*m + projCenterY;
					if (p.age < p.attack+p.hold+p.decay) {
						if (p.age < p.attack) {
							p.alpha = (p.holdValue - p.initValue)/p.attack*p.age + p.initValue;
						}
						else if (p.age < p.attack+p.hold) {
							p.alpha = p.holdValue;
						}
						else if (p.age < p.attack+p.hold+p.decay) {
							p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;
						}
					}
					else {
						p.dead = true;
					}
					if ((p.projX > displayWidth)||(p.projX<0)||(p.projY<0)||(p.projY>displayHeight)||(rotZ>zMax)) {
						outsideTest = true;
					}
					else {
						outsideTest = false;
					}
					
					if (outsideTest||p.dead) {
						recycle(p);
					}
					
					else {
						depthAlphaFactor = (1-rotZ/zeroAlphaDepth);
						depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor<0) ? 0 : depthAlphaFactor);
						context.fillStyle = rgbString + depthAlphaFactor*p.alpha + ")";
						context.beginPath();
						context.arc(p.projX, p.projY, m*particleRad, 0, 2*Math.PI, false);
						context.closePath();
						context.fill();
					}
					
					p = nextParticle;
				}
			}
			function addParticle(x0,y0,z0,vx0,vy0,vz0) {
				var newParticle;
				var color;
				if (recycleBin.first != null) {
					newParticle = recycleBin.first;
					//remove from bin
					if (newParticle.next != null) {
						recycleBin.first = newParticle.next;
						newParticle.next.prev = null;
					}
					else {
						recycleBin.first = null;
					}
				}
				else {
					newParticle = {};
				}
				if (particleList.first == null) {
					particleList.first = newParticle;
					newParticle.prev = null;
					newParticle.next = null;
				}
				else {
					newParticle.next = particleList.first;
					particleList.first.prev = newParticle;
					particleList.first = newParticle;
					newParticle.prev = null;
				}
				newParticle.x = x0;
				newParticle.y = y0;
				newParticle.z = z0;
				newParticle.velX = vx0;
				newParticle.velY = vy0;
				newParticle.velZ = vz0;
				newParticle.age = 0;
				newParticle.dead = false;
				if (Math.random() < 0.5) {
					newParticle.right = true;
				}
				else {
					newParticle.right = false;
				}
				return newParticle;		
			}
			
			function recycle(p) {
				if (particleList.first == p) {
					if (p.next != null) {
						p.next.prev = null;
						particleList.first = p.next;
					}
					else {
						particleList.first = null;
					}
				}
				else {
					if (p.next == null) {
						p.prev.next = null;
					}
					else {
						p.prev.next = p.next;
						p.next.prev = p.prev;
					}
				}
				//add to recycle bin
				if (recycleBin.first == null) {
					recycleBin.first = p;
					p.prev = null;
					p.next = null;
				}
				else {
					p.next = recycleBin.first;
					recycleBin.first.prev = p;
					recycleBin.first = p;
					p.prev = null;
				}
			}	
		}