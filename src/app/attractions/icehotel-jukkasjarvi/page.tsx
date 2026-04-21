import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '尤卡斯耶尔维冰酒店 Icehotel｜每年冬天用托尔讷河冰重建的奇幻冰雪艺术堡垒 - 最佳欧洲景点',
  description: '车子在茫茫雪原上开了好一阵，当那座在低垂的北极光下泛着幽幽蓝光的巨大冰雪建筑出现在眼前时，我几乎忘记了呼吸。它不是我想象中棱角分明的“房子”，更像一头从雪地里长出来的、温顺而晶莹的巨兽。走近了，手触摸到入口拱门的冰墙，那股沁入骨髓的、干净纯粹的冷，瞬间让你清醒——这不是梦境，你正站在一个用冬天本身建',
}

export default function IcehotelJukkasjarviPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞典', href: '/destinations/sweden' },
            { label: '尤卡斯耶尔维（基律纳市）', href: '/destinations/sweden' },
            { label: '尤卡斯耶尔维冰酒店', href: '/attractions/icehotel-jukkasjarvi' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`尤卡斯耶尔维冰酒店・Icehotel・瑞典・尤卡斯耶尔维（基律纳市）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在茫茫雪原上开了好一阵，当那座在低垂的北极光下泛着幽幽蓝光的巨大冰雪建筑出现在眼前时，我几乎忘记了呼吸。它不是我想象中棱角分明的“房子”，更像一头从雪地里长出来的、温顺而晶莹的巨兽。走近了，手触摸到入口拱门的冰墙，那股沁入骨髓的、干净纯粹的冷，瞬间让你清醒——这不是梦境，你正站在一个用冬天本身建造的宫殿门口。
推开门，冷气扑面而来，却带着一种奇异的清新感，像深吸了一口薄荷。眼前是一个巨大的冰雕大厅，灯光被刻意调成柔和的蓝白色，透过数米厚的冰墙和冰柱，散射开来，把整个空间染成海底世界般的颜色。耳边安静极了，只有其他访客压低了的、带着兴奋的惊叹声，还有靴子踩在压实雪地上的沙沙声。你能闻到空气里几乎没有味道，如果硬要说，就是冰雪融化前那一丝极其微弱的、属于水的甜味。当地萨米人会告诉你，托尔讷河的冰是世界上最纯净的冰之一，因为它流动缓慢，气泡少，所以格外通透。
这里最迷人的，是那种无处不在的“短暂性”和“创造力”交织的气息。它不是一个冰冷的展览馆，而是一个活着的社区。你会看到裹着厚厚驯鹿皮睡袋的客人，像探险家一样兴奋地钻进各自的冰艺术套房；穿着婚纱的新娘在冰教堂前呵出白气，笑容却比任何夏日都灿烂；在著名的Absolut Icebar里，人们用冰雕的杯子喝着伏特加，杯壁很快就和你的手套粘在一起。酒店工作人员，很多就是本地人，他们谈起每年冬天的重建，就像在谈论一个盛大的节日，充满了自豪。冰酒店对于尤卡斯耶尔维这个小小的村庄来说，早已不是一桩生意，而是一个让世界看见他们的舞台，一种与严酷自然环境共舞的智慧庆典。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在茫茫雪原上开了好一阵，当那座在低垂的北极光下泛着幽幽蓝光的巨大冰雪建筑出现在眼前时，我几乎忘记了呼吸。它不是我想象中棱角分明的“房子”，更像一头从雪地里长出来的、温顺而晶莹的巨兽。走近了，手触摸到入口拱门的冰墙，那股沁入骨髓的、干净纯粹的冷，瞬间让你清醒——这不是梦境，你正站在一个用冬天本身建造的宫殿门口。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开门，冷气扑面而来，却带着一种奇异的清新感，像深吸了一口薄荷。眼前是一个巨大的冰雕大厅，灯光被刻意调成柔和的蓝白色，透过数米厚的冰墙和冰柱，散射开来，把整个空间染成海底世界般的颜色。耳边安静极了，只有其他访客压低了的、带着兴奋的惊叹声，还有靴子踩在压实雪地上的沙沙声。你能闻到空气里几乎没有味道，如果硬要说，就是冰雪融化前那一丝极其微弱的、属于水的甜味。当地萨米人会告诉你，托尔讷河的冰是世界上最纯净的冰之一，因为它流动缓慢，气泡少，所以格外通透。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最迷人的，是那种无处不在的“短暂性”和“创造力”交织的气息。它不是一个冰冷的展览馆，而是一个活着的社区。你会看到裹着厚厚驯鹿皮睡袋的客人，像探险家一样兴奋地钻进各自的冰艺术套房；穿着婚纱的新娘在冰教堂前呵出白气，笑容却比任何夏日都灿烂；在著名的Absolut Icebar里，人们用冰雕的杯子喝着伏特加，杯壁很快就和你的手套粘在一起。酒店工作人员，很多就是本地人，他们谈起每年冬天的重建，就像在谈论一个盛大的节日，充满了自豪。冰酒店对于尤卡斯耶尔维这个小小的村庄来说，早已不是一桩生意，而是一个让世界看见他们的舞台，一种与严酷自然环境共舞的智慧庆典。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`尤卡斯耶尔维冰酒店`} />
                <InfoRow label="英文名称" value={`Icehotel`} />
                <InfoRow label="正式名称" value={`Icehotel 365 & Icehotel Winter`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`尤卡斯耶尔维（基律纳市）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`世界上第一家，也是最负盛名的冰酒店，开创了冰雪建筑与体验式艺术旅游的先河。`} />
                <InfoRow label="建筑特色" value={`每年冬季从托尔讷河取冰，由全球艺术家团队重新设计并手工雕刻，是一座存在短暂、独一无二的艺术堡垒。`} />
                <InfoRow label="建筑风格" value={`当代冰雪艺术与北欧极简主义的融合，每间套房都是一件独立的装置艺术作品。`} />
                <InfoRow label="文化价值" value={`超越了酒店范畴，已成为一种季节性庆典和可持续的艺术实践，重新定义了人与自然、艺术与居住的关系。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`Icehotel冬季部分（传统冰酒店）通常在每年12月上旬至次年4月中旬开放，具体日期每年依据气候和建造进度微调，例如2023-2024季为12月14日至4月13日。Icehotel 365（常年开放部分）则全年无休，每日上午10:00至下午6:00对日间访客开放，入住客人可24小时体验。重要提示：冬季部分每年都会融化，次年重建，务必在出行前访问官网确认当季准确开放时间。`} />
              <InfoRow label="门票价格" value={`日间参观票：成人约345瑞典克朗，儿童（4-12岁）约115瑞典克朗，学生及老人有优惠，家庭套票约695克朗。住宿价格：冬季冰房（Cold Room）住宿套餐（含冰床、睡袋、早餐、桑拿）每人每晚约3400-6000瑞典克朗起，具体价格因艺术套房设计复杂度而异；Icehotel 365的冰套房价格类似。温暖房间（酒店附属木屋）价格另计。建议直接在官网预订住宿套餐，通常包含多项活动。`} />
              <InfoRow label="地址" value={`Marknadsvägen 63, 981 91 Jukkasjärvi, Sweden`} />
              <InfoRow label="交通方式" value={`飞机：飞抵基律纳机场（KRN），这是最近机场。从机场乘坐出租车前往酒店约15分钟车程，费用较高但便捷；或提前预订酒店接驳车（通常收费）。火车：乘坐瑞典国铁（SJ）夜车或日间列车抵达基律纳中央车站。从火车站可乘坐出租车（约20分钟）或预定的接驳车前往。公交：基律纳与尤卡斯耶尔维之间有当地巴士（编号501路），但班次较少，冬季需提前查好时刻表。自驾：从基律纳市中心沿E10公路向东行驶约15公里，有明显的“Icehotel”路标指示，酒店提供免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的开端，其实带着点北欧人特有的随意和创意火花。把时间拨回1989年的冬天，法国艺术家Jannot Derid在尤卡斯耶尔维举办了一场冰雕展览，地点在一个圆筒形的冰穹窿里。展览结束后，一些舍不得离开的观众突发奇想，带着睡袋在冰雕旁边过了一夜。这个近乎疯狂的行为，却像一颗种子，落在了当地一位名叫Yngve Bergqvist的探险旅行公司老板心里。他看到了其中蕴藏的可能性：为什么不能建一个全部由冰构成的、可以真正过夜的“酒店”呢？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在1990年，第一个简陋版本的冰酒店诞生了。它只有60平方米，与其说是酒店，不如说是个大一点的冰屋。但就是这个小实验，吸引了第一批敢于冒险的游客。真正的转折点发生在1994年。那一年，一对日本情侣找到Yngve，询问是否能在冰酒店里举行婚礼。当时并没有专门的场地，工作人员便临时在旁边的雪地上用冰搭建了一个小拱门。没想到，这个偶然诞生的“冰教堂”，立刻成了冰酒店最浪漫、最受欢迎的象征，至今仍是无数新人梦想的婚礼圣地。从此，冰酒店不再仅仅是猎奇的住宿地，它被赋予了情感和仪式的重量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着名气越来越大，酒店开始邀请世界各地的艺术家参与设计。从建筑师、雕塑家到室内设计师，每年都有数十位创作者来到这里，用几百吨从托尔讷河切割下来的天然冰块，进行为期数周的集体创作。每一间艺术套房都是一个天马行空的世界：你可能睡在冰雕的太空飞船里，躺在缠绕着冰玫瑰的卧榻上，或者置身于一个巨大的、正在融化的时钟内部。这个过程本身就成了一个艺术节，冬季开工时，小镇会热闹起来，电锯雕刻冰块的声响、艺术家们的讨论声，混合着热咖啡的香气，构成了重建季独有的交响乐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，最大的挑战和哲学内核，恰恰在于它的“短暂”。每年四月，春天来临，温度回升，这座耗尽心血的冰雪宫殿便会开始不可逆转地融化，最终化作一泓春水，流回托尔讷河。这种“年度消亡”的特性，最初是技术的限制，后来却演变成了其最核心的魅力。它教会每一位到访者珍惜当下，欣赏瞬间的美丽。也正是这种循环，催生了2016年“Icehotel 365”的诞生。这部分采用太阳能制冷技术，即使在夏天也能保持零下五度，让冰艺术得以常年保存，满足了更多游客的需求，也象征着这个创意从季节性奇迹向可持续艺术地标的进化。今天的冰酒店，是冬季的短暂艺术与夏季的永恒珍藏的双重奏。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的深度体验至少需要留出一整天加一晚。建议下午早些时候（2点左右）抵达并办理入住，此时日光尚存（北极圈冬季白昼很短），是欣赏冰雕细节和拍照的黄金时间。首先进行日间参观，沉浸于艺术世界；傍晚参与冰雕课程或雪地活动；入夜后享受冰酒吧和北极光追寻；在冰床过夜是核心体验，无需担心，完善的装备会让你安然入睡；第二天清晨在温暖木屋享用丰盛早餐，并参观冰教堂，完成完整的循环。这样的节奏既能充分探索，又不会因长时间暴露在低温中而感到疲惫。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`即使不入住，也强烈建议预订日间参观票，但务必提前在线预约以避免现场无票。
保暖是关键：自备最厚的袜子和保暖内衣，酒店提供的专业外套和靴子很给力，但贴身层的温暖靠自己。
冰酒店住宿极其热门，通常需要提前数月，甚至在夏季就预订冬季的房间，尤其是周末和圣诞新年期间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午抵达后先去温暖接待大厅寄存大件行李，领取你的入住资料和冰酒店生存指南。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟着导览图或参加简短介绍游，缓步穿过宏伟的冰廊，逐一探访当年开放的十几间独一无二的艺术套房，仔细阅读门口艺术家介绍牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在绝对冰吧（Absolut Icebar）用冰杯点一杯特色伏特加，让冰冷的酒液和更冷的杯子带来双重刺激。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加一场冰雕初学者课程，在冰雕师的指导下亲手触摸和雕刻托尔讷河的冰，感受这份材料的质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在酒店附属的温暖餐厅享用一顿以当地食材（如麋鹿肉、北极鱼）烹制的北欧晚餐，为身体积蓄热量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`夜幕彻底降临后，穿上酒店提供的特制保暖服，在专业向导带领下远离光污染，静候舞动的绿色北极光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到冰酒店，钻进铺着驯鹿皮的冰床上厚厚的睡袋，在零下五度的静谧中体验一夜“冰冻睡眠”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天早上，去桑拿房彻底驱寒，然后在老牌木屋餐厅里对着雪景享用一份热乎乎的瑞典早餐套餐。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`冰酒店主入口外全景`}</h4>
                  <p className="text-sm text-gray-700">{`在蓝调时刻（日落前后），站在对面雪地上，将酒店标志性的冰柱门楣和后方点缀着灯光的冰雪建筑一同纳入镜头，捕捉冰雪世界与深邃天空的对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`你的艺术套房内部`}</h4>
                  <p className="text-sm text-gray-700">{`使用三脚架长时间曝光，利用房间内嵌的彩色LED灯光（许多套房有设计灯光），拍下冰雕结构在暗环境中发出的梦幻光晕，构图时可纳入冰床上的毛皮点缀。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`绝对冰吧的中央吧台`}</h4>
                  <p className="text-sm text-gray-700">{`让同伴站在吧台后，从侧面角度拍摄，将由整块冰雕成的吧台、琳琅满目的冰酒架，以及人物呼出的白气一同拍下，充满故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`冰教堂圣坛前`}</h4>
                  <p className="text-sm text-gray-700">{`如果是白天，从教堂入口向内拍摄，利用狭长的冰制座椅引导视线至尽头的冰十字架或艺术圣坛；如果夜晚有活动，利用烛光（通常是安全的电子烛光）营造神圣温暖的氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`酒店外部远景与极光`}</h4>
                  <p className="text-sm text-gray-700">{`在晴朗无月的夜晚，将酒店建筑作为前景，设置好相机长曝光参数，等待极光在建筑上空舞动，拍下天地间自然与人工奇迹的同框。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`相机和手机在极端低温下耗电极快，多准备备用电池并贴身保暖，进入室内前将设备密封在塑料袋中防止冷凝水。`}</li>
                <li>• {`冰墙和冰雕反光复杂，可尝试手动对焦，并适当增加曝光补偿以还原冰雪的洁白，而不是灰暗。`}</li>
                <li>• {`拍摄他人或艺术套房内部时，请务必尊重隐私和艺术品，未经允许不要使用闪光灯。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`核心体验之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住当年最新的艺术冰套房，每一间都是限量版的艺术品，在冰雕的环绕中入睡，清晨醒来睫毛结霜的感觉终生难忘。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温暖舒适之选`}</h4>
                  <p className="text-sm text-green-800">{`预订酒店附属的“温暖房间”，这些是设施齐全的北欧风格小木屋或现代房间，既能享受冰酒店所有设施，晚上又有温暖舒适的床铺和私人浴室保障睡眠质量。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色民宿之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在尤卡斯耶尔维村里由萨米家庭经营的民宿，体验更地道的极地生活，听主人讲述驯鹿和极光的故事，白天再前往冰酒店游玩。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计酒店之选`}</h4>
                  <p className="text-sm text-purple-800">{`基律纳市区有一些设计感很强的酒店，适合对都市便利度要求更高的游客，驱车前往冰酒店也很方便，可以灵活组合极地活动行程。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`冬季是绝对旺季，房价高昂且一房难求，提前半年以上预订是常态，并密切关注官网的套餐优惠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择入住冰房，酒店会提供完善的保暖睡袋和指导，实际体感并不像想象中难熬，但确实是一种挑战，不建议有严重呼吸道疾病的人尝试。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`考虑将冰房住宿与温暖房间住宿组合，比如一晚体验冰酒店，另一晚住木屋恢复体力，这样体验更从容。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开冰酒店很久以后，我脑海里反复回味的，不是那种刻骨的冷，而是一种奇异的宁静和澄明。在那个一切都是由冰构成的空间里，时间仿佛被冻结、被拉长了。你会发现，没有电视，没有无线网络信号（在冰层深处很弱），甚至连多余的色彩和嘈杂的声音都被过滤掉了。世界被简化到只剩下光、影、形体和你的呼吸声。这种极致的简化，反而让你的感官变得异常敏锐，让你开始注意到冰层里被封存的小气泡，注意到灯光折射出的千万种细微的蓝色，注意到自己心跳在寂静中的节奏。这是一种现代生活中近乎奢侈的“专注力”修炼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，冰酒店远不止是一个网红打卡地。它是一个关于“瞬间与永恒”的哲学寓言。它用每年春天必然的消逝，提醒我们所有物质存在的短暂；却又用每年冬天执着的重生，宣告着艺术、创意和人类探索精神的永恒。它让我们学会欣赏那些无法被占有、只能被体验的美好。在气候变幻的今天，它更是一个与自然合作的典范——取之河流，还之河流，留下的是记忆而非负担。对于任何渴望跳出日常、触摸自然原始力量与人类创造力边界的人来说，这趟旅程都是一次触及灵魂的洗礼。你睡去的是一座即将消失的宫殿，醒来时，它已永恒地存在于你的生命故事里。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/linkping" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林雪平老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Linköping</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ystad-half-timbered-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于斯塔德半木结构小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ystad</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/linkoping-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林雪平老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Linköping Old Town</p>
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
