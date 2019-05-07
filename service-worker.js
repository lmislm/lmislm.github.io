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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","781676a38965b0741a46d51194d69d6f"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","9ea9070d171f4c11062a3eb7c51e4ca0"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f29e231cbb2aba6542997a39ccba7eb1"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","d8d1f4dc9ce0368f622b6e9ef6d32dec"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","60f7ab2bf632547c5696d376b73fb149"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","33aba5057213314fe491be8ef67fd2af"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","6804d9fb9a575e8f40062e0c0ef59d82"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","3af5c3d49b5b09e25e644351ab3b2f23"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","01401e9efc24a6c29756c20d2b063a63"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f14a2289b9b74ef8504d5e80811da931"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","ed160ff9254aac0c213165d2f5db7293"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","7b7740ddfe29c5d66c7cb63096377f99"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","8e5977a6c270ef9f99b1246c411c382c"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9760b6c8e8b797640872d8a43c7c8d38"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2912021e6e9abcf5c5dfbff3e99ab04b"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","4c05e608e44629f1d70512967643bf11"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","c107cb7c3efd5de4ff08893496a93cad"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c0f524a739bea8875123697240456a94"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","1cea266da9ca134fb100231c5920ea89"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","c286c2a565e1af1de23284cdaf0891b8"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","bfc4da8d8956ed7b6556d7bd2ddff3c4"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","394e2b20ef7f48fdda498144a32f4bf4"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","af5eba6d8c7781465254432a98148349"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","850718562e0de258fdaac69050c1e785"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","82cc278b69055a4c4c5a952695504432"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","3a1e8552bef3a19a559139e8845d75d3"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f3b605743729ef77bf1c7b038085f049"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","1f30ba309cb1be417528667cd7d21b08"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","15aac7f79b7577f1b1c0047f8776515f"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","131a7db545771adb1559b96bd6acaebf"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","57af6e78c36fb6d8c55ffdff526b19fa"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","81c8f3cafbe23c95d655706d3c698f19"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","722575acdab3ac03c116d71b839cc9cb"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","777fd2733e89ee57f5ac1e30ef29baa1"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","a56560740fd39965b4f5be19e890fb2d"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","230be2db271fe3fd3e8741408dfb1594"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","c7c411613ffa86e3b85c244d0ee4281c"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","5dde03cc4229cb6dcab154caea8d1737"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","bb5c8711fe8755fd97efc74dad3a8c39"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","2a6f50432a6f406afd08f20b63217d9b"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","f56141e7a17d1ee632f53ecb29cbc2c4"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","e2c369ca74f9e7706e6c03d9bdefd9e4"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","0fd78beeb8c16d2b0f049e427a46fe6f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","92ed82bdb0ff15a017a9d732f28f38b5"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","fd72830335a62099bed49d8b00c90ace"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","b6b0b511fb5c05d6ef890c300361549f"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","e5b9b65e0ed37ea712171d89dddafdd9"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","68dfee5326c744dc479708763d7795de"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","f93bd3c33c9de036b318569edd837ff8"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","41804fb7b9096fbd63005868f106aa4a"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","8f217619eabbebd412c8be734631649f"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","d53e164f87c00ec51c048bd74e4aecfe"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","1c05cc8b9415aabbd4106d85ca4376a7"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","e4b5783914d500d03648f34325e4fc49"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","c01fd96166def415145ddc5d7ae58481"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","57b40f59f10beb9314e1972ae1159de3"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","a61c60fcd379b7873bdc697d9a8719bf"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ecb130961b5cbe4ec8c10e1ebcd07ff2"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","f30d724b37893a9f835979d13d026912"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","c5660307be20e3a3abfebb87733a07a9"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","493e9fa18919271ec0661d9681a50c92"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","14c30418c67c0b529028646bd223073f"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","44c31c695274d85c8e2f4781bd793244"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","72879decf2455313a35ec67fe7d295c5"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","2532a8e5eb919b76dfa8f496e7b59a21"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","dd097e24d9582acddfe3bd3ce40c305a"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","6db68fe770f44525f8c579d940bbef3e"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","ab90e9d08437d79b77ade5c5a95dd2c7"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","97b05af700fb7e73bad9ac8612300dc8"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","4988d2ab03f0e671709efa8c84943123"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","c0c6ead8251e1af6dbeac8fd3610d376"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","da3edf8aba8f3d8408925bc8f3d3c2b7"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","882580f37349f1dbcdb9a267d2de1685"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","5c09062613b45c80c376b60360bf6a5d"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","df316cac743dcfebf01550b56148f1da"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","2c9219d5c471caecf82a4c9687467183"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","dbca734722a4f64578bbb80a0fd1d0d4"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","3c5aece1e41e7660cd70e2743ff63139"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","68b365009ffbd8a8a50dbcfedb5c18b2"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","17c42c85a8a19e4bb7d5a2510cab12a5"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","e74b43db75389416ca8f88e695928b12"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","87e759e50aab269edfb0f070d5aa842c"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","8bb197fb1b4a47b77559479d28f692cd"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","214d0e39dbb52c9247b709645216e942"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","9153681fcbd78d5d53d624e8fd6f4cc7"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","c96d2e57a43eceb703ee0007dddc4cd9"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","27d9ec9d7209aef85546ddaf02953118"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","c21ab71c6cac4c4fa5e3cf3cd92f09c1"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","3d976bdd21f5e872a3fdac717a64d6e7"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","ad592ee61d5ae5afe228e374af8ccb00"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","dd4782d007fef6d60871691565fe762d"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","9ee69a72fd3b8d6e256f2b009b5b4500"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","a6690c42d2a2afecb6e4dd3d370d0b89"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","69d2ee464932b1861bc854e8123872fd"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","3eb9bf457653aadfaff12a60af3afdc4"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","a9768b24caf1d0c78a849d760e5b4615"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","a10a5b37a44ac923fd8257fd2ee51fa0"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","fcce8aa8abaaa13f5125b10357b15c5a"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","5771aacb4ae13540f37edad8d89a6f81"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","d3c650ec1bf34818b5c54add981caa11"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","e66aa4622fb4fdfb72d032919953474e"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","3cbc36b6534b18fdb9f3a359264871f5"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","8e12f3be73c8eb8b7ea4a362633159e9"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","7889277142b153f7bfbc3aadd206c1c7"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","e13452e99c2076d070dbd32f722603cb"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","4bcb4a7946b03b6ed319bc10ce589718"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","2108bf7468cf4084351bb2e2370e2b30"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","d5e21ea192c734532b2fd8c10cbe6d4f"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","27fd1fbea65420dc222c683034b1bbb5"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","5cfcb78f391df5eda98104348d03f8ad"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","ac0241d607e6f09ef0c9a38af7cd00bd"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","9786988fa7e085e469b43aa41ff7e509"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","6e9c38aa9c81e617b2fa489e10eca2ca"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","f0e171d2a2ec28f2c262a880fb7265d1"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","7b42c314ed1199ec0028f0e1d0ed3585"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","7d5a331f4a4e23732a11e17c5f3f5f78"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","61e18ed1fe693f74a413b2e7923cc834"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","8d88684efb36765fafa1566a956e04ac"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","edc30dad473d8ada8f038aee850163bb"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","fcd8e0a877158f109300eda6be16625b"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","0e665f9298d60d0df90784e3d638bf22"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","7b7cffd10d802a83c0d506a7f090fc36"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","b7c5867bba8420ddd1dbfa25b8190190"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","1532a2206f4450247e0287ef50b9742f"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","b202a670a61fe77e3bdbeda91b26864c"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","c30c5cdab46daa06267f29bc0a66bed2"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","7933d491a19f1e4c3c8d5719a047d457"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","b946b8996444b85aee30140856de3e1c"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","d1d4c18039ae9928841e14d8b19ef401"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","b61d451b1899b696101ea3cc1b08750c"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","7cd713d8d8f38c7d801ed3e5045a6ca3"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","4ff274b8c51d6412835568e84390b7a0"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","591da0faa3ecf305f6035c36609a477e"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","c002b34e39f8bb35dcb3b8c52dc86087"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","c0f7f09ac437c7aa3f14ae54a88b717f"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","44a9cfa0d4e49742f6c4cfe25998023d"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","51bf90fe1d9ad4b91d2cc7dda420ae6b"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","3b3f523349962abd30949469eb98ca1d"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","1826d054e859bf5213cec20d103bbfea"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","f49597cf12e3bb8fcb090fb6c34c177f"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","7ca665c252003e76762bd2cb1f4a1133"],["C:/lmislm.github.io/public/about/index.html","24033298f4aa7cd2dd53611a8f7846c9"],["C:/lmislm.github.io/public/archives/2016/01/index.html","65548deffb0f3f5c1e8c116db03a5fcc"],["C:/lmislm.github.io/public/archives/2016/03/index.html","22864ab06cf5b39700c449f0d4fede35"],["C:/lmislm.github.io/public/archives/2016/index.html","7a6d7bc88d49d2c9b46271c6ab77a9d1"],["C:/lmislm.github.io/public/archives/2017/01/index.html","1e191f69890f96257f7ff3ee0ed74303"],["C:/lmislm.github.io/public/archives/2017/03/index.html","19fe926fbcad02ae27be43241c439adb"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1858f746811209fae375a62d77c85c4e"],["C:/lmislm.github.io/public/archives/2017/05/index.html","345fd0461e77d3f91b89ec223249565a"],["C:/lmislm.github.io/public/archives/2017/07/index.html","f2ee10d3defbcafd6c5119d8f8eb2724"],["C:/lmislm.github.io/public/archives/2017/index.html","93a0091f041b69b66f78338515176695"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","f8674fafdd042c490a61ad8a5266624a"],["C:/lmislm.github.io/public/archives/2018/01/index.html","d125ba29151cc1e4e4c9dfec3f2334a7"],["C:/lmislm.github.io/public/archives/2018/03/index.html","a62cf8925b5d145892d61c9cc4f809d9"],["C:/lmislm.github.io/public/archives/2018/12/index.html","d902db5e640320c759f65542e442c48b"],["C:/lmislm.github.io/public/archives/2018/index.html","9608f36b1fb83985c0b954875300fd3b"],["C:/lmislm.github.io/public/archives/2019/01/index.html","9cac6f41a7c2879cb6d03499b68c14ac"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","19f3c901b887dffadd7e3baf4de36fc1"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","54e8fb619e64e6eb51d162a2175a667d"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","07a7799e7dc1b3ea1231988d84ff0637"],["C:/lmislm.github.io/public/archives/2019/02/index.html","974b765b8e9f34c8845587e22e6bae01"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","fc45a82c8bb8eb0db8e8106c5cab13e6"],["C:/lmislm.github.io/public/archives/2019/03/index.html","13124482b4f1852d13046c484ae740a6"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","29d2459fda6a4a5c7c01dc946438d183"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","178576f7cca002b253366233ab284fab"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","f7a4ee832be70cc013c005b884ecaf0b"],["C:/lmislm.github.io/public/archives/2019/04/index.html","36e630739fd98c03ffed0a967fcf5314"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","5fd5e26184dd2d49694e94d02df3c429"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","26a7751b7e93a3f94546f236fd935b55"],["C:/lmislm.github.io/public/archives/2019/05/index.html","323d6e1847c73e838745d479ba37bac6"],["C:/lmislm.github.io/public/archives/2019/index.html","f117f64ca649bb123492b80fb993712d"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","e5a1c13a52c948731b38117e1e36688d"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","5165dd623e39040dd6b815b42414953e"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","56f4cdb807be528ac83e3ebc28739abf"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","1d2f7919b19434f98ba519dadf2204c6"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","9485e2a80529bf26955a18cac3cb8cc8"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","b1125b1b62abf74d184b75c1cba9ff7a"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","820555bbdfd8d69d600da3d776498552"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","d18a59f4170fe8a30e8a97694ba82cd0"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","a0192b7a300a73fbc9b09166312ea154"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","db34a2baeb259d4c9bedaab59df21eb1"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","b326bdb71469ffc5076c118258deccc4"],["C:/lmislm.github.io/public/archives/index.html","59b0f8fc5cc90486d9b0afa873fa4f8e"],["C:/lmislm.github.io/public/archives/page/10/index.html","cd0efc143d673d1d4a50318b5d8cebe0"],["C:/lmislm.github.io/public/archives/page/11/index.html","c172f525120fe7e3b5c34d08ea113d8d"],["C:/lmislm.github.io/public/archives/page/12/index.html","1eef807a1a74f2432d19c59210e355da"],["C:/lmislm.github.io/public/archives/page/13/index.html","4c0fe72bb298eca5e6b407e956eedbf4"],["C:/lmislm.github.io/public/archives/page/14/index.html","35b26d09a54ba62ed3531163f8112af8"],["C:/lmislm.github.io/public/archives/page/15/index.html","1c866d5e4e7440bfefe1abe06fae98ed"],["C:/lmislm.github.io/public/archives/page/2/index.html","6f58168e45da799188dc347faa6707aa"],["C:/lmislm.github.io/public/archives/page/3/index.html","c777b449aa21dd0de61ad27581c297ee"],["C:/lmislm.github.io/public/archives/page/4/index.html","0c71ab357f753bbd2a3953fdb619af3e"],["C:/lmislm.github.io/public/archives/page/5/index.html","325beab9a412eb13ed5d914628b66d7b"],["C:/lmislm.github.io/public/archives/page/6/index.html","939e469c3fb8bd46e7590b5a13f7d3e9"],["C:/lmislm.github.io/public/archives/page/7/index.html","e767b7a17930ef0e54e421b1bd533161"],["C:/lmislm.github.io/public/archives/page/8/index.html","9e545ee9fef634d6074d5486a41a3963"],["C:/lmislm.github.io/public/archives/page/9/index.html","64085f92f0332a36d5d222fbe46d7a24"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","970e090f2a9b0aea57fc3f6b6d9b06e6"],["C:/lmislm.github.io/public/categories/index.html","5c7a7e073818357f8cdf20ebd41229c5"],["C:/lmislm.github.io/public/categories/xx/index.html","d26bd3fea776021126bdd155ea67fda4"],["C:/lmislm.github.io/public/categories/学习/index.html","0af78c2392247f697b5d515fd800d4bc"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","0f1e4774b5dce769fd7d21d0afc7a853"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","9aa0053024e1939a0149d6761cfc6e24"],["C:/lmislm.github.io/public/categories/工作/index.html","05847c7354788a9349050ac731516fab"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","1db9f84bdb7698f2556b4991d71eaafe"],["C:/lmislm.github.io/public/categories/技术/index.html","5d7be7f802471802abb0e66abf7fa1dd"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","d5bc708ccdc2f18a6a0c00b54324ed59"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","3ad2422ec848e698672d1aa19bd075ca"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","a73b163ed0d8a2e9e19932c71132d412"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","47b9f09e745fab15613e15831d3fc132"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","49be4bf3bb2413f03fc1646063ac3849"],["C:/lmislm.github.io/public/categories/日常操作/index.html","a352f21916766e93876802270193bc89"],["C:/lmislm.github.io/public/categories/生活/index.html","8e57e77bc91aceabe15ea6d527b53e4d"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","87a0c38cf6a2b20cdc31d076f27027fe"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","61c40c98dae11aac6034e10a5a59eacd"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","b08672b050d0ec3e5b233aeafb8d27b5"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","6d8750e30a75443efdcc7e618fd41768"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","59dceab6d35354e83dd52f955de3506b"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","ba4d0778d5f093d257819813767a2c04"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","671c1df6dfb90c7f76806f46eaf0ec1d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","358bdaf8e63a1f094e136db9be1cbc48"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","db9809610c217e9c931a78a962e8e90d"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","d6a83f7dd7cd951cf13a18e877745b4b"],["C:/lmislm.github.io/public/page/11/index.html","5bfabce445eb588911b0f2b437ccc596"],["C:/lmislm.github.io/public/page/12/index.html","5906a09c565ad78385938d1579ad3c49"],["C:/lmislm.github.io/public/page/13/index.html","a86325af6a3f57b780e5c4c4037fde1b"],["C:/lmislm.github.io/public/page/14/index.html","3921f6c778f2ee2318c83301144e871b"],["C:/lmislm.github.io/public/page/15/index.html","6891533e64b0db8ac3127bcafccc23c6"],["C:/lmislm.github.io/public/page/2/index.html","fb46923ade2181e0432cf4b63d07e64b"],["C:/lmislm.github.io/public/page/3/index.html","5af1463a8503ae054fa8e3b08c58d598"],["C:/lmislm.github.io/public/page/4/index.html","4d86659d793c23999d01a4dea5cf5097"],["C:/lmislm.github.io/public/page/5/index.html","5ac28ece24aeb1c81d9e711dddd5adc6"],["C:/lmislm.github.io/public/page/6/index.html","0df8827a8b4e87286fdd25333954f48e"],["C:/lmislm.github.io/public/page/7/index.html","487f708e574b4439bbaa3c05e2f9a28f"],["C:/lmislm.github.io/public/page/8/index.html","756f5d18cd86b79fde7f5eab795bc0e2"],["C:/lmislm.github.io/public/page/9/index.html","e26ab6770182d6f84f4aed57baa709e0"],["C:/lmislm.github.io/public/tags/Interview/index.html","b7cc211a44178fce93cd53535e07e382"],["C:/lmislm.github.io/public/tags/JS/index.html","f9409fa927428541e1fa3c40b1129ea4"],["C:/lmislm.github.io/public/tags/acm/index.html","004ecb6dfe08fcc25fade929e6b97bab"],["C:/lmislm.github.io/public/tags/c/index.html","efc0b56d0827bdae54fa182e18637642"],["C:/lmislm.github.io/public/tags/codewars/index.html","1d172c90b805ada8d01801accc8f13fa"],["C:/lmislm.github.io/public/tags/css/index.html","457dcc6fbb5cb2e859385623133042df"],["C:/lmislm.github.io/public/tags/git/index.html","3a0e9acde2abd71a80933191b83ebe0b"],["C:/lmislm.github.io/public/tags/hexo/index.html","0f1a34de2251ca36371c2784e0cea12a"],["C:/lmislm.github.io/public/tags/index.html","7e3523ec09bbacc1a8c2a8ccdddee9e5"],["C:/lmislm.github.io/public/tags/markdown/index.html","a93bd93886006138f7ba57e21e6df7a5"],["C:/lmislm.github.io/public/tags/poj/index.html","7f5a0610940cf46dea9e7aa564504a96"],["C:/lmislm.github.io/public/tags/shell/index.html","09bc514b947d560127f896d7b3fe7f38"],["C:/lmislm.github.io/public/tags/vue/index.html","e0de2699b751f7505797919d52ae91b3"],["C:/lmislm.github.io/public/tags/xx/index.html","f5d0fe5961368ad947700fd957ea96c5"],["C:/lmislm.github.io/public/tags/前端/index.html","8448fed716338ff0f426460b1c66c028"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","372737137cf7580d07bf9e9d62d8613b"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","70a808f16a70de588e2ce05e5be83e0e"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","27aa600b0c5b3bc3344898a6e47a1cf6"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","f68e29d58646ba99956c9f774f4ddee0"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","1786ddec9735c50b92ab4e24b85186fb"],["C:/lmislm.github.io/public/tags/小技巧/index.html","b3fca312ab5510d8c539e233a4fe153b"],["C:/lmislm.github.io/public/tags/展示/index.html","49a3e856942ab3a367dc22e25978eda7"],["C:/lmislm.github.io/public/tags/工具/index.html","81423c3179cc02a1d2f5b05299b42ad9"],["C:/lmislm.github.io/public/tags/感悟/index.html","9dfcb70d916577c25999275596484d43"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","d15a9ec35f145aeb2eceb22d4a33fe54"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","da60a0c18b45eec1c8de6b3d6c1dd8a1"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","c21e61062d9901fe536f63ef809efe22"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","866d35eba3bafb1ecc7783fcf50fff48"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","dec326da2740957294c3a4a467821668"],["C:/lmislm.github.io/public/tags/练习/index.html","a6bcfd1a25a81588467a43f4d412c719"],["C:/lmislm.github.io/public/tags/编程/index.html","b0b2b8a3ca451b0bb76dea7e1f1f0143"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","98fc322f5fecc7b60eb9759c25db2bd1"],["C:/lmislm.github.io/public/tags/运维/index.html","75bc6fc6b71e3282f3d92ee0a04b8dae"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







