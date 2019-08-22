;(function(undefined){
    var _global;

    

    _global = (function(){return this || (0, eval)('this')}())
    if(typeof module !== "undefined" && module.exports){
        module.exports = plugin
    }else if(typeof define === "function" && define.amd){
        define(function(){return plugin;})
    }else{
        !("plugin" in _global) && (_global.plugin = plugin) 
    }
}())