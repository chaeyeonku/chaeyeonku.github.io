// const aboutMe = document.querySelector('.about-me');
// const circle = document.querySelector('.lds-ripple');
// const background = document.querySelector('.background');

var canvas = document.querySelector('canvas');
var projects = document.querySelector('#projects');
var item3 = document.querySelector('#project-item3');
var item1 = document.querySelector('#project-item1');
var item2 = document.querySelector('#project-item2');
var item4 = document.querySelector('#project-item4');
var title = document.querySelector("#title");
var title2 = document.querySelector("#title2");
var title3 = document.querySelector("#title3");
var major = document.querySelector("#major");
var place = document.querySelector("#place");

var intro = document.querySelector("#intro");
var tip = document.querySelector("#tip");
var show1 = document.querySelector("#show1");
var hide1 = document.querySelector("#hide1");
var show2 = document.querySelector("#show2");
var hide2 = document.querySelector("#hide2");
var show3 = document.querySelector("#show3");
var hide3 = document.querySelector("#hide3");
var videos = document.querySelector("#videos");
var video1 = document.querySelector("#video1");
var video2 = document.querySelector("#video2");
var video3 = document.querySelector("#video3");
var btnBeg = document.querySelector("#btnBeginner");
var btnAdv = document.querySelector("#btnAdvanced");
var info = document.querySelector("#personal-info");
var mobileBox = document.querySelector("#mobile-box");

// Mobile View variables
var projectText1 = document.querySelector("#project-text1");
var projectText2 = document.querySelector("#project-text2");
var projectText3 = document.querySelector("#project-text3");
var icon1 = document.querySelector('#icon1');
var icon2 = document.querySelector('#icon2');
var icon3 = document.querySelector('#icon3');
var graphics = document.querySelector('#graphics');

// Mobilve View description variables
var mobile1 = document.querySelector('#mobile1');
var mobile2 = document.querySelector('#mobile2');
var mobile3 = document.querySelector('#mobile3');
var close = document.querySelector('#close');
var btnPlay = document.querySelector('#btnPlay');

var stopRotation = false;
var mainIsOn = true;
var mobileview = false;

intro.style.position = "fixed";
item1.style.position = "relative";
item2.style.position = "relative";
item3.style.position = "relative";
item4.style.position = "relative";
mobileBox.style.position = "absolute";

document.body.style.height = window.innerHeight + 'px';

if (window.innerWidth < 600) {
    mobileview = true;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;
    projects.style.left = '0%';
    projects.style.top = canvas.height + 'px';
    projects.style.width = window.innerWidth;
    projects.style.height = window.innerHeight;
    graphics.style.width = window.innerWidth;
    
    intro.style.width = '30%';
    intro.style.left = "35%";
    intro.style.top = '15%';
    item1.style.width = window.innerWidth / 2.5 + 'px';
    item2.style.width = window.innerWidth / 2.5 + 'px';
    item3.style.width = window.innerWidth / 2.5 + 'px';
    item4.style.width = window.innerWidth / 2.5 + 'px';
    
    // item1.style.left = '50%';
    // item4.style.left = '50%';
    projects.style.fontSize = '12px';
    item1.style.height = window.innerHeight / 8.5 + 'px';
    item2.style.height = window.innerHeight / 8.5 + 'px';
    item3.style.height = window.innerHeight / 8.5 + 'px';
    item4.style.height = window.innerHeight / 8.5 +  'px';
    
    // Resize Floating Texts
    title.style.width = '10%';
    title2.style.width = '10%';
    title3.style.width = '10%';
    major.style.width = '15%';
    place.style.width = '15%';

    intro.style.fontSize = '30px';
    title.style.fontSize = '12px';
    title2.style.fontSize = '12px';
    title3.style.fontSize = '12px';
    major.style.fontSize = '12px';
    place.style.fontSize = '12px';

    // Hide Project descriptions - only display title + icon
    projectText1.style.display = "none";
    projectText2.style.display = "none";
    projectText3.style.display = "none";

    icon1.style.width = '25px';
    icon2.style.width = '25px';
    icon3.style.width = '25px';

    icon1.style.height = '25px';
    icon2.style.height = '25px';
    icon3.style.height = '25px';

    
    
} else {
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight;
    intro.style.width = '15%';
    intro.style.top = '37%';
    intro.style.left = '17.5%';
    mobileBox.style.width = '70%';
    mobileBox.style.left = '15%';
}



