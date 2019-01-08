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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","499dfd7da8f177dca9f7d647eeff07c9"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","213ae3ab0f1dc5490f0a546c402f1751"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","6580e9dfeb2ba5bde16f6e89c78decd3"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3ee6a8baac25e2fa931985ab648e5ca7"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6025620f881f59e4bf2d3f173966335b"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","d938d3adf1f909956918c5d58b4fe63f"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","3dff74eb1eb6fd5842df9e59582539be"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","f664ab465e40cb0a733ecdd1ccec03c6"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","009c234b141c5db118b84e0e1ee8364f"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","1d01ad36d3cadbb43ab279029d54b8d9"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","f468067877410135833d718ba9f7f41d"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b0202e5fa8b15cd47305d65f991fc64b"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","db25c78b3d3ea401da9456816e3ac686"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","2bcc0bcc3dcc342d9d5c14c3e92c9020"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","3bcafeec4c959ea050d71ad64af08431"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","cb29a4c2e557291314310f238cd84d27"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","d2958bc3f2c530202843b0595de5d434"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","32f935169d5996ee8a3da9806d425ef4"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","947686dd9b416bf233c7766f64bd1cb9"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0b67c7601ea223e3f13566420f2ac435"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","aa2a891840c2e8c6594e91860edbd02d"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","75fe59765569ab26433501bbd2b63485"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","3a0a11d7a405b31e96762215f7fa3b28"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","0bfb28fc242b0994c4cedfb4553b9717"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","e4106bb59220f64ad217132cbab09d79"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","65dbcf2dd7b5290ea327ea6a1dc53b51"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","a3575a41ea9ebc796017d0bd1bdd13ad"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","0fd2e5dd64acfecfcb76ac4b2012c935"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","5204becadfc4ec9fc3ebe74c0b4e1f1f"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","d2a6ad0ee2b80804a5d44ec7594f5937"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","3a0d2339557f48ec1eda880d073a7d1a"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","b09c71eee53791ee5f3416b08f96e9ab"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","69d54ac0e2d06e64154da4bcd5ce6833"],["C:/lmislm.github.io/public/about/index.html","ca248edda94cbf30f78930dc9659b687"],["C:/lmislm.github.io/public/archives/2016/01/index.html","f4d5cada0531858993951ff6001f14fa"],["C:/lmislm.github.io/public/archives/2016/03/index.html","59ff6679f99bb015c7a23329d9037ba8"],["C:/lmislm.github.io/public/archives/2016/index.html","024db1a5a56a5a0d1c160391d1b6e4f1"],["C:/lmislm.github.io/public/archives/2017/01/index.html","50bf13baff42be30403d51bc1562a41c"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b229936ad5094e0b269c60d6f0ea8220"],["C:/lmislm.github.io/public/archives/2017/04/index.html","5f7832506638b890b3e1ddb24254464e"],["C:/lmislm.github.io/public/archives/2017/05/index.html","27316bcddfe16c624ca092e3e0b7dc7e"],["C:/lmislm.github.io/public/archives/2017/07/index.html","3ff2c00a25404a6a87015213d518afee"],["C:/lmislm.github.io/public/archives/2017/index.html","b04fa6ee201baf340a06d0ea02b61263"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","b30abbfc42768ead7bd028b0523c7417"],["C:/lmislm.github.io/public/archives/2018/01/index.html","c462f33fea52d11ab8f128cc63dc2fea"],["C:/lmislm.github.io/public/archives/2018/03/index.html","aaa0d09c4360d5714681c94221b58500"],["C:/lmislm.github.io/public/archives/2018/12/index.html","d15a86d2d4d496113d38a1d83ce14975"],["C:/lmislm.github.io/public/archives/2018/index.html","38954b880150973c997b96ead9ec339a"],["C:/lmislm.github.io/public/archives/2019/01/index.html","97b16b5db0bfaeba0b337bc0f2094560"],["C:/lmislm.github.io/public/archives/2019/index.html","769f7f6f3de6865650446f123c998025"],["C:/lmislm.github.io/public/archives/index.html","0bb16ec9d8ecad847fd6cf74fa251e8f"],["C:/lmislm.github.io/public/archives/page/2/index.html","91a4705013e048c7680202dafc05c3a2"],["C:/lmislm.github.io/public/archives/page/3/index.html","2000efc25ddd45c72cd7edd8ed191c16"],["C:/lmislm.github.io/public/archives/page/4/index.html","37c9e2918a28fc15b60d141488b53ed3"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","4f883ebab786f522bbe4bac012d62a5d"],["C:/lmislm.github.io/public/categories/index.html","71e62984e937e632240aa94d5673db51"],["C:/lmislm.github.io/public/categories/学习/index.html","f6d31f7342bca20b1b13f389dea4a32f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","98f5566d44e374764782d1efa4d9a375"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","dda9d70a9457ae64fc8045b8a9eeb6e1"],["C:/lmislm.github.io/public/categories/工作/index.html","22a23bed18688fe6efe47ea4745d62fe"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","31d49cd0458bc7ce96b7549094540f14"],["C:/lmislm.github.io/public/categories/日常操作/index.html","9ecdeaf7ef47a63f8d33b3b90271b39f"],["C:/lmislm.github.io/public/categories/生活/index.html","72197f7e289a5920d9ffa5501091de15"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","ab92b57a2014f1c7037b980312b5a2ad"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","14f29c05c94727dfb73dfddb784c43ee"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","1b75451dc9dc99fd27426f73ef07554e"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","6de6e8c2e08829980927e70c86a81489"],["C:/lmislm.github.io/public/page/3/index.html","14c7842687ded7a1788abe74dcf6b883"],["C:/lmislm.github.io/public/page/4/index.html","7199d9598377ab3c09523ec259bfea51"],["C:/lmislm.github.io/public/tags/Interview/index.html","47dcea1314d74ff27c9e8beaf5261cc2"],["C:/lmislm.github.io/public/tags/JS/index.html","8ecbd1d0509d5869b39b33305688a001"],["C:/lmislm.github.io/public/tags/acm/index.html","a184801315ccc1e41e5eafc435a8c292"],["C:/lmislm.github.io/public/tags/c/index.html","479f84404b2e17a38bcc0d94950f89b0"],["C:/lmislm.github.io/public/tags/codewars/index.html","deb27288ba11c9d862c7e4c7a990cb08"],["C:/lmislm.github.io/public/tags/css/index.html","7799a5b8060b7cd6a3ad136ffc5a7f39"],["C:/lmislm.github.io/public/tags/git/index.html","a63d26eda026202a745ffdcd247974a8"],["C:/lmislm.github.io/public/tags/hexo/index.html","8c02da9cbdf760e66dd0304673402513"],["C:/lmislm.github.io/public/tags/index.html","bf183dcb7c02a0ef597533bb6c1fe6f9"],["C:/lmislm.github.io/public/tags/markdown/index.html","96b14f28d2d5600e066fad84230e2857"],["C:/lmislm.github.io/public/tags/poj/index.html","b092881362a09b916bf7426065c14e48"],["C:/lmislm.github.io/public/tags/shell/index.html","aed49ec61e9a023660b0c7bf4c173019"],["C:/lmislm.github.io/public/tags/vue/index.html","66da03091f288442ba77b9907f1c6c99"],["C:/lmislm.github.io/public/tags/前端/index.html","a0571b4549b3b6a57bb0006ecf1077d0"],["C:/lmislm.github.io/public/tags/小技巧/index.html","2201b1d8f1d6083fb90fd566ec87e08b"],["C:/lmislm.github.io/public/tags/展示/index.html","586d50d4f046b8bfbdc98d720b6b23f8"],["C:/lmislm.github.io/public/tags/工具/index.html","be65949f1b7a3bb8b7f19a8e6dbb6bd9"],["C:/lmislm.github.io/public/tags/感悟/index.html","29a6c75202754f39c16d25b8ed30fb24"],["C:/lmislm.github.io/public/tags/编程/index.html","15542fa2fc6a12f699f66f8e57f34393"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","dd0ac2530cfb113ad710e91a769275c8"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







