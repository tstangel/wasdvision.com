angular.module('WASDVision').directive('demo', function() {
  return {
    templateUrl: 'partials/directives/demo.html',
    link: function($scope, $element) {
      // supported key mapping
      // format is key name to event keyCode
      var keys = {
        one:    49,
        two:    50,
        three:  51,
        four:   52,
        q:      81,
        w:      87,
        e:      69,
        a:      65,
        s:      83,
        d:      68,
        z:      90,
        x:      88,
        c:      67,
        space:  32
      };

      // supported mouse mapping
      // format is button name to event button code
      var buttons = {
        left: 0,
        wheel: 1,
        right: 2
      };

      // mouse wheel scrolling image should
      // appear for this many milliseconds
      var scrollAnimationDuration = 77;

      // initialize directive
      function initialize() {
        addEventListeners();
      }

      function addEventListeners() {
        // add keyboard events
        document.addEventListener('keydown', onKeyEvent);
        document.addEventListener('keyup', onKeyEvent);

        // add mouse events
        document.addEventListener('mousedown', onMouseEvent);
        document.addEventListener('mouseup', onMouseEvent);
        document.addEventListener('wheel', onMouseEvent);

        // add directive unload event
        $scope.$on('$destroy', onDestroy);
      }

      // on directive unload
      function onDestroy() {
        removeEventListeners();
      }

      function removeEventListeners() {
        // remove keyboard events
        document.removeEventListener('keydown', onKeyEvent);
        document.removeEventListener('keyup', onKeyEvent);

        // remove mouse events
        document.removeEventListener('mousedown', onMouseEvent);
        document.removeEventListener('mouseup', onMouseEvent);
        document.removeEventListener('wheel', onMouseEvent);
      }

      // handle keyboard event
      function onKeyEvent(event) {
        var keyName,
            image;

        // if the keyCode is a value of keys object,
        // assign property name to keyName variable.
        // otherwise return
        if(!(keyName = keys.isValuePresent(event.keyCode))) {
          return;
        }

        // update key image
        image = $element[0].getElementsByClassName('key-' + keyName)[0];
        image.src = 'images/demo/Style_Turquoise_'
                    + keyName.capitalize()
                    + '_'
                    + event.type.replace('key', '').capitalize()
                    + '.png';
      }

      // handle mouse event
      function onMouseEvent(event) {
        var buttonName,
            image;

        // if the button is a value of buttons object,
        // assign property name to buttonName variable.
        // otherwise return
        if(!(buttonName = buttons.isValuePresent(event.button))) {
          return;
        }

        // if the user used the scroll wheel
        if(event.type === 'wheel') {
          // update scroll wheel image
          image = $element[0].getElementsByClassName('button-wheel')[0];
          image.src = 'images/demo/Style_Turquoise_Wheel_'
                      + (event.deltaY > 0 ? 'Back' : 'Forward')
                      + '.png';

          // restore scroll wheel image after scrollAnimationDuration milliseconds
          setTimeout(function() {
            image.src = 'images/demo/Style_Turquoise_Wheel_Up.png';
          }, scrollAnimationDuration);
        } else {
          // update button image
          image = $element[0].getElementsByClassName('button-' + buttonName)[0];
          image.src = 'images/demo/Style_Turquoise_'
                      + buttonName.capitalize()
                      + '_'
                      + event.type.replace('mouse', '').capitalize()
                      + '.png';
        }
      }

      // start here
      initialize();
    }
  }
});

// object helper function to determine
// if value is present in object
Object.prototype.isValuePresent = function(value) {
  for(var property in this) {
    if(this[property] === value)
      return property;
  }

  return false;
}

// string helper function to capitalize the first letter
String.prototype.capitalize = function() {
  if(!this.length)
    return '';

  return this[0].toUpperCase() + this.slice(1);
}
