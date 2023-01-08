class Classname {
  data = [];
  add(a) {
    this.data.push(a);
  }
  remove(index) {
    this.data.splice(index, 1);
  }

  edit(index, value) {
    this.data.splice(index, 1, value);
  }
}
// exports.ToDoClass = Classname;
module.exports = Classname;
