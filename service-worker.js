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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","c7c66f2797d85aec97af5ce8718aa541"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","5b8b745e8c0824d11949a920e8cd79f8"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","69858e0d38e82abefdfdfcc3ad18c7e8"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a7102693b3e7d4b54485c26bc2fba435"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","feb0ec28cf9bcf9acba20c2fbc314d22"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","94ec948cf31f588b9ba763850d802712"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","596c2a0938edb53c8fb165abe2e2050c"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","1333aa26c6dc6df667f2f5fc06ce66bb"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9b1a0c978fbb72a07e30c891ac2b42ed"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","06853a9eafdc4c536ff1d63565661192"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","82b1dd25778915950f23214b9cc1550e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5c440529dc1f9fe5caef98e1a47919d7"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","6025bc983c29e8ac1d42423bdc8c992a"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","998d31d73f7c0106e3d4c206d9c999f2"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2e5c64dc1888ed1ecb0cd6db39f077ac"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","ee6adce6a34d45ba5bd1251cff741d0a"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","cb8a408db3cc3851e153387977688dd6"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","b094f134d16e953ddba130a10527b957"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","841d6b24b8e182bfa2866f423fb545ac"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","bbb2edd89dab065bc257f32756b21359"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","734d377dc68e1a6537143ce974cc2e6d"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","424679354498a28bea595a0c08ee13a6"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","346ab53d88f006da6bf71403d231340c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","2bf0737caf5315c092418bf0c04ebd01"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6d32133beb5fc74557d93bd1a7e33400"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","9aaccfcab1030e02991ecc1585af5495"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","c7639f43c70bf002c44eced90d625703"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","4a9cd6eda4c1aa12caf91fd2d6c1d5e0"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","f9ea1161754d1f0fa38d3f22954f11f1"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","b8f0ca397faa0e688b3ffd4636a7e471"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","ec9a0dcc462f6b9dcb5c95f24ccf1aeb"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","48dfb01ab408e76e3d75dca41fa1e106"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","e3ab3623a8efdf4e42e21a2f1069dcf1"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","dcd0792b6ceaafe49bb30c74237a1c81"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","c7ce3360819d59047380bf45593fcb8a"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","fedda2c27a4d0b359647ae4d392001b0"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","77c69d46b3068eea0f2b69527704bebe"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","5b86a6dd99e0891d8964471f98bb011a"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","7fc889a9d976ea7d8ee91f27306515b1"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","a8a52933ed704c6b9632ae67acdeae04"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","97333d59bfc8505d9c7d77dcad82876d"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","75fa68ad0d708de767f036560cefc720"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","def11577d39935a9f477d6687af051ff"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","7527dd3808fb208930ff12a0e5e1937e"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","92f1a3096627899d20995055b260d32c"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","f3fa5c2a2ae9a5b00bc01937ec080e4b"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","f6458f87772846a54cd183ec8d7ca2d1"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","dbc46d49775248a142a230a0a582d31c"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","3c0c4ccaeed94879154807ebe325aee3"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","29b8356f6ea9d701a729484f4198604a"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d7c5526b79ce514622be6062098ae62f"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","7c7ea3ad0eeeb636a31b95d779b376d3"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","5ccc780e5a11f225b37a027ec67304eb"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","939dec4e27efb72ff59aa835604af98a"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","89f6bf5887c51bce5d945ad58eb72a9a"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","f4545977fe2099d077059f3d5249c885"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","28c8f640fac69862e8fa5c61310b94aa"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","c87aaec2a0954016f99b4f1360669ecb"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","d0e0af8f8150f324aef77922d2a8b6cf"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","9f7ab08dc07307e166767362b804e94d"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","5ced149478c2175f4d9add79edb694c9"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","5c0c3b2a35d958e3204722e447157666"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","042d65cc688d2b66ccdb1b488adb6fcc"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","17abded43656752a8f93b3eb1d4c710a"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","d76bf1c03107a72dfcca371671a76e77"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","78ffb099a3db96d11e539bf7c1ad6f21"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","7607a84857429120077c57837bdbbc71"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","12634496615554934577ceeea4e925f3"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","551d45a895d8d6f0b70b1cc9d3712ef3"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","69b4860db3be46fe28db70ca201b7686"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","b3f86c2a7becfd7d6818f2d7b1dc9c70"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","f7d9f236b21d0935d594ad0a69cafb47"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","ba1e931526983c48f0b671b1d51326fa"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","b1851df8b41e62b2a65769b717a506a1"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","2cd7b18f643b55f121904a4d58ef0ecf"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","6cb9bb935157d9902dfb3b317c9ef480"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","05f0552434b790a33eb763a62a3b89f0"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","b9f5079e8ec6309ab167b98166eb59f3"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","5ae5793c8d99675df3927acc6be1c7e2"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","6d18d73642a5ce7969eadb7e948d69a8"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","28798df7c2290c9dab5cea271a02673e"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","53b05e638e5b5afb552e56b4f095590e"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","0c9fe3efdfadd6188a0f41db9e3718bf"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","1b4a395f6a35b5db22834dde9ac2d2be"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","4f44fb18728d4f9263a2fa4a38b2784e"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","4b2c400146360e25c1c1968e5db7b736"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","a52c9413c20a6b8b6aa99c1401113a3d"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","2aa7ffc00e00f5761f77328d4971f77b"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","e7d8ae465072d620a828a50642dfda9e"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","802afa508b0bbf6c0766e47bc5adb995"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","657861e0543421d24b9a73b20168c6db"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","d10c666927c2b1eaa416850964ffa9af"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","d2fe1e381c76fc3277325dc58538cd4a"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","9a8f689b298b74f71451ba605a8d3a9a"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","7a11fa3edf61183df092623629563e9d"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","bc1ce0b4a4e695fedeac78aad3aee4e1"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","0dd1216bcc293c1db31c3c9821445106"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","17ac53881031bfb674ac01c2ac739def"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","c9b4bc1c6c2ffee9da0ce9a22867ac6c"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","991f1fb2a97e301298c56e768bd75ff1"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","8e217e6373d218a5cc1c074f52a0b9d7"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","cb8e84b39d3d185184ff8f00a4d34a6e"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","12cc215cb1aaf058c2ca466262c0dc84"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","6efcec608ec3dbe7e23762e8242b5f7b"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","4125463ef369431454e222f621fd1ec6"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","231514eb5afaf0d46349bc7ac970dbeb"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","bca24668a258a92d870a007fad2526ce"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","a23def835a4e700e47c83c2285669ae9"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","f45ba1ff7ebe9a02395da87c278d1cc9"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","55814b2c9e0264ca305b58ad648a39ac"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","669ebe3dc74287ece4807f8252413fcd"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","d620321c6032a9bd6b657297e8c30830"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","0feb7796e41f855bd4e4cb5a07680f34"],["C:/lmislm.github.io/public/about/index.html","fe8061ce22a73644ac86f0f52f4a1ca3"],["C:/lmislm.github.io/public/archives/2016/01/index.html","50ac64359cf250fd55dd4c27321f93eb"],["C:/lmislm.github.io/public/archives/2016/03/index.html","d203ae82b68f73fa8cfcde7c8bd3c08e"],["C:/lmislm.github.io/public/archives/2016/index.html","78f3181bc03b345222a113771a7a5f35"],["C:/lmislm.github.io/public/archives/2017/01/index.html","17d3d2220fe469c0aafeeac2fc7ca532"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ce13790561429ff23609c2560f4bc1c5"],["C:/lmislm.github.io/public/archives/2017/04/index.html","4a9f7a2f99671efe47d91bb74476bab3"],["C:/lmislm.github.io/public/archives/2017/05/index.html","9090938640537b64dce77e9f7f4f9e6c"],["C:/lmislm.github.io/public/archives/2017/07/index.html","c68947202dd1fc2fa77fc47d07dda936"],["C:/lmislm.github.io/public/archives/2017/index.html","7c629a8d82779b4032fdf82eaee912e8"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9b7f809f624d329dc9dda22f8c650867"],["C:/lmislm.github.io/public/archives/2018/01/index.html","b3b4dd5f8633848f0e6d88769171e452"],["C:/lmislm.github.io/public/archives/2018/03/index.html","0c348f40ec7fbf378f54130951edfcf0"],["C:/lmislm.github.io/public/archives/2018/12/index.html","69e473e821f8da6787dc527cdeceda7b"],["C:/lmislm.github.io/public/archives/2018/index.html","3c29ec3982e9dd344df8c833d5aa7f3f"],["C:/lmislm.github.io/public/archives/2019/01/index.html","34f0a70870da3d5a34ba0f048dff15e4"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","870b7356a1e8e6bcff3710294eac03e0"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","e8688d78df8eaecfaff6b9b428ec5857"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","97d01153544c14f2888e8893c186f963"],["C:/lmislm.github.io/public/archives/2019/02/index.html","18bbf20027ecb919572895e96b058092"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","1ebb420b1266b6f62c5d978afe71954b"],["C:/lmislm.github.io/public/archives/2019/03/index.html","d2d6051b1adf7870b8ff7fcddb656cc4"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","ba8a5ab415a3a29099ab4ef679733caf"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","4140b054566c6f41fdc79d6cb6a978ba"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","c2fd10711f21c6728a179b7b149557f8"],["C:/lmislm.github.io/public/archives/2019/04/index.html","16a86b32687dd76a86a571fa8a688cf5"],["C:/lmislm.github.io/public/archives/2019/index.html","2de6ec3321ab4589aa6e6ced1979e745"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","51d9e78ab930b6dc5d83e1f1411fc250"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","70cb92316cecf9b566f7d5ffd01902ce"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","a07a9053b4ae211b5e937f3a207ab5a3"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","bf202223a8d822e2c13162b816bae981"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","541464de2a3079191685cf4b2e0e04ec"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","60c650e78af168812f445f2af600c60c"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","38abae25d8bb81826cd980f97cd7481c"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","49e10c2817fc4a130e002351c681a8b9"],["C:/lmislm.github.io/public/archives/index.html","1d8cf38a2d7c47b522df2491999215b7"],["C:/lmislm.github.io/public/archives/page/10/index.html","65fb51ab0e038882ba13269a00f76f37"],["C:/lmislm.github.io/public/archives/page/11/index.html","7917ebba4c202b2d387efd1e4767dd26"],["C:/lmislm.github.io/public/archives/page/12/index.html","b104ee8a80113e2ae9bed65ace667566"],["C:/lmislm.github.io/public/archives/page/2/index.html","ee3cfb934a98028284274dbc324f9bc7"],["C:/lmislm.github.io/public/archives/page/3/index.html","58de3d26d601efb57af55d522bd0a230"],["C:/lmislm.github.io/public/archives/page/4/index.html","97d1915cd6eb6ce31f36f7b43b37bb13"],["C:/lmislm.github.io/public/archives/page/5/index.html","d5ef93fccaf598f4b7d064b5c049582b"],["C:/lmislm.github.io/public/archives/page/6/index.html","21ab34b1209b1a1d090c54523e73d944"],["C:/lmislm.github.io/public/archives/page/7/index.html","df93329313be3ae6054726787cebec47"],["C:/lmislm.github.io/public/archives/page/8/index.html","a30a1262b4334b25769ca310a85abac6"],["C:/lmislm.github.io/public/archives/page/9/index.html","82ea417f2e27eb1a24d972b994e6402f"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","8e5bd3d4f91b3d6ddcb55414659a6d62"],["C:/lmislm.github.io/public/categories/index.html","2e6c931b4c569012aa2918085bd7efbd"],["C:/lmislm.github.io/public/categories/xx/index.html","f360a42b9d714503fb2ae60a50739ec4"],["C:/lmislm.github.io/public/categories/学习/index.html","e645387981c8a3c0905779d0dfe3f6ad"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","773205c820f911109aaf56d776c3483d"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","78bd82652f673c6c736b31c1b1251212"],["C:/lmislm.github.io/public/categories/工作/index.html","80676f2d2e6e5f0dfd1a611ac59abb49"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","56cd8ea459bc3476eb0771ee0528567f"],["C:/lmislm.github.io/public/categories/技术/index.html","7289a1d75d51cb9a501e48bce4526e01"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","e701c50786121f95eb509d52d83b9f21"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","641d98b9ef14979fb2f9634824d89518"],["C:/lmislm.github.io/public/categories/日常操作/index.html","c027f4931832108a6ffd834019d74d73"],["C:/lmislm.github.io/public/categories/生活/index.html","3f91c5dae0f6364250fb7794a1fe084f"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","ab7a6946aa13281cbcfacbd1e847dc84"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","44ea942542d99dca493d2887ef4945da"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","fc3369c3736e6ba331cf3c4d3765b1c2"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","ad912331af48860a2d590848af845103"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","8b3883b0f4eab67c458271913e796924"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","dc74df8adc01732dcf3e9972fbc4c18c"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","b021ffed667e9d03f916cb24fa942660"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","4dca41fb4c34575f2f577b6558c7fca2"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","ac23ee09a95b7b7c9d2237b0ea37bbff"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","01104e7d6045d30555329eef81092e63"],["C:/lmislm.github.io/public/page/11/index.html","98e07a03e7c61ec13c1d4407d1374135"],["C:/lmislm.github.io/public/page/12/index.html","4faf3909475fdc9b0717566efbf383e9"],["C:/lmislm.github.io/public/page/2/index.html","2a8b6a2591f6f9d9a8e472b8836ba70a"],["C:/lmislm.github.io/public/page/3/index.html","5cfc6a060bc6364192210243e998956b"],["C:/lmislm.github.io/public/page/4/index.html","bc48a28cec7f3df633f7c6726517b578"],["C:/lmislm.github.io/public/page/5/index.html","3f74dcb60c221976c2a045fd612360b9"],["C:/lmislm.github.io/public/page/6/index.html","f748bdc6b3800357d120df95f2db300e"],["C:/lmislm.github.io/public/page/7/index.html","38638cdf4a2605719840e7d52878f566"],["C:/lmislm.github.io/public/page/8/index.html","59b8498fce92c41c87809c6c663b43ac"],["C:/lmislm.github.io/public/page/9/index.html","94cdeaf4fd4fc07d66c13f830e28b520"],["C:/lmislm.github.io/public/tags/Interview/index.html","8fbeae31b7629c14c1989ef13add1d33"],["C:/lmislm.github.io/public/tags/JS/index.html","de9bbc857539078cc9f2d03ec1be95ea"],["C:/lmislm.github.io/public/tags/acm/index.html","34f3059d81bff1ea799597fdf0bb55f8"],["C:/lmislm.github.io/public/tags/c/index.html","18045f69c978857c5b4ef4ac0b40addb"],["C:/lmislm.github.io/public/tags/codewars/index.html","bd19b6e4b1f90addd4c98dd22986adde"],["C:/lmislm.github.io/public/tags/css/index.html","097f15a3c530d858f7c27f9d251de47f"],["C:/lmislm.github.io/public/tags/git/index.html","b58e0752ec7c50b3bd9079e9b6049167"],["C:/lmislm.github.io/public/tags/hexo/index.html","74a2361ae210d7e9116f6e92514a7524"],["C:/lmislm.github.io/public/tags/index.html","95d732c17bd62c6d727a16cf4ca9c1ae"],["C:/lmislm.github.io/public/tags/markdown/index.html","17a3b581381eae6d8c33e2421b9dc5f5"],["C:/lmislm.github.io/public/tags/poj/index.html","7d48f691be73d2f8fb18846c89e5e8e6"],["C:/lmislm.github.io/public/tags/shell/index.html","ad6dee44c97774adf31fc67feb9910ac"],["C:/lmislm.github.io/public/tags/vue/index.html","8908070fb7bd71d59c4f2a15212b6903"],["C:/lmislm.github.io/public/tags/xx/index.html","aedc1ea557a3f19c13aa1c1917814fbb"],["C:/lmislm.github.io/public/tags/前端/index.html","20d8c1e7dc267930b59ae39dfb4c1600"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","4cde5e94e39e1009bc6be224b48b8a27"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","f07ade5deb8f76573eea14f8c72b599e"],["C:/lmislm.github.io/public/tags/小技巧/index.html","092ea673961f5998a97de71a03f1fbf5"],["C:/lmislm.github.io/public/tags/展示/index.html","87dc03b5a64f8834863f2a1edf3842e5"],["C:/lmislm.github.io/public/tags/工具/index.html","08f52a43614d6699e42113bd16a13a1f"],["C:/lmislm.github.io/public/tags/感悟/index.html","98ad12a432bc66220fe2b61214c1be18"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","b867cab1fa61237f75cd3573e0db848b"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","197615c4862b13dfd6ce4c9190546a2d"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","4c1a74e0bdc7f4439060e2dc5b71f4ef"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","eb09b6528b78cd41f4efcec646cf7bcc"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","ebc8b9fd7fad552a22c80438588dcec8"],["C:/lmislm.github.io/public/tags/练习/index.html","111b0428369fa604712b5ccd75235258"],["C:/lmislm.github.io/public/tags/编程/index.html","6aaa51583773ecbb4a5815fc97e5a1cc"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e9b5bc4677fcfcfcd40524fcfb345e3c"],["C:/lmislm.github.io/public/tags/运维/index.html","616b4fb970c46ec184cd9f53e53a8717"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







