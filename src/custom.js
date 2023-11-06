
exports.callJSFun=function(){
window.addEventListener('flutterInAppWebViewPlatformReady', function (event) {
    window.flutter_inappwebview
      .callHandler('handlerFoo')
      .then(function (result) {
        // print to the console the data coming
        // from the Flutter side.
        console.log(JSON.stringify(result));

        window.flutter_inappwebview.callHandler(
          'handlerFooWithArgs',
          1,
          true,
          ['bar', 5],
          { foo: 'baz' },
          result
        );
      });
  });
hello();
    console.log("Hello Call JS Function From TypeScript ");
}

function hello() {
 print("sdfsdfds");
  function sendMessageToFlutter() {
    var message = 'Hello, Flutter! I am a message from the WebView!';
    window.flutter_inappwebview.callHandler('messageHandler', message);
  }

  window.addEventListener('flutterInAppWebViewPlatformReady', function (event) {
    window.flutter_inappwebview
      .callHandler('handlerFoo')
      .then(function (result) {
        // print to the console the data coming
        // from the Flutter side.
        console.log(JSON.stringify(result));

        window.flutter_inappwebview.callHandler(
          'handlerFooWithArgs',
          1,
          true,
          ['bar', 5],
          { foo: 'baz' },
          result
        );
      });
  });

  //   alert('Hello!!!');
}

hello();


