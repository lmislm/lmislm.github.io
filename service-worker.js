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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","fe8c5075ea243ddecc78d090ec4e56b7"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","1c7a75421edef69d92c315c8622398bd"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","ac112b364de8c89faeb129e3a14ab39e"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","1906e61bdc8eba7083076236cbe15687"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6ef925a010f1de7ce3b0f9d51a4d6457"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","ac757bae184c6f37331008add9983d96"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","83a50235e44f67a7771b599740257af2"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","4804c02973f701a8c3b0eb687d42f02a"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","45fe91623c6ec1217740688de0c746d5"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f1a24728b401cee61d2cd4a1554a95e0"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","2b028456b75831d6889189a588a95428"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","c858c481a13ee35118dcde7ea9d3b5d5"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","35d10f4cadf9ecbd9de1d376b7538e70"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","a72a9837656b5521a07dd3c763cffbad"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","615934bd2ff3978cc5027cee84087652"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","12ec1e169ca43b9f0437912c178e4525"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","161a8ecb0864d4e45ee5f98768de0d9f"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","fa8b10b0f77ad50a79a4a899a448c857"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","d65862994c90ca46c9bd257116b6a133"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","58586a725b0ff1a82b42bd3aa9f84109"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","6141973265dd95e43d81117bcbcf02b5"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","e8b17379a1ca0f150b9361509afe6399"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","a246b32af9a18118a36ed57499b59186"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","1a7bf88ec4ced977482cb37a6b82bc1d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","1d169170741fbc70b3d0126702bb9f64"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","ca3e76959ee7b185f4880da962bdb28b"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","67f57e1cf7c08b8b642e597af828c8b7"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","bd49a1eacb58074f4c6cf4c50f625534"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","f2cba07aeb0f6bbef6711030274de4af"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","0d073ad56729b4a9147bd24bf7034e2e"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","13af114a94ac9d9f0a156dc309bb4ffe"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","7fb9b6ae138d082433db0f808c69c5c1"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","ddce56ffea1e22e35101cb9b34e45d89"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","5192dd72effc95a552e0bebdf48cb021"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","511715ecde939276c8ec16c1c8fe336a"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","b15f1d5fa1794166375ce2cbff4070bf"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","7d07ecebb009a91df3e4d6fe804d8288"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","7544f41c8d7fcd11c2c16b158a03e310"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","58bc84f7bde12e7f9981a2ff65f565c8"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","196d31f29cd1ae0ed2065aa9a1272fad"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","8cebc599f4c7590f60004004e808d2f9"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","622ddf9f7cdba8525f2192acb9db46a3"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","251a8931f96327757c5f09d551c0d4be"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","6f7ac582e467a2a6104ad1f2dc248f5e"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","d3ae842f9d4c38646e9a639f3be5e968"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","e234cabdf52cf28a97e35614c7c7c3ee"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","a0ad786dad7cf1c5e167ffb06f2dd816"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","c584448a08ca4fab562a889a71fd3d20"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","bf93b67df823d4427652a21d00c0a53d"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","0c5a871f1e68d274228a283b04e26e0a"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","ee463cb97d96f17d3a61e5d0a1b949bb"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","43e2d2c18ebc01f029ae5e6bf97f1359"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","aca245a3b2db317d8d141a8b27fd3ddb"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","68fd20f54ad9663cdf25ff203cd3e24c"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","513285615d4fca2713430319ae7d269f"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","45f41bf3ccf2df9cc3ef984ed9c9bea7"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","a0319a86b0ff7da0657502b9207247a5"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","4740dad77d459add1bc10e87ce65ec3e"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","a7cabee6d528e947ed5740b37afeb670"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","5938573bec08ae4e4477921d8bdb3517"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","7cf8fc5e6e387c13f7ab12e5a964062a"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","18f61cda249e74d6bd3c9d40db48fad2"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","8c3854fa047e4096ba1c3e637adec0b0"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","ba06a6bf9f4bb4b5939a17aaea0cc175"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","38f265a1599ac9a451965b308a302eb2"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","d3a575c6c9f71d8e11e3d22e3931cdf8"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","a02c8b8ce500790c0751841ab39f4baf"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","5898802caf2a99e06d822884c8b64160"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","6953125eab7e816447d83d00399daf0f"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","20a7e8b5d707aef5f532a66ccd62e430"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","033810da623520573e3b9e037d5d83f0"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","0fd26474d0ccedaad0902de6d26242e5"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","c5920c963266b77e03eb055ae9d127bd"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","eba8875196a6649165e5f69b5d8a87f6"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","61bb0e55730e748f79549016c64fad34"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","bee4dd0e4cdd1e73569ba4266e96cc05"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","1ffc99b257433ae7342a74077bd0596b"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","48db73bab0ac785952d728214c422c8c"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","1814a48829ec86e24963e91a5a818dd8"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","c0aec3d59cb2e2d5b74ad0b701be4472"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","f89bda2bc4db37f6d5370e6d1dfe00a2"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","34e2aa8aa6b990fc0959b2f484d84953"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","c87dbd3acdbf4d7680d475c60d3d1fac"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","0c5acd907154ff4775c662042badd12f"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","c416179bf2f51a1a8a226ebbbb337707"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","f92db2c0209fd6d7f51c99dcd98334d4"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","20b3e90bba1ee442b69ca26bd7581a62"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","27da948da3d44b5376150bdfdc97ac0c"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","abb1ba0d669d997de3d472daae964620"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","5c36a2e0622cd0791a4832b45750ddc6"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","7575379ca6a610798d8765e0210e6e29"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","fc4d7d2b1b0c5517263b71131080d333"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","fe0b207f744c9b143ee3b6b2e78ddf00"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","2a1a49ceff90ffac2e366238bfeb922e"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","bde303ea57c2bbc0349a4ceaa3c1bf75"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","e29552cc2be552056e5e337d45c15f91"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","2a85e19e396d8a84149e08bc96b1fde8"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","4c78481b2faaa2b17a381d2c56b016a8"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","a144546762f4c099dd6ec007f94956ac"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","c3bfc7603fd7f014e1e25e1e0aa61201"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","9f8d2f489ab191c58de025ce721ebc98"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","4a07141047393ca077d05bcd0064e8e7"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","67e3894c7ab3616cb8d71e16cb546159"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","838d955b4080d892bb0d95156eaa2a5b"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","8484a7fc9ddb76fdeb6674b576faa14f"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","621890a5b28066ab01d6b1ae1b3a4453"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","30ac5a6efd50b450e8d4234c54ac83cc"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","2b2f4cf6876005d97d879a9f7eb4e666"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","0a09b7643a7221a4b9d74e2fe1954fb9"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","c4fb1b136f01fe58e04bc9d5134cb021"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","bd5497460ee8bdde6194c4d83f448c53"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","7bc6922a46cd73dba98d3094b6d67441"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","0fc16ab86ec7a38536c0903661c4fd62"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","42602c6dc5eb46f834005c1600d28f96"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","95bb716dc3989f8a8da2281cb9a3c8f7"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","9cdfaefffbd13dd933f39b1c5a05ba8f"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","17185aa87b060dff849731f5c2ca3549"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","e75799616c92f846d76ba1c79e29cc7f"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","5936f363bea2f07c6833423702b674c5"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","805a59dd564f1fb50949bfb867eb1360"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","2122e360e95d27b9d1ec0ba8f33c9d29"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","a5b28f197456f239e723a7311b966808"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","85a7f9233a4c8f5159dac955bba7e7e7"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","bfa89eeb03d0a48a039c9ceda101dc62"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","e1ac104a274c05e126e9029bbe675d21"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","2d0b34360805c017fea181349811983a"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","667b67b34d116497b65b90c21b915c61"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","b7aa12acc3389729021b109ab14d1c49"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","4ea69a32c6bd8a9d3bb0223f72caf72e"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","ca02d742000b31d35aa0af080a257763"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","b0fcda8fd10025d9735760c7566ce96e"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","1675d0168b7550cc9f8083844f8e2cd2"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","e38b1b98f478fdc19815228ecb30bdc1"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","2e691d3d30732ceb7471c1304202e97e"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","63bac8b0d4a573d57769b42e6e0dc3eb"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","591cf18c6de7e18ceb00cf940a1f2c0c"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","9a0a92fadf7337e5ef73e65b9ec96895"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","daf161c192d62f6d6eef47bbcec2fb42"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","9673bcb344c2c49f5fd5b76977ec3369"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","00e51cf2df2c4dc08d204fc10b9bb7cc"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","b46801da80ea2d23f7de023f318eebdc"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","a9a042cd1c40ae8b064db75cc801f462"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","b24f1077a74989154f260ac9ed8d377e"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","d94bdf62a5c71900b236c16f530290bd"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","a5037e5851a0a6843366b069a331d87e"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","617d25ab31cf5e5e075fb0d467dfab82"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","c3cb0917e9088cf128fb0e99ae5afc3f"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","8fd2f7f40cce917fdb477c8dc5bb9214"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","8d77f2907478a8e1f8b00be625d650cb"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","3cd11d6caa4f993f4e60148802713282"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","2e54c32e6587e8a27626e59a2a478f82"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","57c130b13df50ffb4bce965e0b620c8b"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","42451669955737f39926494febcdba5a"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","944778f681288ac3f6144f641c901f77"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","f401272581ae31d6882032be16966832"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","8b36d0f2176c1f1fba82fe9f26ccb876"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","9ddffa0d61642328ec8873b9077fd1c2"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","0b02485dc6ff8809fd1479cddf301667"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","d2790a1d47e7f8e82b7750a3d30e4a56"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","014a2e6b7c84e14a744247a2b20cecd8"],["C:/lmislm.github.io/public/2019/05/27/2019-05-27/index.html","e11bcce63f1c5843f28194605c062188"],["C:/lmislm.github.io/public/2019/05/28/2019-05-28/index.html","7ee19dc900b19ac26423d28be7810f64"],["C:/lmislm.github.io/public/2019/05/29/2019-05-29/index.html","fb724aacdbdd45f245734d11f719c632"],["C:/lmislm.github.io/public/2019/05/30/2019-05-30/index.html","402f2b8c64a00bb8ed8c0911d5f8ddbc"],["C:/lmislm.github.io/public/2019/05/31/2019-05-31/index.html","ff09bb4407d56978bc60da6ec740e503"],["C:/lmislm.github.io/public/2019/06/01/2019-06-01/index.html","342bed66180dcbc8c28468c9ae407c59"],["C:/lmislm.github.io/public/2019/06/02/2019-06-02/index.html","2522bc694eacb8fe2b03a97ed3b2d8bb"],["C:/lmislm.github.io/public/2019/06/03/2019-06-03/index.html","f4f56153b642f9590990a566959ad478"],["C:/lmislm.github.io/public/2019/06/04/2019-06-04/index.html","c3999de3cb089a98cad61ecbf592c45f"],["C:/lmislm.github.io/public/about/index.html","df6001a89941649627ed0fc3cd99a65e"],["C:/lmislm.github.io/public/archives/2016/01/index.html","76911cdd9fa5a3eb911397b80bb59acf"],["C:/lmislm.github.io/public/archives/2016/03/index.html","48f5b418e00d4cd6746aec228f1852ed"],["C:/lmislm.github.io/public/archives/2016/index.html","bf536b5f64fc892bbc5c497004178052"],["C:/lmislm.github.io/public/archives/2017/01/index.html","c199db16e2755ebd8c8bd36a23db88e7"],["C:/lmislm.github.io/public/archives/2017/03/index.html","5eaf2a1ee43504f163660438c5a7f624"],["C:/lmislm.github.io/public/archives/2017/04/index.html","b3ba59c95e5f21275077e2a0896e6056"],["C:/lmislm.github.io/public/archives/2017/05/index.html","39578dd2606977e72fe7ac9960bed7f4"],["C:/lmislm.github.io/public/archives/2017/07/index.html","0d35eaf21a1b2179e56092f73d1c9f2a"],["C:/lmislm.github.io/public/archives/2017/index.html","4c8a3402da9bdf38318b2160e8cba9b5"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","44c2fb5023410ee8e63853279018905e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","74ee5e35f31696118e701c61b7017807"],["C:/lmislm.github.io/public/archives/2018/03/index.html","0e0a3a3b7be7189f9bd164209ebc82b5"],["C:/lmislm.github.io/public/archives/2018/12/index.html","9cecbf25e180305bdcca2871246d3764"],["C:/lmislm.github.io/public/archives/2018/index.html","2d245fcd8ed374300be1a79a0e95ef9e"],["C:/lmislm.github.io/public/archives/2019/01/index.html","869d98d6ad167bc40f15e748196e0e12"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","93e7ce21367a3364b49f52574dee3ca3"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","a03a0f975e69fd388828416bf8600d03"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","02f3a9021b59ed57530122f2c7e68d12"],["C:/lmislm.github.io/public/archives/2019/02/index.html","a4739a3ba0aa1796d94951d1cd6c6666"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","44b1f8757878244ae55af85141ab6ac5"],["C:/lmislm.github.io/public/archives/2019/03/index.html","9def9bedd22a960e75dc866faf7b8b05"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","ffc28cc8ca721703e86e220cae56748a"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","2e84a2f83274cc670fe6911c7f94064e"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","d1c9581b59ed8e470fdc6dac5283ad4d"],["C:/lmislm.github.io/public/archives/2019/04/index.html","2928c53f2ad960e41a33e6acc52602a5"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","530c75c31d18d605854cfa5b2e8ceade"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","114310601fc832348c793e89ce2d2ba5"],["C:/lmislm.github.io/public/archives/2019/05/index.html","97d1c54dcf5230c4fe9df1959bd8729d"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","2a0de2ce4b10424695ec15131f54162e"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","a24a2b103c3f04b4a80e1f550c03868a"],["C:/lmislm.github.io/public/archives/2019/05/page/4/index.html","afd37a4d4191a8f00b72e255ed2aaaa2"],["C:/lmislm.github.io/public/archives/2019/06/index.html","84fe6e03e9daa4c5d3ce99afd33820b1"],["C:/lmislm.github.io/public/archives/2019/index.html","d3e3a2c590b0e17ac2c20950cf3843ed"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","17fe872b013054bd14da2d4e5c4ca44a"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","c20a9cd574c12534afc9e09b872b6928"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","2cd10950df54e5387bb8c22fa8a64c8f"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","7bd5dab3022ea3d95f48abea6756afad"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","6f7ffc594178d13dbf43d9686a74d73e"],["C:/lmislm.github.io/public/archives/2019/page/15/index.html","faeebe84a856a9ad95ccbdfef5248e99"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","0fce961032476a9a60b9f0c8114d6fdd"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","c798a81cfd4a94005386d363cd44dc59"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","751634f2db076a96c947986d642c74d5"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","d429bc7d9354ddffa7307d5090e583c3"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","aaf51d56130c626d6046dcf9f4dfdeeb"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","7a54b29fdc0d9061951a9790adfed586"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","da640b8850f05af1fa7ecb5bfb6c2553"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","f6c7ea48ba612148edf49c69964a35cf"],["C:/lmislm.github.io/public/archives/index.html","12b19f5224c329e1bdd5db0359441f37"],["C:/lmislm.github.io/public/archives/page/10/index.html","61ad62ef22523db6122eee0fdfda1bdf"],["C:/lmislm.github.io/public/archives/page/11/index.html","a299dda721b233e72520af7f903e466e"],["C:/lmislm.github.io/public/archives/page/12/index.html","e23d5a3e36438843f20a573ed1d53395"],["C:/lmislm.github.io/public/archives/page/13/index.html","cc3455e93641ff6db1618ea9e61e5410"],["C:/lmislm.github.io/public/archives/page/14/index.html","820c84aa1faa757b49a4553dfde9c558"],["C:/lmislm.github.io/public/archives/page/15/index.html","3772c9aa74078dbff46270ceaa67a3f7"],["C:/lmislm.github.io/public/archives/page/16/index.html","d3c1bfced1360e77b2303475ae9247c8"],["C:/lmislm.github.io/public/archives/page/17/index.html","5ff07c4eb97974999c941ed842e94ca1"],["C:/lmislm.github.io/public/archives/page/2/index.html","92dbbb6a59c9fad4a026a504837c95e0"],["C:/lmislm.github.io/public/archives/page/3/index.html","f9a89afad310574702fd4663e28e1b9d"],["C:/lmislm.github.io/public/archives/page/4/index.html","e65fa7139cefb04ad47a33e9e28bbb1d"],["C:/lmislm.github.io/public/archives/page/5/index.html","30b488b8b54e68c184e35c451c1f8b4f"],["C:/lmislm.github.io/public/archives/page/6/index.html","a5b34a1f397c8808f266cff9a3195b69"],["C:/lmislm.github.io/public/archives/page/7/index.html","361f58f2738cf9d5d0c781b80978d55a"],["C:/lmislm.github.io/public/archives/page/8/index.html","689862ecb1a6bf8e4a357358f30d00ea"],["C:/lmislm.github.io/public/archives/page/9/index.html","d5e8e26dedaf5fac50f128ad204438d6"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","9e24b44dc69582bfe82b633287d88f79"],["C:/lmislm.github.io/public/categories/index.html","aa6090784b03912386d99311c2b925f8"],["C:/lmislm.github.io/public/categories/xx/index.html","4c2ac173c1ce82e0388697adbce9b39a"],["C:/lmislm.github.io/public/categories/学习/index.html","e25588167bf2f2b30abd17606291d055"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","f17dae6a52382437f4ba7f27dd29ce69"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","9b5f901d6ba6f35bc650171056bb45cd"],["C:/lmislm.github.io/public/categories/工作/index.html","5c6d952456d5d166c9c46af63dfc18cd"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","c43f23aa8db80bb2062c9274951d81fc"],["C:/lmislm.github.io/public/categories/技术/index.html","5893bd0a83a587d688e5ad5a1f6c1585"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","ce459c0004dac6a83849824f10a19d6e"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","8b3e8dcfa4e6b073b384b434a6606a35"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","4be3fe8bd4dae583225a59f3946a6dbf"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","1db22e0816edb8640217c32b50551c75"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","9aefb40d79ec325d7bc1315961197ed1"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","4fb0e82f2a43926d2145c91338478b3c"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","ee457e95d283ac9e70c0c518157d0da9"],["C:/lmislm.github.io/public/categories/技术/page/9/index.html","80b4e960c27cc150e3328db5f71dca00"],["C:/lmislm.github.io/public/categories/日常操作/index.html","57fec10df33b01dd38e845f4b9d73c86"],["C:/lmislm.github.io/public/categories/生活/index.html","e9fdf7c24d015cda02cf3037a4aab2bc"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","f20b6d2b8973b86fd4d85fdd9b469be0"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","3993eaa43bafb5448da08a752f61fce4"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","7f69c47baef7fe50c1a8414c6bd9c530"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","7c7690e1509ac2a1ba01869f4cfbc08e"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","2e837d84be3b104ef815f3cde4494fea"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","f5797b557c640a1b9bb34b6189d74eb2"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d286e6394678b52681f63d4d7690cc4f"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","e7cca9a7fcf92ccc6f9e9c34b9d07687"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","815d0e97355fc1396af4c33e57b3904c"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","af5e275e1c12e50457500e91d45b783c"],["C:/lmislm.github.io/public/page/11/index.html","8c8e703d18c6643afad3db75d63b0bc6"],["C:/lmislm.github.io/public/page/12/index.html","bc1771365cae1708036bc4fa9a348fac"],["C:/lmislm.github.io/public/page/13/index.html","a448a53a2c8c2fb2096aaa17822e6700"],["C:/lmislm.github.io/public/page/14/index.html","a3dd593f0211df255bfb8f7aa6ac06f4"],["C:/lmislm.github.io/public/page/15/index.html","a53bc753dae1abdf0cc25fc83f0aa176"],["C:/lmislm.github.io/public/page/16/index.html","5d76f2f947aedfb7e7562021def00417"],["C:/lmislm.github.io/public/page/17/index.html","14be8c718441704dc8ef7762f7de39ee"],["C:/lmislm.github.io/public/page/2/index.html","b19c238137ac9a8f8812cae34d33fad7"],["C:/lmislm.github.io/public/page/3/index.html","ef671f1addad7bbddb1133a32f44774f"],["C:/lmislm.github.io/public/page/4/index.html","bbcc1536f2c4e22427574bbc1631e559"],["C:/lmislm.github.io/public/page/5/index.html","86d2128d5922aaf74cc2888568c515a0"],["C:/lmislm.github.io/public/page/6/index.html","4c2b4702fd0eeb4749c0c65ea3ec1015"],["C:/lmislm.github.io/public/page/7/index.html","3a28a67512160faeacceab0b0ff620e6"],["C:/lmislm.github.io/public/page/8/index.html","dee34097204c2a67f2eca38fdc749f43"],["C:/lmislm.github.io/public/page/9/index.html","c9c998a8bb8ca31d96d9ae429077c108"],["C:/lmislm.github.io/public/tags/Interview/index.html","5bad652adba3b7e37dd39a937c5b0e30"],["C:/lmislm.github.io/public/tags/JS/index.html","252653e7faa29889fd8d0a3a389384ef"],["C:/lmislm.github.io/public/tags/acm/index.html","25b7c4ab211ae8dd5165ebbc4e194cfc"],["C:/lmislm.github.io/public/tags/acm/page/2/index.html","c92576603a96fac4a0ba2d77dd859080"],["C:/lmislm.github.io/public/tags/c/index.html","74835cc9becd4b3ffb7ccb44c7d77c35"],["C:/lmislm.github.io/public/tags/codewars/index.html","764683c45a43ca4a70dd9511d1aebbf0"],["C:/lmislm.github.io/public/tags/css/index.html","858576496d14751b57addb26d6f31a59"],["C:/lmislm.github.io/public/tags/git/index.html","42857ba059f3641f73b71cdec02242dc"],["C:/lmislm.github.io/public/tags/hexo/index.html","b881abc383a0c06a9637637ed7183995"],["C:/lmislm.github.io/public/tags/index.html","35a4909a4c4a018b9e0fec50239eccfd"],["C:/lmislm.github.io/public/tags/markdown/index.html","bbe2076973ab403d45019b72c3f9ec9c"],["C:/lmislm.github.io/public/tags/poj/index.html","017c726484e4280b4e77297e07a63ccc"],["C:/lmislm.github.io/public/tags/shell/index.html","159ad7c931398e2f5d63baf559918b54"],["C:/lmislm.github.io/public/tags/vue/index.html","6dd06364b0c2c81675eb9b883f0acc08"],["C:/lmislm.github.io/public/tags/xx/index.html","47d424a142cd62c3d226d44585846294"],["C:/lmislm.github.io/public/tags/前端/index.html","b83b645c2f53b303d6c64b4e6596383c"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","0ab43da880c4466816534de00be53ceb"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","5efbbda7286a1250b1a818b9207a2820"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","e0de0f55b15e0a477049fa36ab8b1879"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","e5fa94870bc47a4b2d6217defce43a56"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","fb301bd33f872a619308c058db5d2c65"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","23065c8267e99f876ba585d7d61336db"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","c3fa455331a750f2592fd7d181f64acd"],["C:/lmislm.github.io/public/tags/小技巧/index.html","430f290bb72b42ec35be9118314d9764"],["C:/lmislm.github.io/public/tags/展示/index.html","8def588a4c446a98a526a271d8fc80a6"],["C:/lmislm.github.io/public/tags/工具/index.html","bb5975205e310daab92480194c5024ab"],["C:/lmislm.github.io/public/tags/感悟/index.html","3797926b73c9c9b815084c51fd2d8be2"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","78f48868a331f1c3ac385b859a4d5421"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","e828f90aeaf6cf1c393313935295d207"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","217977c603642343b04e4c745a51411b"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","320ccf963a4b27e37aa1ab57062fa38c"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","5cefe441eb79e3293ee3fb9c28892351"],["C:/lmislm.github.io/public/tags/练习/index.html","eab13d1d81d736b782a59584abcb57a7"],["C:/lmislm.github.io/public/tags/编程/index.html","58258e93679ea823c73de6e8570849a3"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3cea5c386a23f70af6efb9dd6766f0db"],["C:/lmislm.github.io/public/tags/运维/index.html","d368f1c45a85f90270a47e5e82a993c0"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







