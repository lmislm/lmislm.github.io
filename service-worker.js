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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","09b150af5896a0aa25517bfb51b39c52"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","fa2cc609e95cd00d87db0f685072a5ef"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","8805544031570af252a87038dc10fae0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","bfad91a42c584a99990b56db77eb8b82"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","87ae2299f6f932bf3ebba88f30321dea"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","c51a0371ded29fe564871741dce0ab7d"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","105e8d8c3c024b54e0db1f47c20e0fde"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","9fcaa9e27ffb211e381f1fe178f5004b"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","a43f26f168520dd93631e3e117fb160c"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","76f7026c76d96b7ebfb925807cd5cd1b"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e545e4ff5c09cb6e4a70166eb29887f4"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","74b4937b56f2d4f5b376811064b7a7ba"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","b10400e76656166bb549aa2a75490ba3"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","d973215a677afdd45d86714cca3f8175"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","ad21f7f284a7df0cc3654028ad48bfc7"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","8c9bbc4f466488edcaee48f2bf18d1b0"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","0d9eceae6bfae667de4b39534abe5d88"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","ac222f41f25325ab5167797235ecc015"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","f3f2ecfa80cf0cf8351efa0d4780cd77"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","8eb0ea471097ce1d3f40e29f53918232"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","11bceaf90ded45589ffea11d61993c40"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","53702e71941ff36513c458681faa6f05"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","842021522bcc17b88ebbc51431b03755"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","a31f014c1932d932f1527cc2154f4dab"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","1f21548b7f6dd92fe713e643d732f1c1"],["C:/lmislm.github.io/public/about/index.html","ededf0243af1cc419df45562844eecd2"],["C:/lmislm.github.io/public/archives/2016/01/index.html","01e8d03298bedbe09cad3a8fd048b026"],["C:/lmislm.github.io/public/archives/2016/03/index.html","972f207c0a6751f0a4a998d1f225b7bb"],["C:/lmislm.github.io/public/archives/2016/index.html","3a31e8a80e342cba3ee6e995a1cda1c1"],["C:/lmislm.github.io/public/archives/2017/01/index.html","524232fefd117c7a8b384aa2ad882beb"],["C:/lmislm.github.io/public/archives/2017/03/index.html","edddb4364f6bea75e689590b466828c7"],["C:/lmislm.github.io/public/archives/2017/04/index.html","2db1f2095962696a00b4973a7f6a2d6d"],["C:/lmislm.github.io/public/archives/2017/05/index.html","b566d8321afcfb9d95d67aaae58caae0"],["C:/lmislm.github.io/public/archives/2017/07/index.html","3e77624ac70775b4a53c2484b2e6f6eb"],["C:/lmislm.github.io/public/archives/2017/index.html","322d686affa6c1a81b21d4a627dcf638"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","e6e4fd3c435514efa67ebe51165dfc4e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","d6b165032e5b559c5b741fe041e01382"],["C:/lmislm.github.io/public/archives/2018/03/index.html","707e67ba6923b1e228d405e4b3191c39"],["C:/lmislm.github.io/public/archives/2018/12/index.html","4bb1bb60f5483c038f7f97f4f3f72820"],["C:/lmislm.github.io/public/archives/2018/index.html","e8688f30048ffea1fc4f683e85f097ee"],["C:/lmislm.github.io/public/archives/index.html","6c7f0bdf471fdbc466e922a9c9591308"],["C:/lmislm.github.io/public/archives/page/2/index.html","0222353c14fcab71c3648897617b0510"],["C:/lmislm.github.io/public/archives/page/3/index.html","c8eba46bf1cd81dcafdbffdd2f115962"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","d5fe376d62e0085feeb4035a79581bea"],["C:/lmislm.github.io/public/categories/index.html","71a6396d90e2ef76a2ffec4d5bc572bb"],["C:/lmislm.github.io/public/categories/学习/index.html","260dd71769482543a9015a1ee666bf14"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","81cc5ad6e7d07f9869effe2e8536e921"],["C:/lmislm.github.io/public/categories/工作/index.html","f5e0d72809ce1e9a7825b4920db4af15"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","7e6b0ad9ebf19e53f577cce2c2a719ca"],["C:/lmislm.github.io/public/categories/日常操作/index.html","01dad9f7045a3960e6c757fe5b465d46"],["C:/lmislm.github.io/public/categories/生活/index.html","5225db6e740239656e693fad84b129a1"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","0f54241c879675e0e7989a5f847a8462"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","0643a66fa43ca65469e2d59cc4377bd1"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","9d0adb2baf6bc0e48295a4b959d9bbf7"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","310e3e57c7fb664853f5f5709d213b30"],["C:/lmislm.github.io/public/page/3/index.html","e2beb5db51c7796b136f7f1476994537"],["C:/lmislm.github.io/public/tags/Interview/index.html","ef1f4fbebeae9ede409244fa55b172be"],["C:/lmislm.github.io/public/tags/acm/index.html","9506dcb7597a009635fca569c057d88a"],["C:/lmislm.github.io/public/tags/c/index.html","63c437762a2a494cfd036be518a2812b"],["C:/lmislm.github.io/public/tags/codewars/index.html","02b47d0fc824fc7ad21280858f2ce0fb"],["C:/lmislm.github.io/public/tags/css/index.html","959a48ed7971cbb6bb2104891403cd06"],["C:/lmislm.github.io/public/tags/git/index.html","4902da4e8e69efb61e356c216da96484"],["C:/lmislm.github.io/public/tags/hexo/index.html","1c77fc087076a6b1f06b3ab8c79aeb03"],["C:/lmislm.github.io/public/tags/index.html","0e5d3f1d0ef1d87d26b2f0130b644056"],["C:/lmislm.github.io/public/tags/js/index.html","ac866e572b922a74475b0cbf316b3952"],["C:/lmislm.github.io/public/tags/markdown/index.html","d4a3aa963f99519774d7552d3172a74e"],["C:/lmislm.github.io/public/tags/poj/index.html","3c291d495b1568801b9308f52e3003e5"],["C:/lmislm.github.io/public/tags/shell/index.html","bd614eeafbe58c9f6627bdb9cf125359"],["C:/lmislm.github.io/public/tags/vue/index.html","60070f60d11edd408a3df455131f8efb"],["C:/lmislm.github.io/public/tags/前端/index.html","017f1be0913dbc1f9ddd4510f5957009"],["C:/lmislm.github.io/public/tags/小技巧/index.html","80bf3f68423c4da66802a98bec86cf00"],["C:/lmislm.github.io/public/tags/展示/index.html","118f01dc61915996492ec2c91008b2b9"],["C:/lmislm.github.io/public/tags/工具/index.html","0da239f8c0b283b9d1f63e395c7451e3"],["C:/lmislm.github.io/public/tags/感悟/index.html","3964e64f5c9377f5d66f2c696701348e"],["C:/lmislm.github.io/public/tags/编程/index.html","64c90141b6c9ed86d8fb986f774de31f"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","7ac546bea4d217cc32bb7021e69739d9"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







