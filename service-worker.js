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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","a9b01626f3b641ea7faba0dc677242b5"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","6a26506dfde07c90c882773eee157b0f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f0b6c1ae9db29a2c8a55d121ea7f664d"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","46ce040c9ca343ab3e0fd40cadba7a22"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","46f04774a2a954c4b654af3471d592fc"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","f86c8c8e305f2458aea17bd2b5daf383"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","101b348b06ed03edb5be79c9048cbc22"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","aa1e3b4cecdc3195c168ae83ff82a54e"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","7d7ae3dc09f0530d4c7cc86cc373e960"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","091166c61ce4cf8e20ed02cf32e15e66"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","2f06eb74c72d7d97d660bb26efa1dd9e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","f27717169937679ed7627c550cc4679b"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","bad59cf81debcbcf0f2bf0de3eb95e2b"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","99e68eab8324526f51adf73fafc7e131"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2c3b9fc3fb8f2b1eb34ff8e8b747eb1c"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","76165d7cd936f6730fa9bf2cfd949a00"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","2bf666d5dc37de335029d1bbbbedcbcb"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","7c7c4d25208aa751f8aa8d41b4773747"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","b52d8aea47cc41387de8846bc142b899"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","ce3ae7871eff38ff0c4b5e3c0e03e363"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","cffb56921254ffe9249fb1e6bd51b223"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","865bc2b6b3e2b62bdd141817983ec4e3"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","63ef45882513ee37ad82abac1507e2d4"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","e4ff33ce094f506bdce4a5808189d88a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","72acbfe23778152d593b059e75f11849"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","6b920228681dafe1bf6ad25d37481a4c"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d3069a5b1f4b22f24b67399dda3a7a54"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","9d57251df91e73ad92acbd12e4c0ac99"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","7b6f39ade04f50f0ae6504770614150d"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","eea3dcaf506e2efad56ec5ac8c0181a1"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","44285cfe29962165e71e46741f108b83"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","b4d4f129d3b7791b4e80764971fd317d"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","9d47f06c040c06c51770b72a020e1e23"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","243698f0fda765491ddd4432fa27151f"],["C:/lmislm.github.io/public/about/index.html","e8160194dceead9b8c0b4f3f1c8181e3"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c14ea6ce81677d4ebdc9a3389637e682"],["C:/lmislm.github.io/public/archives/2016/03/index.html","2d1ffc1918e9114d0d0723242cc62d14"],["C:/lmislm.github.io/public/archives/2016/index.html","b8d778291fc2bd92cf0ceda739b918c2"],["C:/lmislm.github.io/public/archives/2017/01/index.html","16eed3e7cc50c3e6788ca320e6a79e8a"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ad7fa14f30b71767cdb44a5d26b7c6f3"],["C:/lmislm.github.io/public/archives/2017/04/index.html","ee2afb055691afbd4037d6ffc48c8896"],["C:/lmislm.github.io/public/archives/2017/05/index.html","879a28b1d358f11cfa4a6b3e20845511"],["C:/lmislm.github.io/public/archives/2017/07/index.html","e087974c950a0594ec4e7bd67026de12"],["C:/lmislm.github.io/public/archives/2017/index.html","bd41a9a76f9d532c84bfb1ad114a55d9"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","52a6129f5dd1b79c04c1804b92799f36"],["C:/lmislm.github.io/public/archives/2018/01/index.html","492a9262e167fe833e0fd4fe8d3176c7"],["C:/lmislm.github.io/public/archives/2018/03/index.html","57dd5aa48ca0879305f71e3402b93780"],["C:/lmislm.github.io/public/archives/2018/12/index.html","9f391c95048a57b687b6d127805309e7"],["C:/lmislm.github.io/public/archives/2018/index.html","1017399509e7481365cc12cb8ed4d82b"],["C:/lmislm.github.io/public/archives/2019/01/index.html","d31c98eea1e4c8d5e4c9a6a4a69aa744"],["C:/lmislm.github.io/public/archives/2019/index.html","a7b461bc79d048292cd5d3ac6237abab"],["C:/lmislm.github.io/public/archives/index.html","546e90225da0f3ec7e40baf922f46d0c"],["C:/lmislm.github.io/public/archives/page/2/index.html","9d19fd4cc57d81bab0fe8ec2f01e68a8"],["C:/lmislm.github.io/public/archives/page/3/index.html","3559f5deceed1b2da019a5a779b05687"],["C:/lmislm.github.io/public/archives/page/4/index.html","2327cbed34d7fb1465f598e3ec8f9f8b"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","99d6c0f4ea6a401f8c3076eed71b5484"],["C:/lmislm.github.io/public/categories/index.html","27fb5112fc5708a55f934f032242a9d2"],["C:/lmislm.github.io/public/categories/学习/index.html","1309bc2904cf8b3b07feb112f0a35f51"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","ebe98ee12627ab0a65c61beaa6c07da8"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","4b0b897cab47685855f8f8ba29984d67"],["C:/lmislm.github.io/public/categories/工作/index.html","a93ad4bc87c7f28a7b1e9af97141c71a"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","a2fba3f73e165f31780db622d598f452"],["C:/lmislm.github.io/public/categories/日常操作/index.html","846449fa0e03c8c9013a758a652bd4f7"],["C:/lmislm.github.io/public/categories/生活/index.html","59562328d0fce880f1a7fdcf0007cf8a"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","ee0458df2b4ffbf65df5f027429c1d14"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","ec3b93969288b9b2e5f43b1be11df36f"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ada3c4c6dd4d4882f793d4e4ae59d440"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","fcc822da5935e71ea77ac41a6c9f2f64"],["C:/lmislm.github.io/public/page/3/index.html","85315fca152b39e08f0258c1e2f0a15c"],["C:/lmislm.github.io/public/page/4/index.html","0572bac51c7ebb9bf55d6b9369d9f892"],["C:/lmislm.github.io/public/tags/Interview/index.html","e946f5ccb65018181f054bd3f7bca8c6"],["C:/lmislm.github.io/public/tags/JS/index.html","31ac0b511eda235b6a969f854ebb1839"],["C:/lmislm.github.io/public/tags/acm/index.html","fc6073ae204d75314b0cb873beb4c796"],["C:/lmislm.github.io/public/tags/c/index.html","05d9fd3c0167659e095df42e09d865d8"],["C:/lmislm.github.io/public/tags/codewars/index.html","b3071bca4435b3efbe69bfe3191f5634"],["C:/lmislm.github.io/public/tags/css/index.html","995feaf629b2006f7bc336f7fe8fcda8"],["C:/lmislm.github.io/public/tags/git/index.html","47d8577c457b873106fe345305a17fe7"],["C:/lmislm.github.io/public/tags/hexo/index.html","013b88e90a9a42294e2887e43500a5fc"],["C:/lmislm.github.io/public/tags/index.html","e28c8fbcdf493957fc6a7fc3ff238277"],["C:/lmislm.github.io/public/tags/markdown/index.html","3c54c207409a57f3e029e8fa356b4728"],["C:/lmislm.github.io/public/tags/poj/index.html","d435ed5b3b602330df8e8c915e710511"],["C:/lmislm.github.io/public/tags/shell/index.html","eb7dd6e220911cd9952f3541610cfd51"],["C:/lmislm.github.io/public/tags/vue/index.html","e5077a8cd91cec34276f863962511613"],["C:/lmislm.github.io/public/tags/前端/index.html","952d2abe40215a8e8d42a8e36820ddb9"],["C:/lmislm.github.io/public/tags/小技巧/index.html","0014928cac354203f96a6650825d6743"],["C:/lmislm.github.io/public/tags/展示/index.html","05974400ea70a192bb9e321432c0a3ea"],["C:/lmislm.github.io/public/tags/工具/index.html","a35d0e0e984faa79e3fbafd93b5b24b2"],["C:/lmislm.github.io/public/tags/感悟/index.html","e5812c2d7fbb0a66793f887e795c2801"],["C:/lmislm.github.io/public/tags/编程/index.html","974e247ebe797747458e1dd50232caed"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e9e8bc00356e36d8d6f7bde17a9ab6f8"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







