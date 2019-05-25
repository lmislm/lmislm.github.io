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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","6073d44b5efb0ea4a01dfba8421fad92"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","2a4cc18ce7fae349defe353725defb19"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f9a1aa8b9733f10cea6569d7249ccdcc"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7bdc4f40325e73d97d69aa210dac3acc"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","df4df624e06bef915e985459bd1de2bb"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","b116aa17eadb3875568663488031d0a0"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","35776bc0d7ea059c8ff9b05a16fa9ba2"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","b111e552a51813fe27121a2a68010732"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","29db555575678dc802a44b5f9b383d85"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","ac321b1b03443b0486ab238b8dc4b994"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","edf4106a49065ce7f03b90e09ee3d940"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","72749156823d392fd165c2c714b28c94"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","725ca64528120a4cb32ec901c429899d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","839fcce3a981992fc565734ccda92311"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","570786dc4c52667e2ab9d4a487acf3cd"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","cd47c67ad176fe96f961f3ee2cae105f"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","93d579d0746541eac14146035a648ece"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","bcd01ed6661b73c63378a73a1e730799"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","161cd72ae4c172cc617cf972dc738d65"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","c1fd7d774169110637743a70480c4af1"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","e85f7ad1f6f4f443b76c94931a53d71e"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","f69481895996833a0175a656a38a7033"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","849a4f58d875cd00c76d3ea33742f481"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","332a1ed769b7278923e867b5a145ae8a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","c2dcbb65dd42bb21bcb80d1748a2556a"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","80ddca22b40dbdb368a36e1d6849d154"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","1b9207429f69ceddebe4ec8089966040"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","27a187bd8595619c2b269f15b13e619d"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","bafc7a30429a8d316843782e518a193a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","6c8487182d4300437526cf84d31d0317"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","511502bb358b001f39b45516de22703c"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","232f946e0667c05fe26eced1b794919b"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","4f8a0ae1d66b6c6a9f86bfb336dfde3a"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","92a3e4fa45fed33c1d4168503b9df4ba"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","686cc6869db034d068114fa42a3fd115"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","922dd38220d979c34a4ce37664a6300f"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","3a54fdc419eb234ead261ab4c80c552c"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","9bb8b7cde57f0c48525640028cb70b63"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","d2064ac417048b34d7f108d92bc5a9a5"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","3f07461596f5d780e1f39d0fdd2a6615"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3d559c03c3de1dda07e1619e277449b7"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","bd29e0b727b356d22d58691c786cd285"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","88d336783dda30a9c26e106328989f69"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","7221405b4c0e22df152a4fe637646bbc"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","4db50b36c22476df388ec598d4d5f970"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","ccccd99a60f497c77b3c58cc9989d417"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","67516ab08f602160a8b5810960c0b65a"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","057291ad298da77d3c8c1725174173dc"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","1ac7e777184378cbcb2990b2a0ed945b"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","0ecb4208f7cac4891145c2240c0abbbc"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","ebbc401c21ec43d34a832d0e7bff413a"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","1deddfb1b457dd6f58287fc3d0064c95"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","0152a9479098e46f7e0c7e1fc2f53e47"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","c98cf5f698f98fdf20db6095a52c4cf1"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","06be9d16aaa61282116a587524d25442"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","1a7c7d5c01ecc90bcc73570e2907fce2"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","4a8b77993340932cccb607d52dbd3dd6"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","0150aece3ae00ef5e9a4c6be2cabffbb"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","940876c984e677e5ab3f1f7bc09cc13d"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","5dc5831b3108ecbf67eb7f32d8bb66d9"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","7250bb9887cef078e830013b2f27d628"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","e3ce280b8f228fdcdc90ce0006c1849a"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","fbda2154bc3cf4e9022404357bd6c840"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","f7274d8bda1c95b5307323645f368036"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","5e968a0c116e01a995489ce2320e7bfc"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","2e4e87f82919e30bd732b50920432b93"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","acbc253d108bbb50f1c141b587db4c1b"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","d1d93c9d71d0655cc6eafc40047803fc"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","38e261906aceea3ee67fae90f39b2426"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","1c42b370da8c247a1c47b45ce106ff87"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","1ec2d04f10ff6edebd25d9e701ceaca4"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","bc52952adfbed26ec1fc8ce0c46e67f3"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","fd6c0d41e72d36b93eb51119c07c8bc9"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","2da5e2ca4acce369b2eec45ee5148720"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","f39b0ec79de965ece867cb2fd6c3bb47"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","fd7267152b6271609c6fc6b19a623bff"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","633df848a2abbdcce45e00408c5f9ae8"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","1d7141a2ea88e7333d1c5674c5eb159b"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","86ebace83cf1ea69a8c0e6f16c85e6b7"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","a2c46ddf08ec5c63af5ba54634143bce"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","cb9faf9a6055699e3662acce02e00865"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","75a507d6705182e9b5677343c331435f"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","dc200e44a6fe21493f1a47239c0123c8"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","9769a8404da45868d9b7407edab29fb9"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","addecd4b437bcdf73b7b51f2fcd94e7e"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","8f6ae86c67d2ecd05443d3b48ad8c861"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","054d482aac753e08c3d204102022158f"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","5df7d78c030e43c50b77f2531f1f047d"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","90a5bed73d243ab9c859695c3635c8fa"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","fcd4e583144f024445c5c3e1589e4210"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","d4c799f3f2f6767b7bb58d70545fcaf2"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","5a042a43507afa60414c2d6912bf986d"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","a33d41519293876680cc78353fb1c1fb"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","d6f832a9719bfbadf632fbd4d2d77e8a"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","bd1f1a42af7e7a1541bf76760368a1dc"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","2516f9953018d672de11b4a214d54e50"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","fb70ef89edef80c089ad5eece554999e"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","b3d827fa271ed9576e11dfa093022481"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","a21c7e0d0ede04f848bf47a470ec5ca7"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","8710b2a796d6e925842e3ce5a75cb908"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","6793e1c192889463c364bfe3f868df8a"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","4f1700a1eb2a3775162266851b9eb437"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","c64e811c2cfb98a7b86838b376986f72"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","98a49397f42d67cc8565154e7111483d"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","2c8d23c670c155bfebf32f0bc5528de8"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","cfcd29c3f8c32825fcb914afebe2bd1c"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","f01c92c3893e75d8543c4b901e1b6915"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","cbdc864b45b1c18e05e75e608648d130"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","d7924513799d24a66b4fcf543092f239"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","ea971f57374b8af3ac4e643996a0cafa"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","643e75313ac4bfe340568893b541839e"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","10ec9b9c0927ae38551528007d8d0c76"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","04184626fef373945d2bc077f75134cd"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","edff9708ff35471f23b253d2f42db627"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","92a01bf91bd6cfed8c945afda19fd5b2"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","1fe508424e1393146302d644871b5ee8"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","e833ad267c1e121da2115da296e9454d"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","c8eeb58a43bbd17ed846ff8aa0f36184"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","18bc0ae238f03903c4d0bcde6fa22475"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","324d3e12512d9a32bf834888f72dd1c7"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","b9028ffc61550df75d85dea3c1e848ac"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","ab8cdc8847c14ee5d27e0bd731df717e"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","268367effc63ab7881cc8cd50cc6d6e6"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","e97dc45f1fc95ef68ac429fe1f9017ab"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","8c0bb734bb64553cb15911d637a2b311"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","dbde8a9ff730a638c7236bb286cec4e2"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","1f2d93382a03a32a9b2f83839eaeed9c"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","ae8d8f1c855fc5629782a3ed13aed311"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","6474c64f5b1bc4cefb340140fc12e958"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","6f1479f509f257b97b423ae9b8de6b96"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","6049f6538218a6b3b0351f34df40b5b6"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","93c69a91cf0b7c226b79a8f658ff1664"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","3a142277c63c0188db3dd2457f6e46ff"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","cc7e81ebb0c10a5eb075d57ead0f6559"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","cf382ba0c52eeb7c0cf9daf48a756aa1"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","0c8e9125e3133f19dd63b4f7868a649b"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","4a920ce30c090fa973e9065230e3bf99"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","ba926200316445d6aa53fb8f6da7f1a5"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","d1b620f8c2a02b224f9ad73568ffc07d"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","e3f781945307963847a728f9d02d6d02"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","a2e88992e51cfc359648be5824f2a941"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","f8d073d6857c166dc57df0a680040186"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","a3f1c4f8a30de2bbfbfd70ea6365795d"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","014a65481019d3621cca52a90a7de5f6"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","02d348c2d9e32109befef0f2dafeb981"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","38de057e644b1da62859a0d311459be0"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","ad166c32e4a8116f1fea4f7de90cbf31"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","8d83ef6cde2fc84cf36e82d17946ffa6"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","2e2d19f2da2c54ace31c7fa173a3834f"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","8bb8555808b5ea9f24f3f0a4aacb17e3"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","cc4c649bc5ad1ce70614f6636f1bf90c"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","c23e481269ee5bfbfa55776fe0b41c08"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","efae37ced4363f9484840f4e6e08f887"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","471c2619be7586ca1b35ef289ee98a54"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","f3a38093cfb27474f7f4e54f41b3efcb"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","e111c3f10cd2f17d10effd10d7593391"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","957e446ddb7c36662bfbf2f97d34401c"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","2956ea5910db8c0283c5553f34d219f9"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","a9847964369929fa865c7f9d213b80d0"],["C:/lmislm.github.io/public/about/index.html","d19136cf9b8bdaad0f3f2ebb2bd4c7e2"],["C:/lmislm.github.io/public/archives/2016/01/index.html","4ab35f74dbe92a89c4e024d97e8b40f1"],["C:/lmislm.github.io/public/archives/2016/03/index.html","880ce7187d054c910ff635de212d1293"],["C:/lmislm.github.io/public/archives/2016/index.html","e6a5b6ae5ecfb46e246351738b646c97"],["C:/lmislm.github.io/public/archives/2017/01/index.html","48b8cdcac8126080163357e0549b6dbb"],["C:/lmislm.github.io/public/archives/2017/03/index.html","8acefc85f8ba3155acf43c831aae7490"],["C:/lmislm.github.io/public/archives/2017/04/index.html","756d73cdca78df249a5829eb65a23f85"],["C:/lmislm.github.io/public/archives/2017/05/index.html","b85a8412aab7c9b0f6cc7f6091818ae9"],["C:/lmislm.github.io/public/archives/2017/07/index.html","f7c6e3aedaac133360df69d2ee988b1a"],["C:/lmislm.github.io/public/archives/2017/index.html","b81e96ec4cd9441eaeea73853cb3730e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","0b7a93de98dcc34392e860f9f7a47ab0"],["C:/lmislm.github.io/public/archives/2018/01/index.html","cc5d6384945ba2ea55f4d453c99d5ff6"],["C:/lmislm.github.io/public/archives/2018/03/index.html","73bda4e7ef8052815383e1563804e912"],["C:/lmislm.github.io/public/archives/2018/12/index.html","e286986efe35250c21dc55d16fc85eba"],["C:/lmislm.github.io/public/archives/2018/index.html","17068e36dfbdab994d378a87c6723fe7"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a538804669a8f3f379407c73bdb95b12"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","38435d6d5846c92b0501dedfb93279aa"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","96b7dd26c252736311b83352821ef455"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","49ac6dbd1b09011527be22ba43fef07d"],["C:/lmislm.github.io/public/archives/2019/02/index.html","587675102a9152c176c5bb7acb1b880e"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","fb560e2c65ae3e9787c16edda30cb4dc"],["C:/lmislm.github.io/public/archives/2019/03/index.html","0e5a45244a2f229da1e47649fdfc6f86"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","3e612140add97705ab6b5eeb55f8c349"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","ec424757b8a7a0deb4ce5acd735ec410"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","ae07173aee384df4cc8596c7912c941a"],["C:/lmislm.github.io/public/archives/2019/04/index.html","0c7c4f03dfe56711267fa8667a903bc9"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","1b79b1893aa33c133e61f33024728875"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","23260bc571e791d004d6082e0cc4c14d"],["C:/lmislm.github.io/public/archives/2019/05/index.html","83d8bbbbdf25d9832e94a466d527631d"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","3fbec1be7e483dc7859f9b49b90af7e8"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","fd73622c705296984031f6ee0b02a992"],["C:/lmislm.github.io/public/archives/2019/index.html","e065a92e91355f751b85425cb69a4df6"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","7974f8e2e71b8e3f74ab1e09067a7b9b"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","15493c4ad4f49ae2dced101196031872"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","86a741d8bc6e0dc6e687e95ec0a8f17e"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","95e5ccbf5f2043400e93ce8fb83018bd"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","840f1be5f7393729078f10bffaa80db0"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","42b1b5efa20550dc06186a2ee1f95798"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","1974acb052117076d6067ae363d7828b"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","2c82bc290edb8c2446b23768a322d7de"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","a7c9adb0f7a6689ee1e43c0f146d9011"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","67136686c5395a4d54c8e9eb5bf99bf1"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","e9b2dc9575ed4fb46d9e0d85e1a57b8a"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","ca056cb4055137ed89eb8e80f971b4ce"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","4d9a37f3c4d679c976606ccbf727daa7"],["C:/lmislm.github.io/public/archives/index.html","538429140bdcc33a242728bb64be058e"],["C:/lmislm.github.io/public/archives/page/10/index.html","fd91546e153869a92bc0925a3581815b"],["C:/lmislm.github.io/public/archives/page/11/index.html","73f79f35e78e947e09a8586130899cc8"],["C:/lmislm.github.io/public/archives/page/12/index.html","fb81516c89d4abd2e55299c7e1eb497b"],["C:/lmislm.github.io/public/archives/page/13/index.html","30b01016bbd7d961815ff06acb37a76d"],["C:/lmislm.github.io/public/archives/page/14/index.html","c775ed7708a8e5bf14abd6417c232288"],["C:/lmislm.github.io/public/archives/page/15/index.html","77a9d5df0bb257f0e5e7e6772080d139"],["C:/lmislm.github.io/public/archives/page/16/index.html","980190930a3e5b710a3dcadb1ae2145e"],["C:/lmislm.github.io/public/archives/page/2/index.html","137532b6252fe47eb03a8f503f3ba3c3"],["C:/lmislm.github.io/public/archives/page/3/index.html","dc9f20f9c78a1471d3ea2e12e8f385db"],["C:/lmislm.github.io/public/archives/page/4/index.html","e850201bc8ce811b07d98d787bccd60b"],["C:/lmislm.github.io/public/archives/page/5/index.html","c460f8ad75a042870bdcefd17244d0d5"],["C:/lmislm.github.io/public/archives/page/6/index.html","36d6ad145dcac3c0de56ba8f804389a9"],["C:/lmislm.github.io/public/archives/page/7/index.html","9465b9b46bcbc11d9db4112978893c94"],["C:/lmislm.github.io/public/archives/page/8/index.html","580d513a116c12ad3a20e17311396d79"],["C:/lmislm.github.io/public/archives/page/9/index.html","88d455d01d3245db706aa3e1c4d35bf1"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","7dace174fab79d6a897259b44135b069"],["C:/lmislm.github.io/public/categories/index.html","bdff68d3beb6cf98440f7bf8939e3fc1"],["C:/lmislm.github.io/public/categories/xx/index.html","54d9359e2b5159ef4e43b33992b6df78"],["C:/lmislm.github.io/public/categories/学习/index.html","63374356626467a1140f444d2b6f9176"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","9839db58705841e45d32158aaf162111"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","c3cfe439f00d57898dbeda73087bbd2f"],["C:/lmislm.github.io/public/categories/工作/index.html","3c73c114f56bd33212b73c19f0aa0d24"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","5da56b69abebae29051ca2ad06f983aa"],["C:/lmislm.github.io/public/categories/技术/index.html","1aeeb14aa5be87c1311e2b9735ef7ff7"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","9be894ab7576d69ea5e82d546caa6c14"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","99df1b0e1c6ae8a7a82daf9103732701"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","83d1614ac38e8de6d000fd15a3cfcc58"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","b78658433aaf5874ae363c549fbf94e7"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","c6adc55371e9950c392b9b8b5f63eba0"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","3aea236a2245cf3a61da927178a07844"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","84ffa2d37506bd963fa757a8da489faa"],["C:/lmislm.github.io/public/categories/日常操作/index.html","dbd85c4cd1c7a3ceb0af60575c7f8a99"],["C:/lmislm.github.io/public/categories/生活/index.html","be5d01953f3c83d380c7900a45a27e7b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","f93b838b1776c910c217a07c6eb05b0a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","39f7adfb0fc74e98603a0c961b978e8c"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","37c3c38097d9d4695d7f816af7b6cd17"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","29facc003081c705df9885a50747a746"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","34481298f9e597afd357abf287f7c5e6"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","5baea8279149c65047170dd8a0d7daee"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","85609839c8809c6d719588394b1d928b"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f3c55fb3cc68ccaeb7272edde57316b5"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","5adad8b2abc22193e6a742cd23fd742b"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","4ada3bc837b2b4cefc29585188c8e78c"],["C:/lmislm.github.io/public/page/11/index.html","d7169f3bd64ec0b309264bed31abe7c8"],["C:/lmislm.github.io/public/page/12/index.html","afbe577acbae14db1168e939f3934c38"],["C:/lmislm.github.io/public/page/13/index.html","74e3c86cf92430159976a9abd6751882"],["C:/lmislm.github.io/public/page/14/index.html","2291bc9eccca9f8e87532ac2cb3ebe54"],["C:/lmislm.github.io/public/page/15/index.html","3a9df0eb0ae1ae3b27c5b46d2f8a6cec"],["C:/lmislm.github.io/public/page/16/index.html","b5dd420960854a2efcb003edc1ca952c"],["C:/lmislm.github.io/public/page/2/index.html","152cad7589b59567df8a2e833e171d7a"],["C:/lmislm.github.io/public/page/3/index.html","d1c2e523b9e2624427d43a501d693848"],["C:/lmislm.github.io/public/page/4/index.html","9f367fdcfec904683996e45c258bad3d"],["C:/lmislm.github.io/public/page/5/index.html","476ed3d1d9375f751c126b639cdf040e"],["C:/lmislm.github.io/public/page/6/index.html","0641df139ebab1affdbfd895337c11c5"],["C:/lmislm.github.io/public/page/7/index.html","7982e14199293741a6a866cd77ac6297"],["C:/lmislm.github.io/public/page/8/index.html","90419a01ae7bf9a34a83408c4778df0d"],["C:/lmislm.github.io/public/page/9/index.html","780dca30a7dfff66ce2eb1bfd2a40499"],["C:/lmislm.github.io/public/tags/Interview/index.html","f97fbd474bf83b785b505d5451d866d0"],["C:/lmislm.github.io/public/tags/JS/index.html","aa56c88f40806f9a1910396e1ed78a0a"],["C:/lmislm.github.io/public/tags/acm/index.html","4cbdc867d444255a273f9ec4d1bb8fde"],["C:/lmislm.github.io/public/tags/c/index.html","60dc232fe042870913add0cdb2a5a75f"],["C:/lmislm.github.io/public/tags/codewars/index.html","6abc2b8475b64df8c73d8e1bda9b0615"],["C:/lmislm.github.io/public/tags/css/index.html","e1e3b050c3753250facc8604349dcb5a"],["C:/lmislm.github.io/public/tags/git/index.html","a8fbb592eb45e9eef171ce5f4cf29817"],["C:/lmislm.github.io/public/tags/hexo/index.html","98dbb74bee2c8d441b98783f965061c9"],["C:/lmislm.github.io/public/tags/index.html","67889547efb1174f2792942f787a5b1d"],["C:/lmislm.github.io/public/tags/markdown/index.html","0fd5ad95e58a216f5962bb90838792bd"],["C:/lmislm.github.io/public/tags/poj/index.html","c19922b26af974f1cb98400014fa9c09"],["C:/lmislm.github.io/public/tags/shell/index.html","48876d4e2e7c089b2ada4f1727941b32"],["C:/lmislm.github.io/public/tags/vue/index.html","8e681003682d924db5a7c2b75ca83f38"],["C:/lmislm.github.io/public/tags/xx/index.html","53818e0a2ef3c127892793d6f8f8f548"],["C:/lmislm.github.io/public/tags/前端/index.html","d02188e5626e4396cfba52f48fb85557"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","d6f7ffe351cc71a6582779f89fdc0580"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","a4d113b0ea0369253fb2a8c51012cd02"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","2d0527eb978f0a8edec727322250e3c0"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","5190c149221af4267943f8514c8a9bbe"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","6829a31dd3f75c60fdae45a0a2458a25"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","b0a0386dc296515ce9035a786d2ed3be"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","35eb4fcf86e47de7466f804b76c64efe"],["C:/lmislm.github.io/public/tags/小技巧/index.html","656ebe87693644f17f67374861ba2680"],["C:/lmislm.github.io/public/tags/展示/index.html","01e27bbb29ec7ceb9cc0382158a553c1"],["C:/lmislm.github.io/public/tags/工具/index.html","e966e87fa4a2c28854f554f3ff361807"],["C:/lmislm.github.io/public/tags/感悟/index.html","ff22758eeada3104272db36aec8d0995"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","2c3a35612a269b7cb755ca0309de63f1"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","6098e606a707e6b9a72f0733e88952bc"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","67d4c1107bd3a85799c9a2ea60e91884"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","a5d5f34bd29e231cedaf897e481f64b8"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","8a58227672e3770da8467edfd9c6227d"],["C:/lmislm.github.io/public/tags/练习/index.html","22511f1bf25b063e6fca9ec0e8e95630"],["C:/lmislm.github.io/public/tags/编程/index.html","48643986a5925ea8c3053906b39b0197"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","98ffdcbc99c9e4517c6bddadf3d4ea6c"],["C:/lmislm.github.io/public/tags/运维/index.html","ef432aa2a78850acbbcdeee7efbeac08"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







