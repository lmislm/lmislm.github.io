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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e5e93d3439ed07d816ef83e0e59af098"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","45ff2e9a485e5e6561527d6bad4aa7c0"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","63718163cd31838c4167ab2f93a4eb99"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","aa0920548096a4fa1ef1bdaa147830f8"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","3f37f82ba7b853b86cfcf09e182725c6"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","5b828d8025cc1e692759f3204e9edb99"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","16feefa5924f53506c2bd9e0851078ac"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","400032066d3868f95fa516b207666177"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","62b380408fd8f99d44c06b840022b5b1"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","56a66584b021c95267b62080946785f4"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e86dd0edede2d54916aad963d70ab06e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","cf74794b6764d8037d7f47ef42849ff7"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","6695ee503c30fdb126707564f92a1e88"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","dde63a5d44b5a8fb246e33c130fea1b6"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","fc4a1d0da828dea74f245ce8df2bdc8e"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","a70666bd23af23083acae41d32f88b8a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","8a0c5d422efa534c0b448434bb5cb64d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","869a5ef88f475487e1586802b33f3349"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","6d4da7bad2a3e556366164242c83b27b"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","2cdb20336845bc16a1457e965c541462"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","55e66b966079bbf151121aa612bf2fad"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","85ee7e269f3884a1d62eb909c3efeed3"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","f137a05fdcdee58a8d490b727412cc7b"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","8141c34f369630de1be2b6c22ccd1078"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","a33d4986ce1bde2267a8b3e86f55d607"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","2d0f5b061d64989496c2bbdf33290e83"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","06676cb320f46f4913b0d75bbc80f0ce"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","56104a2d93b1a952d59a2dc640fa7ab7"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","93a67c9fa0e13609eb3e32d55412b31a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","695c8a80f568a7f735dae22bb1188c3b"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","cc380cc7c96147fa1d28ccb42896ffbf"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","8051f4f610156afb3fec9bbd0ff8dcc9"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","39f8a852ded8f08ec8896874e794b4ed"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","5453674b32e69a21e12f8c46a80495d1"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","d140826cfb3dc75757d0c332e38a055a"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","bac74feda6ad15e145a1515d3ac25457"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","e456ad28cfd162c8dcb043875e39a809"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","adb0d54c347f42e3cdf46b427df72a5a"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","a674a23a32f04e58446db780597e13ba"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","4c1bae5680dcbe5250b182d9fcf49082"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","4d293cea959f630745ea9f8d5c91670c"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","78f824958f72de356a840b2cf1f51397"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e310ab6de5bde31e66e530e3c87c56b4"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","f284ad2c1f57e5d31cec95e93a99161d"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","c56bb55065734f419ba4e685b5d2a220"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","0eab797c5f1cccc0ee246e7c3d5f0727"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","935396f7b1b56b24054ad9407a79e2c3"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","ccfed8ab4c4a01cde77df4c0088bb09d"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","708c3f6bcd65b5e5a90a62c86463350c"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","30317b5db43c49bbe81f3074b6698cec"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","194ec026efdf89def99c22b9111b8a86"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","05e557367e2949185fd062b5ab4e8ee2"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","acf28e22e7965d1a71b49833c70a17b2"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","d522af52a0a5e5e1d9da42b66f74f2da"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","6acdf6c3c3409cebb6acaaa501d1555c"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","3daf232959e0300198c7305fe148bc6c"],["C:/lmislm.github.io/public/about/index.html","380f828fd63cf3547bbbe32f793c4c51"],["C:/lmislm.github.io/public/archives/2016/01/index.html","dad5b82771c2e456cf80a016de3b67c3"],["C:/lmislm.github.io/public/archives/2016/03/index.html","83aac7142c027a35574caf018dfb0ccd"],["C:/lmislm.github.io/public/archives/2016/index.html","6791dd7be8c472f74506c75f7e544b9b"],["C:/lmislm.github.io/public/archives/2017/01/index.html","86675e0c49085b2750207c51265c519c"],["C:/lmislm.github.io/public/archives/2017/03/index.html","1ec867c003fd2843b990c1d2ee4412b9"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b0c2aa33393cdbb389bc6b4beb6902df"],["C:/lmislm.github.io/public/archives/2017/05/index.html","136cc843e7661c041b9f7c9aa651b210"],["C:/lmislm.github.io/public/archives/2017/07/index.html","90efde96f0c83ca7512ba9acf0c60b2c"],["C:/lmislm.github.io/public/archives/2017/index.html","9c2ef2f1415a374b48143ae127677329"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","5c06846d0649a4b7eabbde831517d34e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","20b8596c0d02f8790d44114c66751702"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f389cacef3bc330ac551b53d17f730bd"],["C:/lmislm.github.io/public/archives/2018/12/index.html","6a2e577296949ebf7d41e5ceb2826f85"],["C:/lmislm.github.io/public/archives/2018/index.html","7f34d581dba8c84410c26b09dc3c3d4d"],["C:/lmislm.github.io/public/archives/2019/01/index.html","9ed8e97f109a828ee893342b85a684b5"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","4dd4c5140c803cf80e758e4af6504701"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","9c09b54abaa07d12b96e4b5fc71d926d"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","795caef8e46bbf463d0d66b8ce4860b4"],["C:/lmislm.github.io/public/archives/2019/index.html","5624cc752742ee232085ec36d554dbfc"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","2c539cefa97e96b189a020d45b5e5b84"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","67819fa3a8fb558052c8bd11af4244dd"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","8c51c39c16cd4d328870601658ff45bf"],["C:/lmislm.github.io/public/archives/index.html","c3becc731d6b37fd76b52d1a501a2f81"],["C:/lmislm.github.io/public/archives/page/2/index.html","8a4c60c75a852f0daf0388767c562759"],["C:/lmislm.github.io/public/archives/page/3/index.html","2b4d0d41aafd0a75258a084ceb9b1e04"],["C:/lmislm.github.io/public/archives/page/4/index.html","2427f0d64e0b7ce2175810368b8b3cf9"],["C:/lmislm.github.io/public/archives/page/5/index.html","463dc054d56a4e7bb49ab6060f60f324"],["C:/lmislm.github.io/public/archives/page/6/index.html","ad77dc1d3578d41bbcedd3ee50ad9f61"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","ca5c78550363a352cfe6a389df783f67"],["C:/lmislm.github.io/public/categories/index.html","a4cf172ce5954fe5affaa0906efb965b"],["C:/lmislm.github.io/public/categories/学习/index.html","7f879c16f56e93398c9908338f183a47"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","574caf133bb8d90219895ccceb54c4c4"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","16453b71ea312fb074dd2b148b04515b"],["C:/lmislm.github.io/public/categories/工作/index.html","231c5ad0bd77a81c12f4ce15c31c7601"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","adbeb62de206ee1046ff07a17bf301eb"],["C:/lmislm.github.io/public/categories/技术/index.html","9903de6bce7de7a72254fed939e43846"],["C:/lmislm.github.io/public/categories/日常操作/index.html","3ee2474470fea2486e32fa1901a5f5c5"],["C:/lmislm.github.io/public/categories/生活/index.html","aed0190d0a3a984d1724c093acf9268d"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","22be79273c51b68c194c745d1d5721c7"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","1fad8dacda0a5dfcfb06752968548fc9"],["C:/lmislm.github.io/public/css/index.css","c6d4bbf9d8534f1a3ce0aae30dc6a688"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","3e876163c58a824b5bacf170745497d9"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","1fcc4ee3f58f5ac8fa5ce682364d5e21"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","d9ed18001ae047855d6459ccbdd1aa1d"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","cb2c88a81eefdc67b2643e88add7e843"],["C:/lmislm.github.io/public/page/3/index.html","5cad127b175eaa5b442edeccb799f268"],["C:/lmislm.github.io/public/page/4/index.html","45d24fe476a7b98bd9a2247fc1176a57"],["C:/lmislm.github.io/public/page/5/index.html","d8431d39b3866c8c727da8049cea1bd7"],["C:/lmislm.github.io/public/page/6/index.html","04e4a123c1d9b2ce135a1548a8bb398a"],["C:/lmislm.github.io/public/tags/Interview/index.html","9e87605751a7816b23970d7657718c9b"],["C:/lmislm.github.io/public/tags/JS/index.html","a74c178959f952f6db3d6f95c4e3e911"],["C:/lmislm.github.io/public/tags/acm/index.html","93f5de53d87cc983fe81dbd882197074"],["C:/lmislm.github.io/public/tags/c/index.html","cfb11cf3957e351caddc77bdf4d9f6ff"],["C:/lmislm.github.io/public/tags/codewars/index.html","4d820c90944cd57574081bc284b59465"],["C:/lmislm.github.io/public/tags/css/index.html","35bb4fc11bf9f02908f59b0c38bb792f"],["C:/lmislm.github.io/public/tags/git/index.html","f8353518c4c83efdbc805ab38337e138"],["C:/lmislm.github.io/public/tags/hexo/index.html","838644b0f128525b8ac258d17597b538"],["C:/lmislm.github.io/public/tags/index.html","c30c87210275de390862628ec93d2611"],["C:/lmislm.github.io/public/tags/markdown/index.html","38c920c41bd19687f6ed358d7a668820"],["C:/lmislm.github.io/public/tags/poj/index.html","10120d2b9678a4f878e49f6edc1b2252"],["C:/lmislm.github.io/public/tags/shell/index.html","3e61688cf5215928d6479258360a8516"],["C:/lmislm.github.io/public/tags/vue/index.html","348b44a5b7596bbdf830c755818f1574"],["C:/lmislm.github.io/public/tags/前端/index.html","f43710859f67d606af37bd0b03524654"],["C:/lmislm.github.io/public/tags/小技巧/index.html","bffc9a2c0ae84220eb964ca01b7fd852"],["C:/lmislm.github.io/public/tags/展示/index.html","620cc46f9de5937366dbd23125f22126"],["C:/lmislm.github.io/public/tags/工具/index.html","80ab4ee37ed586245036f162a890fce8"],["C:/lmislm.github.io/public/tags/感悟/index.html","9ba7f8efbca598b8f61bf65315e15328"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","79784d6c2d5f8e44dac3677f656e9fe8"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","52635891dde22bf8aa38b84a6f27b7b9"],["C:/lmislm.github.io/public/tags/练习/index.html","4ba6e956ec5b4f518e063487012e95a1"],["C:/lmislm.github.io/public/tags/编程/index.html","d882da24d805f3b42b6e2150b526cfc7"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","632f01036f75113340f5c73ba3c074dd"],["C:/lmislm.github.io/public/tags/运维/index.html","6b4dfeff4e835c632c6d452a9ad2c096"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







