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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","acfa433297739e0b2d05ba13d2d4d327"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","7ac1ed75f9bf41bcb7dd284bb0bc2f6e"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","6ef8bb731fbe089a5261a300cb3c5f7a"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","b869cc546720a255f076f9412840b9ba"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","255e3836392ba400b7a00f1e1d88425e"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","7463ebd0ae258da9865fd3e2d6a67e9f"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","7f406287689717a6e1743f97012b2b15"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","05c26d7b6340f5f72512e41334fa32ac"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","0a44fed5bc46189bc895aadb651e9d20"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","70517af0cf94deb37ce03cc06c66a114"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","d7492a243c60998da3fe06837819e85d"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","837281e069ab3755fbd5d727d0de6594"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9b316238902e7f5cd7db72af6e61d510"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","e8bf93d5a2713ce8da92d4013a164c93"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","074e3dcc6e85fdb0baee54d80c0f30ae"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","66fc905fa04f0246278eeab9e9e4847c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","9808211d1b6100623d3eaa9fad29cbb9"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","3f7337c13da1100b108e1176043a4d08"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","f60c975229e0b3e542da69e36a150e4c"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","d78b95758a6cdd695eede3f7ee6e45aa"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","fc213c716991d0ee38e2d1e8621b21fc"],["C:/lmislm.github.io/public/2018/07/22/fib/index.html","73f33092d966d20d8e004f24a4756e13"],["C:/lmislm.github.io/public/2018/07/22/markdown-trick/index.html","608f314610ecac3a4f15625dcf077cf5"],["C:/lmislm.github.io/public/about/index.html","6f6952f36635ff1af5c2b24c4899aa3e"],["C:/lmislm.github.io/public/archives/2016/01/index.html","fe9385097fd24a082a5eaa042dea01a0"],["C:/lmislm.github.io/public/archives/2016/03/index.html","2f164d0e80053193356da43374d45b7c"],["C:/lmislm.github.io/public/archives/2016/index.html","f6fc3104d41e30e916e9988e03cc4d8f"],["C:/lmislm.github.io/public/archives/2017/01/index.html","c00c1d6cda1f92fc30d56a460848667a"],["C:/lmislm.github.io/public/archives/2017/03/index.html","5a54f5c99302fe867cf71c6f4655287b"],["C:/lmislm.github.io/public/archives/2017/04/index.html","ead2d492804bee4f1d7ddd5ce4efde22"],["C:/lmislm.github.io/public/archives/2017/05/index.html","feadf18bf0036accae06102abb30dd73"],["C:/lmislm.github.io/public/archives/2017/07/index.html","86b89454635b39f7f06ebb8a0cb23412"],["C:/lmislm.github.io/public/archives/2017/index.html","2622cb87052eeb0466941082dc61ba4d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","987ef8e4e7f217931d50ca2700389954"],["C:/lmislm.github.io/public/archives/2018/01/index.html","2981b69e9c178d20d5f5cc6f9d9a9fec"],["C:/lmislm.github.io/public/archives/2018/03/index.html","500448dff32e5b734ab99186d684ed3f"],["C:/lmislm.github.io/public/archives/2018/07/index.html","78d71d9f9ba7caec413303270da2800d"],["C:/lmislm.github.io/public/archives/2018/index.html","e732947465d56c65e7d29ef1f6d191e7"],["C:/lmislm.github.io/public/archives/index.html","5a0ab6f6adac548026af529fe36cb97f"],["C:/lmislm.github.io/public/archives/page/2/index.html","6fe0e7f8474506f21b324228bb2d217f"],["C:/lmislm.github.io/public/archives/page/3/index.html","fabf4dcbf9b02e58fea00cb323b6f105"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","876b3a871b642291b703a0d16a637d29"],["C:/lmislm.github.io/public/categories/index.html","e8338ec5e81455b09a16cbb0ee4e81d9"],["C:/lmislm.github.io/public/categories/学习/index.html","1ecfd988f04d493cafe75713ae721223"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","cf577d337c2211232e3e13ee9be20af9"],["C:/lmislm.github.io/public/categories/工作/index.html","cb15dd2b0b269d081863f35e4a466cc2"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","17488e2125fbe16618bd593fd55accab"],["C:/lmislm.github.io/public/categories/日常操作/index.html","124d2e799bf58c591418c6f21e509cc7"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","86e8bd2f71171ca6060ad60509ad0e18"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","98e45eaf500c3371f89415cb5b0a5e6d"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","2dad0e585ede5886bffe75fde9f182fc"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","e25b1f685661565054b9eb0d75928bbd"],["C:/lmislm.github.io/public/page/3/index.html","0148ecd3570bb9d830e6ae0c059864da"],["C:/lmislm.github.io/public/tags/Interview/index.html","2a12e520b01b4f2f0f8d34d94056e4ee"],["C:/lmislm.github.io/public/tags/acm/index.html","636a429a7cd3157729eaf41301a14b49"],["C:/lmislm.github.io/public/tags/c/index.html","5eef1cb1aec30ab41c241620ed1dbdba"],["C:/lmislm.github.io/public/tags/codewars/index.html","1581038689aaf3fd241993e734738959"],["C:/lmislm.github.io/public/tags/css/index.html","ec40d9b02fc3bb6d164b91a10549c823"],["C:/lmislm.github.io/public/tags/git/index.html","0b8d61f0290818b27adb7b19e18e297d"],["C:/lmislm.github.io/public/tags/hexo/index.html","fdc9a8bde5118dc603cd12f16c306707"],["C:/lmislm.github.io/public/tags/index.html","67928311c312003a12ead1af5c329047"],["C:/lmislm.github.io/public/tags/js/index.html","462bd738b8235c9d64806d32a8cd4c51"],["C:/lmislm.github.io/public/tags/markdown/index.html","1b6574456b688f931cc12c163ed86e22"],["C:/lmislm.github.io/public/tags/poj/index.html","c3433d33c64e87717bad8b252db889ce"],["C:/lmislm.github.io/public/tags/shell/index.html","daaa75a4d4707586ed2013a14b85f2de"],["C:/lmislm.github.io/public/tags/vue/index.html","ddb4a2e4af9f6544b1d94c4018ea1be5"],["C:/lmislm.github.io/public/tags/前端/index.html","cc2b7d5212307561f24980012a65f33f"],["C:/lmislm.github.io/public/tags/小技巧/index.html","d203e13c0692fea7cc9440421237f2a1"],["C:/lmislm.github.io/public/tags/展示/index.html","dd07e9308e2dbeeea5c2bce6742bac83"],["C:/lmislm.github.io/public/tags/工具/index.html","05be12ba9cd0683015274520684a55a6"],["C:/lmislm.github.io/public/tags/编程/index.html","9039c85f358ee69a7921ed7e4536cb75"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","21e6dda50795fd0c19efaa032bfd29e6"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







