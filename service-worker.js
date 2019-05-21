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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","8ba4ccb1eba82633236564a8ea513d7b"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","ee68278ebdc69b4917ccdca2da305fb6"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","27af6701c558939dc73e25e8299d4636"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","52f47b5f9c7fba068f4c2a5de123cc97"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","b842342f0bc1319514c9d2f954751fc3"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","3a921c930555f5eb384139d28b150c43"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e91eda492aedcf30b323da1d206aaaa3"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","0b86bf32a498939398b8d77d27626481"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","c1e6c6fceac8774ea4e52d7794fb7899"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","06b7575e274e727bbae7ea93cdf0fd69"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","c59be861a2491e3f93f7c67e0e8fa7f1"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6f1b02f68b6ee52f45a73e65d53a1090"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","8cb741487298e8b9867a03ed8b4c1bc2"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9505899af6c2d4c7f9090b3e3845a417"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","9cd91fdd69ffedcdd2540ea0aca7c8e3"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","62f5b3b55d660509d575cf0fe875f777"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","71562ff8c7b733d5ea24313b82ca4e31"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","2c3d1935bed2bae0ec5a631f799db466"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","12e662054ab5048e80eaaf2780bc9ba0"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","dac157982f191b34dd9406a2418982f1"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","25280887e26a727082166e1721fa0512"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","1d576ef92a4ebcf202a75a048041c280"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b86bb70ad8d0dc178e076e51299058b7"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","2f821eb943e5d1284122ec59d0bcfe8c"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","2f6ae8a832f812ae021053fd1f2da39a"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","57fa64366013c5516f02c98925ad36ec"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","fc765beaa6d542ebc822c1070601b111"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","1224ba631d9f4f8e7f37cd944fc65b3e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","dcac7ce9e0c63186e7e56c2a85e8b273"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","66f810e0be8a5eb33b8344814f9edd90"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","55170851c0da58f463b1f8e605dd223c"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","4cb2ae212531451cffcc0826d9e105ed"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","dfa80184d0ac3929eea3d1442fea2912"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","866be7a48893b874cf2e1954312d4506"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","491e5fc92d16a0c225b0bb7e1aee329e"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","8fda483b34cbc957b2fbd339c8bb59cc"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","9de4da3df7bd09b79e79ccf12d60545f"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ff2ca14a3d2ff88e4d47a71eb299e74e"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","c2509713ed664b60a239d0446ecdee6e"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","cd9c60dab4c9c2dfdca06c1f1b0a5e6c"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","d4dc306ad363b970f3d5ce52790df19a"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","fee578fcd254a30f72bc998c376a7033"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","bad1dbafcf00579109a4b04ea0db0974"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","7361cee6ef7868148073843c09fe6a02"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","fcc82c891a4d709ae7c3e0b23a15519b"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","54f8625aefc5da29c6f436f2c287c8c3"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","871460a697d9b31fc0da9bb259d50fa1"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","1d24378ccc92bd83aa8700949cf43a94"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","f0b299472b11c7b9d821dcefbf022f3b"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f9b54288bc99bdf2fee465aa2371f57b"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","3f3615129fe329cdf0fb7951edf3b6fd"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","4bb02ecfa6635f103f44d4e94abbb158"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","891a3ff0c19e1b9e62e7dd46f9490b75"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","31294959a6de6d1f9c199e0616bc4356"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","386ece12a110de03255730bbbcf18e76"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","c59c8f390e242f764e82fdfbb76091c3"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","b92290c45bb07f1fe22aa706a3920bdc"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","211b7a4d016bd493164f90f400214d67"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","50bbb5aee9419b9270fd7a44186276d9"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","8f07b06fe2d14b4fec7b45436094055d"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","a529d032a291d21bbe4addeca737548b"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","15dc460c8b8ec007cc14eefe9f39a6cf"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","a8773b989caf24752dcb63e91cc65db1"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","02eb09e603f0eafdc2c870003391a983"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","269f63e78733117973daa7aba810271e"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","3833c0725dc08237b1ef1c7b6ee8963e"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","b68800e08c981f191e67ae7ad7184182"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","33d544b5a61a98e5b8437407abfa5348"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","7f4155b622a825e3f7ed00b0718110b4"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","308a37296751f92ea70f3dcb72b2aabc"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","9f0b8e25fa5ee10eaa881d9f2ef81018"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","b00c8dea06be91c1ab572347cf4a740b"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","55178c3d54f1a57fca4870082effff6d"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","14f6124f334ff3f009a4f5f020fa8013"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","eb59fe8ca5f6b827927e089cbbbb171f"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","6a1dee6c8a17ef44b1b8b1c4fa38f067"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","4ed6559ba33a67391f8dfb78daef5a66"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","e09d52c1ddff5a61405ca4acd2dad11a"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","62bc873bd4b4aebde440d1070e62a5c1"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","115de9b5b2360c679be4990a4ed36cf1"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","cec3fc50452664ed3a57c256c98a027a"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","16a373eabb60ee9ca81ce195f4f6ab44"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","02124d5a0a79e71f028580aa77ca6b11"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","60aaf03a5461ad728e455a328a731376"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","c7177cafb549ab102a517d56986ac5f7"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","eee499410ae82bdc2774676c26674cf0"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","b194b5cf2896ba1077088ad7df97e1eb"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","87329ea441365fd3ca6b50cb412b3f65"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","6ee8fb30985aea37b21c0ca2722c7ac8"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","b23c012d48fd1e0c56b7c046708f6ca9"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","1e08acdfb9d306b1cb178d9141940da8"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","521abc4cba731df27e9607648e6ddef6"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","ea3c7c20d72da42b2a15046587450894"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","941e019813a729ca663ff9dc244aaa8a"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","ad067669d6c4270e169b22e01709fcce"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","88905e058bd6802c89311cc63b6d676c"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","6dc936c8d3727fe1c3f5b4f2aef78db7"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","cdf07a4a5aad4d382b015918719f67ec"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","b81d94b3c2548dfa3c0fabb144167155"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","1a6f0f562a846e3ddb70822b9edf84ea"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","4ef261fef8dfd9d571791bfcc8c5e0f4"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","510cc9bf36a2e10919885ed8da69daf5"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","bbd0a901a198653164f22590b9faee5f"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","9c7dee8706734fb974786317248e6814"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","2eb0d087e67fb4771a6f627a3a6fdd31"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","ccbf5b220b561d1b71cbcbaed2d475e7"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","3a352dee10ef4d57e54019ebefe6e672"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","c551d3248bc4532ff5e2ba46df6af282"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","d012930c251853b1478aae8afc4a2c8e"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","d81e30a70a959c9541c4805b93149137"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","a7d4b32d597f2e674a5b97f69c37b88b"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","fead4c7137372c7ec600133abf8baf7b"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","a80c3a73eea8b122dad420fd09008131"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","d8f27b117fb599e9d2ea29565fa8c9e2"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","c0417f2a57b0022be65837e93d5f7d8e"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","892e8710e8ca00983c4e6a4487034a99"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","9d0cbee6c9f08aa1374d15260d3885a5"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","4705ea7fda45d3ad691c646a22bb0e4b"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","85b50b18e138c692fc709842744a5879"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","d57230a2821cb4b88cea9fbe8acda05f"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","9a7c62a039ebe6f1acd779e47331adf0"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","b08c5d6256bf89e1c89a10c7865b7f5d"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","9eafbaac2ceb49d6c7df9da65581094f"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","9d901d25662147c4a253cd843acf6eba"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","f140d19ae36641eb222adf37514f54b7"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","ae98ee40c5878003b9f28475f34141f6"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","2c9e42c9d88b23fb5be0957bd567891f"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","dc7fe87dd2f8d27e8779968fca45548a"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","6a00a711f48fc8c9d86ae49ef99350ad"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","15162f12935a0eadb086211930b70f7f"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","d4d0bb8b84fcce4db0ca7cc6666858c1"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","ef49e332b71e6c13b6dc633dbb834881"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","a45c0b4b07382e6274e0db60e5231e70"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","3776cc7c43dba6003f47a42ae450d85b"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","f92e0c827c9342fc9ec394a2d549ec8f"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","ca2a826fde75cd25fb0ccf3dc6a74619"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","6c088ba654d4253730db176f3cd99406"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","be2dad15230f1aea12f4c3713b35b352"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","5cecfd2445a59654237ef39846d5a460"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","6d1d797f6d65254cc7b9d830b1c8e215"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","1daa0d57c04368ca81aab7dabf2f1eb7"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","ffcc64e8b193378b2291e485fadbb14d"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","95448b702f161eb8bc0c597de4120340"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","10433fc2be572c892639d44253b4d485"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","38566ec288a1777c69c2f603d9a17814"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","0326a7e385df14e215f2d864832d27b2"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","45901d64a6e59a890235ee31dc02bd61"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","82ef4ea3895f333709542e560d33c1eb"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","0c86d9e59ea74fc9ddd253cbbb0e535e"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","d634313ad489abff0cae1c0e96935d68"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","494a3659402df4ba0998207f6a6e67a9"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","40a46bb4f5b927286c72334e92255ad8"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","04b181adcb39729864ec27bd34522c3f"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","f240082b5a257ceee121a414e485139c"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","b13cee699fef1d755647f6dde2e61832"],["C:/lmislm.github.io/public/about/index.html","d4bf36bcbe78a3c4e58e9566752f8996"],["C:/lmislm.github.io/public/archives/2016/01/index.html","6aa640c82e147aef09500d0141ac1e11"],["C:/lmislm.github.io/public/archives/2016/03/index.html","199f7b7283888fb62ae9c8cae8c4e3e3"],["C:/lmislm.github.io/public/archives/2016/index.html","1fd1e8f7df62c85468f54c404afdc495"],["C:/lmislm.github.io/public/archives/2017/01/index.html","ccccc6a1a0ca0979069fc8ea44f59991"],["C:/lmislm.github.io/public/archives/2017/03/index.html","6742f3b4c0624e07e4215969b087faf0"],["C:/lmislm.github.io/public/archives/2017/04/index.html","322e35558c25074b4bf1c95500b3a92c"],["C:/lmislm.github.io/public/archives/2017/05/index.html","e9e78a3b7136b5c72f6cc611c7d0e3c4"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b2a517bc0ce70ae8af8cef4f30979132"],["C:/lmislm.github.io/public/archives/2017/index.html","10fe895e2add53be8af64ad5e7f855bf"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","ef5137c7726dfeda071aaa4197befd52"],["C:/lmislm.github.io/public/archives/2018/01/index.html","3d9e301d1c1660a9494f81f32a7f1217"],["C:/lmislm.github.io/public/archives/2018/03/index.html","8c1895f2408c8d3beba767fd49f8bbb4"],["C:/lmislm.github.io/public/archives/2018/12/index.html","02ba069d25ea2db1b2bb0daaf1d1820c"],["C:/lmislm.github.io/public/archives/2018/index.html","05a2752f1b61243593714fa9d5e28724"],["C:/lmislm.github.io/public/archives/2019/01/index.html","36eb11f20910824993064321fb20a1a0"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","02d04045760aab58d6e6ec3c6b9ecb9a"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","27b3f93374cc6ee53ccfceadffb34ac3"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","1fc5f29b62d7c338b1d87e0bd5af3975"],["C:/lmislm.github.io/public/archives/2019/02/index.html","26b0e598219079b92b27fe9799d110f8"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","f0e57b447cdd09d97d685a9dc0d44681"],["C:/lmislm.github.io/public/archives/2019/03/index.html","ca47187572ef0210b3232e9c105f300f"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","82780300b0019bfb32c5cd93719e08b2"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","959a6d79b91047afd01c1d113c84fad2"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","646f1ba8932ba3bd89013b12fce2f8b6"],["C:/lmislm.github.io/public/archives/2019/04/index.html","2399887680e7f0045d25728e9b6864bc"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","112a9edb05833a4a79599f37567101d5"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","95d7320bafeac14f9b4700dccfd192a4"],["C:/lmislm.github.io/public/archives/2019/05/index.html","26914ce751e6caed5b0f5e5c3387d518"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","90f869975f47330473053ab9d72e8557"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","a2768f715a1e647f87797cef269c7636"],["C:/lmislm.github.io/public/archives/2019/index.html","8f492098c2fd27b82b67e49c8817411d"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","898b825195f40870bfe05f8cd7b21cbf"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","64349e96a1f0bc6493f9aec7b5c79051"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","ec1c866bc5e603636449c7c8afae2e88"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","9161504188ee05b2a44dc0da5432c223"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","ef06ade494b2df51563afafb9de7e958"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","6230d01e584c9c9fd727289c5bef2194"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","996cf46e14552f310e5348b42d74fdd7"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","29571268f71b9e47b5713a7333ed8856"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","7d097be3c61e8d07b0432a69da2bc13a"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","3299fb84db4fcb9a5e0b53b700c68a9d"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","73ce757f94a6d26b33d679e402b40d69"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","89434b144e0fd020a0d9b5b003cd76cd"],["C:/lmislm.github.io/public/archives/index.html","18863e7139acc8c06774e1a945165c3d"],["C:/lmislm.github.io/public/archives/page/10/index.html","5aa9e388d7587c41de332480719b2830"],["C:/lmislm.github.io/public/archives/page/11/index.html","77557fd57d9cafd79e6eac8a04987fb4"],["C:/lmislm.github.io/public/archives/page/12/index.html","ee045077b03a68d910a0d9949fb030a0"],["C:/lmislm.github.io/public/archives/page/13/index.html","6b51027b5c285b0c409b8922406a6bce"],["C:/lmislm.github.io/public/archives/page/14/index.html","07beb5c0d8595e4f4ace5a32f3fdbcd1"],["C:/lmislm.github.io/public/archives/page/15/index.html","2f69ffd8a1f776d8c478ea480f750992"],["C:/lmislm.github.io/public/archives/page/16/index.html","bdc37e91c233e88c3f0d191e2fc47a59"],["C:/lmislm.github.io/public/archives/page/2/index.html","1abada974c0a2b1815b0278e63ce3c08"],["C:/lmislm.github.io/public/archives/page/3/index.html","139c95ae1b3cdda464224eef608955c2"],["C:/lmislm.github.io/public/archives/page/4/index.html","ee0128c8d6e0678585be42518892c008"],["C:/lmislm.github.io/public/archives/page/5/index.html","a8b069a3b352139becab6a8c03d9ec4e"],["C:/lmislm.github.io/public/archives/page/6/index.html","3262613c85d3cfeaf7fc5a1c80445199"],["C:/lmislm.github.io/public/archives/page/7/index.html","c43642baa3facd0aeed13ef82c3d9f5c"],["C:/lmislm.github.io/public/archives/page/8/index.html","7d60cda22743e971f388823587f9ffd0"],["C:/lmislm.github.io/public/archives/page/9/index.html","54a4df765f2346d47384a4ea30a3fb38"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","826995449bc733cec16f93248aeaa64d"],["C:/lmislm.github.io/public/categories/index.html","d9075efc57066d0e2e829566b1f76c36"],["C:/lmislm.github.io/public/categories/xx/index.html","4e2863eb195ee71c6ec72ec2d9ce78eb"],["C:/lmislm.github.io/public/categories/学习/index.html","4385a141b239983441e3f8ab0453358e"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","673d76e7d3f20cbf46d0a46fb5bb1473"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","3ef7e34c5befaa0999bfcc81557f826b"],["C:/lmislm.github.io/public/categories/工作/index.html","b46b37f87c288d96c3844415168e5928"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","9a01b1a9a499514717eb95ab3ecb8770"],["C:/lmislm.github.io/public/categories/技术/index.html","1ccb794abe5939f50eae02b0dc0a02c4"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","ea0b43e3362379c3ae76f4f3fe662534"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","1a1fc70c76c01f4e4ad0ff67c3fefe21"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","a052241d7de87a5e53eeaa1466247834"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","ad27610655535c62f37b8a2b5d82f594"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","c6c73f926028d3f5ef419deca7b38f62"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","b38cad4b2bbc4820a3a156b758891828"],["C:/lmislm.github.io/public/categories/日常操作/index.html","ba301725a3c4188ce03644af169bdfe0"],["C:/lmislm.github.io/public/categories/生活/index.html","aa6d98f3da23b9b156c626e5e2a4da01"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","efd4084905ee6ea83d58bafd87ed7b6e"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","05f470a33d28dccebaa8e4376b59cc5e"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","f2c4628c73be1c16384fb2f9ded56253"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","69f44e04140aea3f430da5f588767b34"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","d2ef9fcb47100f4a39d62a0fa91d5740"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","67632b806eb34fce630df755aeb7d15e"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","59102ed06b01cff571c4c577be95eaad"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","e9b0e077448ef30e2a77f39e6006d4f1"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","2f598399ba15ac960b1e00a8a7a924bc"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","dcb08d6a1bd379ba0163d140c61d2de1"],["C:/lmislm.github.io/public/page/11/index.html","1a5a778358988a1f2039875e7b29a3d4"],["C:/lmislm.github.io/public/page/12/index.html","cf36914b824e2e97a379c145af62c14e"],["C:/lmislm.github.io/public/page/13/index.html","7bb60bd9df66214e3ff0b42e1ce29944"],["C:/lmislm.github.io/public/page/14/index.html","6d78fbd4519d3f612cbedb59ded7fbf0"],["C:/lmislm.github.io/public/page/15/index.html","95af5743eb31f1af5b9567b38055461c"],["C:/lmislm.github.io/public/page/16/index.html","e1dfa15447dc0f895209c8db4c80394c"],["C:/lmislm.github.io/public/page/2/index.html","37c9b7eb1d047f4c98153a3441b1a1c4"],["C:/lmislm.github.io/public/page/3/index.html","b1fc568a535daef33b9e58057d13a6d9"],["C:/lmislm.github.io/public/page/4/index.html","32e7880ca606c8f4645ef705f868e721"],["C:/lmislm.github.io/public/page/5/index.html","416fc9303a930caa428f1a5163b2e708"],["C:/lmislm.github.io/public/page/6/index.html","2f3ee53e0b3d5a651971b335f0e69db9"],["C:/lmislm.github.io/public/page/7/index.html","a2dee90e0e421903a031d772e75d35e2"],["C:/lmislm.github.io/public/page/8/index.html","d7b6632e94e503ef3a4b34fb235d02dc"],["C:/lmislm.github.io/public/page/9/index.html","be7a6fae2f3213349d5175ff97012f9b"],["C:/lmislm.github.io/public/tags/Interview/index.html","c134d0e254eecaa6ab9d3ad34757af4b"],["C:/lmislm.github.io/public/tags/JS/index.html","213e4c6d2643c0b403abd9dc64f64c32"],["C:/lmislm.github.io/public/tags/acm/index.html","2604eae921fde902808a0b5d3b1712fc"],["C:/lmislm.github.io/public/tags/c/index.html","ccadb34729d1a411547ce7beb7a905c5"],["C:/lmislm.github.io/public/tags/codewars/index.html","d67b1cc17169eae07ccde019137c0a59"],["C:/lmislm.github.io/public/tags/css/index.html","3ffb39b3b17379352c1e3fbde564e389"],["C:/lmislm.github.io/public/tags/git/index.html","88b7ce851da09893d9cae98c1020a41e"],["C:/lmislm.github.io/public/tags/hexo/index.html","82c53077c27bac76a931b51cbeb16260"],["C:/lmislm.github.io/public/tags/index.html","04fbf98afb4f8166a6b97b31b6e7a054"],["C:/lmislm.github.io/public/tags/markdown/index.html","efc3125227137979301125b1a65e3f6b"],["C:/lmislm.github.io/public/tags/poj/index.html","8247b17337078973e60d80f46b0b05f9"],["C:/lmislm.github.io/public/tags/shell/index.html","660234c098bfe6741f841577e740d11d"],["C:/lmislm.github.io/public/tags/vue/index.html","202685728e50a265b20ae45ac74f5418"],["C:/lmislm.github.io/public/tags/xx/index.html","36e1d71e7277313cd18eaaf7e7feeea5"],["C:/lmislm.github.io/public/tags/前端/index.html","e798ab70f3ebc2456f94ceab551e489b"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","b5f31c82c39fe974ae26b75b82918f51"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","a38ec492f1953aa0031be01e5ca7fc0a"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","8a51a3cd6158df44c0d0a7b53352c822"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","4c638b209c149e27bce0d828b3bfa4b4"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","42a4851a1731d08be0b4e33c6ddecace"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","f7e9de5833b3109f17cd68b3165db0e9"],["C:/lmislm.github.io/public/tags/小技巧/index.html","c534d238b867d2f838903891e9fc1b61"],["C:/lmislm.github.io/public/tags/展示/index.html","ce144c2b77dc363d8bdc6973d867f2dd"],["C:/lmislm.github.io/public/tags/工具/index.html","09ae760351a5d38a49f09ec354d884e3"],["C:/lmislm.github.io/public/tags/感悟/index.html","ec3baace9cc12d44b15df0db92d9c058"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","aa37c717425349ee2edd6db4824281ef"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","0a4075b68aff41693691099bcb557c1c"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","97dd20c1716a7ec96c7cc729319dd5ba"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","199bbe224c4ccbda7a78f6694fd7292d"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","67e05f1adc1eb76c629beed471b63137"],["C:/lmislm.github.io/public/tags/练习/index.html","f0f3acb7ec856b2a081bc775a9ed5dfd"],["C:/lmislm.github.io/public/tags/编程/index.html","4b9d1e387770ed8be300afe1375bdf93"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3f672f1e280eebce7ed961cae83f72d1"],["C:/lmislm.github.io/public/tags/运维/index.html","edc6d62e1384c4844c85445a763b1c79"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







