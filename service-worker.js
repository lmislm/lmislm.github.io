/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","8c763b0f9c7b32c2c2107e89f364d8fb"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","2a24a7036742291ccbf1a6e6f68cffdc"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","162b67e440565899ef8b3d08f47e16c8"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3c61070c7d95f15a5312aeaca923edde"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","1ae0360171daa9282f2c77442140eef9"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","8ba373fd22317ab5504bd8b7ae888b42"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e716609e2b7944885deac9f809b78031"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","6bcd0be0f32997dc8d74c16fd3293e69"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","b075818ba524336c6b20c1fef873afc2"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","41211b54b67a804aa026b8a2c3636bce"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","a91dbbde008179f1a83ba9cbb3d2d2dc"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","c7341bfd520ff314e7ff718c003e46da"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","40fb63343f761691477dd60453541568"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","098acd4f1409f93d1da257b4b06bba07"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","145773bb820efad83e785f25c1bf482e"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","072d647679df3204d510e07c5f39d92c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","fecb65b1c53bebe28afa4cf9ebaf2f8f"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","98f13d0ff9eccf9304a1745598a04e62"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","34e69c4f801040b17c44c88daa33b6f2"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","7573d2dc3828f152907818fdc1e352ce"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","53642d38e3f1cc0d89424ee1491881bd"],["C:/lmislm.github.io/public/2018/07/22/fib/index.html","36107c899eab9f5bbdfb77ebf40f64c0"],["C:/lmislm.github.io/public/2018/07/22/markdown-trick/index.html","926db4a6d136ab5d957f1f1df0f43bc7"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","b0a85a241390c5babf159c69bf4759d4"],["C:/lmislm.github.io/public/about/index.html","c53c5d6edd4036e58eb34a6746dcd43e"],["C:/lmislm.github.io/public/archives/2016/01/index.html","4fdbf16ad335dba16b48b88ec16ef74a"],["C:/lmislm.github.io/public/archives/2016/03/index.html","c8e64e498d78c4ef1edbd7111d2fcb21"],["C:/lmislm.github.io/public/archives/2016/index.html","dddb8a66aa213b68c964cd011b595769"],["C:/lmislm.github.io/public/archives/2017/01/index.html","be0248d2af44dcf7cbe0ce157606017c"],["C:/lmislm.github.io/public/archives/2017/03/index.html","9b7fd3897cf8ce71f08a9f2ca901cbb2"],["C:/lmislm.github.io/public/archives/2017/04/index.html","7b8af79fc33ecc4f4d4279f22c115113"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ea98ec645e255800504e924ab5a8d4c0"],["C:/lmislm.github.io/public/archives/2017/07/index.html","636aec2dad8f90b74514f29db0509a98"],["C:/lmislm.github.io/public/archives/2017/index.html","e8cf9f0070bbaef7511103a39698b88e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","59ff1e7fcec3445bc3a0fb5b3a143075"],["C:/lmislm.github.io/public/archives/2018/01/index.html","7c2786ee762687fcb42880aee9174b0d"],["C:/lmislm.github.io/public/archives/2018/03/index.html","9128b8c19beedb0d972d2554c95643a7"],["C:/lmislm.github.io/public/archives/2018/07/index.html","c9fb4e5113b7813df9f9ccfc902a2148"],["C:/lmislm.github.io/public/archives/2018/12/index.html","29d4814b0c3e2980cd752c4833b9fda5"],["C:/lmislm.github.io/public/archives/2018/index.html","694e32c7c157fc75bc04dd154cb466c2"],["C:/lmislm.github.io/public/archives/index.html","a15237787ed8db7d2e1c305b28063bd2"],["C:/lmislm.github.io/public/archives/page/2/index.html","5c8a22a2ad3c319e376c197724750ccf"],["C:/lmislm.github.io/public/archives/page/3/index.html","1e2149ef70e9a1dfae6e73081f198bb5"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","6832ef8b99aabea29a049de5982718ed"],["C:/lmislm.github.io/public/categories/index.html","9f7f9364d59e6554c878cb6054ed755d"],["C:/lmislm.github.io/public/categories/学习/index.html","d53cdafbcafc8e477bbdba688bf1bb1a"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","1ea1de1a4b903932658d86be981e7c33"],["C:/lmislm.github.io/public/categories/工作/index.html","b3c3eba06831391dce9a835428923b10"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","334edaf137319d78e709213ceb9dc18d"],["C:/lmislm.github.io/public/categories/日常操作/index.html","c8c60239d7071a5f4f095aebc9ace47c"],["C:/lmislm.github.io/public/categories/生活/index.html","a4bd27e10276ad1ec6ca0fadaa26fbe2"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","ac25d8ccccb8b49e7c45bf4a5a8cf032"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","61ae0ac6bd4dba8545958dbf72bb5b9d"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","622029d2c039a3fc1c0e6d7e28377472"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","678afa6c01930b68bf1637acd44e6176"],["C:/lmislm.github.io/public/page/3/index.html","d728ebe66946857f6d08057f57abe017"],["C:/lmislm.github.io/public/tags/Interview/index.html","0b6d1245177fa8ca68e76d22e3c11106"],["C:/lmislm.github.io/public/tags/acm/index.html","507bdfec80c6fb79810bba7dca040b30"],["C:/lmislm.github.io/public/tags/c/index.html","e717493d3ad7f5bab1db8311a7c8c646"],["C:/lmislm.github.io/public/tags/codewars/index.html","f1c62549df14ba8ee8a8ade933ed8988"],["C:/lmislm.github.io/public/tags/css/index.html","f5b370ed32df2164c8abf9f00ec2d0d1"],["C:/lmislm.github.io/public/tags/git/index.html","ff0db01e4332fdd70b579ae813dea78a"],["C:/lmislm.github.io/public/tags/hexo/index.html","45415dbfff64ac2690d13d7e9ddb653b"],["C:/lmislm.github.io/public/tags/index.html","699308e25f1fe7dff815f924be4c0b23"],["C:/lmislm.github.io/public/tags/js/index.html","ff9c4edaea22dc3b4dc61c2bfdec6b91"],["C:/lmislm.github.io/public/tags/markdown/index.html","a868fc8fe2a6e3a66d2e7935be404779"],["C:/lmislm.github.io/public/tags/poj/index.html","78b7b085195686c3e12020652f7ce943"],["C:/lmislm.github.io/public/tags/shell/index.html","5c49d500aff60bbf4d1930c36aa33feb"],["C:/lmislm.github.io/public/tags/vue/index.html","84b892b1fa002caaa0b02b8f0252231b"],["C:/lmislm.github.io/public/tags/前端/index.html","8fb25f6da5efb8e425942a705fde6c32"],["C:/lmislm.github.io/public/tags/小技巧/index.html","ffb33926ce0121add66b3a08f4895367"],["C:/lmislm.github.io/public/tags/展示/index.html","30f6f204b590b73cfbf1c93545008542"],["C:/lmislm.github.io/public/tags/工具/index.html","356461286b10b682491fb428a2b2c8ed"],["C:/lmislm.github.io/public/tags/感悟/index.html","f54160fc675ce4adf7f18a1c3ed319af"],["C:/lmislm.github.io/public/tags/编程/index.html","8431b6505709f76285a5fe0e896158bd"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","ea3880e61a225c1bc98a603baa048024"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







