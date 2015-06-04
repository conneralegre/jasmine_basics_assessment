module.exports = {
  letterGrader: function(score) {
    if (score >= 90) {
      return 'A';
    }
    if (score >= 80) {
      return 'B';
    }
    if (score >= 70) {
      return 'C';
    }
    if (score >= 60) {
      return 'D';
    }
    return 'F';
  },
  averageScore: function(arr) {
    var arrLen = arr.length;
    var sum = 0;
    for (var i = 0; i < arrLen; i++) {
      sum += arr[i];
    }
    return Math.floor(sum / arrLen);
  },
  median: function(a) {
    a.sort(function(a, b) {
      return a - b;
    });
    var b = Math.floor(a.length / 2);
    if (a.length % 2) {
      return a[b];
    } else {
      return (a[b - 1] + a[b]) / 2;
    }
  },
  mode: function(arr) {
    var determine = [];
    var multiModal = [];
    var currNum = 0;
    arr = arr.sort(function(a, b) {
      return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
      currNum = arr[i];
      determine[i] = 0;
      for (var y = 0; y < arr.length; y++) {
        if (arr[y] === currNum) {
          determine[i]++;
        }
      }
    }
    var largest = Math.max.apply(Math, determine);
    var found = 0;
    for (var x = 0; x < determine.length; x++) {
      if (determine[x] === largest) {
        multiModal.push(arr[x]);
      }
    }
    var finalAnswerRegis = multiModal.filter(function(item, pos) {
      return multiModal.indexOf(item) == pos;
    });
    return finalAnswerRegis;
  }
};
