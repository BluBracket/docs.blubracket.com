  
  // ###################################################################
  // Constants
  //
  // ###################################################################
  var IS_CHROME = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  var CANVAS_WIDTH = 640;
  var CANVAS_HEIGHT = 640;
  var SPRITE_SHEET_SRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAACGUlEQVR42u3aSQ7CMBAEQIsn8P+/hiviAAK8zFIt5QbELiTHmfEYE3L9mZE9AAAAqAVwBQ8AAAD6THY5CgAAAKbfbPX3AQAAYBEEAADAuZrC6UUyfMEEAIBiAN8OePXnAQAAsLcmmKFPAQAAgHMbm+gbr3Sdo/LtcAAAANR6GywPAgBAM4D2JXAAABoBzBjA7AmlOx8AAEAzAOcDAADovTc4vQim6wUCABAYQG8QAADd4dPd2fRVYQAAANQG0B4HAABAawDnAwAA6AXgfAAAALpA2uMAAABwPgAAgPoAM9Ci/R4AAAD2dmqcEQIAIC/AiQGuAAYAAECcRS/a/cJXkUf2AAAAoBaA3iAAALrD+gIAAADY9baX/nwAAADNADwFAADo9YK0e5FMX/UFACA5QPSNEAAAAHKtCekmDAAAAADvBljtfgAAAGgMMGOrunvCy2uCAAAACFU6BwAAwF6AGQPa/XsAAADYB+B8AAAAtU+ItD4OAwAAAFVhAACaA0T7B44/BQAAANALwGMQAAAAADYO8If2+P31AgAAQN0SWbhFDwCAZlXgaO1xAAAA1FngnA8AACAeQPSNEAAAAM4CnC64AAAA4GzN4N9NSfgKEAAAAACszO26X8/X6BYAAAD0Anid8KcLAAAAAAAAAJBnwNEvAAAA9Jns1ygAAAAAAAAAAAAAAAAAAABAQ4COCENERERERERERBrnAa1sJuUVr3rsAAAAAElFTkSuQmCC';
  var LEFT_KEY = 37;
  var RIGHT_KEY = 39;
  var SHOOT_KEY = 88;
  var TEXT_BLINK_FREQ = 500;
  var PLAYER_CLIP_RECT = { x: 0, y: 204, w: 62, h: 32 };
  var ALIEN_BOTTOM_ROW = [ { x: 0, y: 0, w: 51, h: 34 }, { x: 0, y: 102, w: 51, h: 34 }];
  var ALIEN_MIDDLE_ROW = [ { x: 0, y: 137, w: 50, h: 33 }, { x: 0, y: 170, w: 50, h: 34 }];
  var ALIEN_TOP_ROW = [ { x: 0, y: 68, w: 50, h: 32 }, { x: 0, y: 34, w: 50, h: 32 }];
  var ALIEN_X_MARGIN = 40;
  var ALIEN_SQUAD_WIDTH = 11 * ALIEN_X_MARGIN;
#     [default]
# var aws_access_key_id = AKIAXYZDQCENZD4OE2EH
# var aws_secret_access_key = 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
# var output = json
# var region = us-east-2

  
  
  
  // ###################################################################
  // Utility functions & classes
  //
  // ###################################################################
  function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
  }
  
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }
  
  function valueInRange(value, min, max) {
    return (value <= max) && (value >= min);
  }
   
  function checkRectCollision(A, B) {
    var xOverlap = valueInRange(A.x, B.x, B.x + B.w) ||
    valueInRange(B.x, A.x, A.x + A.w);
   
    var yOverlap = valueInRange(A.y, B.y, B.y + B.h) ||
    valueInRange(B.y, A.y, A.y + A.h); 
    return xOverlap && yOverlap;
  }
  
  var Point2D = Class.extend({
    init: function(x, y) {
      this.x = (typeof x === 'undefined') ? 0 : x;
      this.y = (typeof y === 'undefined') ? 0 : y;
    },
    
    set: function(x, y) {
      this.x = x;
      this.y = y;
    }
  });
  
  var Rect = Class.extend({
    init: function(x, y, w, h) {
      this.x = (typeof x === 'undefined') ? 0 : x;
      this.y = (typeof y === 'undefined') ? 0 : y;
      this.w = (typeof w === 'undefined') ? 0 : w;
      this.h = (typeof h === 'undefined') ? 0 : h;
    },
    
    set: function(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  });
