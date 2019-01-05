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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","480eeb3a412f19125a79a5278b920e79"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","08e8a645eafafca574d38f41b9d69b0d"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","7556a1bd245b418170cfec40c11f0638"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3c28e2802937a7d609f265e36bd702d0"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","652ad84450261922bede2c3535246100"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","39cd644461bb6cc2860e259608eff555"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","8f302ddd6f8a733e3247731dc9276289"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","ef97246f5a2987d13a04a42252c38afa"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","8f4c91c963ac8928598091b184b9af9a"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","c3fb4cecc5f8bb78848df68d5b9bc6ca"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","9f85c9ef54ba7d72a8389db254a14c83"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","da765e0aac0fc9b83996c85195069dde"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","8afc3488ef3b6e7d8897f631220e0f47"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","f9db6fdd68255a3aa048e6aa0dab383f"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","25920a50fd6f374e90790ec4c87755fe"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","2b947f8b4c489d91e08df5aafdc56ef3"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","e370ac6606d2d36e186848262f14c15d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","9fb3e0bc517a7dbdaaada6624666d930"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","aa21f7b5610e3471eab68e883fede4c8"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","bf2b90352129e53016b989937e21b60a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","2eaff76a78241ba2ec5bd45f537218db"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","023aec0407df935ffbd655ed81a7249a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","13014422fe810f2baaa1b4c92301793e"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","7190942053f4d52e4dd95e70b7915679"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","d8c3c738e4b4fc097302a8f5647310bb"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","9af0436e1eced97acb68e6256cbeee4d"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","3cad8efea1dae38d8e10c692222ff7e1"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","c4fa71fd96df9340284d4fc4057f4a36"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","aca2b5e6c7af63dfdea9ac83db8cb9d7"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","3f2a9bf62cc3aa52e3a8d759e75dcbe1"],["C:/lmislm.github.io/public/about/index.html","49408d7f0680cbd53b91ead36d5cf17b"],["C:/lmislm.github.io/public/archives/2016/01/index.html","21134bcf5d9ea4134b30de39160d84b2"],["C:/lmislm.github.io/public/archives/2016/03/index.html","1958b65d105c00396a043d999620821b"],["C:/lmislm.github.io/public/archives/2016/index.html","5648c9091a8ce92625138af82173bbcb"],["C:/lmislm.github.io/public/archives/2017/01/index.html","0e9ec1bf8a02f91ade42ef84a927d1de"],["C:/lmislm.github.io/public/archives/2017/03/index.html","7bd824beecf5900358af0af6357f069f"],["C:/lmislm.github.io/public/archives/2017/04/index.html","129feff09163cec2c826a74d48537eec"],["C:/lmislm.github.io/public/archives/2017/05/index.html","98b8a58b38fb1fa517f115cf6d6bab86"],["C:/lmislm.github.io/public/archives/2017/07/index.html","aca647a17ad5fa0b47f11175372c2449"],["C:/lmislm.github.io/public/archives/2017/index.html","bdaf16ed1e9239cf81d385813674d319"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9eca5bf1597464b4137f6d6c1d58e4bd"],["C:/lmislm.github.io/public/archives/2018/01/index.html","bcf1db2c229a80487f1f27ae9b02d096"],["C:/lmislm.github.io/public/archives/2018/03/index.html","aeec4bcae0f635a95697f81a08096f26"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c7702152db0a5271c0652881874bb5cb"],["C:/lmislm.github.io/public/archives/2018/index.html","737b93bf3ffbb378429760a2e21b901a"],["C:/lmislm.github.io/public/archives/2019/01/index.html","c09ade9ee76ffd8784791ded52a0f5be"],["C:/lmislm.github.io/public/archives/2019/index.html","e4e7168ad5815888d72e2db78c6bf6ac"],["C:/lmislm.github.io/public/archives/index.html","ba07e73c939629c82bbf994f20f54d4f"],["C:/lmislm.github.io/public/archives/page/2/index.html","011fce89f6a52dd423e21926f131520c"],["C:/lmislm.github.io/public/archives/page/3/index.html","55838d2a2251329cdc55168bcc16f248"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","5268dd384c1ba1351cb94cde1e260222"],["C:/lmislm.github.io/public/categories/index.html","30e0353d50fdc14cb8bd645bf95c8395"],["C:/lmislm.github.io/public/categories/学习/index.html","177a070976b2fc92fd1321ff1c2275eb"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","6d7dfbefca366c2848f332dc17cae8d7"],["C:/lmislm.github.io/public/categories/工作/index.html","ce4c284f05b7dde872a2d7d5d843ec30"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","e54975e1657a9a2fdf3709cd191e6309"],["C:/lmislm.github.io/public/categories/日常操作/index.html","d8c051f1aa63e6b4f9506778105f3633"],["C:/lmislm.github.io/public/categories/生活/index.html","76ad01920d9bd64b83a48191d9832b7e"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","6d73acd919a7da1ce632f8836db0f7dc"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","d54b2c6981d2dc99f96b48bfca81b5cf"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","10577183e1d419a74e058160768b8d65"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","367a89667707f659ca65e17b0c39e576"],["C:/lmislm.github.io/public/page/3/index.html","f6dab54017e30a946dbb1334d0c70639"],["C:/lmislm.github.io/public/tags/Interview/index.html","b5606be592ef19aa68f71cb3df3c30fa"],["C:/lmislm.github.io/public/tags/acm/index.html","2b9d6c0825a0b502dd15f6522863579f"],["C:/lmislm.github.io/public/tags/c/index.html","3bd701445e7454167a32ff12e90f8c9e"],["C:/lmislm.github.io/public/tags/codewars/index.html","c477221e9dcea17b3451dc8b3ca3ff61"],["C:/lmislm.github.io/public/tags/css/index.html","ea16bd6b13a13b0dd2fcc1864414be00"],["C:/lmislm.github.io/public/tags/git/index.html","1bb51c857a340753e66cec15e9052fd7"],["C:/lmislm.github.io/public/tags/hexo/index.html","6dd2d8019a17f96fb2fd436f8598632f"],["C:/lmislm.github.io/public/tags/index.html","0dfdb86a273df3e8f91766c335a8a77e"],["C:/lmislm.github.io/public/tags/js/index.html","ef8785daf7ec207a4a69f9bf640ecb3f"],["C:/lmislm.github.io/public/tags/markdown/index.html","dfebbcdcc58386a2844257b89778da0f"],["C:/lmislm.github.io/public/tags/poj/index.html","22819064f45dee6b04bf8ff6d8d91918"],["C:/lmislm.github.io/public/tags/shell/index.html","39a90e929b5672f6d07290df6741ece1"],["C:/lmislm.github.io/public/tags/vue/index.html","bd34ee3ce7f85b5c8dbcef95af5a0cb2"],["C:/lmislm.github.io/public/tags/前端/index.html","4867739b43c5ac7c898b630b37443262"],["C:/lmislm.github.io/public/tags/小技巧/index.html","9e390944d79c9696b7a33d144acc8dc4"],["C:/lmislm.github.io/public/tags/展示/index.html","b3de965ea9628e826d0741d37d76da3b"],["C:/lmislm.github.io/public/tags/工具/index.html","ed1c262eeb96c31e9ba7e02eda617799"],["C:/lmislm.github.io/public/tags/感悟/index.html","375d72ef8419e51dbca378f6513ad52a"],["C:/lmislm.github.io/public/tags/编程/index.html","410590dcc73314803717a2ebf08708d8"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","a936790e93576d5551d4b8ee0686bba4"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







