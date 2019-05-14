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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","c5db4c9691ac9457b0eab1d2b1ae3d46"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","581533c5a406d4ad4242a7ce9aaa93a5"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","9788a3e0b60c990f3303966916da8fbb"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","2f00b848cc5b4d67bc959867e1667ffc"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","96a789b7ca1ed80f9e361428dde2c083"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","43ee72c625b2147fad44981d79239b11"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","9f389f2a5b4fffb3cc6aa7bd972b8bb7"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","ce31eff3f8c026c35e2a4b074cc44670"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","735e9447a959e8e2c74ea28f927c6496"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","07efcc5948848fc0494aee4c20e5de82"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","8dd3a3cc0c27218ec108d54b41f174f7"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","981523f64a3bbaced1381687cfd1e51f"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","656abd43d3577b51937bafff7fb7c20d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","940b43fcb9a62f9affdbee110d7f7683"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","72cd632f3a13ce1dde50e72151d5022b"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","03d7765ed51455557fb71add4e608edf"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","b46dab3649e04722f6229a6b10925c95"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","b570ed64492eeba85cc9f2721fbad161"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","6c2a5280f5f6fc2ead0496754c2c73af"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","9628146cec6a8d2bb7953c094f598b1f"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","ec885d0351b8a92aac76d867a7d043bb"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","6e50cf6c3efde0814a0de8feaa4ba840"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b995004d02d103e59c39b200c3ca904c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","4e7f46217e30750ae873e2288dcef26f"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","5238acfbab30e3541acf385f16b762fe"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","e0d252ec8cc166d4b99b080c5ffd8710"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","344d8e983bb45301668e99bc70a7c2eb"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","59a3f08c1db47932292a26a83d0e62da"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","af2b7a8e9537e8a28a1dc16614acc25a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","1297837612072a58d18090fcb8734804"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","9e69dd0af4c3d4dcd78df3daa7d2bc5f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","60a9cb432d9b3ae438516a406d790c2a"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","95183adb12d2d5ff65001cb1a419bd8b"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","e64fbf8eb747ad5a106c7f7efdd90f46"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","cd75cd93a524998c0c71bc8b515e1d0d"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","af32241f3fb1c9c3e4f68a1aa3e5fa80"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","51693b77d88cfec50a2d1b00ad073d51"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","3550dd0b1e9dee2b5358d55096344bcb"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","63ae49e1ba4d139d4445907f064ff8bf"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","0befca5858f6437d226feacd83f6da2b"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","969c8d5bfb4ef9c7394131fdd671be9a"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","665428a32156566944a19d629a04ec6f"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","f1f35b2cab5a532917254630ba06a165"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","9f0230c11322cdea95adb3031d670bf7"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","4262c4f178b6e4cfae45783aadf72319"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","783097e470817aa32d9e48ff85a603a5"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6b47487bb508f47613cbe120a6f46834"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","9dcdb5e03b23742702b6a221e82dfb9e"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","5668f53a55cade3b8d8884b6b739d59d"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","bce731b954aaa5fe5ff4e4741b20adf1"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d15a0228c0e99d1ade0b7fd04ad97719"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","bbbda70c97c0f67de0aa5b7d9efcf1f5"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","db02c9b2f6313a0bfb4a1f628f2ffdcb"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","d698df1adf9dfe0c1bb7fffaa95c374c"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","108d1218e7f6f0808c7dcd1a7657889b"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","01f391c6c33cbcf9989b083596db989d"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","18f0df91bf9e824a83185962c17ca87c"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ea202401776893de8e2ffef77ce3e946"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","67a80a137d4d79eac2679920ed37471a"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","cddd633184bfb45bde7b13f76343741c"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","6b41df2db51cf90ea8f79f772bc2a664"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","22df65149ac013b9557ea0316435b32f"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","a2ac3cc6703a0850ba41226d18e27fa9"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","91f3e55b07b3b8bb82217ac6ba37b6ff"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","45b5941bb678007f1fbab0b3844c2abf"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","0843f7558b00f5ad875c6a44fa82ae94"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","605a5dfd79d5970bed1e635ce620fe18"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","18c794b8031d98260c5634384d73c4d5"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","d6420ebf46cc57874ddf9bdb71655620"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","228e00d1e4d3852c71f41f288e337101"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","0b9ee38bd62aee7a352351a6fad407bd"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","46b0dd7174a444862991d4d80b0aa73f"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","7da3505ae3de60fd41961f7a38aa14c1"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","85ec4cb77f2bd9e868b9a605a2e24959"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","5a861013086aabc03f79f4bdb1e4b5e2"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","43d86f0eee8e45fe4e6ba5d4b9901aea"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","84cd0ef800752ecaa45b65dec8c80536"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","8a91e1243055a9bf6c6c6cf90d9e9fb8"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","a5d71f5252d03aea0403098dcac47bbd"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","79e58c119fc315132960a2fc281ad740"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","7773c4f35a6f63a456b027d501f2f84a"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","d1a9c375cd62389999490e107942ef03"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","760a22e51297009ab2b605522671b625"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","c5ec7138930277ca6be36da7e01f7179"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","d6ac14a28eac374df475db46b921b1df"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","aa66888b1dc74a6a310a90b96d427adf"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","37a0644bef603e2d87e4529a01e53467"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","eaf4c0adeb6c087c0ddd7204ea13ea5f"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","3c52c8444682ea3e3706f7f72d25f93f"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","dff33b4e5233a3d1fdd5b27aefb87d51"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","e9698f526cbd945d58c9be3c5fd0b965"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","dcf6d1518d25ca220d10dfcd0a33a107"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","6890ae172950ed184951369363424ca1"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","917477cbd08d551dc2bc73b4bc087d51"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","75d5de1ea702e24614735764e272d397"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","d233f0607a7930faefc7b38bec40d1f0"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","d7d227175a30e86dda7c33cc428956b0"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","ad59e55c513b060b5dd4617e5ce2515a"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","a012b849ab2b4f4c5a48710d4204c9fd"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","67dd6e28634fabb1d8ad656c0f291eeb"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","9126505bdb17e2821d3592d692baa85f"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","464e3ad8fdc5063b28d64073cb470f84"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","5a946c0025a8c7fa7537ef08a8e1a0ca"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","c45040d345b083637da92b44b9be48fe"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","b752928d17fe5d789f10f39e52e6386b"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","382a1d7f0b774c95c7a3d8a82c3d1651"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","e7deb53aa4bfe78d94ada4f7eee4d8ea"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","84fb0ce4d3cd59ec1b1d2da4b4c10be8"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","d73169f316639d761847f12b4540aca6"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","6d4037401333c47d446d5574a1adbf68"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","1b667f307a75aea49c83c776381482ea"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","dfecfd7852530556ec4be3907b807228"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","eec170bd3e712ccde13418fd537ee9b4"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","70322292897ab1b06bb9c33a1b245c4f"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","ca73186f9c9977b85588253407672e21"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","de68b2581c9f23e5db7f45f18cdf2df4"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","580a4d01c8d95500a7514d8912f87b63"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","e5f3b5b081a29b7ed93e4ab9714f53d5"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","d57f40a2fd85e03adbe6f57769010845"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","488467172075bcf47b4afd3fa5eade5b"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","22df7b7785c8fa048d0cf394e17a22ea"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","d41233a11558a38be60e437a954f5c87"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","c43e65e32a85a9f325510fccee3d07ab"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","1dee9cf5c7a81b9657d66ce62989d133"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","f43c2e038544d52462a100d37a2f6374"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","70136e999ef93cf1f57c3df65c49443c"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","616f85b880cdc59259b551ed1f87105c"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","788db8ada43005e2b223be12b76de9a9"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","dac7fd09dfb489671bff833b91d1de25"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","56db45ecf4d4dc74f4f2ac25a77139f2"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","1bef5f138d1916d2ab4611e297038902"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","38118c05168b8c9bae147554131e43cd"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","573f859593df6a38c425e0731e429664"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","c07a349a2285b6f3c67d3d8f352216a9"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","7f2cf8eb7b4ad782117d07da6bc8eb83"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","77748a31c683e461ef376c049cfeba91"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","f748e9420665c56e738f453b4bc6b223"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","0a7068ad4405b2d17bf742f5aa9e6485"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","3037d26f98f14b1519113e370cf35c8c"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","19eb0019bd5628c639dcf377e57a96e0"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","597cdf603f16857ab7cd0b8876a4a838"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","a31c5f2ef52eefc9c4651c7bfb949cec"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","6d9af95e3d954ce2095fb68626dba34e"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","bd04f465577496671e4f2cee0c790fcb"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","7027c69b2716f6f9400e913bfcf53c59"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","c0a47013a25eb851c66b2f92ad56a18d"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","78055c8cd50c4c04e692e986004808e3"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","3f6c303fa69b2a5f44e60fb711298196"],["C:/lmislm.github.io/public/about/index.html","37befa26db714f4f765eadcd14278058"],["C:/lmislm.github.io/public/archives/2016/01/index.html","8c85d53287013a1399724ea7c8fac712"],["C:/lmislm.github.io/public/archives/2016/03/index.html","b6bff451993e99feafd424b2ce0220e6"],["C:/lmislm.github.io/public/archives/2016/index.html","4040f6e3f1bb0a43d8265fdbd8885243"],["C:/lmislm.github.io/public/archives/2017/01/index.html","c5c553ed95568962f025543286a56d43"],["C:/lmislm.github.io/public/archives/2017/03/index.html","0396d3c41664a0c31f5a013fd8621e45"],["C:/lmislm.github.io/public/archives/2017/04/index.html","9dc4d6a5c57b0e8c2d9d95d5d317bada"],["C:/lmislm.github.io/public/archives/2017/05/index.html","70d4fa13a2927acb54ee34cdfa86a5e2"],["C:/lmislm.github.io/public/archives/2017/07/index.html","c4d01027594775558648cfdb0d36034a"],["C:/lmislm.github.io/public/archives/2017/index.html","981d069020d0d191dc8f9c0aff788629"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","e00f3040b7d758f69a15cdeaeb46a151"],["C:/lmislm.github.io/public/archives/2018/01/index.html","58c87ac59e0a26f2b43dac6bb23c5eb9"],["C:/lmislm.github.io/public/archives/2018/03/index.html","bc24252d71c69983f3f27459c4bde5c7"],["C:/lmislm.github.io/public/archives/2018/12/index.html","fb4f13f36c6d59d699a809129d28abb5"],["C:/lmislm.github.io/public/archives/2018/index.html","345b6b374b6afc01dbf18feb33c211f1"],["C:/lmislm.github.io/public/archives/2019/01/index.html","b82748abc7c9ca15459eacda6d6320c6"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","3842e6ee7f092439eefb23a9b9f3b906"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","ce78957a175bedf3bba2968e840e3c54"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","f5fc0b40d6514322db52df7f99efd99a"],["C:/lmislm.github.io/public/archives/2019/02/index.html","f5976beb6ac4ba8f468df54978b1e504"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","1c916304922e8c1ffc1566b615892fa7"],["C:/lmislm.github.io/public/archives/2019/03/index.html","352ad2fea00d358b5eb264ca08c6d880"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","0c2ebb27dd0ef8a2c5998bdb6b4725d7"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","9685dc26164790c67de0e02f067f198f"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","75a6de86fb3f907d61f6e9a4fe97ed8e"],["C:/lmislm.github.io/public/archives/2019/04/index.html","60ee358f01997bf94725ec9bdbf276e0"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","805b86eae3d92e1e2c7b09420d1defaa"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","58735c839f54b5ead7f934ff9a9c933b"],["C:/lmislm.github.io/public/archives/2019/05/index.html","55e026a329af0b0b09c8400751301759"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","60fa941b400dadbc1ebc700a536d908d"],["C:/lmislm.github.io/public/archives/2019/index.html","17d192a5b386f915de8b66297e66c142"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","c01d1356bfa28bf96c3a98fec1318c4e"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","fbc49606e874c902a85dd038974a5f47"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","c3ef0042a4e89c675b09d7cc534d0abb"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","f38d82a3574cd3aeb7b1a1c90cec1974"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","9c49e0443c5f6cef8bf48a10cf21d2a5"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","2be06d177c8ef2dae550b56eee5db4e3"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","cd8fa2ea37121d9e971a0de1fce9fbd3"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","ebe4f6b1745d1baaaa149628ce41a364"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","b10f7ebf5e1297ea3ce39f9108cc2a37"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","df07c537fa31b9a414de765761921e04"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","aae678816f505232bf3f5cdd6247cc73"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","8c3795672961430c6ce641479f25b89a"],["C:/lmislm.github.io/public/archives/index.html","1b912fcfbfd769cf1fefd209eebed33e"],["C:/lmislm.github.io/public/archives/page/10/index.html","93efacaa98d52e089dc9b2925c78341e"],["C:/lmislm.github.io/public/archives/page/11/index.html","b4a6d8e7370582959684aa92f4a7b5f5"],["C:/lmislm.github.io/public/archives/page/12/index.html","2b87e583efa37c1084f128a78bd6eb6c"],["C:/lmislm.github.io/public/archives/page/13/index.html","9767b65eb6267e1a18f8972cee543d74"],["C:/lmislm.github.io/public/archives/page/14/index.html","995c2d7699781d4efedc7a0af087fac5"],["C:/lmislm.github.io/public/archives/page/15/index.html","95e74a6669b5d2467d7890199ee53054"],["C:/lmislm.github.io/public/archives/page/2/index.html","b0a0470e4e70ffc4a162cc355295fd23"],["C:/lmislm.github.io/public/archives/page/3/index.html","5c6569ca0061350795f911e046e3520f"],["C:/lmislm.github.io/public/archives/page/4/index.html","374b2e26c1f26fa200d1538ab8a1cd5e"],["C:/lmislm.github.io/public/archives/page/5/index.html","3010a7dbcd814d9bd5a918155494aefb"],["C:/lmislm.github.io/public/archives/page/6/index.html","14f34cea0591925f55c95946df3c7112"],["C:/lmislm.github.io/public/archives/page/7/index.html","b55731218ef69d0a3d120ca50e8bb8f1"],["C:/lmislm.github.io/public/archives/page/8/index.html","0e8e3b6209fbf6051d5d7e453ec74ee6"],["C:/lmislm.github.io/public/archives/page/9/index.html","54b8ee27e1b3eddf0b1fedf4b42b4c3c"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","864634fcf9721ab831bd46ca6e52feda"],["C:/lmislm.github.io/public/categories/index.html","cbacca0c995eee57f64a0cb5a23611c4"],["C:/lmislm.github.io/public/categories/xx/index.html","2f7f9df053ae99d94bba2a96065e7488"],["C:/lmislm.github.io/public/categories/学习/index.html","d89eeb7bde222ea00035444a25d3e688"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","d2c87ba6e2651dd6aa7369f2f011660b"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","80b686c21cc3c2c728d9002258a5f09e"],["C:/lmislm.github.io/public/categories/工作/index.html","8890ab6ed945b72869cf8e8bdead9d5f"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","3abd5a4f984a8d826bebc6b633beb1e0"],["C:/lmislm.github.io/public/categories/技术/index.html","690d818465986f54076a8045bbc2abf4"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","1e3c2a5e0fc90b1cb8f8949488582a1b"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","6ff2246d5496a8285159bc834b0d9dbe"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","55c99f752c127a6a4d33ee7a37862236"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","ec7532929de16e5f4c1858f3dd369e28"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","5b812406329a053c742a8714f932afbe"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","f603037e61e9c483b93e341b09c90b4e"],["C:/lmislm.github.io/public/categories/日常操作/index.html","8af22ffb7c9140e6f04ff7fc17fbe44a"],["C:/lmislm.github.io/public/categories/生活/index.html","4f94ea4c3acd80d29cc2a6f984fead97"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","4a751d4ac50577b25b5f715bbd4e2c62"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4e5dd0c77d23a7236012b7ef96da3ea7"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","fc9ded27acac0ad2968e340767f6c7e8"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","28b5c13caab5f917f9a6ce260d3c9b46"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","d004c52304393b927c1361f80eaae653"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","14c0a23eca2ae6f372c68a6013c5c176"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","574e1a1080a480ec1fd60bd00da1200d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","07ae33fdaef8a2fb4b47beb9afa1abef"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","dadc125beebfaf92b6697dbeafeb57ff"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","6de40672ba132c66fa12ba3dd9d81224"],["C:/lmislm.github.io/public/page/11/index.html","b7ec7f32ba270bc6e590cacae8440e68"],["C:/lmislm.github.io/public/page/12/index.html","0c36e3d399607c0e5bb1804e8826839b"],["C:/lmislm.github.io/public/page/13/index.html","75f15a804e7670b37c77ae52785bd0bc"],["C:/lmislm.github.io/public/page/14/index.html","35fee9fd1ae0612e688ec59dc173df1a"],["C:/lmislm.github.io/public/page/15/index.html","700040427f05430b33fddefb20032734"],["C:/lmislm.github.io/public/page/2/index.html","b587c41761a08860e7493a0d61e08e04"],["C:/lmislm.github.io/public/page/3/index.html","b386132638fc853cf99067e31bcb8030"],["C:/lmislm.github.io/public/page/4/index.html","6e7bdfdb03feb3d544bd24001a2f2d06"],["C:/lmislm.github.io/public/page/5/index.html","f04b0086d62b0b5116255bda76e4b7e9"],["C:/lmislm.github.io/public/page/6/index.html","4b3ad446927c719eb0bf4017416c251c"],["C:/lmislm.github.io/public/page/7/index.html","5b7790ba7d11a327bd8b337fae0bbed2"],["C:/lmislm.github.io/public/page/8/index.html","5e00d8a2df61054702e94db91224783a"],["C:/lmislm.github.io/public/page/9/index.html","3a2d74acfbe5f8056bb64a4dfd6dd381"],["C:/lmislm.github.io/public/tags/Interview/index.html","937d4f636ee60e02afa64ee61a16becc"],["C:/lmislm.github.io/public/tags/JS/index.html","9cb8d349bf789c41bb070733a413c1e7"],["C:/lmislm.github.io/public/tags/acm/index.html","9d53f1e7d6115901c77a3e8b34d45d57"],["C:/lmislm.github.io/public/tags/c/index.html","26f2651442b21e9c4b87714299c14d8d"],["C:/lmislm.github.io/public/tags/codewars/index.html","fa8d28cd4462f8e5f82929ce44fbeffc"],["C:/lmislm.github.io/public/tags/css/index.html","fa83a9d4daedcd3324976612e16f5321"],["C:/lmislm.github.io/public/tags/git/index.html","1f60044c9c11985d1c0322661eece0cd"],["C:/lmislm.github.io/public/tags/hexo/index.html","776943def9540f8ae1e83a75142ad395"],["C:/lmislm.github.io/public/tags/index.html","81bed7d9894e483dbcce3ff38b7c7820"],["C:/lmislm.github.io/public/tags/markdown/index.html","cfdbfcdc47c7d40b7d1f9bf86ef5d0f0"],["C:/lmislm.github.io/public/tags/poj/index.html","94184ecff91271ea7a04119d504ca70d"],["C:/lmislm.github.io/public/tags/shell/index.html","7a3c0130435de403cb64e033ff2eb755"],["C:/lmislm.github.io/public/tags/vue/index.html","1e87bf2f32988ff2d6393e812c2059d9"],["C:/lmislm.github.io/public/tags/xx/index.html","64ebe61c3b3d2e6b6252b3edd577fed2"],["C:/lmislm.github.io/public/tags/前端/index.html","3fbe3c35f8e7187b92c2346690001791"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","7f2018b8685b7ece10c1dc44d407b8d4"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","3be74bd2e56efdfb002b17fd04cc8fbc"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","416080099ce486af288c92eab6198bbd"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","8b4f4edea82d4482b81d40012e78e29a"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","a650ba19f306fd0295db9e52e6b25aa3"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","246792037c9fa465e13ebd5b5e96f74f"],["C:/lmislm.github.io/public/tags/小技巧/index.html","61f103cf31ef4fb60224835c912b6257"],["C:/lmislm.github.io/public/tags/展示/index.html","c0dac557e089251683401627cabd29f3"],["C:/lmislm.github.io/public/tags/工具/index.html","6a09739dffe9cd03783842fdc81e469c"],["C:/lmislm.github.io/public/tags/感悟/index.html","803d03b83018526441bd7e6f2114229c"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","1b75e60923bad3dba77a873dcade1b06"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","10d04909f76435ecee4d27882190160d"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","07301387a5e3c71c164a1e88cc41a1a5"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","58b0a9fd3db5958bff7a3b7f82aa7555"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","45b1986b5d6d0270fdcb68fc4dfb4510"],["C:/lmislm.github.io/public/tags/练习/index.html","ced804132fefc0b7d4af87cc2dc8705b"],["C:/lmislm.github.io/public/tags/编程/index.html","e68621e43f468c2557abf767bf592358"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","8336a36ce5d52679acac215c4ea67c2b"],["C:/lmislm.github.io/public/tags/运维/index.html","091f2b23bba4d1775105baa171a905c0"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







