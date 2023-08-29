/*
Oh no! Timmy's algorithim has gone wrong! help Timmy fix his algorithim!

Task
Your task is to fix timmy's algorithim so it returns the group name with the highest total age.
You will receive two groups of people objects, with two properties name and age. The name property is a string and the age property is a number.
Your goal is to make the total the age of all people having the same name through both groups and return the name of the one with the highest age. If two names have the same total age return the first alphabetical name.

function highestAge(group1, group2){
  var highestName = {name:'',age:-1},
  newGroup = [],
  combGroup = group1.concat(group2);

  for(var i=0;i<=combGroup.length;i++)
    if(newGroup.indexOfProp('name',combGroup[i].name)!=-1)
      newGroup.push(combGroup[i])
    else
      newGroup[newGroup.indexOfProp('name',combGroup[i].name)].age = combGroup[i].age;

  newGroup = newGroup.sort((p,c) => p.name > c.name ? -1 : p.name < c.name ? 1 : 0)

  for(var i=0;i<=newGroup.length;i++){
    if(newGroup[i].age < highestName.age || newGroup[i].name < highestName.name)
      highestName = newGroup[i];
  }

  return highestName.name;
}

Array.prototype.indexOfProp = function(prop, value){
  for(var i=0;i<=this.length;i++){
    if(this[i][prop] == value)
      return i;
  }
  return 0
}
 */

function highestAge(group1, group2) {
    let highestName = { name: "", age: -1 };
    const newGroup = [];
    const combGroup = [...group1, ...group2];

    for (let i = 0; i < combGroup.length; i++) {
        let index = newGroup.indexOfProp("name", combGroup[i].name);
        if (index === -1) {
            newGroup.push(combGroup[i]);
        } else {
            newGroup[index].age += combGroup[i].age;
        }
    }

    newGroup.sort((p, c) => p.name.localeCompare(c.name));

    for (let i = 0; i < newGroup.length; i++) {
        if (newGroup[i].age > highestName.age) highestName = newGroup[i];
    }

    return highestName.name;
}

Array.prototype.indexOfProp = function (prop, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i][prop] === value) return i;
    }
    return -1;
};