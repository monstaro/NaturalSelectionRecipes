const chai = require('chai');
const expect = chai.expect;

const User = require('../src/users.js')
const Recipe = require('../src/recipe.js')
let user;
let recipe;
beforeEach(() => {
  user = new User(1, 'Saige Okon',  [
    {
      "ingredient": 11477,
      "amount": 1
    },
    {
      "ingredient": 93820,
      "amount": 1
    }])
})

describe('User', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  })

  it('should have a pantry', () => {
    expect(user.pantry.length).to.equal(2);
    expect(user.pantry.length).to.not.equal(0);
  })

  it('should be able to add to favorite recipes', () => {
    expect(user.favoriteRecipes.length).to.equal(0);
    let recipe = new Recipe();
    user.addToFavorites(recipe);
    expect(user.favoriteRecipes.length).to.equal(1)
  })

  describe ('addToRecipeToBuild', () => {
    it('should only have a length of 1', () => {
      let recipe = new Recipe();
      expect(user.recipeToBuild.length).to.equal(0);
      user.addToRecipeToBuild(recipe);
      expect(user.recipeToBuild.length).to.equal(1);
      user.addToRecipeToBuild(recipe);
      user.addToRecipeToBuild(recipe);
      expect(user.recipeToBuild.length).to.equal(1);
    })
  }) 
})   
   