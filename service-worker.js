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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","bcd6e94da1f24e5ff8faf0351f954469"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","035eaa08beff8b307d62ce997b31519c"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","3737585ad663e214ef2b7371e01c9a24"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","cf589c1c3d87dc219c33bebf54e07b82"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","3cc14c3752c2b0ebde18d0230fced32e"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","b55eca96284da80ccfb87f7bdd75703f"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","49409ba940aa6150bf78c4253bfdf348"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","b685e2383d4f29e3a7b88543dea165f4"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","5f5f4f244806021c0bce4901cd5db46c"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","2ca7392e7876c669e4a0c7bbc940b3a2"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","f21cffb0fb86e74ce14693623ac6f40e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","3445f8f593f31080315be3372becfe75"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","07267212323ac526214f3ccfaea3632c"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","a2849561212a574eb002b14bf2725078"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","aed70926ec9644d4fa359f167cb6345a"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","4df335ad8f62744519db704a06556d34"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","e81c4a52a7217b407f87860379c6cd1d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","8d2a3bd656cef19dee40be3d206d8e0b"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","c31d2716f6b5b01708f820ecf93bc09a"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","8e34fecc211e66a7ddc31a692c6326fd"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","36a191cf12b9a1924a68952e82820e66"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","0cc4dc8dcf125bbd6d150ca31bd61960"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","f1acccbea4a97e1cdb4e6f53823fa0b7"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","092a7eff5b6939538bf803341f292fc5"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","3e149a2249e14b9c8bd21fcacfb3da14"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","216be91ef74ff56384a101f8d684f2bf"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","8588b1f5560e30d85133b9889629eedc"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","1923fd616702b79e7660be5c60abc233"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","8a581cd75d4cb12d3903a25ca21f95c0"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","b94e3ba5093a8a9fcbb7be30d6d74d32"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","41546b31362ebac261a415bfd2b27e91"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","a8e49a07ae5519f933e96a1fe95e5fa3"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f7ed56e11ffbbf34c8bafa9a7c15e78d"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a42120db2a020bef9896af0290f090ec"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","5265022936dd55afefa6e739f5cb5345"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","73507bffde1787b8f217d820914f72a2"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","41b2470125bff8fd380a4fe9b0f1e5a0"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ac31719f6813989b5bc550882cc96bd7"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","5ab4d0ea5203bbe4b7c81e66f119f0ab"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","cf96a5620bb447941a9e6a6ffd56cde0"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","8395acc53861a2914e46cefe0e69e48b"],["C:/lmislm.github.io/public/about/index.html","45885fd85e6bad7be0e766466987ee4f"],["C:/lmislm.github.io/public/archives/2016/01/index.html","160430987acbe40b3b38379e49b04db9"],["C:/lmislm.github.io/public/archives/2016/03/index.html","c4a7f72568f4e4d3d69bb9123ad02db3"],["C:/lmislm.github.io/public/archives/2016/index.html","8a1303efafd8afdfbea92df03d1d8d05"],["C:/lmislm.github.io/public/archives/2017/01/index.html","95a8c1301e03c81bc39c9f34ed6373aa"],["C:/lmislm.github.io/public/archives/2017/03/index.html","9d4f3fea334418c949031641d083ecfa"],["C:/lmislm.github.io/public/archives/2017/04/index.html","e32099b2cede3149be1fe5f615d7e2c4"],["C:/lmislm.github.io/public/archives/2017/05/index.html","4032923e9a489238c76191b9370fe3ef"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b12f34598945caf424f733f7f860e460"],["C:/lmislm.github.io/public/archives/2017/index.html","6a5701e9d7a10dd8d3a5869537d8056f"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","0264a502ec3a1e760a7202ee69cb97c2"],["C:/lmislm.github.io/public/archives/2018/01/index.html","a4ad800e0991da53f3815e557454181b"],["C:/lmislm.github.io/public/archives/2018/03/index.html","26619fab642a8a90ab453a107e77c173"],["C:/lmislm.github.io/public/archives/2018/12/index.html","cc0db52d53f8bfae7c2e536cd06d0d75"],["C:/lmislm.github.io/public/archives/2018/index.html","ca575f5847059a920a57565f796e43fa"],["C:/lmislm.github.io/public/archives/2019/01/index.html","9f18c857c8d574e418f1d9f25862780b"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","53d5457f2f75aa693641b313e4590f96"],["C:/lmislm.github.io/public/archives/2019/index.html","4c617644387d1b45aec4e7bbae517984"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","5a562d4ee7f3845c2496e17bd46c3773"],["C:/lmislm.github.io/public/archives/index.html","189b5f2198acbdbdd2dd45cda4df6d8e"],["C:/lmislm.github.io/public/archives/page/2/index.html","e7aaef59b4adbb2a81137126a6b3f93d"],["C:/lmislm.github.io/public/archives/page/3/index.html","cd1adfee44df558b3ae10ca773d4247b"],["C:/lmislm.github.io/public/archives/page/4/index.html","b8adf0e13c37a306ec695b346d763f02"],["C:/lmislm.github.io/public/archives/page/5/index.html","3ea41e592f811a2f2be6dcb98dfb3d78"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","2290afafd68fd3f2571699db4bbc2311"],["C:/lmislm.github.io/public/categories/index.html","9847126daf9dbac3f50485caae8a1684"],["C:/lmislm.github.io/public/categories/学习/index.html","63d1483e48a92cfd9271ce1009b60ca4"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","0beabafcdfc9bc8f5345c92eba97dea5"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","2729fd35868ad45afa2b2373393a3ed0"],["C:/lmislm.github.io/public/categories/工作/index.html","77c38e17b7f53f74f444ea307e11a651"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","f4557578c8cf3a342eb9a3da3a211a3e"],["C:/lmislm.github.io/public/categories/日常操作/index.html","71e4afccb3484cc250eeef0c2f43faa2"],["C:/lmislm.github.io/public/categories/生活/index.html","edb53a38c82dffd04474eee376716145"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","090bebd0db86e1e58eb1dc1caf3aa8a0"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d1dcdceafa95b0f2307ab0c3b7b09909"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","1ba9caf2c93976bd817f11337573ff2c"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","95f661eeb65aab2b779a88e0b8cbe829"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","1b8a4543c09024b4470f9ccd03f504cb"],["C:/lmislm.github.io/public/page/3/index.html","8f29ce49048ca3de708aa13a4a32d325"],["C:/lmislm.github.io/public/page/4/index.html","ab689953edf9738a2da3b9fb21b34fce"],["C:/lmislm.github.io/public/page/5/index.html","3ed35d5f1a2c837a88a95f7d282eaac7"],["C:/lmislm.github.io/public/tags/Interview/index.html","99c0dff32b77a22e061367766f7ff9b4"],["C:/lmislm.github.io/public/tags/JS/index.html","d4f3382a74cd8341b8bf595e4af57f91"],["C:/lmislm.github.io/public/tags/acm/index.html","594e009043f74667802b9a5a87de2141"],["C:/lmislm.github.io/public/tags/c/index.html","54e1a52f63ac40ef8b433cb7401f2700"],["C:/lmislm.github.io/public/tags/codewars/index.html","7fa4147268a3903599a734f97897f85f"],["C:/lmislm.github.io/public/tags/css/index.html","079c9a03b0b6b232d45c9caf0ef6a131"],["C:/lmislm.github.io/public/tags/git/index.html","a80a521e55ce15481c4f78a41f708194"],["C:/lmislm.github.io/public/tags/hexo/index.html","19536d963453856591bd645ab3deb811"],["C:/lmislm.github.io/public/tags/index.html","822f6576de49be8f808d069099cec576"],["C:/lmislm.github.io/public/tags/markdown/index.html","1bd851dabe1475500597ca041f2d632d"],["C:/lmislm.github.io/public/tags/poj/index.html","d58ca1df71bd37caadf0df100af15593"],["C:/lmislm.github.io/public/tags/shell/index.html","b0763cddae3a9edc6fa5382c9a689dfe"],["C:/lmislm.github.io/public/tags/vue/index.html","f22fd86d48797f460b6a5e37b804e22d"],["C:/lmislm.github.io/public/tags/前端/index.html","4c01a87c3a5ba7db77ff4fca2371fb65"],["C:/lmislm.github.io/public/tags/小技巧/index.html","bfda3a65a10e459de382679dbbb2e756"],["C:/lmislm.github.io/public/tags/展示/index.html","23823a6918b238b8d45e7bb2da24c0f5"],["C:/lmislm.github.io/public/tags/工具/index.html","93ceb5ae124284b172443daddf6b607a"],["C:/lmislm.github.io/public/tags/感悟/index.html","94f1b53a87c7b173fa317c84793cabe6"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","90a4f7598f042ca979c99dcf771d19ed"],["C:/lmislm.github.io/public/tags/编程/index.html","71c0851a5f7578f1f3a2f3ebbc763552"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e49fe231daaa373c34e4f8ade6d5c0ed"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







