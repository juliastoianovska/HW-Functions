function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        return true
      } else {
        return false
      }
    }
  }
  return isUnique
}

// for self-check
console.log(isUnique('abcde') === true);
console.log(isUnique('abccde') === false);
