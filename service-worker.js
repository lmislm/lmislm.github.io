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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","d4c569a3ce218fefb5cdb1d106ae9cb8"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","cb66aa59cbaeedbde24195079d2babc9"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","3730aff1ec5a39b81a881b1cb6ac5c28"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","7d9ec4342310280bb50b0608b3fb2f83"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","9e612c923654317b08cc71a1f29b8c75"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","ed35a8525f265ecad62c6c6711463d22"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","92454c68e3aa6cce0bdb596f9fd385a4"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","235ec18d60e1794d14edfda1dedd475a"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","ab6e3883296ea0642c71b31a4d9b9cf8"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","d0569a70e7d3f38e4ab4ba91df7ff721"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","1ee5ac4a35ca27715106a32e46647d44"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","5b0c6d93c91d7d23d089065bbf558480"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","03d3a977bbdfc11ffb572da9698ae49c"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","06fa721d51dd4839a6c720fee447acdf"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","d0072be2038376afa4f7c7eefde42698"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","a9d3aee64c5d6a5ea427081be2fa6bd0"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","acd89c51df725b69758a8049a9e4edb3"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","5dd3087ea9b22efec5f914e24faccdb5"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","3b186726597b8c90969046aa77a37f86"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","2df446e284a82034c99b18a5dea8a35f"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","0513a497df424ba164ff44c117a0da35"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","089e348cc91388b6662bf8855e466e64"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","0007f5f6025dd8f56a7be31d36040f12"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","a5e9e391a357de1f8b32a2d16956c4e6"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","6e8a76c56cf173ff3562a1367e5f983c"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","f35c4a5d6c0542065dd0f8c250106cba"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","f1837ff7a212c8db454c350571879c65"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","46c211c4d90492bb905c9c00e6ac10f8"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","2652462e4887ce266a92d5cbedf0aef5"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","5c658b5908c04759dc2f813328cd75a7"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","9b8a7bff2e274e7f95a89b7f07f9736f"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","d43262e816e475d765f2699764fffd31"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","eb611c021c383ce6c51b091c5bce25e0"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","bf2d14be4e4e8386c95c275eeeed258c"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","fa2e0054c0896da9939e17411a46b29f"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","e8f0f269a7baa7457620cde88e76f812"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","66fe978b2a2da82736a4854b80ecb379"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","f48a9f104191180bae28df71b3fcc58a"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","cafc263a28eb0de893c9456d4cfc1fb4"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","580594a9f38a76793df779440764110a"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","3054b05701c68e9077f5c21ef074fb9f"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","61136bbfad8ccdc22ecb0ae6bda785a1"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","0fc0066f6b83a51238d67a286045d5d4"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","e894bb8617bfce37f92b99723d53be66"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","609eea6d02b9638fd220a4411959eb2f"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","dba7b9d8a377d21c543bdcf310eb5eb1"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","7aaa7e3677efebde6aa260cf68b7935a"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","75f503b91194da82a8a8c99cdb103dbb"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","d64e46a33f3b0fa45bc7daf1333380bd"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","f0664d83f5b923442651d0ee91db470a"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","53fb6a3e7e15c54b77fc9b769d0b3478"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","a199b1ae13f9f7ac6030ce10ecf60a02"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","c04816af6040b8132766df2c62a46005"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","8557120fce654ea7cf7b5ed7f099754d"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","dc5e3393b505052c2f5ad479954c6eb0"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","b49efb2b5bb2234f24e378e2a0351306"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","93dc9895ba22723bf5ddce7b6caf199a"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","2b29a7ccddffff7379bccb62eb24d7b5"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","0eab010c87dc05e85d9b3a00a3653fa1"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","1416e9d753d0fd8a42a33e4c4117dc85"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","f7fbf59dbd5c58c14522b3730bd6a4a4"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","a70401e7e963dd4ae9b07ae74d964e53"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","5c2b473710ba648faed50b930d089ea6"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","4362db6fc853025f413032657c3a0ae1"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","c29f1d309388ca8810e5f3e3776e7abc"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","ed8befe496684b930ad9c86d42f37bbf"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","23bf3108be1edf5d7251e729b95dd8b0"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","2c49cc07347fe60c55e1a07051cbb7e7"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","2651d5c3fe0ded906f0579f95980520f"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","479070ab1884e46f8475e9a268d7ce69"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","2ff16ffe294612dcd9379856c3412682"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","eb40205b7094f2fe5e6cc27df6c49152"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","653ba7b215ad11307ac3763866e42000"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","08f7041e7a9c058c55eebaff9ed33f77"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","d9d48172ec75fcc1c2840128a802bc68"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","3e8e6cdb07b725e01b1d216d99177ea5"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","ff728fb823d92db0b7848896dbb5d2e2"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","8bbbcd640778cac8498782f07cb882a1"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","59cd63bb5f878ea9eb91357934344126"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","e5d4ab41f10bf5fcd860d58caf1b29a1"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","fd3c28b342f84d289b4f1d0086ffdf8e"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","dceffedc5470bda87831a868a6714957"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","a0a85cfb489373d077242469d8a4e07d"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","d2a9b0a750f8da3c553f5ccc0cf44f3b"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","e2c2bd96ca1578faa1992d111ad9720f"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","d46ed3bbee156f78bad57dbb67d92cd0"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","f17f1fdfec11c267a4dddf638dc0bcf5"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","6cae23359f2bec1c057525faffb77e39"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","219584f9678f4ba3b66d4d7aaa7b32ae"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","33a10b702f9c7e538bf57be32d2582ba"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","fd489f5185b7c87f0d33c2421c6608b7"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","f6ffda8c2dd8e4a52cc99bde6890dd32"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","2c7ba138a671bcf7c3c8492b3361686a"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","d7b0537803d9bb74187584048c4543c2"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","27614fa94cf9bcfbdf19ec02afe8d54b"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","615839dd716522898facf420e7638666"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","1cf421308cb5cc03a61fe93107d4c8a2"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","173d79f35832c24724f72454664ce1a6"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","63296f8a8cbbed33534369b44106b2b8"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","c955d205bb3d9292b7e6dc07ff3bbfbf"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","c3b12bd4803b5f04bda905f1f818efba"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","3dd31b6a9e4510a06110237973601bba"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","9ca98c842a371a65683e917f32b69af8"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","dc3dd76b967f4f58e3fd467b507fcf76"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","1929c28f7e80a15d80ab113a0a88b75f"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","ee9c13b9d4dcf36bbf646fff975a569c"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","51f7b49892dc3f4acd454cbf50be966f"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","b3fae4dcbe566689fdfde29c625d2ebc"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","5ea496d1e93451a1aab89d388d30fea9"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","a1b742a6dd7555f627c1dafcb951f168"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","f49207f05cb05cf663c4036a4f121da2"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","1883b91481d6ebdb4b1e5423b178f51f"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","618f6b11bb99c30e8ed45e455c7a7559"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","c4a8cfb894d99e0d12d0e37a93c9bbb5"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","f2b733ec400dfd05ba763569bb508fbf"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","cf3ecc77d4a7415532401ada7b260788"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","e7fb69b92308398cc2eae7e9d4740f2b"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","7a921941e765884fdd4e4171857e5530"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","2749b0fb83c8c84b46be954d6a0bbba6"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","ada1c1fc047b513fc3def7d8495c50fc"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","0e6075e6cd737213d561e632e5558dfb"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","29542d85ffd2613e79ea2f319bad72aa"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","bf94e1a1eef460cec961f5dcb7b7e4d2"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","bcf2ae936bad8b56be9d0cc27e5649a6"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","45138750f9293b3180af13aae88fdf63"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","8daaf07475109b95976537cb66588c74"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","8ebc040c97a4ff382b9a989767a67caa"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","5aea0b41fd79f1e6c8f0f8c12b7b9f1b"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","4e3b979358788ed43e26e74ee94c8f4b"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","4434f3f802fa3018d8a7a1d6c5dd7283"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","e127afc2d4c9bce11a56a1e302af84a6"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","d990da9ad2ce987f6327e6a4fc8d3dd7"],["C:/lmislm.github.io/public/about/index.html","8036115be17cc4f91e2d7f6d47ef6215"],["C:/lmislm.github.io/public/archives/2016/01/index.html","ece3ba7946995e9a15d4c9e94ec97edc"],["C:/lmislm.github.io/public/archives/2016/03/index.html","7c004fb1074a38be44c18efa8d13bb8f"],["C:/lmislm.github.io/public/archives/2016/index.html","a7ff5950b4cc0f39e4b2580679a4af85"],["C:/lmislm.github.io/public/archives/2017/01/index.html","27866cc35999617b241ed1e165e96d29"],["C:/lmislm.github.io/public/archives/2017/03/index.html","f5bd5a61783d0dc320ca642a96ad8c15"],["C:/lmislm.github.io/public/archives/2017/04/index.html","e58cc32a4c547613b945e988a459cc95"],["C:/lmislm.github.io/public/archives/2017/05/index.html","617070655c2428a500619c98f8157129"],["C:/lmislm.github.io/public/archives/2017/07/index.html","f7ed5c5411f16098fc1d3465c34fb894"],["C:/lmislm.github.io/public/archives/2017/index.html","b2c393738bb91b3dcdfdb2b937c46e53"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","47707b5afd0563713f42834d71ca6525"],["C:/lmislm.github.io/public/archives/2018/01/index.html","5b5285b5be9fcc92ddbcbbfdbca25ed9"],["C:/lmislm.github.io/public/archives/2018/03/index.html","f59db7223a016d554f65d27b53ed8f98"],["C:/lmislm.github.io/public/archives/2018/12/index.html","9f20cd679a132f7ed68aa20abe96d25d"],["C:/lmislm.github.io/public/archives/2018/index.html","3c738fea2a93eff76e06e7d1ff9cb4eb"],["C:/lmislm.github.io/public/archives/2019/01/index.html","4be7e8564ad9a70171ce0b890130c291"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","d22580f98b2a361dcdabc327d4e54b91"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","23ea615a5a8b5b2dc8f4f626031268b4"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","31584e6d27aef90d3846008fa3179d30"],["C:/lmislm.github.io/public/archives/2019/02/index.html","6ecb52b74a2dd4b0e7159970b11d4c15"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","c68f3435ef3355e89ca98382c220bd25"],["C:/lmislm.github.io/public/archives/2019/03/index.html","96309a97aaaccd4d3def1e011a2ee9dc"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","2ddb0d8ea13aad0bd884d16d56f5133d"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","dd27953067506d0a9872f7e25b412f30"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","24a018ce01a83bcc2fea1dea4cf71a63"],["C:/lmislm.github.io/public/archives/2019/04/index.html","38c6c4bb463379461441e8eeef90eb76"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","40d1878e21aae4fc159bb07da1e9d35e"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","24bfe4b53b3fc2ab17e08f26bc1b2b8c"],["C:/lmislm.github.io/public/archives/2019/index.html","fc5343f9e4acf32653277047ba1a4ebb"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","239a9430d4dd417cc2fa85423197aeb8"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","536b7ff693d749cd03b05f29161f49cf"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","5e504caf1c4c6a31c6744f942575095b"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","b6e63bca149d109d929bea1d3aa41c7e"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","f57b03b4f72257c78235bb0a09374349"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","aa1eb6eca168831a7aaa5212a76583e9"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","7ab5911a900448480475874a9f19462d"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","79065c3131d5ef3829249169e09c8b39"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","b490c4874214c7eb42f9dbec33f1a41b"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","4ae278c4110b9f24adbdf7f56b40c028"],["C:/lmislm.github.io/public/archives/index.html","34d081a22141c31a07a7ac875b65a82f"],["C:/lmislm.github.io/public/archives/page/10/index.html","32c5de025f31c4dd17c8a28321b97ec5"],["C:/lmislm.github.io/public/archives/page/11/index.html","f5b928121e84fccbf2212f0572ef99d1"],["C:/lmislm.github.io/public/archives/page/12/index.html","34696d704600ab1cc725b226b8170e6b"],["C:/lmislm.github.io/public/archives/page/13/index.html","1230ec588e4f46540f04d829b3552192"],["C:/lmislm.github.io/public/archives/page/14/index.html","9c074609f56fd3ca508becb9ebb50870"],["C:/lmislm.github.io/public/archives/page/2/index.html","3905d5f130803e62b3eb3f104f4012dc"],["C:/lmislm.github.io/public/archives/page/3/index.html","ae973afd40b4e5cc09741331af1e8fd0"],["C:/lmislm.github.io/public/archives/page/4/index.html","b1bb5217f8246de818384810647fb884"],["C:/lmislm.github.io/public/archives/page/5/index.html","a827160b9a797b5b36c4f5ab15ccb023"],["C:/lmislm.github.io/public/archives/page/6/index.html","27a779bfc2ea7277752d03c402a4c7ab"],["C:/lmislm.github.io/public/archives/page/7/index.html","4c2cd74d8cfe49815c1f786c474404cc"],["C:/lmislm.github.io/public/archives/page/8/index.html","36ae4ff5e044829abec6d92fd06a0466"],["C:/lmislm.github.io/public/archives/page/9/index.html","2e776a280b0b847c0f41115c25d97f17"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","8fbbcce7128163bab782f6ba78865b95"],["C:/lmislm.github.io/public/categories/index.html","a6f56227ad3a47fbb5a45ca38caf45f4"],["C:/lmislm.github.io/public/categories/xx/index.html","90bedc355702a059e20c5873af2b1398"],["C:/lmislm.github.io/public/categories/学习/index.html","3362509e84ce96c453e3e016d957e936"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","93b8bce85f2e45d551b0a8a5fe714acc"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","7ff3accfa1df3286c3bc9ba0c8dcaf28"],["C:/lmislm.github.io/public/categories/工作/index.html","11262a4ca1a9b8ddb162850cf4af744d"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","526bb1595f5ace1324ac1d17a83d42b0"],["C:/lmislm.github.io/public/categories/技术/index.html","470a0dfb96e7dbf1603b338ba06fe4b1"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","afe14f9c45298c4a3546d497470f8ea4"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","e952810466d04cf4c06f6bd2172faf27"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","a28fbdca39556e01e815dcb4ce763ff6"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","eaa3abda11a9dd7b2a3d2f4bdf48eaca"],["C:/lmislm.github.io/public/categories/日常操作/index.html","0bb282c6493d569e0d97db0315da76bf"],["C:/lmislm.github.io/public/categories/生活/index.html","167b0c967be8543b0a033f56219ce05c"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","1b3312f2f4d7e2507afe5f97760e8b10"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","800cef3d62bcc1275f9c161400c7e388"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","22b6ec42e263f681dcc50d2630ecceda"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","316480cca4dec4b40932b1d85c4778a0"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","99847b4414a5446ee127c9d4199ad98c"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","5764de4cb4be9aadddcf6dae168ab7c8"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","d25041d30cb0795e03148df0adf26a56"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","7aea7b41ad7bb4404eaa33628bbefc1a"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","cc39ee3e9a764000a39277e157271071"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","9eea5470d23ae83ef7d8288bb29a9c42"],["C:/lmislm.github.io/public/page/11/index.html","13a55a4a37552ae77b58f189a56e7534"],["C:/lmislm.github.io/public/page/12/index.html","948dfceb64fd702a2b4f3cb34e868456"],["C:/lmislm.github.io/public/page/13/index.html","f70ed52fd12a80abad6833657b0f30b0"],["C:/lmislm.github.io/public/page/14/index.html","f1f226ea39ba9112104dd7a78da7b853"],["C:/lmislm.github.io/public/page/2/index.html","da98eacf3f385988e8596df0dc560e30"],["C:/lmislm.github.io/public/page/3/index.html","865fed280685f89d00d98db342c2efb9"],["C:/lmislm.github.io/public/page/4/index.html","a0c81147549dc750ca1ad2f32529456f"],["C:/lmislm.github.io/public/page/5/index.html","3726ce3c7c7a66becab16155a361fc17"],["C:/lmislm.github.io/public/page/6/index.html","1ac5854ee6d4ec12524248cd196df972"],["C:/lmislm.github.io/public/page/7/index.html","407448696dd2b311a647d02f1ef3f6b2"],["C:/lmislm.github.io/public/page/8/index.html","bb982e8005462bbfb973fba4aaf18232"],["C:/lmislm.github.io/public/page/9/index.html","028babbb95366967ada4309974b4f483"],["C:/lmislm.github.io/public/tags/Interview/index.html","e6ae38db94a190537c0cee2ca0822108"],["C:/lmislm.github.io/public/tags/JS/index.html","e1c7481be22cb2128685fdf03706d476"],["C:/lmislm.github.io/public/tags/acm/index.html","33882364cd4fb002fdfbaee012cd1c4d"],["C:/lmislm.github.io/public/tags/c/index.html","70e7ecc02142a129e375d5bd15d86ed2"],["C:/lmislm.github.io/public/tags/codewars/index.html","be0dd4bd17e2d4ce2b72e625b1ed6a61"],["C:/lmislm.github.io/public/tags/css/index.html","c8e8d5fd24948b291f384aae5e96b807"],["C:/lmislm.github.io/public/tags/git/index.html","7ec1526079ff5bcd59cecb88f4016426"],["C:/lmislm.github.io/public/tags/hexo/index.html","5aec7ee4d33073fb6d5ef28e037c4298"],["C:/lmislm.github.io/public/tags/index.html","8e61af3762838643022a3ff12b8e438c"],["C:/lmislm.github.io/public/tags/markdown/index.html","ce83f4d8c694ce03faba3cfc090ecbc5"],["C:/lmislm.github.io/public/tags/poj/index.html","56a6e5989ecede4be9a535742c2b1e98"],["C:/lmislm.github.io/public/tags/shell/index.html","9f0dc0c32b22b8952350f111cffe7079"],["C:/lmislm.github.io/public/tags/vue/index.html","03e50d1a6e966b71790b1eb267cbae72"],["C:/lmislm.github.io/public/tags/xx/index.html","47aa294b93fc07323a3b0d7d02b0346c"],["C:/lmislm.github.io/public/tags/前端/index.html","fbeb7501f1408af3e74d3c5c947cac17"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","58b1b92d8585f789bd92ece799e29df3"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","7f5fd87223b823003832723db27ec260"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","8eb413926b0364c080665cf3c766b25f"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","1e134262b5dc8e521b63306403ba5404"],["C:/lmislm.github.io/public/tags/小技巧/index.html","1ecb4d4a88a3e064cf99db10b56c1957"],["C:/lmislm.github.io/public/tags/展示/index.html","de7f3413764b8600859d3856c16f0b56"],["C:/lmislm.github.io/public/tags/工具/index.html","7057ae01636bcb0a2ba2c85dcfbc4d57"],["C:/lmislm.github.io/public/tags/感悟/index.html","e7a368165c586234953df6a1641b51ce"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","23f82e26c2aab43dcec0dc8a4838a2aa"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","a99305ca1bdf92cd62c0721c9c5d3b4d"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","66bbd5f038f9716abed468e82117fc05"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","05c41a096023a059750a0613f0368333"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","3c1cfeba23f7b64198783f0ed70beb08"],["C:/lmislm.github.io/public/tags/练习/index.html","1ee601aff7b725e4e1508eb5dd629e1b"],["C:/lmislm.github.io/public/tags/编程/index.html","4eedc230f3df3be51c7d7f387a266216"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","5f2c2110710c2d77014b4bf1caec5473"],["C:/lmislm.github.io/public/tags/运维/index.html","0a8c10eb666e31d521ea75141d734992"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







