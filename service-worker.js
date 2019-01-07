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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","0d23dd91bf390c68830408194fec8454"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","4426587c9efac4c7a85b21ae097900e6"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","b11078a53def94d128ec25034899aa77"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","05723f56b95fd7cf5dd9697d7d6458ce"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","0947e05d1c68c6c03e47b08bff863941"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","fb5796c61da6ac8626e822b037b8ea07"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","8c46dcb16b7346bc4820ec1e66578bd0"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","a9f62992d8e64f1c801d93aac2cfeb87"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","7ca739d90655882535e74cbb237bc85e"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","73bcca21cbe8ec9d48211e213ab18e13"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","6ca5b2d874303490a882d94276ffb2e4"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","7dc2e56e16ea79ca75c2ef9f84e6371c"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","d50071e37b025dcd33338212fabf1084"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","b4f3784a309eec0e19d2a346c018b8f6"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","f6fd638ed796626cb4a0532a0f8bc993"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","fbec72ba97cd33ccee0fdf3a3a71f9a1"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","d8644b0c6536787328582e636c47062a"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f3289efee674f44e888e6237675f3497"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","82d8336641f895c9971c10a22419bb4b"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","f58ec79dfadebbe9a25fa51772d6d20c"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","d8c73d501e56074b8d9815a62c908c6e"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","fc52e2726d199e5376fa283973b66267"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","3badb969bfe59b3b28838290b9938730"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","c0174ca086887ddf0141ed8233248222"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","5cc106f9585ed64f78596808f3273ef4"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","465d93d9b525b19a30cc0da834f1f97a"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","ea33f7139d1cfc76636775b8c02c2dc9"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","2551de516d533a8e95eed5a07344f17e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","520f0131f4b2902e41e55b166c4f1448"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a583906a490e6471fc3fcf7a3ef25dab"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","7cf30f062d719f6e72bfb38d03e89d47"],["C:/lmislm.github.io/public/2019/01/07/2019-01-08/index.html","e5fb5770ebe6a23cce2cbe4697605fa8"],["C:/lmislm.github.io/public/about/index.html","2e1d0282f8eeb3967e1a9cf031a1b61c"],["C:/lmislm.github.io/public/archives/2016/01/index.html","20bc1295f484e056cf6c403d0af0cd10"],["C:/lmislm.github.io/public/archives/2016/03/index.html","78ad6a258340a2888f48b4078649bf69"],["C:/lmislm.github.io/public/archives/2016/index.html","78c4c96c714ed8493d3e7c2eddb55109"],["C:/lmislm.github.io/public/archives/2017/01/index.html","ef623defd257ef3c60c538996a39d29f"],["C:/lmislm.github.io/public/archives/2017/03/index.html","866013ff00ea413d4d78e6ab1ca5a258"],["C:/lmislm.github.io/public/archives/2017/04/index.html","6086eb0b7ef38fd77a88b3554201d540"],["C:/lmislm.github.io/public/archives/2017/05/index.html","35b5fcc940d776711862f093761e4717"],["C:/lmislm.github.io/public/archives/2017/07/index.html","ecfc2c6cab44fbb34782fea2b301629f"],["C:/lmislm.github.io/public/archives/2017/index.html","2f2aa66707ab2dfd464fcb5294206fc1"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","334c1a30eddc3ff00e06623ccab6d0c3"],["C:/lmislm.github.io/public/archives/2018/01/index.html","dd3e389f3f4922603480056a59f6001f"],["C:/lmislm.github.io/public/archives/2018/03/index.html","fa83f08cba42cf5639733df0dcc051ea"],["C:/lmislm.github.io/public/archives/2018/12/index.html","eb0287dc2be24daa2f6b9240dc54bbb5"],["C:/lmislm.github.io/public/archives/2018/index.html","3a81501c3a4f2c8547abd0f8aceb9377"],["C:/lmislm.github.io/public/archives/2019/01/index.html","f9304a57ae647611d74a3e98fd7eff94"],["C:/lmislm.github.io/public/archives/2019/index.html","d6cb28858f01779ab4256ff2f02ae295"],["C:/lmislm.github.io/public/archives/index.html","088d2e97ad04ef71049f7f1859a358d3"],["C:/lmislm.github.io/public/archives/page/2/index.html","998934688f5aafa7a27af283f1e8693d"],["C:/lmislm.github.io/public/archives/page/3/index.html","a4341f35901c086d0e8ed7f2dc10b0fc"],["C:/lmislm.github.io/public/archives/page/4/index.html","f28c0d0b9806d1a6a1b453442f44765f"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","51c2f8c1682e84144096445f2b445d1a"],["C:/lmislm.github.io/public/categories/index.html","b839193662a3eff9b5126404aa97e5ab"],["C:/lmislm.github.io/public/categories/学习/index.html","9530ea009bb991ed021f4f20579ce103"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","9e9fe3c8915d84e013d63bc421c1a1e3"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","6d7570d5a569ec699b2f4506c62164b1"],["C:/lmislm.github.io/public/categories/工作/index.html","cc482d35426cc5df0676c1ce2d24a816"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","4e3ff95e5d2cf2a1c50c8845fb0fad58"],["C:/lmislm.github.io/public/categories/日常操作/index.html","8f7fa8bf7d2a888da3335c8adab43ac4"],["C:/lmislm.github.io/public/categories/生活/index.html","f4b6fd9d47ab6155662386b6e08c20ca"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","ed116af728d64c0cd2ce844313b9bcf0"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","a665a1c6cc9384546310599598e2d02e"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","62eb2e4524f7e321f314e4cb9a8abeb4"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","9b19b66d4aa06ea11498ec77db773269"],["C:/lmislm.github.io/public/page/3/index.html","68ca5601ce5edfad0859ab93f3d9ebbf"],["C:/lmislm.github.io/public/page/4/index.html","e1c240ce0100cc9ca9ae3bc77462118b"],["C:/lmislm.github.io/public/tags/Interview/index.html","307d4b264e3cc029ce22502c56db5b19"],["C:/lmislm.github.io/public/tags/JS/index.html","0d0730b1ba197507fabb463ba2ac01bb"],["C:/lmislm.github.io/public/tags/acm/index.html","f4739b8bf524868d0b8b912545d94ad5"],["C:/lmislm.github.io/public/tags/c/index.html","8c2f6ac9cdf42d940f3825bfac937a62"],["C:/lmislm.github.io/public/tags/codewars/index.html","f97e3e045a972ed10c482c53e188bd90"],["C:/lmislm.github.io/public/tags/css/index.html","657f951562815e1c6114bdbf8a507fa6"],["C:/lmislm.github.io/public/tags/git/index.html","f8b218d0330c3e1e5e4afc9019bef67d"],["C:/lmislm.github.io/public/tags/hexo/index.html","73ac14a1aa6f2bb3be05860b71e5d3ad"],["C:/lmislm.github.io/public/tags/index.html","f92ba0a134172a77e542b572261be791"],["C:/lmislm.github.io/public/tags/markdown/index.html","f22cd240ebf3a77019a80614b51940d7"],["C:/lmislm.github.io/public/tags/poj/index.html","a1dfc25f5cda449f0f505e5957066f1f"],["C:/lmislm.github.io/public/tags/shell/index.html","673c47f32ed1e9a873b540b6bb4dd63e"],["C:/lmislm.github.io/public/tags/vue/index.html","364734af4d7d508f8c9c5ad765edc941"],["C:/lmislm.github.io/public/tags/前端/index.html","7eb218073aa2a1ceaefe63d5847f61ad"],["C:/lmislm.github.io/public/tags/小技巧/index.html","10e5d985eab08b5e8a4b388b9110650e"],["C:/lmislm.github.io/public/tags/展示/index.html","0b5894a5163df6fbb210e6f6ef2e9363"],["C:/lmislm.github.io/public/tags/工具/index.html","1872eaf57cc943f394fe6c3c1c383d24"],["C:/lmislm.github.io/public/tags/感悟/index.html","3b6aaed94906227af6a66d973589b0f9"],["C:/lmislm.github.io/public/tags/编程/index.html","720740c64974d64d2dcc7624657a9501"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","9393638ba5d74aa18dc7ce902a087f96"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







