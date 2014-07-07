# [angular](https://angularjs.org)-[amap](http://developer.amap.com/)-[map](http://developer.amap.com/api/javascript-api/reference/map/)

## Dependencies

* [Amap JavaScript API](http://developer.amap.com/api/javascript-api/)

## Installation

1. including Amap JavaScript API script file into your application, with your API key and callback

    ```html
    <script src="http://webapi.amap.com/maps?v=1.3&key={{ API key }}&callback=onMapApiReady">
    ```

2. bootstrapping your application after API is ready

    ```js
    window.onMapApiReady = function bootstrapApp () {
      angular.element(document).ready(function () {
        angular.bootstrap(document, ['{{ AppModule }}']);
      });
    };
    ```

3. `bower install --save L42y/angular-amap-map`

4. including `angular-amap-map.js` script file provided by this component into your application

5. adding `l42y.amap.map` as a module dependency to your application


## Usage

```html
<div style="height: 444px;"
     amap-map
     amap-map-options="object.mapOptions">
</div>
```

## License

[WTFPL](http://wtfpl.org)
