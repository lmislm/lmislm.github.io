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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","d1cab8c4854acf8e20fa616d120ec7ec"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","2de85543478269d329d039949c1f23c3"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","573913617353674e3f4a54e54527cca0"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","8a4fbf2a306b6dc6188ed5bbbb6784f3"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","c0e0eebf57e8d543e3d0a3e1fbe8e332"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","d9d3f7f636efab39e8d58574339913d3"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","5f39c930485f3eab4e75c5b617534c3e"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","6e5b21fa909bb3efb603b4c4a9232723"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","e48d842b2b5f0a11403027679499279c"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","d16cf5761a929799980d5c62f382f61a"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","68d88b6af8101d5f8d81b183babdd71b"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","6f2bc966ed1c3ddbf9bd48a47672842f"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","2ac7da0cad5737940c55568040c4d930"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","bf0d729c9f5ed5ed305f2bbf976f9cb0"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","b168c166f63b49e65368773b07eddc6e"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","13c96542c21387b17e05ccf8c0888e4c"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","a8687e285d92c401ec35d5d10ccff15d"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","e12bea104c658eba20261250db246a99"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","948c8f167805f12240307ef800886468"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","a1a2600da410611919847f9f284767a9"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","61c35e22d114a75b7a0c78afa07f2396"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","29cd704a1db977a8084b3581cc7c44bd"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","ca6e6a1b9b1fe91047aa8fa0b9a2c97f"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","94313ceed7d3010935207c580b28092a"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","4a4a83a490a623ebe185d1b368fbaff8"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","669768002c422e429a8639b84a789d77"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","1578966ff56e222ef4c48b012fa0d3ae"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","5fb9d0e758597bbc132d7b2dabee6d98"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","93932d6f4338edafbf217115baf3a20d"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","cd1f5cf459f520f7e58c1518b860f948"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","8434a8991362b2d032ef282968d3219d"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","164a6d98cab3d8210a90fcf598b7bad1"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","694d55dc567036dbc4e0818924dea71d"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","e450793696870e47f0ad080b9d20200b"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","20185648abd3d0bca67f4d9bfcd40b74"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","9c8fba8fc566ffbd128145738db795ed"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","424a0556533eb02ff7cee8d8a7051da1"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","3d66c452035d995b61481bf126684885"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","dc6b6075084d74ae4665868e77c1ca01"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","1a6e2ddc13658392967e14189065c6be"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","de3c02477177bab308a670fa435763b3"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","e45af4b1df640c3ad4a2d87dceb16291"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","fc205037adb8a0e21054ecf665a08564"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","655bc5f5eaf1dccb469b235737c2a036"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","0e1bc6cab97878b2c49e55615661c225"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","57c8901147a0c967daaecaac90ce4741"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","5dc351480dd34d7d6bc2fd9aeaf07b30"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","71c77c430870abddb54fffa9b7a3addc"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","1c1f6b2b2c026f690dca18966593002d"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","7c718e2846b627a69066b014e23d2d0b"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","e575527080397dbf1b0a3554f1a7c92d"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","b1fdd48f22b4da316940081c8364491b"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","264aab4d7a46e3651128fe899737b456"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","d87282767ce313e2fdcfa03cef636bec"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","0132e08f388d45a2303f8191c3b11d4d"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","4b39de5c471d8e808ff7583b4b515b82"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","7891099124c07f8f81d10cb55a796ff4"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","0ff40e6d4feed578631e60c93e71caf4"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","433bd1318d3f5afe205b34729c62b6dd"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","e2795ed3570216137787f3fd7126e5af"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","8a4f8c4315aa513105033a640f24d77b"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","40eafa76f71a6952a204d491353a3ff1"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","8aef0a5bb59fa2f8dadae6e1b19a9abb"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","46cff98cbab9c1175a15edd68a08cd13"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","0bc55ebf410175ef495f513fb243e71b"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","46dbbbcad09bcbafa895c8f94a6cb990"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","74b7a0f74aec6bfb393efd7d93ba4359"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","0c6698d4ee65ab7a6e870385a76328ac"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","fca1b703b7d9b50ef09df10b2b4c728a"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","4d263fe22342591c5966e00d05c9b917"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","a62c55f45035ad0d2762c5566eca1f77"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","374a86c2141a2150cb734fe5aa47bc62"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","7d305f506aeabc0c1371cc6d12f00105"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","aa57b573b18133ce6524b0e27481ec7a"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","f5968e7caebd75a2e0ef1373f3597112"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","ab060fd96743ce099fd561d1a665a05e"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","928cb435517490c831a1e38e79aa5de7"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","258bc4ce32d8ab74e883ac33e006945b"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","ec1a9687da1cdbffd9fd1a97e9802c0a"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","918c902b973dca24e39cd8d55574f27c"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","b232d8dfa0690f00525fe07e40dc8a69"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","0cd10fbf5df5f6d445d9430b75e5d0c6"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","905fd4fb41efb4f3fc2c6b1f7adca6bc"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","e0a812530a3c14067eaef06c32d4f456"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","2d1573b0a27f9feb16b0d1e0ad4efe93"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","2c8862c7dd3ee0135f8e267a59858ef4"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","9f10d6b82aeea562c17808c32f50239d"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","92b7c787ba55f388ed07cfeefa5d3d95"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","42b281981d6afa9f44a8c6502eeb1dad"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","8c7bd38b2527822115e3168e42e1b6b9"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","8c11eb44de355359adf9cafd4dc28270"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","e99e1a182cf260086c15ca577b4d33cb"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","0ee7a4aef689f0b1024ebc715476c08d"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","5b3cf423431dea79228daadf5602c9b9"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","dcb3a42fcb5a5612b6b8613ecf53d015"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","bddb363b970d4af3b08748d58c5b66b5"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","b5bfae1d9878b446d7c90d0de1ea2b16"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","28d87d439a7c27d36c0429878b4aff8c"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","3ecf590482cd272ac9bce7d8a533455f"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","e9819ae826bf20c979faacf985a5f648"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","703d81ab444a5a52ea2d3d6024f9b696"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","5d58c1fc19d1027c518e58d53a7000d5"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","51fea54d681af0819bc88303ab9a691d"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","9991cb1485a082b6061ee4587106d729"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","e03edb89e843f3be6bc9da25f8374f6e"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","a0c4244dfef003940d84dc6c4bac96eb"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","4d372b3171ab2df1e89187ca0cb041d9"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","6b347f35320cf788127aaac221410b31"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","67d7d74ee8cb96ac10265fabf4e8649a"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","3ed5512f5762d98d6b5aac66a645144c"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","cd5425059f67072016aa45b9a423a675"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","0d07fc283d6d35d6163306a9c77a73e1"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","8f4702e195e220eb61dbf4a0e7d43412"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","5bfe43d303b544cc33bda401d4545bfa"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","136fc41c62fb1774eb6dfd072913fb00"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","9dac79924b97841b1b93296fd48a0dcf"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","1ecdaed59638154f08f580222b4b928b"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","c0874ce849841fec2392eab3c463b29a"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","1804cad522ee5737c0ac8e7046da1306"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","10cf850b6e191650c175bd199944826e"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","b292c34ad7f61c1406c32fc22c662399"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","0667e13289523fa4795f4803cda82520"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","d03bebed0bd2faa460c5ce68b65bc9e5"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","c7af28b842fab6b82c10cf25fde24ad1"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","c0e637732c857945ae6df005e695fd50"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","793b65d4af586d954d514d8050746e2c"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","11e6b1da8b474e8fb00cb751c5184c01"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","afef93328407b372a9c85a32781479ea"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","efc4497b3a81a40abe408b8b04460ed8"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","393d29f78fa3c609a5f5f09ad40ef7f4"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","0bcb5d5b32149ee16eb24473da61c6ca"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","fc0640df7b6f0f9f42943094c196b3ca"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","ef2bf6403871f1128553632d3955c35f"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","f35e7fa5cfe3d2d774d43c86e05a9a50"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","05662e62fc22a5235345d0cd749185b3"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","1ffcfff88cdb784237e6f9efe1ae5870"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","22b5cfefbb858afd13b13a8bc769a006"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","c83d5de871caee1ccefb873430055097"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","673df8fc4a1c8a1242a1ddf43b31f67b"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","8e44e600f3399b60a3898f77eaac8bb7"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","efcfeaec24c97b77890ca67a886c974c"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","3ac38f3e7bea7448d8f8251565c25c16"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","0f04e4685cfd20992611d5b23e319448"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","9486433b85f996f5ef1d0e3fb43ad9ae"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","a6c84070f0451937d0f267e024340d26"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","4dbead6cc52a4228c7b54d719292d1d0"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","893e68a21468efe02c999b60aee2cc2b"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","a2c1c57da040c4388c65bd1addcbaec4"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","c4eb4f95878f51e9820a34bcf14a36d6"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","c81c12102730bfdfcdb38107c5bedc43"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","4cd49b5cdbc05dd2adbeaa9cb5d8f3a8"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","fe122184935ad524b817a9d211f24820"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","fbf16f781406db8e4fa293435e83ae88"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","1a123eb681d3cd9c0c3c3a713cc32bc8"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","8b99f9257016aceec47220d5946abee5"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","fb4aa652ec3d2b1b87ee68434685a452"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","c9db2b8bb60ea4f99caa7aaeddac95fa"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","777c44a411f89f6f99487fc0c0ba9ec9"],["C:/lmislm.github.io/public/2019/05/25/2019-05-25/index.html","33e84606ef81ae2d34a287c50d99768a"],["C:/lmislm.github.io/public/2019/05/26/2019-05-26、/index.html","e011590a4094f8d5fd8f756e9c8e6679"],["C:/lmislm.github.io/public/2019/05/27/2019-05-27/index.html","64d763e111af7f4f0a7d848fc07ed199"],["C:/lmislm.github.io/public/2019/05/28/2019-05-28/index.html","ddc474b7575bd5dae7cccf8ac22e6951"],["C:/lmislm.github.io/public/2019/05/29/2019-05-29/index.html","ff33d842306d9db5925379c7760bc90d"],["C:/lmislm.github.io/public/2019/05/30/2019-05-30/index.html","3348c49c0c6b065e6f804a3d1afafb93"],["C:/lmislm.github.io/public/2019/05/31/2019-05-31/index.html","15a3097a492065257495da60b59c7cbb"],["C:/lmislm.github.io/public/2019/06/01/2019-06-01/index.html","9a12c406ab6edb1704968e598147cbf8"],["C:/lmislm.github.io/public/2019/06/02/2019-06-02/index.html","cae59896345b4edd21b068e3fccebb2f"],["C:/lmislm.github.io/public/about/index.html","74008413b4086934cec4f74e1269fd59"],["C:/lmislm.github.io/public/archives/2016/01/index.html","4b670efebce98c397c2e168487a4d280"],["C:/lmislm.github.io/public/archives/2016/03/index.html","7e6fa9318a996b1743df678d40c49c60"],["C:/lmislm.github.io/public/archives/2016/index.html","14d3da19ae72a9d2db113812873a52d2"],["C:/lmislm.github.io/public/archives/2017/01/index.html","4cc2a7ba015e7ed7c1379563626a88af"],["C:/lmislm.github.io/public/archives/2017/03/index.html","e855aae6b12b3fc0f4b1ab8d7c335d49"],["C:/lmislm.github.io/public/archives/2017/04/index.html","998218d853916b6d16436a17d64bd3f3"],["C:/lmislm.github.io/public/archives/2017/05/index.html","d0f8b729cb55247e537afd030aa36094"],["C:/lmislm.github.io/public/archives/2017/07/index.html","03b5483e47c86e4f41f0aea8d164776f"],["C:/lmislm.github.io/public/archives/2017/index.html","8fc3f8b8320dd47ab7c2adf4a2855d7c"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","2b19076c472f1822abeb7b996df4c73b"],["C:/lmislm.github.io/public/archives/2018/01/index.html","40753cf25ef742ea7559e96335e08fae"],["C:/lmislm.github.io/public/archives/2018/03/index.html","ff7ac8a7ccc663bc50e851a2c2c75996"],["C:/lmislm.github.io/public/archives/2018/12/index.html","c74f083f47a3bbaa6ccf7e38acf38f50"],["C:/lmislm.github.io/public/archives/2018/index.html","0ded17f1903b4c62ea756f3957b8a5d2"],["C:/lmislm.github.io/public/archives/2019/01/index.html","487c4a279af4b8d6b882ef612484d701"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","cb4d397adfd5096fcfeb81a114eae4cf"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","aef49aa0439c6bd412567ffb6a7aceab"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","2ffa130fea1b632d7ea58fd023e81dbf"],["C:/lmislm.github.io/public/archives/2019/02/index.html","4192e00ed5924ed30c9b695d3ba9bb97"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","efbc066092ba3a7b9fb8465097263f63"],["C:/lmislm.github.io/public/archives/2019/03/index.html","3c4067dcbfd48530ba6063007df18842"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","59a855ae112434190e580506413e3835"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","cd3b60a5633c7b815fc3f907f3a9c7ab"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","b628c77d3f02e9b17a45b4a8b8129eac"],["C:/lmislm.github.io/public/archives/2019/04/index.html","8bebf088c2dabe59fb42da6deea00957"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","d3b490c5e8798ab277d956b3222c804c"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","a99d89cd1040bba2a0695e87b7561d21"],["C:/lmislm.github.io/public/archives/2019/05/index.html","a39857876b9b8127558d01bca0017b8c"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","14fe93165ab469a2dd7595b1de76b071"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","3f8dfba12ef11997bab074bb5a490149"],["C:/lmislm.github.io/public/archives/2019/05/page/4/index.html","f8972a68a9334ac922860bca1fabf0e7"],["C:/lmislm.github.io/public/archives/2019/06/index.html","6645157610e414bf50b317768df7a79b"],["C:/lmislm.github.io/public/archives/2019/index.html","7dbbd1bbf0f668ae74e72ea1ab096c40"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","f09284fee3b925d1918b7feb0d242038"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","e956d9000e09a3d4223673f3cc837a78"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","5675455d89bd52708311b2886346ae5b"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","2d8217a90659136522a417dc59fe5d64"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","c8ad7b690a227f37ac10036a85d41563"],["C:/lmislm.github.io/public/archives/2019/page/15/index.html","9c9d6f62ab07effc5175c7789ec58fbb"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","f7e06d75d164db9011462afe0a2afc5f"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","d20182f212dc1df3251b7bc72072411d"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","3e124ee70aea65e4dd05d2bf6a1e7ea8"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","697b1c930db1eef2ab79aabd67c04bfe"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","a8da992615d3f83af9ebed4407663510"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","1971fca1776e1d746acc0918df45e7d8"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","d17224ef043ea6d6b2f0830d44183b09"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","98881823f9b9416eb1a53fe2b1eb0ed5"],["C:/lmislm.github.io/public/archives/index.html","7f0cd77f788edf80ee5c8a91031d5ad1"],["C:/lmislm.github.io/public/archives/page/10/index.html","0f588ba3988863b4823ff66181d0413c"],["C:/lmislm.github.io/public/archives/page/11/index.html","cff6086dc77a0babfff1b772049fb24a"],["C:/lmislm.github.io/public/archives/page/12/index.html","cb515d9b4c35e4590670c1d00ed11264"],["C:/lmislm.github.io/public/archives/page/13/index.html","5d15c96f9cf6787069cf7e9db3daf7fb"],["C:/lmislm.github.io/public/archives/page/14/index.html","cab688dc906583f5457857f3c6f785ac"],["C:/lmislm.github.io/public/archives/page/15/index.html","a5301123c232f1f0a3092983c7f0fb8c"],["C:/lmislm.github.io/public/archives/page/16/index.html","c4d363c65019a4645f4fd58d55bf8056"],["C:/lmislm.github.io/public/archives/page/17/index.html","3df6b65123773a12951fe0f26a96220b"],["C:/lmislm.github.io/public/archives/page/2/index.html","4ebadb65b67dbc04770ca3f621037d1c"],["C:/lmislm.github.io/public/archives/page/3/index.html","87d09e8ea3c0903c2542ee129e93fce4"],["C:/lmislm.github.io/public/archives/page/4/index.html","01f546752471347e27bb48900f70fb3e"],["C:/lmislm.github.io/public/archives/page/5/index.html","0be6f4629c8fe833bc2c49824817f24c"],["C:/lmislm.github.io/public/archives/page/6/index.html","887d1144562fc1b4ff0c82553bfa6a25"],["C:/lmislm.github.io/public/archives/page/7/index.html","521d3d1241450bc77de26dc4fecf4267"],["C:/lmislm.github.io/public/archives/page/8/index.html","6fc741bd93da527ee7b6cd2d0bb74eb3"],["C:/lmislm.github.io/public/archives/page/9/index.html","dc2d330d8c474c633de4e985b2a4f0cb"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","79c8c0b42dd16ef15385d1d39395e2e9"],["C:/lmislm.github.io/public/categories/index.html","3c2beaf65204c1441dface455bec550f"],["C:/lmislm.github.io/public/categories/xx/index.html","a039aa4d9e479d696cf1003f32834ca0"],["C:/lmislm.github.io/public/categories/学习/index.html","e97d7cf8d7e5a803be935d7405aa125c"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","121691fda132d6cb3f01deef9790489a"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","43fa13f7148d7c0712a07f1f08689c0a"],["C:/lmislm.github.io/public/categories/工作/index.html","8232c24ad426c824a627946ad363f637"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","6383a1a4458db8ea385b685d95838b49"],["C:/lmislm.github.io/public/categories/技术/index.html","4f30a920711e2960d7b2e7b4f3112be9"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","79ea8ebd69278236561704576f64d265"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","dc598e3fd4701b292e0f2cd4b4ef8efd"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","4d9e484b8e3005aecb7c186ff67ab9e5"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","fc20323bed2844d9ad7210689074ed11"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","8e5c6e7e36a17547fd4995eecdd78a7d"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","408b042cf05d5c136dbbb7dab5ac6515"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","58c4195c74019d1690f4f5e836bb586b"],["C:/lmislm.github.io/public/categories/日常操作/index.html","fa6575b74d474e17a0fc3e2714a86928"],["C:/lmislm.github.io/public/categories/生活/index.html","fc8e794ae68465bfda598148416d651c"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","702bea1cd64449562b227b3f8fd8208b"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","cb2343d1a83062364422a849c5af462d"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","5e724fec939d5e80512795d6f1187cb9"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","024f66140e18cf2ef47e6f404f63f48c"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","0cb4fbeb5c28904711ee15a4075f531b"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","3c8f8d686a00c182b82af31e8798855f"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","fa93a5786184a7716264699e5aaae755"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","af3b689b556962f174ced5ac0ada547a"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","6e4adba44a744576336e16b34ca7e179"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","f822ecf76bd2e2ecc9b97c7d5319bcce"],["C:/lmislm.github.io/public/page/11/index.html","c651f0109cab2f4dc5a73ae37bc76bd4"],["C:/lmislm.github.io/public/page/12/index.html","49535d29c67bf735d49bb75c57c09b47"],["C:/lmislm.github.io/public/page/13/index.html","88460a2d249dbd78d8887804057fd416"],["C:/lmislm.github.io/public/page/14/index.html","dac1901bd9a77d8aa57047e666823dd9"],["C:/lmislm.github.io/public/page/15/index.html","ff4ea139bba5de4122d719c93a1624d9"],["C:/lmislm.github.io/public/page/16/index.html","4d0511d6bfeb313886aad5f9a5bf1b0b"],["C:/lmislm.github.io/public/page/17/index.html","e6550e34556efa1fe9e5c5343cb4247a"],["C:/lmislm.github.io/public/page/2/index.html","fe3b796af057dd0aad223a067f76f42a"],["C:/lmislm.github.io/public/page/3/index.html","1a94aa68e319b932bad404385c283a67"],["C:/lmislm.github.io/public/page/4/index.html","88f64352066852230d6208e9db517d3c"],["C:/lmislm.github.io/public/page/5/index.html","786ec4e3a37ec46a8300ddcec02fb110"],["C:/lmislm.github.io/public/page/6/index.html","a2bc1152528e26592d6d666a414bbf30"],["C:/lmislm.github.io/public/page/7/index.html","fe93910fadc52275fd31f7516f6fad45"],["C:/lmislm.github.io/public/page/8/index.html","463256e1099794ee91d7ae2ff218a223"],["C:/lmislm.github.io/public/page/9/index.html","0604b262806ba5eef520be0000f670ff"],["C:/lmislm.github.io/public/tags/Interview/index.html","9ed02c7e4b06aad51296596a8e35d654"],["C:/lmislm.github.io/public/tags/JS/index.html","b1513168e7882361f9c07d44501a969e"],["C:/lmislm.github.io/public/tags/acm/index.html","bc60daabf0ff51b64340dc687159edde"],["C:/lmislm.github.io/public/tags/acm/page/2/index.html","642592356927ff19e9f693088430e070"],["C:/lmislm.github.io/public/tags/c/index.html","1024e6b76467cf646cbc62992605f1b1"],["C:/lmislm.github.io/public/tags/codewars/index.html","f2e964482d23391a4d61e2b79d0f2718"],["C:/lmislm.github.io/public/tags/css/index.html","38ddc472059c29ce72fc77c0307c7ca5"],["C:/lmislm.github.io/public/tags/git/index.html","e21dc1add71d6d3d8020f540ff9774ad"],["C:/lmislm.github.io/public/tags/hexo/index.html","f4a3f7cc8e8a751e977ed384824cd4b6"],["C:/lmislm.github.io/public/tags/index.html","344499a382b6fe76d2c53e9e8bb4b34e"],["C:/lmislm.github.io/public/tags/markdown/index.html","0db43add1700ed0fb54d7b03b95c80df"],["C:/lmislm.github.io/public/tags/poj/index.html","42c6a5d14fcf67de0a4f4b849f576cf2"],["C:/lmislm.github.io/public/tags/shell/index.html","63d65ee2d06d7ec675e0187292257952"],["C:/lmislm.github.io/public/tags/vue/index.html","ca4a7b9248e478fd4dab98a0d55a7c54"],["C:/lmislm.github.io/public/tags/xx/index.html","46642b7ebe0ff2d7218eb955251173a2"],["C:/lmislm.github.io/public/tags/前端/index.html","a6938b54e4e5027cda4192000bc60e38"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","d4198201dd094ba2ca9aac8142d08e66"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","46cbaa8c18a9f79a3471b1a0612620f7"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","1c1edc485d75b5f3de4a0b6bf0eea16c"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","9695f14717bf952a1915349ccd575b2f"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","c7f61eb8a26188c34b28c1b1cadfc6ee"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","36d1d6074a9a155d8daa36af8d38bda3"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","c8f6bf515918fd4631e086edc0ec6546"],["C:/lmislm.github.io/public/tags/小技巧/index.html","76f9e11a487d544c64541df124a3f3e0"],["C:/lmislm.github.io/public/tags/展示/index.html","b06cfe31fae8673cca63735e14bd1a1e"],["C:/lmislm.github.io/public/tags/工具/index.html","85011030b26f505eab7acda327956603"],["C:/lmislm.github.io/public/tags/感悟/index.html","468ae97884a312781803ad9860c209f6"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","36093e1aee1528b27777b1bdab8c29c6"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","2461efb9414035f12e0873ef09ac8d73"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","3de5428a111d67c1578d45edef1b3fd6"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","8685e78f0f3c3f34adbfc093d0aa5cdd"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","72bb08be9fe961c67dd4c3b44af775f6"],["C:/lmislm.github.io/public/tags/练习/index.html","b27034e2f90796b68fd0afe66ecb57b8"],["C:/lmislm.github.io/public/tags/编程/index.html","30337f1a44a057b00eebe592d8333178"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","e7741050cc4f17b24c65b437230aae00"],["C:/lmislm.github.io/public/tags/运维/index.html","3c9d6c3af545e5cb8ef3f1a2cde9e7f7"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







