import {
  Container,
  TYPES,
  inject,
  injectable
} from "./chunks/chunk-RYLKJ3SC.js";
import {
  __commonJS,
  __toESM
} from "./chunks/chunk-SK6HMZ5B.js";

// node_modules/reflect-metadata/Reflect.js
var require_Reflect = __commonJS({
  "node_modules/reflect-metadata/Reflect.js"() {
    var Reflect2;
    (function(Reflect3) {
      (function(factory) {
        var root2 = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
        var exporter = makeExporter(Reflect3);
        if (typeof root2.Reflect !== "undefined") {
          exporter = makeExporter(root2.Reflect, exporter);
        }
        factory(exporter, root2);
        if (typeof root2.Reflect === "undefined") {
          root2.Reflect = Reflect3;
        }
        function makeExporter(target, previous) {
          return function(key, value) {
            Object.defineProperty(target, key, { configurable: true, writable: true, value });
            if (previous)
              previous(key, value);
          };
        }
        function functionThis() {
          try {
            return Function("return this;")();
          } catch (_) {
          }
        }
        function indirectEvalThis() {
          try {
            return (void 0, eval)("(function() { return this; })()");
          } catch (_) {
          }
        }
        function sloppyModeThis() {
          return functionThis() || indirectEvalThis();
        }
      })(function(exporter, root2) {
        var hasOwn = Object.prototype.hasOwnProperty;
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function";
        var supportsProto = { __proto__: [] } instanceof Array;
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
          // create an object in dictionary mode (a.k.a. "slow" mode in v8)
          create: supportsCreate ? function() {
            return MakeDictionary(/* @__PURE__ */ Object.create(null));
          } : supportsProto ? function() {
            return MakeDictionary({ __proto__: null });
          } : function() {
            return MakeDictionary({});
          },
          has: downLevel ? function(map, key) {
            return hasOwn.call(map, key);
          } : function(map, key) {
            return key in map;
          },
          get: downLevel ? function(map, key) {
            return hasOwn.call(map, key) ? map[key] : void 0;
          } : function(map, key) {
            return map[key];
          }
        };
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        var registrySymbol = supportsSymbol ? /* @__PURE__ */ Symbol.for("@reflect-metadata:registry") : void 0;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        function decorate(decorators, target, propertyKey, attributes) {
          if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsObject(target))
              throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
              throw new TypeError();
            if (IsNull(attributes))
              attributes = void 0;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
          } else {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsConstructor(target))
              throw new TypeError();
            return DecorateConstructor(decorators, target);
          }
        }
        exporter("decorate", decorate);
        function metadata(metadataKey, metadataValue) {
          function decorator(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
              throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          return decorator;
        }
        exporter("metadata", metadata);
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        function hasMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        function hasOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        function getMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        function getOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        function getMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        function getOwnMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        function deleteMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          var provider = GetMetadataProvider(
            target,
            propertyKey,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsConstructor(decorated))
                throw new TypeError();
              target = decorated;
            }
          }
          return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsObject(decorated))
                throw new TypeError();
              descriptor = decorated;
            }
          }
          return descriptor;
        }
        function OrdinaryHasMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2)
            return true;
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
          return false;
        }
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
        }
        function OrdinaryGetMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
          return void 0;
        }
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return;
          return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            true
          );
          provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
        }
        function OrdinaryMetadataKeys(O, P) {
          var ownKeys = OrdinaryOwnMetadataKeys(O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (parent === null)
            return ownKeys;
          var parentKeys = OrdinaryMetadataKeys(parent, P);
          if (parentKeys.length <= 0)
            return ownKeys;
          if (ownKeys.length <= 0)
            return parentKeys;
          var set = new _Set();
          var keys = [];
          for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          return keys;
        }
        function OrdinaryOwnMetadataKeys(O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*create*/
            false
          );
          if (!provider) {
            return [];
          }
          return provider.OrdinaryOwnMetadataKeys(O, P);
        }
        function Type(x) {
          if (x === null)
            return 1;
          switch (typeof x) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return x === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function IsUndefined(x) {
          return x === void 0;
        }
        function IsNull(x) {
          return x === null;
        }
        function IsSymbol(x) {
          return typeof x === "symbol";
        }
        function IsObject(x) {
          return typeof x === "object" ? x !== null : typeof x === "function";
        }
        function ToPrimitive(input, PreferredType) {
          switch (Type(input)) {
            case 0:
              return input;
            case 1:
              return input;
            case 2:
              return input;
            case 3:
              return input;
            case 4:
              return input;
            case 5:
              return input;
          }
          var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
          var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
          if (exoticToPrim !== void 0) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
              throw new TypeError();
            return result;
          }
          return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        function OrdinaryToPrimitive(O, hint) {
          if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
              var result = toString_1.call(O);
              if (!IsObject(result))
                return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result))
                return result;
            }
          } else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result))
                return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
              var result = toString_2.call(O);
              if (!IsObject(result))
                return result;
            }
          }
          throw new TypeError();
        }
        function ToBoolean(argument) {
          return !!argument;
        }
        function ToString(argument) {
          return "" + argument;
        }
        function ToPropertyKey(argument) {
          var key = ToPrimitive(
            argument,
            3
            /* String */
          );
          if (IsSymbol(key))
            return key;
          return ToString(key);
        }
        function IsArray(argument) {
          return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
        }
        function IsCallable(argument) {
          return typeof argument === "function";
        }
        function IsConstructor(argument) {
          return typeof argument === "function";
        }
        function IsPropertyKey(argument) {
          switch (Type(argument)) {
            case 3:
              return true;
            case 4:
              return true;
            default:
              return false;
          }
        }
        function SameValueZero(x, y) {
          return x === y || x !== x && y !== y;
        }
        function GetMethod(V, P) {
          var func = V[P];
          if (func === void 0 || func === null)
            return void 0;
          if (!IsCallable(func))
            throw new TypeError();
          return func;
        }
        function GetIterator(obj) {
          var method = GetMethod(obj, iteratorSymbol);
          if (!IsCallable(method))
            throw new TypeError();
          var iterator = method.call(obj);
          if (!IsObject(iterator))
            throw new TypeError();
          return iterator;
        }
        function IteratorValue(iterResult) {
          return iterResult.value;
        }
        function IteratorStep(iterator) {
          var result = iterator.next();
          return result.done ? false : result;
        }
        function IteratorClose(iterator) {
          var f = iterator["return"];
          if (f)
            f.call(iterator);
        }
        function OrdinaryGetPrototypeOf(O) {
          var proto = Object.getPrototypeOf(O);
          if (typeof O !== "function" || O === functionPrototype)
            return proto;
          if (proto !== functionPrototype)
            return proto;
          var prototype = O.prototype;
          var prototypeProto = prototype && Object.getPrototypeOf(prototype);
          if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
          var constructor = prototypeProto.constructor;
          if (typeof constructor !== "function")
            return proto;
          if (constructor === O)
            return proto;
          return constructor;
        }
        function CreateMetadataRegistry() {
          var fallback;
          if (!IsUndefined(registrySymbol) && typeof root2.Reflect !== "undefined" && !(registrySymbol in root2.Reflect) && typeof root2.Reflect.defineMetadata === "function") {
            fallback = CreateFallbackProvider(root2.Reflect);
          }
          var first;
          var second;
          var rest;
          var targetProviderMap = new _WeakMap();
          var registry = {
            registerProvider,
            getProvider,
            setProvider
          };
          return registry;
          function registerProvider(provider) {
            if (!Object.isExtensible(registry)) {
              throw new Error("Cannot add provider to a frozen registry.");
            }
            switch (true) {
              case fallback === provider:
                break;
              case IsUndefined(first):
                first = provider;
                break;
              case first === provider:
                break;
              case IsUndefined(second):
                second = provider;
                break;
              case second === provider:
                break;
              default:
                if (rest === void 0)
                  rest = new _Set();
                rest.add(provider);
                break;
            }
          }
          function getProviderNoCache(O, P) {
            if (!IsUndefined(first)) {
              if (first.isProviderFor(O, P))
                return first;
              if (!IsUndefined(second)) {
                if (second.isProviderFor(O, P))
                  return first;
                if (!IsUndefined(rest)) {
                  var iterator = GetIterator(rest);
                  while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                      return void 0;
                    }
                    var provider = IteratorValue(next);
                    if (provider.isProviderFor(O, P)) {
                      IteratorClose(iterator);
                      return provider;
                    }
                  }
                }
              }
            }
            if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
              return fallback;
            }
            return void 0;
          }
          function getProvider(O, P) {
            var providerMap = targetProviderMap.get(O);
            var provider;
            if (!IsUndefined(providerMap)) {
              provider = providerMap.get(P);
            }
            if (!IsUndefined(provider)) {
              return provider;
            }
            provider = getProviderNoCache(O, P);
            if (!IsUndefined(provider)) {
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return provider;
          }
          function hasProvider(provider) {
            if (IsUndefined(provider))
              throw new TypeError();
            return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
          }
          function setProvider(O, P, provider) {
            if (!hasProvider(provider)) {
              throw new Error("Metadata provider not registered.");
            }
            var existingProvider = getProvider(O, P);
            if (existingProvider !== provider) {
              if (!IsUndefined(existingProvider)) {
                return false;
              }
              var providerMap = targetProviderMap.get(O);
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return true;
          }
        }
        function GetOrCreateMetadataRegistry() {
          var metadataRegistry2;
          if (!IsUndefined(registrySymbol) && IsObject(root2.Reflect) && Object.isExtensible(root2.Reflect)) {
            metadataRegistry2 = root2.Reflect[registrySymbol];
          }
          if (IsUndefined(metadataRegistry2)) {
            metadataRegistry2 = CreateMetadataRegistry();
          }
          if (!IsUndefined(registrySymbol) && IsObject(root2.Reflect) && Object.isExtensible(root2.Reflect)) {
            Object.defineProperty(root2.Reflect, registrySymbol, {
              enumerable: false,
              configurable: false,
              writable: false,
              value: metadataRegistry2
            });
          }
          return metadataRegistry2;
        }
        function CreateMetadataProvider(registry) {
          var metadata2 = new _WeakMap();
          var provider = {
            isProviderFor: function(O, P) {
              var targetMetadata = metadata2.get(O);
              if (IsUndefined(targetMetadata))
                return false;
              return targetMetadata.has(P);
            },
            OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
            OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
            OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
            OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
            OrdinaryDeleteMetadata
          };
          metadataRegistry.registerProvider(provider);
          return provider;
          function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = metadata2.get(O);
            var createdTargetMetadata = false;
            if (IsUndefined(targetMetadata)) {
              if (!Create)
                return void 0;
              targetMetadata = new _Map();
              metadata2.set(O, targetMetadata);
              createdTargetMetadata = true;
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
              if (!Create)
                return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P, metadataMap);
              if (!registry.setProvider(O, P, provider)) {
                targetMetadata.delete(P);
                if (createdTargetMetadata) {
                  metadata2.delete(O);
                }
                throw new Error("Wrong provider for target.");
              }
            }
            return metadataMap;
          }
          function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return void 0;
            return metadataMap.get(MetadataKey);
          }
          function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              true
            );
            metadataMap.set(MetadataKey, MetadataValue);
          }
          function OrdinaryOwnMetadataKeys2(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k] = nextValue;
              } catch (e) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e;
                }
              }
              k++;
            }
          }
          function OrdinaryDeleteMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            if (!metadataMap.delete(MetadataKey))
              return false;
            if (metadataMap.size === 0) {
              var targetMetadata = metadata2.get(O);
              if (!IsUndefined(targetMetadata)) {
                targetMetadata.delete(P);
                if (targetMetadata.size === 0) {
                  metadata2.delete(targetMetadata);
                }
              }
            }
            return true;
          }
        }
        function CreateFallbackProvider(reflect) {
          var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
          var metadataOwner = new _WeakMap();
          var provider = {
            isProviderFor: function(O, P) {
              var metadataPropertySet = metadataOwner.get(O);
              if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                return true;
              }
              if (getOwnMetadataKeys2(O, P).length) {
                if (IsUndefined(metadataPropertySet)) {
                  metadataPropertySet = new _Set();
                  metadataOwner.set(O, metadataPropertySet);
                }
                metadataPropertySet.add(P);
                return true;
              }
              return false;
            },
            OrdinaryDefineOwnMetadata: defineMetadata2,
            OrdinaryHasOwnMetadata: hasOwnMetadata2,
            OrdinaryGetOwnMetadata: getOwnMetadata2,
            OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
            OrdinaryDeleteMetadata: deleteMetadata2
          };
          return provider;
        }
        function GetMetadataProvider(O, P, Create) {
          var registeredProvider = metadataRegistry.getProvider(O, P);
          if (!IsUndefined(registeredProvider)) {
            return registeredProvider;
          }
          if (Create) {
            if (metadataRegistry.setProvider(O, P, metadataProvider)) {
              return metadataProvider;
            }
            throw new Error("Illegal state.");
          }
          return void 0;
        }
        function CreateMapPolyfill() {
          var cacheSentinel = {};
          var arraySentinel = [];
          var MapIterator = (
            /** @class */
            (function() {
              function MapIterator2(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
              }
              MapIterator2.prototype["@@iterator"] = function() {
                return this;
              };
              MapIterator2.prototype[iteratorSymbol] = function() {
                return this;
              };
              MapIterator2.prototype.next = function() {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                  var result = this._selector(this._keys[index], this._values[index]);
                  if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  } else {
                    this._index++;
                  }
                  return { value: result, done: false };
                }
                return { value: void 0, done: true };
              };
              MapIterator2.prototype.throw = function(error) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                throw error;
              };
              MapIterator2.prototype.return = function(value) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                return { value, done: true };
              };
              return MapIterator2;
            })()
          );
          var Map2 = (
            /** @class */
            (function() {
              function Map3() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              Object.defineProperty(Map3.prototype, "size", {
                get: function() {
                  return this._keys.length;
                },
                enumerable: true,
                configurable: true
              });
              Map3.prototype.has = function(key) {
                return this._find(
                  key,
                  /*insert*/
                  false
                ) >= 0;
              };
              Map3.prototype.get = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                return index >= 0 ? this._values[index] : void 0;
              };
              Map3.prototype.set = function(key, value) {
                var index = this._find(
                  key,
                  /*insert*/
                  true
                );
                this._values[index] = value;
                return this;
              };
              Map3.prototype.delete = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                if (index >= 0) {
                  var size = this._keys.length;
                  for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                  }
                  this._keys.length--;
                  this._values.length--;
                  if (SameValueZero(key, this._cacheKey)) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                  }
                  return true;
                }
                return false;
              };
              Map3.prototype.clear = function() {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              };
              Map3.prototype.keys = function() {
                return new MapIterator(this._keys, this._values, getKey);
              };
              Map3.prototype.values = function() {
                return new MapIterator(this._keys, this._values, getValue);
              };
              Map3.prototype.entries = function() {
                return new MapIterator(this._keys, this._values, getEntry);
              };
              Map3.prototype["@@iterator"] = function() {
                return this.entries();
              };
              Map3.prototype[iteratorSymbol] = function() {
                return this.entries();
              };
              Map3.prototype._find = function(key, insert) {
                if (!SameValueZero(this._cacheKey, key)) {
                  this._cacheIndex = -1;
                  for (var i = 0; i < this._keys.length; i++) {
                    if (SameValueZero(this._keys[i], key)) {
                      this._cacheIndex = i;
                      break;
                    }
                  }
                }
                if (this._cacheIndex < 0 && insert) {
                  this._cacheIndex = this._keys.length;
                  this._keys.push(key);
                  this._values.push(void 0);
                }
                return this._cacheIndex;
              };
              return Map3;
            })()
          );
          return Map2;
          function getKey(key, _) {
            return key;
          }
          function getValue(_, value) {
            return value;
          }
          function getEntry(key, value) {
            return [key, value];
          }
        }
        function CreateSetPolyfill() {
          var Set2 = (
            /** @class */
            (function() {
              function Set3() {
                this._map = new _Map();
              }
              Object.defineProperty(Set3.prototype, "size", {
                get: function() {
                  return this._map.size;
                },
                enumerable: true,
                configurable: true
              });
              Set3.prototype.has = function(value) {
                return this._map.has(value);
              };
              Set3.prototype.add = function(value) {
                return this._map.set(value, value), this;
              };
              Set3.prototype.delete = function(value) {
                return this._map.delete(value);
              };
              Set3.prototype.clear = function() {
                this._map.clear();
              };
              Set3.prototype.keys = function() {
                return this._map.keys();
              };
              Set3.prototype.values = function() {
                return this._map.keys();
              };
              Set3.prototype.entries = function() {
                return this._map.entries();
              };
              Set3.prototype["@@iterator"] = function() {
                return this.keys();
              };
              Set3.prototype[iteratorSymbol] = function() {
                return this.keys();
              };
              return Set3;
            })()
          );
          return Set2;
        }
        function CreateWeakMapPolyfill() {
          var UUID_SIZE = 16;
          var keys = HashMap.create();
          var rootKey = CreateUniqueKey();
          return (
            /** @class */
            (function() {
              function WeakMap2() {
                this._key = CreateUniqueKey();
              }
              WeakMap2.prototype.has = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.has(table, this._key) : false;
              };
              WeakMap2.prototype.get = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.get(table, this._key) : void 0;
              };
              WeakMap2.prototype.set = function(target, value) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  true
                );
                table[this._key] = value;
                return this;
              };
              WeakMap2.prototype.delete = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? delete table[this._key] : false;
              };
              WeakMap2.prototype.clear = function() {
                this._key = CreateUniqueKey();
              };
              return WeakMap2;
            })()
          );
          function CreateUniqueKey() {
            var key;
            do
              key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
          }
          function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
              if (!create)
                return void 0;
              Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
          }
          function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
              buffer[i] = Math.random() * 255 | 0;
            return buffer;
          }
          function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
              var array = new Uint8Array(size);
              if (typeof crypto !== "undefined") {
                crypto.getRandomValues(array);
              } else if (typeof msCrypto !== "undefined") {
                msCrypto.getRandomValues(array);
              } else {
                FillRandomBytes(array, size);
              }
              return array;
            }
            return FillRandomBytes(new Array(size), size);
          }
          function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            data[6] = data[6] & 79 | 64;
            data[8] = data[8] & 191 | 128;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
              var byte = data[offset];
              if (offset === 4 || offset === 6 || offset === 8)
                result += "-";
              if (byte < 16)
                result += "0";
              result += byte.toString(16).toLowerCase();
            }
            return result;
          }
        }
        function MakeDictionary(obj) {
          obj.__ = void 0;
          delete obj.__;
          return obj;
        }
      });
    })(Reflect2 || (Reflect2 = {}));
  }
});

