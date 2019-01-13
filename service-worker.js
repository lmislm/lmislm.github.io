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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","b70591b0f02f2358c98ced57e6c879f8"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e43387ee081f8d06594fa69712956661"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","31dc8076be6e4eddd87fc4c05a777955"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","4c5ba49db47cd8d347db2ce393830467"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","a69afae5128eba1465dcf02302b1b2a6"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","0d956c4222e7eeca80b62802f6ad092d"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","53fb821d6843ffc549bf5dfe7196f5cb"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","2cfaccb147b3d120dc55c66ebcf870f2"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","49821ee41cacb4bd319d3922b13a2eec"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","65bc98370376cdfb470e24a7c0d33352"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","2f182266dd0e3473d2f2a3106c85d753"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","392c32703b0c2c73e5ae22bbe4aef275"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4dbd6a8ff6080bdc148013b9125d445c"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","16dabb51effb99152597aadf6fee1b98"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","d117515e922efaa333d4aabd1860e020"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","5f3a0a04a545848815f2aee26abb2509"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","dc6c402ea33268e4fbbe742e03e82301"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","595979619fa6bde0ed0baba7acf771f5"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","fadb4b8e1715155f92249e9b92482271"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","b52712263afe02af90c9ab2bf12c29e2"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","56fb8fd8a5a2cc106336c5ab94097931"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6adcca3b15205bbae02cc8bf20f4d85c"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b4f3173fd6bb001e0167e4392c5ceb48"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","a599177c2eb3d57126705ba424c219d0"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","8e73f0c47114b82a2f0a8c65e809cb22"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","22e1980dd536b8b5cd34de95c3d5dc01"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d8b3e7406cba0715f727d0db244a462c"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","eb15aff83266c205743cd5867a1cdc2c"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","03e56c9516005e4bc7b808d5b321dfcd"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","043de50173d5a0e1e6b8be5d9269548d"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","e9b9accf6414a3568228d2b7c6cd348f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","dcfd3d23219e10df66abe0b788ca65c8"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","141646dd09924583e9c456d1a5b5d3ad"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","2a9e4084d71d36aaef1a3f35acf3098e"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","99ca5d59d7a3c74d5c48e884d8c0e7a1"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","0b645d60742e41b0f571a97a32db3292"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","7f059a6278d0c7dee01d76760a3d3094"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","1caf5fb78e7acd81bf18896d6561e6dc"],["C:/lmislm.github.io/public/about/index.html","80cc58b33ce22e4c4e46b4dcabdc4099"],["C:/lmislm.github.io/public/archives/2016/01/index.html","9a703babee7cfdfaff9669aa20514afc"],["C:/lmislm.github.io/public/archives/2016/03/index.html","5142cbbb5867fd38d21c7a685c399ba3"],["C:/lmislm.github.io/public/archives/2016/index.html","da7fa6d74ab693e7c04ce91cf834fd54"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e5bfadb80c5b9c08b88d6b9c230e963f"],["C:/lmislm.github.io/public/archives/2017/03/index.html","1796dbd2394be61a1f60ea6f72d2275e"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1b310518e4210a90050a42f4e7319056"],["C:/lmislm.github.io/public/archives/2017/05/index.html","928ff00930eebb9fc0ff8ffc0bc95427"],["C:/lmislm.github.io/public/archives/2017/07/index.html","ba4f55ee5b3eb16fda815d6d9a98cb1f"],["C:/lmislm.github.io/public/archives/2017/index.html","5aeea0b04a9aa85b7a110a7f1ba4e1a2"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","e4f51b2a37ad6d17e098fa60b95a2b2f"],["C:/lmislm.github.io/public/archives/2018/01/index.html","2dee3e75f04a02d1e389e5ff87afa5a8"],["C:/lmislm.github.io/public/archives/2018/03/index.html","7b1cb25de9f379c021f5f7dcd118f8b1"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c6d41dc745cd706c8063f86c81f45555"],["C:/lmislm.github.io/public/archives/2018/index.html","f66b3ded2b9b342b0a19655c4297ff39"],["C:/lmislm.github.io/public/archives/2019/01/index.html","5236b20184aeb9287a9343a53802596f"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","06dfff3e4f17eab9cebb108b20b5a01a"],["C:/lmislm.github.io/public/archives/2019/index.html","940857f262316cac8fd9d7b297be4005"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","5b14ed99138406a27a365c1279a660a2"],["C:/lmislm.github.io/public/archives/index.html","fe9b169278833fdd9ed2a0e45fb21753"],["C:/lmislm.github.io/public/archives/page/2/index.html","2f2345ea2a65736b838442efcc0dc31e"],["C:/lmislm.github.io/public/archives/page/3/index.html","5262ae917406572c2ce50ee5b4796858"],["C:/lmislm.github.io/public/archives/page/4/index.html","a5facbf0144daabd22a872b313536a29"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","274c3f4ac55984e247dca2adfd26ed01"],["C:/lmislm.github.io/public/categories/index.html","494236ac7b732553dde448019bec4187"],["C:/lmislm.github.io/public/categories/学习/index.html","961561e727c7151b413f43a29dfd2a89"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","cdefdb6a94c3c70cb460dad1a6aa16d5"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","d5e25b6e8659711fd71d21428fb83e20"],["C:/lmislm.github.io/public/categories/工作/index.html","ad74de29961bc217131db4611fdeb1b8"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","74bead2efd7c2f50e98ce780cb961b93"],["C:/lmislm.github.io/public/categories/日常操作/index.html","03adb9d54adc3e533716657aba919c6d"],["C:/lmislm.github.io/public/categories/生活/index.html","e15e0711cb523dd4e609ada8849a2c49"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","4a44c8e591605d3ff57a973c7510ca55"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","a11f2f003820d6d10d604ebe77b6cec9"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f2ed796e8f50503b971c1dececce10d0"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","15e4275e4e4ffeac7e8ff7faa450e6d8"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","4b9ba7b2f3be0888109563669adcfb68"],["C:/lmislm.github.io/public/page/3/index.html","338b8ce4d909e8f65dc690606058c80f"],["C:/lmislm.github.io/public/page/4/index.html","f72b7c9b06e9ff51fea5e23ec9cb1bd6"],["C:/lmislm.github.io/public/tags/Interview/index.html","66596e666245f3c0f8bbfaece9aa187e"],["C:/lmislm.github.io/public/tags/JS/index.html","74fb25707ce3868f1ab2ad39cc4c6a55"],["C:/lmislm.github.io/public/tags/acm/index.html","534bf295f6db022ce269805c23d16d75"],["C:/lmislm.github.io/public/tags/c/index.html","afc2d1127d1acbf4949d40927b333e12"],["C:/lmislm.github.io/public/tags/codewars/index.html","9f14dbd57c3525eebaa0b3e4eca2340d"],["C:/lmislm.github.io/public/tags/css/index.html","74276282833e82767dbda4d10f0fec5b"],["C:/lmislm.github.io/public/tags/git/index.html","790af7cbc7a7e3c82255a71cc8390ffb"],["C:/lmislm.github.io/public/tags/hexo/index.html","983fb74d1002e523d2e142a7c497c14b"],["C:/lmislm.github.io/public/tags/index.html","605cf7243b30de31dd1d29165a1a0f07"],["C:/lmislm.github.io/public/tags/markdown/index.html","9e02a3a8ba4e1f25e53c7fa366f02276"],["C:/lmislm.github.io/public/tags/poj/index.html","5c2c70767b54e1f4bb144ecb5f2bd45b"],["C:/lmislm.github.io/public/tags/shell/index.html","b7ff433ded2c83ef42736a95e3cc6213"],["C:/lmislm.github.io/public/tags/vue/index.html","9f526858cae9e26906e4f56d1669bba5"],["C:/lmislm.github.io/public/tags/前端/index.html","89ae01cce2a392d4e42601c55e409aaf"],["C:/lmislm.github.io/public/tags/小技巧/index.html","802b62371782d790be94b31a417644e6"],["C:/lmislm.github.io/public/tags/展示/index.html","f48c17383297d314d83c3c52de3a0807"],["C:/lmislm.github.io/public/tags/工具/index.html","7335e9a0150e49aa4bd3f0e8dbe735a4"],["C:/lmislm.github.io/public/tags/感悟/index.html","02a573270bf6b6350d3209f2c4decedc"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","3492a1f88a7684109edb2ea0331558c0"],["C:/lmislm.github.io/public/tags/编程/index.html","9e3bf7a0eab5b80a57debf276a11c4c7"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","df5e76ed7bd66213762ba0c5677c39c1"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







