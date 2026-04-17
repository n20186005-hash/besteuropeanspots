import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '胡内多阿拉科尔文城堡 Corvin Castle｜欧洲最后的骑士城堡，特兰西瓦尼亚的哥特史诗 - 最佳欧洲景点',
  description: '想象一下，你从胡内多阿拉略显沉闷的现代街区拐过一个弯，然后，它就这样毫无预警地撞进你的视野——不是出现在明信片上，而是磅礴地、沉默地耸立在你面前。科尔文城堡。第一眼，你甚至不会觉得它美，那是一种纯粹的、压倒性的“重”。深色的石墙被数个世纪的煤烟与风雨浸染成近乎墨色，数十个尖顶、雉堞和塔楼像一顶荆棘王...',
}

export default function CorvinCastleHunedoaraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '胡内多阿拉科尔文城堡', href: '/attractions/corvin-castle-hunedoara' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`胡内多阿拉科尔文城堡・Corvin Castle・罗马尼亚・胡内多阿拉县（胡内多阿拉市）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你从胡内多阿拉略显沉闷的现代街区拐过一个弯，然后，它就这样毫无预警地撞进你的视野——不是出现在明信片上，而是磅礴地、沉默地耸立在你面前。科尔文城堡。第一眼，你甚至不会觉得它美，那是一种纯粹的、压倒性的“重”。深色的石墙被数个世纪的煤烟与风雨浸染成近乎墨色，数十个尖顶、雉堞和塔楼像一顶荆棘王冠，狠狠地刺向特兰西瓦尼亚铅灰色的天空。脚下那座木制吊桥吱呀作响，下面是早已干涸但依然深邃的护城河，仿佛巨兽张开的嘴。空气中有一股特殊的味道，混合了古老石头潮湿的土腥气、远处森林传来的松针清冽，还有一丝若有若无的、来自城堡内部陈年木料和铸铁的金属冷香。
走进庭院，世界忽然从压迫变成了庄严。你会不自觉地压低声音，因为四周石墙把一切声音都吸走了，只留下你自己脚步的回响，哒，哒，哒，像在叩问历史。阳光在这里成了奢侈的访客，只有在正午时分，它才能艰难地挤过高塔之间的缝隙，在中央庭院斑驳的地面上投下几块锐利的光斑。但正是在这明暗交织中，城堡活了。你看那些石窗上的雕刻，虽然被岁月磨平了棱角，但依然能分辨出骑士的纹章；你触摸墙壁，冰凉之下仿佛能感觉到当年石匠手掌的温度。这里不是一个死去的博物馆，它是一头睡着了的巨兽，呼吸缓慢而沉重。
在当地人心里，这座城堡不是景点，而是他们生活背景里永恒的一部分。孩子们在它的阴影下踢球，老人们坐在对面的长椅上，一抬头就能看见它，眼神里没有游客的惊叹，而是一种熟稔的平静。它是这个工业小城的骄傲，也是它的灵魂。傍晚时分，当城堡的轮廓灯亮起，温暖的橘光勾勒出它锯齿状的剪影，你会看到情侣在护城河边散步，那光芒倒映在偶尔积了雨水的河床里，破碎而璀璨。这时你才明白，这座城堡最打动人的，不是它的宏伟，而是它在无情时光中幸存下来的那种倔强生命力，以及它与日常生活的奇异融合——既是史诗，也是家园。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你从胡内多阿拉略显沉闷的现代街区拐过一个弯，然后，它就这样毫无预警地撞进你的视野——不是出现在明信片上，而是磅礴地、沉默地耸立在你面前。科尔文城堡。第一眼，你甚至不会觉得它美，那是一种纯粹的、压倒性的“重”。深色的石墙被数个世纪的煤烟与风雨浸染成近乎墨色，数十个尖顶、雉堞和塔楼像一顶荆棘王冠，狠狠地刺向特兰西瓦尼亚铅灰色的天空。脚下那座木制吊桥吱呀作响，下面是早已干涸但依然深邃的护城河，仿佛巨兽张开的嘴。空气中有一股特殊的味道，混合了古老石头潮湿的土腥气、远处森林传来的松针清冽，还有一丝若有若无的、来自城堡内部陈年木料和铸铁的金属冷香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进庭院，世界忽然从压迫变成了庄严。你会不自觉地压低声音，因为四周石墙把一切声音都吸走了，只留下你自己脚步的回响，哒，哒，哒，像在叩问历史。阳光在这里成了奢侈的访客，只有在正午时分，它才能艰难地挤过高塔之间的缝隙，在中央庭院斑驳的地面上投下几块锐利的光斑。但正是在这明暗交织中，城堡活了。你看那些石窗上的雕刻，虽然被岁月磨平了棱角，但依然能分辨出骑士的纹章；你触摸墙壁，冰凉之下仿佛能感觉到当年石匠手掌的温度。这里不是一个死去的博物馆，它是一头睡着了的巨兽，呼吸缓慢而沉重。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人心里，这座城堡不是景点，而是他们生活背景里永恒的一部分。孩子们在它的阴影下踢球，老人们坐在对面的长椅上，一抬头就能看见它，眼神里没有游客的惊叹，而是一种熟稔的平静。它是这个工业小城的骄傲，也是它的灵魂。傍晚时分，当城堡的轮廓灯亮起，温暖的橘光勾勒出它锯齿状的剪影，你会看到情侣在护城河边散步，那光芒倒映在偶尔积了雨水的河床里，破碎而璀璨。这时你才明白，这座城堡最打动人的，不是它的宏伟，而是它在无情时光中幸存下来的那种倔强生命力，以及它与日常生活的奇异融合——既是史诗，也是家园。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`胡内多阿拉科尔文城堡`} />
                <InfoRow label="英文名称" value={`Corvin Castle`} />
                <InfoRow label="正式名称" value={`Corvin Castle`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`胡内多阿拉县（胡内多阿拉市）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`特兰西瓦尼亚地区乃至整个东南欧中世纪晚期保存最完整、最宏伟的哥特式-文艺复兴式城堡之一，是罗马尼亚民族英雄与王室传奇的象征性堡垒。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于岩石之上、被护城河环绕的庞大防御工事，集高耸的塔楼、宏大的宫殿、幽深的庭院与坚固的城墙于一体，内部拥有令人惊叹的骑士大厅、哥特式画廊和古老的礼拜堂。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式风格为核心，并融合了文艺复兴式元素，见证了从中世纪军事要塞向文艺复兴时期贵族官邸的过渡。`} />
                <InfoRow label="文化价值" value={`不仅是建筑瑰宝，更是罗马尼亚民族认同与文化记忆的核心地标，其形象与传奇深度嵌入了该国的历史叙事与民间传说之中。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月1日至9月30日）开放时间为周二至周日，上午9:00至下午6:00，最后入场时间为下午5:15。冬季（10月1日至3月31日）开放时间为周二至周日，上午9:00至下午5:00，最后入场时间为下午4:15。每周一闭馆（除非周一是法定节假日）。每年1月1日、复活节和12月25日闭馆。部分节假日开放时间可能缩短，建议行前在其官方网站核实。`} />
              <InfoRow label="门票价格" value={`成人票：40列伊。学生票（需持有效国际学生证）：20列伊。儿童票（7-18岁）：10列伊。7岁以下儿童免费。家庭套票（2名成人+2名儿童）：90列伊。持有罗马尼亚文化遗产卡可免费进入。如需在城堡内进行专业摄影或摄像（商业用途），需额外购买许可，价格约为100列伊。`} />
              <InfoRow label="地址" value={`Curtea Corvineștilor 1-3, Hunedoara 331141, Romania`} />
              <InfoRow label="交通方式" value={`最近的国际机场是锡比乌国际机场（SBZ）和克卢日-纳波卡国际机场（CLJ）。从锡比乌机场出发：可搭乘机场巴士至锡比乌火车站，换乘前往胡内多阿拉的火车，车程约1小时40分钟至2小时，班次频繁。从克卢日机场出发：乘坐机场巴士至克卢日火车站，换乘火车前往胡内多阿拉，车程约2.5小时。抵达胡内多阿拉火车站后，城堡位于市中心，步行约15-20分钟即可到达，沿途有清晰路标。也可在火车站前乘坐本地1路或2路公交车，在“Centru”站下车后步行5分钟。建议使用本地火车票务APP（如“Infofer”）查询实时班次，现场购票即可。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从15世纪讲起，那时的特兰西瓦尼亚是匈牙利王国抵御奥斯曼帝国的最前线，烽火连天。1440年，一位名叫约翰·匈雅提的将领被匈牙利国王授予了胡内多阿拉这片土地。他不是世袭贵族，而是凭借赫赫战功一步步爬上权力顶峰的“白手起家者”。也许正因为如此，他需要一座配得上其野心与地位的堡垒。于是，他看中了这里一座更古老的皇家堡垒遗址，开始了一场浩大的工程。约翰·匈雅提想要的不仅仅是一座军事要塞，更是一个权力中心，一个足以彰显其家族荣耀的象征。城堡的核心——那令人过目不忘的骑士大厅、高耸的“莫因尖塔”以及坚固的城墙，都在他的主导下拔地而起。然而，他本人并未能亲眼见到城堡完全建成，便在与奥斯曼人的征战中去逝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让城堡沾染上文艺复兴气息与王者光辉的，是他的儿子——马蒂亚斯·科尔温。这位后来成为匈牙利国王的天才统治者，在城堡中度过了部分童年。登基后，他将城堡大规模扩建和美化。哥特式的棱角被柔和了些许，文艺复兴式的窗户和画廊被引入，城堡从单纯的防御工事，开始向一座舒适、甚至带有艺术气息的王家宫殿演变。马蒂亚斯国王的故事为城堡蒙上传奇色彩，传说他那被囚禁于此的弟弟弗拉德的幽灵仍在塔楼中游荡，而“科尔文”（Corvin）这个姓氏，据说源于家族纹章上的乌鸦（拉丁语“corvus”），乌鸦叼着金戒指的传说更是家喻户晓。这个时期，是城堡黄金时代的开端。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，黄金时代总是短暂。随着马蒂亚斯国王去世和奥斯曼帝国的持续压力，城堡在16至17世纪不断在战火中易手、受损、修复。它先后被特兰西瓦尼亚亲王、哈布斯堡王朝的将领占据，每一次都根据新的军事需求进行改造，比如加建了更具威慑力的堡垒和炮台。城堡见证了太多阴谋、囚禁与短暂的辉煌。18世纪后，随着军事价值的下降和所有权频繁更迭，城堡逐渐被遗忘了。它一度沦为仓库，甚至成为一家木材厂的厂房，那些精美的厅堂堆满了杂物，壁画被煤烟覆盖，护城河成了垃圾场。它像一个被废弃的巨人，在工业革命的烟尘中沉睡，几乎被人遗忘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转机发生在19世纪末20世纪初，伴随着罗马尼亚民族意识的觉醒，这座象征着本土历史与抵抗精神的城堡被重新“发现”。它不再仅仅是匈牙利贵族的遗产，更是罗马尼亚土地上共同的文明见证。一系列漫长而审慎的修复工程开始了，工程断断续续贯穿了整个20世纪。修复者们小心翼翼地在历史的层层积尘下，寻找最初的样貌，加固濒临倒塌的结构，但并未试图将它还原成一个“崭新”的假古董。所以你今天看到的墙壁上，新旧石料对比鲜明，伤疤与补丁并存，这反而增加了它的真实感和叙事厚度。如今，它作为罗马尼亚国家文化遗产的至宝，继续向每一个来访者诉说着关于权力、艺术、战争与复兴的复杂史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味科尔文城堡的层次，建议安排至少3到4小时的沉浸式游览。最佳抵达时间是工作日上午10点前，能避开大巴旅行团，享受相对静谧的氛围。游览节奏宜慢不宜快，因为城堡的魅力在于细节和气氛，而非走马观花。路线设计上，遵循由外及内、由下至上的逻辑：先从外部整体把握其巍峨的防御体系，再进入内部感受宫廷生活与军事设施的交织，最后登高望远，将历史与景观尽收眼底。这样的安排能让你逐步深入城堡的“内心”，感受它从防御堡垒到生活空间的多重身份。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`部分塔楼的螺旋石梯非常陡峭且狭窄，务必穿防滑舒适的鞋子，并注意脚下安全。
城堡内部许多区域没有暖气，即使夏季也阴凉潮湿，建议带一件薄外套。
景区内指示牌有时不够详尽，可以花点小钱在入口租借语音导览或请一位当地导游，他们的故事能让冰冷的石头变得鲜活。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门那座令人心颤的吱呀作响的古老木吊桥开始你的旅程，感受跨越护城河进入另一个时空的仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往城堡的心脏——恢弘的骑士大厅，仰头凝视那令人眩晕的网状拱顶和巨大的石砌壁炉，想象这里曾举行的盛宴与会议。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大厅一侧的台阶下行，探索阴冷而神秘的地下室与牢房区域，那里昏暗的光线和厚重的石墙诉说着截然不同的、关于囚禁与惩罚的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着螺旋石梯攀上北侧的“莫因尖塔”，在狭窄的箭孔和射击口旁驻足，体会守卫者当年的视野与紧张感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过一系列展示中世纪武器、铠甲和刑具的展厅，那些冰冷的铁器仿佛还带着旧日的寒气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入装饰着文艺复兴式石窗和残留壁画的王室起居室区域，在相对明亮的空间里寻找一丝往日宫廷生活的精致痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后来到开阔的内庭院，绕着回廊走一圈，从不同角度欣赏建筑群的组合，并在角落那口深不见底的古井旁聆听回音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，一定要从城堡外侧绕行半周，从河对岸或远处的小坡上回望城堡全景，完成你对这座建筑巨兽的最终印象定格。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡正门吊桥前方`}</h4>
                  <p className="text-sm text-gray-700">{`下午三至五点，阳光从西侧斜射，能照亮城堡主立面并拉出长长的吊桥影子，使用广角镜头低角度拍摄，能凸显城堡的压迫感与入口的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`骑士大厅内部中央`}</h4>
                  <p className="text-sm text-gray-700">{`需要等待室内灯光全开（通常是上午十点后），站在大厅一端用中焦段拍摄，将华丽的拱顶、高大的窗户和石柱一同纳入画面，营造神圣空旷的殿堂感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`北侧“莫因尖塔”中层射击孔内`}</h4>
                  <p className="text-sm text-gray-700">{`透过厚厚的石墙孔洞向外拍摄，将城堡的庭院、其他塔楼或远处的城镇作为背景框住，形成天然的画框构图，极具叙事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`内庭院东南角仰望`}</h4>
                  <p className="text-sm text-gray-700">{`午后时分，仰拍角度能将高耸的塔楼、错综的回廊与一线天空同时捕捉，展现建筑结构的复杂与雄伟。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡南侧外围的草坪或小路上`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，从这里可以拍到城堡完整的倒影（如果护城河有水）以及被金色余晖染红的塔楼剪影，是最具浪漫和史诗感的全景机位。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内允许不使用闪光灯和三脚架的拍照，但部分特别脆弱的壁画区域可能有禁止拍摄标志，请务必遵守。`}</li>
                <li>• {`城堡石质结构复杂，光影对比强烈，建议使用RAW格式拍摄以便后期调整阴影和高光细节。`}</li>
                <li>• {`清晨或雨雾天气能拍出极具氛围感的冷峻大片，但需注意设备防潮。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于胡内多阿拉市中心步行街上的“中心公园旅馆”，房间简洁干净，老板热情好客，下楼就有超市和本地餐馆，从窗户就能望见城堡的塔尖。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`坐落在城堡附近安静街区里的“城堡景观”民宿，由一栋百年老宅改建，木地板嘎吱作响却充满温情，主人会为你准备地道的家庭早餐，并在客厅壁炉边分享鲜为人知的城堡传说。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约20分钟，入住位于附近山林中的“特兰西瓦尼亚伯爵庄园”精品酒店，这座19世纪的贵族别墅提供极致的宁静、水疗服务和用本地食材烹调的饕餮大餐，是探索城堡后完美舒缓身心的避世之所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷中转`}</h4>
                  <p className="text-sm text-purple-800">{`若计划次日前往锡比乌或阿尔巴尤利亚，可以选择入住胡内多阿拉火车站旁的现代商务酒店，交通无比便利，且通常能免费停车。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`胡内多阿拉市区不大，治安尚可，但夜间娱乐较少，住宿主要为了服务城堡游览，建议提前预订，尤其是夏季周末。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果追求更丰富的夜生活和餐饮选择，可以考虑住在车程约一小时的锡比乌，但这样就无法体验清晨或傍晚城堡近乎私享的宁静时刻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多本地民宿不提供24小时前台服务，建议提前沟通确认入住时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科尔文城堡很久以后，我的脑海里反复出现的，不是某一块具体的石雕，也不是某一段详实的历史，而是一种混合的感觉——是吊桥的吱呀声，是地牢里的阴冷，是透过高高的窗棂看到的那一小片流动的云，是触摸墙壁时指尖传来的、穿越了五百年的冰凉与粗糙。这座城堡教会我的一件事是：真正的历史遗迹，从来不是光滑完美、供人膜拜的标本。它是伤痕累累的，是层叠堆积的，它的每一道裂缝、每一处修补、甚至每一块颜色不同的新石头，都是它生命的一部分，都在讲述幸存的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速消费和完美体验的时代，科尔文城堡像一位沉默而严肃的智者。它不讨好你，不急于向你展示所有，甚至有些角落显得昏暗、不便、难以解读。但正是这种“不妥协”，让每一次发现都变成了真正的探险，让每一丝感悟都发自内心。它提醒我们，旅行的意义有时不在于看到了多少美景，而在于我们是否愿意慢下来，去倾听石头的声音，去感受时间的重量，去想象不同时代的人们在同一片天空下的恐惧、荣耀与梦想。如果你也厌倦了浮光掠影，渴望一场能与灵魂对话的旅行，那么，请来胡内多阿拉，让这座最后的骑士城堡，给你一个坚实而悠长的拥抱。它等了你五百年，不在乎多等一会儿，只为与你分享一段真正的、有血有肉的时间。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/burg-rheinstein" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱茵施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burg Rheinstein</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-malbrouck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Malbrouck</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spis-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯皮什城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiš Castle</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
