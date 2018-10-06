/* global getPonyAllergies, describe, it, expect, should */

describe('getPonyAllergies()', function () {
  'use strict';

  it('exists', function () {
    expect(getPonyAllergies).to.be.a('function');

  });

  it('dshould return the correct allergies for Sandy', function () {
    var ponies = [
      {
        "id": 427,
        "name": "Firefly",
        "allergies": [
          "gluten",
          "peanut"
        ],
        "email": "cindy@ponymail.com"
      },
      {
        "id": 23,
        "name": "Black Lightning",
        "allergies": [
          "soy",
          "peanut"
        ],
        "email": "sandy@hotmail.com"
      },
      {
        "id": 458,
        "name": "Picadilly",
        "allergies": [
          "corn",
          "gluten"
        ],
        "email": "cindy@ponymail.com"
      },
      {
        "id": 142,
        "name": "Brad",
        "allergies": [
          "gluten",
          "chicken"
        ],
        "email": "sandy@hotmail.com"
      },
      {
        "id": 184,
        "name": "Cahoot",
        "allergies": [
          "soy",
          "peanut",
          "gluten"
        ],
        "email": "jimmy@ponymail.com"
      }
    ];
    var ownerEmail = 'sandy@hotmail.com';
    var output = ["chicken", "gluten", "peanut", "soy"];
    getPonyAllergies(ponies, ownerEmail).should.eql(output);
  });

  it('should return the correct allergies for Cindy', function () {
    var ponies = [
      {
        "id": 427,
        "name": "Firefly",
        "allergies": [
          "gluten",
          "peanut"
        ],
        "email": "cindy@ponymail.com"
      },
      {
        "id": 23,
        "name": "Black Lightning",
        "allergies": [
          "soy",
          "peanut"
        ],
        "email": "sandy@hotmail.com"
      },
      {
        "id": 458,
        "name": "Picadilly",
        "allergies": [
          "corn",
          "gluten"
        ],
        "email": "cindy@ponymail.com"
      },
      {
        "id": 142,
        "name": "Brad",
        "allergies": [
          "gluten",
          "chicken"
        ],
        "email": "sandy@hotmail.com"
      },
      {
        "id": 184,
        "name": "Cahoot",
        "allergies": [
          "soy",
          "peanut",
          "gluten"
        ],
        "email": "jimmy@ponymail.com"
      }
    ];
    var ownerEmail = 'cindy@ponymail.com';
    var output = ["corn", "gluten", "peanut"];
    getPonyAllergies(ponies, ownerEmail).should.eql(output);
  });

  // Add more assertions here
});
