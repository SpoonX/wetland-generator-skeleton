const {Generator} = require('boards');
const emoji       = require('node-emoji');
const path        = require('path');

class SkeletonGenerator extends Generator {
  static defaults() {
    return {
      sourceDirectory: path.join(__dirname, '../templates'),
      targetDirectory: path.join(process.cwd()),
      sourceFile     : `upper.template`,
      extension      : 'html'
    };
  }

  prepare(parameters) {
    console.log('\n', emoji.get('coffee') + ` Preparing parameters!\n`);

    parameters.targetFile = `${parameters.name}.${parameters.extension}`;

    return parameters;
  }

  generate(parameters) {
    console.log('\n', emoji.get('hourglass_flowing_sand') + ` Generating sincere greeting (with extra love)!\n`);

    return this.runSteps(['read', 'replace', 'upper', 'write']);
  }

  complete(stream) {
    console.log('\n', emoji.get('birthday') + ` Pointless file generated!\n`);

    return stream;
  }
}

module.exports = SkeletonGenerator;
