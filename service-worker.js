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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","9b598d0c195e3524830497478303c799"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","99b1776008865bfe83ec59b301ec1cc7"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","da568df1319c997c0f90914f2c831332"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","825892cbacf5fa235a61fa62b881728d"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ce4bb864ca52de7b26ab2ca63e6ec84b"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","20ffee7ef4b18b7a63655cc8281a99e3"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","d3255a62bafabbc203cea687f6a0227b"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","602541e99a6dabe01a688d7bb7537008"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","c9795459c8009d3094e4ac320ca355a8"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","3eb74dbe278d860e78af3e0e647e03c6"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","88cfefea5b41afc6ae57672ed35ef8c0"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5e8b3fc5b7b2708987ecbd5bc8dc1e38"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","584dd44bdd8b7f4843c6fbfb332cdc61"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","5c8f3aea2f67756372836693adae2d43"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","ec4fb61605b4f36bb07ba8cbe4a2268d"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","cf7717112cf831fe986f16185e1010e0"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","2a57c492313a6ed625a6fcb15fd909c0"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","27a6464c61d0649eb6603f78ed140e14"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","45ac620401a93a20fc3fd3508f0c6101"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","0096290a3e526c0894c7fb15be24e71a"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","f67b61893d4b855b276088de29e3ce82"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","707bf3d7c004e780a866e6f3c223a6b1"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","783c82865dfce3dc8caf0f7f53c11e93"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","44fbd3e7706a3919deff387d3a529b4c"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","28a6fc8edc939b0aff8e4d761eb1dc5e"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","c942aca23f9fb59860c294e2d2e9e44e"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d1a5bf4b2ba926edf17e99d774631deb"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","160fe24c54a09bd392ba0b78267b6dec"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","c98f0e5b0eebfecef32eb91e9c7fd469"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","db14dfd3896e7d70fc237ec854be0731"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","bf28c270ebde87bd770cf4d7916cf8df"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","08b2e8d8ca14e5db361a1062a761c784"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","2746e3661d16d1f3ee38c87d166e579f"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","49c9b67b185581d072ea523f3686ae3c"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","852ca9afc255e904fef9af2d63858cf5"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","513ada8e7f7cd83620d78a9fbee1ab5b"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","a65d2607fd190a17550644a9880563ec"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","6ebbff804d78d87002e2b4caf0324de8"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","b9748a48ea82a437f5802405ccbfc351"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","fa48f2117688506410c42a57de6cab07"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","fdb7a3107a3d5196400dcd7d1d329630"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","fee6cd876d44f3320ca92c08b96a058b"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","e7ef1ad51fa0ff46a815ba5951abe185"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","e6a97d44c452d6ea67fbbb83c2d80241"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","4d5c107f7136cf1b3e86619d941777a9"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","e800fb9fdd203dfb2a8e8e9eb9f8bd26"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","e66cfe1e4d51f4e5690e87ec45835978"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","47c0e780a31d2d11716203660ec3dbcf"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","660596149c74ec3e45d54f53355e9e53"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","a567979838f1e6b0be8b0029289cfd98"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","34d796bcfa3f31016550931cd7d1186c"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","7f3090067b05baa57264658f94c23404"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","2764969172eb832f513aa2497f73c5b8"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","19f59902a0b8ba2dc08b908cbe2c23f2"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","c7ab4c78fcedc9d27d2484c7b2eb1799"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","78ad82d7d22f7c91ec6c54a454eec567"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","0646fd2573e80fcf833f6ae64e4d57a5"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","cbd7a20bcde5eca5619b10521c9a3101"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","e21ae850d0bceda91b0dbbe477c701af"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","83d98601f2e93d9a98fa9c1a6ad94377"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","846128012eb45db1aa4d3e0ba3dcdb7b"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","c4322b41d12e4b0ada2af8e11fc7c8a4"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","a6672e585e7fe30cb41f4ca7be6be55f"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","1ffad1c0f14d7ccab361697f931a9ea6"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","1743569ac456750abfdd7b07d23646d6"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","d13e1da1a728f1a441f7fbe79063aece"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","a04254c47eec49eaafa536d2af6f68c4"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","492505cffdfd98bb2dfa6b05a446edf6"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","a869de89575d3d96324289cabcbf397e"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","0d6f02cc08b9bb918169a2d2148e0e41"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","27d9916f5f4bd6c6aa38cd2f0acefd57"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","73f58a487831084b8fb1069e129674f9"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","e386be340a12cb319c3a95eefdd8b178"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","d9d937bbf50466af10f798f8a6645bd7"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","39f28c15d474a6d826d2a3a68578638d"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","37cca420204601384832b637a86e7511"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","a060083700245c23cd2f5b412b4b95bc"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","0f733ad997a7b2c751d28b320b477ea5"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","7d8633b52ca245193073765bf860b48a"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","6f8b07d61c7aa99fed550040ca163323"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","26ca0ad8d07e1cf2b6539acb085fa956"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","0995fdb85e3272fbaaf17a8ba2cf207f"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","4754b68a06d33301c5ff3816a5a44628"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","f0dd757d2055e633205e1e6f69824330"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","6cd75a74f24cb2d82a8073aa50b382e4"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","eca9b0cdcaf155a2483368e1db5b96aa"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","b4d1eaac331a23445d81d0cf5a6b1517"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","a032bd832f7949ae86ba05f3e2b62fdb"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","c457c3443095bfd0388cd49575fa9f9b"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","2b5294fc6a96b0a05f42de3c2856b941"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","fc23e9fe05d1e175f9032a46c29d3cc7"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","43e1938c6679051a44ab6ce3637858af"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","a5ac9d8b78b7cdeec08980d46ca96f37"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","a7d1e7a3b21cd68e2a81054ae5887221"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","4a2d67ce4319c97ba04e60785c9c635d"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","37478dff1e24c26afb34f1f47a947030"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","adc804bf020e32474aef333a54dbf970"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","7d071bc595b23982fc3094e72063286f"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","e68846cdfb2951f3ed76856874441191"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","b6277608c89d0ab991a7f74ad7934400"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","5e2a24edf0b4f9f85eec749cc41338e9"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","5a4035c569d2429612e0255184d61533"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","c2fdbe4cde8cd43a856e423559fb33b1"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","62bf6f7ae7625e88cb08bb74d22c1639"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","c9bbd2ccde608b24c890d3784758cef0"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","19751737e9d89ec31ad943589d3cdf15"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","f2480731ef82af2a1ea9dabba22e34b5"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","e6137569a3742e4830f1ca8bf554a5c6"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","246fb4ca642fb7e4034f2a1c3238f950"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","70dd10e283b929150d2a990b0c12e2e0"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","8ab06db1ff3df29cb69ef0a7458b244c"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","71ec996aaa88ee077d164758b3c22ded"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","b6a327625de986d39c7ad6fb9ef679f6"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","1a863665ddc1b1d8a4eeaf15a5c4c6e5"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","e35dd1c84f14934833b7dcd61ef12e65"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","d4cc2128e5d90cc13cc581b8dfc33b8d"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","98bb69fb46e724315d227ef8dd6ffaca"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","49b079dd0e20edb8ac113d9c8f610d0b"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","099a64bb71fed02e31838391907ff715"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","b9438cd3bac2a00f0502dc99d1f2a4a2"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","fcad96656a227e1217853cd874c70114"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","381d3651c329b65b501e9b3ff41d6591"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","fbebb20316725e1d368a854922df94a2"],["C:/lmislm.github.io/public/about/index.html","3e76c4de0b8f25c6c6f5192133e1a3b0"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c833d94696be8590c6344b7342899ddd"],["C:/lmislm.github.io/public/archives/2016/03/index.html","d73bbc5c35d1646b78433550a6fccce1"],["C:/lmislm.github.io/public/archives/2016/index.html","ea8f14b0e163888f2626c227dd41ed6c"],["C:/lmislm.github.io/public/archives/2017/01/index.html","0eeb30faac617eea2cdce1266bf256ff"],["C:/lmislm.github.io/public/archives/2017/03/index.html","9c041c587533dbf49c7bec94327f41a8"],["C:/lmislm.github.io/public/archives/2017/04/index.html","d55f82be38e3930e70e017f099ae58a0"],["C:/lmislm.github.io/public/archives/2017/05/index.html","d787a28c104c5054b63d6c2fd84414cb"],["C:/lmislm.github.io/public/archives/2017/07/index.html","76a4152c63e8c9c5e5921daf277636ac"],["C:/lmislm.github.io/public/archives/2017/index.html","09f87319d1c6d2be68a63a3e369ed1b2"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","307e4d78a6a82825829acac81804e630"],["C:/lmislm.github.io/public/archives/2018/01/index.html","0207f1fa145ec3c5a88ee8442576c359"],["C:/lmislm.github.io/public/archives/2018/03/index.html","37131c6df186332d9b3c44696e20c897"],["C:/lmislm.github.io/public/archives/2018/12/index.html","3046ca78830a363c090131a6ece0913f"],["C:/lmislm.github.io/public/archives/2018/index.html","fddddb56773cb6d54780a8af71b0f0d0"],["C:/lmislm.github.io/public/archives/2019/01/index.html","61e81584fb7a28a9b660f0aa9531a2c0"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","36ac77aec7e3bee54466b38f7d6fbf66"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","55cfbd85a75fa11bdd22d55dc6476131"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","1ee58d2aecb403f7d4898d41c0083bfc"],["C:/lmislm.github.io/public/archives/2019/02/index.html","cec9525edb6eb9d01af8a55d85a7270d"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","e381edd6e16692e07c4f1270e408970b"],["C:/lmislm.github.io/public/archives/2019/03/index.html","b77dd79c1bca59436da5fb72b9541604"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","d08f70d70c00d4d03bdbb25f9b02b790"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","938ccc2e76652bd80656345c97b16cb7"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","8e1ac3719f4ce73fa2e17a6f713a63bb"],["C:/lmislm.github.io/public/archives/2019/04/index.html","ed51aaab3a74757769b8aceb77a249d7"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","192c7369b20ed1582887b4d35db38464"],["C:/lmislm.github.io/public/archives/2019/index.html","fb2088fd18d9640d92c8f41505931d9c"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","a74409eb4d839abb87ba8ee2ef80cf10"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","55f184c9703be02acce7210a3ad6964d"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","37caf857ad666e8d4b931d2f0521e774"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","c5d19b8792c6259ab1e0e9c5cd75cbe0"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","30e91a1a19e1b48f8007bc0c98ee8025"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","8d372bc9801c403a88ea074eb584111b"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","a50c8c87b8827011915e66f7dc006610"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","2cb332302c607e9f4ea5b143c695e776"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","e4252362cede315926ec054ac952a9cf"],["C:/lmislm.github.io/public/archives/index.html","4d4e5e3a6c1bd2d7d9be479293285d4d"],["C:/lmislm.github.io/public/archives/page/10/index.html","5f84e26bd2d25df973e6651535bd5553"],["C:/lmislm.github.io/public/archives/page/11/index.html","f6e052616abc47034398b49e37f6b166"],["C:/lmislm.github.io/public/archives/page/12/index.html","5767d0bcbde32fd4e9b64658fc1aabb4"],["C:/lmislm.github.io/public/archives/page/13/index.html","60fd669897e02fa5b9268de88721230e"],["C:/lmislm.github.io/public/archives/page/2/index.html","8c7352c0eece94d129936835615c0544"],["C:/lmislm.github.io/public/archives/page/3/index.html","30d0ffbb520983cfa9c6c98f82fea870"],["C:/lmislm.github.io/public/archives/page/4/index.html","17373a308fcf08eb6a287384bef153d6"],["C:/lmislm.github.io/public/archives/page/5/index.html","c5478c8d95ce453cd1a498ba9c6b21ce"],["C:/lmislm.github.io/public/archives/page/6/index.html","c412a87a5c04b680907add23380b1a2a"],["C:/lmislm.github.io/public/archives/page/7/index.html","3fccee228cb8f4ddf9d0398e8339e9ed"],["C:/lmislm.github.io/public/archives/page/8/index.html","fa9bea2d04f088b59f1a0a042eddf2ac"],["C:/lmislm.github.io/public/archives/page/9/index.html","91fbc2a3649a143540d2604a7740a3bc"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","0db206c449d699d6c3b540f4ca79632a"],["C:/lmislm.github.io/public/categories/index.html","c01f35a14b93f897b55bcd295615d5e4"],["C:/lmislm.github.io/public/categories/xx/index.html","66440fb914e5a2c3afb4b7e9d4d59af8"],["C:/lmislm.github.io/public/categories/学习/index.html","5969d8d247c139d431638aab0701272f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","a8b34d7a80af982ffd2a78f95250ca24"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","0387862e3b8d08eee0aad1c425a5e534"],["C:/lmislm.github.io/public/categories/工作/index.html","a9ad1ab267048516a53a0378fe28e42f"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","cd37dc7bf87f7ab30afda26969530304"],["C:/lmislm.github.io/public/categories/技术/index.html","ff47b76a02e2648cbfb91f81a768c957"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","31081f5520d3d04740a8502d17869606"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","d6735eb458cfae3508e1073f32052dce"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","1d245a2fbc3eb002cacd6842132d06a7"],["C:/lmislm.github.io/public/categories/日常操作/index.html","9f2081f6890240806c7531c5092e0337"],["C:/lmislm.github.io/public/categories/生活/index.html","b27580ce03584f184f37e18ad7077e50"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","e89c5dfc39a505fd6d9412ce51675712"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","82014c0d33213fd539ccc3a95e504e54"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","0d737329fb75715dc04ea7a394476dae"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","b8176127ae9dd6d9ec53acb742c47dc3"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","6f63c34c5476e8e4524ffbb863023fc3"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","32359cb1aaa49ea25db24d2b59630ae6"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","618ec15892031f1a773292077333564f"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","6199b327394a7de0e0363a61b736c871"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","a7f7fc75b8263394391591cbbf3a8ed5"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","28efbd5aaec07935be70666b1b24af5d"],["C:/lmislm.github.io/public/page/11/index.html","e3a486f24fa2f7e77d7f4b44efd8abef"],["C:/lmislm.github.io/public/page/12/index.html","0fa415082f3e0494f0293a0d114ef445"],["C:/lmislm.github.io/public/page/13/index.html","9da8096b2bd4f6067335c5f3dde369b1"],["C:/lmislm.github.io/public/page/2/index.html","9fe9e26aa0d7d55989943c7dd53392a3"],["C:/lmislm.github.io/public/page/3/index.html","04ffdee63d1399bf3dc45369ccbde98b"],["C:/lmislm.github.io/public/page/4/index.html","3ad1bd963af58c86a2999f347e1d9bbf"],["C:/lmislm.github.io/public/page/5/index.html","024c6d52e6ac3e3ac981885dba28fadd"],["C:/lmislm.github.io/public/page/6/index.html","ebb13815d8addace98d42be9c5737427"],["C:/lmislm.github.io/public/page/7/index.html","6dd09c7c715396e6646c9bd41fe72941"],["C:/lmislm.github.io/public/page/8/index.html","4e27cf93a16081d61113185eb645baf0"],["C:/lmislm.github.io/public/page/9/index.html","4e26a2f89427fce457299d2567997d9b"],["C:/lmislm.github.io/public/tags/Interview/index.html","4c1f2333bb71edda213d8d78f2dfcbcd"],["C:/lmislm.github.io/public/tags/JS/index.html","b2d178ef692d1f944ac4694203038cb1"],["C:/lmislm.github.io/public/tags/acm/index.html","d718a1f934906654c2abd8a41ac8114f"],["C:/lmislm.github.io/public/tags/c/index.html","f49f3b8ebd341d0c4538006ab2935f43"],["C:/lmislm.github.io/public/tags/codewars/index.html","b46e4de9ed2e311a459c34b66ae8d212"],["C:/lmislm.github.io/public/tags/css/index.html","c0247df1228f947dedc24241b543cf0b"],["C:/lmislm.github.io/public/tags/git/index.html","1f40e0d08d72ded583a4ac67f22ca621"],["C:/lmislm.github.io/public/tags/hexo/index.html","ea0aa8be68ba8c2ce66fa6b0d25538d2"],["C:/lmislm.github.io/public/tags/index.html","67542e163024577032bfa538096c6adb"],["C:/lmislm.github.io/public/tags/markdown/index.html","61abae61c04340116afa6ff1cd880c94"],["C:/lmislm.github.io/public/tags/poj/index.html","d8d435e459037cc36f81fca04f80beec"],["C:/lmislm.github.io/public/tags/shell/index.html","41cf879ac052a25890104c358af5ee82"],["C:/lmislm.github.io/public/tags/vue/index.html","02d6e907b97effddd83ed42a3f344f81"],["C:/lmislm.github.io/public/tags/xx/index.html","689cce74cf39272c60fe3d005db2ede8"],["C:/lmislm.github.io/public/tags/前端/index.html","4fede06730f221f97175c5ffacae0859"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","c8fe310f412af77f5da8eb70ad28cc2b"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","a7c0dfb768999e4870150ca48dbe7774"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","3c33e6a459877bb40bc308b0cbd8d615"],["C:/lmislm.github.io/public/tags/小技巧/index.html","809a3cb49ead03a6640897e5d9e8ba0a"],["C:/lmislm.github.io/public/tags/展示/index.html","a4bc7139e275fec295de36cf1c21d13a"],["C:/lmislm.github.io/public/tags/工具/index.html","fc794668d1269fa928033d2f5775ed90"],["C:/lmislm.github.io/public/tags/感悟/index.html","999337e6af1b57f3e028563b471b927c"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","1a111ad17c4ee1d3bfbea19eb318f1e2"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","675e7c7cf849cc7e23a28e8f8ea80fd8"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","c03367293dea581fa7d12484604439ea"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","9c8aa4a07e2bdebb65d39626864eb312"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","b3871aa606e81974d8794a15298a4181"],["C:/lmislm.github.io/public/tags/练习/index.html","3b209c60e740783cca749f79d6a5f052"],["C:/lmislm.github.io/public/tags/编程/index.html","b007bd391a0eb6787c313cd6c3a906ed"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","51fd75f093e88aa47a0fece8f844a087"],["C:/lmislm.github.io/public/tags/运维/index.html","4de510ea7533bec42428c56cb36fc6c6"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







