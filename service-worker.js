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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","b029e3ec926ccead5d8e6bb417aa6f8b"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","08cd41c14f2692c5ea2d3aeddb25c35f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","22680c3130aaa380faa93c91ebeff55c"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","1e7c7db403efaee48c39d26b9238113a"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","7a5884479852da04f1ce8a825a955eb7"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","36ba8d37ceb7998f2f23e7fc32130c9f"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","74f8edb9851314bf48144c4fbc8e3633"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c4e9bd1cbc98a2b6f9a77e1acacd3a6f"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","733f0d55080d14aa04607ae2c88f759d"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","16bf696444f3458678d7e38c27801129"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e91ec198f679a9243afbdc27df403b42"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a600bf27b445d2e4d6a3d9584bad436d"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","3247bfe503586326664bd6a491b02b74"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","82aa84f6eb1555a66a5c7d7f8b4ca63c"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","1abefdff6d808b9035338da01489bdc3"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","518550ad01518628327d58616b6768de"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","72d2bba08600bd7e6ff44310620dbef1"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","6d5f1aa6bd493444221cb6d67c95c121"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","4cbbfb89cb88faf78c184862d2168268"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","00b604f65e47ff13266bb7778dc35c71"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","cfa6fc389a29192ab5eddd0f6eb0466f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","2fcdcace8e02cf4640f1b59537f9dfc1"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","2b63d5fe595e3edf52e355db453a014d"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","05c3dc2a34acd87dc7b413141698e4ba"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","7776bab2a8a97ff31289224b6c114d04"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","9bce44755b57d4cf5e0eca580214a9b6"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","bdbd22fe5eeed8a4b71b63a004a75821"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","31d08cb868aa0b7e5de9fc543731dd2e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","ead6a00c7b82185b5fe4860c1910ea74"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","44b3ccaafb79c284c99837719b0cda79"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","4bb39843fa0603c700dca3886d0bbe32"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1d978a9c383d3f99437a0e65b0b28918"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","8cf3f1f6b8edd43fec96824907fec71d"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","9dee938fe1cc690113e51bdec1db53ea"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","2500edababd06922f59d9fa0e6c862e3"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","2e3230a09f6aaf2a2e4d650413a15d5e"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","889ddca02f36f7bdc3e2653c8776e9dd"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","013c13927f870fd8ff94f7aed94a99c2"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","7b8f99b937296f2ef03b5e4fef9cbaf5"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","6792f696809e913fb69582ce1032a151"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3ea9373f74c3ea39e4ef98dc5dce02e6"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2e080272a5d1d99bcb52a4050e16bc8a"],["C:/lmislm.github.io/public/about/index.html","62fbd1af323f96cc1bb9eeed0bd3912d"],["C:/lmislm.github.io/public/archives/2016/01/index.html","48f3408270e9a2d7491ecbe9123710e4"],["C:/lmislm.github.io/public/archives/2016/03/index.html","50cd315d5530902e6c6afb68d7162141"],["C:/lmislm.github.io/public/archives/2016/index.html","bfe0a6989023e4987c28521f892db22a"],["C:/lmislm.github.io/public/archives/2017/01/index.html","bf4aacf53cc86e43a5f84abb20bb633f"],["C:/lmislm.github.io/public/archives/2017/03/index.html","28c5f8ec0a8753e49a9ffc1e88ac1bc2"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f41e8e13f7cd14d2b89a0a83f30a8ade"],["C:/lmislm.github.io/public/archives/2017/05/index.html","3b4b573dc70d3d110dfd83dbc514e784"],["C:/lmislm.github.io/public/archives/2017/07/index.html","293497c795c6750c79db3db3ee1864bc"],["C:/lmislm.github.io/public/archives/2017/index.html","878b1e11acfec8ae8abc7f5f238cdf19"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","03982cf8aedd3cd9c91fc60aa6860f7f"],["C:/lmislm.github.io/public/archives/2018/01/index.html","22a1aeda90a6385f1f5306b9927fde5f"],["C:/lmislm.github.io/public/archives/2018/03/index.html","55287e7e17382c1975edc4b4d6715035"],["C:/lmislm.github.io/public/archives/2018/12/index.html","9ced94452b4cc3bf36ad59ed51464ec7"],["C:/lmislm.github.io/public/archives/2018/index.html","e4087c762aa9308f93bcaa4ed47f9cb4"],["C:/lmislm.github.io/public/archives/2019/01/index.html","bc7c6dd58b0685186ee5324b157fac39"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","7444239835b9b903502333aaf77b5074"],["C:/lmislm.github.io/public/archives/2019/index.html","3e6fe0f8264ef9443f8f625f7d44afd3"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","297aef0987d58b931e0687cb4cf5ace2"],["C:/lmislm.github.io/public/archives/index.html","ee971f8dcb5f1f7b014e77b20c986f53"],["C:/lmislm.github.io/public/archives/page/2/index.html","96199ab546923fa666b84262662075cc"],["C:/lmislm.github.io/public/archives/page/3/index.html","003013da75349d31549280eb400f15a2"],["C:/lmislm.github.io/public/archives/page/4/index.html","80cb55a9c06861060e34644aa4b70bc3"],["C:/lmislm.github.io/public/archives/page/5/index.html","35448a2ac073fcb69e405bfdf3349954"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","2cd5419573874088800d4c7d7e7dde8e"],["C:/lmislm.github.io/public/categories/index.html","1056edffb655976114dd71c5d183eba7"],["C:/lmislm.github.io/public/categories/学习/index.html","6e170a8533a4e480e2c151de4afa431f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","6d08aff53fa4db205e0cbf1535dd407e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","c15496aa113a62b8452276a5e19a254f"],["C:/lmislm.github.io/public/categories/工作/index.html","5b7a75065389986dc5ecc10f6f2b10cc"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","e331d895740e5ee346306da463e6262e"],["C:/lmislm.github.io/public/categories/日常操作/index.html","4343694b7963dfdfd1e6741ba7f7d2a9"],["C:/lmislm.github.io/public/categories/生活/index.html","f5c2e9236c28bc814e6eec02f33753b5"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","b0ef3ef93e60447be39e5237793a4494"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","47c96eab498d0e6a552418c50850a9ba"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","7b3196dc0dda69db0ebddfe97c124213"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","a029026e6e01f406ff5f883a2fd6feeb"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a621e2d389e391452fe453f91758a4ff"],["C:/lmislm.github.io/public/page/3/index.html","3efc1f8b804b160095b9e27d80486b71"],["C:/lmislm.github.io/public/page/4/index.html","86a2c6a8824540702a02e90764c5399c"],["C:/lmislm.github.io/public/page/5/index.html","67f8b810dbac6eb6e2b1fa4f74c61a9d"],["C:/lmislm.github.io/public/tags/Interview/index.html","4f4576ef4ee94081737d8a21439217d0"],["C:/lmislm.github.io/public/tags/JS/index.html","de0d6eadbed7d192ab75e8a101985565"],["C:/lmislm.github.io/public/tags/acm/index.html","9953d8e252bc1bc5716382077a5db409"],["C:/lmislm.github.io/public/tags/c/index.html","56c9d1f7742207c2c23df2303f09f659"],["C:/lmislm.github.io/public/tags/codewars/index.html","7c4daec2ba53521cee579e0dc4131cba"],["C:/lmislm.github.io/public/tags/css/index.html","ec027f58f1c5be675c770290c721ba12"],["C:/lmislm.github.io/public/tags/git/index.html","57d68040a58cbbad103e344bf5a0e240"],["C:/lmislm.github.io/public/tags/hexo/index.html","16fb3e7a4c008807b47ff96d4911d882"],["C:/lmislm.github.io/public/tags/index.html","3c81e2987847618131c368e7acdcc07f"],["C:/lmislm.github.io/public/tags/markdown/index.html","1b861637317ef1cf3eb7e1ca4dd000fb"],["C:/lmislm.github.io/public/tags/poj/index.html","c4a64401b51e0c7b89686d41f8c9f41d"],["C:/lmislm.github.io/public/tags/shell/index.html","7580ce976b2b52ee0d8309c2dea2c6a0"],["C:/lmislm.github.io/public/tags/vue/index.html","5207e0680eba9d872b682122a4771aba"],["C:/lmislm.github.io/public/tags/前端/index.html","fe9789b21b16a6f3596fa599ed70461f"],["C:/lmislm.github.io/public/tags/小技巧/index.html","d0702886fa32b970f21ace666e22f2a0"],["C:/lmislm.github.io/public/tags/展示/index.html","14501661241849b5a42c235b14672ee4"],["C:/lmislm.github.io/public/tags/工具/index.html","0cba69cc6e17a2bdd765bcfb61a6d72e"],["C:/lmislm.github.io/public/tags/感悟/index.html","c554153ee5191d3444b7523abae83934"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","286d14ea49c814a387f8b9b7666f0c15"],["C:/lmislm.github.io/public/tags/编程/index.html","ed12d7db0395194882d655d45f57f70c"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","4403de1e1e3989f3a7360340b9e57294"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







