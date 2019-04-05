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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","8e6a977880dccd8009172e6df55ca095"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","9fe614f50e34fa98f2df74f8d4f21640"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","59449bc0fe2536cad01652e13247551e"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a99700eef161eb50a599556b5b00299b"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c4f10fdc85550e042752d15ccf1a2319"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","d152329c9101b928c7b47f4736581741"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","776f4a54e3f4dac3842e9310f2ac9e82"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","a80c211da7b02f4c8b89892c16aa3482"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","82b9fa3f533669e63f12b60b371682bd"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","ae767d6f7ef4fcabacef24610592e31b"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","fc4953de2d861bba06b72666e2ea1d4f"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","9e2ebf4b270080e66fdfe961a77e1efd"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","5fa86ae83ac5d4751044b25f0eeb9879"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","bdbf4c9ab317940d1442835ead1569ec"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","e980566f818cee85c6c44759019cc055"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","0ae4e6cbdd1df165f455c94f5c1174c0"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","98e9133624fba92cf60e9904f4b33f56"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","95e5f1caaa628cf580680e8965ca382d"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","22edecb5d0ced95f48660eb369832196"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","c2b06ce3abd2f506b4aae5f29e46a40b"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","e8ba3623fd0a01262c58c32e0fd4d6f1"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","bcb082606007a5574d09c938c01a86d6"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","b796b34891a1c2c0e282ade90539ee8c"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","6016d9e56b7a45bccd039a954a0162ec"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","73810a8a93de207d6cbe8c103c7a6ed1"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","52e73479ed34fadcbb251bdf35be3062"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","0f57cbaa25ddf078c27173fa4e82aa04"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","099a032e91bca60b79a89533e0ddbf19"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","04b6da29d994df9355879c917fd27535"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","2ea4f60f840ce871d7e8df62ee89766a"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","d748de25e46e6f56649f6106701bdb44"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","c08b54204f3f0fe077a25436dd9afa9e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","59b90a30ce00ba83a2be0ac58ff42d11"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","ba3743c4d871423f3bef95ceca8be5be"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","6aa5557a8c283ab8d28f39ccd8678c99"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","e085a408cb96802fefc706f76d4719e7"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","155f65a57eb8627bf5a6b20cdf0243db"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","8173843dd060a4f85ccbd70253f66d3a"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","ef52743f7107c382439f37d98f866bfd"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","49fe7537c5fb71aa3dd4d6d4fc8fb8b7"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","d2ac6c6f4e2d577a3b51878f1342863a"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","e938bf8db9690c4bb7711be61c8cf06d"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","097fe6922573af79019b82ab1572940f"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","77cd0e34d4c9d6341c4110a02d4c5b20"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","cd2e9d2c31791755750cb8f08ad24d91"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","597bb2999ccbb6ad5105f5c504ecfaae"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","6c774502747e9b76ba264431fd3d9b65"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","05aa55c9dff5021a50e74a526f10605f"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","b2fd4c92e084763877f54055d069de0e"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","2690c9a2f3839721fb798d3f8206224a"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","a2755f94f2595e61154e275ccb381581"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","a0dbe4079188fe3422cf7508a3eed87a"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","7690e34abdad9c9328b7e75e36ae8318"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","69a5cb62c133c009a2794877313105a0"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","7144118a538b1136762824f4fc30d518"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","e877df34f6e36e85b1532c212e79f183"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","770c4146c7648832fd2e14d0b7856b0b"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","08e31cbb514c5e757189e2a060462afa"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","bf8035bf2aafc3f4875ff3e3b075ba97"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","2a9b144554bd4f3e54f2c6f52735a960"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","4b8e3df3c8ecd1caadd3900c581904bc"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","ef7356697b3d35f8f67e489b60916ee0"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","2ca1294b7fa44dc8ed7884144c548dd6"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","2f7ab769207a1a5d60888c49d7fcf75c"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","f8e7c2aef090288bf9d1525fcf5c6059"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","f0db1528f70728094debdc7e345a0cac"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","cd0e48f4946ce62631bb611e7fc6cf3c"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","90c9d6ac9e69689437aa5a709b9aa925"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","1d3f47e5134d2ac2ca61f67290296e1a"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","17b5c42ba59fe175e10e3a2553e2109a"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","a0bd2c604ddf5826a2f7337622df473f"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","789e153c3dae953bbddf1c58e43bfbcc"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","6aa3999a0b01d55e0e1f3a2b2e3617dd"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","58d84f341e94df905b63b9521a363b38"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","ebdb04428fe32b2e6d4875d3ac3faf85"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","e288e16fb146554660f923dd9cf58434"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","6869ae56908e39ba533019f530f1b169"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","f40cbe584b0f615c7423e52a5b6dbc7e"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","afcfb61951dccf1a7713e34edef80c1f"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","e7c17f0727bda5240558832b5e6c7cf2"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","e67a921d997f612f0774cfab322993ed"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","1c951740cf45750f39084b19779f9208"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","39488ef73a374e056f58a5b57edc17ad"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","b2981e1fe881ab51317d8a833da9b5b6"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","13d25fd08bd3161b857edcd6d77f9297"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","75d528d05877227eddb202a1a16f6874"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","5f52be19179b6fff0163a6eb6d98fd92"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","d6249ca7d19130c1a2536cde5c7c516c"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","d28b29500bf2263a08d11fdb968e0774"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","7816bc63ca5fb96238433c5b62b2d462"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","937bd2064bc69fc21dae1ad63dbb1002"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","d6bd7d148ff2d63427492cb73512d536"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","7489c26137ca409c4aeaa82afc4fe2c4"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","77e78dc6de0cf291339d37a6e92ea0c9"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","93de2f9f92bdb1dfc95aafa4e11c20f3"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","ca9772f992c31925f1f7cd1513f63294"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","8621f589b89061953a34b49fd649bf82"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","8d5861ea3b7e5fd44e707bf2f8018cd9"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","6e648188eb6092dffe493bd00ae55a67"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","ced41d6521c69103506b7d6db0c3b7a5"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","2ff2cac74d12e870cc7c17c43573d916"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","6b077eef3d5eca423e5426aa2742e559"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","fb8aa4e356f0bcce4e9afc57629d733d"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","24422d2479e2934799b3691394db9bed"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","1450e29fd2134fba5f17b82b5a35ab94"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","a77a678c5280903d8aa7a3311c000d0d"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","01f28da2a198fbac364b65ca7bea171a"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","766ead9a7169578518c78cb63dd814c2"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","0a3c24506e31e1b217461c767fe125f7"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","1a00f2b7b57e5f36fbf217f83064d0ba"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","1b442ea514241979f433a6e089e9cc1f"],["C:/lmislm.github.io/public/about/index.html","abf4e8943df5ce7ff619c696dd909290"],["C:/lmislm.github.io/public/archives/2016/01/index.html","e257de0f097292ac766d850178d6d79e"],["C:/lmislm.github.io/public/archives/2016/03/index.html","7db442f523abe75ad00df98df14ae3f6"],["C:/lmislm.github.io/public/archives/2016/index.html","209149763d1993a8ed3405463bf662f4"],["C:/lmislm.github.io/public/archives/2017/01/index.html","37914d9e5e19d0fe4414cc427a2a9352"],["C:/lmislm.github.io/public/archives/2017/03/index.html","263b722baf690b292cc8aa4e00d68fbe"],["C:/lmislm.github.io/public/archives/2017/04/index.html","e2beb03b2ba8b1c97ace57ef21445155"],["C:/lmislm.github.io/public/archives/2017/05/index.html","572e54f6de9137299af17480aaee921f"],["C:/lmislm.github.io/public/archives/2017/07/index.html","67b6681db41d76857572f8eb5c8f2718"],["C:/lmislm.github.io/public/archives/2017/index.html","eea9e098609ff476d732b7dcda1d02db"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","6c6d92f527d7a38f3b5a9f2c088f6bcc"],["C:/lmislm.github.io/public/archives/2018/01/index.html","514c2e1edf24bc9b631a20fb6b861c5f"],["C:/lmislm.github.io/public/archives/2018/03/index.html","5ee0af16aeeab079555c2eaf9a6af9e4"],["C:/lmislm.github.io/public/archives/2018/12/index.html","b4d674eb246195563702a0fbd01383ab"],["C:/lmislm.github.io/public/archives/2018/index.html","4ce15ff717ab9f6e841a1ff0d1989a54"],["C:/lmislm.github.io/public/archives/2019/01/index.html","31fc9386c1a8e4d270630d6bd6ca3049"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","2769e0031d17cb048e074c0ee0d9aa96"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","f2e89fc46d9de30d53bdfd29d81367bf"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","0d2870c4597128e2dbdd592f19daccbc"],["C:/lmislm.github.io/public/archives/2019/02/index.html","384ae63c73eed938ae4b1906c71b0aed"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","069207977c9cde116d963d20475f6819"],["C:/lmislm.github.io/public/archives/2019/03/index.html","403e7206e5af22553c9db613637c3160"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","566d290cdcd0249bf89d8bca9127e2c2"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","efdd7052e97c4595e57eaaba5c966851"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","f70137876ce26ff56d5a1b809b938cb5"],["C:/lmislm.github.io/public/archives/2019/04/index.html","f4c4c19502210a9958f9270781a412a1"],["C:/lmislm.github.io/public/archives/2019/index.html","f738e3fcf1ab19ddd49adf6f9df8229c"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","bfb7b550c8be23e25ad69e1510ec9da6"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","31c9f2f116e331880b76652e98fc9204"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","45a1c4bef3a6fe778421cf88554cc81e"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","6fbf99a613feb172107ab321da2b7404"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","de707e19f60f1ba5acebbbea9e6fc1b8"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","a2721f4ffe50140f32a066e8ddcd4a1c"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","8ea7d137e1d6533d76778c8438fb4d66"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","5a1a954476e60083546157a1457c9045"],["C:/lmislm.github.io/public/archives/index.html","405e017455fa67ff839017901ae9ddcf"],["C:/lmislm.github.io/public/archives/page/10/index.html","aca16868bc60c43a52a87618dda00b7c"],["C:/lmislm.github.io/public/archives/page/11/index.html","02f64459ddaac444e0999c5c471ae3b9"],["C:/lmislm.github.io/public/archives/page/12/index.html","1699df3b9f64071bb49cf1a5fe293880"],["C:/lmislm.github.io/public/archives/page/2/index.html","301cbd11bb579ffbefc434b48f7c9e79"],["C:/lmislm.github.io/public/archives/page/3/index.html","912a1fdd8cb3a2683f9cef355d5f1f7f"],["C:/lmislm.github.io/public/archives/page/4/index.html","82eb151ada85bd59f9ff3e532a4a8e35"],["C:/lmislm.github.io/public/archives/page/5/index.html","176661c4d1352b199f6aeb5b3098c978"],["C:/lmislm.github.io/public/archives/page/6/index.html","990bddad9fa499ac849d67ffe9cf2efb"],["C:/lmislm.github.io/public/archives/page/7/index.html","92dce55244b38d69baa57df0e7799a58"],["C:/lmislm.github.io/public/archives/page/8/index.html","385653edf6995dc4841124ba7b0186a2"],["C:/lmislm.github.io/public/archives/page/9/index.html","914954f945385557b36cf75179510bbb"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","37f40b03a438d499fe3074e8af2900ec"],["C:/lmislm.github.io/public/categories/index.html","d410ad3ec18627916e6ab132fd7fc6d5"],["C:/lmislm.github.io/public/categories/xx/index.html","2947438ae6ed99442e9bcaa8de852884"],["C:/lmislm.github.io/public/categories/学习/index.html","996a61cfc45c0e8499175f29f4e076f2"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","62d17a891a0e388de9ee09ab9c87ac70"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","7f7fa0b898a74c2c071740bf4b1dec9e"],["C:/lmislm.github.io/public/categories/工作/index.html","49fe9acadfda213a013cbdf79268f4d9"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","3f797a7c64b8cc86ddedf628cf280d2d"],["C:/lmislm.github.io/public/categories/技术/index.html","8ef91ef0846824383c710e0c8a898143"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","5b43a1ef00a6e7a1e1cf343558e23d55"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","669ef37c7c2c2c5f9c5d6d843f7e787c"],["C:/lmislm.github.io/public/categories/日常操作/index.html","98f9d132417f602f82ca68da350ebd53"],["C:/lmislm.github.io/public/categories/生活/index.html","3c009597bdc05de03ba3c3b2c03c1249"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","89b641a4d1294bf2b7b5cfe3bd910455"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","3e05c507a73b4b7178f25a442d5e2de2"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","6c69688ad6195eed28a48c9623e18115"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","c9916ec5dcabbdcb734b89afae8bbf91"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","72073d2b37d6808c178a91e46489981a"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","7a5cd7ef99d64beaa7b8b025ac3ab098"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","4b060cef770c079953ec83bcf89c40b7"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","c2feefeb4e81f8e3f07d43a4d2fd4caa"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","65a2b749afbd29899ebbb41b070354c2"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","eb8dad75e93379b25e273956561c7878"],["C:/lmislm.github.io/public/page/11/index.html","a626b0f35ad81dc253e70e2c6032b769"],["C:/lmislm.github.io/public/page/12/index.html","185484b8123a29b1c913f894fceded6a"],["C:/lmislm.github.io/public/page/2/index.html","547289d8a9c6f6af498f209a896bde50"],["C:/lmislm.github.io/public/page/3/index.html","6cc1138741c87f555cece13a7d0669f0"],["C:/lmislm.github.io/public/page/4/index.html","fa1cd7f38941011270bd25752da5ab0e"],["C:/lmislm.github.io/public/page/5/index.html","e6631b0e4836af9759c0ff4254bb3f88"],["C:/lmislm.github.io/public/page/6/index.html","45198e4e397819a5f497f4c1ac3ba016"],["C:/lmislm.github.io/public/page/7/index.html","25a7cf09cad31dd660cc666aa5f75175"],["C:/lmislm.github.io/public/page/8/index.html","06844cbbf1029217d749402c4b405edc"],["C:/lmislm.github.io/public/page/9/index.html","3abfa5c0f79dde93769ce3c52885e4dd"],["C:/lmislm.github.io/public/tags/Interview/index.html","947190e29f773fa897c993bcc8578007"],["C:/lmislm.github.io/public/tags/JS/index.html","bf52551423af65974bb9042082e4e70c"],["C:/lmislm.github.io/public/tags/acm/index.html","ee81428d7ba5edcb8c6bd086cabf8c9d"],["C:/lmislm.github.io/public/tags/c/index.html","258c270ab815ae2cdbb25fa275173a29"],["C:/lmislm.github.io/public/tags/codewars/index.html","9205b72554d683d5a831dc58eff0aee4"],["C:/lmislm.github.io/public/tags/css/index.html","23da8567dce7c6194e1cad022fdf6461"],["C:/lmislm.github.io/public/tags/git/index.html","ff451e7fe6ac2df1fb939d25d8703b46"],["C:/lmislm.github.io/public/tags/hexo/index.html","27b52b256ed310519a4b133b02595064"],["C:/lmislm.github.io/public/tags/index.html","3b1b84184da31f32674adf7061597544"],["C:/lmislm.github.io/public/tags/markdown/index.html","67b53cab450b29653a52fe33c25b93ec"],["C:/lmislm.github.io/public/tags/poj/index.html","309ac002eb7faeac8863d17849140845"],["C:/lmislm.github.io/public/tags/shell/index.html","04d6f9af7605ed440c72545c87fb6273"],["C:/lmislm.github.io/public/tags/vue/index.html","600b0eb4c944bf0d4242eff2f01e6420"],["C:/lmislm.github.io/public/tags/xx/index.html","3a839769b52b05a25e30cafbe52cc086"],["C:/lmislm.github.io/public/tags/前端/index.html","2779befb469b8d1d0ca677399ea821a2"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","b70f46e9fab3af396587f22164c44631"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","f58eae2f69e2cd4ba4e81f3fe050121c"],["C:/lmislm.github.io/public/tags/小技巧/index.html","20be301146196f9d7a384910e5fd3513"],["C:/lmislm.github.io/public/tags/展示/index.html","aac29e90c3a89ab8534204f8eb2af6d0"],["C:/lmislm.github.io/public/tags/工具/index.html","bd7b3003f27cb43bf3b57fd818a4140b"],["C:/lmislm.github.io/public/tags/感悟/index.html","11ce7bfda1fc45efcaa3743a8baff497"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","62be650215eba60e9447bec196f4e9a9"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","29adbead3baa1e6af79923e4d4f64610"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","469af9901cd5afed81b8049f36732867"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","8cdb69b61e33299388d79624f50aa1fe"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","6fdec1d39be98da76ea307705dfd29b5"],["C:/lmislm.github.io/public/tags/练习/index.html","5a43251d52fe40c31775f8192b5718c6"],["C:/lmislm.github.io/public/tags/编程/index.html","abf97830e0b1f8a8b99911a66c52b3c4"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","9eba00987683a17b273f9b8807d9ada1"],["C:/lmislm.github.io/public/tags/运维/index.html","d075e4218673f5b6c5a4089c0f371367"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







