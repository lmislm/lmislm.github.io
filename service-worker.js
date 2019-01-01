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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","810d3447ad85efad1e7b6ef8467b60fa"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","afbf0bb4f50dd07c1ebb4092a3778043"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","9b4807ced74da8259a13e3a6af100fd5"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","14878d9f94225f4f512116f5e93879c7"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6f71b66a4b9e2eae8816aa16ab56cb85"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","f888129fadd3686c0e1998946ce4fa3a"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","df30259e97baeab6606e847dee44e216"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","00ae3181b06d9e0c57ab6a3c9fec1f2d"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","da743c257eddba3b106bc1ab1bc21f92"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","2f92a18d5112bb8e691fcf3c4a23eaf9"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","9d2479c24e877480b6c82f7185a518ab"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","e15b8f56df1fdcf4b98ac43d12852543"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","638f70ae784fe46d4bfbc08a5d77c4a7"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","6434aec67bec31c73a0ab6a4417d9bb2"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","74109fcc6b299ed60fa6292814dd2e75"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","eacb54b029555b4d7dafb93054694da8"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","3e3393652a4f2bb24cde6c4af7a95865"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","602a459734866dad8a3e4a5c9235a232"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","adb5bd32099a11ba3bdde32dc812fcfe"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","e838a73dece3c9bb9d7726e7a88ac0e6"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","80ed25d7ef5bbf414035afe3b5c25445"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","d5bbab3d6ce152b24346656fb98d60f4"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","f901b415d388f9a2b0c4af5aef60e178"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","7da72c1fff9a364ea129f4c85f7ac459"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","7d6be0b6ef79bf7d1298feb5b00d287b"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","0705c9f8326349adb937a4ff5bcb1a59"],["C:/lmislm.github.io/public/about/index.html","2e112b2a253f645ae8514f89b135eba3"],["C:/lmislm.github.io/public/archives/2016/01/index.html","5686eff6eaeac242dc2e7cb24676be35"],["C:/lmislm.github.io/public/archives/2016/03/index.html","615d2a8df7b1af564dbdcbf9edd7643d"],["C:/lmislm.github.io/public/archives/2016/index.html","4ba03af6421a731ac6f1a4494f95924c"],["C:/lmislm.github.io/public/archives/2017/01/index.html","12f2bb81a1dba1a99b0a07d918b83199"],["C:/lmislm.github.io/public/archives/2017/03/index.html","7de4736a2e1e065dbe48f1d176652641"],["C:/lmislm.github.io/public/archives/2017/04/index.html","68f076017f55bedaa550cc71283dff55"],["C:/lmislm.github.io/public/archives/2017/05/index.html","e14e6cfa56cfcb477bd4b74ab713efa1"],["C:/lmislm.github.io/public/archives/2017/07/index.html","3a3389c44af93e38532d6ce63600d504"],["C:/lmislm.github.io/public/archives/2017/index.html","c8c2f8e85478aff2cd353dfaab56b288"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","31349bc5e56f9661b742a11f2e0956cc"],["C:/lmislm.github.io/public/archives/2018/01/index.html","6b9f2a829f68e201f98d473c91805f7a"],["C:/lmislm.github.io/public/archives/2018/03/index.html","fd67f08fc048e2c89862bf6ead57f4bb"],["C:/lmislm.github.io/public/archives/2018/12/index.html","e4865713b3089fd9b8968e4a8d39e23b"],["C:/lmislm.github.io/public/archives/2018/index.html","ea313e2e76f3f883fbc92b03f02d7816"],["C:/lmislm.github.io/public/archives/2019/01/index.html","b93c83cdced17152178753cfb5a0fca7"],["C:/lmislm.github.io/public/archives/2019/index.html","a0a46fa44aa9beddf6189600ac052ff8"],["C:/lmislm.github.io/public/archives/index.html","922d611bdab669b40a19ddde08fdc1b8"],["C:/lmislm.github.io/public/archives/page/2/index.html","1ea8706c4023a9144b4ddb1150db1039"],["C:/lmislm.github.io/public/archives/page/3/index.html","348c6affb0bcd52527450d0609b6560b"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","d620956a5904f3141109f4bdcc4b1319"],["C:/lmislm.github.io/public/categories/index.html","9b60207a0e7860056a87294aab3451ae"],["C:/lmislm.github.io/public/categories/学习/index.html","0e6c11f6e08d575e8aaf0880e0dbbee6"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","6dad14b1018be421e6868fbd158bb43d"],["C:/lmislm.github.io/public/categories/工作/index.html","cb7f5c0b32c2f33b0b6260f797d810b0"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","d282a11e70181f98f34cf8322acc394c"],["C:/lmislm.github.io/public/categories/日常操作/index.html","b9da1230bd681d90edf79c56ac7f6bcc"],["C:/lmislm.github.io/public/categories/生活/index.html","fac6531bea72bfeb2ab4cf450e070591"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","56214ba1608f1b8e63090040db774d45"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","5b6b389099ccecd204913b4086bca6bb"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","0e949e7040d0e37be6afa32fa1a66944"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","b9aa49168bd094652b4f451cef0058b4"],["C:/lmislm.github.io/public/page/3/index.html","44076b2d83df89c8470c6a087dd46386"],["C:/lmislm.github.io/public/tags/Interview/index.html","4ca506c52b2e86f8ee255005b8e775af"],["C:/lmislm.github.io/public/tags/acm/index.html","aee15f5e260f8b3624871d75096e8826"],["C:/lmislm.github.io/public/tags/c/index.html","9884118988e8dc829fe6074ebcbec49c"],["C:/lmislm.github.io/public/tags/codewars/index.html","00ec7da49f76046be8f5e752c61b1aad"],["C:/lmislm.github.io/public/tags/css/index.html","79e413b14b8e22792e0cd17bb836e2c4"],["C:/lmislm.github.io/public/tags/git/index.html","8ee5aed51df2bcf49bb390b95a335378"],["C:/lmislm.github.io/public/tags/hexo/index.html","b7d77f2c35cf34cf2da962efa08ef85a"],["C:/lmislm.github.io/public/tags/index.html","891b74f0766bfd7f77eae0786b2c4a7b"],["C:/lmislm.github.io/public/tags/js/index.html","13af6fe61670d514216ca051e402aa1b"],["C:/lmislm.github.io/public/tags/markdown/index.html","783617f723c20de9e662020db5a90052"],["C:/lmislm.github.io/public/tags/poj/index.html","05d90d64c273f95fd6a6ab85008adacf"],["C:/lmislm.github.io/public/tags/shell/index.html","5c38ed8cf041fba6af81c8b4ee476ecf"],["C:/lmislm.github.io/public/tags/vue/index.html","bf74287855a3e6e581a355af358254c8"],["C:/lmislm.github.io/public/tags/前端/index.html","f408be622fbcd4b4d97421273f5845f4"],["C:/lmislm.github.io/public/tags/小技巧/index.html","67b05bca23bd9e3c10233250dd22d108"],["C:/lmislm.github.io/public/tags/展示/index.html","d33e9f447dc6021e9054905c0020dbcc"],["C:/lmislm.github.io/public/tags/工具/index.html","3fa273dfcf8571fbf81ed2b24d76d881"],["C:/lmislm.github.io/public/tags/感悟/index.html","a29f0358bbbc539ee20b72f08c5bf683"],["C:/lmislm.github.io/public/tags/编程/index.html","2fe5333d53b097c2f3b1d36dbd48c624"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","026e151c61a1f20873d9c55069cc63b9"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