title.style.position = "fixed";
title2.style.position = "fixed";
title3.style.position = "fixed";
major.style.position = "fixed";
place.style.position = "fixed";
tip.style.position = "fixed";

tip.style.top = '20px';
tip.style.left = '10px';



// Event Handlers - Main HOME PAGE
// Description X button
close.addEventListener('click', e => {
    mobile1.style.display = "none";
    mobile2.style.display = "none";
    mobile3.style.display = "none";
    mobileBox.style.display ="none";
});

//1 
item1.addEventListener('mouseenter', e => {
    item1.style.transition = "all 0.75s ease";
    item1.style.transform = "scale(1.1, 1.1)";
});

item1.addEventListener('mouseleave', e => {
    item1.style.transition = "all 0.75s ease";
    item1.style.transform = "initial";
    video1.load();
});

item1.addEventListener('click', e => {
    mobileBox.style.display = "block";
    mobile1.style.display ="block";
    mobile2.style.display ="none";
    mobile3.style.display ="none";
})

// 2
item2.addEventListener('mouseenter', e => {
    item2.style.transition = "all 0.75s ease";
    item2.style.transform = "scale(1.1, 1.1)";
});

item2.addEventListener('mouseleave', e => {
    item2.style.transition = "all 0.75s ease";
    item2.style.transform = "initial";
});

item2.addEventListener('click', e => {
    video2.load();
    video3.load();
    mobileBox.style.display = "block";
    mobile2.style.display ="block";
    mobile1.style.display ="none";
    mobile3.style.display ="none";
})

btnBeg.onclick = function () {
    videos.style.display = "block";
    video3.style.display = "none";
    video2.style.display = "block";
    btnBeg.style.backgroundColor = "darkcyan";
    btnAdv.style.backgroundColor = "initial";
    video3.load();
};

btnAdv.onclick = function() {
    videos.style.display = "block";
    video2.style.display = "none";
    video3.style.display = "block";
    btnAdv.style.backgroundColor = "darkcyan";
    btnBeg.style.backgroundColor = "initial";
    video2.load();
};


// 3
item3.addEventListener('mouseenter', e => {
    item3.style.transition = "all 0.5s ease";
    item3.style.transform = "scale(1.1, 1.1)";
});

item3.addEventListener('mouseleave', e => {
    item3.style.transition = "all 0.5s ease";
    item3.style.transform = "initial";
});

item3.addEventListener('click', e => {
    mobileBox.style.display = "block";
    mobile3.style.display ="block";
    mobile1.style.display ="none";
    mobile2.style.display ="none";
});

btnPlay.addEventListener('click', e => {
    mainIsOn = false;
    c.clearRect(0,0, innerWidth, innerHeight);

    // Remove all elements on the screen
    projects.remove();
    tip.remove();
    intro.remove();
    title.remove();
    title2.remove();
    title3.remove();
    major.remove();
    place.remove();
    mobileBox.remove();

    // Resize canvas. Render Snowflakes canvas + Init2() called.
    canvas.width = 0;
    canvas.height = 0;
    graphics.remove();
    canvasSF.width = window.innerWidth;
    canvasSF.height = window.innerHeight;
    graphics2.style.display = 'block';

    c = canvasSF.getContext('2d');
    particles = [];
    mainIsOn = false;
    init2(canvasSF.width / 2, canvasSF.height / 2);
    animate2();
});


// 4 
item4.addEventListener('mouseenter', e => {
    item4.style.transition = "all 0.75s ease";
    item4.style.transform = "scale(1.1, 1.1)";
});

item4.addEventListener('mouseleave', e => {
    item4.style.transition = "all 0.75s ease";
    item4.style.transform = "initial";
});

item4.addEventListener('click', e => {
    //mobileBox.style.display = 'block';
});

// Stop Rotation
intro.addEventListener('click', e => {
    stopRotation = !stopRotation;
});




