import { DECORATIONS } from "./enum";

export default class CanvasManager{
    constructor(){
        this.glass = new Image();
        this.glass.src = 'assets/cocktail.png';
        this.decorationsImages = new Map();
        Object.keys(DECORATIONS).forEach(decoration=>{
            let image = new Image();
            image.src=`assets/decorations/${decoration}.png`;
            this.decorationsImages.set(decoration, image);
        });
    }

    getCoordinate(a,b,ratio){
        return{
            x: Math.floor(a.x + (b.x - a.x) * ratio),
            y: Math.floor(a.y + (b.y - a.y) * ratio)
        }
    }

    renderCanvas(ingredients, decorations) {
        let canvas = document.getElementById('cocktail');
        if (canvas) {
            let ctx = canvas.getContext('2d');
            const marginX = 100;
            const marginY = 50;
            const margin = {x:100, y:50};
            const leftPoint = {x: 0, y:0};
            const rightPoint = {x:76, y:0};
            const bottomPoint = {x:38, y:38}; 
    
            ctx.drawImage(this.glass, margin.x, margin.y);
    
            ingredients.forEach((ingredient, index) => {
                ctx.fillStyle = ingredient.color;
                ctx.beginPath();
                let ratioLeftPoint = this.getCoordinate(bottomPoint, leftPoint, Math.min(1,index * 0.1));
                let ratioRightPoint = this.getCoordinate(bottomPoint, rightPoint, Math.min(1,index * 0.1));

                let ratioLeftUpPoint = this.getCoordinate(bottomPoint, leftPoint, Math.min(1,(index + 1) * 0.1));
                let ratioRightUpPoint = this.getCoordinate(bottomPoint, rightPoint, Math.min(1,(index + 1) * 0.1));
    
                ctx.moveTo(ratioLeftPoint.x + margin.x, ratioLeftPoint.y + margin.y);
                ctx.lineTo(ratioLeftUpPoint.x + margin.x, ratioLeftUpPoint.y + margin.y);
                ctx.lineTo(ratioRightUpPoint.x + marginX, ratioRightUpPoint.y + marginY);
                ctx.lineTo(ratioRightPoint.x + marginX, ratioRightPoint.y + marginY);
                ctx.fill();
            });

            decorations.forEach((decoration, index) =>{
                let decorationImage = this.decorationsImages.get(decoration.id);
                ctx.drawImage(decorationImage, rightPoint.x + margin.x - decorationImage.width * index, rightPoint.y + margin.y - decorationImage.height);
            })
        }
    }
}
