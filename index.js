var global = (function(){return this}());
module.exports = function () {
  global.setImmediate = global.setImmediate || function () {
    var args = [].slice.apply(arguments);
    args.splice(1, 0, 0)
    setTimeout.apply(null, args)
  }
}