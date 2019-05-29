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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","ac71623cbe1226ad4c86fab656fc01f4"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","926764cfc49330366d05691d966b0d46"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","65a2ca42db0dd1478fdd3f12ef9c452e"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","707cda2df9ee871f6be4dd513d55e04b"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","3c39238c1dfd1c2e28c1db67a18b26fb"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","165df241b0cd8924243481f6c5817377"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","efebebeba6fc0c5cebf7e913a6825afb"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","a15d44a3160fe6a0e8a2630527472cdb"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","c4ee0e0473476ada1af9f649007b16fb"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","97ec4a831f83842747ceeeff112f49f3"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","dc460745f481725c26329f5428787731"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","96b490eaa948d65c153fdcd5b8683f50"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","4d13f92886b8a4f15f9619040c0cf6a9"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","d12fc6681fbb6c9b05d95defb998a004"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2632a2e2b518721758f9c1b1f6dc94a7"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","0bee51134d5b9afe3fc9b47e4970202c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","093035b9b95d4868913ceb8f2be0e915"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","42370f364a52115ff1d9cd1e7692e98e"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","c4303c381848ebe6bfe9f5a88af18695"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","18d00f25063a22b170484ae2733abdcd"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","51896223e157f406dc335b999768b02a"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","d5988e8571752fbe11fd3f2714975d79"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","862fa4dbe0fce6cb40e0e39664fcece7"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","41efcc5cfcf317f9a1177b90c8330168"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","faafad9c70682b243ef66d4403b751e9"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","7435a97d8bf3a7f897ef0a7df40d03fb"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","111b98f1befcf73759fbe62fa9526db4"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","39629b504129d0a485138fa8ec37b964"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","04e3b5df21f1cfe250e885950659cf5c"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","6a47402fcf8518ab25799f2855efffc6"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","0d47bb062ae0f361d2ecd5a5d4631192"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","9f6dff46ba599fb16e481e87f953f14e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","9f0b689af472138a39f825b11fd634ed"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","b8897f17bb41d0d45b3176f6c0d5daa4"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","6e691948b970f6447917196844424653"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","5e6d61bfdc44142dcac9f5834422f772"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","f99d8d6142b365be26cdb2ee17e6064d"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","710de94cf468ba3b1ad7a0aa119560b4"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","7dbcc75dcd2fdb28333c9199d9313598"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","586b2314bf99ce5e9ee95a77d40e54d6"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","47baf58220b3c70f928d174074d2c354"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","cfd68c936727b390a86cbabd20ac43ec"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","d6932f48219cac117a56875ae3b631e7"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","a85fb412f7a5dc88758130b8067a8a70"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","13db611a971156de5d15e8b2934e5931"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","633417fb4f02985c64d49ebd957d2512"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6e16d71757def0f83073c4d2204c093a"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","98114d5d8d30861d34380aef0834c8c6"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","7be0373b83db492c7719582c0932991d"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","7c11c34e96c6433b282a299de693984f"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","08c878e3cf3e25a32c1fde9fe38cfe5f"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","0ff45388b9b5820a20ee165a05472669"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","4dd1c590f79487950d420fc383b4b1b4"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","c4a731052757f7958ca218d9a0de5d43"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","9bd1e578e20109a3dbcebc961c4ebe44"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","657aa198d6ee75f5674c5016fb70ede3"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","f17ea765b6487c811d437623d5710e26"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","5cd5641a7dcabff40a4455324c0cae96"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","921e92559ce8d3ceb94580f89c7f1f3c"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","26c6652043203aa3e65aa836b7188e68"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","982ec4bee2e906e9ddfaf927154b874d"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","5e233d7f08af7b77c7f372348360fc6a"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","9e6b84695bf7406063a41dd85bba6a40"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","55ea8454f1f2632b0f09f123b3dc8e3e"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","ace737cca915dbf00dc7c39e848aa205"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","085ce4a2f5850fc87d14ca8a9b354ba8"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","090bea632a6feced952a49ea71ae7b12"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","2d4713352747875bcac9b9aaa4742d96"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","76b87f3188873aaf0cbae4603d24636f"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","d7fda79190c2bdb5d68414752ab1c3bd"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","2a8f6e82559aa705f9007adf02463d30"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","95726e3c294da85b7129fac8d9b3ecde"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","cc53640b835f39fb086548c635879b69"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","b55182f9a51da7451137d54569a4fa74"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","870b530b7c3ef5aafcefa80fd859705a"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","148bdc48369f5013ae689452dbc8b6fe"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","6098990dcb5829d84e5d352999c887f8"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","da1a3f48092d7622b73b686f14db6f24"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","d1d3a14a0b5ad39956b5b95e5b6be266"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","497ed5a4b7416ffa84613499328586a1"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","457d3fa1a129689efeddd9a2b266b930"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","5c11e472950f3e1c644652f79d5e3a6b"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","7ba913dce359851a64de0a06e256e655"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","b42dd4697c32858bdd339fa21776a8bb"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","bde5ebf92449130a3a70b659422cbdbb"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","d5d8f8312d252ab1dc96f274d57e7655"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","8052e76ba690586896a64c186a47b044"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","0997819a8ad0f8ebcf75244fa874e587"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","7ff8a3098583ee89f3bd3c95a0cc1b24"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","4e5ccdd94f3e6a40fa1d79a97e4160f4"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","570b6fc67b73a8ae7ffc28866e655a0c"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","5584db1051ff4e7f79ef1fe494ec2122"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","6cdfe571d63ee9d9bdafd9dbeb9b5114"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","851de6efb27d9a21bb465438667c2d98"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","34b4cb23678eb8974e2c1ca6e29356d8"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","feed48083d1693508f77cb03d461784e"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","839a62e228b81588579e1fa1bc4555ce"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","5518c9873c1ca287b605a541d1671557"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","793337f2a1ba3224d9c2fedaf85fecb3"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","a722e0c97e1a6e1b4589231ad9f212ea"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","5cbc0acc5d35ce2b61aca98c3c73c7b8"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","9c70a9d0cbdd95aa6d43e53f3382bb77"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","88d9aef4016afe808d08d2f124109527"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","3cd3c07969297128af91adfe1f877c48"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","d95b9c9e0ba9b00cf10516222de63179"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","ced08b45906de20d103178dd36863e55"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","420c799209930feebe0b06db3426a8f7"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","f27ce531404903e3ddda7e9dbac88d6a"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","290e590b23b2f43897a473e59a6bff15"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","c630bc8edc8142a2e66be34906e5f02e"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","70aa76b545c997f3d30dad510f001eb1"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","7bef060e0156910c54753e132c1c76fa"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","c83383a950172bfa876ae77d48ea69cd"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","622ae5aafbf1266b92b907282122a478"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","b675873006f459cd0e4298882ca911d2"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","7ecd6e6f76949d958f642de2a4b70ef8"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","1f372eed1ea68d923504faaabb06e018"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","708357ffd0ba4afae0d0e078801cc777"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","a09b4184628f546610457703663b8e9f"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","c61596c57e2057f8eb9c4a0db042e912"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","bd4cd139870d737a517cda7f2937fa67"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","9dcdab82dc7166c5b0642eb592c1bd13"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","04b59bb5387692f880e2600049a19d6d"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","cc140d826331e79adf8f70e18ea4bbbc"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","a15684284125f9633889443754f0f9d7"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","7b5a7a344a1ef7509e0739abd0ec06da"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","874be75f82b1ff4b6083e4d8fdcb4d4d"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","5ad538f950afb1936f8786e0b6510fd0"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","f96ddaf5471e9614da0ea62a81c7ed0c"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","2622b6c86f2bc3f9e21b8e5e45535400"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","8e05c43a53612d81fe1f44935c997c06"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","4b432762bebee05d3d028d54363322d7"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","bd1492682d3f9440b4885c3d6ef1fa5e"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","912a946726317d7061baf52cbf0bd53f"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","e833acc90a3454dc4532b3193053295f"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","d5928d4d95f90f1c31f3367d599da387"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","0b4f1b2aaa98a35beb3892e6bd28bf69"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","93eace57469a680914f1bf1fac37932d"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","ccbc2113b3697dae1bf006e917f9a9b3"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","b62b8f5780cfb3b3a7a182a4d8c39791"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","b013a7613b9df958e2fcd2707c341121"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","d0f42af9f177ad580e5d61e8f396f2a4"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","49f693d6c5bfd46cac54294eb81c98f1"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","a330053f0b580e0e75e63f81ca7b3588"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","b5647004d7bb27d04c756d0f2609e9f1"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","de1c0814cf78e016127d56f1949eca85"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","cd96b59a7cffcb51f9d09f3b55437da0"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","cba9f18844ba80423f15ba3263d694ee"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","14b2878fa197730dbedf280ed0784cce"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","4560e99312bcc36606b49f67c23f1c5b"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","3a5b0feaaf62951a975d9971ab206c10"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","46f155a2abfa43c0d02d22aed97af159"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","c3cafddfd486c6143be9017c62037230"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","b0222e4f7fc728d2b01e28e09411b4e4"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","ce214f37188bd96b62fad9c43714063d"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","a3b4c57296f774f591ae8b450aeafe20"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","547fd07be4d07f186a00f3e9edadc4e0"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","29588a3a01715c07f19d4ed1218e35bf"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","303e5bd6f8e8d1608e30f269a7e26acb"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","f844e94fbba6fc4e92c7ae72ea7510f4"],["C:/lmislm.github.io/public/2019/05/27/2019-05-27/index.html","64435fed7ec729b5692d7e9d8034b965"],["C:/lmislm.github.io/public/2019/05/28/2019-05-28/index.html","022c60faa6f31af64bce2263c547e95f"],["C:/lmislm.github.io/public/2019/05/29/2019-05-29/index.html","dac77bf30a46ecdcba3a56d30cc068ce"],["C:/lmislm.github.io/public/about/index.html","e52b2d48eb1802a5155b28e93659c446"],["C:/lmislm.github.io/public/archives/2016/01/index.html","64a2ebcd8f5cd8a3ccb8f2d48e6931e7"],["C:/lmislm.github.io/public/archives/2016/03/index.html","3b11ec5e1275105b1f68ccc627cb1ba3"],["C:/lmislm.github.io/public/archives/2016/index.html","2ec4a3ffa435eca162f71132ae8cb948"],["C:/lmislm.github.io/public/archives/2017/01/index.html","6aa46726b0c9d37cd8d617b6eb1520b6"],["C:/lmislm.github.io/public/archives/2017/03/index.html","179e404c82efae23f0d15e4581ff405d"],["C:/lmislm.github.io/public/archives/2017/04/index.html","30e86e8b2e3b66887d2aca77f16996cb"],["C:/lmislm.github.io/public/archives/2017/05/index.html","561a1641b99f1fe72e3e45d8654b50e4"],["C:/lmislm.github.io/public/archives/2017/07/index.html","75ab13fc9a9bc9061b3ea441a3d6fdf4"],["C:/lmislm.github.io/public/archives/2017/index.html","6ee95b3c5477d06a8331ed74abe51199"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","c46618f7e36694d6ceb4920c46829c44"],["C:/lmislm.github.io/public/archives/2018/01/index.html","43e8263d8d1d8df2e21ce99c06a587e5"],["C:/lmislm.github.io/public/archives/2018/03/index.html","7058cedbba34c8d565afaea4259729c3"],["C:/lmislm.github.io/public/archives/2018/12/index.html","97ad93a3a91933724831ab0429a97287"],["C:/lmislm.github.io/public/archives/2018/index.html","fc6dd26842c5a82166f8398e4549b949"],["C:/lmislm.github.io/public/archives/2019/01/index.html","c0e4273f877247cecf17b59bfed9d6bb"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","5723822875a08765b97986bf4f7b1f42"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","8d3eac553beacb06f4856bcb82e77a37"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","3c2436dbe1a4f7ddfb25ee2ea850b83a"],["C:/lmislm.github.io/public/archives/2019/02/index.html","0d95253a0d063564ed84be2cc761db24"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","617d9fe96701489b3565e3b0d4032d8a"],["C:/lmislm.github.io/public/archives/2019/03/index.html","97a361eddce4f0ef246c449f0184ea54"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","4e4c105d32a97c7c4ca41bbe974512f7"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","986fd0e78c793a54157e808df6c6672a"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","ec18586c57cdbae13a8fa09ea79c312b"],["C:/lmislm.github.io/public/archives/2019/04/index.html","a6c80fd43dd771ff4a1babb18ddc3315"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","b7d4525052d2a6d75faf2ec699e6dee3"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","7cebdd3928b42db58de8754b66601fa4"],["C:/lmislm.github.io/public/archives/2019/05/index.html","c31d02be390a2382399275dfcb68ceb1"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","75ea25fe287de1284749e97dcea5e52e"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","ed9c6d1e89669684a1b2de71c748b54b"],["C:/lmislm.github.io/public/archives/2019/index.html","49a80273552f3097421e0d18745b91c1"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","c3d520496fa051cc4156f55b90f04e9c"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","0e1ed7d37a173d56891fe5984cebdbe6"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","c7583613b2c517766a15884aa24e0ea1"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","7641a54b076a9e4bfeb78ed334964c5f"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","6e8a522cb9ca4a9332ef2883d68aac76"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","be19484e59ba33541a4106d52a4991c7"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","2daecb4af04ea02d33cf64ffb3296539"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","132986e5f72463312b156ef4c7bfd5f1"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","78fbd8acd188e673b33d8a325d3170c3"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","ded8ee4b6865326b049bdb5a60573bfd"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","fba15300eaa5030edd8c664dd1a77612"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","9a6c892967800d182dfda48b49c40c36"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","b4dc8e4a1f2ae4817f8818a1b25c4d03"],["C:/lmislm.github.io/public/archives/index.html","83ab82c9483a00726a7b7054dd8ad65e"],["C:/lmislm.github.io/public/archives/page/10/index.html","f8e34e275ff0ff73a54354becae5e8a3"],["C:/lmislm.github.io/public/archives/page/11/index.html","04f92106feabc61127f40f9a4483ae55"],["C:/lmislm.github.io/public/archives/page/12/index.html","339334a9e9443b40b5d093ec93dd2eeb"],["C:/lmislm.github.io/public/archives/page/13/index.html","c8d211709a010ae02e61942a293a00d0"],["C:/lmislm.github.io/public/archives/page/14/index.html","39ec6ed5a58436ff8a4be45922382dc7"],["C:/lmislm.github.io/public/archives/page/15/index.html","2145837efe183d15a204138952a0e4e2"],["C:/lmislm.github.io/public/archives/page/16/index.html","08e93f22b984e5012cb2e8764acbcbe7"],["C:/lmislm.github.io/public/archives/page/17/index.html","0536967475562c5595b55be913048e9a"],["C:/lmislm.github.io/public/archives/page/2/index.html","f228050a95a426715b601a84664c1987"],["C:/lmislm.github.io/public/archives/page/3/index.html","3b7a7dd5825c64d2e774f2bd9d2fead0"],["C:/lmislm.github.io/public/archives/page/4/index.html","f2b50ea5e371382c48718ef3d69fcad5"],["C:/lmislm.github.io/public/archives/page/5/index.html","8b48a961f59404e37cfd73b2fb2d228a"],["C:/lmislm.github.io/public/archives/page/6/index.html","5c599959a9069cb1e8cf3f7f404773f4"],["C:/lmislm.github.io/public/archives/page/7/index.html","bacf9351b5e0c7ccadbd0f9abe9f0f7e"],["C:/lmislm.github.io/public/archives/page/8/index.html","5bc3ccb289d1a0149ec9dd5a21996fbb"],["C:/lmislm.github.io/public/archives/page/9/index.html","b8e78028fca4bc53a99d1e19de84d29e"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","27df933bcd57b8c3e552653785e9fe23"],["C:/lmislm.github.io/public/categories/index.html","46a470f027b3ea42e5eaf284ea0b031f"],["C:/lmislm.github.io/public/categories/xx/index.html","631c7d4caa9455526f1940a2411379f4"],["C:/lmislm.github.io/public/categories/学习/index.html","50ab822ee4ae4fade22f4fef0ae29703"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","3c796a633fbc1e94fa7ccc2099677294"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","102de59cc5c38e96982fd6121749b9be"],["C:/lmislm.github.io/public/categories/工作/index.html","df16a76e9b67f53f134e77f552550c45"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","5e5bced7fdb6163726432adc682c0a7a"],["C:/lmislm.github.io/public/categories/技术/index.html","6759b583569693427c104ecbc116d5d3"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","9da854ba06f0fe002510a557c9d4e9a8"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","73080d54f87741d83c1b9b9247eebcfe"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","e84a034297c962f9875517f5a3646a75"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","0d4b671d38053467b12b5b9d448867fc"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","117856c885da169c5b0cb76d21db5d74"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","56f2b0608f229f634215642ac317cd9d"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","26715fd469065d48dbdfba2e61536b3f"],["C:/lmislm.github.io/public/categories/日常操作/index.html","21f78cfb835d424909821bfb5045be2a"],["C:/lmislm.github.io/public/categories/生活/index.html","af3699695684faece4befcf7b56eb93f"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","91c357c119d1dd0eb0970c9dad46773e"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","0d55f67fce1f1dea667455968a9709d8"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","5c2f8bd8baad5b7b06d598cd5228b489"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","b6effcccf3e3ca697ad4bafe62941701"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","8c4a829b01aa462127cb3ab5d60f4391"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","45f39a84e9d0e6be4cdd0c37578a0204"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","aefc49f45dd7a5888539e6204e3036d6"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","dd02f67eba0272891af21fa923bbf5b8"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","5a593eaea71c7aa7f5fa950d8f2e960a"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","06aa019a456f241ede61a33f748cef59"],["C:/lmislm.github.io/public/page/11/index.html","b9b1eb070348afb384e317451859b7ed"],["C:/lmislm.github.io/public/page/12/index.html","150ffcf01618006d7632d81120e52c0b"],["C:/lmislm.github.io/public/page/13/index.html","307ebe5aab80052ad80dcd28c2142dff"],["C:/lmislm.github.io/public/page/14/index.html","35ef063255729276247de68f41ea6300"],["C:/lmislm.github.io/public/page/15/index.html","d28ea56fa15f30c54ef91b3428a8add1"],["C:/lmislm.github.io/public/page/16/index.html","7fff929af0fb2630e9ec14a386ed6077"],["C:/lmislm.github.io/public/page/17/index.html","78ca5bce1686cc7944999948455c0ffd"],["C:/lmislm.github.io/public/page/2/index.html","39e27acd064470731f70a9d0daec79e1"],["C:/lmislm.github.io/public/page/3/index.html","86d6659b3d5b33a6ce4b89ddf97ffe96"],["C:/lmislm.github.io/public/page/4/index.html","a6304b48f500bfea3b7e4b4c620cfdce"],["C:/lmislm.github.io/public/page/5/index.html","332108068e2f34970f6ea189200a6926"],["C:/lmislm.github.io/public/page/6/index.html","79d56e32f261724ff92a1473af9c6abe"],["C:/lmislm.github.io/public/page/7/index.html","4aee815d5357b4e2487fb328cc5408b1"],["C:/lmislm.github.io/public/page/8/index.html","4beaf80ca9ec76e2f8c67d6dbc45f7f3"],["C:/lmislm.github.io/public/page/9/index.html","311977e6d5a8a5dd61feb67c58d3bb6e"],["C:/lmislm.github.io/public/tags/Interview/index.html","acf7b4d654366f1320b4e257daba9bf5"],["C:/lmislm.github.io/public/tags/JS/index.html","a1f674e66ae86ffe92be8cc4cfb06124"],["C:/lmislm.github.io/public/tags/acm/index.html","bcf76326ae64dd4f6342fed6ae882139"],["C:/lmislm.github.io/public/tags/c/index.html","66dc0b9f2f45cec4366799ca941544f7"],["C:/lmislm.github.io/public/tags/codewars/index.html","f4a49e17291c7fcce30ec62e8649c1e8"],["C:/lmislm.github.io/public/tags/css/index.html","0c9c66447168541bc3aacac99f7bded6"],["C:/lmislm.github.io/public/tags/git/index.html","d3dcee317de05158b271e2d41efca56e"],["C:/lmislm.github.io/public/tags/hexo/index.html","da618704663f5ba4d806810d3aa6b4c7"],["C:/lmislm.github.io/public/tags/index.html","cd38eb93066885b3f84e6984db497227"],["C:/lmislm.github.io/public/tags/markdown/index.html","1fb33510c2510509bea664786cbcb8e7"],["C:/lmislm.github.io/public/tags/poj/index.html","e7b0f09b0022e5fbecc759731bf741e0"],["C:/lmislm.github.io/public/tags/shell/index.html","8ca21d7f40c354e7ad8ad0e31788bbf8"],["C:/lmislm.github.io/public/tags/vue/index.html","79d0fbfbb9ae90058f10d9ef141719c4"],["C:/lmislm.github.io/public/tags/xx/index.html","f1a73a9e9c3ced6e82036102d1389f97"],["C:/lmislm.github.io/public/tags/前端/index.html","0318845674ded1290134842367ec4147"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","89504c1ed38c1f877dbdbbeb293bc096"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","a23439e3ae252807bf75cd009209b720"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","699bdaf19d169e2142806677303a2495"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","787585ff6042074ad7039df60cfcd63c"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","03bc984d2cd56667d729915e262f75bb"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","817751edf011e51fa2ccf38a783dcdcc"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","2db63c762b9f2be92bfdf268371bee00"],["C:/lmislm.github.io/public/tags/小技巧/index.html","d5ce0d689ad4c0d5bd94e2ffd695b10c"],["C:/lmislm.github.io/public/tags/展示/index.html","a7d40503d5947a812969500efab2ed08"],["C:/lmislm.github.io/public/tags/工具/index.html","b61e161d8d2d7f37fc64a9db55aa67d8"],["C:/lmislm.github.io/public/tags/感悟/index.html","b170bad82236f644d7190b1ab878510d"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","357de4bdf6e9346540167c8ca95e4c8e"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","909cf39aac8843e6c5a1c135a6de0454"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","8c37ecf23fd6145bcd3de93a7164f0ae"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","b4004f4b32b3b53cafa6aaf0e651e689"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","0d3c37be41c0599cf7816192e03d7344"],["C:/lmislm.github.io/public/tags/练习/index.html","4433e6b65892867a2879e0896bcc621c"],["C:/lmislm.github.io/public/tags/编程/index.html","977691e019bd7bab4f15ebd297fa9fc9"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","a259c470324e3b3a96902350e0883798"],["C:/lmislm.github.io/public/tags/运维/index.html","1b1731e47a9399a0b134bec644cb5b5e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







