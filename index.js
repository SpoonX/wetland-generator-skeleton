const SkeletonGenerator = require('./src/SkeletonGenerator');
const upper             = require('./src/upper');

module.exports = {
  generators : {skeleton: SkeletonGenerator},
  steps      : {upper},
  command    : 'skeleton <name>',
  description: 'Generate a new greeting file',
  examples   : ['skeleton greeting -a -x txt'],
  options    : [
    {option: '-a, --alternate', description: 'Alternate characters (So It LoOkS lIkE ThIs)'},
    {option: '-x, --extension <extension>', description: 'extension for the file. Defaults to `html`'}
  ]
};
