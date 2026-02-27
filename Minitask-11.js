let perkenalan = function(delay , value){
  return new Promise((resolve) => {
        setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay);

  })
}
perkenalan(1500,"jhon").then(() => perkenalan(2000, "ed"))
  .then(() => perkenalan(500, "jane"));

(async function () {
  await perkenalan(1500,"jhon")
    await perkenalan(2000,"ed")
  await perkenalan(1500,"jane")

})()


// Source - https://stackoverflow.com/a/22707551
// Posted by T.J. Crowder, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-27, License - CC BY-SA 3.0

function later(delay, value) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay, value); // Note the order, `delay` before `value`
        /* Or for outdated browsers that don't support doing that:
        setTimeout(function() {
            resolve(value);
        }, delay);
        Or alternately:
        setTimeout(resolve.bind(null, value), delay);
        */
    });
}
