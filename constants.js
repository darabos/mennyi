const SZINEK = {
  original: '#458 #fff',
  snail: '#333 #fa0',
  wolverine: '#322 #f43',
  elphaba: '#222 #393',
  barbie: '#fcf #faf',
  snake: '#546 #90a',
  banana: '#ffd #fd4',
  silver: '#ddd #888',
  polarity: '#35a #b48',
  turtle: '#661 #7a4',
  blush: '#a25 #c98',
  punch: '#f76 #289',
  rusty: '#665 #c56',
  neon: '#f4a #6ff',
  pokeball: '#e22 #eee',
  icy: '#9ef #dff',
  blossom: '#d8b #eac',
  blues: '#79d #57b',
  spring: '#ae8 #e9b',
  faint: '#edc #fed',
};

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

const VIDEOS = {
  'kedvenc-Lisa': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-17-15/video/1739778169946950299-video_watermark_95df2c4a4051faff0d1728d1c8f6214c_347797902242738183.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-17-15/video_cover/1739778170413401013-cover_95df2c4a4051faff0d1728d1c8f6214c.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kedvenc-Anna': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-17-15/video/1739777969411903134-video_watermark_25f9305fcc41117acd634b8a6d1e2221_347797761599320065.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-17-15/video_cover/1739777969905744579-cover_25f9305fcc41117acd634b8a6d1e2221.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
  'kedvenc-Judith': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-17-15/video/1739777764022865679-video_watermark_714f259a18fcc669de11b5abdd165e65_347797574176862213.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-17-15/video_cover/1739777764443832060-cover_714f259a18fcc669de11b5abdd165e65.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
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
  'kedvenc-Kenneth': `
    <video class=" h-full object-contain relative z-[5]" src="https://cdn.hailuoai.video/moss/prod/2025-02-18-16/video/1739868361886774049-video_watermark_75bb9d54a5af262ce49bf4e577ea87f2_348177772609155079.mp4" poster="https://cdn.hailuoai.video/moss/prod/2025-02-18-16/video_cover/1739868362516775376-cover_75bb9d54a5af262ce49bf4e577ea87f2.jpeg?x-oss-process=image/resize,w_540/format,webp" width="100%" height="100%" loop="" playsinline="" preload="none" disablepictureinpicture="" disableremoteplayback="" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="" x-webkit-airplay="allow" raw-controls="false" controls360="no"></video>`,
};
