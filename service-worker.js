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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","bd8d2cb85ee98eb2a8ebccb33d204ee2"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","2b421eaee99c683ac8890fd1c55fd053"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","53a801759329029b2c5044a8bd8c2d18"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","40a3bb8a23f48c4af5c817e0c498315f"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","8daaa3b1a6ff7ec0044efd9eabdd6532"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","54bee6f02a64320f6679a0a67b93010e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","f4b8fa1868c07ba57d224dcb8f794a97"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","53f0001e462efb6c7aff3d44a4b4e72e"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","348c9d2d60a6eba3f0d101d6f6c13b89"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","30d2c1ba8a1434f71830847be6e27b2f"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","cd2f742ee91dd46b48278bbf9ba99dc6"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","516c901a93600217017584d4d1ddd1f1"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","b35bcf1b2e6f982d11a6649649e5d8ae"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","d9b8072a8813af2698a82e064ede4915"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","e4d211479fac54c2138e951cb2c48260"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","2653408cba1ed5f140bf4df7695d349f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","1f1ece75b38c6231bb2fc8a955af44d7"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","80b285a2f82712cfe30294b84f809ec7"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","655fe770d888f30e906810b429dba623"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","21f67b4fa94b692d1a1610d9d2e2200b"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","466b325ee170fea9fb842851c0c9eecb"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","8c9dd069bcf03df0c5830922a018dc4c"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","422c048368bd3c45e5eac740598602a8"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","2e8d5e0ea4ada277ac69116a0c2f1f9c"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","71282517488dd7b5116e9b189c023c01"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","2e457f890efb531ee686032778a35e22"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","5df2f0667813a30eb42bc361813bd338"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","556f9042ac2bb79620ef32068bbbb8da"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","3d957bd02c8992731d76bfcc66ce7a5a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","0be1b59dbd724fd620f1166a3411fe27"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","ddcd1b7ade1b36526e18f172a3aa9951"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","8b333075748cb9926bd86701acdc7e3e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","310e15dbd3f442df333c0fb051e72d5e"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","813757f6c6183c9216c990bad63d302f"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","9be7e4f76bed6d3699ef896beb19c423"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","b57bb4f000ce246e7f3392fbf1471dd0"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","96986c2287913329bff00153ec3680c8"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","92afb092c813d7404a4471e8dcd5ca69"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","fbfbb07844af2039a61b1e28f624449f"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","c38761a22aed6c630605d7fa52b57eae"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","c550eba790dff8f62f4d6c8346fa3584"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","28573757ce16926c987ccf51af8f035f"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","9d3cbee2e4d09d3f22cb6fcfd8558df4"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","cd033a2396a8f3202863da4fa199a3ce"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","2aa05983726f06dd7a0ae6b72fc13eaa"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","8c812ba95da3d21ca6c0878e22077011"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","bd9176922c277d577d4495ae7a446123"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","92922141517c7721bc802b26e77566e2"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","335fcc60bbbfb9f92262da3b595ccbc5"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","243e512f764b924a92ec21bf747d6ea8"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","71a0ed9dccfd547f6212ef9152ee1dc1"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","78033313bc49685bb7e9803c7268b645"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","99f871f8583ddcddf4907c8484cdceff"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","3bed1bbad6b0d156133a2c1aa372af32"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","b86a9d5b003cc99c714666a62d7db310"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","41382c438b7020d07aa7bb56389a630e"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","e713607741b5da2fd857035045a8be26"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","97405f4519b33680c26e9fadda651e89"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","263f7355d9b59bc7838b4a94ab05d0e3"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","db0a512e00ddc370858007a46da7d986"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","5f004a9a7b06d431ab3e9db870a5847b"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","3f289902bb25d32e5210834a5daa5a29"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","4039a92ec7e14ef8b9cdeba1cb301499"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","048eed61f0f3f6c02c60a4ac287ed515"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","55e5b424f15a868c714b7d681fb59391"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","39ab83f7a871f1e79da75a6d6e4efbf6"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","75f0cd5edba49a86359ebd2cfda62893"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","a51251440ab55ea65d45042aa16446f1"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","53c57442ff6578d76502528413b9aa96"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","bb8c402982e9b5234fd1a3d09ed8e55a"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","c167874e976f6ef134cd0217f09f7d9d"],["C:/lmislm.github.io/public/about/index.html","806411d0f3f8262ebc6e249117bcfdd8"],["C:/lmislm.github.io/public/archives/2016/01/index.html","61b542ceaf286b6ba81a4245ccb01c98"],["C:/lmislm.github.io/public/archives/2016/03/index.html","d1706918e8d04f5bc7f9885a179484d4"],["C:/lmislm.github.io/public/archives/2016/index.html","ec3f48322282162106c5fab7c67a94b9"],["C:/lmislm.github.io/public/archives/2017/01/index.html","d466a62a61d6758dfb64300e0c41e1d9"],["C:/lmislm.github.io/public/archives/2017/03/index.html","93aba2b9a66813526c69cc84d3053839"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b806e509c53f56401578cf5aac31866c"],["C:/lmislm.github.io/public/archives/2017/05/index.html","bb606b9fbaff44d953c0f1c015e43f26"],["C:/lmislm.github.io/public/archives/2017/07/index.html","95f28ca3ddd6769117a31807e025619f"],["C:/lmislm.github.io/public/archives/2017/index.html","e1488a47da34a6af0cca410d3164dbd8"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","c46ea5d9ff8fce1fec0f0f1688fea011"],["C:/lmislm.github.io/public/archives/2018/01/index.html","2897284b90a672cdc0b6503cfe8f9618"],["C:/lmislm.github.io/public/archives/2018/03/index.html","12f5952e42d8625ef94ffd0579d6a9ff"],["C:/lmislm.github.io/public/archives/2018/12/index.html","996d7849bbe18e299e7ac3520576d73a"],["C:/lmislm.github.io/public/archives/2018/index.html","ca553cc423df1fe5425ea353c98039c3"],["C:/lmislm.github.io/public/archives/2019/01/index.html","82cc68ee57185fbb4b28ff6b0b81d045"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","3344618097d34eb1b594c72aab77c7d2"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","c5baa91071e334319e4458e9813f715b"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","dc6d31f025aa5c73a76cfddbc0f4ee74"],["C:/lmislm.github.io/public/archives/2019/02/index.html","3e47c23e3b1daa48a9c84bcb7e04a068"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","38278cfb894f83d3bb021e1d00406937"],["C:/lmislm.github.io/public/archives/2019/index.html","c7febb6de52bf658c26976fef476fe62"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","88f8049a1cf183ddc61f2bfdb682092d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","d19a531f56eefb266498d4b20fb3645e"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","40b5bf3f0ccf7e5f91dea425b15c8b31"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","76d3a6b46224b4ce6ec38a451361ffa8"],["C:/lmislm.github.io/public/archives/index.html","e833310cf7b916909661c5e51b707c5b"],["C:/lmislm.github.io/public/archives/page/2/index.html","6d6d1b86f4883cc643b91548270945ce"],["C:/lmislm.github.io/public/archives/page/3/index.html","3ff009526bc38ac7f9ba82a9ef16608a"],["C:/lmislm.github.io/public/archives/page/4/index.html","0aca5b20e0f6346469d9c8e4cbb68568"],["C:/lmislm.github.io/public/archives/page/5/index.html","234e130e1ea8cfc550db938cea0e6f6b"],["C:/lmislm.github.io/public/archives/page/6/index.html","5355a9434a56f3603cd7bc88d12455c3"],["C:/lmislm.github.io/public/archives/page/7/index.html","8abd8861366b9bcc1898dc0b736cdfac"],["C:/lmislm.github.io/public/archives/page/8/index.html","87d2ced7dbe23e9963df21bfd7670a16"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","4efd50ff5e47da373ce47bbe09f339b0"],["C:/lmislm.github.io/public/categories/index.html","3b0a2ffea7c5228b87588e6a0827fa85"],["C:/lmislm.github.io/public/categories/学习/index.html","ecf9a14e17dfcd86c285b93fb8227a11"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","37f3a98dfe61a391cd28c6c2fcc5cc70"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","2fd2a7f478a4c3919e0a941a28931b83"],["C:/lmislm.github.io/public/categories/工作/index.html","e343156e6efa8b6d6e4ef246ed9b7ed0"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","94eb43460d902947cab1cc565231fc88"],["C:/lmislm.github.io/public/categories/技术/index.html","feb9ee13f9fbcb22a452d8b2c78fce37"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","66cb3ca138cb0d2e30783e0ed53a693d"],["C:/lmislm.github.io/public/categories/日常操作/index.html","fc46286341b504802d32adf39a380b90"],["C:/lmislm.github.io/public/categories/生活/index.html","30e809d5796d8d2d4a2d0765a9f2ddbc"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","dced40c4e42fb90cd73e3769b2f1bed9"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","06c038aad3b2da4226777e6c63ca20b8"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","5692b816b26c5990a1c1a52cdcad7806"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","02d28b092db000cc1eb66ad0ce8dd1ab"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","e1148a46d01b430d7bb2dd15e7ac33e8"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","9b181ef932d8ed45409cb5517a4178d9"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","7a8ced94122ba0f2d9a222a5500f4013"],["C:/lmislm.github.io/public/page/3/index.html","b3816121994ac59081f07ecd333305f4"],["C:/lmislm.github.io/public/page/4/index.html","95d3d11474635bfe97f8ebcb709381c6"],["C:/lmislm.github.io/public/page/5/index.html","606347cd7931b775e42b0a7fdaf463d4"],["C:/lmislm.github.io/public/page/6/index.html","021a756b58aaf1fe8c8002727fed590d"],["C:/lmislm.github.io/public/page/7/index.html","c82c2a59e8f9154e06e3352d205790a3"],["C:/lmislm.github.io/public/page/8/index.html","3724e69b3b1ab139123c896b709288c6"],["C:/lmislm.github.io/public/tags/Interview/index.html","87c4b5defc20bff8fdb7b60726644d6a"],["C:/lmislm.github.io/public/tags/JS/index.html","8bbf51dbea39905f6c68b68902b2056d"],["C:/lmislm.github.io/public/tags/acm/index.html","2a66d75abb8b5b3cb81dd0e3fb4b5aa8"],["C:/lmislm.github.io/public/tags/c/index.html","b3f670c2e2b560fea09ea59c1d7989fe"],["C:/lmislm.github.io/public/tags/codewars/index.html","382c32440cee3c49b081bc0d46a0435c"],["C:/lmislm.github.io/public/tags/css/index.html","9b88aa8d99ad28af2f4143d71927560a"],["C:/lmislm.github.io/public/tags/git/index.html","ff35d6d5b53ae601456df5ee1d028756"],["C:/lmislm.github.io/public/tags/hexo/index.html","f40d8f1f0c620317b336d5be61827648"],["C:/lmislm.github.io/public/tags/index.html","7f7ea703667b4fd75f4315d73df64584"],["C:/lmislm.github.io/public/tags/markdown/index.html","6b3938d964644a040b00f2965f8c7333"],["C:/lmislm.github.io/public/tags/poj/index.html","96a21031d5c8dda9253d0c6e0495a3a7"],["C:/lmislm.github.io/public/tags/shell/index.html","9c995abf1ce49010d7f621272dd7b20c"],["C:/lmislm.github.io/public/tags/vue/index.html","b598020a25f426784728765a3bbc001a"],["C:/lmislm.github.io/public/tags/前端/index.html","2a3313f645539b9235abd7d314d1ebe0"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","01ab987ce48d43554a6976eaba86ad8f"],["C:/lmislm.github.io/public/tags/小技巧/index.html","d5d0798aac00053a4e1d7b53cc5d6dc4"],["C:/lmislm.github.io/public/tags/展示/index.html","a2b288fb71ab269f04e62a24e79a312e"],["C:/lmislm.github.io/public/tags/工具/index.html","99c8685f0fac290b0b9585155ad44a79"],["C:/lmislm.github.io/public/tags/感悟/index.html","7ccb0bab151a74aabbfc4cf1af210579"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","7571944bf7e1e2490a2587eec6e49f29"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","cfef4ee186a2d70976f9ced736facc2e"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","01eaebf7051f544f2791b892f51d5862"],["C:/lmislm.github.io/public/tags/练习/index.html","cb60430bcfe6965aebf25a58d8b91219"],["C:/lmislm.github.io/public/tags/编程/index.html","28e81573cb9f0cae5d2be318ac2c4bf7"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","c624247593d063c8696ee4ca1a1907bc"],["C:/lmislm.github.io/public/tags/运维/index.html","403df83bb72e504497a348520391e595"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







