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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","96f9c01eb6c051ddc8136c35534ab8eb"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","cc749dd4f5bbb2739784338758fdd5b1"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","47fd087d6ebdbb2898bcb6be89ec3a11"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","26f13c491dd7b9942b2805f28e8882d0"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","d32c92db0afc2f3c994804ddc9e0e2ee"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","bc6acfdfcedc75c0f9b34f7c74a770cf"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","ac36618dfaf80b6974139d3742e587a4"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","31e33424d803ef087eb85da28809f28d"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","a8c251808efc75bf9d8efa26c83f377a"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","4422b8a2ec20f4f6c74517c66860a2b9"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","4e6b57dfb627824d3c969dd344136bf9"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","e226a9c6ea9d309b4339660ca776c6a1"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","8edc51685d07dc5875d132cda428042e"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","210d32aa1447b73e23fa05811c1e84d4"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","befa747988e4ed74c600113e44f11abb"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","e130b3b84953fe8118027b69799e6207"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","01b416275e5b8bf5c4e51224610a7e25"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","5a2907c6df4d5f6b3dfa27c9e774fc21"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","b34aa29d629a5a5f2ecc6bde69849657"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","b1e367a387c136618084db16db9d92f5"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","96b753fad568617b058aa403832464c3"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","52a1fa999b4eb98ad3cdbea843e84b6e"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","1ec3427f9f9e302ce280ed97606c7d29"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","b4e18b0ed71583f19f48b43acb7d744b"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","cb7c127e4b232bc2fe07192839b6f0ef"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","bff1a0ff5b435596a516276eb7d5c1af"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","5b3a063ba337968a04f36245241df008"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","57ea0296da183a424993171cd796d534"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","81e77faa2f262b861f20686f74f9c90c"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","73001235cb6c70cfda05027e14c4e2db"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","c08e25956fc502d7971a80364090ad60"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","59678d56e90aa80e1f4d91c2a32bb795"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3a905b030a0d7044c4bb87a2c6653002"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","adf6c01e7c408138c46f7a6f63ea8b2d"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","f071a1727e40cfdaa7c28f4bb80452ee"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","81b200cba7e603e60147f628769e71e4"],["C:/lmislm.github.io/public/about/index.html","264b96f72c807ee1b6e592a88323c12e"],["C:/lmislm.github.io/public/archives/2016/01/index.html","0c4dc83229ca08937ece5ac3f7f316b7"],["C:/lmislm.github.io/public/archives/2016/03/index.html","9d627e53a4a024f40fd46aff066ccf9f"],["C:/lmislm.github.io/public/archives/2016/index.html","ca87556559d4fab82ac2f66e931dddd1"],["C:/lmislm.github.io/public/archives/2017/01/index.html","4900f4847d7628faedee3e8e7eec1e17"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b786a5b98115be03743a33e37a2abac0"],["C:/lmislm.github.io/public/archives/2017/04/index.html","bd3272700ae3f92c15333e0eae5506c2"],["C:/lmislm.github.io/public/archives/2017/05/index.html","73c8820af5020c4d1c0b32a31bdd3c1c"],["C:/lmislm.github.io/public/archives/2017/07/index.html","7b6548434001857555bf27f8631a239f"],["C:/lmislm.github.io/public/archives/2017/index.html","2a9b11d43e7d0bfaad0e993ba5418a12"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","ae94eef6755c12906fff7d3fa54060d3"],["C:/lmislm.github.io/public/archives/2018/01/index.html","39931833ed5d20fc4931e44d8f7aa472"],["C:/lmislm.github.io/public/archives/2018/03/index.html","485d64b6c991200ab7985ccc0f986839"],["C:/lmislm.github.io/public/archives/2018/12/index.html","ed8c9050aa13ce45ef66bfe44b232aae"],["C:/lmislm.github.io/public/archives/2018/index.html","102c49f9b755f8822736c9b3ac27174f"],["C:/lmislm.github.io/public/archives/2019/01/index.html","8a338b1d48f3a4733f3a8891e679bb0a"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","a3cedb6b8a379a523903f5cb4d984389"],["C:/lmislm.github.io/public/archives/2019/index.html","59a70980d20f0b75ef05248064e8a068"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","f55a75527da813c2061a29e28aceb1f8"],["C:/lmislm.github.io/public/archives/index.html","f73f4013f1fd2913cb221d81a142d466"],["C:/lmislm.github.io/public/archives/page/2/index.html","9e40b4363ed799b060bebb5edb4b3df0"],["C:/lmislm.github.io/public/archives/page/3/index.html","530eb276a5944148ebe309d891b8ea37"],["C:/lmislm.github.io/public/archives/page/4/index.html","9c9ce6cf911cdedc1436c77804fd7652"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","5864805354f9100358f0e6a3cadeeab6"],["C:/lmislm.github.io/public/categories/index.html","3e3cb6dce3af639a9436d3c2fa127d62"],["C:/lmislm.github.io/public/categories/学习/index.html","cddff5c5786edab649761f0102e113ce"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","2fca4993e03975c33b1f1f6c9aa23782"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","f3e40f6939da0457ec35fe3a6ef01415"],["C:/lmislm.github.io/public/categories/工作/index.html","daedefeab2cef7d379bb690317033310"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","bbd776ce2201a3c29995dc4a1126289a"],["C:/lmislm.github.io/public/categories/日常操作/index.html","3596c3b1209fa0c08d6f7bf1162c63ce"],["C:/lmislm.github.io/public/categories/生活/index.html","38d4eb3a1a1fbe93aa94fbd8f5fe313b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","144d39e21a9a207a6cdf9f04d15aa86e"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","4bcba98b585e9a349fd218c15d4830d8"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","8914142372b7e80bdbd96ad386c2a7a3"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","d438aa16340fc0b45efba8e79ac37568"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","6126d4d957b247f24701141cc3bc303a"],["C:/lmislm.github.io/public/page/3/index.html","c1eee7111eaff6cf7b5bb9de64d73b8f"],["C:/lmislm.github.io/public/page/4/index.html","0bf3ca6c860011f4b69d3c10b5d26947"],["C:/lmislm.github.io/public/tags/Interview/index.html","ba1bc70380c007e1ff0e2b20a14db519"],["C:/lmislm.github.io/public/tags/JS/index.html","a445370b36e81e9a05533c3888deb8d2"],["C:/lmislm.github.io/public/tags/acm/index.html","97dbcfb211fab675c6fee07060e4dd16"],["C:/lmislm.github.io/public/tags/c/index.html","dd2f2d939f83c87ace60e93f3ba21062"],["C:/lmislm.github.io/public/tags/codewars/index.html","9d22dce820526ba5a6ca1eff667ebb2d"],["C:/lmislm.github.io/public/tags/css/index.html","555d5d55a750d5cccb7cdbb59be3f718"],["C:/lmislm.github.io/public/tags/git/index.html","646420d2203be39a427eb3298fd561d0"],["C:/lmislm.github.io/public/tags/hexo/index.html","e6c576e059098faf4c01a951b1738536"],["C:/lmislm.github.io/public/tags/index.html","ff3885baa420cd40ee5f9ccafcbe60bf"],["C:/lmislm.github.io/public/tags/markdown/index.html","3df7b85262e4b183806279f0f51030b8"],["C:/lmislm.github.io/public/tags/poj/index.html","cb3949251d1a8b360e703be37abecd59"],["C:/lmislm.github.io/public/tags/shell/index.html","900bd500f61d2a403ae632a437d0f2f3"],["C:/lmislm.github.io/public/tags/vue/index.html","2097e4f8724ae04f24a20a532e402a4c"],["C:/lmislm.github.io/public/tags/前端/index.html","19bb29150ed567e1d2250b15e256d6c7"],["C:/lmislm.github.io/public/tags/小技巧/index.html","be1ad3e6bea5424b165d79375e1d5a5a"],["C:/lmislm.github.io/public/tags/展示/index.html","a20d9a6e42677634000f820e7697380f"],["C:/lmislm.github.io/public/tags/工具/index.html","e999787ced8d89a3546fcf992bfef5c3"],["C:/lmislm.github.io/public/tags/感悟/index.html","64ded17aac1c382d4e3932ac7113ef21"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","3092764bc8896e0cae37a8264134009a"],["C:/lmislm.github.io/public/tags/编程/index.html","dccbe4ee7776e6dc736a4d65f10b4269"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","8e78736413d41197fada63702e01738c"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







