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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","f50bf030cfe20f1886f863f45fb375aa"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","c340ec850c75640b77bd3ecd8d0f9011"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","ebde7f0e17a330fc59bc31adbfc674ae"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","feceda41f88ba9c39047a9b0901b92db"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","3957121dc7178ffebaf20987eca58e8d"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","f7ee4f84cc9a0bda1bcdaaf8a1e65b55"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","ad2441765079e9cd681d99ff2011f7e9"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","84c263499f0b01ae1694f1236f70b79f"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","9dd67ee1420264b8a4b468f8454e7784"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","e0ad3bd10cb1c9f0e453d157f491c562"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","1b4f2b97d9651419c837149fedcf6887"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","438db4ec5478d78f286ac81a6502d4c2"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","b7b51bb64d4e82d249c8ec95402a7640"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","759d60ee27d7f4db254d55e58f14e340"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","8bf2e9411444c6f2faa7804dd83ceeee"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","4d43ecf3f08feaca4002e70fe3210ecc"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","c71587ff42cb0d91b92545868493e401"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","7077434743c787f93b8d276f2fa010e4"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","e199315b5657be0c0792066edc99dc04"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","30a167e992517da69c252cff4cb233bd"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","4ceec276a6904ceaef213cea2fae6913"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","d2b9fe0cbd08dfef070c072b86f178e6"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","dfcb1ba878693fb43ae2d883410947f4"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","265d3a6141589c8a3345774566d2884d"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","3746f15bed34056adf2a40c03303808f"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","b9feb35dddf72bcb937bf42479ec38a4"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","d6158a8374897d7bc1a7efe54ebf3d28"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","ff0b61b5b57e9ae3cd352e06c230c74d"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","a274f9e115d7f1813ff936fc985af01a"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","eca5f3a3259ddadea171e43869b12e0b"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","c01711f1825023af3195e18e9f20026b"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","2e75cdf1cb0c9a516e25a29632015b15"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","f21cf2b9b214d18c1d619f79ebb14159"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","0f615f7609edbaf3663a4a7802e7524b"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","0518480cca2d648299a3529fb45a70cf"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","7f7ac25e31fe27947ca8513291a773f7"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","86c582b8c174d71c7cdad62b5fc59e2d"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","51e9d8c0b684804dc8825823c07f0678"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","b0207fad37eef3e9f4238fcd09890230"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","99ea083e9bbde11c72434c760213c215"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","54f5b5b4e89f78dab1535c1cd3ea5fa0"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","b7ecffcad2866caf49e08ba62d3ddee7"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","86032f51f75b5dcf9da4a5e1109f6705"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","2bf283598c5db1209017917b6cb4c349"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","d5c8a275cd1077b844618bc82d44bc65"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","961b74f11eef83804a07ec6905a69497"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","5c36b8957e89a01e45c2199a33d91cd5"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","7a84a4f422cee5caf9c8ef84a7593bbe"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","629dabbd90fb71d81968015374a11f33"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","52a311e3ace55cc745a168f877af05a4"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","246e74197141feafab7f49e028427f2c"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","7277efc4de2ab118112bc30363cac432"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","68998ac310da66a18c42a8277a47bdc6"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","26ca62b24b9056be6b5aa0fbfa83c6c4"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","cf44f64ab6c139ea247c837f4edb99f9"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","7c71d8edc1bddd5fcf8e7f632bee93ab"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","09ab7c5ce8872da7dc529c50eb1cdb71"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","873cd0fe8988604d0a464ef1820bf9ff"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","fbc41928e03133ecf0eba29ea1996a33"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","7dcb37140a136f084b4d8f6a40696f34"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","84cac759d34f14595e83af7257e994c3"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","a6b1c901ed8f06fd44b2bc401d44c670"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","2679da4389b3e1daccc86d6b27ea2889"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","5011c98c5777d6a24066716dbf07e5e3"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","45248a12642406141fc123655eed166e"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","533a41969eda1dd94ca0f0947449aa7c"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","9987699e7a9e61cb53913ebad712bf82"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","cba0486208bf6c3d5afd23c8d024b962"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","8ea9691b20518ed9d8676875226f3ffa"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","cd5341ea3cd64b21fb4f381201969f67"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","6c4d5948afb343bc5a830d8e35130abf"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","48a88fa762d6ddf035a4c77198772c5d"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","dc7f91924fade82d389e4b99aa46142b"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","d3412456ffb69ef19f37c3af7360d71a"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","5be743b1d44814db41465587b238b9f5"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","9ab3d027c939ad8696c9365f33884f17"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","c0852025fccc79c1ee40de47916b5b95"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","815bd58fece5b7ee09ae8b0a595e062d"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","cc01d0deac970548da88554115da782a"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","509fef81f6010197e40f3fbf71df390b"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","f0d56caed82904e1796170316c1b0e07"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","c48c464c22fa4f2354333abf955856eb"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","4f58a7ccd5575978f0cf2e19578e1a01"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","e2b9525ebf28d0f0debdf0717c73a68b"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","144b2bbdbf5d8e06eed64f5bfe277e88"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","040677e6aa6d769da46d0ffa2d13da63"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","b8674524dac6f2994af4ce417bcf34cf"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","1d1de2a0764e448144539248aa5568a0"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","0bb437e84ed69907fe1c655da91459d2"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","e8c3af817e323dc8096cad3f05163085"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","743690c9e12e2a05b6ff7cc0bb684de7"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","90313c7de96221b04abfaabb38a94289"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","da3e7398c9e5da4881f66979dbcba63e"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","3fa78e1ff39e66a4a01283cbc1a2d75c"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","28ad00bdefab16c4884dc512cd51a178"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","3b7a3ec6b2d712c3b5c83ddb0a106940"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","020f5104ee93250b1727b42da5e47544"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","290325df21180265d6b2a918ef4dc530"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","4a031c7c957d4f85b439cf9d444a45f9"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","5427efbe27d29e17a7da529e96267f53"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","a188e96481641cb52b40eba870316dde"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","41073ac113aedc9fbb8313ba8fc11ecf"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","1f3792ff152c4758537d6a5f9e1dd466"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","7dbdd38d20ab298d1fe44315268014e4"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","0dc48aae14e41d5ec58dca66774b3bcd"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","e4e0abaf54fb09c1bea5e35dcdad1f4b"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","9e13161061c698d3a2a3adf6777ad80b"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","0599f52ba530f575a345ac14e029378c"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","1988bbe5c95b83bc05309b635416978d"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","e2a12d2a27daac6222e8ca362d57363d"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","5f04f8fe219fa067400a3455af461c29"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","7188ffdfd2c51b31f02cc59e0911bbea"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","ff82ae58fb694329566b0c452b580a59"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","46f9cfdc5da8f509c46f922a22497969"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","bc2ee883701111baec44ce68b500a955"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","78463c535f6b9c0c0208ce1e50564c9b"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","b9916636e9b116fea32a6e6ab7c60f7e"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","3c72624bf394078834572f48a4734f6a"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","bec6d5d681e137a862e95306b5628677"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","1fa95593f06e0af85d5d9fe537a067d3"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","3567fb1848942014ff06dee5ef0faf08"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","ee05ac79cb80817460719c79f5bcf46b"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","ea3a7d991dfe4b36d02f897acc573ac5"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","b6a69855a4a28793493a340d4e8d3dd2"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","d0780a83fce0ccdf638bdd750f75c70f"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","922a305dbf8fa8ada8fa13d41d3483d8"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","4e8f88a9f241a703d581280d109d6c2f"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","fab553f6c3ded10189c660881da64366"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","f3460a2cb5b09586782e10dd04428fb7"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","1294976ce9156c9ba5c61130d6b9efe2"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","af2cc1b0b5dd367e868f235a59984025"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","9f3f0016047d3bb48803e6c107e842f7"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","7751567cda1995337b355cb213b5e2d2"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","f27d75cb98649ea9017e44e913f8bdef"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","0a0bd65018dde2f33a4ce131ab0d4c67"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","b9adc5ba4489c1ea9eb5b2d51b8cb2fb"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","92baa9fb84e0ffdd65dff5d804961a83"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","92ac55d8c5aa84d1cbbaaaaa7f779b90"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","8c4d27f12a49bf86979d82b87b7620f2"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","e66e5c76623a1e65891a3fe6351d7fe4"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","1b8d4f56f32724d9078ce8cc9467deb2"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","8ff1d49a2d01f731fda686f9ea5cdc49"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","c54872b456cdeaa161b7a0785a441f2d"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","8862fe54cbfbac0bc29226ac38eaa458"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","9d2e63f6c7fff9d3a4eaa79b746ac910"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","c49044f73b282befb53cc93a89b24c04"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","783201d971289a0ece464b2c88ae3151"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","5e598aa94940173bc549b11b1ee4788c"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","8a554d1c4cf1eb831758f15f433dd1d5"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","8a476b16877df99185a47670ce9f7ea4"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","21451fd76c7d8b51e3f5ae3f20eafa39"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","1ded254fd848411c1bbd85c74ee0c35f"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","1ec449cc45fd358b38221c86de886fef"],["C:/lmislm.github.io/public/2019/05/20/2019-05-20/index.html","199760ddd122e3fdbea7e3a60620fbfc"],["C:/lmislm.github.io/public/2019/05/21/2019-05-21/index.html","8bf187093f5a3137550384e0566be4f0"],["C:/lmislm.github.io/public/2019/05/22/2019-05-22/index.html","9d43d9b29d52e5deb4a408da9b553b3a"],["C:/lmislm.github.io/public/2019/05/23/2019-05-23/index.html","39489262f6104fbb8c59f975066257cd"],["C:/lmislm.github.io/public/2019/05/24/2019-05-24/index.html","bbf1fc9328a264385cd408abea93ae97"],["C:/lmislm.github.io/public/about/index.html","13ae3ad4faef4c17b5becb9d5f0c7eac"],["C:/lmislm.github.io/public/archives/2016/01/index.html","598c5e585056e157a890eb0f0892684b"],["C:/lmislm.github.io/public/archives/2016/03/index.html","04f39a83b16f1381ac389b9dfa8efdff"],["C:/lmislm.github.io/public/archives/2016/index.html","0b7c52fa3fa3b3c25f1a5c3956b04904"],["C:/lmislm.github.io/public/archives/2017/01/index.html","ea90cb2b9cd9408dd640739449088b81"],["C:/lmislm.github.io/public/archives/2017/03/index.html","ddf44b17ddc800f9c4e9b0fa9d95fd05"],["C:/lmislm.github.io/public/archives/2017/04/index.html","f34d14f1aaaa484e1d4a94beea364a8e"],["C:/lmislm.github.io/public/archives/2017/05/index.html","597e695a90f0d6e3930ca166bd4d7b65"],["C:/lmislm.github.io/public/archives/2017/07/index.html","6410ddc26dfe6de03fb9a92270d8e6c0"],["C:/lmislm.github.io/public/archives/2017/index.html","279bbfdce96f721c4ed7c8e537f3c3cb"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","413d303d2f6da7a75d234d990e4684c1"],["C:/lmislm.github.io/public/archives/2018/01/index.html","58c5aab0930e4750fd65ad10093f0f62"],["C:/lmislm.github.io/public/archives/2018/03/index.html","d22bc295c128468abf23d7d467c58399"],["C:/lmislm.github.io/public/archives/2018/12/index.html","27b83e16c086c78422140d3143c30d83"],["C:/lmislm.github.io/public/archives/2018/index.html","fcc6767410f750606c06e7f2bc35d518"],["C:/lmislm.github.io/public/archives/2019/01/index.html","2313416e440ca590132f9d5591831156"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","c91dad31d7c9150f2713690eabcd77a6"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","0d556e28246d849c4983abb1317939ee"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","6941526e199c993810b66475f8d51b58"],["C:/lmislm.github.io/public/archives/2019/02/index.html","a9423f4af57fd3dc63d2614da9289f90"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","10baa9afe90cd9487f6b3d12a90602f1"],["C:/lmislm.github.io/public/archives/2019/03/index.html","7638deb2c47e6890dcd5b1e2b5076db7"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","e9149acf7659cf059542dc69886f1979"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","131c1c3b659f7bf11473dde3f2a27119"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","64cf3afb41045a226ff52a496e70dabd"],["C:/lmislm.github.io/public/archives/2019/04/index.html","1fa2f1003ff44690f469c694ff48f529"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","a8bbd0ead187f88b4eda755c5b28d22c"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","edc6290381f2b8e0a0d4101142afbd98"],["C:/lmislm.github.io/public/archives/2019/05/index.html","2c5ca1e2f1b8747e05ef6f471cf0495a"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","ab7226702ea8447a86a94feb7a5bae40"],["C:/lmislm.github.io/public/archives/2019/05/page/3/index.html","9e2836f8ba06033e530c7b9aca2aa32a"],["C:/lmislm.github.io/public/archives/2019/index.html","86a1424e198a1a873d3eeff8a8b27e53"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","085c8481a95d018187e7fac4229f6270"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","14ba1c661fedf6ef08b1c98ac46b8bf4"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","6bdec589be101d5ec92acc3f50f1e3ea"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","064ad8d05296bf1a915de33a49879a03"],["C:/lmislm.github.io/public/archives/2019/page/14/index.html","67d865def2840ab5d512675990337bfc"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","a2abbffc6248a41f50f4333308fe81b3"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","248405d907ece5b0823160e62d159f42"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","52035696d10a2ec280d4f26e49f3896e"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","1721afdb44db3f58ba68d54bcccea3c7"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","072652122346b1f5fec5face0fc54564"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","99b4b791c775f8ed8d2e56127bc84aa3"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","8e27449f524bc0affd3379b8fbd19a3a"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","7eba9b31452354ff1eb8d68ca254956e"],["C:/lmislm.github.io/public/archives/index.html","077ab5bf873a697932af825257d77c6d"],["C:/lmislm.github.io/public/archives/page/10/index.html","f7e72de44cde4a3868f13fcdbc8439cb"],["C:/lmislm.github.io/public/archives/page/11/index.html","2c6b50222d6bebcfe5a5f44d49983244"],["C:/lmislm.github.io/public/archives/page/12/index.html","e29d6fc08a0dc04aac5778e2a32a3013"],["C:/lmislm.github.io/public/archives/page/13/index.html","a3be097701bf8e83c0615c9be83dbc52"],["C:/lmislm.github.io/public/archives/page/14/index.html","2ccd00718a38589ffbcd25211161a166"],["C:/lmislm.github.io/public/archives/page/15/index.html","9c46b70fb3a7890c79156469747503b3"],["C:/lmislm.github.io/public/archives/page/16/index.html","a34a80b134c246f6598438464f20212e"],["C:/lmislm.github.io/public/archives/page/2/index.html","a41ab98f37a7dbcd7b5e33210c0eb83d"],["C:/lmislm.github.io/public/archives/page/3/index.html","40c0ef3254efe27b1ffa94937b6fb79c"],["C:/lmislm.github.io/public/archives/page/4/index.html","747797dd5d04bb84bb461cb9813bff04"],["C:/lmislm.github.io/public/archives/page/5/index.html","0e3ebe2f89f1502a56b772ac52dbdd0a"],["C:/lmislm.github.io/public/archives/page/6/index.html","05f5815a4f1b0c0e1d29f97cf0cb691c"],["C:/lmislm.github.io/public/archives/page/7/index.html","e73dc768c1bf83287d1770ffab3f5a16"],["C:/lmislm.github.io/public/archives/page/8/index.html","1f3326c36aa7a7f16df63e653601fda9"],["C:/lmislm.github.io/public/archives/page/9/index.html","3730f11d098b978e74d027ee90bdff1b"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","169dfb374ba1a356648e6086fe4ac02f"],["C:/lmislm.github.io/public/categories/index.html","cc4bb785931555e22a13ee44cd5a70b4"],["C:/lmislm.github.io/public/categories/xx/index.html","90529009aa316fb74d57a6a4dcb0c850"],["C:/lmislm.github.io/public/categories/学习/index.html","91d057edfb53bb7f952b990f8b31d57f"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","96aef307aa253610102f51366dc0d3ac"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","f4a54505e054742f8d686aa13ad025b4"],["C:/lmislm.github.io/public/categories/工作/index.html","62e1179916bf5dffc71dd60e9986b14f"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","cdc3c6ecc762e993cefc5355d19e790c"],["C:/lmislm.github.io/public/categories/技术/index.html","e16a375adc63afe56edc820d7bbf65ee"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","5e65800e697121a95418083bc95f364e"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","384a55f493effcccde82b8d3725b24ec"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","fc0aec913bb50da5e9aedc738f5a3c08"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","888ee663742cf80dded551928aa566fd"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","e80c3c34d4dab68d04322872a8427733"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","04c9805a98c2234580dad24c6435592d"],["C:/lmislm.github.io/public/categories/技术/page/8/index.html","65d9feb3868e73bf22c61b75b6b2964b"],["C:/lmislm.github.io/public/categories/日常操作/index.html","3a76dc1f84a68f7621f57113d65eb103"],["C:/lmislm.github.io/public/categories/生活/index.html","2772ad2d69a517f794e7e8da6e883d73"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","157e8d61e5f520a13cf5d74656ac7f8a"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","9643ca85194bf1c0aa239fbcfbfa5217"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","6154879cca96b289aa8eb609e0ba896b"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","e957d005d195cfbb7a03f55abdb21d5b"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","1cc7e62e6573feeb3176eb6f5c4a0630"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","1115549c41b9e288304fafa1a42e51a3"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","44de68d97ffd8a5fd316a079d2b5e475"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","9da8af8ca138eb2e28ea1afd8299716a"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","133ff4ec46ae8ac3a98fc54627c8440b"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","6b3b30d019a44a0e5b53a0de8a672837"],["C:/lmislm.github.io/public/page/11/index.html","c47f33e94691c95501a71818e3797d16"],["C:/lmislm.github.io/public/page/12/index.html","fa4e083d40089d8eb9d617aa29277b45"],["C:/lmislm.github.io/public/page/13/index.html","7fe350b4abad2fe53c3843d29e0f500f"],["C:/lmislm.github.io/public/page/14/index.html","822325aec15b0e2e8d15f1ff85b75627"],["C:/lmislm.github.io/public/page/15/index.html","64163c964ad1a3c98ccb27bd988a34ee"],["C:/lmislm.github.io/public/page/16/index.html","52c40dffb728d0d9fba95b8ee289775e"],["C:/lmislm.github.io/public/page/2/index.html","34123cda66857ec4ccad8138173f08dc"],["C:/lmislm.github.io/public/page/3/index.html","d811a1522f251e43a5801b051ede588b"],["C:/lmislm.github.io/public/page/4/index.html","ab2cd01f99ae4c1d33f4bf0ddc24624d"],["C:/lmislm.github.io/public/page/5/index.html","6fdc6e8386214390195e8eeb157db012"],["C:/lmislm.github.io/public/page/6/index.html","3f15054c6ede8ac8eb19f5728588134c"],["C:/lmislm.github.io/public/page/7/index.html","6541a666ccf0b97bb0d524a95dcf0459"],["C:/lmislm.github.io/public/page/8/index.html","1b3ac9847c199480835d63984fe7c751"],["C:/lmislm.github.io/public/page/9/index.html","6f54219293b10adc3faee3eff68d9934"],["C:/lmislm.github.io/public/tags/Interview/index.html","f96fce746c7b52c4bd61aa19dbb34ecb"],["C:/lmislm.github.io/public/tags/JS/index.html","1ef63bf568842abd8bf04efe100f2bce"],["C:/lmislm.github.io/public/tags/acm/index.html","1d7cf2928613afb058ab92c01553f270"],["C:/lmislm.github.io/public/tags/c/index.html","74af1021ab6a94bffe72518d5aaf6769"],["C:/lmislm.github.io/public/tags/codewars/index.html","d26c32f994a9184712b0ee1722d5cf52"],["C:/lmislm.github.io/public/tags/css/index.html","97a0ed497ee98d41574a461f535a7ab6"],["C:/lmislm.github.io/public/tags/git/index.html","529b9804d6cffc57e002fcf89f705ebc"],["C:/lmislm.github.io/public/tags/hexo/index.html","5ec4902fcc33d5579081f948b36645ca"],["C:/lmislm.github.io/public/tags/index.html","f2fb5b70b31338e771de552e30aae24a"],["C:/lmislm.github.io/public/tags/markdown/index.html","4f14269402298ebf9c560ff55518bb60"],["C:/lmislm.github.io/public/tags/poj/index.html","4a8a985ec7724d35d6b67030eaa9e341"],["C:/lmislm.github.io/public/tags/shell/index.html","d972f967dbb23bcd8cd28884f8bac420"],["C:/lmislm.github.io/public/tags/vue/index.html","998f71af7edd21af9cafe8a1e2a3430f"],["C:/lmislm.github.io/public/tags/xx/index.html","5e78ac0439e78e82809316c35454e866"],["C:/lmislm.github.io/public/tags/前端/index.html","05860ef17dfa9c6088c9d827bd59a0e4"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","be0358e79e19ddd854b96bbf58875c33"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","7c101a03633feaccf48664292b9ab3b1"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","d4587f49b8b7e0df156bf0379671da4e"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","d129eeac6eb6cdc87c806b5edd288f8a"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","49dcd97619fba95211996194c641f121"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","d1173688d7ce29222c97e7734f2282ac"],["C:/lmislm.github.io/public/tags/前端/page/8/index.html","96fd713e7a268fabde295c6f60179991"],["C:/lmislm.github.io/public/tags/小技巧/index.html","fe5126d035be42183d7afe4cac4810e1"],["C:/lmislm.github.io/public/tags/展示/index.html","49642dbb284c5c20e1453186f7614ffe"],["C:/lmislm.github.io/public/tags/工具/index.html","1678d414f893e190e8c9563bfb0b3b2a"],["C:/lmislm.github.io/public/tags/感悟/index.html","3009c867a261dff60f52a85befbbcfd0"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","d8bdaff21990099280c1e9021f95c2e8"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","f51f41b716aa0ed47915dbbebbaff30c"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","df2dfd0bc3cf99878121bf3ae2774b23"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","b1683dd3b8d74bfd9064535694bb63db"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","d8aa416969ec47071ea9e4261795d4e0"],["C:/lmislm.github.io/public/tags/练习/index.html","af16566a39dbbafcbc9ccc697589c277"],["C:/lmislm.github.io/public/tags/编程/index.html","2da061c4d91988fe8d69cf5f5c3ea12d"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","7aeb1b5892d06d897b193165a422fcdc"],["C:/lmislm.github.io/public/tags/运维/index.html","112122a89f57a0980f7e293d4324f6f7"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







