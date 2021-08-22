export default class CanvasManager{
    constructor(){
        this.decorations = new Image();
        this.decorations.src = 'assets/decorations/decorations.png';
        this.shapes = new Image();
        this.shapes.src = 'assets/shapes/shapes.png';
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
            ctx.imageSmoothingEnabled = false;

            const margin = {x:Math.floor(canvas.width/2 - shape.w), y:Math.floor(canvas.height/2 -shape.h/2)};
            const topLeft = {x:0, y:0};
            const bottomRight = {x:shape.x * 2, y:shape.y * 2};
            const bottomLeft = {x:0, y:shape.y * 2};
            const topRight = {x:shape.x * 2, y:0};
    
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

            ctx.drawImage(this.shapes, shape.d, 0, shape.w, shape.h, margin.x, margin.y, shape.w * 2, shape.h * 2);

            decorations.forEach((decoration, index) =>{
                if(index%2 == 0){
                    ctx.drawImage(this.decorations,
                        decoration.d,
                        0,
                        decoration.w,
                        decoration.h,
                        margin.x + shape.x * 2 + decoration.x *2,
                        margin.y + decoration.y * 2,
                        decoration.w * 2,
                        decoration.h * 2);
                }
                else{
                    ctx.save();
                    ctx.translate(canvas.width, 0);
                    ctx.scale(-1,1);
                    ctx.drawImage(this.decorations,
                        decoration.d,
                        0,
                        decoration.w,
                        decoration.h,
                        margin.x + shape.x * 2 + decoration.x * 2,
                        margin.y + decoration.y * 2,
                        decoration.w * 2,
                        decoration.h * 2);
                    ctx.restore();
                }
            });
        }
    }
}
