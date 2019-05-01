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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","d47d7465dd345d58955eb9780ac1b3a0"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","45f3bfa47710f2b70028e639fcb0b5f5"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","08fa140e30c6bf7c24654ce176251fca"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a42c639a7f523d7aa837688d841ee046"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ae88cfce010a7f42859c4397c5c7c92a"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","1c94f95e0947a36c3b1fbc017155ff70"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","ef9f924f6b282323a2fc2a3733ef997d"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","692ac5e40e8f15be94612189b8686179"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","b8a1f2f0e4b50237c7545237a2727df0"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","5d9bbb24148883e1185e16c44c855cc3"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e39793d30e881dc042316fc7a6df92ef"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5f88a4f7754296e3040ab05cca2adbc8"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4904428cef560b0217835cf8e0b4fbb7"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","bf1ca87feb45f68392237a8131db7859"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","642a5cf1a951f4195310f710e886dcea"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","8507ff7d375ce9dbf9e37a6e6b38ed43"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","97d75cddff27b33667f68f52ab0085ac"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f8b004864439a8c061f13ca0f32e21ce"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","72167242a585d13555d8208cd1e29622"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","e8b2fa0cc794100f57c933f7984902df"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","30fc09da1266df1fd38d9a3d6361c1a4"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6330cb8d17430707c436cd70cde1a393"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","d614bc2f22a7f0ab410c4912de8a487d"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","24e67fb3c7b46ff3bc9a47013012c3ff"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","2b13270382e321ea22e6cc183f4f151f"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","910f420162b86a16ec55d2bb9ed2483a"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","193dac817f04242120034cee007a666d"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","adc7e35f518337a8d307d2b338516343"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","18f0e365f77c76fde9a4ad76f563539e"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","cb0fd1d77f49e57aa08048c6bdacc3c0"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","911cba6da190bbd47f7207b9ca4b34aa"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","080875b76ac344fc0a9c187703a89aea"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","d64f1b46c76b1dd7c10d97b578829f6d"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","63cc99bbc6b834c91a11afbfd9b9f09a"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","5beaa74105fb3fffae63bd2be9b0b65e"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","a7bcdb846023231312ef1646a41cdff9"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","dc8167242b03df3d6858115c401ce4e4"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ed520dfb87d3e0441f37439eb6b4855b"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","e6a8da7768fa031731b91517ed3a0cd3"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","ac23a3664ac6b3e473979b26cd331cde"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","1e8fdd1780bff7cc9ed1213c83ef456d"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","61e0ed36b2e2893923f512cd9c447b39"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","f40b3f4d494bc68ad4cea14fa3b73984"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","6a6080e046b307c5a459d24b6cd57ddc"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","cd6ba6979ab9b94a0c8ec4688bea19c6"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","1626ee850dfcc742ee04f6e1b688bc43"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","0981bf106b683e08acf5bb0e8387389c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","a07b2308f53006fec3657ae86910ba8a"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","f93f45b1f0781962f31e30db694694e1"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","aed08617177845d3a1bb3676820b798d"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","288934ee50f05fbadaa6b05c59728cd6"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","275d82f29369ea185bf1792c68a02ce0"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","a677eb4afc00f2542c883fa33fbd8b1a"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","321e50bff9b6e1186a0edea236ae2117"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","bc997a41631e87336bb25811004ca9bc"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","0828a4b6ffa88ae80ef4120127f7622f"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","58a44997fb6546344d7639a8fbb25b4c"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","d575ad3f454c7dd382a208f544b81ab2"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","88fae2d630cc58b3987f95ed2f51eed2"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","04abd681d6ff86cb4291645a4a9d3af3"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","a4e1c5dbe4fdfcd0b03ba9ec42faaeed"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","06e094833d59d2e03a21bca81be2dd50"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","9ccb5278dad6adbaffcda5e7b3d919fe"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","cd9d228d4b174183f633934c6129d226"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","aef148c94b7641ec0175e3151cabfb9b"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","9196bd96c1cfd75ecb3cbdf645fade77"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","c229a9e2b46498550eb291dc63520e1f"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","422432735ca973b10d82e068c68de5fc"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","3811bf2ed42f7f07777b77a5921f5539"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","34f1330d6b7bb8102770deafeb79c3eb"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","49efb7a24bc6af7a65017c8f27355dba"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","b347e9edbc2432e26ed0dce809234044"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","8f44a576bdaa72e20b129a02358190aa"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","81cf6d9d3dad5e5330ac9521d723a208"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","9f5ce30dd448b4e8677f60e395174e44"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","6f8a2f1381741e2b7c1c733f3c71ec18"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","0ef9d3369fe031fef95c80b38f0086f0"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","b58b70f43b9d2d63fd423b516737df44"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","bf957b58b4ebc03b43f617c4bfaecb50"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","f1bac551f57a3318c6a7aee8f13c819a"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","ec901a3817b26b8a9dedf683f0835264"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","3b6bb2e824b06f695432ae927ecd0dac"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","3cdd482127781095d2b3267d7142af07"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","1b99833bd81dcec07f332ef681f431ab"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","91f81818a9c50bf61bd1811365864a41"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","ed7a6911bf395b14945f1dbd243a075d"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","91d820db2a180e8a7e475c35c09ea8bf"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","0e2512ff67cb5fa82ec12dda2a01eb01"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","42d886ab85d10c430d8d029ee274574d"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","846f6dc3bb3ed30ebe605cd76200ed8e"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","8d2c82ac791c1497e8c675b7e307aa26"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","2273525df96b2165d9fecafd6d1c1021"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","045b2308047766d8d3e37cd233e04f7e"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","785bb59b1785bcbcd60689aad4c7cf14"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","6c69ce26e837c03b22b941b087392527"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","405417aa5c835187096fe6c140a82f25"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","194f58b4b80fb0e77fbaa5324c7927ea"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","d8f54b09ca3c6288b7594fc669c49ed3"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","df534c558513dd8f31462f2c76a23c5c"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","bd6a2d7d7c221ac055ada52c9036d3c8"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","bce51cd66dd92afd755f08ba79419f28"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","c01da7521ffd55c0c46b47db366fbed3"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","cd054694a3aba3df64edc3a0f96e3be9"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","25097d42a4e6f1cd6ed7d43207682171"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","d0486562d237ee23a66e23b270090653"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","0a42325466b7aa2a6ff5686d6f6d0d8c"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","0aecbdb372915e27190d201069339257"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","0d9c8de46f2a7522e3f8775cab17aa20"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","158d37f75fdd5b8cafd209af593bdfcc"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","ef2993777337d84243cd6358132cd774"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","053ca1d7a9f8ab391053aa8b283016c9"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","70d4357930ccc4cee675185b130817e8"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","eb332121237c8d145471904269db5be9"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","06923e2a7e1db200bfb6ef27b90af3c1"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","bcbd8654f0f9779fdfb7b6c8196e2ea6"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","bdfc726df94c8900d956c7fb4f0fbac8"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","42d54bd07e4ed9cef1d09b3a41d9908d"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","7c10673b895a0b0d096f55f9788416b8"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","a496a4870271fd624738d62d94ffbc69"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","ae8f7182098021ab4e85f494475c0c46"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","2b20867899e172abfbf0959ed5d9e793"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","dab78301d716875c2485d345c01dded8"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","fb08cfa168004384a99a92e95e4006d2"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","0766ac13c40e31a19254547e039765f0"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","f3241c3efdab3fff35fa377e106913d2"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","a8e2e309a5b188226f2bcb488a9d2e1d"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","6ae7e485831e379ee26759f9cc7b99e5"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","f9284fc1a901836c6477da386f9cf9a5"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","6964d96e1b5b7fd13b5c98b59079865e"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","7ef6f5254cfc54412cdb942fccf79de3"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","83f09bb6b60cbc694e3e79838eccefb2"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","3000490b56b7f1b9cf3c63d785e4f4b6"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","1c61d4f28a23cee25fb5d861836ca9f9"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","b2ea7a9ec124405baba357f59b53c2e8"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","f573907e15671590cad9e3fa16f1234a"],["C:/lmislm.github.io/public/about/index.html","3edd8ac6eee23652da158fc93a8c55b5"],["C:/lmislm.github.io/public/archives/2016/01/index.html","328eb2667131e01e8ea58fbc03512310"],["C:/lmislm.github.io/public/archives/2016/03/index.html","d61d003c4585ed19d45f6f0c48e4e2ed"],["C:/lmislm.github.io/public/archives/2016/index.html","8f88ac6725258ecd87f922cf54c14556"],["C:/lmislm.github.io/public/archives/2017/01/index.html","b7ac4600b52a65d44d7333b46dfeb9c8"],["C:/lmislm.github.io/public/archives/2017/03/index.html","0b65de76be08415199c50e3958f7a705"],["C:/lmislm.github.io/public/archives/2017/04/index.html","03fb7439b174b6492eb732b9e8eb5dae"],["C:/lmislm.github.io/public/archives/2017/05/index.html","a2fc53d604286f8d4fdb4c8155693ff9"],["C:/lmislm.github.io/public/archives/2017/07/index.html","efa3daf854c18568ff897814d5a0ccc2"],["C:/lmislm.github.io/public/archives/2017/index.html","c57a65085aaa8da0984318c87fb9327c"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","3c0b2b7441540674781e0f8ad0c07061"],["C:/lmislm.github.io/public/archives/2018/01/index.html","f8b1a91725867f1750b129db9f7ff149"],["C:/lmislm.github.io/public/archives/2018/03/index.html","a5ea6f977c332fb0762da1da02fdcafe"],["C:/lmislm.github.io/public/archives/2018/12/index.html","1f090b0680d6dd324c17180a5365e7d2"],["C:/lmislm.github.io/public/archives/2018/index.html","4dc3bf8829697622fe56bd18caa44b29"],["C:/lmislm.github.io/public/archives/2019/01/index.html","73ca63a2dec716d5ed4f91fd363edd18"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","103d47c3613a659248e16ea0c59942e6"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","a55937c39930af64cb9fc59de0aeb41f"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","bd3a8487d17514cf3eb78bac10303e10"],["C:/lmislm.github.io/public/archives/2019/02/index.html","71ab69b5f18df2905fe716088ba8c3a1"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","a96e1b14d66a173445267f256f8fd51e"],["C:/lmislm.github.io/public/archives/2019/03/index.html","acff06cdb8ad11b19d863589f1ea8538"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","a9401e637311f3b5d75898d4b480c75e"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","5980c2737f5c06453072c774b8743cc7"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","f0e19e68f8e467e8afdcb4cd82a1ab0f"],["C:/lmislm.github.io/public/archives/2019/04/index.html","e9cbbeed10dcf98c234aa1ea746373e2"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","4b7352cbf7c06d89506ed417c4e2efa7"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","aa98594a6da4b0c3297927c5221b179b"],["C:/lmislm.github.io/public/archives/2019/05/index.html","0f9f0a899887870995ea0d4b379ebadd"],["C:/lmislm.github.io/public/archives/2019/index.html","a943545b40a1e88676113de577301b39"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","cd298ca55911ae99a9cddd7c4a88a791"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","85a02b9b6e1d20ad2bce532afd6af1f5"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","57940d696128e5ee300538a1e08146ed"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","e5507f73fa2a92ab327c662ee90a2273"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","cf60671157353edbdf86e5bc1643fabd"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","e8d8adedf886dacd6d1b11ae41b6c9cd"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","b7a2b5d79ae9a3210bd99f8b80be6b30"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","8883663b6091d0874d1ccdb80f310c6c"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","4bbff5ff76c34e822b963867bf157d50"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","7514fb86975daaf5f7c45a396d18a071"],["C:/lmislm.github.io/public/archives/index.html","031c5f60b56cc7fb891cbda25b01e74d"],["C:/lmislm.github.io/public/archives/page/10/index.html","a8107c079d20e859311ae22430ec42da"],["C:/lmislm.github.io/public/archives/page/11/index.html","21613ad7a14f4be7ea3078e9fbb1f57b"],["C:/lmislm.github.io/public/archives/page/12/index.html","569f543b738545d7383e1669c61fb473"],["C:/lmislm.github.io/public/archives/page/13/index.html","8261ea20ae228b959af72070bfe24450"],["C:/lmislm.github.io/public/archives/page/14/index.html","01ccc6211d08d6b7279a0cb5863b9cd3"],["C:/lmislm.github.io/public/archives/page/2/index.html","1fb9aee4accdeb2c6333ad7b53496bf7"],["C:/lmislm.github.io/public/archives/page/3/index.html","f166ec868818c35c7e75455d3489e943"],["C:/lmislm.github.io/public/archives/page/4/index.html","05c8522c68387ca90779cf4675737655"],["C:/lmislm.github.io/public/archives/page/5/index.html","9fb27463c73a603799d7202ef811328d"],["C:/lmislm.github.io/public/archives/page/6/index.html","793b0508d877883817839e90e329d7a7"],["C:/lmislm.github.io/public/archives/page/7/index.html","ebab8cd3fa6d388e0b9da2cfba6cf2ba"],["C:/lmislm.github.io/public/archives/page/8/index.html","bf284a8a5ddc1a9cf1e9a9c610bff1db"],["C:/lmislm.github.io/public/archives/page/9/index.html","b0d42421c39a926c5b2d68594ab905b4"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","f1578617695025119f1270875a66b2b3"],["C:/lmislm.github.io/public/categories/index.html","732ddc18232ad4856a9790f36006a3b0"],["C:/lmislm.github.io/public/categories/xx/index.html","db6371f792d038fc456c18efba04eef6"],["C:/lmislm.github.io/public/categories/学习/index.html","69f72b758434babcc17fba4f28613453"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","f695fe962af95d9c70e472e6906db8de"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","84f1e568c9883b46ea89ae9c0bc5bc51"],["C:/lmislm.github.io/public/categories/工作/index.html","ef5801a3ef4f04f5e0050fe1da4d9565"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","c0386240c116ef45665e79faef567207"],["C:/lmislm.github.io/public/categories/技术/index.html","331be53ff27de17d178eb340c4b70906"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","6dec2cde9c0ba094b6b8a0cc34c7ca01"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","0aba09db0d884ad29e3b8371f6a4386b"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","b8b1c3ed7d5e0a565b9aa5164c3b5eee"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","8f2370ad1d892f085051bda2d3c865db"],["C:/lmislm.github.io/public/categories/日常操作/index.html","bb941863cd636cc3912f7e2c06b88f96"],["C:/lmislm.github.io/public/categories/生活/index.html","57b7d22462be3afc9a91fbe9c4da094b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","00d92c9a8901f929ff18b272d48a0aef"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4b61d957b3d1b9786265dc8fa853cf97"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","491df469d2d780e172762a676ac5fa32"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","7378301e4489dc602de6b376897b5b80"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","88f816893969c9ac4232ae2a2a81ef1f"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","02e0890eb8795eb31be34a0edbe15eab"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","81fb1984af05d702491effddaf4b6b3b"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","e744aad6e1adf8c889c80384ffad13ce"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","fa1450007b4ad3f10ed17253340a7d03"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","6ec0d188db3ff2d7a64102c24c59a213"],["C:/lmislm.github.io/public/page/11/index.html","81d3508409ebbb5496043ed348c50639"],["C:/lmislm.github.io/public/page/12/index.html","acfd86ce23f9500d501b691a5e87c3d6"],["C:/lmislm.github.io/public/page/13/index.html","5f2e5cfb977970dd8e56b7acac0af9cd"],["C:/lmislm.github.io/public/page/14/index.html","cf6341979fdb75ebcd323ed21c6502ab"],["C:/lmislm.github.io/public/page/2/index.html","2aa6b0d351b83a68aa1f975862500abe"],["C:/lmislm.github.io/public/page/3/index.html","86cdd5bc0ca52dbe1337fed8856dda0e"],["C:/lmislm.github.io/public/page/4/index.html","5fd03d373c8a34970fb2e81cec0ffff8"],["C:/lmislm.github.io/public/page/5/index.html","9855fc9110f4bd61030721d714f14e4d"],["C:/lmislm.github.io/public/page/6/index.html","8eab4991d61d7965e403a8752132ee14"],["C:/lmislm.github.io/public/page/7/index.html","f8650e284bac377b8d9088eff74dbd75"],["C:/lmislm.github.io/public/page/8/index.html","37505465cf24a8f30e1dba68a3584f82"],["C:/lmislm.github.io/public/page/9/index.html","41c877c6845fda6a7f64c550cd3196bf"],["C:/lmislm.github.io/public/tags/Interview/index.html","372f4cb94bc7264b8d7304689968b722"],["C:/lmislm.github.io/public/tags/JS/index.html","5f8d67e5b65dd8d020f7ba311d931071"],["C:/lmislm.github.io/public/tags/acm/index.html","b8635940555fb6fe32c6f3ad878e6eea"],["C:/lmislm.github.io/public/tags/c/index.html","2c4187e3143788bdefc3fc4d3ccedb20"],["C:/lmislm.github.io/public/tags/codewars/index.html","fff9ef4bb6c40decaec7c22793254929"],["C:/lmislm.github.io/public/tags/css/index.html","92b43b7a13564474b9a37fab5c4d7334"],["C:/lmislm.github.io/public/tags/git/index.html","c1e1c8554aa82ad872ffd88a82ab6b30"],["C:/lmislm.github.io/public/tags/hexo/index.html","dc2857d1948eeef215f62203d52ad792"],["C:/lmislm.github.io/public/tags/index.html","bcd913721b878f24b9f9b96e31648627"],["C:/lmislm.github.io/public/tags/markdown/index.html","4634c6963c945c8f7577ef332dcea5b8"],["C:/lmislm.github.io/public/tags/poj/index.html","f9a060c79bddb03e3bdeae220f1d66b9"],["C:/lmislm.github.io/public/tags/shell/index.html","2a183f1d19d81ef26268861d611d8085"],["C:/lmislm.github.io/public/tags/vue/index.html","a936c4bd4353bf2ad0010ec30c09b680"],["C:/lmislm.github.io/public/tags/xx/index.html","c6b5b6a54e3878a7b618ad9e2d5ea156"],["C:/lmislm.github.io/public/tags/前端/index.html","f43acf7a45318014ac694a4a512b85e3"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","b03f80172c947d6059a41925cf4762f5"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","3d0d1111c25072dc98c26d29534ed67a"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","97fb429cbcf4e1df13b568bd26e51962"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","4c810294850a09fc3e35f725be1e61df"],["C:/lmislm.github.io/public/tags/小技巧/index.html","644431164ae3c60e5f452007f30d1aeb"],["C:/lmislm.github.io/public/tags/展示/index.html","1aef52bdc10a5f9c35f3e36a1b183233"],["C:/lmislm.github.io/public/tags/工具/index.html","49efddab6a0044c570119fc4932f6d89"],["C:/lmislm.github.io/public/tags/感悟/index.html","0acd1bfe451c08fb8c1870de07ed75b4"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","66b4d138160d9a9c96e35338bf0037ae"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","ad9c8faa7c848db1973618cdbb7047be"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","8ac8e53627c1369064009039c3da09f2"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","f95d63dfbf9f9aa25af1aa7f423f1d91"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","ace53ddb867cced399fdb45df264f80c"],["C:/lmislm.github.io/public/tags/练习/index.html","a291512b0f5ed126428c991a93ddcb7f"],["C:/lmislm.github.io/public/tags/编程/index.html","efedfaa457211342905db669f41c7d90"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","165ce4c5cb4a2cd46845bdff32be1a33"],["C:/lmislm.github.io/public/tags/运维/index.html","63d77bc01698bd389f62b3a8f7fa5d19"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







