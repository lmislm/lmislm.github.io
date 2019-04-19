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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","da5d632c36b74ae7f6fb4a05af4dd9f3"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","3f472285b4e2ff018d34183007de3aec"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","ad3475d33bceb819240f8c9d2778cac2"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","06593d4494ff92651ffd1c9545b2ddab"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","128cc01aa214e8afdd74a2699c8ed90d"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","024068984c88847a46970bde3bbe93a3"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","86e6cbdb9874c07465d660b844a99ca7"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","fa6b7a6758f334cfdcbda9be7931547f"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","2741b050efcd66efb12e43980b6c6c00"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","85ca068aefde2269aeaa49c44442ffe0"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","713feaf56182cd6edbfc2fd4b852fcfb"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","191c4641c63ec5d32fa82e326a202f24"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","29ca4bc7f8a87bfb269a40aa5fa24f76"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","3af736c79cd2f7633a7dc226e04c9d8a"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","f82eb065d377baa497d893636e20257e"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","351a2c48455ba33c1899ab35daf2f4f7"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","064c346d7ba3422503586c53b1714968"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","b28f996a11b13e8aa96ec8a088f93729"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","45d58aa03eb0ed0d4bcd05df39fcad16"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0abde31b940e5b6dfd9c98cb142cabd3"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","5dbf58be84c3eadd3325ca6ffdea14ff"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","454ecfd4c52a2011402b55f59efe7c95"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","20cb93b51242b0f2216c432c83823b52"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","72a5b2bcff7e1a6fdd55c767a93c9f0b"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","9c8c1c5763458854528be416e52101d7"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","39d4208c14add37c4f4c25af9d136cec"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","a2a0a6c3367adcf64b548f9d0fb04092"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","321a45e12ecbecf79b6cd52d4fa53ff3"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","121a59bf74efbc74e1dea61f5f13d3ec"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","a34eddf8b455d76471051822cced14b4"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","70a38b712384786a33bebd3a67926118"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","d8aa490e60410eb89e6ce097a8fa1edc"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","430cbbf8649b26a5d27387e30cd29251"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","1894fb70aa97b02f932782c2c398586a"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","4d4d8d70c711cd8d6e6f7f7e97a316aa"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","12a67516687fc71809b3c132a884967e"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","8a356853ae6ec2be1398dab177bea46d"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","98a0b261ec2acad1f112f777212fdfc7"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","99f2cb21cdd1b2516a0e20a7d18987e3"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","960411075ae9c091e5aaf16fda52321c"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a1529839cdb0fb050c093783f990e07f"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","c6f9bf5b8297aee00f9a9132148f9a31"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","f266db8a54129b2bc990fba88dd7b23b"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","33a558ab81a130a38a92686005e14825"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","34d45faca9da5c81a2e15d28b06e41c2"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","5d011b1f32793e9084b1e5a9087823e6"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","33756d073b82e89f440e74720e26e246"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","b037ce928fd44c93af64e71e9bec9f16"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","c89cc1fab5cc837472c1bd380a006cd4"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","e29c3345b7881e699f3b77f4a561dcd8"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","8c5869d6ad858b560222a019dfbe17c5"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","0a6a3a21797b7c8dac78a098d16263a8"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","b3f59521345a1b2b8bb639a9da280e43"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","ba6b5d1a4586fc3ed55fe0f8f247ed7f"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","b072d31fdb53783388061f971befaeab"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","682b74e1087ab8942f474b3003f22e19"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","363030650cb53fd5ba73014836d99032"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ce553e7d5c8bb0b8c1f10311c795c956"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","50d67c1129ab449af8d3e15c3bef0eb1"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","f234efa6397039ca9d3b57b729b69ffb"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","9cf7dae7565540d276123f9d45f804cd"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","db3daf98219f042a0f00c89255768294"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","ef1bd68afe8adc1b73e0d2d85c659af6"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","ad3fa8ccf5ad5450596bc8b22aea5406"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","e51a1ca2ebeabc146d86f6325e2820df"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","f585d35d6473b769b44063adb1be29fb"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","a30c6500abffd239b3e2b5521255a945"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","c8e2d0ea52ec44232e6d3a8ee404de86"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","68a0c9520d62768f8110393fd3f73dde"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","502d784f3dc8ab72b1176d94160544f2"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","ded62970e325fd553c5cccc1c3d44917"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","544bb41a0cab4883607ffcf663f7430a"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","8acc97dae9696b1e1810d387971a970c"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","239fb6025c890bd2a18a4d3e0f456f79"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","7e4fa609d4fb913c3a113d8a37d5fc16"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","dde32e67acc369d804cf3c582ec5dc90"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","b1b421c23e0f075c6a44fc7e904250ee"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","cf4b9ce54c96c73b221c1200534ff911"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","09b0e8bd336846086cdfea644295c7cf"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","04a3c0d4bff2d18a67370880da71b8f3"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","1f35a66a25344b064533702bcc7f32db"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","c6324ac8dc306d9ff9728bbdb11f2aae"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","8bc1c40ef9b796380e01f4f4bae8d539"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","97a8da98299b663da846bcde8922697b"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","59e46a120bdf36bef01761c4f8303b66"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","da10f9e71aeeed7557f297a6cd1d0807"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","c0a6e6d40c645e4db9927b6db8225a55"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","4f4920a3e49987ba90b7d15ccbcecd71"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","7c2e094a1c25d8c404f7cefe3db5d6dd"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","0025c953f98b45bd871d1239be0ff019"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","ec00ab850cbbd6863abd037650a3a72f"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","7e610845e0a7dd44b5720e4f88166d66"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","3369089e5b918c8404881bb3fabd0465"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","4f77088350d2a66c120e852045807736"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","ae3567173a40bb5982b19492b67d9344"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","ed59106559ecfc9d1baf4393a3451231"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","2fde938d6588dcc189e00dfb208dd35e"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","8955cfe2049877221af323ee831910b6"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","963a2710b2ccf2139b686282474d51a8"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","ba1b6c5310f3685b85d963de2f6ae8ef"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","fab195a20856f072251bd9d0caca93cc"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","2cbef399011d28550676216346abd7b9"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","b68b5acb0119db630cea910af073f156"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","979fd064eebdad7ed31ecb99e247ff06"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","227ac720d9dd9c64ae024857c3f55326"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","91edde44fd1e8112c83a9ee02f897386"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","48707513cbdc39ed18819391a3d2d832"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","f2378c55d4549f6f4ba08aafa33ba493"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","7c8e1b892f765ba980957dcd3754756e"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","d5eae94b103a3db4f3360d7063654c6b"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","0a9b079321c41cf100d179b37e9248c5"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","a2959473d82541799382621b73c2337c"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","28f0fe82ddbfb482e85303779eb59880"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","1923d72451448cc89279af597a7f4a69"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","02f6dbddc9025aea000920295a87fd5c"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","046cc666d769e00127f330f079f29288"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","cc57824de373c5b7a97afeda376bb57a"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","45c7869c78f5742880752ed5a04a0072"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","e056b30656d207891fb37872d39c89e2"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","7c110cb3af555fa46630bb589c2f294f"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","6cc13cb82ecc939acef4e224ed502891"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","a2a59b32d3bb239a0fea3969f53c97b1"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","96c25f1967f57ba2e05a1e4a5f815856"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","ea32a50de101a4666b02ec7cdb8e922f"],["C:/lmislm.github.io/public/about/index.html","7b4f5bac885351feaaba81ffe8a89a5e"],["C:/lmislm.github.io/public/archives/2016/01/index.html","ad2711a995e683e12fe3d1e194243305"],["C:/lmislm.github.io/public/archives/2016/03/index.html","0558735649c16994407466803b2d508d"],["C:/lmislm.github.io/public/archives/2016/index.html","0a0cc41412e848c14148a94fec37ba4f"],["C:/lmislm.github.io/public/archives/2017/01/index.html","57ec4bd8c3cf7e639cabaec434514466"],["C:/lmislm.github.io/public/archives/2017/03/index.html","17123b3453770c6a7803bf543db96c89"],["C:/lmislm.github.io/public/archives/2017/04/index.html","42fd8d1f189a80f069c00ec555f9fa0c"],["C:/lmislm.github.io/public/archives/2017/05/index.html","259382e8a4a42e8c61da160ffb02b293"],["C:/lmislm.github.io/public/archives/2017/07/index.html","5c02da0c05f89072e927b76be679080b"],["C:/lmislm.github.io/public/archives/2017/index.html","c9823ea56d13111dc67dd463dc8eff6f"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","b80309fd99886dbffeeaf6d06db120c5"],["C:/lmislm.github.io/public/archives/2018/01/index.html","b6249de980c2680f485832b1d143f0da"],["C:/lmislm.github.io/public/archives/2018/03/index.html","976d8c0d05e319fdff6d1b76824c68cf"],["C:/lmislm.github.io/public/archives/2018/12/index.html","1f9815fac7f5155b20be78af6f70a2e6"],["C:/lmislm.github.io/public/archives/2018/index.html","fcaf2e032928fee3f1bba50823e01466"],["C:/lmislm.github.io/public/archives/2019/01/index.html","2b53643ef63d00212483b47372b13499"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","eed469531d6ef63a72e19f5a674986f4"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","49158e6aa79ac91386942cf004608f31"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","83d0218220b1484c35209ead1ae4fceb"],["C:/lmislm.github.io/public/archives/2019/02/index.html","cccf4b8ecc59ed288fea8a7538fa20ea"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","657ff59b3742537eb636193f364761e9"],["C:/lmislm.github.io/public/archives/2019/03/index.html","756f9d2f635662480f180f0cdce0b255"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","9d0435675c136de4c5dea112fe69ed45"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","3d4aad3da2b557798bd51cce2222a050"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","9193ed5446a0f06d6e16b9ed76084e01"],["C:/lmislm.github.io/public/archives/2019/04/index.html","b4c96be942034a9b499a01b60da09738"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","76500fe7820ee2ae5a6d47189ec60068"],["C:/lmislm.github.io/public/archives/2019/index.html","f53f24ba51803dde7f91a3595418ea9f"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","6e44de290c5487db32afd64051bb069e"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","7b2c264f19781bfc053ddb6f56ecc4cc"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","4a8b807b577d3a510ef59b0346dfce20"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","8c94d334538431d8e03e7e20cd989f66"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","e45f7a7a3d2629b084fd955fd85a3695"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","5d8bfcb68bf8d7e21571069815148993"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","1cb8e5b480a4757b0e02adff66e1c5c9"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","27f13268a4e836b0baad365927caded6"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","d61aae548ea752fb001d8386ba208a2d"],["C:/lmislm.github.io/public/archives/index.html","7fc1aa4c6d8b787fe639e261bdffb261"],["C:/lmislm.github.io/public/archives/page/10/index.html","7753222674b171d12d1f97dbc68dcfda"],["C:/lmislm.github.io/public/archives/page/11/index.html","1e0a0ebb1650fc56fff9ff812a2ac7a3"],["C:/lmislm.github.io/public/archives/page/12/index.html","013b7d421671ffb08ed166f97475cd71"],["C:/lmislm.github.io/public/archives/page/13/index.html","f813b6b79cc1a59fda440b27f3c19180"],["C:/lmislm.github.io/public/archives/page/2/index.html","4a0c4b194bdaa9be1e8535b6d423c672"],["C:/lmislm.github.io/public/archives/page/3/index.html","e10c5b05b5f26b349e60e4767a4b6980"],["C:/lmislm.github.io/public/archives/page/4/index.html","e7d2361235c5315ec2c1ecf93dcb9608"],["C:/lmislm.github.io/public/archives/page/5/index.html","1dd26a8a8de66157f52a3d3fd63286a7"],["C:/lmislm.github.io/public/archives/page/6/index.html","666d32f8b6c5f08e1bc04738860ac18b"],["C:/lmislm.github.io/public/archives/page/7/index.html","a3359e583e5313a4f9b66cf45d9915b9"],["C:/lmislm.github.io/public/archives/page/8/index.html","5f69b8c04cd0c2e820f19d335fc4433c"],["C:/lmislm.github.io/public/archives/page/9/index.html","b80543b020b2e1e0e41d4ff0bffabf4f"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","0a37cf59c28ff77113aa5b1f2c27e8d7"],["C:/lmislm.github.io/public/categories/index.html","76a0c4571fa5e538188c8b2fe955ea65"],["C:/lmislm.github.io/public/categories/xx/index.html","60d9defaa1f3d808fb3f93c84bc373a3"],["C:/lmislm.github.io/public/categories/学习/index.html","322a1a32d1bb5d5f00e13e79554b8819"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","257342d61aa11e72471f352c7ff97cf4"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","5943f462675f3897b5dd9f888adf61f6"],["C:/lmislm.github.io/public/categories/工作/index.html","9fcfd84d734883a7da02d8c472b63d53"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","d5a87cddd71447295096cdab54ba1776"],["C:/lmislm.github.io/public/categories/技术/index.html","e99220fa909d6e33164dee7196225b61"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","8537cf1e259ff4fcfb9cbc28b8682caf"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","49161cd43044103a4d0a41173ae30acf"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","9a9d8d1c0d6698895e488682bfe50f50"],["C:/lmislm.github.io/public/categories/日常操作/index.html","bcae5f80d1d720c6293f01d52e19f004"],["C:/lmislm.github.io/public/categories/生活/index.html","9e389e8bea60e7a997bbbd2bb5756e37"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","716a8fe9b501dba6a8baf776a2640be0"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","7cd0bcddc6c3b4e6b9be5e2ad8bf0b0d"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","e1757061fdd1ff56c0608c23fdcd1d13"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","5d19d9c2de734a1fb0649985ebbc626a"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","70dd72762511c9f36980a7c05d6e7c9a"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","22644dc72a09860354cbb118e9078662"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","0bb18f04293f25b0ede83ad13953d740"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","59a2d79651c9ecc2a4b94c45fd37e1a3"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","6232f58b36273b5b5194e64eb0d001bf"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","6dcbdc2f34052b0822e90b42504746c2"],["C:/lmislm.github.io/public/page/11/index.html","494db98429ed07a587b1f92b99e2d354"],["C:/lmislm.github.io/public/page/12/index.html","cefa4141cef4b6c662bb12add537616d"],["C:/lmislm.github.io/public/page/13/index.html","6250da514737109581c39772b6ec8604"],["C:/lmislm.github.io/public/page/2/index.html","08825ccb6955bf8e1e7360de05150e69"],["C:/lmislm.github.io/public/page/3/index.html","e83c265c62567baa15902cd3328268a9"],["C:/lmislm.github.io/public/page/4/index.html","2e8878336d5712b7f059e5475f66528d"],["C:/lmislm.github.io/public/page/5/index.html","d7f7c9168a74aa95c46427672b2eb404"],["C:/lmislm.github.io/public/page/6/index.html","77eaa5e5d34d60864705439b26bcda6a"],["C:/lmislm.github.io/public/page/7/index.html","99ffe8bcaeb0d1de8a56aedfe0b1cf81"],["C:/lmislm.github.io/public/page/8/index.html","45bec557c97392ad1e493f87ba23c1b1"],["C:/lmislm.github.io/public/page/9/index.html","ed15365a55b028df1215f74df4caa973"],["C:/lmislm.github.io/public/tags/Interview/index.html","a7df809d867c8448c29dfa4026ef45a8"],["C:/lmislm.github.io/public/tags/JS/index.html","37a8a2a5e79b3025abfa7488d9f1424b"],["C:/lmislm.github.io/public/tags/acm/index.html","c8802da76d64bfb69be38e2bf921b860"],["C:/lmislm.github.io/public/tags/c/index.html","1161756b9b0a51c888f718fe4c009873"],["C:/lmislm.github.io/public/tags/codewars/index.html","5e1f2021523be2f1d49d17024102bf0b"],["C:/lmislm.github.io/public/tags/css/index.html","9f26c0a2cd1952c9c0a3ed0b6f59e83d"],["C:/lmislm.github.io/public/tags/git/index.html","83c085ddd378a098eb52f4ad4c438e8e"],["C:/lmislm.github.io/public/tags/hexo/index.html","af4493b2dbf9d4f29b43ebddb51652de"],["C:/lmislm.github.io/public/tags/index.html","90750bd9ee5586a164ef99181b512e3e"],["C:/lmislm.github.io/public/tags/markdown/index.html","4e1c8e4842999a455d5a5a2cd08aebd2"],["C:/lmislm.github.io/public/tags/poj/index.html","aaad7c120f8b9c82ba17c04368ec926c"],["C:/lmislm.github.io/public/tags/shell/index.html","7b5bd233331cb92109157b9e38cc034f"],["C:/lmislm.github.io/public/tags/vue/index.html","0c4b0ad5a9c1b8f73b37949fb26fd7c8"],["C:/lmislm.github.io/public/tags/xx/index.html","4c5d498d86aa8ef3d2a1185060b78b14"],["C:/lmislm.github.io/public/tags/前端/index.html","12773562d3d6b315bd151c6171e0f2bf"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","1b8514bed7a971d6ba05828952743c76"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","03b9b995a1aa13a987b2098b5083045d"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","744c137f6c391229662e5f30d4ea3104"],["C:/lmislm.github.io/public/tags/小技巧/index.html","dd9dc52d34f0c73fba7a4737d0d07d07"],["C:/lmislm.github.io/public/tags/展示/index.html","b0d15e25985f9c5022f0e3d288620788"],["C:/lmislm.github.io/public/tags/工具/index.html","284133c72408abf5ab2a0f701c7b372d"],["C:/lmislm.github.io/public/tags/感悟/index.html","ea0261c154e77677444dc42f1d93cbf2"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","2326c7ef63d3faf130c98e93f9affe6d"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","a29e777a5c543369526075f67d0d2f6c"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","e1dba57280dc32dd2370ccb571195386"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","032eb7c0466b9a316e3dfa2a84b56bff"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","004a477523654d9934db412e7691e5d1"],["C:/lmislm.github.io/public/tags/练习/index.html","1e52c4ba53be3c0f0457ee68c88e813f"],["C:/lmislm.github.io/public/tags/编程/index.html","aa4e501c0993786cb21348654d5dfbdb"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","6ea5f434c76a4c28799035e7a88b6c37"],["C:/lmislm.github.io/public/tags/运维/index.html","919da520dceee98b4d6dcd85da27e3d7"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







