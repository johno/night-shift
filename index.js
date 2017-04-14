'use strict'

const os = require('os')
const runApplescript = require('run-applescript')

module.exports = () => {
  if (os.platform() !== 'darwin') {
    throw new Error('do-not-disturb only supports the darwin platform')
  }

  return runApplescript(`
		tell application "System Events"
			tell process "SystemUIServer"
				if exists menu bar item "Notification Center, Do Not Disturb enabled" of menu bar 1 then
					click menu bar item "Notification Center, Do Not Disturb enabled" of menu bar 1
				else
					click menu bar item "Notification Center" of menu bar 1
				end if
			end tell
			tell process "Notification Center"
				click checkbox 2 of UI element 1 of row 1 of table 1 of scroll area 1 of window "NotificationTableWindow"
			end tell
			tell process "SystemUIServer"
				if exists menu bar item "Notification Center, Do Not Disturb enabled" of menu bar 1 then
					click menu bar item "Notification Center, Do Not Disturb enabled" of menu bar 1
				else
					click menu bar item "Notification Center" of menu bar 1
				end if
			end tell
		end tell
	`)

}
