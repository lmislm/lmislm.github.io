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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","f9446e19eee8d44662fc58edf276b377"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","966a35689aa6ad36ce3619888c6a31ef"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","3169fec674816f3063f69ab95167798f"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a5899f50c5343407c9939f79a2741a12"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c5ef439f1b21597ccd9e79f686053cd5"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","5b87f39528d917ab0da1b24d0a32b20c"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","848797838d0c7ccab4efae286e485819"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","7d11715a322f68cd31f1eac53c353a55"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","52fde4bfa397328fe06f84f75ea67263"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","e6fa8a5961c2c237494510e079ec8a96"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","685bd9231c8457db225e829dbc51c16b"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","1a762a4fd55fa0716934b2e02bde2e7e"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","e843c68594660105da24d361829f9cba"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","2e63d3289aa7d316b0c48895986bafae"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","5a57d99381fce14e0844de31cf59ab76"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","60cf12ce6db52f4840c9a04eee2ab473"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","cbc822c116b70963e9aa5c51c9947d01"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","d01e4cb618267dfc4532b66d7c384be6"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","069d6c879053c8056f29186c23566a2b"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","66aad39221a127f952f7c760f3781034"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","b06f33187e0d4f4ff973bcc5f6016f87"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","aa222b7f47cbd3eec3c16b7087f3bc61"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","e06bbb375d602e321ef52d85cbbc04e6"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","105771f28334f82763e44471dbf11531"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","0cd6d1f774a4c0f32a9ee66b3d74dfbe"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","670dbd0cec4c29e8192d86011f5ee197"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","a4a0a75796f12025b4e7aa6a53c39a68"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","736c074ddfd507797a166ca90e2e22c9"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","1cbd1121eec6bdcaa0894fba53ac13dd"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","6151f40dba5719ff3bab2fa62e0fb6e4"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","170d1cbf3dfb0ec3e3b4dda11610205a"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","71ad6ffedeb711823a73196ef190cb16"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","e5c6418849157dd2cfd898f4dfc3e258"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","e9f12a50f36450e035ba5f04777ef2d8"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","40eb9f8f79112e07070e11f19d9649d8"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","372ed8fa95c6b85439fda67133b56841"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","7cf6dd91b97ceb8f2bdca09359ee42f1"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","87eabe15b48ac71edb18b0980865f4fe"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","3299537898d78d112dc8a20e97467100"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","b813348e7b21036ca671a4f34b26655b"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","2429da9767d57599dc9d7ae7f3a6189c"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","302dc8a5418e30f757158558644a3e6f"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","efd31cc72d3e5b8ec825f60bccc4128d"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","6aaabe08411d2ff29cb6d6fc7ac04bd0"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","3baae602d5fbb64d5a0ce386cf51001e"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","67e93b3153ee9825658e3421b5b4369a"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","20d4e5dbb8804538ebb97aadb9a3221e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","8ed0bea00616147b2b3441844059229b"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","754ec76ef26c127d07588f795aabb646"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","7b4dfcd6abbb1f1f43b8cd4b561243aa"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","6f602c83e3fdcff6cbc8070914e79a88"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","0a556850d3eef045a5e5213a6699f97e"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","adb333fc0c14e92421ca3582612b7fd4"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","f88b3d90534616beb2ef840816f986c3"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","e4afae5dd96079528091f74e893cd4f7"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","f7e437d3306806f92a2c4d5f3cb6a120"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","a43e7012e7d26222fd7ab9b26993b90f"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","ac3a6f0709c9574bad37c435303554ad"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","19284139183d46457f9e6a7522bf84d1"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","ce55b955259056afb5c005d20dd0f72e"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","c5361807158b3033d28954e1d0b4f5e5"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","4ebc86fa644be6783e51fbe693ad7e23"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","16a82aff68794ce26aad25732238de95"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","a222855e62d361ed9cedc444158c8654"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","290020779cf211d32488023111b51e39"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","a28ef68c0e3af7d7e89e280139251319"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","58728873856941572fa89a7b09302c53"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","784cb504548d52aded9e5afd1bcb9258"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","7084f1ec6dc4be4cb1ff7927a6b9dff1"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","1df46eb7ef5f47d0844102f18a083fc8"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","9a74f3b8e30686ff6264e966b6785173"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","ce5191f3b00569ac3a3a1c36c1cc6b6e"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","235994c9469a3da6d69236cbcab157a6"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","57e8a13cb1e084cb558080d2fe26b613"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","2399879d008236303a4cee927ece36ed"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","4894ad4d5429f47ec32d5a12d02dcbad"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","1b9d9794684ffc0e121efcd5d3128794"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","dce498068e3692935af998182b574fa0"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","00df76c263cff2dd3dcaabf159c22994"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","f5b1ccae0e0c555e8dfc768e09dc4e98"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","27d48a6ac18f37bb3c1a23d8cc58dff4"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","d5c6835923a9c2b17b18a1b7cdf63d8b"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","f46dfe28a5d1a444772e8384e2abe14c"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","1088c122c7e05abfbe9111ade196d1e5"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","4a78380a601e7ca8514461d582385629"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","20ed552e62a16429486258785c33af62"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","6efe01e7cde145370383c8aa8b9c2755"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","5bcf4c559004bcd422fd91056541791a"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","aa45912edbbce05af8f86d4647852a44"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","9e9b4c99e72ae91ecfb0c94e67e32438"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","73cdf041b98f9bcb15658dac6a93cd18"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","cea63b0fb69e0a1ec54a3041536bc4cf"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","b4dd174f2df7181626e89b65d65e9c16"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","29d7a230f46590b4deede05254e0a541"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","9dd3e788d736dc3a7cbd161174ca511e"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","57bf8ee39b3d3ed4ba070f4e8e525eab"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","321fa3d18b723c31df3311d913da0ad5"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","85bfbe7d36c90b644d9ed4f4468e6fed"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","ff2a25c703468a209ff56902b023e12d"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","0ccf808303a83cec785bb142717ac6c0"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","348fc14142638475bc1ac90aaae92703"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","c09e6948ef57f2c1f5a623174d76dd97"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","fbbfb7816b18ac1def1663b2a59a4a90"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","0cec882237a3469921ff6a141d01a500"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","73a815688d219101735be117bd1ee49d"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","843f4b053e3548b0b2564131c7193e47"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","f79b92d558fcfb0106bd02bd42368fdd"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","d91a9dd31d9a86a37d83b5971f83b931"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","a5f1e9ce0eba60c8bc1bf518c86fce6f"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","20d110911e74813bde6e22df8583356e"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","3d1825c778b963be9ebd05d576b25809"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","cfbb647ba1039689e646e3a53cc45a17"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","32916b1d5874af39eb45856686e900dd"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","7aead555c5a4359fae3bc5ddade3de50"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","8c1a5bc31661ad86b57a6c52f956ac36"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","04019494dfd7f73e18f9f24ea6044ca9"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","beacb06549060f1318c2423687f37d00"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","f166e6bf147437413f4922f86a37b4ef"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","cb08283c846ed1d6a8359c5a3ebd9c3f"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","723c45ddada1e55c2164a991ae47b8f2"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","cc4c21c880872c4cf7731ee9f817a291"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","8d7a46a09b259878dcbcea2ee3999e39"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","e9ee13faf815867f63f05a3fe0656cb0"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","879406dafec9a7c4cf303d2514cb9e92"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","2a73a4190e6709d1bea0c485047987a9"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","22bf2d76521b49ccd073fcdcda1cea49"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","d3935b7db1745c40be98cda3505be1f6"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","69db568707d3800916a93f313fbc9cbf"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","e0fcfaf06005f430c580b6a938c25bba"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","421140ed8fe244f615dd81a44c4b6d78"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","47f8a02695ace3088e12e783a1725876"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","ebec90855a4e7b2ca2a0bee34effd05f"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","e095e8ffa5db25240888c9e2ba79a0b2"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","75cc720df45a2c3f81b267391dd4406b"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","e3463733a72ec30eedfb91f3ea98a9c7"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","0a6142310953b8068cf7b2ca8de6dfef"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","0a8b69b877937ca063a02846075bd7df"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","87c082d0a3e4b50f5e46aa921bb74817"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","8eac8a165ce56b4f4aae91c22d52a53f"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","b96d9f7b967b0e0baac3a91ae7843aaf"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","1a2670eb8e48efec2a2a3d16dc989a82"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","3e277c6fcac172851117af62c0d48206"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","2a587509b60d1fe435d1446035290123"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","5992e9092e1e098b368ae492f57fa6f6"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","85b7de9af88870de1c8a430c91e452f4"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","2472a8021dc630a1fcfde00996c731f1"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","177499d49dfd491f6c9b9d143bdf02a8"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","3c38cb33396ec3607a6cafb3c6a6b097"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","b4f2681feed157b425e5d6a450601845"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","bc889186cca8c751bc88333a76683cab"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","663f79a7b56048ed4307a8362433818d"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","3f33c3307eef7adcacaf54a7033df9e1"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","f0dd2159d58663eee4ceffd91c165273"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","91ee0d78ed4e6be8902d2d91a6a68ecc"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","414c85688e21236d8610dfb03f0ce70b"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","0920d46f55c3ec2b775d9dea812eced7"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","d4aa638933f6f17034fdc9ddc40684b5"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","c65ff94f8f7002ebee68fb26f8acefe9"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","bc8c79d45a876737f15da7fb81e31ce2"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","7ac8c51e3b77e958f847576e82f1c1ea"],["C:/lmislm.github.io/public/2019/05/27/2019-05-27/index.html","e0e82e83ef4961fac59d45ddd2fd1702"],["C:/lmislm.github.io/public/2019/05/28/2019-05-28/index.html","fa77fcfc70d1c092dc86a0b63b03a900"],["C:/lmislm.github.io/public/about/index.html","65db44d33d7b03b0346edea91413b240"],["C:/lmislm.github.io/public/archives/2016/01/index.html","bb30a4779efc6fcc156f784d297fb827"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8c305339238b21817bc7bdb920647374"],["C:/lmislm.github.io/public/archives/2016/index.html","6d68449e463220350ef057b2e5f7076b"],["C:/lmislm.github.io/public/archives/2017/01/index.html","4721ea8e75f3227d54ccff984beea65c"],["C:/lmislm.github.io/public/archives/2017/03/index.html","425a1fd57159fc4852b26de2ebd22f5e"],["C:/lmislm.github.io/public/archives/2017/04/index.html","2b3652a7924a8975d2d764a0a89d3571"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ab92caa839462189b782b30e64413d50"],["C:/lmislm.github.io/public/archives/2017/07/index.html","7b4fae18c25c68d47fbf41f3ed58b9f1"],["C:/lmislm.github.io/public/archives/2017/index.html","ac7bc8c19a323f65c059bb714701fde3"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","3e54ae8f957ecff290d8c1ba9e353385"],["C:/lmislm.github.io/public/archives/2018/01/index.html","3d032a1aa21b9d0de529e2eacca1a833"],["C:/lmislm.github.io/public/archives/2018/03/index.html","d13e728255f1e46c65f876935b0048ac"],["C:/lmislm.github.io/public/archives/2018/12/index.html","ebdfed60e385e3760fa294789c3537b3"],["C:/lmislm.github.io/public/archives/2018/index.html","5f4d2e4012be4e2a677500f4affe1e90"],["C:/lmislm.github.io/public/archives/2019/01/index.html","c3fe74fd026ad65a6c123ccab43e159b"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","bdcc55810a1bbab1c951845df6fb385b"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","28d6205ef4726c826d8d14a64e65c7a1"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","8acba740306a3ce4fa122f39f16e3d6e"],["C:/lmislm.github.io/public/archives/2019/02/index.html","dab3329adb17d258ec686e133960b72f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","f2dd1714e345d0a3f1f1ca2db9200c86"],["C:/lmislm.github.io/public/archives/2019/03/index.html","e7da342a5469acc1a395e3404bff76f4"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","d45107377b9db29704a1bf4492174a9f"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","95053c63947aa76a841b4563326a9b37"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","1d618e1fffd28b0fc0a767c05f5361e5"],["C:/lmislm.github.io/public/archives/2019/04/index.html","f81c0378c4dba497b1d6d795690e65b2"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","69fc321e49fe513e32ff4f9736500d09"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","a65d951fd6da1bdaaad83547782afd0a"],["C:/lmislm.github.io/public/archives/2019/05/index.html","e027ec4d6f256d6867eaaea17001bbe7"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","027a853ac1481d06d00f08d5c6ecba21"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","05e57f16ca117d0d83ff72ba5f44fae2"],["C:/lmislm.github.io/public/archives/2019/index.html","8fd9ff6816b043021b9b4be8268b5e96"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","5cfe791f59580b9f0e8d03d1de99292a"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","44b31e97f2f3ceaf12901bbaae7b99e0"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","f0293074b48a2d69201937475bcb47cc"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","8123f4edd44c51e25e65c31261d7ebb4"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","38d40f55a8073d2b0ba2c952b4ba8aae"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a66cc8adc13b177cf4db9a07b302b55d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","2830246d65874946830fdb4ca0396b04"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","9e2d5c83ce22b71a15d663fd26570f7d"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","7e6a91b413b2679473f2685e24ffbfe9"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","941b30e6ba86190af89dbb9f13ccbfbf"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","4cc56a724601bf6c5571dbf432d1e3f1"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","004f764af5d942be375a157d4237b627"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","1915501a3841ac8d786203474124a613"],["C:/lmislm.github.io/public/archives/index.html","6957e6eabd8b9c13e0656b73744fe644"],["C:/lmislm.github.io/public/archives/page/10/index.html","edc5c6ee139ace714d1a95de56b672e4"],["C:/lmislm.github.io/public/archives/page/11/index.html","becf73cbb8abf684c00cbc66d1281db0"],["C:/lmislm.github.io/public/archives/page/12/index.html","c6b864ba850b75cff5e664cf29c9215a"],["C:/lmislm.github.io/public/archives/page/13/index.html","8cd98e3616664abe32b30cd7c47b64c1"],["C:/lmislm.github.io/public/archives/page/14/index.html","11c6a291baa3b57459a84b1bab0e2174"],["C:/lmislm.github.io/public/archives/page/15/index.html","7b000a2bb2365a06e2d3587764f00961"],["C:/lmislm.github.io/public/archives/page/16/index.html","f792a8e66d6ba112bd9e5863e480ebea"],["C:/lmislm.github.io/public/archives/page/17/index.html","2512b1d92bd93379fe0e99d2f516c365"],["C:/lmislm.github.io/public/archives/page/2/index.html","66705519b151e3c6bc8a126c2ece687a"],["C:/lmislm.github.io/public/archives/page/3/index.html","96b7a52bce86cd6294d35428a8454d7b"],["C:/lmislm.github.io/public/archives/page/4/index.html","b4d76e31b1dd783864e878f7a0a50574"],["C:/lmislm.github.io/public/archives/page/5/index.html","5e4c0b80e15a616d73083acdb6460827"],["C:/lmislm.github.io/public/archives/page/6/index.html","b74719dc4969742fd4a3de1e75221f81"],["C:/lmislm.github.io/public/archives/page/7/index.html","bff066ef428672bce077a7a57ce1a3e5"],["C:/lmislm.github.io/public/archives/page/8/index.html","a6dae4c705cafaab7805f2b30994428c"],["C:/lmislm.github.io/public/archives/page/9/index.html","89430728d61661ea2a80c47f756eb037"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","e7bcbd8062cb4a7ab63b55688b70d333"],["C:/lmislm.github.io/public/categories/index.html","a2e9100df1e5070b021028e0b012e85d"],["C:/lmislm.github.io/public/categories/xx/index.html","9509069ec753acbf681b5713a50bfb5d"],["C:/lmislm.github.io/public/categories/学习/index.html","2802f36dcca287185981157be6b3037a"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","b5bcb3c8558a24458ef5d3a7a87eed73"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","8b1c3d062bb721007e27f4f40212a9e5"],["C:/lmislm.github.io/public/categories/工作/index.html","b0d7ee2be9642c47580a3a3d85ca3970"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","b738fc4eef60e71913c69f297ba02f74"],["C:/lmislm.github.io/public/categories/技术/index.html","c2cd444a8b5a379d6db1965a06009478"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","e57d7e00231749fa8c583612be418aa3"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","f3a15516c59e965400a886ba22331323"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","d6ecf602af195d2d6f17c53ccd07d44b"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","f5cac8deca12a76e39a57a15b58c77b0"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","084a133e5ea6aadd6f3d65f2c34fc43a"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","a0722a36c3241a67b3b7f74897cbfe64"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","5393a60cd43a34125bbabfd546a98b1c"],["C:/lmislm.github.io/public/categories/日常操作/index.html","59cbc727d06fc67e8e601287a5583190"],["C:/lmislm.github.io/public/categories/生活/index.html","9c7c4798c07cbcfaaf92d6e1e7d623c4"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","c71bd2a5093630deaab975f70dca9bb3"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","48a25b984f2dc2d0cd2d287105eebda5"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","dabce9aeb258714ad443026b0d6945f4"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","eb17fc970745f8d3722d7928d469dd4c"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","d3b4df0ccdbd75618afaadcbbba0aac6"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","fcdbe700b6e39267e3a06b286a924746"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","8f31fbc4e47519a35467ae70e5313216"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","966286bda8734dd18d13943afa8a9978"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","137f9579cd8326fb2d84749a8d060060"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","b42003dabc2a131c8ae6f64ed6c57b3e"],["C:/lmislm.github.io/public/page/11/index.html","80079ef10c80dc7b0b66a2aa964238a8"],["C:/lmislm.github.io/public/page/12/index.html","3b52ba36ea69a1f8571da265f297bb9e"],["C:/lmislm.github.io/public/page/13/index.html","ad5f6c4966f476fe8377a64c03d44136"],["C:/lmislm.github.io/public/page/14/index.html","8b3c8c1b00de62758d0568430a8e7da3"],["C:/lmislm.github.io/public/page/15/index.html","5c79b2886eb44bde55d54ce347cee184"],["C:/lmislm.github.io/public/page/16/index.html","af7c4b9ac1548f5af9fffab202994906"],["C:/lmislm.github.io/public/page/17/index.html","3849ef4a831a86142d77265d728dbb0c"],["C:/lmislm.github.io/public/page/2/index.html","e0a716a9fa07fc59e9593a1080ca1b1d"],["C:/lmislm.github.io/public/page/3/index.html","e6aead79c50fe248b6bb12f7c51a4aa9"],["C:/lmislm.github.io/public/page/4/index.html","ef9ecf471348fc449942fbf954438939"],["C:/lmislm.github.io/public/page/5/index.html","7be705cca23ed1ef696c1bac66c60715"],["C:/lmislm.github.io/public/page/6/index.html","c1b14b7d7dbc473c11d63ad9b6a119c0"],["C:/lmislm.github.io/public/page/7/index.html","6bfbf0101fda0bf9d2d83bbdd13812bd"],["C:/lmislm.github.io/public/page/8/index.html","989f2833f0b457af037202731962ef31"],["C:/lmislm.github.io/public/page/9/index.html","67fce3cacfdfe1c41ba740d93af978de"],["C:/lmislm.github.io/public/tags/Interview/index.html","381caf5bebad9953a581e09d134cde99"],["C:/lmislm.github.io/public/tags/JS/index.html","70990b56efca90eade40adea8bc30047"],["C:/lmislm.github.io/public/tags/acm/index.html","3c8b4002ed079e077adc3dd07d49858f"],["C:/lmislm.github.io/public/tags/c/index.html","7d275e100ace4e893a0632c70ef0830b"],["C:/lmislm.github.io/public/tags/codewars/index.html","93083f8b7e276fc6e75f36db4c66fa86"],["C:/lmislm.github.io/public/tags/css/index.html","092be7daf994f726a728c22a98efbb19"],["C:/lmislm.github.io/public/tags/git/index.html","06a5d46c3dd40e4979c0d6496d237dc3"],["C:/lmislm.github.io/public/tags/hexo/index.html","ade17bd34c9ffde60f1a6721e2fb55bf"],["C:/lmislm.github.io/public/tags/index.html","3fe7962a4b555dc69820b89629dc56ee"],["C:/lmislm.github.io/public/tags/markdown/index.html","a8424ad1c4beabfa6b2a42d1aa40e9a7"],["C:/lmislm.github.io/public/tags/poj/index.html","8d63218c9ebd86460856a457a5b633c3"],["C:/lmislm.github.io/public/tags/shell/index.html","d0e4f7ce562ced9d95b6b6d529606d6a"],["C:/lmislm.github.io/public/tags/vue/index.html","c97b4fe2280898e90e5409aab2f9c90c"],["C:/lmislm.github.io/public/tags/xx/index.html","8f43ae27206886b035423d06b2005e37"],["C:/lmislm.github.io/public/tags/前端/index.html","cef0244919db06ca5c2198cecb955e14"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","e3763d9091fbc17e1015a31509a7191c"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","257a2bfdf5742f79292309afc52fc593"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","cac2e226c8c2aaa0d1c9dd75f6ebd1de"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","b31084950bd013dbf6fa680af298189e"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","11b1433f6a89c66c6bd2f365907ab93c"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","c860993e4453b83d58d0184dbfe685b8"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","750ed170c1b66826f425857cbf2ce5f6"],["C:/lmislm.github.io/public/tags/小技巧/index.html","f888e742c20e6d9cd9fb503e5eec38fa"],["C:/lmislm.github.io/public/tags/展示/index.html","9afb3c66f1d7c0f576555a90a2f69198"],["C:/lmislm.github.io/public/tags/工具/index.html","a81c285fd288ee1154898a5908c7776c"],["C:/lmislm.github.io/public/tags/感悟/index.html","f800895da7fa9ebbe7178cc56a1e63a1"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","c1b395606e86705ba3de428b3aaa26aa"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","6913208d11bde6217a6c93ae2a09d935"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","27df4c41b71a1117c9ec38304b40526d"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","a7a58401d0a4b01fad74dc53a31f4560"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","44a3834e0c12107bb3e45a28948ef0a5"],["C:/lmislm.github.io/public/tags/练习/index.html","7da4e14a3c07f48e7459be3a19ca8ca9"],["C:/lmislm.github.io/public/tags/编程/index.html","31631e33b23b0948a14ffd582b6cb6e4"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","c95ced0b2b9d0864e9205c2334fc02c3"],["C:/lmislm.github.io/public/tags/运维/index.html","c6cf46e73766f28c1e0a9ea2de22688c"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







