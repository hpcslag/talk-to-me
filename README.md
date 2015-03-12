# TALK TO ME
use web rtc api send Camera and Sound stream to your friends! Application based on Node.js(Express and Socket.io)

![Logo](http://i.imgur.com/3RjpHft.png)

##API
#####Initialization 
```javascript
  var stream = require('talktome').getStream();
```
#####Get Camera/Audio buffer stream
```javascript
stream.RTCIO().camera;
stream.RTCIO().audio;
```

#####Javascript in HTML(front website)
Parse buffer stream
```html
<script src="./weblob.js"></script>
```
```javascript
//create Blob Object
```
