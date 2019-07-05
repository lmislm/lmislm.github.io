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

var precacheConfig = [["C:/Users/10421/Documents/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","081ee22da3097c133dfe6e8f12a412e8"],["C:/Users/10421/Documents/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","c10aca86106ad9ea4cc3df44c35868ee"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","8289b6a5652938592a064e0151702e1d"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","3a658a1f41d3bfc61fbcd72e4b94bd07"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","71d18f5d6ea4ddbce3c7700986b29adc"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/codewars/index.html","ee041b28a8483e33ffbb1050e70231d6"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","c89068387306bc0b8d1c5875156e8492"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/25/holygrail/index.html","9634f82792589fc8a2f1cec0ab670a1b"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/03/30/Math.random/index.html","6bb7d47e455f899d3c96ca73b456d2c9"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/04/02/vowel count/index.html","efbe1428d47f5d7a45ad6b4cf452045f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","c753e8b542c800e169622a45e46b4e03"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","490d1481a6790a1531e6aa75ff1d8dff"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","66abc3bc4f15aeeb93172ddeb64ff32f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","68e9c24c1675ee86ed1bf94cf5e5cd0f"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/25/acm00/index.html","e97782bac6d7a10d15dc896412af1242"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/05/27/check-question/index.html","60467159061693d4932ea30fb7f10dd1"],["C:/Users/10421/Documents/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","452cfa0cd1c3a04bfcaa00e9f7351780"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","00c2248f4b6dd69f0e725d13bc8d9e49"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/05/git-progress/index.html","8f9cb1527fa0606962dc57588205d54c"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/19/reversInt/index.html","e6d39ad8772ad154e457c4752faf57cc"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/03/28/matrix/index.html","a57c617d9ecda192e3d12aa2f5376e9a"],["C:/Users/10421/Documents/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","97dda61d2de0cd4f04037961227ccccb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","c5900aef4240b60d8ee0b5dc9452cba7"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f9cf30acfd79484ffa3704a4f24d1e7b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","9ea27730acaca3cc2ec0a73a6d8184f6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","eee83907ea3b6bb1622d2e306839c62e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","d2a6ba10e77b9d3518f9c3748e395d87"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","2c5783be672f909a99d6900b69640e01"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","9b1194bf15ff941361f6cc98a9ed883a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","8ed4680d717e5e6010737ed80f9e5780"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","8466d06fb123893e62c74bb31c2b532d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","908b40c51ad890e48e94bb8548dc524b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","c04265ace810769745e44083133eac00"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","b507195000088d0ae41889d8d1544894"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","95fc5c591f193a75d35bdf53a1412c3a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","581cd2c1005a400983f5493806023ac3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","6d20ea31680b6a682e3dad23308f174a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","54ec2d84c5517042825daa7e2bddd913"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","9cf799e596fad1310a901e7b05159b6a"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","41fe64a2b256058171264167b1e7e998"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","fa49b65fcf1f20ccb8d2d10ab153de2b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","7e12c1069e293f8ebdccfcf48c2c389e"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","ed3651291f70af55d194fb5ac82cd638"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","c2fb4229cf091facefbf468281e71d89"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","bb1f92668d3c57cecf714cc792bfa44f"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","dbc040400d773c84f768d605c8a6724c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","47332f8dedae6778ebdbc8a499e33461"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","b2e55a9f5e3d2219956ace0b7736e369"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","87b3fc5326761dfe3ded50de0f0e55e3"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","0713057f2e4786728d5c891a9810ec09"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","ec8dfea3e8a91e4b7f93ab4b69447dd6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","0b6b12bfce7a7fd130e62e81e54c7852"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","01dd342ac1cddae088b9b1c7aa4da2ba"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","9d405d5f408129f68d6a2359cf2ac330"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","916600297b19ae902e6e7c9a851b1941"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","5ec5c31459bfd3e295ad7f8e9aa5cc49"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","24faec434c47e934be47b10847fe5cff"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","54badbb490d5e8b46b95f2500a6bbcd6"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/2019-启程/index.html","ba6b81df2bdad64928155648dbb04d9c"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/fib/index.html","158705cfd23977320d93cc76d0ed2769"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/07/markdown-trick/index.html","fe862f2ea1744ed57223b0336d839bee"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/13/2019-06-13/index.html","00626cc85a43e6d2dd5732b35e0650cc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/14/2019-06-14/index.html","a174e2a95e7423945c5b3ed075739501"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/15/2019-06-15/index.html","4a44cf92a3a85426b2160faf3e8cda74"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/16/2019-06-16/index.html","9ddbd5f097d09a891dacec92e058726b"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/17/2019-06-17/index.html","b5d5d81eefc1cbbe108d9639e4fae2cb"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/18/2019-06-18/index.html","9234c3f781ec2116ae699223c34e8c63"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/19/2019-06-19/index.html","8c92baacf444219bfb924f78d4e8a287"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/20/2019-06-20/index.html","bb73843148fc22de6f48187f20a4ee23"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/21/2019-06-21/index.html","01a037f7459bc4fee4f7eef0f9c8d7fe"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/22/2019-06-22/index.html","38dac626c27df61c3db638b5d985d01d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/23/2019-06-23/index.html","bee55a94d0447dd291bbb622c47c91b5"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/24/2019-06-24/index.html","065bb21afb53c1fe9bd3a0ab28e08960"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/25/2019-06-25/index.html","dc317de8aac03b2493a7f53c6024e011"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/26/2019-06-26/index.html","b16159b7cbcd93414637f9c0e29aa889"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/27/2019-06-27/index.html","b4420489d3867ad924f733935bf56780"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/28/2019-06-28/index.html","dc162a8000c3dd5c3c4563a3503e1d65"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/29/2019-06-29/index.html","3a7ea5ee52b0445d56a40b09920b201d"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/06/30/2019-06-30/index.html","06200b52bc87d7ee15ea040d9a89e031"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/01/2019-07-01/index.html","d4646c1446c7ac9a71b8dc72aec101bc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/02/2019-07-02/index.html","d1da707c0045535ba54dfd01eb005083"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/03/2019-07-03/index.html","515b3ecf88ab8f7600f4cba387e1d4cc"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/04/2019-07-04/index.html","11d343a8ef7aaaac42761326f62b25e1"],["C:/Users/10421/Documents/lmislm.github.io/public/2019/07/04/2019-07-05/index.html","4f163c4fb40b444771fe5e3b2f1301d7"],["C:/Users/10421/Documents/lmislm.github.io/public/about/index.html","2fd63cba5251b9222a3da286fd550e0b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/01/index.html","7df27f10c8c49047d7d7e3e229642bf1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/03/index.html","30c5edaa18f819d13c6d44a24bf6c5c5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2016/index.html","f47b10fc4e500fccc13a2d5f3cd3f57e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/01/index.html","c806bef54a90bb80eedc345e7abf96f7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/03/index.html","a8cb5e67ec184a238d05fbdb12243aca"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/04/index.html","0dd479f5af4f16be4d15deecd6ff4e8b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/05/index.html","0fb872e88b2e90ca1545d6f847f2264d"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/07/index.html","d09d4c6ec308d9d2851d1bf98d50a05a"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/index.html","9558ce4ebac8c1840f43cf633f32b2c3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2017/page/2/index.html","6a5e2f49e4ab0896bf56a7557c238c2f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/01/index.html","7435e32b55b65934656fd4a23b21d01b"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/03/index.html","c059c3011e33937cf2a28f8ea0323805"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/12/index.html","dac2cca0e84da8862bdf2212922af9a1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2018/index.html","ab1113a827925759dcbd0e07f40da0d9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/index.html","63b7698d417b01da626d6d5980cfca00"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/2/index.html","48be364cdad6b0fab9e3b058b8c3b468"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/3/index.html","dde273160e0957f1dc197dc811a9e800"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/01/page/4/index.html","5d977aea57599e9d6dffa0cf5d70fcca"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/02/index.html","e4fc79436d3f1e6ec8bcc28d0d5c7f30"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/index.html","b160db527dd4ee997296af5a5d929b85"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/2/index.html","ba6ec53305ac3bcfcfd0df35458f3119"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/06/page/3/index.html","fe9d65e62eae5790a8fd15d9b3430267"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/07/index.html","91821fa404e17890d733eb6189f2e030"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/index.html","6013f582ecd140f7d72e258838a5eef9"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/2/index.html","7d83a040419cb7a80650f5fc1eca3330"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/3/index.html","de1fa38aa78d7050bb7629cc7f2b80d1"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/4/index.html","0968bd50cf5ae744e945f9544a8865e3"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/5/index.html","639d97125b0532d72e38a545a2c76a3c"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/6/index.html","855592d27e799a88733833eb3e127f8e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/2019/page/7/index.html","7104538ed341de27c0b2415444b105a7"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/index.html","05c01d8131b30802f56b260837c32ef5"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/2/index.html","d18276c035abcc9c8914c0f0bba8db07"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/3/index.html","4ae9d782fdf13dca297f02fbdaf2c6fd"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/4/index.html","7096a16b4a158a69ec308c7b3007c0b0"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/5/index.html","f110882c2f369e23a7a3010251bd9e6f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/6/index.html","5de31d4adf7242dd0470bba021d95771"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/7/index.html","92555b4eca6e1f3e5f4b97a7fc4c8d1e"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/8/index.html","1d0b4a4624bf9bd11ef4027686184d4f"],["C:/Users/10421/Documents/lmislm.github.io/public/archives/page/9/index.html","59f619bfde43675a48dfb754b02fdd6c"],["C:/Users/10421/Documents/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","209d53cf49b3081a4f1a2fa28f8cedab"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/index.html","5e75302c3cba4c5aceff2a3727b438ff"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/index.html","e24515cc25a19a4d594895edc7ef6fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/学习/page/2/index.html","db3f435c58febd8d0b97ec1ea2b6849f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/codewars/index.html","0d069f8fe77271460fc41247d46547e8"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/index.html","5268a0350e7398d921da15c6acba0396"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/工作/面试/index.html","0e824a04b46d6dd95150811e77650d50"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/index.html","c8346734663ac9beace84f2818cab2fd"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/2/index.html","e83930c5f9988a2e75aec3aa447228af"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/技术/page/3/index.html","5cf30ea259cd8b8fea8f49ef68b1519f"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/日常操作/index.html","9fc5cd91ca974d6f54b723728c08e800"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/index.html","3363accbd1a4fba5b3d4fbb4e7e0e866"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/2/index.html","d477f6a1c650926be78435c67db35cfa"],["C:/Users/10421/Documents/lmislm.github.io/public/categories/生活/page/3/index.html","f6f3686e7f7a2fb74cb0ca766779488e"],["C:/Users/10421/Documents/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/Users/10421/Documents/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/gallery/index.html","c7494c8bb23c41a98775fb5165fa4a59"],["C:/Users/10421/Documents/lmislm.github.io/public/google7a4da20de8460552.html","adf04d6fcf4e87c3c245317a0779c8f8"],["C:/Users/10421/Documents/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/10421/Documents/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/10421/Documents/lmislm.github.io/public/index.html","fa45386319d53d04a6d3fa1a612ad15f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/Users/10421/Documents/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/Users/10421/Documents/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/10421/Documents/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/10421/Documents/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/10421/Documents/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/Users/10421/Documents/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/10421/Documents/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/10421/Documents/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/10421/Documents/lmislm.github.io/public/page/2/index.html","1f681485c443229d9e91e33801e015c1"],["C:/Users/10421/Documents/lmislm.github.io/public/page/3/index.html","8391627956b1c61912595673a18912a0"],["C:/Users/10421/Documents/lmislm.github.io/public/page/4/index.html","b61a32157b046c855ae2d877eb88e02a"],["C:/Users/10421/Documents/lmislm.github.io/public/page/5/index.html","d94c76c0ace75212182cbaceff19dd99"],["C:/Users/10421/Documents/lmislm.github.io/public/page/6/index.html","178b37c7145c926a825ad37b28e85858"],["C:/Users/10421/Documents/lmislm.github.io/public/page/7/index.html","78293d3587308160e46f4546d00cdc71"],["C:/Users/10421/Documents/lmislm.github.io/public/page/8/index.html","e2e4280fd0e6e44851b436b117673e55"],["C:/Users/10421/Documents/lmislm.github.io/public/page/9/index.html","c8270e38bfe3a85f46ae5d7a0dd52ba2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/Interview/index.html","d6ee1dbf57b451f62225a4b2dce18c2f"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/index.html","dd1abba163e2c8f75cc31e83028c13e0"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/acm/page/2/index.html","20d559ea860a8e360ad12a2c31ed6e23"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/c/index.html","5ac85932ae10ab8dba1089781c34e3c2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/codewars/index.html","2acfba6911036bc2fede0e8ed1bfef94"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/css/index.html","df3c2820cc79967d996ddcfb8ee7836d"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/git/index.html","052a6cc8632e0c74b98ff959c1acdea4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/hexo/index.html","4da5a2b1a114b3132cd13c68e8237af5"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/index.html","9f6ac4d176dd2b9b5b68083eece1e7ec"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/js/index.html","2d0ab9a7b0c71b538b35f1287db8eef8"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/markdown/index.html","7ef9796b00bb0ba00d129a7fcb2137b3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/poj/index.html","7a955eb47f3157dc6741d3303d56abfc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/shell/index.html","b7839d210a2a537044a6ad18ad16efbb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/vue/index.html","28940d5c4a14fa333f5530696b6ffac3"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/index.html","9971ce07538c8974675e58268353e9cc"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/2/index.html","f9ec3e80c4e26eb1ba5968447de866ca"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/前端/page/3/index.html","185ef4b51aadcaf7375329b6add34db4"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/小技巧/index.html","bf2ae31a962445623cce73ddbc60216e"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/展示/index.html","2316c69033f91afc278764cb0ed07a39"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/工具/index.html","b47d946cdc37155bfe06f6684c1984b2"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/index.html","58259f4f05697d5a23d694aa5c209d2b"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/2/index.html","3f6c8e4fa09e57e00395571f748aad39"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/感悟/page/3/index.html","10c881f89b766031c84ac28607b829ce"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/练习/index.html","0a5b691a22b6331de8f5e38f5ec2c6fb"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/index.html","eaa6d5c14fcc2c8e2592efb96f369441"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/编程/page/2/index.html","8f2fc02937418f2039b0d33259927342"],["C:/Users/10421/Documents/lmislm.github.io/public/tags/运维/index.html","3027c1f8526e11d592f0b35cf5d53113"],["C:/Users/10421/Documents/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







