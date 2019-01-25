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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","abf1767dbb827ab0a30a0bd2f13c6654"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","d2d9ff9b66da52ac04a4d0d0b02d6c70"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","a257ade67ebdff4a444c7933ebffb687"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","c1ccb4a12117cbc304e2a698fb551c78"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","1af898176a84d2d2a8d5f04bee533e28"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","69aa281110bf26d4e17b3e06d552084d"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","1f709d563ee230a142ca23c36d0f9211"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","24a561a153db48b8b4e10ba80ffeabb6"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9093a33c9d20b6a7fdd4e34eb83d14c8"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","063568e9e9cc3ed7ab3e60cda492c131"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","fd5b1329fa709baca0d169c84a5b7e2c"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6844e42aca212766bdb3a48dc0627537"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","d154bd4730fc027de28dd9ee4ba8f985"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","09313e301c9dbd405086a5a0ead90850"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","26b7c965f86050dd116f89187cf799ff"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","bd5b957cbb7ccb96cca190421af81b9c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","e30fe258deab5b83acce593cb0515cd2"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","5d0cfbfbc5f0abe732fe7e1f0799ae60"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","524ca1e594a729041a1a85b66048fa56"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","eb25acb86a2a599c3e00d10e4fc26c3f"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","4120f8265df721d9545a40077f48e41f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","fb2e12c9ed12a244c9bf37cf9cf360be"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","4e9097843a7b74a7dae395aefe4bd09a"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","09894c4fadd8ae32f247c4caf7dc965a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","971c67b9e2871ada3548df13100a5b7e"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","401f89d89df5ebe92d15a8fdf8c9740f"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","5417371c3e94a68c2435a4885c9b6287"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","2ed7e086bde084a63d7ec73c61c90699"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","1e156001cc1b21acfcd93ae11d4fcb4a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","1761e0240bc1db8ee5f106155e14940f"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","072382f8459ff26a4f89289c759142d1"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","7fcd10a8e40584ea3102aaafc7af27ba"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","b38d61535db77cc94f81a992ba29c5a1"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a166d61b65e82b8de844caae37186692"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","21843f16811b45e164787a7eb4bcaf74"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","334108e5a2493bf450ebc18b3666f36b"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","71b1389ea01b88a80e96fcf28fa1d7c2"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","6a08e2d0467508fd3e81bcebf190f523"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","620f3f566ae1e8b6da5d838ffd8827ae"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","91e38deb873c21724da9887bd01d2971"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","c8507b79282296f3ba928bb86374d810"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","a9cd8edd0820e1cbdc356fb72a5583aa"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","8c3570db111fe44ac823bee9002e7cee"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","7b632008b250ed7f0fa4c107e4ee6d9d"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","4be3b2a89c1c23a0ea3133b7b6fd3d96"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","9490002d37042bf5c500d5d22c2b3177"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","e7a5c56f5996894b5d3d183f8ff0696b"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","885dad68b16581b63f25470d9703f7c0"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","6625f52070bb24c2ab963a571a822d92"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","287892f703a847e0b94b8b36751c520d"],["C:/lmislm.github.io/public/about/index.html","02293b46f9c110b79f0754942d11f448"],["C:/lmislm.github.io/public/archives/2016/01/index.html","32ab66bcb32e599b43b9a2192559d7e7"],["C:/lmislm.github.io/public/archives/2016/03/index.html","726f3bf82581f33d59da987a8cb00018"],["C:/lmislm.github.io/public/archives/2016/index.html","75f00a189579202a6ec790dc3bc7521a"],["C:/lmislm.github.io/public/archives/2017/01/index.html","b22c49e4a9fd4eac4448bd23ceeb9dbf"],["C:/lmislm.github.io/public/archives/2017/03/index.html","e59ba701b5a3aab0771dd18e5b8e763b"],["C:/lmislm.github.io/public/archives/2017/04/index.html","90417ca99a72c405000149726f388ce2"],["C:/lmislm.github.io/public/archives/2017/05/index.html","1e75e6ae2ac91af27bff2858ae2aa15d"],["C:/lmislm.github.io/public/archives/2017/07/index.html","a3becf5a87f44bfa167f0005ecf16ff8"],["C:/lmislm.github.io/public/archives/2017/index.html","4b9292bf5b11296fd9c58ec71890ed77"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9dc64994c6ae61d2b3fdec867ee378ae"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e61e8d96ed1b62357968251524988e5f"],["C:/lmislm.github.io/public/archives/2018/03/index.html","4fcf5ee66904749da8289c735f39faa1"],["C:/lmislm.github.io/public/archives/2018/12/index.html","83b4ce663a2c2beefcf0489568b953da"],["C:/lmislm.github.io/public/archives/2018/index.html","44adc045f331a967f5cc9a0512457b37"],["C:/lmislm.github.io/public/archives/2019/01/index.html","54e656a49587ca3d4fe8fa9388769721"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","701ee538cec0de3f4b0c9d0f9cfbd8e2"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","869ceb46f101302e4a83077478b6b91d"],["C:/lmislm.github.io/public/archives/2019/index.html","da0bb0afc552b5c99201654397ed8775"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a3982c3b7c5393a303e563eba4e3ae33"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","97e8e9d5fa4066b68b6f0e0cc07b232b"],["C:/lmislm.github.io/public/archives/index.html","6f68134192ea8deacead600b0fea1c8e"],["C:/lmislm.github.io/public/archives/page/2/index.html","bf15b6ee1aa26f7ca1e347fcc2751e85"],["C:/lmislm.github.io/public/archives/page/3/index.html","8de13e4b37b8d6692de82d4f05b3e52b"],["C:/lmislm.github.io/public/archives/page/4/index.html","70455905278a53520774ee7bd628a891"],["C:/lmislm.github.io/public/archives/page/5/index.html","5abb15fa3b4febb9753dacfddf44f854"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","82e7b2e6492fa519a3bd966f6716064e"],["C:/lmislm.github.io/public/categories/index.html","f127f714419256c2b52e84f9f12217e1"],["C:/lmislm.github.io/public/categories/学习/index.html","f65a87545d05526ed0b555144abce284"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","507cff80cbec5b694e5db1540bbb527c"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","b7aa722f11b96b8b62ed2a4786df5d48"],["C:/lmislm.github.io/public/categories/工作/index.html","020aa92eb7ba9152dde62c513513f8e0"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","c9833c0ded15aa28d8a130dd9cfc2bae"],["C:/lmislm.github.io/public/categories/技术/index.html","3055b921dda2f24f812ce2773cfca039"],["C:/lmislm.github.io/public/categories/日常操作/index.html","c41666669a33a662924a1bd263364c63"],["C:/lmislm.github.io/public/categories/生活/index.html","47c035e5e06e7f1d5a41141a238cf72a"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","ed7d6886c7345f31a6105538dd935dfc"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","01af2979ce4b6311e4f1fde94aab47dd"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","6193b8f860fb708675c70336451bbd27"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","352c559c9ff1ccf2d227c8984f40cd19"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","204038c8b417942b5b59c4a146715b61"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","f3f332e2c2f09f9c6a3e0991a22746ea"],["C:/lmislm.github.io/public/page/3/index.html","70c4c101644d074f63bc32198912b4e3"],["C:/lmislm.github.io/public/page/4/index.html","751d0e66c92ec76a12e7c22e8d774ad6"],["C:/lmislm.github.io/public/page/5/index.html","fec5de9b236fe7041c13b5220b365456"],["C:/lmislm.github.io/public/tags/Interview/index.html","f1502976124423df788eef0c99aa33f2"],["C:/lmislm.github.io/public/tags/JS/index.html","c8228de4ac438fd1fac3b0ba126915f1"],["C:/lmislm.github.io/public/tags/acm/index.html","ce0d7027b3997fcae24390c5fcc7f09c"],["C:/lmislm.github.io/public/tags/c/index.html","cf93087109bc6594057c4face067c6c6"],["C:/lmislm.github.io/public/tags/codewars/index.html","b9455f24d373fa0618aad6e8c08dbd0c"],["C:/lmislm.github.io/public/tags/css/index.html","84ae93aa11a2c4f842a2d5c26c0a49cb"],["C:/lmislm.github.io/public/tags/git/index.html","f103ef8c7e8fcc567b4e6c5ecf2e1306"],["C:/lmislm.github.io/public/tags/hexo/index.html","781c8c9a9bc3c6c5618c8c2517931bdb"],["C:/lmislm.github.io/public/tags/index.html","190826686e78deeb57efe5f51919887f"],["C:/lmislm.github.io/public/tags/markdown/index.html","cd2b0e65048a495ec6eedfc9f618b01c"],["C:/lmislm.github.io/public/tags/poj/index.html","6187fadee88950d393520997f499e49c"],["C:/lmislm.github.io/public/tags/shell/index.html","4322b26ffa0368591bba95899f668fbb"],["C:/lmislm.github.io/public/tags/vue/index.html","8da9d3703c78d5dac69b11fd2336c2c6"],["C:/lmislm.github.io/public/tags/前端/index.html","9ac9fc422c15a7e3a94085a077a9903a"],["C:/lmislm.github.io/public/tags/小技巧/index.html","3168cb7e36408d45cde71dba08450943"],["C:/lmislm.github.io/public/tags/展示/index.html","9516b877e76c735559d63b1809aab861"],["C:/lmislm.github.io/public/tags/工具/index.html","9c01e3f79e744aa38334fcca61ef8f76"],["C:/lmislm.github.io/public/tags/感悟/index.html","24901cefba6fc9727f4b6aad3b239b39"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","fba910a0a76c8a9105b521ad54f96975"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","12225d8351ceab1100ea339b6cea3e1e"],["C:/lmislm.github.io/public/tags/编程/index.html","105c36aed5f3c5dc86e6d268a727e338"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","93295c2292e3f37f3780cc630fcf699e"],["C:/lmislm.github.io/public/tags/运维/index.html","eba717f383cfcceb9a1929fa5e2fa7ff"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







