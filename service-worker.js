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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","b06aa02d97a88fdc0c25dd8460bf9aff"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","4d34b5e186f769b758db933f9e9cadaa"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","0336e076dde59abcd5f29415f022b353"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","8683cea9971ee0d80be9b8910e590e5c"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6e8afb6cf1e66a4979c2b6f9d22de6c4"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","e34c00667f82931757c7d17a6d366476"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","bbf39fc303d4ee80a41827bc026c7344"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","7d919bc9baf314d36e5b330e868c2f22"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","f76796fb9231196a1ce1ae9b2187a432"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","d9da15a3cd4aafd0b81a520241bfeb7e"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","0b81f61004cb87a94fb2ec0cb872b708"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","b5edb2955bfcafa64129f180b6ac24cd"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","e7d1bef2764250a759e998f342ecff8c"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","36fec177d5488903ebeede8c66317ae6"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2e38b0fb86850e5953bf6791033108fc"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","8fb2dd3f000aa1c5ecf4360003f60d9b"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","853d2c3d1d675b12660c0c746cd03430"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","db62eeaac6c7eb793b70a2b54e19618c"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","47d9a027f51b3fcb3fd2759255d0bdfd"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","aad2dc1fa2c61b1031d92092975d13dc"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","f8f18c588f565342b67a0b65a5d743c8"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","09274249e1d85f9fa647b0f7745aab58"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","4cf8cd3a7e17616d12eaee7c5bd2325b"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","0df1037ed5a53134f3e7c21023b2eb42"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","2a7b27f1cec093d688a92c3c6fca4268"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","17ed466081a807c56bf540819078191c"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","649f1a47b77a38e6f8c8c53dcf74df4e"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","61e749f292e9033f7eb6517099519d40"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","36c8db5b9b418177c6370fefdd7b7409"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","22532e43b13e5649ac88fac1769ae8b6"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","5535ea4fc887d15604e7c79e352660ef"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","b0bc52d34f462c4633b28ee24b09686f"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","d813892cf744a2f8c298d37c5d5ac398"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","989a2ab994f661700ebf7f565b173d90"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","5eec4a4ac3d5c55858a9d3bc3c5946aa"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","5c110c6646a5fcadfadde3113993e2c2"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","effcdc20af9cdf777f4c3be5613acdee"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","a4768cda5d3857f35e58f49543d33379"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","182176f05790966dc6056877f7092da8"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","7f84c36334060fe09c1b37ac60934b91"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","110a8ba3d4d51e551dc7c6e8e58bf3f4"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","5f1f397c822b4a80b63731e551315454"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","d337bc2e37da880f04f8840144f37d07"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","08dcb4051461012f80078617a6324bcc"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","91a91c2d2910be8247db67bfb03568ab"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","21a5b35a2f337ca78096d3f3d8897cbd"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","288869a4fb69c1df2c9aa5746ccae06c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","25a6370fe7d4b02bc64a12880290f64b"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","5c0d74514975fe2bd95813f566d209d6"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","c0f0ffbd3ba2f72d9557ce190b2aa352"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","cab2186e6888b62f32aaa328444eee94"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","dcf0822d6fe739464c9f5191bb8dec64"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","13e4503ce2b8fdbf91b1755ccd01e269"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","4af199c111d3c819056e15fc042d3773"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","11a1e1bdbe498e8d8b28b792ee66a014"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","cf1f30bb307dea675fc63d68411893cb"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","7a4bbedf87e324a8d62905bd13da5d4c"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","579c59a797934314500b3ae98762810f"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","82a9b9f4ae01fbf79db90bad069995eb"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","9fb7b063ca543b86038d1c112c73e571"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","723ae0d004624f6ff73ab4f138feaa1e"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","55d28d1a8f1b439327c4661bd240468f"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","28e6d5f585db11947d8760a5ff19fade"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","07c8d22a8079fb383aeb5635ee50204b"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","dea5950e4060c43517e333982e6f606c"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","e4908b76231e16853a88c81616f6aa83"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","22a89ad251c60022e0151deb6cc1e46e"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","d951825adeeb5eea6958e4b3265bc849"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","c8ed9a1878945d1b84a237f4f984f31f"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","0dfd685922fbe45dd45419143bcad8ea"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","e6cdd3abda308fdb9a15c3857fd2f6e2"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","896326d0fccb0b5781512d3869e8717f"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","e4a42c8c3cd0e1b37bf0195d72631845"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","92035391523ca2190c055e5611e191fc"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","e38e2310ee353e23e45d0b3de5267b42"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","0441ffe4cba214e27c799687f3258c83"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","4ac8becf2b9fd95651d470948b270811"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","db7d425719c9670b6036f2549f4f3969"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","31f848bf717813321761b6d8f3587f38"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","d3ea69a6d1b7008ab05eeb29c23f16fe"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","fc09a2301f294f699e53100f6e61f81e"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","f95aa2b9c77807f9666005d5bfacb4ed"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","80f710e79c2aca282b4eb8589606b0e3"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","3d9c93468d4970f34fec09218a91c431"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","eea76a7e2cf194b6e3986ea48178d0f5"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","04adc23448c02cf399fb002d9f64dab5"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","f76e0a840d5181904f58dd3a2e596dca"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","4639ef4144f2f8ab4d47838e953523f2"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","647c6f1af36c64ef0a0c753aa2fd11dd"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","d05e7ab4199e98fd64a478093d24c61c"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","a8373bbb5dd8791122f5b54209641b6b"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","3e4dc53d4873a0bf41365fe154818009"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","a40b6504b532aef4e5d1aa245700359b"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","5537cb369058f5917251001800114e70"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","25a28e5ee6ab9b26600544832cf22b76"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","42a25c8ba56ba94e02e627c080a1d62b"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","e89427b75fe51ea845ed0c1a60aa3012"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","67650da9587a549c8f239f6b990a6211"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","209bbe634157c5011444039aff3c1091"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","c13e5e8f9db77a813df9749c85eb717a"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","3f633cc2447dbbb9a05b0f6af70a180e"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","8c2519519014eab525f0087fc26378b6"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","ba887e82793dadf6c0d5d892b8519a85"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","9e878319e4f851c899289ed86521b31d"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","6c3b89511402a0ee6f33be78829207bd"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","895b48438b844a5d507c6285639f500b"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","b8445bc4fba882412836f025655e61a0"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","a3b03fe957159ffb971eb0f25c117447"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","794b66134142071515c45a26ff215aa7"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","2a75a4dc8d7e05edf682079738e4ecd3"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","7240f6b06aaefdb2d2fea8bd77ecfbfb"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","dc2a6032191f99fa1835ef90218be6fa"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","1d75d6123177aa3e03dffe3c0f61a115"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","251ad9bdc26284f834c1babf800fb338"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","fe077b0cafe6ff898c724718ef8fdd81"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","483a33101bd44e25389c6514af7a374a"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","dcd67ad678ab115e825d2bc636bf205d"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","85d5acd3b3c960236cfe0844b2f4a4cc"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","ade25c5f6af901d3d973d75504d0c4f6"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","759f57fa8a0f0fa0467c9cfc5365e0a4"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","db4b224f3578533f822a7f9a32eff621"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","efbc7b27f4f8ca7c37ff5f8d562791e3"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","cc29dd989022918b35ca6d4c9806bcdf"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","3b9943484cd2d026ff63c6b4f7026fdb"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","50bf23df4832f0dc35afe6ebad5cda80"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","5c51b966b17fbef888e50e57c3d256f9"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","230daff02bf6723eb55fb9c1092599b5"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","89bea0c475dccb3f81a14c0a8aca2fe3"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","c4c3c0e96e0f95bac601e345a026ba2e"],["C:/lmislm.github.io/public/about/index.html","f5306c1ee2c94a30517b870d522251b5"],["C:/lmislm.github.io/public/archives/2016/01/index.html","f38148ba968af0649e4ff40e4267202e"],["C:/lmislm.github.io/public/archives/2016/03/index.html","545ad641ce35ee94f1183f40a727b516"],["C:/lmislm.github.io/public/archives/2016/index.html","ccbba77bfaf8bb03ac7a097e6196161a"],["C:/lmislm.github.io/public/archives/2017/01/index.html","f1fb01b5faa85acf28d4f2ed015f4750"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b4dc9f6b14ce63802918f5bab1725d24"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f59fffa2ca3772304bc04ab2680ea1ae"],["C:/lmislm.github.io/public/archives/2017/05/index.html","103f58c1a9cd2522b1c6ca38ff6abd4a"],["C:/lmislm.github.io/public/archives/2017/07/index.html","2f536642300caae1cf110dffbf4b76d3"],["C:/lmislm.github.io/public/archives/2017/index.html","01d3ef3c0da26834bb9e813c3b105c93"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","b5f8aae5ef6e9eba95fbbd36c3fd59df"],["C:/lmislm.github.io/public/archives/2018/01/index.html","95e4bec9c309367f604175883ba1bc51"],["C:/lmislm.github.io/public/archives/2018/03/index.html","c577dacf95209ec654e146c3595ef95b"],["C:/lmislm.github.io/public/archives/2018/12/index.html","28acbc3135794a7bdd38d0e557cd82e2"],["C:/lmislm.github.io/public/archives/2018/index.html","aa5dad0cdfc75cd31e31cc7048afcaec"],["C:/lmislm.github.io/public/archives/2019/01/index.html","e115052dcb4060d5808c27fa4a1fd5cd"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","54861556c6573e88839da8907291cd43"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","0e86a81e7ef38cfabe9018c13716f226"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","98ec723b483b8a829dc43dc4cb13a642"],["C:/lmislm.github.io/public/archives/2019/02/index.html","79b0f6a3751d31dc5973c3a2c140f33f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","5bbe0574ab002874f9dff45a3da15530"],["C:/lmislm.github.io/public/archives/2019/03/index.html","f513088d1924980d6dbdfe5af7572479"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","8a1a67d12afcf4d6ea87d8f838d3d00d"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","c283968d8f6e248c4690bd83ccd99d94"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","b985d840c34961b84a79738909983147"],["C:/lmislm.github.io/public/archives/2019/04/index.html","4f1749d40dc91e11a59a63d209d5e640"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","58c5d4cd8df145bd52087e2214a0eff1"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","045a8778760aa010fcc2ef607eb2b9f6"],["C:/lmislm.github.io/public/archives/2019/index.html","60bfcf95ac93695d6a1516f210129b4e"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","1cb9abb0bd4841a570fa4ded54dafa81"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","00ce5b3a8cfebff274e8b900fc9ac177"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","47ec45d2d0b7a188359a56a2a6db7cd7"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","27e44930c7f856aa970cb225f8067873"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","46ead3e68243e7966c9f61f1bf59b9ce"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","21ad322218d79e0b9ad05fa0bbfedced"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","ac82804f20431a22e649e3b5b0f0f7e5"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","373fd4201a1af8c8e4c28bba40d06700"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","322ded2b09709feb022fcf12be6a3d18"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","9592234b8097237bd5ad03e2dbc24fc6"],["C:/lmislm.github.io/public/archives/index.html","f02f56df5a7053d27fc656a3c346c3be"],["C:/lmislm.github.io/public/archives/page/10/index.html","c40b3bd2e45c0377de470893871ffbf9"],["C:/lmislm.github.io/public/archives/page/11/index.html","bd465ca407aa30718f812f8d5f317da2"],["C:/lmislm.github.io/public/archives/page/12/index.html","b7458fe5fc7193881ab47e396fcb5152"],["C:/lmislm.github.io/public/archives/page/13/index.html","002629e71e40e5b6831410120e3e9a0b"],["C:/lmislm.github.io/public/archives/page/2/index.html","803fb6e104ebbd2c90da2ac20d570029"],["C:/lmislm.github.io/public/archives/page/3/index.html","8a0f81142923e9a3dafb2d06e17e92bf"],["C:/lmislm.github.io/public/archives/page/4/index.html","06185392100ff857689e1af90681259f"],["C:/lmislm.github.io/public/archives/page/5/index.html","001b9b8724ea163721ccddf46886d429"],["C:/lmislm.github.io/public/archives/page/6/index.html","6c48ebdaf07de950a2f3ad9e20f8cbd9"],["C:/lmislm.github.io/public/archives/page/7/index.html","af194ff22f178a71dcde0ac40a89edc8"],["C:/lmislm.github.io/public/archives/page/8/index.html","32879dc64f27dfd6cd8a7c74bf66e8af"],["C:/lmislm.github.io/public/archives/page/9/index.html","bc550f501131f8a3689c6006b78d0a99"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","03cfa7df44660a2325284dc709b10495"],["C:/lmislm.github.io/public/categories/index.html","e9fc44d46cafae8535d830345b27f461"],["C:/lmislm.github.io/public/categories/xx/index.html","2548ebec7342561cce9f3e0076ed68bf"],["C:/lmislm.github.io/public/categories/学习/index.html","65753b39e158de35a9de739107ed73ae"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","f0cba168967f67cf75378daa17e9ca76"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","681e3522bb0756bbcfcc87368af5fbab"],["C:/lmislm.github.io/public/categories/工作/index.html","2e7010ebf0e98f93324a986177378c0d"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","bc67caa998e5a2781058019e1b9f5e71"],["C:/lmislm.github.io/public/categories/技术/index.html","a863dfeb318b4ee56c61ccf3267cb20e"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","c6edc0128b7c5bd9e151530172caabd0"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","b97c442fcf493673aae36358a82ecec9"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","f4324c320230efbad1a11aefb575b3e7"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","af0c4ffabc000c87c595fb0c21eae59b"],["C:/lmislm.github.io/public/categories/日常操作/index.html","25799d5bddec62a549308d6ce03d0427"],["C:/lmislm.github.io/public/categories/生活/index.html","bb9c572042427915a360c2b1e4c075aa"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","1d3c6669f9a65ecb50a740349d3f9a6a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","efdba86c486e4a997b0ff7949edb7011"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","ea9909f3d8e31d572e0e3fdfcc52d01c"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","314a1eaa77525c90e4040663b0ec6877"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","bbb19eeffc78ab968f037b54d1591972"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","235172224d26e63ab9b521b428057c66"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","a7071fe1f8ead83a18967fb7f4e0a5aa"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","435c471a2a2d0a35187411fb2b6882c4"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","c3a2f4a2a98f03a331df5d3658a3b666"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","e6b0fe247e2f317b7816226ae3d8be9d"],["C:/lmislm.github.io/public/page/11/index.html","837404489a1b03ccbc4f0cc58707e4fb"],["C:/lmislm.github.io/public/page/12/index.html","e6c6a89706ee6813155b3cea3d72564b"],["C:/lmislm.github.io/public/page/13/index.html","13f9a9ed1a767b8b86eb53044eee7b1d"],["C:/lmislm.github.io/public/page/2/index.html","4e4c32a709eed6998f9105c2cc1503d2"],["C:/lmislm.github.io/public/page/3/index.html","e42b28fbf78d771839dde47ea667e30d"],["C:/lmislm.github.io/public/page/4/index.html","68b191b90c03d8690c9d1aa73cf6c03a"],["C:/lmislm.github.io/public/page/5/index.html","c730da761981c00a5049887675116475"],["C:/lmislm.github.io/public/page/6/index.html","6d34a0e0672ebe64404673af7b7af66c"],["C:/lmislm.github.io/public/page/7/index.html","334255d17c35a543b45fdcdeaa8bd5c1"],["C:/lmislm.github.io/public/page/8/index.html","f68e75c659fd6a5e53be5994d5cbe708"],["C:/lmislm.github.io/public/page/9/index.html","dbf4aa0646c212f5eaa55c4b02b7bd3e"],["C:/lmislm.github.io/public/tags/Interview/index.html","5e041026d9c7b9d2823b7359ad89349a"],["C:/lmislm.github.io/public/tags/JS/index.html","d23eb8d777a61a1e6ee6883832659087"],["C:/lmislm.github.io/public/tags/acm/index.html","81ee7867d996a98267851858e2e5d540"],["C:/lmislm.github.io/public/tags/c/index.html","3a8b53612a8bf019782eb71207afc5c1"],["C:/lmislm.github.io/public/tags/codewars/index.html","1c1462e803640e6ebd3703ce6d45d7de"],["C:/lmislm.github.io/public/tags/css/index.html","92bde8116f1d7e7e5b282b046779450e"],["C:/lmislm.github.io/public/tags/git/index.html","6e52fe04ac4f38a8506b1f86ea2fe437"],["C:/lmislm.github.io/public/tags/hexo/index.html","8147c802c201fc227cfdc6bce7fa57fd"],["C:/lmislm.github.io/public/tags/index.html","8600c7d5dad567a40f6713d099c9da7e"],["C:/lmislm.github.io/public/tags/markdown/index.html","bc92a108659dfa09e54559a239aab267"],["C:/lmislm.github.io/public/tags/poj/index.html","3cfb51b7a40417708edcc2e5cfb55e98"],["C:/lmislm.github.io/public/tags/shell/index.html","ccc4e13e9e6ec1d9e693f54735b6b149"],["C:/lmislm.github.io/public/tags/vue/index.html","4379bdaf3b3af1d73ef6dfbf06d22c13"],["C:/lmislm.github.io/public/tags/xx/index.html","baf65ed43ffaf2bf0bd1a2eb5c7acf4e"],["C:/lmislm.github.io/public/tags/前端/index.html","6585cb144938b651bd6ecc76efc4b78a"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","a196ec8318090133895716fe72fadcbc"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","3cd8be4005ad33c0c161a87987323c8f"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","421682ef31aadb110f3e91a40ecae802"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","e7e0470ac4d0a7285c52e9b124eae49d"],["C:/lmislm.github.io/public/tags/小技巧/index.html","ba1ce04af7f0ff0f9df43f0500bf7142"],["C:/lmislm.github.io/public/tags/展示/index.html","c139e27150b66b0fb1d77335d3beb352"],["C:/lmislm.github.io/public/tags/工具/index.html","18b5be0e8cd4dbb3b5f5b76d3fb025a9"],["C:/lmislm.github.io/public/tags/感悟/index.html","abb2eb322d6f966cf0c8feb0026ebbd2"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","89b66c4c13ba260ede06de6f560895de"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","0c5d3a5cfdda01b4e64e0d0fe2f76450"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","df78dcc4cf21a44fda6840c34259c2c4"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","1c359830b0988b2d7c6c592f50d50c9c"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","2eade84427d7490cf9f1eef8e369fb67"],["C:/lmislm.github.io/public/tags/练习/index.html","dcf90c5c31aec14c5ec1ee2eb04d39fa"],["C:/lmislm.github.io/public/tags/编程/index.html","2844f3eb1a59ca7457bdbf68d7ee86f3"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","a8da0a844c710c5d144dbe4c4cf605d4"],["C:/lmislm.github.io/public/tags/运维/index.html","eb7427b2c3dc2c909708777c830cf25e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







