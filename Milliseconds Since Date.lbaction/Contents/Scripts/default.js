// LaunchBar Action Script

function run(dateString) {
  if (dateString != undefined) {
    return [{title: new Date(dateString).getTime().toString()}]
  } else {
    return [{title: new Date().getTime().toString()}]
  }
}
