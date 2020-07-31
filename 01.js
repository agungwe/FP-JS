function palindrome(str) {

    var str1 = str.toLowerCase().replace(/\s/g, '').replace(
      /[^a-zA-Z 0-9]/gi, "");
  
    var str2 = str.toLowerCase().replace(/\s/g, '').replace(
      /[^a-zA-Z 0-9]/gi, "").split("").reverse().join("");
  
  
    if (str1 === str2) {
      return true;
    }
    return false;
  }
  
  console.log(palindrome('ibu ratna antar ubi'))
  console.log(palindrome('kasur ini rusak'))
  console.log(palindrome('A nut for a jar of tuna'))
  console.log(palindrome('Borrow or rob?'))
  console.log(palindrome('Was it a car or a cat I saw?'))