if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$r = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn2) {
      const index = this.watchers.push(fn2) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn2) {
        return i18n.watchLocale(fn2);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
  };
  const zhHant = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8ACB\u8F38\u5165\u641C\u7D22\u5167\u5BB9"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t: t$1
  } = initVueI18n(messages);
  const _sfc_main$q = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: "\u53D6\u6D88"
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t$1("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$1("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode("view", {
        style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
        class: "uni-searchbar__box",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
      }, [
        vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
          vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "18",
              type: "search"
            })
          ], true)
        ]),
        $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 0,
          focus: $data.showSync,
          disabled: $props.readonly,
          placeholder: $options.placeholderText,
          maxlength: $props.maxlength,
          class: "uni-searchbar__box-search-input",
          "confirm-type": "search",
          type: "text",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
          onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
        }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
          [vue.vModelText, $data.searchVal]
        ]) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: "uni-searchbar__text-placeholder"
        }, vue.toDisplayString($props.placeholder), 1)),
        $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-searchbar__box-icon-clear",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "20",
              type: "clear"
            })
          ], true)
        ])) : vue.createCommentVNode("v-if", true)
      ], 4),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
        class: "uni-searchbar__cancel"
      }, vue.toDisplayString($options.cancelTextI18n), 1)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const baseUrl = "http://110.41.146.56:8888/api";
  const request = (path, method = "GET", data = {}, isShowLoading = true) => {
    if (isShowLoading) {
      uni.showLoading({
        title: "\u8BF7\u7A0D\u7B49",
        mask: true
      });
    }
    let authorization = "";
    if (path !== "/user/login") {
      authorization = uni.getStorageSync("Authorization");
    }
    return new Promise((resolve, reject) => {
      uni.request({
        url: baseUrl + path,
        method,
        data,
        header: {
          "Authorization": authorization
        },
        success: (res) => {
          formatAppLog("log", "at api/request.js:28", "\u8FD4\u56DE\u503C:", res);
          if (res.data.code === 401 && res.data.msg === "Full authentication is required to access this resource") {
            uni.showToast({
              title: "\u8BF7\u5148\u767B\u5F55!",
              icon: "error"
            });
            uni.reLaunch({
              url: "/pages/login/login"
            });
            return;
          }
          if (res.data.code === 200) {
            formatAppLog("log", "at api/request.js:40", "\u8BF7\u6C42\u6210\u529Fres:", res);
            resolve(res.data);
          } else {
            uni.showToast({
              title: res.data.msg,
              icon: "error"
            });
            reject(res.data);
          }
        },
        fail: (err) => {
          formatAppLog("log", "at api/request.js:51", "\u8BF7\u6C42\u5931\u8D25err:", err);
          uni.showToast({
            title: !err.msg ? "\u8BF7\u7A0D\u540E\u518D\u8BD5!" : err.msg,
            icon: "error"
          });
          reject(err);
        },
        complete() {
          if (isShowLoading) {
            uni.hideLoading();
          }
        }
      });
    });
  };
  function releasePost(data) {
    return request("/post/addPost", "POST", data);
  }
  function qryPostPage(data) {
    return request("/post/qryPostPage", "POST", data);
  }
  function addPostViews(data) {
    return request("/post/addViews", "POST", data);
  }
  function addHistory(data) {
    return request("/history/addHistory", "POST", data);
  }
  function qryHistoryPage(data) {
    return request("/history/qryHistoryPage", "POST", data);
  }
  function getUserInfo(userId) {
    return request("/user/getUserInfo/" + userId, "GET");
  }
  function qryIsCollect(data) {
    return request("/collect/qryIsCollect", "POST", data);
  }
  function addCollect(data) {
    return request("/collect/addCollect", "POST", data);
  }
  function qryCollectPostPage(data) {
    return request("/collect/qryCollectPostPage", "POST", data);
  }
  function qryValidScores(postId) {
    return request("/post/qryValidScores/" + postId, "GET");
  }
  function getPostById(postId) {
    return request("/post/getPostById/" + postId, "GET");
  }
  function resolvePost(postId) {
    return request("/post/resolvePost/" + postId, "GET");
  }
  function qryHelpPostPage(data) {
    return request("/post/qryHelpPostPage", "POST", data);
  }
  function qryPostPageByContent(data) {
    return request("/post/qryPostPageByContent", "POST", data);
  }
  function qryDynamicPage(data) {
    return request("/post/qryDynamicPage", "POST", data);
  }
  function qryRecommendPost(data) {
    return request("/post/qryRecommendPost", "POST", data);
  }
  function updatePost(data) {
    return request("/post/updatePost", "POST", data);
  }
  const _sfc_main$p = {
    data() {
      return {
        user: {},
        tagList: [
          {
            label: "\u731C\u4F60\u559C\u6B22",
            value: "guess"
          },
          {
            label: "\u6700\u65B0\u53D1\u5E03",
            value: "time"
          },
          {
            label: "\u6700\u591A\u6D4F\u89C8",
            value: "views"
          },
          {
            label: "\u6700\u591A\u79EF\u5206",
            value: "scores"
          }
        ],
        postList: [],
        leftPostList: [],
        rightPostList: [],
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          sortedType: "time",
          userId: 0
        },
        isLoading: false,
        hasMore: true,
        activeIndex: 1,
        debounce1: this.debounce()
      };
    },
    methods: {
      toSearch() {
        uni.navigateTo({
          url: "/pages/search/search"
        });
      },
      changeActive(index, item) {
        this.activeIndex = index;
        this.pageReq.sortedType = this.tagList[index].value;
        this.pageReq.pageNum = 1;
        if (item.value === "guess") {
          qryRecommendPost(this.pageReq).then((res) => {
            this.leftPostList = [];
            this.rightPostList = [];
            let records = res.data;
            if (records.length <= 0) {
              this.hasMore = false;
            }
            for (let i2 = 0; i2 < records.length; i2++) {
              if (records[i2]["images"] && records[i2]["images"].length > 0) {
                records[i2]["images"] = JSON.parse(records[i2]["images"]);
              }
              if (i2 % 2 === 0) {
                this.leftPostList.push(records[i2]);
              } else {
                this.rightPostList.push(records[i2]);
              }
            }
            this.postList = records;
          });
        } else {
          qryPostPage(this.pageReq).then((res) => {
            this.leftPostList = [];
            this.rightPostList = [];
            let records = res.data.records;
            if (records.length <= 0) {
              this.hasMore = false;
            }
            for (let i2 = 0; i2 < records.length; i2++) {
              if (records[i2]["images"] && records[i2]["images"].length > 0) {
                records[i2]["images"] = JSON.parse(records[i2]["images"]);
              }
              if (i2 % 2 === 0) {
                this.leftPostList.push(records[i2]);
              } else {
                this.rightPostList.push(records[i2]);
              }
            }
            this.postList = records;
          }).catch((err) => {
            formatAppLog("log", "at pages/tabbar/home/home.vue:158", err);
          });
        }
      },
      debounce() {
        let timer = null;
        return function() {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            const activeItem = uni.createSelectorQuery().in(this).select(".active");
            activeItem.boundingClientRect((data) => {
              formatAppLog("log", "at pages/tabbar/home/home.vue:173", "\u5F97\u5230\u5E03\u5C40\u4F4D\u7F6E\u4FE1\u606F" + JSON.stringify(data));
              uni.getSystemInfo({
                success(res) {
                  formatAppLog("log", "at pages/tabbar/home/home.vue:176", "\u5F53\u524D\u5C4F\u5E55\u5BBD\u5EA6\u4E3A: ", res.screenWidth);
                }
              });
              timer = null;
            }).exec();
          }, 300);
        };
      },
      toDetail(item) {
        let info = JSON.stringify(item);
        let url = "/pages/detail/detail?info=" + info;
        uni.navigateTo({
          url
        });
      }
    },
    onLoad() {
      let user = uni.getStorageSync("user");
      if (!user) {
        uni.showToast({
          title: "\u8BF7\u5148\u767B\u5F55!",
          icon: "none"
        });
        uni.reLaunch({
          url: "/pages/login/login"
        });
        return;
      }
      this.user = JSON.parse(user);
      this.pageReq.userId = this.user.userId;
      qryPostPage(this.pageReq).then((res) => {
        let records = res.data.records;
        if (records.length <= 0) {
          this.hasMore = false;
        }
        for (let i2 = 0; i2 < records.length; i2++) {
          if (records[i2]["images"] && records[i2]["images"].length > 0) {
            records[i2]["images"] = JSON.parse(records[i2]["images"]);
          }
          if (i2 % 2 === 0) {
            this.leftPostList.push(records[i2]);
          } else {
            this.rightPostList.push(records[i2]);
          }
        }
        this.postList = records;
      }).catch((err) => {
        formatAppLog("log", "at pages/tabbar/home/home.vue:225", err);
      });
    },
    onPullDownRefresh() {
      this.pageReq.pageNum = 1;
      if (this.activeIndex === 0) {
        qryRecommendPost(this.pageReq).then((res) => {
          this.leftPostList = [];
          this.rightPostList = [];
          let records = res.data;
          if (records.length <= 0) {
            this.hasMore = false;
          }
          for (let i2 = 0; i2 < records.length; i2++) {
            if (records[i2]["images"] && records[i2]["images"].length > 0) {
              records[i2]["images"] = JSON.parse(records[i2]["images"]);
            }
            if (i2 % 2 === 0) {
              this.leftPostList.push(records[i2]);
            } else {
              this.rightPostList.push(records[i2]);
            }
          }
          this.postList = records;
        }).catch(() => {
          uni.stopPullDownRefresh();
        }).finally(() => {
          uni.stopPullDownRefresh();
        });
      } else {
        qryPostPage(this.pageReq).then((res) => {
          this.leftPostList = [];
          this.rightPostList = [];
          let records = res.data.records;
          if (records.length <= 0) {
            this.hasMore = false;
          }
          for (let i2 = 0; i2 < records.length; i2++) {
            if (records[i2]["images"] && records[i2]["images"].length > 0) {
              records[i2]["images"] = JSON.parse(records[i2]["images"]);
            }
            if (i2 % 2 === 0) {
              this.leftPostList.push(records[i2]);
            } else {
              this.rightPostList.push(records[i2]);
            }
          }
          this.postList = records;
        }).catch((err) => {
          formatAppLog("log", "at pages/tabbar/home/home.vue:275", err);
          uni.stopPullDownRefresh();
        }).finally(() => {
          uni.stopPullDownRefresh();
        });
      }
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++;
        this.isLoading = true;
        if (this.activeIndex === 0) {
          qryRecommendPost(this.pageReq).then((res) => {
            let records = res.data;
            if (records.length <= 0) {
              this.hasMore = false;
            }
            for (let i2 = 0; i2 < records.length; i2++) {
              if (records[i2]["images"] && records[i2]["images"].length > 0) {
                records[i2]["images"] = JSON.parse(records[i2]["images"]);
              }
              if (i2 % 2 === 0) {
                this.leftPostList.push(records[i2]);
              } else {
                this.rightPostList.push(records[i2]);
              }
            }
            this.postList = records;
          }).catch((err) => {
            this.pageReq.pageNum--;
          }).finally(() => {
            this.isLoading = false;
          });
        } else {
          qryPostPage(this.pageReq).then((res) => {
            if (res.data.records.length <= 0) {
              this.hasMore = false;
            } else {
              let records = res.data.records;
              for (let i2 = 0; i2 < records.length; i2++) {
                if (records[i2]["images"] && records[i2]["images"].length > 0) {
                  records[i2]["images"] = JSON.parse(records[i2]["images"]);
                }
                if (i2 % 2 === 0) {
                  this.leftPostList.push(records[i2]);
                } else {
                  this.rightPostList.push(records[i2]);
                }
              }
            }
          }).catch((err) => {
            this.pageReq.pageNum--;
          }).finally(() => {
            this.isLoading = false;
          });
        }
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$2);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "fixed" }, [
        vue.createCommentVNode(" \u5934\u90E8\u641C\u7D22 "),
        vue.createElementVNode("view", {
          class: "search",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.toSearch && $options.toSearch(...args))
        }, [
          vue.createVNode(_component_uni_search_bar, {
            placeholder: "\u8BF7\u8F93\u5165",
            clearButton: "none",
            cancelButton: "none"
          }),
          vue.createElementVNode("view", { class: "mask" })
        ]),
        vue.createCommentVNode(" \u5206\u7C7B "),
        vue.createElementVNode("view", { class: "maskArea" }, [
          vue.createElementVNode("view", { class: "typeArea" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.tagList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "item" }, [
                vue.createElementVNode("view", {
                  onClick: ($event) => $options.changeActive(index, item),
                  class: vue.normalizeClass(["tag", { active: index === $data.activeIndex }])
                }, vue.toDisplayString(item.label), 11, ["onClick"])
              ]);
            }), 256))
          ])
        ])
      ]),
      vue.createCommentVNode(" \u5E16\u5B50\u533A\u57DF "),
      vue.createElementVNode("view", { class: "postContainer" }, [
        vue.createElementVNode("view", { class: "left" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.leftPostList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "itemBox",
              onClick: ($event) => $options.toDetail(item)
            }, [
              item.images && item.images.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "imgBox"
              }, [
                vue.createElementVNode("image", {
                  class: "img",
                  mode: "widthFix",
                  src: item.images ? item.images[0].url : ""
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "profile" }, vue.toDisplayString(item.content), 1),
              vue.createElementVNode("view", { class: "bottom" }, [
                vue.createElementVNode("view", { class: "person" }, [
                  vue.createElementVNode("image", {
                    class: "avatar",
                    src: item.avatar
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.nickname), 1)
                ]),
                vue.createElementVNode("view", { class: "view" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "eye-filled",
                    size: "18",
                    color: "#999999"
                  }),
                  vue.createElementVNode("text", null, vue.toDisplayString(item.views), 1)
                ])
              ])
            ], 8, ["onClick"]);
          }), 256))
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.rightPostList, (item) => {
            var _a;
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "itemBox",
              onClick: ($event) => $options.toDetail(item)
            }, [
              item.images && item.images.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "imgBox"
              }, [
                vue.createElementVNode("image", {
                  class: "img",
                  mode: "widthFix",
                  src: item.images ? (_a = item.images[0]) == null ? void 0 : _a.url : ""
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "profile" }, vue.toDisplayString(item.content), 1),
              vue.createElementVNode("view", { class: "bottom" }, [
                vue.createElementVNode("view", { class: "person" }, [
                  vue.createElementVNode("image", {
                    class: "avatar",
                    src: item.avatar
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.nickname), 1)
                ]),
                vue.createElementVNode("view", { class: "view" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "eye-filled",
                    size: "18",
                    color: "#999999"
                  }),
                  vue.createElementVNode("text", null, vue.toDisplayString(item.views), 1)
                ])
              ])
            ], 8, ["onClick"]);
          }), 256))
        ])
      ]),
      this.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "bottomBox"
      }, [
        vue.createElementVNode("image", {
          class: "loading",
          src: "/static/images/rank/loading.png"
        })
      ])) : vue.createCommentVNode("v-if", true),
      !this.isLoading && !this.hasMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "bottomBox"
      }, [
        vue.createElementVNode("view", { style: { "color": "#b2a796" } }, "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86~~")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesTabbarHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/tabbar/home/home.vue"]]);
  const pages = [
    {
      path: "pages/tabbar/home/home",
      style: {
        navigationBarTitleText: "\u9996\u9875",
        enablePullDownRefresh: true,
        "app-plus": {
          pullToRefresh: {
            offset: "90%",
            style: "circle"
          }
        }
      }
    },
    {
      path: "pages/detail/detail",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/tabbar/personal/personal",
      style: {
        navigationBarTitleText: "\u4E2A\u4EBA\u4E2D\u5FC3",
        enablePullDownRefresh: false,
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\u9000\u51FA",
                fontSize: "14",
                float: "right",
                color: "#3d83a8",
                fontWeight: "bold"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/tabbar/message/message",
      style: {
        navigationBarTitleText: "\u6D88\u606F",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/follows/follows",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/history/history",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/myPost/myPost",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/scoresAssgin/scoresAssgin",
      style: {
        navigationBarTitleText: "\u79EF\u5206\u5206\u914D",
        enablePullDownRefresh: false,
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\u5B8C\u6210",
                fontSize: "16",
                float: "right",
                color: "#3d83a8",
                fontWeight: "bold"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/tabbar/rank/rank",
      style: {
        navigationBarTitleText: "\u6392\u884C\u699C",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/search/search",
      style: {
        navigationBarTitleText: "\u641C\u7D22",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/userHome/userHome",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/dynamic/dynamic",
      style: {
        navigationBarTitleText: "\u6211\u7684\u52A8\u6001",
        enablePullDownRefresh: true,
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\u53D1\u5E03",
                fontSize: "14",
                float: "right",
                color: "#3d83a8",
                fontWeight: "bold"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/login/login",
      style: {
        navigationBarTitleText: "\u767B\u5F55",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/register/register",
      style: {
        navigationBarTitleText: "\u6CE8\u518C",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/msgDetail/msgDetail",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/warning/warning",
      style: {
        navigationBarTitleText: "\u4E3E\u62A5\u7ED3\u679C",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/post/post",
      style: {
        navigationBarTitleText: "\u53D1\u5E16",
        enablePullDownRefresh: false,
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\u53D1\u5E03",
                fontSize: "14",
                float: "right",
                color: "#3d83a8",
                fontWeight: "bold"
              }
            ]
          }
        }
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#cddfe9",
    backgroundColor: "#F8F8F8"
  };
  const tabBar = {
    color: "#7A7E83",
    selectedColor: "#32a4e0",
    borderStyle: "black",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/tabbar/home/home",
        iconPath: "static/images/tabbar/home_black.png",
        selectedIconPath: "static/images/tabbar/black_blue.png",
        text: "\u9996\u9875"
      },
      {
        pagePath: "pages/tabbar/message/message",
        iconPath: "static/images/tabbar/msg_black.png",
        selectedIconPath: "static/images/tabbar/msg_blue.png",
        text: "\u6D88\u606F"
      },
      {
        pagePath: "pages/tabbar/rank/rank",
        iconPath: "static/images/tabbar/rank_black.png",
        selectedIconPath: "static/images/tabbar/rank_blue.png",
        text: "\u6392\u884C"
      },
      {
        pagePath: "pages/tabbar/personal/personal",
        iconPath: "static/images/tabbar/personal_black.png",
        selectedIconPath: "static/images/tabbar/personal_blue.png",
        text: "\u4E2A\u4EBA"
      }
    ],
    midButton: {
      width: "65px",
      height: "65px",
      backgroundImage: "static/images/tabbar/plus.png"
    }
  };
  const uniIdRouter = {};
  const t = {
    pages,
    globalStyle,
    tabBar,
    uniIdRouter
  };
  function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function s(e, t2, n2) {
    return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var r = s(function(e, t2) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, r3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, h2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        "string" == typeof e3 && (e3 = l2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e2.min(4 * c3, r3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += i3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(h3, u3);
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      r2.Hasher = h2.extend({ cfg: i2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), i = r, o = (s(function(e, t2) {
    var n2;
    e.exports = (n2 = i, function(e2) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e3[s3];
          e3[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e3[t4 + 0], c3 = e3[t4 + 1], f2 = e3[t4 + 2], p2 = e3[t4 + 3], g2 = e3[t4 + 4], m2 = e3[t4 + 5], y2 = e3[t4 + 6], _2 = e3[t4 + 7], w = e3[t4 + 8], v2 = e3[t4 + 9], S2 = e3[t4 + 10], k2 = e3[t4 + 11], I2 = e3[t4 + 12], b = e3[t4 + 13], T2 = e3[t4 + 14], A2 = e3[t4 + 15], C2 = i3[0], P2 = i3[1], E2 = i3[2], O2 = i3[3];
        C2 = u2(C2, P2, E2, O2, o3, 7, a2[0]), O2 = u2(O2, C2, P2, E2, c3, 12, a2[1]), E2 = u2(E2, O2, C2, P2, f2, 17, a2[2]), P2 = u2(P2, E2, O2, C2, p2, 22, a2[3]), C2 = u2(C2, P2, E2, O2, g2, 7, a2[4]), O2 = u2(O2, C2, P2, E2, m2, 12, a2[5]), E2 = u2(E2, O2, C2, P2, y2, 17, a2[6]), P2 = u2(P2, E2, O2, C2, _2, 22, a2[7]), C2 = u2(C2, P2, E2, O2, w, 7, a2[8]), O2 = u2(O2, C2, P2, E2, v2, 12, a2[9]), E2 = u2(E2, O2, C2, P2, S2, 17, a2[10]), P2 = u2(P2, E2, O2, C2, k2, 22, a2[11]), C2 = u2(C2, P2, E2, O2, I2, 7, a2[12]), O2 = u2(O2, C2, P2, E2, b, 12, a2[13]), E2 = u2(E2, O2, C2, P2, T2, 17, a2[14]), C2 = l2(C2, P2 = u2(P2, E2, O2, C2, A2, 22, a2[15]), E2, O2, c3, 5, a2[16]), O2 = l2(O2, C2, P2, E2, y2, 9, a2[17]), E2 = l2(E2, O2, C2, P2, k2, 14, a2[18]), P2 = l2(P2, E2, O2, C2, o3, 20, a2[19]), C2 = l2(C2, P2, E2, O2, m2, 5, a2[20]), O2 = l2(O2, C2, P2, E2, S2, 9, a2[21]), E2 = l2(E2, O2, C2, P2, A2, 14, a2[22]), P2 = l2(P2, E2, O2, C2, g2, 20, a2[23]), C2 = l2(C2, P2, E2, O2, v2, 5, a2[24]), O2 = l2(O2, C2, P2, E2, T2, 9, a2[25]), E2 = l2(E2, O2, C2, P2, p2, 14, a2[26]), P2 = l2(P2, E2, O2, C2, w, 20, a2[27]), C2 = l2(C2, P2, E2, O2, b, 5, a2[28]), O2 = l2(O2, C2, P2, E2, f2, 9, a2[29]), E2 = l2(E2, O2, C2, P2, _2, 14, a2[30]), C2 = h2(C2, P2 = l2(P2, E2, O2, C2, I2, 20, a2[31]), E2, O2, m2, 4, a2[32]), O2 = h2(O2, C2, P2, E2, w, 11, a2[33]), E2 = h2(E2, O2, C2, P2, k2, 16, a2[34]), P2 = h2(P2, E2, O2, C2, T2, 23, a2[35]), C2 = h2(C2, P2, E2, O2, c3, 4, a2[36]), O2 = h2(O2, C2, P2, E2, g2, 11, a2[37]), E2 = h2(E2, O2, C2, P2, _2, 16, a2[38]), P2 = h2(P2, E2, O2, C2, S2, 23, a2[39]), C2 = h2(C2, P2, E2, O2, b, 4, a2[40]), O2 = h2(O2, C2, P2, E2, o3, 11, a2[41]), E2 = h2(E2, O2, C2, P2, p2, 16, a2[42]), P2 = h2(P2, E2, O2, C2, y2, 23, a2[43]), C2 = h2(C2, P2, E2, O2, v2, 4, a2[44]), O2 = h2(O2, C2, P2, E2, I2, 11, a2[45]), E2 = h2(E2, O2, C2, P2, A2, 16, a2[46]), C2 = d2(C2, P2 = h2(P2, E2, O2, C2, f2, 23, a2[47]), E2, O2, o3, 6, a2[48]), O2 = d2(O2, C2, P2, E2, _2, 10, a2[49]), E2 = d2(E2, O2, C2, P2, T2, 15, a2[50]), P2 = d2(P2, E2, O2, C2, m2, 21, a2[51]), C2 = d2(C2, P2, E2, O2, I2, 6, a2[52]), O2 = d2(O2, C2, P2, E2, p2, 10, a2[53]), E2 = d2(E2, O2, C2, P2, S2, 15, a2[54]), P2 = d2(P2, E2, O2, C2, c3, 21, a2[55]), C2 = d2(C2, P2, E2, O2, w, 6, a2[56]), O2 = d2(O2, C2, P2, E2, A2, 10, a2[57]), E2 = d2(E2, O2, C2, P2, y2, 15, a2[58]), P2 = d2(P2, E2, O2, C2, b, 21, a2[59]), C2 = d2(C2, P2, E2, O2, g2, 6, a2[60]), O2 = d2(O2, C2, P2, E2, k2, 10, a2[61]), E2 = d2(E2, O2, C2, P2, f2, 15, a2[62]), P2 = d2(P2, E2, O2, C2, v2, 21, a2[63]), i3[0] = i3[0] + C2 | 0, i3[1] = i3[1] + P2 | 0, i3[2] = i3[2] + E2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e2.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e, t2) {
    var n2;
    e.exports = (n2 = i, void function() {
      var e2 = n2, t3 = e2.lib.Base, s2 = e2.enc.Utf8;
      e2.algo.HMAC = t3.extend({ init: function(e3, t4) {
        e3 = this._hasher = new e3.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e3.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e3.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e3 = this._hasher;
        e3.reset(), e3.update(this._iKey);
      }, update: function(e3) {
        return this._hasher.update(e3), this;
      }, finalize: function(e3) {
        var t4 = this._hasher, n3 = t4.finalize(e3);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), s(function(e, t2) {
    e.exports = i.HmacMD5;
  })), a = s(function(e, t2) {
    e.exports = i.enc.Utf8;
  }), c = s(function(e, t2) {
    var n2;
    e.exports = (n2 = i, function() {
      var e2 = n2, t3 = e2.lib.WordArray;
      function s2(e3, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e3.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e3.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e2.enc.Base64 = { stringify: function(e3) {
        var t4 = e3.words, n3 = e3.sigBytes, s3 = this._map;
        e3.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e3) {
        var t4 = e3.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e3.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e3, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const u = "FUNCTION", l = "OBJECT", h = "CLIENT_DB";
  function d(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function f(e) {
    return "object" === d(e);
  }
  function p(e) {
    return "function" == typeof e;
  }
  function g(e) {
    return function() {
      try {
        return e.apply(e, arguments);
      } catch (e2) {
        console.error(e2);
      }
    };
  }
  function m(e) {
    return e && "string" == typeof e ? JSON.parse(e) : e;
  }
  const y = true, _ = "app", v = m([]);
  let S;
  S = _;
  const k = m(""), I = m("[]") || [];
  let T = "";
  try {
    T = "__UNI__39095E0";
  } catch (e) {
  }
  let A = {};
  function C(e, t2 = {}) {
    var n2, s2;
    return n2 = A, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (A[e] = t2), A[e];
  }
  "app" === S && (A = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
  const P = ["invoke", "success", "fail", "complete"], E = C("_globalUniCloudInterceptor");
  function O(e, t2) {
    E[e] || (E[e] = {}), f(t2) && Object.keys(t2).forEach((n2) => {
      P.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = E[e2][t3];
        s2 || (s2 = E[e2][t3] = []), -1 === s2.indexOf(n3) && p(n3) && s2.push(n3);
      }(e, n2, t2[n2]);
    });
  }
  function x(e, t2) {
    E[e] || (E[e] = {}), f(t2) ? Object.keys(t2).forEach((n2) => {
      P.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = E[e2][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e, n2, t2[n2]);
    }) : delete E[e];
  }
  function U(e, t2) {
    return e && 0 !== e.length ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function R(e, t2) {
    return E[e] && E[e][t2] || [];
  }
  function L(e) {
    O("callObject", e);
  }
  const N = C("_globalUniCloudListener"), D = "response", F = "needLogin", q = "refreshToken", K = "clientdb", M = "cloudfunction", j = "cloudobject";
  function B(e) {
    return N[e] || (N[e] = []), N[e];
  }
  function $(e, t2) {
    const n2 = B(e);
    n2.includes(t2) || n2.push(t2);
  }
  function W(e, t2) {
    const n2 = B(e), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function z(e, t2) {
    const n2 = B(e);
    for (let e2 = 0; e2 < n2.length; e2++) {
      (0, n2[e2])(t2);
    }
  }
  let J, H = false;
  function G() {
    return J || (J = new Promise((e) => {
      H && e(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (H = true, e());
        }
        H || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), J);
  }
  function V(e) {
    const t2 = {};
    for (const n2 in e) {
      const s2 = e[n2];
      p(s2) && (t2[n2] = g(s2));
    }
    return t2;
  }
  function Y(e, t2) {
    return t2 ? function(n2) {
      let s2 = false;
      if ("callFunction" === t2) {
        const e2 = n2 && n2.type || u;
        s2 = e2 !== u;
      }
      const r2 = "callFunction" === t2 && !s2;
      let i2;
      i2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const { success: o2, fail: a2, complete: c2 } = V(n2), l2 = i2.then(() => s2 ? Promise.resolve() : U(R(t2, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => s2 ? Promise.resolve(e2) : U(R(t2, "success"), e2).then(() => U(R(t2, "complete"), e2)).then(() => (r2 && z(D, { type: M, content: e2 }), Promise.resolve(e2))), (e2) => s2 ? Promise.reject(e2) : U(R(t2, "fail"), e2).then(() => U(R(t2, "complete"), e2)).then(() => (z(D, { type: M, content: e2 }), Promise.reject(e2))));
      if (!(o2 || a2 || c2))
        return l2;
      l2.then((e2) => {
        o2 && o2(e2), c2 && c2(e2), r2 && z(D, { type: M, content: e2 });
      }, (e2) => {
        a2 && a2(e2), c2 && c2(e2), r2 && z(D, { type: M, content: e2 });
      });
    } : function(t3) {
      t3 = t3 || {};
      const { success: n2, fail: s2, complete: r2 } = V(t3);
      if (!(n2 || s2 || r2))
        return e.call(this, t3);
      e.call(this, t3).then((e2) => {
        n2 && n2(e2), r2 && r2(e2);
      }, (e2) => {
        s2 && s2(e2), r2 && r2(e2);
      });
    };
  }
  class Q extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || e.errMsg || "unknown system error", this.code = this.errCode = e.code || e.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e.subject || e.errSubject, this.cause = e.cause, this.requestId = e.requestId;
    }
    toJson(e = 0) {
      if (!(e >= 10))
        return e++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause };
    }
  }
  var X = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() };
  function Z(e) {
    return e && Z(e.__v_raw) || e;
  }
  function ee() {
    return { token: X.getStorageSync("uni_id_token") || X.getStorageSync("uniIdToken"), tokenExpired: X.getStorageSync("uni_id_token_expired") };
  }
  function te({ token: e, tokenExpired: t2 } = {}) {
    e && X.setStorageSync("uni_id_token", e), t2 && X.setStorageSync("uni_id_token_expired", t2);
  }
  function ne() {
    if ("web" !== S)
      return;
    uni.getStorageSync("__LAST_DCLOUD_APPID") !== T && (uni.setStorageSync("__LAST_DCLOUD_APPID", T), console.warn("\u68C0\u6D4B\u5230\u5F53\u524D\u9879\u76EE\u4E0E\u4E0A\u6B21\u8FD0\u884C\u5230\u6B64\u7AEF\u53E3\u7684\u9879\u76EE\u4E0D\u4E00\u81F4\uFF0C\u81EA\u52A8\u6E05\u7406uni-id\u4FDD\u5B58\u7684token\u4FE1\u606F\uFF08\u4EC5\u5F00\u53D1\u8C03\u8BD5\u65F6\u751F\u6548\uFF09"), X.removeStorageSync("uni_id_token"), X.removeStorageSync("uniIdToken"), X.removeStorageSync("uni_id_token_expired"));
  }
  let se, re;
  function ie() {
    return se || (se = uni.getSystemInfoSync()), se;
  }
  function oe() {
    let e, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e = s2, t2 = n2;
      }
    } catch (e2) {
    }
    return { channel: e, scene: t2 };
  }
  function ae() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (re)
      return { ...re, locale: e, LOCALE: e };
    const t2 = ie(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e2 = 0; e2 < o2.length; e2++) {
      delete t2[o2[e2]];
    }
    return re = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...oe(), ...t2 }, { ...re, locale: e, LOCALE: e };
  }
  var ce = { sign: function(e, t2) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), o(n2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {}), "web" === S && e2.errMsg && 0 === e2.errMsg.indexOf("request:fail") && console.warn("\u53D1\u5E03H5\uFF0C\u9700\u8981\u5728uniCloud\u540E\u53F0\u64CD\u4F5C\uFF0C\u7ED1\u5B9A\u5B89\u5168\u57DF\u540D\uFF0C\u5426\u5219\u4F1A\u56E0\u4E3A\u8DE8\u57DF\u95EE\u9898\u800C\u65E0\u6CD5\u8BBF\u95EE\u3002\u6559\u7A0B\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new Q({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const r2 = e2.data;
        if (r2.error)
          return s2(new Q({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e) {
    return c.stringify(a.parse(e));
  } }, ue = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: le } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: ue, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: ue }, "zh-Hans");
  var he = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(le("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = X, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return ce.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = ce.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = ce.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if ("pending" === this._getAccessTokenPromiseStatus)
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t2, n2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new Q({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? o2(e2) : a2(new Q({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new Q({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
          i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: r2 }) {
      if ("string" !== d(t2))
        throw new Q({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t2 = t2.trim()))
        throw new Q({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t2))
        throw new Q({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const i2 = r2 && r2.envType || this.config.envType, o2 = (await this.getOSSUploadOptionsFromPath({ env: i2, filename: t2 })).result, a2 = "https://" + o2.cdnDomain + "/" + o2.ossPath, { securityToken: c2, accessKeyId: u2, signature: l2, host: h2, ossPath: f2, id: p2, policy: g2, ossCallbackUrl: m2 } = o2, y2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: u2, Signature: l2, host: h2, id: p2, key: f2, policy: g2, success_action_status: 200 };
      if (c2 && (y2["x-oss-security-token"] = c2), m2) {
        const e2 = JSON.stringify({ callbackUrl: m2, callbackBody: JSON.stringify({ fileId: p2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        y2.callback = ce.toBase64(e2);
      }
      const _2 = { url: "https://" + o2.host, formData: y2, fileName: "file", name: "file", filePath: e, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, _2, { onUploadProgress: s2 })), m2)
        return { success: true, filePath: e, fileID: a2 };
      if ((await this.reportOSSUpload({ id: p2 })).success)
        return { success: true, filePath: e, fileID: a2 };
      throw new Q({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" });
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e) && 0 !== e.length || n2(new Q({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
    async getFileInfo({ fileList: e } = {}) {
      if (!Array.isArray(e) || 0 === e.length)
        throw new Q({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e.map((e2) => e2.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var de = { init(e) {
    const t2 = new he(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var pe;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(pe || (pe = {}));
  var ge = function() {
  };
  const me = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new Q({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t2, e;
  };
  function ye(e) {
    return void 0 === e;
  }
  function _e(e) {
    return "[object Null]" === Object.prototype.toString.call(e);
  }
  var we;
  function ve(e) {
    const t2 = (n2 = e, "[object Array]" === Object.prototype.toString.call(n2) ? e : [e]);
    var n2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(we || (we = {}));
  const Se = { adapter: null, runtime: void 0 }, ke = ["anonymousUuidKey"];
  class Ie extends ge {
    constructor() {
      super(), Se.adapter.root.tcbObject || (Se.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      Se.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return Se.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete Se.adapter.root.tcbObject[e];
    }
    clear() {
      delete Se.adapter.root.tcbObject;
    }
  }
  function be(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new Ie();
      case "none":
        return new Ie();
      default:
        return t2.sessionStorage || new Ie();
    }
  }
  class Te {
    constructor(e) {
      if (!this._storage) {
        this._persistence = Se.adapter.primaryStorage || e.persistence, this._storage = be(this._persistence, Se.adapter);
        const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, r2 = `anonymous_uuid_${e.env}`, i2 = `login_type_${e.env}`, o2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e;
      const n2 = be(e, Se.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t2 && ke.includes(e2))
          continue;
        const r2 = this._storage.getItem(s2);
        ye(r2) || _e(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, r2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const Ae = {}, Ce = {};
  function Pe(e) {
    return Ae[e];
  }
  class Ee {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class Oe extends Ee {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const xe = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          -1 !== s2 && n2[e2].splice(s2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof Oe)
        return console.error(e.error), this;
      const n2 = "string" == typeof e ? new Ee(e, t2 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function Ue(e, t2) {
    xe.on(e, t2);
  }
  function Re(e, t2 = {}) {
    xe.fire(e, t2);
  }
  function Le(e, t2) {
    xe.off(e, t2);
  }
  const Ne = "loginStateChanged", De = "loginStateExpire", Fe = "loginTypeChanged", qe = "anonymousConverted", Ke = "refreshAccessToken";
  var Me;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(Me || (Me = {}));
  const je = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Be = { "X-SDK-Version": "1.3.5" };
  function $e(e, t2, n2) {
    const s2 = e[t2];
    e[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e2;
        if (e2 = o2, "[object FormData]" !== Object.prototype.toString.call(e2))
          t3.data = { ...o2, ...r2 };
        else
          for (const e3 in r2)
            o2.append(e3, r2[e3]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e, t3);
    };
  }
  function We() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: { ...Be, "x-seqid": e } };
  }
  class ze {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new Se.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = Pe(this.config.env), this._localCache = (t2 = this.config.env, Ce[t2]), $e(this._reqClass, "post", [We]), $e(this._reqClass, "upload", [We]), $e(this._reqClass, "download", [We]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new Q({ message: "\u672A\u767B\u5F55CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e2 || "REFRESH_TOKEN_EXPIRED" === e2 || "INVALID_REFRESH_TOKEN" === e2) {
          if (this._cache.getStore(s2) === Me.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e2) {
            const e3 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Re(De), this._cache.removeStore(n2);
        }
        throw new Q({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Re(Ke), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new Q({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
      let s2 = this._cache.getStore(e), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === je.indexOf(e)) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e) {
        o2 = new FormData();
        for (let e2 in o2)
          o2.hasOwnProperty(e2) && void 0 !== o2[e2] && o2.append(e2, i2[e2]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e2 in i2)
          void 0 !== i2[e2] && (o2[e2] = i2[e2]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: h2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), l2 && (d2 = { ...l2, ...d2 });
      let f2 = function(e2, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e3 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e3}=${encodeURIComponent(n3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e2}${t3}`;
      }(fe, "//tcb-api.tencentcloudapi.com/web", d2);
      h2 && (f2 += h2);
      const p2 = await this.post({ url: f2, data: o2, ...a2 }), g2 = p2.header && p2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(p2.status) && 200 !== Number(p2.statusCode) || !p2.data)
        throw new Q({ code: "NETWORK_ERROR", message: "network request error" });
      return p2;
    }
    async send(e, t2 = {}) {
      const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === je.indexOf(e)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new Q({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new Q({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  }
  const Je = {};
  function He(e) {
    return Je[e];
  }
  class Ge {
    constructor(e) {
      this.config = e, this._cache = Pe(e.env), this._request = He(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class Ve {
    constructor(e) {
      if (!e)
        throw new Q({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e, this._cache = Pe(this._envId), this._request = He(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e;
      return n2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class Ye {
    constructor(e) {
      if (!e)
        throw new Q({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Pe(e);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ve(e);
    }
    get isAnonymousAuth() {
      return this.loginType === Me.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Me.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Me.WECHAT || this.loginType === Me.WECHAT_OPEN || this.loginType === Me.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class Qe extends Ge {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.ANONYMOUS, persistence: "local" });
        const e2 = new Ye(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new Q({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Re(qe, { env: this.config.env }), Re(Fe, { loginType: Me.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new Q({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, Me.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class Xe extends Ge {
    async signIn(e) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new Ye(this.config.env);
      throw new Q({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
    }
  }
  class Ze extends Ge {
    async signIn(e, t2) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.EMAIL, persistence: this.config.persistence }), new Ye(this.config.env);
      throw s2.code ? new Q({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new Q({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class et extends Ge {
    async signIn(e, t2) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Me.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.USERNAME, persistence: this.config.persistence }), new Ye(this.config.env);
      throw s2.code ? new Q({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new Q({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
    }
  }
  class tt {
    constructor(e) {
      this.config = e, this._cache = Pe(e.env), this._request = He(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ue(Fe, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new Qe(this.config);
    }
    customAuthProvider() {
      return new Xe(this.config);
    }
    emailAuthProvider() {
      return new Ze(this.config);
    }
    usernameAuthProvider() {
      return new et(this.config);
    }
    async signInAnonymously() {
      return new Qe(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new Ze(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new et(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new Qe(this.config)), Ue(qe, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === Me.ANONYMOUS)
        throw new Q({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      Ue(Ne, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      Ue(De, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      Ue(Ke, e.bind(this));
    }
    onAnonymousConverted(e) {
      Ue(qe, e.bind(this));
    }
    onLoginTypeChanged(e) {
      Ue(Fe, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new Ye(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new Xe(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : { ...e.data, requestId: e.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const nt = function(e, t2) {
    t2 = t2 || me();
    const n2 = He(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e2, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e3) => {
        201 === e3.statusCode ? t2(null, { fileID: l2, requestId: d2 }) : t2(new Q({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e3.data}` }));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, st = function(e, t2) {
    t2 = t2 || me();
    const n2 = He(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, rt = function({ fileList: e }, t2) {
    if (t2 = t2 || me(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e };
    return He(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, it = function({ fileList: e }, t2) {
    t2 = t2 || me(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return He(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ot = async function({ fileID: e }, t2) {
    const n2 = (await it.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e2) => {
        e2(n2);
      });
    const s2 = He(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, at = function({ name: e, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || me();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new Q({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e, request_data: a2 };
    return He(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        o2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), o2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            o2(new Q({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e2) => {
      o2(e2);
    }), o2.promise;
  }, ct = { timeout: 15e3, persistence: "session" }, ut = {};
  class lt {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (Se.adapter || (this.requestClient = new Se.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = { ...ct, ...e }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new lt(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || Se.adapter.primaryStorage || ct.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        Ae[t3] = new Te(e2), Ce[t3] = new Te({ ...e2, persistence: "local" });
      }(this.config), n2 = this.config, Je[n2.env] = new ze(n2), this.authObj = new tt(this.config), this.authObj;
    }
    on(e, t2) {
      return Ue.apply(this, [e, t2]);
    }
    off(e, t2) {
      return Le.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return at.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return rt.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return it.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return ot.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return nt.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return st.apply(this, [e, t2]);
    }
    registerExtension(e) {
      ut[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const n2 = ut[e];
      if (!n2)
        throw new Q({ message: `\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: n2 } = ve(e) || {};
      t2 && (Se.adapter = t2), n2 && (Se.runtime = n2);
    }
  }
  var ht = new lt();
  function dt(e, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e + t2;
  }
  class ft {
    post(e) {
      const { url: t2, data: n2, headers: s2 } = e;
      return new Promise((e2, r2) => {
        X.request({ url: dt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e, c2 = X.uploadFile({ url: dt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          200 === e2.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const pt = { setItem(e, t2) {
    X.setStorageSync(e, t2);
  }, getItem: (e) => X.getStorageSync(e), removeItem(e) {
    X.removeStorageSync(e);
  }, clear() {
    X.clearStorageSync();
  } };
  var gt = { genAdapter: function() {
    return { root: {}, reqClass: ft, localStorage: pt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  ht.useAdapters(gt);
  const mt = ht, yt = mt.init;
  mt.init = function(e) {
    e.env = e.spaceId;
    const t2 = yt.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = Y(t3[e3]).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var _t = mt;
  var wt = class extends he {
    getAccessToken() {
      return new Promise((e, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = ce.sign(n2, this.config.clientSecret);
      const r2 = ae();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = ee();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, success(e2) {
          e2 && e2.statusCode < 400 ? o2(e2) : a2(new Q({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new Q({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
          i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new Q({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: r2 }) : s3(new Q({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2)).then((e2) => {
        if (e2.success)
          return e2.result;
        throw new Q({ code: "DELETE_FILE_FAILED", message: "\u5220\u9664\u6587\u4EF6\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e } = {}) {
      if (!Array.isArray(e) || 0 === e.length)
        throw new Q({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2)).then((e2) => {
        if (e2.success)
          return { fileList: e2.result.fileList.map((e3) => ({ fileID: e3.fileID, tempFileURL: e3.tempFileURL })) };
        throw new Q({ code: "GET_TEMP_FILE_URL_FAILED", message: "\u83B7\u53D6\u4E34\u65F6\u6587\u4EF6\u94FE\u63A5\u5931\u8D25" });
      });
    }
  };
  var vt = { init(e) {
    const t2 = new wt(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function St({ data: e }) {
    let t2;
    t2 = ae();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e2 } = ee();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  function kt({ name: e, data: t2 } = {}) {
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      X.request({ method: "POST", url: o2, data: { name: e, platform: S, provider: r2, spaceId: i2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e2 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._callCloudFunction({ name: e, data: t2 });
      }
      return new Promise((e2, n4) => {
        const s4 = St.call(this, { data: t2 });
        X.request({ method: "POST", url: a2, data: { provider: r2, platform: S, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new Q({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new Q({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const It = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var bt = /[\\^$.*+?()[\]{}|]/g, Tt = RegExp(bt.source);
  function At(e, t2, n2) {
    return e.replace(new RegExp((s2 = t2) && Tt.test(s2) ? s2.replace(bt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Pt = "request", Et = "response", Ot = "both";
  const fn = { code: 2e4, message: "System error" }, pn = { code: 20101, message: "Invalid client" };
  function yn(e) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e || {};
    return new Q({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || fn.code, message: r2 || o2, cause: a2 });
  }
  let wn;
  function bn({ secretType: e } = {}) {
    return e === Pt || e === Et || e === Ot;
  }
  function Tn({ name: e, data: t2 = {} } = {}) {
    return "app" === S && "DCloud-clientDB" === e && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function An({ provider: e, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ie();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e2, spaceId: t3 } = {}) {
      const n3 = v;
      if (!n3)
        return {};
      e2 = function(e3) {
        return "tencent" === e3 ? "tcb" : e3;
      }(e2);
      const s3 = n3.find((n4) => n4.provider === e2 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const l2 = function(e2, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e2.length; i3++) {
        const o3 = e2[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e3) => e3.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!l2)
      return false;
    if ((c2[l2] || []).find((e2 = {}) => e2.appId === s2 && (e2.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`\u6B64\u5E94\u7528[appId: ${s2}, platform: ${o2}]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), yn(pn);
  }
  function Cn({ functionName: e, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Pn(e) {
    const t2 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = St.call(e, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider], i2 = bn(n3), o2 = Tn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e2) => (e2.errCode = 0, !a2 && Cn.call(this, { functionName: s2, result: e2, logPvd: r2 }), Promise.resolve(e2)), (e2) => (!a2 && Cn.call(this, { functionName: s2, result: e2, logPvd: r2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e3.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e4 = 1; e4 < a3.length; e4++)
            c2 = At(c2, `{$${e4}}`, a3[e4]);
          for (const e4 in t3)
            c2 = At(c2, `{${e4}}`, t3[e4]);
          return "replace" === o3 ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: It, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && I ? (e._callCloudFunction || (e._callCloudFunction = n2, e._callLocalFunction = kt), o2 = kt) : o2 = n2, o2 = o2.bind(e), Tn(t3))
        a2 = n2.call(e, t3);
      else if (function({ name: e2, data: t4 = {} }) {
        return "mp-weixin" === S && "uni-id-co" === e2 && "secureNetworkHandshakeByWeixin" === t4.method;
      }(t3))
        a2 = o2.call(e, t3);
      else if (bn(t3)) {
        a2 = new wn({ secretType: t3.secretType, uniCloudIns: e }).wrapEncryptDataCallFunction(n2.bind(e))(t3);
      } else if (An({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new wn({ secretType: t3.secretType, uniCloudIns: e }).wrapVerifyClientCallFunction(n2.bind(e))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2;
    };
  }
  wn = "mp-weixin" !== S && "app" !== S ? class {
    constructor() {
      throw yn({ message: `Platform ${S} is not supported by secure network` });
    }
  } : class {
    constructor() {
      throw yn({ message: `Platform ${S} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const En = Symbol("CLIENT_DB_INTERNAL");
  function On(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = En, e.inspect = null, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e2[n2];
      if (n2 in e2 || "string" != typeof n2) {
        const t3 = e2[n2];
        return "function" == typeof t3 ? t3.bind(e2) : t3;
      }
      return t2.get(e2, n2, s2);
    } });
  }
  function xn(e) {
    return { on: (t2, n2) => {
      e[t2] = e[t2] || [], e[t2].indexOf(n2) > -1 || e[t2].push(n2);
    }, off: (t2, n2) => {
      e[t2] = e[t2] || [];
      const s2 = e[t2].indexOf(n2);
      -1 !== s2 && e[t2].splice(s2, 1);
    } };
  }
  const Un = ["db.Geo", "db.command", "command.aggregate"];
  function Rn(e, t2) {
    return Un.indexOf(`${e}.${t2}`) > -1;
  }
  function Ln(e) {
    switch (d(e = Z(e))) {
      case "array":
        return e.map((e2) => Ln(e2));
      case "object":
        return e._internalType === En || Object.keys(e).forEach((t2) => {
          e[t2] = Ln(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  function Nn(e) {
    return e && e.content && e.content.$method;
  }
  class Dn {
    constructor(e, t2, n2) {
      this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t2 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t2.push(e.content);
      return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: Ln(e2.$param) })) };
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => "action" === e2.$method);
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => "action" !== e.$method) };
    }
    get isAggregate() {
      let e = this;
      for (; e; ) {
        const t2 = Nn(e), n2 = Nn(e.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e = this;
      for (; e; ) {
        if ("command" === Nn(e))
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e = this;
      for (; e; ) {
        const t2 = Nn(e), n2 = Nn(e.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e = e.prevStage;
      }
      return false;
    }
    getNextStageFn(e) {
      const t2 = this;
      return function() {
        return Fn({ $method: e, $param: Ln(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
      };
    }
    _send(e, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: Ln(t2) }), y) {
        const e2 = s2.$db.find((e3) => "collection" === e3.$method), t3 = e2 && e2.$param;
        t3 && 1 === t3.length && "string" == typeof e2.$param[0] && e2.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Fn(e, t2, n2) {
    return On(new Dn(e, t2, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), Rn(s2, t3) ? Fn({ $method: t3 }, e2, n2) : function() {
        return Fn({ $method: t3, $param: Ln(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function qn({ path: e, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
      }
    };
  }
  function Kn(e, t2 = {}) {
    return On(new e(t2), { get: (e2, t3) => Rn("db", t3) ? Fn({ $method: t3 }, null, e2) : function() {
      return Fn({ $method: t3, $param: Ln(Array.from(arguments)) }, null, e2);
    } });
  }
  class Mn extends class {
    constructor({ uniClient: e = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = C("_globalUniCloudDatabaseCallback")), t2 || (this.auth = xn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, xn(this._dbCallBacks)), this.env = On({}, { get: (e2, t3) => ({ $env: t3 }) }), this.Geo = On({}, { get: (e2, t3) => qn({ path: ["Geo"], method: t3 }) }), this.serverDate = qn({ path: [], method: "serverDate" }), this.RegExp = qn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if ("string" != typeof e || !e.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t2) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    _callbackAuth(e, t2) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t2 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e });
    }
  } {
    _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
    _callCloudFunction({ action: e, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e2) {
        return i2._callback("error", [e2]), U(R(o2, "fail"), e2).then(() => U(R(o2, "complete"), e2)).then(() => (r2(null, e2), z(D, { type: K, content: e2 }), Promise.reject(e2)));
      }
      const c2 = U(R(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e, command: t2, multiCommand: n2 } })).then((e2) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e2.result;
        if (u3)
          for (let e3 = 0; e3 < u3.length; e3++) {
            const { level: t4, message: n4, detail: s4 } = u3[e3], r3 = console["app" === S && "warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new Q({ code: t3, message: n3, requestId: e2.requestId }));
        }
        e2.result.errCode = e2.result.errCode || e2.result.code, e2.result.errMsg = e2.result.errMsg || e2.result.message, s3 && c3 && (te({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), z(q, { token: s3, tokenExpired: c3 }));
        const l2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < l2.length; t4++) {
          const { prop: n4, tips: s4 } = l2[t4];
          if (n4 in e2.result) {
            const t5 = e2.result[n4];
            Object.defineProperty(e2.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e3) {
          return U(R(o2, "success"), e3).then(() => U(R(o2, "complete"), e3)).then(() => {
            r2(e3, null);
            const t4 = i2._parseResult(e3);
            return z(D, { type: K, content: t4 }), Promise.resolve(t4);
          });
        }(e2);
      }, (e2) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return a2(new Q({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId }));
      });
    }
  }
  const jn = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", Bn = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", $n = { TOKEN_INVALID_TOKEN_EXPIRED: Bn, TOKEN_INVALID_INVALID_CLIENTID: jn, TOKEN_INVALID: jn, TOKEN_INVALID_WRONG_TOKEN: jn, TOKEN_INVALID_ANONYMOUS_USER: jn }, Wn = { "uni-id-token-expired": Bn, "uni-id-check-token-failed": jn, "uni-id-token-not-exist": jn, "uni-id-check-device-feature-failed": jn };
  function zn(e, t2) {
    let n2 = "";
    return n2 = e ? `${e}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Jn(e = [], t2 = "") {
    const n2 = [], s2 = [];
    return e.forEach((e2) => {
      true === e2.needLogin ? n2.push(zn(t2, e2.path)) : false === e2.needLogin && s2.push(zn(t2, e2.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function Hn(e) {
    return e.split("?")[0].replace(/^\//, "");
  }
  function Gn() {
    return function(e) {
      let t2 = e && e.$page && e.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e = getCurrentPages();
      return e[e.length - 1];
    }());
  }
  function Vn() {
    return Hn(Gn());
  }
  function Yn(e = "", t2 = {}) {
    if (!e)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = Hn(e);
    return n2.some((e2) => e2.pagePath === s2);
  }
  const Qn = !!t.uniIdRouter;
  const { loginPage: Xn, routerNeedLogin: Zn, resToLogin: es, needLoginPage: ts, notNeedLoginPage: ns, loginPageInTabBar: ss } = function({ pages: e = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = t) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Jn(e), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t2 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = Jn(r3, s3);
        t2.push(...i3), n3.push(...o3);
      }), { needLoginPage: t2, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: Yn(i2, r2) };
  }();
  if (ts.indexOf(Xn) > -1)
    throw new Error(`Login page [${Xn}] should not be "needLogin", please check your pages.json`);
  function rs(e) {
    const t2 = Vn();
    if ("/" === e.charAt(0))
      return e;
    const [n2, s2] = e.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e2 = 0; e2 < r2.length; e2++) {
      const t3 = r2[e2];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function is(e) {
    const t2 = Hn(rs(e));
    return !(ns.indexOf(t2) > -1) && (ts.indexOf(t2) > -1 || Zn.some((t3) => function(e2, t4) {
      return new RegExp(t4).test(e2);
    }(e, t3)));
  }
  function os({ redirect: e }) {
    const t2 = Hn(e), n2 = Hn(Xn);
    return Vn() !== n2 && t2 !== n2;
  }
  function as({ api: e, redirect: t2 } = {}) {
    if (!t2 || !os({ redirect: t2 }))
      return;
    const n2 = function(e2, t3) {
      return "/" !== e2.charAt(0) && (e2 = "/" + e2), t3 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2;
    }(Xn, t2);
    ss ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e]({ url: n2 });
    });
  }
  function cs({ url: e } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e2, tokenExpired: t3 } = ee();
      let n3;
      if (e2) {
        if (t3 < Date.now()) {
          const e3 = "uni-id-token-expired";
          n3 = { errCode: e3, errMsg: Wn[e3] };
        }
      } else {
        const e3 = "uni-id-check-token-failed";
        n3 = { errCode: e3, errMsg: Wn[e3] };
      }
      return n3;
    }();
    if (is(e) && n2) {
      n2.uniIdRedirectUrl = e;
      if (B(F).length > 0)
        return setTimeout(() => {
          z(F, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function us() {
    !function() {
      const e2 = Gn(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = cs({ url: e2 });
      t2 || n2 && as({ api: "redirectTo", redirect: e2 });
    }();
    const e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e.length; t2++) {
      const n2 = e[t2];
      uni.addInterceptor(n2, { invoke(e2) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = cs({ url: e2.url });
        return t3 ? e2 : s2 ? (as({ api: n2, redirect: rs(e2.url) }), false) : e2;
      } });
    }
  }
  function ls() {
    this.onResponse((e) => {
      const { type: t2, content: n2 } = e;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in Wn;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in $n;
          }(n2);
      }
      s2 && function(e2 = {}) {
        const t3 = B(F);
        G().then(() => {
          const n3 = Gn();
          if (n3 && os({ redirect: n3 }))
            return t3.length > 0 ? z(F, Object.assign({ uniIdRedirectUrl: n3 }, e2)) : void (Xn && as({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function hs(e) {
    !function(e2) {
      e2.onResponse = function(e3) {
        $(D, e3);
      }, e2.offResponse = function(e3) {
        W(D, e3);
      };
    }(e), function(e2) {
      e2.onNeedLogin = function(e3) {
        $(F, e3);
      }, e2.offNeedLogin = function(e3) {
        W(F, e3);
      }, Qn && (C("_globalUniCloudStatus").needLoginInit || (C("_globalUniCloudStatus").needLoginInit = true, G().then(() => {
        us.call(e2);
      }), es && ls.call(e2)));
    }(e), function(e2) {
      e2.onRefreshToken = function(e3) {
        $(q, e3);
      }, e2.offRefreshToken = function(e3) {
        W(q, e3);
      };
    }(e);
  }
  let ds;
  const fs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", ps = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function gs() {
    const e = ee().token || "", t2 = e.split(".");
    if (!e || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ds(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  ds = "function" != typeof atob ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ps.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e.length; )
      t2 = fs.indexOf(e.charAt(i2++)) << 18 | fs.indexOf(e.charAt(i2++)) << 12 | (n2 = fs.indexOf(e.charAt(i2++))) << 6 | (s2 = fs.indexOf(e.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var ms = s(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function i2(e2, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e3 : t5);
        }
        return e3;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = i3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, r4 && r4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < o2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < o2 && c2();
            });
          }
        });
      }(e2, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e4(r2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e4(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(r2(t5));
            }, fail(e5) {
              i3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), ys = n(ms);
  const _s = "manual";
  function ws(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === _s)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e2.length; r2++)
          e2[r2] !== t2[r2] && (s2.push(e2[r2]), n2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, f2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, p2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return p2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function vs(e) {
    return function(t2, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, e2.parseSystemError = t3.parseSystemError || e2.parseSystemError, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e2.secretMethods = t3.secretMethods), e2;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e2, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const r3 = n3 ? n3({ params: s4 }) : {};
          let i3, o3;
          try {
            return await U(R(t3, "invoke"), { ...r3 }), i3 = await e2(...s4), await U(R(t3, "success"), { ...r3, result: i3 }), i3;
          } catch (e3) {
            throw o3 = e3, await U(R(t3, "fail"), { ...r3, error: o3 }), o3;
          } finally {
            await U(R(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
          }
        };
      }({ fn: async function s4(...u2) {
        let h2;
        a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
        const d2 = { name: t2, type: l, data: { method: c2, params: u2 } };
        "object" == typeof n2.secretMethods && function(e2, t3) {
          const n3 = t3.data.method, s5 = e2.secretMethods || {}, r3 = s5[n3] || s5["*"];
          r3 && (t3.secretType = r3);
        }(n2, d2);
        let f2 = false;
        try {
          h2 = await e.callFunction(d2);
        } catch (e2) {
          f2 = true, h2 = { result: new Q(e2) };
        }
        const { errSubject: p2, errCode: g2, errMsg: m2, newToken: y2 } = h2.result || {};
        if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (te(y2), z(q, { ...y2 })), g2) {
          let e2 = m2;
          if (f2 && o2) {
            e2 = (await o2({ objectName: t2, methodName: c2, params: u2, errSubject: p2, errCode: g2, errMsg: m2 })).errMsg || m2;
          }
          if (a2)
            if ("toast" === i2.type)
              uni.showToast({ title: e2, icon: "none" });
            else {
              if ("modal" !== i2.type)
                throw new Error(`Invalid errorOptions.type: ${i2.type}`);
              {
                const { confirm: t3 } = await async function({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                  return new Promise((i3, o3) => {
                    uni.showModal({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e4) {
                      i3(e4);
                    }, fail() {
                      i3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "\u63D0\u793A", content: e2, showCancel: i2.retry, cancelText: "\u53D6\u6D88", confirmText: i2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                if (i2.retry && t3)
                  return s4(...u2);
              }
            }
          const n3 = new Q({ subject: p2, code: g2, message: m2, requestId: h2.requestId });
          throw n3.detail = h2.result, z(D, { type: j, content: n3 }), n3;
        }
        return z(D, { type: j, content: h2.result }), h2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e2 } = {}) {
        return { objectName: t2, methodName: c2, params: e2 };
      } }) });
    };
  }
  function Ss(e) {
    return C("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
  }
  async function ks({ callLoginByWeixin: e = false } = {}) {
    const t2 = Ss(this);
    if ("mp-weixin" !== S)
      throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${S}\``);
    const n2 = await new Promise((e2, t3) => {
      uni.login({ success(t4) {
        e2(t4.code);
      }, fail(e3) {
        t3(new Error(e3.errMsg));
      } });
    }), s2 = this.importObject("uni-id-co", { customUI: true });
    return await s2.secureNetworkHandshakeByWeixin({ code: n2, callLoginByWeixin: e }), t2.mpWeixinCode = n2, { code: n2 };
  }
  async function Is(e) {
    const t2 = Ss(this);
    return t2.initPromise || (t2.initPromise = ks.call(this, e)), t2.initPromise;
  }
  function bs(e) {
    return function({ callLoginByWeixin: t2 = false } = {}) {
      return Is.call(e, { callLoginByWeixin: t2 });
    };
  }
  async function Ts(e, t2) {
    const n2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
        X.request({ ...s2, success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } });
      }));
      return !(!e2.data || 0 !== e2.data.code);
    } catch (e2) {
      return false;
    }
    var s2;
  }
  function As(e) {
    if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus)
      return;
    let t2 = Promise.resolve();
    var n2;
    n2 = 1, t2 = new Promise((e2) => {
      setTimeout(() => {
        e2();
      }, n2);
    }), e.isReady = false, e.isDefault = false;
    const s2 = e.auth();
    e.initUniCloudStatus = "pending", e.initUniCloud = t2.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
      if ("app" === S) {
        const { osName: e2, osVersion: t3 } = ie();
        "ios" === e2 && function(e3) {
          if (!e3 || "string" != typeof e3)
            return 0;
          const t4 = e3.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u6A21\u5F0F\u751F\u6548\uFF0C\u53D1\u884C\u6A21\u5F0F\u4F1A\u8FDE\u63A5uniCloud\u4E91\u7AEF\u670D\u52A1\uFF09");
      }
      if (e.__dev__.debugInfo) {
        const { address: t3, servePort: n3 } = e.__dev__.debugInfo;
        return async function(e2, t4) {
          let n4;
          for (let s3 = 0; s3 < e2.length; s3++) {
            const r2 = e2[s3];
            if (await Ts(r2, t4)) {
              n4 = r2;
              break;
            }
          }
          return { address: n4, port: t4 };
        }(t3, n3);
      }
    }).then(({ address: t3, port: n3 } = {}) => {
      const s3 = console["app" === S ? "error" : "warn"];
      if (t3)
        e.__dev__.localAddress = t3, e.__dev__.localPort = n3;
      else if (e.__dev__.debugInfo) {
        let t4 = "";
        "remote" === e.__dev__.debugInfo.initialLaunchType ? (e.__dev__.debugInfo.forceRemote = true, t4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002") : t4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002", t4 += "\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs\n- \u68C0\u67E5\u662F\u5426\u9519\u8BEF\u7684\u4F7F\u7528\u62E6\u622A\u5668\u4FEE\u6539uni.request\u65B9\u6CD5\u7684\u53C2\u6570", "web" === S && (t4 += "\n- \u90E8\u5206\u6D4F\u89C8\u5668\u5F00\u542F\u8282\u6D41\u6A21\u5F0F\u4E4B\u540E\u8BBF\u95EE\u672C\u5730\u5730\u5740\u53D7\u9650\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u542F\u7528\u4E86\u8282\u6D41\u6A21\u5F0F"), 0 === S.indexOf("mp-") && (t4 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s3(t4);
      }
    }).then(() => {
      ne(), e.isReady = true, e.initUniCloudStatus = "fulfilled";
    }).catch((t3) => {
      console.error(t3), e.initUniCloudStatus = "rejected";
    });
  }
  const Cs = { tcb: _t, tencent: _t, aliyun: de, private: vt };
  let Ps = new class {
    init(e) {
      let t2 = {};
      const n2 = Cs[e.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t2 = n2.init(e), t2.__dev__ = {}, t2.__dev__.debugLog = "web" === S && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === S;
      const s2 = k;
      s2 && !s2.code && (t2.__dev__.debugInfo = s2), As(t2), t2.reInit = function() {
        As(this);
      }, Pn(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t2), function(e2) {
        e2.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e2.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Kn(Mn, { uniClient: e2 });
          return this._database = n3, n3;
        }, e2.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e2.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Kn(Mn, { uniClient: e2, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e2) {
        e2.getCurrentUserInfo = gs, e2.chooseAndUploadFile = ys.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return ws(e2);
        } }), e2.importObject = vs(e2), e2.initSecureNetworkByWeixin = bs(e2);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t2[e2])
          return;
        const n3 = t2[e2];
        t2[e2] = function() {
          return t2.reInit(), n3.apply(t2, Array.from(arguments));
        }, t2[e2] = Y(t2[e2], e2).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e = I;
    let t2 = {};
    if (e && 1 === e.length)
      t2 = e[0], Ps = Ps.init(t2), Ps.isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e && e.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e2) => {
        Ps[e2] = function() {
          return console.error(n2), Promise.reject(new Q({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Ps, { get mixinDatacom() {
      return ws(Ps);
    } }), hs(Ps), Ps.addInterceptor = O, Ps.removeInterceptor = x, Ps.interceptObject = L, "web" === S && (window.uniCloud = Ps);
  })();
  var Es = Ps;
  const ERR_MSG_OK = "chooseAndUploadFile:ok";
  const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
  function chooseImage(opts) {
    const {
      count,
      sizeType = ["original", "compressed"],
      sourceType,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res, "image"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseVideo(opts) {
    const {
      camera,
      compressed,
      maxDuration,
      sourceType,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseVideo({
        camera,
        compressed,
        maxDuration,
        sourceType,
        extension,
        success(res) {
          const {
            tempFilePath,
            duration,
            size,
            height,
            width
          } = res;
          resolve(normalizeChooseAndUploadFileRes({
            errMsg: "chooseVideo:ok",
            tempFilePaths: [tempFilePath],
            tempFiles: [
              {
                name: res.tempFile && res.tempFile.name || "",
                path: tempFilePath,
                size,
                type: res.tempFile && res.tempFile.type || "",
                width,
                height,
                duration,
                fileType: "video",
                cloudPath: ""
              }
            ]
          }, "video"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseAll(opts) {
    const {
      count,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      let chooseFile = uni.chooseFile;
      if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
        chooseFile = wx.chooseMessageFile;
      }
      if (typeof chooseFile !== "function") {
        return reject({
          errMsg: ERR_MSG_FAIL + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002"
        });
      }
      chooseFile({
        type: "all",
        count,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function normalizeChooseAndUploadFileRes(res, fileType) {
    res.tempFiles.forEach((item, index) => {
      if (!item.name) {
        item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
      }
      if (fileType) {
        item.fileType = fileType;
      }
      item.cloudPath = Date.now() + "_" + index + item.name.substring(item.name.lastIndexOf("."));
    });
    if (!res.tempFilePaths) {
      res.tempFilePaths = res.tempFiles.map((file) => file.path);
    }
    return res;
  }
  function uploadCloudFiles(files, max = 5, onUploadProgress) {
    files = JSON.parse(JSON.stringify(files));
    const len = files.length;
    let count = 0;
    let self2 = this;
    return new Promise((resolve) => {
      while (count < max) {
        next();
      }
      function next() {
        let cur = count++;
        if (cur >= len) {
          !files.find((item) => !item.url && !item.errMsg) && resolve(files);
          return;
        }
        const fileItem = files[cur];
        const index = self2.files.findIndex((v2) => v2.uuid === fileItem.uuid);
        fileItem.url = "";
        delete fileItem.errMsg;
        Es.uploadFile({
          filePath: fileItem.path,
          cloudPath: fileItem.cloudPath,
          fileType: fileItem.fileType,
          onUploadProgress: (res) => {
            res.index = index;
            onUploadProgress && onUploadProgress(res);
          }
        }).then((res) => {
          fileItem.url = res.fileID;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        }).catch((res) => {
          fileItem.errMsg = res.errMsg || res.message;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        });
      }
    });
  }
  function uploadFiles(choosePromise, {
    onChooseFile,
    onUploadProgress
  }) {
    return choosePromise.then((res) => {
      if (onChooseFile) {
        const customChooseRes = onChooseFile(res);
        if (typeof customChooseRes !== "undefined") {
          return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res : chooseRes);
        }
      }
      return res;
    }).then((res) => {
      if (res === false) {
        return {
          errMsg: ERR_MSG_OK,
          tempFilePaths: [],
          tempFiles: []
        };
      }
      return res;
    });
  }
  function chooseAndUploadFile(opts = {
    type: "all"
  }) {
    if (opts.type === "image") {
      return uploadFiles(chooseImage(opts), opts);
    } else if (opts.type === "video") {
      return uploadFiles(chooseVideo(opts), opts);
    }
    return uploadFiles(chooseAll(opts), opts);
  }
  const get_file_ext = (name) => {
    const last_len = name.lastIndexOf(".");
    const len = name.length;
    return {
      name: name.substring(0, last_len),
      ext: name.substring(last_len + 1, len)
    };
  };
  const get_extname = (fileExtname) => {
    if (!Array.isArray(fileExtname)) {
      let extname = fileExtname.replace(/(\[|\])/g, "");
      return extname.split(",");
    } else {
      return fileExtname;
    }
  };
  const get_files_and_is_max = (res, _extname) => {
    let filePaths = [];
    let files = [];
    if (!_extname || _extname.length === 0) {
      return {
        filePaths,
        files
      };
    }
    res.tempFiles.forEach((v2) => {
      let fileFullName = get_file_ext(v2.name);
      const extname = fileFullName.ext.toLowerCase();
      if (_extname.indexOf(extname) !== -1) {
        files.push(v2);
        filePaths.push(v2.path);
      }
    });
    if (files.length !== res.tempFiles.length) {
      uni.showToast({
        title: `\u5F53\u524D\u9009\u62E9\u4E86${res.tempFiles.length}\u4E2A\u6587\u4EF6 \uFF0C${res.tempFiles.length - files.length} \u4E2A\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E`,
        icon: "none",
        duration: 5e3
      });
    }
    return {
      filePaths,
      files
    };
  };
  const get_file_info = (filepath) => {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: filepath,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  };
  const get_file_data = async (files, type = "image") => {
    let fileFullName = get_file_ext(files.name);
    const extname = fileFullName.ext.toLowerCase();
    let filedata = {
      name: files.name,
      uuid: files.uuid,
      extname: extname || "",
      cloudPath: files.cloudPath,
      fileType: files.fileType,
      url: files.path || files.path,
      size: files.size,
      image: {},
      path: files.path,
      video: {}
    };
    if (type === "image") {
      const imageinfo = await get_file_info(files.path);
      delete filedata.video;
      filedata.image.width = imageinfo.width;
      filedata.image.height = imageinfo.height;
      filedata.image.location = imageinfo.path;
    } else {
      delete filedata.image;
    }
    return filedata;
  };
  const _sfc_main$o = {
    name: "uploadImage",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto",
            border: {}
          };
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        let styles = {
          width: "auto",
          height: "auto",
          border: {}
        };
        return Object.assign(styles, this.imageStyles);
      },
      boxStyle() {
        const {
          width = "auto",
          height = "auto"
        } = this.styles;
        let obj = {};
        if (height === "auto") {
          if (width !== "auto") {
            obj.height = this.value2px(width);
            obj["padding-top"] = 0;
          } else {
            obj.height = 0;
          }
        } else {
          obj.height = this.value2px(height);
          obj["padding-top"] = 0;
        }
        if (width === "auto") {
          if (height !== "auto") {
            obj.width = this.value2px(height);
          } else {
            obj.width = "33.3%";
          }
        } else {
          obj.width = this.value2px(width);
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderStyle() {
        let {
          border
        } = this.styles;
        let obj = {};
        const widthDefaultValue = 1;
        const radiusDefaultValue = 3;
        if (typeof border === "boolean") {
          obj.border = border ? "1px #eee solid" : "none";
        } else {
          let width = border && border.width || widthDefaultValue;
          width = this.value2px(width);
          let radius = border && border.radius || radiusDefaultValue;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": border && border.style || "solid",
            "border-color": border && border.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", item);
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      prviewImage(img, index) {
        let urls = [];
        if (Number(this.limit) === 1 && this.disablePreview && !this.disabled) {
          this.$emit("choose");
        }
        if (this.disablePreview)
          return;
        this.filesList.forEach((i2) => {
          urls.push(i2.url);
        });
        uni.previewImage({
          urls,
          current: index
        });
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          if (value.indexOf("%") === -1) {
            value = value.indexOf("px") !== -1 ? value : value + "px";
          }
        }
        return value;
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.filesList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "file-picker__box",
          key: index,
          style: vue.normalizeStyle($options.boxStyle)
        }, [
          vue.createElementVNode("view", {
            class: "file-picker__box-content",
            style: vue.normalizeStyle($options.borderStyle)
          }, [
            vue.createElementVNode("image", {
              class: "file-image",
              src: item.url,
              mode: "aspectFill",
              onClick: vue.withModifiers(($event) => $options.prviewImage(item, index), ["stop"])
            }, null, 8, ["src", "onClick"]),
            $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "icon-del-box",
              onClick: vue.withModifiers(($event) => $options.delFile(index), ["stop"])
            }, [
              vue.createElementVNode("view", { class: "icon-del" }),
              vue.createElementVNode("view", { class: "icon-del rotate" })
            ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.errMsg ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 4)
        ], 4);
      }), 128)),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "file-picker__box",
        style: vue.normalizeStyle($options.boxStyle)
      }, [
        vue.createElementVNode("view", {
          class: "file-picker__box-content is-add",
          style: vue.normalizeStyle($options.borderStyle),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "icon-add" }),
            vue.createElementVNode("view", { class: "icon-add rotate" })
          ], true)
        ], 4)
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-bdfc07e0"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-file-picker/components/uni-file-picker/upload-image.vue"]]);
  const _sfc_main$n = {
    name: "uploadFile",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      showType: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      list() {
        let files = [];
        this.filesList.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      styles() {
        let styles = {
          border: true,
          dividline: true,
          "border-style": {}
        };
        return Object.assign(styles, this.listStyles);
      },
      borderStyle() {
        let {
          borderStyle,
          border
        } = this.styles;
        let obj = {};
        if (!border) {
          obj.border = "none";
        } else {
          let width = borderStyle && borderStyle.width || 1;
          width = this.value2px(width);
          let radius = borderStyle && borderStyle.radius || 5;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": borderStyle && borderStyle.style || "solid",
            "border-color": borderStyle && borderStyle.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderLineStyle() {
        let obj = {};
        let {
          borderStyle
        } = this.styles;
        if (borderStyle && borderStyle.color) {
          obj["border-color"] = borderStyle.color;
        }
        if (borderStyle && borderStyle.width) {
          let width = borderStyle && borderStyle.width || 1;
          let style = borderStyle && borderStyle.style || 0;
          if (typeof width === "number") {
            width += "px";
          } else {
            width = width.indexOf("px") ? width : width + "px";
          }
          obj["border-width"] = width;
          if (typeof style === "number") {
            style += "px";
          } else {
            style = style.indexOf("px") ? style : style + "px";
          }
          obj["border-top-style"] = style;
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", {
          item,
          index
        });
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          value = value.indexOf("px") !== -1 ? value : value + "px";
        }
        return value;
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__files" }, [
      !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "files-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(` :class="{'is-text-box':showType === 'list'}" `),
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-file-picker__lists is-text-box",
        style: vue.normalizeStyle($options.borderStyle)
      }, [
        vue.createCommentVNode(" ,'is-list-card':showType === 'list-card' "),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["uni-file-picker__lists-box", {
              "files-border": index !== 0 && $options.styles.dividline
            }]),
            key: index,
            style: vue.normalizeStyle(index !== 0 && $options.styles.dividline && $options.borderLineStyle)
          }, [
            vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
              vue.createCommentVNode(` :class="{'is-text-image':showType === 'list'}" `),
              vue.createCommentVNode(' 	<view class="files__image is-text-image">\r\n						<image class="header-image" :src="item.logo" mode="aspectFit"></image>\r\n					</view> '),
              vue.createElementVNode("view", { class: "files__name" }, vue.toDisplayString(item.name), 1),
              $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "icon-del-box icon-files",
                onClick: ($event) => $options.delFile(index)
              }, [
                vue.createElementVNode("view", { class: "icon-del icon-files" }),
                vue.createElementVNode("view", { class: "icon-del rotate" })
              ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ]),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.status === "error" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 6);
        }), 128))
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-a54939c6"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-file-picker/components/uni-file-picker/upload-file.vue"]]);
  const _sfc_main$m = {
    name: "uniFilePicker",
    components: {
      uploadImage,
      uploadFile
    },
    options: {
      virtualHost: true
    },
    emits: ["select", "success", "fail", "progress", "delete", "update:modelValue", "input"],
    props: {
      modelValue: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      autoUpload: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      mode: {
        type: String,
        default: "grid"
      },
      fileMediatype: {
        type: String,
        default: "image"
      },
      fileExtname: {
        type: [Array, String],
        default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto"
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      returnType: {
        type: String,
        default: "array"
      },
      sizeType: {
        type: Array,
        default() {
          return ["original", "compressed"];
        }
      },
      sourceType: {
        type: Array,
        default() {
          return ["album", "camera"];
        }
      }
    },
    data() {
      return {
        files: [],
        localValue: []
      };
    },
    watch: {
      modelValue: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      }
    },
    computed: {
      filesList() {
        let files = [];
        this.files.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      showType() {
        if (this.fileMediatype === "image") {
          return this.mode;
        }
        return "list";
      },
      limitLength() {
        if (this.returnType === "object") {
          return 1;
        }
        if (!this.limit) {
          return 1;
        }
        if (this.limit >= 9) {
          return 9;
        }
        return this.limit;
      }
    },
    created() {
      if (!(Es.config && Es.config.provider)) {
        this.noSpace = true;
        Es.chooseAndUploadFile = chooseAndUploadFile;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    methods: {
      clearFiles(index) {
        if (index !== 0 && !index) {
          this.files = [];
          this.$nextTick(() => {
            this.setEmit();
          });
        } else {
          this.files.splice(index, 1);
        }
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      upload() {
        let files = [];
        this.files.forEach((v2, index) => {
          if (v2.status === "ready" || v2.status === "error") {
            files.push(Object.assign({}, v2));
          }
        });
        return this.uploadFiles(files);
      },
      async setValue(newVal, oldVal) {
        const newData = async (v2) => {
          const reg = /cloud:\/\/([\w.]+\/?)\S*/;
          let url = "";
          if (v2.fileID) {
            url = v2.fileID;
          } else {
            url = v2.url;
          }
          if (reg.test(url)) {
            v2.fileID = url;
            v2.url = await this.getTempFileURL(url);
          }
          if (v2.url)
            v2.path = v2.url;
          return v2;
        };
        if (this.returnType === "object") {
          if (newVal) {
            await newData(newVal);
          } else {
            newVal = {};
          }
        } else {
          if (!newVal)
            newVal = [];
          for (let i2 = 0; i2 < newVal.length; i2++) {
            let v2 = newVal[i2];
            await newData(v2);
          }
        }
        this.localValue = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(this.localValue);
        }
        let filesData = Object.keys(newVal).length > 0 ? newVal : [];
        this.files = [].concat(filesData);
      },
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `\u60A8\u6700\u591A\u9009\u62E9 ${this.limitLength} \u4E2A\u6587\u4EF6`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        Es.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          sourceType: this.sourceType,
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:371", "\u9009\u62E9\u5931\u8D25", err);
        });
      },
      async chooseFileCallback(res) {
        const _extname = get_extname(this.fileExtname);
        const is_one = Number(this.limitLength) === 1 && this.disablePreview && !this.disabled || this.returnType === "object";
        if (is_one) {
          this.files = [];
        }
        let {
          filePaths,
          files
        } = get_files_and_is_max(res, _extname);
        if (!(_extname && _extname.length > 0)) {
          filePaths = res.tempFilePaths;
          files = res.tempFiles;
        }
        let currentData = [];
        for (let i2 = 0; i2 < files.length; i2++) {
          if (this.limitLength - this.files.length <= 0)
            break;
          files[i2].uuid = Date.now();
          let filedata = await get_file_data(files[i2], this.fileMediatype);
          filedata.progress = 0;
          filedata.status = "ready";
          this.files.push(filedata);
          currentData.push({
            ...filedata,
            file: files[i2]
          });
        }
        this.$emit("select", {
          tempFiles: currentData,
          tempFilePaths: filePaths
        });
        res.tempFiles = files;
        if (!this.autoUpload || this.noSpace) {
          res.tempFiles = [];
        }
      },
      uploadFiles(files) {
        files = [].concat(files);
        return uploadCloudFiles.call(this, files, 5, (res) => {
          this.setProgress(res, res.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
          return result;
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:437", err);
        });
      },
      async setSuccessAndError(res, fn2) {
        let successData = [];
        let errorData = [];
        let tempFilePath = [];
        let errorTempFilePath = [];
        for (let i2 = 0; i2 < res.length; i2++) {
          const item = res[i2];
          const index = item.uuid ? this.files.findIndex((p2) => p2.uuid === item.uuid) : item.index;
          if (index === -1 || !this.files)
            break;
          if (item.errMsg === "request:fail") {
            this.files[index].url = item.path;
            this.files[index].status = "error";
            this.files[index].errMsg = item.errMsg;
            errorData.push(this.files[index]);
            errorTempFilePath.push(this.files[index].url);
          } else {
            this.files[index].errMsg = "";
            this.files[index].fileID = item.url;
            const reg = /cloud:\/\/([\w.]+\/?)\S*/;
            if (reg.test(item.url)) {
              this.files[index].url = await this.getTempFileURL(item.url);
            } else {
              this.files[index].url = item.url;
            }
            this.files[index].status = "success";
            this.files[index].progress += 1;
            successData.push(this.files[index]);
            tempFilePath.push(this.files[index].fileID);
          }
        }
        if (successData.length > 0) {
          this.setEmit();
          this.$emit("success", {
            tempFiles: this.backObject(successData),
            tempFilePaths: tempFilePath
          });
        }
        if (errorData.length > 0) {
          this.$emit("fail", {
            tempFiles: this.backObject(errorData),
            tempFilePaths: errorTempFilePath
          });
        }
      },
      setProgress(progressEvent, index, type) {
        this.files.length;
        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        let idx = index;
        if (!type) {
          idx = this.files.findIndex((p2) => p2.uuid === progressEvent.tempFile.uuid);
        }
        if (idx === -1 || !this.files[idx])
          return;
        this.files[idx].progress = percentCompleted - 1;
        this.$emit("progress", {
          index: idx,
          progress: parseInt(percentCompleted),
          tempFile: this.files[idx]
        });
      },
      delFile(index) {
        this.$emit("delete", {
          tempFile: this.files[index],
          tempFilePath: this.files[index].url
        });
        this.files.splice(index, 1);
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      getFileExt(name) {
        const last_len = name.lastIndexOf(".");
        const len = name.length;
        return {
          name: name.substring(0, last_len),
          ext: name.substring(last_len + 1, len)
        };
      },
      setEmit() {
        let data = [];
        if (this.returnType === "object") {
          data = this.backObject(this.files)[0];
          this.localValue = data ? data : null;
        } else {
          data = this.backObject(this.files);
          if (!this.localValue) {
            this.localValue = [];
          }
          this.localValue = [...data];
        }
        this.$emit("update:modelValue", this.localValue);
      },
      backObject(files) {
        let newFilesData = [];
        files.forEach((v2) => {
          newFilesData.push({
            extname: v2.extname,
            fileType: v2.fileType,
            image: v2.image,
            name: v2.name,
            path: v2.path,
            size: v2.size,
            fileID: v2.fileID,
            url: v2.url
          });
        });
        return newFilesData;
      },
      async getTempFileURL(fileList) {
        fileList = {
          fileList: [].concat(fileList)
        };
        const urls = await Es.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_upload_image = vue.resolveComponent("upload-image");
    const _component_upload_file = vue.resolveComponent("upload-file");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-file-picker__header"
      }, [
        vue.createElementVNode("text", { class: "file-title" }, vue.toDisplayString($props.title), 1),
        vue.createElementVNode("text", { class: "file-count" }, vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength), 1)
      ])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype === "image" && $options.showType === "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_image, {
        key: 1,
        readonly: $props.readonly,
        "image-styles": $props.imageStyles,
        "files-list": $options.filesList,
        limit: $options.limitLength,
        disablePreview: $props.disablePreview,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "is-add" }, [
              vue.createElementVNode("view", { class: "icon-add" }),
              vue.createElementVNode("view", { class: "icon-add rotate" })
            ])
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "image-styles", "files-list", "limit", "disablePreview", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype !== "image" || $options.showType !== "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_file, {
        key: 2,
        readonly: $props.readonly,
        "list-styles": $props.listStyles,
        "files-list": $options.filesList,
        showType: $options.showType,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "\u9009\u62E9\u6587\u4EF6")
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-6223573f"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$l = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
      };
    },
    computed: {
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      },
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
      style: vue.normalizeStyle($options.boxStyle)
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
        style: vue.normalizeStyle($options.inputContentStyle)
      }, [
        $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "content-clear-icon",
          type: $props.prefixIcon,
          color: "#c0c4cc",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
          size: "22"
        }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
        $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
          key: 1,
          class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          disabled: $props.disabled,
          "placeholder-class": "uni-easyinput__placeholder-class",
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          autoHeight: $props.autoHeight,
          onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
        }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (vue.openBlock(), vue.createElementBlock("input", {
          key: 2,
          type: $props.type === "password" ? "text" : $props.type,
          class: "uni-easyinput__content-input",
          style: vue.normalizeStyle($options.inputStyle),
          name: $props.name,
          value: $data.val,
          password: !$data.showPassword && $props.type === "password",
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          "placeholder-class": "uni-easyinput__placeholder-class",
          disabled: $props.disabled,
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          confirmType: $props.confirmType,
          onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
          onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
          onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
        }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
        $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
          vue.createCommentVNode(" \u5F00\u542F\u5BC6\u7801\u65F6\u663E\u793A\u5C0F\u773C\u775B "),
          $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
            size: 22,
            color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
            onClick: $options.onEyes
          }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
          $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.suffixIcon,
            color: "#c0c4cc",
            onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
            size: "22"
          }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
          $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: "clear",
            size: $props.clearSize,
            color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
            onClick: $options.onClear
          }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ], 6)
    ], 6);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-09fd5285"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  function qryPostCommentPage(data) {
    return request("/comment/qryPostCommentPage", "POST", data);
  }
  function addComment(data) {
    return request("/comment/addComment", "POST", data);
  }
  function deleteComment(data) {
    return request("/comment/deleteComment", "POST", data);
  }
  function addWarning(data) {
    return request("/warning/addWarning", "POST", data);
  }
  function qryMyWarning(data) {
    return request("/warning/qryMyWarning", "POST", data);
  }
  function isFollow(userId) {
    return request("/follows/isFollow/" + userId, "GET");
  }
  function addFollow(data) {
    return request("/follows/addFollow", "POST", data);
  }
  function removeFollow(data) {
    return request("/follows/removeFollow", "POST", data);
  }
  function qryConcernsOrFollowsPage(data) {
    return request("/follows/qryConcernsOrFollowsPage", "POST", data);
  }
  const _sfc_main$k = {
    data() {
      return {
        info: {},
        comment: "",
        type: "help",
        commentList: [],
        user: {},
        pageReq: {
          pageSize: 5,
          pageNum: 1,
          postId: 0
        },
        isLoading: false,
        hasMore: true,
        maskShow: false,
        popStyles: {},
        isFollow: false,
        isCollect: false
      };
    },
    methods: {
      reportPost() {
        if (this.info.userId === this.user.userId) {
          return;
        }
        uni.showActionSheet({
          itemList: ["\u4E3E\u62A5\u5E16\u5B50"],
          success: (res) => {
            uni.showModal({
              title: "\u60A8\u786E\u5B9A\u4E3E\u62A5\u5417?",
              success: (res2) => {
                if (res2.confirm) {
                  addWarning({
                    positiveUserId: this.user.userId,
                    passiveUserId: this.info.userId,
                    commentPostId: this.info.postId,
                    type: "1"
                  }).then((res3) => {
                    uni.showToast({
                      title: res3.msg,
                      icon: "success"
                    });
                  }).catch((err) => {
                    uni.showToast({
                      title: "\u8BF7\u52FF\u91CD\u590D\u4E3E\u62A5!",
                      icon: "none"
                    });
                  });
                } else if (res2.cancel) {
                  formatAppLog("log", "at pages/detail/detail.vue:158", "\u7528\u6237\u70B9\u51FB\u53D6\u6D882");
                }
              }
            });
          }
        });
      },
      toAssignScores() {
        uni.navigateTo({
          url: "/pages/scoresAssgin/scoresAssgin?postId=" + this.info.postId + "&userId=" + this.info.userId
        });
      },
      addCollect() {
        addCollect({
          userId: this.user.userId,
          postId: this.info.postId
        }).then((res) => {
          if (!this.isCollect) {
            uni.showToast({
              title: "\u6536\u85CF\u6210\u529F!",
              icon: "none"
            });
          }
          this.isCollect = !this.isCollect;
        });
      },
      toMsg() {
        let itemList = ["\u524D\u5F80\u4E3B\u9875", "\u79C1\u804A"];
        if (this.info.userId === this.user.userId) {
          itemList = ["\u524D\u5F80\u4E3B\u9875"];
        }
        uni.showActionSheet({
          itemList,
          success: (res) => {
            if (res.tapIndex === 0) {
              uni.navigateTo({
                url: "/pages/userHome/userHome?userId=" + this.info.userId
              });
              formatAppLog("log", "at pages/detail/detail.vue:196", "\u524D\u5F80\u4E3B\u9875...");
            } else if (res.tapIndex === 1) {
              let user = {
                userId: this.info.userId,
                avatar: this.info.avatar,
                nickname: this.info.nickname
              };
              uni.navigateTo({
                url: "/pages/msgDetail/msgDetail?user=" + JSON.stringify(user)
              });
            }
          }
        });
      },
      toFollow(flag) {
        if (flag) {
          addFollow({
            userId: this.info.userId,
            followId: this.user.userId
          }).then((res) => {
            formatAppLog("log", "at pages/detail/detail.vue:217", res);
            this.isFollow = true;
            this.user.concerns++;
            uni.setStorageSync("user", JSON.stringify(this.user));
          });
        } else {
          removeFollow({
            userId: this.info.userId,
            followId: this.user.userId
          }).then((res) => {
            formatAppLog("log", "at pages/detail/detail.vue:227", res);
            this.isFollow = false;
            this.user.concerns--;
            uni.setStorageSync("user", JSON.stringify(this.user));
          });
        }
      },
      sendMsg() {
        if (!this.info.resolved || this.info.resolved != "00U") {
          uni.showToast({
            title: "\u8BE5\u5E16\u5B50\u5DF2\u89E3\u51B3!",
            icon: "none"
          });
          return;
        }
        if (!this.comment.trim()) {
          uni.showToast({
            title: "\u8BC4\u8BBA\u4E0D\u80FD\u4E3A\u7A7A!",
            icon: "none"
          });
        } else {
          addComment({
            postId: this.info.postId,
            content: this.comment,
            userId: this.user.userId,
            postUserId: this.info.userId
          }).then((res) => {
            this.comment = "";
            this.pageReq.pageNum = 1;
            qryPostCommentPage(this.pageReq).then((res2) => {
              this.commentList = res2.data.records;
              if (res2.data.records.length === 5) {
                this.pageNum++;
                this.isMoreComment = true;
              }
            });
          });
        }
      },
      commentLongPress(item) {
        if (item.userId === this.user.userId) {
          uni.showActionSheet({
            itemList: ["\u5220\u9664\u8BE5\u8BC4\u8BBA"],
            success: (res) => {
              uni.showModal({
                title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8BC4\u8BBA\u5417?",
                success: (res2) => {
                  if (res2.confirm) {
                    deleteComment({
                      commentId: item.commentId,
                      postId: this.info.postId,
                      userId: item.userId,
                      postUserId: this.info.userId
                    }).then((res3) => {
                      this.commentList = this.commentList.filter((comment) => comment.commentId != item.commentId);
                    });
                  } else if (res2.cancel) {
                    formatAppLog("log", "at pages/detail/detail.vue:284", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
                  }
                }
              });
            }
          });
        } else {
          uni.showActionSheet({
            itemList: ["\u4E3E\u62A5\u8BE5\u8BC4\u8BBA"],
            success: (res) => {
              uni.showModal({
                title: "\u60A8\u786E\u5B9A\u4E3E\u62A5\u8BE5\u8BC4\u8BBA\u5417?",
                success: (res2) => {
                  if (res2.confirm) {
                    addWarning({
                      positiveUserId: this.user.userId,
                      passiveUserId: item.userId,
                      commentPostId: item.commentId,
                      type: "0"
                    }).then((res3) => {
                      uni.showToast({
                        title: res3.msg,
                        icon: "success"
                      });
                    }).catch((err) => {
                      uni.showToast({
                        title: "\u8BF7\u52FF\u91CD\u590D\u4E3E\u62A5!",
                        icon: "none"
                      });
                    });
                  } else if (res2.cancel) {
                    formatAppLog("log", "at pages/detail/detail.vue:315", "\u7528\u6237\u70B9\u51FB\u53D6\u6D882");
                  }
                }
              });
            }
          });
        }
      },
      deleteComment() {
      },
      reportComment() {
      }
    },
    onLoad(option) {
      if (option.type && option.type === "dynamic") {
        this.type = "dynamic";
      }
      this.info = JSON.parse(option.info);
      formatAppLog("log", "at pages/detail/detail.vue:335", "\u6570\u636E:", this.info);
      this.user = JSON.parse(uni.getStorageSync("user"));
      this.pageReq.postId = this.info.postId;
      qryPostCommentPage(this.pageReq).then((res) => {
        this.commentList = res.data.records;
        if (res.data.records.length < 5) {
          this.isMoreComment = false;
        }
      });
      isFollow(this.info.userId).then((res) => {
        if (res.data === true) {
          this.isFollow = true;
        } else {
          this.isFollow = false;
        }
      });
      addPostViews({
        postId: this.info.postId,
        userId: this.info.userId
      });
      addHistory({
        userId: this.user.userId,
        postId: this.info.postId
      });
      if (this.user.userId != this.info.userId) {
        qryIsCollect({
          userId: this.user.userId,
          postId: this.info.postId
        }).then((res) => {
          this.isCollect = res.data;
        });
      }
    },
    onShow() {
      getPostById(this.info.postId).then((res) => {
        this.info.resolved = res.data.resolved;
      });
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++;
        this.isLoading = true;
        qryPostCommentPage(this.pageReq).then((res) => {
          if (res.data.records.length <= 0) {
            this.hasMore = false;
          } else {
            let records = res.data.records;
            this.commentList.push(...records);
          }
        }).catch((err) => {
          this.pageReq.pageNum--;
        }).finally(() => {
          this.isLoading = false;
        });
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_0$1);
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode("view", { class: "userInfo" }, [
          vue.createElementVNode("image", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toMsg && $options.toMsg(...args)),
            class: "avatar",
            src: this.info.avatar
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "profile" }, [
            vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(this.info.nickname), 1),
            vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(this.info.createDate), 1)
          ])
        ]),
        this.info.userId != this.user.userId ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
          vue.withDirectives(vue.createElementVNode("view", {
            class: "cancel",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.toFollow(false))
          }, " \u221A \u5DF2\u5173\u6CE8 ", 512), [
            [vue.vShow, this.isFollow]
          ]),
          vue.withDirectives(vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = ($event) => $options.toFollow(true)),
            class: "focus"
          }, " + \u5173\u6CE8 ", 512), [
            [vue.vShow, !this.isFollow]
          ])
        ])) : this.info.userId === this.user.userId && this.info.resolved === "00U" && this.type != "dynamic" ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
          vue.withDirectives(vue.createElementVNode("view", {
            onClick: _cache[3] || (_cache[3] = ($event) => $options.toAssignScores()),
            class: "assign"
          }, " \u5206\u914D\u79EF\u5206 ", 512), [
            [vue.vShow, !this.isFollow]
          ])
        ])) : this.info.userId === this.user.userId && this.info.resolved === "00R" && this.type != "dynamic" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "resolveBox"
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "checkbox",
            color: "#60a653",
            size: "25"
          }),
          vue.createElementVNode("view", { class: "resolve" }, " \u5DF2\u89E3\u51B3 ")
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", {
        class: "middle",
        onLongpress: _cache[6] || (_cache[6] = (...args) => $options.reportPost && $options.reportPost(...args))
      }, [
        vue.createElementVNode("textarea", {
          class: "content",
          value: this.info.content,
          disabled: ""
        }, null, 8, ["value"]),
        vue.createElementVNode("view", { class: "hr" }),
        vue.createElementVNode("view", { class: "image" }, [
          vue.createVNode(_component_uni_file_picker, {
            readonly: "",
            modelValue: this.info.images,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => this.info.images = $event)
          }, null, 8, ["modelValue"])
        ]),
        this.user.userId != this.info.userId ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "collect"
        }, [
          vue.createElementVNode("view", {
            class: "box",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.addCollect && $options.addCollect(...args))
          }, [
            !this.isCollect ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              type: "star-filled",
              size: "30",
              color: "#ccc"
            })) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 1,
              type: "star-filled",
              size: "30",
              color: "#e78282"
            }))
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ], 32),
      vue.createElementVNode("view", { class: "hr" }),
      vue.createElementVNode("view", { class: "bottom" }, [
        vue.createElementVNode("view", {
          class: "title",
          style: { "color": "#343434", "font-weight": "700", "display": "flex", "justify-content": "space-between" }
        }, [
          vue.createElementVNode("view", { class: "help" }, "\u6211\u8981\u5E2E\u52A9"),
          vue.createElementVNode("view", {
            class: "scores",
            style: { "color": "#ccc", "font-size": "15px", "margin-right": "15px" }
          }, "\u5F53\u524D\u5E16\u5B50\u62E5\u6709\u9644\u52A0\u79EF\u5206: " + vue.toDisplayString(this.info.scores), 1)
        ]),
        vue.createElementVNode("view", { class: "inputArea" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: this.user.avatar
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "comment" }, [
            vue.createVNode(_component_uni_easyinput, {
              disabled: !this.info.resolved || this.info.resolved != "00U",
              class: "info",
              modelValue: this.comment,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => this.comment = $event),
              type: "textarea",
              autoHeight: true,
              confirmType: "send",
              onIconClick: $options.sendMsg,
              onConfirm: $options.sendMsg,
              placeholder: "\u61C2\u5F97\u7684\u8BDD\u8D76\u7D27\u8BC4\u8BBA\u5E2E\u52A9\u4E00\u4E0B\u5427^O^",
              suffixIcon: "chat"
            }, null, 8, ["disabled", "modelValue", "onIconClick", "onConfirm"])
          ])
        ]),
        vue.createElementVNode("view", { class: "commentContainer" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.commentList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "item",
              onLongpress: ($event) => $options.commentLongPress(item),
              key: item.commentId
            }, [
              vue.createElementVNode("view", { class: "avatarBox" }, [
                vue.createElementVNode("image", {
                  class: "avatar",
                  src: item.avatar
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "contentBox" }, [
                vue.createElementVNode("view", { class: "box" }, [
                  vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.nickname), 1),
                  vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(item.createDate), 1)
                ]),
                vue.createElementVNode("view", { class: "content" }, vue.toDisplayString(item.content), 1)
              ]),
              vue.createCommentVNode(' <view class="endBox">\r\n            <uni-icons v-if="item.userId === this.user.userId" class="delete" type="trash" size="24" color="#b4b3b5"></uni-icons>\r\n            <view v-else class="warning">\r\n              <view class="warningImg iconfont icon-yichang_weixian_jubao"></view>\r\n            </view>\r\n          </view> ')
            ], 40, ["onLongpress"]);
          }), 128))
        ]),
        this.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "bottom"
        }, [
          vue.createElementVNode("image", {
            class: "loading",
            src: "/static/images/rank/loading.png"
          })
        ])) : vue.createCommentVNode("v-if", true),
        !this.isLoading && !this.hasMore ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "bottom"
        }, [
          vue.createElementVNode("view", { style: { "color": "#b2a796" } }, "\u6CA1\u6709\u66F4\u591A\u8BC4\u8BBA\u4E86~~")
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createCommentVNode(" \u906E\u7F69\u5C42 "),
      vue.createCommentVNode(' <view v-if="maskShow" class="mask">\r\n      <view class="pop" :style="popStyles">\r\n        <view class="delete" @click="deleteComment">\u5220\u9664</view>\r\n        <view class="report" @click="reportComment">\u4E3E\u62A5</view>\r\n      </view>\r\n    </view> ')
    ]);
  }
  const PagesDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/detail/detail.vue"]]);
  function login(data) {
    return request("/user/login", "POST", data);
  }
  function register(data) {
    return request("/user/register", "POST", data);
  }
  function getVerificationCode(data) {
    return request("/user/getVerificationCode", "POST", data);
  }
  function updateNickname(data) {
    return request("/user/updateNickname", "POST", data);
  }
  function qryChatList(userId) {
    return request("/user/qryChatList/" + userId, "GET");
  }
  function qryHelpUserList(data) {
    return request("/user/qryHelpUserList", "POST", data);
  }
  function updateUserScores(data) {
    return request("/user/updateUserScores", "POST", data);
  }
  function fileUpload({ tempFiles, tempFilePaths }, fileList, userId = 0, prefix = "posts/") {
    formatAppLog("log", "at api/file.js:2", tempFilePaths, tempFiles);
    uni.showLoading({
      title: "\u4E0A\u4F20\u4E2D..."
    });
    return new Promise((resolve, reject) => {
      tempFiles.forEach(async (item) => {
        await uni.uploadFile({
          url: "http://110.41.146.56:8888/api/file/upload",
          formData: {
            name: item.name,
            file: item.file,
            userId,
            prefix
          },
          timeout: 5e3,
          header: {
            Authorization: uni.getStorageSync("Authorization")
          },
          success: (res) => {
            formatAppLog("log", "at api/file.js:22", res);
            let data = JSON.parse(res.data);
            if (data.code === 200) {
              formatAppLog("log", "at api/file.js:25", "\u4E0A\u4F20\u6210\u529F!");
              fileList.push({
                name: item.name,
                extname: item.extname,
                url: data.data,
                uuid: item.uuid
              });
              resolve(fileList);
            } else {
              uni.showToast({
                title: "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25!",
                icon: "error"
              });
              reject(res.data);
            }
          },
          fail: (err) => {
            formatAppLog("log", "at api/file.js:43", err);
            uni.showToast({
              title: "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25!",
              icon: "error"
            });
          },
          complete() {
            uni.hideLoading();
            formatAppLog("log", "at api/file.js:51", "\u6B64\u65F6fileList:", fileList);
          }
        });
      });
    });
  }
  const _sfc_main$j = {
    data() {
      return {
        user: {},
        imageStyles: {
          width: 83,
          height: 83,
          border: {
            radius: "50%"
          }
        },
        fileList: [{
          url: "",
          extname: "png",
          name: "avatar.png"
        }],
        websocket: ""
      };
    },
    methods: {
      toWarning() {
        uni.navigateTo({
          url: "/pages/warning/warning"
        });
      },
      toDynamic() {
        uni.navigateTo({
          url: "/pages/dynamic/dynamic"
        });
      },
      toMyPost(type) {
        uni.navigateTo({
          url: "/pages/myPost/myPost?type=" + type
        });
      },
      toHistory(type) {
        uni.navigateTo({
          url: "/pages/history/history?type=" + type
        });
      },
      toFollows(type) {
        uni.navigateTo({
          url: "/pages/follows/follows?type=" + type + "&userId=" + this.user.userId
        });
      },
      updateNickname() {
        uni.showModal({
          title: "\u8BF7\u8F93\u5165\u65B0\u6635\u79F0",
          editable: true,
          placeholderText: "\u8BF7\u8F93\u51651~6\u4E2A\u5B57\u7B26",
          success: (res) => {
            if (res.confirm) {
              formatAppLog("log", "at pages/tabbar/personal/personal.vue:142", this.user);
              formatAppLog("log", "at pages/tabbar/personal/personal.vue:143", res.content);
              let content = res.content.trim();
              if (/^[\u4E00-\u9FA5A-Za-z0-9_]{1,6}$/.test(content)) {
                formatAppLog("log", "at pages/tabbar/personal/personal.vue:146", "\u6B63\u5219\u5339\u914D\u6210\u529F!", content);
                updateNickname({
                  userId: this.user.userId,
                  nickname: content
                }).then((res2) => {
                  uni.showToast({
                    title: "\u6635\u79F0\u4FEE\u6539\u6210\u529F!",
                    icon: "success"
                  });
                  this.user["nickname"] = content;
                  uni.setStorageSync("user", JSON.stringify(this.user));
                });
              } else {
                uni.showToast({
                  title: "\u8BF7\u8F93\u51651~6\u4E2A\u5B57\u7B26",
                  icon: "none"
                });
              }
            } else if (res.cancel) {
              formatAppLog("log", "at pages/tabbar/personal/personal.vue:166", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
            }
          }
        });
      },
      select: async function(e) {
        formatAppLog("log", "at pages/tabbar/personal/personal.vue:172", "\u9009\u62E9\u4E86\u6587\u4EF6:", e);
        if (e.tempFiles[0]["size"] > 3145728) {
          uni.showToast({
            title: "\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u5927\u4E8E3M",
            icon: "error"
          });
          this.fileList = [];
          return;
        }
        this.fileList = [];
        this.fileList = await fileUpload(e, this.fileList, this.user.userId, "avatar/");
        if (this.fileList[0]["url"]) {
          this.user["avatar"] = this.fileList[0]["url"];
          uni.setStorageSync("user", JSON.stringify(this.user));
        }
        this.fileList = [{
          url: this.user.avatar,
          extname: "png",
          name: "avatar.png"
        }];
      }
    },
    onShow() {
      let user = uni.getStorageSync("user");
      if (!user) {
        uni.showToast({
          title: "\u5F53\u524D\u672A\u767B\u9646\uFF0C\u8BF7\u767B\u5F55\uFF01",
          icon: "none"
        });
        uni.navigateTo({
          url: "/pages/login/login"
        });
      } else {
        this.user = JSON.parse(user);
        if (this.user.avatar) {
          this.fileList = [
            {
              url: this.user.avatar,
              extname: "png",
              name: "avatar.png"
            }
          ];
          formatAppLog("log", "at pages/tabbar/personal/personal.vue:214", "fileList\uFF1A", this.fileList);
        }
      }
    },
    onNavigationBarButtonTap() {
      formatAppLog("log", "at pages/tabbar/personal/personal.vue:219", this.websocket);
      uni.showModal({
        title: "\u6E29\u99A8\u63D0\u793A",
        content: "\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u5417?",
        success: (res) => {
          if (res.confirm) {
            uni.clearStorageSync("user");
            if (!!this.websocket) {
              this.websocket.close();
            }
            uni.reLaunch({
              url: "/pages/login/login"
            });
          }
        }
      });
    },
    onLoad() {
      this.websocket = this.$websocket;
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_0$1);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u9996\u90E8 "),
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode("view", { class: "left" }, [
          vue.createVNode(_component_uni_file_picker, {
            limit: "1",
            "del-icon": false,
            "disable-preview": "",
            imageStyles: $data.imageStyles,
            "file-mediatype": "image",
            "file-extname": "png,jpg,jpeg",
            "auto-upload": false,
            modelValue: $data.fileList,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fileList = $event),
            onSelect: $options.select
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u9009\u62E9")
            ]),
            _: 1
          }, 8, ["imageStyles", "modelValue", "onSelect"]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", {
              class: "name",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.updateNickname && $options.updateNickname(...args))
            }, [
              vue.createElementVNode("view", { class: "username" }, vue.toDisplayString(this.user.nickname), 1),
              vue.createElementVNode("image", {
                class: "edit",
                src: "/static/images/personal/edit.png"
              })
            ]),
            vue.createElementVNode("view", { class: "email" }, vue.toDisplayString(this.user.email), 1)
          ])
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode("view", { class: "honorBox" }, [
              vue.createElementVNode("image", {
                class: "honor",
                src: "/static/images/personal/honor.png"
              }),
              vue.createElementVNode("text", { class: "name" }, vue.toDisplayString(this.user.titleName), 1)
            ]),
            vue.createElementVNode("view", { class: "num" }, [
              vue.createTextVNode(vue.toDisplayString(this.user.scoresTotal) + " ", 1),
              vue.createElementVNode("text", { style: { "color": "#191919", "font-weight": "400" } }, "\u79EF\u5206")
            ])
          ])
        ])
      ]),
      vue.createCommentVNode(" \u4E2D\u90E8 "),
      vue.createElementVNode("view", { class: "middle" }, [
        vue.createElementVNode("view", { class: "top" }, [
          vue.createElementVNode("view", { class: "dynamic" }, [
            vue.createElementVNode("view", {
              class: "num",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.toDynamic && $options.toDynamic(...args))
            }, vue.toDisplayString(this.user.dynamics), 1),
            vue.createElementVNode("text", null, "\u52A8\u6001")
          ]),
          vue.createElementVNode("view", {
            class: "concerns",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.toFollows("concerns"))
          }, [
            vue.createElementVNode("view", { class: "num" }, vue.toDisplayString(this.user.concerns), 1),
            vue.createElementVNode("text", null, "\u5173\u6CE8")
          ]),
          vue.createElementVNode("view", {
            class: "follows",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.toFollows("follows"))
          }, [
            vue.createElementVNode("view", { class: "num" }, vue.toDisplayString(this.user.follows), 1),
            vue.createElementVNode("text", null, "\u7C89\u4E1D")
          ])
        ]),
        vue.createElementVNode("view", { class: "bottom" }, [
          vue.createElementVNode("view", {
            class: "posts",
            onClick: _cache[5] || (_cache[5] = ($event) => $options.toMyPost("myPost"))
          }, [
            vue.createElementVNode("image", { src: "/static/images/personal/posts.png" }),
            vue.createElementVNode("text", null, "\u6211\u7684\u5E16\u5B50")
          ]),
          vue.createElementVNode("view", {
            class: "viewHistory",
            onClick: _cache[6] || (_cache[6] = ($event) => $options.toHistory("view"))
          }, [
            vue.createElementVNode("image", { src: "/static/images/personal/viewHistory.png" }),
            vue.createElementVNode("text", null, "\u6D4F\u89C8\u5386\u53F2")
          ]),
          vue.createElementVNode("view", {
            class: "helpHistory",
            onClick: _cache[7] || (_cache[7] = ($event) => $options.toHistory("help"))
          }, [
            vue.createElementVNode("image", { src: "/static/images/personal/helpHistory.png" }),
            vue.createElementVNode("text", null, "\u5E2E\u52A9\u5386\u53F2")
          ]),
          vue.createElementVNode("view", {
            class: "collects",
            onClick: _cache[8] || (_cache[8] = ($event) => $options.toMyPost("collect"))
          }, [
            vue.createElementVNode("image", { src: "/static/images/personal/collects.png" }),
            vue.createElementVNode("text", null, "\u6211\u7684\u6536\u85CF")
          ])
        ])
      ]),
      vue.createCommentVNode(" \u5E95\u90E8 "),
      vue.createElementVNode("view", { class: "bottom" }, [
        vue.createElementVNode("view", {
          class: "item",
          onClick: _cache[9] || (_cache[9] = (...args) => $options.toWarning && $options.toWarning(...args))
        }, [
          vue.createElementVNode("view", { class: "left" }, [
            vue.createElementVNode("image", {
              class: "warning",
              src: "/static/images/personal/warning.png"
            }),
            vue.createElementVNode("view", { class: "text" }, "\u4E3E\u62A5\u7ED3\u679C")
          ]),
          vue.createVNode(_component_uni_icons, {
            type: "forward",
            size: "30",
            color: "#b9b9b9"
          })
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("view", { class: "left" }, [
            vue.createElementVNode("image", {
              class: "warning",
              src: "/static/images/personal/associate.png"
            }),
            vue.createElementVNode("view", { class: "text" }, "\u8054\u7CFB\u6211\u4EEC")
          ]),
          vue.createVNode(_component_uni_icons, {
            type: "forward",
            size: "28",
            color: "#b9b9b9"
          })
        ])
      ])
    ]);
  }
  const PagesTabbarPersonalPersonal = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/tabbar/personal/personal.vue"]]);
  class websocketUtil {
    constructor(url, time) {
      this.is_open_socket = false;
      this.url = url;
      this.data = null;
      this.timeout = time;
      this.heartbeatInterval = null;
      this.reconnectTimeOut = null;
      try {
        return this.connectSocketInit();
      } catch (e) {
        formatAppLog("log", "at api/websocket.js:14", "catch");
        this.is_open_socket = false;
        this.reconnect();
      }
    }
    connectSocketInit() {
      this.socketTask = uni.connectSocket({
        url: this.url,
        success: () => {
          formatAppLog("log", "at api/websocket.js:25", "\u6B63\u51C6\u5907\u5EFA\u7ACBwebsocket\u4E2D...");
          return this.socketTask;
        }
      });
      this.socketTask.onOpen((res) => {
        formatAppLog("log", "at api/websocket.js:31", "WebSocket\u8FDE\u63A5\u6B63\u5E38\uFF01");
        clearTimeout(this.reconnectTimeOut);
        clearTimeout(this.heartbeatInterval);
        this.is_open_socket = true;
        this.start();
        this.socketTask.onMessage((res2) => {
          formatAppLog("log", "at api/websocket.js:38", res2.data);
        });
      });
      this.socketTask.onClose(() => {
        formatAppLog("log", "at api/websocket.js:49", "\u5DF2\u7ECF\u88AB\u5173\u95ED\u4E86");
        if (this.is_open_socket == true) {
          this.reconnect();
        }
      });
    }
    send(value) {
      this.socketTask.send({
        data: value,
        async success() {
          formatAppLog("log", "at api/websocket.js:62", "\u6D88\u606F\u53D1\u9001\u6210\u529F");
        }
      });
    }
    start() {
      this.heartbeatInterval = setTimeout(() => {
        this.data = { value: "\u4F20\u8F93\u5185\u5BB9", method: "\u65B9\u6CD5\u540D\u79F0" };
        formatAppLog("log", "at api/websocket.js:70", this.data);
        this.send(JSON.stringify(this.data));
      }, this.timeout);
    }
    reconnect() {
      clearInterval(this.heartbeatInterval);
      if (!this.is_open_socket) {
        this.reconnectTimeOut = setTimeout(() => {
          this.connectSocketInit();
        }, 3e3);
      }
    }
    getMessage(callback) {
      this.socketTask.onMessage((res) => {
        return callback(res);
      });
    }
    close() {
      if (!this.is_open_socket) {
        return;
      }
      this.socketTask.close({
        success: () => {
          this.is_open_socket = false;
          formatAppLog("log", "at api/websocket.js:99", "\u8FDE\u63A5\u5173\u95ED\u6210\u529F");
        }
      });
    }
  }
  const _sfc_main$i = {
    data() {
      return {
        user: {},
        chatUserList: []
      };
    },
    methods: {
      toMsgDetail(item) {
        uni.navigateTo({
          url: "/pages/msgDetail/msgDetail?user=" + JSON.stringify(item)
        });
      }
    },
    onLoad() {
      this.user = JSON.parse(uni.getStorageSync("user"));
      formatAppLog("log", "at pages/tabbar/message/message.vue:59", this.$websocket);
      if (!this.$websocket || this.$websocket && !this.$websocket.is_open_socket) {
        formatAppLog("log", "at pages/tabbar/message/message.vue:61", "\u8FDE\u63A5\u524D\u72B6\u6001\uFF1A", this.$websocket);
        this.$setWebsocket(this.user.userId);
        formatAppLog("log", "at pages/tabbar/message/message.vue:63", "\u8FDE\u63A5\u540E\u72B6\u6001\uFF1A", this.$websocket);
      }
      qryChatList(this.user.userId).then((res) => {
        this.chatUserList = res.data;
      });
    },
    onShow() {
      qryChatList(this.user.userId).then((res) => {
        this.chatUserList = res.data;
      });
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(' <view class="topContainer">\r\n      <view class="itemBox">\r\n        <view class="left">\r\n          <image class="img" src="../../../static/images/message/sysMsg.png"></image>\r\n        </view>\r\n        <view class="right">\r\n          <view class="box">\r\n            <view class="nickname">\u7CFB\u7EDF\u6D88\u606F</view>\r\n            <view class="content">\u5185\u5BB9\u3002\u3002\u3002\u4E00\u4E9B\u518545665555555555555555555555555555555555555555555555</view>\r\n          </view>\r\n          <view class="time">05-02 17:43</view>\r\n        </view>\r\n      </view>\r\n    </view> '),
      vue.createElementVNode("view", { class: "hr" }),
      vue.createElementVNode("view", { class: "bottomContainer" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.chatUserList, (item) => {
          var _a, _b, _c;
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "itemBox",
            onClick: ($event) => $options.toMsgDetail(item)
          }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("image", {
                class: "img",
                src: item.avatar
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("view", { class: "box" }, [
                vue.createElementVNode("view", { class: "nickname" }, vue.toDisplayString(item.nickname), 1),
                vue.createElementVNode("view", { class: "content" }, vue.toDisplayString(((_a = item.lastMessage) == null ? void 0 : _a.content) || ""), 1)
              ]),
              vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(((_c = (_b = item.lastMessage) == null ? void 0 : _b.createDate) == null ? void 0 : _c.slice(5)) || ""), 1)
            ])
          ], 8, ["onClick"]);
        }), 256))
      ])
    ]);
  }
  const PagesTabbarMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/tabbar/message/message.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        user: {},
        userList: [],
        pageReq: {
          userId: 0,
          type: "follows",
          pageSize: 10,
          pageNum: 1
        }
      };
    },
    methods: {
      toDetail(userId) {
        formatAppLog("log", "at pages/follows/follows.vue:40", "123");
        uni.navigateTo({
          url: "/pages/userHome/userHome?userId=" + userId
        });
      },
      toFollow(flag, userId, index) {
        if (flag) {
          addFollow({
            userId,
            followId: this.user.userId
          }).then((res) => {
            formatAppLog("log", "at pages/follows/follows.vue:51", res);
            this.userList[index]["isFollow"] = true;
            this.user.concerns++;
            uni.setStorageSync("user", JSON.stringify(this.user));
          });
        } else {
          removeFollow({
            userId,
            followId: this.user.userId
          }).then((res) => {
            formatAppLog("log", "at pages/follows/follows.vue:61", res);
            this.userList[index]["isFollow"] = false;
            this.user.concerns--;
            uni.setStorageSync("user", JSON.stringify(this.user));
          });
        }
      }
    },
    onLoad(option) {
      this.user = JSON.parse(uni.getStorageSync("user"));
      this.pageReq.type = option.type;
      this.pageReq.userId = option.userId;
      if (option.type === "follows") {
        uni.setNavigationBarTitle({
          title: "\u7C89\u4E1D\u5217\u8868"
        });
      } else {
        uni.setNavigationBarTitle({
          title: "\u5173\u6CE8\u5217\u8868"
        });
      }
      qryConcernsOrFollowsPage(this.pageReq).then((res) => {
        this.userList = res.data.records;
      });
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.userList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "itemBox",
          key: item.userId
        }, [
          vue.createElementVNode("view", {
            class: "left",
            onClick: ($event) => $options.toDetail(item.userId)
          }, [
            vue.createElementVNode("image", {
              class: "avatar",
              src: item.avatar
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "box" }, [
              vue.createElementVNode("view", { class: "nickname" }, vue.toDisplayString(item.nickname), 1),
              vue.createElementVNode("view", { class: "follows" }, "\u7C89\u4E1D\u6570:" + vue.toDisplayString(item.follows), 1)
            ])
          ], 8, ["onClick"]),
          vue.createElementVNode("view", { class: "right" }, [
            vue.withDirectives(vue.createElementVNode("view", {
              class: "cancel",
              onClick: ($event) => $options.toFollow(false, item.userId, index)
            }, " \u221A \u5DF2\u5173\u6CE8 ", 8, ["onClick"]), [
              [vue.vShow, item.isFollow]
            ]),
            vue.withDirectives(vue.createElementVNode("view", {
              class: "focus",
              onClick: ($event) => $options.toFollow(true, item.userId, index)
            }, " + \u5173\u6CE8 ", 8, ["onClick"]), [
              [vue.vShow, !item.isFollow]
            ])
          ])
        ]);
      }), 128))
    ]);
  }
  const PagesFollowsFollows = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/follows/follows.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        type: "view",
        user: {},
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          userId: 0
        },
        itemList: [],
        isLoading: false,
        hasMore: true
      };
    },
    methods: {
      toReport(item) {
        if (item.resolved != "00R" || item.assignedScores != 0) {
          return;
        }
        uni.showActionSheet({
          itemList: ["\u7533\u8BC9"],
          success: (res) => {
            uni.showModal({
              title: "\u60A8\u786E\u5B9A\u7533\u8BC9\u5417?",
              success: (res2) => {
                if (res2.confirm) {
                  addWarning({
                    positiveUserId: this.user.userId,
                    passiveUserId: item.userId,
                    commentPostId: item.postId,
                    type: "3"
                  }).then((res3) => {
                    uni.showToast({
                      title: "\u8BF7\u7B49\u5F85\u5BA1\u6838!",
                      icon: "success"
                    });
                  }).catch((err) => {
                    uni.showToast({
                      title: "\u8BF7\u52FF\u91CD\u590D\u7533\u8BC9!",
                      icon: "none"
                    });
                  });
                } else if (res2.cancel) {
                  formatAppLog("log", "at pages/history/history.vue:85", "\u7528\u6237\u70B9\u51FB\u53D6\u6D882");
                }
              }
            });
          }
        });
      },
      toDetail(item) {
        item.images = JSON.parse(item.images);
        let info = JSON.stringify(item);
        let url = "/pages/detail/detail?info=" + info;
        uni.navigateTo({
          url
        });
      }
    },
    onLoad(option) {
      this.type = option.type;
      this.user = JSON.parse(uni.getStorageSync("user"));
      this.pageReq.userId = this.user.userId;
      formatAppLog("log", "at pages/history/history.vue:105", "123");
      if (option.type === "view") {
        uni.setNavigationBarTitle({
          title: "\u6D4F\u89C8\u5386\u53F2"
        });
        qryHistoryPage(this.pageReq).then((res) => {
          this.itemList = res.data.records;
          if (res.data.records.length < 10) {
            this.hasMore = false;
          }
        });
      } else {
        uni.setNavigationBarTitle({
          title: "\u5E2E\u52A9\u5386\u53F2"
        });
        qryHelpPostPage(this.pageReq).then((res) => {
          this.itemList = res.data.records;
          if (res.data.records.length < 10) {
            this.hasMore = false;
          }
        });
      }
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++;
        this.isLoading = true;
        if (this.type === "view") {
          qryHistoryPage(this.pageReq).then((res) => {
            if (res.data.records.length <= 0) {
              this.hasMore = false;
            } else {
              this.itemList.push(...res.data.records);
            }
          }).catch((err) => {
            this.pageReq.pageNum--;
          }).finally(() => {
            this.isLoading = false;
          });
        } else {
          qryHelpPostPage(this.pageReq).then((res) => {
            if (res.data.records.length <= 0) {
              this.hasMore = false;
            } else {
              this.itemList.push(...res.data.records);
            }
          }).catch((err) => {
            this.pageReq.pageNum--;
          }).finally(() => {
            this.isLoading = false;
          });
        }
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.itemList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "itemBox",
          onClick: ($event) => $options.toDetail(item),
          key: item.postId
        }, [
          vue.createElementVNode("view", { class: "topBox" }, [
            vue.createElementVNode("view", { class: "content" }, vue.toDisplayString(item.content), 1)
          ]),
          vue.createElementVNode("view", {
            class: "bottomBox",
            onLongpress: ($event) => $options.toReport(item)
          }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("image", {
                class: "avatar",
                src: item.avatar
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "nickname" }, vue.toDisplayString(item.nickname), 1)
            ]),
            this.type === "view" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "right"
            }, [
              vue.createElementVNode("view", { class: "tip" }, "\u6D4F\u89C8\u65F6\u95F4\uFF1A"),
              vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(item.updateDate ? item.updateDate : item.createDate), 1)
            ])) : item.resolved == "00R" && item.assignedScores != 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "helpRightBox"
            }, [
              vue.createElementVNode("view", { class: "text" }, "\u5DF2\u83B7\u5F97\u79EF\u5206\uFF1A"),
              vue.createElementVNode("view", { class: "scores" }, vue.toDisplayString(item.assignedScores), 1)
            ])) : item.resolved == "00R" && item.assignedScores == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "helpFailBox"
            }, [
              vue.createElementVNode("view", { class: "text" }, "\u672A\u83B7\u5F97\u79EF\u5206")
            ])) : item.resolved == "00U" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 3,
              class: "helpUBox"
            }, [
              vue.createElementVNode("view", { class: "text" }, "\u5E16\u5B50\u672A\u7ED3\u675F")
            ])) : vue.createCommentVNode("v-if", true)
          ], 40, ["onLongpress"])
        ], 8, ["onClick"]);
      }), 128)),
      this.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "bottom"
      }, [
        vue.createElementVNode("image", {
          class: "loading",
          src: "/static/images/rank/loading.png"
        })
      ])) : vue.createCommentVNode("v-if", true),
      !this.isLoading && !this.hasMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "bottom"
      }, [
        vue.createElementVNode("view", { style: { "color": "#b2a796" } }, "\u6CA1\u6709\u66F4\u591A\u8BB0\u5F55\u4E86~~")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesHistoryHistory = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/history/history.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        type: "myPost",
        user: {},
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          sortedType: "myself",
          userId: 0
        },
        itemList: [],
        isLoading: false,
        hasMore: true
      };
    },
    methods: {
      updatePostStatus(item, index) {
        uni.showActionSheet({
          itemList: ["\u5220\u9664\u8BE5\u5E16\u5B50"],
          success: (res) => {
            uni.showModal({
              title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417?",
              success: (res2) => {
                if (res2.confirm) {
                  updatePost({
                    postId: item.postId,
                    status: "00X"
                  }).then((res3) => {
                    uni.showToast({
                      title: res3.msg,
                      icon: "success"
                    });
                    this.itemList = this.itemList.filter((post) => post.postId != item.postId);
                  });
                } else if (res2.cancel) {
                  formatAppLog("log", "at pages/myPost/myPost.vue:95", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
                }
              }
            });
          }
        });
      },
      addCollect(item, index) {
        addCollect({
          userId: this.user.userId,
          postId: item.postId
        }).then((res) => {
          this.itemList[index]["isCollect"] = !item.isCollect;
        });
      },
      toDetail(item) {
        if (!!item.images && typeof item.images == "string") {
          item.images = JSON.parse(item.images);
        }
        let info = JSON.stringify(item);
        let url = "/pages/detail/detail?info=" + info;
        uni.navigateTo({
          url
        });
      }
    },
    onLoad(option) {
      this.type = option.type;
      this.user = JSON.parse(uni.getStorageSync("user"));
      this.pageReq.userId = this.user.userId;
      if (option.type === "myPost") {
        uni.setNavigationBarTitle({
          title: "\u6211\u7684\u5E16\u5B50"
        });
        qryPostPage(this.pageReq).then((res) => {
          this.itemList = res.data.records;
          if (res.data.records.length < 10) {
            this.hasMore = false;
          }
        });
      } else {
        uni.setNavigationBarTitle({
          title: "\u6211\u7684\u6536\u85CF"
        });
        qryCollectPostPage(this.pageReq).then((res) => {
          this.itemList = res.data.records;
          if (res.data.records.length < 10) {
            this.hasMore = false;
          }
        });
      }
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++;
        this.isLoading = true;
        if (this.type === "myPost") {
          qryPostPage(this.pageReq).then((res) => {
            if (res.data.records.length <= 0) {
              this.hasMore = false;
            } else {
              this.itemList.push(...res.data.records);
            }
          }).catch((err) => {
            this.pageReq.pageNum--;
          }).finally(() => {
            this.isLoading = false;
          });
        } else {
          qryCollectPostPage(this.pageReq).then((res) => {
            if (res.data.records.length <= 0) {
              this.hasMore = false;
            } else {
              this.itemList.push(...res.data.records);
            }
          }).catch((err) => {
            this.pageReq.pageNum--;
          }).finally(() => {
            this.isLoading = false;
          });
        }
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.itemList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "itemBox",
          onLongpress: ($event) => $options.updatePostStatus(item, index),
          onClick: ($event) => $options.toDetail(item),
          key: item.postId
        }, [
          vue.createElementVNode("view", { class: "topBox" }, [
            vue.createElementVNode("view", { class: "content" }, vue.toDisplayString(item.content), 1),
            this.type === "myPost" && item.resolved === "00R" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "resolveBox"
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "checkbox",
                color: "#60a653",
                size: "25"
              }),
              vue.createElementVNode("view", { class: "resolve" }, " \u5DF2\u89E3\u51B3 ")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "bottomBox" }, [
            this.type === "myPost" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "left"
            }, [
              vue.createElementVNode("view", { class: "tip" }, "\u53D1\u5E16\u65F6\u95F4\uFF1A"),
              vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(item.createDate), 1)
            ])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "leftBox"
            }, [
              vue.createElementVNode("image", {
                class: "avatar",
                src: item.avatar
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "infoBox" }, [
                vue.createElementVNode("view", { class: "nickname" }, vue.toDisplayString(item.nickname), 1),
                vue.createElementVNode("view", { class: "box" }, [
                  vue.createElementVNode("view", { class: "tip" }, "\u53D1\u5E16\u65F6\u95F4\uFF1A"),
                  vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(item.createDate), 1)
                ])
              ])
            ])),
            this.type === "myPost" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "right"
            }, [
              vue.createElementVNode("view", { class: "viewsBox" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "eye-filled",
                  size: "15",
                  color: "#a8a8a8"
                }),
                vue.createElementVNode("view", { class: "views" }, vue.toDisplayString(item.views), 1)
              ]),
              vue.createElementVNode("view", { class: "collectsBox" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "star-filled",
                  size: "15",
                  color: "#a8a8a8"
                }),
                vue.createElementVNode("view", { class: "collects" }, vue.toDisplayString(item.collects), 1)
              ])
            ])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 3,
              class: "rightBox"
            }, [
              vue.createElementVNode("view", {
                class: "box",
                onClick: vue.withModifiers(($event) => $options.addCollect(item, index), ["stop"])
              }, [
                !item.isCollect ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  type: "star-filled",
                  size: "30",
                  color: "#ccc"
                })) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 1,
                  type: "star-filled",
                  size: "30",
                  color: "#e78282"
                }))
              ], 8, ["onClick"])
            ]))
          ])
        ], 40, ["onLongpress", "onClick"]);
      }), 128)),
      this.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "bottom"
      }, [
        vue.createElementVNode("image", {
          class: "loading",
          src: "/static/images/rank/loading.png"
        })
      ])) : vue.createCommentVNode("v-if", true),
      !this.isLoading && !this.hasMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "bottom"
      }, [
        vue.createElementVNode("view", { style: { "color": "#b2a796" } }, "\u6CA1\u6709\u66F4\u591A\u8BB0\u5F55\u4E86~~")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesMyPostMyPost = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/myPost/myPost.vue"]]);
  const _sfc_main$e = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(["uni-section-header__decoration", $props.type])
        }, null, 2)) : vue.renderSlot(_ctx.$slots, "decoration", { key: 1 }, void 0, true),
        vue.createElementVNode("view", { class: "uni-section-header__content" }, [
          vue.createElementVNode("text", {
            style: vue.normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
            class: vue.normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
          }, vue.toDisplayString($props.title), 7),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            style: vue.normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
            class: "uni-section-header__content-sub"
          }, vue.toDisplayString($props.subTitle), 5)) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "uni-section-header__slot-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ]),
      vue.createElementVNode("view", {
        class: "uni-section-content",
        style: vue.normalizeStyle({ padding: $options._padding })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4)
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-637fd36b"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        userList: [],
        user: {},
        postId: 0,
        comsumedScores: 0,
        scores: 0,
        postUserId: 0
      };
    },
    methods: {
      assignScores(item, index) {
        if (this.validScores <= 0 && !item.assignedScores) {
          uni.showToast({
            title: "\u5269\u4F59\u79EF\u5206\u4E0D\u8DB3!",
            icon: "none"
          });
          return;
        }
        let content = item.assignedScores || "0";
        uni.showModal({
          title: "\u79EF\u5206\u5269\u4F59: " + this.validScores,
          editable: true,
          content: item.assignedScores || "",
          confirmText: "\u5206\u914D",
          confirmColor: "#4b883d",
          placeholderText: "\u8BF7\u8F93\u5165\u6B63\u6574\u6570\u79EF\u5206",
          success: (res) => {
            if (res.confirm) {
              if (/^\d+$/.test(res.content)) {
                let preScore = parseInt(content);
                let score = parseInt(res.content);
                if (score > this.validScores && !item.assignedScores) {
                  uni.showToast({
                    title: "\u5269\u4F59\u79EF\u5206\u4E0D\u8DB3!",
                    icon: "none"
                  });
                  return;
                }
                this.comsumedScores += score - preScore;
                this.userList[index]["assignedScores"] = res.content;
              }
            }
          }
        });
      }
    },
    computed: {
      validScores() {
        return this.scores - this.comsumedScores;
      }
    },
    onLoad(option) {
      this.postId = option.postId;
      this.postUserId = option.userId;
      this.user = JSON.parse(uni.getStorageSync("user"));
      qryHelpUserList({
        postId: this.postId,
        userId: this.user.userId
      }).then((res) => {
        this.userList = res.data;
      });
      qryValidScores(this.postId).then((res) => {
        this.scores = res.data;
      });
    },
    onNavigationBarButtonTap: function(e) {
      if (this.validScores != 0) {
        uni.showToast({
          title: "\u60A8\u8FD8\u6709\u79EF\u5206\u672A\u5206\u914D!",
          icon: "none"
        });
        return;
      }
      let userList = this.userList.map((item) => {
        if (!!item.assignedScores && item.assignedScores != "0") {
          item.assignedScores = parseInt(item.assignedScores);
          return item;
        }
      }).filter((item) => !!item);
      formatAppLog("log", "at pages/scoresAssgin/scoresAssgin.vue:116", "\u5DF2\u89E3\u51B3");
      resolvePost(this.postId).then((res) => {
        formatAppLog("log", "at pages/scoresAssgin/scoresAssgin.vue:118", "\u5DF2\u89E3\u51B3");
      });
      updateUserScores({
        userExtList: userList,
        postId: this.postId,
        userId: this.postUserId
      }).then((res) => {
        uni.navigateBack({ delta: 1 });
      });
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$2);
    return vue.openBlock(), vue.createBlock(_component_uni_section, {
      class: "mb-10",
      title: "\u8BF7\u9009\u62E9\u7528\u6237",
      type: "line"
    }, {
      right: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: "validScores",
          style: { "color": "#939393" }
        }, [
          vue.createTextVNode(" \u5F53\u524D\u5269\u4F59\u53EF\u5206\u914D\u79EF\u5206: "),
          vue.createElementVNode("text", {
            class: "scores",
            style: { "color": "#467556" }
          }, vue.toDisplayString(this.validScores), 1)
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "container" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.userList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "itemBox",
              onClick: ($event) => $options.assignScores(item, index),
              key: item.userId
            }, [
              vue.createElementVNode("view", { class: "left" }, [
                vue.createElementVNode("image", {
                  class: "avatar",
                  src: item.avatar
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "box" }, [
                  vue.createElementVNode("view", { class: "nickname" }, vue.toDisplayString(item.nickname), 1),
                  vue.createElementVNode("view", { class: "follows" }, "\u7C89\u4E1D\u6570:" + vue.toDisplayString(item.follows), 1)
                ])
              ]),
              vue.createElementVNode("view", { class: "right" }, [
                !!item.assignedScores && item.assignedScores != "0" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "box"
                }, [
                  vue.createElementVNode("view", { class: "tip" }, "\u5DF2\u5206\u914D: "),
                  vue.createElementVNode("view", { class: "assignedScores" }, vue.toDisplayString(item.assignedScores), 1)
                ])) : vue.createCommentVNode("v-if", true)
              ])
            ], 8, ["onClick"]);
          }), 128))
        ])
      ]),
      _: 1
    });
  }
  const PagesScoresAssginScoresAssgin = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/scoresAssgin/scoresAssgin.vue"]]);
  function getRankPage(data) {
    return request("/user/getRankPage", "POST", data);
  }
  function getMyRank(data) {
    return request("/user/getMyRank", "POST", data);
  }
  const _sfc_main$c = {
    data() {
      return {
        userList: [{
          avatar: "",
          nickname: "\u6682\u65E0"
        }, {
          avatar: "",
          nickname: "\u6682\u65E0"
        }, {
          avatar: "",
          nickname: "\u6682\u65E0"
        }],
        isLoading: false,
        activeFlag: "Current",
        user: {},
        hasMore: true,
        pageReqData: {
          pageSize: 10,
          pageNum: 1,
          orderType: this.activeFlag || "Current"
        }
      };
    },
    onReachBottom() {
      if (this.hasMore) {
        this.isLoading = true;
        this.pageReqData.pageNum++;
        getRankPage(this.pageReqData).then((res) => {
          if (res.data.records.length <= 0) {
            this.hasMore = false;
          } else {
            formatAppLog("log", "at pages/tabbar/rank/rank.vue:115", "\u73B0\u5728\u7684...res.data.records", ...res.data.records);
            for (let item of res.data.records) {
              formatAppLog("log", "at pages/tabbar/rank/rank.vue:117", item);
              this.userList.push(item);
            }
            formatAppLog("log", "at pages/tabbar/rank/rank.vue:121", "\u73B0\u5728\u7684this.userList", this.userList);
          }
        }).catch((err) => {
          this.pageReqData.pageNum--;
        }).finally(() => {
          this.isLoading = false;
        });
      }
    },
    onLoad() {
      getRankPage(this.pageReqData).then((res) => {
        this.userList = res.data.records;
      });
      let user = JSON.parse(uni.getStorageSync("user") || "{}");
      getMyRank({ userId: user.userId, orderType: "Current" }).then((res) => {
        this.user = Object.assign(res.data, user);
        uni.setStorageSync("user", JSON.stringify(this.user));
      });
    },
    methods: {
      changeActive(po) {
        if (this.activeFlag === po) {
          return;
        }
        this.activeFlag = po;
        this.pageReqData.orderType = this.activeFlag;
        this.pageReqData.pageNum = 1;
        getRankPage(this.pageReqData).then((res) => {
          this.userList = res.data.records;
          if (res.data.records.length <= 0) {
            this.hasMore = false;
          } else {
            this.hasMore = true;
          }
        });
        let user = JSON.parse(uni.getStorageSync("user") || "{}");
        getMyRank({ userId: user.userId, orderType: this.activeFlag }).then((res) => {
          this.user = Object.assign(res.data, this.user);
          uni.setStorageSync("user", JSON.stringify(this.user));
        });
      }
    },
    computed: {
      leftClass() {
        return {
          active: this.activeFlag === "Current",
          left: true
        };
      },
      rightClass() {
        return {
          active: this.activeFlag === "Total",
          right: true
        };
      },
      otherUserList() {
        return this.userList.slice(3, this.userList.length);
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u6708\u79EF\u5206/\u603B\u79EF\u5206\u9009\u62E9\u533A\u57DF "),
      vue.createElementVNode("view", { class: "choose" }, [
        vue.createElementVNode("view", {
          class: vue.normalizeClass($options.leftClass),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.changeActive("Current"))
        }, "\u73B0\u79EF\u5206", 2),
        vue.createElementVNode("view", {
          class: vue.normalizeClass($options.rightClass),
          onClick: _cache[1] || (_cache[1] = ($event) => $options.changeActive("Total"))
        }, "\u603B\u79EF\u5206", 2)
      ]),
      vue.createCommentVNode(" \u524D\u4E09\u540D\u533A\u57DF "),
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode("view", { class: "secondArea" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: this.userList[1].avatar
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(this.userList[1].nickname), 1),
          vue.createElementVNode("view", { class: "medalArea" }, [
            vue.createElementVNode("image", {
              class: "medal",
              src: "/static/images/rank/second.png"
            }),
            vue.createElementVNode("text", null, vue.toDisplayString(this.activeFlag === "Current" ? this.userList[1].scoresCurrent : this.userList[1].scoresTotal), 1)
          ])
        ]),
        vue.createElementVNode("view", { class: "firstArea" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: this.userList[0].avatar
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(this.userList[0].nickname), 1),
          vue.createElementVNode("view", { class: "medalArea" }, [
            vue.createElementVNode("image", {
              class: "medal",
              src: "/static/images/rank/first.png"
            }),
            vue.createElementVNode("text", null, vue.toDisplayString(this.activeFlag === "Current" ? this.userList[0].scoresCurrent : this.userList[0].scoresTotal), 1)
          ])
        ]),
        vue.createElementVNode("view", { class: "thirdArea" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: this.userList[2].avatar
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(this.userList[2].nickname), 1),
          vue.createElementVNode("view", { class: "medalArea" }, [
            vue.createElementVNode("image", {
              class: "medal",
              src: "/static/images/rank/third.png"
            }),
            vue.createElementVNode("text", null, vue.toDisplayString(this.activeFlag === "Current" ? this.userList[2].scoresCurrent : this.userList[2].scoresTotal), 1)
          ])
        ])
      ]),
      vue.createCommentVNode(" \u6211\u7684\u533A\u57DF "),
      vue.createElementVNode("view", { class: "meArea" }, [
        vue.createElementVNode("view", { class: "begin" }, [
          vue.createElementVNode("view", null, "\u6211\u7684"),
          vue.createElementVNode("view", null, "\u8D21\u732E")
        ]),
        vue.createElementVNode("view", { class: "me" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: this.user.avatar
          }, null, 8, ["src"]),
          vue.createElementVNode("text", null, vue.toDisplayString(this.user.nickname), 1)
        ]),
        vue.createElementVNode("view", { class: "scores" }, [
          vue.createElementVNode("text", { class: "title" }, vue.toDisplayString(this.activeFlag === "Current" ? "\u5F53\u524D\u79EF\u5206\u503C" : "\u7D2F\u8BA1\u79EF\u5206\u503C"), 1),
          vue.createElementVNode("text", { class: "sum" }, vue.toDisplayString(this.activeFlag === "Current" ? this.user.scoresCurrent : this.user.scoresTotal), 1)
        ]),
        vue.createElementVNode("view", { class: "rank" }, [
          vue.createElementVNode("image", {
            class: "flag",
            src: "/static/images/rank/rank.png"
          }),
          vue.createElementVNode("view", { class: "name" }, [
            vue.createTextVNode(" \u7B2C"),
            vue.createElementVNode("text", { class: "rank" }, vue.toDisplayString(this.user.rank), 1),
            vue.createTextVNode("\u540D ")
          ])
        ])
      ]),
      vue.createCommentVNode(" \u5176\u4ED6\u7528\u6237\u533A\u57DF "),
      vue.createElementVNode("view", { class: "otherArea" }, [
        vue.createElementVNode("view", { class: "title" }, [
          vue.createElementVNode("view", null, "\u7528\u6237\u6635\u79F0"),
          vue.createElementVNode("view", null, vue.toDisplayString(this.activeFlag === "Current" ? "\u5F53\u524D\u79EF\u5206\u503C" : "\u7D2F\u8BA1\u79EF\u5206\u503C"), 1),
          vue.createElementVNode("view", null, "\u6392\u540D")
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.otherUserList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.nickname), 1),
            vue.createElementVNode("view", { class: "scores" }, vue.toDisplayString(this.activeFlag === "Current" ? item.scoresCurrent : item.scoresTotal), 1),
            vue.createElementVNode("view", { class: "rank" }, vue.toDisplayString(index + 3), 1)
          ]);
        }), 256)),
        this.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "bottom"
        }, [
          vue.createElementVNode("image", {
            class: "loading",
            src: "/static/images/rank/loading.png"
          })
        ])) : vue.createCommentVNode("v-if", true),
        !this.isLoading && !this.hasMore ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "bottom"
        }, [
          vue.createElementVNode("view", { style: { "color": "#b2a796" } }, "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86~~")
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesTabbarRankRank = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/tabbar/rank/rank.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        searchContent: "",
        historyList: [],
        user: {},
        isInput: true,
        postList: [],
        leftPostList: [],
        rightPostList: [],
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          sortedType: "time",
          content: ""
        },
        isLoading: false,
        hasMore: true
      };
    },
    methods: {
      toDetail(item) {
        let info = JSON.stringify(item);
        let url = "/pages/detail/detail?info=" + info;
        uni.navigateTo({
          url
        });
      },
      deleteAll() {
        uni.showModal({
          title: "\u4F60\u786E\u5B9A\u8981\u5168\u90E8\u6E05\u9664\u5417?",
          success: (res) => {
            if (res.confirm) {
              this.historyList = [];
              uni.removeStorageSync(this.user.userId + "history");
            }
          }
        });
      },
      focus() {
        this.isInput = true;
      },
      search(res) {
        this.isInput = false;
        res.value = res.value.trim();
        if (!this.searchContent) {
          this.searchContent = res.value;
        }
        if (!!res.value) {
          this.historyList = this.historyList.filter((item) => item !== res.value);
          this.historyList.unshift(res.value);
        }
        if (this.historyList.length > 15) {
          this.historyList.splice(15);
        }
        uni.setStorageSync(this.user.userId + "history", JSON.stringify(this.historyList));
        this.pageReq.pageNum = 1;
        this.pageReq.content = res.value;
        this.leftPostList = [];
        this.rightPostList = [];
        qryPostPageByContent(this.pageReq).then((res2) => {
          let records = res2.data.records;
          if (records.length <= 0) {
            this.hasMore = false;
          }
          for (let i2 = 0; i2 < records.length; i2++) {
            if (records[i2]["images"] && records[i2]["images"].length > 0) {
              records[i2]["images"] = JSON.parse(records[i2]["images"]);
            }
            if (i2 % 2 === 0) {
              this.leftPostList.push(records[i2]);
            } else {
              this.rightPostList.push(records[i2]);
            }
          }
          this.postList = records;
        });
      },
      toHome() {
        if (this.isInput) {
          uni.navigateBack({ delta: 1 });
        } else {
          this.isInput = true;
        }
      }
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++;
        this.isLoading = true;
        qryPostPageByContent(this.pageReq).then((res) => {
          if (res.data.records.length <= 0) {
            this.hasMore = false;
          } else {
            let records = res.data.records;
            for (let i2 = 0; i2 < records.length; i2++) {
              if (records[i2]["images"] && records[i2]["images"].length > 0) {
                records[i2]["images"] = JSON.parse(records[i2]["images"]);
              }
              if (i2 % 2 === 0) {
                this.leftPostList.push(records[i2]);
              } else {
                this.rightPostList.push(records[i2]);
              }
            }
          }
        }).catch((err) => {
          this.pageReq.pageNum--;
        }).finally(() => {
          this.isLoading = false;
        });
      }
    },
    onLoad() {
      this.user = JSON.parse(uni.getStorageSync("user") || "{}");
      if (!this.user.userId) {
        uni.showToast({
          title: "\u8BF7\u5148\u767B\u5F55!",
          icon: "none"
        });
        uni.reLaunch({
          url: "/pages/login/login"
        });
      }
      this.historyList = JSON.parse(uni.getStorageSync(this.user.userId + "history") || "[]");
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$2);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "searchBox" }, [
        vue.createVNode(_component_uni_search_bar, {
          modelValue: this.searchContent,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => this.searchContent = $event),
          placeholder: "\u8BF7\u8F93\u5165",
          focus: true,
          clearButton: "auto",
          cancelButton: "auto",
          onFocus: $options.focus,
          onConfirm: $options.search,
          onCancel: $options.toHome
        }, null, 8, ["modelValue", "onFocus", "onConfirm", "onCancel"])
      ]),
      vue.withDirectives(vue.createElementVNode("view", { class: "historyBox" }, [
        vue.createVNode(_component_uni_section, {
          class: "mb-10",
          title: "\u5386\u53F2\u8BB0\u5F55",
          type: "line"
        }, {
          right: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "rightBox" }, [
              vue.withDirectives(vue.createVNode(_component_uni_icons, {
                type: "trash",
                size: "20",
                onClick: $options.deleteAll
              }, null, 8, ["onClick"]), [
                [vue.vShow, this.historyList.length > 0]
              ])
            ])
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "historyList" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.historyList, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  onClick: ($event) => $options.search({ value: item }),
                  key: item
                }, vue.toDisplayString(item), 9, ["onClick"]);
              }), 128))
            ])
          ]),
          _: 1
        })
      ], 512), [
        [vue.vShow, this.isInput]
      ]),
      vue.createCommentVNode(" \u5E16\u5B50\u533A\u57DF "),
      vue.withDirectives(vue.createElementVNode("view", { class: "postContainer" }, [
        vue.createElementVNode("view", { class: "left" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.leftPostList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "itemBox",
              onClick: ($event) => $options.toDetail(item)
            }, [
              item.images ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "imgBox"
              }, [
                vue.createElementVNode("image", {
                  class: "img",
                  mode: "widthFix",
                  src: item.images ? item.images[0].url : ""
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "profile" }, vue.toDisplayString(item.content), 1),
              vue.createElementVNode("view", { class: "bottom" }, [
                vue.createElementVNode("view", { class: "person" }, [
                  vue.createElementVNode("image", {
                    class: "avatar",
                    src: item.avatar
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.nickname), 1)
                ]),
                vue.createElementVNode("view", { class: "view" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "eye-filled",
                    size: "18",
                    color: "#999999"
                  }),
                  vue.createElementVNode("text", null, vue.toDisplayString(item.views), 1)
                ])
              ])
            ], 8, ["onClick"]);
          }), 256))
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.rightPostList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "itemBox",
              onClick: ($event) => $options.toDetail(item)
            }, [
              item.images ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "imgBox"
              }, [
                vue.createElementVNode("image", {
                  class: "img",
                  mode: "widthFix",
                  src: item.images ? item.images[0].url : ""
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "profile" }, vue.toDisplayString(item.content), 1),
              vue.createElementVNode("view", { class: "bottom" }, [
                vue.createElementVNode("view", { class: "person" }, [
                  vue.createElementVNode("image", {
                    class: "avatar",
                    src: item.avatar
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.nickname), 1)
                ]),
                vue.createElementVNode("view", { class: "view" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "eye-filled",
                    size: "18",
                    color: "#999999"
                  }),
                  vue.createElementVNode("text", null, vue.toDisplayString(item.views), 1)
                ])
              ])
            ], 8, ["onClick"]);
          }), 256))
        ])
      ], 512), [
        [vue.vShow, !this.isInput]
      ]),
      this.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "bottomBox"
      }, [
        vue.createElementVNode("image", {
          class: "loading",
          src: "/static/images/rank/loading.png"
        })
      ])) : vue.createCommentVNode("v-if", true),
      !this.isLoading && !this.hasMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "bottomBox"
      }, [
        vue.createElementVNode("view", { style: { "color": "#b2a796" } }, "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86~~")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/search/search.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        user: {},
        anotherUser: {},
        pageReq: {
          pageSize: 5,
          pageNum: 1,
          postId: 0,
          sortedType: "myself",
          userId: 0
        },
        postList: [],
        leftPostList: [],
        rightPostList: [],
        isLoading: false,
        hasMore: true,
        maskShow: false,
        popStyles: {},
        isFollow: false,
        isCollect: false
      };
    },
    methods: {
      toDetail(item) {
        let info = JSON.stringify(item);
        let url = "/pages/detail/detail?info=" + info;
        uni.navigateTo({
          url
        });
      }
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++;
        this.isLoading = true;
        qryPostPage(this.pageReq).then((res) => {
          if (res.data.records.length <= 0) {
            this.hasMore = false;
          } else {
            let records = res.data.records;
            for (let i2 = 0; i2 < records.length; i2++) {
              if (records[i2]["images"] && records[i2]["images"].length > 0) {
                records[i2]["images"] = JSON.parse(records[i2]["images"]);
              }
              if (i2 % 2 === 0) {
                this.leftPostList.push(records[i2]);
              } else {
                this.rightPostList.push(records[i2]);
              }
            }
          }
        }).catch((err) => {
          this.pageReq.pageNum--;
        }).finally(() => {
          this.isLoading = false;
        });
      }
    },
    async onLoad(option) {
      this.user = JSON.parse(uni.getStorageSync("user"));
      await getUserInfo(option.userId).then((res) => {
        let data = res.data;
        let list = res.data.email.split("@");
        let str1 = list[0].substring(0, 3);
        let str2 = list[0].substring(list[0].length - 2);
        data.email = str1 + "***" + str2 + "@" + list[1];
        this.anotherUser = data;
        uni.setNavigationBarTitle({
          title: this.anotherUser.nickname + "\u7684\u4E3B\u9875"
        });
      });
      formatAppLog("log", "at pages/userHome/userHome.vue:158", this.anotherUser);
      this.pageReq.pageNum = 1;
      this.pageReq.userId = this.anotherUser.userId;
      qryPostPage(this.pageReq).then((res) => {
        let records = res.data.records;
        if (records.length <= 0) {
          this.hasMore = false;
        }
        for (let i2 = 0; i2 < records.length; i2++) {
          if (records[i2]["images"] && records[i2]["images"].length > 0) {
            records[i2]["images"] = JSON.parse(records[i2]["images"]);
          }
          if (i2 % 2 === 0) {
            this.leftPostList.push(records[i2]);
          } else {
            this.rightPostList.push(records[i2]);
          }
        }
        this.postList = records;
      });
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u9996\u90E8 "),
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode("view", { class: "left" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: this.anotherUser.avatar
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", { class: "username" }, vue.toDisplayString(this.anotherUser.nickname), 1)
            ]),
            vue.createElementVNode("view", { class: "email" }, vue.toDisplayString(this.anotherUser.email), 1)
          ])
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode("view", { class: "honorBox" }, [
              vue.createElementVNode("image", {
                class: "honor",
                src: "/static/images/personal/honor.png"
              }),
              vue.createElementVNode("text", { class: "name" }, vue.toDisplayString(this.anotherUser.titleName), 1)
            ]),
            vue.createElementVNode("view", { class: "num" }, [
              vue.createTextVNode(vue.toDisplayString(this.anotherUser.scoresTotal) + " ", 1),
              vue.createElementVNode("text", { style: { "color": "#191919", "font-weight": "400" } }, "\u79EF\u5206")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "middle" }, [
        vue.createVNode(_component_uni_section, {
          class: "mb-10",
          title: "\u53D1\u5E03\u7684\u5E16\u5B50",
          type: "line",
          titleFontSize: "15px"
        }, {
          default: vue.withCtx(() => [
            vue.createCommentVNode(" \u5E16\u5B50\u533A\u57DF "),
            vue.createElementVNode("view", { class: "postContainer" }, [
              vue.createElementVNode("view", { class: "left" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.leftPostList, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "itemBox",
                    onClick: ($event) => $options.toDetail(item)
                  }, [
                    item.images ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "imgBox"
                    }, [
                      vue.createElementVNode("image", {
                        class: "img",
                        mode: "widthFix",
                        src: item.images ? item.images[0].url : ""
                      }, null, 8, ["src"])
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("text", { class: "profile" }, vue.toDisplayString(item.content), 1),
                    vue.createElementVNode("view", { class: "bottom" }, [
                      vue.createElementVNode("view", { class: "person" }, [
                        vue.createElementVNode("image", {
                          class: "avatar",
                          src: item.avatar
                        }, null, 8, ["src"]),
                        vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.nickname), 1)
                      ]),
                      vue.createElementVNode("view", { class: "view" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "eye-filled",
                          size: "18",
                          color: "#999999"
                        }),
                        vue.createElementVNode("text", null, vue.toDisplayString(item.views), 1)
                      ])
                    ])
                  ], 8, ["onClick"]);
                }), 256))
              ]),
              vue.createElementVNode("view", { class: "right" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.rightPostList, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "itemBox",
                    onClick: ($event) => $options.toDetail(item)
                  }, [
                    item.images ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "imgBox"
                    }, [
                      vue.createElementVNode("image", {
                        class: "img",
                        mode: "widthFix",
                        src: item.images ? item.images[0].url : ""
                      }, null, 8, ["src"])
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("text", { class: "profile" }, vue.toDisplayString(item.content), 1),
                    vue.createElementVNode("view", { class: "bottom" }, [
                      vue.createElementVNode("view", { class: "person" }, [
                        vue.createElementVNode("image", {
                          class: "avatar",
                          src: item.avatar
                        }, null, 8, ["src"]),
                        vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.nickname), 1)
                      ]),
                      vue.createElementVNode("view", { class: "view" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "eye-filled",
                          size: "18",
                          color: "#999999"
                        }),
                        vue.createElementVNode("text", null, vue.toDisplayString(item.views), 1)
                      ])
                    ])
                  ], 8, ["onClick"]);
                }), 256))
              ])
            ]),
            this.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "bottom"
            }, [
              vue.createElementVNode("image", {
                class: "loading",
                src: "/static/images/rank/loading.png"
              })
            ])) : vue.createCommentVNode("v-if", true),
            !this.isLoading && !this.hasMore ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "bottom"
            }, [
              vue.createElementVNode("view", { style: { "color": "#b2a796" } }, "\u6CA1\u6709\u66F4\u591A\u5E16\u5B50\u4E86!")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
        })
      ])
    ]);
  }
  const PagesUserHomeUserHome = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/userHome/userHome.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        user: {},
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          sortedType: "time",
          userId: 0
        },
        itemList: [],
        isLoading: false,
        hasMore: true
      };
    },
    methods: {
      updateDynamicStatus(item, index) {
        if (item.userId != this.user.userId) {
          return;
        }
        uni.showActionSheet({
          itemList: ["\u5220\u9664\u8BE5\u5E16\u5B50"],
          success: (res) => {
            uni.showModal({
              title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417?",
              success: (res2) => {
                if (res2.confirm) {
                  updatePost({
                    postId: item.postId,
                    status: "00X"
                  }).then((res3) => {
                    uni.showToast({
                      title: res3.msg,
                      icon: "success"
                    });
                    this.itemList = this.itemList.filter((post) => post.postId != item.postId);
                  });
                } else if (res2.cancel) {
                  formatAppLog("log", "at pages/dynamic/dynamic.vue:83", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
                }
              }
            });
          }
        });
      },
      toDetail(item) {
        let info = JSON.stringify(item);
        uni.navigateTo({
          url: "/pages/detail/detail?info=" + info + "&type=dynamic"
        });
      }
    },
    onPullDownRefresh() {
      this.pageReq.pageNum = 1;
      qryDynamicPage(this.pageReq).then((res) => {
        let records = res.data.records;
        records = records.map((item) => {
          item.images = JSON.parse(item.images || "[]");
          return item;
        });
        formatAppLog("log", "at pages/dynamic/dynamic.vue:105", records);
        this.itemList = records;
        if (res.data.records.length < 10) {
          this.hasMore = false;
        }
      }).catch(() => {
        uni.stopPullDownRefresh();
      }).finally(() => {
        uni.stopPullDownRefresh();
      });
    },
    onLoad() {
      this.user = JSON.parse(uni.getStorageSync("user"));
      this.pageReq.userId = this.user.userId;
      qryDynamicPage(this.pageReq).then((res) => {
        let records = res.data.records;
        records = records.map((item) => {
          item.images = JSON.parse(item.images || "[]");
          return item;
        });
        formatAppLog("log", "at pages/dynamic/dynamic.vue:126", records);
        this.itemList = records;
        if (res.data.records.length < 10) {
          this.hasMore = false;
        }
      });
    },
    onNavigationBarButtonTap: function(e) {
      uni.navigateTo({
        url: "/pages/post/post?type=dynamic"
      });
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++;
        this.isLoading = true;
        qryDynamicPage(this.pageReq).then((res) => {
          if (res.data.records.length <= 0) {
            this.hasMore = false;
          } else {
            let records = res.data.records;
            records = records.map((item) => item.images = JSON.parse(item.images || "[]"));
            this.itemList.push(...records);
          }
        }).catch((err) => {
          this.pageReq.pageNum--;
        }).finally(() => {
          this.isLoading = false;
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(this.itemList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "itemBox",
          onLongpress: ($event) => $options.updateDynamicStatus(item, index),
          onClick: ($event) => $options.toDetail(item),
          key: item.postId
        }, [
          vue.createElementVNode("view", { class: "topBox" }, [
            vue.createElementVNode("view", { class: "leftBox" }, [
              vue.createElementVNode("image", {
                class: "avatar",
                src: item.avatar
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "info" }, [
                vue.createElementVNode("view", { class: "nickname" }, vue.toDisplayString(item.nickname), 1),
                vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(item.createDate), 1)
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "contentBox" }, [
            vue.createElementVNode("view", { class: "content" }, vue.toDisplayString(item.content), 1)
          ]),
          vue.createElementVNode("view", { class: "imageBox" }, [
            vue.createElementVNode("image", {
              mode: "scaleToFill",
              class: "img",
              src: item.images[0]["url"] || ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "bottomBox" }, [
            vue.createElementVNode("view", { class: "view" }, [
              vue.createVNode(_component_uni_icons, {
                type: "eye-filled",
                size: "18",
                color: "#999999"
              }),
              vue.createElementVNode("text", null, vue.toDisplayString(item.views), 1)
            ])
          ])
        ], 40, ["onLongpress", "onClick"]);
      }), 128)),
      !this.itemList || this.itemList.length <= 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "tipBox"
      }, [
        vue.createElementVNode("view", { class: "tip" }, "\u6682\u65F6\u6CA1\u6709\u6570\u636E\u54E6~~")
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "box"
      }, [
        this.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "bottom"
        }, [
          vue.createElementVNode("image", {
            class: "loading",
            src: "/static/images/rank/loading.png"
          })
        ])) : vue.createCommentVNode("v-if", true),
        !this.isLoading && !this.hasMore ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "bottom"
        }, [
          vue.createElementVNode("view", { style: { "color": "#b2a796" } }, "\u6CA1\u6709\u66F4\u591A\u5E16\u5B50\u4E86~~")
        ])) : vue.createCommentVNode("v-if", true)
      ]))
    ]);
  }
  const PagesDynamicDynamic = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/dynamic/dynamic.vue"]]);
  const _sfc_main$8 = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      labelAlign: {
        type: String,
        default: ""
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "65px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value, oldVal) => {
            const isEqual2 = this.form._isEqual(value, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      setRules(rules = null) {
        this.userRules = rules;
        this.init(false);
      },
      setValue() {
      },
      async onFieldChange(value, formtrigger = true) {
        const {
          formData,
          localData,
          errShowType,
          validateCheck,
          validateTrigger,
          _isRequiredField,
          _realName
        } = this.form;
        const name = _realName(this.name);
        if (!value) {
          value = this.form.formData[name];
        }
        const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
        if (!this.validator || !ruleLen || ruleLen === 0)
          return;
        const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
        let result = null;
        if (validateTrigger === "bind" || formtrigger) {
          result = await this.validator.validateUpdate(
            {
              [name]: value
            },
            formData
          );
          if (!isRequiredField2 && (value === void 0 || value === "")) {
            result = null;
          }
          if (result && result.errorMessage) {
            if (errShowType === "undertext") {
              this.errMsg = !result ? "" : result.errorMessage;
            }
            if (errShowType === "toast") {
              uni.showToast({
                title: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF",
                icon: "none"
              });
            }
            if (errShowType === "modal") {
              uni.showModal({
                title: "\u63D0\u793A",
                content: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF"
              });
            }
          } else {
            this.errMsg = "";
          }
          validateCheck(result ? result : null);
        } else {
          this.errMsg = "";
        }
        return result ? result : null;
      },
      init(type = false) {
        const {
          validator,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.form && type && childrens.push(this);
        if (!validator || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name] = {
            rules: itemRule
          };
          validator.updateSchema(formRules);
        }
        const itemRules = formRules[name] || {};
        this.itemRules = itemRules;
        this.validator = validator;
        this.itemSetValue(_getDataValue(this.name, localData));
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      itemSetValue(value) {
        const name = this.form._realName(this.name);
        const rules = this.itemRules.rules || [];
        const val = this.form._getValue(name, value, rules);
        this.form._setDataValue(name, this.form.formData, val);
        return val;
      },
      clearValidate() {
        this.errMsg = "";
      },
      _isRequired() {
        return this.required;
      },
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 65 : "auto"));
      },
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]])
    }, [
      vue.renderSlot(_ctx.$slots, "label", {}, () => [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$props.required }]),
          style: vue.normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
        }, [
          $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "is-required"
          }, "*")) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("text", null, vue.toDisplayString($props.label), 1)
        ], 6)
      ], true),
      vue.createElementVNode("view", { class: "uni-forms-item__content" }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
        }, [
          vue.createElementVNode("text", null, vue.toDisplayString($options.msg), 1)
        ], 2)
      ])
    ], 2);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-462874dd"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i2 = 0; i2 < rules.length; i2++) {
        let rule = rules[i2];
        let vt2 = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt2]) {
          result = RuleValidatorHelper[vt2](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now2 = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now2);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt2);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt2) {
      let result = null;
      try {
        let callbackMessage = null;
        const res = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res === "string" && res || res === false) {
          result = this._getMessage(rule, callbackMessage || res, vt2);
        }
      } catch (e) {
        result = this._getMessage(rule, e.message, vt2);
      }
      return result;
    }
    _getMessage(rule, message, vt2) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt2] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list[i2] = item.value;
        } else {
          list[i2] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i2 = 0; i2 < value.length; i2++) {
        const element = value[i2];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "\u9A8C\u8BC1\u9519\u8BEF",
      defaultInvalid: "\u63D0\u4EA4\u7684\u5B57\u6BB5{field}\u5728\u6570\u636E\u5E93\u4E2D\u5E76\u4E0D\u5B58\u5728",
      validateFunction: "\u9A8C\u8BC1\u65E0\u6548",
      required: "{label}\u5FC5\u586B",
      "enum": "{label}\u8D85\u51FA\u8303\u56F4",
      timestamp: "{label}\u683C\u5F0F\u65E0\u6548",
      whitespace: "{label}\u4E0D\u80FD\u4E3A\u7A7A",
      typeError: "{label}\u7C7B\u578B\u65E0\u6548",
      date: {
        format: "{label}\u65E5\u671F{value}\u683C\u5F0F\u65E0\u6548",
        parse: "{label}\u65E5\u671F\u65E0\u6CD5\u89E3\u6790,{value}\u65E0\u6548",
        invalid: "{label}\u65E5\u671F{value}\u65E0\u6548"
      },
      length: {
        minLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E{minLength}",
        maxLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7{maxLength}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minLength}\u548C{maxLength}\u4E4B\u95F4"
      },
      number: {
        minimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E{minimum}",
        maximum: "{label}\u4E0D\u80FD\u5927\u4E8E{maximum}",
        exclusiveMinimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E\u7B49\u4E8E{minimum}",
        exclusiveMaximum: "{label}\u4E0D\u80FD\u5927\u4E8E\u7B49\u4E8E{maximum}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minimum}and{maximum}\u4E4B\u95F4"
      },
      pattern: {
        mismatch: "{label}\u683C\u5F0F\u4E0D\u5339\u914D"
      }
    };
  }
  SchemaValidator.message = new Message();
  const deepCopy = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  const typeFilter = (format) => {
    return format === "int" || format === "double" || format === "number" || format === "timestamp";
  };
  const getValue = (key, value, rules) => {
    const isRuleNumType = rules.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value && value !== 0) {
        value = null;
      } else {
        value = isNumber(Number(value)) ? Number(value) : value;
      }
    }
    if (!!isRuleBoolType) {
      value = isBoolean(value) ? value : false;
    }
    return value;
  };
  const setDataValue = (field, formdata, value) => {
    formdata[field] = value;
    return value || "";
  };
  const getDataValue = (field, data) => {
    return objGet(data, field);
  };
  const realName = (name, data = {}) => {
    const base_name = _basePath(name);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a2, b) => a2 += `#${b}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name;
  };
  const isRealName = (name) => {
    const reg = /^_formdata_#*/;
    return reg.test(name);
  };
  const rawData = (object = {}, name) => {
    let newData = JSON.parse(JSON.stringify(object));
    let formData = {};
    for (let i2 in newData) {
      let path = name2arr(i2);
      objSet(formData, path, newData[i2]);
    }
    return formData;
  };
  const name2arr = (name) => {
    let field = name.replace("_formdata_#", "");
    field = field.split("#").map((v2) => isNumber(v2) ? Number(v2) : v2);
    return field;
  };
  const objSet = (object, path, value) => {
    if (typeof object !== "object")
      return object;
    _basePath(path).reduce((o2, k2, i2, _2) => {
      if (i2 === _2.length - 1) {
        o2[k2] = value;
        return null;
      } else if (k2 in o2) {
        return o2[k2];
      } else {
        o2[k2] = /^[0-9]{1,}$/.test(_2[i2 + 1]) ? [] : {};
        return o2[k2];
      }
    }, object);
    return object;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  const objGet = (object, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o2, k2) => {
      return (o2 || {})[k2];
    }, object);
    return !val || val !== void 0 ? val : defaultVal;
  };
  const isNumber = (num) => {
    return !isNaN(Number(num));
  };
  const isBoolean = (bool) => {
    return typeof bool === "boolean";
  };
  const isRequiredField = (rules) => {
    let isNoField = false;
    for (let i2 = 0; i2 < rules.length; i2++) {
      const ruleData = rules[i2];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  const isEqual = (a2, b) => {
    if (a2 === b) {
      return a2 !== 0 || 1 / a2 === 1 / b;
    }
    if (a2 == null || b == null) {
      return a2 === b;
    }
    var classNameA = toString.call(a2), classNameB = toString.call(b);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a2 === "" + b;
      case "[object Number]":
        if (+a2 !== +a2) {
          return +b !== +b;
        }
        return +a2 === 0 ? 1 / +a2 === 1 / b : +a2 === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a2 === +b;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a2), propsB = Object.getOwnPropertyNames(b);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i2 = 0; i2 < propsA.length; i2++) {
        var propName = propsA[i2];
        if (a2[propName] !== b[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a2.toString() == b.toString()) {
        return true;
      }
      return false;
    }
  };
  const _sfc_main$7 = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      errShowType: {
        type: String,
        default: "undertext"
      },
      validateTrigger: {
        type: String,
        default: "submit"
      },
      labelPosition: {
        type: String,
        default: "left"
      },
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        formData: {},
        formRules: {}
      };
    },
    computed: {
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy(localVal);
        }
        return {};
      }
    },
    watch: {
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value);
          } else {
            let formVm;
            for (let i2 in this.$refs) {
              const vm = this.$refs[i2];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:182", "\u5F53\u524D uni-froms \u7EC4\u4EF6\u7F3A\u5C11 ref \u5C5E\u6027");
            formVm.setValue(name, value);
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      setRules(rules) {
        this.formRules = Object.assign({}, this.formRules, rules);
        this.validator = new SchemaValidator(rules);
      },
      setValue(key, value) {
        let example = this.childrens.find((child) => child.name === key);
        if (!example)
          return null;
        this.formData[key] = getValue(key, value, this.formRules[key] && this.formRules[key].rules || []);
        return example.onFieldChange(this.formData[key]);
      },
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      validateField(props = [], callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name = realName(item.name);
          if (props.indexOf(name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name]: this.formData[name]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      clearValidate(props = []) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          if (props.length === 0) {
            item.errMsg = "";
          } else {
            const name = realName(item.name);
            if (props.indexOf(name) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      submit(keepitem, callback, type) {
        for (let i2 in this.dataValue) {
          const itemData = this.childrens.find((v2) => v2.name === i2);
          if (itemData) {
            if (this.formData[i2] === void 0) {
              this.formData[i2] = this._getValue(i2, this.dataValue[i2]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289", "submit \u65B9\u6CD5\u5373\u5C06\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528validate\u65B9\u6CD5\u4EE3\u66FF\uFF01");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      async checkAll(invalidFields, keepitem, callback, type) {
        if (!this.validator)
          return;
        let childrens = [];
        for (let i2 in invalidFields) {
          const item = this.childrens.find((v2) => realName(v2.name) === i2);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let tempFormData = JSON.parse(JSON.stringify(invalidFields));
        for (let i2 in childrens) {
          const child = childrens[i2];
          let name = realName(child.name);
          const result = await child.onFieldChange(tempFormData[name]);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v2) => {
            let vName = realName(v2);
            let value = getDataValue(v2, this.localData);
            if (value !== void 0) {
              tempFormData[vName] = value;
            }
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: tempFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        let resetFormData = {};
        resetFormData = rawData(tempFormData, this.name);
        callback && typeof callback === "function" && callback(results, resetFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-9a1e3c32"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        email: "",
        clickDisable: true,
        pattern: "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$",
        formData: {
          username: "2696839754@qq.com",
          password: "admin"
        },
        btnStyleObj: {
          color: "#acacac",
          backgroundColor: "#f7f7f7",
          fontWeight: 400
        },
        rules: {
          username: {
            rules: [
              {
                pattern: "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$",
                errorMessage: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F!"
              }
            ]
          },
          password: {
            rules: [
              {
                required: true,
                errorMessage: "\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A!"
              },
              {
                minLength: 5,
                maxLength: 16,
                errorMessage: "\u5BC6\u7801\u957F\u5EA6\u8981\u57286~16\u4F4D"
              }
            ]
          }
        }
      };
    },
    watch: {
      formData: {
        handler({ username, password }, oldValue) {
          if (!username || !password) {
            this.clickDisable = true;
            this.btnStyleObj = {
              color: "#acacac",
              fontWeight: 400,
              backgroundColor: "#f7f7f7"
            };
          } else if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(username)) {
            this.clickDisable = false;
            this.btnStyleObj = {
              color: "#56c1c5",
              fontWeight: 700,
              backgroundColor: "#d2feff"
            };
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      submitForm() {
        this.$refs.form.validate().then((res) => {
          login(this.formData).then((res2) => {
            formatAppLog("log", "at pages/login/login.vue:88", res2);
            if (res2.code === 200) {
              uni.setStorageSync("Authorization", res2.data.token);
              uni.setStorageSync("user", JSON.stringify(res2.data.user));
              uni.switchTab({
                url: "/pages/tabbar/home/home"
              });
            }
          }).catch((err) => {
            formatAppLog("log", "at pages/login/login.vue:97", err);
          });
        }).catch((err) => {
          formatAppLog("log", "at pages/login/login.vue:100", "\u5931\u8D25");
        });
      },
      toRegister() {
        uni.navigateTo({
          url: "/pages/register/register"
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$1);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "img" }, [
        vue.createElementVNode("image", {
          mode: "aspectFit",
          class: "logo",
          src: "/static/logo.png"
        })
      ]),
      vue.createVNode(_component_uni_forms, {
        ref: "form",
        modelValue: $data.formData,
        "validate-trigger": "blur",
        rules: $data.rules
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            label: "\u90AE\u7BB1:",
            name: "username"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                trim: "all",
                type: "text",
                modelValue: $data.formData.username,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.username = $event),
                placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            label: "\u5BC6\u7801:",
            name: "password"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                trim: "all",
                type: "password",
                modelValue: $data.formData.password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.password = $event),
                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "rules"]),
      vue.createElementVNode("button", {
        class: "enter",
        style: vue.normalizeStyle($data.btnStyleObj),
        disabled: $data.clickDisable,
        onClick: _cache[2] || (_cache[2] = (...args) => $options.submitForm && $options.submitForm(...args))
      }, "\u767B\u5F55", 12, ["disabled"]),
      vue.createElementVNode("view", {
        class: "register",
        onClick: _cache[3] || (_cache[3] = (...args) => $options.toRegister && $options.toRegister(...args))
      }, "\u6CE8\u518C > ")
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/login/login.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        rules: {
          username: {
            rules: [
              {
                required: true,
                errorMessage: "\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A!"
              },
              {
                pattern: "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$",
                errorMessage: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F!"
              }
            ]
          },
          code: {
            rules: [
              {
                required: true,
                errorMessage: "\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A!"
              },
              {
                minLength: 6,
                maxLength: 6,
                errorMessage: "\u9A8C\u8BC1\u7801\u957F\u5EA6\u9519\u8BEF!"
              }
            ]
          },
          password: {
            rules: [
              {
                required: true,
                errorMessage: "\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A!"
              },
              {
                minLength: 5,
                maxLength: 15,
                errorMessage: "\u5BC6\u7801\u957F\u5EA6\u8981\u57286~15\u4F4D"
              }
            ]
          },
          password2: {
            rules: [
              {
                required: true,
                errorMessage: "\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A!"
              },
              {
                validateFunction: function(rule, value, data, callback) {
                  formatAppLog("log", "at pages/register/register.vue:80", value);
                  formatAppLog("log", "at pages/register/register.vue:81", data);
                  if (value != data.password) {
                    callback("\u5BC6\u7801\u4E0E\u786E\u8BA4\u5BC6\u7801\u4E0D\u4E00\u81F4");
                  }
                  return true;
                }
              }
            ]
          }
        },
        formData: {
          username: "",
          password: "",
          password2: "",
          code: ""
        },
        msg: "\u70B9\u51FB\u83B7\u53D6",
        time: 30,
        sendBtnStyle: {
          color: "#000000"
        },
        btnStyleObj: {
          color: "#56c1c5",
          fontWeight: 700,
          backgroundColor: "#d2feff"
        }
      };
    },
    onReady() {
      this.$refs.form.setRules(this.rules);
    },
    methods: {
      submitForm() {
        this.$refs.form.validate().then((res) => {
          formatAppLog("log", "at pages/register/register.vue:116", "\u6210\u529F");
          register({ ...this.formData, email: this.formData["username"] }).then((res2) => {
            if (res2.code === 200) {
              uni.showToast({
                title: "\u6CE8\u518C\u6210\u529F!",
                icon: "success"
              });
              uni.navigateTo({
                url: "/pages/login/login"
              });
            }
          });
        }).catch((err) => {
          formatAppLog("log", "at pages/register/register.vue:129", "\u5931\u8D25");
        });
      },
      sendCode() {
        this.$refs.form.validateField(["username"]).then((res) => {
          if (this.time == 30) {
            getVerificationCode({ email: this.formData.username }).then((res2) => {
              formatAppLog("log", "at pages/register/register.vue:136", res2);
              if (res2.code === 200) {
                uni.showToast({
                  title: res2.msg
                });
              }
            }).catch((err) => {
              formatAppLog("log", "at pages/register/register.vue:143", err);
            });
            let timer = setInterval(() => {
              if (this.time >= 0) {
                this.sendBtnStyle = {
                  color: "#999999",
                  fontSize: "10px"
                };
                this.msg = this.time-- + "s\u540E\u91CD\u65B0\u83B7\u53D6";
              } else {
                clearInterval(timer);
                this.time = 30;
                this.msg = "\u70B9\u51FB\u83B7\u53D6";
                this.sendBtnStyle = {
                  color: "#000000",
                  fontSize: "12px"
                };
              }
            }, 1e3);
          }
        }).catch((err) => {
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$1);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createVNode(_component_uni_forms, {
        ref: "form",
        modelValue: $data.formData,
        "validate-trigger": "blur",
        rules: $data.rules
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            label: "\u90AE\u7BB1:",
            name: "username"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                trim: "all",
                type: "text",
                modelValue: $data.formData.username,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.username = $event),
                placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            label: "\u9A8C\u8BC1\u7801:",
            name: "code"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "codeConatiner" }, [
                vue.createElementVNode("view", { class: "content" }, [
                  vue.createVNode(_component_uni_easyinput, {
                    trim: "all",
                    type: "text",
                    modelValue: $data.formData.code,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.code = $event),
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                  }, null, 8, ["modelValue"])
                ]),
                vue.createElementVNode("view", { class: "send" }, [
                  vue.createElementVNode("view", {
                    class: "sendBtn",
                    style: vue.normalizeStyle($data.sendBtnStyle),
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.sendCode && $options.sendCode(...args))
                  }, vue.toDisplayString($data.msg), 5)
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            label: "\u5BC6\u7801:",
            name: "password"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                trim: "all",
                type: "password",
                modelValue: $data.formData.password,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.formData.password = $event),
                placeholder: "\u8BF7\u8F93\u51655~16\u4F4D\u5BC6\u7801"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            label: "\u5BC6\u7801:",
            name: "password2"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                trim: "all",
                type: "password",
                modelValue: $data.formData.password2,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.password2 = $event),
                placeholder: "\u786E\u8BA4\u5BC6\u7801"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "rules"]),
      vue.createElementVNode("button", {
        class: "enter",
        style: vue.normalizeStyle($data.btnStyleObj),
        onClick: _cache[5] || (_cache[5] = (...args) => $options.submitForm && $options.submitForm(...args))
      }, "\u6CE8\u518C", 4)
    ]);
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/register/register.vue"]]);
  function qryMessagePage(data) {
    return request("/message/qryMessagePage", "POST", data);
  }
  function deleteMsg(msgId) {
    return request("/message/deleteMsg/" + msgId, "GET");
  }
  const _sfc_main$4 = {
    data() {
      return {
        user: {},
        msgUser: {},
        websocket: null,
        content: "",
        msgList: [],
        flag: true,
        pageReq: {
          sourceId: 0,
          targetId: 0,
          pageSize: 10,
          pageNum: 1
        },
        refreshFlag: false
      };
    },
    methods: {
      deleteMessage(item) {
        uni.showModal({
          title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417?",
          success: (res) => {
            if (res.confirm) {
              deleteMsg(item.messageId).then((res2) => {
                uni.showToast({
                  title: res2.msg,
                  icon: "success"
                });
                this.msgList = this.msgList.filter((msg) => msg.messageId != item.messageId);
              });
            } else if (res.cancel) {
              formatAppLog("log", "at pages/msgDetail/msgDetail.vue:61", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
            }
          }
        });
      },
      refresh() {
        formatAppLog("log", "at pages/msgDetail/msgDetail.vue:67", this.refreshFlag);
        this.refreshFlag = true;
        this.pageReq.pageNum++;
        qryMessagePage(this.pageReq).then((res) => {
          for (let msg of res.data.records) {
            this.msgList.unshift(msg);
          }
        }).catch((err) => {
          this.pageNum--;
        }).finally(() => {
          this.refreshFlag = false;
        });
      },
      toUpper() {
        formatAppLog("log", "at pages/msgDetail/msgDetail.vue:81", "\u5230\u9876\u90E8\u4E86");
      },
      sendMsg() {
        if (this.content.trim() === "") {
          uni.showToast({
            title: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A!",
            icon: "none"
          });
          return;
        }
        let content = this.content;
        this.content = "";
        this.$websocket.send(JSON.stringify({
          content,
          userId: this.msgUser.userId + ""
        }), (res) => {
          let data = JSON.parse(res.data);
          formatAppLog("log", "at pages/msgDetail/msgDetail.vue:98", "\u63A5\u6536\u6D88\u606F\uFF1A", data);
          if (!data.messageId) {
            return;
          }
          this.msgList.push(data);
        });
      }
    },
    onLoad(option) {
      this.user = JSON.parse(uni.getStorageSync("user"));
      this.msgUser = JSON.parse(option.user);
      if (!this.$websocket || this.$websocket && !this.$websocket.is_open_socket) {
        formatAppLog("log", "at pages/msgDetail/msgDetail.vue:112", "\u8FDE\u63A5\u524D\u72B6\u6001\uFF1A", this.$websocket);
        this.$setWebsocket(this.user.userId);
        formatAppLog("log", "at pages/msgDetail/msgDetail.vue:114", "\u8FDE\u63A5\u540E\u72B6\u6001\uFF1A", this.$websocket);
      }
      uni.setNavigationBarTitle({
        title: this.msgUser.nickname
      });
      this.$websocket.getMessage((res) => {
        let data = JSON.parse(res.data);
        formatAppLog("log", "at pages/msgDetail/msgDetail.vue:123", "\u63A5\u6536\u6D88\u606F\uFF1A", data);
        if (!data.messageId) {
          return;
        }
        this.msgList.push(data);
      });
      this.pageReq.sourceId = this.user.userId;
      this.pageReq.targetId = this.msgUser.userId;
      qryMessagePage(this.pageReq).then((res) => {
        for (let msg of res.data.records) {
          this.msgList.unshift(msg);
        }
      });
      formatAppLog("log", "at pages/msgDetail/msgDetail.vue:136", "123");
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        onScrolltoupper: _cache[0] || (_cache[0] = (...args) => $options.toUpper && $options.toUpper(...args)),
        "upper-threshold": "200",
        "refresher-enabled": true,
        onRefresherrefresh: _cache[1] || (_cache[1] = (...args) => $options.refresh && $options.refresh(...args)),
        "refresher-triggered": this.refreshFlag
      }, [
        vue.createElementVNode("view", { class: "topConatiner" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.msgList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "itemBox" }, [
              vue.createCommentVNode(' <view class="left" v-if="item.sourceId === this.user.userId"> '),
              item.sourceId !== this.user.userId ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "left"
              }, [
                vue.createElementVNode("image", {
                  class: "avatar",
                  src: this.msgUser.avatar
                }, null, 8, ["src"]),
                vue.createElementVNode("view", {
                  style: { "background-color": "#f8f9f9" },
                  class: "content"
                }, vue.toDisplayString(item.content), 1)
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "right",
                onLongpress: ($event) => $options.deleteMessage(item)
              }, [
                vue.createElementVNode("view", {
                  style: { "background-color": "aliceblue" },
                  class: "content"
                }, vue.toDisplayString(item.content), 1),
                vue.createElementVNode("image", {
                  class: "avatar",
                  src: this.user.avatar
                }, null, 8, ["src"])
              ], 40, ["onLongpress"]))
            ]);
          }), 256))
        ])
      ], 40, ["refresher-triggered"]),
      vue.createElementVNode("view", { class: "bottomContainer" }, [
        vue.createVNode(_component_uni_easyinput, {
          class: "input",
          onConfirm: $options.sendMsg,
          onIconClick: $options.sendMsg,
          trim: "both",
          confirmType: "send",
          clearable: true,
          "adjust-position": true,
          modelValue: this.content,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => this.content = $event),
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          suffixIcon: "chat"
        }, null, 8, ["onConfirm", "onIconClick", "modelValue"])
      ])
    ]);
  }
  const PagesMsgDetailMsgDetail = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/msgDetail/msgDetail.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        user: {},
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          positiveUserId: 0
        },
        itemList: [],
        isLoading: false,
        hasMore: true
      };
    },
    methods: {},
    onLoad() {
      this.user = JSON.parse(uni.getStorageSync("user"));
      this.pageReq.positiveUserId = this.user.userId;
      qryMyWarning(this.pageReq).then((res) => {
        this.itemList = res.data.records;
        if (res.data.records.length < 10) {
          this.hasMore = false;
        }
      });
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++;
        this.isLoading = true;
        qryMyWarning(this.pageReq).then((res) => {
          if (res.data.records.length <= 0) {
            this.hasMore = false;
          } else {
            this.itemList.push(...res.data.records);
          }
        }).catch((err) => {
          this.pageReq.pageNum--;
        }).finally(() => {
          this.isLoading = false;
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.itemList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "itemBox",
          key: item.postId
        }, [
          vue.createElementVNode("view", { class: "topBox" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("view", { class: "user" }, [
                vue.createElementVNode("image", {
                  class: "avatar",
                  src: item.passiveAvatar
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "info" }, [
                  vue.createElementVNode("view", { class: "nickname" }, vue.toDisplayString(item.passiveNickname), 1),
                  vue.createElementVNode("view", { click: "type" })
                ])
              ]),
              vue.createElementVNode("view", { class: "type" }, [
                vue.createElementVNode("view", { style: { "font-size": "13px", "margin-right": "5px" } }, "\u4E3E\u62A5\u7C7B\u578B:"),
                vue.createElementVNode("view", { class: "content" }, [
                  item.type === "0" ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "\u8BC4\u8BBA")) : vue.createCommentVNode("v-if", true),
                  item.type === "1" ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, "\u5E16\u5B50")) : vue.createCommentVNode("v-if", true),
                  item.type === "3" ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, "\u5E16\u5B50\u7533\u8BC9")) : vue.createCommentVNode("v-if", true)
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              item.status === "00D" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "appealSuccess"
              }, [
                vue.createTextVNode("\u5DF2\u83B7\u79EF\u5206:"),
                vue.createElementVNode("view", null, vue.toDisplayString(item.scores), 1)
              ])) : item.status === "00E" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "appealFail"
              }, "\u7533\u8BC9\u5931\u8D25!\u672A\u83B7\u5F97\u79EF\u5206")) : item.status === "00B" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "reportSuccess"
              }, "\u4E3E\u62A5\u6210\u529F!")) : item.status === "00C" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 3,
                class: "reportFail"
              }, "\u4E3E\u62A5\u5931\u8D25!")) : item.status === "00A" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 4,
                class: "unhandle"
              }, "\u7B49\u5F85\u5904\u7406\u4E2D...")) : item.status === "00X" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 5,
                class: "invalid"
              }, "\u4E3E\u62A5\u5931\u8D25!")) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", { class: "bottomBox" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("view", { class: "tip" }, "\u4E3E\u62A5\u65F6\u95F4\uFF1A"),
              vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(item.createDate.slice(5)), 1)
            ]),
            !!item.updateDate ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "right"
            }, [
              vue.createElementVNode("view", { class: "tip" }, "\u5904\u7406\u65F6\u95F4\uFF1A"),
              vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(item.updateDate.slice(5)), 1)
            ])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "right"
            }, "\u6682\u672A\u5904\u7406"))
          ])
        ]);
      }), 128)),
      this.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "bottom"
      }, [
        vue.createElementVNode("image", {
          class: "loading",
          src: "/static/images/rank/loading.png"
        })
      ])) : vue.createCommentVNode("v-if", true),
      !this.isLoading && !this.hasMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "bottom"
      }, [
        vue.createElementVNode("view", { style: { "color": "#b2a796" } }, "\u6CA1\u6709\u66F4\u591A\u8BB0\u5F55\u4E86~~")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesWarningWarning = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/warning/warning.vue"]]);
  const _sfc_main$2 = {
    name: "UniNumberBox",
    emits: ["change", "input", "update:modelValue", "blur", "focus"],
    props: {
      value: {
        type: [Number, String],
        default: 1
      },
      modelValue: {
        type: [Number, String],
        default: 1
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      background: {
        type: String,
        default: "#f5f5f5"
      },
      color: {
        type: String,
        default: "#333"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        inputValue: 0
      };
    },
    watch: {
      value(val) {
        this.inputValue = +val;
      },
      modelValue(val) {
        this.inputValue = +val;
      }
    },
    created() {
      if (this.value === 1) {
        this.inputValue = +this.modelValue;
      }
      if (this.modelValue === 1) {
        this.inputValue = +this.value;
      }
    },
    methods: {
      _calcValue(type) {
        if (this.disabled) {
          return;
        }
        const scale = this._getDecimalScale();
        let value = this.inputValue * scale;
        let step = this.step * scale;
        if (type === "minus") {
          value -= step;
          if (value < this.min * scale) {
            return;
          }
          if (value > this.max * scale) {
            value = this.max * scale;
          }
        }
        if (type === "plus") {
          value += step;
          if (value > this.max * scale) {
            return;
          }
          if (value < this.min * scale) {
            value = this.min * scale;
          }
        }
        this.inputValue = (value / scale).toFixed(String(scale).length - 1);
        this.$emit("change", +this.inputValue);
        this.$emit("input", +this.inputValue);
        this.$emit("update:modelValue", +this.inputValue);
      },
      _getDecimalScale() {
        let scale = 1;
        if (~~this.step !== this.step) {
          scale = Math.pow(10, String(this.step).split(".")[1].length);
        }
        return scale;
      },
      _onBlur(event) {
        this.$emit("blur", event);
        let value = event.detail.value;
        if (!value) {
          return;
        }
        value = +value;
        if (value > this.max) {
          value = this.max;
        } else if (value < this.min) {
          value = this.min;
        }
        const scale = this._getDecimalScale();
        this.inputValue = value.toFixed(String(scale).length - 1);
        this.$emit("change", +this.inputValue);
        this.$emit("input", +this.inputValue);
      },
      _onFocus(event) {
        this.$emit("focus", event);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-numbox" }, [
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = ($event) => $options._calcValue("minus")),
        class: "uni-numbox__minus uni-numbox-btns",
        style: vue.normalizeStyle({ background: $props.background })
      }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue <= $props.min || $props.disabled }]),
          style: vue.normalizeStyle({ color: $props.color })
        }, "-", 6)
      ], 4),
      vue.withDirectives(vue.createElementVNode("input", {
        disabled: $props.disabled,
        onFocus: _cache[1] || (_cache[1] = (...args) => $options._onFocus && $options._onFocus(...args)),
        onBlur: _cache[2] || (_cache[2] = (...args) => $options._onBlur && $options._onBlur(...args)),
        class: "uni-numbox__value",
        type: "number",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputValue = $event),
        style: vue.normalizeStyle({ background: $props.background, color: $props.color })
      }, null, 44, ["disabled"]), [
        [vue.vModelText, $data.inputValue]
      ]),
      vue.createElementVNode("view", {
        onClick: _cache[4] || (_cache[4] = ($event) => $options._calcValue("plus")),
        class: "uni-numbox__plus uni-numbox-btns",
        style: vue.normalizeStyle({ background: $props.background })
      }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue >= $props.max || $props.disabled }]),
          style: vue.normalizeStyle({ color: $props.color })
        }, "+", 6)
      ], 4)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-7ae2ee72"], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        defaultNum: 0,
        fileList: [],
        extList: [],
        selectedTag: 0,
        content: "",
        tag: "0",
        range: [],
        max: 0,
        scores: 0,
        type: "0",
        imageStyles: {
          border: {
            color: "#eaa",
            width: 2,
            style: "dashed",
            radius: "2rpx"
          }
        }
      };
    },
    methods: {
      changeScore(value) {
        formatAppLog("log", "at pages/post/post.vue:76", value);
        this.scores = value;
      },
      select: function(e) {
        formatAppLog("log", "at pages/post/post.vue:80", "\u9009\u62E9\u6587\u4EF6:", e);
        fileUpload(e, this.fileList).then((res) => {
          this.fileList = res;
          this.extList = res;
        });
        formatAppLog("log", "at pages/post/post.vue:85", this.fileList);
      },
      change(e) {
        formatAppLog("log", "at pages/post/post.vue:88", "change:", e);
        formatAppLog("log", "at pages/post/post.vue:89", this.range[e]);
        if (!e) {
          this.tag = this.range[e]["text"];
        }
      },
      deleteImg(e) {
        this.fileList = this.extList = this.extList.filter((item) => item.uuid != e.tempFile.uuid);
      }
    },
    onNavigationBarButtonTap: function(e) {
      if (!this.content) {
        uni.showToast({
          title: "\u53D1\u5E16\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A!",
          icon: "error"
        });
        return;
      }
      releasePost({
        content: this.content,
        images: JSON.stringify(this.extList),
        type: this.type,
        tag: this.tag,
        scores: !this.scores ? 0 : this.scores
      }).then((res) => {
        let user = JSON.parse(uni.getStorageSync("user"));
        if (!this.scores) {
          this.scores = 0;
        }
        user.scoresCurrent = this.max - this.scores;
        uni.setStorageSync("user", JSON.stringify(user));
        uni.navigateBack({
          delta: 1
        });
      });
    },
    onReady() {
      this.range = [
        { value: 0, text: "\u5176\u4ED6" },
        { value: 1, text: "\u9AD8\u6570" },
        { value: 2, text: "\u82F1\u8BED" },
        { value: 3, text: "\u5927\u7269" }
      ];
    },
    onLoad(option) {
      if (option.type === "dynamic") {
        this.type = "1";
      }
      let user = JSON.parse(uni.getStorageSync("user"));
      getUserInfo(user.userId).then((res) => {
        this.max = res.data.scoresCurrent;
      });
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_0$1);
    const _component_uni_number_box = resolveEasycom(vue.resolveDynamicComponent("uni-number-box"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(' <uni-notice-bar scrollable single text="\u731C\u731C\u6211\u662F\u8C01?"></uni-notice-bar> '),
      vue.createElementVNode("view", { class: "contentContainer" }, [
        vue.withDirectives(vue.createElementVNode("textarea", {
          class: "inputArea",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.content = $event),
          placeholder: "\u5206\u4EAB\u6211\u7684\u52A8\u6001"
        }, null, 512), [
          [vue.vModelText, $data.content]
        ])
      ]),
      vue.createElementVNode("view", { class: "imageUpload" }, [
        vue.createElementVNode("view", null, [
          vue.createVNode(_component_uni_file_picker, {
            modelValue: $data.fileList,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.fileList = $event),
            imageStyles: $data.imageStyles,
            "file-mediatype": "image",
            mode: "grid",
            "file-extname": "png,jpg,jpeg",
            "auto-upload": false,
            limit: 6,
            onSelect: $options.select,
            onDelete: $options.deleteImg
          }, null, 8, ["modelValue", "imageStyles", "onSelect", "onDelete"])
        ])
      ]),
      this.type === "0" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "tags"
      }, [
        vue.createCommentVNode(' <view class="left">\r\n        <uni-icons type="list" size="30"></uni-icons>\r\n        <text class="type">\u5206\u7C7B</text>\r\n      </view>\r\n      <view class="right">\r\n        <uni-data-select\r\n          v-model="selectedTag"\r\n          :localdata="range"\r\n          :clear="false"\r\n          @change="change"\r\n        ></uni-data-select>\r\n      </view> ')
      ])) : vue.createCommentVNode("v-if", true),
      this.type === "0" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "bottom"
      }, [
        vue.createElementVNode("view", { class: "iconBox" }, [
          vue.createElementVNode("view", { class: "scoreIcon iconfont icon-jifen" }),
          vue.createElementVNode("view", { class: "title" }, "\u9644\u52A0\u79EF\u5206")
        ]),
        vue.createVNode(_component_uni_number_box, {
          modelValue: this.defaultNum,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => this.defaultNum = $event),
          min: 0,
          max: this.max,
          onChange: $options.changeScore
        }, null, 8, ["modelValue", "max", "onChange"])
      ])) : vue.createCommentVNode("v-if", true),
      this.type === "0" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "tip",
        onClick: _cache[3] || (_cache[3] = () => {
        })
      }, "\u6E29\u99A8\u63D0\u793A\uFF1A\u60A8\u5F53\u524D\u62E5\u6709" + vue.toDisplayString(this.max) + "\u79EF\u5206", 1)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPostPost = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/pages/post/post.vue"]]);
  __definePage("pages/tabbar/home/home", PagesTabbarHomeHome);
  __definePage("pages/detail/detail", PagesDetailDetail);
  __definePage("pages/tabbar/personal/personal", PagesTabbarPersonalPersonal);
  __definePage("pages/tabbar/message/message", PagesTabbarMessageMessage);
  __definePage("pages/follows/follows", PagesFollowsFollows);
  __definePage("pages/history/history", PagesHistoryHistory);
  __definePage("pages/myPost/myPost", PagesMyPostMyPost);
  __definePage("pages/scoresAssgin/scoresAssgin", PagesScoresAssginScoresAssgin);
  __definePage("pages/tabbar/rank/rank", PagesTabbarRankRank);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/userHome/userHome", PagesUserHomeUserHome);
  __definePage("pages/dynamic/dynamic", PagesDynamicDynamic);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/msgDetail/msgDetail", PagesMsgDetailMsgDetail);
  __definePage("pages/warning/warning", PagesWarningWarning);
  __definePage("pages/post/post", PagesPostPost);
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      uni.onTabBarMidButtonTap(() => {
        uni.navigateTo({
          url: "/pages/post/post",
          animationType: "pop-in",
          animationDuration: 3e3
        });
      });
      return () => {
      };
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Resources/font-workspace/gradutation_project/easy_help_front/App.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.26
    * (c) 2022 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const getActivePinia = () => vue.getCurrentInstance() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o2) {
    return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : "msSaveOrOpenBlob" in _navigator ? msSaveAs : fileSaverSaveAs;
  function downloadSaveAs(blob, name = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download(blob, name, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "\u{1F34D} " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o2) {
    return "_a" in o2 && "install" in o2;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "\u{1F34D} Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const getStoreType = (id) => "\u{1F34D} " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia \u{1F34D}",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia \u{1F34D}`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia \u{1F34D}",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : Object.keys(store.$state).reduce((state, key) => {
                state[key] = store.$state[key];
                return state;
              }, {})
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("\u{1F34D}")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia \u{1F34D}",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "\u{1F6EB} " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "\u{1F6EC} " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "\u{1F4A5} " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: {
            store: formatDisplay(store.$id),
            ...formatEventData(events)
          },
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "\u2935\uFE0F";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "\u{1F9E9}";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "\u{1F525} " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store \u{1F5D1}`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed \u{1F195}`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(
        store,
        Object.keys(options.actions)
      );
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(
      app,
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  const isUseStore = (fn2) => {
    return typeof fn2 === "function" && typeof fn2.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia = hot.data.pinia || initialUseStore._pinia;
      if (!pinia) {
        return;
      }
      hot.data.pinia = pinia;
      for (const exportName in newModule) {
        const useStore = newModule[exportName];
        if (isUseStore(useStore) && pinia._s.has(useStore.$id)) {
          const id = useStore.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore(pinia, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o2) {
    return !!(vue.isRef(o2) && o2.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? vue.toRefs(vue.ref(state ? state() : {}).value) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    store.$reset = function $reset() {
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    };
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = vue.markRaw([]);
    let actionSubscriptions = vue.markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = () => {
      throw new Error(`\u{1F34D}: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    };
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(
      assign(
        {
          _hmrPayload,
          _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        },
        partialStore
      )
    );
    pinia._s.set($id, store);
    const setupStore = pinia._e.run(() => {
      scope = vue.effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? options.getters[key] : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? vue.computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          }) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
        Object.defineProperty(store, p2, {
          value: store[p2],
          ...nonEnumerable
        });
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const currentInstance = vue.getCurrentInstance();
      pinia = pinia || currentInstance && vue.inject(piniaSymbol);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[\u{1F34D}]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v2) => Object.assign(provideCache, v2)
            });
          }
          this._provided[piniaSymbol] = pinia;
          if (!this.$pinia) {
            this.$pinia = pinia;
          }
          pinia._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia._a, pinia);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const Pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(createPinia());
    app.config.globalProperties.$websocket = "";
    app.config.globalProperties.$setWebsocket = function(userId) {
      formatAppLog("log", "at main.js:23", "\u8BBE\u7F6E\u8BBE\u7F6E");
      app.config.globalProperties.$websocket = new websocketUtil("ws://110.41.146.56:8888/websocket/" + userId, 5e3);
    };
    return {
      app,
      Pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
