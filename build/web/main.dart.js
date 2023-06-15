// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const binding = flutter_sdk.src__widgets__binding;
  const media_query = flutter_sdk.src__widgets__media_query;
  const scaffold = flutter_sdk.src__material__scaffold;
  const safe_area = flutter_sdk.src__widgets__safe_area;
  const container = flutter_sdk.src__widgets__container;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const text = flutter_sdk.src__widgets__text;
  const text_style = flutter_sdk.src__painting__text_style;
  const box_decoration = flutter_sdk.src__painting__box_decoration;
  const border_radius = flutter_sdk.src__painting__border_radius;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var calculator = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: calculator.Calculator.prototype,
        [Widget_key]: null
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget_key]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 150,
        [SizedBox_width]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 100,
        [SizedBox_width]: null
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 20,
        [SizedBox_width]: null
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "package:flutter_app/calculator.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({title: "Flutter App", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.amber}), home: C[1] || CT.C1});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.main = function main$0() {
    binding.runApp(C[2] || CT.C2);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  calculator.Calculator = class Calculator extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new calculator.Calculator.new({key: key});
    }
    build(context) {
      let size = media_query.MediaQuery.of(context).size;
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.black, body: new safe_area.SafeArea.new({child: new container.Container.new({height: size.height, width: size.width, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.end, children: T.JSArrayOfWidget().of([C[3] || CT.C3, new text.Text.new("98.74", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 50})}), C[4] || CT.C4, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidget().of([new container.Container.new({child: new basic.Center.new({child: new text.Text.new("ac", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("ce", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("%", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("/", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.indigo}), height: 40, width: 40})])}), C[5] || CT.C5, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidget().of([new container.Container.new({child: new basic.Center.new({child: new text.Text.new("7", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("8", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("9", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("*", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.indigo}), height: 40, width: 40})])}), C[5] || CT.C5, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidget().of([new container.Container.new({child: new basic.Center.new({child: new text.Text.new("4", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("5", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("6", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("-", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.indigo}), height: 40, width: 40})])}), C[5] || CT.C5, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidget().of([new container.Container.new({child: new basic.Center.new({child: new text.Text.new("1", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("2", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("3", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("+", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.indigo}), height: 40, width: 40})])}), C[5] || CT.C5, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidget().of([new container.Container.new({child: new basic.Center.new({child: new text.Text.new("00", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("0", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new(".", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.grey}), height: 40, width: 40}), new container.Container.new({child: new basic.Center.new({child: new text.Text.new("=", {style: new text_style.TextStyle.new({fontSize: 20, fontWeight: ui.FontWeight.bold})})}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.indigo}), height: 40, width: 40})])})])})})})});
    }
  };
  (calculator.Calculator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    calculator.Calculator.__proto__.new.call(this, {key: key});
    ;
  }).prototype = calculator.Calculator.prototype;
  dart.addTypeTests(calculator.Calculator);
  dart.addTypeCaches(calculator.Calculator);
  dart.setMethodSignature(calculator.Calculator, () => ({
    __proto__: dart.getMethods(calculator.Calculator.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(calculator.Calculator, I[1]);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "package:flutter_app/calculator.dart": calculator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/calculator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;;UC3C4B;AACxB,YAAO,iCACE,sBACA,yCACe;IAK1B;;;QAbmB;AAAb,8CAAa,GAAG;;EAAE;;;;;;;;;AAJH,IAArB;EACF;;ECEwB;;;;;;;;;UCDI;AACnB,iBAAkB,AAAY,0BAAT,OAAO;AACnC,YAAO,6CACmB,2BAClB,mCACC,qCACG,AAAK,IAAD,gBACL,AAAK,IAAD,eACJ,0CACkC,uCAC9B,uCAIT,kBACA,iBACO,qCACO,+BACJ,uBAMb,sCACsC,8CAE3B,wBAET,oCACQ,6BACE,kBACL,cACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGT,oCACiB,6BACN,kBACL,cACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,gCAER,WACD,yBAQV,sCACsC,8CAE3B,wBAET,oCACgB,6BACN,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGT,oCACiB,6BACN,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,gCAER,WACD,yBAQV,sCACsC,8CAE3B,wBAET,oCACgB,6BACN,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGT,oCACiB,6BACN,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,gCAER,WACD,yBAQV,sCACsC,8CAE3B,wBAET,oCACgB,6BACN,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGT,oCACiB,6BACN,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,gCAER,WACD,yBAQV,sCACsC,8CAE3B,wBAET,oCACgB,6BACN,kBACL,cACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGT,oCACiB,6BACN,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,8BAER,WACD,MAGP,oCACiB,6BACR,kBACL,aACO,wCACK,gBACa,sCAIjB,oDACiB,wCAAS,YACtB,gCAER,WACD;IAgBb;;;QA7bwB;AAAlB,yDAAkB,GAAG;;EAAE","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    calculator: calculator
  };
}));

//# sourceMappingURL=main.js.map
