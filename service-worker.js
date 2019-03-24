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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","632ef0ec9f097ea94283cfa2c351be42"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","725481b1179badc0a60bb969ec1f59b4"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","90dff613ad4a7b988c424c89a83d8c4c"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","435a394e94381cdc1c21a25b9c18be51"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","9e48e7216f9b5dfc0a9240abe571793c"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","a22f2b793f18ed561f71bd05d0bde78a"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","8d78eba2a8ec72e78ab2814246100aa6"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","721db9756aa016848623d0fc231ee150"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","d585d48f8812c230557d5d6c61d0e49c"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","6cda81c49f68ccfb75dfe5d721bd880d"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","4b68421f86758f70894a6517cc69d7a4"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","1fc9d8d4f3c14f8acac3afd5d4b7ef37"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","5b583095d9294797a52a7ab0d8684487"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","b496bf331fd14985a1e9202b06cd2c79"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","cf1ed9c32350f022495f5c641826d5b5"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","b37c18d311ecd038aaaa3c771fcf3b42"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","bc1cb524c7b0f25411d071ff7800f613"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","cb13d5240da459a51713017caf0c4283"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","6d4d34d6476105b987b111503db78736"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","c9443791681c749959601af776b18fd3"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","6ade81da87260dbd82d0ba836af4e6b9"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","b1b395493aa4831ff3ddf6af2ee05a9a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","040b4f4924c798c020dd52cf140d0e83"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","d9d0e2a76d5a9e23f4eef6462d89a19f"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","b7ec2ff6da38bcbb69d46a34ec2649a0"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","155ae0add6995e423df26f7c99d10133"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","57f039619feef60a1d0a3603e139d413"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","e685f0135407a7a769a770a4108b726a"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","df074c6d81f554da6ab4dd1f735dc936"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","c2f32b0df4fd2c052a7b3e7d6a9a9674"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","9814e35f38add116ad40a3aa6744aec0"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","1b173d5d7e63d366df344f42f131b117"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","14f51979350f1ffeec25830aa2acb2c1"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","57288ece5c60e89888e6350565137264"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","974495fd86abce220e8111d8664bafe6"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","faff9701404eb57b3fdca33f03368439"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","214e635c61dfd20fff903f5da7fafa6f"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","4b821e5e92c5fb0bff5bbf6c7cd08325"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","89bb1b135f4b2f61f97c5cf5f56defb0"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","6bffa26e9cd4b0b3cfa1df2571edc465"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","e80104bd443bc5f9e5cff1bab37780bc"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","9529f18072218c5d6ace66a0557ff022"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","85cb09d57ed83cb0ad3b5b7faaa8780e"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","ffd37f3894f7a2d6ad04eb854df15cd9"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","64e17373816a038a30663f4efa1871ea"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","1b462b0cdb8316b53911a7421468d29c"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","49cdbf526470f77cce5038ef5916b3fe"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","5ec9a032c77ad4fb4ed863dbcf243fe3"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","77b16fe160b1194f9f4aeb45c310d6f8"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","5403b7f19e264fe6acba5a83c53554c8"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","90a80023d07379f5329e99bc0bd209b7"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","03e0982969d0af3fc13781bd8b7ded03"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","1864725f6ace13b276a9341fcc4db4b7"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","7f6413c3ee2843f94a1cee0fd2e27495"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","06d6c93d23c0371cae8ecc2c368d04e9"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","8ff883abbb13248eb002d58a260d6d03"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","735863d04b3386918fe2cb368d7cc2a8"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","c5d3573b4092622195c8eee89ab7ade4"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","c70cf0f2ec06fe94eb2bbac6cd747616"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","190c1115826072fd7a844022a757d8f7"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","36420d25f97dccb0ef5576a6e57a1c54"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","d4da8852c08d4477c67d806413f376ee"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","0a8187d4b6abd3a2b7055bdef456379e"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","183055584fdc806fc3faa76a2522787a"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","4beafb553a3f17dadbddd340eb00cddf"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","fa349a059b4d9cec219256a761a77e14"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","e9d30ccb787eb1c7b741df5e1d673f29"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","620c371fb91554e2cc5bd04c729c6e60"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","b801f9097c3e98712a6b984298c56ced"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","7be462d6e73635851014dacb5ffe066a"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","c287f5cde167ea9c62341a95a366fbdc"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","5b9ff517fa513ae98f5d717fd2ad8492"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","5311766db09dd9a560596356ebb79a1c"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","b025d0d9b2a93eb95b4f380d1193cf4d"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","8baff33d5ce45c287753c530cadbba06"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","c4bd73ff5e19e34efa1317b5f6ca6722"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","dae9d3a04596486241c6c905f36d73fd"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","b636aa954a042c67fd418688b51e5ed7"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","f7477c7aac935abaab4bd2d36727cd8b"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","c74ca277a4cc14a5dfda25ee15a73739"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","1ff35b6f6f50bd8a03d5c4017822c087"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","3d2ce6d68b87854debefffe911e3d404"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","dde07b62f8c840b22a2b2a14e03708c9"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","a4c3e1499167ddcfb8108d4377e415e6"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","f0e8d4eedef32c5d62bf3414c3039d25"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","df1bfe84aaf0cc4f20e97f50dcd8aad9"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","e5e5e6bc8c3ef84a62699df2477de0e4"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","a9dd9a6a2da31c7cd57170a2622f9d71"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","3f8a2b175a7c7ffed82fc712227d3dac"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","9d733624937d7aaf424e46d6d33b4876"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","b6cb34d026af74e387b6fb17294053e5"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","7547691a56e20fa79a1bc946e95b2c41"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","3bf9c5dbfd8680450eb91cd7418524a5"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","329b0ee7c50d48d5311547aa233897a2"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","1eb41d6d68d2a543e3d5191e09cec560"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","8927bf8b4d5d10b6fe1a6b6e089c6484"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","a95ef1a35a5c29152f062c9b3f20c876"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","ff4079a6f5b7f2fd8118a291494e433e"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","eba5fb78ce7ddf9f00a357ffa53d4817"],["C:/lmislm.github.io/public/about/index.html","a275a63694d3abb7912aeb649d2b9260"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c86297450fdc939e7fae5ffec0c3a427"],["C:/lmislm.github.io/public/archives/2016/03/index.html","7227b572676516a4e23885f4057c6673"],["C:/lmislm.github.io/public/archives/2016/index.html","0eb5371aea33b4cb7362247e79c141ef"],["C:/lmislm.github.io/public/archives/2017/01/index.html","61476fab8e4f419c154c049d8ac4e4c3"],["C:/lmislm.github.io/public/archives/2017/03/index.html","b96f832f6bc1379c7b584b7e48214aeb"],["C:/lmislm.github.io/public/archives/2017/04/index.html","a4d8f225b2542ae31d90977158f8a796"],["C:/lmislm.github.io/public/archives/2017/05/index.html","964e4f27d371b6d4ef683d9cc3c9ba11"],["C:/lmislm.github.io/public/archives/2017/07/index.html","552f884029981c1c893b34fb6b7e82b5"],["C:/lmislm.github.io/public/archives/2017/index.html","55227e39e97528ce0fe712c6ac0d6a8c"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","1687f1ea4f26c8781a33126ede35f524"],["C:/lmislm.github.io/public/archives/2018/01/index.html","d4e96364857357d2650499fba9d6a548"],["C:/lmislm.github.io/public/archives/2018/03/index.html","56fbf8521c0bb6794ca0c890b977cd62"],["C:/lmislm.github.io/public/archives/2018/12/index.html","94d0c1c1a72b4dadfc6071067d6d1b80"],["C:/lmislm.github.io/public/archives/2018/index.html","0690686e2468d91bb5e8b4bc562dc4de"],["C:/lmislm.github.io/public/archives/2019/01/index.html","014850313bce88bacebcb05d95e09c01"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","cec5213b080fa767a58f9f262a88a7fd"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","fbf3967dff016e56ebfdf94f04e4615a"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","3baedb8f7a8006a2d526c0f92283720d"],["C:/lmislm.github.io/public/archives/2019/02/index.html","0562c12fbe0e952ed1bcc623fde08183"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","145db2d8cab079a8784ec5bd66ca65ba"],["C:/lmislm.github.io/public/archives/2019/03/index.html","7112aafdd511147a83c98506c0c6118f"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","e4af1084aef3ed17f3002b8f9e460a4b"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","953cfa520f22dc325d31a81bfd046444"],["C:/lmislm.github.io/public/archives/2019/index.html","947e7b6c45e0dbee12e88fe79dca57d1"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","d66856f12225338bf3dbbbfa7a148f23"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","ff9a40337512a9f56bd2a9ae518cac7b"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","cb2c37b2d3f90057508174986887d28c"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","60584f8520006b993f00f1673d60efec"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","5811dbc3c56d681af1fa2e651a170a55"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","7aa214994511a9dd40b97141784136cf"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","a7a7d8b09615a88f4485dc384adb73e3"],["C:/lmislm.github.io/public/archives/index.html","cc07861d4df4272b3fa61d0e2c8fb3e9"],["C:/lmislm.github.io/public/archives/page/10/index.html","009198d63a7a564c36037bf6edceb61c"],["C:/lmislm.github.io/public/archives/page/2/index.html","e5c47b03f2720c3fbf0eadaed1f7bc61"],["C:/lmislm.github.io/public/archives/page/3/index.html","c4c8ead12e8c0fb310b6f084ccceacda"],["C:/lmislm.github.io/public/archives/page/4/index.html","2e5dbfb5267392d05538b1b2fe23ac99"],["C:/lmislm.github.io/public/archives/page/5/index.html","de65abcd15586c45a3e734b95f2706c8"],["C:/lmislm.github.io/public/archives/page/6/index.html","4155a7c48a3f2c57eff85e80a927d79e"],["C:/lmislm.github.io/public/archives/page/7/index.html","af5c35e55e95281dbc2cd24d5469489e"],["C:/lmislm.github.io/public/archives/page/8/index.html","74d407eeb575550c5b3590194f9bb344"],["C:/lmislm.github.io/public/archives/page/9/index.html","c04bbbe387880cd715cb75cbeb83dc19"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","41b4000715ca0bb123b5ac07a7d8faaa"],["C:/lmislm.github.io/public/categories/index.html","cc50ba284905bc50df11fbb82177649e"],["C:/lmislm.github.io/public/categories/xx/index.html","0856e5346fede5eba5c184ec5decd51a"],["C:/lmislm.github.io/public/categories/学习/index.html","1625a62dfe9b05492c1a9a6e467721a6"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","573f414b830ceedb2d59ff3d4fdbe61e"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","32a8aaf08ac7eba8ee56d8a6f2efee06"],["C:/lmislm.github.io/public/categories/工作/index.html","d12d5c7dd2c858cd31f552d9b4765b41"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","dd1deecf808994ed60d30e61d43608f5"],["C:/lmislm.github.io/public/categories/技术/index.html","f551d05b38cb82825b9db350623bfd7f"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","659d431bd6c775b37e08bb82df5ee1f9"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","68bba8de9a593b1a3ae4db71a1d91004"],["C:/lmislm.github.io/public/categories/日常操作/index.html","19b2230744621915ff2b35df149e9699"],["C:/lmislm.github.io/public/categories/生活/index.html","095e7e32b949032b1925420e30a2990c"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","cbd51488e99a6bec2c0bb6ac41e4c587"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","7223920b1cd84b7b585849fa54358c83"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","26367969b5028fe8ff7d654904e325fd"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","bbbcc57ad2e30f0f9d54b1fddcab8ecc"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","6c755716d40cc9895dca64d50ff473ca"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","2314c4f3fcb66807b7ad5703658c8112"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","72ceb86375e8056638c81496f4b1e809"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","567f0dbace7d9a618c8a33ad92fd721f"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","b313b318337ab7a784e89657140b972f"],["C:/lmislm.github.io/public/page/2/index.html","1101d426c3da7896e365a022c370c8ca"],["C:/lmislm.github.io/public/page/3/index.html","3091491b9ebe50a753ac7f89af67b5e6"],["C:/lmislm.github.io/public/page/4/index.html","b44f508480f8559c661381abca295c3a"],["C:/lmislm.github.io/public/page/5/index.html","b97a576b270f856fac0c37f6540b32d9"],["C:/lmislm.github.io/public/page/6/index.html","d9cf082a34beea5700844844e775ae9d"],["C:/lmislm.github.io/public/page/7/index.html","bb0647ff24b9efafe2490f29247731da"],["C:/lmislm.github.io/public/page/8/index.html","c84b25cf2cab8e9a43f85d85530cefd4"],["C:/lmislm.github.io/public/page/9/index.html","43d83588859ae5268386f3cc4edd96eb"],["C:/lmislm.github.io/public/tags/Interview/index.html","a13554a0f26aafe52c277de8129bde5b"],["C:/lmislm.github.io/public/tags/JS/index.html","799decff2a6ea84f4a2eaf690adf6a94"],["C:/lmislm.github.io/public/tags/acm/index.html","91e58f1a3c13e3e4d23c271aecd57103"],["C:/lmislm.github.io/public/tags/c/index.html","c12050677dc994c9eba0dc41b8111c6b"],["C:/lmislm.github.io/public/tags/codewars/index.html","5de8198aca406201e780e49a637a5c74"],["C:/lmislm.github.io/public/tags/css/index.html","2780122423e04e8dd0f390b334970ea0"],["C:/lmislm.github.io/public/tags/git/index.html","a460279fd41cb7fbe82ba4078e3a8069"],["C:/lmislm.github.io/public/tags/hexo/index.html","309730f849ddf3d7b7500327d1ca7a27"],["C:/lmislm.github.io/public/tags/index.html","3ff9b2765365e5df6424d5949dac97d3"],["C:/lmislm.github.io/public/tags/markdown/index.html","de782e09bd1921d1e9b6a1cf645fd69c"],["C:/lmislm.github.io/public/tags/poj/index.html","40a13192c288624d489e228ac8382943"],["C:/lmislm.github.io/public/tags/shell/index.html","86d54b291a7e48bdb0e2804af6b657e1"],["C:/lmislm.github.io/public/tags/vue/index.html","a7d507f48c59d323b03baa96401aa723"],["C:/lmislm.github.io/public/tags/xx/index.html","1d4fe3036ced596465ef8521f88930fd"],["C:/lmislm.github.io/public/tags/前端/index.html","2e6f7e9a2d7e645554a2b7ede06448f7"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","a5a585d3e08fd08b27b4fe1ea7657dfc"],["C:/lmislm.github.io/public/tags/小技巧/index.html","e67be49379d492bea3f1b9d5a8b10d85"],["C:/lmislm.github.io/public/tags/展示/index.html","554cd60f748694fa9a845a16a24b999e"],["C:/lmislm.github.io/public/tags/工具/index.html","e89ffb928cee0a9983a61de61ae41810"],["C:/lmislm.github.io/public/tags/感悟/index.html","d0ceba12bd25779fcc09a7184a1bb9cd"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","3951fcf8ef7830ff862ef1d2be1ef309"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","564b939df408e9b07789f2ee814fa735"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","fcd1e2236773dce549c2e9b393eec36e"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","720963ef6210c1b1fe9714474b97c6bb"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","3b3bfdb32a39144db83d50462ae49637"],["C:/lmislm.github.io/public/tags/练习/index.html","fba857ad9e6c984e9d2784d3efa36a86"],["C:/lmislm.github.io/public/tags/编程/index.html","3d8d23b4471aebcc9bb86f05fcf54f39"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","ddddbc603f1da3aca80ca2aa1faae697"],["C:/lmislm.github.io/public/tags/运维/index.html","4967f61924ec73416ae1a1c367de0373"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







