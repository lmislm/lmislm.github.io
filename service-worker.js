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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","f771a58757feae69ef83b12dbe17047c"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","835fad419a587fb1c51c8cf6567ae9a1"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","d61224d498f2fae4d1971b3fecc0f2f0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","81012f54e35513a04bf805702eea7224"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","eda4f3ebd8aa9af98b64dc8ca054cd1a"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","6d72b8f35b5a7bc52b60754f90c94e26"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","be1e05c3b4132cacfb6d8aaf4fdaa8bd"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c14f59a7b4b2e6738747c76918aebf04"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","a40f716d9b5f7b91cef8f6504e42d707"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","8cbc0460da23bc08194433fe50ec0f5e"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","fd986d672f01d850c82ad928a134284d"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","ecce52ae022684ad807de2e757fd7177"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","ca0fc7f79069953939361c3a4ee45526"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","e0e9566fcec0aebf9a3b87b52823b574"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","cb69d5e2edf1458e53a3502cfe613ffe"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","cce05d76417ef4380902104645ea40bf"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","5988e53a15ab700e234e3f0786359344"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c3b614f5413c3d1565d1314365eef7f4"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","8fedee51e1ddc2f2817ee6a808d80e36"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","76be7f5a9cbc331270dea29885aa7f80"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","daa9454338eb001aa3467993b88b1d5a"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","7d79125ecbd01a0a758d2a251b557f78"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","6d7a5dc49b497c83ab21a3befc677e72"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","12f65a739dc57762d139388e67b14cfa"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","42daef59c4283b15c77f325969c2bec2"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","0de8d8b97a1050f440c70f9655c1f561"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","a2b6767d6cf88963c1f4c9a479deecc9"],["C:/lmislm.github.io/public/about/index.html","91ad6164cee711620e120873f639743f"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c278a65c3ef45dc4e39488cee98aa6bd"],["C:/lmislm.github.io/public/archives/2016/03/index.html","7be6918665bf10a9945a3315df91fec7"],["C:/lmislm.github.io/public/archives/2016/index.html","d85e5140b1ba6a255846a4249ceae838"],["C:/lmislm.github.io/public/archives/2017/01/index.html","efd65981f55bfe3f81524e87ac0239f8"],["C:/lmislm.github.io/public/archives/2017/03/index.html","1c5a24cf6a628e12119987bc21a14934"],["C:/lmislm.github.io/public/archives/2017/04/index.html","c6591d39443a5fc5b04c903fc3a80b42"],["C:/lmislm.github.io/public/archives/2017/05/index.html","d80d3dc6bd7bfab63cfcf2b45db0f95b"],["C:/lmislm.github.io/public/archives/2017/07/index.html","4cee46ec9e71c303e847fb6487653d97"],["C:/lmislm.github.io/public/archives/2017/index.html","08da228a39c5ca2593bea888d3d63fc6"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","d12f70f1ca2616b6083f5c1e0f737bb7"],["C:/lmislm.github.io/public/archives/2018/01/index.html","99896a484a07e62539e7930641d04d18"],["C:/lmislm.github.io/public/archives/2018/03/index.html","e2a7e7e323b058a1d7dac0c435310dc4"],["C:/lmislm.github.io/public/archives/2018/12/index.html","721d9bffba967c6964916791f2a8896e"],["C:/lmislm.github.io/public/archives/2018/index.html","76a7e2aa475e0f73c5ac80e8621ac930"],["C:/lmislm.github.io/public/archives/2019/01/index.html","1ce0e4c8e8489e7223c458728856578c"],["C:/lmislm.github.io/public/archives/2019/index.html","6d2e91826b674a85126cb6925e1a96c8"],["C:/lmislm.github.io/public/archives/index.html","6afbbf603b282954f18527570532c3d2"],["C:/lmislm.github.io/public/archives/page/2/index.html","49ef92b1c76b87ec600b45a005e7e1b7"],["C:/lmislm.github.io/public/archives/page/3/index.html","5a7df1d914f24c9f158339ec78d6436f"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","08aa03d9a2d4180555c1a4245a04d27b"],["C:/lmislm.github.io/public/categories/index.html","0a1932e8746d2976d469b8455cc1cb6f"],["C:/lmislm.github.io/public/categories/学习/index.html","80497d71919760cd1246606cd7d15c62"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","592efcd58ec5f2cad3d78fab70e871b1"],["C:/lmislm.github.io/public/categories/工作/index.html","27c20ac8329e69a3fdc1dd716a641b5b"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","ecd2c30b5b4334c15e7a5e97b5b08478"],["C:/lmislm.github.io/public/categories/日常操作/index.html","4b21420c967e63ecba98629c49203b3c"],["C:/lmislm.github.io/public/categories/生活/index.html","d3ca1a6c5c2a81cc685626f75a7bc494"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","1bcbd0b55397841f076c8136211b670c"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","8ddd63b6a80fdb0135fae9a07a210855"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","8a7609c7adadf6d74213250558140554"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","6d60413b37d08b07833bf2c65cae26d3"],["C:/lmislm.github.io/public/page/3/index.html","cdf013c5a1b5d7fd003b26d00021ca12"],["C:/lmislm.github.io/public/tags/Interview/index.html","155bb5c933c58fa4613f683053365bef"],["C:/lmislm.github.io/public/tags/acm/index.html","494bc46d2d7eabe5708200c9e5177ba8"],["C:/lmislm.github.io/public/tags/c/index.html","fd6b2787ab9219e0b5207134abb36a80"],["C:/lmislm.github.io/public/tags/codewars/index.html","f31b68b446a4f2eaeeb349866e532f79"],["C:/lmislm.github.io/public/tags/css/index.html","d9e142e36f69384e285e15bac633e4b0"],["C:/lmislm.github.io/public/tags/git/index.html","07e2e9ec141080a85a0b44a6e32e43f1"],["C:/lmislm.github.io/public/tags/hexo/index.html","b1d635a22bbf06b78814b44042c42a0b"],["C:/lmislm.github.io/public/tags/index.html","12b7c2ee257c45bb82cc473caa52fa04"],["C:/lmislm.github.io/public/tags/js/index.html","a6428a12702e72264d28f5c15ee802f7"],["C:/lmislm.github.io/public/tags/markdown/index.html","64448e743f9a154b5973838c6f08e098"],["C:/lmislm.github.io/public/tags/poj/index.html","5d040a79242590c1b263fb79101c8669"],["C:/lmislm.github.io/public/tags/shell/index.html","27783f8c207d96459d20b340c79b82c8"],["C:/lmislm.github.io/public/tags/vue/index.html","87a8437cf168bde4e17fa8c2ad308f98"],["C:/lmislm.github.io/public/tags/前端/index.html","bac4b584557393e91995633939067ce9"],["C:/lmislm.github.io/public/tags/小技巧/index.html","aa845c2243e24ad53276c1e2dd2b3a8c"],["C:/lmislm.github.io/public/tags/展示/index.html","d5826f05b6cfe6871ce9d26cbef6c395"],["C:/lmislm.github.io/public/tags/工具/index.html","bcede3a704e7a52c1d57158822941466"],["C:/lmislm.github.io/public/tags/感悟/index.html","beeeadbde6c17859cbba3b13b44fda52"],["C:/lmislm.github.io/public/tags/编程/index.html","b00d4deb970b0cc6b5f7a2e15b6cb2b7"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","a3aa7162aa8ffde3a08ecf0204c58be5"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







