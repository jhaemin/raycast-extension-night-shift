import { runAppleScript } from "run-applescript";

export default async () => {
  console.log("Toggle Night Shift")

  await runAppleScript(`
tell application "System Preferences"
  activate
  reveal pane "Displays"
end tell

delay 0.5

tell application "System Events"
  tell process "System Preferences"
    click button "Night Shift" of tab group 1 of window 1
    -- click checkbox "Enable Ask Siri" of window "Siri"
  end tell
end tell
`);
};
