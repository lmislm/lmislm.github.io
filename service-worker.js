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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","a876fde28c9b9ff5736ea4a4aa78cfa7"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","644bc62b161e8b11c84b0d7b23afb04f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","21b8e883343b9bb2fa9aecc15f0fc858"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","fe493f5b74bb3b4b87cd93a0063de144"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","ed1a2d2c69d3238dc2a52756ceb99f6a"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","23e53dc7917a8ca842559b17299db6d4"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","cb49a2d14c01c95251cade12b755a55c"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","3107f10802f213d332f62bf4e290b5cc"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","78b4a9dbb4b9ddd9bc584b829f34eeb1"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","2b6adad4c5d4130f01ba9a61f578f7db"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","fcf02a6c27a1c50f9d441fa8c03900d7"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","4afd2b7d18ea2d009a12860b11198977"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","2816d5ece94b2ffe61a6c635ccfb3eb6"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","594090decb86f190b80eccd53ebaef54"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","ef93926394b799691a896e69fc015499"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","297a14fe5a40ec3bf4f75fdc5e5c13ac"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","63f119079c8a31b1c51b37da290b24e7"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c48ced8c9811bf20d31aee2ccf32a810"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","0a1f639f5ea6d6af082c0f1593ab4dfd"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","9e17f8df64ac2825cf64d3b86ed5c390"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","6c417a8b64abb5881e5f40432044210e"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","78304802983bcc8b4f29cfee434baee2"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","93db051deef38ab5ad843d49c4ff4158"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","29cdf8c968a38a35b6620a698dc1b581"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","a5c1111c2bbc51afeb3c000a5bef0e58"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","defaf14768bf1eb8e937f36981c57c95"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","a995d25c44f02992bd87e30a6c8756a5"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","e9d8e1f144b50aaa40ff78406ac9b632"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","96e28e40128ab0b266f532eb1aafaf31"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","0a5de17a1535a452a338cce83bd0da75"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","aa3cfdcf8385b8e65f028d0a03eed0b7"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","b377e4f8c53cba067dbcb87022b6c137"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","95c8bb3d45d01a43dd4d0ba75d499bed"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","bf71fc5bf2122dc99f9109382e82c858"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","7fba5cabc104bf60edb321438f4535fe"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","fb938895a8b2d1f8b76b548ebc6ac70b"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","79a2827a55c899dd737975ad4c47a388"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","c535b962c2249fdac8cf3ee3d41b6505"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","65ab01b514e3f6d683e80de2b7311d2b"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","7f7a8f07f404d5f47f2ebf261dd02fe7"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","8bb8e8562cccb400ed17c9f9a86072dd"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","9b28ea12871c0b4fed101e164c9bc65e"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","a112f3a2e43d357239bbd41cddad1cb0"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","93a6f3c27e3042c6cc2466eac3f23543"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","ab411b77965ef9e58a8540ae15108d6d"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","e86f62428603522014c66aaeec3d8ce5"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","30096e10e01b7382af116567761d2b5e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","eb4264e5a81c99f185b945a5befa0878"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","bb0500e7bee1bc6f0dd752d51a6ef4ca"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","26c85b628260d279c284ec95d6db06a9"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","37696794aaa370560b343a6378f0ede7"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","fe170f0ebad44c2dd90e49d1bdbad3e6"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","0258c511df83fdc9d47554c08ff8f57d"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","777c73320284a3da0b7733423e2879f2"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","d2eef412dacaa58ea0f29e222f830f93"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","2a4ff96ae1099a1041c2ce273b9d65b1"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","ffbce21c07e65a0120b15296c26a8b2d"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","66cc9e7f25c063bf9b49112eca381062"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","ae93cbe40a58d21b120acca1c580e324"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","428396aa8e38c280cd5d4d31f5ca6e0b"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","447022e7a6e706731f4eb3ded41d3a3f"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","4173eef1779ab4f3db64f44d9775195e"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","dd586659dbebb0c16f8a5f6c4c9543c3"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","9746c723a52ec3fb0443d9b7be72331d"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","bca3564f8ffe1c5c84dd3b13290a5d98"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","85157f30df2d759c52cf2e6726c3d6ba"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","64bb32ae9cff6a7bdc298a5ce6f2f26b"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","e25f31a8c952169e60c116e45b0b1cfc"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","d78199d5402ce991e707ee7b0bcbe617"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","cab58bc5870062cc66032ed0a643eb21"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","e145d0f1dd22f19144e0fdb983bd5c50"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","51f742b61f7775c6aca26642b9974ce1"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","24e7dedd1621da60412c970b03d97aff"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","677919286a7366c6926247c41cb24a87"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","a2233d8532cb4fbd9fb1a7bc8fddd350"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","00b08a14ebf17e5851eaa6e7b73ffb3b"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","f979d7c2ffe4d7c724e93e6c735d8704"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","35e6b06d599ec2237a280843817613ed"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","23745d75c2e86af0ccf5c75e718790a5"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","0bc364b0ce56168a532bd3458360a6b7"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","d27fed8ed4858f3a21c93be5b8e4e3b7"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","a792d0e682bd5fc063a04e2379461d99"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","5ad685b2d73a1f80255a3ab355ac23ea"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","787454ccac3e02c7f3e2571ffa267820"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","6333c0436f5be3c0e7ed69d0e4b864ae"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","809b2415c43791b3c418d1e9cae0e15c"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","0c9f1adbea3e9248de69d0c2f94e3765"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","35d8758e735e17d3095faf4332b897b1"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","b0dd09f37960af3ba7219d778b3bb082"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","21169d973113b571cda684d58431554e"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","0e7f1117c21e4535299244bf0e69afe2"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","3ff30102e9e97bc45a0c0ee78463bfaa"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","903d074b072f1ea8811418dae473693b"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","942b2dfb93f8d6e9aa8240675e7f999a"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","063dedd59661ffd8cc2a6d5bcb67379e"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","446a8240fabfeedf751aca63c6affebf"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","7cb5a07f6bc734942db7e4d0b7e8e5c6"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","c755b097531331e5300b9c1e882d1806"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","ffea813b79d87b241adc28c7f979c7bc"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","30b7984e37ffb9f80656b56a7d9203a8"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","4eb85f3af2530ab5a34a1793c4eda4f6"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","5b9e66846fdaec819e93545e4567f153"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","f1f7851163ee441f1298ab6a6cbe3928"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","77dcee75483c767131bd0c8e50949362"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","05675d2435f1aa3c2a222832dff14169"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","3864f863f13df2c002b29dabaac4f17d"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","241c991581b9864c5707dc1154092460"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","3a69df29e17dd7992b817a6b40c95cee"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","c21638139e9f0289924e044c54f8652e"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","949f53c03223776fa769bc4e9ec1629d"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","3425856b28066833f571608868fcfd94"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","9a0e1daee743f1c041c98b3277b1ccc9"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","90f505d5785c0a64e7e3b75ca09dbeca"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","c58657658f7179dd5012f384ba09357c"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","c420a2ee4458b250cb8783cf5c5f047d"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","5f3ac783c558104b840c26fd2b35e47f"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","4233db1b484bebdfbb8db6b98ae3fc98"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","95ff7f95f160408d2a40a3412abd089e"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","889915e9d3cf0d0aa251e3e94f1c1f9a"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","3dbf8112feaa03c942446b727ded079e"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","c19f70769316bd93888702e069b2cd91"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","fe0e456df5e299b606e00ee41f11e932"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","093dbabd30904afc6765b6da9dda5d49"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","18e3915bbc9e7f531e8f003dbb02f9d4"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","b68d85d536818429b9680a1510d8b8a3"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","92c0a29a3355356656bbb5626d4b78c3"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","7f2200d1bdd73d6563621a1ec2ecb0b8"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","aa793ff436bf2892051f0a5e770efe45"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","f8a58837ae5b56e996aeee493e70c7de"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","21c32865273b1eb778ec029e0b0e1537"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","518f1ccb4767e068d7103fdcdc9d988c"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","3822a3f671a8cfff943387d019ff3bd1"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","b7c6bfd5f354262473ecbf7e0f851772"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","5503be20dbc29764cb51275796e9b0df"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","fc5f6f0d6bed3d4e21bc293dabaf9930"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","1c7a75792b65ad650e1d5e3e993c9036"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","5049693619e5e5cc2b7788d69c87014f"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","e471c43880fe29652210795fc2b32f3a"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","72615afae3d6409fa4768de166a5daff"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","81ba50c9391120c46d09192064182012"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","78f33d09030d4cc53ec2bb0260116e87"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","c4dc5b493ba3a45f31678c14eb55966a"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","fbbdaac8196099a047d35eb46b8ecb46"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","2279797b6a16df599a46fc121fad7f00"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","e66fc9a54721bf87be2939b89d1ee584"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","016acbe6dcee56b447337b1bbcd44d8c"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","5f93cab34d6ed2f2a60225ce5d43163c"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","38a7589a70ddefd3960bd0651d24902d"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","262b3194d9cc5a4644a1e5362dfb7c1f"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","c438b5bfa259c31cb709a72769c2c557"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","f8d31b9d1f3eeb5f763fb309bfe205f8"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","94b10adfef48572a4f2bbcc7f2789191"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","cfd15386e83676d168eb9b96d0a47cdc"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","d12d35667f7161a7108029ed53da0bc9"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","2bdd64fc1373507ae640c6f723f2718f"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","7dbc9f030b8870332b7a7f846f0c1fd0"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","7f5792204b46358e74e7f421c5824d8e"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","b25250aef71f81c348a4a110b31af071"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","e74298bf7eed202c69fc8d0a6dc1e603"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","8e1f332df71dbed1caf1035d9974001b"],["C:/lmislm.github.io/public/2019/05/27/2019-05-27/index.html","cbe078993c0b1eb00c455931e309273c"],["C:/lmislm.github.io/public/2019/05/28/2019-05-28/index.html","432faf1f4d2e908e1140f3f14a806385"],["C:/lmislm.github.io/public/2019/05/29/2019-05-29/index.html","c24d271524bedb5a98ac3f96046d658d"],["C:/lmislm.github.io/public/2019/05/30/2019-05-30/index.html","47dd083dc0fd37c1deeb7c23d4064938"],["C:/lmislm.github.io/public/2019/05/31/2019-05-31/index.html","5016cc27a2bd695a9bb318e7db954da2"],["C:/lmislm.github.io/public/about/index.html","0045f328773a4e1205dd7d6c4810752a"],["C:/lmislm.github.io/public/archives/2016/01/index.html","a658c7c68ab8e6bd130fa8c499992346"],["C:/lmislm.github.io/public/archives/2016/03/index.html","10851f2cb8422506bad8e68304528836"],["C:/lmislm.github.io/public/archives/2016/index.html","a5625a9391566b45476f298ff8578033"],["C:/lmislm.github.io/public/archives/2017/01/index.html","55b4c99b48677e8d2e1e7b92c45aeefc"],["C:/lmislm.github.io/public/archives/2017/03/index.html","4f7deb7a019f8514e5a90b0f3402d0da"],["C:/lmislm.github.io/public/archives/2017/04/index.html","a3877f0c083f5f9cd3b34b43fd9b19c1"],["C:/lmislm.github.io/public/archives/2017/05/index.html","4ab34170558060720070870a9ca0f081"],["C:/lmislm.github.io/public/archives/2017/07/index.html","a09e7a648446320aea4d8cbb35d00ce5"],["C:/lmislm.github.io/public/archives/2017/index.html","80c813344a58e19d1c095dc2776023f9"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9b4fe26fd5bb1801fe1cbceec74a82d8"],["C:/lmislm.github.io/public/archives/2018/01/index.html","f48588b8e765b19cb1df72a6efe48a8a"],["C:/lmislm.github.io/public/archives/2018/03/index.html","704101c76664089950345255689577b6"],["C:/lmislm.github.io/public/archives/2018/12/index.html","7786e5ede2b61738c7802b7198b6ce0b"],["C:/lmislm.github.io/public/archives/2018/index.html","7bd187fd501208158b8a3ea6efb16204"],["C:/lmislm.github.io/public/archives/2019/01/index.html","a3a4699ae31cfbf1f2b9ba8cabbb0890"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","5858ff693c04d5121da5bceecdf0b22d"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","1892a033aed50a7f50634d4e1d214056"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","508242eb00749b36341fe3d87ac1772f"],["C:/lmislm.github.io/public/archives/2019/02/index.html","f2dd88f020a35b9a98d803a3b5921cf8"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","3c02916637d29f35c8332043c73646e9"],["C:/lmislm.github.io/public/archives/2019/03/index.html","b46c89b9da1d21fc05fd7698919c0668"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","e62f56728e83f48935aa7c03410a1165"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","deb3e40cc9ede06f4a27d04246b313c1"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","8e853fad8b9646d97d9d9b2f82210c29"],["C:/lmislm.github.io/public/archives/2019/04/index.html","b38bf147c4198b523532e436c831287e"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","4c694d97660916af2117f7fdacc6ce39"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","02b9336572a66d7519ffbae890b223ca"],["C:/lmislm.github.io/public/archives/2019/05/index.html","193e4abdefd5125dc8c1d03b26faced5"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","0764f7c30189f98f070b18619db337c3"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","2179882e733287c62e3f61547ba803db"],["C:/lmislm.github.io/public/archives/2019/05/page/4/index.html","86cee68a0481311a20c01fe9e32a26cb"],["C:/lmislm.github.io/public/archives/2019/index.html","704df160fc96df3959dd8d066d559d8d"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","8c52c7e329ec4317188754eaa02dbd67"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","16886dae11c929b26d654c232022d3cc"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","9cb9af74bff1d980cd00c462c64c6e0e"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","3f62f322caa1a72d4e4c50e48142c5d1"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","1f4859f51b8759a1582eee3b72a91250"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","9bccbdf27873a91843e81536c9bbdcc1"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","ec71413bb8cdfb5031f8a92e787edf7b"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","df2282e157cf4b74fb798367bbe52363"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","1a2e0a127c897b5983b25afc88c6bcd6"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","dbd2f42991f82fe6d47369f1c689d444"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","e8bd3ab470578d81b9c6db8f0fc0fa65"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","e0ed787c267edec559bbf5c090954fce"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","14a5f241034c478f54bd20397fe3652d"],["C:/lmislm.github.io/public/archives/index.html","3d439974c4cde1368d1ba01b7c42aacf"],["C:/lmislm.github.io/public/archives/page/10/index.html","23b15370a22bca1472d6e36fdd9fdd79"],["C:/lmislm.github.io/public/archives/page/11/index.html","010d5e8779d5a8375f7535a153b30709"],["C:/lmislm.github.io/public/archives/page/12/index.html","4a624f10f2ea4f3fb472e2812bc1b1c5"],["C:/lmislm.github.io/public/archives/page/13/index.html","c1c8fd5c9d03aa519c7c6574fd270490"],["C:/lmislm.github.io/public/archives/page/14/index.html","032b423144015b8ca0c8eb83238f6b70"],["C:/lmislm.github.io/public/archives/page/15/index.html","e5f7e5830a5d09c1c0d4ea2f8b768dca"],["C:/lmislm.github.io/public/archives/page/16/index.html","79b2db5be74361ff9f7c44dd8a0afa74"],["C:/lmislm.github.io/public/archives/page/17/index.html","b596cecb29a81c3884dd4138b0e71f17"],["C:/lmislm.github.io/public/archives/page/2/index.html","e76401f9b3042f47a5826c256a207903"],["C:/lmislm.github.io/public/archives/page/3/index.html","c65c12460654af71067b1f907d94a3a5"],["C:/lmislm.github.io/public/archives/page/4/index.html","2ca84f33b7d5fd55bb226699e2e3843a"],["C:/lmislm.github.io/public/archives/page/5/index.html","bffe6f2871bf4bdea5a9cc66d62c4832"],["C:/lmislm.github.io/public/archives/page/6/index.html","84a17805f18bc0a20df2ec77a5c3ff60"],["C:/lmislm.github.io/public/archives/page/7/index.html","bbee134befde30d8f8cad572c7f5f72c"],["C:/lmislm.github.io/public/archives/page/8/index.html","c466b6086f026ee63861a9ce18457343"],["C:/lmislm.github.io/public/archives/page/9/index.html","a3f4a90f7e2c7538c4bc6b8128a358bc"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","b1f2472ba660aa486389666af4d3d486"],["C:/lmislm.github.io/public/categories/index.html","89d8156f7fb18edfa118cb23a18d981c"],["C:/lmislm.github.io/public/categories/xx/index.html","06b0c963cfe00a9c83c9e78941bad8ac"],["C:/lmislm.github.io/public/categories/学习/index.html","32b709ceecd7a413b74bd46656c4d53e"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","b30627e5bf0d264b19b3ea393517c2ae"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","877010793d9b99ebbb8b4f198c8f1b43"],["C:/lmislm.github.io/public/categories/工作/index.html","a3101effb89c3eda5804999a4f77593c"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","41cfd8f5c78e4b368d5509bc676b7358"],["C:/lmislm.github.io/public/categories/技术/index.html","faff81da01c82e9872d25a3fd1a92dd3"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","e61fb3c44981141ccdd5f1e7f41490eb"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","e0bacf3cf58ea96db84c3e62e3615293"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","2996d1ee22c9ec329007672041daaca2"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","80d83b63f72bad68db227eafa0969a5b"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","d6892f243842c9364ae70b7c7514a0f7"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","988c23250d4dedbd0a685e9f073eac6f"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","34ed71de45591bf76b3733e3c43234f9"],["C:/lmislm.github.io/public/categories/日常操作/index.html","b57757c2314bb0771eb292feae1f1630"],["C:/lmislm.github.io/public/categories/生活/index.html","6375de2d02f16b4e68813b6007757b83"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","48c489680e1cf06b41365c4c57c8109a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","e9783a70b16a1cb639ba2b08b9e6e1d2"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","d4b40e3081bf305ac8efdd2451294da6"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","317f8c1e5b1ec1557f54e359fc3b3e9b"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","fdf9bc3a11698ae124831394f41d23a6"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","f28b08c897087b5957dc917fe0fe96e4"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","f538062a18b9c691663322fdc1c678e7"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","6e4cc3a6c92796aef23ac8b684036c07"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","d23fa00d5bddd8fe584755accd5d97da"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","a90086380db6f333fcc67b9aa2d5a571"],["C:/lmislm.github.io/public/page/11/index.html","ce005f125695551f165bf70fbfd84986"],["C:/lmislm.github.io/public/page/12/index.html","9d55a6993b7f659ec9df31b162a6dde6"],["C:/lmislm.github.io/public/page/13/index.html","ec9f9d3b12d6770eddbe82f9d7907d95"],["C:/lmislm.github.io/public/page/14/index.html","24be39f1a878b0faad2464c50d413929"],["C:/lmislm.github.io/public/page/15/index.html","010d8e61993f8b25e99bc840d4f92b1d"],["C:/lmislm.github.io/public/page/16/index.html","e533160c35067357b88c7fbe7bfdaeeb"],["C:/lmislm.github.io/public/page/17/index.html","423fe4f9e9c091a8b1f84898df6d0810"],["C:/lmislm.github.io/public/page/2/index.html","1cd0ed4f237ddffbceea143f921dffe8"],["C:/lmislm.github.io/public/page/3/index.html","4c3ceaab0664d8597b868ce8ab96109d"],["C:/lmislm.github.io/public/page/4/index.html","05324ab766fe589a317b41248e64ca61"],["C:/lmislm.github.io/public/page/5/index.html","c89fcc3d70d0665e8d3c201c52af644c"],["C:/lmislm.github.io/public/page/6/index.html","cc06ab761d80aa5c683942d5efe336b1"],["C:/lmislm.github.io/public/page/7/index.html","ee46f6b10d869af44916a7ae77050cab"],["C:/lmislm.github.io/public/page/8/index.html","18a8f54b025b48e5d01b1abddbde8a40"],["C:/lmislm.github.io/public/page/9/index.html","663b1fd4b65f95cad5e7afaa30c3b3ca"],["C:/lmislm.github.io/public/tags/Interview/index.html","d216f5b50b1b20aa94e06c0fb89c6f53"],["C:/lmislm.github.io/public/tags/JS/index.html","7905185f29f06b7c0093def281138bbe"],["C:/lmislm.github.io/public/tags/acm/index.html","748214b8cc1af9e9b4a15b265a3b2f92"],["C:/lmislm.github.io/public/tags/c/index.html","a122519a18b77aa6685455349b3d3fa0"],["C:/lmislm.github.io/public/tags/codewars/index.html","71dda0f52864bc11c241855bcf9f70b7"],["C:/lmislm.github.io/public/tags/css/index.html","f7e2e9d82776af677d7f3701f1e4b410"],["C:/lmislm.github.io/public/tags/git/index.html","cbe840477bdde945c2b78dce2f16a74c"],["C:/lmislm.github.io/public/tags/hexo/index.html","ceee02d9cd8d0122191bbcf12e8396c5"],["C:/lmislm.github.io/public/tags/index.html","9dc2122d135917728f00094415316eac"],["C:/lmislm.github.io/public/tags/markdown/index.html","1aa8aff92a7bba55e1f69016ca741012"],["C:/lmislm.github.io/public/tags/poj/index.html","7ab014252d7870561e95fc37da207c25"],["C:/lmislm.github.io/public/tags/shell/index.html","8df0d4400d9dfb7ee6c44a2a171b9dfc"],["C:/lmislm.github.io/public/tags/vue/index.html","c6f71262fd99420a9581491944a12882"],["C:/lmislm.github.io/public/tags/xx/index.html","6080b8c7be3af1a90553cdf8e63514ab"],["C:/lmislm.github.io/public/tags/前端/index.html","8449ba1c9c71d43a4c83b7318e16b5bf"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","c75ec5969de17df743caaaf0371851cf"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","65bd8b647bde9245d08925db994c0afd"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","f1ebb1292cf65e7661e98ef9af065eb9"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","66eb26014a73010ff019ababefdf7ffa"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","7c9d74b9bb82712bd0249188178844b2"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","0691cafa669e0c32d0f477cb5be37612"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","4ef4cdd41352bd2f06d38dda19b807b0"],["C:/lmislm.github.io/public/tags/小技巧/index.html","5c880c2abcb15e2e26e39ea196ee220c"],["C:/lmislm.github.io/public/tags/展示/index.html","c28401439792581b1ef2e1f578c60cf9"],["C:/lmislm.github.io/public/tags/工具/index.html","65484a9d54c67cd119817484d9db9bb7"],["C:/lmislm.github.io/public/tags/感悟/index.html","e836ad27dadc08801906e3662d9d2f28"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","e48b97c49a0939abafcc33d1bd906611"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","03268cba86b5e573db56f5b0a9b68c78"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","844f0ad05c4c42c4816d97c64425e0b3"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","c50c60b727df25108d28b0c3a3695072"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","86a1a158b80cf5d73241f16f1d9a098d"],["C:/lmislm.github.io/public/tags/练习/index.html","c6258a372327bd9f34405b3685441ccf"],["C:/lmislm.github.io/public/tags/编程/index.html","aabb5f6084375970529dc1db33339701"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","1bfb67e2266b0835c2b8cf41d0b96274"],["C:/lmislm.github.io/public/tags/运维/index.html","8f9a2e2322305fe35ed9e7b1a78e0f7e"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







