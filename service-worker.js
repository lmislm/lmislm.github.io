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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","c25fb0c171b04efb4861a83d847680c1"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","c38dfe14a173338fde6576c72d14dd76"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","5106eb62d6bd91fd2954eb60c009d4a3"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","fcf9f1cee1a2612affbfa240893a76a9"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ffe0a4779b4b5eae868a45b7202956de"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","ed097f5de44c53c94a184c5c990820e6"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b04491162dc55ad7d46ad37ec4fc10e5"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","9e3ed468917f8041bf8a91e780302285"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","09d5d8e1d5b67ac1e6d1748ce82534e5"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","fee4936d2bd5ff66a790e7808520630f"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","71a344a37313f1aa016f628861bb0935"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","9dec0292990ca527de2af9f980bd9f7e"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","298d48be21cb3565c3e0dc8d06d1eb0d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","a4a21a346bfe9cd845d590380fc9272f"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","931af3b7d6d5f9ec3bb84129e08c4ef9"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","edafff84409be700ac31826635102274"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","e7169e623b1f61701e96f5d88e6af734"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","418cdead0a2e249da307cd2591b7e8cf"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","8ee17c63ec7957700ee111b4e470f8fc"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","248798c46fe7e54c3459caea95c95b53"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","96f451db33597a9626a1162050bf3127"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","cfdf132440fb8c5a62b0a1a43be16590"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","f62d905ed753813f1680e8daf343387c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","5cc058645e36ecc979f4bc435f5c19be"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","80c0b5de0cf9eea05376d0842e54a277"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f5d7fb85cd3fef5f96971223b6fde301"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d188c2354bc83dd24169c95ee320e2c5"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","ddca70e40b3a09763c6c1293e5da04fc"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","d34d929a381d754da471c7b9def2ee2c"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","225076a5f68db2ab5030fafa4d1fe010"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","28ecdb99b3dcbd2a4c1ea72c7340901c"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","6c2a7ab574d631338865276687e781e6"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","bfd007f599c1e0433fa7878c43e8c4dd"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","dfb82024583601f88f2e85459673d072"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","41c2a168edfc3a1de7a6c84b842755f9"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","df162779be28e15747fa867e749a8e0d"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","af1355c06e89875811de423f2b045929"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","0d1ad7f91948d9ab28c26180df2095f1"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","522db7071928d8b9d490b86b94c48b73"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","08df6d3629b3b5f5d20e266e81e5d9aa"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","1326693a6e03dbb7a80ffd62d4cd5826"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","ab0abc3fb2b33dd2ce015ea88f78dfa4"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","f35c7de4937dee2aa21441f4cdb68345"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","c4d7cd0b0dd550e9fc55ef3f26c0092f"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","2b79ae7b78997b8364d167a96dd48ee2"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","3d1cc411972f2755b9d67e12917a2358"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","75cc1be796bb1eb304b90211d1c0625d"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","0c75a758dc4849510b0a15bf318921a2"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","28ec075b84765e710dd4880946a87a11"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","5fad3ccf4c79c9f3ba499559f6fbcd54"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","4cfb8a37706a5474661e1fff6cab51db"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","d26ef923bc189e6f9fb77c9a62f68183"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","46bf3130ebe1de0d710abc013242fbec"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","cec516273a20855437e5eab2aaab827a"],["C:/lmislm.github.io/public/about/index.html","f6ed6419998ec21a9e453b3c438a2396"],["C:/lmislm.github.io/public/archives/2016/01/index.html","4d6f3128ab96bb928df11109caeb9fb5"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8d525109cdcb09c7e07a99b9e4e0050d"],["C:/lmislm.github.io/public/archives/2016/index.html","224b996bf715284652533213ef978d69"],["C:/lmislm.github.io/public/archives/2017/01/index.html","3d22814e1bf39a879491385e313faa1c"],["C:/lmislm.github.io/public/archives/2017/03/index.html","87bc793381dc86813500375045ff12a1"],["C:/lmislm.github.io/public/archives/2017/04/index.html","fe816b1c231568d0a0db0138b608fa7f"],["C:/lmislm.github.io/public/archives/2017/05/index.html","47e0e613f2013c26cf487cb9842ceabc"],["C:/lmislm.github.io/public/archives/2017/07/index.html","44bd2f75b28d292593b92a5eabf1f153"],["C:/lmislm.github.io/public/archives/2017/index.html","db90675d55993b8b5823a7ca7c7cc0d6"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","325509d4fa8ee30fd40b7ef02edde815"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e1d1fc6d51cb78bccbf939751b26d242"],["C:/lmislm.github.io/public/archives/2018/03/index.html","1378985c8885ee026378caeac300d54a"],["C:/lmislm.github.io/public/archives/2018/12/index.html","e53e528ca26d60b0d131332089c832a7"],["C:/lmislm.github.io/public/archives/2018/index.html","5d6c33c704d457cf3d6083a0e21ce41a"],["C:/lmislm.github.io/public/archives/2019/01/index.html","4379c980eb1e4e3abb104ba766167b09"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","7d2eb62213ee2e7745bb730a47065764"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","6c0a4290202039ff2117a5c78d2af63a"],["C:/lmislm.github.io/public/archives/2019/index.html","018ed450f78c6a872668109e2c702914"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a01d9599920d844cde52f417270020f1"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","99c1353f09c740b72ab888f1f5277577"],["C:/lmislm.github.io/public/archives/index.html","6b6208def4a3074e5157efec12e3672d"],["C:/lmislm.github.io/public/archives/page/2/index.html","afa45dba244c4d75605d8bf7e2f21fe7"],["C:/lmislm.github.io/public/archives/page/3/index.html","1efecf022bdd451e0c412c03e8e516df"],["C:/lmislm.github.io/public/archives/page/4/index.html","b7a7005e78517f5e41dcdc8d94857430"],["C:/lmislm.github.io/public/archives/page/5/index.html","cbdf92ee15ae058f8da347a83dd6019c"],["C:/lmislm.github.io/public/archives/page/6/index.html","4694041d546e68c317b674289c82fe4e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","e18dff9cebe2b4dc2beb6c2ca9c5437e"],["C:/lmislm.github.io/public/categories/index.html","1d96bd2414dbfd58e28e17cb32e722ef"],["C:/lmislm.github.io/public/categories/学习/index.html","8643aadb6cfb986e2a2dfeb24b99ceab"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","2aba79ef0eca4604fcaede6777c9f55e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","89b2a9d4e127893e203174136b41b3c6"],["C:/lmislm.github.io/public/categories/工作/index.html","8db5ed4e9123b624d327b6246eea36a8"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","10b9611ab09cd032e7908e6a805b8774"],["C:/lmislm.github.io/public/categories/技术/index.html","b28e7481b1323437bad16cebee16a4ff"],["C:/lmislm.github.io/public/categories/日常操作/index.html","4f46c8c4d3677ea6a00be9d8cb9089fe"],["C:/lmislm.github.io/public/categories/生活/index.html","1dda2bb4c5168f553210b9b39ae404f2"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","12691e4b1b6228caad6fad6e813c4999"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","ae5f20ec0ff7d10af2c6307804443538"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","9d9036190af9dfab87d7f329a20f9a8c"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","26a4e5928fd17272d1b3c3cf99892207"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ac6740b7ef03afbf4aa0817956c85dcb"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","7a60abd8147ff09f2ba759ef383cd369"],["C:/lmislm.github.io/public/page/3/index.html","f6a527b0ce189c54162104be60558af2"],["C:/lmislm.github.io/public/page/4/index.html","af1a4480a7077a5aded6b848bf63b15f"],["C:/lmislm.github.io/public/page/5/index.html","8180c3a09641c28e9c9e05fb9b198c54"],["C:/lmislm.github.io/public/page/6/index.html","b7b2410baad09c95d3ae35b342edb946"],["C:/lmislm.github.io/public/tags/Interview/index.html","14c6d0d265709bc1776607a8b950dadf"],["C:/lmislm.github.io/public/tags/JS/index.html","2040b04a32c398cf14735856adf0288f"],["C:/lmislm.github.io/public/tags/acm/index.html","db3dfda8b3af7f788e8a4ae76ae5de04"],["C:/lmislm.github.io/public/tags/c/index.html","504714f500a9d0efcbf3ed603c178966"],["C:/lmislm.github.io/public/tags/codewars/index.html","cb9518304b0136fcc241a35e4c4af050"],["C:/lmislm.github.io/public/tags/css/index.html","91ee93f72db2c017e606fb1a19e64d29"],["C:/lmislm.github.io/public/tags/git/index.html","0f226cf534147d27f31c70e797d6b590"],["C:/lmislm.github.io/public/tags/hexo/index.html","fb1a24be1898f85f83e763594eef66a2"],["C:/lmislm.github.io/public/tags/index.html","93f0b5271a4e498eb09a0f41809fd173"],["C:/lmislm.github.io/public/tags/markdown/index.html","c4cfd0a16433cb75d9b8dcbb8bab4d4e"],["C:/lmislm.github.io/public/tags/poj/index.html","80981fef117cbae89d365ee600b41f63"],["C:/lmislm.github.io/public/tags/shell/index.html","8673b612cf3631033ca011a285436493"],["C:/lmislm.github.io/public/tags/vue/index.html","e38928db2bda93ab82920913588be897"],["C:/lmislm.github.io/public/tags/前端/index.html","ee880a01def956b0f4d3a1f35bb6bf5d"],["C:/lmislm.github.io/public/tags/小技巧/index.html","eee64cf9193aea6e4b5239995aea694b"],["C:/lmislm.github.io/public/tags/展示/index.html","6a5eba68939e65aed0d1b29bd1107a93"],["C:/lmislm.github.io/public/tags/工具/index.html","e6c9ecf5b49e99a391b604f39a491fcd"],["C:/lmislm.github.io/public/tags/感悟/index.html","41a414361c9eb2ecd0ecccff9d72b4ad"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","1d0af6d51fb644f43416e0800f9ec32c"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","b29c04633749de80d1a09fcd87345a66"],["C:/lmislm.github.io/public/tags/编程/index.html","b6b283d913cc469e53b8353d687b2f1c"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","78bdb35bb92d01c1aebfbadd613c8058"],["C:/lmislm.github.io/public/tags/运维/index.html","e75a6a747e32dc1964982247b9d0a3d6"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







