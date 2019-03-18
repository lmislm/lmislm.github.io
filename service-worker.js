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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e9a0350f61cea8a413b507ab9aa8427f"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","4608d77a1bcd426689a62d3c6b80df7d"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","5d1ac69270cec2920a06c0e0457bc189"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","48c143a12102ff341e7571ab60764078"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","51543708f1f27192c1f16803f2b3ee5e"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","4cc3f080fc7ef4d7829fe651ce3b1523"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b52b3f20b81c9fd2c62b72903cf5a8c1"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","27fe497b1cdf4799897ecf524bc28ab5"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9df28169caa49735adf76cc2673ca0fa"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","696141a09e4c0a562025faac7a913c45"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e73ffc009091680418d64ca693ee1638"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","31ca69ebace067be5d47db61680d7cdd"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9776b3ce964c1e746f2bbdf4502342fe"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","5e7d287903fd71aa92e04a0be6ccb678"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","58d1ba2e78ee318753a3b830de7c13e4"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","1cd60be0d03142b20c17a859f1ab662a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","2b38aa2739ecdd9bede760bbea7433a5"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","fed52689e17c1f7795e35e1437e8511b"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","d50e297031749fd2ce0827934cb27b93"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","43bb32cead2fb20add42f153609935b8"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","27ef824abefefa5b54d8d3788ea4b364"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","688f6d384a7e3ec150caf7eb64fa613c"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ef3f70847d4cea326cb9d883e22b8d18"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","865c06c2c8fb42ea1be3ae60b12bd6f9"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","9802d8b6f51a588a153fad34640a8747"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","7df6e243acb2fda5684e1a97200d5fa0"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","1d78491cf0cca294e949a1d2a9a22914"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","74c97783658fb534bae5eb666172e12a"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","9ab3bc0c9d83baf49c386dbcd2dd5c8c"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","9117d20f5ab5e2b616e34131023eecd1"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","2f429c3dc64200d252cc554c26fb072b"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","9cad96f3b2ee69117a6baf5db0214679"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","6f4400b78a4efab3617d73330f64e402"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","b6f1074a05ebcf1f0fc8b0fcb6f4c069"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","c0a47b390eece751997d47c1def228b0"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","e2da451d95b24e9515157cc51de6cce4"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","6cf24a78d5beadd5932c0194fc8fe973"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","b69b6195526b9134e78f2879dcec6c7e"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","9a42ca2a99e202b499ca57488a81e43c"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","672546ac84cf965e4e5e150925a39d4a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","2f26faedf380c4e06ebc661ae6de9c70"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2e7c386909f377ca939009c5017f519b"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","a35b8b1376643ce96f830065b4ceb3d5"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","ee59863234ab8809ef695bab0e5d210b"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","4b133c9160bfef86da890ed37335881b"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","63c10d60df684b1b6f8957c5ab8ca082"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","4353348a36a4b1bf70c234ce92afc84c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","b67bc8df5deacfc7e1796af4788c784a"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","37a8849e8c7a46730e4846e0fbe956c2"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","6ea1e9a6037facbecb8dd9523a274aba"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","9b0912d93422a4893fa58b7195566db0"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","124468e05bab7928b2c48dcee7e8a4a6"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","0879dab13181f9d370947e52bd8c7375"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","23b205944d8111c805cecba5029545fd"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","fd12053c60100979a6fdeba4727ba5bd"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","203b565bb9b5e842f655037c24394bd3"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","9c167d64f8dcfd03c3f42d9307abeb2a"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","d185353859088436c50a4614ae1b4fe0"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","0dd6c1049d74f98ef6d47377f9bc8e89"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","3b9a7552e45f29861b7ec9851126bf28"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","43e39688283ebd7bc81bf889bb076237"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","8b46c9f6ad10c2a795735d7d5fb66310"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","5a60841c499d333f84c2de382d416924"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","2d98b5b44d851e1d2265931e5c174b83"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","a0a3bae19f98700c0cd4c2c94444b002"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","c1c1bd3847a7c1158a3cdcff1774f035"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","3fb67f23eebbc49e81714457575acea3"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","2a79e842a43ad09a6fa670cc3bfe69b6"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","5b0dcb3e45393763386124131492a465"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","381e1e5e2da1b0ab0486b140b7293325"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","1f50352560586d293cf2fc0ea80db041"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","03941958f1198e951029e3204d18bbd9"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","72260722dd7c2cda252541755b3660bc"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","6c1531eaee71bf8ea1e587867a78d81a"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","1f964601160549771d55251d715d1708"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","c8f7c878b7031f9db03ea947f737672c"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","b49fa5bed6194f5617533fab53ecb6a8"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","b9819b2b5a3c037309a8b4e503316ee4"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","f998e8ed910d9dcaf105f2b65a06ac78"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","1d600fc8edabcf83e1433fd3bcb3db05"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","9e5736849a728fa1f327fb05208591a2"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","153942145cfcafd6ad526603f6e4ef9c"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","ce9ef637424c5dc169d590036225e037"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","9926f64593c56ba631bb28bc269d7e60"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","cb9acb8a95a27489b2905c764591eb51"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","46057ea04bef26e1b7001e21ef24c198"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","a6ba250f7da935795a425748f1c913b3"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","cf477966bdf8877c3451c075b57a79e1"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","46ebddcdf43cfe3410e74e2ee6a66d64"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","748963274507dc06ec1fd72b3ca2fab8"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","09620adfe186292294aae5d6377d8275"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","8e68da87b3c964f2e87c3c1495040f30"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","d47360ef49422705ddaa6e1c14ae2c33"],["C:/lmislm.github.io/public/about/index.html","b2fb3dc187814d254f0e406b0967f9c2"],["C:/lmislm.github.io/public/archives/2016/01/index.html","32de914218cb198b4269f46a4d02bc44"],["C:/lmislm.github.io/public/archives/2016/03/index.html","da86245dd6dddb018d4584834967d2ec"],["C:/lmislm.github.io/public/archives/2016/index.html","c810688844380b6f530785df962b6261"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e06f0c3bfa286e75690c584a4b4d14ab"],["C:/lmislm.github.io/public/archives/2017/03/index.html","65550bbfca65503308d0ee39fbe3f5e5"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b1056a122dc80c092cbdf16335261b4b"],["C:/lmislm.github.io/public/archives/2017/05/index.html","8ceb2b1a368ac5b5404505584d113432"],["C:/lmislm.github.io/public/archives/2017/07/index.html","69fbcce078172954f7dfb2cdf9789a72"],["C:/lmislm.github.io/public/archives/2017/index.html","7420c27006ef71e7849a63c4d3ccf40f"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","aecc3838aa48fb7a500eb34f177136d5"],["C:/lmislm.github.io/public/archives/2018/01/index.html","ecc7ba85dbb15f5d627e2c1b4cffdc58"],["C:/lmislm.github.io/public/archives/2018/03/index.html","7bf016f42a066e51a4e2050196404cf9"],["C:/lmislm.github.io/public/archives/2018/12/index.html","ccc902bee35e465d6329e930b19b12b5"],["C:/lmislm.github.io/public/archives/2018/index.html","95334ba4eacac558855f2251f8c37295"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a44a4685ab516c053d8ee7ff23e94925"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","6316a30c509f8d0e92a07246589d85bd"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","d72c2dc26935908f34521bcac8000932"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","8770539effcd1195288b0e284bf1d6a8"],["C:/lmislm.github.io/public/archives/2019/02/index.html","c55910312d3f089d69fa339cb4d699a1"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","9f882395ffe62854b49b1c2c6bc5882b"],["C:/lmislm.github.io/public/archives/2019/03/index.html","6949eb243b0da0507198413c120a759d"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","1fd5dd5e3798ad4946ba0c2051d444a1"],["C:/lmislm.github.io/public/archives/2019/index.html","70c347a48c74b1b4119e7acd1fbb06c9"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","7e7b93cfc6196435b61a62fc5e04453c"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","60e0def4fb82c6eb83b49f641b63e407"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","0019864ca5c0c10de9d54bdfea4a7c43"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","3a4ce077f98edd64e49be25c6c0d2a8f"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","22c2116201fc8eaf728c4a4e719957ab"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","be229ed952c4ae4af1fd188e5b78499e"],["C:/lmislm.github.io/public/archives/index.html","9d51bc3b10803f8d6d8521ebff48a6e9"],["C:/lmislm.github.io/public/archives/page/10/index.html","ee378ac4eec804c9cecfd97468b871aa"],["C:/lmislm.github.io/public/archives/page/2/index.html","a156b40c9ec583e60083e7b2114fcecc"],["C:/lmislm.github.io/public/archives/page/3/index.html","f80150100d48b27debb6e8a93d587360"],["C:/lmislm.github.io/public/archives/page/4/index.html","986f2b8956c3a4354d9d5958b60cc601"],["C:/lmislm.github.io/public/archives/page/5/index.html","cfbfbc52faf0edd491028843e9195973"],["C:/lmislm.github.io/public/archives/page/6/index.html","b3593bb9a23230c950e7ff8474e78e40"],["C:/lmislm.github.io/public/archives/page/7/index.html","b9036d5e06e855cb31e38e8b1755b68e"],["C:/lmislm.github.io/public/archives/page/8/index.html","bedd1220f4000f31a9b3e005bc0db67a"],["C:/lmislm.github.io/public/archives/page/9/index.html","2a08f9f15e8e387954c0db43a999a80b"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","3a0f7593e016936916f405a46121e20b"],["C:/lmislm.github.io/public/categories/index.html","e2326fa0ddf806774c5843723b33fbef"],["C:/lmislm.github.io/public/categories/学习/index.html","1ded6deca4ef70100fd5251cefb091c8"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","a569cdc2dcce61be76444459b393ec6b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","ef6bac1ac04f303cefb646588ff272d3"],["C:/lmislm.github.io/public/categories/工作/index.html","878551750b8bbc4ec0ac77825705edf6"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","4f5596dc240efd0de91145b86c6b20ed"],["C:/lmislm.github.io/public/categories/技术/index.html","038595d0fa639d826b8c83074d8f3a3f"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","74cf8574a7e1309e9b0ed15a759784a0"],["C:/lmislm.github.io/public/categories/日常操作/index.html","36a2a1f9337d2d46ecae680170ba6f24"],["C:/lmislm.github.io/public/categories/生活/index.html","82c45499517be5a7c973fa1deda7c6b8"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","2bb871473b54401f6f2c8f5a43578823"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","73ab4d6b4835da86e6e02fcdb0bc216a"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","f64d2bf0959fd9a8f24491ee1512a730"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","9559b84e6e2f1af9af9d3ea7b71d71be"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","583bea923e9b2417063c4337c4b42834"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","e7691e9a059eda035f4a84ec586f4816"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f58858924947123916bd1fab88e51cd5"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","e76c812832fa8de1f73b14608e1472ca"],["C:/lmislm.github.io/public/page/2/index.html","5a449a4a9ecb464422f6efbbaf04e055"],["C:/lmislm.github.io/public/page/3/index.html","21bb716361c8eb6663273ce11c1984d7"],["C:/lmislm.github.io/public/page/4/index.html","508b909364fc5ddb780864452796e367"],["C:/lmislm.github.io/public/page/5/index.html","790b6fd26a3505754eb9ee2ce581a81b"],["C:/lmislm.github.io/public/page/6/index.html","2a50320b635746bcb3a6d4114ffbb179"],["C:/lmislm.github.io/public/page/7/index.html","2a3759d373dec27f88c10076c69c5f3c"],["C:/lmislm.github.io/public/page/8/index.html","c47af4a79caa332739a1cffb387af008"],["C:/lmislm.github.io/public/page/9/index.html","f07151d7a1b2e5937689e2877ed02686"],["C:/lmislm.github.io/public/tags/Interview/index.html","12da6fb770140ff77305ea57e54191ee"],["C:/lmislm.github.io/public/tags/JS/index.html","38891a6298b0f1a3e03bb230afc9ce90"],["C:/lmislm.github.io/public/tags/acm/index.html","adb928d6fac44990168ea4df99790b6e"],["C:/lmislm.github.io/public/tags/c/index.html","ccd2338e4096223ee28e7c6b17af31f6"],["C:/lmislm.github.io/public/tags/codewars/index.html","48ec5c37f75adb66650fee1bbf78538e"],["C:/lmislm.github.io/public/tags/css/index.html","00a41bc337cfd05dc4942d1f1cf7b82a"],["C:/lmislm.github.io/public/tags/git/index.html","018a94031c3702cb11732b06656defbd"],["C:/lmislm.github.io/public/tags/hexo/index.html","007ce4c4cfe3f20f409828ba7e161540"],["C:/lmislm.github.io/public/tags/index.html","63dd95a3aa284ada0790d6668044b7b3"],["C:/lmislm.github.io/public/tags/markdown/index.html","3f517db310f15a5ae55538bbbafa9c8f"],["C:/lmislm.github.io/public/tags/poj/index.html","e4d7d56e0e78f4c740da5b40aebff93c"],["C:/lmislm.github.io/public/tags/shell/index.html","3d9ba86a71ea9b4db78b3639e7dd3ae8"],["C:/lmislm.github.io/public/tags/vue/index.html","853512cfc80fc82f7e79ce9103d7f7b0"],["C:/lmislm.github.io/public/tags/前端/index.html","5afc4262c6d1ace6377b8bbb722a7e3f"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","3e2f292257020bcf90c05ec484f62af9"],["C:/lmislm.github.io/public/tags/小技巧/index.html","369b04187fa61f6fb6d37b428988978e"],["C:/lmislm.github.io/public/tags/展示/index.html","3c193162b96c00d8c3b21b035e2f1a49"],["C:/lmislm.github.io/public/tags/工具/index.html","c36e966b57f829d54b1dd392ad357f07"],["C:/lmislm.github.io/public/tags/感悟/index.html","f8ca95aa9f82bfb451952f05633c46dd"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","e1a112e00f54f35641b5337f2fc646d5"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","b45d47c9202e6ae032c3505042522069"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","df2a4efcd023b92ebfe5392536e0abff"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","16b78ebfe278973c090080a6da29c6e7"],["C:/lmislm.github.io/public/tags/练习/index.html","3eae0b296320b6a187fb9c46d6a43166"],["C:/lmislm.github.io/public/tags/编程/index.html","2e5a7560b1b50f43f0baf86d3e827fca"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","70e01527aebf2a8cda8466e3e42d08b9"],["C:/lmislm.github.io/public/tags/运维/index.html","cc0f0a0ee7f54ff1afafc1017fe4dfcf"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







