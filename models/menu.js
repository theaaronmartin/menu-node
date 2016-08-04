const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: { type: String, trim: true, default : '' },
  menuItems: [{
    name: { type : String, default : '' },
    ingredients: { type : String, default : '' },
    price: { type : Number, default : '' }
  }]
});

// Validations
MenuSchema.path('name').required(true, 'Menu name cannot be blank');

// Custom Methods
MenuSchema.methods.addMenuItem = function(menuItem) {
  this.menuItems.push({
    name: menuItem.body
  });

  return this.save();
};

module.exports = mongoose.model('Menu', MenuSchema);
