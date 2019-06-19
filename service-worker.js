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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","b77c55cc9544de23d5e15b2e760f3510"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","7fdd256ba61263be24e0978cae9c1706"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","837834841f7d725953cef4b66602693d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a491899fc23b857634db170403ef74d8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","b528bf1bddb87c518b8e972f7cc13ca3"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","ae23fa343fc354dcf7e603d46658c2f4"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","75d63167187442961bc40e464b812210"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","541c4a0c6100757bca18a7c102276f31"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","1dca5d456ab4a25308717bd36752ff5e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","306dcf3c43464b4d5dcbfb2a2a030a17"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","d317a3d0b81b8ebed02c25b0a26e68d9"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","eeb38b9459d3f944b7f225d7ff5dcb0c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9c718fc38806ee4856808d4286773f39"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","53bfc4b41745063c5dd7348106f7944c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","5289d7cb5aefe8414622e084981ee3c3"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","3793ab95171cfda6751d0069d8f5de64"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","317b4489afc928e2e2a522035ad564be"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","69de44c7e60aae151642dd3c96637629"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","975d0da8ad7709562a2dbb22b26bb7ce"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","877b470c1d332fb78f5d3e174b0025b6"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","4c982e1037b6e9b078edf49ddd2b02e5"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","0974ee57de8f744ea003414c82f6cdaf"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d61ea7f859ba244ed4bbcf6bca0ef72b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f5e507f82e4b02995437346f21bc9c1a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","b5f54e07224d28e99b95105d66a71079"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","844aa2b89bca45d2e089b8d099ef28e2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","4b4e835daea66cb88a8309433b4fd9da"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","c8e663158646379225cdce75e47648c0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","963b36908231f4bb45679e12dfe79e99"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","be9a138e328589e0de4a47e34c71e378"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","683690ba9020990b64da3dae7cc1509b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","f7104fbfef776ac3ebb12982e2f82bb4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","d318b42a4472d47be6aaa6ce1436de98"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","55e043281eab9437b64bcf873428ea71"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","01ba47bb0f6599fc8f6518266fa6be1f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","8ef92e556cd86d90a9ddc9416773b22c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","3305680d3c1e8742d0c742f31f3a8666"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","e1e85f5c8ad1686be4957084964ca82d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","33f4ec01373fd8761dc1ef104abd6b4c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","4c6f413e4ef89c9f12b144edb0c28da0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","a415be93c157cbdb4b29300969da3d4d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","7984a5fbddb94e8d12748a7add617e37"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","b03f45dec1be4e558d3512b5aee80788"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","bff16380d30511370e597ae86355a1f2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","8f8de32098f9b39e5ff9eb88696d383c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","7d8c3430ab38101cbaeef8791068729f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","da19ffbb7d066ef11438810cc4b72310"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","42988457e2afebfbabb587673980c3c6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","4e263a791f319dd6d4e59f7a18a75c32"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","b882cfb89a9807d30906720b70b4eb07"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","87511ae175be41db29bccde54a9188a8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","59fde2720c30fd4d8c08eb2032d7c1f8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","322c5b2bad068e07651453d41485baa0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","c13b592b86715f6555874b08ea6081df"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","3f79dac8e0f7a986454606285bbffafc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","7d9049bc58b821d55fd149cd5f4ec595"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","8346a85358e04c3a05320be66cba62a0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","ca2ec7ee364e33c9579bbc4b8d3a70a0"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","d920e94bd49aae8d5536c0b68044669c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","aa62306cec52c94a44277ffe20f1075f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","70f3774646e798c8caefdeb663bf10c3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","baa2a2aa06220698b477ecadaad70130"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","01934685a9cf4fa059afc008b359e385"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","b5a6ae7708bf9a4e8b50c75e64f3288b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","da0e6f5729c7a30ecdb02a2b3bb7a019"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","cb24c1b40af178d0ec2a4d31ab162a06"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","1c09774acbef0fff4fc083931cd2dfcd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","eea30f643bca5cd24a31377e31cfffa0"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","72e973b81f9c20a56dfae8dcb0bf1fc8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","93480a272575f12119d2a7a4b4d7b994"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","129c16991299dc66d3d555cab0debbf8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","cbef6872eb26e8fc19b09dbdd19e4aeb"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","a182357ae54cc74b51c1a2b2bc225ab0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","033bb65a55430bf63eba36357fd879d4"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","4f84ff3d5e07ea31adc2010f0f7ed73c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","45d59b11d7d6c57265c84569d3e87dc0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","4cb6677c1145a9d50bcc467bc83263e0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","154c0a3499bbadeeeb8df0296bde0bbd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","b363427d7b89be72eecc92f4fc78bb8a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","bb63955eebc1dfdd30f123af3ebe3157"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","605dc83ee15a9e96704f30419b2a5fbc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","57563d9ef836343ccae5535c4d5b0a05"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","56091cb2523be67fda118fb898332bb8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","5059106811ed76df17b4166d4337662f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","63f4f1810150306fddee447b25546417"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","c8d6ef9be0dc67f026ff90cd6830af64"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","23b7f83c4898072b2ad8d018181a2946"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","54bf31e51596c5235493e05e952f9f2a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","463bf094116064a23cd750186116839c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","c02a548b0b6328fedce590245067cd99"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","7c4c7f69b7eff1b111c4e29678b89081"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","96a3daf5c8def3c164e995f2836bd437"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","118c2d5b90de97f5ca6ca29202cbc66a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","f669ed21272ae7e888df5bd5a27d4831"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","0dcbec593d9803f76194072737cb190d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","ba738c313f32290baa2b8a0e3f17b81e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","ad02f2b931bf4c783ee94b5008ce8bf6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","6af53aab98ee1e72c48a8ba0f0e45206"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","ef88a673696774b4fe9609ee6d6bd604"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","f9e2ac867143a570e20eb2e020d60690"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","d9b8a8e9e218324b4ef02029e9534be7"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","c3b2b8c557f059b595efa1c7cf87b2c6"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","211043cbbf24403e8fc14c5ecfa6ddbf"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","6dcce674ad2a4c858e309a97e5001ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","7db81c4b2ae1db51f06b3f09d367677d"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","960d058b598a3e5da8c3f1cf03189dc9"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","40f73c907131ce301c2b51c544ea49f0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","4dbf3196a1a2e871296ceab62a2d25d0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","b88bf8c5344d52d20bf49900b7cd9fd5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","46090c8d25d547ccc4c2b9ae550efe0b"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","6d57ed1ccd37d4b10d1a27f8b4824265"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","d14d8e19fb5e433f0e7ac664f432852e"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","538a7d324ee8276758d024690bb777fb"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","1c4f29b4f4dbce91e3ff0c0d4c92516c"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","387c3d71f7698d3c60e7f5088533245b"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","b01c3d954db4ca2d7efa4795d5c97b84"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","cdf27221f7930291cdc52bfe34660cae"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","118f79231131048665ec0b731523e9c5"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","0737e05b75b3a5122d5dd090c1110b59"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","3fe5027b76fcdddb02474117ce0c78a2"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","0eef784f22d19bba66232646511bc92e"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","5eddece5e6a29c9511eb299aaba5697b"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","1ad46c635da8f079c551be660573c142"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","40a79ec7631602d23acdba43d27be5cd"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","e2ad590d2e398dd57feaac83b58bc62e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","84aa562786a9087fb5d5a05aa4ea4721"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","8fcb404b18f722f0782f3cdf932fedfe"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","9b14367cf0ed453f20cd9dff0fe711b6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","dc77be611a3748888d97ac1940899752"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","5979fcbbb0255564c7e4b588d45fa91f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","d3cc7f415594316235d6262e6a8d2339"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","9369f9cc5b9d77c8f088abb6feff46f3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","870979970f458be3aacfe2405bc23a8b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","20402b62094d4d7f35211e5fd3175fec"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","0ce32905d1aec5f1e2f21d5cc622baa0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","0db074f6be2c70454778cecdc678f1da"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","00d1cc2fce91e8dfa2f9341ef56a4b19"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","252fd74e5b4f5f3c071f90815a550f42"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","a4be414465d8d2a1bb3981061a6486a9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","749904a7018bf7a3e9f471603affed8b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","398ec4a8f3512c5ee2703a695221977e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","2c89c5edc31c9ec2cb4b3e7e57c2fe88"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","89d9406f86a849d4fe752d599ddf8628"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","771c4b0932defa391c5054459776667d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","e8abed8ec30d770afd8ffdfeff2b61f7"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","34198c770010e9e93df12c9e6b81af6c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","6f6bf681b485b844a6f34abc496383a0"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







