import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦尔特堡 Wartburg Castle｜马丁·路德翻译圣经的传奇山城 - 最佳欧洲景点',
  description: '车子在盘山公路上绕行，窗外的图林根森林像一片翻涌的墨绿色海洋。当你转过最后一个弯，瓦尔特堡就那么毫无征兆地闯入眼帘——它不是童话里那种纤细的尖塔，而是一整片赭石色与浅灰色的厚重建筑群，紧紧咬住山脊的背脊，像一头沉睡已久的石兽，沉稳、雄浑，带着不容置疑的历史重量。停车场旁松林的气息清冽冷峻，混着远处山...',
}

export default function WartburgCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '瓦尔特堡', href: '/attractions/wartburg-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦尔特堡・Wartburg Castle・德国・图林根州，爱森纳赫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在盘山公路上绕行，窗外的图林根森林像一片翻涌的墨绿色海洋。当你转过最后一个弯，瓦尔特堡就那么毫无征兆地闯入眼帘——它不是童话里那种纤细的尖塔，而是一整片赭石色与浅灰色的厚重建筑群，紧紧咬住山脊的背脊，像一头沉睡已久的石兽，沉稳、雄浑，带着不容置疑的历史重量。停车场旁松林的气息清冽冷峻，混着远处山谷里飘来的、若有若无的潮湿泥土味。风很大，吹过古老的墙垣缝隙时发出低沉的呜咽，那是只有巨石和岁月才能合奏出的声音。
穿过外墙的门洞，仿佛跨过一道无形的界限。外面的世界陡然安静下来，脚下是历经千年踩踏而光滑温润的石板路。庭院里游客的低声交谈化作嗡嗡的背景音，而你的注意力会被那些细节抓住：一扇罗马式小窗深邃的阴影，墙角一丛在风里顽强摇曳的野花，还有远处钟楼传来沉稳的、告知整点的钟声。在这里，你立刻就能感觉到，这不是一个冰冷的博物馆，而是一个曾经充满呼吸、争吵、祈祷和思考的活生生的地方。它今天依然是德国人精神地图上一个清晰的坐标，学校会组织学生来这里“朝圣”，普通家庭也会在周末来爬山，把它当作一个宏伟的郊游目的地。
而它的核心魅力，就藏在那份极致的反差里。在外，它是权力与防御的象征，是选帝侯的宫殿，坚不可摧。在内，尤其是当你踏入那座简朴得令人心惊的“路德房间”时，它瞬间化身为一个寂静的思想熔炉。想象一下，一个被皇帝通缉、被视为异端的人，躲在这个狭小、寒冷、据说还有鬼怪传说困扰的房间里，仅凭着炽热的信念和一摞希腊文手稿，在十个月里完成了撼动世界的工作。城堡的宏伟与房间的简陋，外部的喧嚣与内部的孤寂，这种撕裂般的对比，正是瓦尔特堡最打动人心的灵魂所在。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在盘山公路上绕行，窗外的图林根森林像一片翻涌的墨绿色海洋。当你转过最后一个弯，瓦尔特堡就那么毫无征兆地闯入眼帘——它不是童话里那种纤细的尖塔，而是一整片赭石色与浅灰色的厚重建筑群，紧紧咬住山脊的背脊，像一头沉睡已久的石兽，沉稳、雄浑，带着不容置疑的历史重量。停车场旁松林的气息清冽冷峻，混着远处山谷里飘来的、若有若无的潮湿泥土味。风很大，吹过古老的墙垣缝隙时发出低沉的呜咽，那是只有巨石和岁月才能合奏出的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过外墙的门洞，仿佛跨过一道无形的界限。外面的世界陡然安静下来，脚下是历经千年踩踏而光滑温润的石板路。庭院里游客的低声交谈化作嗡嗡的背景音，而你的注意力会被那些细节抓住：一扇罗马式小窗深邃的阴影，墙角一丛在风里顽强摇曳的野花，还有远处钟楼传来沉稳的、告知整点的钟声。在这里，你立刻就能感觉到，这不是一个冰冷的博物馆，而是一个曾经充满呼吸、争吵、祈祷和思考的活生生的地方。它今天依然是德国人精神地图上一个清晰的坐标，学校会组织学生来这里“朝圣”，普通家庭也会在周末来爬山，把它当作一个宏伟的郊游目的地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的核心魅力，就藏在那份极致的反差里。在外，它是权力与防御的象征，是选帝侯的宫殿，坚不可摧。在内，尤其是当你踏入那座简朴得令人心惊的“路德房间”时，它瞬间化身为一个寂静的思想熔炉。想象一下，一个被皇帝通缉、被视为异端的人，躲在这个狭小、寒冷、据说还有鬼怪传说困扰的房间里，仅凭着炽热的信念和一摞希腊文手稿，在十个月里完成了撼动世界的工作。城堡的宏伟与房间的简陋，外部的喧嚣与内部的孤寂，这种撕裂般的对比，正是瓦尔特堡最打动人心的灵魂所在。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦尔特堡`} />
                <InfoRow label="英文名称" value={`Wartburg Castle`} />
                <InfoRow label="正式名称" value={`Wartburg Castle`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`图林根州，爱森纳赫`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是德语世界的摇篮，马丁·路德在这里将《新约》译成德文，奠定了现代标准德语的基础，并永久改变了欧洲的宗教与政治格局。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于陡峭山脊之上的庞大城堡复合体，完美融合了中世纪防御工事的威严与19世纪浪漫主义时期精心修复的华丽内部空间。`} />
                <InfoRow label="建筑风格" value={`主体为罗马式与后期哥特式风格，内部经19世纪重大修复后，呈现出浓重的历史主义与浪漫主义风格装饰。`} />
                <InfoRow label="文化价值" value={`它不仅是德国保存最完好的中世纪城堡之一，更是宗教改革、德意志民族语言与文化认同的象征性圣地，被联合国教科文组织列为世界文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡建筑群（含博物馆及路德故居）开放时间通常为每年4月至10月上午9:00至下午17:00；11月至次年3月上午9:00至下午15:30。最后入场时间为闭馆前半小时。城堡庭院全年免费开放至傍晚。请注意，开放时间可能因季节、天气及特殊活动（如音乐会）临时调整，冬季部分区域可能缩短开放时间或关闭维护，出行前务必查阅官网最新公告。`} />
              <InfoRow label="门票价格" value={`标准成人票约为12欧元。优惠票（学生、残障人士等）约为8欧元。家庭票（2成人+最多4名儿童）约为28欧元。6岁以下儿童免费。门票已包含导览器租赁费用（提供多语种，含中文）。请注意，仅参观城堡外围庭院免费，进入主体建筑、博物馆及历史房间必须购票。建议在线预订以避免旺季排队。`} />
              <InfoRow label="地址" value={`Wartburg-Stiftung, Auf der Wartburg 1, 99817 Eisenach, Germany`} />
              <InfoRow label="交通方式" value={`从最近的莱比锡/哈勒机场出发，最佳方式是乘坐火车。在机场火车站搭乘区域性列车（RE或RB线）前往爱森纳赫主火车站，车程约1.5至2小时，班次每小时1-2班。抵达爱森纳赫后，你有两个选择：1. 从火车站正门搭乘10路公交（Wartburg Express）直达城堡停车场，车程约15分钟，班次每小时1-2班。2. 体验经典的“朝圣之路”：从火车站步行约25分钟穿过老城，然后开始沿着标志清晰的森林步道徒步上山，约需40-50分钟，沿途风景极佳。自驾游客可将车停在山顶停车场（收费），然后步行5-10分钟至城堡入口。购买图林根州票乘火车非常划算。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起瓦尔特堡的诞生，带着点传奇的稚气。根据图林根的地方传说，大约在1067年，路德维希伯爵某天外出打猎，被眼前的风景震撼，当即用剑指向山崖宣布：“等着，山崖，你将成为我的城堡！”（Wart’ Berg, du sollst mir eine Burg werden!）瓦尔特堡（Wartburg）的名字便由此而来。当然，历史没那么儿戏，但这座城堡确实是在11世纪由图林根的路德维希伯爵开始兴建，初衷是为了巩固边疆伯爵的领土和权威。它很快成为了图林根领主们的权力中心，坚固的城墙俯瞰着重要的贸易路线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`让瓦尔特堡首次在德意志文化史上留下璀璨一笔的，是1206年那场著名的“瓦尔特堡歌手之争”。据说，当时最伟大的六位中世纪吟游诗人——包括沃尔夫拉姆·冯·埃申巴赫和瓦尔特·冯·德·福格威德——在此聚会，进行诗歌竞赛。这场盛事后来被理查德·瓦格纳写入歌剧《唐豪瑟》，让城堡与德意志艺术之魂紧紧相连。接下来的几个世纪，它随着领主家族的兴衰而沉浮，经历了扩建、围攻与部分的荒废，直到一个意外事件让它重获新生，并彻底改变了它的命运轨道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那就是1521年春天发生的事。马丁·路德因为在沃尔姆斯帝国议会上拒绝收回其著作，被皇帝查理五世宣布为帝国法外之徒。他的支持者，萨克森选帝侯腓特烈三世，精心策划了一场“绑架”，将路德秘密护送到瓦尔特堡保护起来。于是，路德化名“容克约克”，藏身于此。起初的几个月他备受煎熬，失眠、抑郁、剧烈的肠胃不适（据说与城堡的饮食和水质有关）折磨着他，他甚至认为自己被魔鬼侵扰，传说他曾向角落扔墨水瓶来驱魔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但正是在这种极端的孤独与压力下，路德完成了他的不朽功业。从1521年12月到1522年3月，在城堡东南角那座狭小、简朴的房间里，他仅凭伊拉斯谟校订的希腊文《新约》和拉丁文武加大译本作为参考，将整部《新约》翻译成了通俗、有力、能让普通德国人读懂的德语。他的翻译没有拘泥于字句，而是追求意义的鲜活传达，大量采用了黑森和图林根地区的民间口语。这本于1522年9月出版的“九月圣经”，如同投入静水的一颗巨石，涟漪迅速荡开。它让圣经挣脱了拉丁文的束缚和神职人员的垄断，直接触达平民，极大地推动了宗教改革的传播，更关键的是，它为四分五裂的德意志诸邦提供了一种统一的书面语言范本，堪称现代标准德语的奠基之作。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`路德离开后，城堡又经历了衰落。直到19世纪，在德意志民族意识觉醒和浪漫主义思潮的推动下，瓦尔特堡作为“德意志民族圣地”被重新发现。萨克森-魏玛-爱森纳赫的大公卡尔·亚历山大决定对它进行大规模修复和重建。这次修复并非完全还原中世纪原貌，而是充满了浪漫主义的想象，旨在打造一个“理想的”德意志中世纪城堡形象。内部被装饰得富丽堂皇，增添了大量描绘路德生平、歌手之争和历史传说的壁画与马赛克画，特别是那座辉煌的“庆典大厅”。正是这次改造，塑造了我们今天看到的大部分内景，也让瓦尔特堡从一座历史遗迹，升华为一个民族精神和文化认同的纪念碑。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受瓦尔特堡，请务必预留一整天时间。建议在上午9点开馆时抵达，此时光线柔和，旅行团大部队尚未到来，你能享受一段相对清静的时光。整体的游览节奏应该是“由外至内，由宏至微”：先从外部感受其磅礴气势和自然环境，再深入内部探索历史房间与博物馆的丰富细节，最后在宁静的午后，找一个角落坐下消化所见所感。整体深度游览（含徒步、参观内部、博物馆及休闲）需至少5-6小时。下午晚些时候光线最佳，适合在城堡外围和下山步道拍摄全景。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`主楼内部参观必须跟随定时开始的德语或英语导览团（导览器有中文），无法自由停留，请提前在售票处问好下一场次的时间以免久等。山区天气多变，即便夏日也请备一件防风外套和一双绝对舒适防滑的徒步鞋，上下山步道是原始的碎石和树根路。城堡内禁止使用闪光灯拍照，尤其在木结构的房间和博物馆内，请务必遵守。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从爱森纳赫老城方向，选择那条标志清晰的森林徒步小径开始上山，让身体在松涛与鸟鸣中慢慢接近这座山巅堡垒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡正门（Torhall）进入，别急着冲向主楼，先在巨大的外庭院（Vorburg）里走走，感受城墙的厚度与山谷的开阔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过第二道门进入主庭院（Hauptburg），抬头看看那座斑驳的罗马式主楼（Palas），想象中世纪领主从那些窗户后俯瞰他的领地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览路线进入主楼内部，在昏暗的光线中依次穿过骑士厅、宴会厅，惊叹于19世纪修复时添加的那些色彩浓烈、叙事宏大的壁画与马赛克。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后，放慢脚步，寻找那扇不起眼的门，走进那个只有一张木桌、一把椅子和一个火炉的“路德房间”，在这里静静地站上十分钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完路德房间后，下楼去参观内容极其丰富的博物馆，那里收藏着包括路德时期的圣经、武器、家具以及关于“瓦尔特堡歌手之争”的珍贵资料。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，绕到城堡的东侧露台或南侧花园，那里有长椅，可以面对辽阔的图林根森林坐下来，喝口水，让刚才接收的海量信息慢慢沉淀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，不要原路返回，选择另一条下山的小径，比如通往“玛格丽特峡谷”的方向，从不同角度回望城堡，并与上山时的心境做个对比。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`森林小径仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前两小时，从爱森纳赫老城出发的徒步小径上，有几个转弯处可以捕捉到城堡雄踞整个山脊线的经典全景，使用长焦镜头压缩空间感尤为震撼。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`路德房间的书桌与窗`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，自然光会从那个著名的小窗投入室内，将木桌和墙面的纹理照得清晰可见，构图时将窗外的绿色枝叶作为背景，能拍出沉思与生机并存的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主庭院仰拍罗马式主楼`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光会照亮主楼南立面，站在庭院中央仰拍，可以将高耸的石墙、层叠的罗马式拱窗和飘扬的旗帜一同纳入镜头，展现建筑的威严。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`庆典大厅的对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`进入辉煌的庆典大厅后，尽量站到大厅的中轴线上，使用广角镜头拍摄，将两侧精美的廊柱、华丽的壁画天花板和尽头的彩色玻璃窗形成完美的对称构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`东侧露台远眺图林根森林`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，在东侧露台以城堡粗糙的石墙或古老的城垛为前景框架，拍摄远处层层叠叠、在夕阳下染上金边的森林与山谷，画面极具层次感和故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内光线非常昏暗，建议使用大光圈镜头或提高ISO，但请关闭快门声音以示对他人和历史的尊重。拍摄人物与城堡全景时，可以尝试将人放在画面的三分之一处，让城堡作为宏大的背景，讲述“人与历史”的故事。未经许可，请勿拍摄城堡内穿传统服饰的工作人员或其他游客的特写肖像。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山脚家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`位于城堡山脚下徒步起点旁的“森林之家”旅馆，由一家三代人经营，房间窗户正对森林，早晨在阳台上就能听到登山客的问候声，并享用老板娘自制的图林根香肠早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城历史酒店`}</h4>
                  <p className="text-sm text-green-800">{`爱森纳赫老城广场旁的“巴赫酒店”，以曾在此居住的音乐家命名，建筑本身有数百年历史，内部是舒适的现代装修，位置极佳，晚上可以悠闲地探索老城和小酒馆。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色庄园体验`}</h4>
                  <p className="text-sm text-yellow-800">{`距离爱森纳赫约15分钟车程的乡间葡萄酒庄园酒店，房间散落在古老的农庄建筑里，提供自产的雷司令葡萄酒，在宁静的葡萄园中遥望山巅的城堡剪影，别有风味。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷现代之选`}</h4>
                  <p className="text-sm text-purple-800">{`爱森纳赫火车站对面的现代设计酒店，交通无敌方便，尤其适合乘坐火车抵达的旅客，房间简洁明亮，顶楼餐厅可以远眺瓦尔特堡的灯光夜景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`爱森纳赫是一座安全宁静的小城，但旺季（夏季和宗教改革纪念相关假期）住宿非常紧张，务必提前数月预订。如果追求极致宁静，选择远离市中心的乡间住宿，但需考虑晚餐和交通；住在老城则生活便利，夜游氛围好。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开瓦尔特堡时，我的背包里好像不只多了几张照片和一张门票，更装进了一股沉甸甸的、属于思想本身的重量。下山的路似乎比上山时轻快了些，但头脑却仍在那个狭小的石室里徘徊。我一直在想，究竟是什么样的力量，能让一个人在那样的孤独与恐惧中，完成如此浩大而精确的工作？或许答案就藏在城堡本身的双重性里：它既是庇护所，也是囚牢；它用高墙隔绝了外界的追杀，也同时将一个人抛入绝对的自我面对之中。正是这种极致的隔绝，反而孕育了最广阔的连通——通过文字，连通了上帝与凡人，连通了拉丁文的圣殿与德语的市井，最终连通了整个德意志的精神世界。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快得令人眩晕的时代，瓦尔特堡像一座精神的压舱石。它提醒我们，那些真正改变世界的巨变，未必总是发生在喧闹的广场或华丽的宫殿，也可能孕育于一次被迫的停顿、一间简陋的屋室、一段与世隔绝的沉默时光。它不是一个仅供观赏的“景点”，而是一个可以走进去、坐下来、与历史直接对话的空间。在这里，你能触摸到石墙的冰冷，也能感受到五百年前那颗焦灼而火热的心脏的余温。对于任何渴望深度游，希望不仅仅看到风景，更想理解一片土地灵魂纹理的旅人来说，瓦尔特堡不是清单上的一个选项，而是一次必须的抵达，一次对“何为伟大，何为永恒”的亲身丈量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stade-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施塔德老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stade Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trier-amphitheater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trier Amphitheater</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lindau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林道老城区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindau Old Town</p>
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
