class MoreCSSTranspiler {
  constructor (moreString) {
    this.styles = {}
    this.moreLines = moreString.split(/\r?\n/g)
  }

  transpile () {
    for (let i = 0; i < this.moreLines.length; i++) {
      this.transpileLine(i)
    }
    let cssOut = ''
    for (let s in this.styles) {
      cssOut = `${cssOut}\n${s} {\n`
      for (let sS of this.styles[s]) {
        cssOut = `${cssOut}${sS}\n`
      }
      cssOut = `${cssOut}}`
    }
    return cssOut
  }

  transpileLine (lineNumber) {
    let line = this.moreLines[lineNumber]

    function throwError (errType, errString) {
      throw new Error(`MoreCSS - ${errType} - ${errString}
at line ${lineNumber + 1},
'${line}'`)
    }

    if (!(line[line.length - 1] === ';')) {
      throwError('Style Lint', 'Line must be terminated with a semi-colon.')
    }

    let isImportant = !(line.includes('!unimportant'))
    line = line.replace('!unimportant', '').replace(';', '')

    // Find the split between the property and the selector
    let selSplit = line.split(':')[0].split(' ')
    let value = this.transpileValue(line.split(':')[1])
    let property = selSplit[selSplit.length - 1]
    let selector = selSplit.filter((x, i) => i !== selSplit.length - 1).join(' ')

    if (!Object.keys(this.styles).includes(selector)) {
      this.styles[selector] = []
    }

    this.styles[selector]
      .push(`${property}:${value} ${isImportant ? '!important' : ''};`)
  }

  transpileValue (value) {
    // TODO
    return value
  }
}
window.MoreCSSTranspiler = MoreCSSTranspiler
