const bpData = JSON.parse(localStorage.getItem('battlepass') || '{}');
function getSeasonEnd() {
  // 2-month seasons.
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  return new Date(year, month + (month % 2), 0);
}
const seasonEnd = getSeasonEnd();
const seasonStr = seasonEnd.toLocaleDateString('hu');
bpData[seasonStr] ??= {};
const seasonData = bpData[seasonStr];
seasonData.xp ??= 0;
seasonData.stars ??= 0;
seasonData.buys ??= [];
const seasonNum = dateNum(seasonEnd);
localStorage.setItem('battlepass', JSON.stringify(bpData));

const ALL_KEDVENC = `
Anna
Bobby
Dennis
Elijah
George
Henry
Jack
Jacqueline
Judith
Julia
Kenneth
Larry
Lisa
Mark
Mary
Melissa
Pamela
Samantha
Sara
Sean
Walter
`
  .trim()
  .split('\n');
const ALL_KUTATO = `
alien-f
alien-m
axolotl-2-f
axolotl-2-m
axolotl-f
axolotl-m
bat-f
bat-m
black-panther-f
black-panther-m
broccoli-f
broccoli-m
camel-f
camel-m
cat-f
cat-m
catfish-f
catfish-m
cheetah-f
cheetah-m
crow-f
crow-m
dog-f
dog-m
dolphin-f
dolphin-m
dragon-2-f
dragon-2-m
dragon-f
dragon-m
fish-f
fish-m
frog-f
frog-m
lion-f
lion-m
octopus-f
octopus-m
peacock-f
peacock-m
pear-f
pear-m
pepper-f
pepper-m
shark-f
shark-m
sheep-f
sheep-m
slug-f
slug-m
snail-f
snail-m
snake-f
snake-m
turtle-f
turtle-m
wolf-f
wolf-m
zebra-f
zebra-m
`
  .trim()
  .split('\n');

