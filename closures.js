function sendRequest() {
  var requestID = '123'
  $ajax({
    url: '/myUrl',
    success: function(response) {
      alert('Request ' + requestID + ' returned')
    }
  })
}

// Closures enables you to access variables outside the functional scope and inside the global scope.

// Great docs here: https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
