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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","a07024ffdbd021ec95af31d187c00d87"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","4a22221e67fea8686d257a3e011cf31d"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","00bb7c93f6dd420bada92d7775034650"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","67e0e40d4028ca1d25e609bea1ef8ebc"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","39755ca0b0128aaf130a73bef8c3ba40"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","82cf21ae9ed01a3464b38c92bbc62afa"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","f46aa51141dd5b4972ddc1532e7f6b44"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","6ab1933074071f7d3a9b81cd8a50f4fd"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","76a6b61ef4526c522a0915b7ec127a3b"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","d070800a774e632a1eeeab8e5bf943ea"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","0e6cc2a6e0fc851a6a06bd5dbc3ffe27"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","f2aa2419b9b6166d0cd2d56a1a667e86"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","b77e21bd9ce6c0aabc23bb716b9e3942"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","5bcf8d51bb948238deb9a3d16f2b88ec"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","bbe3fc71c6810eb469569dd44465b984"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","5217805ca2cd2abdad8601aa03bfa44b"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","04c75d46bead6228a8f3c45ecc0fc5b4"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","3f0990c05a8105f8441d431fa5cfa75f"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","417c3ac2a6c3c2fb4e421d786d8473e6"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","71a99f75ca86ead137bfc4eeb1b9269c"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","f64ab00e3325b9f40567e2afbd948c91"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","4f53305739bab3390ed5697c5b9edb84"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","bec22a8af0dfef1ef71013a839fb2b7a"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","dcfac11d25ca250ea50925a66d104459"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","f17f5ed03430d49b3c8c4350ba9f26bd"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","588c7fd7832e3ab6ce2282619824b1ba"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","c3a5e4aac11ac5bc19d0939ae01272c5"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","8d0daeeb02d7fc992cf0546ac35656a6"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0a53d084fc86b39a61bee5c61e9ec2bf"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","e66cea6411f229274b44cae9fe47f9cf"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","5ea1775f57be2315fe9ba701feef46ed"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","5982d9fd3bdb77b256cdf0f464426d5d"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","886500f7080b2deec55d0be07b791aa8"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a4cc1eec67d13f6e6407fe8b9a592031"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","f76182cd9129835c9f58bb5539e87683"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","b4197026d050fad5f36a7f6304f923ad"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","2ef3a93c238eea2de06d595880ec63e2"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","c40b4e06f96c104760824f2caa211ae9"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","43ff522bd3c2d0be0e161522186ff651"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","a486442c93e2655a4dd5be6edd6ad31f"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","7eb3f14b1d9246c0d2db2faa9dd7c289"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","9b2b6fee9f38938ebb545f20bdb6894c"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","223293de8e47be23e6c42bf001236e8f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","e137223bdab8483fe139393a41524c09"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","ebc09a04ea8f45b85c0b632113ae4ba1"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","9cf854d87dd9ed28a526b5d0d7470daf"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6624bcd1106d70af9fed6668ce8bf89e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","0b5445b8209dae49d4603259a202d11a"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","a5b3c5b77f265aaa21a6b7329f9542d4"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","d3cd4430f189c3c7c7be728552ed6ea0"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d46b1767e30d3cc957d96822e28a35f0"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","978911e3d613bb839b6910579da61c2e"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","f8af1668baced1128abdad4b9151f14d"],["C:/lmislm.github.io/public/about/index.html","46e288a98e5c4d5923fd143de7e8d950"],["C:/lmislm.github.io/public/archives/2016/01/index.html","16ece5437f83de6bf2e0f40457db7d8f"],["C:/lmislm.github.io/public/archives/2016/03/index.html","91bdf0db7b83d9714ead89664d5165b7"],["C:/lmislm.github.io/public/archives/2016/index.html","c306adc20d4fc22a6537aba4ea8d08e6"],["C:/lmislm.github.io/public/archives/2017/01/index.html","76cad4d340ac36db9cd2b9d0e00d7f3b"],["C:/lmislm.github.io/public/archives/2017/03/index.html","7ad0726d6e062c966b355234edb3dd9a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","a4e1f0aee1da92776a225cea6e11c194"],["C:/lmislm.github.io/public/archives/2017/05/index.html","11593a9a6045018f6f7ee5ea9866fd63"],["C:/lmislm.github.io/public/archives/2017/07/index.html","682e0337a0a0dd37fddb2d20bf13d576"],["C:/lmislm.github.io/public/archives/2017/index.html","cc6fdc5695c324dbccb4ac5b34623025"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","f47c9c583d2b31f0d05a1311223485a3"],["C:/lmislm.github.io/public/archives/2018/01/index.html","53632e6701e5cd80f8630da8a7061d1c"],["C:/lmislm.github.io/public/archives/2018/03/index.html","21ddb3ebfa046169384c7fb795731367"],["C:/lmislm.github.io/public/archives/2018/12/index.html","0198bda788bc6ee1fc8ad7fddbb2c937"],["C:/lmislm.github.io/public/archives/2018/index.html","da331d1a65c9b064c4693789a5ecb892"],["C:/lmislm.github.io/public/archives/2019/01/index.html","de88b9ea4e84b101c04df6c9286e96f7"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","4303b1d4e97f131de33c711c0b5d17bf"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","a671ba840e316b2559f8cb99c207e308"],["C:/lmislm.github.io/public/archives/2019/index.html","94fe2a4fa3995fd906dabe53ffeacbf1"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","f7f6a282a481992f3870ff645caed7c8"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","934a2847f3aa6405e204ff0295b3357c"],["C:/lmislm.github.io/public/archives/index.html","dfd6b4d0835c126fb48300fa1405b179"],["C:/lmislm.github.io/public/archives/page/2/index.html","52eb1cc394c7cffd6666ebc5a28035ba"],["C:/lmislm.github.io/public/archives/page/3/index.html","78574ad4d19600f11d0b2c7664c61578"],["C:/lmislm.github.io/public/archives/page/4/index.html","f2344f029da68392411e535f2ce27b98"],["C:/lmislm.github.io/public/archives/page/5/index.html","dbbfb7c904a4bb8c630bb622c6f1591d"],["C:/lmislm.github.io/public/archives/page/6/index.html","45cea036d5d303c5c114a6bcb1dbe67e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","7f8cbc512a027d46a83c68bbb16d061a"],["C:/lmislm.github.io/public/categories/index.html","cf8219398a9d8d34efa657010f4eea62"],["C:/lmislm.github.io/public/categories/学习/index.html","3b5f180d3a948f8d153c7e472def7cdc"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","f241816198cdc7b8d00d34fcb1705cec"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","28b76e1c679f94efd1ca09ffe4748043"],["C:/lmislm.github.io/public/categories/工作/index.html","6cff448bb7983cde0c90e223a594d3a4"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","80e7d7a0b9a7b9709f6b2f7cd5ccfc5d"],["C:/lmislm.github.io/public/categories/技术/index.html","205bd433bc7b4b2ffe61c800245442b2"],["C:/lmislm.github.io/public/categories/日常操作/index.html","6495ff5a905eb471433a58dd1b8330da"],["C:/lmislm.github.io/public/categories/生活/index.html","2117072bcf9aacd4b3547e96db86fcf1"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","e05925f8054c7656d5e9d220122ac9f1"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","cd68b755f854a8b9fb3e5c281be12a9c"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","9ff35b2e8945e1da87d10e11a30a0fa1"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","51651dced62529de16ecf5f3fb85882e"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ae231ed1edd6df195366987a5ff0e0c5"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","24401c7dae808ffec7c243e27640aa2d"],["C:/lmislm.github.io/public/page/3/index.html","75214aff6971e13c46b8367c0fd9cc33"],["C:/lmislm.github.io/public/page/4/index.html","ad5443c133c640057fcb766e9c8f59e1"],["C:/lmislm.github.io/public/page/5/index.html","28ada5ebda52fab06ea512119b787fba"],["C:/lmislm.github.io/public/page/6/index.html","66d028e7cf235d0657e41c0ced07e2f6"],["C:/lmislm.github.io/public/tags/Interview/index.html","795f6dd44a72a5355e9674efd103d1b4"],["C:/lmislm.github.io/public/tags/JS/index.html","5e3919a61a4086898e9092855abad367"],["C:/lmislm.github.io/public/tags/acm/index.html","89ba738a9287ce2f15cb25feae6aceab"],["C:/lmislm.github.io/public/tags/c/index.html","0ec4f6aea8f5d4be086788585e4a02d3"],["C:/lmislm.github.io/public/tags/codewars/index.html","22db732dfc45ff8acd57334c5680bde5"],["C:/lmislm.github.io/public/tags/css/index.html","1780c594d04870894f24e4e21e086f4d"],["C:/lmislm.github.io/public/tags/git/index.html","f058564b30225db5dc7d8ab8bc5447b6"],["C:/lmislm.github.io/public/tags/hexo/index.html","e69f2e4e5def7ec78c000cb91c7c457e"],["C:/lmislm.github.io/public/tags/index.html","8634ffdc3fa0d1cafb5e54136cc2fbcf"],["C:/lmislm.github.io/public/tags/markdown/index.html","b2e4df45ee540821eafd42fa41c46c2b"],["C:/lmislm.github.io/public/tags/poj/index.html","e6ca65b3549206674b7126a59ef425f4"],["C:/lmislm.github.io/public/tags/shell/index.html","990f3b3d831adb7675b5c0366b918c18"],["C:/lmislm.github.io/public/tags/vue/index.html","a0b014069c571ab6dbbffc74ad95fe26"],["C:/lmislm.github.io/public/tags/前端/index.html","596ba2ce7cf90c6c45926f646af36ab7"],["C:/lmislm.github.io/public/tags/小技巧/index.html","cb3b60d8601295953088e988d766c811"],["C:/lmislm.github.io/public/tags/展示/index.html","5c15d81b1d4e18ad526789289a908c66"],["C:/lmislm.github.io/public/tags/工具/index.html","50616552be54b3608ba0ea00539647b0"],["C:/lmislm.github.io/public/tags/感悟/index.html","86991174024efacfad121d84ba1fa174"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","14c20bab19f38f6de99448830ca894aa"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","716b26c5afabbd3b0918d8eb5e529377"],["C:/lmislm.github.io/public/tags/编程/index.html","9f1182fbc091453a4e2574c73840210a"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","396bf16ff77e3041b5a25bff5d7eafa1"],["C:/lmislm.github.io/public/tags/运维/index.html","08d7733c4fb07c8ca87d40d88c75dbfd"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







