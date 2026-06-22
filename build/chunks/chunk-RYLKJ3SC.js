import {
  __commonJS,
  __toESM
} from "./chunk-SK6HMZ5B.js";

// node_modules/reflect-metadata/ReflectLite.js
var require_ReflectLite = __commonJS({
  "node_modules/reflect-metadata/ReflectLite.js"() {
    var Reflect2;
    (function(Reflect3) {
      (function(factory) {
        var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
        var exporter = makeExporter(Reflect3);
        if (typeof root.Reflect !== "undefined") {
          exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter, root);
        if (typeof root.Reflect === "undefined") {
          root.Reflect = Reflect3;
        }
        function makeExporter(target, previous) {
          return function(key, value) {
            Object.defineProperty(target, key, { configurable: true, writable: true, value });
            if (previous)
              previous(key, value);
          };
        }
        function sloppyModeThis() {
          throw new ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
        }
      })(function(exporter, root) {
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : fail("Symbol.toPrimitive not found.");
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : fail("Symbol.iterator not found.");
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : fail("A valid Map constructor could not be found.");
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : fail("A valid Set constructor could not be found.");
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : fail("A valid WeakMap constructor could not be found.");
        var registrySymbol = supportsSymbol ? /* @__PURE__ */ Symbol.for("@reflect-metadata:registry") : void 0;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        function decorate2(decorators, target, propertyKey, attributes) {
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
        exporter("decorate", decorate2);
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
          var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn)
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
          var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn)
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
        function fail(e) {
          throw e;
        }
        function CreateMetadataRegistry() {
          var fallback;
          if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
            fallback = CreateFallbackProvider(root.Reflect);
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
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            metadataRegistry2 = root.Reflect[registrySymbol];
          }
          if (IsUndefined(metadataRegistry2)) {
            metadataRegistry2 = CreateMetadataRegistry();
          }
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            Object.defineProperty(root.Reflect, registrySymbol, {
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
      });
    })(Reflect2 || (Reflect2 = {}));
  }
});

// node_modules/@inversifyjs/reflect-metadata-utils/lib/reflectMetadata/utils/getOwnReflectMetadata.js
function getOwnReflectMetadata(target, metadataKey, propertyKey) {
  return Reflect.getOwnMetadata(metadataKey, target, propertyKey);
}

// node_modules/@inversifyjs/reflect-metadata-utils/lib/reflectMetadata/utils/setReflectMetadata.js
function setReflectMetadata(target, metadataKey, metadata, propertyKey) {
  Reflect.defineMetadata(metadataKey, metadata, target, propertyKey);
}

// node_modules/@inversifyjs/reflect-metadata-utils/lib/reflectMetadata/utils/updateOwnReflectMetadata.js
function updateOwnReflectMetadata(target, metadataKey, buildDefaultValue, callback, propertyKey) {
  const metadata = getOwnReflectMetadata(target, metadataKey, propertyKey) ?? buildDefaultValue();
  const updatedMetadata = callback(metadata);
  Reflect.defineMetadata(metadataKey, updatedMetadata, target, propertyKey);
}

// node_modules/@inversifyjs/container/lib/container/actions/getContainerModuleId.js
var ID_METADATA = "@inversifyjs/container/bindingId";
function getContainerModuleId() {
  const bindingId = getOwnReflectMetadata(Object, ID_METADATA) ?? 0;
  if (bindingId === Number.MAX_SAFE_INTEGER) {
    setReflectMetadata(Object, ID_METADATA, Number.MIN_SAFE_INTEGER);
  } else {
    updateOwnReflectMetadata(Object, ID_METADATA, () => bindingId, (id) => id + 1);
  }
  return bindingId;
}

// node_modules/@inversifyjs/container/lib/container/models/ContainerModule.js
var ContainerModule = class {
  #id;
  #load;
  constructor(load) {
    this.#id = getContainerModuleId();
    this.#load = load;
  }
  get id() {
    return this.#id;
  }
  load(options) {
    return this.#load(options);
  }
};

// node_modules/@inversifyjs/core/lib/reflectMetadata/data/pendingClassMetadataCountReflectKey.js
var pendingClassMetadataCountReflectKey = "@inversifyjs/core/pendingClassMetadataCountReflectKey";

// node_modules/@inversifyjs/core/lib/metadata/calculations/getDefaultPendingClassMetadataCount.js
function getDefaultPendingClassMetadataCount() {
  return 0;
}

// node_modules/@inversifyjs/core/lib/metadata/models/MaybeClassElementMetadataKind.js
var MaybeClassElementMetadataKind;
(function(MaybeClassElementMetadataKind2) {
  MaybeClassElementMetadataKind2[MaybeClassElementMetadataKind2["unknown"] = 32] = "unknown";
})(MaybeClassElementMetadataKind || (MaybeClassElementMetadataKind = {}));

// node_modules/@inversifyjs/core/lib/metadata/actions/decrementPendingClassMetadataCount.js
function decrementPendingClassMetadataCount(type) {
  return (metadata) => {
    if (metadata !== void 0 && metadata.kind === MaybeClassElementMetadataKind.unknown) {
      updateOwnReflectMetadata(type, pendingClassMetadataCountReflectKey, getDefaultPendingClassMetadataCount, (count) => count - 1);
    }
  };
}

// node_modules/@inversifyjs/core/lib/error/models/InversifyCoreError.js
var isAppErrorSymbol = /* @__PURE__ */ Symbol.for("@inversifyjs/core/InversifyCoreError");
var InversifyCoreError = class _InversifyCoreError extends Error {
  [isAppErrorSymbol];
  kind;
  constructor(kind, message, options) {
    super(message, options);
    this[isAppErrorSymbol] = true;
    this.kind = kind;
  }
  static is(value) {
    return typeof value === "object" && value !== null && value[isAppErrorSymbol] === true;
  }
  static isErrorOfKind(value, kind) {
    return _InversifyCoreError.is(value) && value.kind === kind;
  }
};

// node_modules/@inversifyjs/core/lib/error/models/InversifyCoreErrorKind.js
var InversifyCoreErrorKind;
(function(InversifyCoreErrorKind2) {
  InversifyCoreErrorKind2[InversifyCoreErrorKind2["injectionDecoratorConflict"] = 0] = "injectionDecoratorConflict";
  InversifyCoreErrorKind2[InversifyCoreErrorKind2["missingInjectionDecorator"] = 1] = "missingInjectionDecorator";
  InversifyCoreErrorKind2[InversifyCoreErrorKind2["planning"] = 2] = "planning";
  InversifyCoreErrorKind2[InversifyCoreErrorKind2["planningMaxDepthExceeded"] = 3] = "planningMaxDepthExceeded";
  InversifyCoreErrorKind2[InversifyCoreErrorKind2["resolution"] = 4] = "resolution";
  InversifyCoreErrorKind2[InversifyCoreErrorKind2["unknown"] = 5] = "unknown";
})(InversifyCoreErrorKind || (InversifyCoreErrorKind = {}));

// node_modules/@inversifyjs/core/lib/metadata/models/ClassElementMetadataKind.js
var ClassElementMetadataKind;
(function(ClassElementMetadataKind2) {
  ClassElementMetadataKind2[ClassElementMetadataKind2["multipleInjection"] = 0] = "multipleInjection";
  ClassElementMetadataKind2[ClassElementMetadataKind2["singleInjection"] = 1] = "singleInjection";
  ClassElementMetadataKind2[ClassElementMetadataKind2["unmanaged"] = 2] = "unmanaged";
})(ClassElementMetadataKind || (ClassElementMetadataKind = {}));

// node_modules/@inversifyjs/core/lib/metadata/calculations/buildClassElementMetadataFromMaybeClassElementMetadata.js
function buildClassElementMetadataFromMaybeClassElementMetadata(buildDefaultMetadata, buildMetadataFromMaybeManagedMetadata) {
  return (...params) => (metadata) => {
    if (metadata === void 0) {
      return buildDefaultMetadata(...params);
    }
    if (metadata.kind === ClassElementMetadataKind.unmanaged) {
      throw new InversifyCoreError(InversifyCoreErrorKind.injectionDecoratorConflict, "Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found");
    }
    return buildMetadataFromMaybeManagedMetadata(metadata, ...params);
  };
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/buildDefaultManagedMetadata.js
function buildDefaultManagedMetadata(kind, serviceIdentifier, options) {
  if (kind === ClassElementMetadataKind.multipleInjection) {
    return {
      chained: options?.chained ?? false,
      kind,
      name: void 0,
      optional: false,
      tags: /* @__PURE__ */ new Map(),
      value: serviceIdentifier
    };
  } else {
    return {
      kind,
      name: void 0,
      optional: false,
      tags: /* @__PURE__ */ new Map(),
      value: serviceIdentifier
    };
  }
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/assertMetadataFromTypescriptIfManaged.js
function assertMetadataFromTypescriptIfManaged(metadata) {
  if (metadata.kind !== MaybeClassElementMetadataKind.unknown && metadata.isFromTypescriptParamType !== true) {
    throw new InversifyCoreError(InversifyCoreErrorKind.injectionDecoratorConflict, "Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found");
  }
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/buildManagedMetadataFromMaybeManagedMetadata.js
function buildManagedMetadataFromMaybeManagedMetadata(metadata, kind, serviceIdentifier, options) {
  assertMetadataFromTypescriptIfManaged(metadata);
  if (kind === ClassElementMetadataKind.multipleInjection) {
    return {
      ...metadata,
      chained: options?.chained ?? false,
      kind,
      value: serviceIdentifier
    };
  } else {
    return {
      ...metadata,
      kind,
      value: serviceIdentifier
    };
  }
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/buildManagedMetadataFromMaybeClassElementMetadata.js
var buildManagedMetadataFromMaybeClassElementMetadata = buildClassElementMetadataFromMaybeClassElementMetadata(buildDefaultManagedMetadata, buildManagedMetadataFromMaybeManagedMetadata);

// node_modules/@inversifyjs/core/lib/reflectMetadata/data/classMetadataReflectKey.js
var classMetadataReflectKey = "@inversifyjs/core/classMetadataReflectKey";

// node_modules/@inversifyjs/core/lib/metadata/actions/updateMaybeClassMetadataConstructorArgument.js
function updateMaybeClassMetadataConstructorArgument(updateMetadata, index) {
  return (classMetadata) => {
    const propertyMetadata = classMetadata.constructorArguments[index];
    classMetadata.constructorArguments[index] = updateMetadata(propertyMetadata);
    return classMetadata;
  };
}

// node_modules/@inversifyjs/core/lib/metadata/actions/updateMaybeClassMetadataProperty.js
function updateMaybeClassMetadataProperty(updateMetadata, propertyKey) {
  return (classMetadata) => {
    const propertyMetadata = classMetadata.properties.get(propertyKey);
    classMetadata.properties.set(propertyKey, updateMetadata(propertyMetadata));
    return classMetadata;
  };
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/getDefaultClassMetadata.js
function getDefaultClassMetadata() {
  return {
    constructorArguments: [],
    lifecycle: {
      postConstructMethodNames: /* @__PURE__ */ new Set(),
      preDestroyMethodNames: /* @__PURE__ */ new Set()
    },
    properties: /* @__PURE__ */ new Map(),
    scope: void 0
  };
}

// node_modules/@inversifyjs/core/lib/decorator/models/DecoratorInfoKind.js
var DecoratorInfoKind;
(function(DecoratorInfoKind2) {
  DecoratorInfoKind2[DecoratorInfoKind2["method"] = 0] = "method";
  DecoratorInfoKind2[DecoratorInfoKind2["parameter"] = 1] = "parameter";
  DecoratorInfoKind2[DecoratorInfoKind2["property"] = 2] = "property";
})(DecoratorInfoKind || (DecoratorInfoKind = {}));

// node_modules/@inversifyjs/core/lib/decorator/calculations/getDecoratorInfo.js
function getDecoratorInfo(target, propertyKey, parameterIndexOrDescriptor) {
  if (parameterIndexOrDescriptor === void 0) {
    if (propertyKey === void 0) {
      throw new InversifyCoreError(InversifyCoreErrorKind.unknown, "Unexpected undefined property and index values");
    }
    return {
      kind: DecoratorInfoKind.property,
      property: propertyKey,
      targetClass: target.constructor
    };
  }
  if (typeof parameterIndexOrDescriptor === "number") {
    return {
      index: parameterIndexOrDescriptor,
      kind: DecoratorInfoKind.parameter,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      targetClass: target
    };
  }
  return {
    kind: DecoratorInfoKind.method,
    method: propertyKey,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    targetClass: target
  };
}

// node_modules/@inversifyjs/core/lib/decorator/calculations/stringifyDecoratorInfo.js
function stringifyDecoratorInfo(decoratorTargetInfo) {
  switch (decoratorTargetInfo.kind) {
    case DecoratorInfoKind.method:
      return `[class: "${decoratorTargetInfo.targetClass.name}", method: "${decoratorTargetInfo.method.toString()}"]`;
    case DecoratorInfoKind.parameter:
      return `[class: "${decoratorTargetInfo.targetClass.name}", index: "${decoratorTargetInfo.index.toString()}"]`;
    case DecoratorInfoKind.property:
      return `[class: "${decoratorTargetInfo.targetClass.name}", property: "${decoratorTargetInfo.property.toString()}"]`;
  }
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/handleInjectionError.js
function handleInjectionError(target, propertyKey, parameterIndex, error) {
  if (InversifyCoreError.isErrorOfKind(error, InversifyCoreErrorKind.injectionDecoratorConflict)) {
    const info = getDecoratorInfo(target, propertyKey, parameterIndex);
    throw new InversifyCoreError(InversifyCoreErrorKind.injectionDecoratorConflict, `Unexpected injection error.

Cause:

${error.message}

Details

${stringifyDecoratorInfo(info)}`, { cause: error });
  }
  throw error;
}

// node_modules/@inversifyjs/core/lib/metadata/decorators/injectBase.js
function injectBase(updateMetadata, updatePendingClassMetadataCount) {
  const decorator = (target, propertyKey, parameterIndexOrDescriptor) => {
    try {
      if (parameterIndexOrDescriptor === void 0) {
        injectProperty(updateMetadata, updatePendingClassMetadataCount)(target, propertyKey);
      } else {
        if (typeof parameterIndexOrDescriptor === "number") {
          injectParameter(updateMetadata, updatePendingClassMetadataCount)(target, propertyKey, parameterIndexOrDescriptor);
        } else {
          injectMethod(updateMetadata, updatePendingClassMetadataCount)(target, propertyKey, parameterIndexOrDescriptor);
        }
      }
    } catch (error) {
      handleInjectionError(target, propertyKey, parameterIndexOrDescriptor, error);
    }
  };
  return decorator;
}
function buildComposedUpdateMetadata(updateMetadata, updatePendingClassMetadataCount) {
  return (target) => {
    const updateTargetPendingClassMetadataCount = updatePendingClassMetadataCount(target);
    return (metadata) => {
      updateTargetPendingClassMetadataCount(metadata);
      return updateMetadata(metadata);
    };
  };
}
function injectMethod(updateMetadata, updatePendingClassMetadataCount) {
  const buildComposedUpdateMetadataFromTarget = buildComposedUpdateMetadata(updateMetadata, updatePendingClassMetadataCount);
  return (target, propertyKey, descriptor) => {
    if (isPropertySetter(descriptor)) {
      updateOwnReflectMetadata(target.constructor, classMetadataReflectKey, getDefaultClassMetadata, updateMaybeClassMetadataProperty(buildComposedUpdateMetadataFromTarget(target), propertyKey));
    } else {
      throw new InversifyCoreError(InversifyCoreErrorKind.injectionDecoratorConflict, `Found an @inject decorator in a non setter property method.
Found @inject decorator at method "${propertyKey.toString()}" at class "${target.constructor.name}"`);
    }
  };
}
function injectParameter(updateMetadata, updatePendingClassMetadataCount) {
  const buildComposedUpdateMetadataFromTarget = buildComposedUpdateMetadata(updateMetadata, updatePendingClassMetadataCount);
  return (target, propertyKey, parameterIndex) => {
    if (isConstructorParameter(target, propertyKey)) {
      updateOwnReflectMetadata(target, classMetadataReflectKey, getDefaultClassMetadata, updateMaybeClassMetadataConstructorArgument(buildComposedUpdateMetadataFromTarget(target), parameterIndex));
    } else {
      throw new InversifyCoreError(InversifyCoreErrorKind.injectionDecoratorConflict, `Found an @inject decorator in a non constructor parameter.
Found @inject decorator at method "${propertyKey?.toString() ?? ""}" at class "${target.constructor.name}"`);
    }
  };
}
function injectProperty(updateMetadata, updatePendingClassMetadataCount) {
  const buildComposedUpdateMetadataFromTarget = buildComposedUpdateMetadata(updateMetadata, updatePendingClassMetadataCount);
  return (target, propertyKey) => {
    updateOwnReflectMetadata(target.constructor, classMetadataReflectKey, getDefaultClassMetadata, updateMaybeClassMetadataProperty(buildComposedUpdateMetadataFromTarget(target), propertyKey));
  };
}
function isConstructorParameter(target, propertyKey) {
  return typeof target === "function" && propertyKey === void 0;
}
function isPropertySetter(descriptor) {
  return descriptor.set !== void 0;
}

// node_modules/@inversifyjs/core/lib/metadata/decorators/inject.js
function inject(serviceIdentifier) {
  const updateMetadata = buildManagedMetadataFromMaybeClassElementMetadata(ClassElementMetadataKind.singleInjection, serviceIdentifier);
  return injectBase(updateMetadata, decrementPendingClassMetadataCount);
}

// node_modules/@inversifyjs/core/lib/reflectMetadata/data/classIsInjectableFlagReflectKey.js
var classIsInjectableFlagReflectKey = "@inversifyjs/core/classIsInjectableFlagReflectKey";

// node_modules/@inversifyjs/core/lib/metadata/actions/setIsInjectableFlag.js
function setIsInjectableFlag(target) {
  const isInjectableFlag = getOwnReflectMetadata(target, classIsInjectableFlagReflectKey);
  if (isInjectableFlag !== void 0) {
    throw new InversifyCoreError(InversifyCoreErrorKind.injectionDecoratorConflict, `Cannot apply @injectable decorator multiple times at class "${target.name}"`);
  }
  setReflectMetadata(target, classIsInjectableFlagReflectKey, true);
}

// node_modules/@inversifyjs/core/lib/reflectMetadata/data/typescriptDesignParameterTypesReflectKey.js
var typescriptParameterTypesReflectKey = "design:paramtypes";

// node_modules/@inversifyjs/core/lib/metadata/calculations/buildClassElementMetadataFromTypescriptParameterType.js
function buildClassElementMetadataFromTypescriptParameterType(type) {
  return {
    isFromTypescriptParamType: true,
    kind: ClassElementMetadataKind.singleInjection,
    name: void 0,
    optional: false,
    tags: /* @__PURE__ */ new Map(),
    value: type
  };
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/isUserlandEmittedType.js
var NON_USERLAND_TYPES = [
  Array,
  BigInt,
  Boolean,
  Function,
  Number,
  Object,
  String
];
function isUserlandEmittedType(type) {
  return !NON_USERLAND_TYPES.includes(type);
}

// node_modules/@inversifyjs/core/lib/metadata/actions/updateClassMetadataWithTypescriptParameterTypes.js
function updateClassMetadataWithTypescriptParameterTypes(target) {
  const typescriptConstructorArguments = getOwnReflectMetadata(target, typescriptParameterTypesReflectKey);
  if (typescriptConstructorArguments !== void 0) {
    updateOwnReflectMetadata(target, classMetadataReflectKey, getDefaultClassMetadata, updateMaybeClassMetadataWithTypescriptClassMetadata(typescriptConstructorArguments));
  }
}
function updateMaybeClassMetadataWithTypescriptClassMetadata(typescriptConstructorArguments) {
  return (classMetadata) => {
    typescriptConstructorArguments.forEach((constructorArgumentType, index) => {
      if (classMetadata.constructorArguments[index] === void 0 && isUserlandEmittedType(constructorArgumentType)) {
        classMetadata.constructorArguments[index] = buildClassElementMetadataFromTypescriptParameterType(constructorArgumentType);
      }
    });
    return classMetadata;
  };
}

// node_modules/@inversifyjs/core/lib/metadata/decorators/injectable.js
function injectable(scope) {
  return (target) => {
    setIsInjectableFlag(target);
    updateClassMetadataWithTypescriptParameterTypes(target);
    if (scope !== void 0) {
      updateOwnReflectMetadata(target, classMetadataReflectKey, getDefaultClassMetadata, (metadata) => ({
        ...metadata,
        scope
      }));
    }
  };
}

// node_modules/@inversifyjs/core/lib/binding/actions/getBindingId.js
var ID_METADATA2 = "@inversifyjs/container/bindingId";
function getBindingId() {
  const bindingId = getOwnReflectMetadata(Object, ID_METADATA2) ?? 0;
  if (bindingId === Number.MAX_SAFE_INTEGER) {
    setReflectMetadata(Object, ID_METADATA2, Number.MIN_SAFE_INTEGER);
  } else {
    updateOwnReflectMetadata(Object, ID_METADATA2, () => bindingId, (id) => id + 1);
  }
  return bindingId;
}

// node_modules/@inversifyjs/core/lib/binding/models/BindingScope.js
var bindingScopeValues = {
  Request: "Request",
  Singleton: "Singleton",
  Transient: "Transient"
};

// node_modules/@inversifyjs/core/lib/binding/models/BindingType.js
var bindingTypeValues = {
  ConstantValue: "ConstantValue",
  DynamicValue: "DynamicValue",
  Factory: "Factory",
  Instance: "Instance",
  ResolvedValue: "ResolvedValue",
  ServiceRedirection: "ServiceRedirection"
};

// node_modules/@inversifyjs/core/lib/common/calculations/chain.js
function* chain(...iterables) {
  for (const iterable of iterables) {
    yield* iterable;
  }
}

// node_modules/@inversifyjs/core/lib/common/models/OneToManyMapStar.js
var NOT_FOUND_INDEX = -1;
var OneToManyMapStar = class _OneToManyMapStar {
  #modelToRelationMap;
  #relationToModelsMaps;
  #spec;
  constructor(spec) {
    this.#modelToRelationMap = /* @__PURE__ */ new Map();
    this.#relationToModelsMaps = {};
    for (const specProperty of Reflect.ownKeys(spec)) {
      this.#relationToModelsMaps[specProperty] = /* @__PURE__ */ new Map();
    }
    this.#spec = spec;
  }
  add(model, relation) {
    this.#buildOrGetModelArray(model).push(relation);
    for (const relationKey of Reflect.ownKeys(relation)) {
      this.#buildOrGetRelationModels(relationKey, relation[relationKey]).push(model);
    }
  }
  clone() {
    const modelToCloneModelMap = this.#buildModelToCloneModelMap();
    const relationToCloneRelationMap = this.#buildRelationToRelationModelMap();
    const properties = Reflect.ownKeys(this.#spec);
    const clone = this._buildNewInstance(this.#spec);
    this.#pushRelationEntriesIntoRelationMap(this.#modelToRelationMap, clone.#modelToRelationMap, modelToCloneModelMap, relationToCloneRelationMap);
    for (const property of properties) {
      this.#pushModelEntriesIntoModelMap(this.#relationToModelsMaps[property], clone.#relationToModelsMaps[property], modelToCloneModelMap);
    }
    return clone;
  }
  get(key, value) {
    return this.#relationToModelsMaps[key].get(value);
  }
  getAllKeys(key) {
    return this.#relationToModelsMaps[key].keys();
  }
  removeByRelation(key, value) {
    const models = this.get(key, value);
    if (models === void 0) {
      return;
    }
    const uniqueModelsSet = new Set(models);
    for (const model of uniqueModelsSet) {
      const relations = this.#modelToRelationMap.get(model);
      if (relations === void 0) {
        throw new Error("Expecting model relation, none found");
      }
      for (const relation of relations) {
        if (relation[key] === value) {
          this.#removeModelFromRelationMaps(model, relation);
        }
      }
      this.#modelToRelationMap.delete(model);
    }
  }
  _buildNewInstance(spec) {
    return new _OneToManyMapStar(spec);
  }
  _cloneModel(model) {
    return model;
  }
  _cloneRelation(relation) {
    return relation;
  }
  #buildModelToCloneModelMap() {
    const modelToCloneModelMap = /* @__PURE__ */ new Map();
    for (const model of this.#modelToRelationMap.keys()) {
      const clonedModel = this._cloneModel(model);
      modelToCloneModelMap.set(model, clonedModel);
    }
    return modelToCloneModelMap;
  }
  #buildRelationToRelationModelMap() {
    const relationToCloneRelationMap = /* @__PURE__ */ new Map();
    for (const relations of this.#modelToRelationMap.values()) {
      for (const relation of relations) {
        const clonedRelation = this._cloneRelation(relation);
        relationToCloneRelationMap.set(relation, clonedRelation);
      }
    }
    return relationToCloneRelationMap;
  }
  #buildOrGetModelArray(model) {
    let relations = this.#modelToRelationMap.get(model);
    if (relations === void 0) {
      relations = [];
      this.#modelToRelationMap.set(model, relations);
    }
    return relations;
  }
  #buildOrGetRelationModels(relationKey, relationValue) {
    let models = this.#relationToModelsMaps[relationKey].get(relationValue);
    if (models === void 0) {
      models = [];
      this.#relationToModelsMaps[relationKey].set(relationValue, models);
    }
    return models;
  }
  #getCloneModel(model, modelToCloneModelMap) {
    const clonedModel = modelToCloneModelMap.get(model);
    if (clonedModel === void 0) {
      throw new Error("Expecting model to be cloned, none found");
    }
    return clonedModel;
  }
  #getCloneRelation(relation, relationToCloneRelationMap) {
    const clonedRelation = relationToCloneRelationMap.get(relation);
    if (clonedRelation === void 0) {
      throw new Error("Expecting relation to be cloned, none found");
    }
    return clonedRelation;
  }
  #pushModelEntriesIntoModelMap(source, target, modelToCloneModelMap) {
    for (const [relationValue, models] of source) {
      const modelsClone = new Array();
      for (const model of models) {
        modelsClone.push(this.#getCloneModel(model, modelToCloneModelMap));
      }
      target.set(relationValue, modelsClone);
    }
  }
  #pushRelationEntriesIntoRelationMap(source, target, modelToCloneModelMap, relationToCloneRelationMap) {
    for (const [model, relations] of source) {
      const relationsClone = new Array();
      for (const relation of relations) {
        relationsClone.push(this.#getCloneRelation(relation, relationToCloneRelationMap));
      }
      target.set(this.#getCloneModel(model, modelToCloneModelMap), relationsClone);
    }
  }
  #removeModelFromRelationMaps(model, relation) {
    for (const relationKey of Reflect.ownKeys(relation)) {
      this.#removeModelFromRelationMap(model, relationKey, relation[relationKey]);
    }
  }
  #removeModelFromRelationMap(model, relationKey, relationValue) {
    const relationModels = this.#relationToModelsMaps[relationKey].get(relationValue);
    if (relationModels !== void 0) {
      const index = relationModels.indexOf(model);
      if (index !== NOT_FOUND_INDEX) {
        relationModels.splice(index, 1);
      }
      if (relationModels.length === 0) {
        this.#relationToModelsMaps[relationKey].delete(relationValue);
      }
    }
  }
};

// node_modules/@inversifyjs/core/lib/binding/services/ActivationsService.js
var ActivationRelationKind;
(function(ActivationRelationKind2) {
  ActivationRelationKind2["moduleId"] = "moduleId";
  ActivationRelationKind2["serviceId"] = "serviceId";
})(ActivationRelationKind || (ActivationRelationKind = {}));
var ActivationsService = class _ActivationsService {
  #activationMaps;
  #getParent;
  constructor(getParent, activationMaps) {
    this.#activationMaps = activationMaps ?? new OneToManyMapStar({
      moduleId: {
        isOptional: true
      },
      serviceId: {
        isOptional: false
      }
    });
    this.#getParent = getParent;
  }
  static build(getParent) {
    return new _ActivationsService(getParent);
  }
  add(activation, relation) {
    this.#activationMaps.add(activation, relation);
  }
  clone() {
    const clone = new _ActivationsService(this.#getParent, this.#activationMaps.clone());
    return clone;
  }
  get(serviceIdentifier) {
    const activationIterables = [];
    const activations = this.#activationMaps.get(ActivationRelationKind.serviceId, serviceIdentifier);
    if (activations !== void 0) {
      activationIterables.push(activations);
    }
    const parentActivations = this.#getParent()?.get(serviceIdentifier);
    if (parentActivations !== void 0) {
      activationIterables.push(parentActivations);
    }
    if (activationIterables.length === 0) {
      return void 0;
    }
    return chain(...activationIterables);
  }
  removeAllByModuleId(moduleId) {
    this.#activationMaps.removeByRelation(ActivationRelationKind.moduleId, moduleId);
  }
  removeAllByServiceId(serviceId) {
    this.#activationMaps.removeByRelation(ActivationRelationKind.serviceId, serviceId);
  }
};

// node_modules/@inversifyjs/core/lib/metadata/calculations/isPendingClassMetadata.js
function isPendingClassMetadata(type) {
  const pendingClassMetadataCount = getOwnReflectMetadata(type, pendingClassMetadataCountReflectKey);
  return pendingClassMetadataCount !== void 0 && pendingClassMetadataCount !== 0;
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/throwAtInvalidClassMetadata.js
function throwAtInvalidClassMetadata(type, classMetadata) {
  const errors = [];
  for (let i = 0; i < classMetadata.constructorArguments.length; ++i) {
    const constructorArgument = classMetadata.constructorArguments[i];
    if (constructorArgument === void 0 || constructorArgument.kind === MaybeClassElementMetadataKind.unknown) {
      errors.push(`  - Missing or incomplete metadata for type "${type.name}" at constructor argument with index ${i.toString()}.
Every constructor parameter must be decorated either with @inject, @multiInject or @unmanaged decorator.`);
    }
  }
  for (const [propertyKey, property] of classMetadata.properties) {
    if (property.kind === MaybeClassElementMetadataKind.unknown) {
      errors.push(`  - Missing or incomplete metadata for type "${type.name}" at property "${propertyKey.toString()}".
This property must be decorated either with @inject or @multiInject decorator.`);
    }
  }
  if (errors.length === 0) {
    throw new InversifyCoreError(InversifyCoreErrorKind.unknown, `Unexpected class metadata for type "${type.name}" with uncompletion traces.
This might be caused by one of the following reasons:

1. A third party library is targeting inversify reflection metadata.
2. A bug is causing the issue. Consider submiting an issue to fix it.`);
  }
  throw new InversifyCoreError(InversifyCoreErrorKind.missingInjectionDecorator, `Invalid class metadata at type ${type.name}:

${errors.join("\n\n")}`);
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/validateConstructorMetadataArray.js
function validateConstructorMetadataArray(type, value) {
  const undefinedIndexes = [];
  if (value.length < type.length) {
    throw new InversifyCoreError(InversifyCoreErrorKind.missingInjectionDecorator, `Found unexpected missing metadata on type "${type.name}". "${type.name}" constructor requires at least ${type.length.toString()} arguments, found ${value.length.toString()} instead.
Are you using @inject, @multiInject or @unmanaged decorators in every non optional constructor argument?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);
  }
  for (let i = 0; i < value.length; ++i) {
    const element = value[i];
    if (element === void 0) {
      undefinedIndexes.push(i);
    }
  }
  if (undefinedIndexes.length > 0) {
    throw new InversifyCoreError(InversifyCoreErrorKind.missingInjectionDecorator, `Found unexpected missing metadata on type "${type.name}" at constructor indexes "${undefinedIndexes.join('", "')}".

Are you using @inject, @multiInject or @unmanaged decorators at those indexes?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);
  }
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/getClassMetadata.js
function getClassMetadata(type) {
  const classMetadata = getOwnReflectMetadata(type, classMetadataReflectKey) ?? getDefaultClassMetadata();
  if (isPendingClassMetadata(type)) {
    throwAtInvalidClassMetadata(type, classMetadata);
  } else {
    validateConstructorMetadataArray(type, classMetadata.constructorArguments);
    return classMetadata;
  }
}

// node_modules/@inversifyjs/core/lib/binding/calculations/buildInstanceBinding.js
function buildInstanceBinding(autobindOptions, serviceIdentifier) {
  const classMetadata = getClassMetadata(serviceIdentifier);
  const scope = classMetadata.scope ?? autobindOptions.scope;
  return {
    cache: {
      isRight: false,
      value: void 0
    },
    id: getBindingId(),
    implementationType: serviceIdentifier,
    isSatisfiedBy: () => true,
    moduleId: void 0,
    onActivation: void 0,
    onDeactivation: void 0,
    scope,
    serviceIdentifier,
    type: bindingTypeValues.Instance
  };
}

// node_modules/@inversifyjs/core/lib/binding/calculations/cloneBindingCache.js
function cloneBindingCache(cache) {
  if (cache.isRight) {
    return {
      isRight: true,
      value: cache.value
    };
  }
  return cache;
}

// node_modules/@inversifyjs/core/lib/binding/calculations/cloneConstantValueBinding.js
function cloneConstantValueBinding(binding) {
  return {
    cache: cloneBindingCache(binding.cache),
    id: binding.id,
    isSatisfiedBy: binding.isSatisfiedBy,
    moduleId: binding.moduleId,
    onActivation: binding.onActivation,
    onDeactivation: binding.onDeactivation,
    scope: binding.scope,
    serviceIdentifier: binding.serviceIdentifier,
    type: binding.type,
    // The value is not cloned as it's a resolved value
    value: binding.value
  };
}

// node_modules/@inversifyjs/core/lib/binding/calculations/cloneDynamicValueBinding.js
function cloneDynamicValueBinding(binding) {
  return {
    cache: cloneBindingCache(binding.cache),
    id: binding.id,
    isSatisfiedBy: binding.isSatisfiedBy,
    moduleId: binding.moduleId,
    onActivation: binding.onActivation,
    onDeactivation: binding.onDeactivation,
    scope: binding.scope,
    serviceIdentifier: binding.serviceIdentifier,
    type: binding.type,
    // The value is not cloned
    value: binding.value
  };
}

// node_modules/@inversifyjs/core/lib/binding/calculations/cloneFactoryBinding.js
function cloneFactoryBinding(binding) {
  return {
    cache: cloneBindingCache(binding.cache),
    factory: binding.factory,
    id: binding.id,
    isSatisfiedBy: binding.isSatisfiedBy,
    moduleId: binding.moduleId,
    onActivation: binding.onActivation,
    onDeactivation: binding.onDeactivation,
    scope: binding.scope,
    serviceIdentifier: binding.serviceIdentifier,
    type: binding.type
  };
}

// node_modules/@inversifyjs/core/lib/binding/calculations/cloneInstanceBinding.js
function cloneInstanceBinding(binding) {
  return {
    cache: cloneBindingCache(binding.cache),
    id: binding.id,
    implementationType: binding.implementationType,
    isSatisfiedBy: binding.isSatisfiedBy,
    moduleId: binding.moduleId,
    onActivation: binding.onActivation,
    onDeactivation: binding.onDeactivation,
    scope: binding.scope,
    serviceIdentifier: binding.serviceIdentifier,
    type: binding.type
  };
}

// node_modules/@inversifyjs/core/lib/binding/calculations/cloneResolvedValueBinding.js
function cloneResolvedValueBinding(binding) {
  return {
    cache: cloneBindingCache(binding.cache),
    factory: binding.factory,
    id: binding.id,
    isSatisfiedBy: binding.isSatisfiedBy,
    metadata: binding.metadata,
    moduleId: binding.moduleId,
    onActivation: binding.onActivation,
    onDeactivation: binding.onDeactivation,
    scope: binding.scope,
    serviceIdentifier: binding.serviceIdentifier,
    type: binding.type
  };
}

// node_modules/@inversifyjs/core/lib/binding/calculations/cloneServiceRedirectionBinding.js
function cloneServiceRedirectionBinding(binding) {
  return {
    id: binding.id,
    isSatisfiedBy: binding.isSatisfiedBy,
    moduleId: binding.moduleId,
    serviceIdentifier: binding.serviceIdentifier,
    targetServiceIdentifier: binding.targetServiceIdentifier,
    type: binding.type
  };
}

// node_modules/@inversifyjs/core/lib/binding/calculations/cloneBinding.js
function cloneBinding(binding) {
  switch (binding.type) {
    case bindingTypeValues.ConstantValue:
      return cloneConstantValueBinding(binding);
    case bindingTypeValues.DynamicValue:
      return cloneDynamicValueBinding(binding);
    case bindingTypeValues.Factory:
      return cloneFactoryBinding(binding);
    case bindingTypeValues.Instance:
      return cloneInstanceBinding(binding);
    case bindingTypeValues.ResolvedValue:
      return cloneResolvedValueBinding(binding);
    case bindingTypeValues.ServiceRedirection:
      return cloneServiceRedirectionBinding(binding);
  }
}

// node_modules/@inversifyjs/core/lib/binding/services/BindingService.js
var BindingRelationKind;
(function(BindingRelationKind2) {
  BindingRelationKind2["id"] = "id";
  BindingRelationKind2["moduleId"] = "moduleId";
  BindingRelationKind2["serviceId"] = "serviceId";
})(BindingRelationKind || (BindingRelationKind = {}));
var OneToManyBindingMapStar = class _OneToManyBindingMapStar extends OneToManyMapStar {
  _buildNewInstance(spec) {
    return new _OneToManyBindingMapStar(spec);
  }
  _cloneModel(model) {
    return cloneBinding(model);
  }
};
var BindingService = class _BindingService {
  #autobindOptions;
  #bindingMaps;
  #getParent;
  constructor(getParent, autobindOptions, bindingMaps) {
    this.#bindingMaps = bindingMaps ?? new OneToManyBindingMapStar({
      id: {
        isOptional: false
      },
      moduleId: {
        isOptional: true
      },
      serviceId: {
        isOptional: false
      }
    });
    this.#getParent = getParent;
    this.#autobindOptions = autobindOptions;
  }
  static build(getParent, autobindOptions) {
    return new _BindingService(getParent, autobindOptions);
  }
  clone() {
    const clone = new _BindingService(this.#getParent, this.#autobindOptions, this.#bindingMaps.clone());
    return clone;
  }
  get(serviceIdentifier) {
    const bindings = this.getNonParentBindings(serviceIdentifier) ?? this.#getParent()?.get(serviceIdentifier);
    if (bindings !== void 0) {
      return bindings;
    }
    const autoBoundBinding = this.#tryAutobind(serviceIdentifier);
    return autoBoundBinding === void 0 ? autoBoundBinding : [autoBoundBinding];
  }
  *getChained(serviceIdentifier) {
    const currentBindings = this.getNonParentBindings(serviceIdentifier);
    if (currentBindings !== void 0) {
      yield* currentBindings;
    }
    const parent = this.#getParent();
    if (parent === void 0) {
      if (currentBindings === void 0) {
        const autobindBindings = this.#tryAutobind(serviceIdentifier);
        if (autobindBindings !== void 0) {
          yield autobindBindings;
        }
      }
    } else {
      yield* parent.getChained(serviceIdentifier);
    }
  }
  getBoundServices() {
    const serviceIdentifierSet = new Set(this.#bindingMaps.getAllKeys(BindingRelationKind.serviceId));
    const parent = this.#getParent();
    if (parent !== void 0) {
      for (const serviceIdentifier of parent.getBoundServices()) {
        serviceIdentifierSet.add(serviceIdentifier);
      }
    }
    return serviceIdentifierSet;
  }
  getById(id) {
    return this.#bindingMaps.get(BindingRelationKind.id, id) ?? this.#getParent()?.getById(id);
  }
  getByModuleId(moduleId) {
    return this.#bindingMaps.get(BindingRelationKind.moduleId, moduleId) ?? this.#getParent()?.getByModuleId(moduleId);
  }
  getNonParentBindings(serviceId) {
    return this.#bindingMaps.get(BindingRelationKind.serviceId, serviceId);
  }
  getNonParentBoundServices() {
    return this.#bindingMaps.getAllKeys(BindingRelationKind.serviceId);
  }
  removeById(id) {
    this.#bindingMaps.removeByRelation(BindingRelationKind.id, id);
  }
  removeAllByModuleId(moduleId) {
    this.#bindingMaps.removeByRelation(BindingRelationKind.moduleId, moduleId);
  }
  removeAllByServiceId(serviceId) {
    this.#bindingMaps.removeByRelation(BindingRelationKind.serviceId, serviceId);
  }
  set(binding) {
    const relation = {
      [BindingRelationKind.id]: binding.id,
      [BindingRelationKind.serviceId]: binding.serviceIdentifier
    };
    if (binding.moduleId !== void 0) {
      relation[BindingRelationKind.moduleId] = binding.moduleId;
    }
    this.#bindingMaps.add(binding, relation);
  }
  #tryAutobind(serviceIdentifier) {
    if (this.#autobindOptions === void 0 || typeof serviceIdentifier !== "function") {
      return void 0;
    }
    const binding = buildInstanceBinding(this.#autobindOptions, serviceIdentifier);
    this.set(binding);
    return binding;
  }
};

// node_modules/@inversifyjs/core/lib/binding/services/DeactivationsService.js
var DeactivationRelationKind;
(function(DeactivationRelationKind2) {
  DeactivationRelationKind2["moduleId"] = "moduleId";
  DeactivationRelationKind2["serviceId"] = "serviceId";
})(DeactivationRelationKind || (DeactivationRelationKind = {}));
var DeactivationsService = class _DeactivationsService {
  #deactivationMaps;
  #getParent;
  constructor(getParent, deactivationMaps) {
    this.#deactivationMaps = deactivationMaps ?? new OneToManyMapStar({
      moduleId: {
        isOptional: true
      },
      serviceId: {
        isOptional: false
      }
    });
    this.#getParent = getParent;
  }
  static build(getParent) {
    return new _DeactivationsService(getParent);
  }
  add(deactivation, relation) {
    this.#deactivationMaps.add(deactivation, relation);
  }
  clone() {
    const clone = new _DeactivationsService(this.#getParent, this.#deactivationMaps.clone());
    return clone;
  }
  get(serviceIdentifier) {
    const deactivationIterables = [];
    const deactivations = this.#deactivationMaps.get(DeactivationRelationKind.serviceId, serviceIdentifier);
    if (deactivations !== void 0) {
      deactivationIterables.push(deactivations);
    }
    const parentDeactivations = this.#getParent()?.get(serviceIdentifier);
    if (parentDeactivations !== void 0) {
      deactivationIterables.push(parentDeactivations);
    }
    if (deactivationIterables.length === 0) {
      return void 0;
    }
    return chain(...deactivationIterables);
  }
  removeAllByModuleId(moduleId) {
    this.#deactivationMaps.removeByRelation(DeactivationRelationKind.moduleId, moduleId);
  }
  removeAllByServiceId(serviceId) {
    this.#deactivationMaps.removeByRelation(DeactivationRelationKind.serviceId, serviceId);
  }
};

// node_modules/@inversifyjs/core/lib/metadata/calculations/buildDefaultUnmanagedMetadata.js
function buildDefaultUnmanagedMetadata() {
  return {
    kind: ClassElementMetadataKind.unmanaged
  };
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/buildUnmanagedMetadataFromMaybeManagedMetadata.js
function buildUnmanagedMetadataFromMaybeManagedMetadata(metadata) {
  assertMetadataFromTypescriptIfManaged(metadata);
  if (hasManagedMetadata(metadata)) {
    throw new InversifyCoreError(InversifyCoreErrorKind.injectionDecoratorConflict, "Unexpected injection found. Found @unmanaged injection with additional @named, @optional, @tagged or @targetName injections");
  }
  return buildDefaultUnmanagedMetadata();
}
function hasManagedMetadata(metadata) {
  return metadata.name !== void 0 || metadata.optional || metadata.tags.size > 0;
}

// node_modules/@inversifyjs/core/lib/metadata/calculations/buildUnmanagedMetadataFromMaybeClassElementMetadata.js
var buildUnmanagedMetadataFromMaybeClassElementMetadata = buildClassElementMetadataFromMaybeClassElementMetadata(buildDefaultUnmanagedMetadata, buildUnmanagedMetadataFromMaybeManagedMetadata);

// node_modules/@inversifyjs/core/lib/metadata/models/ResolvedValueElementMetadataKind.js
var ResolvedValueElementMetadataKind;
(function(ResolvedValueElementMetadataKind2) {
  ResolvedValueElementMetadataKind2[ResolvedValueElementMetadataKind2["multipleInjection"] = 0] = "multipleInjection";
  ResolvedValueElementMetadataKind2[ResolvedValueElementMetadataKind2["singleInjection"] = 1] = "singleInjection";
})(ResolvedValueElementMetadataKind || (ResolvedValueElementMetadataKind = {}));

// node_modules/@inversifyjs/core/lib/planning/calculations/buildGetPlanOptionsFromPlanParams.js
function buildGetPlanOptionsFromPlanParams(params) {
  if (params.rootConstraints.isMultiple) {
    return {
      chained: params.rootConstraints.chained,
      isMultiple: true,
      name: params.rootConstraints.name,
      optional: params.rootConstraints.isOptional ?? false,
      serviceIdentifier: params.rootConstraints.serviceIdentifier,
      tag: params.rootConstraints.tag
    };
  } else {
    return {
      isMultiple: false,
      name: params.rootConstraints.name,
      optional: params.rootConstraints.isOptional ?? false,
      serviceIdentifier: params.rootConstraints.serviceIdentifier,
      tag: params.rootConstraints.tag
    };
  }
}

// node_modules/@inversifyjs/common/lib/common/calculations/isPromise.js
function isPromise(object) {
  const isObjectOrFunction = typeof object === "object" && object !== null || typeof object === "function";
  return isObjectOrFunction && typeof object.then === "function";
}

// node_modules/@inversifyjs/common/lib/services/calculations/stringifyServiceIdentifier.js
function stringifyServiceIdentifier(serviceIdentifier) {
  switch (typeof serviceIdentifier) {
    case "string":
    case "symbol":
      return serviceIdentifier.toString();
    case "function":
      return serviceIdentifier.name;
    default:
      throw new Error(`Unexpected ${typeof serviceIdentifier} service id type`);
  }
}

// node_modules/@inversifyjs/common/lib/services/models/LazyServiceIdentifier.js
var islazyServiceIdentifierSymbol = /* @__PURE__ */ Symbol.for("@inversifyjs/common/islazyServiceIdentifier");
var LazyServiceIdentifier = class {
  [islazyServiceIdentifierSymbol];
  #buildServiceId;
  constructor(buildServiceId) {
    this.#buildServiceId = buildServiceId;
    this[islazyServiceIdentifierSymbol] = true;
  }
  static is(value) {
    return typeof value === "object" && value !== null && value[islazyServiceIdentifierSymbol] === true;
  }
  unwrap() {
    return this.#buildServiceId();
  }
};

// node_modules/@inversifyjs/core/lib/error/calculations/isStackOverflowError.js
var STACK_OVERFLOW_PATTERNS = /stack space|call stack|too much recursion/i;
var SPIDER_MONKEY_REGEXP = /too much recursion/;
function isStackOverflowError(error) {
  try {
    if (!(error instanceof Error)) {
      return false;
    }
    return (
      // V8 and JavaScriptCore typically throw RangeError
      error instanceof RangeError && STACK_OVERFLOW_PATTERNS.test(error.message) || error.name === "InternalError" && SPIDER_MONKEY_REGEXP.test(error.message)
    );
  } catch (innerError) {
    return innerError instanceof SyntaxError && innerError.message.includes("Stack overflow");
  }
}

// node_modules/@inversifyjs/core/lib/planning/calculations/handlePlanError.js
function extractLikelyCircularDependency(params) {
  const serviceIdentifiers = /* @__PURE__ */ new Set();
  for (const serviceIdentifier of params.servicesBranch) {
    if (serviceIdentifiers.has(serviceIdentifier)) {
      return [...serviceIdentifiers, serviceIdentifier];
    }
    serviceIdentifiers.add(serviceIdentifier);
  }
  return [...serviceIdentifiers];
}
function handlePlanError(params, error) {
  if (isStackOverflowError(error) || InversifyCoreError.isErrorOfKind(error, InversifyCoreErrorKind.planningMaxDepthExceeded)) {
    const stringifiedCircularDependencies = stringifyServiceIdentifierTrace(extractLikelyCircularDependency(params));
    throw new InversifyCoreError(InversifyCoreErrorKind.planning, `Circular dependency found: ${stringifiedCircularDependencies}`, { cause: error });
  }
  throw error;
}
function stringifyServiceIdentifierTrace(serviceIdentifiers) {
  const serviceIdentifiersArray = [...serviceIdentifiers];
  if (serviceIdentifiersArray.length === 0) {
    return "(No dependency trace)";
  }
  return serviceIdentifiersArray.map(stringifyServiceIdentifier).join(" -> ");
}

// node_modules/@inversifyjs/core/lib/planning/models/LazyPlanServiceNode.js
var isLazyPlanServiceNodeSymbol = /* @__PURE__ */ Symbol.for("@inversifyjs/core/LazyPlanServiceNode");
var LazyPlanServiceNode = class {
  [isLazyPlanServiceNodeSymbol];
  _serviceIdentifier;
  _serviceNode;
  constructor(serviceNode, serviceIdentifier) {
    this[isLazyPlanServiceNodeSymbol] = true;
    this._serviceNode = serviceNode;
    this._serviceIdentifier = serviceIdentifier;
  }
  get bindings() {
    return this._getNode().bindings;
  }
  get isContextFree() {
    return this._getNode().isContextFree;
  }
  get serviceIdentifier() {
    return this._serviceIdentifier;
  }
  set bindings(bindings) {
    this._getNode().bindings = bindings;
  }
  set isContextFree(isContextFree) {
    this._getNode().isContextFree = isContextFree;
  }
  static is(value) {
    return typeof value === "object" && value !== null && value[isLazyPlanServiceNodeSymbol] === true;
  }
  invalidate() {
    this._serviceNode = void 0;
  }
  isExpanded() {
    return this._serviceNode !== void 0;
  }
  _getNode() {
    if (this._serviceNode === void 0) {
      this._serviceNode = this._buildPlanServiceNode();
    }
    return this._serviceNode;
  }
};

// node_modules/@inversifyjs/core/lib/binding/models/BindingConstraintsImplementation.js
var BindingConstraintsImplementation = class _BindingConstraintsImplementation {
  #node;
  constructor(node) {
    this.#node = node;
  }
  get name() {
    return this.#node.elem.name;
  }
  get serviceIdentifier() {
    return this.#node.elem.serviceIdentifier;
  }
  get tags() {
    return this.#node.elem.tags;
  }
  getAncestor() {
    this.#node.elem.getAncestorsCalled = true;
    if (this.#node.previous === void 0) {
      return void 0;
    }
    return new _BindingConstraintsImplementation(this.#node.previous);
  }
};

// node_modules/@inversifyjs/core/lib/planning/calculations/buildFilteredServiceBindings.js
function buildFilteredServiceBindings(params, bindingConstraints, options) {
  const serviceIdentifier = options?.customServiceIdentifier ?? bindingConstraints.serviceIdentifier;
  const serviceBindings = options?.chained === true ? [...params.operations.getBindingsChained(serviceIdentifier)] : [...params.operations.getBindings(serviceIdentifier) ?? []];
  const filteredBindings = serviceBindings.filter((binding) => binding.isSatisfiedBy(bindingConstraints));
  if (filteredBindings.length === 0 && params.autobindOptions !== void 0 && typeof serviceIdentifier === "function") {
    const binding = buildInstanceBinding(params.autobindOptions, serviceIdentifier);
    params.operations.setBinding(binding);
    if (binding.isSatisfiedBy(bindingConstraints)) {
      filteredBindings.push(binding);
    }
  }
  return filteredBindings;
}

// node_modules/@inversifyjs/core/lib/common/models/SingleImmutableLinkedList.js
var SingleImmutableLinkedList = class _SingleImmutableLinkedList {
  last;
  length;
  constructor(last, length) {
    this.last = last;
    this.length = length;
  }
  concat(elem) {
    return new _SingleImmutableLinkedList({
      elem,
      previous: this.last
    }, this.length + 1);
  }
  [Symbol.iterator]() {
    let node = this.last;
    return {
      next: () => {
        if (node === void 0) {
          return {
            done: true,
            value: void 0
          };
        }
        const elem = node.elem;
        node = node.previous;
        return {
          done: false,
          value: elem
        };
      }
    };
  }
};

// node_modules/@inversifyjs/core/lib/planning/calculations/buildPlanBindingConstraintsList.js
function buildPlanBindingConstraintsList(params) {
  const tags = /* @__PURE__ */ new Map();
  if (params.rootConstraints.tag !== void 0) {
    tags.set(params.rootConstraints.tag.key, params.rootConstraints.tag.value);
  }
  return new SingleImmutableLinkedList({
    elem: {
      getAncestorsCalled: false,
      name: params.rootConstraints.name,
      serviceIdentifier: params.rootConstraints.serviceIdentifier,
      tags
    },
    previous: void 0
  }, 1);
}

// node_modules/@inversifyjs/core/lib/planning/calculations/isPlanServiceRedirectionBindingNode.js
function isPlanServiceRedirectionBindingNode(node) {
  return node.redirections !== void 0;
}

// node_modules/@inversifyjs/core/lib/binding/calculations/stringifyBinding.js
function stringifyBinding(binding) {
  switch (binding.type) {
    case bindingTypeValues.Instance:
      return `[ type: "${binding.type}", serviceIdentifier: "${stringifyServiceIdentifier(binding.serviceIdentifier)}", scope: "${binding.scope}", implementationType: "${binding.implementationType.name}" ]`;
    case bindingTypeValues.ServiceRedirection:
      return `[ type: "${binding.type}", serviceIdentifier: "${stringifyServiceIdentifier(binding.serviceIdentifier)}", redirection: "${stringifyServiceIdentifier(binding.targetServiceIdentifier)}" ]`;
    default:
      return `[ type: "${binding.type}", serviceIdentifier: "${stringifyServiceIdentifier(binding.serviceIdentifier)}", scope: "${binding.scope}" ]`;
  }
}

// node_modules/@inversifyjs/core/lib/planning/calculations/throwErrorWhenUnexpectedBindingsAmountFound.js
function throwErrorWhenUnexpectedBindingsAmountFound(bindingNodes, isOptional, bindingConstraintNode, serviceRedirections) {
  const serviceIdentifier = bindingConstraintNode.elem.serviceIdentifier;
  const parentServiceIdentifier = bindingConstraintNode.previous?.elem.serviceIdentifier;
  if (Array.isArray(bindingNodes)) {
    throwErrorWhenMultipleUnexpectedBindingsAmountFound(bindingNodes, isOptional, serviceIdentifier, parentServiceIdentifier, bindingConstraintNode.elem, serviceRedirections);
  } else {
    throwErrorWhenSingleUnexpectedBindingFound(bindingNodes, isOptional, serviceIdentifier, parentServiceIdentifier, bindingConstraintNode.elem, serviceRedirections);
  }
}
function throwBindingNotFoundError(serviceIdentifier, parentServiceIdentifier, bindingConstraints, serviceRedirections) {
  const lastResolvedServiceIdentifier = serviceRedirections[serviceRedirections.length - 1] ?? serviceIdentifier;
  const errorMessage = `No bindings found for service: "${stringifyServiceIdentifier(lastResolvedServiceIdentifier)}".

Trying to resolve bindings for "${stringifyParentServiceIdentifier(serviceIdentifier, parentServiceIdentifier)}".${stringifyServiceRedirections(serviceRedirections)}${stringifyBindingConstraints(bindingConstraints)}`;
  throw new InversifyCoreError(InversifyCoreErrorKind.planning, errorMessage);
}
function throwErrorWhenMultipleUnexpectedBindingsAmountFound(bindingNodes, isOptional, serviceIdentifier, parentServiceIdentifier, bindingConstraints, serviceRedirections) {
  if (bindingNodes.length === 0) {
    if (!isOptional) {
      throwBindingNotFoundError(serviceIdentifier, parentServiceIdentifier, bindingConstraints, serviceRedirections);
    }
  } else {
    const lastResolvedServiceIdentifier = serviceRedirections[serviceRedirections.length - 1] ?? serviceIdentifier;
    const errorMessage = `Ambiguous bindings found for service: "${stringifyServiceIdentifier(lastResolvedServiceIdentifier)}".${stringifyServiceRedirections(serviceRedirections)}

Registered bindings:

${bindingNodes.map((bindingNode) => stringifyBinding(bindingNode.binding)).join("\n")}

Trying to resolve bindings for "${stringifyParentServiceIdentifier(serviceIdentifier, parentServiceIdentifier)}".${stringifyBindingConstraints(bindingConstraints)}`;
    throw new InversifyCoreError(InversifyCoreErrorKind.planning, errorMessage);
  }
}
function throwErrorWhenSingleUnexpectedBindingFound(bindingNode, isOptional, serviceIdentifier, parentServiceIdentifier, bindingConstraints, serviceRedirections) {
  if (bindingNode === void 0 && !isOptional) {
    throwBindingNotFoundError(serviceIdentifier, parentServiceIdentifier, bindingConstraints, serviceRedirections);
  }
}
function stringifyParentServiceIdentifier(serviceIdentifier, parentServiceIdentifier) {
  return parentServiceIdentifier === void 0 ? `${stringifyServiceIdentifier(serviceIdentifier)} (Root service)` : stringifyServiceIdentifier(parentServiceIdentifier);
}
function stringifyBindingConstraints(bindingConstraints) {
  const stringifiedTags = bindingConstraints.tags.size === 0 ? "" : `
- tags:
  - ${[...bindingConstraints.tags.keys()].map((key) => key.toString()).join("\n  - ")}`;
  return `

Binding constraints:
- service identifier: ${stringifyServiceIdentifier(bindingConstraints.serviceIdentifier)}
- name: ${bindingConstraints.name?.toString() ?? "-"}${stringifiedTags}`;
}
function stringifyServiceRedirections(serviceRedirections) {
  return serviceRedirections.length === 0 ? "" : `

- service redirections:
  - ${serviceRedirections.map((serviceIdentifier) => stringifyServiceIdentifier(serviceIdentifier)).join("\n  - ")}`;
}

// node_modules/@inversifyjs/core/lib/planning/calculations/checkPlanServiceRedirectionBindingNodeSingleInjectionBindings.js
var SINGLE_INJECTION_BINDINGS = 1;
function checkPlanServiceRedirectionBindingNodeSingleInjectionBindings(serviceRedirectionBindingNode, isOptional, bindingConstraintNode, serviceRedirections) {
  if (serviceRedirectionBindingNode.redirections.length === SINGLE_INJECTION_BINDINGS) {
    const [planBindingNode] = serviceRedirectionBindingNode.redirections;
    if (isPlanServiceRedirectionBindingNode(planBindingNode)) {
      checkPlanServiceRedirectionBindingNodeSingleInjectionBindings(planBindingNode, isOptional, bindingConstraintNode, [
        ...serviceRedirections,
        planBindingNode.binding.targetServiceIdentifier
      ]);
    }
    return;
  }
  throwErrorWhenUnexpectedBindingsAmountFound(serviceRedirectionBindingNode.redirections, isOptional, bindingConstraintNode, serviceRedirections);
}

// node_modules/@inversifyjs/core/lib/planning/calculations/checkServiceNodeSingleInjectionBindings.js
var SINGLE_INJECTION_BINDINGS2 = 1;
function checkServiceNodeSingleInjectionBindings(serviceNode, isOptional, bindingConstraintNode) {
  if (Array.isArray(serviceNode.bindings)) {
    if (serviceNode.bindings.length === SINGLE_INJECTION_BINDINGS2) {
      const [planBindingNode] = serviceNode.bindings;
      if (isPlanServiceRedirectionBindingNode(planBindingNode)) {
        checkPlanServiceRedirectionBindingNodeSingleInjectionBindings(planBindingNode, isOptional, bindingConstraintNode, [planBindingNode.binding.targetServiceIdentifier]);
      }
      return;
    }
  }
  throwErrorWhenUnexpectedBindingsAmountFound(serviceNode.bindings, isOptional, bindingConstraintNode, []);
}

// node_modules/@inversifyjs/core/lib/planning/actions/curryBuildPlanServiceNode.js
function curryBuildPlanServiceNode(buildServiceNodeBindings3) {
  return (params) => {
    const bindingConstraintsList = buildPlanBindingConstraintsList(params);
    const bindingConstraints = new BindingConstraintsImplementation(bindingConstraintsList.last);
    const chained = params.rootConstraints.isMultiple && params.rootConstraints.chained;
    const filteredServiceBindings = buildFilteredServiceBindings(params, bindingConstraints, {
      chained
    });
    const serviceNodeBindings = [];
    const serviceNode = {
      bindings: serviceNodeBindings,
      isContextFree: true,
      serviceIdentifier: params.rootConstraints.serviceIdentifier
    };
    serviceNodeBindings.push(...buildServiceNodeBindings3(params, bindingConstraintsList, filteredServiceBindings, serviceNode, chained));
    serviceNode.isContextFree = !bindingConstraintsList.last.elem.getAncestorsCalled;
    if (!params.rootConstraints.isMultiple) {
      checkServiceNodeSingleInjectionBindings(serviceNode, params.rootConstraints.isOptional ?? false, bindingConstraintsList.last);
      const [planBindingNode] = serviceNodeBindings;
      serviceNode.bindings = planBindingNode;
    }
    return serviceNode;
  };
}

// node_modules/@inversifyjs/core/lib/planning/calculations/getServiceFromMaybeLazyServiceIdentifier.js
function getServiceFromMaybeLazyServiceIdentifier(serviceIdentifier) {
  return LazyServiceIdentifier.is(serviceIdentifier) ? serviceIdentifier.unwrap() : serviceIdentifier;
}

// node_modules/@inversifyjs/core/lib/planning/actions/curryBuildPlanServiceNodeFromClassElementMetadata.js
function curryBuildPlanServiceNodeFromClassElementMetadata(buildServiceNodeBindings3) {
  return (params, bindingConstraintsList, elementMetadata) => {
    const serviceIdentifier = getServiceFromMaybeLazyServiceIdentifier(elementMetadata.value);
    const updatedBindingConstraintsList = bindingConstraintsList.concat({
      getAncestorsCalled: false,
      name: elementMetadata.name,
      serviceIdentifier,
      tags: elementMetadata.tags
    });
    const bindingConstraints = new BindingConstraintsImplementation(updatedBindingConstraintsList.last);
    const chained = elementMetadata.kind === ClassElementMetadataKind.multipleInjection && elementMetadata.chained;
    const filteredServiceBindings = buildFilteredServiceBindings(params, bindingConstraints, {
      chained
    });
    const serviceNodeBindings = [];
    const serviceNode = {
      bindings: serviceNodeBindings,
      isContextFree: true,
      serviceIdentifier
    };
    serviceNodeBindings.push(...buildServiceNodeBindings3(params, updatedBindingConstraintsList, filteredServiceBindings, serviceNode, chained));
    serviceNode.isContextFree = !updatedBindingConstraintsList.last.elem.getAncestorsCalled;
    if (elementMetadata.kind === ClassElementMetadataKind.singleInjection) {
      checkServiceNodeSingleInjectionBindings(serviceNode, elementMetadata.optional, updatedBindingConstraintsList.last);
      const [planBindingNode] = serviceNodeBindings;
      serviceNode.bindings = planBindingNode;
    }
    return serviceNode;
  };
}

// node_modules/@inversifyjs/core/lib/planning/actions/curryBuildPlanServiceNodeFromResolvedValueElementMetadata.js
function curryBuildPlanServiceNodeFromResolvedValueElementMetadata(buildServiceNodeBindings3) {
  return (params, bindingConstraintsList, elementMetadata) => {
    const serviceIdentifier = getServiceFromMaybeLazyServiceIdentifier(elementMetadata.value);
    const updatedBindingConstraintsList = bindingConstraintsList.concat({
      getAncestorsCalled: false,
      name: elementMetadata.name,
      serviceIdentifier,
      tags: elementMetadata.tags
    });
    const bindingConstraints = new BindingConstraintsImplementation(updatedBindingConstraintsList.last);
    const chained = elementMetadata.kind === ResolvedValueElementMetadataKind.multipleInjection && elementMetadata.chained;
    const filteredServiceBindings = buildFilteredServiceBindings(params, bindingConstraints, {
      chained
    });
    const serviceNodeBindings = [];
    const serviceNode = {
      bindings: serviceNodeBindings,
      isContextFree: true,
      serviceIdentifier
    };
    serviceNodeBindings.push(...buildServiceNodeBindings3(params, updatedBindingConstraintsList, filteredServiceBindings, serviceNode, chained));
    serviceNode.isContextFree = !updatedBindingConstraintsList.last.elem.getAncestorsCalled;
    if (elementMetadata.kind === ResolvedValueElementMetadataKind.singleInjection) {
      checkServiceNodeSingleInjectionBindings(serviceNode, elementMetadata.optional, updatedBindingConstraintsList.last);
      const [planBindingNode] = serviceNodeBindings;
      serviceNode.bindings = planBindingNode;
    }
    return serviceNode;
  };
}

// node_modules/@inversifyjs/core/lib/resolution/actions/cacheResolvedValue.js
function cacheResolvedValue(binding, resolvedValue) {
  if (isPromise(resolvedValue)) {
    binding.cache = {
      isRight: true,
      value: resolvedValue
    };
    return resolvedValue.then((syncResolvedValue) => cacheSyncResolvedValue(binding, syncResolvedValue));
  }
  return cacheSyncResolvedValue(binding, resolvedValue);
}
function cacheSyncResolvedValue(binding, resolvedValue) {
  binding.cache = {
    isRight: true,
    value: resolvedValue
  };
  return resolvedValue;
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveBindingServiceActivations.js
function resolveBindingServiceActivations(params, serviceIdentifier, value) {
  const activations = params.getActivations(serviceIdentifier);
  if (activations === void 0) {
    return value;
  }
  if (isPromise(value)) {
    return resolveBindingActivationsFromIteratorAsync(params, value, activations[Symbol.iterator]());
  }
  return resolveBindingActivationsFromIterator(params, value, activations[Symbol.iterator]());
}
function resolveBindingActivationsFromIterator(params, value, activationsIterator) {
  let activatedValue = value;
  let activationIteratorResult = activationsIterator.next();
  while (activationIteratorResult.done !== true) {
    const nextActivatedValue = activationIteratorResult.value(params.context, activatedValue);
    if (isPromise(nextActivatedValue)) {
      return resolveBindingActivationsFromIteratorAsync(params, nextActivatedValue, activationsIterator);
    } else {
      activatedValue = nextActivatedValue;
    }
    activationIteratorResult = activationsIterator.next();
  }
  return activatedValue;
}
async function resolveBindingActivationsFromIteratorAsync(params, value, activationsIterator) {
  let activatedValue = await value;
  let activationIteratorResult = activationsIterator.next();
  while (activationIteratorResult.done !== true) {
    activatedValue = await activationIteratorResult.value(params.context, activatedValue);
    activationIteratorResult = activationsIterator.next();
  }
  return activatedValue;
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveBindingActivations.js
function resolveBindingActivations(params, binding, value) {
  let activationResult = value;
  if (binding.onActivation !== void 0) {
    const onActivation = binding.onActivation;
    if (isPromise(activationResult)) {
      activationResult = activationResult.then((resolved) => onActivation(params.context, resolved));
    } else {
      activationResult = onActivation(params.context, activationResult);
    }
  }
  return resolveBindingServiceActivations(params, binding.serviceIdentifier, activationResult);
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveScoped.js
function resolveScoped(node, resolve2) {
  const binding = node.binding;
  switch (binding.scope) {
    case bindingScopeValues.Singleton: {
      return (params) => {
        if (binding.cache.isRight) {
          return binding.cache.value;
        }
        const resolvedValue = resolveBindingActivations(params, binding, resolve2(params, node));
        return cacheResolvedValue(binding, resolvedValue);
      };
    }
    case bindingScopeValues.Request: {
      return (params) => {
        if (params.requestScopeCache.has(binding.id)) {
          return params.requestScopeCache.get(binding.id);
        }
        const resolvedValue = resolveBindingActivations(params, binding, resolve2(params, node));
        params.requestScopeCache.set(binding.id, resolvedValue);
        return resolvedValue;
      };
    }
    case bindingScopeValues.Transient:
      return (params) => resolveBindingActivations(params, binding, resolve2(params, node));
  }
}

// node_modules/@inversifyjs/core/lib/planning/models/ConstantValueBindingNode.js
var ConstantValueBindingNode = class {
  binding;
  resolve;
  constructor(binding) {
    this.binding = binding;
    this.resolve = resolveScoped(this, (_params, node) => node.binding.value);
  }
};

// node_modules/@inversifyjs/core/lib/planning/models/DynamicValueBindingNode.js
var DynamicValueBindingNode = class {
  binding;
  resolve;
  constructor(binding) {
    this.binding = binding;
    this.resolve = resolveScoped(this, (params, node) => node.binding.value(params.context));
  }
};

// node_modules/@inversifyjs/core/lib/planning/models/FactoryBindingNodeImplementation.js
var FactoryBindingNodeImplementation = class {
  binding;
  resolve;
  constructor(binding) {
    this.binding = binding;
    this.resolve = resolveScoped(this, (params, node) => node.binding.factory(params.context));
  }
};

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveServiceRedirectionBindingNode.js
function resolveBindingNode(params, planBindingNode) {
  return planBindingNode.resolve(params);
}
function resolveServiceRedirectionBindingNode(params, node) {
  const resolvedValues = [];
  for (const redirection of node.redirections) {
    if (isPlanServiceRedirectionBindingNode(redirection)) {
      resolvedValues.push(...resolveServiceRedirectionBindingNode(params, redirection));
    } else {
      resolvedValues.push(resolveBindingNode(params, redirection));
    }
  }
  return resolvedValues;
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveMultipleBindingServiceNode.js
function resolveMultipleBindingServiceNode(params, bindings) {
  const resolvedValues = [];
  for (const binding of bindings) {
    if (isPlanServiceRedirectionBindingNode(binding)) {
      resolvedValues.push(...resolveServiceRedirectionBindingNode(params, binding));
    } else {
      resolvedValues.push(binding.resolve(params));
    }
  }
  if (resolvedValues.some(isPromise)) {
    return Promise.all(resolvedValues);
  }
  return resolvedValues;
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveSingleBindingServiceNode.js
function resolveSingleBindingServiceNode(params, binding) {
  if (isPlanServiceRedirectionBindingNode(binding)) {
    const resolvedValues = resolveServiceRedirectionBindingNode(params, binding);
    if (resolvedValues.length === 1) {
      return resolvedValues[0];
    } else {
      throw new InversifyCoreError(InversifyCoreErrorKind.resolution, "Unexpected multiple resolved values on single injection");
    }
  } else {
    return binding.resolve(params);
  }
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveServiceNode.js
function resolveServiceNode(params, serviceNode) {
  if (serviceNode.bindings === void 0) {
    return void 0;
  }
  if (Array.isArray(serviceNode.bindings)) {
    return resolveMultipleBindingServiceNode(params, serviceNode.bindings);
  }
  return resolveSingleBindingServiceNode(params, serviceNode.bindings);
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveInstanceBindingConstructorParams.js
function resolveInstanceBindingConstructorParams(params, node) {
  const constructorResolvedValues = [];
  for (const constructorParam of node.constructorParams) {
    if (constructorParam === void 0) {
      constructorResolvedValues.push(void 0);
    } else {
      constructorResolvedValues.push(resolveServiceNode(params, constructorParam));
    }
  }
  return constructorResolvedValues.some(isPromise) ? Promise.all(constructorResolvedValues) : constructorResolvedValues;
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveInstanceBindingNode.js
function resolveInstanceBindingNode(resolveInstanceBindingConstructorParams2, resolveInstanceBindingNodeAsyncFromConstructorParams2, resolveInstanceBindingNodeFromConstructorParams2) {
  return (params, node) => {
    const constructorValues = resolveInstanceBindingConstructorParams2(params, node);
    if (isPromise(constructorValues)) {
      return resolveInstanceBindingNodeAsyncFromConstructorParams2(constructorValues, params, node);
    }
    return resolveInstanceBindingNodeFromConstructorParams2(constructorValues, params, node);
  };
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolvePostConstruct.js
function resolvePostConstruct(instance, binding, postConstructMethodName) {
  const postConstructResult = invokePostConstruct(instance, binding, postConstructMethodName);
  if (isPromise(postConstructResult)) {
    return postConstructResult.then(() => instance);
  }
  return instance;
}
function invokePostConstruct(instance, binding, postConstructMethodName) {
  if (postConstructMethodName in instance) {
    if (typeof instance[postConstructMethodName] === "function") {
      let postConstructResult;
      try {
        postConstructResult = instance[postConstructMethodName]();
      } catch (error) {
        throw new InversifyCoreError(InversifyCoreErrorKind.resolution, `Unexpected error found when calling "${postConstructMethodName.toString()}" @postConstruct decorated method on class "${binding.implementationType.name}"`, {
          cause: error
        });
      }
      if (isPromise(postConstructResult)) {
        return invokePostConstructAsync(binding, postConstructMethodName, postConstructResult);
      }
    } else {
      throw new InversifyCoreError(InversifyCoreErrorKind.resolution, `Expecting a "${postConstructMethodName.toString()}" method when resolving "${binding.implementationType.name}" class @postConstruct decorated method, a non function property was found instead.`);
    }
  } else {
    throw new InversifyCoreError(InversifyCoreErrorKind.resolution, `Expecting a "${postConstructMethodName.toString()}" property when resolving "${binding.implementationType.name}" class @postConstruct decorated method, none found.`);
  }
}
async function invokePostConstructAsync(binding, postConstructMethodName, postConstructResult) {
  try {
    await postConstructResult;
  } catch (error) {
    throw new InversifyCoreError(InversifyCoreErrorKind.resolution, `Unexpected error found when calling "${postConstructMethodName.toString()}" @postConstruct decorated method on class "${binding.implementationType.name}"`, {
      cause: error
    });
  }
}

// node_modules/@inversifyjs/core/lib/resolution/actions/setInstanceProperties.js
function setInstanceProperties(params, instance, node) {
  const propertyAssignmentPromises = [];
  for (const [propertyKey, propertyNode] of node.propertyParams) {
    const metadata = node.classMetadata.properties.get(propertyKey);
    if (metadata === void 0) {
      throw new InversifyCoreError(InversifyCoreErrorKind.resolution, `Expecting metadata at property "${propertyKey.toString()}", none found`);
    }
    if (metadata.kind !== ClassElementMetadataKind.unmanaged && propertyNode.bindings !== void 0) {
      instance[propertyKey] = resolveServiceNode(params, propertyNode);
      if (isPromise(instance[propertyKey])) {
        propertyAssignmentPromises.push((async () => {
          instance[propertyKey] = await instance[propertyKey];
        })());
      }
    }
  }
  if (propertyAssignmentPromises.length > 0) {
    return Promise.all(propertyAssignmentPromises).then(() => void 0);
  }
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveInstanceBindingNodeFromConstructorParams.js
function resolveAllPostConstructMethods(instance, binding, postConstructMethodNames) {
  if (postConstructMethodNames.size === 0) {
    return instance;
  }
  let result = instance;
  for (const methodName of postConstructMethodNames) {
    if (isPromise(result)) {
      result = result.then((resolvedInstance) => resolvePostConstruct(resolvedInstance, binding, methodName));
    } else {
      result = resolvePostConstruct(result, binding, methodName);
    }
  }
  return result;
}
function resolveInstanceBindingNodeFromOnlyConstructorParams(constructorValues, params, node) {
  return resolveBindingServiceActivations(params, node.binding.serviceIdentifier, new node.binding.implementationType(...constructorValues));
}
function resolveInstanceBindingNodeFromConstructorParams(constructorValues, params, node) {
  const instance = new node.binding.implementationType(...constructorValues);
  const propertiesAssignmentResult = setInstanceProperties(params, instance, node);
  if (isPromise(propertiesAssignmentResult)) {
    return propertiesAssignmentResult.then(() => resolveAllPostConstructMethods(instance, node.binding, node.classMetadata.lifecycle.postConstructMethodNames));
  }
  return resolveAllPostConstructMethods(instance, node.binding, node.classMetadata.lifecycle.postConstructMethodNames);
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveInstanceBindingNodeAsyncFromConstructorParams.js
async function resolveInstanceBindingNodeAsyncFromOnlyConstructorParams(constructorValues, params, node) {
  return resolveBindingServiceActivations(params, node.binding.serviceIdentifier, new node.binding.implementationType(...await constructorValues));
}
async function resolveInstanceBindingNodeAsyncFromConstructorParams(constructorValues, params, node) {
  const constructorResolvedValues = await constructorValues;
  return resolveInstanceBindingNodeFromConstructorParams(constructorResolvedValues, params, node);
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveScopedWithNoActivations.js
function resolveScopedWithNoActivations(node, resolve2) {
  const binding = node.binding;
  switch (binding.scope) {
    case bindingScopeValues.Singleton: {
      return (params) => {
        if (binding.cache.isRight) {
          return binding.cache.value;
        }
        const resolvedValue = resolve2(params, node);
        return cacheResolvedValue(binding, resolvedValue);
      };
    }
    case bindingScopeValues.Request: {
      return (params) => {
        if (params.requestScopeCache.has(binding.id)) {
          return params.requestScopeCache.get(binding.id);
        }
        const resolvedValue = resolve2(params, node);
        params.requestScopeCache.set(binding.id, resolvedValue);
        return resolvedValue;
      };
    }
    case bindingScopeValues.Transient:
      return (params) => resolve2(params, node);
  }
}

// node_modules/@inversifyjs/core/lib/planning/calculations/buildInstanceBindingNodeResolver.js
var resolveInstanceBindingNode2 = resolveInstanceBindingNode(resolveInstanceBindingConstructorParams, resolveInstanceBindingNodeAsyncFromConstructorParams, resolveInstanceBindingNodeFromConstructorParams);
var resolveInstanceBindingNodeWithOnlyConstructorParams = resolveInstanceBindingNode(resolveInstanceBindingConstructorParams, resolveInstanceBindingNodeAsyncFromOnlyConstructorParams, resolveInstanceBindingNodeFromOnlyConstructorParams);
var resolveScopedInstanceBindingNode = (node) => resolveScoped(node, resolveInstanceBindingNode2);
var resolveScopedInstanceBindingNodeWithOnlyConstructorParams = (node) => resolveScopedWithNoActivations(node, resolveInstanceBindingNodeWithOnlyConstructorParams);
function buildInstanceBindingNodeResolver(binding, classMetadata, node) {
  if (classMetadata.lifecycle.postConstructMethodNames.size === 0 && binding.onActivation === void 0 && classMetadata.properties.size === 0) {
    return resolveScopedInstanceBindingNodeWithOnlyConstructorParams(node);
  }
  return resolveScopedInstanceBindingNode(node);
}

// node_modules/@inversifyjs/core/lib/planning/models/InstanceBindingNodeImplementation.js
var InstanceBindingNodeImplementation = class {
  binding;
  classMetadata;
  constructorParams;
  propertyParams;
  resolve;
  constructor(binding, classMetadata) {
    this.binding = binding;
    this.classMetadata = classMetadata;
    this.constructorParams = [];
    this.propertyParams = /* @__PURE__ */ new Map();
    this.resolve = buildInstanceBindingNodeResolver(binding, classMetadata, this);
  }
};

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveResolvedValueBindingParams.js
function resolveResolvedValueBindingParams(params, node) {
  const paramsResolvedValues = [];
  for (const param of node.params) {
    paramsResolvedValues.push(resolveServiceNode(params, param));
  }
  return paramsResolvedValues.some(isPromise) ? Promise.all(paramsResolvedValues) : paramsResolvedValues;
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveResolvedValueBindingNode.js
function resolveResolvedValueBindingNode(params, node) {
  const paramValues = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolveResolvedValueBindingParams(params, node)
  );
  if (isPromise(paramValues)) {
    return paramValues.then((resolvedParamValues) => node.binding.factory(...resolvedParamValues));
  }
  return node.binding.factory(...paramValues);
}

// node_modules/@inversifyjs/core/lib/planning/models/ResolvedValueBindingNodeImplementation.js
var ResolvedValueBindingNodeImplementation = class {
  binding;
  params;
  resolve;
  constructor(binding) {
    this.binding = binding;
    this.params = [];
    this.resolve = resolveScoped(this, resolveResolvedValueBindingNode);
  }
};

// node_modules/@inversifyjs/core/lib/planning/actions/curryBuildServiceNodeBindings.js
function curryBuildServiceNodeBindings(subplan3) {
  const buildInstancePlanBindingNode = curryBuildInstancePlanBindingNode(subplan3);
  const buildResolvedValuePlanBindingNode = curryBuildResolvedValuePlanBindingNode(subplan3);
  const buildServiceNodeBindings3 = (params, bindingConstraintsList, serviceBindings, parentNode, chainedBindings) => {
    const serviceIdentifier = isPlanServiceRedirectionBindingNode(parentNode) ? parentNode.binding.targetServiceIdentifier : parentNode.serviceIdentifier;
    params.servicesBranch.push(serviceIdentifier);
    const planBindingNodes = [];
    for (const binding of serviceBindings) {
      if (binding.type === bindingTypeValues.Factory) {
        planBindingNodes.push(new FactoryBindingNodeImplementation(binding));
        continue;
      }
      switch (binding.type) {
        case bindingTypeValues.ConstantValue: {
          planBindingNodes.push(new ConstantValueBindingNode(binding));
          break;
        }
        case bindingTypeValues.DynamicValue: {
          planBindingNodes.push(new DynamicValueBindingNode(binding));
          break;
        }
        case bindingTypeValues.Instance: {
          planBindingNodes.push(buildInstancePlanBindingNode(params, binding, bindingConstraintsList));
          break;
        }
        case bindingTypeValues.ResolvedValue: {
          planBindingNodes.push(buildResolvedValuePlanBindingNode(params, binding, bindingConstraintsList));
          break;
        }
        case bindingTypeValues.ServiceRedirection: {
          const planBindingNode = buildServiceRedirectionPlanBindingNode(params, bindingConstraintsList, binding, chainedBindings);
          planBindingNodes.push(planBindingNode);
          break;
        }
      }
    }
    params.servicesBranch.pop();
    return planBindingNodes;
  };
  const buildServiceRedirectionPlanBindingNode = curryBuildServiceRedirectionPlanBindingNode(buildServiceNodeBindings3);
  return buildServiceNodeBindings3;
}
function curryBuildInstancePlanBindingNode(subplan3) {
  return (params, binding, bindingConstraintsList) => {
    const classMetadata = params.operations.getClassMetadata(binding.implementationType);
    const childNode = new InstanceBindingNodeImplementation(binding, classMetadata);
    const subplanParams = {
      autobindOptions: params.autobindOptions,
      node: childNode,
      operations: params.operations,
      servicesBranch: params.servicesBranch
    };
    return subplan3(subplanParams, bindingConstraintsList);
  };
}
function curryBuildResolvedValuePlanBindingNode(subplan3) {
  return (params, binding, bindingConstraintsList) => {
    const childNode = new ResolvedValueBindingNodeImplementation(binding);
    const subplanParams = {
      autobindOptions: params.autobindOptions,
      node: childNode,
      operations: params.operations,
      servicesBranch: params.servicesBranch
    };
    return subplan3(subplanParams, bindingConstraintsList);
  };
}
function curryBuildServiceRedirectionPlanBindingNode(buildServiceNodeBindings3) {
  return (params, bindingConstraintsList, binding, chainedBindings) => {
    const childNode = {
      binding,
      redirections: []
    };
    const bindingConstraints = new BindingConstraintsImplementation(bindingConstraintsList.last);
    const filteredServiceBindings = buildFilteredServiceBindings(params, bindingConstraints, {
      chained: chainedBindings,
      customServiceIdentifier: binding.targetServiceIdentifier
    });
    childNode.redirections.push(...buildServiceNodeBindings3(params, bindingConstraintsList, filteredServiceBindings, childNode, chainedBindings));
    return childNode;
  };
}

// node_modules/@inversifyjs/core/lib/planning/calculations/isInstanceBindingNode.js
function isInstanceBindingNode(node) {
  return node.binding.type === bindingTypeValues.Instance;
}

// node_modules/@inversifyjs/core/lib/planning/calculations/tryBuildGetPlanOptionsFromManagedClassElementMetadata.js
function tryBuildGetPlanOptionsFromManagedClassElementMetadata(elementMetadata) {
  let tag;
  if (elementMetadata.tags.size === 0) {
    tag = void 0;
  } else if (elementMetadata.tags.size === 1) {
    const [key, value] = elementMetadata.tags.entries().next().value;
    tag = { key, value };
  } else {
    return void 0;
  }
  const serviceIdentifier = LazyServiceIdentifier.is(elementMetadata.value) ? elementMetadata.value.unwrap() : elementMetadata.value;
  if (elementMetadata.kind === ClassElementMetadataKind.multipleInjection) {
    return {
      chained: elementMetadata.chained,
      isMultiple: true,
      name: elementMetadata.name,
      optional: elementMetadata.optional,
      serviceIdentifier,
      tag
    };
  } else {
    return {
      isMultiple: false,
      name: elementMetadata.name,
      optional: elementMetadata.optional,
      serviceIdentifier,
      tag
    };
  }
}

// node_modules/@inversifyjs/core/lib/planning/calculations/tryBuildGetPlanOptionsFromResolvedValueElementMetadata.js
function tryBuildGetPlanOptionsFromResolvedValueElementMetadata(resolvedValueElementMetadata) {
  let tag;
  if (resolvedValueElementMetadata.tags.size === 0) {
    tag = void 0;
  } else if (resolvedValueElementMetadata.tags.size === 1) {
    const [key, value] = resolvedValueElementMetadata.tags.entries().next().value;
    tag = { key, value };
  } else {
    return void 0;
  }
  const serviceIdentifier = LazyServiceIdentifier.is(resolvedValueElementMetadata.value) ? resolvedValueElementMetadata.value.unwrap() : resolvedValueElementMetadata.value;
  if (resolvedValueElementMetadata.kind === ResolvedValueElementMetadataKind.multipleInjection) {
    return {
      chained: resolvedValueElementMetadata.chained,
      isMultiple: true,
      name: resolvedValueElementMetadata.name,
      optional: resolvedValueElementMetadata.optional,
      serviceIdentifier,
      tag
    };
  } else {
    return {
      isMultiple: false,
      name: resolvedValueElementMetadata.name,
      optional: resolvedValueElementMetadata.optional,
      serviceIdentifier,
      tag
    };
  }
}

// node_modules/@inversifyjs/core/lib/planning/actions/cacheNonRootPlanServiceNode.js
function cacheNonRootPlanServiceNode(getPlanOptions, operations, planServiceNode, context) {
  if (getPlanOptions !== void 0 && (LazyPlanServiceNode.is(planServiceNode) && !planServiceNode.isExpanded() || planServiceNode.isContextFree)) {
    const planResult = {
      tree: {
        root: planServiceNode
      }
    };
    operations.setPlan(getPlanOptions, planResult);
  } else {
    operations.setNonCachedServiceNode(planServiceNode, context);
  }
}

// node_modules/@inversifyjs/core/lib/planning/actions/currySubplan.js
var MAX_PLAN_DEPTH = 500;
var LazyManagedClassMetadataPlanServiceNode = class extends LazyPlanServiceNode {
  #params;
  #buildLazyPlanServiceNodeNodeFromClassElementMetadata;
  #bindingConstraintsList;
  #elementMetadata;
  constructor(params, buildLazyPlanServiceNodeNodeFromClassElementMetadata, bindingConstraintsList, elementMetadata, serviceNode) {
    super(serviceNode, getServiceFromMaybeLazyServiceIdentifier(elementMetadata.value));
    this.#buildLazyPlanServiceNodeNodeFromClassElementMetadata = buildLazyPlanServiceNodeNodeFromClassElementMetadata;
    this.#params = params;
    this.#bindingConstraintsList = bindingConstraintsList;
    this.#elementMetadata = elementMetadata;
  }
  _buildPlanServiceNode() {
    return this.#buildLazyPlanServiceNodeNodeFromClassElementMetadata(this.#params, this.#bindingConstraintsList, this.#elementMetadata);
  }
};
var LazyResolvedValueMetadataPlanServiceNode = class extends LazyPlanServiceNode {
  #params;
  #buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata;
  #bindingConstraintsList;
  #resolvedValueElementMetadata;
  constructor(params, buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata, bindingConstraintsList, resolvedValueElementMetadata, serviceNode) {
    super(serviceNode, getServiceFromMaybeLazyServiceIdentifier(resolvedValueElementMetadata.value));
    this.#params = params;
    this.#buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata = buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata;
    this.#bindingConstraintsList = bindingConstraintsList;
    this.#resolvedValueElementMetadata = resolvedValueElementMetadata;
  }
  _buildPlanServiceNode() {
    return this.#buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata(this.#params, this.#bindingConstraintsList, this.#resolvedValueElementMetadata);
  }
};
function currySubplan(buildLazyPlanServiceNodeNodeFromClassElementMetadata, buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata, buildPlanServiceNodeFromClassElementMetadata2, buildPlanServiceNodeFromResolvedValueElementMetadata2) {
  const subplanInstanceBindingNode = currySubplanInstanceBindingNode(buildLazyPlanServiceNodeNodeFromClassElementMetadata, buildPlanServiceNodeFromClassElementMetadata2);
  const subplanResolvedValueBindingNode = currySubplanResolvedValueBindingNode(buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata, buildPlanServiceNodeFromResolvedValueElementMetadata2);
  return (params, bindingConstraintsList) => {
    if (isInstanceBindingNode(params.node)) {
      return subplanInstanceBindingNode(params, params.node, bindingConstraintsList);
    } else {
      return subplanResolvedValueBindingNode(params, params.node, bindingConstraintsList);
    }
  };
}
function currySubplanInstanceBindingNode(buildLazyPlanServiceNodeNodeFromClassElementMetadata, buildPlanServiceNodeFromClassElementMetadata2) {
  const handlePlanServiceNodeBuildFromClassElementMetadata = curryHandlePlanServiceNodeBuildFromClassElementMetadata(buildLazyPlanServiceNodeNodeFromClassElementMetadata, buildPlanServiceNodeFromClassElementMetadata2);
  return (params, node, bindingConstraintsList) => {
    const classMetadata = node.classMetadata;
    for (const [index, elementMetadata] of classMetadata.constructorArguments.entries()) {
      node.constructorParams[index] = handlePlanServiceNodeBuildFromClassElementMetadata(params, bindingConstraintsList, elementMetadata);
    }
    for (const [propertyKey, elementMetadata] of classMetadata.properties) {
      const planServiceNode = handlePlanServiceNodeBuildFromClassElementMetadata(params, bindingConstraintsList, elementMetadata);
      if (planServiceNode !== void 0) {
        node.propertyParams.set(propertyKey, planServiceNode);
      }
    }
    return params.node;
  };
}
function currySubplanResolvedValueBindingNode(buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata, buildPlanServiceNodeFromResolvedValueElementMetadata2) {
  const handlePlanServiceNodeBuildFromResolvedValueElementMetadata = curryHandlePlanServiceNodeBuildFromResolvedValueElementMetadata(buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata, buildPlanServiceNodeFromResolvedValueElementMetadata2);
  return (params, node, bindingConstraintsList) => {
    const resolvedValueMetadata = node.binding.metadata;
    for (const [index, elementMetadata] of resolvedValueMetadata.arguments.entries()) {
      node.params[index] = handlePlanServiceNodeBuildFromResolvedValueElementMetadata(params, bindingConstraintsList, elementMetadata);
    }
    return params.node;
  };
}
function curryHandlePlanServiceNodeBuildFromClassElementMetadata(buildLazyPlanServiceNodeNodeFromClassElementMetadata, buildPlanServiceNodeFromClassElementMetadata2) {
  return (params, bindingConstraintsList, elementMetadata) => {
    if (elementMetadata.kind === ClassElementMetadataKind.unmanaged) {
      return void 0;
    }
    if (bindingConstraintsList.length > MAX_PLAN_DEPTH) {
      throw new InversifyCoreError(InversifyCoreErrorKind.planningMaxDepthExceeded, "Maximum plan depth exceeded. This is likely caused by a circular dependency.");
    }
    const getPlanOptions = tryBuildGetPlanOptionsFromManagedClassElementMetadata(elementMetadata);
    if (getPlanOptions !== void 0) {
      const planResult = params.operations.getPlan(getPlanOptions);
      if (planResult !== void 0 && planResult.tree.root.isContextFree) {
        return planResult.tree.root;
      }
    }
    const serviceNode = buildPlanServiceNodeFromClassElementMetadata2(params, bindingConstraintsList, elementMetadata);
    const lazyPlanServiceNode = new LazyManagedClassMetadataPlanServiceNode(params, buildLazyPlanServiceNodeNodeFromClassElementMetadata, bindingConstraintsList, elementMetadata, serviceNode);
    cacheNonRootPlanServiceNode(getPlanOptions, params.operations, lazyPlanServiceNode, {
      bindingConstraintsList,
      chainedBindings: elementMetadata.kind === ClassElementMetadataKind.multipleInjection && elementMetadata.chained,
      optionalBindings: elementMetadata.optional
    });
    return lazyPlanServiceNode;
  };
}
function curryHandlePlanServiceNodeBuildFromResolvedValueElementMetadata(buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata, buildPlanServiceNodeFromResolvedValueElementMetadata2) {
  return (params, bindingConstraintsList, elementMetadata) => {
    const getPlanOptions = tryBuildGetPlanOptionsFromResolvedValueElementMetadata(elementMetadata);
    if (getPlanOptions !== void 0) {
      const planResult = params.operations.getPlan(getPlanOptions);
      if (planResult !== void 0 && planResult.tree.root.isContextFree) {
        return planResult.tree.root;
      }
    }
    const serviceNode = buildPlanServiceNodeFromResolvedValueElementMetadata2(params, bindingConstraintsList, elementMetadata);
    const lazyPlanServiceNode = new LazyResolvedValueMetadataPlanServiceNode(params, buildLazyPlanServiceNodeNodeFromResolvedValueElementMetadata, bindingConstraintsList, elementMetadata, serviceNode);
    cacheNonRootPlanServiceNode(getPlanOptions, params.operations, lazyPlanServiceNode, {
      bindingConstraintsList,
      chainedBindings: elementMetadata.kind === ResolvedValueElementMetadataKind.multipleInjection && elementMetadata.chained,
      optionalBindings: elementMetadata.optional
    });
    return lazyPlanServiceNode;
  };
}

// node_modules/@inversifyjs/core/lib/planning/actions/plan.js
var LazyRootPlanServiceNode = class extends LazyPlanServiceNode {
  #params;
  constructor(params, serviceNode) {
    super(serviceNode, serviceNode.serviceIdentifier);
    this.#params = params;
  }
  _buildPlanServiceNode() {
    return buildPlanServiceNode(this.#params);
  }
};
var buildPlanServiceNodeFromClassElementMetadata = curryBuildPlanServiceNodeFromClassElementMetadata(circularBuildServiceNodeBindings);
var buildPlanServiceNodeFromResolvedValueElementMetadata = curryBuildPlanServiceNodeFromResolvedValueElementMetadata(circularBuildServiceNodeBindings);
var subplan = currySubplan(buildPlanServiceNodeFromClassElementMetadata, buildPlanServiceNodeFromResolvedValueElementMetadata, buildPlanServiceNodeFromClassElementMetadata, buildPlanServiceNodeFromResolvedValueElementMetadata);
var buildServiceNodeBindings = curryBuildServiceNodeBindings(subplan);
function circularBuildServiceNodeBindings(params, bindingConstraintsList, serviceBindings, parentNode, chainedBindings) {
  return buildServiceNodeBindings(params, bindingConstraintsList, serviceBindings, parentNode, chainedBindings);
}
var buildPlanServiceNode = curryBuildPlanServiceNode(buildServiceNodeBindings);
function plan(params) {
  try {
    const getPlanOptions = buildGetPlanOptionsFromPlanParams(params);
    const planResultFromCache = params.operations.getPlan(getPlanOptions);
    if (planResultFromCache !== void 0) {
      return planResultFromCache;
    }
    const serviceNode = buildPlanServiceNode(params);
    const planResult = {
      tree: {
        root: new LazyRootPlanServiceNode(params, serviceNode)
      }
    };
    params.operations.setPlan(getPlanOptions, planResult);
    return planResult;
  } catch (error) {
    handlePlanError(params, error);
  }
}

// node_modules/@inversifyjs/core/lib/planning/models/CacheBindingInvalidationKind.js
var CacheBindingInvalidationKind;
(function(CacheBindingInvalidationKind2) {
  CacheBindingInvalidationKind2["bindingAdded"] = "bindingAdded";
  CacheBindingInvalidationKind2["bindingRemoved"] = "bindingRemoved";
})(CacheBindingInvalidationKind || (CacheBindingInvalidationKind = {}));

// node_modules/@inversifyjs/core/lib/common/models/WeakList.js
var DEFAULT_MINIMUM_LENGTH_TO_REALLOCATE = 8;
var DEFAULT_MODULUS_TO_REALLOCATE_ON_PUSH = 1024;
var MIN_DEAD_REFS_FOR_REALLOCATION_PERCENTAGE = 0.5;
var WeakList = class {
  #list;
  #minimumLengthToReallocate;
  #modulusToReallocateOnPush;
  constructor() {
    this.#list = [];
    this.#minimumLengthToReallocate = DEFAULT_MINIMUM_LENGTH_TO_REALLOCATE;
    this.#modulusToReallocateOnPush = DEFAULT_MODULUS_TO_REALLOCATE_ON_PUSH;
  }
  *[Symbol.iterator]() {
    let deadRefCount = 0;
    for (const weakRef of this.#list) {
      const value = weakRef.deref();
      if (value === void 0) {
        ++deadRefCount;
      } else {
        yield value;
      }
    }
    if (this.#list.length >= this.#minimumLengthToReallocate && this.#shouldReallocate(deadRefCount)) {
      this.#reallocate(deadRefCount);
    }
  }
  push(value) {
    const weakRef = new WeakRef(value);
    this.#list.push(weakRef);
    if (this.#list.length >= this.#minimumLengthToReallocate && this.#list.length % this.#modulusToReallocateOnPush === 0) {
      let deadRefCount = 0;
      for (const ref of this.#list) {
        if (ref.deref() === void 0) {
          ++deadRefCount;
        }
      }
      if (this.#shouldReallocate(deadRefCount)) {
        this.#reallocate(deadRefCount);
      }
    }
  }
  #reallocate(deadRefCount) {
    const newList = new Array(this.#list.length - deadRefCount);
    let i = 0;
    for (const ref of this.#list) {
      if (ref.deref()) {
        newList[i++] = ref;
      }
    }
    this.#list = newList;
  }
  #shouldReallocate(deadRefCount) {
    return deadRefCount >= this.#list.length * MIN_DEAD_REFS_FOR_REALLOCATION_PERCENTAGE;
  }
};

// node_modules/@inversifyjs/core/lib/planning/actions/curryLazyBuildPlanServiceNodeFromClassElementMetadata.js
function curryLazyBuildPlanServiceNodeFromClassElementMetadata(buildServiceNodeBindings3) {
  const buildPlanServiceNodeFromClassElementMetadata2 = curryBuildPlanServiceNodeFromClassElementMetadata(buildServiceNodeBindings3);
  return (params, bindingConstraintsList, elementMetadata) => {
    try {
      return buildPlanServiceNodeFromClassElementMetadata2(params, bindingConstraintsList, elementMetadata);
    } catch (error) {
      if (InversifyCoreError.isErrorOfKind(error, InversifyCoreErrorKind.planning)) {
        return void 0;
      }
      throw error;
    }
  };
}

// node_modules/@inversifyjs/core/lib/planning/actions/curryLazyBuildPlanServiceNodeFromResolvedValueElementMetadata.js
function curryLazyBuildPlanServiceNodeFromResolvedValueElementMetadata(buildServiceNodeBindings3) {
  const buildPlanServiceNodeFromResolvedValueElementMetadata2 = curryBuildPlanServiceNodeFromResolvedValueElementMetadata(buildServiceNodeBindings3);
  return (params, bindingConstraintsList, elementMetadata) => {
    try {
      return buildPlanServiceNodeFromResolvedValueElementMetadata2(params, bindingConstraintsList, elementMetadata);
    } catch (error) {
      if (InversifyCoreError.isErrorOfKind(error, InversifyCoreErrorKind.planning)) {
        return void 0;
      }
      throw error;
    }
  };
}

// node_modules/@inversifyjs/core/lib/planning/actions/addServiceNodeBindingIfContextFree.js
var subplan2 = currySubplan(buildPlanServiceNodeFromClassElementMetadata, buildPlanServiceNodeFromResolvedValueElementMetadata, circularLazyBuildPlanServiceNodeFromClassElementMetadata, circularLazyBuildPlanServiceNodeFromResolvedValueElementMetadata);
var buildServiceNodeBindings2 = curryBuildServiceNodeBindings(subplan2);
var lazyBuildPlanServiceNodeFromClassElementMetadata = curryLazyBuildPlanServiceNodeFromClassElementMetadata(buildServiceNodeBindings2);
var lazyBuildPlanServiceNodeFromResolvedValueElementMetadata = curryLazyBuildPlanServiceNodeFromResolvedValueElementMetadata(buildServiceNodeBindings2);
function circularLazyBuildPlanServiceNodeFromClassElementMetadata(params, bindingConstraintsList, elementMetadata) {
  return lazyBuildPlanServiceNodeFromClassElementMetadata(params, bindingConstraintsList, elementMetadata);
}
function circularLazyBuildPlanServiceNodeFromResolvedValueElementMetadata(params, bindingConstraintsList, elementMetadata) {
  return lazyBuildPlanServiceNodeFromResolvedValueElementMetadata(params, bindingConstraintsList, elementMetadata);
}
function addServiceNodeBindingIfContextFree(params, serviceNode, binding, bindingConstraintsList, chainedBindings) {
  if (LazyPlanServiceNode.is(serviceNode) && !serviceNode.isExpanded()) {
    return {
      isContextFreeBinding: true,
      shouldInvalidateServiceNode: false
    };
  }
  const bindingConstraints = new BindingConstraintsImplementation(bindingConstraintsList.last);
  if (!binding.isSatisfiedBy(bindingConstraints) || bindingConstraintsList.last.elem.getAncestorsCalled) {
    return {
      isContextFreeBinding: !bindingConstraintsList.last.elem.getAncestorsCalled,
      shouldInvalidateServiceNode: false
    };
  }
  return addServiceNodeSatisfiedBindingIfContextFree(params, serviceNode, binding, bindingConstraintsList, chainedBindings);
}
function addServiceNodeSatisfiedBindingIfContextFree(params, serviceNode, binding, bindingConstraintsList, chainedBindings) {
  let serviceNodeBinding;
  try {
    [serviceNodeBinding] = buildServiceNodeBindings2(params, bindingConstraintsList, [binding], serviceNode, chainedBindings);
  } catch (error) {
    if (isStackOverflowError(error) || InversifyCoreError.isErrorOfKind(error, InversifyCoreErrorKind.planningMaxDepthExceeded)) {
      return {
        isContextFreeBinding: false,
        shouldInvalidateServiceNode: true
      };
    }
    throw error;
  }
  return addServiceNodeBindingNodeIfContextFree(serviceNode, serviceNodeBinding);
}
function addServiceNodeBindingNodeIfContextFree(serviceNode, serviceNodeBinding) {
  if (Array.isArray(serviceNode.bindings)) {
    serviceNode.bindings.push(serviceNodeBinding);
  } else {
    if (serviceNode.bindings === void 0) {
      serviceNode.bindings = serviceNodeBinding;
    } else {
      if (!LazyPlanServiceNode.is(serviceNode)) {
        throw new InversifyCoreError(InversifyCoreErrorKind.planning, "Unexpected non-lazy plan service node. This is likely a bug in the planning logic. Please, report this issue");
      }
      return {
        isContextFreeBinding: true,
        shouldInvalidateServiceNode: true
      };
    }
  }
  return {
    isContextFreeBinding: true,
    shouldInvalidateServiceNode: false
  };
}

// node_modules/@inversifyjs/core/lib/planning/actions/addRootServiceNodeBindingIfContextFree.js
function addRootServiceNodeBindingIfContextFree(params, serviceNode, binding) {
  if (LazyPlanServiceNode.is(serviceNode) && !serviceNode.isExpanded()) {
    return {
      isContextFreeBinding: true,
      shouldInvalidateServiceNode: false
    };
  }
  const bindingConstraintsList = buildPlanBindingConstraintsList(params);
  const chained = params.rootConstraints.isMultiple && params.rootConstraints.chained;
  return addServiceNodeBindingIfContextFree(params, serviceNode, binding, bindingConstraintsList, chained);
}

// node_modules/@inversifyjs/core/lib/planning/actions/removeServiceNodeBindingIfContextFree.js
function removeServiceNodeBindingIfContextFree(serviceNode, binding, bindingConstraintsList, optionalBindings) {
  if (LazyPlanServiceNode.is(serviceNode) && !serviceNode.isExpanded()) {
    return {
      bindingNodeRemoved: void 0,
      isContextFreeBinding: true
    };
  }
  const bindingConstraints = new BindingConstraintsImplementation(bindingConstraintsList.last);
  if (!binding.isSatisfiedBy(bindingConstraints) || bindingConstraintsList.last.elem.getAncestorsCalled) {
    return {
      bindingNodeRemoved: void 0,
      isContextFreeBinding: !bindingConstraintsList.last.elem.getAncestorsCalled
    };
  }
  let bindingNodeRemoved;
  if (Array.isArray(serviceNode.bindings)) {
    serviceNode.bindings = serviceNode.bindings.filter((bindingNode) => {
      if (bindingNode.binding === binding) {
        bindingNodeRemoved = bindingNode;
        return false;
      }
      return true;
    });
  } else {
    if (serviceNode.bindings?.binding === binding) {
      bindingNodeRemoved = serviceNode.bindings;
      if (optionalBindings) {
        serviceNode.bindings = void 0;
      } else {
        if (!LazyPlanServiceNode.is(serviceNode)) {
          throw new InversifyCoreError(InversifyCoreErrorKind.planning, "Unexpected non-lazy plan service node. This is likely a bug in the planning logic. Please, report this issue");
        }
        serviceNode.invalidate();
      }
    }
  }
  return {
    bindingNodeRemoved,
    isContextFreeBinding: true
  };
}

// node_modules/@inversifyjs/core/lib/planning/actions/removeRootServiceNodeBindingIfContextFree.js
function removeRootServiceNodeBindingIfContextFree(params, serviceNode, binding) {
  if (LazyPlanServiceNode.is(serviceNode) && !serviceNode.isExpanded()) {
    return {
      bindingNodeRemoved: void 0,
      isContextFreeBinding: true
    };
  }
  const bindingConstraintsList = buildPlanBindingConstraintsList(params);
  return removeServiceNodeBindingIfContextFree(serviceNode, binding, bindingConstraintsList, params.rootConstraints.isOptional ?? false);
}

// node_modules/@inversifyjs/core/lib/planning/services/PlanResultCacheService.js
var CHAINED_MASK = 4;
var IS_MULTIPLE_MASK = 2;
var OPTIONAL_MASK = 1;
var MAP_ARRAY_LENGTH = 8;
var PlanResultCacheService = class {
  #serviceIdToNonCachedServiceNodeMapMap;
  #serviceIdToValuePlanMap;
  #namedServiceIdToValuePlanMap;
  #namedTaggedServiceIdToValuePlanMap;
  #taggedServiceIdToValuePlanMap;
  #subscribers;
  constructor() {
    this.#serviceIdToNonCachedServiceNodeMapMap = /* @__PURE__ */ new Map();
    this.#serviceIdToValuePlanMap = this.#buildInitializedMapArray();
    this.#namedServiceIdToValuePlanMap = this.#buildInitializedMapArray();
    this.#namedTaggedServiceIdToValuePlanMap = this.#buildInitializedMapArray();
    this.#taggedServiceIdToValuePlanMap = this.#buildInitializedMapArray();
    this.#subscribers = new WeakList();
  }
  clearCache() {
    for (const map of this.#getMaps()) {
      map.clear();
    }
    for (const subscriber of this.#subscribers) {
      subscriber.clearCache();
    }
  }
  get(options) {
    if (options.name === void 0) {
      if (options.tag === void 0) {
        return this.#getMapFromMapArray(this.#serviceIdToValuePlanMap, options).get(options.serviceIdentifier);
      } else {
        return this.#getMapFromMapArray(this.#taggedServiceIdToValuePlanMap, options).get(options.serviceIdentifier)?.get(options.tag.key)?.get(options.tag.value);
      }
    } else {
      if (options.tag === void 0) {
        return this.#getMapFromMapArray(this.#namedServiceIdToValuePlanMap, options).get(options.serviceIdentifier)?.get(options.name);
      } else {
        return this.#getMapFromMapArray(this.#namedTaggedServiceIdToValuePlanMap, options).get(options.serviceIdentifier)?.get(options.name)?.get(options.tag.key)?.get(options.tag.value);
      }
    }
  }
  invalidateServiceBinding(invalidation) {
    this.#invalidateServiceMap(invalidation);
    this.#invalidateNamedServiceMap(invalidation);
    this.#invalidateNamedTaggedServiceMap(invalidation);
    this.#invalidateTaggedServiceMap(invalidation);
    this.#invalidateNonCachedServiceNodeSetMap(invalidation);
    for (const subscriber of this.#subscribers) {
      subscriber.invalidateServiceBinding(invalidation);
    }
  }
  set(options, planResult) {
    if (options.name === void 0) {
      if (options.tag === void 0) {
        this.#getMapFromMapArray(this.#serviceIdToValuePlanMap, options).set(options.serviceIdentifier, planResult);
      } else {
        this.#getOrBuildMapValueFromMapMap(this.#getOrBuildMapValueFromMapMap(this.#getMapFromMapArray(this.#taggedServiceIdToValuePlanMap, options), options.serviceIdentifier), options.tag.key).set(options.tag.value, planResult);
      }
    } else {
      if (options.tag === void 0) {
        this.#getOrBuildMapValueFromMapMap(this.#getMapFromMapArray(this.#namedServiceIdToValuePlanMap, options), options.serviceIdentifier).set(options.name, planResult);
      } else {
        this.#getOrBuildMapValueFromMapMap(this.#getOrBuildMapValueFromMapMap(this.#getOrBuildMapValueFromMapMap(this.#getMapFromMapArray(this.#namedTaggedServiceIdToValuePlanMap, options), options.serviceIdentifier), options.name), options.tag.key).set(options.tag.value, planResult);
      }
    }
  }
  setNonCachedServiceNode(node, context) {
    let nonCachedMap = this.#serviceIdToNonCachedServiceNodeMapMap.get(node.serviceIdentifier);
    if (nonCachedMap === void 0) {
      nonCachedMap = /* @__PURE__ */ new Map();
      this.#serviceIdToNonCachedServiceNodeMapMap.set(node.serviceIdentifier, nonCachedMap);
    }
    nonCachedMap.set(node, context);
  }
  subscribe(subscriber) {
    this.#subscribers.push(subscriber);
  }
  #buildInitializedMapArray() {
    const mapArray = new Array(MAP_ARRAY_LENGTH);
    for (let i = 0; i < mapArray.length; ++i) {
      mapArray[i] = /* @__PURE__ */ new Map();
    }
    return mapArray;
  }
  #buildUpdatePlanParams(invalidation, index, name, tag) {
    const isMultiple = (index & IS_MULTIPLE_MASK) !== 0;
    let planParamsConstraint;
    if (isMultiple) {
      const isChained = (index & IS_MULTIPLE_MASK & CHAINED_MASK) !== 0;
      planParamsConstraint = {
        chained: isChained,
        isMultiple,
        serviceIdentifier: invalidation.binding.serviceIdentifier
      };
    } else {
      planParamsConstraint = {
        isMultiple,
        serviceIdentifier: invalidation.binding.serviceIdentifier
      };
    }
    const isOptional = (index & OPTIONAL_MASK) !== 0;
    if (isOptional) {
      planParamsConstraint.isOptional = true;
    }
    if (name !== void 0) {
      planParamsConstraint.name = name;
    }
    if (tag !== void 0) {
      planParamsConstraint.tag = tag;
    }
    return {
      autobindOptions: void 0,
      operations: invalidation.operations,
      rootConstraints: planParamsConstraint,
      servicesBranch: []
    };
  }
  #getOrBuildMapValueFromMapMap(map, key) {
    let valueMap = map.get(key);
    if (valueMap === void 0) {
      valueMap = /* @__PURE__ */ new Map();
      map.set(key, valueMap);
    }
    return valueMap;
  }
  #getMapFromMapArray(mapArray, options) {
    return mapArray[this.#getMapArrayIndex(options)];
  }
  #getMaps() {
    return [
      this.#serviceIdToNonCachedServiceNodeMapMap,
      ...this.#serviceIdToValuePlanMap,
      ...this.#namedServiceIdToValuePlanMap,
      ...this.#namedTaggedServiceIdToValuePlanMap,
      ...this.#taggedServiceIdToValuePlanMap
    ];
  }
  #getMapArrayIndex(options) {
    if (options.isMultiple) {
      return (options.chained ? CHAINED_MASK : 0) | (options.optional ? OPTIONAL_MASK : 0) | IS_MULTIPLE_MASK;
    } else {
      return options.optional ? OPTIONAL_MASK : 0;
    }
  }
  #invalidateNamedServiceMap(invalidation) {
    for (const [index, map] of this.#namedServiceIdToValuePlanMap.entries()) {
      const servicePlans = map.get(invalidation.binding.serviceIdentifier);
      if (servicePlans !== void 0) {
        for (const [name, servicePlan] of servicePlans.entries()) {
          this.#updatePlan(invalidation, servicePlan, index, name, void 0);
        }
      }
    }
  }
  #invalidateNamedTaggedServiceMap(invalidation) {
    for (const [index, map] of this.#namedTaggedServiceIdToValuePlanMap.entries()) {
      const servicePlanMapMapMap = map.get(invalidation.binding.serviceIdentifier);
      if (servicePlanMapMapMap !== void 0) {
        for (const [name, servicePlanMapMap] of servicePlanMapMapMap.entries()) {
          for (const [tag, servicePlanMap] of servicePlanMapMap.entries()) {
            for (const [tagValue, servicePlan] of servicePlanMap.entries()) {
              this.#updatePlan(invalidation, servicePlan, index, name, {
                key: tag,
                value: tagValue
              });
            }
          }
        }
      }
    }
  }
  #invalidateNonCachePlanBindingNodeDescendents(planBindingNode) {
    switch (planBindingNode.binding.type) {
      case bindingTypeValues.ServiceRedirection:
        for (const redirection of planBindingNode.redirections) {
          this.#invalidateNonCachePlanBindingNodeDescendents(redirection);
        }
        break;
      case bindingTypeValues.Instance:
        for (const constructorParam of planBindingNode.constructorParams) {
          if (constructorParam !== void 0) {
            this.#invalidateNonCachePlanServiceNode(constructorParam);
          }
        }
        for (const propertyParam of planBindingNode.propertyParams.values()) {
          this.#invalidateNonCachePlanServiceNode(propertyParam);
        }
        break;
      case bindingTypeValues.ResolvedValue:
        for (const resolvedValue of planBindingNode.params) {
          this.#invalidateNonCachePlanServiceNode(resolvedValue);
        }
        break;
      default:
    }
  }
  #invalidateNonCachePlanServiceNode(planServiceNode) {
    const serviceNonCachedMap = this.#serviceIdToNonCachedServiceNodeMapMap.get(planServiceNode.serviceIdentifier);
    if (serviceNonCachedMap === void 0 || !serviceNonCachedMap.has(planServiceNode)) {
      return;
    }
    serviceNonCachedMap.delete(planServiceNode);
    this.#invalidateNonCachePlanServiceNodeDescendents(planServiceNode);
  }
  #invalidateNonCachePlanServiceNodeDescendents(planServiceNode) {
    if (LazyPlanServiceNode.is(planServiceNode) && !planServiceNode.isExpanded()) {
      return;
    }
    if (planServiceNode.bindings === void 0) {
      return;
    }
    if (Array.isArray(planServiceNode.bindings)) {
      for (const binding of planServiceNode.bindings) {
        this.#invalidateNonCachePlanBindingNodeDescendents(binding);
      }
    } else {
      this.#invalidateNonCachePlanBindingNodeDescendents(planServiceNode.bindings);
    }
  }
  #invalidateNonCachedServiceNodeSetMap(invalidation) {
    const serviceNonCachedServiceNodeMap = this.#serviceIdToNonCachedServiceNodeMapMap.get(invalidation.binding.serviceIdentifier);
    if (serviceNonCachedServiceNodeMap !== void 0) {
      switch (invalidation.kind) {
        case CacheBindingInvalidationKind.bindingAdded:
          for (const [serviceNode, context] of serviceNonCachedServiceNodeMap) {
            const result = addServiceNodeBindingIfContextFree({
              autobindOptions: void 0,
              operations: invalidation.operations,
              servicesBranch: []
            }, serviceNode, invalidation.binding, context.bindingConstraintsList, context.chainedBindings);
            if (result.isContextFreeBinding) {
              if (result.shouldInvalidateServiceNode && LazyPlanServiceNode.is(serviceNode)) {
                this.#invalidateNonCachePlanServiceNodeDescendents(serviceNode);
                serviceNode.invalidate();
              }
            } else {
              this.clearCache();
            }
          }
          break;
        case CacheBindingInvalidationKind.bindingRemoved:
          for (const [serviceNode, context] of serviceNonCachedServiceNodeMap) {
            const result = removeServiceNodeBindingIfContextFree(serviceNode, invalidation.binding, context.bindingConstraintsList, context.optionalBindings);
            if (result.isContextFreeBinding) {
              if (result.bindingNodeRemoved !== void 0) {
                this.#invalidateNonCachePlanBindingNodeDescendents(result.bindingNodeRemoved);
              }
            } else {
              this.clearCache();
            }
          }
          break;
      }
    }
  }
  #invalidateServiceMap(invalidation) {
    for (const [index, map] of this.#serviceIdToValuePlanMap.entries()) {
      const servicePlan = map.get(invalidation.binding.serviceIdentifier);
      this.#updatePlan(invalidation, servicePlan, index, void 0, void 0);
    }
  }
  #invalidateTaggedServiceMap(invalidation) {
    for (const [index, map] of this.#taggedServiceIdToValuePlanMap.entries()) {
      const servicePlanMapMap = map.get(invalidation.binding.serviceIdentifier);
      if (servicePlanMapMap !== void 0) {
        for (const [tag, servicePlanMap] of servicePlanMapMap.entries()) {
          for (const [tagValue, servicePlan] of servicePlanMap.entries()) {
            this.#updatePlan(invalidation, servicePlan, index, void 0, {
              key: tag,
              value: tagValue
            });
          }
        }
      }
    }
  }
  #updatePlan(invalidation, servicePlan, index, name, tag) {
    if (servicePlan !== void 0 && LazyPlanServiceNode.is(servicePlan.tree.root)) {
      const planParams = this.#buildUpdatePlanParams(invalidation, index, name, tag);
      switch (invalidation.kind) {
        case CacheBindingInvalidationKind.bindingAdded:
          {
            const result = addRootServiceNodeBindingIfContextFree(planParams, servicePlan.tree.root, invalidation.binding);
            if (result.isContextFreeBinding) {
              if (result.shouldInvalidateServiceNode) {
                this.#invalidateNonCachePlanServiceNodeDescendents(servicePlan.tree.root);
                servicePlan.tree.root.invalidate();
              }
            } else {
              this.clearCache();
            }
          }
          break;
        case CacheBindingInvalidationKind.bindingRemoved:
          {
            const result = removeRootServiceNodeBindingIfContextFree(planParams, servicePlan.tree.root, invalidation.binding);
            if (result.isContextFreeBinding) {
              if (result.bindingNodeRemoved !== void 0) {
                this.#invalidateNonCachePlanBindingNodeDescendents(result.bindingNodeRemoved);
              }
            } else {
              this.clearCache();
            }
          }
          break;
      }
    }
  }
};

