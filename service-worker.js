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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","7a6a305713672ed16cce1730acae1899"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","cdd160bdeaf2e76d37add5a68becb075"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","e408702e48b5a19df57f6b9360570df7"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7fdc80c3692aa38d55ee32e305a6d42a"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c33b919a71be661cd213af9c7e9a7c79"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","82404091e6125624893d07421620d054"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b09100cd90093414b6eb7184298b8cce"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","d38c0e070a9ad4e54e3845aab0ae4cae"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","27131521e93ef3a334708f76ef83b433"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","22bb6edc5f5886bfd8a833133765d70a"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","b6a729174cb79f66d963a278c8e45969"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","f0014dd4a580546248c38668f0f11560"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","034e6faafd5f713f2a7e279a773d108c"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","304599d96d40614db6299b289c505444"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","f77a61a232973c18a6b681b550bde8b1"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","6e72a31e0dcb7520c0e1ea9e1093cacf"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","740c783fba7fca2f46b7c94b3f8754b1"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","31eadbc9172d520670ac29e0d4c982a4"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","15729c47866f2476e3bde4a702a593be"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","a494caf8e2f64295aa33ae789fe42cf0"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","0550215c1f2e3469918f849d42e1515f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","dd79deaeb8544f594f66bc95049cf90b"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","2370ca2d08f1dbb84184d8726bb3692f"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","3733d1dfcb4dabc5a5a7cea656eb1fd9"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","beccedbcd068a3cd98ab8ea9010213f5"],["C:/lmislm.github.io/public/about/index.html","c76c7d870608d8e0f3b733315bde21b1"],["C:/lmislm.github.io/public/archives/2016/01/index.html","006c2d6c67472ae0655b0a08fb84725e"],["C:/lmislm.github.io/public/archives/2016/03/index.html","6e3ecc954d05ff14587547e38524ad49"],["C:/lmislm.github.io/public/archives/2016/index.html","d6767d477199169e85521bb0b48e0958"],["C:/lmislm.github.io/public/archives/2017/01/index.html","014f4598a97dc29f585574faca5adee8"],["C:/lmislm.github.io/public/archives/2017/03/index.html","866377c0f11af6c1dc11510665519e45"],["C:/lmislm.github.io/public/archives/2017/04/index.html","51455b7880c2d941db78d9a4fbeeee87"],["C:/lmislm.github.io/public/archives/2017/05/index.html","2cc106d027f302de4b0c653c775accfa"],["C:/lmislm.github.io/public/archives/2017/07/index.html","afd11e52c84195604a838e418c1979be"],["C:/lmislm.github.io/public/archives/2017/index.html","547c463783bf111f2842a5080247530b"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","fab1527f0aee9d660256abc8700c249e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","be87cd4b28e80c19703a8b552b81183e"],["C:/lmislm.github.io/public/archives/2018/03/index.html","8e2b19b436946d5eb8021402a2c0db7e"],["C:/lmislm.github.io/public/archives/2018/12/index.html","4d5a0d0bab0a29c0a3739a5c6871dcd0"],["C:/lmislm.github.io/public/archives/2018/index.html","321ca5fb1a61b2f4580ab96488b22b22"],["C:/lmislm.github.io/public/archives/index.html","d41952c81d66dfe9c3cb0ccd3452fa5d"],["C:/lmislm.github.io/public/archives/page/2/index.html","6bdc60b41e5cfeb2464250b319996e33"],["C:/lmislm.github.io/public/archives/page/3/index.html","f95c223d2d066396c5c472d5c92a0526"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","9f81c47e8f4aeda1eef8222e0c00a2f7"],["C:/lmislm.github.io/public/categories/index.html","0ee75fa94fea4ca9fbc8f5fcd4affb84"],["C:/lmislm.github.io/public/categories/学习/index.html","640b2ea1fb1e7ce87f0b1bd0073b4e53"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","092b57e3e6ba85a83046b469c1129c97"],["C:/lmislm.github.io/public/categories/工作/index.html","bbcb1e906ba4806b658b835bc2e6c9df"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","f06af5c953f4a8cc433cff7a212e2e95"],["C:/lmislm.github.io/public/categories/日常操作/index.html","05fe39403e17460feca678d2274f0e0c"],["C:/lmislm.github.io/public/categories/生活/index.html","99c2d733550714ddb00b3c22cf30436f"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","89dad6ff5503b181408c4ee94ab0d329"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","33b4b665ce25ee5d1211b7d457c2a9d2"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","49a5f748cb43f5c45c9b4cbd953c29f1"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","f77449fd074b37e0932f60bfe47d0404"],["C:/lmislm.github.io/public/page/3/index.html","2ad91b4ad3578c0b47e574c4a8746b19"],["C:/lmislm.github.io/public/tags/Interview/index.html","b1249016ea13fd3deffda1b491c71363"],["C:/lmislm.github.io/public/tags/acm/index.html","5cb5f95ed4042922755ffacb55406dc7"],["C:/lmislm.github.io/public/tags/c/index.html","a59fc38754f0a78477a7f212d4999ca9"],["C:/lmislm.github.io/public/tags/codewars/index.html","7fa36b96bd61a7e136a618c8db4eb20a"],["C:/lmislm.github.io/public/tags/css/index.html","0522771f1beaba0d1a36f2c801972a60"],["C:/lmislm.github.io/public/tags/git/index.html","a19082bded2933abdeb0e26712c2ceb6"],["C:/lmislm.github.io/public/tags/hexo/index.html","b2cae23a2fda2e60a3fd9e48e034059b"],["C:/lmislm.github.io/public/tags/index.html","a81af56a919da6efb38d652b3b4a5c75"],["C:/lmislm.github.io/public/tags/js/index.html","e4ade892599c67237e017965dfafcf34"],["C:/lmislm.github.io/public/tags/markdown/index.html","92c1fa3615c5bc2e60580ede3d57502e"],["C:/lmislm.github.io/public/tags/poj/index.html","e2ebf4042a35ad6d4f1c60475b0b4890"],["C:/lmislm.github.io/public/tags/shell/index.html","76df8bc898f487f965891d8b7f3974fe"],["C:/lmislm.github.io/public/tags/vue/index.html","0137b60b736565f0577d934fc1db5eb8"],["C:/lmislm.github.io/public/tags/前端/index.html","8e286114e945b40cfb5cd3665af354ec"],["C:/lmislm.github.io/public/tags/小技巧/index.html","32d6a07eb1f7465e59db07c14023b091"],["C:/lmislm.github.io/public/tags/展示/index.html","54d72b9ad9d5571f8e9753f538c8f0d4"],["C:/lmislm.github.io/public/tags/工具/index.html","ca22c13ad370933b5e8034f30b6d4f2b"],["C:/lmislm.github.io/public/tags/感悟/index.html","afb7b06c7df592a63e71c088748d359f"],["C:/lmislm.github.io/public/tags/编程/index.html","8bc44f64181f96700b4e8214998834df"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","4ea2c96fbbcbf6c9ae6a81efd1e859a1"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







