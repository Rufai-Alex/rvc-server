
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {recipe_id: 1, ingredient_id: 1, quantity: 2, unit_id: 1},
    {recipe_id: 1, ingredient_id: 2, quantity: 500, unit_id: 3},
    {recipe_id: 1, ingredient_id: 3, quantity: 100, unit_id: 3},
    {recipe_id: 1, ingredient_id: 4, quantity: 5, unit_id: 8},
    {recipe_id: 1, ingredient_id: 5, quantity: 200, unit_id: 4},
    {recipe_id: 1, ingredient_id: 6, quantity: 50, unit_id: 3},
    {recipe_id: 2, ingredient_id: 2, quantity: 500, unit_id: 3},
    {recipe_id: 2, ingredient_id: 7, quantity: 2, unit_id: 6},
    {recipe_id: 2, ingredient_id: 3, quantity: 200, unit_id: 3},
    {recipe_id: 2, ingredient_id: 4, quantity: 1, unit_id: 8},
    {recipe_id: 2, ingredient_id: 6, quantity: 1, unit_id: 6},
    {recipe_id: 3, ingredient_id: 2, quantity: 500, unit_id: 3},
    {recipe_id: 3, ingredient_id: 3, quantity: 100, unit_id: 3},
    {recipe_id: 3, ingredient_id: 7, quantity: 3, unit_id: 6},
    {recipe_id: 3, ingredient_id: 4, quantity: 1, unit_id: 8},
    {recipe_id: 3, ingredient_id: 10, quantity: 2, unit_id: 1},
    {recipe_id: 3, ingredient_id: 1, quantity: 2, unit_id: 1},
    {recipe_id: 3, ingredient_id: 5, quantity: 100, unit_id: 4},
    {recipe_id: 3, ingredient_id: 16, quantity: 2, unit_id: 7}
  ]);
};