const videos = {
  'kedvenc-Melissa': `
    <video class=" h-full object-contain relative z-[5]" src="https://s21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/se/ai_portal_sgp_m2v_img2video_multi_id_v16_std/d3cff342-0c97-423d-ba94-a424f08be9ec_video.mp4?x-kcdn-pid=112372" poster="https://s21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/special-effect/output/b9037d18-2699-4f9b-84dc-510ed30e3c7d/-1661470459750045041/temp.jpg?x-kcdn-pid=112372" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kedvenc-Bobby': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-16-16/video/1739695769438958202-video_watermark_7c94309196c67dca211f1f95eb75b03e_347452962350387203.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-16-16/video_cover/1739695769939971521-cover_7c94309196c67dca211f1f95eb75b03e.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kedvenc-Elijah': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-16-16/video/1739695616258667490-video_watermark_e9274cf0e90b66592d5ed320b3b93f7e_347452837221724163.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-16-16/video_cover/1739695616984181677-cover_e9274cf0e90b66592d5ed320b3b93f7e.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kedvenc-Sean': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-16-16/video/1739695461062141907-video_watermark_8ade823ef4d20e83e7c0bdbc6645b7df_347452637430214658.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-16-16/video_cover/1739695461524838530-cover_8ade823ef4d20e83e7c0bdbc6645b7df.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-crow-f': `
    <video class=" h-full object-contain relative z-[5]" src="https://s21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/se/ai_portal_sgp_m2v_img2video_multi_id_v16_std/fdf3a0b8-33d1-4376-9a37-0c75f2f74c01_video.mp4?x-kcdn-pid=112372" poster="https://s21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/special-effect/output/ec61e365-2cd5-44d2-b9d9-ca0cf3009937/-4675973686125863841/temp.jpg?x-kcdn-pid=112372" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-snake-f': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-16-05/video/1739653538655336253-video_watermark_20cc5cb554439ab03a950185dbb20a7f_347276917089312776.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-16-05/video_cover/1739653539060255237-cover_20cc5cb554439ab03a950185dbb20a7f.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-frog-f': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-16-05/video/1739653293956615813-video_watermark_5f3d853248827685b74071d0118f8abf_347276031587840004.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-16-05/video_cover/1739653294427815333-cover_5f3d853248827685b74071d0118f8abf.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-axolotl-2-f': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-09-18/video/1739097492444336517-video_watermark_6c7d2a2cfc5aa88b3c7b6d6b8b9b69cf_344926525315358729.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-09-18/video_cover/1739097493074196682-cover_6c7d2a2cfc5aa88b3c7b6d6b8b9b69cf.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-fish-f': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-09-19/video/1739101639098604825-video_watermark_702f28a0afad4bf2c533eb51d2daf748_344926584966758404.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-09-19/video_cover/1739101639476729890-cover_702f28a0afad4bf2c533eb51d2daf748.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-cat-m': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-10-00/video/1739119410811179498-video_watermark_d0ee74c500d7ffe3490a9de644c6cf21_344926629145358342.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-10-00/video_cover/1739119411281564054-cover_d0ee74c500d7ffe3490a9de644c6cf21.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-peacock-m': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-08-09/video/1738977300204891686-video_watermark_815e64f5c3039e2f2b70e5ed3db115cb_344312700715180037.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-08-09/video_cover/1738977300652734128-cover_815e64f5c3039e2f2b70e5ed3db115cb.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-lion-m': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-08-06/video/1738967252663746195-video_watermark_bc955342745aca9d8ba479a2b33c6ff5_344312562936467458.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-08-06/video_cover/1738967253108342149-cover_bc955342745aca9d8ba479a2b33c6ff5.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-snail-f': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-08-01/video/1738950658917617550-video_watermark_895b7ce42b43d55ca97dd2855d2368e1_343648905806016514.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-08-01/video_cover/1738950659333714798-cover_895b7ce42b43d55ca97dd2855d2368e1.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-pepper-m': `
    <video class="h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-07-05/video/1738878421867525681-video_watermark_a50b002f60ec1c8e043b010da15615d5_343648778311782401.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-07-05/video_cover/1738878422319079697-cover_a50b002f60ec1c8e043b010da15615d5.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-sheep-f': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-06-08/video/1738803526773125815-video_watermark_2ca8fb9a37bf5e141c1f94b412ac3000_343086757694394374.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-06-08/video_cover/1738803527121233138-cover_2ca8fb9a37bf5e141c1f94b412ac3000.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-octopus-m': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-05-19/video/1738754498882162814-video_watermark_a9d81f7d99498e3e86b8d14aaae00a6b_343086679093149696.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-05-19/video_cover/1738754499869910256-cover_a9d81f7d99498e3e86b8d14aaae00a6b.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-dolphin-f': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-05-07/video/1738710338304607895-video_watermark_cf8d589f63912f6865fb86603a16bd1d_343086564525789191.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-05-07/video_cover/1738710338702350287-cover_cf8d589f63912f6865fb86603a16bd1d.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-cheetah-f': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-04-15/video/1738652417861949837-video_watermark_2c5b08a4b1b865d402a16e54f09592f1_342741420957974535.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-04-15/video_cover/1738652418471508212-cover_2c5b08a4b1b865d402a16e54f09592f1.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-cheetah-m': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-04-05/video/1738618550924342389-video_watermark_622fcd9170d1e72799f46cc2832fb206_342741365689618441.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-04-05/video_cover/1738618551387144252-cover_622fcd9170d1e72799f46cc2832fb206.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kutato-snail-m': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-03-05/video/1738530361710779029-video_watermark_b5d5ed558bbce0ab06767e6cded481ea_342384086695931911.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-03-05/video_cover/1738530362082914753-cover_b5d5ed558bbce0ab06767e6cded481ea.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kedvenc-Samantha': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-09-08/video/1739060195429857918-video_watermark_bd7c249f38fde341a2f86ae4e6a52417_344742992860962824.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-09-08/video_cover/1739060196119823007-cover_bd7c249f38fde341a2f86ae4e6a52417.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kedvenc-Dennis': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-09-07/video/1739055888917947168-video_watermark_d3f28b18b4c33733e841ec5ac42228d2_344742908983267335.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-09-07/video_cover/1739055889897015672-cover_d3f28b18b4c33733e841ec5ac42228d2.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kedvenc-Henry': `
    <video class=" h-full object-contain relative z-[5]" src="https://s15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/se/ai_portal_sgp_m2v_img2video_multi_id_v16_std/33d8495c-91a7-4ab4-95ec-6f5abd812727_video.mp4" poster="https://s15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/special-effect/output/286d667f-f496-4bda-bb92-927c1b59cb80/990454089428516440/temp.jpg" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
};
const ALL_SZINEK = Object.keys(SZINEK);
ALL_SZINEK.sort();
const STAR = '<img src="images/star-outlined.webp" class="star-icon" />';

