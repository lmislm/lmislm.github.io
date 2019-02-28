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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","97cead2d57b05279ea7a0abd4c26b9dd"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","5c37ae701724b20c51bb2f12c9b9501e"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","928ce63cd877dbdd4b3d98e682c44ae6"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","cc678722fc616d19d58d2ad0d2c616c7"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","67070fd43a8e54c99265438bac2bb799"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","9b5639622e07642f42a141c74b2ef2a3"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e77bdcdacd9e358b6bc06f3bcdc36860"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","6916fca15d38aadc8a488f6e38dfc1c0"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","1afc9e8652148b9314aeb8d1919a5380"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","5e70cd0edeca181299bc4cc45a3c7db6"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","cde9af8c7e021ccc69192286a55fcb36"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6394c9a15fade9514771dab7e5b34ef8"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","03e7cb978c2b4c518911bc6f0c33de3d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","cb29bcc19dbb0430228d3da5dd5c4c05"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","1b044026ddcb7832a2dc7be11c969108"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","084dfd8f3a2b3f0fc6f872e1398134f1"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","f0a8ddce2f17b31d0ec657982272fa81"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","a54ae3e695f32c49f6cfcf4b81b05977"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","3130666031095c358fe2af162894b7ec"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","9826e2d24bc613b81e04eff504af0780"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","f05ec50ea828990a1126f64eac33997f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","206ea827ced12b93896e7c3dda320025"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","412681957db83bf9352ca34d3cbaed34"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","2c7f39ecc6997849c06490df2b88f956"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","9871064641f678e0d68b0f81ee5ef644"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","7aa9ee1902a3a505e41d699bce003b7e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","81c3c491e206bf8118d088269e97280b"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","bbedd2db549d2eeb56d40f5a469bdd89"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","42ef9086a30f9803a85cef2eafe90cef"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","3958f8d3fb7fdc73e129e814464893f7"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","bf6f2a0fdf178fe302683e65d90db76a"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","94fe14e00d6d3763a20ef3aa0dc0c3e0"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3b1d2c468ea5ea752346ecf8266e8349"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","38a78b93d5bc3cd187220a447dd2bd10"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","5969a6b2fa3121a054be4b3892c1e26f"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","7d00dc6468d49a66c450dae60a624400"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","4cdb3cb8581aec50c579cbbdd7456e99"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ee4f43f03914754a2dd058be7eb49aef"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","f5e22ac4d94d03fadebedf2261d4f28d"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","bf922e1f695a54edf84a634333760f70"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","2a99edcae97bd6ef08a578945d690333"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","f7731862a7a3c2ca92a8f257e9bdd40d"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","7395cedf827b7c5f6bea5cd746740585"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","3c4185b553f62e274e10395c94a0ec11"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","6c7b9f35967a83076aeeda5371a60037"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","61d0556e2f5039e68b757914622b4e88"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","094b2a4dccd1c336102ac7c83cb07ac9"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","bd2ec8f43c31299193aae517e6fbe3cc"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","78a6c6d2ecbc1f08deb277024e222151"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","e1233b05eb85943e2ecb8e96faf13364"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","656f5dbd0eb913e4dbf44a3f92ec4366"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","aa56def68dedb87e7a55df1e19074b58"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","7e77cbf461c7787267cb0a9942fce7db"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","1dea4ebb7102463349d8ac351c755eb7"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","6c7cdd38f0491ed789c4f56983dfe3f6"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","a4dd1ad248f6c77de6af6eaca786182f"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","7d09001a640d67400b76b30b9bacfa6b"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","11cfd7ed33628a85adb15695bc87984b"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","b7b47f7041e87f32a7d6ee5287363f14"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","843a67858b461a9fc5249c010af40d18"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","16208b3f7155fbbe5aad1585581aeb94"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","b024546a8f56eb7f6a35f6448d798b32"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","41246d4e7f0713ebe3e601fe3de8e0db"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","8b36c584157c1fbe45ec85c66253ad77"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","9b12420d19d0258bab627b21ae0cf970"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","5916bacb3471be310b9f8566d683956a"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","90f26c9b6c96dff7d533a47eb4967881"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","14bcd141f298a6f5537fb0bfd7d4e40f"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","eb95eb890b1304fc9d2fc0d51bbec841"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","62a6481109920d25ee9ead2395222187"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","c17c6ba32ce43d29c73cd9ecec2f3fce"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","5c0a9faea33774026795064054852f3c"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","dc40839f96ae1776bc6da88269114891"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","4069c5b68fcbdca04c91ab2b4aa57b7f"],["C:/lmislm.github.io/public/about/index.html","d7e3111e88c15a0d19c012df91bce3e9"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c1dc14c7640c2d0a35b2e6bf9c8776bd"],["C:/lmislm.github.io/public/archives/2016/03/index.html","084a6d680d3bd0e58360586f98cbe0c4"],["C:/lmislm.github.io/public/archives/2016/index.html","bce02d880a0135a9e54844ff7901e1fd"],["C:/lmislm.github.io/public/archives/2017/01/index.html","c352709cd82472b3f1061c8c2a498033"],["C:/lmislm.github.io/public/archives/2017/03/index.html","77015d05f49a6ad7c677efb2155d4668"],["C:/lmislm.github.io/public/archives/2017/04/index.html","3484d0bd2230e7736a08bc2abd8cfe30"],["C:/lmislm.github.io/public/archives/2017/05/index.html","4161118f4bec6fa2acba7b2bed93e0e9"],["C:/lmislm.github.io/public/archives/2017/07/index.html","c768265294cbd86541a61a6e21b7ca1a"],["C:/lmislm.github.io/public/archives/2017/index.html","ca0df4880236cd73f068d65107b22e1b"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","de63932e81d58c792015e7db2179234f"],["C:/lmislm.github.io/public/archives/2018/01/index.html","d6283b254c2270ef1c97402ba1fb5323"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f48b2bb3082ba7a668d5db024ba911c7"],["C:/lmislm.github.io/public/archives/2018/12/index.html","ab416cb603d0508d93cd8f28d4aa06f4"],["C:/lmislm.github.io/public/archives/2018/index.html","9d5c3f1757cea9a049ef39cbfe43feef"],["C:/lmislm.github.io/public/archives/2019/01/index.html","38046b60f2eab43b7e8ccd5e02bafcce"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","0a8a6c59a4f39b136d72a2dbbc1f3023"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","e0923176bc2ae27fee36e197c48837d4"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","95e57098b4fd76add62032e4ae852d2f"],["C:/lmislm.github.io/public/archives/2019/02/index.html","da44596704a75da06c39cf3b07e7bfc6"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","188772ab44d7a14f3264c64ce2e215aa"],["C:/lmislm.github.io/public/archives/2019/index.html","f33431173de2582ec71c24a0a3055669"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","1aea929f5e517409236eb42c5dbf9bbb"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","b412acefb522cd242d4a33e2d029ee8e"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","9d1840ba0d93f3dce3a16df5a6979849"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","ade9d7c27789b28845286d8d840e92c3"],["C:/lmislm.github.io/public/archives/index.html","17fff7e3a54abe4be9ea7c526767aab6"],["C:/lmislm.github.io/public/archives/page/2/index.html","514c8e49f9afed42ba7a2a4c6d5adcdc"],["C:/lmislm.github.io/public/archives/page/3/index.html","fbb0377f8805b195675f1c61a89048b1"],["C:/lmislm.github.io/public/archives/page/4/index.html","704c155f36889a6af983545159e14ca1"],["C:/lmislm.github.io/public/archives/page/5/index.html","dd19a565bc82f14366caf5222f93cdf9"],["C:/lmislm.github.io/public/archives/page/6/index.html","93f89b2fe0b25e2b379892c432e08868"],["C:/lmislm.github.io/public/archives/page/7/index.html","c559fd405e9977dbde8b956be89ced38"],["C:/lmislm.github.io/public/archives/page/8/index.html","29f9951e0a80910eb7531fbe5cb39c07"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","65c9a208597a72df2553c99015629c9f"],["C:/lmislm.github.io/public/categories/index.html","5ae4c5518c1c6990ee31b4f9924903be"],["C:/lmislm.github.io/public/categories/学习/index.html","70eb4205c53f35bb0022c2cfe3937b8d"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","246675e02d24cb7ea653cb7994dfe120"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","fbba09fdeeeb672a72a3374b87c9d454"],["C:/lmislm.github.io/public/categories/工作/index.html","09d77d4df2068a730bfaac41cf562f96"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","7e56141b8bd4c20ba96ae37c9cb9a9df"],["C:/lmislm.github.io/public/categories/技术/index.html","cfd68b2e11f7a39cc40942f34ffcec06"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","540a60d4b3fd7765a21143e1e1d423d3"],["C:/lmislm.github.io/public/categories/日常操作/index.html","fb55403d4e44d044b0e3ffc4bf650ade"],["C:/lmislm.github.io/public/categories/生活/index.html","2c5ff1c3a82d5dcc34ec0ac35b385717"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","a5ee6465f941bec1509b35f41d311db6"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","c981106a87555b82e8789efdd82b96b6"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","c42841696711dccecfcb1d5979088bd0"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","5e793a26c3fecb17f79d11eb3c3b141e"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","8748cffb971e2b618c4cccaf9842cbe6"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","86d09ddb36600d2d9c4d1e3cc2592087"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","a909185d76569fcb05dbc98c60a70657"],["C:/lmislm.github.io/public/page/3/index.html","b480522629f704a2fd2507e507376cf9"],["C:/lmislm.github.io/public/page/4/index.html","06ffb34c96d56d98636a6911afe05ce2"],["C:/lmislm.github.io/public/page/5/index.html","14d12adae6df134262ce6e814e8750cd"],["C:/lmislm.github.io/public/page/6/index.html","a22e43db2f6c4004970a5c3d5e1a9cb8"],["C:/lmislm.github.io/public/page/7/index.html","4d7f49b3160ec122a4e81770f926554f"],["C:/lmislm.github.io/public/page/8/index.html","0c4aa231293517415bb4a9c7e8af3496"],["C:/lmislm.github.io/public/tags/Interview/index.html","19acb75094a29b50719036a54eb6674e"],["C:/lmislm.github.io/public/tags/JS/index.html","bd0e1197b2e9646742c89dee85ad203c"],["C:/lmislm.github.io/public/tags/acm/index.html","169f5ed4b03ee717437d2878adcd04a1"],["C:/lmislm.github.io/public/tags/c/index.html","d64167d7d11e8cc1d57e32f7cc7965bd"],["C:/lmislm.github.io/public/tags/codewars/index.html","df16105104dba353d75ca8704a9b4c4e"],["C:/lmislm.github.io/public/tags/css/index.html","f62cf01d4dc9584c59675bae485766d4"],["C:/lmislm.github.io/public/tags/git/index.html","45009e1df80792517b31086bef332bd5"],["C:/lmislm.github.io/public/tags/hexo/index.html","dd1b7a2af8f3435998051a8b00ca6e10"],["C:/lmislm.github.io/public/tags/index.html","acea25f04ea395c492d153200258719b"],["C:/lmislm.github.io/public/tags/markdown/index.html","8e9a80fc51e58d1ea96ea4d0fc7db7a9"],["C:/lmislm.github.io/public/tags/poj/index.html","3b6d31e32e33bc0f29e247af62f26c08"],["C:/lmislm.github.io/public/tags/shell/index.html","ef98c8e12f52714b469998ada44f836c"],["C:/lmislm.github.io/public/tags/vue/index.html","991be3f96aa5376d8b2a2a84fdd857b1"],["C:/lmislm.github.io/public/tags/前端/index.html","072338723176ea6793b93fb1c1ced290"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","41dfd74d4db5f6f54a04043c302ff7b7"],["C:/lmislm.github.io/public/tags/小技巧/index.html","570c6bf7b5c94516609c00bb95f15ae5"],["C:/lmislm.github.io/public/tags/展示/index.html","fd70280e2f400cac21ab2aade8a18739"],["C:/lmislm.github.io/public/tags/工具/index.html","d6f1c64f22184fcd6e3b02329f3dc2ec"],["C:/lmislm.github.io/public/tags/感悟/index.html","585923c994ca38ebd61dc32078e5acf7"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","2f4ac40d9301cd87003cc78e3cadce4d"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","459e207128946c641633c367e8ed69ae"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","74061ebd8af38808cc44a0e8271572f5"],["C:/lmislm.github.io/public/tags/练习/index.html","19407f2d132b4495d4df3e845f2b057b"],["C:/lmislm.github.io/public/tags/编程/index.html","a31311f878cac0d0b013c05b9eaef3cf"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","07b53bf1d552bbfad39d7d981262b560"],["C:/lmislm.github.io/public/tags/运维/index.html","b3b1a9e1e606bac82c764806802d015f"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