// dist/main.js
var import_reflect_metadata = __toESM(require_Reflect(), 1);

// dist/app-config.js
var APP_NAME = "InversifyJS Plugin Playground";
var APP_DESCRIPTION = "A VS Code-style TypeScript workbench that loads plugins dynamically and hands each one a ctx API for panels, commands, events, shared state, and logging.";

// dist/core/services/app-shell.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var AppShell = class AppShell2 {
  constructor(document2, root2) {
    this.document = document2;
    this.root = root2;
    this.commandButtons = /* @__PURE__ */ new Map();
    this.panels = /* @__PURE__ */ new Map();
    this.pluginStates = /* @__PURE__ */ new Map();
  }
  mount(appName, description) {
    this.root.replaceChildren();
    this.commandButtons.clear();
    this.panels.clear();
    this.pluginStates.clear();
    const shell2 = this.create("div", "workbench");
    const titlebar = this.create("header", "titlebar");
    const titlebarBrand = this.create("div", "titlebar__brand");
    const eyebrow = this.create("span", "titlebar__eyebrow", "Extension Host Demo");
    const title = this.create("h1", "titlebar__title", appName);
    const copy = this.create("p", "titlebar__description", description);
    titlebarBrand.append(eyebrow, title, copy);
    const titlebarMeta = this.create("div", "titlebar__meta");
    titlebarMeta.append(this.create("span", "pill", "TypeScript host"), this.create("span", "pill", "Dynamic plugins"), this.create("span", "pill", "InversifyJS ctx"));
    titlebar.append(titlebarBrand, titlebarMeta);
    const frame = this.create("div", "workbench__frame");
    frame.append(this.createActivityBar());
    const sidebar = this.create("aside", "sidebar");
    const sidebarHeader = this.create("div", "sidebar__header");
    const sidebarEyebrow = this.create("span", "sidebar__eyebrow", "Explorer");
    const sidebarTitle = this.create("h2", "sidebar__title", "Plugin Workbench");
    const sidebarCopy = this.create("p", "section-copy", "Load plugins like extensions. The host injects ctx services for commands, panels, events, shared state, and logging.");
    sidebarHeader.append(sidebarEyebrow, sidebarTitle, sidebarCopy);
    const guideSection = this.createSection("Quick Start", "Use the same flow every time so the extension boundary stays obvious.", "3 steps");
    const guideList = this.create("ol", "guide-list");
    guideList.append(this.create("li", "guide-list__item", "Load Greeter to publish greetings through shared host services."), this.create("li", "guide-list__item", "Load Dashboard to observe the same events and state without direct coupling."), this.create("li", "guide-list__item", "Trigger registered commands from the host toolbar to prove plugins can extend it."));
    guideSection.body.append(guideList);
    const workspaceSection = this.createSection("Workspace Files", "A simplified explorer view of the host application and plugin boundary.", "src/");
    workspaceSection.body.append(this.createTree([
      { label: "src", depth: 0, kind: "folder" },
      { label: "core", depth: 1, kind: "folder" },
      { label: "services/app-shell.ts", depth: 2, kind: "file", active: true },
      { label: "plugin-catalog.ts", depth: 1, kind: "file" },
      { label: "plugins", depth: 1, kind: "folder" },
      { label: "greeter.plugin.ts", depth: 2, kind: "file" },
      { label: "dashboard.plugin.ts", depth: 2, kind: "file" }
    ]));
    const catalogSection = this.createSection("Extensions", "Dynamic imports keep each plugin isolated until you explicitly load it.", "Runtime catalog");
    this.pluginCatalog = this.create("div", "plugin-grid");
    catalogSection.body.append(this.pluginCatalog);
    sidebar.append(sidebarHeader, guideSection.element, workspaceSection.element, catalogSection.element);
    const editor = this.create("main", "editor");
    const editorTop = this.create("div", "editor__top");
    const editorTabs = this.create("div", "editor-tabs");
    editorTabs.append(this.createTab("host-workbench.ts", true), this.createTab("plugins.runtime.ts"), this.createTab("output.log"));
    const editorHint = this.create("span", "editor__hint", "Context-aware extension host");
    editorTop.append(editorTabs, editorHint);
    const editorCanvas = this.create("div", "editor__canvas");
    const overview = this.create("div", "overview-grid");
    overview.append(this.createOverviewCard("Load Extensions", "Activate plugins on demand from the explorer instead of shipping everything eagerly."), this.createOverviewCard("Share Host Services", "Each plugin receives the same ctx contract for UI, commands, events, state, and logging."), this.createOverviewCard("Observe Collaboration", "Greeter publishes host events while Dashboard reacts in real time without importing it directly."));
    const commandSection = this.createSection("Command Palette", "Active plugins can register toolbar commands through ctx.commands.register(...).", "Live toolbar");
    this.commandEmptyState = this.create("p", "empty-state", "Load a plugin to expose host commands here.");
    this.commandBar = this.create("div", "command-bar");
    commandSection.body.append(this.commandEmptyState, this.commandBar);
    const panelSection = this.createSection("Editor Group", "Panels created by plugins mount here with plain DOM APIs.", "Plugin panels");
    this.panelEmptyState = this.create("div", "panel-empty");
    const panelEmptyTitle = this.create("strong", "panel-empty__title", "No active plugin panels");
    const panelEmptyCopy = this.create("p", "muted", "Load Greeter first, then Dashboard, to watch plugins share state and events inside the workbench.");
    this.panelEmptyState.append(panelEmptyTitle, panelEmptyCopy);
    this.panelHost = this.create("div", "panel-host");
    panelSection.body.append(this.panelEmptyState, this.panelHost);
    const capabilitySection = this.createSection("ctx API Surface", "Every plugin receives the same host contract, similar to an editor extension API.", "Stable contract");
    const capabilityGrid = this.create("div", "capability-grid");
    capabilityGrid.append(this.createCapabilityCard("ctx.ui", "Create panels, notices, and shell-visible UI affordances."), this.createCapabilityCard("ctx.commands", "Register host commands that appear in the toolbar."), this.createCapabilityCard("ctx.events", "Publish and subscribe to host-wide domain events."), this.createCapabilityCard("ctx.state", "Read and react to shared host state without direct plugin imports."), this.createCapabilityCard("ctx.logger", "Write plugin-originated messages into the host output panel."));
    capabilitySection.body.append(capabilityGrid);
    editorCanvas.append(overview, commandSection.element, panelSection.element, capabilitySection.element);
    const outputPanel = this.create("section", "output-panel");
    const outputHeader = this.create("div", "output-panel__header");
    const outputTitleGroup = this.create("div", "output-panel__title-group");
    const outputEyebrow = this.create("span", "output-panel__eyebrow", "Panel");
    const outputTitle = this.create("h2", "section-title", "Output");
    const outputCopy = this.create("p", "section-copy", "Plugin lifecycle events and plugin-originated messages are appended here.");
    outputTitleGroup.append(outputEyebrow, outputTitle, outputCopy);
    outputHeader.append(outputTitleGroup, this.create("span", "pill", "Activity log"));
    this.logList = this.create("ul", "log-list");
    outputPanel.append(outputHeader, this.logList);
    editor.append(editorTop, editorCanvas, outputPanel);
    frame.append(sidebar, editor);
    const statusBar = this.create("footer", "status-bar");
    const statusLeft = this.create("div", "status-bar__group");
    statusLeft.append(this.create("span", "status-bar__item status-bar__item--emphasis", "Extension host ready"), this.create("span", "status-bar__item", "TypeScript + DOM runtime"));
    const statusRight = this.create("div", "status-bar__group");
    this.loadedCountItem = this.create("span", "status-bar__item", "0 plugins loaded");
    this.commandCountItem = this.create("span", "status-bar__item", "0 commands");
    this.panelCountItem = this.create("span", "status-bar__item", "0 panels");
    statusRight.append(this.loadedCountItem, this.commandCountItem, this.panelCountItem);
    statusBar.append(statusLeft, statusRight);
    this.noticeHost = this.create("div", "notice-stack");
    shell2.append(titlebar, frame, statusBar);
    this.root.append(shell2, this.noticeHost);
    this.refreshWorkbenchStats();
  }
  addPluginCard(meta, initialLoaded, onToggle) {
    const card = this.create("article", "plugin-card");
    const header = this.create("div", "plugin-card__header");
    const titleBlock = this.create("div", "plugin-card__title-block");
    const title = this.create("h3", "plugin-card__title", meta.name);
    const pluginId = this.create("p", "plugin-card__id", meta.id);
    const status = this.create("span", "plugin-card__status");
    titleBlock.append(title, pluginId);
    header.append(titleBlock, status);
    const description = this.create("p", "plugin-card__description", meta.description);
    const button = this.create("button", "button button--ghost", "Load plugin");
    button.type = "button";
    let loaded = initialLoaded;
    this.pluginStates.set(meta.id, loaded);
    const syncState = () => {
      this.pluginStates.set(meta.id, loaded);
      status.textContent = loaded ? "Loaded" : "Not loaded";
      status.className = loaded ? "plugin-card__status plugin-card__status--loaded" : "plugin-card__status";
      button.textContent = loaded ? "Unload plugin" : "Load plugin";
      this.refreshWorkbenchStats();
    };
    button.addEventListener("click", async () => {
      button.disabled = true;
      button.textContent = loaded ? "Unloading..." : "Loading...";
      loaded = await onToggle();
      syncState();
      button.disabled = false;
    });
    syncState();
    card.append(header, description, button);
    this.pluginCatalog.append(card);
  }
  addCommand(command) {
    if (this.commandButtons.has(command.id)) {
      throw new Error(`Command "${command.id}" is already registered.`);
    }
    const button = this.create("button", "button button--primary", command.title);
    button.type = "button";
    button.addEventListener("click", command.run);
    this.commandButtons.set(command.id, button);
    this.commandBar.append(button);
    this.refreshWorkbenchStats();
    return {
      dispose: () => {
        button.removeEventListener("click", command.run);
        button.remove();
        this.commandButtons.delete(command.id);
        this.refreshWorkbenchStats();
      }
    };
  }
  createPanel(options) {
    if (this.panels.has(options.id)) {
      throw new Error(`Panel "${options.id}" is already mounted.`);
    }
    const panel = this.create("article", "plugin-panel");
    const header = this.create("div", "plugin-panel__header");
    const title = this.create("h3", "plugin-panel__title", options.title);
    const status = this.create("span", "plugin-panel__status", "Ready");
    header.append(title, status);
    const description = this.create("p", "plugin-panel__description", options.description);
    const body = this.create("div", "plugin-panel__body");
    panel.append(header, description, body);
    this.panelHost.append(panel);
    const handle = {
      id: options.id,
      element: panel,
      body,
      setStatus: (text) => {
        status.textContent = text;
      },
      destroy: () => {
        if (!this.panels.has(options.id)) {
          return;
        }
        panel.remove();
        this.panels.delete(options.id);
        this.refreshWorkbenchStats();
      }
    };
    this.panels.set(options.id, handle);
    this.refreshWorkbenchStats();
    return handle;
  }
  showNotice(message, options = {}) {
    const notice = this.create("div", `notice notice--${options.kind ?? "info"}`, message);
    const timeoutMs = options.timeoutMs ?? 3200;
    this.noticeHost.prepend(notice);
    window.setTimeout(() => {
      notice.remove();
    }, timeoutMs);
  }
  appendLog(level, message) {
    const item = this.create("li", "log-item");
    const levelBadge = this.create("span", level === "warn" ? "log-level log-level--warn" : "log-level", level);
    const time = this.create("span", "log-time", (/* @__PURE__ */ new Date()).toLocaleTimeString());
    const text = this.create("span", "", message);
    item.append(levelBadge, time, text);
    this.logList.prepend(item);
    while (this.logList.childElementCount > 30) {
      this.logList.lastElementChild?.remove();
    }
  }
  createSection(titleText, copyText, badgeText) {
    const section = this.create("section", "section-card");
    const header = this.create("div", "section-card__header");
    const titleGroup = this.create("div", "section-card__title-group");
    const title = this.create("h2", "section-title", titleText);
    const copy = this.create("p", "section-copy", copyText);
    const body = this.create("div", "section-card__body");
    titleGroup.append(title, copy);
    header.append(titleGroup);
    if (badgeText) {
      header.append(this.create("span", "pill", badgeText));
    }
    section.append(header, body);
    return { element: section, body };
  }
  createActivityBar() {
    const activityBar = this.create("nav", "activity-bar");
    activityBar.append(this.createActivityButton("EX", "Explorer", true), this.createActivityButton("PL", "Plugins"), this.createActivityButton("OUT", "Output"));
    return activityBar;
  }
  createActivityButton(shortLabel, description, active = false) {
    const button = this.create("button", active ? "activity-bar__button activity-bar__button--active" : "activity-bar__button", shortLabel);
    button.type = "button";
    button.setAttribute("aria-label", description);
    button.title = description;
    return button;
  }
  createTab(label, active = false) {
    return this.create("span", active ? "editor-tab editor-tab--active" : "editor-tab", label);
  }
  createOverviewCard(titleText, copyText) {
    const card = this.create("div", "overview-card");
    const title = this.create("h2", "overview-card__title", titleText);
    const copy = this.create("p", "overview-card__copy", copyText);
    card.append(title, copy);
    return card;
  }
  createCapabilityCard(titleText, copyText) {
    const card = this.create("div", "capability-card");
    const title = this.create("h3", "capability-card__title", titleText);
    const copy = this.create("p", "capability-card__copy", copyText);
    card.append(title, copy);
    return card;
  }
  createTree(entries) {
    const tree = this.create("div", "tree");
    for (const entry of entries) {
      const row = this.create("div", entry.active ? "tree-row tree-row--active" : "tree-row", entry.label);
      row.style.setProperty("--tree-depth", String(entry.depth));
      row.dataset.icon = entry.kind === "folder" ? "\u25B8" : "\u2022";
      tree.append(row);
    }
    return tree;
  }
  refreshWorkbenchStats() {
    const loadedCount = [...this.pluginStates.values()].filter(Boolean).length;
    const commandCount = this.commandButtons.size;
    const panelCount = this.panels.size;
    this.loadedCountItem.textContent = `${loadedCount} plugin${loadedCount === 1 ? "" : "s"} loaded`;
    this.commandCountItem.textContent = `${commandCount} command${commandCount === 1 ? "" : "s"}`;
    this.panelCountItem.textContent = `${panelCount} panel${panelCount === 1 ? "" : "s"}`;
    this.commandEmptyState.hidden = commandCount > 0;
    this.panelEmptyState.hidden = panelCount > 0;
  }
  create(tagName, className, textContent) {
    const element = this.document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (textContent !== void 0) {
      element.textContent = textContent;
    }
    return element;
  }
};
AppShell = __decorate([
  injectable(),
  __param(0, inject(TYPES.Document)),
  __param(1, inject(TYPES.RootElement)),
  __metadata("design:paramtypes", [
    Document,
    HTMLElement
  ])
], AppShell);

