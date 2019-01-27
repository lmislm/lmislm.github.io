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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","c5ec1eb48b7a0b936d915c8f5ad0a93d"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","12c45e7a00ad7be052493a72cb0fca7e"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f781ff2ca0ee973a964db8700c57d655"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","1e4e238f6bd28783af1cb8d8eb897ab5"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","4f1c41e5c719e1b5e3d08edf9c4ff962"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","04bec763490fa5cff832951a771544e9"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","bf22952a07a1a39befa52f0619571b89"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","1668f27abf0ce9fdea5edda30d1fc50d"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","e0024fa560462810f77012471326702f"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","653ae28875a4f953f2e231da82f1cf62"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","bcaddb2e5ba800a006a21ad87730fd3e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5f4ca4c928d6b76c0b46403d3b7e7c9e"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","a49186c4fbc8777c6a8829cfe3145064"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","02bc7127e8d18ecfb85a429d37acb00e"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","00703fc3ea07efe8536c6f9f649c5207"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","6889282b17e83757301a1a1ec4ab3a8a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","17032cdf95b3659c9bfcd0321b3a8f46"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","dc77c0f0d5d1d737fca87b3d01df07e1"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","f1ab1bfecd67065b84cec7aeb277c284"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","39fca9f2de12949fc91233544a59828a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","a9551fee897e7596f1fcc75e8c6f0ede"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","715b5cab54fdca9402f6662d97791652"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","f820a2e57508268deabde9852edf9ec9"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","2084c6d0e9d2b803e803f7a975cb38c6"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6db3f7c5083fd21d755508f393e83a3d"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","129f4c5ba14c17577e143f639d65b725"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","2085ea2ee91658d45ec722029e9d1076"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","68f1ec89139893a24913bbeca1bfcead"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","d7d45a620d9fd892eb1a16db99a2eb78"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","52f1e8fbb5ca24295d0759007ac8a0ef"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","c7de770fa3b96fc36f8f7764c764f2df"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","2b3028ea8e5abc4fdaf37c45ee276339"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","d80df45b3542bddf4eec4489cf3c4380"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","9bf6eed486b77463f6c6b233715b9a48"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","60d501af247f6d512beff32ba2537fca"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","170b2bc682e91840ebe912554c44fd3e"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","6c0fe68df760e1d61a05e83c71456015"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","42b66e83d649ffc931310dee1839491d"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","767d9dda10940a91d13677bd8f1032a4"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","0c4c6aec5947af883e8b2d5c4ac15fb6"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","5168e9765e2c1b67a88d46a2fbc872e8"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","5407ac1710f366a1f4a8781d783d09ae"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","55a0eda4d9b50255871807531499ab17"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","4b13012dfdf70b975abf581268978398"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","4d441b6153a3253c24fa6df9f50d7795"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","8a1d3ad06dfce42756fdca4847cea43b"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","48cfe0600bf50160681876b1630a0ef4"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","bfe675faf187b19dfbcf9035c573e30c"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","96a497cd9049b217c52e6c25e5a3bea0"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","7a9ed5c3af836a0fdc8e6e11754432b3"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","646f284ada61d3eb1938252aca0c6ac3"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","56c2cec9323824428fc87c4ca72b95a5"],["C:/lmislm.github.io/public/about/index.html","1532487583b7103b97a9dc7b2444ac61"],["C:/lmislm.github.io/public/archives/2016/01/index.html","21ae601452e985807d1b81c7cdf99a1a"],["C:/lmislm.github.io/public/archives/2016/03/index.html","27efbabb88bb795c62a1ee3efe3db22a"],["C:/lmislm.github.io/public/archives/2016/index.html","1b085d7084592a3cf29034630ec3dced"],["C:/lmislm.github.io/public/archives/2017/01/index.html","3f39d084fd77613e36591211bfe88034"],["C:/lmislm.github.io/public/archives/2017/03/index.html","0dcc66b9ca4c06c974a89ada16f0fb2e"],["C:/lmislm.github.io/public/archives/2017/04/index.html","0c0be9ac2370ffb151a5f514269c6eee"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ee1050f70af947c4a63051ff3a280232"],["C:/lmislm.github.io/public/archives/2017/07/index.html","de4693c48ded1bd9f99bba4efc516113"],["C:/lmislm.github.io/public/archives/2017/index.html","8d66e4189d7a892de79baeb092b19f3e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","0f2abcc51f44257982d103c3753c5455"],["C:/lmislm.github.io/public/archives/2018/01/index.html","733a5ce695a34ccb67144d62a3f6a19d"],["C:/lmislm.github.io/public/archives/2018/03/index.html","a4cef9be6c28029f1990640bf8be95e3"],["C:/lmislm.github.io/public/archives/2018/12/index.html","a22efaa67987e688555d0797458ceb92"],["C:/lmislm.github.io/public/archives/2018/index.html","7a440f47fc9bb6ee81e253be108475c5"],["C:/lmislm.github.io/public/archives/2019/01/index.html","b1d7c26e0673aa5a737a45ffdc6978a7"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","0c5f3d255c4e9b71a14363b3bc3dd2fc"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","5a3ed11632ab21013acd1afa9bf306a1"],["C:/lmislm.github.io/public/archives/2019/index.html","f40bbb99df05be31186842828d874ba2"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","ef4f0480e502d12ee503869c3cc5f47d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","4237284b2df62461c33e11288e2befbd"],["C:/lmislm.github.io/public/archives/index.html","b0637427c9a292e95e7080c4c1207b2f"],["C:/lmislm.github.io/public/archives/page/2/index.html","5829d7f08870c0df0ce55689e91c1707"],["C:/lmislm.github.io/public/archives/page/3/index.html","46e95241b9294ca26e43717f29c266b6"],["C:/lmislm.github.io/public/archives/page/4/index.html","8daeeb612fda0ab6fae7cab8bf87d0b0"],["C:/lmislm.github.io/public/archives/page/5/index.html","c651453b90a4cec2bb5527b48f1d08f0"],["C:/lmislm.github.io/public/archives/page/6/index.html","aee428e75eefdcd32850ea438fc4b413"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","4d0c9080dfde3d4d8f4539cabce9f717"],["C:/lmislm.github.io/public/categories/index.html","2d42fb27458866741a0f241206cc0521"],["C:/lmislm.github.io/public/categories/学习/index.html","0c73866985d182b912ac901d1d7edf82"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","36bf1f28b6607c832c0092b971b7b399"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","a740ff6445dc0bb065b21d26e86caf5e"],["C:/lmislm.github.io/public/categories/工作/index.html","a4cb4e6c32660ecfa5fbaf76b1df3230"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","a4c7e7b7aef67c7b3971dfc3b2930a73"],["C:/lmislm.github.io/public/categories/技术/index.html","9825d40637b6a9520717784e4941c22c"],["C:/lmislm.github.io/public/categories/日常操作/index.html","26daed0b5a615d98d35c163419e1fa87"],["C:/lmislm.github.io/public/categories/生活/index.html","edfe7dd6bfd905621340e6f0f7bd4342"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","620b72f17884c9198d2da3dee9698dea"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","ed8d2435394079e281e4654e8b2b5a5d"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","0a801eb71e4352e7ca00ac3c9cdd1816"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","137ed1c31bf51d803c9ce18831b4e08f"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","787105c3ce4a0aa9208d81b92f6117df"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","7b2ce34987db3cdce5ead2472ec018a3"],["C:/lmislm.github.io/public/page/3/index.html","43ce4b7485cd5be6415036615dcb560f"],["C:/lmislm.github.io/public/page/4/index.html","970dbab95d1cf3ece1025b4c8228467f"],["C:/lmislm.github.io/public/page/5/index.html","6580a38a4b1f498aadc17796f873d424"],["C:/lmislm.github.io/public/page/6/index.html","1e91cac177751ebab0ed7b4e065a2ebf"],["C:/lmislm.github.io/public/tags/Interview/index.html","48c6c84aa7872d2b4aa8ccff7440f166"],["C:/lmislm.github.io/public/tags/JS/index.html","5753df510981c1ba20dd9308128f334a"],["C:/lmislm.github.io/public/tags/acm/index.html","e6c64b12edaa8015ea66042d206edaff"],["C:/lmislm.github.io/public/tags/c/index.html","cf38d1341006d4d59f6c0e170d882908"],["C:/lmislm.github.io/public/tags/codewars/index.html","41e8b11b1bc23fa74988ad4291de7e66"],["C:/lmislm.github.io/public/tags/css/index.html","8e013185810933a4fe3c503aff4b0648"],["C:/lmislm.github.io/public/tags/git/index.html","73b5b84097869c2d8364d1926c336722"],["C:/lmislm.github.io/public/tags/hexo/index.html","ff1014062c358f2c6268e59f90e4a8d1"],["C:/lmislm.github.io/public/tags/index.html","d71f1e7caa4a79ac620257576b007467"],["C:/lmislm.github.io/public/tags/markdown/index.html","0b1948618d4533696df56713b859c7dd"],["C:/lmislm.github.io/public/tags/poj/index.html","d5a5eb0a8901ce7deeac60c68e1859cc"],["C:/lmislm.github.io/public/tags/shell/index.html","52bbafbb537f052f30bd176a89b73256"],["C:/lmislm.github.io/public/tags/vue/index.html","e38fa060bfe9841776ffde64a664f6d2"],["C:/lmislm.github.io/public/tags/前端/index.html","434f7b67005f7e74c62f489c33aa19c1"],["C:/lmislm.github.io/public/tags/小技巧/index.html","e77c6c1f0a9916ad63e5f424842b7722"],["C:/lmislm.github.io/public/tags/展示/index.html","413c800af2a689f5dd093849c02d7833"],["C:/lmislm.github.io/public/tags/工具/index.html","3fd01b3b15868c55ca75eed61229c6b7"],["C:/lmislm.github.io/public/tags/感悟/index.html","e698050461d0ebee541e19754f6a7de6"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","488397261e6fa871d27d0d877b8482d8"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","7257bdb690cef3778b9b2bcd169662c8"],["C:/lmislm.github.io/public/tags/编程/index.html","ef11e4731f3eab9d2efed2b995833730"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","96b46e2c634a7ac6a53593e49ae05b55"],["C:/lmislm.github.io/public/tags/运维/index.html","02dd84a0ae493006e3894a11a1629832"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