// node_modules/@inversifyjs/core/lib/planning/calculations/handleResolveError.js
var INDEX_NOT_FOUND = -1;
function handleResolveError(params, error) {
  if (isStackOverflowError(error) || InversifyCoreError.isErrorOfKind(error, InversifyCoreErrorKind.planningMaxDepthExceeded)) {
    const stringifiedCircularDependencies = stringifyServiceIdentifierTrace2(extractLikelyCircularDependency2(params));
    throw new InversifyCoreError(InversifyCoreErrorKind.planning, `Circular dependency found: ${stringifiedCircularDependencies}`, { cause: error });
  }
  throw error;
}
function extractLikelyCircularDependency2(params) {
  const root = params.planResult.tree.root;
  const stack = [];
  function depthFirstSearch(node) {
    const existingIndex = stack.indexOf(node);
    if (existingIndex !== INDEX_NOT_FOUND) {
      const cycleNodes = [
        ...stack.slice(existingIndex),
        node
      ];
      return cycleNodes.map((n) => n.serviceIdentifier);
    }
    stack.push(node);
    try {
      for (const child of getChildServiceNodes(node)) {
        const result2 = depthFirstSearch(child);
        if (result2 !== void 0) {
          return result2;
        }
      }
    } finally {
      stack.pop();
    }
    return void 0;
  }
  const result = depthFirstSearch(root);
  return result ?? [];
}
function getChildServiceNodes(serviceNode) {
  const children = [];
  const bindings = serviceNode.bindings;
  if (bindings === void 0) {
    return children;
  }
  const processBindingNode = (bindingNode) => {
    if (isPlanServiceRedirectionBindingNode(bindingNode)) {
      for (const redirection of bindingNode.redirections) {
        processBindingNode(redirection);
      }
      return;
    }
    switch (bindingNode.binding.type) {
      case bindingTypeValues.Instance: {
        const instanceNode = bindingNode;
        for (const ctorParam of instanceNode.constructorParams) {
          if (ctorParam !== void 0) {
            children.push(ctorParam);
          }
        }
        for (const propParam of instanceNode.propertyParams.values()) {
          children.push(propParam);
        }
        break;
      }
      case bindingTypeValues.ResolvedValue: {
        const resolvedValueNode = bindingNode;
        for (const param of resolvedValueNode.params) {
          children.push(param);
        }
        break;
      }
      default:
        break;
    }
  };
  if (Array.isArray(bindings)) {
    for (const bindingNode of bindings) {
      processBindingNode(bindingNode);
    }
  } else {
    processBindingNode(bindings);
  }
  return children;
}
function stringifyServiceIdentifierTrace2(serviceIdentifiers) {
  const serviceIdentifiersArray = [...serviceIdentifiers];
  if (serviceIdentifiersArray.length === 0) {
    return "(No dependency trace)";
  }
  return serviceIdentifiersArray.map(stringifyServiceIdentifier).join(" -> ");
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolve.js
function resolve(params) {
  try {
    const serviceNode = params.planResult.tree.root;
    return resolveServiceNode(params, serviceNode);
  } catch (error) {
    handleResolveError(params, error);
  }
}

// node_modules/@inversifyjs/core/lib/binding/calculations/isScopedBinding.js
function isScopedBinding(binding) {
  return binding.scope !== void 0;
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveBindingPreDestroy.js
function resolveBindingPreDestroy(params, binding) {
  if (binding.type === bindingTypeValues.Instance) {
    const classMetadata = params.getClassMetadata(binding.implementationType);
    const instance = binding.cache.value;
    if (isPromise(instance)) {
      return instance.then((instance2) => resolveInstancePreDestroyMethods(classMetadata, instance2));
    } else {
      return resolveInstancePreDestroyMethods(classMetadata, instance);
    }
  }
}
function resolveInstancePreDestroyMethod(instance, methodName) {
  if (typeof instance[methodName] === "function") {
    const result = instance[methodName]();
    return result;
  }
}
function resolveInstancePreDestroyMethods(classMetadata, instance) {
  const preDestroyMethodNames = classMetadata.lifecycle.preDestroyMethodNames;
  if (preDestroyMethodNames.size === 0) {
    return;
  }
  let result = void 0;
  for (const methodName of preDestroyMethodNames) {
    if (result === void 0) {
      result = resolveInstancePreDestroyMethod(instance, methodName);
    } else {
      result = result.then(() => resolveInstancePreDestroyMethod(instance, methodName));
    }
  }
  return result;
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveBindingServiceDeactivations.js
function resolveBindingServiceDeactivations(params, serviceIdentifier, value) {
  const deactivations = params.getDeactivations(serviceIdentifier);
  if (deactivations === void 0) {
    return void 0;
  }
  if (isPromise(value)) {
    return resolveBindingDeactivationsFromIteratorAsync(value, deactivations[Symbol.iterator]());
  }
  return resolveBindingDeactivationsFromIterator(value, deactivations[Symbol.iterator]());
}
function resolveBindingDeactivationsFromIterator(value, deactivationsIterator) {
  let deactivationIteratorResult = deactivationsIterator.next();
  while (deactivationIteratorResult.done !== true) {
    const nextDeactivationValue = deactivationIteratorResult.value(value);
    if (isPromise(nextDeactivationValue)) {
      return resolveBindingDeactivationsFromIteratorAsync(value, deactivationsIterator);
    }
    deactivationIteratorResult = deactivationsIterator.next();
  }
}
async function resolveBindingDeactivationsFromIteratorAsync(value, deactivationsIterator) {
  const resolvedValue = await value;
  let deactivationIteratorResult = deactivationsIterator.next();
  while (deactivationIteratorResult.done !== true) {
    await deactivationIteratorResult.value(resolvedValue);
    deactivationIteratorResult = deactivationsIterator.next();
  }
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveBindingDeactivations.js
function resolveBindingDeactivations(params, binding) {
  const preDestroyResult = resolveBindingPreDestroy(params, binding);
  if (preDestroyResult === void 0) {
    return resolveBindingDeactivationsAfterPreDestroy(params, binding);
  }
  return preDestroyResult.then(() => resolveBindingDeactivationsAfterPreDestroy(params, binding));
}
function resolveBindingDeactivationsAfterPreDestroy(params, binding) {
  const bindingCache = binding.cache;
  if (isPromise(bindingCache.value)) {
    return bindingCache.value.then((resolvedValue) => resolveBindingDeactivationsAfterPreDestroyFromValue(params, binding, resolvedValue));
  }
  return resolveBindingDeactivationsAfterPreDestroyFromValue(params, binding, bindingCache.value);
}
function resolveBindingDeactivationsAfterPreDestroyFromValue(params, binding, resolvedValue) {
  let deactivationResult = void 0;
  if (binding.onDeactivation !== void 0) {
    const bindingDeactivation = binding.onDeactivation;
    deactivationResult = bindingDeactivation(resolvedValue);
  }
  if (deactivationResult === void 0) {
    return resolveBindingServiceDeactivations(params, binding.serviceIdentifier, resolvedValue);
  } else {
    return deactivationResult.then(() => resolveBindingServiceDeactivations(params, binding.serviceIdentifier, resolvedValue));
  }
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveBindingsDeactivations.js
function resolveBindingsDeactivations(params, bindings) {
  if (bindings === void 0) {
    return;
  }
  const singletonScopedBindings = filterCachedSinglentonScopedBindings(bindings);
  const deactivationPromiseResults = [];
  for (const binding of singletonScopedBindings) {
    const deactivationResult = resolveBindingDeactivations(params, binding);
    if (deactivationResult !== void 0) {
      deactivationPromiseResults.push(deactivationResult);
    }
  }
  if (deactivationPromiseResults.length > 0) {
    return Promise.all(deactivationPromiseResults).then(() => void 0);
  }
}
function filterCachedSinglentonScopedBindings(bindings) {
  const filteredBindings = [];
  for (const binding of bindings) {
    if (isScopedBinding(binding) && binding.scope === bindingScopeValues.Singleton && binding.cache.isRight) {
      filteredBindings.push(binding);
    }
  }
  return filteredBindings;
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveModuleDeactivations.js
function resolveModuleDeactivations(params, moduleId) {
  const bindings = params.getBindingsFromModule(moduleId);
  return resolveBindingsDeactivations(params, bindings);
}

// node_modules/@inversifyjs/core/lib/resolution/actions/resolveServiceDeactivations.js
function resolveServiceDeactivations(params, serviceIdentifier) {
  const bindings = params.getBindings(serviceIdentifier);
  return resolveBindingsDeactivations(params, bindings);
}

// node_modules/@inversifyjs/container/lib/binding/models/BindingIdentifier.js
var bindingIdentifierSymbol = /* @__PURE__ */ Symbol.for("@inversifyjs/container/bindingIdentifier");

// node_modules/@inversifyjs/container/lib/binding/calculations/isBindingIdentifier.js
function isBindingIdentifier(value) {
  return typeof value === "object" && value !== null && value[bindingIdentifierSymbol] === true;
}

// node_modules/@inversifyjs/container/lib/container/binding/utils/BindingConstraintUtils.js
var BindingConstraintUtils = class {
  static always = (_bindingConstraints) => {
    return true;
  };
};

// node_modules/@inversifyjs/container/lib/error/models/InversifyContainerError.js
var isAppErrorSymbol2 = /* @__PURE__ */ Symbol.for("@inversifyjs/container/InversifyContainerError");
var InversifyContainerError = class _InversifyContainerError extends Error {
  [isAppErrorSymbol2];
  kind;
  constructor(kind, message, options) {
    super(message, options);
    this[isAppErrorSymbol2] = true;
    this.kind = kind;
  }
  static is(value) {
    return typeof value === "object" && value !== null && value[isAppErrorSymbol2] === true;
  }
  static isErrorOfKind(value, kind) {
    return _InversifyContainerError.is(value) && value.kind === kind;
  }
};

// node_modules/@inversifyjs/container/lib/error/models/InversifyContainerErrorKind.js
var InversifyContainerErrorKind;
(function(InversifyContainerErrorKind2) {
  InversifyContainerErrorKind2[InversifyContainerErrorKind2["invalidOperation"] = 0] = "invalidOperation";
})(InversifyContainerErrorKind || (InversifyContainerErrorKind = {}));

// node_modules/@inversifyjs/container/lib/binding/calculations/buildBindingIdentifier.js
function buildBindingIdentifier(binding) {
  return {
    [bindingIdentifierSymbol]: true,
    id: binding.id
  };
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isAnyAncestorBindingConstraints.js
function isAnyAncestorBindingConstraints(condition) {
  return (constraints) => {
    for (let ancestorMetadata = constraints.getAncestor(); ancestorMetadata !== void 0; ancestorMetadata = ancestorMetadata.getAncestor()) {
      if (condition(ancestorMetadata)) {
        return true;
      }
    }
    return false;
  };
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isBindingConstraintsWithName.js
function isBindingConstraintsWithName(name) {
  return (constraints) => constraints.name === name;
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isAnyAncestorBindingConstraintsWithName.js
function isAnyAncestorBindingConstraintsWithName(name) {
  return isAnyAncestorBindingConstraints(isBindingConstraintsWithName(name));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isBindingConstraintsWithServiceId.js
function isBindingConstraintsWithServiceId(serviceId) {
  return (constraints) => constraints.serviceIdentifier === serviceId;
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isAnyAncestorBindingConstraintsWithServiceId.js
function isAnyAncestorBindingConstraintsWithServiceId(serviceId) {
  return isAnyAncestorBindingConstraints(isBindingConstraintsWithServiceId(serviceId));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isBindingConstraintsWithTag.js
function isBindingConstraintsWithTag(tag, value) {
  return (constraints) => constraints.tags.has(tag) && constraints.tags.get(tag) === value;
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isAnyAncestorBindingConstraintsWithTag.js
function isAnyAncestorBindingConstraintsWithTag(tag, value) {
  return isAnyAncestorBindingConstraints(isBindingConstraintsWithTag(tag, value));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isBindingConstraintsWithNoNameNorTags.js
function isBindingConstraintsWithNoNameNorTags(constraints) {
  return constraints.name === void 0 && constraints.tags.size === 0;
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isMultipleResolvedValueMetadataInjectOptions.js
function isMultipleResolvedValueMetadataInjectOptions(options) {
  return options.isMultiple === true;
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isNoAncestorBindingConstraints.js
function isNoAncestorBindingConstraints(condition) {
  const isAnyAncestorBindingConstraintsConstraint = isAnyAncestorBindingConstraints(condition);
  return (constraints) => {
    return !isAnyAncestorBindingConstraintsConstraint(constraints);
  };
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isNoAncestorBindingConstraintsWithName.js
function isNoAncestorBindingConstraintsWithName(name) {
  return isNoAncestorBindingConstraints(isBindingConstraintsWithName(name));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isNoAncestorBindingConstraintsWithServiceId.js
function isNoAncestorBindingConstraintsWithServiceId(serviceId) {
  return isNoAncestorBindingConstraints(isBindingConstraintsWithServiceId(serviceId));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isNoAncestorBindingConstraintsWithTag.js
function isNoAncestorBindingConstraintsWithTag(tag, value) {
  return isNoAncestorBindingConstraints(isBindingConstraintsWithTag(tag, value));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isNotParentBindingConstraints.js
function isNotParentBindingConstraints(condition) {
  return (constraints) => {
    const ancestorMetadata = constraints.getAncestor();
    return ancestorMetadata === void 0 || !condition(ancestorMetadata);
  };
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isNotParentBindingConstraintsWithName.js
function isNotParentBindingConstraintsWithName(name) {
  return isNotParentBindingConstraints(isBindingConstraintsWithName(name));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isNotParentBindingConstraintsWithServiceId.js
function isNotParentBindingConstraintsWithServiceId(serviceId) {
  return isNotParentBindingConstraints(isBindingConstraintsWithServiceId(serviceId));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isNotParentBindingConstraintsWithTag.js
function isNotParentBindingConstraintsWithTag(tag, value) {
  return isNotParentBindingConstraints(isBindingConstraintsWithTag(tag, value));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isParentBindingConstraints.js
function isParentBindingConstraints(condition) {
  return (constraints) => {
    const ancestorMetadata = constraints.getAncestor();
    return ancestorMetadata !== void 0 && condition(ancestorMetadata);
  };
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isParentBindingConstraintsWithName.js
function isParentBindingConstraintsWithName(name) {
  return isParentBindingConstraints(isBindingConstraintsWithName(name));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isParentBindingConstraintsWithServiceId.js
function isParentBindingConstraintsWithServiceId(serviceId) {
  return isParentBindingConstraints(isBindingConstraintsWithServiceId(serviceId));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isParentBindingConstraintsWithTag.js
function isParentBindingConstraintsWithTag(tag, value) {
  return isParentBindingConstraints(isBindingConstraintsWithTag(tag, value));
}

// node_modules/@inversifyjs/container/lib/binding/calculations/isResolvedValueMetadataInjectOptions.js
function isResolvedValueMetadataInjectOptions(options) {
  return typeof options === "object" && !LazyServiceIdentifier.is(options);
}

// node_modules/@inversifyjs/container/lib/binding/models/BindingFluentSyntaxImplementation.js
var BindInFluentSyntaxImplementation = class {
  #binding;
  constructor(binding) {
    this.#binding = binding;
  }
  getIdentifier() {
    return buildBindingIdentifier(this.#binding);
  }
  inRequestScope() {
    this.#binding.scope = bindingScopeValues.Request;
    return new BindWhenOnFluentSyntaxImplementation(this.#binding);
  }
  inSingletonScope() {
    this.#binding.scope = bindingScopeValues.Singleton;
    return new BindWhenOnFluentSyntaxImplementation(this.#binding);
  }
  inTransientScope() {
    this.#binding.scope = bindingScopeValues.Transient;
    return new BindWhenOnFluentSyntaxImplementation(this.#binding);
  }
};
var BindToFluentSyntaxImplementation = class {
  #callback;
  #containerModuleId;
  #defaultScope;
  #serviceIdentifier;
  constructor(callback, containerModuleId, defaultScope, serviceIdentifier) {
    this.#callback = callback;
    this.#containerModuleId = containerModuleId;
    this.#defaultScope = defaultScope;
    this.#serviceIdentifier = serviceIdentifier;
  }
  to(type) {
    const classMetadata = getClassMetadata(type);
    const binding = {
      cache: {
        isRight: false,
        value: void 0
      },
      id: getBindingId(),
      implementationType: type,
      isSatisfiedBy: BindingConstraintUtils.always,
      moduleId: this.#containerModuleId,
      onActivation: void 0,
      onDeactivation: void 0,
      scope: classMetadata.scope ?? this.#defaultScope,
      serviceIdentifier: this.#serviceIdentifier,
      type: bindingTypeValues.Instance
    };
    this.#callback(binding);
    return new BindInWhenOnFluentSyntaxImplementation(binding);
  }
  toSelf() {
    if (typeof this.#serviceIdentifier !== "function") {
      throw new Error('"toSelf" function can only be applied when a newable function is used as service identifier');
    }
    return this.to(this.#serviceIdentifier);
  }
  toConstantValue(value) {
    const binding = {
      cache: {
        isRight: false,
        value: void 0
      },
      id: getBindingId(),
      isSatisfiedBy: BindingConstraintUtils.always,
      moduleId: this.#containerModuleId,
      onActivation: void 0,
      onDeactivation: void 0,
      scope: bindingScopeValues.Singleton,
      serviceIdentifier: this.#serviceIdentifier,
      type: bindingTypeValues.ConstantValue,
      value
    };
    this.#callback(binding);
    return new BindWhenOnFluentSyntaxImplementation(binding);
  }
  toDynamicValue(builder) {
    const binding = {
      cache: {
        isRight: false,
        value: void 0
      },
      id: getBindingId(),
      isSatisfiedBy: BindingConstraintUtils.always,
      moduleId: this.#containerModuleId,
      onActivation: void 0,
      onDeactivation: void 0,
      scope: this.#defaultScope,
      serviceIdentifier: this.#serviceIdentifier,
      type: bindingTypeValues.DynamicValue,
      value: builder
    };
    this.#callback(binding);
    return new BindInWhenOnFluentSyntaxImplementation(binding);
  }
  toResolvedValue(factory, injectOptions) {
    const binding = {
      cache: {
        isRight: false,
        value: void 0
      },
      factory,
      id: getBindingId(),
      isSatisfiedBy: BindingConstraintUtils.always,
      metadata: this.#buildResolvedValueMetadata(injectOptions),
      moduleId: this.#containerModuleId,
      onActivation: void 0,
      onDeactivation: void 0,
      scope: this.#defaultScope,
      serviceIdentifier: this.#serviceIdentifier,
      type: bindingTypeValues.ResolvedValue
    };
    this.#callback(binding);
    return new BindInWhenOnFluentSyntaxImplementation(binding);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toFactory(builder) {
    const binding = {
      cache: {
        isRight: false,
        value: void 0
      },
      factory: builder,
      id: getBindingId(),
      isSatisfiedBy: BindingConstraintUtils.always,
      moduleId: this.#containerModuleId,
      onActivation: void 0,
      onDeactivation: void 0,
      scope: bindingScopeValues.Singleton,
      serviceIdentifier: this.#serviceIdentifier,
      type: bindingTypeValues.Factory
    };
    this.#callback(binding);
    return new BindWhenOnFluentSyntaxImplementation(binding);
  }
  toService(service) {
    const binding = {
      id: getBindingId(),
      isSatisfiedBy: BindingConstraintUtils.always,
      moduleId: this.#containerModuleId,
      serviceIdentifier: this.#serviceIdentifier,
      targetServiceIdentifier: service,
      type: bindingTypeValues.ServiceRedirection
    };
    this.#callback(binding);
  }
  #buildResolvedValueMetadata(options) {
    const resolvedValueMetadata = {
      arguments: (options ?? []).map((injectOption) => {
        if (isResolvedValueMetadataInjectOptions(injectOption)) {
          if (isMultipleResolvedValueMetadataInjectOptions(injectOption)) {
            return {
              chained: injectOption.chained ?? false,
              kind: ResolvedValueElementMetadataKind.multipleInjection,
              name: injectOption.name,
              optional: injectOption.optional ?? false,
              tags: new Map((injectOption.tags ?? []).map((tag) => [
                tag.key,
                tag.value
              ])),
              value: injectOption.serviceIdentifier
            };
          } else {
            return {
              kind: ResolvedValueElementMetadataKind.singleInjection,
              name: injectOption.name,
              optional: injectOption.optional ?? false,
              tags: new Map((injectOption.tags ?? []).map((tag) => [
                tag.key,
                tag.value
              ])),
              value: injectOption.serviceIdentifier
            };
          }
        } else {
          return {
            kind: ResolvedValueElementMetadataKind.singleInjection,
            name: void 0,
            optional: false,
            tags: /* @__PURE__ */ new Map(),
            value: injectOption
          };
        }
      })
    };
    return resolvedValueMetadata;
  }
};
var BindOnFluentSyntaxImplementation = class {
  #binding;
  constructor(binding) {
    this.#binding = binding;
  }
  getIdentifier() {
    return buildBindingIdentifier(this.#binding);
  }
  onActivation(activation) {
    this.#binding.onActivation = activation;
    return new BindWhenFluentSyntaxImplementation(this.#binding);
  }
  onDeactivation(deactivation) {
    this.#binding.onDeactivation = deactivation;
    if (this.#binding.scope !== bindingScopeValues.Singleton) {
      throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, `Binding for service "${stringifyServiceIdentifier(this.#binding.serviceIdentifier)}" has a deactivation function, but its scope is not singleton. Deactivation functions can only be used with singleton bindings.`);
    }
    return new BindWhenFluentSyntaxImplementation(this.#binding);
  }
};
var BindWhenFluentSyntaxImplementation = class {
  #binding;
  constructor(binding) {
    this.#binding = binding;
  }
  getIdentifier() {
    return buildBindingIdentifier(this.#binding);
  }
  when(constraint) {
    this.#binding.isSatisfiedBy = constraint;
    return new BindOnFluentSyntaxImplementation(this.#binding);
  }
  whenAnyAncestor(constraint) {
    return this.when(isAnyAncestorBindingConstraints(constraint));
  }
  whenAnyAncestorIs(serviceIdentifier) {
    return this.when(isAnyAncestorBindingConstraintsWithServiceId(serviceIdentifier));
  }
  whenAnyAncestorNamed(name) {
    return this.when(isAnyAncestorBindingConstraintsWithName(name));
  }
  whenAnyAncestorTagged(tag, tagValue) {
    return this.when(isAnyAncestorBindingConstraintsWithTag(tag, tagValue));
  }
  whenDefault() {
    return this.when(isBindingConstraintsWithNoNameNorTags);
  }
  whenNamed(name) {
    return this.when(isBindingConstraintsWithName(name));
  }
  whenNoParent(constraint) {
    return this.when(isNotParentBindingConstraints(constraint));
  }
  whenNoParentIs(serviceIdentifier) {
    return this.when(isNotParentBindingConstraintsWithServiceId(serviceIdentifier));
  }
  whenNoParentNamed(name) {
    return this.when(isNotParentBindingConstraintsWithName(name));
  }
  whenNoParentTagged(tag, tagValue) {
    return this.when(isNotParentBindingConstraintsWithTag(tag, tagValue));
  }
  whenParent(constraint) {
    return this.when(isParentBindingConstraints(constraint));
  }
  whenParentIs(serviceIdentifier) {
    return this.when(isParentBindingConstraintsWithServiceId(serviceIdentifier));
  }
  whenParentNamed(name) {
    return this.when(isParentBindingConstraintsWithName(name));
  }
  whenParentTagged(tag, tagValue) {
    return this.when(isParentBindingConstraintsWithTag(tag, tagValue));
  }
  whenTagged(tag, tagValue) {
    return this.when(isBindingConstraintsWithTag(tag, tagValue));
  }
  whenNoAncestor(constraint) {
    return this.when(isNoAncestorBindingConstraints(constraint));
  }
  whenNoAncestorIs(serviceIdentifier) {
    return this.when(isNoAncestorBindingConstraintsWithServiceId(serviceIdentifier));
  }
  whenNoAncestorNamed(name) {
    return this.when(isNoAncestorBindingConstraintsWithName(name));
  }
  whenNoAncestorTagged(tag, tagValue) {
    return this.when(isNoAncestorBindingConstraintsWithTag(tag, tagValue));
  }
};
var BindWhenOnFluentSyntaxImplementation = class extends BindWhenFluentSyntaxImplementation {
  #bindOnFluentSyntax;
  constructor(binding) {
    super(binding);
    this.#bindOnFluentSyntax = new BindOnFluentSyntaxImplementation(binding);
  }
  onActivation(activation) {
    return this.#bindOnFluentSyntax.onActivation(activation);
  }
  onDeactivation(deactivation) {
    return this.#bindOnFluentSyntax.onDeactivation(deactivation);
  }
};
var BindInWhenOnFluentSyntaxImplementation = class extends BindWhenOnFluentSyntaxImplementation {
  #bindInFluentSyntax;
  constructor(binding) {
    super(binding);
    this.#bindInFluentSyntax = new BindInFluentSyntaxImplementation(binding);
  }
  inRequestScope() {
    return this.#bindInFluentSyntax.inRequestScope();
  }
  inSingletonScope() {
    return this.#bindInFluentSyntax.inSingletonScope();
  }
  inTransientScope() {
    return this.#bindInFluentSyntax.inTransientScope();
  }
};

// node_modules/@inversifyjs/container/lib/common/actions/getFirstIteratorResult.js
function getFirstIteratorResult(iterator) {
  if (iterator === void 0) {
    return void 0;
  }
  const firstIteratorResult = iterator.next();
  if (firstIteratorResult.done === true) {
    return void 0;
  }
  return firstIteratorResult.value;
}

// node_modules/@inversifyjs/container/lib/common/calculations/getFirstIterableResult.js
function getFirstIterableResult(iterable) {
  return getFirstIteratorResult(iterable?.[Symbol.iterator]());
}

// node_modules/@inversifyjs/container/lib/container/services/BindingManager.js
var BindingManager = class {
  #deactivationParams;
  #defaultScope;
  #planResultCacheManager;
  #serviceReferenceManager;
  constructor(deactivationParams, defaultScope, planResultCacheManager, serviceReferenceManager) {
    this.#deactivationParams = deactivationParams;
    this.#defaultScope = defaultScope;
    this.#planResultCacheManager = planResultCacheManager;
    this.#serviceReferenceManager = serviceReferenceManager;
  }
  bind(serviceIdentifier) {
    return new BindToFluentSyntaxImplementation((binding) => {
      this.#setBinding(binding);
    }, void 0, this.#defaultScope, serviceIdentifier);
  }
  isBound(serviceIdentifier, options) {
    const bindings = this.#serviceReferenceManager.bindingService.get(serviceIdentifier);
    return this.#isAnyValidBinding(serviceIdentifier, bindings, options);
  }
  isCurrentBound(serviceIdentifier, options) {
    const bindings = this.#serviceReferenceManager.bindingService.getNonParentBindings(serviceIdentifier);
    return this.#isAnyValidBinding(serviceIdentifier, bindings, options);
  }
  async rebindAsync(serviceIdentifier) {
    await this.unbindAsync(serviceIdentifier);
    return this.bind(serviceIdentifier);
  }
  rebind(serviceIdentifier) {
    this.unbind(serviceIdentifier);
    return this.bind(serviceIdentifier);
  }
  async unbindAsync(identifier) {
    await this.#unbindAsync(identifier);
  }
  async unbindAllAsync() {
    await this.#unbindAll();
  }
  unbindAll() {
    const result = this.#unbindAll();
    if (result !== void 0) {
      throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, "Unexpected asynchronous deactivation when unbinding all services. Consider using Container.unbindAllAsync() instead.");
    }
  }
  unbind(identifier) {
    const result = this.#unbindAsync(identifier);
    if (result !== void 0) {
      this.#throwUnexpectedAsyncUnbindOperation(identifier);
    }
  }
  #setBinding(binding) {
    this.#serviceReferenceManager.bindingService.set(binding);
    this.#planResultCacheManager.invalidateService({
      binding,
      kind: CacheBindingInvalidationKind.bindingAdded
    });
  }
  #throwUnexpectedAsyncUnbindOperation(identifier) {
    let errorMessage;
    if (isBindingIdentifier(identifier)) {
      const bindingsById = this.#serviceReferenceManager.bindingService.getById(identifier.id);
      const bindingServiceIdentifier = getFirstIterableResult(bindingsById)?.serviceIdentifier;
      if (bindingServiceIdentifier === void 0) {
        errorMessage = "Unexpected asynchronous deactivation when unbinding binding identifier. Consider using Container.unbindAsync() instead.";
      } else {
        errorMessage = `Unexpected asynchronous deactivation when unbinding "${stringifyServiceIdentifier(bindingServiceIdentifier)}" binding. Consider using Container.unbindAsync() instead.`;
      }
    } else {
      errorMessage = `Unexpected asynchronous deactivation when unbinding "${stringifyServiceIdentifier(identifier)}" service. Consider using Container.unbindAsync() instead.`;
    }
    throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, errorMessage);
  }
  #unbindAsync(identifier) {
    if (isBindingIdentifier(identifier)) {
      return this.#unbindBindingIdentifier(identifier);
    }
    return this.#unbindServiceIdentifier(identifier);
  }
  #unbindBindingIdentifier(identifier) {
    const bindingsIterable = this.#serviceReferenceManager.bindingService.getById(identifier.id);
    const bindings = bindingsIterable === void 0 ? void 0 : [...bindingsIterable];
    const result = resolveBindingsDeactivations(this.#deactivationParams, bindingsIterable);
    if (result === void 0) {
      this.#clearAfterUnbindBindingIdentifier(bindings, identifier);
    } else {
      return result.then(() => {
        this.#clearAfterUnbindBindingIdentifier(bindings, identifier);
      });
    }
  }
  #clearAfterUnbindBindingIdentifier(bindings, identifier) {
    this.#serviceReferenceManager.bindingService.removeById(identifier.id);
    if (bindings !== void 0) {
      for (const binding of bindings) {
        this.#planResultCacheManager.invalidateService({
          binding,
          kind: CacheBindingInvalidationKind.bindingRemoved
        });
      }
    }
  }
  #unbindAll() {
    const nonParentBoundServiceIds = [
      ...this.#serviceReferenceManager.bindingService.getNonParentBoundServices()
    ];
    const deactivationResults = nonParentBoundServiceIds.map((serviceId) => resolveServiceDeactivations(this.#deactivationParams, serviceId));
    const hasAsyncDeactivations = deactivationResults.some((result) => isPromise(result));
    if (hasAsyncDeactivations) {
      return Promise.all(deactivationResults).then(() => {
        this.#clearAfterUnbindAll(nonParentBoundServiceIds);
      });
    }
    this.#clearAfterUnbindAll(nonParentBoundServiceIds);
  }
  #clearAfterUnbindAll(serviceIds) {
    for (const serviceId of serviceIds) {
      this.#serviceReferenceManager.activationService.removeAllByServiceId(serviceId);
      this.#serviceReferenceManager.bindingService.removeAllByServiceId(serviceId);
      this.#serviceReferenceManager.deactivationService.removeAllByServiceId(serviceId);
    }
    this.#serviceReferenceManager.planResultCacheService.clearCache();
  }
  #unbindServiceIdentifier(identifier) {
    const bindingsIterable = this.#serviceReferenceManager.bindingService.get(identifier);
    const bindings = bindingsIterable === void 0 ? void 0 : [...bindingsIterable];
    const result = resolveBindingsDeactivations(this.#deactivationParams, bindingsIterable);
    if (result === void 0) {
      this.#clearAfterUnbindServiceIdentifier(identifier, bindings);
    } else {
      return result.then(() => {
        this.#clearAfterUnbindServiceIdentifier(identifier, bindings);
      });
    }
  }
  #clearAfterUnbindServiceIdentifier(identifier, bindings) {
    this.#serviceReferenceManager.activationService.removeAllByServiceId(identifier);
    this.#serviceReferenceManager.bindingService.removeAllByServiceId(identifier);
    this.#serviceReferenceManager.deactivationService.removeAllByServiceId(identifier);
    if (bindings !== void 0) {
      for (const binding of bindings) {
        this.#planResultCacheManager.invalidateService({
          binding,
          kind: CacheBindingInvalidationKind.bindingRemoved
        });
      }
    }
  }
  #isAnyValidBinding(serviceIdentifier, bindings, options) {
    if (bindings === void 0) {
      return false;
    }
    const bindingConstraints = {
      getAncestor: () => void 0,
      name: options?.name,
      serviceIdentifier,
      tags: /* @__PURE__ */ new Map()
    };
    if (options?.tag !== void 0) {
      bindingConstraints.tags.set(options.tag.key, options.tag.value);
    }
    for (const binding of bindings) {
      if (binding.isSatisfiedBy(bindingConstraints)) {
        return true;
      }
    }
    return false;
  }
};

// node_modules/@inversifyjs/container/lib/container/services/ContainerModuleManager.js
var ContainerModuleManager = class {
  #bindingManager;
  #deactivationParams;
  #defaultScope;
  #planResultCacheManager;
  #serviceReferenceManager;
  constructor(bindingManager, deactivationParams, defaultScope, planResultCacheManager, serviceReferenceManager) {
    this.#bindingManager = bindingManager;
    this.#deactivationParams = deactivationParams;
    this.#defaultScope = defaultScope;
    this.#planResultCacheManager = planResultCacheManager;
    this.#serviceReferenceManager = serviceReferenceManager;
  }
  async loadAsync(...modules) {
    await Promise.all(this.#load(...modules));
  }
  load(...modules) {
    const results = this.#load(...modules);
    for (const result of results) {
      if (result !== void 0) {
        throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, "Unexpected asynchronous module load. Consider using container.loadAsync() instead.");
      }
    }
  }
  async unloadAsync(...modules) {
    await Promise.all(this.#unload(...modules));
    this.#clearAfterUnloadModules(modules);
  }
  unload(...modules) {
    const results = this.#unload(...modules);
    for (const result of results) {
      if (result !== void 0) {
        throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, "Unexpected asynchronous module unload. Consider using container.unloadAsync() instead.");
      }
    }
    this.#clearAfterUnloadModules(modules);
  }
  #buildContainerModuleLoadOptions(moduleId) {
    return {
      bind: (serviceIdentifier) => {
        return new BindToFluentSyntaxImplementation((binding) => {
          this.#setBinding(binding);
        }, moduleId, this.#defaultScope, serviceIdentifier);
      },
      isBound: this.#bindingManager.isBound.bind(this.#bindingManager),
      onActivation: (serviceIdentifier, activation) => {
        this.#serviceReferenceManager.activationService.add(activation, {
          moduleId,
          serviceId: serviceIdentifier
        });
      },
      onDeactivation: (serviceIdentifier, deactivation) => {
        this.#serviceReferenceManager.deactivationService.add(deactivation, {
          moduleId,
          serviceId: serviceIdentifier
        });
      },
      rebind: this.#bindingManager.rebind.bind(this.#bindingManager),
      rebindAsync: this.#bindingManager.rebindAsync.bind(this.#bindingManager),
      unbind: this.#bindingManager.unbind.bind(this.#bindingManager),
      unbindAsync: this.#bindingManager.unbindAsync.bind(this.#bindingManager)
    };
  }
  #clearAfterUnloadModules(modules) {
    for (const module of modules) {
      this.#serviceReferenceManager.activationService.removeAllByModuleId(module.id);
      this.#serviceReferenceManager.bindingService.removeAllByModuleId(module.id);
      this.#serviceReferenceManager.deactivationService.removeAllByModuleId(module.id);
    }
    this.#serviceReferenceManager.planResultCacheService.clearCache();
  }
  #load(...modules) {
    return modules.map((module) => module.load(this.#buildContainerModuleLoadOptions(module.id)));
  }
  #setBinding(binding) {
    this.#serviceReferenceManager.bindingService.set(binding);
    this.#planResultCacheManager.invalidateService({
      binding,
      kind: CacheBindingInvalidationKind.bindingAdded
    });
  }
  #unload(...modules) {
    return modules.map((module) => resolveModuleDeactivations(this.#deactivationParams, module.id));
  }
};

// node_modules/@inversifyjs/container/lib/container/actions/resetDeactivationParams.js
function resetDeactivationParams(serviceReferenceManager, deactivationParams) {
  deactivationParams.getBindings = serviceReferenceManager.bindingService.get.bind(serviceReferenceManager.bindingService);
  deactivationParams.getBindingsFromModule = serviceReferenceManager.bindingService.getByModuleId.bind(serviceReferenceManager.bindingService);
  deactivationParams.getDeactivations = serviceReferenceManager.deactivationService.get.bind(serviceReferenceManager.deactivationService);
}

// node_modules/@inversifyjs/container/lib/container/calculations/buildDeactivationParams.js
function buildDeactivationParams(serviceReferenceManager) {
  return {
    getBindings: serviceReferenceManager.bindingService.get.bind(serviceReferenceManager.bindingService),
    getBindingsFromModule: serviceReferenceManager.bindingService.getByModuleId.bind(serviceReferenceManager.bindingService),
    getClassMetadata,
    getDeactivations: serviceReferenceManager.deactivationService.get.bind(serviceReferenceManager.deactivationService)
  };
}

// node_modules/@inversifyjs/container/lib/container/services/DeactivationParamsManager.js
var DeactivationParamsManager = class {
  deactivationParams;
  constructor(serviceReferenceManager) {
    this.deactivationParams = buildDeactivationParams(serviceReferenceManager);
    serviceReferenceManager.onReset(() => {
      resetDeactivationParams(serviceReferenceManager, this.deactivationParams);
    });
  }
};

// node_modules/@inversifyjs/container/lib/container/services/PlanParamsOperationsManager.js
var PlanParamsOperationsManager = class {
  planParamsOperations;
  #serviceReferenceManager;
  constructor(serviceReferenceManager) {
    this.#serviceReferenceManager = serviceReferenceManager;
    this.planParamsOperations = {
      getBindings: this.#serviceReferenceManager.bindingService.get.bind(this.#serviceReferenceManager.bindingService),
      getBindingsChained: this.#serviceReferenceManager.bindingService.getChained.bind(this.#serviceReferenceManager.bindingService),
      getClassMetadata,
      getPlan: this.#serviceReferenceManager.planResultCacheService.get.bind(this.#serviceReferenceManager.planResultCacheService),
      setBinding: this.#setBinding.bind(this),
      setNonCachedServiceNode: this.#serviceReferenceManager.planResultCacheService.setNonCachedServiceNode.bind(this.#serviceReferenceManager.planResultCacheService),
      setPlan: this.#serviceReferenceManager.planResultCacheService.set.bind(this.#serviceReferenceManager.planResultCacheService)
    };
    this.#serviceReferenceManager.onReset(() => {
      this.#resetComputedProperties();
    });
  }
  #resetComputedProperties() {
    this.planParamsOperations.getBindings = this.#serviceReferenceManager.bindingService.get.bind(this.#serviceReferenceManager.bindingService);
    this.planParamsOperations.getBindingsChained = this.#serviceReferenceManager.bindingService.getChained.bind(this.#serviceReferenceManager.bindingService);
    this.planParamsOperations.setBinding = this.#setBinding.bind(this);
  }
  #setBinding(binding) {
    this.#serviceReferenceManager.bindingService.set(binding);
    this.#serviceReferenceManager.planResultCacheService.invalidateServiceBinding({
      binding,
      kind: CacheBindingInvalidationKind.bindingAdded,
      operations: this.planParamsOperations
    });
  }
};

// node_modules/@inversifyjs/container/lib/container/services/PlanResultCacheManager.js
var PlanResultCacheManager = class {
  #planParamsOperationsManager;
  #serviceReferenceManager;
  constructor(planParamsOperationsManager, serviceReferenceManager) {
    this.#planParamsOperationsManager = planParamsOperationsManager;
    this.#serviceReferenceManager = serviceReferenceManager;
  }
  invalidateService(invalidation) {
    this.#serviceReferenceManager.planResultCacheService.invalidateServiceBinding({
      ...invalidation,
      operations: this.#planParamsOperationsManager.planParamsOperations
    });
  }
};

// node_modules/@inversifyjs/plugin/lib/plugin/models/Plugin.js
var isPlugin = /* @__PURE__ */ Symbol.for("@inversifyjs/plugin/isPlugin");
var Plugin = class {
  [isPlugin] = true;
  _container;
  _context;
  constructor(container, context) {
    this._container = container;
    this._context = context;
  }
};

// node_modules/@inversifyjs/container/lib/container/services/PluginManager.js
var PluginManager = class {
  #pluginApi;
  #pluginContext;
  #serviceResolutionManager;
  #serviceReferenceManager;
  constructor(container, serviceReferenceManager, serviceResolutionManager) {
    this.#serviceReferenceManager = serviceReferenceManager;
    this.#serviceResolutionManager = serviceResolutionManager;
    this.#pluginApi = this.#buildPluginApi(container);
    this.#pluginContext = this.#buildPluginContext();
  }
  register(container, pluginConstructor) {
    const pluginInstance = new pluginConstructor(container, this.#pluginContext);
    this.#assertIsPlugin(pluginInstance);
    pluginInstance.load(this.#pluginApi);
  }
  #assertIsPlugin(value) {
    if (value[isPlugin] !== true) {
      throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, "Invalid plugin. The plugin must extend the Plugin class");
    }
  }
  #buildPluginApi(container) {
    return {
      define: (name, method) => {
        if (Object.prototype.hasOwnProperty.call(container, name)) {
          throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, `Container already has a method named "${String(name)}"`);
        }
        container[name] = method;
      },
      onPlan: this.#serviceResolutionManager.onPlan.bind(this.#serviceResolutionManager)
    };
  }
  #buildPluginContext() {
    const serviceReferenceManager = this.#serviceReferenceManager;
    return {
      get activationService() {
        return serviceReferenceManager.activationService;
      },
      get bindingService() {
        return serviceReferenceManager.bindingService;
      },
      get deactivationService() {
        return serviceReferenceManager.deactivationService;
      },
      get planResultCacheService() {
        return serviceReferenceManager.planResultCacheService;
      }
    };
  }
};

// node_modules/@inversifyjs/container/lib/container/services/ServiceReferenceManager.js
var ServiceReferenceManager = class {
  activationService;
  bindingService;
  deactivationService;
  planResultCacheService;
  #onResetComputedPropertiesListeners;
  constructor(activationService, bindingService, deactivationService, planResultCacheService) {
    this.activationService = activationService;
    this.bindingService = bindingService;
    this.deactivationService = deactivationService;
    this.planResultCacheService = planResultCacheService;
    this.#onResetComputedPropertiesListeners = [];
  }
  reset(activationService, bindingService, deactivationService) {
    this.activationService = activationService;
    this.bindingService = bindingService;
    this.deactivationService = deactivationService;
    this.planResultCacheService.clearCache();
    for (const listener of this.#onResetComputedPropertiesListeners) {
      listener();
    }
  }
  onReset(listener) {
    this.#onResetComputedPropertiesListeners.push(listener);
  }
};

// node_modules/@inversifyjs/container/lib/container/services/ServiceResolutionManager.js
var ServiceResolutionManager = class {
  #autobind;
  #defaultScope;
  #getActivationsResolutionParam;
  #resolutionContext;
  #onPlanHandlers;
  #planParamsOperationsManager;
  #serviceReferenceManager;
  constructor(planParamsOperationsManager, serviceReferenceManager, autobind, defaultScope) {
    this.#planParamsOperationsManager = planParamsOperationsManager;
    this.#serviceReferenceManager = serviceReferenceManager;
    this.#resolutionContext = this.#buildResolutionContext();
    this.#autobind = autobind;
    this.#defaultScope = defaultScope;
    this.#getActivationsResolutionParam = (serviceIdentifier) => this.#serviceReferenceManager.activationService.get(serviceIdentifier);
    this.#onPlanHandlers = [];
    this.#serviceReferenceManager.onReset(() => {
      this.#resetComputedProperties();
    });
  }
  get(serviceIdentifier, options) {
    const planResult = this.#buildPlanResult(false, serviceIdentifier, options);
    const resolvedValue = this.#getFromPlanResult(planResult);
    if (isPromise(resolvedValue)) {
      throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, `Unexpected asynchronous service when resolving service "${stringifyServiceIdentifier(serviceIdentifier)}"`);
    }
    return resolvedValue;
  }
  getAll(serviceIdentifier, options) {
    const planResult = this.#buildPlanResult(true, serviceIdentifier, options);
    const resolvedValue = this.#getFromPlanResult(planResult);
    if (isPromise(resolvedValue)) {
      throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, `Unexpected asynchronous service when resolving service "${stringifyServiceIdentifier(serviceIdentifier)}"`);
    }
    return resolvedValue;
  }
  async getAllAsync(serviceIdentifier, options) {
    const planResult = this.#buildPlanResult(true, serviceIdentifier, options);
    return this.#getFromPlanResult(planResult);
  }
  async getAsync(serviceIdentifier, options) {
    const planResult = this.#buildPlanResult(false, serviceIdentifier, options);
    return this.#getFromPlanResult(planResult);
  }
  onPlan(handler) {
    this.#onPlanHandlers.push(handler);
  }
  #resetComputedProperties() {
    this.#resolutionContext = this.#buildResolutionContext();
  }
  #buildGetPlanOptions(isMultiple, serviceIdentifier, options) {
    const name = options?.name;
    const optional2 = options?.optional ?? false;
    const tag = options?.tag;
    if (isMultiple) {
      return {
        chained: options?.chained ?? false,
        isMultiple,
        name,
        optional: optional2,
        serviceIdentifier,
        tag
      };
    } else {
      return {
        isMultiple,
        name,
        optional: optional2,
        serviceIdentifier,
        tag
      };
    }
  }
  #buildPlanParams(serviceIdentifier, isMultiple, options) {
    const planParams = {
      autobindOptions: options?.autobind ?? this.#autobind ? {
        scope: this.#defaultScope
      } : void 0,
      operations: this.#planParamsOperationsManager.planParamsOperations,
      rootConstraints: this.#buildPlanParamsConstraints(serviceIdentifier, isMultiple, options),
      servicesBranch: []
    };
    this.#handlePlanParamsRootConstraints(planParams, options);
    return planParams;
  }
  #buildPlanParamsConstraints(serviceIdentifier, isMultiple, options) {
    if (isMultiple) {
      return {
        chained: options?.chained ?? false,
        isMultiple,
        serviceIdentifier
      };
    } else {
      return {
        isMultiple,
        serviceIdentifier
      };
    }
  }
  #buildPlanResult(isMultiple, serviceIdentifier, options) {
    const getPlanOptions = this.#buildGetPlanOptions(isMultiple, serviceIdentifier, options);
    const planResultFromCache = this.#serviceReferenceManager.planResultCacheService.get(getPlanOptions);
    if (planResultFromCache !== void 0) {
      return planResultFromCache;
    }
    const planResult = plan(this.#buildPlanParams(serviceIdentifier, isMultiple, options));
    for (const handler of this.#onPlanHandlers) {
      handler(getPlanOptions, planResult);
    }
    return planResult;
  }
  #buildResolutionContext() {
    return {
      get: this.get.bind(this),
      getAll: this.getAll.bind(this),
      getAllAsync: this.getAllAsync.bind(this),
      getAsync: this.getAsync.bind(this)
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  #getFromPlanResult(planResult) {
    return resolve({
      context: this.#resolutionContext,
      getActivations: this.#getActivationsResolutionParam,
      planResult,
      requestScopeCache: /* @__PURE__ */ new Map()
    });
  }
  #handlePlanParamsRootConstraints(planParams, options) {
    if (options === void 0) {
      return;
    }
    if (options.name !== void 0) {
      planParams.rootConstraints.name = options.name;
    }
    if (options.optional === true) {
      planParams.rootConstraints.isOptional = true;
    }
    if (options.tag !== void 0) {
      planParams.rootConstraints.tag = {
        key: options.tag.key,
        value: options.tag.value
      };
    }
    if (planParams.rootConstraints.isMultiple) {
      planParams.rootConstraints.chained = options?.chained ?? false;
    }
  }
};

