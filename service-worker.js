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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","19ff49c5e2a0aead8da012a4bca052bb"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","4a7f72fd3c3af89e491981099116850f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f1a044c83eeb7ca65ec341bdf41fb410"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","cdda7e09b62e22bd28b11e344754777f"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","83452b8c6ee78ec1727945e4b98363f2"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","e02596d4f0c350e479882f2d7ca85f8d"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","3272c005c623239f1fa1662de51934e8"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","5f42c9b7ba26a063183f4ab04e28f519"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","3f00a0f68cf1f06cf1c0e56fc3ed71fd"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","06d40f8aa6616eb48871609e32781b43"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","1b2b6a62dc879bb4e412bc5fbce36473"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","1762324a7b9259b99d2d857a5884563f"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","d8aaa799b1bc5dd1eafb4c0b3c2fb905"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","3ca46bab9ee93045dccd38a1bbdec7f7"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","8c5240e7611588fd19caa8df897ababe"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","e9dd66a4551954a994910c5bcb11e039"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","fc2c909c0f67720faf00b18e0d09c1fe"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","e77d82fa1c74fca8602b4dbd2dd60151"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","17e07fee60dc6816e1acc330f446b0d4"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","37fdca07d883852ea4c9ac82dfee5d80"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","705358ae5cd2d1ba249f6483db3b0f6f"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","ef852f4da7f449170f3ba00f6f4f271e"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","1ab7c95ac1c9cd6c6f90a44c6cf8f198"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","0284f131e0fb0d625b0f39f35c0a04e8"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","df4d95752f1450a866b558e3fbb4298b"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","365600d6da8a846a2b9ffe4ab5d03a9f"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","719e464607d84d9489879a45e6d9d83d"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","33a1420a1f4bf461c418e108dc242a08"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","5dcf4e0562392952a7248152072e3c81"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","00bf2e196e49476c477a98f4bb8956fe"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","e041bf6b79ac3b869d988437d61322a0"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","2d1df99a9483cd3462a53ec2db869420"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","73c8a86bbaf3a7eb4a647121807bd352"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a42b769e1549058222915d3da314ba9f"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","6881cd1cb97a05778f321e674af65e60"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","5a32adb0b6d53569eb1eaf7b3fa31c97"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","7927e9a5d66c9211ebe77a3f6f50d541"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","5c4e3c8799d0f9359d2f96826f515a2d"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","92c3bd9372f780585fd9ff65c389b568"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","5db0ad4ad1092d7f0de51ecde3366542"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","cef4bbe5baf6dd5f4141f452c110bc8f"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2150a21a1464798a0445feaa7aec804d"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","c9c949494a6be0bc7cdfa37e49f4bc2b"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","dbd81417f55e55a6883f63214acd5134"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","692b0fe3f76c8efa675f62a8df725533"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","66d97b0b0ee92e14ea16f8df94ab37ce"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","742a2aefde0c188dd8d520a260c91d20"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","f1d92a99bdd41b36d791c6d00ad16b44"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","b747035c9dc3799ff7289d488897c0b8"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","0fd133bc5656e733c7ca8090bbe8c2b2"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","a5122aa43805ba7a79856004c2a93cb2"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","4250190a7e4dd2b4403dc52c0552a39f"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","f2f26a5be297aefe5c6f459e3a0fbf32"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","a4a195bd3196f2b30ebead6d4f4c65fc"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","eaf180c829b9143c6481675112f9d92f"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","e3ee3787eae912f90219e30a46cb858a"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","84f1e00a1cd0dbaea6f3c78063e14919"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","0ed99ebf7be4e7a4143635a0a3c9d3f3"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","e52480663b4c5a62ff7dab1e791cb790"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","f5caa95df48001301442ce24f942e050"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","e13394ca21acbe9efd406e7283f30d96"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","f27537fcaa988da3140468d5c948bf16"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","23134ce44af1de0e658b763897f3244e"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","fce1cf96db6e3fd3e81ac26564be6e40"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","45dbade0e3b531ed4159dbceb370ec6f"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","a9512723cbfcbc5f0e8e73570fd81136"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","206d7587dbc9b90431dc381a5e3dc130"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","5a1ec0f3a651aef0af0bcf3a2973895e"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","764418c0ca3ab6f18ec0d1942b33bac7"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","9b745d8e5bb93b91759f655711d23c53"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","71f1b1f638db9fb57431f3be8fff5eb9"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","b6fc3d502e66ea7f105a502e731662ba"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","1ff4cce5358479ca1fa8027fa2e5b48e"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","2815a7e30db655aa68a84d2b688cf933"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","4f06badc860a68a431e8b0adda553d98"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","29813189a9bb00de9f990eacd1d755f5"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","b7decef2d65f1f7148be517c2562cb2c"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","d5666630e32ecff18d4ff260aca5b3f2"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","754b42ca8a5a42b059e58c2a9f7b91b9"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","2e9efc7750ebc12542b525d68c53073a"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","b1cec35b900590373efbab3f13674b84"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","988e82da4e130d86c2b3018e62558da0"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","32408bbfd4827dc74d897a7f82110edc"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","042b177d0658b023e5cd22a550b27881"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","3755aba9bf1d38e948bf6699b23fbd4b"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","40a82f35c50a3f7d7df093c3e94d0a98"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","5a856fd94e5b09d6b5fa2d9e97221bd5"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","534c6d99468f4a3063d8819181b42126"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","e1aae4e0fe368adf3f77e01fda42e5fc"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","253a06f16f325e890a97a1d49c215254"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","a070735442feb1eb0c028a727bb0910c"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","59387bae2373229202a6105d1dbf4af6"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","547c25e40757385caace55e9aa3441ea"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","d6d8112087fdf810d3fa256bf7a10f7f"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","dfd6a4c1185f0cf7dc6843ec8224d714"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","c292fa21ba3511ecdbd5e4a731f55908"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","707548c29afaa285dffa9566f2b6986e"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","171e8b443b85670c1cccffdaf99c408a"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","f062248651e607ef6ed5a69e1ab4ad1b"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","e360bf8fad8d40aa6f43298362ee39d8"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","07e0747961dd3ce2f73a68f4e443671a"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","2786c65e1477783e8444dc490ecb5b6b"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","bc5225a9ab5b9240d986d3e7b685e634"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","63b140efecc29275ea9de9592d50a432"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","ba05b50abf6f2f5cc17f2f87d0036b2c"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","09ef9c7a219ca9bbc98e8827e0b11b7b"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","a3dcf241c13256f40873a77e1dc177ca"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","5af47cfced660af43f620139f8eea0ab"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","065ce27f07ca58ea219f9c945d3ff1c3"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","b362a1f71cf18793b3e44f8c98290dd9"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","8e3e59b96092120ddb7b20639f091b96"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","400be0d905e38e023eaa7f894ac5d369"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","6f7dbb08863b3fb320b97359932f320f"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","33f8391196ba9e49fe63f334a5b0b731"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","ae9847ad42c45c90cae7738a2f071a75"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","cb92b06540b200c73ac3e55d9b2d0a12"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","aee519e7945df7d9347120b2819ccda3"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","e8215e7e0e13553702646163fb9cf4e0"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","6ef5173b03afe3e487f6c49ea4cbd02e"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","5a294dd72ff62a8d5169fbe9d36cc589"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","650ee358b137e53c52ac9de56d9921a4"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","96c23202fa4e27f9c8f58d77301444ca"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","9b5ef1a7900cb4766acb226141d70c3d"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","d0d53cd5e20c0038aab76d539eef69f8"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","6be100e353f68dddfb7190beebf5c606"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","7e3ddb3981fc1a5d3b21e2ac740b3f44"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","e09ba3c0501a6eca04a8f1a4460d36d5"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","eadb1811a00c7e037d5f41a94fb2f182"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","d8dceaf5b9aa003f616a34673bb5d43a"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","16489f9715ac1219cd6ea899c93868df"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","d892ea19f84cb0a9409df694fc0e6fe9"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","4450bb4c52689b664a187f264550199d"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","c196bdf863d96bae7df618b3b7437d96"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","878ce2599a41528592f446b0574b4ff5"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","b4ab5f439b5d742dea90b4c7cea6cadd"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","f3395fb0492ba167a09f8de8f10bea01"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","136d1f2db6124454e558e840681bf1c8"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","a87c5637379e439cd6fa3d93d30d7ef9"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","049264e9aaebcdb8fb0cfe8c2e73ed34"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","c6d76ddc31ccaf44a9303e2a22a2b261"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","32529531128d222ee348dc1346d1b3c8"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","a17fcfcb76d49ed864abbce7fe254f58"],["C:/lmislm.github.io/public/about/index.html","a9cf5da5502fea8559089c09d4c33af6"],["C:/lmislm.github.io/public/archives/2016/01/index.html","65814fc2de666d5c13580f8844f6078d"],["C:/lmislm.github.io/public/archives/2016/03/index.html","e182393b470deec805f23cab9b4c62ea"],["C:/lmislm.github.io/public/archives/2016/index.html","66621a2c04a0b7eeaba12aeaee2cc500"],["C:/lmislm.github.io/public/archives/2017/01/index.html","c7fc33a4673da4f845c246b4d10f8385"],["C:/lmislm.github.io/public/archives/2017/03/index.html","49d58471c8a1e4cead0d37390cc98ad5"],["C:/lmislm.github.io/public/archives/2017/04/index.html","54873cc14eef9d027ad270b3de8c1b1d"],["C:/lmislm.github.io/public/archives/2017/05/index.html","f7905232cbc2003bcb0bc1057e47fd2e"],["C:/lmislm.github.io/public/archives/2017/07/index.html","d4a06f46135b29541e3947891f695f7b"],["C:/lmislm.github.io/public/archives/2017/index.html","41bd9457de9f5d5e937808006dd40e7b"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","e3aecc2c3f50005e028a20c4539ef885"],["C:/lmislm.github.io/public/archives/2018/01/index.html","a58b8946868108b3abb55dcd74212e58"],["C:/lmislm.github.io/public/archives/2018/03/index.html","e315379cad72387e7f6ba8277842a60c"],["C:/lmislm.github.io/public/archives/2018/12/index.html","f0aad7e1baa521f06be39f7856ba4af9"],["C:/lmislm.github.io/public/archives/2018/index.html","696df7b67b79323e4a25af58de0afbcb"],["C:/lmislm.github.io/public/archives/2019/01/index.html","407b6426413d0008b0ecc3abbe617fea"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","eb02edd5a290e0466c00250f6f420ddb"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","f1bc0956de8ab2f43fe9fec9285aa2b8"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","927dc8c9bdaf50eed12e60299cb58e80"],["C:/lmislm.github.io/public/archives/2019/02/index.html","5cd2fb278c42566bf6f8503c45d23873"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","fc7e89c15ad3be18a622014ead70c8a6"],["C:/lmislm.github.io/public/archives/2019/03/index.html","0dfef56831f30f43d4f1886d09908551"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","18bdde7df7db35973f195ce4a6df4d4f"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","98ceb535b6a2dfd4eaba5f631815151a"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","a148b4e44095b61f98e3a982f1a4fe88"],["C:/lmislm.github.io/public/archives/2019/04/index.html","953308395550829b27876b4afb713c2f"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","7a7f1b7424324a3c8ec754406ce6a337"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","1f1594604ef415f704733870edecbd66"],["C:/lmislm.github.io/public/archives/2019/05/index.html","958a5682cf02ba9df5859cb1a1c9932f"],["C:/lmislm.github.io/public/archives/2019/index.html","f2b28a34756c6e85381626a5cbab9924"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","546ef74efb364436ab989737e566718e"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","88ed881575d499af23012da7ee76dfd1"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","cd4c7aa42dc8b5a2cc8d888f6d2aa1aa"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","f5e1e1f5230bf0ca61e6a4e8e8f0f42f"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","2e70defd056e523436ad24d653860beb"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","05faa6252fe4ea876ca1dc490cceefbd"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","17b09a0e9b3f94e80e37b7b61ab01b18"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","149e3cb95b971ec06b1cc42818a5789d"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","423853c97d721010fb9e5717736e4d69"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","cc8debfa9c7efd4b40a84ea6c9512840"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","4b60a653272a4ebae8c0b014a6468e80"],["C:/lmislm.github.io/public/archives/index.html","9a907550dddbce9bca1504d894a57de9"],["C:/lmislm.github.io/public/archives/page/10/index.html","3b986b5fed79869a7043d79c86f21b9b"],["C:/lmislm.github.io/public/archives/page/11/index.html","451e9d94e35d7eb95fca4d86b112e475"],["C:/lmislm.github.io/public/archives/page/12/index.html","e4123bd92bdc68c88e936a79db73d210"],["C:/lmislm.github.io/public/archives/page/13/index.html","9be9fdbd93efcbdc57e17c4ee277a57d"],["C:/lmislm.github.io/public/archives/page/14/index.html","71454bd2515031a9a1e42bd680a2b5c3"],["C:/lmislm.github.io/public/archives/page/15/index.html","d2723ef613c94550af8f98dd1fd825ae"],["C:/lmislm.github.io/public/archives/page/2/index.html","313eb0321d8112b48aabcb8798b16430"],["C:/lmislm.github.io/public/archives/page/3/index.html","7197b3f5850161a2682f103c78fc904b"],["C:/lmislm.github.io/public/archives/page/4/index.html","0ecc1522ed59c3e329cec3c1ffcebc1b"],["C:/lmislm.github.io/public/archives/page/5/index.html","3879e23aeb5a937d836377bff9a2ac40"],["C:/lmislm.github.io/public/archives/page/6/index.html","e89adfcbf3ce9febd27cc3846e64583b"],["C:/lmislm.github.io/public/archives/page/7/index.html","bb9bcfd92b6f760a8f18a57a0161a58f"],["C:/lmislm.github.io/public/archives/page/8/index.html","bc5ab03cfb467392a043429a9ea4b2ca"],["C:/lmislm.github.io/public/archives/page/9/index.html","55f333ed7e7c4b0f0d7abbee26fa085a"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","530eb613f01497f4704e9f3c6f271d9d"],["C:/lmislm.github.io/public/categories/index.html","2b9f704b23688ad938b14baed3490dad"],["C:/lmislm.github.io/public/categories/xx/index.html","d1de68d25643efcc32e0028f98926da4"],["C:/lmislm.github.io/public/categories/学习/index.html","a3581f18a01d70735982d64f19627966"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","f9614eec3187d498648b2a4954883ff5"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","545784eda0b4367890c93ee89baccdd4"],["C:/lmislm.github.io/public/categories/工作/index.html","acb905d875b53a75878b57dfe652ac37"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","2821b24248101dc9d3e679c4267593b5"],["C:/lmislm.github.io/public/categories/技术/index.html","bc3aa6d5d9e79586a4067bdbdc50558e"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","4185fa9fcd8850116e6f0b9884338d92"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","08b409fa0e9633f39cbdf6d321d3e3fa"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","bdfab8eaccfbabf25f7f820c8a101f68"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","d2ac03af52e9bbb816eec453b04d8ace"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","afb68bbdebe30b88ba9a232fbe277db8"],["C:/lmislm.github.io/public/categories/日常操作/index.html","2787dc2fca0f07e584b327bc39d5db0f"],["C:/lmislm.github.io/public/categories/生活/index.html","e5e14df819956e0626c51ad265f01027"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","22a6c777e2ca88aaf4732793169ce125"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","0c56517362e75989b59a757603e4600d"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","20b7100d6a8702456457266738612aed"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","a30c9178a2ca9daba9fdca920285d871"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","0f8a6f778e54d2fa9d262182bfc88fa1"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","0a0fb65a00c09cd657d3de3ac6eee5e2"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","8200f8d3349fbcafb4d274b42eb6ae44"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","088bf5a35669ff1d6759224546600cec"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","e5b0fa5908fa82d9c6344e45715dffc7"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","629932e9faceea7e0f4e1e5d2ae8be41"],["C:/lmislm.github.io/public/page/11/index.html","3a67ff13961153850c2591e80ef65d59"],["C:/lmislm.github.io/public/page/12/index.html","1347c1b863a60dca2eef2042c3618d19"],["C:/lmislm.github.io/public/page/13/index.html","8c8987c40f41795f24693a4a8d403fe4"],["C:/lmislm.github.io/public/page/14/index.html","f4dcaa74fbabf0d584efcc158b4c236c"],["C:/lmislm.github.io/public/page/15/index.html","9d8b8143bc027db751e3ad210bc50227"],["C:/lmislm.github.io/public/page/2/index.html","bd22160596b3a1567f19848445a2fbe4"],["C:/lmislm.github.io/public/page/3/index.html","c9e582e6f370edd2f18cf84fef0385f6"],["C:/lmislm.github.io/public/page/4/index.html","c93d13e12b0cba15e4203236a9865bd3"],["C:/lmislm.github.io/public/page/5/index.html","51ca3dad4712dbdc2dc85a37424f75a4"],["C:/lmislm.github.io/public/page/6/index.html","729e9bcfb4db79a2c9de948663550afc"],["C:/lmislm.github.io/public/page/7/index.html","1dac5d368b3101c2d4643b1c3ccafcfd"],["C:/lmislm.github.io/public/page/8/index.html","cccdcb48917ff5300bc3ee3d5b87a265"],["C:/lmislm.github.io/public/page/9/index.html","705cf09bf67d653b0f8ad6342fbd729c"],["C:/lmislm.github.io/public/tags/Interview/index.html","2f70e9d0f2dc222d81ceb9001abd8057"],["C:/lmislm.github.io/public/tags/JS/index.html","6c3746c7c9a270dd54ed0026737c9dd5"],["C:/lmislm.github.io/public/tags/acm/index.html","184a5f57cec983f6cd76c7b196defe05"],["C:/lmislm.github.io/public/tags/c/index.html","9d9dade3d2bd17c77373a91598d02f43"],["C:/lmislm.github.io/public/tags/codewars/index.html","6edf24d31a75d59afa649bac03b0b1b7"],["C:/lmislm.github.io/public/tags/css/index.html","96ce8538693e7794b9d179658a1b98b3"],["C:/lmislm.github.io/public/tags/git/index.html","e7e7029377bdb8af8b631da54358b21f"],["C:/lmislm.github.io/public/tags/hexo/index.html","1a14508f34045c4719ab45a062ae99dd"],["C:/lmislm.github.io/public/tags/index.html","27e6630d1b4bc462652d1d3b8cb33a30"],["C:/lmislm.github.io/public/tags/markdown/index.html","9c696145bf6aacd57de0616a3804f53a"],["C:/lmislm.github.io/public/tags/poj/index.html","6eb0713fdac6f608d8046637b8915893"],["C:/lmislm.github.io/public/tags/shell/index.html","002475c6ec9c88c26a3840554b1f6fa6"],["C:/lmislm.github.io/public/tags/vue/index.html","cc8be21496c3d790ef81a8b8bdf5819a"],["C:/lmislm.github.io/public/tags/xx/index.html","b7ab08bbf1096dc94cddef549e04d9a0"],["C:/lmislm.github.io/public/tags/前端/index.html","672f94147756ef105925284a941b66f1"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","32213f6ca7341321e4cdc739c26195b1"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","640f59e40018c5dc04325f78a7521100"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","f5702cdae52990303c220b071fba1a7f"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","d5235b8f2f19c349ee1d953ae79a4da7"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","1726f43768df0d6f8903a708a900414a"],["C:/lmislm.github.io/public/tags/小技巧/index.html","97a21221e390afc31446ab4ac4389782"],["C:/lmislm.github.io/public/tags/展示/index.html","9b4f3622817a40b5d8d8b8fae20431a8"],["C:/lmislm.github.io/public/tags/工具/index.html","414c69f7f2ca914abb29523597d08816"],["C:/lmislm.github.io/public/tags/感悟/index.html","3cb293946af72f8df78ddbd63269e4dd"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","224a32a07e623a4b83de1c5a3cdfb610"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","cddc5c95ea51fc677cdb732bcae06262"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","e1637b23f98b31e5f33b58eef0810cd1"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","a8c4ce50b298c78bfde6d7bc4db71ecb"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","bc532e6d0aacd6d23026460a42737035"],["C:/lmislm.github.io/public/tags/练习/index.html","78db824a56f9458b2aaa0903e23c4061"],["C:/lmislm.github.io/public/tags/编程/index.html","ffd4bacc8c6f2d09856e732021b0aebd"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","59d578a1cda379c87d031aaee6caa4be"],["C:/lmislm.github.io/public/tags/运维/index.html","0b9213440c7508cb7cb62da590e6450b"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







