import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普列加马城堡 Predjama Castle｜完全镶嵌在悬崖巨大洞口之中的无坚不摧城堡 - 最佳欧洲景点',
  description: '车子在山谷间的林荫道上拐过一个弯，那座城堡就这样毫无预兆地撞进你的视野。那一瞬间，你一定会下意识地踩一脚刹车，或者至少，发出一声短促的惊叹。它不像其他城堡那样矗立在山巅或平原上，宣告着自己的存在。它更像是那座灰白色石灰岩悬崖本身做的一个梦，一个关于堡垒的、具象化的梦。城堡的四层楼体严丝合缝地镶嵌在那...',
}

export default function PredjamaCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '普列加马城堡', href: '/attractions/predjama-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普列加马城堡・Predjama Castle・斯洛文尼亚・波斯托伊纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在山谷间的林荫道上拐过一个弯，那座城堡就这样毫无预兆地撞进你的视野。那一瞬间，你一定会下意识地踩一脚刹车，或者至少，发出一声短促的惊叹。它不像其他城堡那样矗立在山巅或平原上，宣告着自己的存在。它更像是那座灰白色石灰岩悬崖本身做的一个梦，一个关于堡垒的、具象化的梦。城堡的四层楼体严丝合缝地镶嵌在那个巨大得令人心悸的天然洞口里，仿佛是从岩石内部生长出来的器官，是悬崖的一部分，而非后来的附着物。那种视觉上的冲击力，混合着不可思议与绝对的合理，会让你愣神好久。
停好车，沿着小路走近，感官才逐渐苏醒。空气里是斯洛文尼亚喀斯特地区特有的味道——湿润的泥土、茂密的橡树林释放的清新氧气，还有从巨大洞穴深处隐隐渗出的、带着亘古凉意的岩石气息。你能听到山谷里的风声，掠过城堡塔楼时变得呜咽，还有成群雨燕的尖锐鸣叫，它们把巢筑在人类无法触及的岩缝里。阳光在悬崖凹凸不平的表面上移动，城堡的白色墙面和深色木窗因此忽明忽暗，像在呼吸。你会发现，这座看似孤绝的城堡脚下，其实有着绿意盎然的庭院和小教堂，当地人在周末依然会来这里举行婚礼——它早已从传奇的战场，融入了山谷平静的日常脉搏里。
而它最打动人心的核心魅力，正是这种极致的矛盾与统一。它展现的是人类在绝境中求生的狡黠与顽强。建造者没有选择更容易的平地，反而主动拥抱了这处最险峻、最原始的天然屏障。城堡既是坚固的住所，又是洞穴入口的“门栓”；既向外展示着文艺复兴时期的人文建筑美学，又向内与黑暗、潮湿、迷宫般的原始洞穴系统相连。这种在文明与野蛮、秩序与混沌边界上的精准舞蹈，让你站在它面前时，感受到的不仅是建筑的宏伟，更是一种深入骨髓的生存哲学：如何与不可征服的自然共舞，并从中获得力量。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在山谷间的林荫道上拐过一个弯，那座城堡就这样毫无预兆地撞进你的视野。那一瞬间，你一定会下意识地踩一脚刹车，或者至少，发出一声短促的惊叹。它不像其他城堡那样矗立在山巅或平原上，宣告着自己的存在。它更像是那座灰白色石灰岩悬崖本身做的一个梦，一个关于堡垒的、具象化的梦。城堡的四层楼体严丝合缝地镶嵌在那个巨大得令人心悸的天然洞口里，仿佛是从岩石内部生长出来的器官，是悬崖的一部分，而非后来的附着物。那种视觉上的冲击力，混合着不可思议与绝对的合理，会让你愣神好久。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，沿着小路走近，感官才逐渐苏醒。空气里是斯洛文尼亚喀斯特地区特有的味道——湿润的泥土、茂密的橡树林释放的清新氧气，还有从巨大洞穴深处隐隐渗出的、带着亘古凉意的岩石气息。你能听到山谷里的风声，掠过城堡塔楼时变得呜咽，还有成群雨燕的尖锐鸣叫，它们把巢筑在人类无法触及的岩缝里。阳光在悬崖凹凸不平的表面上移动，城堡的白色墙面和深色木窗因此忽明忽暗，像在呼吸。你会发现，这座看似孤绝的城堡脚下，其实有着绿意盎然的庭院和小教堂，当地人在周末依然会来这里举行婚礼——它早已从传奇的战场，融入了山谷平静的日常脉搏里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的核心魅力，正是这种极致的矛盾与统一。它展现的是人类在绝境中求生的狡黠与顽强。建造者没有选择更容易的平地，反而主动拥抱了这处最险峻、最原始的天然屏障。城堡既是坚固的住所，又是洞穴入口的“门栓”；既向外展示着文艺复兴时期的人文建筑美学，又向内与黑暗、潮湿、迷宫般的原始洞穴系统相连。这种在文明与野蛮、秩序与混沌边界上的精准舞蹈，让你站在它面前时，感受到的不仅是建筑的宏伟，更是一种深入骨髓的生存哲学：如何与不可征服的自然共舞，并从中获得力量。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普列加马城堡`} />
                <InfoRow label="英文名称" value={`Predjama Castle`} />
                <InfoRow label="正式名称" value={`Predjama Castle`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`波斯托伊纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`世界上最大的洞穴城堡，是建筑与自然力量结合的极致典范，被誉为“无法被攻克的堡垒”。`} />
                <InfoRow label="建筑特色" value={`一座四层的文艺复兴风格城堡完全嵌入并依附于一座高达123米的悬崖垂直壁面，其主体结构覆盖并封堵了一个巨大的天然洞穴入口。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主，融合了后期的哥特式防御建筑元素。`} />
                <InfoRow label="文化价值" value={`不仅是军事防御建筑的奇迹，更是人类适应并巧妙利用极端自然环境的智慧与勇气的永恒象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（通常为4月至10月）开放时间为每日9:00至18:00，最后入场时间为17:00；冬季（通常为11月至次年3月）开放时间缩短为每日10:00至16:00，最后入场时间为15:00。具体日期每年可能微调，节假日如圣诞节和元旦可能关闭，建议出行前在其官网核实最新时间表。`} />
              <InfoRow label="门票价格" value={`成人票约为16欧元，学生、青少年及老年优惠票约为13欧元，家庭套票（2大2小）约为45欧元。门票通常包含语音导览器（有多种语言可选）或导览游。与附近的波斯托伊纳溶洞购买联票有折扣。`} />
              <InfoRow label="地址" value={`Predjama 1, 6230 Postojna, Slovenia`} />
              <InfoRow label="交通方式" value={`从斯洛文尼亚首都卢布尔雅那的约热·普奇尼克机场出发，自驾是最方便的方式，沿A1高速公路向南行驶约55公里，车程约45分钟即可到达。若使用公共交通，可从卢布尔雅那中央巴士站乘坐前往波斯托伊纳的巴士，班次频繁，车程约1小时。抵达波斯托伊纳小镇后，需换乘前往城堡的本地接驳巴士（夏季班次较多，冬季减少），或打车前往，车程约15分钟。建议提前查询巴士时刻表或直接预订从卢布尔雅那出发的一日游行程。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于普列加马最早的记载可以追溯到13世纪，但那时它可能只是一个依托洞穴建造的简易防御工事。它的命运与一位传奇人物紧紧捆绑在一起，以至于直到今天，城堡的灵魂仿佛仍是那位桀骜不驯的骑士——埃拉兹姆·柳格爵士。时光倒回15世纪，这位出身贵族的骑士因为一场血仇，杀死了哈布斯堡王朝的一位重要亲戚，从而被迫踏上了逃亡之路。他选择了这座当时就已存在的堡垒作为藏身之所，并非偶然。这里易守难攻，背后是深不可测的洞穴网络，直通山体另一侧，为他提供了绝无仅有的补给通道和逃生路径。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场中世纪最富戏剧性的围攻战在这里上演。哈布斯堡王朝的军队将城堡团团围住，试图困死埃拉兹姆。但他们很快发现，这座堡垒无法用常规方式攻克。每当围城军队为城堡内即将弹尽粮绝而欢欣鼓舞时，他们就会震惊地看到，埃拉兹姆和他的部下竟然从城墙上向他们扔出新鲜的食物，甚至是刚刚摘下的樱桃！传说就来源于此：埃拉兹姆通过秘密的洞穴通道，从山后另一个出口获得补给，他甚至用这些通道戏弄敌人，把新鲜的樱桃扔到敌军阵前，嘲笑他们的无能。这个画面如此生动，以至于“樱桃故事”成为了城堡传说中最浓墨重彩的一笔，也让埃拉兹姆成了斯洛文尼亚民间传说中反抗强权、机智不羁的罗宾汉式英雄。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，传奇往往以悲剧收场。长达一年的围困后，堡垒最终并非被武力攻破，而是毁于一次背叛与巧合。据传说，埃拉兹姆在一个特定的时刻——当他使用城堡最“私密”的设施（那个建在悬崖外部的厕所）时，被内部叛徒用信号指引，被一发精准的炮弹结束了生命。他倒下的那一刻，也标志着旧城堡时代的终结。原来的城堡在战火中严重损毁，几乎成为废墟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今我们看到的壮丽城堡，主要归功于16世纪另一位贵族——奥伯堡的菲利普男爵。他在旧堡垒的废墟和洞穴口之上，重建了这座文艺复兴风格的宫殿。新城堡的设计极具巧思，它完全顺应并利用了悬崖的形态。建筑后部直接与洞穴的岩壁融为一体，房间的墙壁就是天然的岩石，洞穴系统成了城堡天然的“地下室”和秘密通道。此后的几个世纪里，城堡几经易手，从军事要塞逐渐转变为居住庄园，但那份与生俱来的神秘和坚固特质从未改变。它平静地度过了近代的风雨，最终成为斯洛文尼亚最独特的历史遗产，向每一个来访者诉说着关于生存、智慧与背叛的古老故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在下午早些时候（比如两点左右）抵达，这时上午的旅行团大多已经离开，光线从西侧照射过来，非常适合从外部拍摄城堡的壮丽全景。整体深度游览需要大约3到4小时。节奏上，先从外部远观和环绕开始，带着疑问和期待，再进入内部探寻答案，最后以一次轻松的周边漫步收尾。这样的安排能让你由远及近、由表及里地感受城堡的多重魅力，避免一开始就陷入室内复杂历史的细节，从而失去那份初见时的宏观震撼。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部通道狭窄陡峭且潮湿，一定要穿防滑耐磨的平底鞋，高跟鞋在这里是“灾难”。
部分最深处连接洞穴的区域地面不平且非常湿滑，参观时务必紧跟导览路线，注意脚下安全，胆小或患有严重幽闭恐惧症的游客需谨慎进入。
内部空间有限，旺季（7-8月）时可能会拥挤，尽量避开周末或选择早/晚时段入场以获得更好体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先把车停在远处停车场，步行穿过一片林间空地，从那个经典的、能看到城堡与山谷全貌的弯道获得第一眼终身难忘的震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着坡道走近城堡，仰头感受那扑面而来的压迫感，仔细观察建筑是如何像拼图一样嵌入岩壁，并找找那个传说中的“骑士厕所”悬窗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过厚重的木门进入城堡内部，立刻感受温度的骤降和空气中历史凝结的湿度，跟随语音导览从底层厨房和储藏室开始你的时空穿越。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄的旋转石阶往上探索，在二层的骑士大厅里想象埃拉兹姆当年宴饮和策划恶作剧的场景，触摸那些冰冷的石墙和温润的木器。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续攀登到顶层的起居室和卧室，从小窗户望出去，眼前是如画的山谷风景，而背后则是深入岩石的冰冷墙壁，体验这种冰火两重天的居住感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要参加导览或按照指示探索城堡后半部与天然洞穴连接的部位，这里灯光昏暗，道路崎岖，能最直观地理解城堡作为“洞穴之门”的本质。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出城堡主体，别错过旁边的小礼拜堂和庭院，这里是呼吸新鲜空气、平复心情的好地方，也能从另一个柔和的角度观察这座庞然大物。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，如果时间和体力允许，沿着城堡侧后方标识清晰的森林步道走一小段，从更高的侧面和后方俯瞰城堡，你会再次惊叹于它选址的精绝。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`经典全景公路弯道`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点至日落前，阳光正好侧射城堡正面，站在通往城堡的主路那个明显的弯道护栏外，用广角镜头将城堡、悬崖和前景的绿树一同纳入，构图时让城堡位于画面右侧三分线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡脚下仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`任何晴朗的白天，站在城堡正门前方的空地上，将手机或相机尽量贴近地面向上仰拍，可以极致夸张城堡与悬崖的高度和压迫感，拍出建筑直插云霄的视觉冲击力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“骑士厕所”窗洞特写`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡庭院外侧，找到那个从岩壁上突兀伸出的石制小窗台（就是传说中埃拉兹姆被袭击的地方），用长焦镜头拉近拍摄，将其与粗糙的岩壁和部分城堡墙体一同构图，讲述感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔楼窗口框景`}</h4>
                  <p className="text-sm text-gray-700">{`在城堡内部较高层的某个石窗边，以窗口为画框，将对面的葱郁山谷、远山和天空框入其中，形成一幅天然的风景画，记得适当调低曝光以突出窗框的剪影细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`后山森林俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`沿着城堡后的徒步小径向上走约15分钟，有一处相对开阔的平台，在清晨或傍晚柔和的光线下，可以拍到城堡“依偎”在悬崖中的侧面全景，展现其与自然环境浑然一体的关系。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`洞穴内部区域通常禁止使用闪光灯和三脚架（除非有特殊许可），因为强光可能损害敏感的岩壁环境，且空间狭窄容易妨碍他人，高感光度相机在这里更有优势。`}</li>
                <li>• {`拍摄外部全景时，如果遇到阴雨天气不要灰心，悬崖和城堡在雾气缭绕中反而能拍出更加神秘、富有中世纪氛围的独特大片。`}</li>
                <li>• {`使用无人机拍摄前，务必查询并遵守斯洛文尼亚当地关于历史遗迹上空飞行的最新法律法规，通常此类受保护的文化遗产上空是严格禁飞的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在波斯托伊纳小镇中心的老牌家庭旅馆，房间整洁温暖，老板会给你手绘地图并分享只有本地人才知道的观看城堡晨雾的秘密角落。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色生态体验`}</h4>
                  <p className="text-sm text-green-800">{`选择喀斯特地区乡村的“旅游农场”住宿，住在由传统石屋改造的客房里，清晨在鸡鸣中醒来，品尝自家酿制的蜂蜜和奶酪，享受纯粹的斯洛文尼亚乡村宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端历史沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`预订由17世纪庄园改造的精品酒店，距离城堡仅十分钟车程，酒店拥有古老的酒窖、米其林推荐餐厅和宁静的花园，将中世纪的传奇与现代的奢华舒适完美结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然爱好者之选`}</h4>
                  <p className="text-sm text-purple-800">{`入住波斯托伊纳溶洞附近的森林小木屋，白天探索城堡和欧洲最美的溶洞，夜晚在完全没有光污染的露台上，仰望璀璨的星空，聆听森林的夜语。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`波斯托伊纳-普列加马区域是非常成熟且安全的旅游区，但住宿选择相对集中在小镇，夏季和节假日务必提前数周甚至数月预订，尤其是特色住宿非常抢手。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果依赖公共交通，强烈建议选择波斯托伊纳镇上的住宿，那里是交通枢纽；如果自驾，则可以选择更偏远、更有特色的乡村住宿，享受更静谧的夜晚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多乡村住宿提供包含当地特色晚餐的“半膳”套餐，这是品尝斯洛文尼亚传统家庭风味（如“žlikrofi”面饺、炖菜）的绝佳机会，值得体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开普列加马城堡许久，我的脑海里反复回放的，不是某一件具体的展品，也不是某一段详尽的史实，而是那种整体的感觉——一种扎根于大地的、无比坚实的安全感。在这个我们习惯于生活在钢筋水泥森林表层，与土地隔绝的时代，这座城堡给出了一种古老而有力的生存示范：它不像现代摩天楼那样试图对抗重力、刺破天空，而是选择了拥抱、嵌入、成为山体本身。它告诉我们，真正的坚固，或许不是孤高的傲慢，而是深刻地理解你所依凭的环境，并与之合而为一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人都应该来这里。不仅仅是为了一张惊艳朋友圈的照片，更是为了亲身感受这种地理与人文交织出的震撼哲学。它像一个永恒的隐喻，关于如何利用而非掠夺自然，关于在局限中创造无限，关于狡黠的生存智慧如何演变成不朽的建筑诗篇。站在那悬崖与城堡的交接处，你触摸到的不仅是冰冷的岩石和古老的砖石，更是一种人类精神中，面对绝境时那份既脆弱又顽强的永恒回响。这份触动，会沉淀在你的旅行记忆里，成为一种内在的力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gaasbeek-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加斯贝克城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gaasbeek Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bad-harzburg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德哈尔茨堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Harzburg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/carcassonne-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔卡松城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Carcassonne Castle</p>
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
