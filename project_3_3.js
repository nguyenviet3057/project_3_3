
/*header_bar:appear<>disappear*/

var body_bar = document.getElementById('body_bar');
var header_bar = document.querySelector('#header_bar');
function header_bar_appear(){
	header_bar.style.position="fixed";
	header_bar.style.opacity="1";
}
function header_bar_disappear(){
	header_bar.style.position="absolute";
	header_bar.style.opacity="0";
}
var y;
function getdeltaY(){
	y = event.deltaY;
	if (y<0){
		header_bar_appear();
	}
	else{
		header_bar_disappear();
	}
}
body_bar.onwheel = getdeltaY;

/*teleport*/

var info_icon = document.getElementById('info-icon');
var info_screen = document.getElementById('info_screen');
function move_to_info_screen(){
	info_screen.scrollIntoView({behavior:'smooth'});
	header_bar.style.opacity="1";	
}
info_icon.onclick = move_to_info_screen;

var gift_icon = document.getElementById('gift-icon');
var gift_screen = document.getElementById('gift_screen');
function move_to_gift_screen(){
	gift_screen.scrollIntoView({behavior:'smooth'});
	header_bar_disappear();
}
gift_icon.onclick = move_to_gift_screen;

var products_icon = document.getElementById('products-icon');
var products_screen = document.getElementById('products_screen');
function move_to_products_screen(){
	products_screen.scrollIntoView({behavior:'smooth'});
	header_bar_disappear();
}
products_icon.onclick = move_to_products_screen;
var contact_icon = document.getElementById('contact-icon');
var contact_screen = document.getElementById('contact_screen');
function move_to_contact_screen(){
	contact_screen.scrollIntoView({behavior:'smooth'});
	header_bar_disappear();
}
contact_icon.onclick = move_to_contact_screen;

