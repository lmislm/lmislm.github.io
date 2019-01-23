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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","86ffb2d50fd3f94d98e226a4917b06f2"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","e3fad8a95aecacee99331d9e0c2900d6"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","9afc2232d760130f082647d155db8cda"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a570b0c421a2bd629d829f9cab8ac448"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","84c6b41a8b7d711f68fac3f20ba75b16"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","ec13dca8f797c89f5956964a550b5aee"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e04462ae509b2877d4352ab492c78ca9"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","edf5ff642376a0e6d1335f7bca2d2131"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","8cf7d08c5e7dcf1a6fbfb1f3fdc69fbc"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","932f76fe55b2831ec07b81415b4b5fa9"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","8a18a20c4337cee713418ef6eec4b27a"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","9b0d8f6258752a962629a8e1811cb026"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","f6c2630f9c7ee2a65dfbe34689ad8940"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","e623bf5c21535a94f034c2564c9090fe"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","d5a5ec62a8f471f54915073b5ba1b055"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","8834833f550cdc3e51003ed1d8101e3f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","21a51bc3d2b20462c7e18181513c310e"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","05bf1aa0a78364b28b8160a5017e1479"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","2c8fbc8f15e964b8bb0acf477694f230"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","2fbf0d5ca2919d301fdf6c2b463ae8fd"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","925066ded9adb0da36220f577e18bff9"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","14fc2607b4f64c118dfc186cd3d0bb16"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","c9e21dd7fb03fea6385ddef66d74bef0"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","d5998b0bb9854ddc288ba709b2d8b4a0"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","bab6b9ac0f0a5076fb9f3ebd3ee6c061"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","8a4ed520553dd2c1303912738bfdbd64"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","fd4dcc893d36da39b1fd017f45563bcd"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","4be1cd0dc8c2136c0735b7f7c0327d62"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","321db9e3440c33d5ae114aa492c1e377"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","dacc217874eca72a254ef64e8f074a41"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","4a698ba156658ff0bc52d699a82061ed"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","d66aa9c6147126b5836b3c25f270e841"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","87cf9d5daf129e89afb7688dbe3faaaf"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","81d9576360189c1c99a8301dcc6afe7c"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","e6fc201af65934923a151bd18c8bdf3b"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","23a49574dc77a3bb4c8827bcad3f5f9b"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","f61fe098e8e3b3eb8820d959713cb899"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","54dda6ca71ce5174808fed436d82f8b0"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","4e8a3d3a1e529e573d67febf03cdcab2"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","d6ef85849d818e5291258b62f5d00131"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3e7b80853a78a17a01c587cb614d0d67"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","165c8f0a21b7d2a64e46f07197d4f9ea"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","2170550fefb290109069a96fd1854ece"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","cc573d71624e130d311eb0cbaed9c122"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","85f77fa6bd98a275e0ca2699fe1c4178"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","f64f9a3937dd6f5619c11454632fa35e"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","e5e2e16605730e856e17574feb29c94e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","c0d567445ecb63bb374effd07705dccc"],["C:/lmislm.github.io/public/about/index.html","8de3ecff57282aa15f178332a0410324"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c72a7258a82ee10134ae363c9285f02d"],["C:/lmislm.github.io/public/archives/2016/03/index.html","ecd1781547b0a979efec3dd0cf419495"],["C:/lmislm.github.io/public/archives/2016/index.html","6959da3f5a4fd516cb198bbf868066c7"],["C:/lmislm.github.io/public/archives/2017/01/index.html","bba20fdb1e229103e5562f1c4bf36656"],["C:/lmislm.github.io/public/archives/2017/03/index.html","bd1c5258d86bd815ef09c0b3798a622b"],["C:/lmislm.github.io/public/archives/2017/04/index.html","ba5b912e0a18e1a5244993ae1e7f5ca8"],["C:/lmislm.github.io/public/archives/2017/05/index.html","93d2646c19485e01ba6208e607a72593"],["C:/lmislm.github.io/public/archives/2017/07/index.html","9d8a6fbb19f62c89a1b133f27213c5b4"],["C:/lmislm.github.io/public/archives/2017/index.html","b4ecd814b777b733cd19b6314e28668d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","e673f16e66dbcd8d6d3e5f46a27ae27e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","ef79b1a99df59e53c55ebe111a734dfe"],["C:/lmislm.github.io/public/archives/2018/03/index.html","5fd83f40592725e8a160cce4aea9dc71"],["C:/lmislm.github.io/public/archives/2018/12/index.html","10631440bd00b85ba1e8672be1b4eabd"],["C:/lmislm.github.io/public/archives/2018/index.html","1b7aace8e7efaa1cb2f9e516de8ba50a"],["C:/lmislm.github.io/public/archives/2019/01/index.html","d653f4e6657bddd04354135cab654394"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","09054520e594ec7690297c4134b97763"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","171a1ffbbfcd9c225ef530d629dbca08"],["C:/lmislm.github.io/public/archives/2019/index.html","1c0f3daf4ace9fba35e29f8e56da9873"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","29b289f3cb4d4b7f3460b15b74e7c8e9"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","30ac2ee1867769dbc65be7c90c197cd8"],["C:/lmislm.github.io/public/archives/index.html","51fb8931788daf0e6ec59e2515e87e2a"],["C:/lmislm.github.io/public/archives/page/2/index.html","da2fedc36721a51b92035496b45969ec"],["C:/lmislm.github.io/public/archives/page/3/index.html","a730885e44b3580932cd242d16681a26"],["C:/lmislm.github.io/public/archives/page/4/index.html","e45705e3628c162dc056fa3e6845c147"],["C:/lmislm.github.io/public/archives/page/5/index.html","cd7731ace51ade9bb19a6708651d8ffd"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ab6abd10fa2ffcdbf35bc90a3adadbcb"],["C:/lmislm.github.io/public/categories/index.html","0a5bb422d4a77c11ba0e316d25c7563d"],["C:/lmislm.github.io/public/categories/学习/index.html","43dbd5465a3bb7fdeebf537ed504bef1"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","ad87d93f60f2b9cd4c32ac1e3aa1a3cc"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","bd3e19f0d3355e51654a542525c6dbb8"],["C:/lmislm.github.io/public/categories/工作/index.html","ae2c447f917cabe90dd7526fd52459e4"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","b40662fdb911b6b7aae070659aeb8de2"],["C:/lmislm.github.io/public/categories/技术/index.html","0a68838ea1892d594dc4884e5cfea19c"],["C:/lmislm.github.io/public/categories/日常操作/index.html","7807f0e5cab41da3f62b1d66bf81b3ff"],["C:/lmislm.github.io/public/categories/生活/index.html","a571733fd5b12643dada584b7e1aa7a8"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","da13f916ffbd819b9b1e608ef212042f"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","51bc731f6a3b5ed174b9d52d53205ab0"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","1cdb541527816174ead3ff2b9a6c270e"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ec03065d0b23c4bd481d821d7f9d2a0e"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","6e8d330205f66cb2bad44c7946e6cb50"],["C:/lmislm.github.io/public/page/3/index.html","f1e83ac9fa11d641bb566a42fba39bdd"],["C:/lmislm.github.io/public/page/4/index.html","e0a636f0a2bb5fbdceadf8909646e704"],["C:/lmislm.github.io/public/page/5/index.html","3ceb7ba4c85af3cb94b9671829797055"],["C:/lmislm.github.io/public/tags/Interview/index.html","e526a2239d8e04257dbcef578e158003"],["C:/lmislm.github.io/public/tags/JS/index.html","e3d32c31c182c7d1b3169ab1a17faada"],["C:/lmislm.github.io/public/tags/acm/index.html","7f9a2d6e71ad594555886b81603e4d68"],["C:/lmislm.github.io/public/tags/c/index.html","73be06302388c898c909416d5dcf8adf"],["C:/lmislm.github.io/public/tags/codewars/index.html","722247a54a2a9b2a636bcc25c8b1fa4e"],["C:/lmislm.github.io/public/tags/css/index.html","9dd229b564899f023a850b3ebdad9e30"],["C:/lmislm.github.io/public/tags/git/index.html","2e964e4d0f28d5629ab4c3396945c069"],["C:/lmislm.github.io/public/tags/hexo/index.html","04c43a32de1e8915fd349714dc53bf95"],["C:/lmislm.github.io/public/tags/index.html","883ef1359a49f241d4a8a06fe038d730"],["C:/lmislm.github.io/public/tags/markdown/index.html","b676c78fc631fe45e3c28ce1b9c5c32e"],["C:/lmislm.github.io/public/tags/poj/index.html","32218812fa752e5d62d127bee3bf9d87"],["C:/lmislm.github.io/public/tags/shell/index.html","82b3243cac09ec9a52b4a86a2c8fc99b"],["C:/lmislm.github.io/public/tags/vue/index.html","f791f09d1ec97371688b4d862fcf0f61"],["C:/lmislm.github.io/public/tags/前端/index.html","e537cfa873c76008f8825f0906a05881"],["C:/lmislm.github.io/public/tags/小技巧/index.html","8aa991e60e465496b9e32e879cdd309a"],["C:/lmislm.github.io/public/tags/展示/index.html","6eaa61502c57fa9f3217e01cc4ae8326"],["C:/lmislm.github.io/public/tags/工具/index.html","3a8db8f31caf7eb29c958e2b7e6eb488"],["C:/lmislm.github.io/public/tags/感悟/index.html","20b952e2ee8d8d4e9b1dfc050945b523"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","608baa6641fd04131ce1597ad7e52057"],["C:/lmislm.github.io/public/tags/编程/index.html","1c29a142aa185e225175e3dc6cbd876a"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3200fb677de155d6f104e5a5ccc8777b"],["C:/lmislm.github.io/public/tags/运维/index.html","4d8a51dd74cec570cc94d823a6cc36ba"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







