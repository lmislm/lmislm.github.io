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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","73ca83c0710fa0b05984ce18102dc05b"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","d0a8b8f51f90c3c50968de1760375c8e"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","42cbee3df291a2cfcae1fe8e545a2844"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","d75b93732f0b8fe8590ca753ad37bfe3"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","d4b2e7cdcf25f1380b834e1454cabeb8"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","272451402e59f92a50b63fb9e20f9ecb"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","f164974441c5fa7a89a76d83dd6ce0eb"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","debd93f750d55437e8583f36d0530163"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","86c5a2f9141d3221415e5ca2fe42785a"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","d04de716fa6b8e789a747b36468562f9"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","f8fbe0fb87ce353d2e506be654aef3be"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","139c9485139d3efea2ca40eaaf4ba8c6"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","77eb8c918e548045b4736480b53b69e3"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","a1b8a3dd279b6888cf3144fe3743c74d"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","6b30b835bd1557a067621a500d668d7a"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","c5e48ff525be71884611a2cfc9b81da6"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","b6bab65b69ee88da19972f6eef31c4e4"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","6376aa2e4b545f9ff5e22aa9cbcb02e2"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","1d46a50a411e87df1f8ff90ab9ff6d16"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","93fdd56a9b8492d52c57e9e69017fdc2"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","75d74d92ea9729cdcea0d8b990935b50"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","9e112ccc73b58eee59cab48784725dd1"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","90de21915f1d4674757cd96f4291dce4"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","d741ed92cf6b738af5e51025299ea76d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","89ec5b3632f781890e6aa46a35321050"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","e1c7b3017a14afd7caae1ed3d19fba56"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","4a43669cff9a52e6f32f3a969137ddd9"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","28c640a72b9a153f648395de2b75431b"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","161aae8cd57a5d9d95a5d551f9eef66a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","4a6d1bdc1b15033f57ba22601a1e2401"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","61d8e83b4b3e3c0270ba1f7d748bcc17"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","b5d69dee6fd2ad5f13b9ada92cc1b4de"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","69d889799a75367532815e7f71ba718f"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","cb8b03d031fc02641c408a0ac422b273"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","23d09b56b0b83435e135de66365e02fa"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","2e75d5a684c5f4814965e26a698e73ad"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","88d93aff699e616c2d660970885bc5f6"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","c328f0314d57701988a94cabf9da7384"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","af786f6e83df901e0adfbddeda145c1f"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","b5a64208d80f2201fcc9bcb8b31b657b"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","242356ce0592c49f6432a3824e011e61"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2dc638377b9f7114d760a526ebf28d53"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","ab440143f243e88d0bcd31338a2173f2"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","11d77b55eb4a23f38d439f5e7841613e"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","6ebaef9f534a7f912ecd7b079b269207"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","6d4c02147386bfd835bcec1d7848f243"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","da567c1715e2b82c3ecbd79fd750b5ba"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","9df5701bc3a2502857d589280db4c9b3"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","2cddf5896e980af54446bd9b2d9929d0"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","3ff97adddf86b50b99a497a85634e460"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","e0b454870b45604722ddc540337894ab"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","d06fb4cf659465583c8b986b3de1b166"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","15c377587f6e7b8f943b44ebf06dd9f9"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","4c13ef673baf07f6e489ae14804d554d"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","89baf059b9c5a18bf85fc5d6d2e77be6"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","d681a17d8a8ba957308c9298ee3f6b97"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","8eadee7686466d854985c061d4c3fda7"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","b80f85c782712a0cf29df87e69a5133c"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","347d4f024b96ad308898b43f0bd11e52"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","ef9c3a93ce4490bbebe49c108f60bc9d"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","e811e294e96aae367e9b0ab461ba2ac7"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","15d68927d4acc3751f055f3f55d949a5"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","e45c5f4bf6b8ce438fe53ac2740a642a"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","0e271d2d8ef802715f23e8b5fc5bdb83"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","1d49a285375ef0c2cf6a5e3587705f71"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","b4ac36fe6ca187dc8b92fa1dc5dd689d"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","cfecbae71f9fab9a92d0fcc6febaee1b"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","2c4ff24938de835bcaca36a923aa8078"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","fb622d43622f5eeb9d43a66809283d5f"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","879729535098456cbf8416c3277f36aa"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","95e575aadb6c5aab50e41eb17e8513d6"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","2a928951298517824b92c1791f7684d3"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","5beb1a1bdf71941f7ff1f9ff864063f5"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","9703cda6433530d8623fd27738a3cbf3"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","4e0016faec1ce30c60bda578fccce547"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","fe834738235827af67f51602e11428b0"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","d77763d1f723f70c718edd20d3db7626"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","c919d01d99b92fd22253935a420e9672"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","64383b05f541912a331f38e1c217123b"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","9bb60a36a73e57fcf96f3b393fbdb2c0"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","a171f248bd2b0dcbc43574b429d4d034"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","3c3823db45842984e3821d3b499cb54c"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","e051a65461e1b28e8974b34775a68a4b"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","622aab8bd913bcda15798e113d88d6bd"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","66f06764059ed93234560e3a446bb696"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","ed48d04fb6d5db1533d19f0aea535bc3"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","733b66737d7a0a0408aa60872a4b89d2"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","1398e6da35b1517e90c61a188fcda358"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","164228b4e5254e3995fbce5f0571473d"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","be900d004d538227d7c6dd5d132a0fa6"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","f98421682f23562c7339041f3a1e430d"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","47181762e2621085f892344303ad7a83"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","18ddd689744cc31cff6b16b5217ad29e"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","8e0fbf09069d7b93ed0656a763272704"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","ff48f4cc234e49f0f9aee4c01c51df0f"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","8368b432cdc68e28ef9c234f8a7711f3"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","01acb50a709ac8a0ff8e658888cde333"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","71aa8db91aa18c604c76d6b2851780ea"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","67877f7c25f13f7fad4523b5c07489b0"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","2dea012c1f0dcdea20058d575fdeab24"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","fb0adaabd0296c03cb70c149e21c4d11"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","c2487a7f46fc9781ae98ccc8e95b82a3"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","4e969913bba0b5456c3e09f2d2abf35d"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","863546cd35e64b92677173208adb82db"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","ff31cc8a28fbd3136a47eb2da5e06b43"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","29c93f21809f83b53c2d8c2437d744fb"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","152b6961bea9d01e996813f74d8dbcf8"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","33d5b3b295f63a713db9297ac771aea5"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","b39c0d487d2fdf594b184746a0292e00"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","9c665ed3b313b5c3fb9141a4987cf8f7"],["C:/lmislm.github.io/public/about/index.html","2f9ab0b57dd9a9d058addf3df6200295"],["C:/lmislm.github.io/public/archives/2016/01/index.html","7980199ca39e02fbb34977398388d68f"],["C:/lmislm.github.io/public/archives/2016/03/index.html","b16ca0278cee2d8cbe21fb1687e2904c"],["C:/lmislm.github.io/public/archives/2016/index.html","215b69a2cbb2a8ebb2bd98eb4187f3c7"],["C:/lmislm.github.io/public/archives/2017/01/index.html","31019e677ce2e893de7bc9393454256a"],["C:/lmislm.github.io/public/archives/2017/03/index.html","e12ecac6c04c5630d8c7c07b326d4565"],["C:/lmislm.github.io/public/archives/2017/04/index.html","37b9022a5eece948b9317d3f2e0669b0"],["C:/lmislm.github.io/public/archives/2017/05/index.html","14d0e7758400696389aff934d240db69"],["C:/lmislm.github.io/public/archives/2017/07/index.html","c7a6898d5f32401733927bd6814085fe"],["C:/lmislm.github.io/public/archives/2017/index.html","3c1d6aa46b2d5e5c719803ef899c76c7"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","8ece0ab77bb1ac3aaf6484f137ee019e"],["C:/lmislm.github.io/public/archives/2018/01/index.html","def577b3466e1ca32ab564c147283933"],["C:/lmislm.github.io/public/archives/2018/03/index.html","898b01ede9c5ac0a85b90bda6da70fe9"],["C:/lmislm.github.io/public/archives/2018/12/index.html","d9fdd885a1ed26396c69e040dc51d6dd"],["C:/lmislm.github.io/public/archives/2018/index.html","cf6af607c4b0df414909241d090b0186"],["C:/lmislm.github.io/public/archives/2019/01/index.html","359f206c315c09d001daecdc573da246"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","2a9de1c137b74147eecd7ad6906d1d06"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","5681ec876a0de476921264e016e26261"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","139c6a25773010b1df2a982842c16da8"],["C:/lmislm.github.io/public/archives/2019/02/index.html","75c9f13d3629fcfbeec8d70a2f2e1d65"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","6e61fca7f397774fae679466b348d696"],["C:/lmislm.github.io/public/archives/2019/03/index.html","9460cf772fa5b98ad170b2e0549299c1"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","d9f06b6acc6ae11579678ebf1c8aebe3"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","c6919995c87f80bdae282169a695c05a"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","b4b4b6405694782d92bf7d2a9f1ff41d"],["C:/lmislm.github.io/public/archives/2019/04/index.html","b89359d710b5f0fe458b4492f371deed"],["C:/lmislm.github.io/public/archives/2019/index.html","2fb3ace14d0a2202e9486fcf3b1f3f43"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","2f82444f97969f060cabae531bea5ff3"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","cbd10fc35fc1697a71ce189620fda1c8"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","c8620b3bfc2306dfcffae9c8f556b024"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","f30ef1c6d0de3ea043d87dadbe786d07"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","ed819bc14b8bea51d85105f7c45d63ef"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","a5409c9fc0866ba79c2a01f0116eacdb"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","e7d7df797104e43e84fac0fe28fa37bb"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","5f4b34d1c644974090394266e2847879"],["C:/lmislm.github.io/public/archives/index.html","eb5b4f9318742b24ce7f85162483d155"],["C:/lmislm.github.io/public/archives/page/10/index.html","d02527f11e9c967202afcc483158340f"],["C:/lmislm.github.io/public/archives/page/11/index.html","e787f73707e8d41558048f7c2c746c44"],["C:/lmislm.github.io/public/archives/page/2/index.html","586b7106ffd46d9472d54e5c02aa68d3"],["C:/lmislm.github.io/public/archives/page/3/index.html","0b0b166bf82bbd1989983f5d663ca778"],["C:/lmislm.github.io/public/archives/page/4/index.html","2800fd95075a1954f81de8481be4e98a"],["C:/lmislm.github.io/public/archives/page/5/index.html","270dfcf4098abcf567730455b48637dc"],["C:/lmislm.github.io/public/archives/page/6/index.html","0fa90919e45fb4679769346769ca508c"],["C:/lmislm.github.io/public/archives/page/7/index.html","e756770ae021651440952992cb31d669"],["C:/lmislm.github.io/public/archives/page/8/index.html","8ef1e4525085062e7b833c8667624d27"],["C:/lmislm.github.io/public/archives/page/9/index.html","5ded5e2cc17d13ea7e343c6ad3bac141"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","16e97e4342cd5d5c3d71368d98e321a1"],["C:/lmislm.github.io/public/categories/index.html","d38ee4897029b74d4b69031c7c707f21"],["C:/lmislm.github.io/public/categories/xx/index.html","a2576a2671b23011d3883a18d406d13f"],["C:/lmislm.github.io/public/categories/学习/index.html","f68c7139bb7f78e108f89a737cb1f708"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","d4322ef86a1d9b4b50fab40ea1a8c4ac"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","39d7d7cddfe2842eb0e13429e2886bb1"],["C:/lmislm.github.io/public/categories/工作/index.html","f20647d7fff64cad5186e9a2c0dc5fe6"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","21cd8773fac0c5fb3bc14c085db06c8d"],["C:/lmislm.github.io/public/categories/技术/index.html","a089e94e360723a617e376734f1cff35"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","126a5771396e8b08df870e23a912d2a3"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","e6f8f54da649300f94363572f3febf6f"],["C:/lmislm.github.io/public/categories/日常操作/index.html","13b2b8c7c46d1628dfb5f4de17e1fd1c"],["C:/lmislm.github.io/public/categories/生活/index.html","6a5b719f62c5c0a8dac43aa49e5ca927"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","4e43a744cd36d9bb39a4cbe6924f1548"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","4d676a3454950d7848e21046579d3801"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","c1328c4c7cc5a4b87dd9dda2500b78b0"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","28fa7e43a192bbd8597341c1bcb21c9b"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","7b193592b8591bb52df6a4cb9b6bf4b3"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","2b6f62fa08ec30f01d047ebf34e68c4c"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","90ea3ed09c60bb32a73b959ede17b839"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","60b1a067b220ec1b60984c811e56b8f8"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","3fd8fdb3edb523bcffddec264c012af8"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","f27a7b8971eae138fd5536576d406438"],["C:/lmislm.github.io/public/page/11/index.html","92f3f39cba34a618c2285d65a73a61de"],["C:/lmislm.github.io/public/page/2/index.html","3b97b44d7fbbc3813536a4b6b0dad96f"],["C:/lmislm.github.io/public/page/3/index.html","3b6fb151fcb05cb6a9ffe26e4c26fa79"],["C:/lmislm.github.io/public/page/4/index.html","8404de33ee60599180acc7ece069b4cb"],["C:/lmislm.github.io/public/page/5/index.html","f7cc1669844134a6c5b84a35af57bc4c"],["C:/lmislm.github.io/public/page/6/index.html","f304fb2a27c56d26767d4981d775e636"],["C:/lmislm.github.io/public/page/7/index.html","bf27c5f0e0e582b27e9410062bb15f75"],["C:/lmislm.github.io/public/page/8/index.html","632ffef7d062a725485a1f6367359fd2"],["C:/lmislm.github.io/public/page/9/index.html","eb3c7fe0f4c6eb531eb50ff435c39cbe"],["C:/lmislm.github.io/public/tags/Interview/index.html","0fe625dc3e11f3a011d8acb66fb8ee1f"],["C:/lmislm.github.io/public/tags/JS/index.html","5d7e59272e09563f2189e58200e47567"],["C:/lmislm.github.io/public/tags/acm/index.html","4a1742c638b92e44c1fd07e782bd2895"],["C:/lmislm.github.io/public/tags/c/index.html","e238d76dfba82a42b568fbf8db06f9b9"],["C:/lmislm.github.io/public/tags/codewars/index.html","05b753219a5cb7e2c7dd0f12432623f6"],["C:/lmislm.github.io/public/tags/css/index.html","908e4e0c207d2efe75cd1d060d36a3f4"],["C:/lmislm.github.io/public/tags/git/index.html","59bc5fac4a3f170f3b3f9ebd6558dae1"],["C:/lmislm.github.io/public/tags/hexo/index.html","b9925a909149cccd92225e12c2060501"],["C:/lmislm.github.io/public/tags/index.html","d2bc923220b6b111973f5c9165a960bc"],["C:/lmislm.github.io/public/tags/markdown/index.html","d02fb1e772f8c5c3124ba5a4aa706c2c"],["C:/lmislm.github.io/public/tags/poj/index.html","b539f0867deb505f7f9de7eaf97f883f"],["C:/lmislm.github.io/public/tags/shell/index.html","c935675731e1877ed4ce4bee7e63bcd8"],["C:/lmislm.github.io/public/tags/vue/index.html","f863e4736b3285da3b405b2186d25a04"],["C:/lmislm.github.io/public/tags/xx/index.html","28c02329b361c3f67c9a0268e889b5ac"],["C:/lmislm.github.io/public/tags/前端/index.html","c33c3eed8fe6047659ca9370e33fd383"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","e1077a9c2edf360a1b583538a6e806d6"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","c1301342e05ff8e56b48945b0ff3a695"],["C:/lmislm.github.io/public/tags/小技巧/index.html","13dc29ee97cf6e611d2333e2d381aa24"],["C:/lmislm.github.io/public/tags/展示/index.html","11864241f1da56ba1257347cb450fa74"],["C:/lmislm.github.io/public/tags/工具/index.html","244043a1f26fc19c209d6a39f6101d54"],["C:/lmislm.github.io/public/tags/感悟/index.html","9ef7c19d13df9156ac560fc439995c67"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","ddab33b5f44021e7345d74a871ad62ac"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","ff0029dbff948414df61c52b2cca1f0a"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","94ead4fe64f5e292fa282f79372bc754"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","18ebb2f7356a01b9c47cb2792fb8cd5c"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","82fe03b5d7c9dab274f23be77697ee76"],["C:/lmislm.github.io/public/tags/练习/index.html","0c7f93018b7d6d44aacb25ba817673b3"],["C:/lmislm.github.io/public/tags/编程/index.html","6804b24164e54bcc96e4e9f17a93da73"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","92ec2338fd21721778b39c67b251bea9"],["C:/lmislm.github.io/public/tags/运维/index.html","823ff494c4726f1feb998feaf10b8f42"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







