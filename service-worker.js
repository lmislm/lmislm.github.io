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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","c81ddd268460496fd40ea871c19c5207"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","9d67007fef029ba78332db7633a2c5c1"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","699b433de5fb0827bb850080bb25738d"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3ce93daa3253e992464aca3fc6f7714d"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ddaa82a29d17fd1ee0bc5877f07efb49"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","dbe9f6789aa8ae326f5d2a314b1e663e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","3374f862093d3b2f417a7902a691142b"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","e97bc5268716599d5840185b43574aa9"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","fc1374d58f5d6b9b841538d1127c0f75"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","9cda5a76c7677ae84c0a108be4218e57"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","a362619684439fc2db9bd3972dfcadaf"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","0532a4914d70db0b1a855b849ef085c1"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","854483f1c097b31d9ba8952f9e58ba18"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","1ba0baef1586de70f09583264dc45ed3"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","542d3b2097903825e7fd74a50f23445d"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","54fc72690448e003b80e316ae4082836"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","9bd4c8548b341e4442c3a17174692646"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","5839fe07b58745bde5933a553e114a81"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","87e04ff8eb21f02105f8870137e05da8"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","23792194c1099f757eae13011ac8d71b"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","c58ef32aedbf25906fa143e82a46d830"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","2705a5b8cbdf06e04afd9360638b7330"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","9b0c8c8ab25c8536b81e2b112425251c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","d1f3bb9f803f1c58f794600c4cb7d278"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","c0b1e4c97f0a208dbef6a13052b576f8"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","b9ad5f7a68beb9bb3ed2911516827407"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","1bf8f5265416acf4d8a122bb80f6aa90"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","98b8ffb5eeb5450dfe24f62ea8b3ae1c"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","f747be53ea2d14866a2a06175c0bf7f7"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","e94d2cf2d0a119ad4c7428b099ea7b5e"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","68d0ac99bffe79ed40cfaf7e0482dbd6"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","58321b13867d7e84767b42a3e0dd6245"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f2f8e4b7515a97de8e9042e37f2cd065"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","bad267da3c629241f19b63e7c1695c4c"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","fd5a5635d81dac297849ab48387e138e"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","70cf3226fcf2d92482ab9f140440ef9c"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","97078079a37e984c15c073a301851bd9"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","f6e509090672e57b7d47ee48a91fd34c"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","edde923a997f55d6a651710c9478b5b3"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1f7b3d65e35b5dc5a0035b26e9fe2f58"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","94e5bce7b25d03485dea6e8d3f909247"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","ab38fcac506519a5c01f9104ee3d2157"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","19cf0c2988687c9cb570bb695755205c"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","13efaa2e4dd3356cf9e01baeaa132c7e"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","d2bb87b470e8b26ea853e10bbd08eebb"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","bc8cf23b92fe465725f779bf730c78db"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","4e42345373b6621816d1cfe9e97c8575"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","130b3166b7a9b242da1270a0a3f46463"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","f8e19f66c6cc1fa6fcc919be73a35488"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","bdbf4838332cbe760f14f8c9937cc556"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","272408cd5cc84cfbbb4e977ecac146cf"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","77704e274969aae8dac0e1797572a6df"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","1a3a36859aee43c958faf90b4437c327"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","2cb7b94119488a9b7bbfa25197a42393"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","a8781271d698d2889723689cebd5285f"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","c6f8c379d042ddb972f2583d1e009294"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","4e6c5f968e2f1f0bedb36eeb497b238b"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","3391bb113cc52bd8e07955dad45ec68c"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","2ebbd6b45186360df8e9e7d803d232a3"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","0a43cda09e1b13a0663e1989a6698593"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","e6121473ec8dd26e04f320490c5d9fc2"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","3f6ac9f4f627a881254f1f5c9d40d969"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","78c1fe36ffab473e2c8bd63ee4dd5d22"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","408519e1aaec5a8eb73307ff1e47d6be"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","f04e7e729a7fc1453b1d5cb26bc1cad0"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","67d1b058035d26c7cb13bd98a157354a"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","5770806d337a84cee1a538933bf02b06"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","e3ba2750b1b6f89ec3a329531d3b2489"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","cd9bc4e445d8ebf4f04c3ade462af5d9"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","64f55d2730584dead3264a92ecd6d1d1"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","b18597a8df35f0f467a93ee45f7b6db7"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","fde3b7b6080ced711f842e3677bce05e"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","645ae0875f852de7f16cd8f2ea615018"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","e19d83e45d3668f714b94dc62688a8fa"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","d1286659528e174acdabc0c1c9247bf3"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","1ebc49e8669c3f2ccd0ea9e57bb3f28c"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","155addc8b2b683d21af163fe8b78d576"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","160833bc8e36538c44ff484477fdc501"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","9ba870ce3e90aa5a80577fb2c15fa7a8"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","0fee0c2cf85903e0fc08eef332aaf8fa"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","5b4f4a2b956512a29fce7ce0e2e7a862"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","ac8e7d20a9885eccb47c38735b2f6e00"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","e9221392095184159d5db9124986f712"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","80fc4465b1714e875bc0f3de60a72a0e"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","17346b5dbe50e2a9ef216f2afb570ca9"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","23091cdde3630f1e9b8c43887cfb10a1"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","6f53c4f34fdee0a02529009bffc04ee7"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","486a9294b87a49f613aa9cdfe675c0a4"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","2be7bd0ed6126e5c360f2a6ae8935230"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","06453f75fd11542cccc6d747d5789b4e"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","96fa05c9d4c0792d46f79d8b5156b577"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","d4feaf7c5dbbe0eb9ce63cee38c5d596"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","131eb9166ee59c6472d2cd839a6dc0de"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","becab7a9b0fd1a1868ebd95444f93364"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","769eb1db818f8202073dcc174c2692f7"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","f9de5ab4b9a93ff967f14abbc92f4601"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","2cb9fcc521e19b1de7d931a1c4c24b05"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","25e0c13e11749cdd248ef65a57bf7341"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","a0144dcf03a49816200e62e744304422"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","dd28d521a20f3b4344df838e0c50d1d1"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","2bbbfb347762c31f78002b00d58f41c9"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","15b0ce85485bec7dde6cddd7ccf578c2"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","c0ddf54867caf2a0f72229a599c76979"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","e34217c1c6e2c042e58ccba818e5e101"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","51b50fdfbb2982db5397305db3820d8e"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","c785218239f1b4132ec3530d30404900"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","668b571323f8a89936b9dd2a5fca533f"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","4ab173c7a358bb832e85fdeaaeeedb76"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","0bccf0d7aed41bc5523791da48a35488"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","e9cb1407f3b576537c5838c662c9ffd7"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","57b949a929bf9ad7a586ceb190c68f0d"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","8298a0e538152a60c45a93b7fd802ee3"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","d9fa4ba8c3885dca4d11fd6c1a4d63b7"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","72da075cedc8c887aa577ecbd9d064cf"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","1952ed9d0e442222090ac3edf97016b8"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","af149440f86ad5acd4bc4180dc8e97bb"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","104c8943f1b6c4a7e4439935477172c1"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","340d8218b66436cf25e601e55d0d128d"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","63e3c3dea0b95f847d69b4e64fe6358d"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","1473194e3c454d1744c19917f4a72d7a"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","8452df38074a7c51b929dd6380c913f1"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","5955bb9786a6f325c707dbe68440b8e6"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","e9146ce7fc7de694387088fffa76c51a"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","f7d1d45a49d8c9d6f572e86e39601477"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","6df1ccbfb49363eab3cdfdc9a16851f5"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","3b5b323aa1d971c53f8e271420c28771"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","a18b3ea4e4321456670b5566a70e203b"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","931a4e356a91418f1920e55c1d5dc708"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","53d8cf3970d9b39efec9bb34f2ebec83"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","182260c502749dfa0982c721fffc629b"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","ba057bc2b09cf46b182d8b33999fa9eb"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","67424b7411284a4d3965d3bfccd97143"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","d6a36fe4075c71bf0a37d1cae0dd8191"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","65394088a6fa70e70cf1f8b8eedddde7"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","032c16d9fca1bb93a41f89b51791c1f7"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","046a2e019dea4c4e4189449a1f7bb364"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","ee9ce82931ddd870e44cb4bf66fb25c5"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","9e6a4316f8f85870ab6a912e958327a3"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","d333a85b84083ce49ea60d4329f960a2"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","1c18925a9cfec83d72434b7651228b55"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","3e5cbc32e3134bd0a1fa2d249740203e"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","578ca201ba9c46a60d4eb6c7fcf16d71"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","beb5fa5e1fa37a0c8c111626cde24fe3"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","ee3db3f5ea6249d5a995a93a33cbdfb1"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","45cd4486dfa11a3e4cf71ca11f84ef24"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","d0b7b97a42e278edf2240e2a9182e78e"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","e238b220f81cdacb7636249b27f82c50"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","c449b20db569b1e5840eb1d47f5dfaf0"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","c8c88329549ec3fbf09c2bbd94105c30"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","afbafb583b946b9516cca2fc632ad80f"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","30c3060d872faf7a1fe3a2edbde6b254"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","12aab75b368a44678978044d350c371c"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","282c5c0815186cc73c042a15698c6741"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","8f623aeb804910834d007e024207cdfe"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","90a5cf6f50fb25b3e1df2aba184afc3c"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","ab672fa3e4f4132b59f8002b8370eb68"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","629d9ea4981a7e63575871bf5f137c5e"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","7e333dca44d7a259cd3700d63a076fc8"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","6be34133bf9373b90ddec25fb172b197"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","d7f07f19652b0ce0958fdbaa679a7cb6"],["C:/lmislm.github.io/public/2019/05/27/2019-05-27/index.html","7b54d543ff49364ed0f7cad03c80bc72"],["C:/lmislm.github.io/public/2019/05/28/2019-05-28/index.html","3656478cf4b7ea41e0a20ac6ddb9b287"],["C:/lmislm.github.io/public/2019/05/29/2019-05-29/index.html","03d143233044ee7911d1bd671f5b6b34"],["C:/lmislm.github.io/public/2019/05/30/2019-05-30/index.html","159d06f1c2ba8902a3b008d3b166a6b0"],["C:/lmislm.github.io/public/2019/05/31/2019-05-31/index.html","a5239d459b57b5e369bf7cee78adc858"],["C:/lmislm.github.io/public/2019/06/01/2019-06-01/index.html","2f07baffc55636592e58df903f3d28f4"],["C:/lmislm.github.io/public/about/index.html","67ecb83a08a6df9af2c43517dfaa4094"],["C:/lmislm.github.io/public/archives/2016/01/index.html","a98de507447b6fc0cd4aaeb27bed144d"],["C:/lmislm.github.io/public/archives/2016/03/index.html","e3d8afb408eecfd23a05e6eb6427ed75"],["C:/lmislm.github.io/public/archives/2016/index.html","488bc41f5ba78c2e99dd5e2fb69393ce"],["C:/lmislm.github.io/public/archives/2017/01/index.html","4ead77dcdb7a13dd4ebec2aaf83ce7ed"],["C:/lmislm.github.io/public/archives/2017/03/index.html","6b3ac335b1e4e62f5847af86d531ddf7"],["C:/lmislm.github.io/public/archives/2017/04/index.html","ccae0f9c94f0509b40f7e8a782062a6c"],["C:/lmislm.github.io/public/archives/2017/05/index.html","32e3e9e9f2763d8051555b1f1f595ff3"],["C:/lmislm.github.io/public/archives/2017/07/index.html","013bc1e4f698f1f5fdf5506fcf776829"],["C:/lmislm.github.io/public/archives/2017/index.html","e7a2d52b2efa72b5428d0ad53352ce89"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","feed6e87b499a0681c3c6819ba6eca89"],["C:/lmislm.github.io/public/archives/2018/01/index.html","5948085efe68b64a3b189d431582f045"],["C:/lmislm.github.io/public/archives/2018/03/index.html","22d63af08ead78b350002fe7768231d7"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c8dc62d4fc6b613f563b63c88fc9dce6"],["C:/lmislm.github.io/public/archives/2018/index.html","3969b7464a7b45bf121028837005b381"],["C:/lmislm.github.io/public/archives/2019/01/index.html","e99b35c3c499862ab2e5cb5c16ff054f"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","aff5811e671753aaa70e73743875b54d"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","0674c477eb69fd8cc42e54a200ce622a"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","3e751b672ad25b53d0c1ee9db7700c20"],["C:/lmislm.github.io/public/archives/2019/02/index.html","5e9c6d3054df5c853526d6983a2d0e90"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","fe6aaf4a759e4ce6de3626ecb75e9bf0"],["C:/lmislm.github.io/public/archives/2019/03/index.html","53504c0a83e046fb2cdef70a6feac7d8"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","9e95de66b1b1295eb2a90c0600694f49"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","459562f0d5870d64bdbeaa176da4f540"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","0bf904636ba2c60f14e68fa39c0a280d"],["C:/lmislm.github.io/public/archives/2019/04/index.html","911960d1d8d5090efc86b6052c998480"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","28e2a690b2aaaa5703f2f1dcb267fa8c"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","76d4c3888ad8f9e2dcbe3fbc53e1216d"],["C:/lmislm.github.io/public/archives/2019/05/index.html","4ee7a39b43fd80a56d86277d490d4d5e"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","a80752a9bf2f4c984efea12bf4c56dc3"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","de936e4adc5c6cad0615abee0d7ff771"],["C:/lmislm.github.io/public/archives/2019/05/page/4/index.html","2a25b103e868d2edb4ae817f8bdf1181"],["C:/lmislm.github.io/public/archives/2019/06/index.html","2c09544e4b3b9660edb18432c7eb494f"],["C:/lmislm.github.io/public/archives/2019/index.html","3f5e9932d8d4088b5ca643cc52149032"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","c6191c72972e12bf22a5da27868d5733"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","816f4a01341567ee255309157a65d13b"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","c456f03248058cb6391dcc4d3e820259"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","4a6616a87eb0963438a09d59d5498dba"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","2fb54b24d90ec174342965f2c8a711dc"],["C:/lmislm.github.io/public/archives/2019/page/15/index.html","a6d29c0bb0058866c40226a848b47f57"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","9046bb90ad297454fb6938afea73dd6d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","3a7977f2d3fce54ff219ebeb1b596c5c"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","0b4630e6dc06afad7b41b1c45562d394"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","574930757e5c58c7427c4b4757bd41d6"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","b70d5e72807bd742f7a5019be5b071c2"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","e3d674a5e69c78e0182a739025828719"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","190d1fc2fa2983e62ffce903b4d9d516"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","863206ac56ca2b5a91f08b226c427dcc"],["C:/lmislm.github.io/public/archives/index.html","c58e9deaa7795e26db139ea20fbdb55b"],["C:/lmislm.github.io/public/archives/page/10/index.html","14eaaa07270b0924fee3bf4182719041"],["C:/lmislm.github.io/public/archives/page/11/index.html","0532d49e3b85b380fc115c4fafeea0b0"],["C:/lmislm.github.io/public/archives/page/12/index.html","66deba5c6ae201fc5cb17fe04ad149e8"],["C:/lmislm.github.io/public/archives/page/13/index.html","4f5ba9791fd2e26b6c9c4c77e31e3c81"],["C:/lmislm.github.io/public/archives/page/14/index.html","4b50043ae481288032c6e0ca07554b69"],["C:/lmislm.github.io/public/archives/page/15/index.html","5badda3d0fe3f9efc6088d2f2a194bca"],["C:/lmislm.github.io/public/archives/page/16/index.html","c4c3358df32f1090be24e7ca8a8c670b"],["C:/lmislm.github.io/public/archives/page/17/index.html","5f91766332a071930799513791b4e91f"],["C:/lmislm.github.io/public/archives/page/2/index.html","9381921a57116fe4ce935a42fe7c5987"],["C:/lmislm.github.io/public/archives/page/3/index.html","70c8ede1549bd97b5fc9a722a7ea4f7e"],["C:/lmislm.github.io/public/archives/page/4/index.html","2bf859e6ec128b259ce968e89418d230"],["C:/lmislm.github.io/public/archives/page/5/index.html","a7a9f345a8e7cebdbe5092a2b113bc65"],["C:/lmislm.github.io/public/archives/page/6/index.html","9423796d31abb177e1f5cff76eddf752"],["C:/lmislm.github.io/public/archives/page/7/index.html","9f9ec2dd158687dbcbcfbfca76dd5425"],["C:/lmislm.github.io/public/archives/page/8/index.html","8e91ed05c228cc318e0ccf41ef4600a3"],["C:/lmislm.github.io/public/archives/page/9/index.html","9451de2fd7aff5db0bde77f11b875af5"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","f8ba60b32c9127723db8acb3af017910"],["C:/lmislm.github.io/public/categories/index.html","cc236a7c9f91e8b049cca13ceb5178f7"],["C:/lmislm.github.io/public/categories/xx/index.html","60f46c4194ca0beac4a10c5777e9e284"],["C:/lmislm.github.io/public/categories/学习/index.html","9829d728ce2ef2fb44b739a36abdf80c"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","d857a76c745bbcd7cef47e0fff81c7ee"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","08fb8eb442935837f94ea2eefaa14285"],["C:/lmislm.github.io/public/categories/工作/index.html","89f71e080c55ef0a51113fbd80344192"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","6a06ae661855546d62f20205741c1144"],["C:/lmislm.github.io/public/categories/技术/index.html","57369dd2697ed001052db437674dd35f"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","bef29719b13bfde2a0d0fe44569216cb"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","f91a111fc592d65487dfe84b3459c165"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","0a1e1bd0c8634fe3985e05a0d1bc45ee"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","91da5b62fea18e4d396d37269073ea56"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","8164986f1ee3a78be86386edffd4d38c"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","ddc211bc5922beb45ec31d1bc8bad8ee"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","6353cdca8dcbb902756efbaa3f7db1de"],["C:/lmislm.github.io/public/categories/日常操作/index.html","9c373e6e91ebe1fcfd2352f12f2988d6"],["C:/lmislm.github.io/public/categories/生活/index.html","8e7295658dbaa573b2c8a461a04b181f"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","b8d88f45894a022b598748ab467c7176"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","a4446fed18d0645112dcd3b797d40acd"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","00c1f2d4a1ce951be77b33fb56ffeab1"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","89c83c164b50c24a4eb9e31ebb491274"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","77b66bf048bc82c4e19325031d526035"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","042f495127e20d8910c40cc9ecca2565"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","3ea3d6e46479a7aba4418147803a8d4d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","99aa0db2baad2300b13a9abb0c12ece1"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f27e143a338c6ba36d7934d66aede58f"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","94b2006c0f9bfcc4fb4f55fa19eb2da7"],["C:/lmislm.github.io/public/page/11/index.html","3b596c4c2bd3298c7e0ebdabf7bd5f8b"],["C:/lmislm.github.io/public/page/12/index.html","e613e5a71c4208fe167d774428725aac"],["C:/lmislm.github.io/public/page/13/index.html","441186dcb178782ae7329ab2df475cf2"],["C:/lmislm.github.io/public/page/14/index.html","d0fd3fbc69a456c2f4e7c67a082f25f7"],["C:/lmislm.github.io/public/page/15/index.html","1bb17ca045e0d5b21d05802074db1cae"],["C:/lmislm.github.io/public/page/16/index.html","cd65399ace7ce632e797bc1d40604c22"],["C:/lmislm.github.io/public/page/17/index.html","0cb6875b4b953e7641d6b5cd1f58ab16"],["C:/lmislm.github.io/public/page/2/index.html","84ac2eecc7634058d2352459fa8cd357"],["C:/lmislm.github.io/public/page/3/index.html","473a4c52452af8e003cd3bb6712470de"],["C:/lmislm.github.io/public/page/4/index.html","746fd8d84dbb3f3deab7c9f8f354e26a"],["C:/lmislm.github.io/public/page/5/index.html","aad075524229f10b3724a2aac27f24e7"],["C:/lmislm.github.io/public/page/6/index.html","4e302d207a68e6563b7f61f0cd96c55e"],["C:/lmislm.github.io/public/page/7/index.html","22e90caca69623ea44e0f7a42606a62a"],["C:/lmislm.github.io/public/page/8/index.html","862452820b61d78722d13c71d0a7df3c"],["C:/lmislm.github.io/public/page/9/index.html","4368601dcc815a3ae4e5128a6a3d86cf"],["C:/lmislm.github.io/public/tags/Interview/index.html","6e7e6b42ce3b8879500fd865de235840"],["C:/lmislm.github.io/public/tags/JS/index.html","bc3f1c17b17f653c2c4048e71f7af3a8"],["C:/lmislm.github.io/public/tags/acm/index.html","cd1259a5ec9186ce48b1a5077bd643ff"],["C:/lmislm.github.io/public/tags/acm/page/2/index.html","54b745e93cd18cf6363481090fd5379c"],["C:/lmislm.github.io/public/tags/c/index.html","4dcfbc4e17801311b4403eef04704917"],["C:/lmislm.github.io/public/tags/codewars/index.html","d036c4c5ecd1b17bb93be9bd2e71f011"],["C:/lmislm.github.io/public/tags/css/index.html","e5ed8481bb0613e6c7b8c75886641413"],["C:/lmislm.github.io/public/tags/git/index.html","4d99cc9b5446b23910579a7f51c01c35"],["C:/lmislm.github.io/public/tags/hexo/index.html","0cf5f97a689eff072c8c201f578e06f4"],["C:/lmislm.github.io/public/tags/index.html","afde18774097f555b9aefedc1f49ba57"],["C:/lmislm.github.io/public/tags/markdown/index.html","e7ae2c4beb9c199279c2712a88539079"],["C:/lmislm.github.io/public/tags/poj/index.html","5221d835b10176ac46dec131c49488a8"],["C:/lmislm.github.io/public/tags/shell/index.html","8e41587b8d6cea1b1d0e301c24409bbb"],["C:/lmislm.github.io/public/tags/vue/index.html","c22ea13d12e3c675b9475cf424d8d9a3"],["C:/lmislm.github.io/public/tags/xx/index.html","708842f6cc8f78d373b47aca3acb1acd"],["C:/lmislm.github.io/public/tags/前端/index.html","759a632c52c5656243e5d1bfc2423c1b"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","e6363e4ac3695a271e2a738e03de2510"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","9eb36cceb141dd01123b75599bf9e6b9"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","56d35a8723d316fd055857a7b3102dee"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","8029ac3f0c759627d76448ca17ac5ad6"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","53f7e436f5e40c5f6e555df60306e67f"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","fd496ab51f382739e603e870d1988c92"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","6736663c59597116795932ce0ff490e7"],["C:/lmislm.github.io/public/tags/小技巧/index.html","2c0786143ea641c468fe75f3e8d40b04"],["C:/lmislm.github.io/public/tags/展示/index.html","4699680e4cc3f3cc314319f057fa075f"],["C:/lmislm.github.io/public/tags/工具/index.html","290b4466e9f232aa0c50fa1999eca3f7"],["C:/lmislm.github.io/public/tags/感悟/index.html","8e7d343046af2beb1e22716c621e6960"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","77aec1e226d0ebf0436b1704ccbcad64"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","414dc3357dcabb7f60f2dd3aa1551d61"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","cf49f298bacb05ce13013e73686b444c"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","25f0d4453fc16433096adb61a4f31b3b"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","63da11f1cd2c0888d3287196d6563cf5"],["C:/lmislm.github.io/public/tags/练习/index.html","528c83412ce5f941354d192c1ef3b335"],["C:/lmislm.github.io/public/tags/编程/index.html","6c1f0a2129c72eca488d837df14bea0e"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","c9c4927c0eb42b756b1d47fcad16d81b"],["C:/lmislm.github.io/public/tags/运维/index.html","6ac1a03deecdab2c8822efb30d18bccc"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







