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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","29b57b0404e35d08bf93a91915eb6172"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","31195caa1a63d638ddf332e2e3046032"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","a192a38189372023e5dd37bec7575291"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","8c1b7ff1a093ffa2d8e13a9210a70c41"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","a0e35ead88d6bdfa2b9ad1512560b9b3"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","9f3aaa04ded71e732fa4a97ef3fe612c"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e68b43f8c2e1cbc421093fd5f66bcb24"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","2814e73af8923cc0450d52716b5d6987"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","651cb6fff82ded49a8a9e837f51336c2"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","995de727da369cb12d45ca392ecdd9aa"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","e8f510a275ab835de764837d34174f1d"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","d9b6238158c3885d67b687a61714a2a8"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","2aabc61a70ba0d5cd706742c79dbb733"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","8d6cd4c98597458aa58d13fd1bf79e19"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","8f82695467fe216b30059722326e76f8"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","8ebf335263d862fa87d573a78219ffef"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","71686b9d3781e7faa11cfdb14fffce54"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","c0525af06dc84c6561621ba9da99f387"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","50d3ec6a6ab89207050e9bca5c7130c0"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","a3464edc0f0dd6e06c480c34b1cded1e"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","ddd9571ab4166d1711afc2b12b9f3ef4"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","a3caf2a8dd7680288d478e4e0ed77dfb"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","cfe29a1d03bb42094a2bf70466910867"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","2cbd7981867447d8ccc5430f6206b632"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","e39f40aa7e7ef2bd401d6c7674b15a0e"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","3a0dadcb59ef5b8b0472b96add154e71"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","eae50d4ec1398e694a70c3ee35e8cb89"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","1d37cf629c2574cad430bb8f44185cfe"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","b1f2d51adba25dc208b776d3e401a482"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","aec9cf49c69350c7b9892f185cfdae01"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","153192f98074e77446a9bf34ec64cd8d"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","61b16689957ef3fb2bf083f2868e019e"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","647ad6df147f90382ad6848c55aebff5"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","66e1635306f1ca2e8f5937984ba13016"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","88e58cd1dd84d1a391a21b3f2b6d15f3"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","817fb8d26be9d6f9b7b414219a0e2ac9"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","b589b6d88d4543a4b16d6434c205f6c2"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","efd9cdc27331f952b19fccbf3fd82125"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","284ca3723053d76b6dd2d4da0994d008"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","2e76f8f5a742a469ea349454c06cb4f4"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","a184c42ebd0513dce18eab46dfca259f"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","5b710b97c802f3b22311a2ef9180259d"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","4b16c9b1cde304ba6cc4ad28bc13ec1a"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","4361853c91535323403db6d3e12f2778"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","2242e2a07a56eec6208ab5bf4adb8824"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","8ea1d7f4dbc434de46568ccc544552a5"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","e52c31fa352199601b1313ceff2f791e"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","03532ed49be4d4e47f651d7005dced62"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","30ab208aa34909ec8216225912d746ef"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","2c4004f1b0ddc2844d7f5414c39966b4"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","f889131157ad1565bfe7ef30a29b0b9c"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","53e972b0654223be325a253061eb7a00"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","e577d0a99e584e26206c68596f3c3d08"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","08783d7dfd45840537364d1e21292ea2"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","82ed914e649c4772614ae942652454f1"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","3699dcf6ccf35ff682779b9f0dc7a28a"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","bc6a04a3a8087abddd25661301d3cae5"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","46571111c50d7dc9866b437fb710e6b6"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","176b179e45de5a24c1df572a08815c53"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","bacffcf3590e6df5885a1b881d90e41b"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","d5fe1fc59fe8bfda06fba47c4522f2eb"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","db813a47be358f62f32257f79f1cb27a"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","26885db606fceaf485bf4e4afb4124a8"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","00b2808457e17eebdb8640ed48dc5fa7"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","0facb5969488327575ddf8d3f689fc28"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","505a9c791b3cbca826eb8c97a3d07c3e"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","4bae05d071b81eb6ddf45624b6212ebd"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","d0123392a1bd8e40002d9dbbf64e84c8"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","4bdbbf02ee3fb4174d6a84271fbf41c9"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","635256d964e7988a662ee2e059228ca9"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","1e416b284733d27ed7e8a4a13c415da4"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","0809997a7a9faf946da8a93663dfd0ff"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","4b02b1df47cf283bd46dc76f48f05da2"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","f40479be0cfa07fbb9cd20542c83a104"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","9df6c8e7590ac64e4afaa85c10b50ad8"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","65ab9f7ad6b51901a95c6e36f983947b"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","785663b4e727a2723a8968511d261ec0"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","6be1c83d0631375df341bed521e283f5"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","038c92bea02ec74e2f26f78a431110ce"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","2a58af20cb2223174abbf42297754afe"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","7e257e2aa2ec085c518d6228c184ccfd"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","5efd66167285442cc0cccd0393c46f04"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","3585ab561c17c0551b6a0fc55714c1b4"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","e245fddb79599a3e8f38079807ed5313"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","89c7e1c3b67faab5a082d9917d57dee0"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","c449f131394bb8f0ac18aa68d10928ea"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","28b98fb3d4b72d8aaa45e6fad68df479"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","61ed36490c11dc041b006e90638c00e1"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","e05902a494d88f6f7830e25eeb6913f6"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","369a466231cc4ff4f8563a687e9a00a6"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","8c2a20d117d514dad84c1fa4eb125596"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","915f19968e02f37b7eb0e4bc8333f0af"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","5184d1f9fc7e46d10cb4ac9c6e23de0e"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","f549e4dd4680670d3e5d8fcae1c578c5"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","b7553fbb75e2edc2747864dfd3521eeb"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","bca45c045daed255888f15ea66804d23"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","c8902fcbc1c97c079b44b5cba28c7339"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","b987a780e5f822893b4956f150207579"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","db6eff937d5536ab1079771990409f9f"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","03d7605c81a4daece11af468e53efbf0"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","82cc436faaf714d2121dc13d8137daf8"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","d3d655bf271a834bd073330e51a28f3a"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","8ada51ad674ba85957863b88e5dc8169"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","5bd0137c8436909ff28b674e53536b21"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","21612fce065349ce1bca5eabe74eadd6"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","4c91c413364104064df093f0ba8bb0b2"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","d4e804076ebcb27152eafa4a2cc9a148"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","05288cfd89c84da4ec7456491cc336ef"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","e244f24d8aaa254641fc400a1d189516"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","4f992211e918800bc88fa609b035e7b5"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","9aecba16eb59dc07e5e7a0ea2ee607d2"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","b4d3a866697ac547073257a50bad9db9"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","6e70f12dd35db2561f5849e866818ce9"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","eccbd8c11725d01eefdb675c70115f78"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","049e05ebb043aff69e2c6b22e6fef64a"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","bd8199692a40bef2958249afc3318ae1"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","b9691a0dd96b33bc2cfdf64791a3a8b4"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","bb497514e33e17efcd3dc3615c7e8ae6"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","1651c55879b48f01a9a326e400dea233"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","0f85d05f3f209160e972cc5327a91c19"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","10a34642a9694fc000420c712b2ba4de"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","4c49731ee172f303e586b0842c141f5e"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","ee12b638e37f497b01ab9d45921b1b9b"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","e53f5082c18ba0ac3f69d111cdda7de3"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","d0b0b0e243f26e3e51372b71cbfd0ee1"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","ffacf7776e7cbbaac565bf94ba3d8ec0"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","e6419ecb64292c15a30541662e2c41c1"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","08979ba84c420da25857f5d7352a90ca"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","64beedcbb13fe6f23b8cb886540b0634"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","55ace31fe973d309cb4b9fd6c52503d7"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","98091ce59cf47f30b86a4a184fe19bd7"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","3254a826e932b27c2576892d6e671c04"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","017422568d8528524093dd36e39d24c8"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","4c386fc49a77e31979e590aecea85322"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","3512d5cb0688e442ec666eab9bc506ca"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","3394afa25f7fc566150ef7518cd52cbd"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","9f2dd9c64bd70d0748fca3655488bb75"],["C:/lmislm.github.io/public/about/index.html","b7429ad32f66976fb8b434c63415c3bd"],["C:/lmislm.github.io/public/archives/2016/01/index.html","ac615fa85d57c12df43f0485518903f6"],["C:/lmislm.github.io/public/archives/2016/03/index.html","8b931ffda8a6daef9a7b2181c76c54d4"],["C:/lmislm.github.io/public/archives/2016/index.html","5f92fd062293b74eeba1d8f3aee04532"],["C:/lmislm.github.io/public/archives/2017/01/index.html","bc93bede978e19ce6532c25747468f4b"],["C:/lmislm.github.io/public/archives/2017/03/index.html","4aa0aa5fa94988baff819a18f7035f1b"],["C:/lmislm.github.io/public/archives/2017/04/index.html","e8066b434660fd82f8112ca4a2c0b73a"],["C:/lmislm.github.io/public/archives/2017/05/index.html","5f098158c388d101680ebd606485b455"],["C:/lmislm.github.io/public/archives/2017/07/index.html","7c2d7487a52ecd996c923312edc18867"],["C:/lmislm.github.io/public/archives/2017/index.html","b5e6e40e6c21a681dad7815adbc0b49d"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","ab19b54a3660b989b7d4d8ecaca7c667"],["C:/lmislm.github.io/public/archives/2018/01/index.html","0e927bd235d79a82dea5408747fc3999"],["C:/lmislm.github.io/public/archives/2018/03/index.html","6627978e8c347c0c1ee93d8ebd873cf2"],["C:/lmislm.github.io/public/archives/2018/12/index.html","15a46a9e355002e2d6960fac2c3a1aa2"],["C:/lmislm.github.io/public/archives/2018/index.html","90a4761a0819560613e78d4c59788901"],["C:/lmislm.github.io/public/archives/2019/01/index.html","f8ba1c2dca436bdf73134b851ac8e4bb"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","18809882572e9a5a7691d88e21845aa5"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","4bba1d17f4affab1409b5acd46eeee03"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","fd7783642c29112195efe30998695c86"],["C:/lmislm.github.io/public/archives/2019/02/index.html","61dcd63e535b8f82370b5e917d12632f"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","5ab69af6965ed8ff6fe1170ff31fd656"],["C:/lmislm.github.io/public/archives/2019/03/index.html","dc4a1ef7c3b6bf0aa161274ebbceaea5"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","82bf3fd5905d46ab45e9303501c23cf1"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","2bf35bd0a4ad3c9725e766b3a2081d69"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","b83a2ff70fa32f0e27f4e17eaf5de98f"],["C:/lmislm.github.io/public/archives/2019/04/index.html","874b3a32de0a753830f974b8f293a9c3"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","509a629e1ab252346948e7526a0aa886"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","3e80bdde1ae1678fb1f63a467c41ff67"],["C:/lmislm.github.io/public/archives/2019/05/index.html","a31768e5062368fe845e07babba1cf3a"],["C:/lmislm.github.io/public/archives/2019/index.html","9d39f6c35984e19ae2f20001aee11202"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","0f52bf3cfae7eacb2fbb6372917ce454"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","a0220725e8c3ddfe20a480005c7cb32a"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","3b88d7561f062ec2e269664ff8877c42"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","01ea268982a530dd8f42d1d96d73bf26"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","050b64accbe6d07ffcbca5dea657f133"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","9fd15e1490fb621ab17828703907962c"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","82d44380c7c31df949ed527d8a373331"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","317f8199971894ed95aeef2f175884cf"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","3a4d62821222fcb329b242db2288f01f"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","9118c8808b942bcd18b9b8d60a40bde5"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","016846f4db534170ed661441b08573bf"],["C:/lmislm.github.io/public/archives/index.html","8bc17dec0573b35be23a18591d370f33"],["C:/lmislm.github.io/public/archives/page/10/index.html","dbef08b3db578e78d740647a77c46e92"],["C:/lmislm.github.io/public/archives/page/11/index.html","36fb3e9388faddbf90e629dc1abfb86d"],["C:/lmislm.github.io/public/archives/page/12/index.html","8dc58300e20763db22ec0cef695f3e9c"],["C:/lmislm.github.io/public/archives/page/13/index.html","75a7e735803ec3afcee0cd3a841b344c"],["C:/lmislm.github.io/public/archives/page/14/index.html","9f46558e1b4a38e8c48524f66833b05c"],["C:/lmislm.github.io/public/archives/page/2/index.html","1750e3f777e2592e8f2e674f68eb396c"],["C:/lmislm.github.io/public/archives/page/3/index.html","bbc8c3f42483f248b525b40c7e5ad09f"],["C:/lmislm.github.io/public/archives/page/4/index.html","fb450a66871f47cf5fa1a2225c7e8bae"],["C:/lmislm.github.io/public/archives/page/5/index.html","93ca6c88cfe4bb37a2f77fde618a27fd"],["C:/lmislm.github.io/public/archives/page/6/index.html","1107de2111039e1481100f49dd4b9fc7"],["C:/lmislm.github.io/public/archives/page/7/index.html","c41c47c59a9e37256dcf09c9621092e1"],["C:/lmislm.github.io/public/archives/page/8/index.html","9235ac41cf567d49cc6a2f95bf1a7b68"],["C:/lmislm.github.io/public/archives/page/9/index.html","4dd5863b7fa945138be7cb1131606c95"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","8a227db1612c308c2fadb00c1f2c835d"],["C:/lmislm.github.io/public/categories/index.html","d478e526dca743dd05bc6a1835ec704b"],["C:/lmislm.github.io/public/categories/xx/index.html","76db37121275b91c152613794e1fda2e"],["C:/lmislm.github.io/public/categories/学习/index.html","df6dd5308f94fb968189c0558ecf24f6"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","3c604b27e520b5c7f489e5172b22edf5"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","4571ac9a70eb7532d170bef5d16e9031"],["C:/lmislm.github.io/public/categories/工作/index.html","a47b6dde48ea0be0ef67b071f240f51e"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","c01f4afca58da89cdc16ee0073bef872"],["C:/lmislm.github.io/public/categories/技术/index.html","4afaa1853bbebf5aa7210fefb0a8ab3e"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","5cf6e499d9da9b755d3b8f70ad0c67a5"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","b7dd094e9e41e22ea9fb242e6b06e651"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","548edefca043b9c6a2ebaa4599f5395a"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","b25b394fc6a01ea986004499ba9f8ceb"],["C:/lmislm.github.io/public/categories/日常操作/index.html","cc391ec6411bcd5346fcbd275667d45f"],["C:/lmislm.github.io/public/categories/生活/index.html","ca743c163f00f05dfa358d82945c577c"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","045b5e74610af9db08ad147de0f06461"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","e1bae862264c3b0ed4db32ea24bdb3b6"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","11b47d87f096fb5d82a0ce9efba058d2"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","e0f07c8504ffce48532d2b2296e6e69c"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","c48cf6524e9acfa45292c702fbe646ea"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","9d3faf303599343881e64cfdc847142d"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","99de018872718916bd541e95879fdafe"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","967e3156f04037e1db8905158b688bff"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","16bd189bdc4bcaac6b2888351d6fd217"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","17e4f3cecd19569305ea8ae63b6776e2"],["C:/lmislm.github.io/public/page/11/index.html","3e0bf31a566a48e153a9bdb4b22ef479"],["C:/lmislm.github.io/public/page/12/index.html","9354ddf89303656071fea86a3b378f0f"],["C:/lmislm.github.io/public/page/13/index.html","30d1633fdcb7b84a7cd1535f2962d251"],["C:/lmislm.github.io/public/page/14/index.html","cfc7d8a001efa24ce819f735793f797c"],["C:/lmislm.github.io/public/page/2/index.html","da6a49b3c4f672659233d24fc6dbbe76"],["C:/lmislm.github.io/public/page/3/index.html","c3d5b1354a72f74051d6d0ba8d828c75"],["C:/lmislm.github.io/public/page/4/index.html","780a442b98293d72cfa59310db777293"],["C:/lmislm.github.io/public/page/5/index.html","0c7209f39730f47c1901962a0b7b08c0"],["C:/lmislm.github.io/public/page/6/index.html","0a20c17b5e2316736e46d0f0cec5b3c0"],["C:/lmislm.github.io/public/page/7/index.html","0acbf6f382300f5f57ec5949c6b5aaa3"],["C:/lmislm.github.io/public/page/8/index.html","cd91cd8c003fdaf917f1fd727ba3e322"],["C:/lmislm.github.io/public/page/9/index.html","4489c0945a612a56c67606e3cacc1bb5"],["C:/lmislm.github.io/public/tags/Interview/index.html","c1d737573dda70df7e96c7c6eb81e1f1"],["C:/lmislm.github.io/public/tags/JS/index.html","fce2342ae6ebb01dbf6473a382113843"],["C:/lmislm.github.io/public/tags/acm/index.html","c199eb014def2cc38e168e062b0b2f14"],["C:/lmislm.github.io/public/tags/c/index.html","88d90f42ca17c17776a34e5072a4600c"],["C:/lmislm.github.io/public/tags/codewars/index.html","b4fba675f89319fb0f7468a096cbfdc5"],["C:/lmislm.github.io/public/tags/css/index.html","7bb00734811af5b5cd7e32001a7cbb61"],["C:/lmislm.github.io/public/tags/git/index.html","14cfe42315e0dd450de51ab7dc892f85"],["C:/lmislm.github.io/public/tags/hexo/index.html","28024cfc185aec192cd9685357227094"],["C:/lmislm.github.io/public/tags/index.html","d674c419398cf002f5ba27e8a0375257"],["C:/lmislm.github.io/public/tags/markdown/index.html","37f02d4ecd57577fdb6a75e0b7fb7722"],["C:/lmislm.github.io/public/tags/poj/index.html","f252e8d4eb8bf3b0d9e573e065d7d867"],["C:/lmislm.github.io/public/tags/shell/index.html","c91818ad74d947d87e60ac39e1ead3a3"],["C:/lmislm.github.io/public/tags/vue/index.html","9e1346666d47ce978c56dfa9330192ea"],["C:/lmislm.github.io/public/tags/xx/index.html","8a455785cc1f82c606099b60982dfc44"],["C:/lmislm.github.io/public/tags/前端/index.html","e67d8587b1a62d747ed2e5c325560b29"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","f44c9ab96be940a308189ba437031aea"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","f7956c4ba744f627f1ac0b01fb995cae"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","e78d2032aacfe8a7dba25d762ea0c5fd"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","0cdfb830e6637d82db5b48f86ce34159"],["C:/lmislm.github.io/public/tags/小技巧/index.html","9e8957385b783d6a35f40ce2f505377d"],["C:/lmislm.github.io/public/tags/展示/index.html","2dcb869a43b384e101060f3ea8a7f7a3"],["C:/lmislm.github.io/public/tags/工具/index.html","ad0e473b6dcee4a31007ae45df4c1f3c"],["C:/lmislm.github.io/public/tags/感悟/index.html","41db4566d40009d7063dff6880993a88"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","392edac29514cb2814712b5cbd546b2a"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","83510fa4a73a3435f5756afa21015a90"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","63d2b078288ff0eebd284d54d344dfd8"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","6cf9dd14a3185a2842278f8a51384eae"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","d62180f98c34f1da9a69a3e58c99d213"],["C:/lmislm.github.io/public/tags/练习/index.html","855ef5234cf8dfb20d223811b83c8304"],["C:/lmislm.github.io/public/tags/编程/index.html","3017850f87e74c6ded0d3e31d0151ef8"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","d381cbf53a4d4d42661459907cb00649"],["C:/lmislm.github.io/public/tags/运维/index.html","fd11e680e353738cbfdc8a70cbe45c08"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







