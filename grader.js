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
    return Math.floor(arr.reduce(function(a, b) {
      return a + b;
    }) / arr.length);
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
    var arr = arr.sort(function(a, b) {
      return a - b;
    }).map(function(a, idx, ary) {
      currNum = a;
      determine[idx] = 0;
      ary.forEach(function(b) {
        if (b === currNum) {
          determine[idx]++;
        }
      });
      return a;
    });
    var largest = Math.max.apply(Math, determine);
    determine.forEach(function(a, idx) {
      if (a === largest) {
        multiModal.push(arr[idx]);
      }
    });
    return multiModal.filter(function(item, pos, ary) {
      return ary.indexOf(item) == pos;
    });
  }
};
