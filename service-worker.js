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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","f262650802d85c5ba127823fa5107b64"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","85b0e7f3fc2a10058a9d20d7609a5f25"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","72c0fea16c85a992db41835e43cf81be"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3ea01b6a5a37dbb3692647ac797daf9d"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","7ee41fc5da5196e24dab5e12c4a32054"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","a93a9dfa0ff8dfc67192b4fea508cbd0"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","d111a03e41504b66c5db8d5bc0d82a66"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","56f509ec48a52d5d4992db551e3187ff"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","c20cdba798fe618641aec55c699537f0"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","972811d417c39d653eccfbae82726bf6"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7f0224738c3fc1b362295b664571853e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","62ac6d9761f34b959b2bed8866ccaa83"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","c0bac5cd1d287dbbd2556f3193e860d7"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","033b4b1489e0443daa9387ce286a2411"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","43873b0a863376141c988a9ddb6b9772"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","2b78dc2d39ff79d0ae4822dd4ee596ea"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","1ad93249f56f2a6f31d9b622183e092e"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f7dbb7ef3be3d29cd980ea6ba01ca46b"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","b0d398d3a7bb3e29efb84223e9f22365"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","4397c47f0a4c0347e0da58e3980b7506"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","e3c096667f9c7fce04ceb47f0df31049"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","129c278eae64d595dd3f6d5e8c4926b7"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","3326dbbc3ec509d8be1e95ec5dd491b3"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","150a4c81a831bd2b48dc3276b18484ac"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","a7e847232dda2097b3fb193e6e787a89"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","8a41bff87e19c55fb9686a6654db00e8"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","702fff1c7dc4543cc737074fe13b5f30"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","bba344dad89dca594433e45f184534ea"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","17a2f84cafeea9aff8cb3a536189c88b"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","7d9037cd655c1f4f1ad29937483fd6ad"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","1fa284bb531bad5ba18379dfd246a31b"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","2e61c9504739cb8ea59d5019cf3a33be"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","90f22dbf6d9a233c27afb6da21af9f05"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","0e2ba2a36dc3ee931fe2c20c8a38017e"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","660037009291cfddcb6d3c2075ffb7b7"],["C:/lmislm.github.io/public/about/index.html","fd6fc1a8cfdb1dc2e0bad3309e5f16cb"],["C:/lmislm.github.io/public/archives/2016/01/index.html","5864f8ab827633a1ddfcb61690458b78"],["C:/lmislm.github.io/public/archives/2016/03/index.html","4c5c9b3fbc2558f50eb033406c8c5e34"],["C:/lmislm.github.io/public/archives/2016/index.html","4934feb836907279b3b84ad0762c6135"],["C:/lmislm.github.io/public/archives/2017/01/index.html","9be351750e44e67fa9efb1e9de6500e7"],["C:/lmislm.github.io/public/archives/2017/03/index.html","5ff03572d73fef1b45416f5aafaeb14a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","cee9d0caadff40d886b9d2d97c6b0c78"],["C:/lmislm.github.io/public/archives/2017/05/index.html","74f6ddd277b867f735ea9e4643439971"],["C:/lmislm.github.io/public/archives/2017/07/index.html","cc6c1a0a6b84b6df0137b272aa0fc442"],["C:/lmislm.github.io/public/archives/2017/index.html","a045d981bac4735041c91a533d3aba38"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","3232bf4af9e80bce34b57404b1561340"],["C:/lmislm.github.io/public/archives/2018/01/index.html","21eb10a059e85c8b0b9c9e01053d99fd"],["C:/lmislm.github.io/public/archives/2018/03/index.html","8fb536d315c08af8db12c90e0cfdbad6"],["C:/lmislm.github.io/public/archives/2018/12/index.html","25c4ef973f3c91ca24db7d8f41ff88ed"],["C:/lmislm.github.io/public/archives/2018/index.html","5dca7a20fdbc112f089197fdfda8c4fa"],["C:/lmislm.github.io/public/archives/2019/01/index.html","e7b3843e431e86a5b3d27f5a4dfeeb77"],["C:/lmislm.github.io/public/archives/2019/index.html","2162731348543a87a9e270285b29a47a"],["C:/lmislm.github.io/public/archives/index.html","84e6b5e4a8a40c29e2d2854782330e09"],["C:/lmislm.github.io/public/archives/page/2/index.html","1f736c958adc564e29d70dd7854cd320"],["C:/lmislm.github.io/public/archives/page/3/index.html","622d11eb660ad6b5b5e5a074d2ceb86e"],["C:/lmislm.github.io/public/archives/page/4/index.html","488e711a273d304ab13b89d1bd0f34bf"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","8d3519ad57bcd66ae41e43177d6998d3"],["C:/lmislm.github.io/public/categories/index.html","88663825b93db86851ebb95855276214"],["C:/lmislm.github.io/public/categories/学习/index.html","f0f68490ab177adfcb332bed2ba594f4"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","8a20ac9602b39a71ac7e1459e1fd3f63"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","8fa2066197c38a879c0fdbab4d0ed4d6"],["C:/lmislm.github.io/public/categories/工作/index.html","915322cffa13a840695ec02fbb460331"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","3a7d157cac9d3f69b2eb1008e8b3fc04"],["C:/lmislm.github.io/public/categories/日常操作/index.html","a7d24d9f9a10ed3046974063e31fb361"],["C:/lmislm.github.io/public/categories/生活/index.html","c0a2c7b0c2a61a140ff6562a0619b087"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","fb8ddea58bf52d94b6f8f9ac02fa527c"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","f249d4633c5037b85fc32425e6377c88"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","8791b4baac5106a04384c78d0d5f6397"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","60daec4f689bd5cfd29284e16a12ee17"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","9b09ca36afd80211d76e8bbcee82eecc"],["C:/lmislm.github.io/public/page/3/index.html","dab1814eff3edccf22e7dbe766fc5c0c"],["C:/lmislm.github.io/public/page/4/index.html","c5e1c6554613f686b2cb9499cb42139a"],["C:/lmislm.github.io/public/tags/Interview/index.html","3332d12cebc4e9676d54f0d0e1a7abe9"],["C:/lmislm.github.io/public/tags/JS/index.html","43c591db3c9b9520336fb297a9e35d75"],["C:/lmislm.github.io/public/tags/acm/index.html","efd89480eb569fc1f2913983929f35f0"],["C:/lmislm.github.io/public/tags/c/index.html","b11fa45317c7b802ab2c3be0b1f1c6d1"],["C:/lmislm.github.io/public/tags/codewars/index.html","b00d41aefe49a4934e9c171737f24112"],["C:/lmislm.github.io/public/tags/css/index.html","c4993738bdab7d2058589380024e56b6"],["C:/lmislm.github.io/public/tags/git/index.html","7706d691bc1b61ca765d3fda29fc8f59"],["C:/lmislm.github.io/public/tags/hexo/index.html","0e3e87b203d578d6676904296a9be2a6"],["C:/lmislm.github.io/public/tags/index.html","4ec9383db1947949e7e8b9269d9dc872"],["C:/lmislm.github.io/public/tags/markdown/index.html","f95f718967a4f2da02d7b8a100e6f305"],["C:/lmislm.github.io/public/tags/poj/index.html","5983ad7ba29a8b5d3cd93ed2269f4077"],["C:/lmislm.github.io/public/tags/shell/index.html","acce5010250b1b0a0fa8726dfb42b367"],["C:/lmislm.github.io/public/tags/vue/index.html","ab84c4cc0008742233f7e84f5e46b7ee"],["C:/lmislm.github.io/public/tags/前端/index.html","16e783b380ec5db06246c292d609398e"],["C:/lmislm.github.io/public/tags/小技巧/index.html","715e199ba5b291809633c426f1884342"],["C:/lmislm.github.io/public/tags/展示/index.html","cccce1cb9c337c9d000e33ab40ba13af"],["C:/lmislm.github.io/public/tags/工具/index.html","b55099613349ff5438b26f5f597931ee"],["C:/lmislm.github.io/public/tags/感悟/index.html","23bba0185d253310bcc254a0f198d1fb"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","657db8fcc600c74245217d02a36d3bc5"],["C:/lmislm.github.io/public/tags/编程/index.html","94f0a9c71e35e77f9921a2af37fce7ac"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","845cda0b2f42f951c30c99e8c9d7fa04"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







