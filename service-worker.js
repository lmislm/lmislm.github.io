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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","b60027d01224c6b8bf475df85a8155c0"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","98d9c0bef11e68d079427e7513166314"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","5d89b736f8bacf527ab0773a3c3ad3db"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","063ad609e0cd7ceb2cbf3f9e6ce469d8"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","49bca4e7cb8277cf53d5f628aea5fdde"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","19f7019d961dfb937d8df7e84ada0c84"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","5ea6b42a84c7f5214368c6306d1c6ea8"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c93f66a357d253c7cd1f5480be34eca7"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","e8e71547d3827e5ab3921e4d58fedad2"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","3f04718b21b331086f6f25803edc8ea1"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","bfe8b16158d7fd5cc54cb6369ce88090"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b25cc87a373c101d87e7d5ff0d18404e"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","35862c7a4fd58f11ce7202eb5afdf283"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","02a836935588dbe9c2b1deba3869ad4e"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","294353495a2858c445bcf8ef3525fa3f"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","359fbefdaaa9dfbc9811f0fd75b0166f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","c3ff7fbe8da0fb8402821c59d70c84ae"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","d705a35c235b07ca8b2e16edaf9cf05a"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","7eeaa41eecb40bb9a0000c840843a995"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","3b3a2ed3757c5ea83feceddc541d31f5"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","f6b23dea207f39832b7a42e18485cc0b"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","184925c4c2ad23adea7faccab54a7495"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","36836162581a9d97a8aa390183fa70b5"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","6c31d6cf8493a9aff535552b30046b5d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","e288181811d88a055b35f53f076329ae"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","d9d2d1f883d522c6e785e75956ffa062"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","229b6b04062e322afa3696b8a66546c1"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","e385368b46e0a9ecbfc06fb3b92c110e"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","0cdc6799663c65a2213ab18880005bc9"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","2da035affdf3897825789d585c64361a"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","a2f88c60b22ad6fdf5c3057682374380"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","d768ab6fadbf84923d25a9b789422200"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","2694ce21ae68797eb898fd8f45fd2ee7"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","cb1df2b83c45805db44e4c716f64a4f9"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","001826721ee9cd5e7b6c2d74168d68a6"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","e64182cd6a8f4a42372aaf07599d07d1"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","9162a5387ba36c51ff4b1ffead292eba"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","1a0d55fd3117db6e40c1133f7072a956"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","d780e8250b9aea6722f8f62d410bf82f"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","a4f70a612c944c4af6d2030fd1115866"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a7d70f3db5cb012446503793d7d10a22"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","82e1c20210ade628b8073e484baf204a"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","b757a3bc39811c8eb106c0a70b874372"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","e5784bd02a29fe26e855bac0aa63f1a5"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b71690c74273c912b0d10b319e872a66"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","e54bdc6ad1eb2eed336a09db9023615f"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","9c2f63be172386c0e4a2027e5cdc8607"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","d299549185a9a100f624c25150daee57"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","bbdb87c3996f6f2947e579708aff9007"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","55dac14c5d155ce3ebdd000364e1fc06"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d4eef61709f278c3473750ea6c11c757"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","748e34b293f122cec3884853f810eba1"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","62211025093d43ee1b88acfcaca39c0f"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","b0852f6bf457cdd789b3358537af06b8"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","ef2bf453524e956f8783be1c38735830"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","a1d811d49c0a550c2b39a29719b7239c"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","80a8ab8f4b61123937c335c38fdd26c8"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","5211b5a299194905c53269ae63957dbc"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","936624e7338a031e4f47394f00cc9bc7"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","5807ca7adcb2344e5cb0905930ed24e3"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","ed428d03732b6beaaead53adfacb9dcb"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","bac5c4876d73596212b4d9244c77d8ca"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","08461fa6f1b38649c7a1c4a3daef4376"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","b42f31b3cf314f2f2ee2b78c6e597cc3"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","fab8e12d05ac7af50c59b0b44aa693d2"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","8a251962ff133509267cf8f6b32878bf"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","dce17abfc329dc8c5f1e1fd4cc8820a2"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","f7767af33f06f2d8f249ef7a994a85b3"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","29163c2c820d9d0832a59ed074f5c450"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","66e2a574c89fc9bdc919c4b3cf09ad37"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","66d52e8178b28adcdef02aa89b1999b1"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","e83c6969031ee8307841a2f653e0127b"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","32e413dd5e55e107bd6dde9613a60525"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","be319d95a98ef17a5694069e524e9682"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","d36f929c8ae3f4e3ce0629e818f7dfac"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","e5e89f19bbd60c56a679d4c9d09dec04"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","53a34624c5a713368b79badc9e0f9db6"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","90bbf449a25f5e4a9f025bcd8ab382af"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","499307de9998c78d6b1c1311e8c73036"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","38aaa969785f34b9781999b5613335d6"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","93a1b3041d743149b282002bfcb17273"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","274ffe5fe24d7da9017ce8fe05ede445"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","05270c17183a412f279598f5051b1fad"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","0415ada91931672e0b0a1a5e9b8dc345"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","f388194eccf3ccd85285a2b65d1a6fd9"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","e4f20ce1a5b569a14cd78877ef7153c5"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","94318ee44f2f32f02f8ec0f78505bf73"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","f3b8b456100bf912db0dde1f7f7496f1"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","b55762b719acefc0f48c86f1610152fc"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","3bcfd0889302a408e2afcf8f9251af3a"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","5786ba3a0bd7638e81daa65c5e35109e"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","811a6acf0c5aa49ccd32db1117e88126"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","cbb110df8344fc9ea29c9ce3c921a1cf"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","2581c40b278114b2b0029b69143c92cd"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","bd7b28b12d21c6f0f4a86663d86e04c8"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","963b963218982dc2e530684b404d6163"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","df677653c45398be1c8c2d88c6df61cb"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","14bd1f55d384873cadfce57a97fd88b8"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","6d2b09bf8438dac0ca10431a1aa60b48"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","41dc34c7695c5dfed91bbf9c7970b5c7"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","b2b1b19ccc9c3a07c7b4012f495b2649"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","be39c709ca117cddc93e24bbc5e49acc"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","0e512ea6645d55b059d5804634b88c47"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","f7e874ed97efd27963c6b516b8064f0d"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","deeec1c843726c6d9369ad0f47483555"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","1ee43d33ecdade6f5007460fef858b61"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","648fb1aec7748adfe612a1d81deb012a"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","7454ce210c02253f9809df2554063fa1"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","afeee45d9ee362be02a89bd3cfc8f425"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","81a29a78bd598135a8e4e1f4720ba417"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","9fb2d47e1192638ba1531da2c2ed2bc1"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","c744966325f9bdcf58fd6d9af35b131f"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","a6624803b394924dccc957af92ce9fad"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","7d26099093ce27d866e607b72ee1fb3f"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","1ad1130c304307c66b51332d0f1af468"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","b0cbc2a24b2d7819dc6ed5c5aa95b100"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","2fd9cf07ee5373cc119ffd9ffc4b82a5"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","57988bc322f433fda056731c7c1c79cf"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","815f661493a929c755ea851fc24c3589"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","a8ab3244d98c8a349bf6ef5a5aacf11c"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","9f72646f64075c19a443d7899d3bd690"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","f9896070bf1732357e0e54d0027eef3f"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","cc1a99d7925644b32931efd6a484fd50"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","b3a6a23cc7ef4387c5df321260d5e9fb"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","0a5dfad012f07057ab6f69ed5105e83d"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","a32b7d00a5059e7c159e95f23a7973ac"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","4401ad4d6dbb1f6b1cf2b8947b11bbf6"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","cc2334af2010cb84d07f7ddcef80625c"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","ccbb6342450501877a15c05c71aeb60e"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","8d9d1ed8f9fbd30b9acbd8ad12c64f46"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","3fcf08205281e1053744720e6200f21b"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","511c3e754bfc6800929cb6915bf58436"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","730a5d6a5c1395c6bdd00aec708a258f"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","c9834cd7b1400b627b0a74272c56cf52"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","91b193b858240452e9055033b296406d"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","93a6009580f75d338bfb054b53c5f728"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","bbcb7ba43e17cfc7fa453089fbf20b72"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","37cf19aa820040b6075555c1c5786dc6"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","13082c3e5be9339f242f10a924049c5b"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","19abe193c42c231c5b9fd14016efc694"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","5a2dea0ae2a2abc95b4ac04637244016"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","343d22f4b5e2fa8ed6a35dd857d65a0f"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","582635321c9f48f42b3b5d237e42136d"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","c2eea73abf8f9345d385e0aaf6a129d3"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","724806be112f4a1aaf5025183af6dafb"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","1f9b1cbab868ea6eaf27d47ab452192e"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","fc50d3c3f676428280a43b5e4a2a84d3"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","d68e31b3417d8e374e902185040618a5"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","f53b48a637788dc30d64172a3e61e16a"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","fb41ea7af6ca7293660f1b7e1ef365eb"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","5fc4cea4a1aa2b2925702a0ec420ab18"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","067fc0159b9ff3c9f5e65a4bd02b34dc"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","bf0be984e06a38577757f4c8fbc01e4e"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","e16ad8a87e8490229c878ff24488e0bd"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","6a5bd3caf3641dff4de32c7d5a959a85"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","192d68a9342b865bd29ba7e6b0914a2e"],["C:/lmislm.github.io/public/about/index.html","e1cbeb1c1e8407293b0a2937ea58e8fc"],["C:/lmislm.github.io/public/archives/2016/01/index.html","167483c3a48d159789fb44fcbee0d348"],["C:/lmislm.github.io/public/archives/2016/03/index.html","ce9df1323e21a8077e4ee24233229c10"],["C:/lmislm.github.io/public/archives/2016/index.html","d82a7fad5245103b30b1570a92ee9114"],["C:/lmislm.github.io/public/archives/2017/01/index.html","4733a885007b53ce953f97a29fd32fc6"],["C:/lmislm.github.io/public/archives/2017/03/index.html","a22f98b90dfdf7af881813d46e298101"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f3162ba37bcb3f13f3f4c0da775bb98b"],["C:/lmislm.github.io/public/archives/2017/05/index.html","2938899062080a69abc714e4cd2396e0"],["C:/lmislm.github.io/public/archives/2017/07/index.html","427a4e18737090c6bd5e18d3343b4198"],["C:/lmislm.github.io/public/archives/2017/index.html","6b43a3ebde3c812f5ba852bc651a597c"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","de93f4a32f9779a046e341cc644f65ae"],["C:/lmislm.github.io/public/archives/2018/01/index.html","0ace6e02be3a40ae52696056d82d3103"],["C:/lmislm.github.io/public/archives/2018/03/index.html","16d588179fe535e535ebfe38ff469f6f"],["C:/lmislm.github.io/public/archives/2018/12/index.html","f6b87f12b8f1a0d030784f8c42ce8be4"],["C:/lmislm.github.io/public/archives/2018/index.html","2307c9d050fb5eb2b302cc7a1348f150"],["C:/lmislm.github.io/public/archives/2019/01/index.html","e49f171ccee385686762bf4e2f5f3654"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","7d36cf5fcecdcdf7a2954349f08bf73b"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","43c03221f8cebdb370e603b0359b2ee0"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","e2e899ef528a2a8dc93b3306e8c1d0b3"],["C:/lmislm.github.io/public/archives/2019/02/index.html","05facd06b72efcca62f5cce3d890a29c"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","0f37757209d45059dec5e2b55683304b"],["C:/lmislm.github.io/public/archives/2019/03/index.html","c08201084ae3ba5fc13ab23307d5de89"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","28dd689703010e1309202d01bf8c99b7"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","ddc0da9aaad2a10c04b96b9b677f5a3e"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","51a1740509ef7382772bd6ba791e9094"],["C:/lmislm.github.io/public/archives/2019/04/index.html","eabdd84b04bd40096bd13422821515cd"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","4a8dd2ddf652c216cb9bfbdde68051c3"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","63be5df39121f93982dd666892095f76"],["C:/lmislm.github.io/public/archives/2019/05/index.html","d1bd5a1e347353ccb66285416b3ca9d0"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","ae50ccce6f845c3e1c2bf4d5d091acc6"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","c02663b0bc7d13b1abb947b7d27eecc8"],["C:/lmislm.github.io/public/archives/2019/index.html","670817a919e8fd900ce17b6516262fe0"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","d4b32aa0748fb0728abacd0289e977ed"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","6c6542bba29026d020fd19b592e72142"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","ca03854352105807396597ba81fdd541"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","c045a9d26108e01173dd3e6facd00151"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","1ea02ad266dab65fa7da178ecf2321ff"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","403fb8a8d963f3424ef8561f26064380"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","0ec72906fb774c0f65c6b9d50a597eba"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","7b5a98dfd5a45ef2e942850e3440932c"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","d39931458dbd617fa501a2ef7ec0bcb7"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","c261c7e8e5abd15d1932e1105cb91e07"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","0f08b1aa4cef3847bf1b2e08f49d6221"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","c8f34319530c6469d839c460119eb635"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","a55d442a2d1988215cfe90bfc773b945"],["C:/lmislm.github.io/public/archives/index.html","5efd8cc59ee43f800d21790cbeccffc9"],["C:/lmislm.github.io/public/archives/page/10/index.html","7ad3a16231a585becfb504d70e6714d4"],["C:/lmislm.github.io/public/archives/page/11/index.html","ce021e880e029d6a36c3b708b636385e"],["C:/lmislm.github.io/public/archives/page/12/index.html","3f2b8e0448ea0a662739637a0a0097c4"],["C:/lmislm.github.io/public/archives/page/13/index.html","a1a42f744d6c7e2ab64c8161dfb5327a"],["C:/lmislm.github.io/public/archives/page/14/index.html","e42327e3d1fcdf4923d0afcbfe378177"],["C:/lmislm.github.io/public/archives/page/15/index.html","1fa457d79d89ca3ed720109017d8bc6d"],["C:/lmislm.github.io/public/archives/page/16/index.html","9fa8814a05ee850b597c94b6773933a1"],["C:/lmislm.github.io/public/archives/page/2/index.html","3e4d50249f72dc26456da8d1bb07faf1"],["C:/lmislm.github.io/public/archives/page/3/index.html","ffe309d3f23e519afb5f13d4ef5f8565"],["C:/lmislm.github.io/public/archives/page/4/index.html","acb565fb81fe415945cd5d942fe0af7a"],["C:/lmislm.github.io/public/archives/page/5/index.html","2e6e4206eecbb0a3e79ebc16bf32fa5b"],["C:/lmislm.github.io/public/archives/page/6/index.html","95c32a7cc94c21b9270bc4f838b0d95c"],["C:/lmislm.github.io/public/archives/page/7/index.html","faf6a5605c5a3c0767ed2e405ed3329b"],["C:/lmislm.github.io/public/archives/page/8/index.html","cbad44bf0a00712344bab51cd066c486"],["C:/lmislm.github.io/public/archives/page/9/index.html","dd87316b424082bc588c30738231c23e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","572772c52addbff68c201436c3831170"],["C:/lmislm.github.io/public/categories/index.html","7fb86f7e719effc21cc34b03b97bcb69"],["C:/lmislm.github.io/public/categories/xx/index.html","7e7ebcf7dc1159dd1652c50962990ac9"],["C:/lmislm.github.io/public/categories/学习/index.html","6035fde58a137736c3f5f957a0a34a2a"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","09778ca2be4d3b95e7e76ce83c4b183a"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","2a8fc6159594acd65a74f34a1f35f13f"],["C:/lmislm.github.io/public/categories/工作/index.html","6ebf3fcd0991a46d422bd21fed275e51"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","19548dfb11099dfa2860f9804ca019be"],["C:/lmislm.github.io/public/categories/技术/index.html","5024bac94117b343cc15a28a8202dd62"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","a045e331337517e8deb3525c7ced5fc8"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","ccda425a850f86e22325744ab10bc264"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","34c4fdbfbfac3bf3397ba37178a6ddc4"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","0a9ea220be810e8cea936fb9f1cc8752"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","7c0b2aae3030f7739f1c92194d425b2e"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","32870807ff7aacf7717f32b1ae24bc7f"],["C:/lmislm.github.io/public/categories/日常操作/index.html","6d9c0e6625ebde775d9430b85786a87d"],["C:/lmislm.github.io/public/categories/生活/index.html","65a75a363148020cb75efd9ab699abc8"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","8f24454d4eea5bfd71e7efe484da74a8"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","b70549fdd16e2b833219659ed1914fb9"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","6d6002f8777c9014e44523d01806f01d"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","f80d255fda78802786d3771079e76e7b"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","8370521b7cf8f956a8c1518835bcbe96"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","9be093fc03d86ed7202adc77973cef33"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","45f697881754da065f8bdca7bc06a578"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","59969457a2be16d525e92244f6141177"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f7387810e516116513645012314a3329"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","b1c0710355e19dfc5b3d25252401d7df"],["C:/lmislm.github.io/public/page/11/index.html","df376fa08794ec9501ab43593bafbfe9"],["C:/lmislm.github.io/public/page/12/index.html","5dd2887aaa79ce9086a10f0b89f3a454"],["C:/lmislm.github.io/public/page/13/index.html","26353fe4e2cbf0c348fd37fedad3094a"],["C:/lmislm.github.io/public/page/14/index.html","605a58a9d83b949ea83dad2a7e85e1f7"],["C:/lmislm.github.io/public/page/15/index.html","eb26298d29135a2c662d3c5ee9f1a527"],["C:/lmislm.github.io/public/page/16/index.html","2fc350dd26abbd306ffc38cb4b5d5822"],["C:/lmislm.github.io/public/page/2/index.html","146eb8fbe29b2f15b0a7aad596f9ade4"],["C:/lmislm.github.io/public/page/3/index.html","1662787471a279e40f4cb77ad4f7c325"],["C:/lmislm.github.io/public/page/4/index.html","1e49c2f5a038c934036b3790f7f72cf2"],["C:/lmislm.github.io/public/page/5/index.html","7eac45c7b56c159c40a4bf6889bbea76"],["C:/lmislm.github.io/public/page/6/index.html","508d5675e4611238ee4865ca5491ef7a"],["C:/lmislm.github.io/public/page/7/index.html","4dbb11497e9d3329aaf43cfd590f1181"],["C:/lmislm.github.io/public/page/8/index.html","8bc4a42d8173756047efab8cf47951ea"],["C:/lmislm.github.io/public/page/9/index.html","2c7a40e19dfaeb0531ee353ccfb665ba"],["C:/lmislm.github.io/public/tags/Interview/index.html","0bad52bd43649132025dad19a2b89cf1"],["C:/lmislm.github.io/public/tags/JS/index.html","53aafa5f18f6f29745176530011793ec"],["C:/lmislm.github.io/public/tags/acm/index.html","510ea094bc92e599470e7c7b1c92ffe1"],["C:/lmislm.github.io/public/tags/c/index.html","9f4ba30b0c870b4da5657a75b8a4022c"],["C:/lmislm.github.io/public/tags/codewars/index.html","3621f651b3115bb78fbb5f977d419ea2"],["C:/lmislm.github.io/public/tags/css/index.html","62d9c51089b402449789fa629397af95"],["C:/lmislm.github.io/public/tags/git/index.html","abb713c003d08fe38b7201437b3245d3"],["C:/lmislm.github.io/public/tags/hexo/index.html","2a504aba9fd6a4faef3f795772e32d13"],["C:/lmislm.github.io/public/tags/index.html","a4d5fbd70c2817d8f26b592614aeefc3"],["C:/lmislm.github.io/public/tags/markdown/index.html","0cdd348eeb9ecb65cbf5a9b1401c69bd"],["C:/lmislm.github.io/public/tags/poj/index.html","00c6a28e6f17e4170e6e40727fa09957"],["C:/lmislm.github.io/public/tags/shell/index.html","481cee2fdf234d8e17fb9b69d5b25f7a"],["C:/lmislm.github.io/public/tags/vue/index.html","7fe79838d680ba45c075c92b510eea8a"],["C:/lmislm.github.io/public/tags/xx/index.html","aa9ad26bc6d2b4647714cc595d4563f7"],["C:/lmislm.github.io/public/tags/前端/index.html","5797bac26fcd5b1a5d1ce764f66c7751"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","1c70d40068e6148dfa00e3d79eb859ad"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","b86dd446684b211e45bfa716c379b84e"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","65537f39fb6448377e3d5354706016e8"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","046baa9869fd04a3b998ed201f5367d4"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","e45a23c95f673491ffa2c735f5713e67"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","14851fd622d1157fe8e025e107e2a834"],["C:/lmislm.github.io/public/tags/小技巧/index.html","7d498b5a8d97d54f750d44b48eff4a93"],["C:/lmislm.github.io/public/tags/展示/index.html","9f5cf67ff895431a8dcd34c12b67aa53"],["C:/lmislm.github.io/public/tags/工具/index.html","f3093d644ef067423678a0b14246a759"],["C:/lmislm.github.io/public/tags/感悟/index.html","8846d95b7b048f91e25ef12a23a82850"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","947e6ef482acd66ac9788018338d2c58"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","df6227651fccc32e43ca5a879f0df86b"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","61c3968fde905bd63c5e55962035dc77"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","b2f9c964738536ef1bb25c0003d2c7fa"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","1eb03d75f63633190993f93580caeafe"],["C:/lmislm.github.io/public/tags/练习/index.html","cbf096f626bb1c24b8bed9e248fe845f"],["C:/lmislm.github.io/public/tags/编程/index.html","b64f25dad960c0610f6ca3af523f5b0a"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","8675a8c699044f831146a331848a472f"],["C:/lmislm.github.io/public/tags/运维/index.html","aa1abe956149e7c11459927da4766053"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







