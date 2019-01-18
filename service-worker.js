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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","6768f539250f838ec72331fc86bbe070"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","b47909737baaf544160d6153de808417"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","95e1ca86852d2a540ce4743d91a3c650"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","dd1e607ee4c5a64fe93570e3d11e1820"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","d71694da13140eedbf9cd58ad7a6e0be"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","ccf28166fb9867a1e5fe5fe4f7cb72c3"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","c0e8baf023fad822ab453eba623f5d6c"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","70344b26f3b5e05a044d78d89a729bbb"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","85388940efd72c0425db372790990476"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","a7223b7c6d853624787c84d892dcbd34"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","00dbe75702ca5243cbbce26f25a113cc"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","a6fa343841189782d5c5c0eb34cefd76"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","c7e512d14e9dbc30dacf0e835f1baa2d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9bca790f789157f263ba75d6dce4d925"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","a493cc472ab667f483b5600a72ed01b1"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","80a2171d06f055081e6f28e830533749"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","f97e97cefdcaed2211c700df4ac32f54"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f81625d29318f7b775a641515b1f94f4"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","616ecf8b1c74fc6ee7f18d4f70b4c2ef"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","e0b78171e94db669ee656ff35094a3b4"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","1150900f409819fd72db90928a6d794c"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","291381171b90fc637571d31472a08e05"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","cf3bc46f65b809247b7dc898ca47f96d"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","c694b32aa4c55b62d615c79575a1b66f"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","8d9f203214a81587f4494cae02d9e7ba"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","a6e6feacca5feb0a27c51a9362b3f159"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","dad41f02c50195bde6fb9b6b8667734a"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","86a46d76e3d1934e45472e856557f270"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","cb8cd101b4ef3e90ad7846f46150e9dc"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","afce4fe0956ea8f2d47872eea0c56131"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","fc8457ed38df996ac2aa81ca7f15fd65"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1017d84eaab88f00b6f499ef78cab8a9"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","2a15f79c976fce8cffac65de5b870e3e"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","279f125579a6f31fdbacaf036c951532"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","fd4559c5ce15c1d1fc2128a87120b161"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","fdb1e1abfb2527843f1c7f477ffc4130"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","dc82d4f209064baed0eb5b15178d12f6"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8e20d5d2f692e780c5dcd41c1bba71fe"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","b98d44ade2d9156ce5ec40de9671345d"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","4685f5f01d03a4cc186a2d4c72df2c4a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","bbcc6b2e2f885e3d69a319e200b7de8c"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2ae074f8a95f563e434253ef1bb20653"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","9a14f3ccdddbfa105e1ea600d5188718"],["C:/lmislm.github.io/public/about/index.html","7d7841497e972cf3a55630443bed50f7"],["C:/lmislm.github.io/public/archives/2016/01/index.html","eeb58eda039c074863a801ec167b5f9f"],["C:/lmislm.github.io/public/archives/2016/03/index.html","cc8d758a38c1ba4a9601ac32679ca6f2"],["C:/lmislm.github.io/public/archives/2016/index.html","a91dc0e63935684392f1493ffef0dfb4"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e3394ff76b4f8b64ce52d063945f4d15"],["C:/lmislm.github.io/public/archives/2017/03/index.html","d07bfd23f5d398530dec96c35386b059"],["C:/lmislm.github.io/public/archives/2017/04/index.html","4bc7bf9e5eecbdcb5445040fd47467a1"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ef34be68de008c9dee98c4077f9ae328"],["C:/lmislm.github.io/public/archives/2017/07/index.html","c0cf509766d856cf80d25f8f1f3314ea"],["C:/lmislm.github.io/public/archives/2017/index.html","d9ffaaa6a3536211bb1763a4a42ff331"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","a19c239223de25396aab454dab064da2"],["C:/lmislm.github.io/public/archives/2018/01/index.html","c97309122ee15f0210975584257ab6c8"],["C:/lmislm.github.io/public/archives/2018/03/index.html","11b6787e089672c2fc7861c9710411d3"],["C:/lmislm.github.io/public/archives/2018/12/index.html","2119f0c8a9a6586fb6a1389a9096e1c6"],["C:/lmislm.github.io/public/archives/2018/index.html","0228c44d6c2d82db14eb3619c6c9bb04"],["C:/lmislm.github.io/public/archives/2019/01/index.html","53c2e1a84386beb6cf5a38fbc4d51923"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","98b3ae6cdd7117feb163bce04ee8aba9"],["C:/lmislm.github.io/public/archives/2019/index.html","99627c615d2ab3cef16ae2fa774bbfe0"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","d6f6d46773bd74c357183911e3c24457"],["C:/lmislm.github.io/public/archives/index.html","de0e20c569d714f2b5dd33581f78b34b"],["C:/lmislm.github.io/public/archives/page/2/index.html","1c7886eb11240da0e05d49f7e0367260"],["C:/lmislm.github.io/public/archives/page/3/index.html","347f2636ff120716f84ded45dc49d4ba"],["C:/lmislm.github.io/public/archives/page/4/index.html","be7c6cc4a540872f8189e8108e1574e1"],["C:/lmislm.github.io/public/archives/page/5/index.html","a494aef5b0f8cef39317d7c2a02f1226"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","160fbc1edce39aa04e4d11518005a8a0"],["C:/lmislm.github.io/public/categories/index.html","3856799882330677a3bf2b55d0ea4db3"],["C:/lmislm.github.io/public/categories/学习/index.html","ebb8511d945f7de43deccc41be22bdc0"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","ceb5a1958ecdd6b94930dc032a74f8da"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","08a2f274e6ecb0c7f921874e965be760"],["C:/lmislm.github.io/public/categories/工作/index.html","d2cd1c48b1b9b7c4af444ff9555c6c9d"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","a16bec5a0b89af99217e8cf667b81bdd"],["C:/lmislm.github.io/public/categories/日常操作/index.html","27471213c543e5526eab99a67c78c3cc"],["C:/lmislm.github.io/public/categories/生活/index.html","151d51e34b134d268b75b70e7824a417"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","54eb307895efe3d6966603f38cac6677"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","39ef8bc1f530386fa734e80ec28a866e"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f9964c7cc0a174b24a798acb58409c22"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","330ab6527cc35ae9d81bb748c1be56f4"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a49d24ffd91689e0863d029c042c3c86"],["C:/lmislm.github.io/public/page/3/index.html","b4e51e8f1164820a99383426a4c65bf1"],["C:/lmislm.github.io/public/page/4/index.html","e5d67d78d13dd4eefa5bbb9c9d0122e3"],["C:/lmislm.github.io/public/page/5/index.html","347298d44660b7fea4e83bfdd944fff0"],["C:/lmislm.github.io/public/tags/Interview/index.html","b61f6849537c60db2ef3ac48b9012ad6"],["C:/lmislm.github.io/public/tags/JS/index.html","9afa84dd6c31c40642a9c395918e88a1"],["C:/lmislm.github.io/public/tags/acm/index.html","cf7f8855f30bf30d589708fb786606ba"],["C:/lmislm.github.io/public/tags/c/index.html","a70693842317fe2ce2b4288bb5eda1da"],["C:/lmislm.github.io/public/tags/codewars/index.html","e011a3bd60ac9574627020e83237cdd0"],["C:/lmislm.github.io/public/tags/css/index.html","8bfe227167e824e8da04d2c997f8df1f"],["C:/lmislm.github.io/public/tags/git/index.html","bd78fe756e282f4ba3cf05c244f59330"],["C:/lmislm.github.io/public/tags/hexo/index.html","3fde64d0e71e8d12e6850b11f44c08b4"],["C:/lmislm.github.io/public/tags/index.html","ac97c11ed120bd5b3a13a3f751578330"],["C:/lmislm.github.io/public/tags/markdown/index.html","5ddb6808a64a3812294744a96751bffe"],["C:/lmislm.github.io/public/tags/poj/index.html","37078d04526cb961fee6af7d0ff4a44b"],["C:/lmislm.github.io/public/tags/shell/index.html","8ae41cb5e542276f6bea58480634ef54"],["C:/lmislm.github.io/public/tags/vue/index.html","2f5826c48b75203f3a22a91348ca3f3b"],["C:/lmislm.github.io/public/tags/前端/index.html","ce27d719903c5eaf306e813a3a857486"],["C:/lmislm.github.io/public/tags/小技巧/index.html","04e7728a4a642b834707bf290f3a829d"],["C:/lmislm.github.io/public/tags/展示/index.html","645bd00e61230c2913ef8eaa62304bee"],["C:/lmislm.github.io/public/tags/工具/index.html","43b7c4a3c477a026cbddf50900db67b6"],["C:/lmislm.github.io/public/tags/感悟/index.html","6faaf5df9fbbc5eb12cd6599449ab637"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","da11efcdd10e0f893bd7e841d9bbd718"],["C:/lmislm.github.io/public/tags/编程/index.html","50c6394a242989de2bb66b42c8f1a103"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3c9c374c11bcc7ba61978450948d9bd4"],["C:/lmislm.github.io/public/tags/运维/index.html","78c99d0bf247c35c05bc94949e6773b5"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







