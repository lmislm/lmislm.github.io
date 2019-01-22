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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","3aacaff976c5a70db482e54750ec9e75"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","faa9f08d8843f7c7501276708f971c4d"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","a157197195ae581b060ab6397fe2dd5e"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","bbf46572d2aafb0d98f688879bee562f"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","3173e94476d235bac5a5fd91b37bcd3f"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","0b2c9ea7324fada0b9c9507f655502a3"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","29414c12862edd21fcc3a571b65ec585"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","638fec9506c47513a7078a3e8e6dcce5"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","7986acf0821ffe944c90d93cad3466d0"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","da05d9371d0cb2d0a0ab57dd4dbfe0a7"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7298151b9335ed304ac35706a7ec1c01"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","de5b314a7cb2bcf1e17ec42afab5bd7e"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","89cd8992095f328294808d8a387e58cf"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","ed36cab2d7d33e03f43dc85926db1b1e"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","b7596b87e7d2b92db33a39279225f8af"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","fe5097b4ffa8c9396a2e2323a21eca90"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","ca7c1c0b14f524a6d4229f3e9c5fcb54"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","352b869396f92f090a1a8c6efc4a6db3"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","a82c0478a7e545cf27f4b7d0d4b3aaed"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","3c6ad910cd5d24e49ba54b735bc318c9"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","f98da049e83d034a5040a4300ba85cbe"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","11249c33c2e8c736d357cab7e7f6d96f"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ad1dec85bba3a6e4a90bc8e7b7bd75bd"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","4bb3376b2b743e7122c17e96ec3c264b"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","5e2d5c0d87d32d9419a0dd62752c795d"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","968735c47e9c29b9c3de4057bf9828cb"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","7a782c8078789e23ae9e716eee910fc6"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","0fe75b4acc6107791d6ef449bad01262"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","b1a714718522009d35673c11a89cffca"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","8063c0572d221c3e439ac4dc58910ed9"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","27cc51f90cb4bb0f945fda1cda2e65e8"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","7cd5ef3de961801a9fecdc6cc952e425"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","37555f69ee2c311a8b4c857bd770e3ea"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","956a1ef1b295ee0573bb432efceea1cb"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","0cd0d5f5439aeb2fff387619a4377d19"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","6ce504ae041538ff5cac4247cad06dca"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","0ee50d4ef2a50b7de2921f59aa3c33e5"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","1cb3b6392e7eec7014f1ac7229526284"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","ff006777f473b11396a6aca8eb7bad87"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","c6c0948fe6f83865426ffe4fef3b6485"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","e7fd60e9665a1aa60919ad39a00188a9"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","05efcf1474b623d4a827b33835cc9012"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","323907510bd5c2d3e72040044fa54e0b"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","21a8e5937e218ac16925cd2fcd8a04c8"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","cdfcb603b2071bdc0fd1d47c10bd7280"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","7a90254b3cb2d9e12a68e6fb6b46aaed"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","eb3383f1dd197279f3d2b29f24cab46d"],["C:/lmislm.github.io/public/about/index.html","c09b2bca2b4203619ac621229e0c9641"],["C:/lmislm.github.io/public/archives/2016/01/index.html","90cb74c5a0cc60f66e767977bf868a87"],["C:/lmislm.github.io/public/archives/2016/03/index.html","b7bb0be5682ab1ffdb9b1aaa3b58f382"],["C:/lmislm.github.io/public/archives/2016/index.html","db9edc6451b1b2737feab2e52e0af900"],["C:/lmislm.github.io/public/archives/2017/01/index.html","b4f9bccb965cbbcb7451f582679d4070"],["C:/lmislm.github.io/public/archives/2017/03/index.html","18f49eb58b4f1bada4fe164ac6105a64"],["C:/lmislm.github.io/public/archives/2017/04/index.html","422dc998c4f7d75ebff8b9a2c8f089d8"],["C:/lmislm.github.io/public/archives/2017/05/index.html","a397e50f3664c8910e1295e4dd07363b"],["C:/lmislm.github.io/public/archives/2017/07/index.html","2b79df2be887293717002815ff144b24"],["C:/lmislm.github.io/public/archives/2017/index.html","91ef0aaa98a5b153648978edc0880ff5"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","fae402e2d1d5a2914327bf2c633e6ff6"],["C:/lmislm.github.io/public/archives/2018/01/index.html","fb3b6dd820156aa1bbc88f05f6ca8bcf"],["C:/lmislm.github.io/public/archives/2018/03/index.html","d06cff8303d27b101213a57357aa5df6"],["C:/lmislm.github.io/public/archives/2018/12/index.html","507641b2521ac10093f57588ffa786f4"],["C:/lmislm.github.io/public/archives/2018/index.html","724f95a685ae3c849c7ac8e62bb2864d"],["C:/lmislm.github.io/public/archives/2019/01/index.html","f6c5e2bfd25d9da5154335d82abc595b"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","4d66f9cd00fa1ca873573b38ff6b0ebf"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","c39108444f91d6a469a35ded3c9528b0"],["C:/lmislm.github.io/public/archives/2019/index.html","bd79e346102b58f2696a80a43ce91133"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","f6def1e7f402be187ffe1506747d8961"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","498804a5fb4512d815ddd1579899eda2"],["C:/lmislm.github.io/public/archives/index.html","8aeaca1c4207c478e2be7e8c5b52bed8"],["C:/lmislm.github.io/public/archives/page/2/index.html","5f02539d5c808837c28eafd514041c9f"],["C:/lmislm.github.io/public/archives/page/3/index.html","3b539fef7f11233d7c76c2edd8ad5a24"],["C:/lmislm.github.io/public/archives/page/4/index.html","8056cdf1773462b4847f5c793232cbc3"],["C:/lmislm.github.io/public/archives/page/5/index.html","53d4cd80581770703ef0dae9958d6e5a"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","01ba6d6b218b8567753fbca4170c919c"],["C:/lmislm.github.io/public/categories/index.html","87b15d56bbb5d7b8fce0907715775e61"],["C:/lmislm.github.io/public/categories/学习/index.html","21e98e76e390bfc3e0c9e168df84b006"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","8b819eef0b37295b0afc54526484ccb2"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","e018cba7a6493f8289fb527ec11b825e"],["C:/lmislm.github.io/public/categories/工作/index.html","f6fbc85458e852dc4d0cf779b897f1e8"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","7c4cdd49ba1a7a2a631af08b50e8d728"],["C:/lmislm.github.io/public/categories/技术/index.html","67350b48591d61c05915928d448939c0"],["C:/lmislm.github.io/public/categories/日常操作/index.html","221baf5fb522596ba17bb34d9859b629"],["C:/lmislm.github.io/public/categories/生活/index.html","caa425a783ce7087e5aac4c614f191c7"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","cb2466e415527c38a884f66492cb0a86"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","7588ab2c755872111b06ab68caea895f"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f6fb538ee4098e0cb4813d8154e3e940"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","e37479e7cc8219261ff88ca5b1c7f4e2"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","004f0ab0314d34a6d97345d1ed5224e5"],["C:/lmislm.github.io/public/page/3/index.html","780a8eb3ed45e8d7279fc9edb6c14cff"],["C:/lmislm.github.io/public/page/4/index.html","03ea857a1d62b92fb1cf5898905a4d2c"],["C:/lmislm.github.io/public/page/5/index.html","cdd1577a79c257177dd493bafdf2746e"],["C:/lmislm.github.io/public/tags/Interview/index.html","310763bab1b433225771d3fe34faaafd"],["C:/lmislm.github.io/public/tags/JS/index.html","e6f311aef82c7d7f9b607d4116abde48"],["C:/lmislm.github.io/public/tags/acm/index.html","79d9bfeb01c8dbc038490719b6729434"],["C:/lmislm.github.io/public/tags/c/index.html","e4758687f58ea8121321293544380215"],["C:/lmislm.github.io/public/tags/codewars/index.html","e3fda871b06e03882ad87ba140e5184d"],["C:/lmislm.github.io/public/tags/css/index.html","1ff8fc671d23489fcfd35c2a1467d4b4"],["C:/lmislm.github.io/public/tags/git/index.html","806c6c83c29eb4b5ce8bed29570d90bd"],["C:/lmislm.github.io/public/tags/hexo/index.html","139c2028c82ddc63398aae12240aaab5"],["C:/lmislm.github.io/public/tags/index.html","2e1c7e4636c01f6b7606f4933858d8e4"],["C:/lmislm.github.io/public/tags/markdown/index.html","4f9175f0a6d89a371a7f01e039d39f24"],["C:/lmislm.github.io/public/tags/poj/index.html","13e107d0591e9d5d5f94f627d5ffdace"],["C:/lmislm.github.io/public/tags/shell/index.html","d9b24f65158b0fd6caf73248350acdf2"],["C:/lmislm.github.io/public/tags/vue/index.html","64325a105345acff36c1f9558a387d67"],["C:/lmislm.github.io/public/tags/前端/index.html","fdd182696937a8f6e9f6c189e826c2f3"],["C:/lmislm.github.io/public/tags/小技巧/index.html","454fd0a593561ae8c65ec59dd4e4f0c8"],["C:/lmislm.github.io/public/tags/展示/index.html","126a156310d4fcea9c855b69186eced0"],["C:/lmislm.github.io/public/tags/工具/index.html","a97d5f298d9c1f1a50d7b6de18d13d08"],["C:/lmislm.github.io/public/tags/感悟/index.html","0b956f3eee810c8383d0f0c2af22b2ca"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","1f12fc8a407c526dda80dcaeb5b2f2a2"],["C:/lmislm.github.io/public/tags/编程/index.html","95221cce756e7ffd949725fa833e8656"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","76637801169ec651a9ce52e5d0f0943b"],["C:/lmislm.github.io/public/tags/运维/index.html","995ea80b6b65e7466b142c24cca0b141"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







