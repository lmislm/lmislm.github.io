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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","8df7779190b04bb1e9ab84f2d77dc631"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","3aa8e2796316e18c95b5370b6e8c9283"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","e29dec511daa978fdab0748c48b9395e"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","085fad49a735661088a047994abec4f4"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","410f28c89b4d4d9963ba4f6400e4c731"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","bed81181b3efe6cc6f02ad7cef524293"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","0d06f2240a30efa13e45c74f78ffc31a"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","1d3154afed210a6c978a58be00cd0808"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","5f7d31646c85e85281a4f1e42e7c990e"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","3c0799ec3a40606b11cf9a65d7bca7cc"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","50724bbdd758107abcb3bb7189f270f0"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b723b3027ba593dd84e86de94c41aa64"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","cdb03cd5fd2a52ce0f4f4d9190734603"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","6357db6b785e0aafb46723bfbd13f034"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","bb770fd2bdfe0787facb696f4ac823c7"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","baa995e69deea17bdea282f625a7a47a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","af6964e6e7b65a1c26123ae58811fae7"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","099bacd43244d8c989cb80e9bc08b1ef"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","f55ca417dfeda6bbd89e8b37832503b9"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","dd125354db160c208b1767423633e012"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","74ae859b070a8c00b987077a85d948be"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","c0e2b32f52f867aa05baa2ef70daa7df"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","c5f4fa968bed1481c9e6c99c6e35acc0"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","95089cec89137063ad87dc256d03facc"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","2ad7fd33423b678d4e29cf3472496480"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ed6702f6971d87d686b079413382757a"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","4ecc940f6f623d42caf401a846ac901d"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","f4fcb6256c21333d4c9f298b6a0b6b11"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","9468d52195de9c31fc3fc262e15fcf8d"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","c87892c18320439e774789a6c9e1021d"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","92a63550ea86abb6a7d2d486476bf601"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","ccd522bdc6f213f9a428b0661215605b"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3b44724381fb49ad629a8b9e04903984"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","f73fb96b794ac721b523f4cb49214699"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","884dc5c927964f1fc755564c59cff5c1"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","245e88b073548b63684bb5238f9e8a0e"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","b96fe47bd27d4c66041a78c18496f599"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","bf1fbe67245c76679015ed03d0e30569"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","5e7a760ff5f1ba53c7e2c56b9f73f57d"],["C:/lmislm.github.io/public/about/index.html","dc93774da647b5c97f7141aaf32bc313"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c356c354d1bcb0b3e34c629bc9d7cadc"],["C:/lmislm.github.io/public/archives/2016/03/index.html","3ac1eda8fcb9a965351324745fea945b"],["C:/lmislm.github.io/public/archives/2016/index.html","ef38f1332520eb913daead2b0bfce466"],["C:/lmislm.github.io/public/archives/2017/01/index.html","a3af96c2463dab05aa550deed1e0522f"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b794b93c23eb0907acd9527683a139f6"],["C:/lmislm.github.io/public/archives/2017/04/index.html","d1812d44db26ff5cea226c473e2b539d"],["C:/lmislm.github.io/public/archives/2017/05/index.html","e0cc4c95d7ed581c7aaef475c65c8731"],["C:/lmislm.github.io/public/archives/2017/07/index.html","f1a424150b4b151cad21c0ebbed1801f"],["C:/lmislm.github.io/public/archives/2017/index.html","3fa34a94b01e9c4b6f74b0d1e9c1b67d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","215a926a9daaf129e10c2384de04f0e7"],["C:/lmislm.github.io/public/archives/2018/01/index.html","ff52e583a61d06b622430f8e8d923073"],["C:/lmislm.github.io/public/archives/2018/03/index.html","db4664811355a7f793215928c405b065"],["C:/lmislm.github.io/public/archives/2018/12/index.html","58352a8734c596d0618eca5a7943ebed"],["C:/lmislm.github.io/public/archives/2018/index.html","b47fb1aa7ca76139aff969f60d9f5b88"],["C:/lmislm.github.io/public/archives/2019/01/index.html","5afd3c56010047789abe5b180a748dda"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","6b94256d7debd18416b600bede948638"],["C:/lmislm.github.io/public/archives/2019/index.html","4a02ecfb9229b05bdde72a8a800e8b79"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","2f633454b65d1ecb8c189e9645beaae1"],["C:/lmislm.github.io/public/archives/index.html","22f6f8380bd07daefc711c4bdc45dd40"],["C:/lmislm.github.io/public/archives/page/2/index.html","bcccb057a74363246e3e8bd95cde6df4"],["C:/lmislm.github.io/public/archives/page/3/index.html","a5b26bea6302ffbb21741d3fee36109a"],["C:/lmislm.github.io/public/archives/page/4/index.html","abdd91c4fefdfee59482a9284388049b"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","bd84e38d3578db09e71c4705383a7359"],["C:/lmislm.github.io/public/categories/index.html","325a610b327b52a33684af74f6c67496"],["C:/lmislm.github.io/public/categories/学习/index.html","c8d08e042addb63e232a6b2dde41e15a"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","43ca1903d15938eccc905d3c7a0ac1b9"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","d7914bbcd61a36c97882d6a4f32eeb52"],["C:/lmislm.github.io/public/categories/工作/index.html","4084265c02c6bc980ff28e74d7f758bd"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","45377f3e4d8279e97b50885b8ff8a62e"],["C:/lmislm.github.io/public/categories/日常操作/index.html","3ce252e4af92e9da65ff723bf8e3573f"],["C:/lmislm.github.io/public/categories/生活/index.html","113f3df9885fe7f183e837db95c0029d"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","493cce6fb401720ae48e0b7f7819246d"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","183f6620c1b91d4ffae8e1de18f85b20"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","3428399b9818a39532b428b217ac5c56"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","5f19558a05ac2325cbc0152e04664091"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","f2602abfa449451e14d3e5f0a263c0ee"],["C:/lmislm.github.io/public/page/3/index.html","a7f685756e910753762105376e775e53"],["C:/lmislm.github.io/public/page/4/index.html","b264366adaf830281ccfe8476fddfe17"],["C:/lmislm.github.io/public/tags/Interview/index.html","554c9a624ac5fa8f85d19ff32eea50aa"],["C:/lmislm.github.io/public/tags/JS/index.html","aa3bece26f11898da1388de2c0c3972d"],["C:/lmislm.github.io/public/tags/acm/index.html","e1c7eea609d567619f5a32e6d6397c48"],["C:/lmislm.github.io/public/tags/c/index.html","cd41153b79c0a8c31c68d8b3348b9ef0"],["C:/lmislm.github.io/public/tags/codewars/index.html","5e2d9ebaf36ed0d6ed8787bb71199250"],["C:/lmislm.github.io/public/tags/css/index.html","0cbf7488f031e3cf5f0ba91b3841d403"],["C:/lmislm.github.io/public/tags/git/index.html","f26c83fd7ef598bbfcb3c6a0b0609b29"],["C:/lmislm.github.io/public/tags/hexo/index.html","f2dc0865519bfd336cb272206853bede"],["C:/lmislm.github.io/public/tags/index.html","e86090ce37c4504f5cb96bcfa6bb394b"],["C:/lmislm.github.io/public/tags/markdown/index.html","8f5cd92800b351bacb91950b0afeaae8"],["C:/lmislm.github.io/public/tags/poj/index.html","e9aec5a35742a54cc8a329b1283116c4"],["C:/lmislm.github.io/public/tags/shell/index.html","edafc24a16f716bdce09d6d6fc581689"],["C:/lmislm.github.io/public/tags/vue/index.html","486999e15c5cd1163f2cc0fe5cbdfc03"],["C:/lmislm.github.io/public/tags/前端/index.html","3e21d59ae426ff8bec8857e77a32a6a0"],["C:/lmislm.github.io/public/tags/小技巧/index.html","dfbefc566bb194e6d4d3e2b0132be798"],["C:/lmislm.github.io/public/tags/展示/index.html","bc06df47e86a7c74e06dfa20fc792c65"],["C:/lmislm.github.io/public/tags/工具/index.html","3c52ceb75eb260f3296bb6f1e67d6fce"],["C:/lmislm.github.io/public/tags/感悟/index.html","ecadba8f2a5e8ca8cd38af03fdec73e3"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","627cbd99a0725767c4e3e2d06ac44a46"],["C:/lmislm.github.io/public/tags/编程/index.html","634467f570dc5964deaa5c8087c0a0c1"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","6a5e5524f4a68316d29ed56f92c0eb5e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







