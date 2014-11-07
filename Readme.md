# setImmediate-min

setImmediate polyfill for when you value code size over speed of async execution

For use with old versions of Node and Browsers not
supporting setImmediate. Package for browsers using
browserify.

`setImmediate` is a "controversial" API.

Reasons for this are unclear to me,
but from what I gather

* WebKit have been reluctant to implement (for like.. 3-4 years now)
  * Reason seems to be they felt setTimeout was "good enough" .. because "clamping"
  * But clamping was/is broken, so setTimeout is a  
    significantly slower than setImmediate
* Because WebKit team haven't implemented, Firefox have
  followed their lead
* Thus, we only have setImmediate in IE and Node at the moment. 

There are some excellent polyfills that piggy back
on whatever native asynchronous API is fastest for
a given browser, if you want the fastest possible
async operation, check out [https://www.npmjs.org/package/setimmediate](https://www.npmjs.org/package/setimmediate)

If, however,  you want something that's a small amount of code, and it doesn't matter if the op is a couple of hundred milliseconds slower use this.




