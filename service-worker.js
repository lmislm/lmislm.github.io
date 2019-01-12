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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","a5330ec48947ff593d137c38b27d9747"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","4dc3187d5fc4d893540faf2dcb64b12f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","5ddf1f21a21df23d31fe6d35eb8bbd7c"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","e053c8627430bd454d463aa1fddec243"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","76e65932a4a276001ccdbc2acd0b2285"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","d17c1f7a55eecf40fe3075cf015fdb0b"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","3e13a914c3aa263db4843cb5a06ac7d7"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","e07407a9173b180dc9658fa21daa4e76"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","e6cf35619542e9c6e0544a256d12f64e"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","d04c33e03e1888ed4053ecf31411b128"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","82ee2b0e0b1c227750bec6befe38f140"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","60b3372af329e1c7845704c9d0eedb31"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","ea72e04fa267d6f205c89bc2bda767a1"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","784055d67cd856d9517d8aa438fc375c"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","94b4de8e6210ca1473a0d957fb1be890"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","a879ef7c2d0953f3b9b2ee8084fa5029"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","dfb3bc19230b365ce278f0556422322b"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","85214a06ac520490e02d3dba2c3350ce"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","2a837d2883feafa2037f5eb164f7837e"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","132a7ed8784a79060f50621d962603c3"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","43566be54c0dcca4718b93edd297fdfd"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","043b436ec75867d47c8467476162514a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","7f10eb4ed5aa4230762225c6196abac0"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","314bc6e6323e25b300de34087020029c"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","c440cd2f7858f97060b0e06351483c31"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f29b51098d3bc003dacd7f2646c2ac3e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","6879dd61739514952033c5f42dd22f44"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","e9f4d9a4a9e34d9785c22b0506bba988"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","24dccc43067f434ca24472d48758a102"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","00dfae292281f92ef30d6e1ef4e3ae56"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","35d21ce7a450bd88d8e24d1d2aee90c6"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","de37945e93cf7f0345d731f7813d560e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","a1e0c65cd8c11a4f64996a5266278e25"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","dd578a286a42f5e171b7820aa0d0207c"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","bcc64744988f76ef59e2e5e0d85d03c4"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","77f2ae3d4d94f683d4f184c0cea562f9"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","6b0789e89f2dab4cda5c93e8e1c96708"],["C:/lmislm.github.io/public/about/index.html","a8995c5de604cf65be4a91ea8a6e621d"],["C:/lmislm.github.io/public/archives/2016/01/index.html","25a983ef10ddd7355f52626daf4a8fe1"],["C:/lmislm.github.io/public/archives/2016/03/index.html","1f7617dd6b8c4ee579298eb40442d97d"],["C:/lmislm.github.io/public/archives/2016/index.html","d24a34ebcd844989bea5561431039472"],["C:/lmislm.github.io/public/archives/2017/01/index.html","8e220f5d97849bb4fa97b834c981bd78"],["C:/lmislm.github.io/public/archives/2017/03/index.html","3282971a849a815eb10979c25b0e4c90"],["C:/lmislm.github.io/public/archives/2017/04/index.html","2cfb1e5839b36650fcded4839e071e06"],["C:/lmislm.github.io/public/archives/2017/05/index.html","d7c875674ad6b97bfb1c6fee7795aaa3"],["C:/lmislm.github.io/public/archives/2017/07/index.html","5232a5dbcccef7d1c8b6e05e49b79a88"],["C:/lmislm.github.io/public/archives/2017/index.html","84c60d037c3c8c43eec21c6859a646b0"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","d2b1e613e861f2d0abe8b876c304efcc"],["C:/lmislm.github.io/public/archives/2018/01/index.html","3f75e4f65cac5b478d32deffbe42f4e6"],["C:/lmislm.github.io/public/archives/2018/03/index.html","c471396b065c6fcd4f9338997ecd40ee"],["C:/lmislm.github.io/public/archives/2018/12/index.html","51593aa5d3dc0d033c218d35f0e3e14d"],["C:/lmislm.github.io/public/archives/2018/index.html","dde5f3a4b04c8b99947458b390171c2e"],["C:/lmislm.github.io/public/archives/2019/01/index.html","b1c6dde3820907d4ddda3999b0894d85"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","e637b4d178ec586e20eb6235ac62882a"],["C:/lmislm.github.io/public/archives/2019/index.html","ac966319c7bf5cd18e24f2e6f4a6dca3"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","38d75a387529e4cb5d470589a1d3f11b"],["C:/lmislm.github.io/public/archives/index.html","6f2659676179d3f1328b69716cf3f903"],["C:/lmislm.github.io/public/archives/page/2/index.html","2847e85975edc5ff4e52646e5bf3abfc"],["C:/lmislm.github.io/public/archives/page/3/index.html","1f4b08d6628cff9d8e3888d309a82e8b"],["C:/lmislm.github.io/public/archives/page/4/index.html","88db1f8975da0ae46e8ddb7f7284b99f"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","85fb56785829c3feb1e772fc5e7a1be6"],["C:/lmislm.github.io/public/categories/index.html","c06b7dafd88a502faf5b10f8e11b30c5"],["C:/lmislm.github.io/public/categories/学习/index.html","e7c1e9308cf5a569d057c51c65d546ff"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","9771146d995fed5a22f3b5ce0d9a7ec9"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","859c3b02ececd2747d9875b6110210a0"],["C:/lmislm.github.io/public/categories/工作/index.html","8f9f993e08222e2b49607588045c067f"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","aba878e88de7691f3b12cd926bceb239"],["C:/lmislm.github.io/public/categories/日常操作/index.html","06632b4733dde0019845937251d72a26"],["C:/lmislm.github.io/public/categories/生活/index.html","806d67c7be41e4e724ec78d01f213aa9"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","65665e334e70ff1df987a4365b9dcda0"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","9f8bf95b098c111915f27b71a8e27ea2"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","035c711b2f1e7bd0bdf433f3c54a3dca"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","cd9638b08ca6982ba7e0c5d1028cd8f3"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","5a1e6c876e52bdf5cb03a89b93bf5340"],["C:/lmislm.github.io/public/page/3/index.html","5553a954b3a3aa983f03a3b20acca3b6"],["C:/lmislm.github.io/public/page/4/index.html","d32e969a6096526a91e737650f5a49b7"],["C:/lmislm.github.io/public/tags/Interview/index.html","efbde1630f5fb6abec03da7bab6feb44"],["C:/lmislm.github.io/public/tags/JS/index.html","e20b4d30692ecb210a2ec4a5e51ecf3b"],["C:/lmislm.github.io/public/tags/acm/index.html","d3473e93d97387dd0e4f62beba3767f1"],["C:/lmislm.github.io/public/tags/c/index.html","56d25ddf5317e66d2d08154e01d028ee"],["C:/lmislm.github.io/public/tags/codewars/index.html","47724ed18631a243a9a7140802fe5f88"],["C:/lmislm.github.io/public/tags/css/index.html","a3b0f1ce7518ca737040c9d4ab184020"],["C:/lmislm.github.io/public/tags/git/index.html","988bd2161800692c1594bc657b95b28e"],["C:/lmislm.github.io/public/tags/hexo/index.html","ffc88f74185aa82260a08f222177b565"],["C:/lmislm.github.io/public/tags/index.html","9dd79b994fde2d1066528114d31ad509"],["C:/lmislm.github.io/public/tags/markdown/index.html","4c3672791d02720fb6d77b9e84ee3da2"],["C:/lmislm.github.io/public/tags/poj/index.html","c1556f72b9d839762f1d69a170a14c93"],["C:/lmislm.github.io/public/tags/shell/index.html","4fa3408cfc1423874cac28521a588a19"],["C:/lmislm.github.io/public/tags/vue/index.html","3943974b200e703e1bbf2def8a8bca51"],["C:/lmislm.github.io/public/tags/前端/index.html","896c042b81c2411131b718b4dfd56c32"],["C:/lmislm.github.io/public/tags/小技巧/index.html","88d65a8912e385566182cc7a8ad0ffdb"],["C:/lmislm.github.io/public/tags/展示/index.html","3064bed5f7adf5bf70b15938b958ee18"],["C:/lmislm.github.io/public/tags/工具/index.html","387245a700006267719b08e99e106dc9"],["C:/lmislm.github.io/public/tags/感悟/index.html","ad67492a431b39a9ebae10af74e365c5"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","1dcebd5789e6c060605a4c785c0ada0a"],["C:/lmislm.github.io/public/tags/编程/index.html","563d00ceb43125251a0daa2d0378cf8f"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","242ce5e826ecd27f55f0462222a47bf1"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