var c = canvas.getContext('2d');

function Particle(x, y, centerX, centerY) {
    this.x = x;
    this.y = y;
    // #F8E168
    this.color = '#FFE047';
    this.radius = 5 + Math.random() * 10;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.001;
    this.distanceFromCenter = (canvas.width / 7)+ (canvas.width / 3) * Math.random();
    this.centerX = centerX;
    this.centerY = centerY;

    // Resize Radius * distance for mobile users
    if (mobileview) {
        this.radius = 5 + Math.random() * 5;
        this.distanceFromCenter = 30 + (canvas.width / 3) * Math.random();
    }

    this.update = () => {
        // Move the point over time
        this.radians += this.velocity;
        this.x = this.centerX + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.centerY + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw();
    }

    this.draw = () => {
        // Center Particle
        c.beginPath();
        c.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI *2 , false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2 , false);
        c.fillStyle = this.color;
        c.fill();
        c.moveTo(this.x, this.y);
        c.lineTo(this.centerX, this.centerY);
        c.strokeStyle = this.color;
        c.stroke();
        c.closePath();
    }
}

function Text(x, y, rad, text) {
    this.x = x;
    this.y = y;
    this.radians = rad;
    this.velocity = 0.001;
    this.distanceFromCenter = (canvas.width / 3);
    this.centerX = canvas.width / 2;
    this.centerY = canvas.height / 2;

    this.update = () => {
        // Move the point over time
        this.radians += this.velocity;
        this.x = this.centerX + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.centerY + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw();
    }

    this.draw = () => {
        text.style.left = this.x + 'px';
        text.style.top = this.y + 'px';
    }
}

let particles;
particles = [];
function init(x, y, centerX, centerY) {
    
    for (var i=0; i < 10; i++) {
        particles.push(new Particle(x, y, centerX, centerY));
    }
}

let texts;
texts = [];
function initText(x, y) {
    var textX = canvas.width / 2;
    var textY = canvas.height / 2;
    if (mobileview) {
        textX = canvas.width / 5;
        textY = canvas.height / 4;
    }
    texts.push(new Text(textX, textY, 0, title));
    texts.push(new Text(textX, textY, (Math.PI / 3), title2));
    texts.push(new Text(textX, textY, (Math.PI), title3));
    texts.push(new Text(textX, textY, (Math.PI * 4 /3), major));
    texts.push(new Text(textX, textY, (Math.PI * 5 / 3), place));
}

function animate() {
    if (mainIsOn) {
        requestAnimationFrame(animate);
        if (!stopRotation) {
            c.clearRect(0,0, innerWidth, innerHeight);
            particles.forEach(particle => {
                particle.update();
            });
            texts.forEach(text => {
                text.update();
            })
        }
    }
}

function center() {
    c.beginPath();
    c.arc(canvas.width / 2, canvas.height / 2, 70, 0, Math.PI *2 , false);
    c.fillStyle = 'white';
    c.fill();
    c.closePath();
}


init(canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2);
initText(canvas.width / 2, canvas.height / 2);
animate();



//     * * * * *  
// SNOWFLAKES VARIABLES & OBJECTS & IMPLEMENTATIONS

          
// Snowflakes elements
var canvasSF = document.querySelector("#canvas-sf");
var graphics2 = document.querySelector("#graphics2");
var pause = document.querySelector('#pause');
var fall = document.querySelector('#fall');
var reset = document.querySelector('#reset');
var back = document.querySelector('#back');
var help = document.querySelector('#help');
var inst = document.querySelector('#instructions');
var buttons = document.querySelector('#buttons');
var keepRotate = true;
var floating = true;
var showHelp = true;

// Event Handlers - SNOWFLAKES
canvasSF.addEventListener('click', e => {
    init2(e.pageX, e.pageY);
});

pause.addEventListener('click', e => {
    keepRotate = !keepRotate;
    particles.forEach(particle => {
        if (keepRotate) {
            particle.reduce();
        } else {
            particle.enlarge();
        }
        particle.update();
    });
});

fall.addEventListener('click', e => {
    floating = !floating;
});


