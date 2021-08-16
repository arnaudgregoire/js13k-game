function renderCanvas(ingredients, decorations){
    let canvas = document.getElementById('cocktail');
    if(canvas){
        let ctx = canvas.getContext('2d');
        let rgbColor = getCocktailColor(ingredients.map(i=>{return i.color}));
        let hexColor = rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b);
        let img = new Image();
        const marginX = 100;
        const marginY = 50;
        const margin = {x:100, y:50};
        const leftPoint = {x: 0, y:0};
        const rightPoint = {x:76, y:0};
        const bottomPoint = {x:38, y:38}; 

        img.onload=()=>{
            ctx.drawImage(img, margin.x, margin.y);
            ctx.fillStyle = hexColor;
            ctx.beginPath();
            
            let ratioLeftPoint = getCoordinate(bottomPoint, leftPoint, Math.min(1,ingredients.length * 0.1));
            let ratioRightPoint = getCoordinate(bottomPoint, rightPoint, Math.min(1,ingredients.length * 0.1));

            ctx.moveTo(ratioLeftPoint.x + margin.x, ratioLeftPoint.y + margin.y);
            ctx.lineTo(bottomPoint.x + margin.x, bottomPoint.y + margin.y);
            ctx.lineTo(ratioRightPoint.x + marginX, ratioRightPoint.y + marginY);
            ctx.fill();
        };
        img.src = 'assets/cocktail.png';
    }
}

function getCoordinate(a,b,ratio){
    return{
        x: a.x + (b.x - a.x) * ratio,
        y: a.y + (b.y - a.y) * ratio
    }
}

function getCocktailColor(colors){
    let rgbColors = colors.map((color)=>{return hexToRgb(color)});
    let rgbColor = rgbColors.reduce((acc, current)=>{return blend(acc, current)});
    return rgbColor;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function blend(c1, c2){
    let c = {r:0, g:0, b:0};
    c.r = parseInt(255 - Math.sqrt(((255-c1.r)**2 + (255-c2.r)**2)/2));
    c.g = parseInt(255 - Math.sqrt(((255-c1.g)**2 + (255-c2.g)**2)/2));
    c.b = parseInt(255 - Math.sqrt(((255-c1.b)**2 + (255-c2.b)**2)/2));
    return c;
}

module.exports = {renderCanvas};