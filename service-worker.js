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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","117f0ee7c37a00783cb4b173c83bde34"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","f68b534e626988addb11799bd626f7e4"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","fd80decd90953a84307697d8466f5dce"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","2fbc89167fdff29ae2e4a320c5f3341c"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","cfe6273fd0a02f5825e918937dc6625a"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","f3f67dda287a684b6b54b187696e0ac5"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","c13b6941eb6ee38ef7956547a787e80b"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","271518051bff9dd55249d9e03741dbf2"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","c0eff56e5bd3023a5a500f7faa9e8c6a"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","5aa15ee7e7fb2516f8b1804a839750da"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","5acf8a280e376f57e4d5655d32ffd4f7"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","84bdd8031997afe441c5cb9698985220"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","7a4623e36111d6d65d70850c31a75179"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9a66b34a99d95e8e4b27036174f148c0"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","6c0c4fac59842f0982c45ddf4e923884"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","8d7afce9e74e1173ed03b2db97f44945"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","173a5ceb6cde9aa5271afd917dbb51db"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","db56c5a8abacb28318753ea659666308"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","a029d2fabba4c39eb6956b369c054d91"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","1ef4fb20214d09240f9fc8125acfecad"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","b887b7fad19d99fee674757283581659"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","3958c149c43720feb2c7db5bebf9b156"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","490763aef8bd5c5f0f149b4842f22396"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","acca7a2d83654cc71b3a8cd0cd81d0bc"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","675dcd6e2dc8363487643a067d36a25b"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","56fd975818178c5706a58d211696bcac"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","23ced7191f6d946f4a05aa28d8d3b41f"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","9742fff730f0fd324fe2c5c7557cb3dc"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","02067d52b0387c743b48a77b06353a8a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","bc8e7b93ec90ea1c54022bdbb49117f1"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","73db1a92f3348bd63b6ec9801fa0d74d"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","e9b32e43241a0dad7843eb87ed4b6f93"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","5d752c2e066071be7c9194a80446ca9a"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","141829c50628d9207c47f5e1863e2173"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","f900385f1535fdbcbdc017d81fbfccb1"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","ed90ea9eadc092eef69cb40a37e602dc"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","754feaf6bda3476890fb009578600c17"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","e1edc80bccda96e9c3e29d11314ec996"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","354a8e2523f76d97789bd60594d56417"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","6275df7914cd2d38396e9b02a4a9c3c2"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","0a5b1c12eaaa05d94972b71e3e182c8b"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","39b599624594bd92445148af18332345"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","b07f542b3a952780972fa1db93d58d6a"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","65dd8432afb88bfaf748cfaaadbda3fd"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","a103fb8e5acacf99af57c46a18d217cc"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","52cddccc7a12c735bc696fdec7d0b290"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","2b2cef6e05bea642deadcd4f9af37d41"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","882bf102e7b0e52e960efa9d70c87f87"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","ea1b6ec9de89b2752bd509585a0adce8"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","1fdfdcb53697565f8577e4e90b54bfbe"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","c048605212e72b3cdbf3e788f673f535"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","22f4b07a1af6f3afa41812215e0b19b3"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","df066a3940b78dee17c890bd7ad499ab"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","76a1477a74d18496dcfce4c80397a909"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","25c62e0df2d40dbc7ada765d9dea1a6f"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","62a2d5c313a2665216950b7a3051f811"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","ce89e65fa78497aac6ecccaca12c62ef"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","e1b606b4b6eede3080df5117b5d320bf"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","5b25f7c8e44b9f158ae0f89b0860ea04"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","26d926b60f3adaaaf6646d8829f66fd8"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","52db4de038478b1d1a7e6afb2e529667"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","dad5f1dfb691e5adeac005fe4801bfcd"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","23426d912b1ae022d99f6b46ce6361c7"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","9d18464f955c5fd91fc53fb8bb04eeac"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","da15a9000eab3ba118ad780d83095611"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","47d11995779a4fa9750fca2922855600"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","dea2b095264f59adf26bb2a9c3046504"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","f2530a83beb36a55593eef33e28dcf05"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","6c38637b160c4d91aefa010d181d3dce"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","4b63d98fcc11207c74ee304386e0e9c8"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","405e5d15e53afc4aa256dcbb0c46be98"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","ca0f96c7007d6eb53c562172e083dc16"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","d08dd6a232f619da0c3ca4e801fc12e4"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","c94ab2da3e57fc36208a9ee2fb284b1f"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","999b3e6c7400ed1d4f635fe78b1c786e"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","7107c101a7782fffe5fdd9710e241c1c"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","5244a3529a34e8b29b2af3b185c9727e"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","4156aa8acf4d4d2503ed4ab86af1ae2f"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","39f34931ec26b5d99934ef5482674005"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","362390dc005622deaf326ad1f7c63966"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","0c073a708edcf246a9417be3140e7cb5"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","a249a7123e6678c29f50d3eed5b74ad0"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","a8c7a92d838e06978098681330693218"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","0ea77eb6a3751edbdde927151fc8c94c"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","7216a4b00787967495232641c456a8d8"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","b27476eea9773832d75a522fc9377c64"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","794ddbea21602254bbe3f49ea39cbbcf"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","0343a0ede7532bf70aa3023f1e46cf4b"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","6f351ad9ab6312b1242d2237580349b2"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","dfb0a09d1801e957905186c4ecc8cb07"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","e3691defee8b120cc6e6c831fa8378c5"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","5a0c64ab4e8c6d6ba5022f9aa08b918f"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","b2cfddbb0a9befbdb6e60a0e13967a3f"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","2c7a77f0bccd4d7efd3418879322b4c2"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","b5a31c758cd92a03b2bcf73851d51a18"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","180436be75ab21d588ded5c4424b00a1"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","bc8e21a9ad867c8ee27f8aeffe1e978b"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","0e3ffa1c9c6afa46b3960b30c0fcfcc5"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","99d6911d3b85f9976920b7f14af63294"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","9cddc0612e51ebd10f68c1d6eabb815e"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","2deb79c854315fd3f34ef1283465ca8c"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","00661939a903157954d938a2b29e1989"],["C:/lmislm.github.io/public/about/index.html","b51953a0c8f576ef6d4f44db0a933ba6"],["C:/lmislm.github.io/public/archives/2016/01/index.html","0b37a5d588bbbf029e3e73489ee76034"],["C:/lmislm.github.io/public/archives/2016/03/index.html","7fa1c338f545073be45dd4d859e875e3"],["C:/lmislm.github.io/public/archives/2016/index.html","d9febb41ed607548aca9b1c6ba251640"],["C:/lmislm.github.io/public/archives/2017/01/index.html","bb283de717bb97eb271851f3808211e9"],["C:/lmislm.github.io/public/archives/2017/03/index.html","a78dbea0d5d8448688adf67e6b7125dd"],["C:/lmislm.github.io/public/archives/2017/04/index.html","7ea41ecbe6a844b4817431765123ea00"],["C:/lmislm.github.io/public/archives/2017/05/index.html","5fea5d6ec7ab5a77d23eaa43324e0ead"],["C:/lmislm.github.io/public/archives/2017/07/index.html","439473fefaade9ceee69b311d4ada0aa"],["C:/lmislm.github.io/public/archives/2017/index.html","1005789707b13c2917f6d37aec7ffacd"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","7d5528e0a049b3a639d0f11348ed3448"],["C:/lmislm.github.io/public/archives/2018/01/index.html","0fadd7b2f4ae69cff24e892ae434e164"],["C:/lmislm.github.io/public/archives/2018/03/index.html","91ed30d5b750eaae3c8e0b24bcbfb7f7"],["C:/lmislm.github.io/public/archives/2018/12/index.html","e214cef13c8ba4e04ef252fc66fe7fad"],["C:/lmislm.github.io/public/archives/2018/index.html","98918c64ca4eece4c2a5ebc5f79b9149"],["C:/lmislm.github.io/public/archives/2019/01/index.html","87a63b417ed1ace3e446b982c093249a"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","63589096f143d2fd7bab97f1cc6e7076"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","ca99410390e589ba137523e5d763f870"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","2eed36e0e10515fb01e555ff924e6c29"],["C:/lmislm.github.io/public/archives/2019/02/index.html","437d35126024c1297890d5c643d8e221"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","26b0b9be600de47ffd882e942732f5dc"],["C:/lmislm.github.io/public/archives/2019/03/index.html","47bbbe0e4224bfe2fbeacc6b1f11b017"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","7661d110e77ff4adbede116311a3cad8"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","b5b350c2f8c6250ba4651ab3bc1d1dfc"],["C:/lmislm.github.io/public/archives/2019/index.html","b0adc8654ee4e0e54d2a66a0f3120676"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","2e963d66894a1c74c1074937475575b6"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","a6e22c4cb28112c4ac13958a3b983460"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","d3500e2b384c092ac064b93318f2f778"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","bfb5dcf92bfb3f6c38424cf510304d7c"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","583daa8cacf317de39400996709fd77d"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","e17fc96854937c037f57f1774af5caac"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","784f284505f706b1419429863b47c543"],["C:/lmislm.github.io/public/archives/index.html","ecee1b64b654e7662d511e0b079e9a12"],["C:/lmislm.github.io/public/archives/page/10/index.html","0aabed87000ae1e8f0598e85350d91ed"],["C:/lmislm.github.io/public/archives/page/11/index.html","0a61615e9367f866fc45e23333826113"],["C:/lmislm.github.io/public/archives/page/2/index.html","f955766537ab2164ff6997c3f67160d7"],["C:/lmislm.github.io/public/archives/page/3/index.html","0e384a41f9e975502dadd05d377d648f"],["C:/lmislm.github.io/public/archives/page/4/index.html","2385d3f2f43c1881b797d470c011de53"],["C:/lmislm.github.io/public/archives/page/5/index.html","b05803121b5099847d6f17dd1d610886"],["C:/lmislm.github.io/public/archives/page/6/index.html","58ba1133286c493ed73b5d2e8c93fe6e"],["C:/lmislm.github.io/public/archives/page/7/index.html","adbdeb9af70cbff377dc91d2f40e8d3e"],["C:/lmislm.github.io/public/archives/page/8/index.html","90a41c4b2e1a0a1ad58e2770bba93b1e"],["C:/lmislm.github.io/public/archives/page/9/index.html","4d8fe6776f8cfe96ec0f49f276c683dc"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","9f11a09de0eea9c8bd4d2567a57c9833"],["C:/lmislm.github.io/public/categories/index.html","841c5e6e2326b9e49a6907bbd7046a60"],["C:/lmislm.github.io/public/categories/xx/index.html","5d71b29f08cfe09d3f1a34026116ba69"],["C:/lmislm.github.io/public/categories/学习/index.html","f51ae3fcfcde074a04d1b627dcb6fbee"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","4c05b077f1365cb54de21f7c99691472"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","eaceba26ec0c24ed95e8c7971eb8fd3d"],["C:/lmislm.github.io/public/categories/工作/index.html","5a45bba38378ee5c5aadee043a2c9c7c"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","37d7fd4678231ea77c3ab7f5630acc07"],["C:/lmislm.github.io/public/categories/技术/index.html","b19d3624947e9975c4168a8cb188f6d6"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","fd5546cb921bc5316ca47f01ca485eac"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","636972c2c1a484ec343dccbea87c4e73"],["C:/lmislm.github.io/public/categories/日常操作/index.html","5a21ce8abb4ece87b09669f5664139bd"],["C:/lmislm.github.io/public/categories/生活/index.html","dbe50211aee5615ef15cc2ffeea899fc"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","9f3a4692a884b35ddaff38cf9025fa95"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","f3d3737fcd149eeecfd52644eabea9b2"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","86c9a25de6d6d96d41db8bafce8d13c6"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","2087bae02be4820afb1db23098478aaf"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","fb85e9846e452c8c8bb1faf434cfa0d4"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","10270d40820d5e88e9baa14451334002"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","6acc831c9a7b2925a46e5070a9077d4e"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","f41236a6c5796dbf60059a82a64e2836"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","40c014a782fe216e747ee7c1f4b7ce2b"],["C:/lmislm.github.io/public/page/11/index.html","684ba0b4fe59646de0e3a72b289fb7bf"],["C:/lmislm.github.io/public/page/2/index.html","de206c8ac543216dcbcd58d9676e7fe1"],["C:/lmislm.github.io/public/page/3/index.html","9922593b7bdd072cb0e5a639eacf45f9"],["C:/lmislm.github.io/public/page/4/index.html","c56ea9a22f907675483e0c1d2d4f5129"],["C:/lmislm.github.io/public/page/5/index.html","8d4c3e939e96ec1066a5383199a13827"],["C:/lmislm.github.io/public/page/6/index.html","3d3a848a91a448a2ffdfb741c4fcadd0"],["C:/lmislm.github.io/public/page/7/index.html","31431329a59fd3f1e82c07beec782aa7"],["C:/lmislm.github.io/public/page/8/index.html","aeaeba7125b1d2395cff0b5a2e90b581"],["C:/lmislm.github.io/public/page/9/index.html","59fe2da1243dab2b7fcd70295be837cf"],["C:/lmislm.github.io/public/tags/Interview/index.html","c149560a097bfd7e73111791a04ceab1"],["C:/lmislm.github.io/public/tags/JS/index.html","d8e10557e6d19739c5cffff10e66e845"],["C:/lmislm.github.io/public/tags/acm/index.html","cc1b219dba09087b6bc92c6986ab5743"],["C:/lmislm.github.io/public/tags/c/index.html","d1e97577250ddfec875aba858fd2b506"],["C:/lmislm.github.io/public/tags/codewars/index.html","ae2c63ce668be685e1b317ba25aaa334"],["C:/lmislm.github.io/public/tags/css/index.html","2a9572aa2cb2ef66c6dfc474cfe20737"],["C:/lmislm.github.io/public/tags/git/index.html","99094a8327abffe4c83c6b92c07f0506"],["C:/lmislm.github.io/public/tags/hexo/index.html","0b8aca15f866da50a8c9671d4d4e6b19"],["C:/lmislm.github.io/public/tags/index.html","f6d10942ff5de72cfb8ac529d8668479"],["C:/lmislm.github.io/public/tags/markdown/index.html","0326dfd544ac609609326fccb8ef386e"],["C:/lmislm.github.io/public/tags/poj/index.html","895a3a5e0cb77063da0b9da6a39a7195"],["C:/lmislm.github.io/public/tags/shell/index.html","aff17164d87602e0f643947459671c36"],["C:/lmislm.github.io/public/tags/vue/index.html","d1c9aea018861e3dd5fb25543937f0b9"],["C:/lmislm.github.io/public/tags/xx/index.html","448c30845164b1d4f86037cdc44bd7b7"],["C:/lmislm.github.io/public/tags/前端/index.html","a4c502e921b90246c10462288b45fe08"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","d7fd1b4e3c11105ba58557c267092c1d"],["C:/lmislm.github.io/public/tags/小技巧/index.html","5e247c66dd46948e4d712bca90e55c76"],["C:/lmislm.github.io/public/tags/展示/index.html","40c1fc2cf13e7189ca2bfb9dd14823de"],["C:/lmislm.github.io/public/tags/工具/index.html","00abb26a9948ac324a0a32c47064c3e6"],["C:/lmislm.github.io/public/tags/感悟/index.html","8e028006fba0b3643a1d2f8e969ba9a1"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","40c471419e97945a75b75ca8b150fc28"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","ad68d06f8fabd2790f5a763cdd7818f2"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","e06b32d9655a9c874ffe3a915a40f5ad"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","28bd91261056eca954e6d272be9579a2"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","575b58e7dce693a06283afe25c558235"],["C:/lmislm.github.io/public/tags/练习/index.html","0664d7ed76cab34da9a613178ef070e3"],["C:/lmislm.github.io/public/tags/编程/index.html","bbf74d6ddfe31950ccfda575ee14531c"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e4d2e38472c708a33b8bb3544c1cf003"],["C:/lmislm.github.io/public/tags/运维/index.html","1904e9fa245dde945e6e4725ef337f29"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







