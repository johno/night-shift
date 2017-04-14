#!/usr/bin/env node

const meow = require('meow')
const shtml = require('shtml')

const nightShift = require('./')

const cli = meow(shtml`
  <div>
    <underline>Usage</underline>
    $ night-shift<br><br>

    <underline>Options</underline>

    -h, --help - Get help menu
    -v, --version - Get the version<br><br>

    <underline>Examples</underline>

    $ night-shift -h
    $ night-shift
  </div>
`, {
  alias: {
    v: 'version',
    h: 'help'
  }
})

nightShift()
