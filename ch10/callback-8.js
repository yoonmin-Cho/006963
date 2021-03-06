const test = require('tape');
function addOne(addend, callback){
  callback(addend + 1);
};
function addOneSync(addend){
 return addend + 1;
};

function three(callback){
  setTimeout(function(){
    callback(3, console.log);
    },
    500);
};
three(addOne);
test('our addOne function', (assert) => {
  addOne(3, (result) => {
    assert.equal(result, 4);
    assert.end();
  });
});

test('our addOneSync function', (assert) => {
 assert.equal(addOneSync(3), 4);
 assert.end();
});

test('our three function', (assert) => {
 three((result, callback) => {
  assert.equal(result, 3);
  assert.equal(callback, console.log);
 });
 assert.end();
});
