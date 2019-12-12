const chai = require('chai');
const expect = chai.expect;

const User = require('../src/users.js')
const Recipe = require('../src/recipe.js')
let user;
let recipe;
beforeEach(() => {
  user = new User(13845, 'Saige Okon',  [
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

  it('should have an id', () => {
    expect(user.id).to.equal(13845);
    expect(user.id).to.not.equal(00000);
  })

  it('should have a name', () => {
    expect(user.name).to.equal('Saige Okon');
    expect(user.name).to.not.equal('Bob Belcher');
  })

  it('should have a pantry', () => {
    expect(user.pantry.length).to.equal(2);
    expect(user.pantry.length).to.not.equal(0);
  })

  describe ('addToFavorites', () => {

    it('should be able to add to favorite recipes', () => {
      expect(user.favoriteRecipes.length).to.equal(0);
      let recipe = new Recipe();
      user.addToFavorites(recipe);
      expect(user.favoriteRecipes.length).to.equal(1)
    })
  })

  describe ('addToMyMenu', () => {

    it('should be able to add to my menu', () => {
      let recipe = new Recipe();
      expect(user.myMenu.length).to.equal(0);
      user.addToMyMenu(recipe);
      expect(user.myMenu.length).to.equal(1);
    })
  })

  describe ('addToRecipeToBuild', () => {

    it('recipeToBuild should only be able to hold 1 recipe', () => {
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
