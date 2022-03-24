class Animals {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  sing() {
    return `${this.name} can sing`;
  }
  dance() {
    return `${this.name} can dance`;
  }
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo.sing());
