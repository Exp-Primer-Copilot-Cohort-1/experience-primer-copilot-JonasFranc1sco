function skillsMember() {
  var member = {
    name: "John Doe",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript"],
    greet: function () {
      console.log("Hello, I'm " + this.name);
    },
  };
  return member;
}