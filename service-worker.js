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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","69dc6e52cf5d7a20d758af6cb6a8ff9f"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","ace824ac5ee2332d5932a2241154216e"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","fb571d2ec0da9775c22cca39414bed71"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","ec427f4ceaa3a59e27e5f4a001ba52b0"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","7e96bc75ec878b409357c078f392d90e"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","8bccf58a2c63101abf81106aeade594b"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b7e468a77433369433a117298b7adbe3"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","150d3d2ae58d33ab70c4b750b307893f"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","07c223b0d5541f29d1642b5add4ff443"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","d1ad34b86b67a461d932c51c65df2dca"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e2e81f385122c1641d6c8b73a2366790"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","7393df2fa44c0f9e3cf7ec85adcd8f16"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","dacc3e011dc2e3bac9ce7a7e1dc3fb07"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9539e79a4ef1e1abc47fd380f8d5944a"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","e306bb1f6bcbbbbfbba68293b7954f92"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","545f8b85335dd4f6b20918047fcb8200"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","0e026871f932a586dde82fe95479150d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","17f84deb32c22c670eae7e9c3a25490b"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","26f72fa8bc320a6b0d4ebf72c70d6359"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","9bf3b17e12b76cb3366ec267101692dc"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","7495bba95f0e813aa3358346791274db"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","e7bfce0a41da8f405f1b9bd3ed13644b"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ef124dcbc5355f04d5d67f062dd3547f"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","9644aec25459c6115ba207a89ca9d9a6"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6c0a3422ca5e2145858ff253d6d29f2b"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","0a02acd376caa298fb2e49603b8cf95a"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","86a2f4a45a8d3855d7beac6ef6b78ff8"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","04c7c6f559697fb61ae4e4c38fcfb873"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","d1542f962895202d44d3f8d4ae24d8a5"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","3bc218b2a3be73eaa2d4ae4afe4558a2"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","e8b306804a49ff9aa4360aa4994e0758"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","5720dafdaaa73d889fe2613e25ba50b2"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","7e822aa0fa29c1794fc7b6d29c466e22"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","2bce32ffaddf19f66dcd18a3d52028d5"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","a510dab34a077a8c6b7f5b9cebc8469b"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","6d45d799b69d01df4f47048e349afe21"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","5378f55f5097f352b22fbb7be26ab011"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","3088702b7940296f5d3c23927256fd83"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","689f73f94b4afa9f00eca6d6d3e31576"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","cc5892896b19503a13d785c549bdd960"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","17fa507dc1adf16050f73f7c2bcac601"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","e617c1d0815c8ad5340b8336c1cca4d5"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","f3d1e0bdcc6eb7f5731e0567cecec3ab"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","a2775992106adf99a6061f1337c7a338"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","d3be7fc22a2db70afcf09050ffff656f"],["C:/lmislm.github.io/public/about/index.html","00b39580e8e67a706855282493a56732"],["C:/lmislm.github.io/public/archives/2016/01/index.html","d2c93d0d48224df7d1d1d0d16de1ec42"],["C:/lmislm.github.io/public/archives/2016/03/index.html","b09bac93b28b235a27fb2daddd825f4b"],["C:/lmislm.github.io/public/archives/2016/index.html","b6866273630a294465dbad2edd81ed62"],["C:/lmislm.github.io/public/archives/2017/01/index.html","97161da960cd330cd9e304bbc115ffb1"],["C:/lmislm.github.io/public/archives/2017/03/index.html","8a07308f6129899caffc63c41168529c"],["C:/lmislm.github.io/public/archives/2017/04/index.html","65589a5a9589ce5d75cc46e1dad46ee2"],["C:/lmislm.github.io/public/archives/2017/05/index.html","5ac64121bc18e46249bb2b9113cee450"],["C:/lmislm.github.io/public/archives/2017/07/index.html","ade104ca464963c91cf52d6c539915c2"],["C:/lmislm.github.io/public/archives/2017/index.html","81cc3cbf65653fe569143fb6b36fe202"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","627df63fe6e1b1f9e415c2534d525395"],["C:/lmislm.github.io/public/archives/2018/01/index.html","b4f4cb3ef601ee8f6f5b30ea2ef1656b"],["C:/lmislm.github.io/public/archives/2018/03/index.html","afb8d568a8b52139feca84c201ae9010"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c4466dd85dd2a5a5cb81a0bfa97e53e7"],["C:/lmislm.github.io/public/archives/2018/index.html","28fe81d8650578c145272ef86e8c3b49"],["C:/lmislm.github.io/public/archives/2019/01/index.html","0f31da816baddc05ae38470fa131df1b"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","513b74255529ef6bf4fb4b75c4cbd212"],["C:/lmislm.github.io/public/archives/2019/index.html","a0d46c4d7511ff58b40d8c94f80d760b"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","1942f7179cdc2125ff8be47a04761791"],["C:/lmislm.github.io/public/archives/index.html","ac7d4d15864ff0a3b8b3e77ef6603dfe"],["C:/lmislm.github.io/public/archives/page/2/index.html","91a5673adab968d05a441d73847e4dbd"],["C:/lmislm.github.io/public/archives/page/3/index.html","6b565188c38ab9571c4b691a963a5304"],["C:/lmislm.github.io/public/archives/page/4/index.html","714c1d2541ddb74ab9e8e4b36cf3e5bb"],["C:/lmislm.github.io/public/archives/page/5/index.html","ac7cfed922306575f0bafd55fc96e89a"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","46193c6eda42d82ee5f01f39616c4ab0"],["C:/lmislm.github.io/public/categories/index.html","01e20777ca44fcb89004bf817fce732f"],["C:/lmislm.github.io/public/categories/学习/index.html","1dcd9f73159f747d4b04492fb7a79e02"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","5d7dfb1ac928aae9e647d1861df063d5"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","f8d53fc82c5b4fe270807504c6d3afad"],["C:/lmislm.github.io/public/categories/工作/index.html","0aa1597a3a6143e0127356c123957ea0"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","875f6a45280a03e464d6f2eb7886aa8f"],["C:/lmislm.github.io/public/categories/日常操作/index.html","74234b8068d5df1bf882589a2ae50c12"],["C:/lmislm.github.io/public/categories/生活/index.html","7799befcee130feebdb501a49bbbd4ba"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","ae82355e1a2d6c9ed34c6a5fddb4cb02"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","2efa0c2467d62fbb28ecd42b8d27d91b"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","3166f1a1250f71f191a43d794517a577"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","827fe9747d2be8c485948107a0f5ee5d"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a937f5f432c8b08d9efe98835b819f6c"],["C:/lmislm.github.io/public/page/3/index.html","cb0f67906065e8579016bf7f043be510"],["C:/lmislm.github.io/public/page/4/index.html","97006e2a5fc806d1dff08e1eebff8488"],["C:/lmislm.github.io/public/page/5/index.html","ef63ebbfe78e3473aae0103f22495111"],["C:/lmislm.github.io/public/tags/Interview/index.html","ac3d8fe7b37e32377dd019942175c051"],["C:/lmislm.github.io/public/tags/JS/index.html","955e7844b748ff8f7f12d46a024eaa44"],["C:/lmislm.github.io/public/tags/acm/index.html","cdc88fa772ba68d773980b2f12c3a819"],["C:/lmislm.github.io/public/tags/c/index.html","603f0f75033bc9d996e42c646b139737"],["C:/lmislm.github.io/public/tags/codewars/index.html","78c020ebc773f880b650beff8352e255"],["C:/lmislm.github.io/public/tags/css/index.html","861bab0a2e3fa8f39b598b19ef1b61e1"],["C:/lmislm.github.io/public/tags/git/index.html","adc6abecd50f3ffc2cf716694e3a5aa0"],["C:/lmislm.github.io/public/tags/hexo/index.html","d15bfb1e2159ee31ab48e7d45380fb2e"],["C:/lmislm.github.io/public/tags/index.html","bff6602f42f2c64d383f4b0707e8b50e"],["C:/lmislm.github.io/public/tags/markdown/index.html","05b853d0cf5c110ad55c4230bfe26da5"],["C:/lmislm.github.io/public/tags/poj/index.html","057aa4227ef2f7db1cb65cb1df8bcbf0"],["C:/lmislm.github.io/public/tags/shell/index.html","31596ef54124c44384474a96428dfef6"],["C:/lmislm.github.io/public/tags/vue/index.html","408c51ce1a3443e78ef2197e4270e0cf"],["C:/lmislm.github.io/public/tags/前端/index.html","f5d733834578e5c917ac1b96a34476ed"],["C:/lmislm.github.io/public/tags/小技巧/index.html","7c54e424a8caf324c46ceb3e098ff410"],["C:/lmislm.github.io/public/tags/展示/index.html","c2f9e0769a931ee1cf46ae671b63db9f"],["C:/lmislm.github.io/public/tags/工具/index.html","4ced062f87a30402e3a027e1732ee537"],["C:/lmislm.github.io/public/tags/感悟/index.html","9f60aef7bcfdeb4e981acb0462e978a0"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","b904a67fa2cb79d9de114c4a8a65f46d"],["C:/lmislm.github.io/public/tags/编程/index.html","82011da9035a333bf0dd72fe7e4e3b1f"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","b2c8c317fc4d7f0e621a88143504e1e5"],["C:/lmislm.github.io/public/tags/运维/index.html","83eec5786614a84272712529096529a7"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







