const Transform = require('stream').Transform;

let alternate    = false;
let shallWeUpper = false;

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    if (!alternate) {
      return callback(null, chunk.toString().toUpperCase());
    }

    callback(null, chunk.toString().split('').map(character => {
      shallWeUpper = !shallWeUpper;

      return shallWeUpper ? character.toUpperCase() : character;
    }).join(''));
  }
});

module.exports = (parameters, stream) => {
  alternate = parameters.alternate;

  return stream.pipe(uppercase);
};
