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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","bf70e12fceda0daf86faf6e9becfa0b7"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","8de13876296499fcfbbb2f114b0c538a"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","47532316b80cb607620dc4c27d0e7c1f"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","e0f9935dd72d4e6f4ca4f1cb94fc80b7"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","850bf0e751b860e119ec1564e28ff0e7"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","2650965c89340303b7708f777059729e"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","0daed867ba161d3c5c09d44f48cf9943"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","0fc7ef92135fa6df1419ede2167d4936"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","89e06920aec5f0b45c32f4301e545d17"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","39a8604c88594018369dd85602170352"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","b3cddae93a44123a476c8aceefa04582"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","d7035f0fe4f2eb5ed2c2c2c3621fc941"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","e8b824935fca8dc7e5a0d441173e12c5"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","5128adf33cde5bf438b125807a8439dc"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2d17b445eaf61b46e33560d2daeb162f"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","8fce585155da6138aca0fd4026b5ab5c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","2edcc12cc33a60e66e6080cec58edef1"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","531660961e756f41dbec6066ebd488f7"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","4323d6de7a6b321e09b0bb86905fb7a1"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","596b09c96453d899a7427fbddde7fff3"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","db36d92ffd88f5beccb6ed541345205c"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","c884f341c3ed81d4dd153f776dadd39c"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","9a6fac7bd26dc694b0c1d75bd68d689c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","3deaa78ee55c6c1a6348dbb22bc9fd3e"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","73882e5373275dde3c533d2e62fa246d"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","04134f5c91d9bbe6577277453f27701c"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","6a4a045d4259ec7edbe3597f1c3f202f"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","631925bb1745b83c879b2835fe416bef"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","ddc6e0789e6fe07d90dcc12c15c0e07d"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","0467e3029fa49c99cedaea1b2f389e9f"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","ceb3ec7bb59eb065e7d705c4703dc107"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","e7a0da5a44454de92b568ff044cb4ba0"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3cae5e669f83fa11ed5d3e0af35495a7"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","3e10df7e686e97e31b8aa3637e069eb0"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","273f88c1601e3b5a47737ef0fade0a8f"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","9b6ab5fb0854ec6fcd37bf5581db82d6"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","a3f5ba17128f10793341fba0478b162d"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ffc7808c4bedd63db71a1af8ce4f1a53"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","6aae17c0db6ff8471ad0bf54c0f1c6d5"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","db45cfcca6171080cb008d08cd2eca64"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","c75eb7d2ceec1cb23cf49c244e4a99f1"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","59e571ab0a2ebe0a04d47662189dfa66"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","3325aade8ee3860113d9e41b0a4b2cb3"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","26dd89481cce8cc03f0c3c45aa1cc0fc"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","af2738de90a8533d1d8532e2d2a2ede8"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","2b2062522a08e967eea7484eb2fdce8d"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","d1cdf42925ec6a45ba2923fe92e242ae"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","1badb091d5247f6c201a0374392ee9fd"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","addd935400a5ca076d9f35309d9d0dc9"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","204cba7387e207a955b74d3bdac66bc8"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","d69299b5692fe6132226281eafaf43e9"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","3d343544b9aa917411edbd73539c1770"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","877ceb23ef8601f3749afbdd79f03947"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","a6371d8eca251568e22c2106c95dcbf7"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","1e318bd465536d3acc874fca7a125062"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","6f73d561efc7f9edb1e516f01b9a5eb9"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","a51e7daeec16d9cc4c04f8a23e257ed4"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","baf34a6681d320cb71629c034b468608"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","272d4e2871e698f5ed099f94ff809456"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","94f3030202ee80af1ac2dac8cbbca7bc"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","f3ad0d4ab205cc9d8e2de81bbd7002d6"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","6e9e5beb74916e82775fe0060eeb55b7"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","2ce2bb02402f9e191dc396b6f0397f0b"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","e007e72e804e9554e30228eb2a9f64df"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","f323ca8c32f8950322f3f7ee03c3799d"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","f1bb0a7efb99b0594687ff4d710c74c5"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","8a09e03a15590331b8d7e51c728336e2"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","67310de2657dca54c9680b9b952ac308"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","66f6f6db657f4044596bd9dc887cd98f"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","87309201071ce54ae3468065a828f10d"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","197ee6cf6719f04b32ea48f89c8f9524"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","a31164dafb91461a4d40066fe7486d2a"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","0f807ae872459e8c5eb7d698d4bde6a9"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","271fb12d33364d2779750316158c0b81"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","c7dd43ddacfb2309949717a588390e99"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","c3175a147236ea48179730672ede1f2d"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","7045d786951bb68ed05682f009998686"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","453f4b7a6bc55b74c07999a631b0becf"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","ad60fcdcb1fd1de8250f8a5d111cd34e"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","4e468294ce159465981466991a319414"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","f2580cc4ca163b6e9eb895bebe0d6857"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","f3a6bdb12c52b0795367fbb0d71e92cf"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","a9fd1266f8a5ec3a4deaee513ca8caef"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","7be4e1ca489f941f3794b4cdc539d2d5"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","ea91f81f7282d7c617a348e59e1edae6"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","5812fa282717f73afb96eba2cd887e38"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","ca6196b37fdd9ff9cac767ba3d4f1865"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","cdf75ea824ef1b9b731548746c7c903a"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","1886b3f85d22fda6d802381783a874cd"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","c5af9bc7311654e8debbe5b7a1b09b55"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","7b556ba1c2db0f5fc022de5b5242ed63"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","eaecfe6ddae3109d96deb4b4141da163"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","634f87734d267a2b7a611ece4889f10e"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","0ba83e91801bb837c018d5b4a0c6bb2a"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","77621beff32f8f3b2ed1f6ed2c902f1e"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","165d498ca965e2945a9c0ac51c389ccb"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","959171bab9650128fa260b60d544d3e1"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","897da260c6c5e4c3841aaeb47bca9378"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","79c48776a5d840c3652ed3215a048dce"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","4e6720e5fadcb8e9f446b96df0a669df"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","bcef0a46c310c57d0e1a4d04ddbcb9e6"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","bc72dfdac473690f123e5ceccc8b1cd6"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","acd85974d7464e65e7e320abd82f4a4c"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","00d124a5ac164cd44ea1683d266136d2"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","6ca1f45b7c1f8f1f584abacdbecb5be7"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","bf6325f17ff7556dc04ba5ee1d73ad82"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","0c993ef7d51961d2f4b7a21b5e5e865f"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","ec5c47380ff64f647acceb28fec00ba7"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","f27793bc40b703525ac3ae9713982ce8"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","aae6c2548d68921b460a7a9d8ef32979"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","9cdc7ca27a7d980069f5c8c1016ab55b"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","543530d5895a2d99c41fb52104754fe7"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","f5bc7d2a251a2e11d956147d2e4d1794"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","2914affb23494243c0157b92e51f60ce"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","9d169b62056f792c4752008c89199c94"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","0c6406f1d5d050c57d50ce5b50887811"],["C:/lmislm.github.io/public/about/index.html","709bbe578d8519ea8d6b0b9be61f0686"],["C:/lmislm.github.io/public/archives/2016/01/index.html","b6292a42633a19001cafd1f5e903f0f8"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8e897e14093b71a20b61312b98978ec5"],["C:/lmislm.github.io/public/archives/2016/index.html","8d80272f3cec6750053e1aa356b121eb"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e7acf1671d122dff40e412bcb01cbeda"],["C:/lmislm.github.io/public/archives/2017/03/index.html","224cac8da7f7c6d4aa2a82871f21e45b"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1e8f7fa46378f9302a1de7f9bf62b63b"],["C:/lmislm.github.io/public/archives/2017/05/index.html","8474cf474eb1d966ebb5b903c5e84529"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b823dc24066496b78c3b70161f6bbb67"],["C:/lmislm.github.io/public/archives/2017/index.html","bf41f0e21de8e38d232f61e730d45bb4"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","ac2293207776ed8e54eebb7e61c515b2"],["C:/lmislm.github.io/public/archives/2018/01/index.html","d91d68c11b61154adb634f7b6ce3138b"],["C:/lmislm.github.io/public/archives/2018/03/index.html","e4cb4a94dc7751dab58503952421f6a6"],["C:/lmislm.github.io/public/archives/2018/12/index.html","351d10139a7ebddbb843ed3c4c1f239e"],["C:/lmislm.github.io/public/archives/2018/index.html","471f4d87fe8a80230cbede7fbaf3e8d3"],["C:/lmislm.github.io/public/archives/2019/01/index.html","2570610c5dbc9d10c9908abd9889e49f"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","6ce403286cde6b0ba0d7851e620090b9"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","d97cb78c44e4802de671d1ede0208e18"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","3541b2ec3e531326da640785cf491b6e"],["C:/lmislm.github.io/public/archives/2019/02/index.html","7bcdad04baf21f109e4acef860729291"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","8adc62ba7fad4f7c9688a11a17012884"],["C:/lmislm.github.io/public/archives/2019/03/index.html","67c20fabfbf4f41089e20994d9684404"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","0448875070156e044653efc1d9ccdf7c"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","6bd4dd9ec7a2bd99c601759b01d6650f"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","8c575d82bc40abf96aed0df5fa72b102"],["C:/lmislm.github.io/public/archives/2019/04/index.html","5775634229ba1c1090ea46a61c0c2815"],["C:/lmislm.github.io/public/archives/2019/index.html","f30852022d7dd20a5bae0656434d47cd"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","45ee4922a8d68d0dc3d601a7b04b541a"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","7816a58e25ac3586a4102e23d86f1cb5"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","396f2343c23114161baf3b9549368184"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","0b60280c4ad67d80d850c82442e1a116"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","de879ba7313cfcab3e658ed62fc25702"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","7d606c9d618fda04899e98d1218df99a"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","8a2a2e9dec306fe5cbce233cb04d0186"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","ceae5a75524a6275ef6b298288b8e120"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","5752e461f146aa24d509d8a17f5b227f"],["C:/lmislm.github.io/public/archives/index.html","54ac2440f4482271319b7358ac972ea5"],["C:/lmislm.github.io/public/archives/page/10/index.html","79161adef828d7d026b6e522d916f538"],["C:/lmislm.github.io/public/archives/page/11/index.html","9ba9a802b0acb58ac960b3f91a6c85d9"],["C:/lmislm.github.io/public/archives/page/12/index.html","8f3467f41b34956df24dea5519477a3c"],["C:/lmislm.github.io/public/archives/page/2/index.html","35e52bbe53b67cb19cd829b59d5a7b5e"],["C:/lmislm.github.io/public/archives/page/3/index.html","492afa6f5d1680266c2a01d0ae544195"],["C:/lmislm.github.io/public/archives/page/4/index.html","1aca5e53d0a10da0e5aba7f4fc5a58ef"],["C:/lmislm.github.io/public/archives/page/5/index.html","dbd8fd8a2d963e9ddf999a827f4f6e92"],["C:/lmislm.github.io/public/archives/page/6/index.html","fcdd8f382a41acc1f2ec30f09d378f67"],["C:/lmislm.github.io/public/archives/page/7/index.html","812956f88553046769d21332ce79fa93"],["C:/lmislm.github.io/public/archives/page/8/index.html","4261ac5b5d390c3be5a83bdcb54b95dd"],["C:/lmislm.github.io/public/archives/page/9/index.html","6c876a7ff0aafa308b367dcdce7afa33"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","91d86c5a06f0f3df05724665dad8ba24"],["C:/lmislm.github.io/public/categories/index.html","4ccbaaddaa82fa2d6c13f2f934df7486"],["C:/lmislm.github.io/public/categories/xx/index.html","c2e920757111d3f246c7aa95bf8f6efc"],["C:/lmislm.github.io/public/categories/学习/index.html","da1c7e72dbc5ab2105248931db97c8d7"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","b1157bff56c41fb5cb4a2ec5b991014c"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","6c4192bb5a33da2e8205dbcbc6694aa0"],["C:/lmislm.github.io/public/categories/工作/index.html","2a6912b174b857a7ae28b016de576286"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","7734835e1217149ad0c4d1c13f2db332"],["C:/lmislm.github.io/public/categories/技术/index.html","b83cea352cbab84d33f4b3497e2c7399"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","915357ced9ce96efb42a7ce06838d5cf"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","3398f9988a12f5060777d6cbc5f55d93"],["C:/lmislm.github.io/public/categories/日常操作/index.html","b3faef5d0041f012b11f2153a5eec482"],["C:/lmislm.github.io/public/categories/生活/index.html","1483c7fdd5f9f30937213669a7de125b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","7c26234c1669d8107891a74b120a4195"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","0633db03b03a0a8037770210e5af1705"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","d6ae9e043db215ca17ef6916fbac7898"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","11b2fc55d58815742775f92bb29513d5"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","94dacb6b578ef9ae66b8943ffb2b30f7"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","e794ef3e9e67d69f51e7703c12bbfddc"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","3a4b703073b0038502e613d5ff78e1cf"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","ba850940dca0e07ae832f0f0759c0508"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","d45da0758726b4164ad628023f268378"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","c6ba424403a5918ad224be344e06d50b"],["C:/lmislm.github.io/public/page/11/index.html","39422923d02b701b4aa7b6ad1655b3a3"],["C:/lmislm.github.io/public/page/12/index.html","d64279270e37fc506859529e338ee9db"],["C:/lmislm.github.io/public/page/2/index.html","3d4bbdb0eea2495b2085f4b99dc80af2"],["C:/lmislm.github.io/public/page/3/index.html","d5bf756dd68f73dde1fbd0f2212e4426"],["C:/lmislm.github.io/public/page/4/index.html","51db38d3912ad67f622fee89f4ebb212"],["C:/lmislm.github.io/public/page/5/index.html","ed2132027451307cd67d6b7af37b16a9"],["C:/lmislm.github.io/public/page/6/index.html","779e7e5bcb23afc23b7b5365c356746f"],["C:/lmislm.github.io/public/page/7/index.html","75dfdf69501d908050c333052f39bc70"],["C:/lmislm.github.io/public/page/8/index.html","ce27b3d4fdc23cef2008040bba85680e"],["C:/lmislm.github.io/public/page/9/index.html","daf3ed9e8d65264ab6dcff4962241324"],["C:/lmislm.github.io/public/tags/Interview/index.html","a735c4e120351a4e7f8332cb52c01914"],["C:/lmislm.github.io/public/tags/JS/index.html","7e9658e961e9ff9c29074c1bb617d0ee"],["C:/lmislm.github.io/public/tags/acm/index.html","4d636ede4e3aae8f1a4071a5301f873a"],["C:/lmislm.github.io/public/tags/c/index.html","69cad0316c90bb98e87042057fdce458"],["C:/lmislm.github.io/public/tags/codewars/index.html","927a64b7db617f23d8fda1ddb0a07e9c"],["C:/lmislm.github.io/public/tags/css/index.html","b0e43954527d3fbcaa32e7495543ff4b"],["C:/lmislm.github.io/public/tags/git/index.html","49f86e39a8ab3c4112958e483b7af822"],["C:/lmislm.github.io/public/tags/hexo/index.html","4975327eedf95f1af5ccf5bfe1cc96db"],["C:/lmislm.github.io/public/tags/index.html","6782e1ea14b177c842ac23d68cd9297a"],["C:/lmislm.github.io/public/tags/markdown/index.html","082823b7fc19ae94d19bcef6362ef56f"],["C:/lmislm.github.io/public/tags/poj/index.html","bc1eaaf477c0605ea8a0bc0cfc35b38e"],["C:/lmislm.github.io/public/tags/shell/index.html","8095eafb38408aeca3368d50612966cd"],["C:/lmislm.github.io/public/tags/vue/index.html","8729655ddeb37e27117b00dd01214f62"],["C:/lmislm.github.io/public/tags/xx/index.html","8c2d0e6debd4ff81f91dcd6c14de3934"],["C:/lmislm.github.io/public/tags/前端/index.html","1de0b10330075acca30ba70e19d1aad6"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","2db8e3660331041ae421441c85fa6799"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","eacb0aaa3ca0265df642e181ad869223"],["C:/lmislm.github.io/public/tags/小技巧/index.html","fd5bdd73f7fa63ddd3c710a044544055"],["C:/lmislm.github.io/public/tags/展示/index.html","1b3b6b2ae9c93fcfea33e661391122ab"],["C:/lmislm.github.io/public/tags/工具/index.html","d3bf06569f897d2f8c69749303201a53"],["C:/lmislm.github.io/public/tags/感悟/index.html","bd399b17212faaf8b3c156fb08b85454"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","32f431b21ca8f17bbc9b17c44a736a71"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","b3b69c1e23a90f2f99e00e2b417fb404"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","bad53a2a4c0a5fda2e3cc9b6792e0d28"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","b285465dc7dee19dc6b8e32e1cc653d6"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","7fcfe536d3fdca3c9bbb367246bc0192"],["C:/lmislm.github.io/public/tags/练习/index.html","689b8ace5898020f7edd9a55e8d2e014"],["C:/lmislm.github.io/public/tags/编程/index.html","baf48b569d9d9731a1d8f662449b4910"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","a33ae1758bf3e313472d408db0a34cc3"],["C:/lmislm.github.io/public/tags/运维/index.html","c0364b6c338ed25edef8c5dde45a31f7"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







