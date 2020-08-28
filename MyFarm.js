var mf = document.getElementById("tile");
var paper = mf.getContext("2d");
var quantity = random (5, 15);

var background = {
    url: "images/tile.png",
    loadOK: false
}
var cow = {
    url: "images/cow.png",
    loadOK: false
}
var pig = {
    url: "images/pig.png",
    loadOK: false
}
var chicken = {
    url: "images/chicken.png",
    loadOK: false
}

background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load", loadBackground);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCow);

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", loadPig);

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", loadChicken);

function loadBackground()
{
    background.loadOK = true;
    toDraw();
}

function loadCow()
{
    cow.loadOK = true;
    toDraw();
}

function loadPig()
{
    pig.loadOK = true;
    toDraw();
}

function loadChicken()
{
    chicken.loadOK = true;
    toDraw();
}

function toDraw()
{
    if (background.loadOK)
    {
        paper.drawImage(background.image, 0, 0);
    }
    if (cow.loadOK)
    {
        for (var i=0;i<quantity;i++)
        {
            var x = random(0, 14);
            var y = random(0, 14);
            var x = x * 30;
            var y = y * 30;
            paper.drawImage(cow.image, x, y);
        }    
    }
    if (pig.loadOK)
    {
        for (var i=0;i<quantity;i++)
        {
            var x = random(0, 21);
            var y = random(0, 21);
            var x = x * 20;
            var y = y * 20;
            paper.drawImage(pig.image, x, y);
        }    
    }
    if (chicken.loadOK)
    {
        for (var i=0;i<quantity;i++)
        {
            var x = random(0, 42);
            var y = random(0, 42);
            var x = x * 10;
            var y = y * 10;
            paper.drawImage(chicken.image, x, y);
        }    
    }
}

function random (max, min)
{
    var result;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}