function showBattlePass() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  battlepasspage.style.display = 'block';
  const levelsHTML = (levels, unlocked) =>
    levels
      .map(level => {
        const entries = [];
        let prevDone = true;
        for (const e of level) {
          entries.push(bpEntry(e, prevDone && unlocked));
          prevDone = lockerFor(e.kind).includes(e.name);
        }
        const inside = entries.join('<i class="ti ti-chevron-right"></i>');
        return `<div class="bp-level">${inside}</div>`;
      })
      .join('');
  const unspentStars = seasonData.stars - seasonData.buys.length;
  const unspent = unspentStars
    ? Array.from({ length: unspentStars }, () => STAR).join(' ')
    : 'Gyűjts csillagokat! Nézd meg a mai küldetéseket!';
  const levels1 = levelsHTML(bpContents.levels.slice(0, 3), true);
  const levels2 = levelsHTML(bpContents.levels.slice(3, 6), seasonData.stars >= 10);
  const levels3 = levelsHTML(bpContents.levels.slice(6), seasonData.stars >= 20);
  const lockClosed = `<i class="ti ti-lock"></i>`;
  const lockOpen = `<i class="ti ti-lock-open"></i>`;
  const lock10 = seasonData.stars >= 10 ? lockOpen : lockClosed;
  const lock20 = seasonData.stars >= 20 ? lockOpen : lockClosed;
  const hr = `<hr style="flex: 1;"/>`;
  battlepasspagecontent.innerHTML = `
    <h1>Battle Pass</h1>
    <small>${seasonStr}-ig</small>
    <h3>${seasonData.stars} ${STAR}</h3>
    <div class="bordered">
      <div class="header"><div class="header-inside">Elköltendő csillagok</div></div>
      ${unspent}
    </div>
    ${levels1}
    <h3>${lock10} ${Math.min(10, seasonData.stars)}/10 ${STAR}</h3>
    ${levels2}
    <h3>${lock20} ${Math.min(20, seasonData.stars)}/20 ${STAR}</h3>
    ${levels3}
    <div class="explainer">
      <p>Helyes válaszokkal és küldetések teljesítésével csillagokat kapsz. (100,000 XP egy csillag.)
      Ezeket itt válthatod be színekre, kedvencekre és kutatókra. A battle pass soraiból szabadon
      választhatsz, de a soron belül balról jobbra kell haladnod. Az első három sor rögtön elérhető.
      A második három sor 10 csillag megszerzése után nyílik meg. Az utolsó három sorhoz 20 csillag
      kell.</p>
      <p>A korábban már megszerzett jutalmak úgy viselkednek, mintha megvetted volna őket, de nem
      kerülnek csillagba.</p>
      <p>Amikor a battle pass lejár, új battle pass kezdődik. Ilyenkor újra nulla csillaggal kezdesz,
      és ezen az oldalon új jutalmakat találsz majd. Ha nem szereztél meg valamit, amit szerettél volna,
      ne aggódj! Későbbi battle passokban visszatérhet!</p>
    </div>
    <div
      class="explainer"
      style="cursor: pointer; text-align: center; display: flex;"
      onclick="infoszuloknek.style.display='block'">${hr}<span style="padding: 0 10px;">Szülőknek</span>${hr}</div>
    <div class="explainer" id="infoszuloknek" style="display: none;">
      <p>A "battle pass" rendszert azért csinálják a játékok, hogy a gyerekek minél többet játsszanak
      velük és minél több pénzt befizessenek. De miért ne használhatnánk arra, hogy minél többet
      tanuljanak?
      </p>
      <p>A játék teljesen a böngészőben fut, és nem küld el semmilyen adatot. Azt sem tudom, hogy
      hányan játszanak vele. Mivel minden adatot a böngésző tárol, elveszhet az állásotok, ha például
      új telefont vesztek. Ha szeretnétek az állást átmenteni egy másik eszközre, akkor szóljatok!
      </p>
      <p>A képeket a <a href="https://nv-sana.mit.edu/">Sana 1.6B</a> model készítette.</p>
      <p>— Dani</p>
    </div>
    `;
  document.querySelectorAll('.buy-popup').forEach(e => {
    e.onclick = () => {
      const stars = Math.min(1, seasonData.stars - seasonData.buys.length);
      if (stars === 0) return;
      const key = e.dataset.key;
      for (const e of bpContents.levels.flat()) {
        if (`${e.kind}-${e.name}` === key) {
          seasonData.buys.push(key);
          localStorage.setItem('battlepass', JSON.stringify(bpData));
          const category = lockerFor(e.kind);
          category.push(e.name);
          localStorage.setItem('locker', JSON.stringify(lockerData));
          showBattlePass();
          showXp();
        }
      }
    };
  });
  activateVideos();
}