/*Products show*/
/*
var ps = document.getElementsByClassName('products');
var ms = document.getElementsByClassName('mid');
var k = 0;
function initiate_position(){
	for (i=0; i<ps.length; i++){
		ps[i].style.left = (1*$(ps_show).width()).toString() + 'px';
	}
	for (i=0; i<ms.length; i++){
		ms[i].style.left = (1*$(ps_show).width()).toString() + 'px';
	}
}
initiate_position();
function return_position(){
	for (i=0; i<ps.length; i++){
		if (parseFloat(ps[i].style.left)<-1){
			ps[i].style.left = (2*$(ps_show).width()).toString() + 'px';
			ps[i].style.zIndex = '-10';
		}
	}
	for (i=0; i<ms.length; i++){
		if (parseFloat(ms[i].style.left)<-1){
			ms[i].style.left = (2*$(ps_show).width()).toString() + 'px';
			ms[i].style.zIndex = '-10';
		}
	}
	for (i=0; i<ps.length; i++){
		if (parseFloat(ps[i].style.left)>1.9*$(ps_show).width()){
			ps[i].style.zIndex = '5';
		}
	}
	for (i=0; i<ms.length; i++){
		if (parseFloat(ms[i].style.left)>1.9*$(ps_show).width()){
			ms[i].style.zIndex = '5';
		}
	}
}
function onscreen_products(a){
	if (a+1==4){
		ms[3].style.zIndex = '10';
		ms[3].style.left = (0*$(ps_show).width()).toString() + 'px';
		ms[0].style.zIndex = '10';
		ms[0].style.left = (0.75*$(ps_show).width()).toString() + 'px';
		ps[6].style.zIndex = '10';
		ps[6].style.left = (0.25*$(ps_show).width()).toString() + 'px';
		ps[7].style.zIndex = '10';
		ps[7].style.left = (0.5*$(ps_show).width()).toString() + 'px';
	}else{
		ms[a].style.zIndex = '10';
		ms[a].style.left = (0*$(ps_show).width()).toString() + 'px';
		ms[a+1].style.zIndex = '10';
		ms[a+1].style.left = (0.75*$(ps_show).width()).toString() + 'px';
		ps[2*a].style.zIndex = '10';
		ps[2*a].style.left = (0.25*$(ps_show).width()).toString() + 'px';
		ps[2*a+1].style.zIndex = '10';
		ps[2*a+1].style.left = (0.5*$(ps_show).width()).toString() + 'px';
	}
}
function after_screen(b){
	if (b-1==-1){
		ms[3].style.zIndex = '6';
		ms[3].style.left = (-0.75*$(ps_show).width()).toString() + 'px';
		ms[3].style.zIndex = '6';
		ms[0].style.left = (0*$(ps_show).width()).toString() + 'px';
		ps[6].style.zIndex = '6';
		ps[6].style.left = (-0.5*$(ps_show).width()).toString() + 'px';
		ps[7].style.zIndex = '6';
		ps[7].style.left = (-0.25*$(ps_show).width()).toString() + 'px';
	}else{
		ms[(b-1)].style.zIndex = '6';
		ms[(b-1)].style.left = (-0.75*$(ps_show).width()).toString() + 'px';
		ms[(b-1)+1].style.zIndex = '6';
		ms[(b-1)+1].style.left = (0*$(ps_show).width()).toString() + 'px';
		ps[2*(b-1)].style.zIndex = '6';
		ps[2*(b-1)].style.left = (-0.5*$(ps_show).width()).toString() + 'px';
		ps[2*(b-1)+1].style.zIndex = '6';
		ps[2*(b-1)+1].style.left = (-0.25*$(ps_show).width()).toString() + 'px';
	}
}

function before_screen(c){
	if (c+2==5){
		ms[1].style.zIndex = '10';
		ms[1].style.left = (1.5*$(ps_show).width()).toString() + 'px';
		ps[0].style.zIndex = '10';
		ps[0].style.left = (1*$(ps_show).width()).toString() + 'px';
		ps[1].style.zIndex = '10';
		ps[1].style.left = (1.25*$(ps_show).width()).toString() + 'px';
	}else{
		if (c+2==4){
			ms[0].style.zIndex = '10';
			ms[0].style.left = (1.5*$(ps_show).width()).toString() + 'px';
			ps[6].style.zIndex = '10';
			ps[6].style.left = (1*$(ps_show).width()).toString() + 'px';
			ps[7].style.zIndex = '10';
			ps[7].style.left = (1.25*$(ps_show).width()).toString() + 'px';
		}else{
			ms[(c+1)+1].style.zIndex = '10';
			ms[(c+1)+1].style.left = (1.5*$(ps_show).width()).toString() + 'px';
			ps[2*(c+1)].style.zIndex = '10';
			ps[2*(c+1)].style.left = (1*$(ps_show).width()).toString() + 'px';
			ps[2*(c+1)+1].style.zIndex = '10';
			ps[2*(c+1)+1].style.left = (1.25*$(ps_show).width()).toString() + 'px';
		}
	}
}

function run1(){
	after_screen(k%4);
}
function run2(){
	onscreen_products(k%4);
}
function run3(){
	before_screen(k%4);
}
function switch_position(){
	run3();
	run2();
	run1();
	k++;
	setTimeout(return_position,1000);
}
function run(){
	switch_position();
	setInterval(switch_position,4000);
}
//products_screen.onclick = run;
*/
/*gift_show*/
gs = document.getElementsByClassName('gift');
var k = 1;
for (i=0; i<gs.length; i++){
	gs[i].style.left = (i*50).toString() + '%';
}
function show_gift(a){
	gs[2*(a%2)].style.transition = 'all linear 1s';
	gs[2*(a%2)+1].style.transition = 'all linear 1s';
	gs[2*(a%2)].style.left = '0%';
	gs[2*(a%2)+1].style.left = '50%';
}
function hide_gift(a){
	gs[2*((a+1)%2)].style.left = '-100%';
	gs[2*((a+1)%2)+1].style.left = '-50%';
}
function return_position(a){
	gs[2*((a+1)%2)].style.transition = 'none';
	gs[2*((a+1)%2)+1].style.transition = 'none';
	gs[2*((a+1)%2)].style.left = '100%';
	gs[2*((a+1)%2)+1].style.left = '150%';
}
function gift_show(){
	show_gift(k);
}
function gift_hide(){
	hide_gift(k);
}
function return_pos(){
	return_position(k);
}
function gift_transition(){
	setTimeout(gift_show,0);
	setTimeout(gift_hide,0);
	setTimeout(return_pos,1000);
	k++;
}
gift_transition();
function gift_showhide(){
	setInterval(gift_transition,4000);
}