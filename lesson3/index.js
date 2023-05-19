test();
function test() {
  const arr = [1, 2, 3, 4];
  for (let i = 0; i < arr.length; i++) {
    hevleh({ inc: arr[i], test: 2 });
  }
}
function hevleh({ test, inc }) {
  console.log(test + ' hevlej bgaa ' + inc);
}