// node_modules/@inversifyjs/container/lib/container/services/SnapshotManager.js
var SnapshotManager = class {
  #serviceReferenceManager;
  #snapshots;
  constructor(serviceReferenceManager) {
    this.#serviceReferenceManager = serviceReferenceManager;
    this.#snapshots = [];
  }
  restore() {
    const snapshot = this.#snapshots.pop();
    if (snapshot === void 0) {
      throw new InversifyContainerError(InversifyContainerErrorKind.invalidOperation, "No snapshot available to restore");
    }
    this.#serviceReferenceManager.reset(snapshot.activationService, snapshot.bindingService, snapshot.deactivationService);
  }
  snapshot() {
    this.#snapshots.push({
      activationService: this.#serviceReferenceManager.activationService.clone(),
      bindingService: this.#serviceReferenceManager.bindingService.clone(),
      deactivationService: this.#serviceReferenceManager.deactivationService.clone()
    });
  }
};

// node_modules/@inversifyjs/container/lib/container/services/Container.js
var DEFAULT_DEFAULT_SCOPE = bindingScopeValues.Transient;
var Container = class {
  #bindingManager;
  #containerModuleManager;
  #pluginManager;
  #serviceReferenceManager;
  #serviceResolutionManager;
  #snapshotManager;
  constructor(options) {
    const autobind = options?.autobind ?? false;
    const defaultScope = options?.defaultScope ?? DEFAULT_DEFAULT_SCOPE;
    this.#serviceReferenceManager = this.#buildServiceReferenceManager(options, autobind, defaultScope);
    const planParamsOperationsManager = new PlanParamsOperationsManager(this.#serviceReferenceManager);
    const planResultCacheManager = new PlanResultCacheManager(planParamsOperationsManager, this.#serviceReferenceManager);
    const deactivationParamsManager = new DeactivationParamsManager(this.#serviceReferenceManager);
    this.#bindingManager = new BindingManager(deactivationParamsManager.deactivationParams, defaultScope, planResultCacheManager, this.#serviceReferenceManager);
    this.#containerModuleManager = new ContainerModuleManager(this.#bindingManager, deactivationParamsManager.deactivationParams, defaultScope, planResultCacheManager, this.#serviceReferenceManager);
    this.#serviceResolutionManager = new ServiceResolutionManager(planParamsOperationsManager, this.#serviceReferenceManager, autobind, defaultScope);
    this.#pluginManager = new PluginManager(this, this.#serviceReferenceManager, this.#serviceResolutionManager);
    this.#snapshotManager = new SnapshotManager(this.#serviceReferenceManager);
  }
  bind(serviceIdentifier) {
    return this.#bindingManager.bind(serviceIdentifier);
  }
  get(serviceIdentifier, options) {
    return this.#serviceResolutionManager.get(serviceIdentifier, options);
  }
  getAll(serviceIdentifier, options) {
    return this.#serviceResolutionManager.getAll(serviceIdentifier, options);
  }
  async getAllAsync(serviceIdentifier, options) {
    return this.#serviceResolutionManager.getAllAsync(serviceIdentifier, options);
  }
  async getAsync(serviceIdentifier, options) {
    return this.#serviceResolutionManager.getAsync(serviceIdentifier, options);
  }
  isBound(serviceIdentifier, options) {
    return this.#bindingManager.isBound(serviceIdentifier, options);
  }
  isCurrentBound(serviceIdentifier, options) {
    return this.#bindingManager.isCurrentBound(serviceIdentifier, options);
  }
  async loadAsync(...modules) {
    return this.#containerModuleManager.loadAsync(...modules);
  }
  load(...modules) {
    this.#containerModuleManager.load(...modules);
  }
  onActivation(serviceIdentifier, activation) {
    this.#serviceReferenceManager.activationService.add(activation, {
      serviceId: serviceIdentifier
    });
  }
  onDeactivation(serviceIdentifier, deactivation) {
    this.#serviceReferenceManager.deactivationService.add(deactivation, {
      serviceId: serviceIdentifier
    });
  }
  register(pluginConstructor) {
    this.#pluginManager.register(this, pluginConstructor);
  }
  restore() {
    this.#snapshotManager.restore();
  }
  async rebindAsync(serviceIdentifier) {
    return this.#bindingManager.rebindAsync(serviceIdentifier);
  }
  rebind(serviceIdentifier) {
    return this.#bindingManager.rebind(serviceIdentifier);
  }
  snapshot() {
    this.#snapshotManager.snapshot();
  }
  async unbindAsync(identifier) {
    await this.#bindingManager.unbindAsync(identifier);
  }
  async unbindAllAsync() {
    await this.#bindingManager.unbindAllAsync();
  }
  unbindAll() {
    this.#bindingManager.unbindAll();
  }
  unbind(identifier) {
    this.#bindingManager.unbind(identifier);
  }
  async unloadAsync(...modules) {
    return this.#containerModuleManager.unloadAsync(...modules);
  }
  unload(...modules) {
    this.#containerModuleManager.unload(...modules);
  }
  #buildAutobindOptions(autobind, defaultScope) {
    if (autobind) {
      return { scope: defaultScope };
    }
    return void 0;
  }
  #buildServiceReferenceManager(options, autobind, defaultScope) {
    const autobindOptions = this.#buildAutobindOptions(autobind, defaultScope);
    if (options?.parent === void 0) {
      return new ServiceReferenceManager(ActivationsService.build(() => void 0), BindingService.build(() => void 0, autobindOptions), DeactivationsService.build(() => void 0), new PlanResultCacheService());
    }
    const planResultCacheService = new PlanResultCacheService();
    const parent = options.parent;
    parent.#serviceReferenceManager.planResultCacheService.subscribe(planResultCacheService);
    return new ServiceReferenceManager(ActivationsService.build(() => parent.#serviceReferenceManager.activationService), BindingService.build(() => parent.#serviceReferenceManager.bindingService, autobindOptions), DeactivationsService.build(() => parent.#serviceReferenceManager.deactivationService), planResultCacheService);
  }
};

// node_modules/@inversifyjs/container/lib/index.js
var import_lite = __toESM(require_ReflectLite(), 1);

// dist/core/tokens.js
var TYPES = {
  AppShell: /* @__PURE__ */ Symbol.for("AppShell"),
  CommandRegistry: /* @__PURE__ */ Symbol.for("CommandRegistry"),
  Container: /* @__PURE__ */ Symbol.for("Container"),
  Document: /* @__PURE__ */ Symbol.for("Document"),
  EventBus: /* @__PURE__ */ Symbol.for("EventBus"),
  Logger: /* @__PURE__ */ Symbol.for("Logger"),
  PluginManager: /* @__PURE__ */ Symbol.for("PluginManager"),
  RootElement: /* @__PURE__ */ Symbol.for("RootElement"),
  SharedState: /* @__PURE__ */ Symbol.for("SharedState")
};

export {
  ContainerModule,
  inject,
  injectable,
  Container,
  TYPES
};
/*! Bundled license information:

reflect-metadata/ReflectLite.js:
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
