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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","0f6a0013ec714f7d4347f3ce9a95fd3e"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","6eeac4e521cfcc14aaa00bc8baf9f1d2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","4fd783949bb52e3c5951e6eeae040c20"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","eddb2807c57841144cf11bb30c10e49c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","4a12e9581ee350cff7a58f8b6a38babd"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","bba86626b891ee9cd69e0de93a97d29c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","8f6b0be4c30a8aa2bf6efea01318097f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","97a6345f842dcd769108e1a2784e9788"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","1a354350a96a7d1454986061d11ce61e"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","5e246b4b764a117234731a81eee3e7af"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","9e6bb376e85d6ffbc48b2bc2d41b658c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","03fec5a37eca75af96375a981232b5c4"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","2bb09e72b58f8cd728ee2fdd113cfee7"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","bc834362db98ec27884ebe0e0465a4a2"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","65db92743fe06bab99c0cd28e1cfa92b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","eecfaf894c596d5503e7c1e6d607323b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","ed0576b4084795ce76e236e902b787bc"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","32969fac13ad94dec5b5261c62f391ff"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","835a5e6f036e909bbf5dd760c4b9957d"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","4a6c4200ce2e34ae0b29e8a0b6ca49e3"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","e42f38f3b283aa24f255970e6f67bb41"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","5e5a8cc023b6042987f906941b31470d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","0d3cfa41c73f4c2d5e31424818b60d27"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","546e5356d3824b25bc4e66c2effffe6b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","bb8df49a30744ff3d20e875eea5c9e9d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","9530f3acb765fe506f95cd9538c8cb42"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","08c2cd5c85c5fb95d3916be81a72f113"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","9e09df8095a931fa12d6ca65e64c29c6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","a4d95b987687bfa9d543d1c018d65fbb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","1c52a038ebddc3561e2b6cf22b18e246"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","db5e6837c0d4e5f47eb3514442647f7a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","6e72f51173db4cb5d94b70a9d6860f36"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","3eae706d2bb5727d49eb45f6a9413b87"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","7447de8a845d71e83cfd11ffd17cf2f6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","a779081470b2202726174501bdce040c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","70ca800f2c0ae094d208e50ad6720c3e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","5a08e51aafffac248e149b801ac0b1ca"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","2d131cb2d0e2013e2459429718fcb35b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","d7e3e8113877f53fd68be72083e44874"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","17e15044bc313043552d7ec275311310"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","4f3a78cc0ce6bd5bd8cc017bf543a472"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","fd29ea7e6ad3d8c156b93c9a4e63cdac"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","2270cf789393ad8ff6b8080542d742da"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6f9ac84173a44ee56bf222f9fc5bf6a2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","768d8eea7754011c8ea22bc5c6d97765"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","1c73b87b44b25d55552a06b8d045fa1a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","0f82019aa725abd6a606f744e0fe4615"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","76671cf6b87f7db4ee570d01c73e8c7c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","39e0566795017d088bfa840a25ff7671"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","4f20d8fd4cab81ca10d24643744ac049"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","fae9c79340abbeff1f19feb65b42f2fc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","b77d0054937bc8b1ec5c186f54e6941b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","49f8c62a470fd80e9f62bdeab0f38109"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","2987ebdca820c63f2341c468c104fbb2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","16207af8b1182518b707a07edc24a01a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","84893b3a1726647d2bb4c978a469607b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","fd71c61b60bd405db55ecda80c3c51a2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","b3fe59b901dabbfb8bc676afcf2d1502"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","0c19aacd19b0d67f3d557b9382964921"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","61b6a848e96a123c272da0174a90ee73"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","299f9e8d455c5e7b7d5da71fb42cd499"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","c8c1c0c023661cf11fd7b74de03794eb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","0df122961775ea2ba3a52706b5da0c3a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","14a9e7ec5117926512f274008939b8b9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","64b690cae5a6edde2229fe3e78593b73"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","a8922ae1226ed68f8e6295608248c500"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","dbfb0e4b90a8e1905defcfa1d747c1b7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","2910ef2e46b602d0e8307b8db5dfc846"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","c6fed1e633e11061c1f92a8f052d503b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","6e4feda43ebec26aec30b4e5ff75249d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","504b8c8362ffb2ab05c21c1094f134af"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","e0e422f58bc1fc5d653a44fc51653e4a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","e0e76b9ca0ad0ad3f25088522262e28d"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","717128f593732df4e81e48e601926f04"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","d637a10512bd80c215801247cb7da262"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","53b75a976790c424e776bc842ab3eb59"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","1643086bf39096607a6af64683e3e298"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","cca2034b57604269a3493c7b1fcca5b6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","71eccc564e2b7842ea87b62a83b631df"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","bf785fc8fb46ed1bdc8e22795b96253d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","a7040757418bb2f16de8941495986bc6"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","fd7756b9344ab108de69111b5bfa5b29"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","e58c41a67e794bdabe3cf525f7fb731b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","3c22016e2f412f7bf0977dc9a95af032"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","506d9381d4e67365aa93854e8c9f1831"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","288d01f182cb6c1dcbf39908dc8f4e0a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","7955c22bab95ae137accd7a6acea4f49"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","12c49373bf682f614a056e26f6596a2b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","debba3ee60764c493dc3ad5e9cdc150d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","4976e91be009f5bc2371777b0ad1fbfc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","f501583ca415c86a724e6b6962aa4a56"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","5dec4315f6633b7a28d52dd9c229a225"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","32ad48b4041f29a4a65715cd3c19835d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","d2e0ed11664ae4a853e0a290dd255183"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","b046aa2cef9136a96069e3fe8d5a67c8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","2c011786168d4d5567c45015fecafea5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","11f4b9cb8aa17dc1197de62d09a4fab2"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","652e379731436416376515bd09583731"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","cdf0675795fe877995c42de291a2c95b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","55ff1063bea94ba48f0b155231a7ad3c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","0c533f30b57eab60e95940fa2e4adb59"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","8774ab22c01676795aebda533a450861"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","0005eae4019bce0538b99c0879c1cffc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","56247b15cb4f387f8269d72fdab68a61"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","57dbbb217a04f190b8ef822e008d8567"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","4fca32305d1c862d54adaa1e29d77df0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","949cf2c5a2b882940c3c7c402e269158"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","2da79529c97c4ea0f71b0e3fd649e218"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","8b3b0e0e0d23a4cdaf298a9b44556252"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","81790c6f73b112ae0b53d67bb8a774e2"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","58e9ff1fbf8b7943d3e4cd65fba25c8a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","82884dd6fbb7e2112adc56753ac57f35"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","3b799fad481cae4f70d4dda5e4a5c3f2"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","8c0c62fc8d42baad5271b3c7676cf0bb"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","7a9d1ffdf02411009f5c550b4402c76a"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","89b33d9c3efc242a607a6115dd8051e5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","65b2aeb81b614e08c45f6ae841d5371d"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","6e503ad8fe84372d71046c6861caf27c"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","5b0826e11cf845e2455d042277c8fad1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","2a3039f644ee11e89ca60360d413627f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","320ffb6f2fcf328167ce3651d8d74d54"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","610e58ad067b32d239702c9fdfed091a"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","61c407486006f79da5e3b531a07ac455"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","07dac2eed66cef76d08144ef2678d383"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","0ec9e0731a7bc3af3222d02d7c768be7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","556d26f7c627580959f6837d76cdf721"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","38fc344740a146e9a09db9f389bc7689"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","a835adc9e58f243cc1228dbc9a6a03a5"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","99507c1b6c3874ca13843cbf5c3b0a23"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","cf69fbd37e51d28b4f42809078294c8d"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","91d0f78db66144843da62181b68a4e6e"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","c55ecfa6e49eef480f88482802429ac6"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","62f8b89f5a64bd7d078f97d802707792"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","223c4ad061245289638c75b7391ec071"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","e53102233d6d3674a72e2e5915baee09"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","04e29b2e9c1c8ceef6f63d509a5e42a4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","f0dbde6919caedfcc2cf033db43f3d57"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","9ba790acd2d0fbc376ceb9bfc275ad54"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","3952979e771f93c7bf8534c8bbcdf59c"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","da395c82ac0b43331f0ca192a8ddd358"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","3e91f5cbdf508398d2efa23ce9da315f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","950724e109bb85afa095b2c3cdcea638"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","77d1a2f370800c942d2d5f55f007ae2e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","1c1a15386d1937aaae87522335ede254"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","596b24e65d62208e929fc31ba1f2383d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","a03bd51f440891109b3c9490757ca4b3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","244973709f642d0b4ff3d59041fc73a2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","2634aef7c151f77a80039b82af9423e2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","cf18bc7217525650beebcc9e29c17064"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","9d8aab13e7f66fd3975597586e929664"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","dd0edee115ac61069baf064973bbfa15"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","54c3028a4d44937c10d3164093931df4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","d03aa8a499c72b79e05f577c3b6405e1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","848e8a634c864b58f6d02b8fc02bbafd"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","653bc30d9b4926a3feb445b6e1b8abc1"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","fb9233d904281fa930eaee074b773ba9"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","0c5d76fd8a3813509a64fd33fca6066d"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







