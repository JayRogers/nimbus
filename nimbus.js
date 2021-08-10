//Job Nimbus quiz
function matchBrackets(phrase) {
    if (typeof(phrase) !== 'string') {
        return false;
    }
    let bracketStack = [];
        for (var i = 0; i < phrase.length; i++) {
            if(phrase[i] === '{'){
            bracketStack.push(phrase[i]);
        } else if (phrase[i] === '}'){
            if (bracketStack.length === 0){
              return false;
          }
            bracketStack.pop();
        }
          }
      return (bracketStack.length === 0 ? true : false);  
  }
  module.exports = matchBrackets;
  
  