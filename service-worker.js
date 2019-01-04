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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","f2e4a64ce945572da6b5d0ac8e6b9b12"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","39afd28780826448fe204e55adbe9eb0"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f164aae10bad6f88fe77b684d7c5fc35"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7d0ca61f3b060fc4aaae647d484ad182"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","f1eb967ad2f38589e501e5ecd66643f2"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","03d36f55ccf5eee5c62d13b96c513f73"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","a666d0de15a4b04d9fc6d73cbd2235a2"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","96a958ba8fa247168bb197245ae509e8"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","4edfba48d14efd68fc3d5358447119f2"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","1280f8d90ecc60d621481adeef49dec2"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","bcefc33e9b4d22cccf5cc547d7197329"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6dd438c7eef1a3fea0e5d292b82563c5"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","aea17f52ff3b555c90cb718d98fb6ac9"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9cf9c3c49274ac4a11cbccc627e19386"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","7ce7a8fec10a2b9cb80158ccbaa4b771"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","5a6257d9d6149db3eb00da20b4c6fcb6"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","13a6ca3c97e61e92083ccb1a2bf8302e"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","ddc3ad634bad600a9072c256901f06c8"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","d354dc783f3043f80b0722a7015864b8"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","23e50523009722a7a4ee448da63dedc1"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","de812492d6c81a56c64abd781c7c4edb"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","394ed400fd26362068a2d28c7804011a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","9994a4421510e11ebeaefa6dd539ba4c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","74df196373e964d47cc7c057ea369248"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","08f47f2e3daa4098f9884113c3da7eac"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","16d64b397e8eae49c39641873575fc52"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","737cfc2f736bcbeceb5663cee1d53885"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","676b3a7ea16fc33603fba145f971d1bf"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","425b40c6902a3f55faa1dc37b6630fb0"],["C:/lmislm.github.io/public/about/index.html","0a563990891e458c11b07042d9a475c1"],["C:/lmislm.github.io/public/archives/2016/01/index.html","18eddfaaa594ef17c900969ccca944eb"],["C:/lmislm.github.io/public/archives/2016/03/index.html","53ca7c66f410f32ac55aa05d6c59245f"],["C:/lmislm.github.io/public/archives/2016/index.html","efd4dfe20d5c6a4f57286738315f3fe9"],["C:/lmislm.github.io/public/archives/2017/01/index.html","d1660bc147a1841302b09db23636ebbb"],["C:/lmislm.github.io/public/archives/2017/03/index.html","80d42300485fb07e10fa010172f6e8c0"],["C:/lmislm.github.io/public/archives/2017/04/index.html","15e4981e8ce71ab96d77e087603d9550"],["C:/lmislm.github.io/public/archives/2017/05/index.html","687e4039e262954310ba786b97b2ece9"],["C:/lmislm.github.io/public/archives/2017/07/index.html","d329d4b4d69139170b95976ff5d8560e"],["C:/lmislm.github.io/public/archives/2017/index.html","51f69be2bcdf4c1930533d13e6a48012"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","49f59b2c4c9ed18183d665549842b9d0"],["C:/lmislm.github.io/public/archives/2018/01/index.html","4b02fd9976eea3af0030f92fb7baebaf"],["C:/lmislm.github.io/public/archives/2018/03/index.html","227f3ab6b602dc97c760d0110aea145b"],["C:/lmislm.github.io/public/archives/2018/12/index.html","1e776ea550f87bc57eab6892dd2eae1e"],["C:/lmislm.github.io/public/archives/2018/index.html","f085a12b8747ebab6a7f09fa178a6c59"],["C:/lmislm.github.io/public/archives/2019/01/index.html","862d2edbaa6b2aa445744acd4f4298ba"],["C:/lmislm.github.io/public/archives/2019/index.html","6e80451db00b186ed38d1ffe046aaad2"],["C:/lmislm.github.io/public/archives/index.html","3d4a3d13acceaf8eb5a9961bf8567a1c"],["C:/lmislm.github.io/public/archives/page/2/index.html","1d0a9cf684edde3e3ce8360ac00c7aed"],["C:/lmislm.github.io/public/archives/page/3/index.html","5e6de42dab85ef824e15149167676569"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","30d084aeb292a3d3538f87019f3aafa9"],["C:/lmislm.github.io/public/categories/index.html","5052697124df4fd142c459518f44ce7f"],["C:/lmislm.github.io/public/categories/学习/index.html","a5b92600f615e660cc8b059daebdf9d6"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","22c2518e45311f13829bfa605feb44d9"],["C:/lmislm.github.io/public/categories/工作/index.html","453a527dd11d374bb7e4dbd811213f1d"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","dc55d65063083a969793ee457eabf620"],["C:/lmislm.github.io/public/categories/日常操作/index.html","ac69544986dc6cee17f1039cb8fa1e02"],["C:/lmislm.github.io/public/categories/生活/index.html","278d8e916543052b4d3d1e50c19ab825"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","18c61f181be3d13b9ec9b19a4f1c0883"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","61883d992b69177372be12188bc1fb3b"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","b241f0010d16dcaa2923e26f177f5e2b"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","7da3ecb8f81bd84b3850ae1a0bc64e42"],["C:/lmislm.github.io/public/page/3/index.html","7b48d89a7bc6e70d8bdfbeac5234613f"],["C:/lmislm.github.io/public/tags/Interview/index.html","24bf3c761e811aa8f57e5fa78d7efd6f"],["C:/lmislm.github.io/public/tags/acm/index.html","4ffc5965bab0972722c994eab1e46bb3"],["C:/lmislm.github.io/public/tags/c/index.html","96606deb1ea7ac86a1a43fd1b164fa45"],["C:/lmislm.github.io/public/tags/codewars/index.html","66e0a8fdb0d69a819fac5a01507bbbe0"],["C:/lmislm.github.io/public/tags/css/index.html","0a078fc6264220502c17cddf7d5c2789"],["C:/lmislm.github.io/public/tags/git/index.html","06d58de704199ab11acc8f1ca2ee1bf2"],["C:/lmislm.github.io/public/tags/hexo/index.html","167498602c544239a40b5329e9607e99"],["C:/lmislm.github.io/public/tags/index.html","99a7b6d6ba08a29bb21684e191e695cb"],["C:/lmislm.github.io/public/tags/js/index.html","a297d00bbad05c7e6e11a6043f493cb7"],["C:/lmislm.github.io/public/tags/markdown/index.html","0ece4f0c52e2c3ef212c231aff83e3b8"],["C:/lmislm.github.io/public/tags/poj/index.html","f535e7d78a4204ba079c8d5ab9e21385"],["C:/lmislm.github.io/public/tags/shell/index.html","5976debc27028fbe8c708ecd7ce69f76"],["C:/lmislm.github.io/public/tags/vue/index.html","887717714a6c544dd2a97eb0e35ea1f0"],["C:/lmislm.github.io/public/tags/前端/index.html","90381d0a51fd10889caddc158303e9ba"],["C:/lmislm.github.io/public/tags/小技巧/index.html","184bfab8ae202573fa08887412b095ec"],["C:/lmislm.github.io/public/tags/展示/index.html","c0f91324244cc034e1647ca62c700e2d"],["C:/lmislm.github.io/public/tags/工具/index.html","3dfa43a14541ebb1130485e99b89e5d5"],["C:/lmislm.github.io/public/tags/感悟/index.html","bcbcd465c7d27da9d8b93e3589fa526b"],["C:/lmislm.github.io/public/tags/编程/index.html","fc9798b0399c72c7ffe408ccd0ae8bf6"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","0fe06e2d645ad4160f6710a44f47b9f5"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







