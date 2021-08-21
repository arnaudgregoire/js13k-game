import { DECORATIONS, SHAPES } from "./enum";

export default class CanvasManager{
    constructor(){
        this.decorationsImages = new Map();
        this.shapes = new Image();
        this.shapes.src = `assets/shapes/shapes.png`;

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

    renderCanvas(ingredients, decorations, shape) {
        let canvas = document.getElementById('cocktail');
        if (canvas && shape) {
            let ctx = canvas.getContext('2d');
            const margin = {x:Math.floor(canvas.width/2 - shape.w /2), y:Math.floor(canvas.height/2 -shape.h/3)};
            const topLeft = {x:0, y:0};
            const bottomRight = {x:shape.x, y:shape.y};
            const bottomLeft = {x:0, y:shape.y};
            const topRight = {x:shape.x, y:0};
    
            ingredients.forEach((ingredient, index) => {
                ctx.fillStyle = ingredient.color;
                ctx.beginPath();
                const ratioLeftPoint = this.getCoordinate(bottomLeft, topLeft, Math.min(0.8,index * 0.1));
                const ratioRightPoint = this.getCoordinate(bottomRight, topRight, Math.min(0.8,index * 0.1));

                const ratioLeftUpPoint = this.getCoordinate(bottomLeft, topLeft, Math.min(0.8,(index + 1) * 0.1));
                const ratioRightUpPoint = this.getCoordinate(bottomRight, topRight, Math.min(0.8,(index + 1) * 0.1));
    
                ctx.moveTo(ratioLeftPoint.x + margin.x, ratioLeftPoint.y + margin.y);
                ctx.lineTo(ratioLeftUpPoint.x + margin.x, ratioLeftUpPoint.y + margin.y);
                ctx.lineTo(ratioRightUpPoint.x + margin.x, ratioRightUpPoint.y + margin.y);
                ctx.lineTo(ratioRightPoint.x + margin.x, ratioRightPoint.y + margin.y);
                ctx.fill();
            });

            ctx.drawImage(this.shapes, shape.d, 0, shape.w, shape.h, margin.x, margin.y, shape.w, shape.h);

            decorations.forEach((decoration, index) =>{
                let decorationImage = this.decorationsImages.get(decoration.id);
                if(index%2 == 0){
                    ctx.drawImage(decorationImage, topRight.x + margin.x + decoration.x, topRight.y + margin.y + decoration.y);
                }
                else{
                    ctx.save();
                    ctx.translate(canvas.width, 0);
                    ctx.scale(-1,1);
                    ctx.drawImage(decorationImage, topRight.x + margin.x + decoration.x, topRight.y + margin.y + decoration.y);
                    ctx.restore();
                }
            });
        }
    }
}
