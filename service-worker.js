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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","3684e4112adf5e03a13c8c1ee181e7dd"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","85e42306386abe119ade3b9a1ffba913"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","3db37640ffdd56c39659f48bcda25268"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7db27dcc448d9b23f6a395a5f41753b2"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","73321cacd0fe44672d991e306798bd30"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","9c3d45978ee6d928bc09a531fc9e1069"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","061ac5a606ec6ae0f700793e58c2c713"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c3a5f0978aa914c1f61898ef8e535bbc"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","651541d98f6bca56cf658e20fb998fc3"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","b2e724a269fca038bc43fab39b1f3cf1"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","c26dd84ba721153a7a24e1c10375d904"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b0ec850f140174908583ac689b76c988"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9149335f99d5b505a51d2572ee32ecca"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","c4e6d7a264b98722800a5ab8e2c69ffd"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","1a6ffde173227f1696034b8e41795560"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","f29f49be74f579a2b22a4e2211a0b134"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","cbe48d437c467790c3ec90e81dc8d338"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","9f30f96ef8941bc5309897f250f2c0aa"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","21abec49204b60fe6f87ac5226af1ff6"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","996b4aeb48c95b27970b427e15a4b6f0"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","c4a72776b3595b868bee9d305b85e73c"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","53c33a1360ea1236efa4a8bf3da8ee64"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","3839d473f0836213c2baeb30692a8b79"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","a15e4688219961b7d001670713d39e08"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","4157f083f0d0bb94925ca076885cce5b"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","55e6aa7fe9ee78d0c0b7da6f46b9f617"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","e1de6f9eb1623c711eac9aa215e01878"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","3a552dd51d9d8f1093e2ddf3df9f4cc5"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","219a027fabb5b8f1bc80ddade7a97d42"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","bbed9e7cc802988004f68efd444d85fd"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","0ae8e651bec0ef28a14fe3c6c71297c1"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","d8bdf0e056cbafb4551f97102d5410db"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f5836813ff45cc3126c3534da4b88a89"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","87e7859de8333579a5cc11a77300ff42"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","a4afac84925766621605828ca140179a"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","d908ea5829a9c39534827379ae6e2a2f"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","27e37ae2c20e8f3c7c3a255fd3a04730"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","a129c54f1870c36337d71724e6948eea"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","0c9ac2015d90dda02c8fc236aa9ce39d"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","ad75fd177652084731641afa76be1f71"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","9ad5a72a1d590cb66418cba81396e55d"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","e85c3ca61f9056831294f6850c4818e3"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e00908b109d64924e39b4fcc77be6902"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","32ba6e2fd44f053978cd8506a81bff4d"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","208e16424b0ac33cc15a3c70cd022fe9"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","30e23bc62cde2367827334ea4718de4b"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","4d0ff1bc837ffe9b21b0d014b4898eb1"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","4e9e27793a298202af463308ad411d2f"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","a7f9dfe05b6b951cbac818e8c92934cd"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a136aaefc1c2a445cc1830096aadc6ed"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","e87984d2bd58774891077714dc511619"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","eaea69e398add7719016d561963b2e74"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","cbdcf3e0bf6cb2f478e2b8cec8e8da82"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","56b2a37eada0e2fbb95a0d016018dedb"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","fcf1d8d3fb8fa7e4d949922e1b3348d0"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","ea6569104c59d4a59d393dcf109f37f4"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","dda84e54054471c20b8acbd2c20bfb73"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","3cb3ae8527471528e0709c971de29d76"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","614993b11423360a7bb3b5d4e6fa0b1a"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","3155652dad2b9ea875f4f10d2cdb5d6c"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","f80e6b2cddab564c18bb3829df310516"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","b2a83495cca1b83f52dfb5ea090b2878"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","2dd9f664086d26ca7b868d4b9e05ada9"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","404dc312538961ba0fdb537305968ed5"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","168a6dccc4650d2acf4a51669d98ba76"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","068dc0b8ba447f926ccc8c1f03937035"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","9509e2954d3b16d1c8b1f60312d4d662"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","88a4354bc6e752d51cfca40be287963a"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","f45b4d94a55832795aaf0b2b7998d47f"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","1bd256d15372fd242c8eaa5729ab4d24"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","a74881961335354ed2a24bf4b71cf99b"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","3b304db1cb876a48d158b9aaba4715f1"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","6940f3d0fbcb52c5cee7af02ba6d6ef4"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","a05ee836e01167bf92547042fbf9b1ff"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","e35618e26cd4cb503d533194b9acbd50"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","bae36c5ead3ac059fb7dc65af2f3fc4c"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","67ad545fdf99e651e2187af43707cbf0"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","4a3885fad466d66e0da793d388e3be16"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","5aec32a1fe7a98f9d92aefcd7a53c5cf"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","c0b976c10d4ab602af9ac85e84a751a4"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","1b1992daa289e339ba2a8429e79c9ed2"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","01cd01ee4763c119327f62688d61eb30"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","b5283b5bfcf6d5f2f0a7abcd04e915e2"],["C:/lmislm.github.io/public/about/index.html","47fa92df9af9e9fcfe49751cc90f6e3e"],["C:/lmislm.github.io/public/archives/2016/01/index.html","7145e401511e372fc9a70f61fcfad6cf"],["C:/lmislm.github.io/public/archives/2016/03/index.html","4d4b4a8bb6fd46df0ba690b248b9e10b"],["C:/lmislm.github.io/public/archives/2016/index.html","2a80fb21b90aa23aeeffcbe418bf7d23"],["C:/lmislm.github.io/public/archives/2017/01/index.html","624d1fae7634399f9b12d34ccae88aa5"],["C:/lmislm.github.io/public/archives/2017/03/index.html","a5a6e37e009f49722dbe21a1eaa8549a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","d665510131a0b11fd8bd9b1e6366f2a3"],["C:/lmislm.github.io/public/archives/2017/05/index.html","def8171b4f7e1ac815b0c9eae1fd0397"],["C:/lmislm.github.io/public/archives/2017/07/index.html","feededb8b22dd139febb77fcadb9dead"],["C:/lmislm.github.io/public/archives/2017/index.html","169bdf458cd0cfd29060a0d139cffa1f"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","ad6dd72b68d2717f308c9052d791253f"],["C:/lmislm.github.io/public/archives/2018/01/index.html","4f34a53aaf3f87c454c77472efe36ed7"],["C:/lmislm.github.io/public/archives/2018/03/index.html","92a4c81c3018f807bfd6d5d914e07db7"],["C:/lmislm.github.io/public/archives/2018/12/index.html","be81785b1b045683f67ac19813da596e"],["C:/lmislm.github.io/public/archives/2018/index.html","1d8bd6d922b0cc07f2d7ae847f532f5a"],["C:/lmislm.github.io/public/archives/2019/01/index.html","fb456621ee3bdade5bdf20161741eda0"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","0c074bedd0f01b11cd14ec58b482e4d2"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","4e290449752f6c501cd2e569bff36102"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","1c1f9e873ebbcf37d9148d7fbfc8e9d2"],["C:/lmislm.github.io/public/archives/2019/02/index.html","a6cd4c1ddbbe811c6e143687246b8210"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","b06ddb6b8891861e2aab876935439c68"],["C:/lmislm.github.io/public/archives/2019/03/index.html","11f80226fe84ab1e028c15150cdc6bd9"],["C:/lmislm.github.io/public/archives/2019/index.html","c7560fee052e67bdf456cb62004d6861"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","7c82fb28444f2a33180c158c44f0f343"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","4f76758433f6223254b6069dfba18fa7"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","6b1eb9001da62976187eb04f4ddaedb4"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","b1409e023ebf26b5eea7580aa0fbd7c6"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","98c5346a2b065277af01344b77cbca8a"],["C:/lmislm.github.io/public/archives/index.html","0067809766ca87dd41ee86a9fda71d45"],["C:/lmislm.github.io/public/archives/page/2/index.html","d8fdd8f19ca09622dbf8883965184148"],["C:/lmislm.github.io/public/archives/page/3/index.html","aee52120375e2568e1b58720a5b5e372"],["C:/lmislm.github.io/public/archives/page/4/index.html","654b33d1466ea71bbde0113157d122bf"],["C:/lmislm.github.io/public/archives/page/5/index.html","06cbdc16ac8cd95038e4b868eddd67e4"],["C:/lmislm.github.io/public/archives/page/6/index.html","ef19dca4f2af7cab922ac0a0a8ef9609"],["C:/lmislm.github.io/public/archives/page/7/index.html","988efd502db7b3ffa96a3e92b85c1662"],["C:/lmislm.github.io/public/archives/page/8/index.html","b1bfb2f5d7e119f8641d9a6cee37db16"],["C:/lmislm.github.io/public/archives/page/9/index.html","ae64cc514bf8075b980e2a938b3d736a"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","48b053567a776557231c0fcdb2b4ff01"],["C:/lmislm.github.io/public/categories/index.html","d8b064dae1910bd9343bcb4c741da392"],["C:/lmislm.github.io/public/categories/学习/index.html","a54c19b28a8954441bdf8269fef72ea9"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","2c764fb1f847fabd9e22340139d4e7dc"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","806599853d4b0d3590c645798975e667"],["C:/lmislm.github.io/public/categories/工作/index.html","5c7d350a841e52fd270d88b68df2be7c"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","835f5916c4495e70e8dbc038b30077c8"],["C:/lmislm.github.io/public/categories/技术/index.html","d1ec09bb908693607ba8ae884f3750da"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","9092185b313f5b10f428399253ce6ebb"],["C:/lmislm.github.io/public/categories/日常操作/index.html","793d75554d51dda5de0696627bd9826b"],["C:/lmislm.github.io/public/categories/生活/index.html","7ad26ff922d8fc8f530ad717af1fe281"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","8059e40ece1d61fa02a89af5fa762f6a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","f8cbe1ed98c0d76ec31b53e6ed1f8869"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","8a38bcdeefc482a0a16e3ccda7b6a912"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","20a6b7c1fd3b0283a0d89d73c86343ea"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d11e75e6907aed9d88b69361bce74262"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","5feb619addf2cfc9575544ed3d4888b4"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","cf464ce4f5c561932e57c327acd37590"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/2/index.html","ebc28313bbed5a1e63067517938e822c"],["C:/lmislm.github.io/public/page/3/index.html","f0fb289a71845f55bbf78e90efe56919"],["C:/lmislm.github.io/public/page/4/index.html","b63d42b4d4c927adcb813e271770a6a6"],["C:/lmislm.github.io/public/page/5/index.html","6e84fe8df8b164b8fce978ca234de517"],["C:/lmislm.github.io/public/page/6/index.html","53d4645397c9dbf1dad9c9c40431173d"],["C:/lmislm.github.io/public/page/7/index.html","db747e94c45d1cf04d5e6d1b40b56c0f"],["C:/lmislm.github.io/public/page/8/index.html","133ba6872bdbf712dac7cc0e70d426b4"],["C:/lmislm.github.io/public/page/9/index.html","d69ad60cf978a25cdee446561aabf6a7"],["C:/lmislm.github.io/public/tags/Interview/index.html","96be898e1a570024077281a2e29a10a1"],["C:/lmislm.github.io/public/tags/JS/index.html","9c79f31c7fa75684c484d304b38b1f30"],["C:/lmislm.github.io/public/tags/acm/index.html","60511da400be2a6e0c565423c1d00219"],["C:/lmislm.github.io/public/tags/c/index.html","e7a783c90c87d58f3c5e8c5042cc1c45"],["C:/lmislm.github.io/public/tags/codewars/index.html","cf89f1adc40be7e773e60c04ca131e07"],["C:/lmislm.github.io/public/tags/css/index.html","4172cbafa2f74c4ddc3349b09f0b2d65"],["C:/lmislm.github.io/public/tags/git/index.html","a28e075122ca916bca62c6249315fa20"],["C:/lmislm.github.io/public/tags/hexo/index.html","8e907ba001b8550f58ab39590d917fbe"],["C:/lmislm.github.io/public/tags/index.html","5ecb4b521503ad3ddd1dbbd971057915"],["C:/lmislm.github.io/public/tags/markdown/index.html","4bdde5c6a2d9e8ec140e927defa30c49"],["C:/lmislm.github.io/public/tags/poj/index.html","aa4f269a8a945381199dcabf455c6e98"],["C:/lmislm.github.io/public/tags/shell/index.html","055243c291ea930b3dc0d9e55bf381f6"],["C:/lmislm.github.io/public/tags/vue/index.html","69db8e80f45ac430d3c876d459968a6d"],["C:/lmislm.github.io/public/tags/前端/index.html","a4210afc67c27d5af4926223fee88ede"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","66752489e65895d4d549e2074e4997a1"],["C:/lmislm.github.io/public/tags/小技巧/index.html","0ad028523ffcb8f33b47c56267f67ace"],["C:/lmislm.github.io/public/tags/展示/index.html","95860141623602163ee40398c38359e9"],["C:/lmislm.github.io/public/tags/工具/index.html","4300a20f51a743537b474a7e3f02c7c9"],["C:/lmislm.github.io/public/tags/感悟/index.html","60bb016c7b533d3c4f876b99a8699e7c"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","049188b897dd97c5f37c9380e75241eb"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","6548212c31a143b2c57bd3c8ee44ae38"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","3066b1597ef3306ca6d4f3d10c9c9e96"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","9092bd24aa35d880882811b1a431cbbf"],["C:/lmislm.github.io/public/tags/练习/index.html","8c19a09c7d94115bddaa28a8b1f6161e"],["C:/lmislm.github.io/public/tags/编程/index.html","46d0b099168f834127d2bc38e5ab350a"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","173d407d7b44b4deeaec066505bcdc8a"],["C:/lmislm.github.io/public/tags/运维/index.html","16e2a8981d6968593eadc9b3f8a9848b"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







