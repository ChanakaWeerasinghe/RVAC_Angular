
exports.callJSFun=function(){
     window.flutter_inappwebview
      .callHandler('send_token')
      .then(function (result) {
        // print to the console the data coming
        // from the Flutter side.
        console.log(JSON.stringify(result));

        window.flutter_inappwebview.callHandler(
          'back_to_me_angular',
          1,
          true,
          ['bar', 5],
          { foo: 'baz' },
          result
        );
      });

}


  exports.productData=function(){
              window.flutter_inappwebview.callHandler(
                'product_data',
                data,
              {
                "products": {
                  "data": {
                    "items": [{
                      "id": "GGOEAFKA087499",
                      "name": "Android Small Removable Sticker Sheet",
                      "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
                      "features": "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
                      "price": "2.99",
                      "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
                      "url": "Android+Small+Removable+Sticker+Sheet",
                      "category": "accessories",
                      "subcategory": "accessories"
                    },]}}}
              );
              window.flutter_inappwebview.callHandler(
                'client_id',
                "hgsdfh787834ndns",

              );
}


function myfunction(params1, params2) {
    console.log('param1', params1);
    console.log('param2', params2);
      window.flutter_inappwebview.callHandler(
                    'product_data',
                    params1,
                    params2,

                  );
}