// dist/core/services/command-registry.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata2 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param2 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var CommandRegistry = class CommandRegistry2 {
  constructor(shell2) {
    this.shell = shell2;
  }
  register(command) {
    return this.shell.addCommand(command);
  }
};
CommandRegistry = __decorate2([
  injectable(),
  __param2(0, inject(TYPES.AppShell)),
  __metadata2("design:paramtypes", [AppShell])
], CommandRegistry);

// dist/core/services/event-bus.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EventBus = class EventBus2 {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
  }
  publish(type, payload, source) {
    const event = {
      type,
      payload,
      source,
      occurredAt: /* @__PURE__ */ new Date()
    };
    this.listeners.get(type)?.forEach((listener) => {
      listener(event);
    });
  }
  subscribe(type, handler) {
    const wrapped = (event) => {
      handler(event);
    };
    const listenersForType = this.listeners.get(type) ?? /* @__PURE__ */ new Set();
    listenersForType.add(wrapped);
    this.listeners.set(type, listenersForType);
    return {
      dispose: () => {
        listenersForType.delete(wrapped);
        if (listenersForType.size === 0) {
          this.listeners.delete(type);
        }
      }
    };
  }
};
EventBus = __decorate3([
  injectable()
], EventBus);

// dist/core/services/logger.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata3 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param3 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var Logger = class Logger2 {
  constructor(shell2) {
    this.shell = shell2;
  }
  info(message) {
    this.shell.appendLog("info", message);
  }
  warn(message) {
    this.shell.appendLog("warn", message);
  }
};
Logger = __decorate4([
  injectable(),
  __param3(0, inject(TYPES.AppShell)),
  __metadata3("design:paramtypes", [AppShell])
], Logger);

