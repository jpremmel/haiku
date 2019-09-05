import { Haiku } from './../src/haiku.js';

describe ('Haiku', function() {
  it('should not accept numerical input', function() {
    let examplePoem = new Haiku("17 bears", "5 cows", "20 chickens");
    expect(examplePoem.checkValidity()).toBe(false);
  });

});
