import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特拉凯海岛城堡 Trakai Island Castle｜立陶宛的“湖中幻梦”，中世纪骑士传奇与琥珀色的黄昏 - 最佳欧洲景点',
  description: '当大巴车缓缓驶入特拉凯小镇，我的第一反应是揉了揉眼睛——远处湛蓝的湖面中央，静静矗立着一座深红色的城堡，尖塔的倒影在波光里摇晃，像极了从童话绘本里直接剪下来、然后被粗心的孩子贴错了背景的一页。那种不真实感，强烈到让你觉得它随时会随着湖上的雾气一起消散。越走近，感官的体验就越具体。空气中是湖水特有的、...',
}

export default function TrakaiIslandCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '立陶宛', href: '/destinations/lithuania' },
            { label: '特拉凯海岛城堡', href: '/attractions/trakai-island-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特拉凯海岛城堡・Trakai Island Castle・立陶宛・特拉凯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当大巴车缓缓驶入特拉凯小镇，我的第一反应是揉了揉眼睛——远处湛蓝的湖面中央，静静矗立着一座深红色的城堡，尖塔的倒影在波光里摇晃，像极了从童话绘本里直接剪下来、然后被粗心的孩子贴错了背景的一页。那种不真实感，强烈到让你觉得它随时会随着湖上的雾气一起消散。越走近，感官的体验就越具体。空气中是湖水特有的、略带腥甜的湿润气息，混合着岸边松林被阳光晒暖后散发的树脂香。耳朵里灌满了风声、水波轻拍木制码头的声音，以及海鸥划破宁静的长鸣。
穿过连接陆地和城堡岛屿的长长木桥，脚下的木板发出“咚咚”的空响。城堡在你眼前一层层展开，不再是远观的平面剪影。深红色的砖墙在午后阳光下呈现出温暖的、近乎琥珀的色泽，让你忍不住想，是不是古代的工匠把立陶宛森林里夕阳的颜色都烧进了这些砖里。高耸的塔楼棱角分明，投下坚硬的阴影，而阴影之下，湖面却是一片温柔的碎金。你会发现，这座城堡不是冷冰冰的景点，它是活着的。当地的家庭在湖畔野餐，孩子们向湖里扔面包屑喂天鹅；划着彩色小艇的年轻人从城墙下嬉笑着穿过；周末，你甚至可能撞见一场在城堡庭院里举办的中世纪市集，空气中瞬间充满了烤肉的焦香和工匠敲打金属的叮当声。
它最打动人心的地方，或许就在于这种奇妙的矛盾与平衡。它既是一座坚不可摧的军事要塞，讲述着刀光剑影的骑士史诗；同时又是一个被柔情湖水三面环抱的“家”，承载着立陶宛人关于起源与归属的温暖想象。站在它的城墙垛口，你既能感受到历史的重量压在肩头，又能被眼前那片无垠的、闪烁着光斑的湖面轻轻托起，瞬间忘了时间。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当大巴车缓缓驶入特拉凯小镇，我的第一反应是揉了揉眼睛——远处湛蓝的湖面中央，静静矗立着一座深红色的城堡，尖塔的倒影在波光里摇晃，像极了从童话绘本里直接剪下来、然后被粗心的孩子贴错了背景的一页。那种不真实感，强烈到让你觉得它随时会随着湖上的雾气一起消散。越走近，感官的体验就越具体。空气中是湖水特有的、略带腥甜的湿润气息，混合着岸边松林被阳光晒暖后散发的树脂香。耳朵里灌满了风声、水波轻拍木制码头的声音，以及海鸥划破宁静的长鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过连接陆地和城堡岛屿的长长木桥，脚下的木板发出“咚咚”的空响。城堡在你眼前一层层展开，不再是远观的平面剪影。深红色的砖墙在午后阳光下呈现出温暖的、近乎琥珀的色泽，让你忍不住想，是不是古代的工匠把立陶宛森林里夕阳的颜色都烧进了这些砖里。高耸的塔楼棱角分明，投下坚硬的阴影，而阴影之下，湖面却是一片温柔的碎金。你会发现，这座城堡不是冷冰冰的景点，它是活着的。当地的家庭在湖畔野餐，孩子们向湖里扔面包屑喂天鹅；划着彩色小艇的年轻人从城墙下嬉笑着穿过；周末，你甚至可能撞见一场在城堡庭院里举办的中世纪市集，空气中瞬间充满了烤肉的焦香和工匠敲打金属的叮当声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它最打动人心的地方，或许就在于这种奇妙的矛盾与平衡。它既是一座坚不可摧的军事要塞，讲述着刀光剑影的骑士史诗；同时又是一个被柔情湖水三面环抱的“家”，承载着立陶宛人关于起源与归属的温暖想象。站在它的城墙垛口，你既能感受到历史的重量压在肩头，又能被眼前那片无垠的、闪烁着光斑的湖面轻轻托起，瞬间忘了时间。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特拉凯海岛城堡`} />
                <InfoRow label="英文名称" value={`Trakai Island Castle`} />
                <InfoRow label="正式名称" value={`Trakai Island Castle`} />
                <InfoRow label="国家" value={`立陶宛`} />
                <InfoRow label="城市" value={`特拉凯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是东欧独一无二的水上城堡，见证了立陶宛大公国最强盛时期的辉煌，也是立陶宛民族精神和文化复兴的重要象征。`} />
                <InfoRow label="建筑特色" value={`一座完全建造在加尔韦湖中岛屿上的砖石城堡，通过堤道与陆地相连，拥有深红色的外墙、高耸的防御塔楼和气势恢宏的中央公爵宫殿。`} />
                <InfoRow label="建筑风格" value={`主要为哥特式风格，同时融入了立陶宛本土的防御建筑特点，其重建后的形态是19-20世纪历史主义修复的典范。`} />
                <InfoRow label="文化价值" value={`不仅是重要的历史纪念地，更承载了立陶宛人关于国家起源、中世纪骑士传统以及多民族（卡拉伊姆人、鞑靼人等）和谐共处的集体记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡博物馆全年开放，但时间因季节而异。夏季（5月至9月）通常从上午10点开放至晚上7点，冬季（10月至次年4月）一般从上午10点开放至下午5点。每周一闭馆（除非周一恰逢国家法定假日）。城堡庭院和外部区域在博物馆关闭后仍可环绕参观。每年的具体开放时间可能微调，建议出行前在其官方网站上复核。`} />
              <InfoRow label="门票价格" value={`成人票约为12欧元。优惠票（学生、老年人）约为6欧元。家庭套票（2大+最多3小）有折扣。7岁以下儿童免费。购买门票可参观城堡内所有展览，包括历史博物馆、骑士大厅等。在某些国家纪念日或文化之夜，城堡可能免费开放。`} />
              <InfoRow label="地址" value={`Trakai Island Castle, Trakai 21104, Lithuania`} />
              <InfoRow label="交通方式" value={`从维尔纽斯出发是最便捷的选择。在维尔纽斯中央汽车站或火车站，乘坐开往特拉凯的班车（车身上通常标有“Trakai”），班次非常频繁，大约每20-30分钟一班，车程约40分钟。上车后向司机购票即可。抵达特拉凯镇汽车站后，跟随人流或指示牌，沿着美丽的加尔韦湖步行约15-20分钟即可抵达城堡所在的半岛，再从半岛的码头购买船票（或冬季走冰面/堤道）上岛。自驾则更为灵活，从维尔纽斯驱车约半小时，城堡外有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特拉凯的故事，得从立陶宛大公国那段波澜壮阔的岁月说起。14世纪，立陶宛是欧洲最后一个皈依基督教的国家，其领土从波罗的海一直延伸到黑海，强大而神秘。而特拉凯，正是当时两位最著名的大公——凯斯图蒂斯和他的儿子维陶塔斯——最心爱的权力中心之一。为什么把城堡建在湖心岛上？这绝非为了诗情画意，而是冷酷的军事智慧。四面环水就是最好的天然护城河，在那个冷兵器与早期火器交织的时代，想要攻陷这样一座堡垒，难度可想而知。于是，从14世纪末开始，一座兼具宫殿与要塞功能的水上城堡，在加尔韦湖的岛屿上逐渐成型。红色的砖石一块块垒起，它不仅是维陶塔斯大公的居所，更成了守护维尔纽斯西部门户的战略盾牌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，再坚固的城堡也敌不过时间的侵蚀和战火的反复舔舐。在接下来的几个世纪里，立陶宛经历了与条顿骑士团的血战、与波兰的联合、以及与沙俄的冲突。特拉凯城堡在一次次的围攻中受损，又在相对和平的年月里被修缮。但17世纪中期的一场战争给了它致命一击，城堡严重被毁，昔日辉煌的公爵宫殿沦为废墟，只剩下断壁残垣浸泡在湖水中，慢慢被世人遗忘。它成了湖上一个忧伤的幻影，一个关于失落荣耀的传说，只有当地的渔民还会指着水中的倒影，向孩子们讲述骑士与巨龙的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在19世纪。当时立陶宛被沙俄帝国统治，民族意识开始悄悄觉醒。知识分子和艺术家们开始回望历史，寻找立陶宛民族独立的灵魂根源。那座湖中的废墟，以其独特的浪漫主义悲剧美感，成为了画家笔下和诗人纸间的宠儿。它象征着不屈的过往，也激发了重建未来的渴望。尽管当时沙俄当局并不支持，但关于修复特拉凯城堡的设想和测量工作，已经在爱国的学者中秘密展开。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的重生，是在20世纪。立陶宛经历了一战后的短暂独立、二战的磨难以及苏联时期的统治，但修复城堡的梦想从未熄灭。上世纪50-60年代，在苏联体制下，修复工程以一种“历史文化遗产”的名义得以启动。这或许是历史上一次微妙的“借壳还魂”——立陶宛的建筑师和历史学家们，倾注了巨大的心血，依据详尽的考古发现和历史图纸，一砖一瓦地让城堡从湖水中再次屹立起来。虽然今天的我们看到的并非完全原貌（中央宫殿的屋顶等部分是依据历史风格的再创造），但这次重建本身，就成为了立陶宛民族坚韧精神的壮丽宣言。1991年立陶宛重新独立后，特拉凯城堡更毫无争议地成为了国家最重要的象征之一，它从废墟到复兴的历程，几乎就是立陶宛民族命运的缩影。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的方式是安排一整天给特拉凯，从容不迫地感受它的晨昏昼夜。建议上午10点左右从维尔纽斯出发，避开早高峰，抵达时约11点，阳光正好。首先不要急于上岛，而是在连接岛屿的堤道或半岛上远观、拍照。然后乘坐摇橹小船（夏季）上岛，体验从水面接近城堡的仪式感。上岛后先游览城堡外部和庭院，感受其整体气势，随后进入城堡内部参观博物馆（预计1.5-2小时）。参观完毕后，在城堡附近的湖畔找一家餐厅享用午餐，品尝特色的卡拉伊姆馅饼。下午可以在湖边散步、租船游湖，或者探访特拉凯镇上古老的卡拉伊姆人社区。一定要留到日落时分，看着夕阳将城堡和湖面染成金黄再慢慢褪成粉紫，这是全天最梦幻的时刻。傍晚乘巴士返回维尔纽斯。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末和假日游客非常多，尽量安排工作日前往，体验会好很多。城堡内部部分楼梯非常陡峭且狭窄，请务必穿着舒适防滑的鞋子。湖区蚊虫在夏季傍晚较多，建议备好驱蚊液。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从特拉凯镇中心汽车站下车，不急着直奔城堡，先沿着湖滨小路散步，让那片惊人的湖光与城堡远景缓缓注入你的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在半岛尽头的老码头，花几欧元跳上一艘当地人划的木船，听着桨声欸乃，从最佳的水上视角缓缓逼近那座深红色的岛屿堡垒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的拱形门洞进入城堡主庭院，立刻仰头感受被高耸塔楼和连绵雉堞包围的震撼，想象中世纪卫兵在此巡逻的脚步声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进阴凉厚重的城堡主楼，沿着狭窄的石阶盘旋而上，在公爵大厅里凝视华丽的复古吊灯和壁毯，试着捕捉当年大公议事的余音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过地下层的监狱和历史展览馆，那里昏暗的光线和冰冷的展柜里，锁着关于战争、囚徒与漫长重建岁月的坚硬故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完后，绕到城堡临湖的另一侧，找一块阳光温热的古老墙砖坐下，看天鹅在倒影边梳理羽毛，彻底放空自己。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开岛屿前，一定要去城堡入口附近的小店，买一个热腾腾、船形的卡拉伊姆馅饼，让肉馅的咸香在口中融化，这是味蕾对历史的独特解读。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前返回半岛的栈桥或咖啡馆露台，点一杯本地啤酒，安静等待夕阳上演一天中最盛大、最温柔的光影魔术。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`半岛西侧栈桥尽头`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，将城堡置于画面一侧，利用湖面的倒影和前景的船只、芦苇构成一幅平衡且富有层次感的完美构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主庭院中心仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，站在庭院中央，用广角镜头垂直向上拍摄，捕捉塔楼、蓝天和飘过的云朵形成的强烈几何与动感对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从湖面小船上拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`租船绕到城堡的北侧或东侧，在下午的侧光下，拍摄城堡砖墙的质感细节以及它在水中拉长的、波光粼粼的完整倒影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`特拉凯镇一侧的湖边山坡`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻（日落后二十分钟），从镇子高处望向湖心岛城堡，此时城堡灯光初亮，湖面呈深蓝色，能拍出静谧而梦幻的夜景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`冬季冰封湖面视角`}</h4>
                  <p className="text-sm text-gray-700">{`如果勇敢地在冬季前往，走上结冰的加尔韦湖，从任何角度都能拍下城堡矗立在纯白冰原上的孤独而雄伟的绝景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少湖面反光，让城堡倒影更清澈。航拍能获得极具冲击力的上帝视角，但务必提前了解当地无人机法规并远离人群。尊重当地居民，拍摄私人住宅或特定宗教场所（如卡拉伊姆肯萨）前最好先征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖景民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在半岛上由传统木屋改造的温馨民宿，推开窗就是无遮挡的城堡全景，晚上在私人小码头上还能看到繁星倒映在漆黑的湖水中。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史小镇体验`}</h4>
                  <p className="text-sm text-green-800">{`选择特拉凯镇上由古老宅邸改建的精品酒店，房间里有裸露的原木横梁，步行去城堡和探索独特的卡拉伊姆文化街区都只需几分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端静谧享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住隐于加尔韦湖另一侧森林边缘的现代设计酒店，拥有全景落地窗和私人桑拿，在极致的宁静中独享湖与城堡的侧影，仿佛拥有整个王国。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`维尔纽斯往返便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果不想搬运行李，完全可以选择住在维尔纽斯老城，乘坐便捷的巴士当天往返，这样能同时享受首都的夜生活与特拉凯的日间宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特拉凯本地的住宿数量有限，尤其在夏季旺季，务必提前数月预订。如果选择住在镇上，夜晚非常安静安全，但餐饮选择相对有限，不少餐馆关门较早。冬季部分湖畔民宿可能歇业，预订前需确认。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特拉凯很久之后，闭上眼，脑海里浮现的往往不是城堡具体的样貌，而是一种感觉。是湖水微凉的触感，是红色砖墙在掌心留下的粗粝温度，是黄昏光线里那种万物都被镀上金边的恍惚瞬间。这座城堡教会我，最动人的历史遗迹，从来不是冰冷 sterile 的展品，而是能与自然、与当下生活呼吸共鸣的有机体。它既是堡垒，也是家园；既承载着战争的伤痕，也倒映着和平的柔波。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求高效、一切都快如闪电的世界里，特拉凯像是一个温柔的停顿。它让你慢下来，花一个小时等一艘船，花一个下午看云飘过塔尖，花一个黄昏目睹金色如何一点点沉入湖心。它告诉你，立陶宛这个常常被忽略的波罗的海小国，其灵魂深处有着怎样的浪漫与坚韧。那种从湖水中重生、在废墟上挺立的生命力，比任何教科书都更有力。所以，如果你厌倦了那些被游客挤满的“必打卡”地标，渴望一次真正走进风景、也走进历史的旅行，请来特拉凯。把手机静音，坐在湖边，听风讲述那个关于湖水、红砖与不朽传说的故事。它值得你专程为它，而来。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rapperswil-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉珀斯维尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rapperswil Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-beynac" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝纳克城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Beynac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viljandi-order-castle-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维尔扬迪城堡废墟（汉萨同盟时期要塞）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viljandi Order Castle Ruins</p>
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
