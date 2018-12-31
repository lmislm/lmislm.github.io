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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e9c3b59c1f11a473c896e0ccc7aae663"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","be822734c14ee0b06bad08c83ad5cbdb"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","59b3b2d3a7b06a056387f5a2b1245773"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","5f509a6b6d991ba15bcaffe2c37fb33c"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","bd81d89c6ead2f517b4b5ef8aee4a016"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","4d2f9d199f5667a9305c4a65ce71b5ac"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","7d707807a619d110d25113144d63b7db"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","756a4d06e29062fd204cf9dc1e532509"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9348f710a9d3053c2da8351734a567a5"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f402a338b24de9c92c81d46242de7777"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","0207419bb0e3b6bb290abc3e45b65564"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","c4ed56e03c720a7a0b0d3cb9afe759fa"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","d31b01f33539003f77b9a73f0d3233cd"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","404c0c51a118ab44fe7e234132487112"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","551a4906960c0ce6f14d3b1251f6b73d"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","fcfdf91dec0ec5b6c24021a0965d346d"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","9535d777c572514026ff296f7f9e0749"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","9acecc81b63e3409ef6e9cc33bdb5a2c"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","e8ad9a16828999d220ec5ff91a495c48"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","889f8fe40440d3ad4f8dc2ae15faac51"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","0dbf0964086b1d75d57fce6b81112e59"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","9d3ff785f5ae1352a32c101d0bb42149"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ca0a9c925fe61cb55452311c623b7ad4"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","b038510536235e603713aebafa473e82"],["C:/lmislm.github.io/public/about/index.html","59807469ff8a2a799e1bc576a271bd59"],["C:/lmislm.github.io/public/archives/2016/01/index.html","eb8531017a091907ee16012b18d8b7c0"],["C:/lmislm.github.io/public/archives/2016/03/index.html","db5670df462adcfa820a3895f3ca682d"],["C:/lmislm.github.io/public/archives/2016/index.html","f33190dcf108265adddb3f587d133a12"],["C:/lmislm.github.io/public/archives/2017/01/index.html","ea3e95210cdbc17e7948c699d5d56762"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b484a5112209ddea9b58397bbfa94752"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1c83b262be66575f2e3cb538488b7242"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0f4ca0a787a29014da9d8044d17dc30a"],["C:/lmislm.github.io/public/archives/2017/07/index.html","02d333698a910bef1ecca0803d3f2c97"],["C:/lmislm.github.io/public/archives/2017/index.html","3113b17efb6570728a21b9033f100759"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","c16c571006bdcfea641fbb2c138f241e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","96e75e2e4c3980126091f2fe8a076744"],["C:/lmislm.github.io/public/archives/2018/03/index.html","c735f8dd5d6d81858dc3618a895f880a"],["C:/lmislm.github.io/public/archives/2018/12/index.html","cca262b5e30efff8fc32978339528dc7"],["C:/lmislm.github.io/public/archives/2018/index.html","8c46fbda6cbfbf000738fd2bc27c5059"],["C:/lmislm.github.io/public/archives/index.html","26bf6956225fbd18acf9acf84b5efb8b"],["C:/lmislm.github.io/public/archives/page/2/index.html","aa860d1df6938d0b1023ec2b37c8b18a"],["C:/lmislm.github.io/public/archives/page/3/index.html","59a05b9a35a9e84c3cff3c6734a490fe"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ac0a72f03660fc9163722ed4b70bd13a"],["C:/lmislm.github.io/public/categories/index.html","f95dd133860554add1567ba555e5a9a4"],["C:/lmislm.github.io/public/categories/学习/index.html","62455ad809dcaa6f923da2a64cc4e2d3"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","ee1a7d3ab3db6a7aa325c19dc89057ad"],["C:/lmislm.github.io/public/categories/工作/index.html","d1a6a5d44e33f2a22a6da3590657fb99"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","db6ffa000e1028d7fe31877efa7cc807"],["C:/lmislm.github.io/public/categories/日常操作/index.html","ddc860f4a426b234f2b6b80493338233"],["C:/lmislm.github.io/public/categories/生活/index.html","99eda84cb4293622b13d7c6a00888d73"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","5159c1d418b19cba2fa77baa66ea0000"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","daeefeb93c86d50ab516eedadeadf9bb"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","e177a892908d4a6440b23ac581c876fa"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a8b0a4ec72263414ac50ec6e6b12c4f5"],["C:/lmislm.github.io/public/page/3/index.html","a7a66023e9e5b080f000d1eb5b6cbadb"],["C:/lmislm.github.io/public/tags/Interview/index.html","e4e806a05141253ad044fa64aee9dd16"],["C:/lmislm.github.io/public/tags/acm/index.html","a702ff5fa57bc8bb99d0a74333d96fcb"],["C:/lmislm.github.io/public/tags/c/index.html","f9f2aab97cc914466e1d534179310934"],["C:/lmislm.github.io/public/tags/codewars/index.html","f2a0e2ca4a4ec4551615d6e4bcd3f245"],["C:/lmislm.github.io/public/tags/css/index.html","9d6cfb0376f5303b7e9b34b51604192a"],["C:/lmislm.github.io/public/tags/git/index.html","2209e0f149651a029d91d8d37ca38de2"],["C:/lmislm.github.io/public/tags/hexo/index.html","c4defb67cee6db075de49ab84c122c4e"],["C:/lmislm.github.io/public/tags/index.html","c49d3f1221620fc58946f60f3a1eb71d"],["C:/lmislm.github.io/public/tags/js/index.html","9d0aeb82224d2b6c1345de96956c0b60"],["C:/lmislm.github.io/public/tags/markdown/index.html","8beac2b8ba34cd84f7163bbf6db7e854"],["C:/lmislm.github.io/public/tags/poj/index.html","f47b674f4581ad54577557ad268bb02f"],["C:/lmislm.github.io/public/tags/shell/index.html","f1e36274d2e55fcd48f6ec822849e657"],["C:/lmislm.github.io/public/tags/vue/index.html","c2746b09da4f21fe25ab1d903b81a043"],["C:/lmislm.github.io/public/tags/前端/index.html","f22087fe3cfce43efccae6598c9dbbf7"],["C:/lmislm.github.io/public/tags/小技巧/index.html","fc3f691d839b7656c684a843d092d0b9"],["C:/lmislm.github.io/public/tags/展示/index.html","7d1aef8201790876b804fce0e00ae92d"],["C:/lmislm.github.io/public/tags/工具/index.html","bcc5f33f0ab1481a5f2e2951d2c84067"],["C:/lmislm.github.io/public/tags/感悟/index.html","629f04b65759030d7d6990774778b6eb"],["C:/lmislm.github.io/public/tags/编程/index.html","850177aa7003c21223fbccb8dcc4765b"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","f28d6d29129c11c44a8f415d7fdecc41"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







