var assert = {

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    console.log('isTrue assertion passed');
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    }
    console.log('isFalse assertion passed');
  },

  isEq: function(assertionToCheck, otherAssertion) {
    if(assertionToCheck !== otherAssertion) {
      throw new Error("Assertion failed: " + assertionToCheck + " does not equal " + otherAssertion);
    }
    console.log('isEq assertion passed');
  },

  isArray: function(assertionToCheck) {
    if(Object.prototype.toString.call(assertionToCheck) !== '[object Array]' ) {
      throw new Error('Failed: ' + assertionToCheck + ' is not an array');
    } else {
      console.log('isArray assertion passed');
    }
  }

};
