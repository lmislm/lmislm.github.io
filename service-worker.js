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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","af8765b81a516b6a02a7892b822f1220"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","5ae399a713b8ef7a069ee40d94a5d4b0"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","ad384617346f5d3855fcca80908b2917"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","e14fb83d51d43fca1ab722ab63f923ce"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","b5bd7f912b12fb87ee3f904125dd4501"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","c4285f7c81390a3e4dd1b089cc3db816"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","137e2fa244ac5414dc3074fa67e77c2d"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","e6a4f9c869648491deea0e67d676a453"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","e1b6df31011d15589540c90eb4b98a7e"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","afbdb730a5f817943f573846856b91b3"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","7fd57ef2db969bc6dc912213a4216190"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","65a43342e53327a7f7fbb860ac58e8b4"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4fad108d91d464a7cd60924c17367b15"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","b2c0539259631172b114464cb70985b3"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","cdd56b13935bab1887ba6abaedbc050d"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","787502c9d3a04457fbd0ea05a8331a9a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","da785fcb47bfd60a32727acebc71cb21"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","6dee46152a35115514336097c12ff301"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","e656d98cbf206296656f9c82920baf8c"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","852cd3d8f497c1908b6eeb6c2c8ff396"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","ebff2b25f14e6077364afd807c954531"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","8bdb39e9a10ec75ddf023cc97031af5b"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","f209247c4cc9cc4bf43a03894eb31e4d"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","2790c4852bdcf6205cf0f9b6f33790e3"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","93893496df9333f967bcf183dbdd531f"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","20dc829910ce30db0c7cdaf920815daf"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","43a879065d47372649c8b9fbdfbdfa45"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","d75b5d41e9b35b0908497ee01ccc7265"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","3e73338cedfb2c680ed348dcbd856e2d"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","d094c085239050bfa12abf99d1db0d21"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","39ab0f25f9b7796f4061b84aa33dab62"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","9f24c5728a2334f132ddb9cc720e572f"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","1b34df5f9ceb94dd02c9be5420eeea56"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","c617de8ec311163500708aa6fa4ed284"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","69efb1e31e3a2ae71240de0837222787"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","5e4cec1ac67f019faa11c4164d33d317"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","74ce6dc55949dbcdaf62652dd635cd47"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","539983fe7ef0efcc663b53ee56c8fce8"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","cb1215fee5c70c4d5c5d98e22ea812c6"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","e60dec929799c3995716e0329e338f7b"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","af357969aa0b42cb1110d4eda417c319"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","5de4d46d5f9c46d505f479266c0a9d35"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","384cfacc4625d11afe8f538086468528"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","2e38bc7fda7b9c65e9ec5effcbb0f8cd"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","11dfd33c773181cd44c9b9c7a25497cf"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","708a53a1d068db7b5264ac6be4dc8832"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","83d5738e6310a21d183a925f4a23e2ed"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","836961e689c16d3e5aede6bdac295d09"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","6ac7b0ad0d13e7bb69af6581481f6415"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","285ec5d458d945cfdca4fb1706c5d743"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","c427e8e2852e4afdfe32bebc82650726"],["C:/lmislm.github.io/public/about/index.html","1ed871e3d4f2d51adcbc3b5ed0a9efbd"],["C:/lmislm.github.io/public/archives/2016/01/index.html","2700208de4c6c4b614c2b7a1c1ac45e7"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8bf313e3f489f8adb1bfe9f0120e0720"],["C:/lmislm.github.io/public/archives/2016/index.html","4f8ed4b4f53d365f865086cac329b1a6"],["C:/lmislm.github.io/public/archives/2017/01/index.html","f21eb6d45ec470b2a9ecf80b6e2fb4c5"],["C:/lmislm.github.io/public/archives/2017/03/index.html","c17fe11d78cc709caa6c01d63aed4699"],["C:/lmislm.github.io/public/archives/2017/04/index.html","2d8507031eab15242fd8da17cdb72142"],["C:/lmislm.github.io/public/archives/2017/05/index.html","0407ac17d4079746768fff99f997d332"],["C:/lmislm.github.io/public/archives/2017/07/index.html","d6f23f3c395a535b6aff7d7856044a84"],["C:/lmislm.github.io/public/archives/2017/index.html","7db1d16ff304efcdeccf25464c76a9c0"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","55bc45eed4e79921a4176862ee5d9918"],["C:/lmislm.github.io/public/archives/2018/01/index.html","1602f4fa463369f04a02e225fb2d0a20"],["C:/lmislm.github.io/public/archives/2018/03/index.html","8fae367678b97d0fd6f66bc371f450f9"],["C:/lmislm.github.io/public/archives/2018/12/index.html","2f0d04d435ae191f7adf937a350d5667"],["C:/lmislm.github.io/public/archives/2018/index.html","e48032a873dc2b2e3eb475351cc47179"],["C:/lmislm.github.io/public/archives/2019/01/index.html","d4579b7524fb05870dde5b68dbb16a65"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","66e4f83e35f72ede1038d143d370b138"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","81ff745429f5a5c719e2d658d2fd8ebb"],["C:/lmislm.github.io/public/archives/2019/index.html","c7d9eba200b10cc343888c2133cf5efe"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a6d7f22b2dcb7b6907dbcb859a55e13b"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","66d53201f6bab073a48a39450c868bf0"],["C:/lmislm.github.io/public/archives/index.html","dcb33cc6780725062453ec9ffdf3354e"],["C:/lmislm.github.io/public/archives/page/2/index.html","0e712f09f8b7d75984cd8857a5a42916"],["C:/lmislm.github.io/public/archives/page/3/index.html","6dd3a0b1d0316c9e5a2c0176d9e705bf"],["C:/lmislm.github.io/public/archives/page/4/index.html","fb2a8518eb2df714db6441a5de962ef9"],["C:/lmislm.github.io/public/archives/page/5/index.html","1875b9941c2a4b643407f61c453c0d66"],["C:/lmislm.github.io/public/archives/page/6/index.html","a4fea073fb945bc3721a425efbe88a37"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","6b7051867560fe7db2974b024d402088"],["C:/lmislm.github.io/public/categories/index.html","fa0db8e8ddf358407a0f2b6d3461dd2c"],["C:/lmislm.github.io/public/categories/学习/index.html","c4305177bf98fa159b97125c8d82f617"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","a0b1cdb53fc01266ea22358c3dc490b2"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","d13aa4947d11286f64feec077b7c22e5"],["C:/lmislm.github.io/public/categories/工作/index.html","aade48fff5ec405214fc7260db590c5a"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","85f81a2dbdb4b2c77a42ad9d437f215d"],["C:/lmislm.github.io/public/categories/技术/index.html","673e8014c5ffa538dba4346c5cde158f"],["C:/lmislm.github.io/public/categories/日常操作/index.html","77c68a8d35275760a8845e0ca05a54e9"],["C:/lmislm.github.io/public/categories/生活/index.html","6813fc13b7d57a34801d3a5013994230"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","d68410e6f4871c0e3b540874de129f67"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","c7bbddd558e9b0384090b50ceb86ebb0"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","96f7dd3f0cdb16958dbdbc161a66a696"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","9c102e7160e98ebd020cbe925d580f70"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","d1a52cfbb31d6c5039279d4d8010075f"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","08b5ec80b82e0ad964e33fbab9a0b594"],["C:/lmislm.github.io/public/page/3/index.html","a51368bb08be075d7f779879dd4730e0"],["C:/lmislm.github.io/public/page/4/index.html","bfd5dccc9f4cee3a3f65a890126841d5"],["C:/lmislm.github.io/public/page/5/index.html","af54b48d3a418e2515122036d088320f"],["C:/lmislm.github.io/public/page/6/index.html","cc48cfea562d2d2f20d23275544c721e"],["C:/lmislm.github.io/public/tags/Interview/index.html","d84b422faaca7ec4f4b50960610f33b6"],["C:/lmislm.github.io/public/tags/JS/index.html","bac7be4cc8b394bcc3fe7ab661848df9"],["C:/lmislm.github.io/public/tags/acm/index.html","f098c41e3c23b0c8bf514369ae9d4780"],["C:/lmislm.github.io/public/tags/c/index.html","a8b65a5b0490b34933e0fd3d91f3efad"],["C:/lmislm.github.io/public/tags/codewars/index.html","dd9876e5338298b4d54fc2ca5e238a00"],["C:/lmislm.github.io/public/tags/css/index.html","d1a3f7fa0a7d5432ed8ac52e15982f2f"],["C:/lmislm.github.io/public/tags/git/index.html","9e1a86bbf5a728153d9a361608e88b07"],["C:/lmislm.github.io/public/tags/hexo/index.html","345245ed0a21391fc589f076591dbeda"],["C:/lmislm.github.io/public/tags/index.html","a28514a7ec1b7df66aa668dd441e6503"],["C:/lmislm.github.io/public/tags/markdown/index.html","a3ce2109fa97e8a50635f0cdf3925262"],["C:/lmislm.github.io/public/tags/poj/index.html","ca563c798d03ab665967ea0d6d0e2787"],["C:/lmislm.github.io/public/tags/shell/index.html","bea23c8c3a551c8ea2071cfc099ac4c4"],["C:/lmislm.github.io/public/tags/vue/index.html","ba521fab7364aa5fb73951b6261634f1"],["C:/lmislm.github.io/public/tags/前端/index.html","9ab8f2781d6d54b0869650017450c522"],["C:/lmislm.github.io/public/tags/小技巧/index.html","75c6654f7a7a9b08065e2e10347eb725"],["C:/lmislm.github.io/public/tags/展示/index.html","c6715f416014612d583c9b033b2f2a08"],["C:/lmislm.github.io/public/tags/工具/index.html","2f0a465a4b6c2e7400f8d62dedc625e3"],["C:/lmislm.github.io/public/tags/感悟/index.html","f0b8c15dfecf80cd20dbf9a23e3ffbba"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","2f73d8d18ceb0ba94bceaa53442caee5"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","7b68e7fbe7244b0d35dd7b644f29d55e"],["C:/lmislm.github.io/public/tags/编程/index.html","200eac4e9230115ade97d34fa44415c8"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","cea5d346ba077707eec3f9882bb4f0b2"],["C:/lmislm.github.io/public/tags/运维/index.html","dc10bcf63b88d5205225441d6d139434"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







