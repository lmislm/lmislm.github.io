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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","e4a4157e294496e48a8ba9c8fa8957ab"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","c6777c215e5e9afdcd681ac016b8594f"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","c041ed9510d7eec683a10c12b48e3485"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","37c803f5678f8387f1b0e03183858d11"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","6f699c57a4f7efb775dba3134d572398"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","72ed539493bf6243c9193be246598be7"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","8427989833490cb84a6956b9a8463cee"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","f73b03570551d75a086e7041127fb1b5"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","739c84b80fb37f5ae3dc085a8a296a93"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","e3d1a9c7a150abcb30cc000aa146c288"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","d16d75b6b43211cd68d770a61364cb79"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","0b2c803b9c15624ec94139f08e499aee"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","90250d7113b7acf23688f188247c2663"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","869d3a40ceec1e468120860d6bce2e13"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","2ddf415a584483308f2d8aac4c3c2d98"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","79976fe3afd246b088af19358719d2c7"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","998e4534311a60b946e2a36e2c16d120"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","b056b50daf8c9386c6bfea7eeeb7a629"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","e475182ef9db15735e03560258c8ce9b"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","43419de5564a375519af1d2c1cf8c6a0"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","ea7b9a202850af1304abb39da3082e25"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","859af586d2db2f6cb22705f94d54c028"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","889000441d517b6f1a3b0c6bc26aede3"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","9eb63ad9dae893f66e1c6b1f5b693534"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","7b19333b1473eaaaa2a289688875b156"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","1fe74678f4ca49adb8eac9dabb133333"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f30e7dac3207c7e9f61dc05437976812"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","6601f8f4433e9f4930a714581e3110ba"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","ddaf018b50ed35fd6ae69b97ef9d319d"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","e443e608f2c87290d72695deb1829afb"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","5cc82c8bdc69ce308f624a47f6080584"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","45f810a02f127c77ff56f61b97f8e067"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","5d2c81d1d345c30b23349140b2c236e9"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","34a0a97dea0702cfe94ab2a374cd9a2d"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","574f0a3d24cdc7a6d849fea13f7fa19e"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","383d9a9be33c31e4fd9ef0159d4f2fe1"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","e72fa707e391c5475b3a3763f9f4bf47"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","208d732a88914b3fbc6e6925553be94c"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","cbccab1fee87bae1ae0aed00acef38f7"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","dec017f959f1e39d11bfa9d40e8cbee2"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3a8d1809cb9cc96838fb8ddcb192e694"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","30521b2adf3d9869e9e7ff0632ca31c6"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","944dab645a6f3d7729947cb97e433af1"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","a8226333bf71f1f1b33e5fe7665834c7"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","b372872b657322cc72db03307552fdf7"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","72ca30da330611b6a24c08f9da464630"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","3d70dd0f7e4b84292dbae78391ac99e4"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","a03169ee8b2265c7edd1e8ab757a5a23"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","e2bebd0bba507e5ecf63830f414ca608"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","6edb128702a67b20d328749a0f1c3c65"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","6062d6e81b865a698f5393ede9290424"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","71faa48ed51f3d3f1d8c2bd5827ff19c"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","f76dcf15be160653395f8412bbbc994d"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","512d6f94ad343de290d19b978234ae1c"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","39f15b5117e37dc5310725b03c1835a6"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","188ad6ed074968e648c357de2c3c23f3"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","e3d74b43e2dde11d7757fb7d8e856282"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","633dea675b02171488d2d5287d74b5b2"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","2a8f43ae7f7c01aee6f44451dfa90b94"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","018909fcffccff7c0d034707eb2c8100"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","f7938582b59cfc8899a98851ee10f5e8"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","be158e158c0da65cebe097a95f90e9f1"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","77e720f893cbfc2a98950613bb120f4e"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","cabb9a62316bbb993a9f824dbb4a7ff1"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","9952e32400c75e3ea34a957a8254abca"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","0e341f22d2e64c9747322f4d0a551fa3"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","2bf409714ba9c5990c1b38a985116abc"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","31f466c9d568cae54fd1719a6692f474"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","3d5cbc7577b9dbd7990ec7e4b383df45"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","0e34523dda3ab725b03ef3f0c90387f3"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","e1c6f43404edb407c3e12247b121cbe5"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","191f358eada7bc771bcecdb5be0baa49"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","5cd82767c896a48a816d93890d3f35fd"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","77cf589885db789a855a669af107015b"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","f9ff1eb883633c6a1f14053998a303ee"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","8e0787b531f72f8a9b03811ff9f9a665"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","e7d450fb8ac4fbe3e9be4823e57ddc80"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","e5cc052d9883a861e2ac364c11a06ce9"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","ee2f288929d0fdd4fdaa6e55173f13f0"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","d9e63a277c95f39b384db3e14dd5a384"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","a9c0f7e1602ab62b515f5b33957915f5"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","9aca752c26f6cc85394067a713e81132"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","03ed92fdc8552bc000d4b46c8657fa14"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","2db3fd816340660d02ab0952c09e2c4c"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","0882d5ded394e83981ba1bb449561feb"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","d45469a71922f2a9069b3489491e7da5"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","272495d4aac87771dcd3d4d0274a6618"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","449276592842e64210d7dea140c22826"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","82cbae9ea5c2d5946a22a8de862d2b13"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","753d42afd39e31739cc21dfec07dd380"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","fb50e1c9204edbeb7a511450e96c8204"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","0ee277406c84ff002e8ec9e0377698d6"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","09e55c002427a801f89ab72a147d1f79"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","b68741f256660f38a2eed258822abead"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","0805088aeb46fcb99c5b07ad3063fb3f"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","83389fe144a6501beec018876815d4e5"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","b0e83001acc2f70c8cfe5ce70f0fa8be"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","c75d63df2dad9a5f4ff8b207e47c3c87"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","2420dbf38c92c74c8e9e50820fb5e255"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","f18d2df0b44fc37ef311640a8000705d"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","0a4f5af9aa98190eacde57741f2fb8c6"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","da2ae1164244207cd9ce43e5ac9c1b3c"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","2a327fadbe35750bbf1b73779443ad6e"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","6369433eb4ec6311354fd96d8640873b"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","3db3e7e7cb0957fa50cd2bedf253df61"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","4b4a73e4b778fd22f22913e121892220"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","f261b3407252f20f43181eff3216868e"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","c0860be447352dc49fb97e09f7ba7b1a"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","106270b3b364659e9f3a5d463832977a"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","33c56463bfb0d6b61b0d7cee2cae14e9"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","ada8f2ea67927ccd04bade81ad034840"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","7d94fb08a5759558f9a9b191f2bc264c"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","fbadd567ec356cd26aa6f6e32a1caf9c"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","d11689c1360a8a8fa9cfd5297c39a30d"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","5aefb91d323d5e64ee5d6134536bb7f4"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","890c5536aea9d0d9a6535cd6b354079e"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","c5f5b7642cc6cb016bb4b593c726e41a"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","588b79efc1a790daabbac99188db8ed4"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","59fc9d343bd0e2195fb14f186a19bfdc"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","de21b78b40d76a4d11f157602fbc3d9e"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","c3d0ac74821c9c0920fd157cd8addeca"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","aa756fcc12cfba01807386dfad1b8116"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","d27720077c012978e23faecc6b7dbcc5"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","9e586dead239f9df0b723134a8558bb8"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","19210228456e8e034edc48a020e323fb"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","da85fccc0274ee33c2f7b861e4d773fd"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","a2d842abbafa2baef0ad3b1766f1d652"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","a8fcd6c3f035a4f6813badf407e53565"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","8c5fb27b5aed8b6debbb3994a02d7105"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","c6bc6b6fcd1b86dff96a700f4db7adfb"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","cf5ec15afa8e4b80c2d90388e0fcc66a"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","78eb624d900f197772ea92921fec7f10"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","abdf1ea0006aa844108bff52ca9ce135"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","4ec1fd3288b82b5de8616548eb57a554"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","b8eddcff947977e1e3146769511684a8"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","2df0d7924fd726e12bc8c36e6c1b3a47"],["C:/lmislm.github.io/public/about/index.html","a04d6619bb1368374d91c489bcca4384"],["C:/lmislm.github.io/public/archives/2016/01/index.html","3e254621b33bbe38c431b694d6a70bc8"],["C:/lmislm.github.io/public/archives/2016/03/index.html","7060042cac5b99b01f0873d4d7802d0b"],["C:/lmislm.github.io/public/archives/2016/index.html","3e7843707b2459558cf74e64c0682c74"],["C:/lmislm.github.io/public/archives/2017/01/index.html","e76c0d42a448597d5acd86efe050e80b"],["C:/lmislm.github.io/public/archives/2017/03/index.html","d46cac95e162d388534218a262788629"],["C:/lmislm.github.io/public/archives/2017/04/index.html","1bc03a543e31cb47f0fdbd9dcaee0bb5"],["C:/lmislm.github.io/public/archives/2017/05/index.html","e1bccc61b9cd48b63d99c16a184f5955"],["C:/lmislm.github.io/public/archives/2017/07/index.html","b86fcb0e84d742816d845a76e67d2b05"],["C:/lmislm.github.io/public/archives/2017/index.html","fce2822829d780a2fed01f9301f5d131"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","9c6973fb2cc63ea0d94764d30768e2c7"],["C:/lmislm.github.io/public/archives/2018/01/index.html","504972746eaa73e1421f680d9b64b6c4"],["C:/lmislm.github.io/public/archives/2018/03/index.html","a0d66c83b601983a6e2509bde56a080e"],["C:/lmislm.github.io/public/archives/2018/12/index.html","86345d2d0b4ef94a4b104d58037fbe18"],["C:/lmislm.github.io/public/archives/2018/index.html","1e947b7be83161923472416bdafad3c1"],["C:/lmislm.github.io/public/archives/2019/01/index.html","5f81bb68d000da2ee92f2683f34f6187"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","ca0c8cf1114e9a031c813c43e6de68f6"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","0a0ff468b4584dfa98fb89af2274f069"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","50cc9f5e32a4347e6213727b75eb912c"],["C:/lmislm.github.io/public/archives/2019/02/index.html","232d76b37add808e6564b3d6523cbda2"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","6afaeb5ba578616450863475fbbc2a6f"],["C:/lmislm.github.io/public/archives/2019/03/index.html","826a526496da8e7da8954a08a8e76ab9"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","cb9a92a2af2db333d319c11655e68f32"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","085b23e7ce3a731f4d9be1fcb6faa146"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","9531a0ec7a53f16468f587091e8db975"],["C:/lmislm.github.io/public/archives/2019/04/index.html","314213345b7a81ff82df6a10c0c9eea3"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","4413ebc0776dc114925ca2c1775a8414"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","cdcef56d221e3de3d22df8f096f2fecf"],["C:/lmislm.github.io/public/archives/2019/05/index.html","2d580a4a70d0b8b0d21cdbdfb91d7fd2"],["C:/lmislm.github.io/public/archives/2019/index.html","1359b7d7dc2e7dcc8e13f80986f51240"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","b3215488e0f52fc9d822f734082206d4"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","9f41575ad2ee5f5ab4e4bb6b674537a1"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","6a20edc59c7f0cbc55e6c2a48711b0a4"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","d1ba8ee6d68bb4fb77b24e34a28f4db6"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","783e419a1f5d84f9cd082559d3929415"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","22e231ff7ce572396aa8eb69635f4e2a"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","381017336fc3ffbac40c23fdf7711b9a"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","76fcd57065858f73ddeeab502aac7179"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","86267cfa86324a771ca3f07baf578805"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","5026e86b5585f4467d7c1b6fc24c3df4"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","9da00b9ad67be41b2f1e4c64376ab159"],["C:/lmislm.github.io/public/archives/index.html","fa23f54fd43266720c2184e0c62200f3"],["C:/lmislm.github.io/public/archives/page/10/index.html","0393b0f2347ab4ea7ae691f3481661e3"],["C:/lmislm.github.io/public/archives/page/11/index.html","ed6bce097853331ea78addf74bdddd49"],["C:/lmislm.github.io/public/archives/page/12/index.html","b6843c99b4a513011dc9c3f81e28aff4"],["C:/lmislm.github.io/public/archives/page/13/index.html","c373e667632102a5c991fe660baf980a"],["C:/lmislm.github.io/public/archives/page/14/index.html","d0383c8cd495db3447f728887edb91d4"],["C:/lmislm.github.io/public/archives/page/2/index.html","d7ba78cbd7c38ed62338feb9488e79d8"],["C:/lmislm.github.io/public/archives/page/3/index.html","87aaf90ca0654221ac609554eeaf4530"],["C:/lmislm.github.io/public/archives/page/4/index.html","ea67256f308838adcd1a24407b153e2d"],["C:/lmislm.github.io/public/archives/page/5/index.html","d605646c3a759e1df4cd0b37aaac8646"],["C:/lmislm.github.io/public/archives/page/6/index.html","f25637ac3ad304a21401ec423af4f0e7"],["C:/lmislm.github.io/public/archives/page/7/index.html","92fb4fbd5044d55ac0532b1f79d5a065"],["C:/lmislm.github.io/public/archives/page/8/index.html","dbc693a8c0d5b1bbbe1264a29c40227f"],["C:/lmislm.github.io/public/archives/page/9/index.html","f421ac1fc307a199c9060ff8bc3f95e7"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","76630c03253e08e46682a26890c45e4b"],["C:/lmislm.github.io/public/categories/index.html","bf1cfe436d6ff7a8fdea13eb933d7a18"],["C:/lmislm.github.io/public/categories/xx/index.html","9b185909b8d5f9a1b19697892b3d8fcc"],["C:/lmislm.github.io/public/categories/学习/index.html","de33836f517e360c2256aed56c224acd"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","bf18d9fef683907cefc8750f7793b0dc"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","5bb30e7530803931f61734797f5e75cb"],["C:/lmislm.github.io/public/categories/工作/index.html","225b7153bac354a0ad3024065eea8050"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","3371e23021d36454ce5de705ab6b3d92"],["C:/lmislm.github.io/public/categories/技术/index.html","c47c45f9641a76f0d5997000c8b9266b"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","8bc8d74d61659bff7c8fbd0783d827d1"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","d66e7f769d036d2b2dff61bb625ddd05"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","a974a2fda0ab9cfe39f2c66e54c44994"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","8838a278b1e5eb2078bd00d596afbf7a"],["C:/lmislm.github.io/public/categories/日常操作/index.html","266c83e0b69ad7b7fb88c99f116381b5"],["C:/lmislm.github.io/public/categories/生活/index.html","1069e4a83d0658e354326b60e2ad2b71"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","f52ea4fda60cde956bf4dfa82fc6bea3"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","f9c5829864d11870fa430161a5216c93"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","eb607670f397e19f7f2af260d4a0aefd"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","c1b6b1d510b00a8e79d9b53217913832"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","ece9572453020fcdd60f6559919eebda"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","fc7b34871d36d626225e60a175e588b8"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","c08d8657464201fe5a17dc9761f7ccb6"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","f338f1900453e8e69f95b90bbcc20c20"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","d39c545fab61f1015ee1d53fb688349e"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","e4d57b85e40726bb5bd25ca5e02b0a7d"],["C:/lmislm.github.io/public/page/11/index.html","4c35611e2d3866e60da660fbffe91751"],["C:/lmislm.github.io/public/page/12/index.html","e6622a81e647057d1478df89e01eb78e"],["C:/lmislm.github.io/public/page/13/index.html","552c49f66c233fe7251e76a36179dc15"],["C:/lmislm.github.io/public/page/14/index.html","8d40c6a76ddc83bcaa2d4c61c0e64499"],["C:/lmislm.github.io/public/page/2/index.html","0b1d4d1e6660331cd334ed1767d68265"],["C:/lmislm.github.io/public/page/3/index.html","74079b41439b416f2f8391bd34ee3d3b"],["C:/lmislm.github.io/public/page/4/index.html","a460c936471e6f67e3b998eddacfa916"],["C:/lmislm.github.io/public/page/5/index.html","349624e46557dac273cd5a821bee9d82"],["C:/lmislm.github.io/public/page/6/index.html","8efdc42aaa35c3fbb644106c1ad94b2e"],["C:/lmislm.github.io/public/page/7/index.html","872bed58295e74d702e64730df497167"],["C:/lmislm.github.io/public/page/8/index.html","ffcc34c3d1e78b0c47bd2de038b233b1"],["C:/lmislm.github.io/public/page/9/index.html","3f49a7dc4ab0813e3f6ad23696aaca37"],["C:/lmislm.github.io/public/tags/Interview/index.html","71f6941ac3b8443a907bf9e5709249f3"],["C:/lmislm.github.io/public/tags/JS/index.html","be1eb53e9abd803f7865981f0df2e5b5"],["C:/lmislm.github.io/public/tags/acm/index.html","0b645e7f66e0622190ea8b4d2ee81edb"],["C:/lmislm.github.io/public/tags/c/index.html","9dc036c9bf3ae10d020b57361e709a03"],["C:/lmislm.github.io/public/tags/codewars/index.html","e5f3f83360c8c3f9e6af4914905087df"],["C:/lmislm.github.io/public/tags/css/index.html","44f261a0ff20180c9007fc0b9866ccac"],["C:/lmislm.github.io/public/tags/git/index.html","d4066fd79d4b2aa62b3df4f23a7f63f4"],["C:/lmislm.github.io/public/tags/hexo/index.html","0def6997c1e981a56105c3e6fa8cb8ad"],["C:/lmislm.github.io/public/tags/index.html","48200d706a29eb69eb5e0296079ac164"],["C:/lmislm.github.io/public/tags/markdown/index.html","8e1c9cab6a59e2259934d49e9465e82c"],["C:/lmislm.github.io/public/tags/poj/index.html","a96979966952858cbb9fbd72e4c4d98b"],["C:/lmislm.github.io/public/tags/shell/index.html","4b0ec9237df9220ebde96f1fc0375a36"],["C:/lmislm.github.io/public/tags/vue/index.html","a69082a3d9af68a1d0852560f87bc098"],["C:/lmislm.github.io/public/tags/xx/index.html","5f1cc92af000fe403828173a6b9ebfe1"],["C:/lmislm.github.io/public/tags/前端/index.html","077f8f5ff4d2dc71927f72c2bec4348c"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","d959d35fe2460cc9256e3e44300e07cb"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","ad72b32d03742752648ce4a4cacc4800"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","57b0e94da41f00b042a77f2f12b8dbb0"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","53c55e4e75cc3eaa325a05264fe1f375"],["C:/lmislm.github.io/public/tags/小技巧/index.html","0152c8c7b0c7afbc8883f6454695ac10"],["C:/lmislm.github.io/public/tags/展示/index.html","b4745a8f0d745a2b007ed825cb38c711"],["C:/lmislm.github.io/public/tags/工具/index.html","64053c1d10124a3bf70e07065e4073ee"],["C:/lmislm.github.io/public/tags/感悟/index.html","a9d1fe0c99e4e8568bc77da9aae12f18"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","d6cf17c4428aab3d05b73edec151df69"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","fe750393e714af2f2c2905e547782715"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","bf5b7632bd89ac8c0777b329f4a4beb8"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","23a89763ba83687d819d5924215e3075"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","8828e5c7f0d0b4616ebb94f81a08090d"],["C:/lmislm.github.io/public/tags/练习/index.html","7e73ec4ce6e09779e763005b1fa2c2a3"],["C:/lmislm.github.io/public/tags/编程/index.html","89efcf725c9605544007c59282b050b3"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","28b6089099a25ff70df102fbf534c50b"],["C:/lmislm.github.io/public/tags/运维/index.html","30c5e98605c0973248d5f5b2303daa2b"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







