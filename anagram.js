var isAnagram = function(s, t) {
  if (s.length != t.length)
    return false;
  var freq1 = [];
  var freq2 = [];
  for (var i = 0; i < 26; i++) {
    freq1.push(0);
    freq2.push(0);
  }
  for (var i = 0; i < s.length; i++) {
    freq1[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (var i = 0; i < t.length; i++) {
    freq2[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (var i = 0; i < 26; i++) {
    if (freq1[i] != freq2[i])
      return false;
  }
  return true;
};