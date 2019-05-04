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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","19306753c7712ad0e26033de58e364e3"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","76807ddc37d1b4152c14e7867a77531f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","fd5be2533086eff3d351ade09caf7d79"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","1cf0631de7cb78460b8448f1d0d6ec5f"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","a2061a1d718ba29516a476b7343c610d"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","85ca1edd5016d07be3f146038328ba14"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","b6af59c281d127206307beda76875e42"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","a98e5de40f79c995eb1284dee2d9e350"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","b1d554d30370c5a5d5fb534cde2db9ad"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","e59234755b00f02c9e597474b35af3dc"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","cdc52c0043c6192ff22fff101520a3ae"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b9606057690ad224b71ff11ba95f4f98"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","9d7ea478c27cf151bbc22044277ba3c3"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","d77f722572aa313ca1fd143add5a66d7"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","d971950585cb3531f823d5d4dd902f82"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","ec09ef11b28ab716eaed6a7b649e6e22"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","e6c06f715850facac8ae9d78e6dbf8dc"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","51d50d81752f7dde4210527b0cd385e7"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","30af7261d056805d240c1ff5d626fb57"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","139e557f3dc6506ed4dfcaa9e184c698"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","b835c9b226da9a086447a56e4b49e443"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","2f312125560ed87ca23fd3408495c141"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","a4f32ce383c9f7150dfa74389a54a005"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","90c7cce6b0c9b1efd1b5dc9c16ee2134"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","714ed62e571d902d6eb14a0cbd578525"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","27cd33d468b2dd67e0ae489548ba6ae9"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","437db4141e6c4ecaa081864d4cafeb17"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","270e8d83c614a2af0be82eb14c73916d"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","a449148d2452523228a90655bce83db9"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a8e102a2bd531fae6e7ea1ba4cb137cd"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","e65ba6652d83425ec161079671791651"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","293e7ef9abe7cee925d7b04175ceb774"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","8570f89512dc00f98c2cc15857f4ae95"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","43421a1ca03f4a27300ac30d99beda8a"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","f58c1ada8d4c3a0a173e8ca11513ce03"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","25e394d5533f2e1ae6643d7bfc9071e8"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","3960a938ac76b3315a369eddb219208b"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","53af82b7f859b3cb57f1040ed84e52e2"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","4479258677cdae9763f2f2b4990e128c"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","2b936bb89b196a09e3e0d26a1832da50"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3f774a67175a0770a90c19fa831ba918"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","22c7e05aa0072edbac384bd745c0a72b"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","16ccc0f3211f8e2b339e1dccf719eeee"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","27301e9a3ef51ce973e418477efaffdf"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","1bbad9ec567c11a577d9870f83ac8350"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","35f059c1569aabc834e6ede853b12930"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","fec42b3665c8e32fee45c313d0889a78"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","f813c2ad0598a1d3977596d1bbbf5bcc"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","37fe98a65a9ad3b6711605a9fb681aab"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","5c2ae6cd56ab1b3b81b57598ee6ea8c2"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","a123fed22cd03bc11f1f43da2f9755cb"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","35d70e107d43ce14799c0faf870db724"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","8348c90c2bed384756198159005f4814"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","11feecd9d08c34f983d1fbfa7129c44b"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","46acd0a073bd2d1787cb474a01250f46"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","4e86168c6f1b9d79a5693ff2a6c1d431"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","a0797321d93d42ab27f2e405d9b151a4"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","81b0dca31da3dad1d56295aa8c999d14"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","a368562334ba1fed91c421a1f98b7a7c"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","44542f3f645d9af331b060888a6dfc05"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","671f7e2b99be9eda077f235bde9289ba"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","11307524c83ce1f584ba5e104d48fe9d"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","9e34a52eaff4a4da4e15bcbcdd631979"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","873ad7613acfbfe082918ce559aef1cd"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","7d6b550e222f0ddb9ed710b2c30883df"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","25fbc30b2f1036136c29125afa39e41b"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","afbb5282242a2d99b51f50099c97b1fd"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","ddae3df6cec649c3ec2ec3e8a9884656"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","7a752358cd6d3b10d36937acf9714d64"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","174e8389167ae3900f8bbcd43849152e"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","b3e37343b3d6435806a856b2a8916218"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","8d218f10c321b34ae9bd854e52d6cd5e"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","77a0f0e75fd07bdc72958991e0a912be"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","5b72a44d809df93166fa9c0e5c9fe0b9"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","c860e3fb05fdd9bc4c72b8022f0cca3f"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","010aa2c95277f60facda809876a843d8"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","6bd94f6771a2af079758bd3569747bbe"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","6e6b9ec0d4b211aa5f2c15d620b8ae10"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","16894c7a80be45750848fbd6c4534040"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","e4ba50d88721e0e4e6882fd2b137068c"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","28278bd206bf23d95699e05508215cd0"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","f839e571cda689dd2d712874ac5f851d"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","aba367707e861aa0e799c6a739842bc4"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","83b98866cefb26982438ffafbb194261"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","608253adde9cc2b3d377d9d97f36cae9"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","5a4c2b7b75c12b6a9fc05ccfd413d4fa"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","832bcb3f1bf0e6d531701a352b8da564"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","74fc797b0dccfb971002e01d695bc580"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","e6aee64eb222f208e9420260c75d9c8e"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","8f841860429e6961899d208b742ddd81"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","b209ae7015b00efe4167bd9b6db1e79d"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","f680615cfeb13b36483cbad1a4e806fa"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","2a13ab24574662e048e215b45c8b7657"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","046062c7d2753945f5b3b87267492017"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","083bc12ee567594eae9bd0b834bceee9"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","6706283334e9ee6ac86047dd8c0536d6"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","b1994887c04d3f14f8af28888579941e"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","06d7f20a44a632bcb182d22bb9225902"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","cccdcba61365d272bd91a8383ec63f84"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","5c4c9b01fd2f016e262d41b5acf11e21"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","39fc6fd170dbf9168155cefb7d9abee2"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","5cb9c689fbbb3a0e0fc3368ae3651a9e"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","1a4df92f1a8ec1098644b0c3c1dd6b06"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","4da18a809cbb0ba8785f5d44a9449069"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","d5d16b037ef1ec7417eb0fe94b5fd3de"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","966fb44d55a51e1c3f9cc22517e74b3c"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","c9472a35ce2573aa10bd526bb187baac"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","23ba9d4b14610a109a93cc77c068be41"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","faaa26ec16d09924f7af1321c948acfe"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","840c51f759e73fe325e795d9cb0f4d9c"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","80a48d06b3032db596c9be4ddeb6ee7e"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","4e4ce8fdcf0f302133f6a1621d59e2d6"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","6a33e7e512047236e6940879fe37acef"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","bb664a948afdc6b2655b3e985fec2771"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","8caa939bfea53dfde0354d298d3943bc"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","0cb0150a06a8c3a644df70b040ad1102"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","e4b8fd2b17197db8d87ba07b24b5ec2b"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","b386bffc401f001418a5b3900ebb84ae"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","3a39ef05851df82bdea013e331c6621b"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","8045398f049f5dc79d3367cf661c896c"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","b7c44ddc5c988749ebbc825652c9008e"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","394fd0e198761902163a7d0f530986d9"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","866021485e84e5beea6f3c1f10234948"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","f374aa8f67a2ac3428cfeb9e9f4dc973"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","10c4786f327b314caec89143b10e6fe0"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","2819084e8677e1f638a5d57995606630"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","ad990edcd8b6665d264490f13b3e81c7"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","f4dec0b306c6b3d671c1ab48f80d1988"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","2f262566af028abf105b928eb1eb4e32"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","dc08814ffc3e0e0278e31dfe92f56da2"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","99211badf18798e40dea87c727a2afc0"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","988004a8aeef78a18cd12a2a364b2c88"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","011f1a4880d9edc5e9d989e5d65ea37c"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","96ca50f900d26d77a5563e374b2802e8"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","08d2e63102ef58b6cac6451ec4e2934d"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","ad2a41f10d03f5d326d9be48af1a09b0"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","5322f8eee8ba26bd5ec7c997153d5dc8"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","1c58947f311b36183b0fd04cb4b7dda8"],["C:/lmislm.github.io/public/about/index.html","64244ae136c47cf4db5f2a2b8b5a3dee"],["C:/lmislm.github.io/public/archives/2016/01/index.html","9d8e994b2e736e6b18e65eaeab60183d"],["C:/lmislm.github.io/public/archives/2016/03/index.html","e1793c3128ccb54decf6ac9533c9115a"],["C:/lmislm.github.io/public/archives/2016/index.html","67f170fa980f349068d60087f10719cf"],["C:/lmislm.github.io/public/archives/2017/01/index.html","ada32a882111c7c5bc4d7b15b9d15189"],["C:/lmislm.github.io/public/archives/2017/03/index.html","db1a50d6766542fa59a4acbcc288e716"],["C:/lmislm.github.io/public/archives/2017/04/index.html","187eb4ec4c1f8cd2d3eeaf1abc77b6ef"],["C:/lmislm.github.io/public/archives/2017/05/index.html","3a0e4b38e20bff7a8215b38159ae164b"],["C:/lmislm.github.io/public/archives/2017/07/index.html","d1dc5f8ab99bdcebecc2dc8cd4e30406"],["C:/lmislm.github.io/public/archives/2017/index.html","476545b8fac9a9a62bddd45701ffc897"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","1d46456975a3d19e430c8437076b004a"],["C:/lmislm.github.io/public/archives/2018/01/index.html","2b42a755b73260a6dc197ae78c0bebf4"],["C:/lmislm.github.io/public/archives/2018/03/index.html","41da5cb91262de2d81bca57b0f70d735"],["C:/lmislm.github.io/public/archives/2018/12/index.html","928d05d3f6619c82c8766907e9db3f24"],["C:/lmislm.github.io/public/archives/2018/index.html","f8793737ce3eecca8322c113b0d0b398"],["C:/lmislm.github.io/public/archives/2019/01/index.html","dfe9cb41ec5e6ed82edeeacac267b147"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","5e8f22a9fd1e1728a9e18a2c0738062d"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","b32af43bc33c4f2d47b99b415aad7637"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","ab87a976f2fd3d79a1ccfcb89ca82a96"],["C:/lmislm.github.io/public/archives/2019/02/index.html","9ac09afe53e29f1d89e7656543ca787d"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","d78b2dd99eaf5a6610034015de82f572"],["C:/lmislm.github.io/public/archives/2019/03/index.html","c4b965006f293e966d76947c8b995bdc"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","366315a86668125eecb99f62b527bef3"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","439ab2e5bd005bb7ee1997c7d307b4a7"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","bda94ce6e7e74ba34fc9a0b44f45ddfb"],["C:/lmislm.github.io/public/archives/2019/04/index.html","600353b51469f86e6fe9dedbb83b85af"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","b9910f611269ee43c5147c7cc4c8ef24"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","04e8127ba1c913b78933387a3c50f69d"],["C:/lmislm.github.io/public/archives/2019/05/index.html","7267b8f33435c6a9a0aea1e20037f1c7"],["C:/lmislm.github.io/public/archives/2019/index.html","de420e8554f612b064375f674e569665"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","d8954ee29abeb8e4662af05f47413dae"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","1e458c7e36c713c9f47c425746ffaa78"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","fcc1c939c095b6a9c8191dfbf43b680c"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","25f00345f67edab2667613f55eecdb5d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","cc96fef4360f3995a66605d4e4630262"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","0af92a71bd382b3c8db70363534efee5"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","f1bc7380aac295951e03bf55037f1cf0"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","8e6fdf2a28a3a0c0707a2b942bd277f0"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","453989fc98ea0ba0261cd0c640a1a3f4"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","f09a8fd167c31c9bea14ac60f87bc3d5"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","0f73c3c6e5f833b1e9627e7b540844d4"],["C:/lmislm.github.io/public/archives/index.html","d716bc7549ef60168345a163349e09fb"],["C:/lmislm.github.io/public/archives/page/10/index.html","5a40ccc87c4d1b9a9af9c6b72336d200"],["C:/lmislm.github.io/public/archives/page/11/index.html","63b423e2f5f5ecb5a2cc77d9b7867b4c"],["C:/lmislm.github.io/public/archives/page/12/index.html","f9968fd91354b31fe15b9b279c1be3b8"],["C:/lmislm.github.io/public/archives/page/13/index.html","cd9748e8bc46db1c3e7bb3b1d8869c43"],["C:/lmislm.github.io/public/archives/page/14/index.html","a5c1caa9ac7b747a40c9594fd2d5c955"],["C:/lmislm.github.io/public/archives/page/2/index.html","357f7c6a690e0422987e676497aa74ba"],["C:/lmislm.github.io/public/archives/page/3/index.html","99c5a5558bad0df8def8f0697757a6a1"],["C:/lmislm.github.io/public/archives/page/4/index.html","6b33638701f89edcf9b257143def9ab0"],["C:/lmislm.github.io/public/archives/page/5/index.html","576bef23c7d1248f2d87220879bc3d56"],["C:/lmislm.github.io/public/archives/page/6/index.html","00b526a1910eb95fe74ed2a0407753e7"],["C:/lmislm.github.io/public/archives/page/7/index.html","3868ed15dc29103800a226e192cb056c"],["C:/lmislm.github.io/public/archives/page/8/index.html","3599efd6e44f1f47b1a36e660fe6714f"],["C:/lmislm.github.io/public/archives/page/9/index.html","8fa567e8fc92156039819639dcf4b0b3"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","9d40d30d0b3e689d33c2a242c076f6bd"],["C:/lmislm.github.io/public/categories/index.html","89e8aabe43c86e22546e503c112b5faf"],["C:/lmislm.github.io/public/categories/xx/index.html","2619a605f6f7455aa898d6476eb38164"],["C:/lmislm.github.io/public/categories/学习/index.html","f8aea2db5dd60f1a36a144896a136e25"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","ea351ca430145db2992324523ddf7c83"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","feefd6cd69cdcab0cefe4f6ff0d3c051"],["C:/lmislm.github.io/public/categories/工作/index.html","8bdb862b4dcee291840b1fd26cdaa8e4"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","290c9053b9a4c75f546ed51d840e7e9b"],["C:/lmislm.github.io/public/categories/技术/index.html","c2b47bfd44a3f80b86fec37c07b191c8"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","83f33eaed55dd514469b2fef3e30a934"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","1b875f0c12fb0a844a2922d7a9877d56"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","32c776458d5b99bdacd46b7759b6d6ca"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","f2d83ad9f64cd89797f2b5d340c7ccba"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","b549a6a4afcd724b62ba60d2392ab43d"],["C:/lmislm.github.io/public/categories/日常操作/index.html","98c05a55858aac4b1447dc9fc583f969"],["C:/lmislm.github.io/public/categories/生活/index.html","b171f470665ba28a22ac987112c31f49"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","de3c259eb55974b24f4f2a1baef7c76a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","5c703d79b5a38e2480bd06708aae6453"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","a3c8ee8681ec58bab437dd9d5da63b61"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","b1e3e2eb287570f3f6f9fef9d6a2f471"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","e74bcd75e5685d664a48bb333bbe408c"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","c10b1342f411e017af604e4efaa4c601"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","f2e7c6ab7d1dd5c57f702ad754c02858"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","8551127f37077d265e1c5c967b96512b"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","4ce5118970b35f3203f6052710242f5b"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","4ed125e878e10f22170b144eee7ddcd7"],["C:/lmislm.github.io/public/page/11/index.html","9e974023a8001d111ebc603ef13e82e1"],["C:/lmislm.github.io/public/page/12/index.html","bbb7ceb54065ff3f8a23e1c423d26ba8"],["C:/lmislm.github.io/public/page/13/index.html","9b5a583e505b0e70334595084cff27ee"],["C:/lmislm.github.io/public/page/14/index.html","cb0e217f0657481789115a07e38ebed0"],["C:/lmislm.github.io/public/page/2/index.html","01c96ffbb69b37d3589648f2d4762521"],["C:/lmislm.github.io/public/page/3/index.html","4410ec34a02cf02d5194b1300af1275a"],["C:/lmislm.github.io/public/page/4/index.html","fca8af4ab98df75f6a84e02055bbc233"],["C:/lmislm.github.io/public/page/5/index.html","c10bbe6230309faa293bfcb7417f12e2"],["C:/lmislm.github.io/public/page/6/index.html","2ae5511c199bfd55ff0217295431c537"],["C:/lmislm.github.io/public/page/7/index.html","57b88d028ade55fae7e057353b8a1a59"],["C:/lmislm.github.io/public/page/8/index.html","ded34810f0fdf27ffa27f93f43720f26"],["C:/lmislm.github.io/public/page/9/index.html","eca236b5e1bfbacd8cb548d53d52a9ca"],["C:/lmislm.github.io/public/tags/Interview/index.html","e8940a96aa5b53c7e0701314aafa8a88"],["C:/lmislm.github.io/public/tags/JS/index.html","28020f869a8f60316e47fbf0c8d02e11"],["C:/lmislm.github.io/public/tags/acm/index.html","3cd407a6f75108a96f3662ee93da2e54"],["C:/lmislm.github.io/public/tags/c/index.html","edd3c3ff0d3ffadb56b3dd5ca46a02a8"],["C:/lmislm.github.io/public/tags/codewars/index.html","1b15b946971094ad495a787955e15fb1"],["C:/lmislm.github.io/public/tags/css/index.html","3fd1a3e30586758d3e4a67d2213a58c1"],["C:/lmislm.github.io/public/tags/git/index.html","59c21a2c3894b808929f83ae5d5cf19e"],["C:/lmislm.github.io/public/tags/hexo/index.html","1c4cfcf98df2bac9cfadf278d5f1680e"],["C:/lmislm.github.io/public/tags/index.html","4d651a18371af36e150c56f95515cdae"],["C:/lmislm.github.io/public/tags/markdown/index.html","8f5e20001ad075d0bb4b88984be80983"],["C:/lmislm.github.io/public/tags/poj/index.html","d9207a10db4ec4c3888fdc7631028624"],["C:/lmislm.github.io/public/tags/shell/index.html","a6c4d78292cd6a5bbf2cf6acb6997eed"],["C:/lmislm.github.io/public/tags/vue/index.html","b3ce49feed7d74adce6c40e69cbcebad"],["C:/lmislm.github.io/public/tags/xx/index.html","8be23e71142f4d6e6f106bb9b17c77c3"],["C:/lmislm.github.io/public/tags/前端/index.html","88d57691302230458891a6c8f31b067e"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","150f45604872d2a6c888c1223d5f9389"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","98c28abfe394ff1f02fd21a885c6b2cc"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","b697de91f45327777d08137abed46fff"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","1d5f8cfcf849d663f828de7d09437faa"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","05eaa0db5c51fbcf1fbf999d70046971"],["C:/lmislm.github.io/public/tags/小技巧/index.html","292a30aa7ddea6bf05ae4e5e248d23dc"],["C:/lmislm.github.io/public/tags/展示/index.html","295e2db51db40b85553f5210078a272b"],["C:/lmislm.github.io/public/tags/工具/index.html","14b51188106994468aceba680217cc9c"],["C:/lmislm.github.io/public/tags/感悟/index.html","934c5ffd84e245a7fc259c7b32d07a54"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","c961227b6843fd666997e81f4c48c286"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","b67ec4934b7b93381c8867cfbad5c921"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","083d11394b10fc4350becfcb69e721ce"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","ada339142e7772aa41a0b3f24cbc73d2"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","50119983ce16651d85304c9ef25020d0"],["C:/lmislm.github.io/public/tags/练习/index.html","cfd36de80aeaee301422baeeb0e66a0c"],["C:/lmislm.github.io/public/tags/编程/index.html","44088e19d16c81cb9115bad2a0e0dc2c"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","92e1ecee1dd5058875919f554a46808c"],["C:/lmislm.github.io/public/tags/运维/index.html","0c22a8ba0ad258fe9c4f2b225cda279e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