reset.addEventListener('click', e => {
    particles = [];
    keepRotate = true;
    floating = true;
    c.clearRect(0,0, innerWidth, innerHeight);
    init2(canvasSF.width / 2, canvasSF.height / 2);
});

back.addEventListener('click', e => {
    location.reload();
});

help.addEventListener('click', e => {
    if (!showHelp) {
        inst.style.display = 'block';
        help.style.background = 'black';
        help.style.color = 'white';
    } else {
        inst.style.display = 'none';
        help.style.background = '#E8E8E8';
        help.style.color = 'initial';
    }
    showHelp = !showHelp;
    
});


// Objects
// Prevent Overlapping
var locations = [];

function ParticleSF(x, y, radians, dist, type) {
    this.x = x;
    this.y = y;
    this.centerX = x;
    this.centerY = y;
    this.color = 'white';
    if (type =='c' || dist < 15) {
        this.radius = 1.5;
    } else {
        this.radius = 1 + Math.random() * 3;
    }
    this.radians = radians;
    this.velocity = 0.01;
    this.distanceFromCenter = dist;
    this.shape = Math.random() * Math.PI * 2;

    this.update = () => {
        // Move the point over time
        this.radians += this.velocity;
        this.x = this.centerX + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.centerY + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw();
    }

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0,  Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.moveTo(this.x, this.y);
        c.lineTo(this.centerX, this.centerY);

        c.moveTo(this.x, this.y);
        //c.lineTo(this.x - 10, this.y);
        //c.arc(this.x - 10, this.y, 1, 0,  Math.PI * 2, false);
        //c.rect(this.x - 10, this.y, 1, 1);
        c.strokeStyle = 'white';
        c.stroke();
        c.closePath();
    }

    this.enlarge = () => {
        this.radius += 0.5;
    }

    this.reduce = () => {
        this.radius -= 0.5;
    }

    this.fall = () => {
        this.radians += this.velocity;
        this.x = this.centerX + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.centerY + Math.sin(this.radians) * this.distanceFromCenter;
        this.y += 1;
        this.centerY += 1;
        this.draw();
    }

}



// Implementation
function init2(x, y) {
    var dice = Math.floor(Math.random() * 5);
    var dist = 10 + Math.random() * 50;
    switch(dice) {
        case 0:
            for (var i=0; i < 32; i++) {
                var dist1;
                if (i % 3 == 0){
                    dist1 = dist / 2;
                } else if (i % 4 == 0){
                    dist1 = dist / 3;
                } else {
                    dist1 = dist;
                } 
                particles.push(new ParticleSF(x, y, i * Math.PI * 0.0625, dist1, "a"));
            }            
            break;
        case 1:
            for (var i=0; i < 12; i++) {
                var dist2;
                if (i % 2 ==0) {
                    dist2 = dist;
                } else {
                    dist2 = dist / 2;
                }
                particles.push(new ParticleSF(x, y, i * Math.PI / 6, dist2, "b"));
            }
            break;
        case 2:
            for (var i=0; i < 24; i++) {
                var dist3;
                if (i % 2 ==0) {
                    dist3 = dist;
                } else {
                    dist3 = dist / 2;
                }
                particles.push(new ParticleSF(x, y, i * Math.PI / 12, dist3, "c"));
            }
            break;
        case 3:
            for (var i=0; i < 24; i++) {
                var dist4;
                if (i % 2 ==0 && i % 4 != 0) {
                    dist4 = dist;
                } else if (i % 4 == 0){
                    dist4 = 0.3 * dist;
                } else {
                    dist4 = 0.9 * dist;
                }
                particles.push(new ParticleSF(x, y, i * Math.PI / 12, dist4, "d"));
            }
            break;
        case 4:
            for (var i=0; i < 8; i ++) {
                particles.push(new ParticleSF(x, y, i * Math.PI * 0.25, dist, "e"));
            }
    }
    
}


function animate2() {
    if (!mainIsOn) {
        requestAnimationFrame(animate2);
        if (keepRotate) {
            c.clearRect(0,0, innerWidth, innerHeight);
            particles.forEach(particle => {
                if (floating) {
                    particle.update();
                } else {
                    particle.fall();
                }
            });
        }
    }
}