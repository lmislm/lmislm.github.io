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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","3ce3ccad66aa343460edbf8aa8a81099"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","f5bb0c179d800bc86ee5cadf7dafe1ee"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","caaa3b6c445012ff358bf61e5418701b"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","8bc8ae425b48cbb33d217780236315eb"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","b2667c0076b30f90ba14ffbca995585a"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","4d2b6fcaccb8040c93e50a898bce5252"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","fda8d80cb13c30ce2bb3c61b558cda51"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","c0c017a4f24fa7082c75e91dbded3263"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","108bab39611d2f4c60c48242b5371f78"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","310a87c1aa8744d14031b498cd24b794"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","f103021268f4cf79c2c35d85f5c4f47e"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","fc9b1c27e7dd12d15a498843cf636abb"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","638903e17f2b0639586975188baea69d"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","9c6a6db14b87c10f5f118e380e93ffae"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","1b2ee9d1997c0e395a168bf4330bac23"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","da372f9c30503f67bc6d2a794bf6df82"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","6cbafaf67f2bd9bb921e13497d59ac5d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","8cee108c1cd0af4e7d3778ac513d6857"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","79aa1e18abcf618de02111746ff4f4b7"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","5b5e200333df961e2b5c58065594f8d6"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","304dda3254d31c8478d418958b9a21cb"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","c455c2bb636860576b6389083893256a"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","6e37d8f8c4b7c8415bb0dd17371c2fcd"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","a9c6389dadae641bc53ebfb57778c389"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","3e84be43f5228a0cbaa3983750684506"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","3f41b22edac0266e81d23049125b109d"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","27011919de46980de6c29e3846a88027"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","9d063d16d9a18c2de523d0fca29d5613"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","abddb6e3c83da87871639b9a340804ae"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","08fa8b5d2e908c1702818b031451b1e0"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","9c038c1e928ac285d487d61d2cf0eb83"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","17fc322f660e01370e3518f6b989bad7"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","df0f9f8b223c9933105a1385849b26a4"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","caf827a8dba74989bcfb6fc4a7d6f816"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","7e8f1d3a4d9135f38f5d50eb0cc47c55"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","fa3a3d610288a3752c1728bbca49c8f9"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","0e1e83ff8f996027b714f1c6715d56db"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","aa33364cc3ded28d6f0bbcce79727fae"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","3bebf8d2a443ba563856db7f7386774d"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","f3e57ce756d9c6069cf07097bc47dbd9"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","45cb3c7b5bfa57af14f6be5c103f87cf"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","2b8f4945a71ee2b631505ef1811c1902"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","50a9161c8e306455f019ca0b80ae2f03"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","cd4202f1374584435731d8a5b1f4a0a6"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","c8a6e2f77445c6774d8c98c6dc7a4bfa"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","968b926877051bdbe8907a37d30f412e"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","250966d334ac215937a61be7fac4f26c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","ba36377ad8290b86c81f2b01c9bda7ed"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","3c515100064ebdb772cb606dce8251fe"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","35f7faddac4e2ee10f70106b779efaab"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","fe9bea83956e46e08c3e84c52e1289fa"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","020c9876d417905c3007bd2afdf70fe4"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","538cf5ee8d2ff220d01ad1bce00f8bfd"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","02a4ec27033a117ce8965c88f79a24e7"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","e6ccb10d5dc25cc02480f583d9f1507c"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","b62fb53a3fa1eb2ce16d76bb2a8e50ad"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","f2bf45707c93dfe1140311e9ee00401b"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","9d0fc2bd839bcebdfed434e4cbb519a4"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","46fc0b670f9cc4df9175e17827fcf277"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","487e5d2fc39d3227dff8a55885e21b16"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","69cb3b309030840ac783e7d2467f30b6"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","ecad2d22e071cd8cc9b03982b02e8d3a"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","05fbd32a61e567f8d8892f68756bc23c"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","4a8ad46665bd8d895b7e6f3bbf0e60ca"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","f52d77cd9ff2b11b705aa072e330fdb8"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","6f881d776430266b7cb93c82026a831e"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","d61a0441ae83bc6dd5b28a35c01ca485"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","71e149a4cf73f0b631bf620831e25180"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","1d914da2bc31752afd6f71fb033716e5"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","b04a9a4f887be6022edc9598f24310ac"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","11bde9059334b10feebb6509cc75da7b"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","9629fc3b13954c3808e5117c3fb36f1e"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","7948343d23144b53b6fe21dbf5fba081"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","3fe3d68594d29ab4bf810c28818ed309"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","41e3bd6faa4c9963958292240edd6f61"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","05ff0d9aa55d0fa0368fd72430941c54"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","25ce69e6d66f24d4b18bde73687b3beb"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","def5bcd8c193f47d9e49f0e06b1410c3"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","44bc2e9cfe905abd9cc0e7f21cf7256b"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","83e285cd32db47616857715258a031fa"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","8f61b2c6228354f15a30fbe9f9585c33"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","e3ec8acc6999004934c766b08c16f97a"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","dfbfe33c52e6d4a232b7d247bf2b7b03"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","67ab2c754703fcfc1b328e94379aaae1"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","f7dc06710b725664ff328c358a239360"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","6330a0e5e3bd68193a42b9b2289e9ec0"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","2a88bbdb0ba46327ec1baa4d2e20c87d"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","ea2eee3e2b8c797f32a8401b9dccb5e1"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","adb21b45a20db45f7feffe342c0fb802"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","87dac8873a56337f161f74ae0c497187"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","3e9c04c2f1f41ac574ab2564c8819e45"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","be19b30d6888d951dcccc586cbec376f"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","20ac0207d716e051057e47c91fd476b0"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","bda318aed4b00530f73adc2ba31e410e"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","ec2e5bab7c8f75bdb2ee1e2c04f51656"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","7efe56b77c6ea04aa9d108545c633495"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","be2d0775c94c812721692a89cd40dfee"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","b110a1b2669c2531ba6f7b18e5509080"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","49ac43e873f366870e2fea890aa2eaa2"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","1d0b754865229d52d8b5f8990909f12b"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","6d05759feab8c5cb5656fb73285d0702"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","0d657edc89dd0568928945ea02598318"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","a3d79bdceaa94d21f0b1c6a974aefd48"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","516f5d136bc4bf779cd0c9be146b7244"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","9f01ab5ca2f61bb34ad187096c49ca62"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","ab202032f7f777f76bc9a58bc513874d"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","e98418f7c71614681354724b51480314"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","3f69a6b80b009f87224f3d1ab0f2124b"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","5d33dfd38a7a72990f5a053dff1c1212"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","0036c0fb2773a8ea83cb2c399d4b4db0"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","997b6d3d89ca71d8da3abe7c15017c1e"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","3ae0fdade9f54b5c2fc201a179cbcc3e"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","25ed1765cdb4fb6abf99cfcd9af824f3"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","4bd364d2e3da700c8c6b5189cacc53a1"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","78a9d6e04458d32c9dd59ffe830222e8"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","35fd3d956e1c8956f3d1accf738facdf"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","d2cb3c8d747bbb7472281c2904e7cf3a"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","ed29a36101c2b07ce03758268f61a979"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","4a3c3647b4bcba6894e0eb8625826acf"],["C:/lmislm.github.io/public/about/index.html","adb20def4e34ee05341b8c444a9b33ab"],["C:/lmislm.github.io/public/archives/2016/01/index.html","d1cfa1b44f1f93f9ef5118ea2b161d72"],["C:/lmislm.github.io/public/archives/2016/03/index.html","b1753428454df27cb7fd17806417be6b"],["C:/lmislm.github.io/public/archives/2016/index.html","ead4afaba8b0842ed48d49313c0076b4"],["C:/lmislm.github.io/public/archives/2017/01/index.html","c1149c00c182fd691b9d8bc336716ed8"],["C:/lmislm.github.io/public/archives/2017/03/index.html","5e8451d2d11da4f9279513a50598663c"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1997479697bcaff64a4900003fe63e89"],["C:/lmislm.github.io/public/archives/2017/05/index.html","7bdc1d178687f017bafea19093d5a5ed"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b547713e232d10ba6d238371b1ae4fd5"],["C:/lmislm.github.io/public/archives/2017/index.html","4e4bbb473b8d93d80c7c99241ea4ea72"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","c9124d3946d6c4bd767a28080b480663"],["C:/lmislm.github.io/public/archives/2018/01/index.html","ffc2dab47125652bb2ef37367e67adbb"],["C:/lmislm.github.io/public/archives/2018/03/index.html","0e1949861eb99ba0cf428d83da942710"],["C:/lmislm.github.io/public/archives/2018/12/index.html","02cc679aedcc1cf79620f728b695daf9"],["C:/lmislm.github.io/public/archives/2018/index.html","d64a5a06c0bbc2e0082f75e396ab56bb"],["C:/lmislm.github.io/public/archives/2019/01/index.html","460b5b12665d757b6f34ea68def5f201"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","8bd9f9a9e7da0591c9ce00e8d8f5a3e6"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","9217ce35f13ea9ed62c46d5d7bc8fa7d"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","64199a8d727ec74a43491fb281c074f1"],["C:/lmislm.github.io/public/archives/2019/02/index.html","5902481dc57c1c30ec6c4c148ded6d5f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","034ea7535b1178e3b2cd685d71631d34"],["C:/lmislm.github.io/public/archives/2019/03/index.html","f737e87ad1f5b7c8f37e4a28bf0f8f17"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","a285d0938aa9e5ffa3daf415c0e94dc1"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","a3f4f3443f6df6aad6130b2996559ddf"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","4623c4f29d1990f0e52ce1ffe9e2a0b6"],["C:/lmislm.github.io/public/archives/2019/04/index.html","f53d5ff656216144706f9e12eafa5c68"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","de64d16e47ac2384989913d890998f5c"],["C:/lmislm.github.io/public/archives/2019/index.html","3d3382517a1c2fd618878c93308a7c15"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","c33de97ed4f3692e17cda4e7ad803128"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","098749b39736b56e94e62fe5c1750288"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","f9db7740ada3c86af078d714e223c8f4"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","512e22351f59dcd3373264e6a1c6111c"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","e48dab2425e23876bf91371fef254534"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","35350e71e89c5347a7fc513c7f27a95c"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","9169b7f7fed07370e1f98c370cebc8ad"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","9c02e1528c414e279600a3c1b79ff687"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","33eb913ea627c551c6bd150789296ad5"],["C:/lmislm.github.io/public/archives/index.html","8d5aa09e0dd659c8343ee5a099ace82e"],["C:/lmislm.github.io/public/archives/page/10/index.html","08241ef5aecceb67d66533743ff58061"],["C:/lmislm.github.io/public/archives/page/11/index.html","01fd6310844d047abcfe4276b94c9ad0"],["C:/lmislm.github.io/public/archives/page/12/index.html","bbc52866977e1ef322dc2471aba38e91"],["C:/lmislm.github.io/public/archives/page/2/index.html","d10d381e9e9475f0c9fc21e8f75709a9"],["C:/lmislm.github.io/public/archives/page/3/index.html","26f7b1cee75efea6b8e9cb2f4687fd5b"],["C:/lmislm.github.io/public/archives/page/4/index.html","8ddd762fa2d015286d814ac7c551f895"],["C:/lmislm.github.io/public/archives/page/5/index.html","7ab28ac74b5e888cdc81947569886108"],["C:/lmislm.github.io/public/archives/page/6/index.html","4a143ea02e1fb23eb8a148770543d028"],["C:/lmislm.github.io/public/archives/page/7/index.html","9e66ee1a1673dfb0ac055ecb65283652"],["C:/lmislm.github.io/public/archives/page/8/index.html","de5446819a380731c3e70f3e5d051fc7"],["C:/lmislm.github.io/public/archives/page/9/index.html","42211852120196f6d4e26484f8626b72"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","15f01bd88453f15ca20ceba5b005e846"],["C:/lmislm.github.io/public/categories/index.html","205820c8fc3cde9e9c2df0e682ded8b9"],["C:/lmislm.github.io/public/categories/xx/index.html","a02e0a26a91fa21fc8115d25ed00192c"],["C:/lmislm.github.io/public/categories/学习/index.html","9c288ead4648533e97e9e66171b66c32"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","e75a6fe03623c0c4f27d97b8d84af911"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","6fa6531bd25e347b1e697948965d5ccb"],["C:/lmislm.github.io/public/categories/工作/index.html","baa43c99044c1c9be6b6bebc42137fde"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","cc11a0cf0e7fe231b873ff2db5d86a90"],["C:/lmislm.github.io/public/categories/技术/index.html","74d699dfc441564329271317614fce8d"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","09623331cd6e4e7b9e4eea48ee93fd75"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","31b29dfe6f7a1484d5102c35cfeff974"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","18d9e430d9ec6211801123a1704b6d04"],["C:/lmislm.github.io/public/categories/日常操作/index.html","9274e9a8c00db5e427e3a0b6d2d07f45"],["C:/lmislm.github.io/public/categories/生活/index.html","fec30fc7075c1cc4932c8892b844deed"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","5a3fe22b485d583b67d3c62e22aaa00e"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","6827c1387f8ef77a03bb29f7e698cc75"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","8f0225dfe1b7d7efca2818e50e0f8176"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","c8aa57621cbc1be23d74458f3d2f067f"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","067477711dc91889099cb636db41e491"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","1b8408762933c331ac6f1a5fda22743e"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","21f60e89c6195a9fdf0d8fa8bc08523a"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","2dbcb2ca27210af2353b34f4e46c5670"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","778a1345a65f248d6bc4d898d2928513"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","da1f775724e79accdc52f90990658041"],["C:/lmislm.github.io/public/page/11/index.html","28ec125abbbac46c092141b7dcebba68"],["C:/lmislm.github.io/public/page/12/index.html","6f1ac848033c4a9a589217504e602f79"],["C:/lmislm.github.io/public/page/2/index.html","eb0612ece41b71473e7d21eb56e405af"],["C:/lmislm.github.io/public/page/3/index.html","f8822960689a354290500e2c8e90e714"],["C:/lmislm.github.io/public/page/4/index.html","9b79b17aa1f8c389dcb342a493a4eea8"],["C:/lmislm.github.io/public/page/5/index.html","d5a9fdf2818f84ebb0806085986d02b3"],["C:/lmislm.github.io/public/page/6/index.html","897bac49b7db44e6df42ae5293d72841"],["C:/lmislm.github.io/public/page/7/index.html","66550daedab28a249d9349ed003df847"],["C:/lmislm.github.io/public/page/8/index.html","44085898bc287da805335ae2c827fcfb"],["C:/lmislm.github.io/public/page/9/index.html","f1f006bff2a0cd95121db7903f2cb5d9"],["C:/lmislm.github.io/public/tags/Interview/index.html","4bfcafb716e6953b8444b26d5c121c92"],["C:/lmislm.github.io/public/tags/JS/index.html","b477d022cd883855b4cb4d0b0efda70d"],["C:/lmislm.github.io/public/tags/acm/index.html","8411e373ba3153f887cce5a47e639dab"],["C:/lmislm.github.io/public/tags/c/index.html","fe8b3a998e78249975e5598b8733210f"],["C:/lmislm.github.io/public/tags/codewars/index.html","72335503ead36f93557dd586e2b99cb7"],["C:/lmislm.github.io/public/tags/css/index.html","b1f01d6af72de2e9153ab8de60a4d387"],["C:/lmislm.github.io/public/tags/git/index.html","98de7c398870ea259b943b23a7153856"],["C:/lmislm.github.io/public/tags/hexo/index.html","9cca4e49fa5017e7358bb9196d2e9dcd"],["C:/lmislm.github.io/public/tags/index.html","b738157bf014419f32f92773e6227c44"],["C:/lmislm.github.io/public/tags/markdown/index.html","4e919aa7d43d785d22796f0330bf197c"],["C:/lmislm.github.io/public/tags/poj/index.html","b5db286fb200747ceb6ade9e82253cbf"],["C:/lmislm.github.io/public/tags/shell/index.html","e83beadb824aef9ea2d36e753e822856"],["C:/lmislm.github.io/public/tags/vue/index.html","94ef51321d2cbb8b1d7179f99d4b95bb"],["C:/lmislm.github.io/public/tags/xx/index.html","a2a5820f6c43e7a980b1cc59cf59de91"],["C:/lmislm.github.io/public/tags/前端/index.html","323187582776a595d45f7fa4717acc4d"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","8e4dabf24f99ff3898fe632e570d84fa"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","32649860581e8adda03f1218137050bc"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","be29c814cc64947363dcf36a38b6709a"],["C:/lmislm.github.io/public/tags/小技巧/index.html","f2670d9951ddeff0ba83894214156025"],["C:/lmislm.github.io/public/tags/展示/index.html","16de554aca502a85895159fc30bc7708"],["C:/lmislm.github.io/public/tags/工具/index.html","fbe1744e9c51274f045ef7d8d92b0540"],["C:/lmislm.github.io/public/tags/感悟/index.html","2cb19d84e1317316ed4778bf3af9a7e3"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","2b758091e7f85fed8266902e2fe1c221"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","8144b8c177ac0cb4ff0f1d13bb6a4bbb"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","b6496fa5054c5bc0c8f8f8d3139d9393"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","c8d2e443618582edfa66671a9077ec3c"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","ab2a5e46f991c6cf0d6b2730d81ee482"],["C:/lmislm.github.io/public/tags/练习/index.html","941a9289423b80e13bc4c27f8559a093"],["C:/lmislm.github.io/public/tags/编程/index.html","84dd21130f677ceb764a183bec155b69"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e03adf09307554b5b4824cf3982348f9"],["C:/lmislm.github.io/public/tags/运维/index.html","1a1f83aab5a7ed82f743adfe51fb42d5"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







