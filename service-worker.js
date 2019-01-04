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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","792b5979f8f55fc1ce2cbf21fab922b0"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","b42298a97c8becffb583e5b23b6ff65e"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","99d4f3a928e1fedaadcbe18a05583e36"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","514b6cf83552a626f07b087adefee56e"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","0e87b92ba9727637e45dcb678469d53c"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","add18f5ee1553773bf5841510c12be3b"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","387feb428953c0af4cc1a2ba9c4314b1"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","77c12297bf17d9d4a27c9a0ca27dbf53"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","6999671cf70a7a70180e7c980a6de7cf"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","48f4736a65da5ac63faa0e8dc22b047f"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","490373a2772356cc0158d77a4457d53d"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","04f8ea837b887bba372f59fe3d4991a7"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","16c1c95d894837a67cb6f85dbb3e36e9"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","73c724f26937d677690952597440259a"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","69354571dc0f74df8d0da44f03fd21c5"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","9938615111aaeaa8091139b2455ec328"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","7a90aa72c79eb65fea4c59d53a315c4c"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","ff4f9220fb6b87d85f9801bdb3096646"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","455d629c7fdccf8e5e2fba2cf0b06289"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0582d27cc6155abc2e426c342a10afad"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","1abf194158f91c0345b9672c093b5932"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6250399e57da95b42e0e19d2764c0c39"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","68255d99af11f8d5907fbe758add0a12"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","14c8ffb8f33741f2b81cfba9c2817a72"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","455e40dbd99322b0c320e1cdd9dd189e"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","73a05ec79835dfe50c2fe0ada73a800e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","639e9eda55778c77be1bd040d0c34177"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","416ef8d8167350da8bdc176049641f22"],["C:/lmislm.github.io/public/about/index.html","0865219baa9c3eda602cab0080fd301f"],["C:/lmislm.github.io/public/archives/2016/01/index.html","2568c117847b82dad6ffe122f526bb2c"],["C:/lmislm.github.io/public/archives/2016/03/index.html","4d82ab570d3f2f31b108bcc40eb8b980"],["C:/lmislm.github.io/public/archives/2016/index.html","8eee84e1c50cc913b34eaa9aa28f3901"],["C:/lmislm.github.io/public/archives/2017/01/index.html","74f845ff68e72326f17421acbde9d4d4"],["C:/lmislm.github.io/public/archives/2017/03/index.html","a8345183f79d9e5f55ece67235c3ce9a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f88d1e31de30d2bd354ac9f2c1346738"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ec283b35d86659b3c32e0b6a8d393b43"],["C:/lmislm.github.io/public/archives/2017/07/index.html","381bc1ba1ba4be6fbb7e500dc2f1b476"],["C:/lmislm.github.io/public/archives/2017/index.html","dfa8b3add7c7c42992095d7c3ab792b7"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","ed8f69fc615921a0dc6827e7e1776139"],["C:/lmislm.github.io/public/archives/2018/01/index.html","692f60f0c61987b284986d4ac939afcd"],["C:/lmislm.github.io/public/archives/2018/03/index.html","a693f73462fd3ca1137ce752780e6f66"],["C:/lmislm.github.io/public/archives/2018/12/index.html","64c2839189ce08484cb69d8436736d96"],["C:/lmislm.github.io/public/archives/2018/index.html","50a742d08b11a2c48b5836d78a2c9172"],["C:/lmislm.github.io/public/archives/2019/01/index.html","2d15ef3371bd7d9ae8dddbbc1af8ee78"],["C:/lmislm.github.io/public/archives/2019/index.html","6b2bd82798807d93d3d4f2c91ff3fc74"],["C:/lmislm.github.io/public/archives/index.html","1012c8f46174648e1fc8acb16de0f8ef"],["C:/lmislm.github.io/public/archives/page/2/index.html","b5f3b8d244c317a2d37b8840f90ccf5d"],["C:/lmislm.github.io/public/archives/page/3/index.html","3c7238d1bd6752989a53a104d42b6815"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ba79254c3b68efd88a209f16acdb11f4"],["C:/lmislm.github.io/public/categories/index.html","458cba376feb0a793780de73f902834f"],["C:/lmislm.github.io/public/categories/学习/index.html","7dba78635cfb9a91ad00b8177769945f"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","ef3c12ef36e90fe2e727666511fe3af5"],["C:/lmislm.github.io/public/categories/工作/index.html","85a978851e01395da1cf58acf5899058"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","8e7018f005528f6096093010965cfb75"],["C:/lmislm.github.io/public/categories/日常操作/index.html","4557bb255d7278b225cd589ae9d009ba"],["C:/lmislm.github.io/public/categories/生活/index.html","a2c2823e38b3559b9192f03cb2487339"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","1a5e5df1f1b6f6cd1ccbb16a05a7587a"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","4f421ca689b9acfb8f9c6fd27a630103"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","340b5ac9f4e2ecdc1a13070ae71cd544"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","bd08b5ea464ae5a59dce7793f388f364"],["C:/lmislm.github.io/public/page/3/index.html","168f6c5f93737d7f758a47256466c793"],["C:/lmislm.github.io/public/tags/Interview/index.html","856cdc700b1ac4d01740465dbd962fe9"],["C:/lmislm.github.io/public/tags/acm/index.html","f4b340c4606a9857896ed00806a8f1a5"],["C:/lmislm.github.io/public/tags/c/index.html","6a28c3ad01753650ce88a7beaf81f233"],["C:/lmislm.github.io/public/tags/codewars/index.html","cad517273706b8985ca643c80ae4694f"],["C:/lmislm.github.io/public/tags/css/index.html","f363ea4f0121a678aa33a2ac226a05ec"],["C:/lmislm.github.io/public/tags/git/index.html","64087253e5d9b6d4531eabb87028d0d7"],["C:/lmislm.github.io/public/tags/hexo/index.html","625376ee73a210e155cc3aaa6dc4aa31"],["C:/lmislm.github.io/public/tags/index.html","dd6c34974d6d05a21256846916de6cf5"],["C:/lmislm.github.io/public/tags/js/index.html","1ff92345750fd25fd76b17de2f278387"],["C:/lmislm.github.io/public/tags/markdown/index.html","3b1ac45037ecf06c1dc595c268fa0276"],["C:/lmislm.github.io/public/tags/poj/index.html","f72d5d5f20731093e1152c195043103b"],["C:/lmislm.github.io/public/tags/shell/index.html","b084fd7f8779b48faf4d9e317cd3dd04"],["C:/lmislm.github.io/public/tags/vue/index.html","cdddb3ed0b6084f2a2f6e8b1ab31bb1d"],["C:/lmislm.github.io/public/tags/前端/index.html","b0807b3442fd01f0181e7cff24af741e"],["C:/lmislm.github.io/public/tags/小技巧/index.html","4f4e33de2f616a97d7bb950223848025"],["C:/lmislm.github.io/public/tags/展示/index.html","87aa02029545b62f7e7340cc3769a03b"],["C:/lmislm.github.io/public/tags/工具/index.html","04fa62f1a38984071ede84e7de1fb430"],["C:/lmislm.github.io/public/tags/感悟/index.html","f3c91b09ecd5383569f25adb04f675cc"],["C:/lmislm.github.io/public/tags/编程/index.html","0e8529bd3c695b354eac77ec720cf441"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","22f39e8e1da8ed603f0fd0a63575ec47"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







