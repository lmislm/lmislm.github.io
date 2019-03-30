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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","907ccdfa29f96a8c8b06a65ccd998715"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","ddb277c15d75a0752fb947caea95d313"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","2cc1c7017a8af8ea5dcdbb23b5dddfbd"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a0e98b3e3c5332c600b50f17b1dc5565"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","b5adb70ebb7fa0c67bad0cc0989579f8"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","95c034c3cc724209c8f58483f498a1d5"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","265abbc46bddd1c7f6c7cbb909bfae0c"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","a4d0b5ff8fe6bdfff39bb1bcbfdaf25b"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","bac96f77375442ce8c091e2a358c1efe"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","ebb85d9049f1e86ff3f26bbc3b105989"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","d1ca97f69f6c30c23ba531a80bb352fc"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","43dd23b7f20dc190be7865f88bd3d00b"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4a0bf218177d159cdf8ce8ecebb98c10"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","c116999882f705fe0c81bb35497347b5"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","6d5de9deb76022d462b782106b4cef13"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","a67a151d52371b067dbed7fb46a63fb1"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","106e3a83d472ee8aef56b273f36358ed"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","aebf890730f007ef854ee1ce163a42fb"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","636295db46c08e1a8cec0f563ffb204e"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","33197625001c2362b714bda48b0e734e"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","0ab3726778d3676f3320f088cac275d8"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","ed3692700e8d4dde0ef2ee1f343dd025"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","7a758bb7db372fae323d9d507de52956"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","24f46a1865ebed637d974ff9fcecefa0"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","631c58a8e954e6a2842489304b2a6222"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ddf494b6037dd8ad42c2bf2680cb7d72"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","706c37d28475e737e22b36022601b4b5"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","3d1a1313ec6d40220de2ac93f6105329"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","98fd33674f9542a3925d000a77784f60"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","bafb89a975622799d248185898f4d1d7"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","e48574a631b06d366b8abd02b709d09d"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","19a82035b1cc4377c5ee178b94ffa473"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","51b6349ebf9299d2417ef41b79d0f008"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","6d23ffe84ff273ace8a51741eeb30616"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","90f02426b983e99a1c27223a739f3f04"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","99cbf1934f38439e76f56ff5f9d507c8"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","d8ba679d815ae09217e3fb923f399111"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","437e2549db036829b51416d97b115a41"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","deb1f9598db08ea00d91a235fa37a12d"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","de722ea58d86238971e1987988deef67"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","feee9e68c66271bfba382495afeb304e"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","fb8b56a9f4c523cde4b8e90a6a22b420"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","957f169fe8a490c5e16c91bed599bfd6"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","cb1cd8e6930d854a89d8ef91b8c1b234"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","120f28b5d5223c6a6ef0840d6cf1ede8"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","ed563e841c42d7a7bb6cefea638ed6d6"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","82d9f5f80ae8cd9c1406b4d0a05d2afd"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","066c3caadea194ce1d8a57f5c56bc59d"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","038980a31402cd486ea76dcb8fce3011"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","6a8c05f09313d2bb99dfc04528fde22a"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","be9dccc5cfeb990921f262b61c6afa7e"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","31986ac5149ebcb399ffec32fcbb2910"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","9d0c296319a7a0af4ac1bc8a60da3369"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","d516d3b1399903bdd05eeca1d6d7d3fa"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","f658189af27ec376d346abc5c8e703d8"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","24709f9b0a945e0c3df31be972520d7f"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","13b7efa16c275361e2946c26ceeaf881"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","3b0ab80e123c8af4cd6366bbc22ae0da"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","473627d5a048c84557f04921e30f4fcf"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","d171a3841ce49f124b85daff6225b053"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","1db84788c5e1957e1836de1c3ff2a15e"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","fd416cfbb6f44d3c3781d89d08a101c0"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","ddf5a0cfec1a8573c209d73385adbaa5"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","16331e0cc96e0453d3013d8114d49de5"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","38bf8d141e2164ebf2088d93e930b0d8"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","c70a0943dc5df0fe82b447507214a74c"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","5dbee48a4bf0dea449ab4a818d64faca"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","d6bb27e4f4a66a1d6325c4ef0463189b"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","ecaebf6d2609245d5f1e3b402f465af9"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","9ab560066e0fccfd5592ab895f86f3fc"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","99543a699a19b0a7ff714c3e5d778f57"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","3e739c9fea76d7d475c22065b99e8f5e"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","52225a434ebfecef5e600edda31617d6"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","5ae3b129b4b497c17c914a67ab396ce7"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","e933ca616d774f1faf7b46aadf7e9a03"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","e13678a70829270fe13ce53c10b5b273"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","286ec4af191c5924b98a9609b767cca3"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","16bed00b73bb00c8278cc8a59f691526"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","5a2037ae99ff652ca2fb7715dfae3980"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","9fe94425e0a71f07e58bad1d049a709b"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","d1294afc8a9d89937ff1fa5187a8058b"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","b568e99fc9f7ce9e723486e536f5e1bc"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","f965e9320c4b137b7a7ae9692451d48f"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","06f1de77c0e7169859700b953b662008"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","5fce960022e2bee32f383ecd8ac5df78"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","70e5fcbf08796dd46d65fea338de6e99"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","6c5ddc9471350e73f33ec4c9628ff89f"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","f8e6be186144b0d1025e12939566b11c"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","b75d2af9f204b1e14a0fab4cae7ea028"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","2907c1c8e61ef070f45d3487e45c1755"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","763eb7ea6aea8125548206b19a07cb26"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","1f71490857a4ba218eb0a05a691a62b5"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","1b530fd23198150021ed84010ca45fae"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","f01d3c88d293f761e69b6fd3ff4c5566"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","edde5970a0509f6fb39bb70672e16dd3"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","e4c84f0a4842bf1644bee93857a9ed35"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","b71c26ca5dc5a823eed55e6e47ab11b8"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","a06827918c5be2e2d8324c5960872526"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","1ce3f434e6567be6dcdeb73d9e2c6fd6"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","401a0a24ec55be1a392472f1a95a6874"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","82f948fcb09f438ad3cac0d00680cfcc"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","a61e000fffab0412d2b61b7bc80360cd"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","33d1fd92bcc02c468325aa6380abf5f8"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","109154805f9b3b96715703050d6333df"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","cda19dea25f481a82c57bcc9cf0513d1"],["C:/lmislm.github.io/public/about/index.html","8b68def4440e85f47de028c480e9ed36"],["C:/lmislm.github.io/public/archives/2016/01/index.html","692336fa624f95f2928330a287fff39b"],["C:/lmislm.github.io/public/archives/2016/03/index.html","826629c5e767ea50af9b77a3fe7b2e63"],["C:/lmislm.github.io/public/archives/2016/index.html","cc0fa5616fc0921db02e6304bf936c25"],["C:/lmislm.github.io/public/archives/2017/01/index.html","99be9b6695f1c8c3edaded195b9c47ca"],["C:/lmislm.github.io/public/archives/2017/03/index.html","debfd712a1254a6d4f7aea5b7ebc028f"],["C:/lmislm.github.io/public/archives/2017/04/index.html","a20c3451a8f910f1f9f848610ebc1b4b"],["C:/lmislm.github.io/public/archives/2017/05/index.html","3eb4848805b6e2fe4b05467f0db16209"],["C:/lmislm.github.io/public/archives/2017/07/index.html","9d7f208cb1fc20e6029d5941de4e8d04"],["C:/lmislm.github.io/public/archives/2017/index.html","7f603d7134653d056a02155eaa880bba"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","1292773b2f67888871ba1dcb7a823db1"],["C:/lmislm.github.io/public/archives/2018/01/index.html","484a0e47047345283a7bc72e05f82009"],["C:/lmislm.github.io/public/archives/2018/03/index.html","4f884b7b62602b1fba4581c9b024bb7f"],["C:/lmislm.github.io/public/archives/2018/12/index.html","122dd4534b52651177dadde4627e5afe"],["C:/lmislm.github.io/public/archives/2018/index.html","41750137f07c9287507dc378eb5ea992"],["C:/lmislm.github.io/public/archives/2019/01/index.html","2a555e1e9b05d63230bd414ba1b1996e"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","b0b09e27a81d9c85dbecd52d9868593b"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","b0536a6cc80eee4ae316de881ad19476"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","26ec2faa565aec1c9132c305149bf6c2"],["C:/lmislm.github.io/public/archives/2019/02/index.html","649b642574695b96c33a9fb8c2372d8d"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","8a1f1478e9770f9d6c45e2fc8538f8dc"],["C:/lmislm.github.io/public/archives/2019/03/index.html","aa1c5394de07f067e29178b161072980"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","e57a0addc58c123864409edebad9dd15"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","d62a7feed0dd3382565ab871c235cbae"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","375aff2589e144f3ef9b293f3b57c059"],["C:/lmislm.github.io/public/archives/2019/index.html","2faa29b7e8dac5e1b9bb03fbd862e18e"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","f46a3f51393271ce93ca7ca91a7943c6"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","eca64042157ec8efa4274500ff13000a"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","8289d4cfd6fe46de850ad3acdd1cc369"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","eb7ec24b1b8c4f3e9cca3df0e7d810ea"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","2b780e41b325b72201a6eada37e10afa"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","38b4137693038cc6578424f7b94fac60"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","d26c058eb428e017b0c0c2cd63cb0711"],["C:/lmislm.github.io/public/archives/index.html","5dfe2ba80784c1922bbfe9b8ce534ff0"],["C:/lmislm.github.io/public/archives/page/10/index.html","0afa7c05ae1b7078fd21a25c64765d3e"],["C:/lmislm.github.io/public/archives/page/11/index.html","596a43e21fcaca95095f1bcea2856daf"],["C:/lmislm.github.io/public/archives/page/2/index.html","ae4f21084eb3305aae36ccfb2d8c97cf"],["C:/lmislm.github.io/public/archives/page/3/index.html","3b81e5ca1d7e85dd03f0e5a1660c6cc3"],["C:/lmislm.github.io/public/archives/page/4/index.html","516afc54192ca176fabe67516f5505f6"],["C:/lmislm.github.io/public/archives/page/5/index.html","621ac010a576d8a7ef29c230dc9e5174"],["C:/lmislm.github.io/public/archives/page/6/index.html","025334c2f908bdac9bea2610ee10dbcd"],["C:/lmislm.github.io/public/archives/page/7/index.html","4bd1a892fdfcf60dba7e2a18c4812516"],["C:/lmislm.github.io/public/archives/page/8/index.html","9f65ed9238f6951ec7eacbece391f989"],["C:/lmislm.github.io/public/archives/page/9/index.html","78b4d1e71230d8072d5ee6f831b7c996"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","5a4202c4fdb805826cf35e90ba350cda"],["C:/lmislm.github.io/public/categories/index.html","c43971ce8fdba230b3b6df80bc8c89f8"],["C:/lmislm.github.io/public/categories/xx/index.html","408d1ce850d5b043c3a919be0694735d"],["C:/lmislm.github.io/public/categories/学习/index.html","e87c704c804b7d1094b091206a1474ac"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","77b61b37befb7e25d3c699d28cee2e9b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","a636a92e31e00bde3a1fc7ed5e96b05d"],["C:/lmislm.github.io/public/categories/工作/index.html","8b6924d23149e84a337343b2ecd66ec2"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","2bc4e7c49ae59e4a2705e9f3daaccafe"],["C:/lmislm.github.io/public/categories/技术/index.html","d9e714ab128ae51f1adc1b7caa8e8cb7"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","98e14517ca47bd89044637207345a7be"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","240ad33e61c39dba4bdc1c6b69d4cc3e"],["C:/lmislm.github.io/public/categories/日常操作/index.html","c3283a4e174b6ac7595d7eabe9e65c2e"],["C:/lmislm.github.io/public/categories/生活/index.html","0bd8c543c7c060410eee5e5ad45f4895"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","252e87d927fc63ca3a29a682511968e0"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","bfce2aaeff203bf3f7ebc75914b68cde"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","37e82b271e19827c25456a92f0b1211d"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","09a8072aefcb723941ace9f2a44c7bb5"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","b2fb56106c3f51f5e479b6b6def2d53a"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","523ef9c280257081db45666a3c55e1be"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","fdc9be53311d99d4e355c1b9ba6e151a"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","6060187871fd8251bc5d16ba32b8abd6"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","023460912877373ac4f5707cdab3946c"],["C:/lmislm.github.io/public/page/11/index.html","39f874c2fa341ed4d386a8493d52597f"],["C:/lmislm.github.io/public/page/2/index.html","7661f5076289bb3e783cfbfbe2af49cd"],["C:/lmislm.github.io/public/page/3/index.html","c3f5a818a37895b75ba476f6f5272ab7"],["C:/lmislm.github.io/public/page/4/index.html","20760b69d0523215cd3a5a92babe94eb"],["C:/lmislm.github.io/public/page/5/index.html","114f72e502ceabe77aaf46fbdfa71237"],["C:/lmislm.github.io/public/page/6/index.html","45a00dc3ca67924df1ba0db138dd5811"],["C:/lmislm.github.io/public/page/7/index.html","61edcbae24f4857d07f4e41c74b8fddc"],["C:/lmislm.github.io/public/page/8/index.html","e19fcbfe85c89301b5805fc290e228fb"],["C:/lmislm.github.io/public/page/9/index.html","33f4098d5d97ee9a77b0433700a9d508"],["C:/lmislm.github.io/public/tags/Interview/index.html","3e565357b1d1e2cc8e09deea3212b28f"],["C:/lmislm.github.io/public/tags/JS/index.html","a8a49728066605499338656aab0deba4"],["C:/lmislm.github.io/public/tags/acm/index.html","62870ea29fa116e74a9419020436b5d1"],["C:/lmislm.github.io/public/tags/c/index.html","681cea2a1ede342c4768938371d30cfd"],["C:/lmislm.github.io/public/tags/codewars/index.html","08636a4bf2e320fa21a46808c96e059d"],["C:/lmislm.github.io/public/tags/css/index.html","80acb513932bca9e6c4576f60634e8fb"],["C:/lmislm.github.io/public/tags/git/index.html","f579a5079c35ed2a9dca8ab04be76c6d"],["C:/lmislm.github.io/public/tags/hexo/index.html","5b11efef384fd7c2d37a4928b1efd8f6"],["C:/lmislm.github.io/public/tags/index.html","91a8f4ad0b4b497ac96a932ee8701376"],["C:/lmislm.github.io/public/tags/markdown/index.html","956c6bbcb624b860e58e209cb27bd751"],["C:/lmislm.github.io/public/tags/poj/index.html","3d03c0b5619338565ac17d1d1f4ec559"],["C:/lmislm.github.io/public/tags/shell/index.html","8b154db6bcf77986840416ff36ab5fcc"],["C:/lmislm.github.io/public/tags/vue/index.html","fb6e22b945ed00096d6aa6ea934a556b"],["C:/lmislm.github.io/public/tags/xx/index.html","157c664cf9c1c8ff5289529af223021f"],["C:/lmislm.github.io/public/tags/前端/index.html","a5330f61d8104e66adef6ccc2da536f6"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","452b5165fec797efb748a12860f77c0f"],["C:/lmislm.github.io/public/tags/小技巧/index.html","00b1950c14a64ee11c21db58df2f3da1"],["C:/lmislm.github.io/public/tags/展示/index.html","50e6da1c548dbb7e10489726d645e005"],["C:/lmislm.github.io/public/tags/工具/index.html","a0459c56d8456e15b6a52eba33b44db4"],["C:/lmislm.github.io/public/tags/感悟/index.html","e38cc7aacaad257919d6c1c365f0fba6"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","43b02eea4ad7294ee1d74edab903ae1a"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","9164d452499a21c1ba97b67453cbce2c"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","9f93f3427998981d25826e047c7492d5"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","f80df92fb32d8506cbe43315b865f149"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","5c460917492ebd50372b62e7d7416e9d"],["C:/lmislm.github.io/public/tags/练习/index.html","72a12bf4d8e3db8f07c43e52c1a921b2"],["C:/lmislm.github.io/public/tags/编程/index.html","1ab6787da83477517be42b8b8db280ba"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","0ad2eee0d5b630e450f2fcd11d117d60"],["C:/lmislm.github.io/public/tags/运维/index.html","5bab609a3e07d74bae5c768c39222d80"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







