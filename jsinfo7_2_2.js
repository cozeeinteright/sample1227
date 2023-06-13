let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if(value.length < 4) {
      console.log("Name in too short, need at leat 4");
      return;
    }
    this._name = value;
  }
};


user.name = "Pete";
console.log(user.name);

user.name = ""
console.log(user.name);