function activateVideos() {
  document.querySelectorAll('video').forEach(vid => {
    vid.onmouseover = () => vid.play();
    vid.onmouseout = () => vid.pause();
    let p = vid;
    while (p.tabIndex === -1 || p.tagName === 'VIDEO') {
      p = p.parentElement;
      if (p === undefined) return;
    }
    p.onfocus = () => vid.play();
    p.onblur = () => vid.pause();
  });
}

function lockerFor(kind) {
  if (kind === 'szin') {
    return lockerData.szinek;
  } else if (kind === 'kedvenc') {
    return lockerData.kedvencek;
  } else if (kind === 'kutato') {
    return lockerData.kutatok;
  }
}

function avatarContents(e) {
  const key = `${e.kind}-${e.name}`;
  if (videos[key] !== undefined) {
    return videos[key];
  } else if (e.kind == 'kutato') {
    return `<img src="images/space-animals-sana/${e.name}.jpeg" width="150" />`;
  } else if (e.kind == 'kedvenc') {
    return `<img src="images/furballs-sana/${e.name}.jpg" width="150" />`;
  } else if (e.kind == 'szin') {
    const [c1, c2] = SZINEK[e.name].split(' ');
    return `<div class="text" style="background: linear-gradient(135deg, ${c1} 50%, ${c2} 50%)"></div>`;
  }
}

function bpEntry(e, prevDone) {
  const key = `${e.kind}-${e.name}`;
  const category = lockerFor(e.kind);
  const has = category.includes(e.name);
  const bought = seasonData.buys.includes(key);
  const cls = (has ? 'owned' : 'buyable') + (bought ? ' bought' : '');
  const mark = bought ? STAR : has ? '<i class="ti ti-circle-check"></i>' : '';
  const decor = mark ? `<div class="decor">${mark}</div>` : '';
  const inside = avatarContents(e);
  const stars = Math.min(1, seasonData.stars - seasonData.buys.length);
  const buyLabel = !prevDone ? '<i class="ti ti-lock"></i>' : !stars ? '' : 'Kérem!';
  const dataKey = stars && prevDone ? `data-key="${key}"` : '';
  const buyPopup = `<div class="buy-popup" ${dataKey}>${stars}/1 ${STAR} ${buyLabel}</div>`;
  return `
    <div class="avatar-holder ${cls}" tabindex="0">
      ${buyPopup}
      <div class="avatar ${cls}">${inside}${decor}</div>
    </div>`;
}

