if (!String.prototype.startsWith) {
  String.prototype.startsWith = (searchString, position) => {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
