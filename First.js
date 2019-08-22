;(function(undefined){
    var _global;
    var numUp = function(numID, startNum, endNum, fixTime){
        this.numContainer = document.getElementById(numID);

        this.startNum = startNum;
        this.endNum = endNum;
        if(endNum > startNum){
            this.speed = fixTime*1000 / (endNum - startNum);
        }else{
            this.speed = (fixTime*1000 / (startNum - endNum));
        }
        this.timer = null;

        if( this.startNum < this.endNum ){
            if(this.timer){
                clearInterval(this.timer)
            }
            this.Up();
        }else if( this.startNum > this.endNum ){
            if(this.timer){
                clearInterval(this.timer)
            }
            this.Down();
        }

    }
    numUp.prototype.Up = function(){
        this.timer = setInterval(() => {
            if (this.startNum < this.endNum){
                this.startNum += 1;
                this.numContainer.innerHTML = this.startNum;
            }
        }, this.speed)

    }
    numUp.prototype.Down = function(){
        this.timer = setInterval(() => {
            if (this.startNum > this.endNum){
                this.startNum += -1;
                this.numContainer.innerHTML = this.startNum;
            }
        }, this.speed)
    }

    numUp.prototype.dispose = function(){
       numUp = 'undefined';
    }

    // 最后将插件对象暴露给全局对象
    _global = (function(){ return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = numUp;
    } else if (typeof define === "function" && define.amd) {
        define(function(){return numUp;});
    } else {
        !('numUp' in _global) && (_global.numUp = numUp);
    }

}())