function getBattlePassContents() {
  const rng = splitmix32(seasonNum);
  const bp = { levels: [] };
  for (let level = 0; level < 9; ++level) {
    const row = [];
    while (true) {
      const choice = ALL_SZINEK[rng(ALL_SZINEK.length)];
      if (bp.levels.findIndex(level => level.findIndex(row => row.name === choice) !== -1) !== -1) continue;
      row.push({ kind: 'szin', name: choice, level, rank: 0 });
      break;
    }
    while (true) {
      const choice = ALL_KEDVENC[rng(ALL_KEDVENC.length)];
      if (bp.levels.findIndex(level => level.findIndex(row => row.name === choice) !== -1) !== -1) continue;
      row.push({ kind: 'kedvenc', name: choice, level, rank: 1 });
      break;
    }
    while (true) {
      const choice = ALL_KUTATO[rng(ALL_KUTATO.length)];
      if (bp.levels.findIndex(level => level.findIndex(row => row.name === choice) !== -1) !== -1) continue;
      row.push({ kind: 'kutato', name: choice, level, rank: 2 });
      break;
    }
    bp.levels.push(row);
  }
  return bp;
}
const bpContents = getBattlePassContents();
const bpKeys = Object.fromEntries(bpContents.levels.flat().map(e => [`${e.kind}-${e.name}`, e]));
seasonData.buys = seasonData.buys.filter(e => bpKeys[e]);
localStorage.setItem('battlepass', JSON.stringify(bpData));

const floatQueue = [];

function renderFloatOff(element, msg) {
  const floater = document.createElement('div');
  floater.classList.add('floater');
  floater.innerHTML = msg;
  document.body.appendChild(floater);
  const rect = element.getBoundingClientRect();
  floater.style.left = `${rect.left / 2 + rect.right / 2 + window.scrollX - floater.offsetWidth / 2}px`;
  floater.style.top = `${rect.top + window.scrollY}px`;
  setTimeout(() => {
    floater.remove();
  }, 1000);
  return floater;
}
function floatOff(element, msg) {
  floatQueue.push({ element, msg });
  if (floatQueue.length === 1) {
    floatNext();
  }
}
function floatNext() {
  if (floatQueue.length === 0) return;
  const { element, msg } = floatQueue[0];
  renderFloatOff(element, msg);
  setTimeout(() => {
    floatQueue.shift();
    floatNext();
  }, 500);
}

function xpEvent(xp, msg) {
  floatOff(valasz, msg || `+${xp} XP`);
  seasonData.xp += xp;
  while (seasonData.xp > 100000) {
    seasonData.xp -= 100000;
    seasonData.stars += 1;
    floatOff(bpstatus, STAR);
  }
  localStorage.setItem('battlepass', JSON.stringify(bpData));
  showXp();
}
function showXp() {
  document.querySelectorAll('.bp-bar-inside').forEach(e => {
    e.style.width = `${seasonData.xp / 1000}%`;
  });
  document.querySelectorAll('.bp-stars').forEach(e => {
    e.textContent = seasonData.stars;
  });
  document.querySelectorAll('.bp-unspent-stars').forEach(e => {
    const s = seasonData.stars - seasonData.buys.length;
    e.style.visibility = s ? 'visible' : 'hidden';
    e.textContent = s;
  });
}
showXp();

bpstatus.onclick = showBattlePass;
document.querySelectorAll('.ti-stars').forEach(e => {
  e.onclick = showBattlePass;
});
