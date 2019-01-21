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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","a0467bb87078dab5a295d62cfdab0747"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","3b9c607bd647bf8fce939f5d4557cca2"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","e4c00fe5321c080e61186e3161a3019f"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7199c87a472496e0b8e6436c6518bd42"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","782cde4e9289e28899cb1af65e3ad7bf"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","8b1dab00fa5e7dcbd2b437621b38be11"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","85fa67014892eeffd2398b24840d48fe"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","20c1e8a6252699e4481f49d03b71037a"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","ce8d90acf3d075e9e485ed198ff2ec5d"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","da91099c0017c00c4a099f35b8af454e"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","c85af37ab96c1be5ad036a326560e054"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","17c0c5da1bc767aba51254fd7757d2b8"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","55c513a8614e27429f2a85c26d9aa89a"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","b80d50712f9edeb622857b27e6db9cad"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","cd4a8eb4ae49f85b758f1bde915d17f9"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","b08c7483a5175210245e7e210eb660e3"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","778cc5c57b9c646ac6564f96aed83d83"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","24bc734a8d005d7a848537ba568071c6"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","c2ca3b1eb829817a5c0ea5bfdd548ec0"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","6fcb08c8ffa12a4aab331aa20eb67d0e"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","1abbb8a49483e2243e1cb79694a03fd4"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","c9e64f95b74712924af462129fa1bcae"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","462d44e8a832f8c11ecebdb77b8d6d71"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","fdbbd95b684d88e7bc84b48761303220"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","4fbc15d450aa3d9f67ed26ab0b53ec48"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","402bed04f2bf1c3320e8861d1835efca"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","ddb04609d38f7f4bd3f6dd523be92320"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","810dcd6973aa6b92604a70a6400ee49b"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","11f0cadfde1b1deb519f12a4232a826c"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","059e2a3e3475e87092dbb3c40db0891b"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","98ac704698db6a068bf0c71a87b43834"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","3e7ee7540ebf32530d73e4b6fcf21545"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","e10e2e32144f6164e7ecc4d83950869e"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","376f58a36149de40267464026636046e"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","18139153d2ee5d68b59d59406f71b53a"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","0147514ba6083212f9767c2f507b166d"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","649cba562ceabfc5b06d9fac364fc21c"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","a0278a30d90660e41a7a362aae6fb34f"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","2cc2c5b8b3cc4b630006ff7e6d4ebdac"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","4cef8012ac38c52c73de6de167cd3bbf"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","741715335d1b0607f953fd20ad1ebc39"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","7eb46ebecfb551262fe71a886e9619a6"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e76f6ce2393c8e92b6c27fac7d868d88"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","5802591e77a2554472c902ed1ecfcd7a"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","942d57f3d0d2cc04f11a965cd2fe6a59"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","f2f1b298949d703c80c1b1036fb91c97"],["C:/lmislm.github.io/public/about/index.html","9098cf1dad001dfb159b8615042aab32"],["C:/lmislm.github.io/public/archives/2016/01/index.html","754515d4d3fd35c6dcd77499cde0feea"],["C:/lmislm.github.io/public/archives/2016/03/index.html","f55268a83e0060e280c0a3f8ecd8b503"],["C:/lmislm.github.io/public/archives/2016/index.html","0cc9d996df54b5b9b19a6618af96b5ee"],["C:/lmislm.github.io/public/archives/2017/01/index.html","a37f6486e12dece731ce31f45919dc5d"],["C:/lmislm.github.io/public/archives/2017/03/index.html","c8ee224e87bd41662a52dd1d98b2cabb"],["C:/lmislm.github.io/public/archives/2017/04/index.html","ab2160616fdb04828fae3628b8489001"],["C:/lmislm.github.io/public/archives/2017/05/index.html","9e8dd50f4a3443432c969180608ded80"],["C:/lmislm.github.io/public/archives/2017/07/index.html","65ce9ef926fb6439f357e4b52792d780"],["C:/lmislm.github.io/public/archives/2017/index.html","0fc95269c7484ffc52ec78a245f7c67d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","59bf9c0dd980665056e1bca9e793eea3"],["C:/lmislm.github.io/public/archives/2018/01/index.html","345abd1e368ce4f89938e4c614b65d4a"],["C:/lmislm.github.io/public/archives/2018/03/index.html","da9e9d3d8b7bcc4b5683bb7a7f088d2f"],["C:/lmislm.github.io/public/archives/2018/12/index.html","583d5f2096c5b47167a8fc4c41696e8d"],["C:/lmislm.github.io/public/archives/2018/index.html","e8b6401ec8baab5cdc06ce4ed5521ce3"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a057e4fc6f9f0b094547dbde15134c36"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","bd2469a1191dfd7c8d6883cec06783ef"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","6b68c5cb06afad55688c664aac24dc1e"],["C:/lmislm.github.io/public/archives/2019/index.html","28c77afde45b53aed148cdab21ae4665"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","b903606e358ec9809bcf8bf30daf8c8b"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","8545666acd197f51d73d21bcc9fec0e8"],["C:/lmislm.github.io/public/archives/index.html","3630f18ae24ce244b44394ae3424f893"],["C:/lmislm.github.io/public/archives/page/2/index.html","8702299762e6c1013de7b53ba0443d64"],["C:/lmislm.github.io/public/archives/page/3/index.html","6d5b189f3be0a653d55ce493475fa14d"],["C:/lmislm.github.io/public/archives/page/4/index.html","6411b76a3d70bba8651424c60a618a8c"],["C:/lmislm.github.io/public/archives/page/5/index.html","ea1cb4682d088a153e6e52ed35cc9781"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","4f4a21b0c305cdb4ef37dae18609b72d"],["C:/lmislm.github.io/public/categories/index.html","21b03493eb7ececbcc1c784acfcf6c93"],["C:/lmislm.github.io/public/categories/学习/index.html","1e2a511ba010f5a98f4aa76b77c8c847"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","7a6c5587afed699ea967fedbdd9408bc"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","6c69c162406ccd1ee0a90a623aee9e2c"],["C:/lmislm.github.io/public/categories/工作/index.html","193706093b5c381cf5fdff7f35f086e8"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","2c7c41efcf173c29cc304b9f8c7dbf8d"],["C:/lmislm.github.io/public/categories/技术/index.html","e4dc44dd775cd7f31517f6863eee6530"],["C:/lmislm.github.io/public/categories/日常操作/index.html","c4f88c0c212a618b8e4ef064e4f11e93"],["C:/lmislm.github.io/public/categories/生活/index.html","d326422b1153b5cee12ef855a5660c95"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","fa4dbc59a8f1ce6483dbf5611c08aa40"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","780cf83877849c667e22bc9d5f274f31"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f66b5e6ead37832f448ff5f48dc552c6"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","b10ce6d8980e6e3ea239dbbf3bb58fc9"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","77bf3d11d5d9a563c188faf78c8ecbdd"],["C:/lmislm.github.io/public/page/3/index.html","68b71407eef8f06e50df14461af2eb3c"],["C:/lmislm.github.io/public/page/4/index.html","828507136a043c0f046ef5eb2870829f"],["C:/lmislm.github.io/public/page/5/index.html","7d8e41b35a74738a6cc3cc4bc946f650"],["C:/lmislm.github.io/public/tags/Interview/index.html","4d6f503d76cb7b59570fdf643d186979"],["C:/lmislm.github.io/public/tags/JS/index.html","b921ac9c21b28fe75025ac2397f7ca75"],["C:/lmislm.github.io/public/tags/acm/index.html","49345dcf90000a349b7f9fe53b17839e"],["C:/lmislm.github.io/public/tags/c/index.html","65dd14871e86be2b36f702022910337e"],["C:/lmislm.github.io/public/tags/codewars/index.html","93b2e1c35148ace0d7e58da82b8dfeff"],["C:/lmislm.github.io/public/tags/css/index.html","137ea08129811b22c2f1045b0da09896"],["C:/lmislm.github.io/public/tags/git/index.html","35c4d6ffe059d0d0e1425381d256ded1"],["C:/lmislm.github.io/public/tags/hexo/index.html","dbb13696e988faa71b91be189ac03698"],["C:/lmislm.github.io/public/tags/index.html","bb2616f3ba36a4122394e50d24a7fca2"],["C:/lmislm.github.io/public/tags/markdown/index.html","146da1926fb80a9b951bac94e77ec1b1"],["C:/lmislm.github.io/public/tags/poj/index.html","e6f62334bbd74d8537febb098fba5edf"],["C:/lmislm.github.io/public/tags/shell/index.html","75397a6fd664463050b4706f592f07cf"],["C:/lmislm.github.io/public/tags/vue/index.html","396a1fa3c2293d937c4c05d947637209"],["C:/lmislm.github.io/public/tags/前端/index.html","3bd1985070ebcd64b79078fcb2739859"],["C:/lmislm.github.io/public/tags/小技巧/index.html","837a8ba6612863967115bd9805c04d77"],["C:/lmislm.github.io/public/tags/展示/index.html","9403b9d3c82c319a6487db6e54a76912"],["C:/lmislm.github.io/public/tags/工具/index.html","e12d331457407a2ccf3077dc37c6ced1"],["C:/lmislm.github.io/public/tags/感悟/index.html","b18da5457b7cff7448fede8d6dff07c0"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","8751ef072ffe182bac2f53edce85e0f0"],["C:/lmislm.github.io/public/tags/编程/index.html","068fdd12f685e5e92ef1f630b66c0dbb"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","699ea49ef550382d513a7bbf3414c4e3"],["C:/lmislm.github.io/public/tags/运维/index.html","1bd9eb9dff0d2a8e3bac0e66015ba5cf"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







