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

var precacheConfig = [["C:/lmislm.github.io/public/2016/01/18/sass与css比较/index.html","0eafbda39f03f7a26db195b163a245ee"],["C:/lmislm.github.io/public/2016/03/20/hexo中的tags/index.html","34327a3407541f03036531646c669053"],["C:/lmislm.github.io/public/2017/01/26/vue-router挂载/index.html","e38f8cc483be5762ed78ca86e44e1df2"],["C:/lmislm.github.io/public/2017/03/16/codewars-accm/index.html","a701023b19ee08e2ebaa6ea174d344c6"],["C:/lmislm.github.io/public/2017/03/17/codewars-ooxx/index.html","9b187eb3833a6b704bde277d62dfcbe4"],["C:/lmislm.github.io/public/2017/03/20/codewars/index.html","503070f94cd011ae95963453fe5b43ca"],["C:/lmislm.github.io/public/2017/03/20/markdown语法小记/index.html","91cae193e72171e8405375b836be26a5"],["C:/lmislm.github.io/public/2017/03/25/holygrail/index.html","41b4123a4a7f9cafd7f8397fd6539589"],["C:/lmislm.github.io/public/2017/03/30/Math.random/index.html","7b750ea95c9da04204bf883bbd971af5"],["C:/lmislm.github.io/public/2017/04/02/vowel count/index.html","05b6b2c780d45536fca165d8a84f29b2"],["C:/lmislm.github.io/public/2017/05/07/codewars_Replace With Alphabet Position/index.html","23b02a7423805a48be9eb72da1c8b102"],["C:/lmislm.github.io/public/2017/05/20/poj No.3062/index.html","daa7ef759985794b2e56a3d280394fd2"],["C:/lmislm.github.io/public/2017/05/21/poj No.2590/index.html","bb22e0f2fd07f04761ef0fe974fcd817"],["C:/lmislm.github.io/public/2017/05/24/DFS-部分和/index.html","77a8d2b9df14209beda047e30b49adf8"],["C:/lmislm.github.io/public/2017/05/25/acm00/index.html","986f3e8b176c69ec83cd0b3fb4b2e889"],["C:/lmislm.github.io/public/2017/05/27/check-question/index.html","5b9ea0c334402d1ec53f9dbdeaf5f1d3"],["C:/lmislm.github.io/public/2017/07/20/shell正则表达式/index.html","6429d12151e700ef5840c36ecdf9c9dd"],["C:/lmislm.github.io/public/2018/01/06/undefined behavior in c/index.html","f93dd6d01333345aac9923d3fd308134"],["C:/lmislm.github.io/public/2018/03/05/git-progress/index.html","203a5ff8888cb4870c1e47f4947ad927"],["C:/lmislm.github.io/public/2018/03/19/reversInt/index.html","e8ad34e00eb25ae677e7fefcee168888"],["C:/lmislm.github.io/public/2018/03/28/matrix/index.html","e8876a50f70d52e09f14e567eb9fd26b"],["C:/lmislm.github.io/public/2018/12/30/2019-启程/index.html","757eec0d528f551c1bb71e780dfd7fc4"],["C:/lmislm.github.io/public/2018/12/30/fib/index.html","1d0ba8b1c4ac841bba38e54d2aa6f719"],["C:/lmislm.github.io/public/2018/12/30/markdown-trick/index.html","01f6520a1e40af9372a0982acd7068e5"],["C:/lmislm.github.io/public/2018/12/31/2018-最后一天/index.html","e6429020a0bb267a3f8c37e010d0ecfb"],["C:/lmislm.github.io/public/2019/01/01/2019-01-01/index.html","69b83b87407f7a475d0decc741a96c60"],["C:/lmislm.github.io/public/2019/01/02/2019-01-02/index.html","384263a3a0c96f38d81c6bce82b2ff5e"],["C:/lmislm.github.io/public/2019/01/03/2019-01-03/index.html","726192b2711e42fe256b63d5289fd36f"],["C:/lmislm.github.io/public/2019/01/04/2019-01-04/index.html","a8a7e33a419aaa3a981d4c13bb85d93c"],["C:/lmislm.github.io/public/2019/01/05/2019-01-05/index.html","de5a4156e794e6940444be10345d9bb6"],["C:/lmislm.github.io/public/2019/01/06/2019-01-06/index.html","c0bc4c5a9d275bc049a6c5b122c938b3"],["C:/lmislm.github.io/public/2019/01/07/2019-01-07/index.html","76e336ca1c6104cea4969488d9a8aea5"],["C:/lmislm.github.io/public/2019/01/08/2019-01-08/index.html","7ce97aa28ff7475aeac4cc4eebf76e52"],["C:/lmislm.github.io/public/2019/01/09/2019-01-09/index.html","3bef978d1aa1795fb35d4efa2f5c5264"],["C:/lmislm.github.io/public/2019/01/10/2019-01-10/index.html","04f1375d381405371186bbadf0ba76c3"],["C:/lmislm.github.io/public/2019/01/11/2019-01-11/index.html","3b526da379d4981556de7b972dba4f33"],["C:/lmislm.github.io/public/2019/01/12/2019-01-12/index.html","64e7e0f282c30867828c54cf6d02d7ca"],["C:/lmislm.github.io/public/2019/01/13/2019-01-13/index.html","0567240f0ba14322c9f1084458b9c4cc"],["C:/lmislm.github.io/public/2019/01/14/2019-01-14/index.html","f17255b8db278d5040833965941b080b"],["C:/lmislm.github.io/public/2019/01/15/2019-01-15/index.html","79de69026a4ec9a7ac00fc3f18e1ab19"],["C:/lmislm.github.io/public/2019/01/16/2019-01-16/index.html","fd5a4649253f9f3bb60d4197426d4f44"],["C:/lmislm.github.io/public/2019/01/17/2019-01-17/index.html","15218e80749a576c06d5aefce03fcc3c"],["C:/lmislm.github.io/public/2019/01/18/2019-01-18/index.html","2c78b7841b2917f09e6360f4e19db067"],["C:/lmislm.github.io/public/2019/01/19/2019-01-19/index.html","5415b64d8f66bd779da5d617cf7e9cc5"],["C:/lmislm.github.io/public/2019/01/20/2019-01-20/index.html","6eaf2e2b788c2d4d846d202451e08b07"],["C:/lmislm.github.io/public/2019/01/21/2019-01-21/index.html","31307baa1e5a329c25adf09d7c5f9e25"],["C:/lmislm.github.io/public/2019/01/22/2019-01-22/index.html","35ad6462893ee56c18083e3c668da089"],["C:/lmislm.github.io/public/2019/01/23/2019-01-23/index.html","308d4549ef3a46ca9759dd8007e9cf12"],["C:/lmislm.github.io/public/2019/01/24/2019-01-24/index.html","c83d474fabde6653a380a3b56cb91432"],["C:/lmislm.github.io/public/2019/01/25/2019-01-25/index.html","fb09e7ab351e731dc2c4c7ae0f089f42"],["C:/lmislm.github.io/public/2019/01/26/2019-01-26/index.html","6af2d3212752e20e500990e1442b5811"],["C:/lmislm.github.io/public/2019/01/27/2019-01-27/index.html","5bdbb26d73ffaacb90e0f9e94771a02d"],["C:/lmislm.github.io/public/2019/01/28/2019-01-28/index.html","37d42f48bd8ea1b536b762b8ee2a271c"],["C:/lmislm.github.io/public/2019/01/29/2019-01-29/index.html","17862ecc56d47360938c7f4503d0c966"],["C:/lmislm.github.io/public/2019/01/30/2019-01-30/index.html","91731524b95fdeb71795150e868ad0dc"],["C:/lmislm.github.io/public/2019/01/31/2019-01-31/index.html","a156f96f3b4195d3d7215959bcc3a4f1"],["C:/lmislm.github.io/public/2019/02/01/2019-02-01/index.html","033162c4f4e603d9d32e3bf2b901db00"],["C:/lmislm.github.io/public/2019/02/12/2019-02-12/index.html","5e643653702c0eba904c805ceee3bf52"],["C:/lmislm.github.io/public/2019/02/13/2019-02-13/index.html","8104f44966871d7efcbb91902f009b58"],["C:/lmislm.github.io/public/2019/02/14/2019-02-14/index.html","da4116956e31b5e84dcf52edc1cacaad"],["C:/lmislm.github.io/public/2019/02/15/2019-02-15/index.html","5557b49a05e5cb6ca6cc60ba62098e2e"],["C:/lmislm.github.io/public/2019/02/16/2019-02-16/index.html","8f2e98fd489795cf333bcada069ccb95"],["C:/lmislm.github.io/public/2019/02/17/2019-02-17/index.html","27d18b819f1bed0a0561086fe4223b39"],["C:/lmislm.github.io/public/2019/02/18/2019-02-18/index.html","299049caba7471aa31ee1bfbd0b1bc0b"],["C:/lmislm.github.io/public/2019/02/19/2019-02-19/index.html","28baf88f8499a60768aebe26b92c6314"],["C:/lmislm.github.io/public/2019/02/20/2019-02-20/index.html","525463a70e85cd68cf5968529b9267d8"],["C:/lmislm.github.io/public/2019/02/21/2019-02-21/index.html","c98a9a2383b9e58879b25e44524c76b9"],["C:/lmislm.github.io/public/2019/02/22/2019-02-22/index.html","2688b7aa3de6c816a4b09fd0b425ca11"],["C:/lmislm.github.io/public/2019/02/23/2019-02-23/index.html","39c86d79bda5ff28739247820ef61f23"],["C:/lmislm.github.io/public/2019/02/24/2019-02-24/index.html","18617594a9e568ea7fc8c8555530ad6d"],["C:/lmislm.github.io/public/2019/02/25/2019-02-25/index.html","dfab8416b4f5a88a178819e299627a4d"],["C:/lmislm.github.io/public/2019/02/26/2019-02-26/index.html","6025a2feff2c52786702cca6558ff58d"],["C:/lmislm.github.io/public/2019/02/27/2019-02-27/index.html","2bf5503eed088deed72e6bcdb4fd2cef"],["C:/lmislm.github.io/public/2019/02/28/2019-02-28/index.html","c7175584513901c43f0040e1685ca4d0"],["C:/lmislm.github.io/public/2019/03/01/2019-03-01/index.html","85bd0b5aaf70c1c3471e028e2e6281f1"],["C:/lmislm.github.io/public/2019/03/02/2019-03-02/index.html","4b8eeaf9aa0e63173f79ba1348695b62"],["C:/lmislm.github.io/public/2019/03/03/2019-03-03/index.html","5fe59d37ae31124b464f32dbf7835c0b"],["C:/lmislm.github.io/public/2019/03/04/2019-03-04/index.html","24a6bcd08f1f99b86743a3176c97a2a4"],["C:/lmislm.github.io/public/2019/03/05/2019-03-05/index.html","fe5db372b87d39e8401c262ff86fce59"],["C:/lmislm.github.io/public/2019/03/06/2019-03-06/index.html","3f34f5530140fdad7b91401bd0fe3419"],["C:/lmislm.github.io/public/2019/03/07/2019-03-07/index.html","d0899a2e0ade58531ab6cc93e11a12e9"],["C:/lmislm.github.io/public/2019/03/08/2019-03-08/index.html","93ec77eabf08cc8cabe7394e78f12f57"],["C:/lmislm.github.io/public/2019/03/09/2019-03-09/index.html","0bed6e2744b450792c5c6320bb5b6c16"],["C:/lmislm.github.io/public/2019/03/10/2019-03-10/index.html","e4eee0ececb12e1a3eb1cb5544726c6e"],["C:/lmislm.github.io/public/2019/03/11/2019-03-11/index.html","dbf99d10fbc940ecf225d437691527a3"],["C:/lmislm.github.io/public/2019/03/12/2019-03-12/index.html","f2b453b3e566fcc61d4e76d317327f55"],["C:/lmislm.github.io/public/2019/03/13/2019-03-13/index.html","08a9d4c32a95b998f14c43c33f61214c"],["C:/lmislm.github.io/public/2019/03/14/2019-03-14/index.html","0d16d6180790619ebc41c289315ab4a6"],["C:/lmislm.github.io/public/2019/03/15/2019-03-15/index.html","7a4ae04d526a729ac67956610c9868d3"],["C:/lmislm.github.io/public/2019/03/16/2019-03-1111/index.html","ecb3f9d1669dcf2e5afdecc546fa9e80"],["C:/lmislm.github.io/public/2019/03/16/2019-03-16/index.html","d9242cc36eb284ee4d7f016d8ba1dc66"],["C:/lmislm.github.io/public/2019/03/17/2019-003-17/index.html","4fd332fae71ca600737410888dd7e3b0"],["C:/lmislm.github.io/public/2019/03/18/2019-03-18/index.html","a99b61e46b396c396772b7383f7a6908"],["C:/lmislm.github.io/public/2019/03/19/2019-03-19/index.html","f048545da1bed0fafe08daa3f1f18868"],["C:/lmislm.github.io/public/2019/03/20/2019-03-20/index.html","7493a7ee1aeabda347a7366a2a89a824"],["C:/lmislm.github.io/public/2019/03/21/2019-03-21/index.html","2d4f45259c5d83dac73c2a4f904702e0"],["C:/lmislm.github.io/public/2019/03/22/2019-03-22/index.html","6d4ae24a7d486b6f2d2f0eae2fe85d23"],["C:/lmislm.github.io/public/2019/03/23/2019-03-23/index.html","cb6d2a78fd8432ec6c85d04cea0b0a9f"],["C:/lmislm.github.io/public/2019/03/24/2019-03-24/index.html","54ce658c41c6f80b2355df6e9666ecac"],["C:/lmislm.github.io/public/2019/03/25/2019-03-25/index.html","8f2661c1114bdd47e4be22ee83ed58bd"],["C:/lmislm.github.io/public/2019/03/26/2019-03-26/index.html","68a3eeee14510c19d4c053e313edc582"],["C:/lmislm.github.io/public/2019/03/27/2019-03-27/index.html","f218e50f01d8117fcf36fcce7865fbea"],["C:/lmislm.github.io/public/2019/03/28/2019-03-28/index.html","ef1ac6a6a3e6a711fb719e115e8fa617"],["C:/lmislm.github.io/public/2019/03/29/2019-03-29/index.html","527aca98d50046b16f9c11ddf3fab9fa"],["C:/lmislm.github.io/public/2019/03/30/2019-03-30/index.html","83796c26d97b71804d9921f2842df794"],["C:/lmislm.github.io/public/2019/03/31/2019-03-31/index.html","4f17749e1392c5946affebb98bab6487"],["C:/lmislm.github.io/public/2019/04/01/2019-04-01/index.html","46b92aae135bf24b8be692fc2c4bf74f"],["C:/lmislm.github.io/public/2019/04/02/2019-04-02/index.html","a26a4047645120115af0b9eacf3e20ec"],["C:/lmislm.github.io/public/2019/04/03/2019-04-03/index.html","97d78ef1ce72cddda0a94c31e6864ef7"],["C:/lmislm.github.io/public/2019/04/04/2019-04-04/index.html","25f2352b4b3b2e74cc1ae8088a7545ba"],["C:/lmislm.github.io/public/2019/04/05/2019-04-05/index.html","50675eedc45dcbbbec3b13c94095d65c"],["C:/lmislm.github.io/public/2019/04/06/2019-04-06/index.html","d2a4f408ce6a7276d2e7f0648aefa03f"],["C:/lmislm.github.io/public/2019/04/07/2019-04-07/index.html","fd3d2f0cd75e5efb8de8b09131fb5bcb"],["C:/lmislm.github.io/public/2019/04/08/2019-04-08/index.html","6da017a9658dc066f9ae8e11a92740c9"],["C:/lmislm.github.io/public/2019/04/09/2019-04-09/index.html","38ec92f72412b5af090d5c0999d258e9"],["C:/lmislm.github.io/public/2019/04/10/2019-04-10/index.html","6daced5bdde5a813df17529dcc2da52a"],["C:/lmislm.github.io/public/2019/04/11/2019-04-11/index.html","e84bdec3522001ac35c0947959930a90"],["C:/lmislm.github.io/public/2019/04/12/2019-04-12/index.html","34f9320072ba2bc2882848ed0ee7eeb9"],["C:/lmislm.github.io/public/2019/04/13/2019-04-13/index.html","94f47ba069d23988728f3142dfe60fd9"],["C:/lmislm.github.io/public/2019/04/15/2019-04-15/index.html","20997e58a0d11725cfbd0202befb17ae"],["C:/lmislm.github.io/public/2019/04/16/2019-04-16/index.html","6638c9f2fef2d280aa92eca6639843b0"],["C:/lmislm.github.io/public/2019/04/17/2019-04-17/index.html","242757caed7247953b030e393cc0889c"],["C:/lmislm.github.io/public/2019/04/18/2019-04-18/index.html","3426068f6427467d66bd0895c5f1ff90"],["C:/lmislm.github.io/public/2019/04/19/2019-04-19/index.html","53e47167d5d65bfcb591ac7c303262e2"],["C:/lmislm.github.io/public/2019/04/20/2019-04-20/index.html","880c2f455ba2549222d522cd9ebfe9c2"],["C:/lmislm.github.io/public/2019/04/21/2019-04-21/index.html","b5eed5bddf17633ea961a1b3ec80e296"],["C:/lmislm.github.io/public/2019/04/22/2019-04-22/index.html","0908e1841f89af3492e600c92e723910"],["C:/lmislm.github.io/public/2019/04/23/2019-04-23/index.html","f9720f34ef8dab00733f4b873be34d87"],["C:/lmislm.github.io/public/2019/04/24/2019-04-24/index.html","6135e054d634f842d34eadabbf08f8b3"],["C:/lmislm.github.io/public/2019/04/25/2019-04-25/index.html","04a8529eeb40a521180ad590d63b57b5"],["C:/lmislm.github.io/public/2019/04/27/2019-04-27/index.html","fb4dcaadb1abb694deb77ab13eb00631"],["C:/lmislm.github.io/public/2019/04/28/2019-04-28/index.html","2929cc8908faee71f62e9c494d4471e0"],["C:/lmislm.github.io/public/2019/04/29/2019-04-29/index.html","c0fd23dc540a70ad7737f187c5ad896f"],["C:/lmislm.github.io/public/2019/04/30/2019-04-30/index.html","8f2f9c9091e34dc177f5074a5c992493"],["C:/lmislm.github.io/public/2019/05/01/2019-05-01/index.html","a5d9c2ad4b0d0602bb920a505b3b4877"],["C:/lmislm.github.io/public/2019/05/02/2019-05-02/index.html","85cd6235a8a4d1de878d18a662021c2c"],["C:/lmislm.github.io/public/2019/05/03/2019-05-03/index.html","7df74c171299f7f6435de0edd2e68df5"],["C:/lmislm.github.io/public/2019/05/04/2019-05-04/index.html","88382f254581298bbabaa3f9a4af3c39"],["C:/lmislm.github.io/public/2019/05/05/2019-05-05/index.html","f33abbe4da2393398d4d439a93cd5b19"],["C:/lmislm.github.io/public/2019/05/06/2019-05-06/index.html","bfdde987857dc113a437e34631550f26"],["C:/lmislm.github.io/public/2019/05/07/2019-05-07/index.html","fa4d3e7f447546ef3a3e13784dd8e053"],["C:/lmislm.github.io/public/2019/05/08/2019-05-08/index.html","4164e9aeb2ed7d1a208652e6efa1ce24"],["C:/lmislm.github.io/public/2019/05/09/2019-05-09/index.html","aeca64c3d347adff8e1dcf0d026b7422"],["C:/lmislm.github.io/public/2019/05/10/2019-05-10/index.html","150c35f68505e91525cd871fd9034213"],["C:/lmislm.github.io/public/2019/05/10/2019-05-11/index.html","4dfa9e6ef34d08c02d70ba37ed0ab931"],["C:/lmislm.github.io/public/about/index.html","94a0780049980a49abc242b6661c2e17"],["C:/lmislm.github.io/public/archives/2016/01/index.html","a9d2e58ef1734e614bcd8422b0dfa1eb"],["C:/lmislm.github.io/public/archives/2016/03/index.html","26ca0e37c9dcff3ba9211c7308640fe5"],["C:/lmislm.github.io/public/archives/2016/index.html","97903baffb2ac1da52f2f9dcc072ef33"],["C:/lmislm.github.io/public/archives/2017/01/index.html","2f513e8e2c4990a5d9660bb8ee4f38a1"],["C:/lmislm.github.io/public/archives/2017/03/index.html","89f2dd391c09ffc6a13936ddea4ce323"],["C:/lmislm.github.io/public/archives/2017/04/index.html","175edc36b9e6246ab522e2b615c83fa5"],["C:/lmislm.github.io/public/archives/2017/05/index.html","59fe3d345bca9049a44a6b54814be4a6"],["C:/lmislm.github.io/public/archives/2017/07/index.html","92c9488798297da5ae7bcd3dae88a1b8"],["C:/lmislm.github.io/public/archives/2017/index.html","30c4b412a50bded84ba10450ec0b5fd6"],["C:/lmislm.github.io/public/archives/2017/page/2/index.html","a29f86d1fc227d0e51ce45fb16e5a250"],["C:/lmislm.github.io/public/archives/2018/01/index.html","e173c9ff872bd38d653749d7c9137303"],["C:/lmislm.github.io/public/archives/2018/03/index.html","c193156115d40396594209e39b461971"],["C:/lmislm.github.io/public/archives/2018/12/index.html","7ea13e285b0b80b00f31aa4c70d805d4"],["C:/lmislm.github.io/public/archives/2018/index.html","b32e7bfbf975982734c93cf397785220"],["C:/lmislm.github.io/public/archives/2019/01/index.html","8e03051bd7c2c57927e61e9cdf890d82"],["C:/lmislm.github.io/public/archives/2019/01/page/2/index.html","8ee099225f3a53f7b426c246d5100edc"],["C:/lmislm.github.io/public/archives/2019/01/page/3/index.html","116f5fc49b5c9c6bcfd0856cecec6ec0"],["C:/lmislm.github.io/public/archives/2019/01/page/4/index.html","3cb3b740aa87875c30f25f945e89a374"],["C:/lmislm.github.io/public/archives/2019/02/index.html","0785632be45e0e9f43255ea000529e68"],["C:/lmislm.github.io/public/archives/2019/02/page/2/index.html","e2d1ea68a897c59954c23642da75c73b"],["C:/lmislm.github.io/public/archives/2019/03/index.html","2a51c3ca329341100a1f4a4e72c63200"],["C:/lmislm.github.io/public/archives/2019/03/page/2/index.html","c216d6fb8b5f9486712a6a40824bc4c0"],["C:/lmislm.github.io/public/archives/2019/03/page/3/index.html","d0cd8af0ba7f9c7d1d3cdb02a7a7e743"],["C:/lmislm.github.io/public/archives/2019/03/page/4/index.html","8d989c4bb3c62bd7f0532eeedf50bc9e"],["C:/lmislm.github.io/public/archives/2019/04/index.html","2bdaaa58d8d2b85d45bbc979f24c378b"],["C:/lmislm.github.io/public/archives/2019/04/page/2/index.html","605c4b5f2a4d572e0172339cbc5d98c8"],["C:/lmislm.github.io/public/archives/2019/04/page/3/index.html","e9bd75c34dde3ef27a5ef15d263d7354"],["C:/lmislm.github.io/public/archives/2019/05/index.html","8b6d8f3f822ba035999bbaa573c65c86"],["C:/lmislm.github.io/public/archives/2019/05/page/2/index.html","ee815b3fee532476e7d934aa05474ccc"],["C:/lmislm.github.io/public/archives/2019/index.html","180e95d8a364b45adeffc1c83ccbc672"],["C:/lmislm.github.io/public/archives/2019/page/10/index.html","10a0e5b4ad6cd8ea994a85dbfd4d3281"],["C:/lmislm.github.io/public/archives/2019/page/11/index.html","b3c5eac712dbd58a761f959a208cb8c5"],["C:/lmislm.github.io/public/archives/2019/page/12/index.html","a51ca7341a4439fde80c97b77d4ba46c"],["C:/lmislm.github.io/public/archives/2019/page/2/index.html","4b1ee1151dbde90cc09de2edc461a719"],["C:/lmislm.github.io/public/archives/2019/page/3/index.html","612f35e33a2504b80783b303ec09fa2d"],["C:/lmislm.github.io/public/archives/2019/page/4/index.html","a12ef0a1c380088a0d0ccc5e2528321e"],["C:/lmislm.github.io/public/archives/2019/page/5/index.html","21910993ea258fa7077fa6931a87a3a5"],["C:/lmislm.github.io/public/archives/2019/page/6/index.html","d760125fd75e5b4a91c33ddd382eb77a"],["C:/lmislm.github.io/public/archives/2019/page/7/index.html","8845eb7035ab9d9c9ff0c40330f234a7"],["C:/lmislm.github.io/public/archives/2019/page/8/index.html","c07b0571f535fac2b62741f5d5652ce8"],["C:/lmislm.github.io/public/archives/2019/page/9/index.html","685bb1ab6ad727a9ad5bbd8eaf900c17"],["C:/lmislm.github.io/public/archives/index.html","a26a4fd815cd41681a3c4ffe89688da9"],["C:/lmislm.github.io/public/archives/page/10/index.html","cafa66fa82fc5cfc3f4bd24dfc649b74"],["C:/lmislm.github.io/public/archives/page/11/index.html","f5a23b9d2523d834d6e7e20c4831b6ea"],["C:/lmislm.github.io/public/archives/page/12/index.html","130b2a7766982ecba0a59e6f7527807c"],["C:/lmislm.github.io/public/archives/page/13/index.html","bbb5890a0768b0d1ca00cdd7000c86b7"],["C:/lmislm.github.io/public/archives/page/14/index.html","65415dc3fee124967ab84f7a501d3982"],["C:/lmislm.github.io/public/archives/page/15/index.html","1ffd25c1f6f5227d5f9a15fc26bff2ad"],["C:/lmislm.github.io/public/archives/page/2/index.html","ebbba24ae623ba665979f910436ff7c3"],["C:/lmislm.github.io/public/archives/page/3/index.html","38fec7d1ae459d6e03fb496908765e32"],["C:/lmislm.github.io/public/archives/page/4/index.html","281de0b0582bf5b8d8c4f1b090184444"],["C:/lmislm.github.io/public/archives/page/5/index.html","52e56a7258ad4e9d1b2762466c4ba28d"],["C:/lmislm.github.io/public/archives/page/6/index.html","0c470a1bbe78122c9ee66e0866756b73"],["C:/lmislm.github.io/public/archives/page/7/index.html","bc34a19b0b1dc72b23cb068c725b8afb"],["C:/lmislm.github.io/public/archives/page/8/index.html","5691e95d5acdd02c0aaaafcd530947a6"],["C:/lmislm.github.io/public/archives/page/9/index.html","0b578cf059bd6b73ba4d497eaad06f4c"],["C:/lmislm.github.io/public/baidu_verify_tIlt1AjFQG.html","1b003a5e3424bb02317538cee68ae1be"],["C:/lmislm.github.io/public/categories/index.html","f4844e40dbb518d62d59e84717eb4336"],["C:/lmislm.github.io/public/categories/xx/index.html","0f81226cf58f43433774f7cf5f0635b0"],["C:/lmislm.github.io/public/categories/学习/index.html","f53d1093723e9ad14e8a91c075b0c232"],["C:/lmislm.github.io/public/categories/学习/page/2/index.html","b123def05cf36482e555add0214020e2"],["C:/lmislm.github.io/public/categories/工作/codewars/index.html","e8ca04c3e2230ef204d67a63a87fb856"],["C:/lmislm.github.io/public/categories/工作/index.html","aa72cd0b130100256e55f7d6d646214f"],["C:/lmislm.github.io/public/categories/工作/面试/index.html","c6b553bc5c424b9a7f9d02daa4a57e7f"],["C:/lmislm.github.io/public/categories/技术/index.html","a3ac4edfac08d574e383d3402abb2e85"],["C:/lmislm.github.io/public/categories/技术/page/2/index.html","4cdf2a8fc12010da1834fa88bf52d336"],["C:/lmislm.github.io/public/categories/技术/page/3/index.html","edffd454aef4397b55f03b5f5b620d51"],["C:/lmislm.github.io/public/categories/技术/page/4/index.html","c25c9886519080f5265e329e1e080a48"],["C:/lmislm.github.io/public/categories/技术/page/5/index.html","d40e5c3301d198e7c7e6a8210fbd566b"],["C:/lmislm.github.io/public/categories/技术/page/6/index.html","9fb671afd6372e76566896ac24dec4da"],["C:/lmislm.github.io/public/categories/日常操作/index.html","07f8cfb24b1580cf8575387a05b28853"],["C:/lmislm.github.io/public/categories/生活/index.html","225d87d0a6092f8d77ed22cdea5868d5"],["C:/lmislm.github.io/public/categories/生活/page/2/index.html","04bd82b58da25a5d6dadb3e7cbd3b2f7"],["C:/lmislm.github.io/public/categories/生活/page/3/index.html","34dfc8328ad72d514548009ef96abb34"],["C:/lmislm.github.io/public/categories/生活/page/4/index.html","099e21a18ed9fc739c6db3a380174991"],["C:/lmislm.github.io/public/categories/生活/page/5/index.html","8b8fb28a97de3afc20b11c07570b507a"],["C:/lmislm.github.io/public/categories/生活/page/6/index.html","caca1325dce820f8ca50dc827ecaf2e7"],["C:/lmislm.github.io/public/categories/生活/page/7/index.html","02a07c3cc7d5fc93f413b85c2ef2d309"],["C:/lmislm.github.io/public/css/index.css","7668530211e8433d85d3f55111f4cbe8"],["C:/lmislm.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/gallery/index.html","290f504c26a00ee8e810ef06ec165a49"],["C:/lmislm.github.io/public/google7a4da20de8460552.html","d81cd39805146ef601a430ff07581371"],["C:/lmislm.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/lmislm.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/lmislm.github.io/public/index.html","32b0f293979c44fc25ec653a1a062103"],["C:/lmislm.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["C:/lmislm.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["C:/lmislm.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["C:/lmislm.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/lmislm.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/lmislm.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["C:/lmislm.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/lmislm.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["C:/lmislm.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/lmislm.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/lmislm.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/lmislm.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/lmislm.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/lmislm.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/lmislm.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/lmislm.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/lmislm.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/lmislm.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/lmislm.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/lmislm.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/lmislm.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/lmislm.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/lmislm.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/lmislm.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/lmislm.github.io/public/page/10/index.html","41bde385bf7d86b466df9c06b7ad1180"],["C:/lmislm.github.io/public/page/11/index.html","ee7e03c3d9313a145114f08a8f8ac428"],["C:/lmislm.github.io/public/page/12/index.html","cf8132ea01876797c048fd3da60e8d7e"],["C:/lmislm.github.io/public/page/13/index.html","7e2607c417e309618aec9c237367bce6"],["C:/lmislm.github.io/public/page/14/index.html","d0d9aa92f0c159fff8047614acd29338"],["C:/lmislm.github.io/public/page/15/index.html","a79a03ad08763c590e158fd8d1f985f6"],["C:/lmislm.github.io/public/page/2/index.html","9b277dc9b5ff3e7cd62009359bbd1e3d"],["C:/lmislm.github.io/public/page/3/index.html","9a2436a3bf57e11a0c5e1cac210c2dbe"],["C:/lmislm.github.io/public/page/4/index.html","51c0b006c42c4745f111176228af5663"],["C:/lmislm.github.io/public/page/5/index.html","a75877265916c111e9a2337bdb120c72"],["C:/lmislm.github.io/public/page/6/index.html","89f2f1a252d466944746494ec5e2f1b8"],["C:/lmislm.github.io/public/page/7/index.html","d1f6944428fd500f482427d100e0ab83"],["C:/lmislm.github.io/public/page/8/index.html","74f77017f3c91de9c8d8ef87b76ee438"],["C:/lmislm.github.io/public/page/9/index.html","23178bbbaa55a91d53866f10e55a79a8"],["C:/lmislm.github.io/public/tags/Interview/index.html","6e691b92d8f58760def1e515d6e4888d"],["C:/lmislm.github.io/public/tags/JS/index.html","77c247d8e11fc7dd5cfef6541e8be888"],["C:/lmislm.github.io/public/tags/acm/index.html","275d61070ac27f4ceccb1eac53f1287f"],["C:/lmislm.github.io/public/tags/c/index.html","389166826d3830043bcdf54beb1e9848"],["C:/lmislm.github.io/public/tags/codewars/index.html","0d90ec8f1086dd31f583dfc4887828e3"],["C:/lmislm.github.io/public/tags/css/index.html","d0bdb74ad6d566ee66929d8159a02f9b"],["C:/lmislm.github.io/public/tags/git/index.html","9e1a3069ab156d4e9a525864c017d005"],["C:/lmislm.github.io/public/tags/hexo/index.html","b36775a17268c5d6b412cd0131686bdc"],["C:/lmislm.github.io/public/tags/index.html","d6401dbb601fdac33982f483c3e38f5a"],["C:/lmislm.github.io/public/tags/markdown/index.html","655c45f94e7220f95d3fac3b5e797a98"],["C:/lmislm.github.io/public/tags/poj/index.html","6917f7b56188b96d99145e83a536ca7f"],["C:/lmislm.github.io/public/tags/shell/index.html","70a5a5c49357b76d3fd374c0290406f7"],["C:/lmislm.github.io/public/tags/vue/index.html","139f410cd8ebf74cf42e474a31841627"],["C:/lmislm.github.io/public/tags/xx/index.html","d200afc9a7bb93c7cf136b5462f5c8c6"],["C:/lmislm.github.io/public/tags/前端/index.html","8cfd7ef0602c9ee2726bb799c11336b7"],["C:/lmislm.github.io/public/tags/前端/page/2/index.html","c78c1c4ea6682bfb6fb786b755fc8dd3"],["C:/lmislm.github.io/public/tags/前端/page/3/index.html","84b3a95c196845976b32ec128a7a1ddf"],["C:/lmislm.github.io/public/tags/前端/page/4/index.html","e83d61b16c52526d005ec3f2f5b1c9e4"],["C:/lmislm.github.io/public/tags/前端/page/5/index.html","8562b1d620b44e4eabafc9ff7ad60efe"],["C:/lmislm.github.io/public/tags/前端/page/6/index.html","133c05cbfcd5835c4254752a0e8a0498"],["C:/lmislm.github.io/public/tags/小技巧/index.html","eafcc1e165df570973aec059cf1827e4"],["C:/lmislm.github.io/public/tags/展示/index.html","fb76f0efe64aebf26aa993604bf86263"],["C:/lmislm.github.io/public/tags/工具/index.html","771a840d8f53f89dc675d275c45651d1"],["C:/lmislm.github.io/public/tags/感悟/index.html","2bc2439e09a2575b612bfa85aed106a3"],["C:/lmislm.github.io/public/tags/感悟/page/2/index.html","e834a0321b24b9fb73b7d529668212d5"],["C:/lmislm.github.io/public/tags/感悟/page/3/index.html","2b104cbd9fd5c97b9b6702ca0ef656a1"],["C:/lmislm.github.io/public/tags/感悟/page/4/index.html","c66fb0fa7148348259193214e5b7af21"],["C:/lmislm.github.io/public/tags/感悟/page/5/index.html","ccf2656d6ce674443e726ccd521a4202"],["C:/lmislm.github.io/public/tags/感悟/page/6/index.html","7ff052942900ce34e0256c9c72d406c4"],["C:/lmislm.github.io/public/tags/练习/index.html","df4833ec1fbc23199231533b33ba4730"],["C:/lmislm.github.io/public/tags/编程/index.html","0495b49f2ad05d52afc9766748895d55"],["C:/lmislm.github.io/public/tags/编程/page/2/index.html","3d21ebd91885978ae735fa1c4f7b9ac6"],["C:/lmislm.github.io/public/tags/运维/index.html","c8e41046947e6cf9602daaf294a242db"],["C:/lmislm.github.io/public/uploads/avatar.png","e4b594af5490c78629a4735c87690ed9"]];
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







