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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","08688a163d3e2602f2c83e3061a1dca9"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","68cce5f48d920bb9b62b597b145ec325"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","bb524366c322b9348c03778b6dad3dea"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","31b70c383ba0a939b93051675e256db6"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","e810f43ee7acf98036f88dd367941251"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","887fb4b6e116bc3e3f4687641b644fc5"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","81e3402315e2ba340ebc5f630ab9d8ca"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","e86b99be7f21fc48abec058fda70134a"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","7e2616fb7738e0c38423f9c2d3be9bf9"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","e1304d38c058a20e8dbfc73f942d9446"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","9805e80e21d6ec8cd3a2967f6fcfaa1c"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b44c3cf079318b2ac41a8dfc3243ba42"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","a07ce0de8a06ded39411b248fa5404a9"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8aff9ecbad83dd48aa6d8b75f3a46039"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","d33816ea71f4828d945e559f7c2f1d11"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","42cdf883dfad32d8703f20ff7a866633"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","644fbe9153910ed10d2d1e1d2b17b3b2"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","0c835b69d0c2ab2ccc4ba0424f17fbee"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","edc231d9018c7b53d1a2627f99548f44"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","3f8e583f560f148a2ddab2e528c448a3"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","d7e192921720f28be965ddce69590ba2"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","75a2dce882a94f297afdc284481dbafd"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","5b600c4312ffb0be61ff673dbb80d5e4"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","3a9a955019f5f25937fddac5d2da38d9"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","f7f0aa614a2612465e582287f9785a6d"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","747ae5d825c8f72a62e949cc9934686b"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","79803f3cf60042f43d8644ea6b6b35e1"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","1b6a2476b1ca8027bda89539b32e529a"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0af232eb3636f67ee643482d80941ba8"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","39ea9ba70c3acc54b1f79b352d4ad80e"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","9c3bfc304c760d813fd4ae70323e10d4"],["C:/lmislm.github.io/public/about/index.html","2223a749008999653a559f014c889785"],["C:/lmislm.github.io/public/archives/2016/01/index.html","e205085369596b62a8a4323e292e1516"],["C:/lmislm.github.io/public/archives/2016/03/index.html","a40150180af2e1d0e2a05256f0f8135b"],["C:/lmislm.github.io/public/archives/2016/index.html","d485491c39c21f01b2189cb4350bce9e"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e1dedc49ceac447f537f0b6bb7bbfc2d"],["C:/lmislm.github.io/public/archives/2017/03/index.html","712568d7dff6192bb6815cd6ea61359e"],["C:/lmislm.github.io/public/archives/2017/04/index.html","43f0cb5c949bfe1c90561dbb7f90c3b1"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0465b54b686d87f915bf1293427d77a7"],["C:/lmislm.github.io/public/archives/2017/07/index.html","f98c009f9da41e452e0b8778eab8be9a"],["C:/lmislm.github.io/public/archives/2017/index.html","61fdcf61f28704893626c24e3c79c8c8"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","dec0d7f6d1e7c92731694e2451227150"],["C:/lmislm.github.io/public/archives/2018/01/index.html","86274f29a7cb05a14cfaf4a92a6488dd"],["C:/lmislm.github.io/public/archives/2018/03/index.html","14909699ec21d7653604c6a908a791b6"],["C:/lmislm.github.io/public/archives/2018/12/index.html","ce99d2e07984d92127228b913cb0cfcf"],["C:/lmislm.github.io/public/archives/2018/index.html","e1e4e3c6f87cbd10436ea7f4c8e70d9b"],["C:/lmislm.github.io/public/archives/2019/01/index.html","b78ccd54e83bab70894a314ef0cfaeef"],["C:/lmislm.github.io/public/archives/2019/index.html","07769d2afaea1d721d78b68e2967190d"],["C:/lmislm.github.io/public/archives/index.html","8d7e712d53ef90acf19858c26068a697"],["C:/lmislm.github.io/public/archives/page/2/index.html","059cb7f394316ad5eb348d6e70ab01de"],["C:/lmislm.github.io/public/archives/page/3/index.html","f278078ca657a1e94edd55b1555491b0"],["C:/lmislm.github.io/public/archives/page/4/index.html","fef411c6ca990fa0dd90d1c6fba06fc8"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ff2fd26512d953549cd14ba6e89dccac"],["C:/lmislm.github.io/public/categories/index.html","f0adc3a570f038e4b260d6315733b255"],["C:/lmislm.github.io/public/categories/学习/index.html","e78675e57667bc96ec30673230b9ecf0"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","48a092027c32e4d5f504921eaeecf668"],["C:/lmislm.github.io/public/categories/工作/index.html","427547d1974a6d1ff369c6c62d25ebfb"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","1ef16a079b678ca1cd3cc02ef506a801"],["C:/lmislm.github.io/public/categories/日常操作/index.html","cbb9bfa020ba5bdc6947abd2c2b4e688"],["C:/lmislm.github.io/public/categories/生活/index.html","7e5b2d514c7603987a18b979250d7afc"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","a36c06c6937a195ac26bc213dbb0b416"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","23b9dd57078008328332002dda40395e"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","27e7e5c597099be7f228c14d9484bbf6"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","f0b441317ef97d02102c4a1721581a69"],["C:/lmislm.github.io/public/page/3/index.html","14e75776ffe426b6e63afe4891ef3df2"],["C:/lmislm.github.io/public/page/4/index.html","e572cf77cd1dabd488a3cb89bedb31e8"],["C:/lmislm.github.io/public/tags/Interview/index.html","a55cfcefcd4da70371f0bf434c5c0b8b"],["C:/lmislm.github.io/public/tags/acm/index.html","72d77d1530b801f2d648576b9562a66f"],["C:/lmislm.github.io/public/tags/c/index.html","51c1f81bbb234cf19ddb5ea777ea04b0"],["C:/lmislm.github.io/public/tags/codewars/index.html","95b75f799b0223f83c7c4e72c25c95e3"],["C:/lmislm.github.io/public/tags/css/index.html","f208b6b9cd79755cd2fa7c5ea0fd072e"],["C:/lmislm.github.io/public/tags/git/index.html","46741a23cdc8f52745a4ae45dbe505d5"],["C:/lmislm.github.io/public/tags/hexo/index.html","84dc00d1f7e364cad03cf26fd343c018"],["C:/lmislm.github.io/public/tags/index.html","e0e2fd0aecd090af60e8bf6651082507"],["C:/lmislm.github.io/public/tags/js/index.html","eaf3897d6f0b24ea8727b8d7f72bc3a3"],["C:/lmislm.github.io/public/tags/markdown/index.html","5d95d74517e499f9578310691e0df75e"],["C:/lmislm.github.io/public/tags/poj/index.html","c1738b760e0492b7408b855576135dc9"],["C:/lmislm.github.io/public/tags/shell/index.html","c57a6904d18f14776e4dba593ed9942d"],["C:/lmislm.github.io/public/tags/vue/index.html","d278f42e58125931133cae6b5370ed15"],["C:/lmislm.github.io/public/tags/前端/index.html","daf52001687e0a12bd6095f822b66367"],["C:/lmislm.github.io/public/tags/小技巧/index.html","f6e8397f0ca6fc81087a1449a9a4c713"],["C:/lmislm.github.io/public/tags/展示/index.html","aa71067369eb6a9084dda1e3ddae1ce0"],["C:/lmislm.github.io/public/tags/工具/index.html","7f55aa204496aad2bd0ac73ed60aaced"],["C:/lmislm.github.io/public/tags/感悟/index.html","3ed2567e475c83bf201e078120055fb9"],["C:/lmislm.github.io/public/tags/编程/index.html","630feac0a9e110d6c01a2f76545e3567"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","86dcaa9ce87db0547d1c7ea85c095f78"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







