function run(dateString) {
  if (dateString) {
    return [{ title: new Date(dateString).getTime().toString() }];
  }
  return [{ title: new Date().getTime().toString() }];
}
