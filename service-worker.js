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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","08a22063f136ceab3bfa1059f5694c5a"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","69a48ee4af65da531591f67040c5ea4c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","62271a8a29a1ff7cdce83658268aa2f1"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","4675d048ecf995c1c7cc95744740d49c"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","230885f7ab4690b50fb2945f8336c1b5"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","5a6de96d0ea8a7d56a15d915b584a535"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","936961ba725c3180b9915ac592870ee8"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","8068b9f369272b0286f3561ff695bb9d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","76f2b024ef6768e33558a119a9237264"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","f69ce933502e0464f08c7c9209ce4c74"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","48301411205dd56182a2c3aa8af1b0ce"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","237e759ff3819b25b9a91955df8e046f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","f349621095f9281e740284617f484244"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","692f2bc4359f7523cecf119de40aa38b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","b8be6bbee0b4a487bb135def658060e5"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","a6d31f6fa1f88e4715c3a3d2ac3ea431"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","06ba9646b410c0221516964ecdf8df64"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","32aef57fa4ac1a0d20b9439749b30b01"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","cabdcebc1d8e9824122b0146dfc6c4be"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","0f619470cdab302ac9be7393efcd5650"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","c52795f9e72b44ac3706c2d80b16b241"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","4074b50b991d6e82afc684cb9ef7a1ee"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","2362e0fb8c8e53df65f24c2e2b71e591"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","87b35c0f06d2472cbcb7c471b68e5914"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","3a2f2667bd3ebfe47e4285b7d990c61a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","da9dfb3e96b2298c84b5f40703b240f3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","d723eb437a8dfd2e04a62af1ff90784a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","3dd89fbc8179646589ae66e5beff0cd9"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","48848b6c9bc13d5c5e85598c683bc2df"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","a681188d19dde898f4c3f092f968bcec"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","bc0c3b8e33eced520328468d6876dc66"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","3d594cf309e7bf0d5d61c34e159290c1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","03d72d9f928a1e8fb0e22fc698487c48"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","289c9da92813aa8095608d75133ad2b1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","ce52228a0f40ef98a7653112eac7ba53"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","1832174bf3830db5eeba28b672513c2c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","51cc6d3099a1e1cb080c1429fc16df82"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","e9f87a7a693c2241e865610b75bbc66a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","eda40c7a6dc2b578774cb9cb0d513227"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","a57d423b63be2314af0b2ca27244b756"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","b282680cf41fbc82699eb941ceac8851"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","a1f34122224296931036776971fae3ca"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","e2f6ce7b445ebe0d223b3dbb7f0fa6cd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","25f84752f4e3f93607e1e93060ce99bb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","31dcc7e9b4b16abff3972139d2319a2b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","72f92237ceaf92b40a8ec0b6c094b59f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","aa436003c06951dcf97df4ac775769d1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","c82daebf47f4c4beccc71ac09dc41d11"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","afe8488f79e1ea8fb199de3bc3ba1670"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","129ff33c9820c402d36d760a9cf61e14"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","396976333469cb06266a6afabd6e29eb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","73da370c2ba1a5cea9074540d86118c1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","4b8eba6428d161846ac4bdaa38bac187"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","09281d0eb99b3fb1f762d130e8a388fd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","eae0331fa3e5a10f0f420bd0c957c0fb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","418f91e4a092b46eb9d104af712df070"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","56ee19907fc1d76d7400b36a8f1030f5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","27dd71f2e178bb5fad185eb0880139a3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","1ad40cef831cf9d3cbce046bf354ae01"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","02caadab8da79fa72e931d901d8addf6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","1437a22cd6cf4003de7bb3fd01846c9e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","fd0552c41e6309bd481da6bcf3ff693e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","80b04f16c3599df6a00246378e3d493c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","5a3c7f1ee49c1e5ac38f9c456d6697a4"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","0d611bd9204ef612c5b23f2420431fa8"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","dedbc5dbf400544ee091c09a8bd69a78"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","0d715b2b3967837d8255886897ae40de"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","69746a58bb1d755c4bb7d96747427cb7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","8f8b1e3a8ce03acb0a719de991108423"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","f3f3e503174bfa42fda1e8e9783e03de"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","dc81a3b4e0bd5323b95b4fb9ad40f3b6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","29a41969560e8f3ece09f78a4951f064"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","3164b5fc2dc711f60bad4ab7dab1792e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","7bc84232957c5d45060f6bc55f3db4c2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","7477d13e9a8796ae691eadf91dac11b2"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","ebc200f09c92841acdb8512c5484790f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","9a8ad751b0a18969abebac6d758d1ff3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","57b9b20c7dee0b67b9ebddfb8f1dc76a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","4c8e68a854a1de640b9aee7847ea6841"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","205628d595e30e421e843bc47991afcd"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/02/2019-07-02/index.html","ae5c6f78273731249c7a00072033dc61"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","89e4913ec4118687341c67c110897369"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","84f829b3dd34d8620e88c65505b82f44"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","76f4d782d919dc9c3308dc9ecb603d42"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","f922be96ac54e76f24364d024c359520"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","f7a03183cd67fbfe0bdafeee0cba34d1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","452c75078f76d8340fa29f6ea2704d5c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","7f717aafcca7f41b98aa8f21f4bd190d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","b6a23bed4d60c05d0a89e934f0bdea43"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","45394adcb05028ffbaee9f4dd37dc237"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","5ada985a5a9dded673eb3a12c72da002"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","a4be39c7e2d54123dac51346602589dc"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","177ac1f6082cd5dcd39726096a424060"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","c2d01133c52bdff6fb07c8068c6c2140"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","14c9f9cb4880d7dc5566b2d8e76c1f82"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","ca0431bae49f293fc3bbf98e38eee847"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","4cd1f39c5939bc05eaf12af796df762c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","f428134c993da7486b28d378e2c27662"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","632403e709ac0164c50d75efa6deb6b8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","a267321aadd9127efb8d8f36fd52f93e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","adb92a824d4cf018dcdbde0417dd515b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","eb3938aeb12ee14bdacccf4059f89e59"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","0f28ead1b7a05ac4b68b298aa4c94509"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","bc6866f8e2bfe4069f10546150a32d81"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","3f6fef61172db6730a412863dd90b92f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","67434bf51220e5a6071d8242c70ecd87"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","3ef6129a64357b1824c3a6970c0a1de8"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","9447a41501d59c0d96a755dce16b2285"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","f6377686b68b5b327262cbefa7e9d220"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","0065f6ae2b78f9a2aeadc0c1ba777b0c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","a0430184b6cf07c61fe9ea845c65dc24"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","f47a13c9a73262590e4c9b10cd5e7f1e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","3f1b73907c5a66e1230de76013c0e58b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","2b11be7b8ee6f52e943a23f54c643319"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","7a9e4c14d626abdae64f6883c92e0c9f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","c508800df9010aef0e3ad677e191fe1c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","dfd67e6771ca97b79562667397809cdf"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","ab9636117eaa70728f4b6cff0c299df9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","7482cda36f84ec7afc9b949fc3f509f1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/9/index.html","c5c7618129ce65470442c61e2d74f0fe"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","33d2a03d4c5b6db6897ecdf5ead88273"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","dac6d473445201c22b99a65c13d684a1"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","7e57e0faa211fa2029e381e491b425b5"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","df62ee6418b580a3141710d7ba8935c7"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","e78e30b71e3fc7ad7b1e2250f315c0ae"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","d031d14417e1d0d6caff02c87dac447b"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","8683a2646b374d86b8ed4404c37a27d8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","ae39f657eb6732587c489c3a2a8c94ff"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","9f7d3f13cadb3a7cf4efe826a7353cc0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","78c888bfff515a64370cc23828be9085"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","083e99dc8dcbc62f6fdfcfb6c32cf748"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","84c80a141dc5f0091ee090a3f6bd40b4"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","e129f2d39469e4221a920df1359d61bb"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","36efafc12fed9c5c9e37ee4460f35af5"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","954c7e794dc0d157618bee99d58ce902"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","4c56331e4f0f266f1393b6293709450c"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","0f73f3082c5684b6322a84ba659c2bd4"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","e047a761292eec2e77741a46b87f9352"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","93e227f2e1cb279237132255d08ca60c"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","a809e61334a9d716beba97f98e50e9ff"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","79ab5cb695b3f5f87d39539be76ef713"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","7a40f9dc58b1346551ba704d3bc1b777"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","4252b6ae79b08b9f57b0de0d526c3898"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","95e09e3adc4e59913070657e708e8f7e"],["C:/Users/10421/Documents/lmislm.github.io/public/page/9/index.html","15a54683205377d929b3ec78dac7c5aa"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","d2255221e7ac61e19ef017c5f28ad09e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/JS/index.html","e6d00a7f753043cd9ee752bf76d288ca"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","c6a440cc92626d1fa4be54123f466f73"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","52b29bf1113b92a6af7214066850d902"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","1aa4914d4d094e578a15b7c63c72f983"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","d283cd06af837e6478d4ddd9ddbcff02"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","a26151769b4e1802f7d1e95cf77f3fa5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","46aa702c4228c997c50f6aa626dcbe08"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","083d0e65dd4450a2b61b230c1f91ecbe"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","e2fbeddfc8f1eb9b642d8c0b8cb6c2a2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","086d54dfe38d1ea7e6fe46976bc97644"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","108637c67b54c9970200b8fa5f489370"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","e877f5d6916cfbe968a386611757298b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","53ea268b5a09ed80675d12e9c8a6bba8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","0c3410f28712f6a6c94b36811851727f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","31b24e1dd88865048ca981a8b32c3aa0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","e7debc8ddc251c39cd971b7081a36cec"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","b23282bc7fa5baf93450de7d23120c7e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","b99f246d2ed92369229fa14462f1480f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","701ddd395a499b370720e61bea3b752b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","f4ec241c15526108637e28cf7f5d05c8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","eb187f1f27d916932912b5401cde394f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","1625b67683b1f4d2f2bc17947ab3714e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","c7cd45696ee40bf2affc8f50c3decd23"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","59f6fd0503511474f0dab6f8419b9aa2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","b38a85a42cdf5ae3e8eb945c824ba969"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







