import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '保拉谷 Wied iż-Żurrieq｜乘船探秘梦幻蓝洞，徒步高崖访史前神庙与骑士团塔楼 - 最佳欧洲景点',
  description: '车子在马耳他南部那片标志性的、被阳光晒得发白的石灰岩高原上拐了几个弯，当你以为眼前只有无尽的低矮石墙和橄榄树时，一片令人猝不及防的、巨大的湛蓝突然撞进视野。那不是天空，是海。保拉谷不是一处温柔的港湾，而是一个地球的伤口——大地在这里猛然裂开，断崖直插进钴蓝色的地中海深处。你的第一感觉是敬畏，甚至带点',
}

export default function WiedIzZurrieqPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '马耳他', href: '/destinations/europe' },
            { label: '南区', href: '/destinations/europe' },
            { label: '保拉谷（蓝窗遗址附近）', href: '/attractions/wied-iz-zurrieq' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`保拉谷（蓝窗遗址附近）・Wied iż-Żurrieq・马耳他・南区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在马耳他南部那片标志性的、被阳光晒得发白的石灰岩高原上拐了几个弯，当你以为眼前只有无尽的低矮石墙和橄榄树时，一片令人猝不及防的、巨大的湛蓝突然撞进视野。那不是天空，是海。保拉谷不是一处温柔的港湾，而是一个地球的伤口——大地在这里猛然裂开，断崖直插进钴蓝色的地中海深处。你的第一感觉是敬畏，甚至带点眩晕。风从谷底强劲地吹上来，带着浓烈的、咸腥的海水气息，还有海浪永不停歇地拍打崖壁的沉闷轰鸣，那声音厚重得像远古的叹息。
顺着狭窄蜿蜒的车道下到谷底，一个小巧的、彩色的渔民码头出现在眼前。这里的生活节奏瞬间慢了下来，时间仿佛被染上了渔网和松节油的味道。几个皮肤黝黑的船夫靠在斑驳的墙壁边，用带着浓重马耳他口音的英语招呼着：“去看蓝洞吗？现在海水颜色正好！”他们的船只，那些鲜艳的、木质的小艇，随着波浪轻轻摇晃，桅杆敲击着金属杆，发出清脆的叮当声，这是属于此刻的、鲜活的背景音。而你的目光，却总忍不住越过这些烟火气，投向两侧那高耸入云的悬崖绝壁。在那上面，隐约能看到巨石垒砌的痕迹，像古老巨人散落的积木。
这里最打动人心的，正是这种极致的层次感与对话。脚下，是瞬息万变、灵动剔透的海水，乘船钻入蓝洞，阳光透过海面将洞穴内部映照得如蓝宝石般梦幻迷离，海水清澈得让你觉得船正漂浮在空气中。而当你抬头，或沿着悬崖侧面的步道向上攀登，触碰到的却是沉默、坚硬、跨越了五千年的巨石。自然以万年之功雕琢的瑰丽，与人类在文明初曙时展现的惊人意志力和信仰，在这片海天之间同台呈现。再加上后来者——马耳他骑士团建造的、那些如今已成剪影的方形塔楼，犹如历史的标点，矗立在崖顶，默默守护着这片交织着神话与现实的风景。保拉谷不是一个被玻璃罩起来的博物馆，它是一个活着的剧场，自然、远古、中世纪和当下，都在这里上演着自己的篇章。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在马耳他南部那片标志性的、被阳光晒得发白的石灰岩高原上拐了几个弯，当你以为眼前只有无尽的低矮石墙和橄榄树时，一片令人猝不及防的、巨大的湛蓝突然撞进视野。那不是天空，是海。保拉谷不是一处温柔的港湾，而是一个地球的伤口——大地在这里猛然裂开，断崖直插进钴蓝色的地中海深处。你的第一感觉是敬畏，甚至带点眩晕。风从谷底强劲地吹上来，带着浓烈的、咸腥的海水气息，还有海浪永不停歇地拍打崖壁的沉闷轰鸣，那声音厚重得像远古的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "顺着狭窄蜿蜒的车道下到谷底，一个小巧的、彩色的渔民码头出现在眼前。这里的生活节奏瞬间慢了下来，时间仿佛被染上了渔网和松节油的味道。几个皮肤黝黑的船夫靠在斑驳的墙壁边，用带着浓重马耳他口音的英语招呼着：“去看蓝洞吗？现在海水颜色正好！”他们的船只，那些鲜艳的、木质的小艇，随着波浪轻轻摇晃，桅杆敲击着金属杆，发出清脆的叮当声，这是属于此刻的、鲜活的背景音。而你的目光，却总忍不住越过这些烟火气，投向两侧那高耸入云的悬崖绝壁。在那上面，隐约能看到巨石垒砌的痕迹，像古老巨人散落的积木。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里最打动人心的，正是这种极致的层次感与对话。脚下，是瞬息万变、灵动剔透的海水，乘船钻入蓝洞，阳光透过海面将洞穴内部映照得如蓝宝石般梦幻迷离，海水清澈得让你觉得船正漂浮在空气中。而当你抬头，或沿着悬崖侧面的步道向上攀登，触碰到的却是沉默、坚硬、跨越了五千年的巨石。自然以万年之功雕琢的瑰丽，与人类在文明初曙时展现的惊人意志力和信仰，在这片海天之间同台呈现。再加上后来者——马耳他骑士团建造的、那些如今已成剪影的方形塔楼，犹如历史的标点，矗立在崖顶，默默守护着这片交织着神话与现实的风景。保拉谷不是一个被玻璃罩起来的博物馆，它是一个活着的剧场，自然、远古、中世纪和当下，都在这里上演着自己的篇章。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`保拉谷（蓝窗遗址附近）`} />
                <InfoRow label="英文名称" value={`Wied iż-Żurrieq`} />
                <InfoRow label="正式名称" value={`Wied iż-Żurrieq`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`南区`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`马耳他史前巨石神庙文明的重要沿海据点，同时是马耳他骑士团防御奥斯曼帝国海上威胁的前哨站。`} />
                <InfoRow label="建筑特色" value={`天然形成的巨型海蚀洞穴（蓝洞）与人类数千年前垒砌的巨石神庙基座、16世纪方形军事塔楼，在嶙峋海崖上形成震撼对话。`} />
                <InfoRow label="建筑风格" value={`史前巨石建筑（巨石神庙）与文艺复兴晚期的军事防御建筑（骑士团瞭望塔）风格交织。`} />
                <InfoRow label="文化价值" value={`一处地点浓缩了马耳他跨越五千年的文明层叠：从神秘的远古祭祀，到中世纪骑士的军事防御，再到今日渔村的朴素生活。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`蓝洞乘船游览通常在上午9:00至日落前1小时开放，强烈受天气和海况影响，风浪大时会全面关闭，建议出行前查看当地天气预报或直接致电船家确认。岸边步道、史前遗址废墟及瞭望塔外部区域全天24小时开放。附近的小型渔民博物馆开放时间较为灵活，通常为周一至周六的10:00-16:00。`} />
              <InfoRow label="门票价格" value={`蓝洞乘船游览：成人票约8欧元，儿童票约4欧元，票价含约20-25分钟的船程，直接在码头向船主购买。史前神庙遗址（Ħaġar Qim与Mnajdra考古公园）门票：成人约10欧元，学生及老人约7.5欧元，儿童（6-11岁）约5.5欧元。骑士团瞭望塔（俯瞰用）外部参观免费。所有票价可能随季节微调。`} />
              <InfoRow label="地址" value={`Wied iż-Żurrieq, Il-Qrendi, Malta`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场（MLA）出发是最佳选择。打车是最方便快捷的方式，车程约20-25分钟，费用约20-25欧元。公共交通可乘坐从机场或瓦莱塔出发的74路公交车，在“Qrendi”站下车，然后需要步行约20-25分钟（一路下坡）才能抵达海边码头，全程耗时约1-1.5小时，公交车票可在上车时购买，日票更划算。不建议从主路下车点尝试走陡峭的近道，请务必沿主路步行以确保安全。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让我们把时钟拨回到公元前3600年，甚至更早。那时候，马耳他群岛上的先民，我们称他们为“神庙建造者”，正处于一个独特的文明高峰期。他们不建城池，不铸兵器，却将全部的精力和惊人的工程技术，倾注于建造这些面向天空与大地的巨石神殿。为什么选择保拉谷上方这片看起来如此嶙峋荒芜的悬崖？考古学家们推测，这里紧邻的这片海域，或许是重要的渔场，为先民提供食物。而这片高地本身，可能具有神圣的边界意义——陆地在这里终结，海洋由此开始，正是举行与生命、死亡、海洋和星空相关祭祀仪式的绝佳场所。你可以想象，在某个夏至或冬至的黎明，部落的祭司和族人聚集在如今已成为废墟的Ħaġar Qim神庙里，透过特意设计的门洞或石缝，看着第一缕阳光精准地投射在某块祭坛石上，而背景，正是脚下无垠的、反射着金光的地中海。他们的信仰，与天象、地理紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光巨轮轰然碾过数千年。神庙文明神秘消亡，腓尼基人、罗马人、阿拉伯人先后到来又离开。直到16世纪，这片海岸迎来了新的主角：马耳他骑士团。这些来自欧洲贵族阶层的“圣战”骑士，在击败了奥斯曼帝国的“大围攻”后，丝毫不敢放松。他们深知，马耳他漫长的海岸线是防御的软肋。于是，一场大规模的海岸防御工事建设开始了。保拉谷上方的高地，因其绝佳的视野，成为链式预警系统的重要一环。那座今天依然矗立的、敦实方正的瞭望塔，正是在这个时期修建的。塔上的哨兵日夜警惕地巡视着海平面，任何可疑的帆影都意味着可能需要点燃烽火，将警报一路传往首都瓦莱塔。骑士团的铁血秩序，覆盖在了远古的神秘之上，为这片风景注入了冷峻的军事色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近现代的战火也曾在这里留下烙印。第二次世界大战期间，马耳他作为盟军在地中海的关键堡垒，遭受了轴心国军队的猛烈轰炸。保拉谷附近的悬崖和洞穴，一度成为当地居民躲避空袭的天然防空洞。而到了和平年代，这里恢复了它作为小渔村的宁静本色。直到二十世纪中后期，随着全球旅游业的兴起，那艘偶然驶入海蚀洞穴的小渔船，让世人惊叹于“蓝洞”那不可思议的蓝色，保拉谷才以一种全新的、充满视觉冲击力的方式，再次走向世界舞台。如今，船夫的吆喝声代替了骑士的号角，游客的惊叹取代了祭司的吟唱，但悬崖之巅那些沉默的巨石和塔楼，依旧在亘古不变的海风中，诉说着层叠的往事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受保拉谷的多元魅力，建议预留至少4-5小时，安排一个大半天的时间最为理想。最佳的游览顺序是“由海及陆，自下而上”。上午抵达，此时阳光角度较好，利于欣赏蓝洞内部的光影与水色，且通常风浪较小，行船更平稳。乘船探险后，回到码头，可以享用一顿简单的、以新鲜鱼类为主的午餐。下午的时光则留给陆地探索，沿着规划好的步道，先参观近处的史前神庙遗址，感受文明的重量，然后徒步或短途乘车前往更高处的骑士团瞭望塔区域，在黄昏时分，从这里俯瞰整个保拉谷海口和远海，景色最为壮阔。这样的安排节奏张弛有度，体验完整。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`蓝洞乘船完全取决于海况，如果风浪较大船家停运，切勿强行要求出海或试图自行租用私人小船，安全第一。
悬崖步道部分路段无护栏且地面多碎石，务必穿着抓地力强的徒步鞋或运动鞋，切忌穿拖鞋或凉鞋，并注意看管好小孩。
南部高原日照极其强烈且缺乏遮阴，请务必携带足量饮用水、涂抹高倍数防晒霜并戴上帽子和太阳镜。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早趁着旅游大巴尚未涌入，先到色彩斑斓的小码头感受渔村苏醒的宁静，听海水拍打石阶的哗啦声和海鸥的鸣叫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跳上一艘鲜艳的木质小船，让经验丰富的船夫带你缓缓驶出港湾，迎着清新的海风直奔那片如巨兽之口的海蚀崖壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当小船灵巧地钻入蓝洞的瞬间，准备好迎接那令人窒息的、由阳光与海水共舞创造出的、梦幻般的宝蓝色世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上岸后别急着离开，在码头边的家庭餐馆点一份当天清晨捕获的炸灯笼罩鱼，就着无敌海景享受最地道的马耳他风味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着码头一侧清晰标识的步道开始向上攀登，去触摸和探访那些散落在嶙峋石灰岩上的、属于Ħaġar Qim神庙群的巨大石块基座。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续沿着悬崖边的徒步小径向东行走，从不同角度回望你刚才乘船进入的蓝洞海口，感受从海平面到悬崖顶视角转换带来的震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行约二十分钟或搭乘短途出租车，抵达骑士团的Wardija瞭望塔下，虽然塔内通常不开放，但环绕它行走，便能理解其选址的战略眼光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在瞭望塔附近的天然观景平台找一块平滑的岩石坐下，等待夕阳将整个西面的天空、海面以及脚下的白色悬崖染成温暖的琥珀色与金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`蓝洞内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`乘坐小船进入洞穴中心后，让同伴在船头用广角镜头向上拍摄，将洞穴顶部天然的“天窗”及周围被阳光透射成荧光蓝的海水一同构图，最佳时间是正午前后阳光直射时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从史前神庙废墟望海`}</h4>
                  <p className="text-sm text-gray-700">{`在Ħaġar Qim遗址的碎石间，找到一个能将前景的古老巨石遗迹与中景的陡峭悬崖、背景的辽阔蔚蓝地中海纳入同一画面的角度，下午的侧光能为巨石勾勒出深邃的轮廓。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士团瞭望塔剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时至日落后十分钟的“蓝调时刻”，以色彩绚烂的天空为背景，拍摄瞭望塔黑色的肃穆剪影，长曝光还能拍下悬崖下海岸线车流的光轨。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`悬崖步道全景`}</h4>
                  <p className="text-sm text-gray-700">{`在连接码头与神庙遗址的上行步道中段，有一个开阔的回转弯，用中焦段镜头可以捕捉到蜿蜒的步道、陡峭的崖壁、远处的瞭望塔和下方如玩具般的彩色码头与船只，层次极为丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`渔村码头夜景`}</h4>
                  <p className="text-sm text-gray-700">{`日落后，码头灯光亮起，船只归港，使用三脚架长曝光拍摄，能将平静水面上灯光的倒影、泊岸的船只与深邃的夜空融为一体，气氛静谧。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄蓝洞内部时，海水反光强烈，建议使用偏振镜（CPL）来消除水面反光，让海水的蓝色更加纯净深邃。`}</li>
                <li>• {`尊重当地文化，在史前神庙遗址区，避免为了拍照而攀爬或踩踏古老的巨石，这些都是受法律保护的珍贵文物。`}</li>
                <li>• {`马耳他当地人通常不介意被拍摄，但拍摄船夫、渔民或餐馆主人时，一个友好的微笑和事先示意会比举起镜头就拍礼貌得多。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济实惠之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在附近村庄如Qrendi或Żurrieq的家庭式宾馆，房间干净简洁，主人热情好客，晚上能体验到真正的马耳他乡村宁静，清晨被教堂钟声和鸡鸣唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`选择悬崖顶部附近由传统农舍（Farmhouse）改造的精品住宿，这些房子通常带有厚厚的石墙、拱形天花板和私人小泳池，在院子里就能坐拥无遮挡的地中海远景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受之选`}</h4>
                  <p className="text-sm text-yellow-800">{`入住马耳他岛西海岸或南海岸五星级度假村，这些酒店往往拥有私人海滩、顶级水疗中心和多家餐厅，在享受完备设施的同时，驱车前往保拉谷仅需十五到二十分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`极致探索之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果热爱徒步与自然，可以考虑预订马耳他岛西南海岸线徒步路径（如丁利峭壁步道）起点附近的特色民宿，将保拉谷作为你沿海徒步探险中最精彩的一站。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马耳他南部乡村地区夜晚非常安静，治安良好，但公共交通在晚间班次会大幅减少，选择住宿时需考虑好晚间出行的交通方式（建议租车或使用打车软件）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6月至9月）是马耳他旅游绝对旺季，保拉谷附近的特色住宿非常抢手，务必提前数月预订，春秋季气候宜人且游客较少，是更舒适的深度游时机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多传统农舍改造的住宿位于偏僻的乡间小路上，导航信号可能不稳定，建议提前与房东确认具体的抵达路线和定位坐标。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开保拉谷的时候，我的脑海里不是某一张具体的明信片画面，而是一种混杂的感受：是船身摇晃时海水的清凉，是手指触摸神庙巨石时阳光留下的余温，是站在瞭望塔下呼啸而过的风声，也是码头边那盘炸鱼简单而实在的香味。这个地方奇妙地同时拥有着梦幻与现实、轻盈与沉重、瞬息的美丽与永恒的沉默。它没有试图把任何一种体验单独提炼出来供奉给你，而是将它们全部搅拌在一起，像地中海的海水搅拌着阳光与盐分，然后一股脑地呈现在你面前。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个凡事追求效率、体验也常被切割成碎片快速消费的时代，保拉谷的存在像一种温柔的抵抗。它要求你慢下来，用不同的高度和角度去看，去听，去触摸。它告诉你，一片风景的深度，不在于它被拍摄了多少次，而在于它承载了多少层不同时空的生命印记与情感。从祈求丰饶的远古先民，到警惕海疆的戎装骑士，再到今日驾驭小艇、笑对八方来客的船夫，每一代人都在这里留下了自己的故事，而这一切，最终都融入了海浪拍打崖壁的永恒节奏里。所以，如果你厌倦了那些被过度修饰的单一景点，渴望一场能同时触动感官与心灵的旅行，那么，请来保拉谷。在这里，你不是一个旁观者，你会成为这出跨越五千年史诗剧的，一名沉浸其中的观众。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/three-cities" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    三
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">三姐妹城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Three Cities</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fort-st-angelo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣安杰洛堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fort St. Angelo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/victoria-lines" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维多利亚防线</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Victoria Lines</p>
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
