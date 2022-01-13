import { runAppleScript } from "run-applescript";

export default async () => {
  console.log("Toggle Night Shift")

  await runAppleScript(`
on run
	tell application "System Preferences"
		activate
		reveal pane "Displays"
		-- reveal pane "Siri"
	end tell
	
	tell application "System Events" to set focusedAppID to bundle identifier of first application process whose frontmost is true
	
	delay 2
	
	tell application "System Events"
		tell process "System Preferences"
			--set visible to false
			click button 2 of window 1
			delay 2
			click pop up button 1 of sheet 1 of window 1
			delay 2
			click menu item 2 of menu 1 of pop up button 1 of sheet 1 of window 1
			if value of checkbox 1 of sheet 1 of window 1 is 0 then
				click checkbox 1 of sheet 1 of window 1
			end if
			delay 2
			click button 2 of sheet 1 of window 1
			-- click checkbox "Enable Ask Siri" of window "Siri"
			-- click checkbox "Show Siri in menu bar" of group 1 of window 1
			-- click button 2 of group 1 of window 1
		end tell
	end tell
	tell application id focusedAppID to activate
end run
`);
};