// dist/core/services/shared-state.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SharedState = class SharedState2 {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
    this.values = /* @__PURE__ */ new Map();
  }
  get(key, initialValue) {
    if (!this.values.has(key)) {
      this.values.set(key, initialValue);
    }
    return this.values.get(key);
  }
  set(key, value) {
    this.values.set(key, value);
    this.listeners.get(key)?.forEach((listener) => {
      listener(value);
    });
  }
  update(key, initialValue, updater) {
    const nextValue = updater(this.get(key, initialValue));
    this.set(key, nextValue);
    return nextValue;
  }
  subscribe(key, listener) {
    const wrapped = (value) => {
      listener(value);
    };
    const listenersForKey = this.listeners.get(key) ?? /* @__PURE__ */ new Set();
    listenersForKey.add(wrapped);
    this.listeners.set(key, listenersForKey);
    return {
      dispose: () => {
        listenersForKey.delete(wrapped);
        if (listenersForKey.size === 0) {
          this.listeners.delete(key);
        }
      }
    };
  }
};
SharedState = __decorate5([
  injectable()
], SharedState);

// dist/core/services/plugin-manager.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata4 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param4 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var PluginManager = class PluginManager2 {
  constructor(container2, shell2, commands, state, events, logger) {
    this.container = container2;
    this.shell = shell2;
    this.commands = commands;
    this.state = state;
    this.events = events;
    this.logger = logger;
    this.loadedPlugins = /* @__PURE__ */ new Map();
    this.ctx = {
      appName: APP_NAME,
      container: this.container,
      commands: this.commands,
      ui: this.shell,
      state: this.state,
      events: this.events,
      logger: this.logger
    };
  }
  isLoaded(pluginId) {
    return this.loadedPlugins.has(pluginId);
  }
  async toggle(entry) {
    return this.isLoaded(entry.meta.id) ? this.unload(entry.meta.id) : this.load(entry);
  }
  async load(entry) {
    if (this.isLoaded(entry.meta.id)) {
      return true;
    }
    let definition;
    try {
      definition = (await entry.load()).default;
    } catch (error) {
      this.reportError(entry.meta.id, "import", error);
      return false;
    }
    if (definition.meta.id !== entry.meta.id) {
      this.reportError(entry.meta.id, "load", new Error(`Catalog id "${entry.meta.id}" does not match plugin id "${definition.meta.id}".`));
      return false;
    }
    try {
      if (definition.module) {
        this.container.load(definition.module);
      }
      const cleanup = await definition.activate(this.ctx);
      this.loadedPlugins.set(entry.meta.id, {
        cleanup: this.normalizeCleanup(cleanup),
        definition,
        module: definition.module
      });
      this.logger.info(`Loaded plugin "${definition.meta.name}".`);
      this.shell.showNotice(`Loaded ${definition.meta.name}.`, {
        kind: "success"
      });
      return true;
    } catch (error) {
      if (definition.module) {
        try {
          this.container.unload(definition.module);
        } catch (unloadError) {
          this.reportError(entry.meta.id, "rollback", unloadError);
        }
      }
      this.reportError(entry.meta.id, "activate", error);
      return false;
    }
  }
  async unload(pluginId) {
    const loadedPlugin = this.loadedPlugins.get(pluginId);
    if (!loadedPlugin) {
      return false;
    }
    let hasError = false;
    if (loadedPlugin.cleanup) {
      try {
        loadedPlugin.cleanup.dispose();
      } catch (error) {
        hasError = true;
        this.reportError(pluginId, "cleanup", error);
      }
    }
    if (loadedPlugin.definition.deactivate) {
      try {
        await loadedPlugin.definition.deactivate(this.ctx);
      } catch (error) {
        hasError = true;
        this.reportError(pluginId, "deactivate", error);
      }
    }
    if (loadedPlugin.module) {
      try {
        this.container.unload(loadedPlugin.module);
      } catch (error) {
        hasError = true;
        this.reportError(pluginId, "unload", error);
      }
    }
    if (hasError) {
      return true;
    }
    this.loadedPlugins.delete(pluginId);
    this.logger.info(`Unloaded plugin "${loadedPlugin.definition.meta.name}".`);
    this.shell.showNotice(`Unloaded ${loadedPlugin.definition.meta.name}.`);
    return false;
  }
  normalizeCleanup(cleanup) {
    if (!cleanup) {
      return void 0;
    }
    if (typeof cleanup === "function") {
      return { dispose: cleanup };
    }
    return cleanup;
  }
  reportError(pluginId, phase, error) {
    const details = error instanceof Error ? error.message : `Unknown error: ${String(error)}`;
    this.logger.warn(`Plugin "${pluginId}" failed during ${phase}: ${details}`);
    this.shell.showNotice(`Plugin "${pluginId}" failed during ${phase}: ${details}`, {
      kind: "warning",
      timeoutMs: 5e3
    });
    console.error(error);
  }
};
PluginManager = __decorate6([
  injectable(),
  __param4(0, inject(TYPES.Container)),
  __param4(1, inject(TYPES.AppShell)),
  __param4(2, inject(TYPES.CommandRegistry)),
  __param4(3, inject(TYPES.SharedState)),
  __param4(4, inject(TYPES.EventBus)),
  __param4(5, inject(TYPES.Logger)),
  __metadata4("design:paramtypes", [
    Function,
    AppShell,
    CommandRegistry,
    SharedState,
    EventBus,
    Logger
  ])
], PluginManager);

