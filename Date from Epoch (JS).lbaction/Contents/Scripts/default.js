// LaunchBar Action Script

function run(msSinceEpoch) {
    if (msSinceEpoch == undefined) {
        // Inform the user that there was no argument
        LaunchBar.alert('No argument was passed to the action');
    } else {
        // Return a single item that describes the argument
        return [{ title: new Date(Number(msSinceEpoch)).toString()}];
    }
}
