import { DECORATIONS, SHAPES } from "./enum";

export default class CanvasManager{
    constructor(){
        this.decorationsImages = new Map();
        this.shapesImages = new Map();

        Object.keys(DECORATIONS).forEach(decoration=>{
            let image = new Image();
            image.src=`assets/decorations/${decoration}.png`;
            this.decorationsImages.set(decoration, image);
        });

        Object.keys(SHAPES).forEach(shape=>{
            let image = new Image();
            image.src = `assets/shapes/${shape}.png`;
            this.shapesImages.set(shape, image);
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
        let glass = this.shapesImages.get(shape.id);
        if (canvas && glass) {
            let ctx = canvas.getContext('2d');
            const margin = {x:canvas.width/2 - glass.width /2, y:50};
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

            ctx.drawImage(glass, margin.x, margin.y);

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
