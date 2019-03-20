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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","7e0b04dd0dd7e1e6c07e068ccdec9270"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","06c3f34af6dcefb1f3759dc75eb6ac50"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","f7c200d819651d72b18e707d9e91e7a7"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","be61c090405e685c0f69920bede96e7e"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","d1ee835476f5566ff33c1f489a3befaa"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","e8e17f4c295d8f51bbd03bc1d61b8e20"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e157c201793c60966509c0d064f7e4e4"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","8967a6832f40bff89bf69007df6e9d23"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9a52889aa7980aafde7b629832b5bfbe"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","3ee41e942d5220217131f8b897aa2946"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","ba374f9923c7bac032a643d8ebe4421f"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","fd69b3d236263f3263900fd7c45b8743"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","8cfacfb3dfa653b0b99cdf196c32e695"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","ec84e22c6306ec00b47283cf33a2e932"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","5b34c8ffef24e8e100e166fcc862781b"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","ba1825e52a0b4d38431ae6ef55ffdc01"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","574bd00790a88076e78ac4e8abdf8815"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","06bddddded7333b159e11bd68b032dd2"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","6cdd49a7d6d2ac335d367c4b6b85be95"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","14c866c9f1e99f0c79d0a60843bc1d83"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","7caf62af5ef81738cc09393d90e80689"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","9ea5ab923e8bf41f48b5e43e59baa7a2"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b53674ff8db1b2fe802e8fa15ceb4fed"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","d9d0ef1a937fe01e91c264c51b895632"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","7d070e61f1847e1bf8e147506574eb9a"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","537292ea490e20afc3b9eb2965b05a19"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","0d259bf2152b38361e5f28be546d5740"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","d81bb71f71f744f19ac940e2d1f805dc"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","267f9ce66240b027a4325e0e13dd37ea"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","76680d56d757fe8a3e6f3106df0edf1c"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","7d79eacf48dc2ee5972696382bcb7fd2"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","201c26a0ea10333f28d2debf457ecce3"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","1dee36f866d52d9a3f2a6ec07621441c"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","3e615d7f1ca3c9b390c99fb1126d614c"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","fe6808f706a906c6179af246d01af380"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","8163e3e177e7f46f54935578779c942c"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","48a344502044e53478adb941c27d911c"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","3ec210f16de7e6887bd8111f40ae7d6a"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","3b999db8017e5edfbd14776f81c6f303"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","577dd139d2d915168dd8f1a1aacd7224"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","8f072aa22841ceaade2f9e66848503c0"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","02d0b66f301b2c329a57fc492c3eb584"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","63bcbe4810775250df2d4fe1f765729d"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","2c4da77b9294b4e2b950722dc135406e"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","4ac009ca9e48e15a47216a660577a7b9"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","63792f7043a58daba3b94a064c6b5e2b"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","bd627efce0e275ed503193cf9811987c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","7683a98272a60bcb8658b604e73e9652"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","299c1cd88455eda56b47997acbdec53b"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","da65cdc777e6eac27ff92dc7680fefeb"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","3d127c8ed8b4b4ba012b436beb640f66"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","553aef7674a8a4750c1f80c91f96cf76"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","9e173b7ba02f0edf1a08c572159666d5"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","0c0d8f7aa60d1c6f7a5d918764affd7a"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","92a2e0ffa67e7607dfb8770c1f66c007"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","cad59a31c2ee7b1b9ef22f3c8d355a1b"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","ebbc4eb55031cc10e6891144f5202dbd"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","08e83a697f9b213fe16fb701d682d65d"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","819eda4ae75b9f9b801e7a3c281681fb"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","ae221e48f9d0362b6bdc35f31cd92ef0"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","174d308f7ed2f6bb35a9fd830363d067"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","06420fe364860dedc6da1a020cc98a8b"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","045de581829e937ad67bdda1141f648c"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","c4fc32c39548a4e1cc660d96c9a7103c"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","589d1463488c1c832346e9e63cddad48"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","0f55b7587147639c070a729b909d8320"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","0984ec47d44130df029a9c15054df75e"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","ffb3e665a17f5fd82f9ae969fac53976"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","a2a03a3769314a8450a7360017b4bf93"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","384a0c3bd2547dcc81b797a37064a37d"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","a03f93feb36b5b747fd46dca961cfe14"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","747b5b3fdabf11e55b6b765c5f3afc24"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","71f339c401d0592aa60c02907719b78d"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","51397d4a5a57efa563cd84f79724fb2d"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","fa74281ef5bf36d50c0131979be1ea9d"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","2ffadbf19287d8aeb0d3002e3c06b942"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","ec73beded51a000d5a95826ae4c5d423"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","15bb69a3ec8aee6a31dbe055486795dd"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","316328031f5d964855a0bf0105421e6b"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","3d83a33bf663b4f1fb4315c31e1d916d"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","50d96f1c423a7b02ffbde20eced80874"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","8d56ec7bf445b5e1f3e1ce6802cee056"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","b8e4240e67a0d4aec6c451dedb05472e"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","25774ca6b3fcc8d368fdaece57b06c36"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","4ea3dda3239a41b86eca080fe5f561ad"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","89bc5a00c5942f4164a3ed9b5f0842bf"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","25b8754338411af63fe168d78fe2a3f2"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","dd175935004c92f4fc820f216e1a6781"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","47ddbe2c5b1866272faeec921e3ef187"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","e26d5172feaa5b187aaf8ca111b37931"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","8fe76ff8e77f4eb81dba160a3942e15c"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","b58b8c393d8941f7102cde94541646b5"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","41b7bf66f9030d3f93e800e9f4592d37"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","57f719d94b69d832c6e771d77aba5f34"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","2627dc19994f39560daec2ba4a8dbc5c"],["C:/lmislm.github.io/public/about/index.html","577b670ca59e2675808fcd7a7ffa3e5d"],["C:/lmislm.github.io/public/archives/2016/01/index.html","7216349fad033d38571954cf2714d828"],["C:/lmislm.github.io/public/archives/2016/03/index.html","19c80fc5cf4b8d9a362db54f0ab581f0"],["C:/lmislm.github.io/public/archives/2016/index.html","b9eb899634e32183790c87706c846b92"],["C:/lmislm.github.io/public/archives/2017/01/index.html","61443ae263d255981265e1347d9733b1"],["C:/lmislm.github.io/public/archives/2017/03/index.html","cc6fac7327e94d8031454a595edbc04f"],["C:/lmislm.github.io/public/archives/2017/04/index.html","8f8d5a653365648a74b4fb729aed2731"],["C:/lmislm.github.io/public/archives/2017/05/index.html","8377c37a39512ed9ce78c56d702df78d"],["C:/lmislm.github.io/public/archives/2017/07/index.html","a1e2c67c87f842965474c24735e4264e"],["C:/lmislm.github.io/public/archives/2017/index.html","9566b1a62d22a078715e430de877a12f"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","3a8041384e3cb142104076381f7a6f52"],["C:/lmislm.github.io/public/archives/2018/01/index.html","8dd6656173f14d2deec12a445aaf21f2"],["C:/lmislm.github.io/public/archives/2018/03/index.html","2847771322cf68449560c71febafc0bd"],["C:/lmislm.github.io/public/archives/2018/12/index.html","17bd7d30673c0781034b4927a73741a5"],["C:/lmislm.github.io/public/archives/2018/index.html","5cae2429fe2ee276c2edbbc08221a615"],["C:/lmislm.github.io/public/archives/2019/01/index.html","50046d8c928e987c8cd62aab47d805e9"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","7cc9120ec9bacf4fb1323424af5685c0"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","2f38a0245bbc99c9f6b686a9944f3ad8"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","103538fe9f58128adcf53cf16335e119"],["C:/lmislm.github.io/public/archives/2019/02/index.html","4fc5e6180e8d5e291c4618516ce6663d"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","73fbb12e119d8176a7a91371c0e6820e"],["C:/lmislm.github.io/public/archives/2019/03/index.html","acef2c72418f469503aeab75705ffae1"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","66c6c0f91771bd396475cbf984d2e925"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","0cb5e8aa33966afc6e6c6765f139d6d1"],["C:/lmislm.github.io/public/archives/2019/index.html","df8ceb75e6c0045bdcaa01d62642d1dc"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","34f59c7a7b8593c865bd93b027210efc"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","3856535f31c5352865f2bbc684538e3f"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","0d500d33f6d59a112b2ac8f70bb9590c"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","1c0e2ea299eab01c3d7788df52a011f3"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","968ba2c4a4c54ec6f2cd67219838126c"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","478d90f27148a23d543fb1abe88302c6"],["C:/lmislm.github.io/public/archives/index.html","cca8709cf7458fc250c43ea1b3ba073b"],["C:/lmislm.github.io/public/archives/page/10/index.html","170b0b77207e3c9664caed0de3dbc8c6"],["C:/lmislm.github.io/public/archives/page/2/index.html","f6e5779cf2e4cbeb21c587af0a91f180"],["C:/lmislm.github.io/public/archives/page/3/index.html","c4914d44f3d5ca58ae33d8305190bce7"],["C:/lmislm.github.io/public/archives/page/4/index.html","cd3d9c6f824f7bcf11d5307ce7d1a529"],["C:/lmislm.github.io/public/archives/page/5/index.html","af992bf81288085a655bec8c2943587e"],["C:/lmislm.github.io/public/archives/page/6/index.html","d2ac98bd25ed3c8ca2a374997baa53b6"],["C:/lmislm.github.io/public/archives/page/7/index.html","58adf4068364a58dcd84ae0fc1757e17"],["C:/lmislm.github.io/public/archives/page/8/index.html","d14797aa35caa1b2e722ce0b7493d0c0"],["C:/lmislm.github.io/public/archives/page/9/index.html","a6776eaa5909c8c4e4719c01e185b99d"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","bcade2f30083e7511c1236b966dfc1ec"],["C:/lmislm.github.io/public/categories/index.html","2cc8f2abf9852c8cd757664d04f3b849"],["C:/lmislm.github.io/public/categories/xx/index.html","64efbe3299d011ece4fdfffb6e691327"],["C:/lmislm.github.io/public/categories/学习/index.html","472c0baa110e516294425f518642a473"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","e103ba3eac310e7936ca050dd5def79d"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","21f1a3db0b71bdebf57d1b22c5034b7b"],["C:/lmislm.github.io/public/categories/工作/index.html","0b71f9c989619a0621706681d67499ab"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","274970d1370d0ce6c211cd044adfeaac"],["C:/lmislm.github.io/public/categories/技术/index.html","5ec8db87a58014b290f75a2867f14161"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","7d1d05f16dae4a54533fe073ebbd2af1"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","633357de7c768f9270f7422c2591e3bb"],["C:/lmislm.github.io/public/categories/日常操作/index.html","6d1a30e132d1f35d10e1601e0c3771ab"],["C:/lmislm.github.io/public/categories/生活/index.html","ef292f71ef0373d7386c25a3ac5e590b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","9fc4b9f3b8e1214ec25a78d8ed1db115"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","d84c79e345c38b9ad6a4686bf8caf156"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","e13ca1033eef43c2a1772c6363389ded"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","e8d609db7ab24ed311c87339677342b3"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","7307507d8400a6a7c7342bbc4275dc9e"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","d390256d1f56cf91d4728ca09c2f52f5"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","372e54aa9142c5edd38426010bdf28a1"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","2475c40d66dd6d384c381ae344754f80"],["C:/lmislm.github.io/public/page/2/index.html","a217b897c4c9a922747242d99f71c542"],["C:/lmislm.github.io/public/page/3/index.html","67f77d83bbd2c2fa6de5d31f829435dc"],["C:/lmislm.github.io/public/page/4/index.html","1b29788773d0f7cb87570ab194c461a3"],["C:/lmislm.github.io/public/page/5/index.html","e69b84166db1b42557e414ce82bdeccc"],["C:/lmislm.github.io/public/page/6/index.html","a876265d5d4a2ffe287561fc6ccf0784"],["C:/lmislm.github.io/public/page/7/index.html","d2333ff1eb5418d5263db0b45f696de4"],["C:/lmislm.github.io/public/page/8/index.html","c2fab41b955b7cce36c59196c409c9c5"],["C:/lmislm.github.io/public/page/9/index.html","bab30a540bec01733572276fe5419a0e"],["C:/lmislm.github.io/public/tags/Interview/index.html","68d6bdc4204fe25e71de2638f00af21d"],["C:/lmislm.github.io/public/tags/JS/index.html","00b770e508f3cd75b68050df54ae9918"],["C:/lmislm.github.io/public/tags/acm/index.html","80f924e3658e1f07ea7e40bae3e003f8"],["C:/lmislm.github.io/public/tags/c/index.html","81fd821f814028a39356ddcc7cf962f8"],["C:/lmislm.github.io/public/tags/codewars/index.html","a1cb9f69d9e11656aeeaaa8446ce731d"],["C:/lmislm.github.io/public/tags/css/index.html","6dddffdde36b2d5f6ddd6557b91ec2d0"],["C:/lmislm.github.io/public/tags/git/index.html","b6996ca907444cd99a3b0a053ac5e82d"],["C:/lmislm.github.io/public/tags/hexo/index.html","4376f50e01729470172a34c25bb747e6"],["C:/lmislm.github.io/public/tags/index.html","182975c62309e54978993d65cbee68ba"],["C:/lmislm.github.io/public/tags/markdown/index.html","8e87296ecb02644a8d58e9a0d27bd904"],["C:/lmislm.github.io/public/tags/poj/index.html","501a82c45f3afa8d0299cd7dc6905245"],["C:/lmislm.github.io/public/tags/shell/index.html","0bb43d41c4be4d67e3c0626c6e41457e"],["C:/lmislm.github.io/public/tags/vue/index.html","a6268023a77f8afba70af8f3552c09a3"],["C:/lmislm.github.io/public/tags/xx/index.html","b62620d43aa65f9f2348c0c6f181daab"],["C:/lmislm.github.io/public/tags/前端/index.html","1b7f91c516f4b604d974567bbf9e8ee6"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","f89ee32a4e7e226376697e33f5eb24df"],["C:/lmislm.github.io/public/tags/小技巧/index.html","b4ce94c7bf390bbeea1117ee794a5a6a"],["C:/lmislm.github.io/public/tags/展示/index.html","929149ae5ceb678c3d3d88e87a49af6b"],["C:/lmislm.github.io/public/tags/工具/index.html","96e0a0550b4e24236b5177aa796538c6"],["C:/lmislm.github.io/public/tags/感悟/index.html","e5c128a86d1d7cff1173587347fe7c05"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","de99ba1daafc0b9cbc2947c5ba630f14"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","35cdac24d30fe8143a2e66dae05e339c"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","8afae297ee4f972e29f7f51b6845e602"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","dc6324f32fb12e3d2334077e9a96c153"],["C:/lmislm.github.io/public/tags/练习/index.html","9eeddd5c5d302f0a791c60f0104db516"],["C:/lmislm.github.io/public/tags/编程/index.html","286a88940234d0780e7ec87f564e543d"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","76d85faa53d1a479fd3c1678f9b6ea44"],["C:/lmislm.github.io/public/tags/运维/index.html","efb1097678727f93f276a5f75229aa1d"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







