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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","7ea4620e4c92d9e12df0836bffc79b86"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","199db4ef8022efe34d03c2b1aaf3294b"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","79835ec9bd1b32ec777efb59e73ab876"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","433421903f8ba872bfa8cbe8d0c944ef"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","3de47142b507f42b50c34de70bdeec74"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","0fb60cf50760a28bb35a11f2450d0811"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","e3f0572e3aef280686d5e53a937746c7"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","e79fb75c5e3848861c48cf2990f8fed6"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","c4ffc5bf0225b01886e8fb7e5e50b5ba"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","c7e70a3594a09255e2bf8e5c6f86a39e"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","21dab8e1588f64857df61d072ebb97bd"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","76d9409d4c97a07a4c49dc7615f7b8ab"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","3e309365b914ba4b605ea60be52abcbd"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","d05028ed5db0fff617e9404cf5b2b420"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2c46c650562dca093082f450a598bbd5"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","f29df15ede822fbb236d01a210927463"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","ae54b05fdec25039da84bf1566f745fa"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f09bef66d69f027a8bcb25bc78c9aaf6"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","9dff0edd1cf66d7994c49afcd3232be2"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","c4690bff5dbcdc8bb48e75dfa98bc5e0"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","aba900a15853d1756f3babad9108a5f9"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","3b117977414e9e915610e86418dec001"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","81fbeae4a500fe70d4e80fbb7a484c9a"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","62f58361f27587f295ee43d142ffbf4f"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","cdd9acba9174c2775a88cb5cd28d8088"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","0fe2d074c6548d7e58af8ce13ec1b9da"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","2afed7fc01cf627d240b69d8608bc8e6"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","75b1ada4e74db931379229eedcb810f5"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","ab73c1fdb3de15ebfcf01565421f146c"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","f1054b323765298b22c475005eeeb435"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","818267ab48844444daf000cda91cbd30"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","907bb1c40d14397bc11cac86e0d4491d"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","3880388695613c6482d34bdfc9ba1ad3"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","8f4464571848475a28336e4d859fa98f"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","00de565102c65fe143c03aa2280fb0b2"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","016a430ad8d56acfeac2e54c26a05d84"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","44ea3752b8699db6dfd3ed27e3fb493f"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","f1a73327504e3468502e0abd5cb49286"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","47b2cd1a24cb9c097b258a0393c0467f"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","66cbb6393cfe38e8ea9fa5abdfa4009a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","eb9722c875769a3ec5c7442c921bb97f"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","4e4db1a8d6a39a0f363a0ab806be0384"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","95d98962af157e34cfddbb8434908afd"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","0bf1efacd83760a96f8cd799d50da2c4"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","df535e5da385fc82a895fe1bcbcf7212"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","15df45e5a4117f2814a85e1d28e59dd5"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","50bb8b0d2169e9adb8d135bc60939d0c"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","dd2b042c032e0bd476509c25589a2fb7"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","e709e3aaa7ef604a13ac61bd89115f6e"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","fc8dfc4dd297f4260de285b740490436"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","6bde7f588cab4b28a9ff208c10dbeae0"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","65da9878606b451eebbd7b714548baaa"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","aff98ccd8ed74fdca98d432d46af33a7"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","699e75d6e9e1efe9287aea8bb43a5a00"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","0712104871212ba3279712fdbc625b52"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","4942e9850bda05804339b07df3dde8aa"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","2ae301fa50ee0538ebb2d79ae61c7e0e"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","7d439b9c66d0224998660781ec50bc8f"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","c22a8b7c06443700c70a4139565fcd6a"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","309f718a01fba8e641fc1d7982dd942b"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","e8e2dcc1fdba730ec860f2c4ee06aaa2"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","457e7c9c80c7c53dea9f2d302401a06e"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","561741fbf6f6b799f41334f689208e8c"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","28f20c31e2e62f0bb741cc19310b06d0"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","638ab36c6c48b92f904aeb03437f067f"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","592930bbe6e5fdfeeae00e74ea0abe15"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","56712320940032cf726f1e3c9c2dfb3c"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","f76c80e120851199cb2a182a3bd68feb"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","db3923edaf511d97e96294f31bae200c"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","9ef52ee44e49d2ac2254fa70fbde5db9"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","50915f1d5f22230903aa209168deb0e7"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","e8cd9d7b20399a39e6882b467581d3c3"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","b68c37610501c1f7557a841f3f32fe8e"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","ad9eb00a7a3a298f1523f3c8ce34f708"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","b6f4c68ed22bdf6ea3e4c381d969d0e5"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","2653d680800e8df5548f0a5828c414b8"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","c92de14ed12bcae35134a4917f0a0a31"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","6ac48c955f5f9df6de4e28730c263f7d"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","0832a9077ca1fa9efb21fe16305fcc8b"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","4ae3e2ca1c7d5628e484f8ea6bd1f4bd"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","545b538175054b5ecd217be3ce361ebf"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","ecfd876cae1a18454d08fe4874a60353"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","9ca10403bbfa955adc317f9c4ecce900"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","982a1bbf339c5983f746a0357ef46471"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","bd15bc2646331a6a8532dd8a7e010d6d"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","b8b6fbd0fe55b1c226c3edf9cf747afe"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","2973e03e622db8172907e5f28e86fb61"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","b6bb1e15b6d454dbbb2457aaa6853904"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","244a9e2c62a73343f4f1d614c9a581ad"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","bdb950f19f6b3015ce44863ac6f0d023"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","4a88441dabc84bccd7becfb8627036db"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","fbb145aae245ef73dcbaa96667f7350c"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","179126a6cf68158fb5aecff77e38cc31"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","96d8d511ec9e94be64a1670c40d5d78f"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","80277f1aba46ee05b01c480bf15076c8"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","925edc95a534c85eeff8f094bb12a536"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","7d071a3ed0d7aaa108e5f73a6bcdfbb4"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","a7df7201be5d7b5c296d77c72a6430c4"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","b1b575b680519617dcf540bad8974502"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","15f90e0c93354554072ba8281691cd4a"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","3faa4f34260d59986516c24e2705e438"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","21cf81bd457980a5bdad3ac7bb403fa7"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","0b308e244f3089d5b01a46b83b43e64f"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","d02fc17547beabea4f20b270fd103fbf"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","38c0c83ab608a8f578138c354f7173f5"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","86b07e6383a2d639cb0ae2996c2518a3"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","a3cd3d3666e50d143c34ff365615f517"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","998e0fc327565c2b8c3c16ce3dd0c2fe"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","6299bf3d2edfb727ebe9915d33c1f4d8"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","d90190fc235c8e24ee7e67a647e76a81"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","1cdb901f4c4ed5109f44c31354634045"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","a6b712dc76ed911253aa3a1b1d8ae63d"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","7d1e29d4adc414dfbb515b241d22ff65"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","458f2074551de5ea8f1852a0657f8dab"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","35eeea4318ee1e8bcba6492dc956c34b"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","ec5f8a97216c86c682661f88ce88a2e3"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","e8c12372e2967601e4a7d294edaeed15"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","7f03d03f255f2f81554a37779223ffaa"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","93959681537e47d7a911eeb7f99b4cac"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","bbbbd1c9b340a275b0563c2c182edc8e"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","983244fd20682240ae4f2e0a44849af1"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","d97c967a67b6f49a6ad8b2342a4dd298"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","b17d836420e0470f05a9ef1c5dd95e81"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","3941e6590592c5f80dfce3dcf43d16e5"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","2f9fa04741dd2b0150a55bedb88db5c2"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","f482a04c778e431daf551710915562a3"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","9a02e94d80a5d066cfbf6d6d28d6177a"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","011e10720b50b98b8701e2cd99c20c71"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","9e941e9092f5b3214764c6914a683983"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","b5c00a2351adc100a588dbe223769143"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","9dfa396068f13a5b42099d2d9011e3d9"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","00ff62de84b094717eefdcb99522466c"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","eeeae19bf6bde66bd2f435c118642440"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","181a03d3bf38f7c946d3668d8ac211fa"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","3cde3d2435ba2d4f01556349f3b533ac"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","aeb6f69f34ab232504fecedaf752a678"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","95106fec9e5a153c83b89c7c5704ce74"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","307ac6665a3ac8f959fa656d7bb7b266"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","88affc74bd6b41b570d60da07d06c659"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","992a5c001686946df9b3f8c98c361049"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","26a1d339a740894ff91b9799e2fe640e"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","8ffa2d5fabdeed06458da39bf10c8b39"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","edf430424f7ab0a938ff1a4e4b790093"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","becedb6bd5867d5046903d50ea258c20"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","44defac753d1865687e85a50116850d1"],["C:/lmislm.github.io/public/2019/05/12/2019-05-12/index.html","02dc4c3c93aba979459d3125ff5cc527"],["C:/lmislm.github.io/public/2019/05/13/2019-05-13/index.html","838dab4012bca8d808c16a4f9eb0c4da"],["C:/lmislm.github.io/public/2019/05/14/2019-05-14/index.html","020421b0e79c7683b8f55bca485065bb"],["C:/lmislm.github.io/public/2019/05/15/2019-05-15/index.html","081d5f8cad5534a698aced74f07dcbef"],["C:/lmislm.github.io/public/2019/05/16/2019-05-16/index.html","4abc145b60f957082683365cd22cca12"],["C:/lmislm.github.io/public/2019/05/17/2019-05-17/index.html","9f2a33e62dedf45b27436c0577f50699"],["C:/lmislm.github.io/public/2019/05/18/2019-05-18/index.html","eff261ac10030aa6841c157b7f875a39"],["C:/lmislm.github.io/public/2019/05/19/2019-05-19/index.html","d696af528b052426dd9c51a8c9a6a3e7"],["C:/lmislm.github.io/public/about/index.html","80d61c6b4e54fa65a52725c330e98bc8"],["C:/lmislm.github.io/public/archives/2016/01/index.html","d710fc01e369f97c37ae1e6059c3337b"],["C:/lmislm.github.io/public/archives/2016/03/index.html","b59f1462786c17f27ef29a52e65c2fb9"],["C:/lmislm.github.io/public/archives/2016/index.html","0e8ee148de782aaa7da359d69cb2458e"],["C:/lmislm.github.io/public/archives/2017/01/index.html","88ace1921feb7c068370c66ee37dff2c"],["C:/lmislm.github.io/public/archives/2017/03/index.html","899e9e51c3d950683bd72a477c15166a"],["C:/lmislm.github.io/public/archives/2017/04/index.html","54612e012f5041a23080412d46d5e8cb"],["C:/lmislm.github.io/public/archives/2017/05/index.html","ced012ab4e086c24a341f6134a40dec3"],["C:/lmislm.github.io/public/archives/2017/07/index.html","7c9707efa329b164d946f15062a5a6f4"],["C:/lmislm.github.io/public/archives/2017/index.html","e0a2b5551f36e41e0a73d7f6594a8a4e"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","713b0c882a1cfea81b93a642daa961fc"],["C:/lmislm.github.io/public/archives/2018/01/index.html","c2a9d574477ec91291c5976800c40fa0"],["C:/lmislm.github.io/public/archives/2018/03/index.html","9092fe5d70781cc8085ab8d93aa3f0f4"],["C:/lmislm.github.io/public/archives/2018/12/index.html","86ca664e9f7d233d94571b3c37de844c"],["C:/lmislm.github.io/public/archives/2018/index.html","5dea1f20b9ca64ffb25da5b213a5e4a8"],["C:/lmislm.github.io/public/archives/2019/01/index.html","fcd279aac92f3589ed881b6fbb12537f"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","1dd049865af1d401c6cf589c6cb16b25"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","08d1fe74eb63b3c24baf6d69741bd599"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","ff115927cc5f9739f6a07e922e726be8"],["C:/lmislm.github.io/public/archives/2019/02/index.html","d4c8f148b809c46a4ad65d2b9fe40756"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","b56eabf2903ed8a5a43a89a154104b6b"],["C:/lmislm.github.io/public/archives/2019/03/index.html","cc0c4035d7c96b97d2410403a31338ae"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","92640a4f61e993eaeeddc6971f6bf02a"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","46af9df0ac32a23ae993c2fb408c96fd"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","5abc7939fbbebf8593609de75c219f6a"],["C:/lmislm.github.io/public/archives/2019/04/index.html","53017a0e321062812749c230f64603a2"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","5c5e0c75ba3f43a6d694221126075c50"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","c14d4cee396b5c16f521aff4b723d5e2"],["C:/lmislm.github.io/public/archives/2019/05/index.html","af757b1edffe8462289d7cecc77b2994"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","7762331631b44f8f7ec726b309fca272"],["C:/lmislm.github.io/public/archives/2019/index.html","9544d0347edca01d7498abd4901e0a6f"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","78841ea6edc6ea7858bfb189d42a77d7"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","2d8f9acf8fd7afa03cc510ee9c00725a"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","5c20f765545c628b13fd33d5283f0d0a"],["C:/lmislm.github.io/public/archives/2019/page/13/index.html","32b4a1f3c9d13aa16457a0da51c1de25"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","66573cb55b36abe893625eaf9409ca56"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","a732df4c0c035d3060617f256bf0c645"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","f18cd8498ba6d0af213fd0462625453d"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","1b50e1bf4d1b98ccbdd5c41012b09ee9"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","603a8306917e2f32dec35bff1afcf495"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","6ca393a912a6471823e835934ea69524"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","1daab2304315fe7d9e679c53d3f7f395"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","c706242631cf42932698fd7922e91ee8"],["C:/lmislm.github.io/public/archives/index.html","74a4a1bf017a81fd2af226749616abd3"],["C:/lmislm.github.io/public/archives/page/10/index.html","eea5d8437408650b1270cc0ad84c3f5a"],["C:/lmislm.github.io/public/archives/page/11/index.html","8a7c523d5667e4c172389cad8b2168ed"],["C:/lmislm.github.io/public/archives/page/12/index.html","b7b8c201352cf8dd218c48a6cfed7190"],["C:/lmislm.github.io/public/archives/page/13/index.html","ad7410558ed0d304fafa31b6bcc17789"],["C:/lmislm.github.io/public/archives/page/14/index.html","3a8e49618a4bfe158af813cc6fd181f0"],["C:/lmislm.github.io/public/archives/page/15/index.html","7efa2b60607ac1455fad142213c7b4ff"],["C:/lmislm.github.io/public/archives/page/16/index.html","6b0ad3ac3b25c2055a1a44700a3e5e60"],["C:/lmislm.github.io/public/archives/page/2/index.html","804e6d9c3b7b57348f06a4f3839d1178"],["C:/lmislm.github.io/public/archives/page/3/index.html","a5661a00fe43ea51524695b9dee20c1f"],["C:/lmislm.github.io/public/archives/page/4/index.html","7eef819c975ee1ed136436b051f232dc"],["C:/lmislm.github.io/public/archives/page/5/index.html","cf4d4513c6dfb9b6a454e52d9275dc4c"],["C:/lmislm.github.io/public/archives/page/6/index.html","2a94699a64c2d1223887426ed41130bc"],["C:/lmislm.github.io/public/archives/page/7/index.html","f3c2b2d6ac861df08a7c64ca8668ed41"],["C:/lmislm.github.io/public/archives/page/8/index.html","816efc4f67d39c6d90706fdca92a7627"],["C:/lmislm.github.io/public/archives/page/9/index.html","0ffe589ccdc4ee4e087b5d6c9b25f15b"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","c51b7662767acdffa39c3973b9a15dcd"],["C:/lmislm.github.io/public/categories/index.html","46a0c3c4500d57a1cde48873c75dd4bf"],["C:/lmislm.github.io/public/categories/xx/index.html","312b7ca8d3b3dc18f70d081936243824"],["C:/lmislm.github.io/public/categories/学习/index.html","7868b50a1f10a1ac5b16347233795905"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","53b9fa44c90d6aa8463659497de4bd13"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","fcbea4c23ed245a9df819f0e60feff3d"],["C:/lmislm.github.io/public/categories/工作/index.html","94c1b48389c89123b96346382eb57cc3"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","374766a4c1e05ca40243f297a1bc24df"],["C:/lmislm.github.io/public/categories/技术/index.html","90d9833bfed929293901da6ccf39e488"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","b50910b6384f7cd6bccdfd8edac3e1ed"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","e4e93e2a5e8ebb742905e8bf0035bdea"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","b5f554c8e11037c97326a30979b12158"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","137abbdadad238a460f64d8db6a3dfb4"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","cb0422cd8da256ff754f0a4138129f38"],["C:/lmislm.github.io/public/categories/技术/page/7/index.html","818e42fa3ee2eb3b5bb80d9481750b8c"],["C:/lmislm.github.io/public/categories/日常操作/index.html","ae02330959c9bc2a20f138740351f5a4"],["C:/lmislm.github.io/public/categories/生活/index.html","f02d45c762c0d90f30d038b202f47b0b"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","bc80fa3fd900b81e5daecc5c1d9cfe21"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","a5641f1074bbb18e631e2cb0d0adbd33"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","83707289091566df780f8606d4e8237b"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","48ebcb2930da495553c45be7d5790555"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","aab16d43ec8d59be2303677340fc1ccd"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","f776e98d7e23316dba515ee644f65b64"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","7be16874e22fa1c51c1b466f48a5677d"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","d9b899ab901e24f76c22459129a0b2fc"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","69dc8bccad5dbf03f1a677a15722d003"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","def173374d8bffad5a91d5ffbe0c42d1"],["C:/lmislm.github.io/public/page/11/index.html","5220dd22af1f0fe486b7bd6274cb7413"],["C:/lmislm.github.io/public/page/12/index.html","3174ff6fcdb1a003563d527c1658c4a3"],["C:/lmislm.github.io/public/page/13/index.html","0a426277c6151dfbb96c3ae61a8b55bb"],["C:/lmislm.github.io/public/page/14/index.html","0de3ddbd94404668031d48b02475ebe7"],["C:/lmislm.github.io/public/page/15/index.html","116fb3b37cde3893e8676b7e8effc4ae"],["C:/lmislm.github.io/public/page/16/index.html","14fad0ce35ff43196bb82388bb13bbd1"],["C:/lmislm.github.io/public/page/2/index.html","72f3e79127367619b85c511733983d2a"],["C:/lmislm.github.io/public/page/3/index.html","08ca1aeb6a073e96262355667d9f3987"],["C:/lmislm.github.io/public/page/4/index.html","b1d68f06843516c674329ba4a74dd56c"],["C:/lmislm.github.io/public/page/5/index.html","0f2e86197d75de86c5f3f43a1c63258b"],["C:/lmislm.github.io/public/page/6/index.html","b76d42f8b32a3efb59da8fbf5b2bac56"],["C:/lmislm.github.io/public/page/7/index.html","37487176f3dd1948f28dfe0ccdf2e326"],["C:/lmislm.github.io/public/page/8/index.html","f2bfcf914d43afdd08d6c4c21882b84e"],["C:/lmislm.github.io/public/page/9/index.html","75e3caf533652d0a724fa9a1531c1cca"],["C:/lmislm.github.io/public/tags/Interview/index.html","72ce53a259c8bbf16e2736689375e352"],["C:/lmislm.github.io/public/tags/JS/index.html","0cb5e1b9ea09d70dfac548ff5d481b96"],["C:/lmislm.github.io/public/tags/acm/index.html","723a85dcccca2b1cbcd4c5ad41d53fb0"],["C:/lmislm.github.io/public/tags/c/index.html","4fb184980578b515ee5f432e18d42d4e"],["C:/lmislm.github.io/public/tags/codewars/index.html","db40af0741a85e1ce54b311d90297691"],["C:/lmislm.github.io/public/tags/css/index.html","60c2ad83b4424f35d626cef9fb2c3edb"],["C:/lmislm.github.io/public/tags/git/index.html","a93136b0bec241ccd6fcacabc774dde0"],["C:/lmislm.github.io/public/tags/hexo/index.html","68e90e8fd018530463dda87c97a7fa46"],["C:/lmislm.github.io/public/tags/index.html","d61c6c5ee01cb181b4254026d2f4988f"],["C:/lmislm.github.io/public/tags/markdown/index.html","c5f7722262f85f18621746e849cd0933"],["C:/lmislm.github.io/public/tags/poj/index.html","2b85f974486a2359da99105f74dd9c6f"],["C:/lmislm.github.io/public/tags/shell/index.html","f3838ee81fbf546dc5439806f5786ebb"],["C:/lmislm.github.io/public/tags/vue/index.html","f17111645a2c91bedf35a43ac5421d4f"],["C:/lmislm.github.io/public/tags/xx/index.html","5838773cb05e0d4c9d3488caffbe94d0"],["C:/lmislm.github.io/public/tags/前端/index.html","910852c9a6efc204510321bed538e9e8"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","ac64cb5a26586cc4f76f2661c5d3dbb7"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","3899342288e87c06538e90c8ec127458"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","78fc8706d64fae62f0e2e4db401dd020"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","9e0f2820819804517937125182159975"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","df59c3de95f4df807cb04083fc5706df"],["C:/lmislm.github.io/public/tags/前端/page/7/index.html","0c726e7b8f19e9a7b49638e7046de42a"],["C:/lmislm.github.io/public/tags/小技巧/index.html","e41bdf70cf159362ace492eb88673402"],["C:/lmislm.github.io/public/tags/展示/index.html","5155001fd2b49c1947f6c5178cb9e57d"],["C:/lmislm.github.io/public/tags/工具/index.html","3797d49224e3713517470998a87bdc61"],["C:/lmislm.github.io/public/tags/感悟/index.html","75b96ae78a39bc7e2a0515bfa034902c"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","2847fb9cadaea682cbef18a9e2fbc526"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","3ef8cc11d651916c35b957acc2d2a8a0"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","26ced89cd9f31f68bf0a4dcd71719b3f"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","2294fd66b65118c9e81488016e300ccd"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","841aceb6478c433758924083961cb9c8"],["C:/lmislm.github.io/public/tags/练习/index.html","f1293073040165613b82bdb19a7d4f0f"],["C:/lmislm.github.io/public/tags/编程/index.html","2e699ad31680a0ee478981467ea1512f"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","0e989b324daa7a87a6c96ac70f0e0cb1"],["C:/lmislm.github.io/public/tags/运维/index.html","d301eab2d645fe4fde18dea8ae66b2a5"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







