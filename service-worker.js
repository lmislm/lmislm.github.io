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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","0fb9edd93ac8cb867a211d468bfe6e0b"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","a89a11cf8c6a125634457208e7e52a43"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","79f01a584cf30ddf33b1af8dd615d6bd"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","c08f998544c8b6946bb005c15fad4361"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","69a6a20736b49dc1891e2bd4b11e84e2"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","476a1aa8d1cef30ffe949b8b21646a2d"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","982c80548f0322c968c2751bf6da2b70"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","8d3311f43339d831b56d573904ce6997"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","146516d2b1bf3416cd4a3de273c533be"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","16fab978d612086838e397bb8bfe3b08"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","d4a418fbe7d1b0b9bf66f40353365c79"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","bb95588261d6fd66d669dde476a39bf7"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","23c6669bc6fe66aba86faa950e115b58"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","ce06b10f089e0c093710a6c80b33d8a6"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","c817b78f55b8889fb526d2c132e5ec66"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","6018d8ad08d03856222d357bea2fb12b"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","6c35114556fc3097db77448b47c2af72"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","a75d1ac1553d9f84618b0a2adb7e1f38"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","e9c644b5485f6e5f53a53c997805ff0b"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","e2a4398a0512c720ad36474b2c87f345"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","a14f752290f829de68508fb1de84a798"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","144b021014673d1ae2fea1dfaf21bfc4"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","8a8c6e3e17039315085fd1dc6fbe11ce"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","667e09c189f743b42462809e8f0413ba"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","61db699616f35bb3c4793ccc54684015"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","763b3a9a721ba14d5dd86cddd4457c62"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","9f65195f5cab363292713eaa28d76148"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","240258533194ced569d1f9fd63eca5b5"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","1f40c29e8450b4cee26d09bd5ab1146d"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","fd136f19774f03063f9ec3adf4d59a77"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","5427ef2f46527253cdd31bb182381447"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","37180072d0a7bdc9b1515ba452b7289d"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","91b5f559d0c96a8e2c5694fe55191320"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","251d7f8a40799dd73583063f1575e2e2"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","f3f35a754c6fffdcfd2f801a8a981ff2"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","55fb8a14a94c7a1c721ad541d3cf8e27"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","ae85c78a2669f121938b5817f21dd1e9"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","4b6be54b72dea98f635cf1c6af5e7306"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","5214ebb00855f10aa822072062e75cbf"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","efbbc5a0d2a74727c5d7378d08197a85"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","5077e6055ed9aecdc6d38dd93b448f97"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","e746c87488f79788a8dd16fb7171281b"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","cabae6676741cad9cbced3eee6cc1a0c"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","8e8e6e059a2719aff3a41158a558d8bc"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","ef107169507c66d46a3551da0c4b1f11"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","bfbcf883785510d4538636105a9442e9"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","9e54b118d8e81b3ba1ae61334fd6e552"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","e7224a70c3aac1d7eb953da266166e5e"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","ebcbefab18a7dbb8908636f24f4ea620"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","c0f97a9acaf5da5a41fa5e9090f9b58c"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","cd839d155586d44b8c6ea576adb9f115"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","95ced2a53d9b9d17b8a9e9e5c1d9aa93"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","ba1e9d932f02ab84d95ac67996d2444c"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","c7fe127070fce0d13d290af46372a3cd"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","290d996d8d643e8c6aa8fe74e960a13e"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","de2530f249782814476a8e2e4f7c5b7a"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","5137fb71d95dd7a5399675b5b2da33c9"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","18a6ffe2daaa53f935aa5fe3f9d79c32"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","9dfcb890049f0d1d37d955f22f2d3d7b"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","b7ae6fdae264533004b8a591d627b3f5"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","5be0d8499fb5cd8b72970f5fa36546bc"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","1c8ea1f7a6b23921f7dab19938d3ce5b"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","20c7e7e746c5971b4ad985b7c7e75dbd"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","1bb18b9f83291e669186805a3a9176ba"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","78f788e9436a663676da363e660a1193"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","c491f19382546fdacc043e863c839235"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","4b4ee944a00cf92c92c2462021413210"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","184b857799c1c8705518971fe37844d4"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","d232db1cf7a8757b1bfe0e0b2d2c6133"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","7f03a0771b37203233061c08691d7f6d"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","ed58eb54d7b3e82760e5602daa7bc69b"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","be8c30d2d1562e23b2d402a59793fad1"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","dcb621fa8eeac58a2f9b01ccdea3c6ef"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","f44aeee0cce132c49ae3b7673d4b9bbe"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","fbabb1783f220055809fa6b1f3820c8a"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","398b6f5a0bc552ee9bf76ea48e5b470f"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","0efe5406d7081f297d6032b8d9130824"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","8534018af80abeb55cba9d64605516ad"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","514b2d43a318cb45cca15b9754225f34"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","723b436743426e579ccf47d547cf7f14"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","8c230e46eaec4f731b8b7d33f682df1d"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","3a42106b5b2c3dba799f5ec504bdaefb"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","160ac258a49cbd9f65d9c4be8db7065c"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","ce9e6a106ee503cd9d04741c387f7e3a"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","f1c78e925a6eef49c1aea0875cca19b8"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","44a9e70e3804852ba351f0ef9458a059"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","5c3c1566dc248b8dde252770ece3d6f2"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","273c65608a15d824d40565b9ec27c94c"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","e772a69859f701bf0a7c9c13250dc87a"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","ab06be9957a734c3e77e961271e52106"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","558bb297f6f5e34a3deb00f8bce4481d"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","e4b210011ad26ffc31a79f9708a1c25f"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","9792167b08a5a51108ebe25ca4f70610"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","316fb2379d6949a2944512149c225fc7"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","9238fe8356bfab0df31cc8b476bacf08"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","b819e5f6791d9272a585d8a90d1f62fa"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","2bd6f30e0951649660df0e8c794572f6"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","e12fcc8b79aa2990dcc5ff223ca29a7c"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","3fb17403fd61a485ccf65179199ef756"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","024be92aadae90e32b2f9433e73c32ed"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","0044e1e4eff4264b978b3035d91bd7ab"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","b6d29b128bdc314dbb6f411c2a078930"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","572a8b72dd823e879bbfafa3d7d76f51"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","5b3d8ebefa226491a3c2a1e001fd1adc"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","6dc2aa8648d32d3b65d4c0de435d8ba5"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","614d34c7abc7bd49a00af55ef3dc6f07"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","b7ed804ff5db0b2427c4eba0ca462703"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","fb2bb13c5c428be7ee6913ff88a5c863"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","01652b13bd4dc52730b40ef50cbfc08d"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","8e23d24c2e314f2cbb0e4741c74c25ff"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","9be3bfc6ad8a15a50179ffc221230954"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","88a3891f8f33264b9ebdac6eb1942b0e"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","420a83095de2f2f6451af0c5a734d483"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","ff6e54ac7f04cc71469c9593eb5f4f32"],["C:/lmislm.github.io/public/about/index.html","e43f7a363f5c47cd4cc3644356225df7"],["C:/lmislm.github.io/public/archives/2016/01/index.html","c4e33c14722d17f9dc80497605b87fe9"],["C:/lmislm.github.io/public/archives/2016/03/index.html","748832fff6a19086674f9d814fa5eb82"],["C:/lmislm.github.io/public/archives/2016/index.html","6230dc3b95ddb51caa64c31141b9e34f"],["C:/lmislm.github.io/public/archives/2017/01/index.html","1e5d3c71638de463f4e34ec04aa66ce4"],["C:/lmislm.github.io/public/archives/2017/03/index.html","6e1a28ee6e1944eaa0d07f1c67f2821f"],["C:/lmislm.github.io/public/archives/2017/04/index.html","7e868f8d4c942b3b370cd80c6af2f590"],["C:/lmislm.github.io/public/archives/2017/05/index.html","f074a94b762cba9c35e56478d0511ebf"],["C:/lmislm.github.io/public/archives/2017/07/index.html","9f1ca028a8caab2ea030f2db8f42b818"],["C:/lmislm.github.io/public/archives/2017/index.html","7c6a434732d516d5d93d8d93227b992e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","19dafbf42fea0b1dc1e087c4d407cc69"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e5e5aea4628a7607c3939157a461f0ac"],["C:/lmislm.github.io/public/archives/2018/03/index.html","e949b75f07179e236a64772d0428a38b"],["C:/lmislm.github.io/public/archives/2018/12/index.html","e649b49327fb3c6af26128e3e3bd82e5"],["C:/lmislm.github.io/public/archives/2018/index.html","924cacb65cc5800d183a4a4d91ef51b0"],["C:/lmislm.github.io/public/archives/2019/01/index.html","4e64ad40f53c41ef0b77d10af5faddfe"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","998d379e7acdfe4974e2d841b0c047b0"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","2b282434cb023eb2dd262619e778e373"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","1f827349b10043b3887b6cafbbb9f42a"],["C:/lmislm.github.io/public/archives/2019/02/index.html","5ec7a421db6d93bb6009510b38e8d41e"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","1e24fef4efffa9375dc6641c2abc1d2a"],["C:/lmislm.github.io/public/archives/2019/03/index.html","92411a54b82a143d0fc5cb43c0ab2c5c"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","88bbabc6c09a12b3a7e78ae9959cf7dd"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","dadbdb1c0deb95280ae905c91dc0b90f"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","e56a579f9a63ef32b9f5274ba80a8930"],["C:/lmislm.github.io/public/archives/2019/04/index.html","244d59e89927fdcb43baa96bf77970f6"],["C:/lmislm.github.io/public/archives/2019/index.html","d8fc2abf5e1ef6ac01cfa65ef95bb2d1"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","e1c72c70c07bede9b5f318b0b5d621aa"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","5680ad16266a95d5f7f7d72218e67aaf"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","8f0d872bbd70108c76d61ad4670fc714"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","fbd3b8a6429fc4c4823c54bfb6b9e701"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","c48bf8b897f0d2500822f3ac101cce4e"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","1a17cb733bda78e4cd0bfbffdbabf1a3"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","9b858459d07028bcd94f4242653e49db"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","aaa9fd8a88f1d17c5fec817812bea1fe"],["C:/lmislm.github.io/public/archives/index.html","b24096712eb6c03aed554e8aed64fe2e"],["C:/lmislm.github.io/public/archives/page/10/index.html","0064cccbbb38ca4a4e90ab0da97fc94d"],["C:/lmislm.github.io/public/archives/page/11/index.html","66a5b6f6630e0c89ae0df7069f03c1bf"],["C:/lmislm.github.io/public/archives/page/12/index.html","d25242e10499784f4a86db7f89ab33f2"],["C:/lmislm.github.io/public/archives/page/2/index.html","65c28b23a23a3066faf397559df77eaa"],["C:/lmislm.github.io/public/archives/page/3/index.html","cacbc8fda0e8c45417e01bb262d706d8"],["C:/lmislm.github.io/public/archives/page/4/index.html","c37b90340d8d56cfee0e99eac2299d2b"],["C:/lmislm.github.io/public/archives/page/5/index.html","66aaaba4b19ff684588272f2a7ecfc0d"],["C:/lmislm.github.io/public/archives/page/6/index.html","6c33c956e5157d26e5ab9d32867bfc5a"],["C:/lmislm.github.io/public/archives/page/7/index.html","3d092824a02c6b5d26f6887d9094d65d"],["C:/lmislm.github.io/public/archives/page/8/index.html","667f66e7273834325fc03d86c0a82a79"],["C:/lmislm.github.io/public/archives/page/9/index.html","1c0a599a57c0bebc62ac448a001c92d7"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","38ae136115782ec52e9a0a1d246e1675"],["C:/lmislm.github.io/public/categories/index.html","e2feaca08ec80875130e73fb2b35f67e"],["C:/lmislm.github.io/public/categories/xx/index.html","e2fe96e7fcbaa9c1da5f444b180f1953"],["C:/lmislm.github.io/public/categories/学习/index.html","b39d5085531fba3f8fde0f3e0e4ab4bb"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","c4f1968c17dd6f488ef3b0169a48d7d0"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","80109a419857db5225df3c2343343cdc"],["C:/lmislm.github.io/public/categories/工作/index.html","af04387dcdcfc9097013aab779c486ff"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","8886256524478b9c3eea901613c07a55"],["C:/lmislm.github.io/public/categories/技术/index.html","3671c1d8ed519bac7c4c73109a673d20"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","bf0acd481c1c4a1cc9f22eb0a59a511c"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","18d0207fdf5e25c91f5533b42fc38410"],["C:/lmislm.github.io/public/categories/日常操作/index.html","00432dbb99a4ac92fb7399a2196dc8cd"],["C:/lmislm.github.io/public/categories/生活/index.html","372999b6b52458bb6705ac87b26eeae4"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","20b456e733bf26923a0fb2633f97389d"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","3b0292e1f5bb7fe4d0f93fde74e38308"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","86ecc2a26cb6e5cd6130e7ac1761600b"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","c068bcf5c4a4cc33fb6495c3e17797f3"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","c33630d7a5500d0dc64142484bf44ebc"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","cb2a456e9a6048be33c1c66cbbdd18e9"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d2e6c59cce950b11e0833a1984493903"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","bacd3b03b6c99ffd2bd0ee9149be50e2"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","c1be9437c8872fcadb70caf8f1da0b73"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","6e0656cc15f3fb3fd9b9514a68e24cde"],["C:/lmislm.github.io/public/page/11/index.html","5bc66e353916d2c8f2da5f1540fb8ff6"],["C:/lmislm.github.io/public/page/12/index.html","125eab40b2272ce45384545c5eea5fd7"],["C:/lmislm.github.io/public/page/2/index.html","d1b8d78fb9c310d41453d8393cee175e"],["C:/lmislm.github.io/public/page/3/index.html","87dac4fd29f271285b1462d856c76600"],["C:/lmislm.github.io/public/page/4/index.html","217c379106437032f64ddbfb8066b461"],["C:/lmislm.github.io/public/page/5/index.html","5541a89e89e2b9d4745e7de3234307ce"],["C:/lmislm.github.io/public/page/6/index.html","5dc033f1fa403007a0ef5f6896aabbb6"],["C:/lmislm.github.io/public/page/7/index.html","f47c47e20094078a490e99a2fe932884"],["C:/lmislm.github.io/public/page/8/index.html","e7e59a630541325c6a03a57d6c7085f9"],["C:/lmislm.github.io/public/page/9/index.html","92e482519030e7eecfc2441299a88ee1"],["C:/lmislm.github.io/public/tags/Interview/index.html","cf817cf1bb4961515172d47783dfcb17"],["C:/lmislm.github.io/public/tags/JS/index.html","d8770fa4a70eac5fcbbefef7c4366069"],["C:/lmislm.github.io/public/tags/acm/index.html","963a7d8afd73228e40bbce0a87fc8894"],["C:/lmislm.github.io/public/tags/c/index.html","7df9ff89782dee5ce9202fe12424206b"],["C:/lmislm.github.io/public/tags/codewars/index.html","8ce11c1647bf99351baff4cd0419579e"],["C:/lmislm.github.io/public/tags/css/index.html","2744099cfaba1753721ef4c65c18cb25"],["C:/lmislm.github.io/public/tags/git/index.html","4b0c8550dc7da36c4bf958228cf74ba6"],["C:/lmislm.github.io/public/tags/hexo/index.html","a31f8bd48ef983070ad3133682ab9584"],["C:/lmislm.github.io/public/tags/index.html","e06572d272cfb3345fac37625390ebf4"],["C:/lmislm.github.io/public/tags/markdown/index.html","80f6b423481739541cccdaae8b4c7b5a"],["C:/lmislm.github.io/public/tags/poj/index.html","e82a3078e011781ff265c9828409ad16"],["C:/lmislm.github.io/public/tags/shell/index.html","2d37455a2c8ac0feedafc9d93e3b1cfe"],["C:/lmislm.github.io/public/tags/vue/index.html","175db0e57f28f5c8b5f2e92bb9186516"],["C:/lmislm.github.io/public/tags/xx/index.html","68eb50ee0d9a766379113c189fcb0369"],["C:/lmislm.github.io/public/tags/前端/index.html","02070e61f859c4470ee76bf845a57aa1"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","a973d922af829e708f4206624eb79b4b"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","2044f77e27961b4a519380a694b68736"],["C:/lmislm.github.io/public/tags/小技巧/index.html","b0b937764d535118f6653d83034e4139"],["C:/lmislm.github.io/public/tags/展示/index.html","12877321cf18e5ee3d5ea08e4b2e00ad"],["C:/lmislm.github.io/public/tags/工具/index.html","469aa240fd109d81df925177673fc08b"],["C:/lmislm.github.io/public/tags/感悟/index.html","5a4b7c2ebda7c7941a14136d9b767ac1"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","5266a04c4d3eef5c0070617c8784c638"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","5803992a2c701ae1b3a351d1a7359c6f"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","36234d36cf84f850f714736ac32c70f9"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","7f52e8df27f04fa6af81307d5735c955"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","597d80416edc76dc916b88d08f3faedc"],["C:/lmislm.github.io/public/tags/练习/index.html","eade9c2ce69e87d4d3e3094e6ab383d0"],["C:/lmislm.github.io/public/tags/编程/index.html","c218070a93d4b99db1bb66d8f808300c"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","24085e0dd0844f8470f8df791fa882d8"],["C:/lmislm.github.io/public/tags/运维/index.html","993235ffd563223fb9dccc6b531b9370"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







