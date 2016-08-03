var menus = [
  { id: 1, restaurant: 'Koi', description: 'Sushi', city: 'Incline Village' },
  { id: 2, restaurant: 'Crosby\'s', description: 'Bar Food', city: 'Incline Village' },
  { id: 3, restaurant: 'Char-Pit', description: 'American as Fuck', city: 'King\'s Beach' },
  { id: 4, restaurant: 'China Jade Horse', description: 'Chinese', city: 'Carson City' }
];

class Menu {
  constructor(menu) {
    this.id = menu.id;
    this.restaurant = menu.restaurant;
    this.description = menu.description;
    this.city = menu.city;
  }

  save() {
    console.log('Menu saved!');
  }

  static all() {
    var all = [];

    for (var i = 0; i < menus.length; i++) {
      all.push(new Menu(menus[i]));
    }

    return all;
  }

  static find(id) {
    for (var i = 0; i < menus.length; i++) {
    if (menus[i].id == id) {
      return new Menu(menus[id]);
      }
    }

    return null;
  }
}

module.exports = Menu;
