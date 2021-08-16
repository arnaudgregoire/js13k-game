export function renderCanvas(ingredients, decorations) {
    let canvas = document.getElementById('cocktail');
    if (canvas) {
        let ctx = canvas.getContext('2d');
        let img = new Image();
        const marginX = 100;
        const marginY = 50;
        const margin = {x:100, y:50};
        const leftPoint = {x: 0, y:0};
        const rightPoint = {x:76, y:0};
        const bottomPoint = {x:38, y:38}; 

        img.onload=()=>{
            ctx.drawImage(img, margin.x, margin.y);

            ingredients.forEach((ingredient, index) => {
                ctx.fillStyle = ingredient.color;
                ctx.beginPath();
                let ratioLeftPoint = getCoordinate(bottomPoint, leftPoint, Math.min(1,index * 0.1));
                let ratioRightPoint = getCoordinate(bottomPoint, rightPoint, Math.min(1,index * 0.1));

                let ratioLeftUpPoint = getCoordinate(bottomPoint, leftPoint, Math.min(1,(index + 1) * 0.1));
                let ratioRightUpPoint = getCoordinate(bottomPoint, rightPoint, Math.min(1,(index + 1) * 0.1));
    
                ctx.moveTo(ratioLeftPoint.x + margin.x, ratioLeftPoint.y + margin.y);
                ctx.lineTo(ratioLeftUpPoint.x + margin.x, ratioLeftUpPoint.y + margin.y);
                ctx.lineTo(ratioRightUpPoint.x + marginX, ratioRightUpPoint.y + marginY);
                ctx.lineTo(ratioRightPoint.x + marginX, ratioRightPoint.y + marginY);
                ctx.fill();
            });
        };
        img.src = 'assets/cocktail.png';
    }
}

function getCoordinate(a,b,ratio){
    return{
        x: Math.floor(a.x + (b.x - a.x) * ratio),
        y: Math.floor(a.y + (b.y - a.y) * ratio)
    }
}
