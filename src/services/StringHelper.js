/** THIS IS HELPER METHODS */

//Capitalize all words in the string seperated by a character for example ' ' or '-'.
export const capitalize = (str) => {

  str = capitalizeArray(str, ' ')
  return capitalizeArray(str, '-');
}

const capitalizeArray = (str, char) => {
  var strArray = str.split(char);
  var result = [];
  for (var i = 0; i < strArray.length; i++) {
    result[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  };
  return result.join(char);
} 