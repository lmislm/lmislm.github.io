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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","0628b3399ba475b3fc75f0d8839e4fc2"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","557399c738b604b06e733ea82421d460"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f9590c2ceacdd63ac623d4bec183f190"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","0474fd03484a32e6cd8ab2f0348d715c"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","772cdf16a6e0f03f02296f5d39aa0719"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","8fdd39953ac24418783a930ce7408743"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","4473931e9b62ab672c4e1d3c04e7f466"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","7e6c3e66251d9bc53f31985f9769ab65"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9f8221c57446347250efa64c2049d0f8"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","f18b37eadc99e0aaeefadd03d0cf1041"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","08be1e8e3affa69ebad463664b027ef6"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","bcfd52ca841ec4a23ed0b71a95550ee7"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","846f4ebf45d6680ec5016352e216f19b"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","e77dce92111b879899010912d42b9224"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","163ba4e827a148427ff349f1ddc16334"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","bf4aef313bf98c0f035d3fd9d3c10045"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","14a2c131c7c6ce5a965b639c034d67c6"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","6fbb355003fc29bac1e919fe6ddad3ec"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","bb83e3b5548562da6f1cd8ca00579cef"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","4e28389a365442ca0f42aa41e0dab99a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","df35e04d20be5ac2281a6f4f16615838"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","19a766dabf017ac1f6a6d3cb1f6f62de"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","109224c04fe64a3b04157dcdb7b6451f"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","becce79251318b5fac670511723e26d8"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","479d2480672cf4d432d79f2951304d81"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","9e955dd5a5ba84523e3a2da4e2862fa4"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","29208e337f35df30937aecba74cae1b6"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","68a831cc092c0007cb1ea84b9dc98c10"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","85c4b79b8c12197f9b47ae613ac54e82"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","99623ed8150021e553afa0c32f320ca6"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","752bd7d56b3fb0df4f8986de27207df2"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","5f83bee21d271a49b6724dcfbea1aa7e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","2c6e8ad399d9d31cd1eb14d4c2120d66"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","a2a83a64bdc3490e56330d11dc4c84c6"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","2591a8c775b5afe1296d3c7b819fdf9f"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","bceb872966173021fffb0d5d08cd7a55"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","26cdc02d367a4eda5b415f7f53fb6506"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","1c20e5041024a6635a57894256d0455c"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","1b6430f168a5ffdd3c48f58b921a1851"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","cee4f13ea0727c89dce71de56aebee0e"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","f52720bf1536574e0f28b117fe5e83bb"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","d702e291f8f9cbe786168a44f2dc6ca4"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","c55e460e090cf2f15a9fba5b9d2db345"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","905c993644fa2271960224315feca433"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","2b88f88fd47eb181aaf8a55e120b67c7"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","5a6d9b18ad874301b3474d42d4c30361"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","eec5567d08c62cf2c503298bc35cbbf7"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","787d4e90d2ede062e8f70d4c4a68abab"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","bad77428231ebe968826ef07d7c7fb76"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","9e70b8608730d0fba0c61763ae86f2ba"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","b34b41f4c2cd36e3f3283a5cb94cb381"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","0ad2f065fd40aa17afe9122d550e0452"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","9e58b3c8b44be8ae345106b55bab363b"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","5d41897bdf851b06cfc34553b502df50"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","5a62eac808d58fb5ced3e7f16431c066"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","f1168574963bf01430717933e16b4bfa"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","afe13edb1bd93bd856892c2978a95ed4"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","554d1458fb805b68edc90042b54da4dd"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","76f3b89ffabf732fb78bb47690caa7d8"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","7cb3c3f2f7c3223a711e7b2f3c073a93"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","6b7ef244bc43287680f88283e1096f99"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","40ad4f92c6866c31796a78cf690a811f"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","6553fc39c3cc66ec52192b95bf52af77"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","b56a89c46eb18558a34022c2fdb85cc9"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","d3dd445dbefd136be62ad8320eb9292c"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","b92e3922c74a454903dd3729f857f8f2"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","d533478507de5b79defad41849891b2a"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","e8d363209540f2dd6403756ad92d80aa"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","97da6778a5863950434f6f4f4bb18e08"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","167f9ca5a212cca92f217f55120ebba6"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","91f21626e9fa11a9c3210d2ad9970190"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","b09d6856aca23355eaf77d6510bad04c"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","c463ede846e74165911e2fd99d6b0e8f"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","17a7b54186f6c4bc4a9079fb37e8431b"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","11ccab6c41fb41434daea0921416dd12"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","ae82ff28426812d07a503efbf220745e"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","503f11f9d664f77d77f14b35fac5425c"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","8f66199a635af72558394977cf985431"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","4b8dc5561b19e4b0ed6d5133c51074f4"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","40cc91ab90a1f6d1f0807c6cb201e1b3"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","a3ced45e5d5718de0145193f003ce9b3"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","4111d4f136557e427e7c9284aeeec435"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","c8f6951efe1a5d272cc75310a24ae02e"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","15266632ff1afdf49569cfe01ee90373"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","f5d5648da9553c05e8617376362df3c1"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","78f236533ab086180878cab99092f091"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","1e49050058f130effbc3f88d4e822f4c"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","ffe76d881260b2aa7de4cc12a8e2fc8b"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","5912db1f0533f40fa31678b77f534b47"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","10e9df6d7bca3aea6456e37d7458b7f7"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","be256ed4740da90355ce885dcfa19581"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","191ebdb2e1d0ed9aa9791948fc1e5bfb"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","d73894796979ce6ac35a1e1364ef0aeb"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","617052dd97ce908a96e9d3eea640dd66"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","05c931b68ff6df704ca7c164bb2ac473"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","294851333c70667a7ae6f313265d2a87"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","19a0085d55f5fabc97f6851baadfbc35"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","c98d8e9aac65f9704c42477c9477b77c"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","f79b0030dad655d95139041af28dbe78"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","35ee783fa96310f75dc05239ce6a6c3a"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","1198eafda6325fed0971025fa086c558"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","f834dc57f1ee228edfb8ab18e76a5107"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","4e9129b1ac6a6c13518997823ef04c9a"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","7ec6e40a53f2737173d34b39815fa7c8"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","e61810184c098d1b2ad2c572a5f2aa60"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","7c4dd179e6d6976d723a0a9322d970d9"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","0aa012c41a6ce93f19b09ddfcae209cc"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","f8b1221375be793d5e23af363a9a2301"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","f41177001589819bdfdf8748a870435f"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","db0cb89318ed986f28a1645d9d392344"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","784d4f163499c56c35b0afc16402d37f"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","0d2795c40feac4505abc8ed98ff8788f"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","badc3efb8278b10f5367b05caa565277"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","2fe3d91a790e64c68de12ca4fd77800a"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","a814cfa169ef69e803427d8ad71e5003"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","ada7afed8844a78e5a45f4e7bc86b580"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","9c10c7ee0c45c921a8ef8f529cf51632"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","31e9ce065c6a113b6a8dae7dde0e93cf"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","f5e191136537a6ebd69edabbfe99d478"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","dd8746c2d93276c1d0a4c2298d0fd258"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","8a8223632e6f4b608a31e4530dc17ac1"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","680efea48b4d974c80e71e21318a5ee5"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","82bcc45f3841cf7481d40189bd8cce0a"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","935f2bef2265dfa26937bcda727ef880"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","3ef02ed492e9ad766b978013280d28a1"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","00dad21040caf791a2d938b7522cd065"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","b5f393435db963e22e5dec760566de97"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","04a75a9c898a57a618ab796ab180bbf7"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","197658c6147172ea1ed7f1aaf97e8e5a"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","d2bc967c904ac1fcaedb79d214ad2ea7"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","d74cdadc3204e532ce56e9b9dc895e63"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","78f0d7c65d0b10fda73d551838863b13"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","9f11ad8f3a4543e953120e9b0cd54da2"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","aa0ae2bf0c8763c7ae4d4d2836ada2f8"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","4b3d6551640756f301b44008cfe3c880"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","8eda30799530b03bc284a2673d2effa4"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","5a342d022e7919ce4fefa155e78c4b85"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","bd56b68e2b115a8873579ca7cbbbeac5"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","b5ff81c2dc2b9030f5e012afbd93d65f"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","f33cbbdf7f5fe1e7ee45b0a02981b3f1"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","5d4377e8bf29340021fdd1968cce11a1"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","a2af0120f95b85ea9398a6b78cf48301"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","b8bf31268d80d5d0b8fb30a026101de9"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","73907d0ac6752543a24b151ef0c3e8d2"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","7e68ccdb6f21963c481cbf77eda7f2d7"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","f92e6cf707827b34bb388e9d475bb703"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","5113906c3e1758d78a0e477da962b580"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","3831ba4904ba6be51ad77f9071095788"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","8cd7012967bd4b18c14089b606c5f0aa"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","0e51085eaee4ac0e727bc6962f6db754"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","9218ebe591f3c97cae8cfc7bff996920"],["C:/lmislm.github.io/public/about/index.html","4185f870ab52a06fd0e4dcc09e137585"],["C:/lmislm.github.io/public/archives/2016/01/index.html","a28de56fd0420589c6001a0d794d1fc8"],["C:/lmislm.github.io/public/archives/2016/03/index.html","6328a1ef0be527761163a00f3959da5d"],["C:/lmislm.github.io/public/archives/2016/index.html","e00d98b9e0356013e83c3584b8947ad0"],["C:/lmislm.github.io/public/archives/2017/01/index.html","040904fd38a5d8fe7bff00ee0daff8de"],["C:/lmislm.github.io/public/archives/2017/03/index.html","e8267dbeced96a99f551635982a58515"],["C:/lmislm.github.io/public/archives/2017/04/index.html","cfd866018f4ee065219a362b3be4b67f"],["C:/lmislm.github.io/public/archives/2017/05/index.html","97132a1c3cf5e01e5a9a0486b63d41b0"],["C:/lmislm.github.io/public/archives/2017/07/index.html","0c81a99d2a603087c79e0a47e02ab2b9"],["C:/lmislm.github.io/public/archives/2017/index.html","6da7f04d3fe9c07739cc039c24b82538"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","59c8020f68c86aff278ff7f984a1c873"],["C:/lmislm.github.io/public/archives/2018/01/index.html","6e2d342f4f4a260c4d4f79e3e2975d20"],["C:/lmislm.github.io/public/archives/2018/03/index.html","2e3ce54242baf775bfa220a8178ce195"],["C:/lmislm.github.io/public/archives/2018/12/index.html","0d8e752428d0607c5280545e71ab7c60"],["C:/lmislm.github.io/public/archives/2018/index.html","90c30363bb0eb7222c476fc7c080ae70"],["C:/lmislm.github.io/public/archives/2019/01/index.html","5ccfde2770bab1fd43af651cab2a76c0"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","99ebec9b9f36f99dc26f1abebcfb9dcc"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","3d2efa7c618fc5b1b7ad626488682e04"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","24ae828c9ccaadfb9fc7d143a7401ac0"],["C:/lmislm.github.io/public/archives/2019/02/index.html","a6769aafbfd7bc17c3831ee8e8179710"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","94e801e8b54093e8350167daa6779f3c"],["C:/lmislm.github.io/public/archives/2019/03/index.html","f6dd57fd42ab2d519c888b279e1cd4cf"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","e9cfe7aa91ad2e2fa0f7355bb089b781"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","5a263c374ad54193f624dc6804876da9"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","7e1964024b0198643bbf6bd486986bf2"],["C:/lmislm.github.io/public/archives/2019/04/index.html","817e0718581978f667db13ebe6115c35"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","2aff7e257435ecde3ad43c9205b47319"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","8eb3238b69867f282f0134938ec9c524"],["C:/lmislm.github.io/public/archives/2019/05/index.html","98604fce6e5226b6629f2b319915364a"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","6b626af812e2c2eb5a08b7550e1fed7a"],["C:/lmislm.github.io/public/archives/2019/index.html","b2f128399f207947c329a00be65bc399"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","b5b25e84f91eba7aac0ff0f5f879a91d"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","c00313bb92a324815289f1e520dbab09"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","4842f22c071df9725b3dd52be680b6ab"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","a6213986c1497827d9b9f58f645d61f5"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","9d0d5de87025828338769e5c8e19a439"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","64393e0087d3dbb55c8932cb4963b627"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","157e74d083124624b034697b517aa4a4"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","2ef7620cfecd148aa122cf453c40d01a"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","d95694680c9e840c4eb05ff8e9c761fa"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","86f535a3f4ce956ef1ea290a770d4bfb"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","9a42ad7a886f13d0ae0cf84916b709a2"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","07d7ca710bb104880e00bcc7b9ec434f"],["C:/lmislm.github.io/public/archives/index.html","a6ccc825c5ae3403fd8b8c27c8a743f0"],["C:/lmislm.github.io/public/archives/page/10/index.html","022d4fd588f6ca84b8964c6b25efe949"],["C:/lmislm.github.io/public/archives/page/11/index.html","818bfbee5b0002bdee855d50d664cd78"],["C:/lmislm.github.io/public/archives/page/12/index.html","7b894a622d5a4f6592d58110333ace99"],["C:/lmislm.github.io/public/archives/page/13/index.html","7f4d66c6c0c129fb2cad31362858ab75"],["C:/lmislm.github.io/public/archives/page/14/index.html","5f0cdad4e4a0868c848c043cc2fb2e5b"],["C:/lmislm.github.io/public/archives/page/15/index.html","9470c37975e62ac932e301ca7067e2e4"],["C:/lmislm.github.io/public/archives/page/16/index.html","7a7e800879a835bc9a4f9428dd730bae"],["C:/lmislm.github.io/public/archives/page/2/index.html","31101d8f4a097e0c85c9b56e9bbe0f88"],["C:/lmislm.github.io/public/archives/page/3/index.html","28c3e43499e04e7e1edf60f9a72b48bb"],["C:/lmislm.github.io/public/archives/page/4/index.html","b134a6ddc82228c04e19aa251fecbccd"],["C:/lmislm.github.io/public/archives/page/5/index.html","b123beee56a14a627004841f3f5b21bd"],["C:/lmislm.github.io/public/archives/page/6/index.html","241d9f966ba34106e1873866a86b090f"],["C:/lmislm.github.io/public/archives/page/7/index.html","f2ff167481b23ce072feb0717653f7de"],["C:/lmislm.github.io/public/archives/page/8/index.html","ad6b2b3c086310bb1f085cad25db3534"],["C:/lmislm.github.io/public/archives/page/9/index.html","a754c31b92b8a24fd9038d3ace39a316"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","28217d57bb8630f158e92a85e4c91959"],["C:/lmislm.github.io/public/categories/index.html","d89f4a9f4029c661ccd61933d135e50c"],["C:/lmislm.github.io/public/categories/xx/index.html","60ec1fc625e590b4f7d70590294dcf80"],["C:/lmislm.github.io/public/categories/学习/index.html","b46c938b8a2d3c78ade513b59f5bf6d8"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","2ea366bc12e220f2c383c35c8fcb44a3"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","6e87b4748921857a983094181c62b752"],["C:/lmislm.github.io/public/categories/工作/index.html","dab64880712de17f2c0ddbdfe7188fe5"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","c20fe74f5da875033ccc2929a0567399"],["C:/lmislm.github.io/public/categories/技术/index.html","e565b777bc26e5af5effa4ec3a55e3f0"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","631a96442631d6b38effff34d3fb97fb"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","1cbb56c5cccc19b5e66298dd4f5f20fc"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","097f16c1cf8698fd28366176251441de"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","ad849f42edffca8e0dbec56772f3eff0"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","021536cd953cffc4e447e2045699145e"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","014861429f6d7a1697fa23e5e04fd697"],["C:/lmislm.github.io/public/categories/日常操作/index.html","0b041bd07e50fc0618f45fe34a58b68c"],["C:/lmislm.github.io/public/categories/生活/index.html","4b4977b3e4a8c2c2a62206c7fc61f093"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","e53744b9930d8a09a1425829d941225a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","545b15e36a3494ed1733fdee8e1e3150"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","29f139bd4eed29bc55dc3cc1de5368ac"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","f50d26978ee54437f1971b6b0055c26b"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","99aea76530910763fbfecad1bc4120f2"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","bb06e15de939232d1620dcf6839e8b00"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","421f38ae9276187498f84ac7e50dfded"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","666101ebbaad4a63b1519e0dac635b33"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","a62ab9a5e937f92b21b9f046dadf71a3"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","13958e92b46682710a1878bfcc1be353"],["C:/lmislm.github.io/public/page/11/index.html","16e41dee47ddd54b72becb8d958b631d"],["C:/lmislm.github.io/public/page/12/index.html","bae400e0048a104d92fd2b9b10b61cac"],["C:/lmislm.github.io/public/page/13/index.html","7c5a5328545e1352aaa94ab0d163885a"],["C:/lmislm.github.io/public/page/14/index.html","e87d42e05d30d980eda2b1a204daa61f"],["C:/lmislm.github.io/public/page/15/index.html","a8a15efa6535cb9cb06dc3e691cbf1d3"],["C:/lmislm.github.io/public/page/16/index.html","8ffc085e1a17051124705ba97bb01649"],["C:/lmislm.github.io/public/page/2/index.html","c82a8727325f3e05777160a39f7ab665"],["C:/lmislm.github.io/public/page/3/index.html","0a978a766aebbad30ea31d28a68c069a"],["C:/lmislm.github.io/public/page/4/index.html","603d7754677485515fcd6e935e4a81a3"],["C:/lmislm.github.io/public/page/5/index.html","d03a4e904ec91b1f063c5802e5418839"],["C:/lmislm.github.io/public/page/6/index.html","8c50bc8a6e9e26dc1387448efdaa3176"],["C:/lmislm.github.io/public/page/7/index.html","f76ffbd25450f3462cfef33ebfbdfe86"],["C:/lmislm.github.io/public/page/8/index.html","5f6b6465bf7ca454391602266a9a4892"],["C:/lmislm.github.io/public/page/9/index.html","f8678883c6d9eeccc891586c579c5fc0"],["C:/lmislm.github.io/public/tags/Interview/index.html","ef3b8a1a37ee0188cdb7f98db5cd590a"],["C:/lmislm.github.io/public/tags/JS/index.html","b310590dd2864ca0bce585ee44a445bc"],["C:/lmislm.github.io/public/tags/acm/index.html","11c99cb0bda95bbf5b3737472878d38f"],["C:/lmislm.github.io/public/tags/c/index.html","a7ffe7c792db1f9a0defd1d89db44af6"],["C:/lmislm.github.io/public/tags/codewars/index.html","3e633795ccd3f313dac842f1b0ab25f4"],["C:/lmislm.github.io/public/tags/css/index.html","f48e5128eccbd4231220e10a23e7e942"],["C:/lmislm.github.io/public/tags/git/index.html","23026b3909aab3ee2ef8fc06411ad229"],["C:/lmislm.github.io/public/tags/hexo/index.html","da9f8b6faa1c527cefa376d98abb553a"],["C:/lmislm.github.io/public/tags/index.html","70f6a21366805aaabd3905dedc7532fa"],["C:/lmislm.github.io/public/tags/markdown/index.html","9e75fd783ae4c135b0271d2cfe971d7c"],["C:/lmislm.github.io/public/tags/poj/index.html","9de76b472f6f8a9d597796581db38a81"],["C:/lmislm.github.io/public/tags/shell/index.html","d1442cf44e97dca7c0d68f1fc50530de"],["C:/lmislm.github.io/public/tags/vue/index.html","f6912aaa3a59dfbdda757a8aebe75c4c"],["C:/lmislm.github.io/public/tags/xx/index.html","2182e2d5b0261ba363dd8fef4959b0b1"],["C:/lmislm.github.io/public/tags/前端/index.html","966d7ea3a2b1f39ec7b7e38b8de80c85"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","db2f0fa7d2cf910725102686fc891849"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","bfebb183dc38ff63f14b6c2398282efe"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","a9125650b362aece6e15571122c2b24e"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","e46f92f830cbde30a1742e1bdc2bf631"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","7fe97cfac5cfbd807a9ed6ae4dda8bfb"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","114d5c694800cc28003a57e07b8babbb"],["C:/lmislm.github.io/public/tags/小技巧/index.html","9090c0b35370796bf0821a44f35eb552"],["C:/lmislm.github.io/public/tags/展示/index.html","6c5f1de72f7f53e845fa9a2740dddde6"],["C:/lmislm.github.io/public/tags/工具/index.html","f6e6cc63c8997e3b2a94962cc702d35f"],["C:/lmislm.github.io/public/tags/感悟/index.html","61bca1ad47f2984ddaa78bf3670ec3d3"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","3600562428f71ef2a71698d1946b0a89"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","ad1cb5d3b2c1100a21fc6e581a2659ad"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","98aa1a127d209ca5a8af2e4189b40e3c"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","078ddc98383ff061507bc0195f8c6dae"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","73fb26569be27e3a65d80149e4118880"],["C:/lmislm.github.io/public/tags/练习/index.html","f070a677704b18e487ce4cf5c00f0c2b"],["C:/lmislm.github.io/public/tags/编程/index.html","1fab633d0629d64bab15d4ad76cfa738"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","9db1291a50358abd11a4df32c85ae80e"],["C:/lmislm.github.io/public/tags/运维/index.html","53df12f020b592ddc5ada1fcc04d569a"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