// dist/plugin-catalog.js
var pluginCatalog = [
  {
    meta: {
      id: "greeter-plugin",
      name: "Greeter Plugin",
      description: "Publishes greeting events, exposes a toolbar command, and updates shared state."
    },
    load: async () => import("./plugins/greeter.plugin.js")
  },
  {
    meta: {
      id: "dashboard-plugin",
      name: "Dashboard Plugin",
      description: "Subscribes to host events and shared state so it can render a live activity dashboard."
    },
    load: async () => import("./plugins/dashboard.plugin.js")
  }
];

// dist/main.js
var root = document.getElementById("app");
if (!(root instanceof HTMLElement)) {
  throw new Error('Expected a root element with id "app".');
}
var container = new Container();
container.bind(TYPES.Container).toConstantValue(container);
container.bind(TYPES.Document).toConstantValue(document);
container.bind(TYPES.RootElement).toConstantValue(root);
container.bind(TYPES.AppShell).to(AppShell).inSingletonScope();
container.bind(TYPES.CommandRegistry).to(CommandRegistry).inSingletonScope();
container.bind(TYPES.SharedState).to(SharedState).inSingletonScope();
container.bind(TYPES.EventBus).to(EventBus).inSingletonScope();
container.bind(TYPES.Logger).to(Logger).inSingletonScope();
container.bind(TYPES.PluginManager).to(PluginManager).inSingletonScope();
var shell = container.get(TYPES.AppShell);
shell.mount(APP_NAME, APP_DESCRIPTION);
shell.appendLog("info", "Extension host bootstrapped. Load Greeter, then Dashboard, to watch plugins collaborate.");
var pluginManager = container.get(TYPES.PluginManager);
for (const entry of pluginCatalog) {
  shell.addPluginCard(entry.meta, pluginManager.isLoaded(entry.meta.id), async () => {
    return pluginManager.toggle(entry);
  });
}
shell.showNotice("Start with Greeter, then load Dashboard to see shared state and events in action.", {
  kind: "info",
  timeoutMs: 4500
});
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
