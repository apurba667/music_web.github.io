'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "25a5e5416bc28ff2928b3549c20394a9",
"assets/AssetManifest.json": "030a87f9f3b4484c4046bf818acf61cb",
"assets/assets/icons/activity.svg": "ae2564aed50413f62b5716b350fdc5b9",
"assets/assets/icons/activity_selected.svg": "f9930049c30d117cb15dcdab7704701d",
"assets/assets/icons/back_arrow.svg": "f3a4dc0988a1801442d8b0575389efb7",
"assets/assets/icons/chat.svg": "b1cd718d906340d8edb76a713a1433a6",
"assets/assets/icons/chat_selected.svg": "cc414bc7b2427b6395191aea9dacbb7a",
"assets/assets/icons/comment.svg": "bd61516d8d2eb26bbedd230ed1dea9b9",
"assets/assets/icons/comment_fill.svg": "b28728741c61823875bfb5b422a8c88f",
"assets/assets/icons/Delete.svg": "2efd603196c0eb390b4bd6fc009cae67",
"assets/assets/icons/Edit.svg": "10e45cb45eaf38522a2a5d7c5a6f42ed",
"assets/assets/icons/events.svg": "e546cc4bef4ac5e2792f9e2529ae8013",
"assets/assets/icons/events_selected.svg": "02730cd545e68c461475c103de8fe95d",
"assets/assets/icons/logo.svg": "dd047213ae81e8de3916da9e849d2b73",
"assets/assets/icons/love.svg": "722d9eebe3212adcf213760d24585b5c",
"assets/assets/icons/love_selected.svg": "9dc7646671f0076121856719d3363f4e",
"assets/assets/icons/meets.svg": "b7a9991bb34dcbd5183cc93908a60026",
"assets/assets/icons/meets_selected.svg": "bd09b0edd39dd0d97badab49173f16dc",
"assets/assets/icons/profile.svg": "0612d5e85cb4fa2fc251a07c6e9f9e09",
"assets/assets/icons/profile_selected.svg": "b4dabe7ba258537129bd6e1f0602f5c4",
"assets/assets/icons/search.svg": "3fb096dd707b413343eab8e7c398a421",
"assets/assets/icons/Setting.svg": "ba62e9a779ac34ee9c68ee43942f56f2",
"assets/assets/icons/share.svg": "2e36f84c6c8333dfe86167b91910b1c7",
"assets/assets/icons/transaction_error.svg": "f2e09c79017aaf031d413deb996c74c3",
"assets/assets/icons/transaction_pending.svg": "aa8316858444b80078cbee4d81ed889f",
"assets/assets/icons/transaction_success.svg": "f4f83593658a03e516e9860a7edcf743",
"assets/assets/images/app_icon.jpg": "845981b82cfe9008648ee08f5f38d95d",
"assets/assets/images/background.png": "33bb76744a1a689df5a73c7d787b59db",
"assets/assets/images/background_vector.png": "15e9b5e0526c938388590d29c4b6152c",
"assets/assets/images/event_image.png": "ea23397b5a3d86bbb9c0f0f817de6f7e",
"assets/assets/images/image1.png": "f1551343242d7d8a2e3ae90142e8b222",
"assets/assets/images/image2.png": "4e4adb800ad348bf001ceb2930edec86",
"assets/assets/images/image3.png": "83791267e8703fe9e23d35a8a810dc82",
"assets/assets/images/image4.png": "bad03e7b63c7c0449be97cf74da8d05f",
"assets/assets/images/image5.png": "3bf7bb62d939dcf3347b3bf4e630fd43",
"assets/assets/images/logo.png": "c3b89cd4d8d01c21f6a8e032747c8a3e",
"assets/assets/images/profile.png": "2d49ec214aded13731af0ac5d23a9ae8",
"assets/assets/images/qrcode.png": "b96869e9cd1a41a5e3d220f35046ee57",
"assets/assets/images/splash.jpg": "61b06ee20764f16e59d9ff51da066bca",
"assets/assets/images/visa_logo.png": "1774dac0981743d4a0b96cec3bfe15e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6eb12bc5adbb2194ef13724bd42a9d7c",
"assets/NOTICES": "dfff8c572f227b9979f4fc9b1fc1c191",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e5673c928fa38fd6902c4474817d1ec5",
"/": "e5673c928fa38fd6902c4474817d1ec5",
"main.dart.js": "04db234464303f6cc6eef55a6b079850",
"manifest.json": "7cb0ef5b9df8ad3381ead30f2c4aaed5",
"version.json": "b00f4eca814849ea5b4aa4411d2d4e69"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
