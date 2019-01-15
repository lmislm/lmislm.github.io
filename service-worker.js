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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","5412e3ceacdefd43b05b8f2b100d9574"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","344b7c274bc21caadb97fb9ad44a5b98"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","36c16de8d6e80a18135432dc470001f6"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","4177859b4e96f3144502df6aa89238e8"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","854e10263a02f0c2e87cecf5bee5b535"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","fbc165a13aa24fe8c9c3551cff426ec5"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","7e163008b1764806b4404e5865e2dcaf"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","3e90da5f487395e2008be9b66db7eb62"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","f505c34f69fe9f7cc6f3320954fbc8c2"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","3a22510e18534e9bd1524ae29ce8d043"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","5f3cba1996c66ec3d7c96e07d325e9b3"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a471ad9846da67a3d584679b570efb34"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","04937ad3f21da4f8451a7e7e1312adae"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","f5f9408fc327278a90047741b259b411"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","ca64991bc45b41368ad19242e4e7538b"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","b11b8ee92dab3106c51def87e73fa485"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","675acd549b6809a05dd78801bf24680f"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","008c710f151b1f3bc995469a4bd70959"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","2bcdc6ca668cd23bd80884c19c95b7e4"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","7e92bfca191eb22ed06f23b35e0ac639"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","146cb30241e49b536c366ce4ccb63d8b"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","e49351e9a73ac193bf03615701af93da"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","6851bbd240c717d59b2e48298f8ece9b"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","845a8e0cb580c92b69c55fc1dd07b96d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","bcb4dc9d6862142d02a6509689851c27"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","359a87e8007e05d57ff9bb799519391a"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","6548ac20a0b5da0ba257c6efe87c8cff"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","a1d22b195f54ebdfb2d69a1f328f27b2"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","5b8cf564b53d8633aed822fb843d7115"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a7e5d8a8eec18ad1595ad806df4418be"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","b0285ff12198941fe98d813a38c33f64"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","ae74d72ec87fc4ce16a6e739ad4ba11f"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","96142693e51d28b72265ef06b22eb7c3"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","90450f00775883dcbf50073562ed3514"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","d31e20ad52d5934852e1ff8ed2b89332"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","f46b032675165522668359b9e655ad1a"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","0908d499723c37c21a613de9920d0cf3"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","c0842ac08ff7a935611ab312c510fcaa"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","945ad244d324473a9ca4d031c70f1487"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","871636c4d441eda0de8e55a32ab95aca"],["C:/lmislm.github.io/public/about/index.html","3969b76c2777be8696fc9c314e02475b"],["C:/lmislm.github.io/public/archives/2016/01/index.html","066770c6d3ee84009e7b3cf9f23100ca"],["C:/lmislm.github.io/public/archives/2016/03/index.html","ee5e070f1efcfc14804d5e04a7cd5e65"],["C:/lmislm.github.io/public/archives/2016/index.html","b9d22785029500579c18f182b6012651"],["C:/lmislm.github.io/public/archives/2017/01/index.html","4338dc6f61b44e7c9d3186b22e60b550"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ade8f5739c4078c03b87e3d0c08538a1"],["C:/lmislm.github.io/public/archives/2017/04/index.html","e815a018760ad1765cf73bf85c056f8d"],["C:/lmislm.github.io/public/archives/2017/05/index.html","2958d6b03127844eebea8794ea45268f"],["C:/lmislm.github.io/public/archives/2017/07/index.html","0bb82b5890dc735c37ddc748bf171467"],["C:/lmislm.github.io/public/archives/2017/index.html","d51dfab9536db86621012a515ee6d11c"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","39fc22b981a4b0a68c246f19c6b606df"],["C:/lmislm.github.io/public/archives/2018/01/index.html","083a92a6a8341110fb06397feead3b0b"],["C:/lmislm.github.io/public/archives/2018/03/index.html","ceb5402be1d038ca0c965b74ff27c5da"],["C:/lmislm.github.io/public/archives/2018/12/index.html","a0e40388a34b7ef85530a64dd6f50837"],["C:/lmislm.github.io/public/archives/2018/index.html","a7118634acca421c1d644361e3b0c4ac"],["C:/lmislm.github.io/public/archives/2019/01/index.html","294d8ae8b3e6a64a7833de46dd3d7b5a"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","c593ca844d2703fa403c084c3ffb18bf"],["C:/lmislm.github.io/public/archives/2019/index.html","0c9ac9f01eb52a5eab02884cac652b1e"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","dedc8c6d4485c31af861d83063fb86d6"],["C:/lmislm.github.io/public/archives/index.html","83c897fd6f811bb4a483883435fca2bb"],["C:/lmislm.github.io/public/archives/page/2/index.html","b79114b245efdd3008aa812029a13e56"],["C:/lmislm.github.io/public/archives/page/3/index.html","2ff9b8c8be1fd1e8245f9c0749b59846"],["C:/lmislm.github.io/public/archives/page/4/index.html","3249c33219b18aedc24b6100a0825e68"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","2bb9ae1c179c4e7668c51828d97ab11b"],["C:/lmislm.github.io/public/categories/index.html","d3a67e4822012a157c2d9e9c9878dff1"],["C:/lmislm.github.io/public/categories/学习/index.html","1a19acbf5120f2414ee5691e9f74db4b"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","9593f297c917f6ef6986e1937e06ffed"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","7ae0b0f3decb5c9293f529181721c447"],["C:/lmislm.github.io/public/categories/工作/index.html","bded9519b56afcacc6bc4d120c210ef6"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","83b9c28d0e7bb381943051b972799791"],["C:/lmislm.github.io/public/categories/日常操作/index.html","d5b4d68b29dcf109a180f3f1f5ac2589"],["C:/lmislm.github.io/public/categories/生活/index.html","ea06616c905c53658375de9616f435be"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","1817076004c63633c2becedce2015397"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","a6de66273c18fc8216af47ebd3bdc1af"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","a142236ccc837fe64cb33d383cdac588"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","9929b4be01b444fbafa4b075aa31c313"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","8d138fd351ace1a6779a99f9fb1edad3"],["C:/lmislm.github.io/public/page/3/index.html","667e774d716d6215ff782cb92c22d8ac"],["C:/lmislm.github.io/public/page/4/index.html","c4632b17ef4c0dda7a64577fc0164fa5"],["C:/lmislm.github.io/public/tags/Interview/index.html","6e8348f494fd72d43941c12f3aae4682"],["C:/lmislm.github.io/public/tags/JS/index.html","244b54634e286b922ea398acf9012d24"],["C:/lmislm.github.io/public/tags/acm/index.html","ec4181a27585d817dc3bc16db5af47f0"],["C:/lmislm.github.io/public/tags/c/index.html","5e5d709799e5dd15bc3fb79086546410"],["C:/lmislm.github.io/public/tags/codewars/index.html","e374ef3288dae0bcf42a166815c88875"],["C:/lmislm.github.io/public/tags/css/index.html","714f6531bf31e648bb1490c9496e1eb7"],["C:/lmislm.github.io/public/tags/git/index.html","2831d07ed8d74360cd59fcc651d91f75"],["C:/lmislm.github.io/public/tags/hexo/index.html","0b90f687cd47690dbc213f874380f0b6"],["C:/lmislm.github.io/public/tags/index.html","d670b3762a195c4a9543d5a3d65f9b6d"],["C:/lmislm.github.io/public/tags/markdown/index.html","12fa0e1036ee9ae076c395dd8f571492"],["C:/lmislm.github.io/public/tags/poj/index.html","20907ea0d91454d9d747a1754bae3eec"],["C:/lmislm.github.io/public/tags/shell/index.html","fa44db2f6636d5a91cf6d52c728e3efa"],["C:/lmislm.github.io/public/tags/vue/index.html","00f777dc0473d02673c57c2e56ddb0c0"],["C:/lmislm.github.io/public/tags/前端/index.html","1bae3e4ff117aea0da67df0b48298b38"],["C:/lmislm.github.io/public/tags/小技巧/index.html","ba30007dc2eb613a439f6674badf9281"],["C:/lmislm.github.io/public/tags/展示/index.html","8c4c19d5746c76e34f2fb257041422c7"],["C:/lmislm.github.io/public/tags/工具/index.html","2f01e9e94e93c7c2d88c17538dfee304"],["C:/lmislm.github.io/public/tags/感悟/index.html","d5e82990bf856078896b1601dd06ca9b"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","043e391cfc67b441415d8b116a00bc5d"],["C:/lmislm.github.io/public/tags/编程/index.html","883c8b1eadf138c95cae3e46d3024577"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","69a2cf5620cf79ffefae88de4904854b"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







