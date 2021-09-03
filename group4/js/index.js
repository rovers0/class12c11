var w,container,carousel,item,radius,itemLength,rY,ticker,fps;
var mouseX=0;
var mouseY=0;
var mouseZ=0;
var addX=0;
var fps_counter={tick:function(){
    this.times=this.times.concat(+new Date());
    var a,b=this.times;if(b.length>this.span+1){b.shift();
        a=(b[b.length-1]-b[0])/1000;
        return Math.round(this.span/a)}else{return null}},times:[],span:20};
        var counter=Object.create(fps_counter);$(document).ready(init);
        function init(){w=$(window);
            container=$("#contentContainer");carousel=$("#carouselContainer");
            item=$(".carouselItem");itemLength=$(".carouselItem").length;
            fps=$("#fps");
            rY=360/itemLength;
            radius=Math.round((250)/Math.tan(Math.PI/itemLength));
            TweenMax.set(container,{perspective:600});
            TweenMax.set(carousel,{z:-(radius)});
            for(var c=0;c<itemLength;c++){
                var b=item.eq(c);var a=b.find(".carouselItemInner");
                TweenMax.set(b,{rotationY:rY*c,z:radius,transformOrigin:"50% 50% "+-radius+"px"});
                animateIn(b,a)}window.addEventListener("mousemove",onMouseMove,false);
                ticker=setInterval(looper,1000/30)}function animateIn(c,a){var d=360*getRandomInt(2);
                    var e=360*getRandomInt(2);var f=-(2000)+getRandomInt(4000);
                    var g=-(2000)+getRandomInt(4000);
                    var h=-4;0+getRandomInt(4000);
                    var i=1.5+(getRandomInt(10)*0.1);
                    var b=1-(getRandomInt(8)*0.1);TweenMax.set(c,{autoAlpha:1,delay:b});
                    TweenMax.set(a,{z:h,rotationY:e,rotationX:d,x:f,y:g,autoAlpha:0});
                    TweenMax.to(a,i,{delay:b,rotationY:0,rotationX:0,z:0,ease:Expo.easeInOut});
                    TweenMax.to(a,i-0.5,{delay:b,x:0,y:0,autoAlpha:1,ease:Expo.easeInOut})}
                    function onMouseMove(a){mouseX=-(-(window.innerWidth*0.5)+a.pageX)*0.0025;
                        mouseY=-(-(window.innerHeight*0.5)+a.pageY)*0.01;
                        mouseZ=-(radius)-(Math.abs(-(window.innerHeight*0.5)+a.pageY)-200)}
                        function looper(){addX+=mouseX;
                            TweenMax.to(carousel,1,{rotationY:addX,rotationX:mouseY,ease:Quint.easeOut});
                            TweenMax.set(carousel,{z:mouseZ});
                            fps.text("Framerate: "+counter.tick()+"/60 FPS")}
function getRandomInt(a){return Math.floor((Math.random()*a)+1)};