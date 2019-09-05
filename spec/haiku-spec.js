import { Haiku } from './../src/haiku.js';
import { countSyllables } from './../src/haiku.js';

describe ('Haiku', function() {
  it('should not accept numerical input', function() {
    let examplePoem = new Haiku("17 bears", "5 cows", "20 chickens");
    expect(examplePoem.checkValidity()).toBe(false);
  });

});

describe ('countSyllables', function(){
  it('should check how many vowels are in a phrase', function(){
    let phrase = "beep boop borp";
     expect(countSyllables(phrase)).toBe(5);
  });
});
