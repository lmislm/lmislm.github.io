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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","2c974c36b189510e26a3f26fa7537ad7"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","892f369ad56f21fdb86a6eb72825e24c"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","091360949fd6ecc2a6c9cf7cdbc2306e"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","21f894d5769ca2673ceae4e8c65a62bf"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","d5fdc935b5ca2d9fb4fbcd45e269f98b"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","1662687e689abe4694ad04add9d6c94c"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","244723856dcf3cb3291571641118a640"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","044487a264ddee917ab13e99f4882e22"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","2ce861578caa044754c1b5752454c7e7"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","b192749b38dda38d6667da0547bc08fd"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","423cc03415be17901f0f73c8b76ee49e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","f0a7bc736e2c846dbd0801965db413b6"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","19bb99e27983713a1cbc36fd246f47c1"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9070c314d998b724b9270b00b922c2e0"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","e6150807e37db9457354dc27491a7d5f"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","710a0edc9a43c329326f42b1b73c8f21"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","fa33c751354f51f09d38a5ecec5f4e44"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","0373142010118d491c49a8ea249c5c0f"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","7bf229275e9048249f01573b7384d7f8"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","670e18c9885931c4207336ce920529d8"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","bf6ec7cf63780d271c8dd7c08601fb44"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","ea3e2e82109736513f8e3a33eecd807b"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","14e158b1b19ab93eb586adea83c70520"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","7b04c6c01d3989dba894a91b96c13ec2"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","116a7983ea7fa5cb83fb5beee5039c7e"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","b7cf442d05b27460abfeddab5ea2fed6"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","5803cde0e300d875dcc2fbba3ccbb992"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","48099e6b72d612216f2d2ec8b27bcd90"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","d043a17e9b772642cba7ae5b32a7f31a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","2ea58676499caf8b4a55171b190b414d"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","420fbf4efc12481f4a5740016ed8c2c6"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","dde42ab9d3ef70d11aa89a1b80d503e5"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","a22d42d453eebe4aaa2919b6c1f5543d"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","f13d471d6c23d30cfa6ea0cc10fd7ec6"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","77dbcb64d9b1b7f19b9e70691555c9a1"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","073747e8eea88951b2d0f5cf7343065d"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","3f5382f8169aa734f03ccfe25d5bc3ab"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","1aa5d14536a6eb18c86f42d592d6cf33"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","989d76c20656d7ebb9085bb11dff3157"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","22d22531ec7246f6e6b281799c12b6b7"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","9aabab5bd316314e40b0a6efd936e003"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","86ac91ed66913133f9f6ffbc61493890"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","3d8cf122c7df4c7b87ed3ad2d17a8105"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","ee88d3df6f7e5ca2ce5565cbd1a2c862"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","1dba10cfc7bb4d6d63f0c4e9112aed08"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","7282e359a42b7af59c8dc9b0471ed1d9"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","51d0b2da304f84e07537ff5b7b2740c8"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","3e7327f542803c002cd6c1d7d178d792"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","405a0452f12fc3ae8d468e38fcfc58d1"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","c090efb9758cf602c08ab52f9bdd4971"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d6361071ba95a697a15d4bb2a50ccb82"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","07ac19c3214569ee310a164582cf8590"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","50b1a8fad8ff8dcccc4aad0b7fd87e4e"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","c7df46bf99009469e56419633122c4b0"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","938f30661758d1c8030a99dccc2bea21"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","28afb2b8c0efdfc542ad53d696c48b91"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","ff147115ebbbc1c5bbc41143168e2f89"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","b53fd89cd8327fc3e6786960e19a15dd"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","0e56642533b1bfff7d1e5ce880a38850"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","e1756f79c63207adcb9e9dc2f90c3805"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","290d1b667a1bec4561047fbb1f970ff5"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","eb9a79c25463ebbb53b3c932d16ab2c4"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","f4dea653183d3deae2781b16bce125f1"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","626e0ec299bee4fad6494f59bf41eea7"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","6b36d5e2a0e042cb09e9ee77d6ef5ce7"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","a29c2267354444a6de76be4a37fc2cbc"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","c977f8422138724f6b62ce4c18aebac2"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","3f3633dec0951532b84dbe0b5a521a8b"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","8fe9983c83a4277875c3d19117b903fc"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","c52895d84ea395ebc7eff9116a836534"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","f96f95e4d95e39be9a72dca58f3c4222"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","33817547b9eecd197a0b2e20db9070b8"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","3f602d47470e2df8bb71347a50841967"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","40a54e89be56d172f21280d6dd1febf3"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","6aeca33841531b196025d9c65ebf66bb"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","353f93aa5869c192cd73fb655b2ecfc5"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","024c0c955a623685b1ee74facb8dbc3f"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","69da52bd4010ea9f1b9af97c24a04ce1"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","c634ce08294a17636b1cb8c05f83e499"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","7afa23d321598fc84b274aeac48f7804"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","69f5e978ba528efd6affa0d2acff5898"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","5b73250790e68d6024d63cbf12b65b83"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","7bea6e1db7818658e1c6277501a11709"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","af9c45cfc8c84cca6f34ba5631b90f03"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","657e0c132daa792c4c309bb67ad9ca56"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","9b59f333034aa653d4ea9c5eaa4f1de5"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","cc0bc7c39f8a85949d78ef3979c6c0a1"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","d3eda7c8132d6477fdd64ef1fcf5fe38"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","e47f13ddd5aa9a7f1389fa82320a3a09"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","5aca2472d3f06444674163f57a0b542a"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","7b3a8e1529fc54489b11e4ed48f49d35"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","e278d129a5403f1414da65af959d8e49"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","a0698fc4345da50e7c843e43c6c050fc"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","27072e417a210229c9dd0bc07d416520"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","bda37010543aa1c20108d1afaa542eb7"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","f3c3d6685e470519c7ddd12004fe5ed5"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","5ed26087c0a69add41bb48e38b89daca"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","a6212b941070cc993ca3c2041e933061"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","c235d0dcccd8f5d0b92a87e6e1110332"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","b3e80c7a7dc859e0986bbc6b9a67d61b"],["C:/lmislm.github.io/public/about/index.html","54c56dfc90f5f1f3baf86c49fc859716"],["C:/lmislm.github.io/public/archives/2016/01/index.html","d19d84449a4abd4a76f0434cb8ca076b"],["C:/lmislm.github.io/public/archives/2016/03/index.html","aeed28c1981e3037791284d057a80da6"],["C:/lmislm.github.io/public/archives/2016/index.html","a4cd71f7182442262ef0ff1887c4a1be"],["C:/lmislm.github.io/public/archives/2017/01/index.html","08b935e87b01a72576787487efd27896"],["C:/lmislm.github.io/public/archives/2017/03/index.html","359ec96e6d1f06f8997b8ec1efc5910a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","d685c3721184a1306ff9aebbc156c938"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ba2a6e04eac4c3163fe901d5b49b031b"],["C:/lmislm.github.io/public/archives/2017/07/index.html","4d31191363139c1bc824f65ebc26892b"],["C:/lmislm.github.io/public/archives/2017/index.html","40c8d666897db74b63db17e97d70ae5e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","968f5205278874da234a00a01cff1c22"],["C:/lmislm.github.io/public/archives/2018/01/index.html","3363f3c0852213f2cae57b2c35fefa19"],["C:/lmislm.github.io/public/archives/2018/03/index.html","a1d4f40a879337107bd1d328c75584fd"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c805abe179bd3a7fba006ed6afcb1b5c"],["C:/lmislm.github.io/public/archives/2018/index.html","52542b25fee149cd0960c761ddc7e1b4"],["C:/lmislm.github.io/public/archives/2019/01/index.html","c166d967125c547ba3a3b97f9cc3e62b"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","5e6676cb4641679711da3fed8ad774c9"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","d1f67d558e6656ac693fc917115bb15b"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","baf5aea5ce3ce48c1d77c7c782ee9007"],["C:/lmislm.github.io/public/archives/2019/02/index.html","3e1b0c34107993a686d7c90cbd0e7428"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","58a6c0d06c40aa2fb9b23ffdfec2cc53"],["C:/lmislm.github.io/public/archives/2019/03/index.html","18e3d6e915fb05d6716d842dfd67f6df"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","cd1168046c3a2b894781551d4f312e22"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","fa53932ccb3e3812e467d84432a0afd6"],["C:/lmislm.github.io/public/archives/2019/index.html","a09355354a2fdb454b1b7adddec6909b"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","68aaf0665f0eaa022e476b8aa45a1a09"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","4e674aa9d5237f29366e717f0ba8e1ae"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","28fbe49bec0abbb5c0f5b7ab9ec06553"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","03be78e0d3eaec4a936d5a79aa71bcac"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","9d45ed735de5cd02bd20a6623eb08351"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","f90537a94f841e4a6d8376abf3ed29d9"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","3a93d92a79e69f91c4626b4428160874"],["C:/lmislm.github.io/public/archives/index.html","902ca0282a8382e3ad5c2b48701aa310"],["C:/lmislm.github.io/public/archives/page/10/index.html","8b786edaaf45f6e276a0c999ac1c4dcf"],["C:/lmislm.github.io/public/archives/page/2/index.html","931df8ac7479140d26e8155a0c4d30a8"],["C:/lmislm.github.io/public/archives/page/3/index.html","0775005e01be1fd2c03c6030ac4651ec"],["C:/lmislm.github.io/public/archives/page/4/index.html","c5be311738f8da85d9889d20b2437b0a"],["C:/lmislm.github.io/public/archives/page/5/index.html","2b4f08f54ac0bf48cfe28e65dd039d6a"],["C:/lmislm.github.io/public/archives/page/6/index.html","c3c90b5110f0ac63761d1349ca53d20d"],["C:/lmislm.github.io/public/archives/page/7/index.html","774faec44a62ae064351eac11cc3076d"],["C:/lmislm.github.io/public/archives/page/8/index.html","cc01c8c2d288838da4f0bad92ceaa469"],["C:/lmislm.github.io/public/archives/page/9/index.html","1d46a7263f97ff0924ff2041720c06ed"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","d5a8d458d19282b54d6f0898e5be88fd"],["C:/lmislm.github.io/public/categories/index.html","4ee4b07408739e99ad24b34da77ba9a8"],["C:/lmislm.github.io/public/categories/xx/index.html","8df6847f4a7e320eeb8dd0ad25abf728"],["C:/lmislm.github.io/public/categories/学习/index.html","ab8387337a58a454c2c2e2f7d79cf9e5"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","a8a5ff59c1fec287c79e02fa1fd1c66a"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","16a52ecd2880cf7b31262cc5e18875b6"],["C:/lmislm.github.io/public/categories/工作/index.html","872bbb0eb7b141e6bedc7b30ab47485e"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","ce88bfe9758cef2c6054cb8997469263"],["C:/lmislm.github.io/public/categories/技术/index.html","14e7eefc95dd03b82e6fc26d5928755c"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","d7386926510d2e953a1738b7fdfe7f20"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","0698e57f59554018089f9a4e01b2dbb4"],["C:/lmislm.github.io/public/categories/日常操作/index.html","b90b21dc89b912fbe6cfcdeaeb7d8820"],["C:/lmislm.github.io/public/categories/生活/index.html","533571a3a3f7241e810a029b47015b86"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","84d202db3627c9c0ba8369b1dc15177d"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4f2c094797aa96ee3b04bbf15c3259ec"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","be39727ccf02fb1f07dfc63614c386e7"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","9d19182945d75b140c1148b4e9878d88"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","f45c0e16dd69a9e4e7d28948b7d95612"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","850848434c7dae5cd74994b4fda17dc8"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","165a33179600d88f0f2a4732d578b26f"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","3e10721394dafcd34f86593ab1e27854"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","60017103d399fa8dab5f313699dc9e78"],["C:/lmislm.github.io/public/page/2/index.html","2ae5085f649a3631ace2ddb6afce16a2"],["C:/lmislm.github.io/public/page/3/index.html","2338fe909224d8c482a4801235a3fa3f"],["C:/lmislm.github.io/public/page/4/index.html","fcf205e70946c3aaa21df9663f8a33f4"],["C:/lmislm.github.io/public/page/5/index.html","7b3cfe4a8a864aabe35934d84087c197"],["C:/lmislm.github.io/public/page/6/index.html","e4a9b065fd03c48412e4a86437485c5e"],["C:/lmislm.github.io/public/page/7/index.html","7662158d23c8b7c5cde9b82c383508fb"],["C:/lmislm.github.io/public/page/8/index.html","20a49cef7867a4e0ccb70f54418f3736"],["C:/lmislm.github.io/public/page/9/index.html","c6f2a8443782ab4308859fff0e14af17"],["C:/lmislm.github.io/public/tags/Interview/index.html","5b6bc32db3610ee7031760d913525d53"],["C:/lmislm.github.io/public/tags/JS/index.html","4704d09fd95323d771745332193ae1c7"],["C:/lmislm.github.io/public/tags/acm/index.html","ba15defa629ee2ef53e8cd9bf2150ec3"],["C:/lmislm.github.io/public/tags/c/index.html","2994d008f443b0db3100c22eed8d7c78"],["C:/lmislm.github.io/public/tags/codewars/index.html","e5652abe91143b247a6b1a267cdb4f91"],["C:/lmislm.github.io/public/tags/css/index.html","d533f47df46f6b0236c4375636674ead"],["C:/lmislm.github.io/public/tags/git/index.html","b11fc0e28468700bc3fe0366ed6de726"],["C:/lmislm.github.io/public/tags/hexo/index.html","b10889dab19f75d50725535e56b30d19"],["C:/lmislm.github.io/public/tags/index.html","3ab29b1f4fcf252869c222b0582ef959"],["C:/lmislm.github.io/public/tags/markdown/index.html","80a1235cd55f78217b0564ed6b55cd70"],["C:/lmislm.github.io/public/tags/poj/index.html","7fc11a0c147da577c43e79ab92527d70"],["C:/lmislm.github.io/public/tags/shell/index.html","e56e16176dd3ab7861e0772c4287973b"],["C:/lmislm.github.io/public/tags/vue/index.html","b1c4f8c07abfe9723c0fdef76fe6de59"],["C:/lmislm.github.io/public/tags/xx/index.html","518bd6ea6cfce5af06bb2b9ea9992667"],["C:/lmislm.github.io/public/tags/前端/index.html","e9299ee888e4cbc664d5a9ffc18c6959"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","2a8807c3996a660ce663f29b8abb29d2"],["C:/lmislm.github.io/public/tags/小技巧/index.html","d63cd151801146deb8031f1290e25af1"],["C:/lmislm.github.io/public/tags/展示/index.html","57914415cbe2e794045626d93cb0d4fa"],["C:/lmislm.github.io/public/tags/工具/index.html","105173dcfe77e6c3f1aa51f462903844"],["C:/lmislm.github.io/public/tags/感悟/index.html","683e7b10990d094d70fec41a8b419c5f"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","0586093e7176010cde9571285bfac59a"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","974d17741fbb63de1a257625bc9c06b0"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","2c5a43812ace671df9022ac7ec1fab59"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","2d150443473e5d32d91914906db974fe"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","e191afe21024093757492aadf5bc4d97"],["C:/lmislm.github.io/public/tags/练习/index.html","866f6d1d09b0a89270e2c98569a2974d"],["C:/lmislm.github.io/public/tags/编程/index.html","d2e2a2242033d2645eceb91e726ac213"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","4684455a338bce15f9638a29f366a8f1"],["C:/lmislm.github.io/public/tags/运维/index.html","b2af83244d142e3b8fc4df1158b1e724"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







