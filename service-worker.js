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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","bd03e8ed65258029e5b95d5718639286"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","5caad53a34f2f5e7a397347c66675d42"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","eacb25b2f4e5d9ad24d5ff8b80fccd34"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","c6490bf08f6eda30bf027aad072c7880"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6ba2e273f337432251223632529c377d"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","4b698f96e4face7425bdb5952423deb7"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","7eb1968a99c88d844473c51bad1d51eb"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","3717234c91a81d8eb85d464420c2eece"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","4d4cce52ab2f8217134c01ce75ad0704"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","35e1ff7201bd2e828e97e7094b4e48eb"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","ac256cca655f75d92938b3cc9e26d849"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","f8ebf2befc3b8f7ccde70b5bfea91940"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","e2c07c665c4caa9c4e5a699d2cf227ab"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","6a4647f877da93c59076c5df4fa90d1d"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","240bb7535b2cd8ade52a830c4ae4053a"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","50805f81c7f8442082925c6d9ca9890a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","01604c006095cec639355bb3c49cb9c5"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","bdf2b5e51bd6df43aa34d31bbc88a51d"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","dd0aafe27048c5fcb2d5bbc994ddd009"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0e8f17e85ae648c29f6578c8271b299f"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","7b4de797b7641a754ca21c53a49140af"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","c78983dcb34234daeaf503c7c62af16d"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","7d6d589f1d5b20a94f74cd10acc74bf0"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","e502d608d27cf56b2fd583234899105a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","de0c016aaf3d10245e06928a69739e31"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","c650a3f600215e64f31fe66db8a5bfc5"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","405a662a945bcac96b133c802d1d0a50"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","853f4f4ef7c76cf4dfa65ffd42466566"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","ad56e717135b95c1d8ad3df361f0fbe2"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","567ff527657354fe8912f451b6e3ab7c"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","8a65092e4512f4df068244fa820028db"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","dfdb4218245ba4b261eaa94d1fb99464"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","d1158fb3af28bd516f13d261b428fd3d"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","162277cab0bdb058171e7136b571ec70"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","45755fa883d0b4c657200e8f331c1b21"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","45d2b83d4f664a56422102688dc3b143"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","75c0c24817f8a7530577ab707ac76447"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","6e29ac78f281d15e14c97d4533613463"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","f2c1348653c116b3b49b134858059e71"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","f3390395d65a5c0ee7b2c8993b0009f3"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","0ce00307c7e13f9b002d031e7d2a4a94"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","dc61a7b46da411ba792d125bb62b0aa3"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","db7ca0d3f6529796b0d7a6f48a463fa3"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","0924da475f7d2632f66693c5758512ce"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","931a5e47e745db20f356e44d37c8b697"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","fcbed43ae32cd6688e63bca6a352c730"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","4f276ccd749fdf21337257c847bd19f7"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","158617b35353f9f6ab1b61f0b794555f"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","2dd612853a5e8b5e30d1b96f2e8d77fc"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","d93e491293300b996c79336521d73d40"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","795159ff60f9227ae3beee00ec046855"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","b01b354b3b588a8051f69ff2be1304ce"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","48f2429f8fce8533f43789e58c908a8e"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","95bce50c30e19634a1c4c8ff6c5bad9c"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","203a59ebb89ec48210250321dc7c3e98"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","835da4105324d102115c341dae2baf45"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","0d0cddc03074b54c7fdc4f57bac96fac"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","3cbe0b28618c1f9fff4f93a0af864cc4"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","dde7f2544c8575c7a60e0a5cf3d587c4"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","3f7d097eb19923510270c0b904c7ff30"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","6119405bdcfdd32d0c0b3b4cdd228eda"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","a6f6d11dd005bc7cad24ccd757380dfc"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","cf21775755bd4a09e0c108acf88ec715"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","baca8f5947306a9c3c5f2b8a70431e46"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","3a35e5993d02ceb7c180daac5cd9460c"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","0298d6ab92c956768abb0a119fb3fbbf"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","3acb376eb735104eedb7b5902185c2fa"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","0f8aa710ccffbe119b0888ec7276f888"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","0f2f19adfddc81776ff09b26f98e74ef"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","a366aa602fede378efa3261a3967d373"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","a4669addcad34349f09e54a88321a685"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","9f9e0d9b85808fb7b6d8e7aa0d8c2593"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","11eaf6bd7826a49ace26c404aa066f8a"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","e2b6f3324f1424bcdc6c5079e55b1094"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","157d4249229149d684a6466ab43356f0"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","669ac550330fcbf62316c0248c649356"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","ebe3cbdcaf6a7f962b45f9b35f987c04"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","a0980c1f9c8b79fcfff081469b5cd4c8"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","f0dbc3f99d450c38675887beba12299a"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","fa278d2be3a87b1cc404bd05a9768b3f"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","4a6e5b55c7352478fff5851d634761ae"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","27788f574e6bf543f3e02ef2ebf0c476"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","22ba23f2ae0d2984db946d6717abe8e3"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","6eb4ca301d6f4ac9be46dab712435d65"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","4e2e64b6e67b81a2a05bf2c3a139672f"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","763135d994cf7b36639a827b46ffb105"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","04e20d0517f6c2cdec40d18d4de26316"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","48ac1381e908a2b902092944a9db8fdc"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","d0118308fe274c86480de0314847db75"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","dcff5c726d281ef4bb9a2734de7a1203"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","498876e2be2818a578053369798dc189"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","23577c3b89ba4e3d85534e48551174ca"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","fd7bfdd32e3609ca5b28555a6e2b0d00"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","6580ffd31079c2da411f0de79ae3c042"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","3088c273894255227d9dcdb78cf6f78d"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","5a63f74f6e30b6dd7022efbb0b9eb5fe"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","3e487a679c4c311f750b7527a09386ef"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","cb5cc2a4039e3d23a277042be5d77da1"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","5aac64144384e4d05aa725f0a506c0aa"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","6b8e1f376b649b5ed3e622751a54bca4"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","049443700e3a8a443930301cc0b8a574"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","ca4aa8300c897db55070c53e9b20b73f"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","395de7796aa3a2077dbc53d7dd19e3ae"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","4babeb3a7d69ca4163761236ac87d31a"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","ddadf1ddab510a5a75d7f0cb600ceab2"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","56fccf30a89fa7de9e14a714bf72eebc"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","73356ed1dc1dc157a414bca44742954d"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","8769263b14118b0bd5185b2b67ca7abc"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","77749f1d9e1fb3c53e29e5c7bf1f424f"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","a27f370636c89ec7825464661f7884cb"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","37cab5efcdbcb5ff1774310e232b899a"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","5c4a6eff54b62e378bb9b3590f2e2160"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","14f34fcd14acb7827de8b6c516a75d3e"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","2cd360c89720f63ac7f5c06f424c9d40"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","c37975f04474b1c4eb964bc3ad90601b"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","11546e9fd8398a92f15c9ba9f7c5c9ae"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","d4373c947f14e24882558ff2b3032625"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","2fa69f7fac90a2fcec3eb5c841e77bd4"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","d73f877becdf557be9ee77f0d93ed8ab"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","7c95dea4fbdfe4d7c5a02b5ce7ce7564"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","e5ddcd1df7756e0c44e9ef6d95509698"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","b64cbcd90d2fe29b22961ad5ee50e071"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","c174ad0a21305ceadfee9c8fe6f4e77b"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","756cd428b46dd1e4e94bd23fe14aefec"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","34fc63efdb2b6a6e9ad2c932983158db"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","2371b77f61ab08d7fb78b50fa9c9f69c"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","50b582c6631beb5f725126c8d19776fb"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","c905e98b8b5073e2e9aae7a70e0bd4de"],["C:/lmislm.github.io/public/about/index.html","78015042c9cb5ab8b40012caecc51738"],["C:/lmislm.github.io/public/archives/2016/01/index.html","6e0e181f83be5bb920404b95e2d91aff"],["C:/lmislm.github.io/public/archives/2016/03/index.html","93053f41b44cc264fc1e532377dc51a4"],["C:/lmislm.github.io/public/archives/2016/index.html","a22a4a3014ac028b13fb2ddeb6513021"],["C:/lmislm.github.io/public/archives/2017/01/index.html","0d30015ffff993c9e272c046a1574faa"],["C:/lmislm.github.io/public/archives/2017/03/index.html","56e533db08fe5e159a4b2097915e18a3"],["C:/lmislm.github.io/public/archives/2017/04/index.html","5f4c68f7e5b7e217a5402a77ae2a5c23"],["C:/lmislm.github.io/public/archives/2017/05/index.html","a06031068ecbfe960925c33e75c1fac3"],["C:/lmislm.github.io/public/archives/2017/07/index.html","75814a3bca93cd095273f9ff736435f4"],["C:/lmislm.github.io/public/archives/2017/index.html","9c932149fc13973b41615bee14fc5489"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","781ee43adcb18c55cbc419e379cf166d"],["C:/lmislm.github.io/public/archives/2018/01/index.html","1482d4e328ffd742ece68574a1e3cf3c"],["C:/lmislm.github.io/public/archives/2018/03/index.html","88658330b24ea558609bb822c41005ba"],["C:/lmislm.github.io/public/archives/2018/12/index.html","adc214e441b30fbf6015e81933adc30e"],["C:/lmislm.github.io/public/archives/2018/index.html","e5a66f12d862cc96bc713560defc2b02"],["C:/lmislm.github.io/public/archives/2019/01/index.html","b2a5dfe4b6307715f569605b1e9223a4"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","a83fd67880e24d137032886db6cf3877"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","bcec46a01df39084f387f682985ee315"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","4e73e690e57297ffc5a327e1609a007f"],["C:/lmislm.github.io/public/archives/2019/02/index.html","dc60861830718f03fe3087cf4cb5f831"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","28aab356068ba8c2a748fbf4e9132c5a"],["C:/lmislm.github.io/public/archives/2019/03/index.html","787809951609cd2023ad0d9a5cb139b3"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","fcb6242e41c32af7c92407f11e043c17"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","d89fbabb22aa4c496f879e874f43234c"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","978d78cd437f79ba4c8ab84ae076c566"],["C:/lmislm.github.io/public/archives/2019/04/index.html","9e6f4f955bdd2801641e894987c154b9"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","c13f17a0e71335afeec1cbf64b544147"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","d8bdcb99e18ecb859fc5f71bc52d7e96"],["C:/lmislm.github.io/public/archives/2019/index.html","8baff2b68713b3ece517bc1457f420c6"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","3646ba2c56d9514d8c0cfcbb2c4a4726"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","86f6fe13959ef33988b1a67265b13a4a"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","88cc2e4b390a0a1f889eac32cfd6cff5"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","0102f8911f3ed537a5b9ed60417aff0c"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","0e5a8e1e2a38c918adefb5913cefaf82"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","1aea4ccdcb70253554e474d1af264ff2"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","140b6bb24cb6fa795897616e5314a6d7"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","9853639d3dddf1e3c87e4f70a7d12318"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","ea6337c2128c1dc1eadd4b0c219f43f8"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","99b7e08152b027046cd7343f4cf31a10"],["C:/lmislm.github.io/public/archives/index.html","e1783b23afaa43a11537d34006faa36e"],["C:/lmislm.github.io/public/archives/page/10/index.html","f2d7e3947f1b1ca1563c3941714c8465"],["C:/lmislm.github.io/public/archives/page/11/index.html","3b3fabacef64996c50f2aef5db8a85b7"],["C:/lmislm.github.io/public/archives/page/12/index.html","087ff3476aa31762693b5ddf1958ee86"],["C:/lmislm.github.io/public/archives/page/13/index.html","48419ea97674b5c96fddff9011b28011"],["C:/lmislm.github.io/public/archives/page/2/index.html","fdc8caa4abae033e8e3a21556d52e7ac"],["C:/lmislm.github.io/public/archives/page/3/index.html","9368cbc9bf8e61221ae8933a867ed50e"],["C:/lmislm.github.io/public/archives/page/4/index.html","ab01177bf750da22b86d2b67b4a4d941"],["C:/lmislm.github.io/public/archives/page/5/index.html","f33397eb9a0d94a8063e88be762c7d08"],["C:/lmislm.github.io/public/archives/page/6/index.html","403669ad2644d5d4e4dfaf1637306ff4"],["C:/lmislm.github.io/public/archives/page/7/index.html","0ee634adb6d219d74ee7b286fe4e0b42"],["C:/lmislm.github.io/public/archives/page/8/index.html","6e94b0ee4bcf3923f25262d3d141add8"],["C:/lmislm.github.io/public/archives/page/9/index.html","37870c4b6d8459b5fe7972e40761ab40"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","82c65316d5cb6d38f589d68ef5125d52"],["C:/lmislm.github.io/public/categories/index.html","93278e761c3e485943e0b0b7d7cbbd2e"],["C:/lmislm.github.io/public/categories/xx/index.html","2f0c4943e06ff23789bcb8881af99f66"],["C:/lmislm.github.io/public/categories/学习/index.html","f448b7c02e8dbbef0c82c7f4dd27d9ec"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","85e61a635460c102cc3242ef2e866bfb"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","9a330933654477030be1b59e933b3143"],["C:/lmislm.github.io/public/categories/工作/index.html","6138065c60076b44705d8170990fc37a"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","86709d61626254aea3de5a2e5671eb4b"],["C:/lmislm.github.io/public/categories/技术/index.html","3c255322fab2a4bfa88387bf3c1d1433"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","e49e724f9e1d1d3f9fbb8a086c699996"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","2b91d135945564de68ae2db382ad7915"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","cf445300a085e6664f65e4f18867ada8"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","138b74a183a72e98654d40e466336566"],["C:/lmislm.github.io/public/categories/日常操作/index.html","6d3197d34a3881fde1715386331f9fda"],["C:/lmislm.github.io/public/categories/生活/index.html","aaa41180f01706d34cfa07116fc0b7d5"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","3aa8fdfea0ed48bcf853ff45464ae417"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","7057a84efd1df1094434190931982e22"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","98967b3df13d947446787995d021e365"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","97547ebc7288430686b40440589d425f"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","4c0823f9f129b837a494d634804854f0"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","f04a418eb73320810f9f9505dfd9c771"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","1776471dcc95382a8ee0c29f3c42bd5d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","b7d77fa9ed0083d63caac9610ca2d145"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","212911c72c6fe8464cd94e4850290305"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","228df72fdd23fa6f586f45b8ea767291"],["C:/lmislm.github.io/public/page/11/index.html","f2e1beb1a746c0f6af0253b3c3ffd648"],["C:/lmislm.github.io/public/page/12/index.html","5bb72cdde75c8a990260f205a92ef5ca"],["C:/lmislm.github.io/public/page/13/index.html","2f37fdc94d78da4cc1674cbe12668f32"],["C:/lmislm.github.io/public/page/2/index.html","1ff4ace07453013595109a5fb322ce07"],["C:/lmislm.github.io/public/page/3/index.html","418085bb0c7db206cfb95a5b97f2e93d"],["C:/lmislm.github.io/public/page/4/index.html","aabc3510361985962458c1da508b2d60"],["C:/lmislm.github.io/public/page/5/index.html","d31b276f428a0ea604373042e04be3a3"],["C:/lmislm.github.io/public/page/6/index.html","10220bd51aea333da91d9277bcff16cb"],["C:/lmislm.github.io/public/page/7/index.html","dbf8126cfbcc9e1bb5aa5c29339ef5c3"],["C:/lmislm.github.io/public/page/8/index.html","02deea5c56d4df57ef6f44c15ca3b396"],["C:/lmislm.github.io/public/page/9/index.html","963850f6bae609bfc4fad9ce2f7f266c"],["C:/lmislm.github.io/public/tags/Interview/index.html","19457fba28a5d6329ed1fd7ad48fe5e6"],["C:/lmislm.github.io/public/tags/JS/index.html","d600c9b3a6501e577bb0f59c184fae83"],["C:/lmislm.github.io/public/tags/acm/index.html","21647302d2ec3e09c50bd42e3453921d"],["C:/lmislm.github.io/public/tags/c/index.html","87f928f0821dd91bb7552e27e6a93ba7"],["C:/lmislm.github.io/public/tags/codewars/index.html","af9516a20ada33a9870209acee2342aa"],["C:/lmislm.github.io/public/tags/css/index.html","e640f6efb811ea51c86842c64cefd2c1"],["C:/lmislm.github.io/public/tags/git/index.html","7b70799d6edc7bece1d56ca7d63fd439"],["C:/lmislm.github.io/public/tags/hexo/index.html","b4d601ade4b60f83839f2262b3a4de04"],["C:/lmislm.github.io/public/tags/index.html","d7a55a1a5fc792c3409840097a80b755"],["C:/lmislm.github.io/public/tags/markdown/index.html","6ded2f02765fb67000c968ac45b845bb"],["C:/lmislm.github.io/public/tags/poj/index.html","2f55f039d831f68aa593f55c47e50b56"],["C:/lmislm.github.io/public/tags/shell/index.html","c6f2c4236c2830eb486540fc4abe4879"],["C:/lmislm.github.io/public/tags/vue/index.html","ff07723b35cc921eb3025f78a63c8981"],["C:/lmislm.github.io/public/tags/xx/index.html","6bdf88bb8ae9345097c81f63a60e27c7"],["C:/lmislm.github.io/public/tags/前端/index.html","7b45929445a1987e9f9149c905a761bd"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","b12afc2505ff477a84af6fe7dce4ef5a"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","6c8a01d28847d9a0bb0fcb454045ff9d"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","ea0994dc512c5604f3f329662eb37687"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","3518929c0d794837d7d9f11f23b44ce1"],["C:/lmislm.github.io/public/tags/小技巧/index.html","7ae7c3f64ef7b524a281839011ad3b43"],["C:/lmislm.github.io/public/tags/展示/index.html","76966dedb63f53d63821cd5f70dde5eb"],["C:/lmislm.github.io/public/tags/工具/index.html","e7bab65e881b2d4a44da20b01a896ce5"],["C:/lmislm.github.io/public/tags/感悟/index.html","736a111d9e68338b5a0a3e3720916ede"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","fcad77680a1730371b389c10b54d434e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","aaabab55162eb68526cac51cbf5a61c7"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","1821c98575be8a2707da3c4b9c218a43"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","a122b35ed2cb7956930cb31a4225ae86"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","e12fcbc997ea35d117a0a2461e00e503"],["C:/lmislm.github.io/public/tags/练习/index.html","a7c18df8d679f27fad2e5369d7561471"],["C:/lmislm.github.io/public/tags/编程/index.html","cf78bcdadea88f5fff0c1b0dc1ba5f7c"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3cc4d05468e60f9c30283211c86e5fe7"],["C:/lmislm.github.io/public/tags/运维/index.html","6ff0efb2ed2292b94ea4a89fd6e2820d"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







