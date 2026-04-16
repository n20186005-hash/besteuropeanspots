import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '什未林城堡 Schwerin Castle｜漂浮在七大湖泊之上的童话仙宫，德国北部的天鹅堡 - 最佳欧洲景点',
  description: '当我第一眼从城堡公园的林荫道尽头望见它时，呼吸真的停了一拍。那不是一个静止的画面，而是一个在波光粼粼的湖面上呼吸的梦境。什未林城堡就那么从勃艮第湖畔的树梢后“生长”出来，365个塔尖和角楼刺向低垂的北德天空，白色与淡黄色的墙体被午后的阳光镀上一层柔和的蜜糖色。最妙的是它的倒影，完美无缺地复制在水面，...',
}

export default function SchwerinCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '什未林城堡', href: '/attractions/schwerin-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">什未林城堡・Schwerin Castle・德国・什未林</h1>
          <p className="text-lg text-gray-600 mb-6">
            当我第一眼从城堡公园的林荫道尽头望见它时，呼吸真的停了一拍。那不是一个静止的画面，而是一个在波光粼粼的湖面上呼吸的梦境。什未林城堡就那么从勃艮第湖畔的树梢后“生长”出来，365个塔尖和角楼刺向低垂的北德天空，白色与淡黄色的墙体被午后的阳光镀上一层柔和的蜜糖色。最妙的是它的倒影，完美无缺地复制在水面，随着天鹅划过的涟漪轻轻晃动，整座城堡仿佛悬浮在空气与水之间，轻盈得不像一座石头建筑。空气里有湿润的青草香、淡淡的湖水腥气，还有远处花园里飘来的玫瑰甜香。
走近了，你会发现这座城堡并非遥不可及的博物馆。戴着鸭舌帽的老人坐在长椅上喂天鹅，年轻的父母推着婴儿车在碎石路上散步，孩子们在斜坡草地上追逐打闹。它完全融入了什未林人的日常生活里。城堡桥头永远不缺支着画板的写生者，试图捕捉它随着光线和云层每分钟都在变化的情绪。它的核心魅力，正在于这种双重性：既是威严的政治中心（州议会在此办公），又是市民最爱的后花园；既是童话书里走出来的幻影，又是你能触摸到的、有着冰凉石墙和温暖窗棂的真实存在。
穿过那座通往城堡岛的拱桥，脚步声在桥面上发出空旷的回响，你才真正进入它的领域。庭院里铺着被岁月打磨得光滑的石板，四周环绕着装饰繁复的立面，每一扇窗户、每一个阳台都讲述着不同的故事。抬头看，那些金色的风向标在风中吱呀轻转，塔楼上的旗帜猎猎作响，你能听见历史的风穿过塔楼间隙的低语。这里没有沉重的压迫感，反而有一种被精心呵护的优雅与安宁，仿佛某位大公只是暂时离开，炉火还未完全熄灭。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">当我第一眼从城堡公园的林荫道尽头望见它时，呼吸真的停了一拍。那不是一个静止的画面，而是一个在波光粼粼的湖面上呼吸的梦境。什未林城堡就那么从勃艮第湖畔的树梢后“生长”出来，365个塔尖和角楼刺向低垂的北德天空，白色与淡黄色的墙体被午后的阳光镀上一层柔和的蜜糖色。最妙的是它的倒影，完美无缺地复制在水面，随着天鹅划过的涟漪轻轻晃动，整座城堡仿佛悬浮在空气与水之间，轻盈得不像一座石头建筑。空气里有湿润的青草香、淡淡的湖水腥气，还有远处花园里飘来的玫瑰甜香。</p>
              <p className="text-gray-700 leading-relaxed mb-4">走近了，你会发现这座城堡并非遥不可及的博物馆。戴着鸭舌帽的老人坐在长椅上喂天鹅，年轻的父母推着婴儿车在碎石路上散步，孩子们在斜坡草地上追逐打闹。它完全融入了什未林人的日常生活里。城堡桥头永远不缺支着画板的写生者，试图捕捉它随着光线和云层每分钟都在变化的情绪。它的核心魅力，正在于这种双重性：既是威严的政治中心（州议会在此办公），又是市民最爱的后花园；既是童话书里走出来的幻影，又是你能触摸到的、有着冰凉石墙和温暖窗棂的真实存在。</p>
              <p className="text-gray-700 leading-relaxed mb-4">穿过那座通往城堡岛的拱桥，脚步声在桥面上发出空旷的回响，你才真正进入它的领域。庭院里铺着被岁月打磨得光滑的石板，四周环绕着装饰繁复的立面，每一扇窗户、每一个阳台都讲述着不同的故事。抬头看，那些金色的风向标在风中吱呀轻转，塔楼上的旗帜猎猎作响，你能听见历史的风穿过塔楼间隙的低语。这里没有沉重的压迫感，反而有一种被精心呵护的优雅与安宁，仿佛某位大公只是暂时离开，炉火还未完全熄灭。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="什未林城堡" />
                <InfoRow label="英文名称" value="Schwerin Castle" />
                <InfoRow label="正式名称" value="Schloss Schwerin" />
                <InfoRow label="国家" value="德国" />
                <InfoRow label="城市" value="什未林" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="曾是梅克伦堡-什未林大公爵的权力中心与居所，如今是梅克伦堡-前波美拉尼亚州州议会所在地，被誉为“北方的新天鹅堡”。" />
                <InfoRow label="建筑特色" value="一座拥有数百年历史、完美融合了防御性城堡与奢华宫殿功能的建筑群，最标志性的是其365座尖塔和耸立在湖心岛上的梦幻身姿。" />
                <InfoRow label="建筑风格" value="浪漫主义历史主义风格的王冠，巧妙糅合了哥特式、文艺复兴式和巴洛克式等多种元素，是一场建筑风格的华丽交响。" />
                <InfoRow label="文化价值" value="不仅是德国浪漫主义建筑的代表作，更是一个活着的文化符号，见证了北德地区从大公国到现代联邦州的政权更迭与变迁。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="城堡建筑及博物馆：每年4月至10月，每日开放时间为10:00至18:00；11月至次年3月，开放时间缩短为10:00至17:00，每周一闭馆。国家议会厅仅在非会议期间对导游团开放，需提前查询日程。城堡花园与公园全年免费开放，从日出到日落。" />
              <InfoRow label="门票价格" value="城堡博物馆成人票8.5欧元，优惠票（学生、残障人士）6.5欧元。家庭票（2成人+最多4名儿童）19欧元。6岁以下儿童免费。仅参观花园免费。包含导游的“城堡全景之旅”票价稍高，约12欧元，强烈推荐。" />
              <InfoRow label="地址" value="Lennéstraße 1, 19053 Schwerin, Germany" />
              <InfoRow label="交通方式" value="从汉堡机场出发最为便捷。乘坐S-Bahn（S1线）从机场直达汉堡主火车站（Hamburg Hauptbahnhof），耗时约25分钟。在汉堡主火车站转乘开往什未林的区域快车（RE或IC），车次频繁，约每半小时一班，车程约1小时15分钟。抵达什未林主火车站（Schwerin Hbf）后，城堡就在步行范围内。出站后沿Werderstraße直行，穿过老城，约15-20分钟即可看到湖边城堡的尖顶。如果行李多，也可在站前乘坐公交至“Schloss”站。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要理解这座水上仙宫，得把时光倒回近千年。早在公元973年，文献中就提到了一个斯拉夫部落在此处的湖岛上建立的堡垒。这里地势险要，被水环绕，是天然的防御据点。1160年，萨克森公爵“狮子”亨利击败了斯拉夫部落，在此建立了第一座真正的德意志城堡，奠定了什未林作为权力中心的基石。随后的几百年里，城堡随着主人的更迭和战争的洗礼，不断被加固、摧毁又重建，像湖面上一个不灭的印记。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但让它蜕变成今天我们看到的童话模样的，是19世纪的一位关键人物：梅克伦堡-什未林大公弗里德里希·弗朗茨二世。他是个充满浪漫主义情怀的统治者，深受当时复兴中世纪骑士精神风潮的影响。在一次访问法国的途中，他深深着迷于卢瓦尔河谷那些如梦似幻的城堡。回到什未林后，他决心为自己心爱的都城打造一座配得上其名字的宫殿。于是，他委任了四位杰出的建筑师——其中以乔治·阿道夫·德姆勒为首——开启了一场长达数十年的改造工程。</p>
              <p className="text-gray-700 leading-relaxed mb-4">建筑师们的野心极大。他们没有推倒重来，而是以留存的老建筑为基础，进行一场“浪漫主义化妆”。他们从欧洲各地汲取灵感：法国城堡的角楼、意大利宫殿的拱廊、哥特式教堂的彩窗、荷兰文艺复兴式的山墙……所有元素被巧妙地编织在一起。你能在某个转角看到威尼斯总督宫的影子，在某个塔楼上发现温莎城堡的痕迹。这不是简单的模仿，而是一次充满想象力的创造，目标是建造一座“北德的童话”。建筑工地上汇聚了全欧洲的能工巧匠，石匠、木雕师、玻璃匠、金匠，他们的汗水凝结成了那些精美的石像鬼、繁复的木雕天花板和璀璨的水晶吊灯。</p>
              <p className="text-gray-700 leading-relaxed mb-4">工程从1843年一直持续到1857年主体竣工，而内部的装饰则延续了更久。城堡成为了大公家族奢华盛大的舞台。金色的宴会厅里举办过无数舞会，图书馆的皮革书香中萦绕着哲学辩论，礼拜堂的彩绘玻璃下举行过婚礼与洗礼。然而，二十世纪的两次世界大战的阴影也笼罩了这里。1918年，随着德意志帝国的崩溃，大公被迫退位，城堡收归国有。二战末期，它奇迹般地未遭受严重轰炸，但战后的岁月里，它先后被用作教师学院、博物馆，甚至一度面临被忽视的窘境。</p>
              <p className="text-gray-700 leading-relaxed mb-4">真正的重生是在德国统一之后。1990年，它被选为新建的梅克伦堡-前波美拉尼亚州的议会所在地。这一决定赋予了这座古老城堡全新的生命。议会厅被精心设计安放在古老的厅堂之中，现代民主的辩论声在古老的墙壁间回响，形成了过去与现在的奇妙对话。一场耗资巨大的全面修复随之展开，让每一个角落重新焕发光彩。今天，你漫步其中，看到的不再是一个死去的贵族标本，而是一个依然在跳动、在呼吸、在参与塑造未来的活生生的历史心脏。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议在下午早些时候（约2点后）抵达，这个时间旅行团开始减少，光线也最适合从西侧拍摄城堡和湖泊。整个深度游览需要至少4-5小时。节奏应该是“由外到内，再由内回味”。先不要急于进入城堡建筑，而是花一个小时在城堡公园和环湖步道上游荡，从各个角度欣赏它与水、与天空、与城市的关系。然后再进入城堡内部，花2-3小时慢慢逛博物馆和主要厅堂。最后在日落时分，回到湖边，看金色的光芒如何为城堡谢幕。这样的安排能让你完整感受城堡从宏伟景观到细腻内部，再到融入暮色的全过程。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>议会厅仅在导游带领下参观且时间固定，务必提前在官网查询并预订，现场很难临时加入。
城堡内部房间众多，标识清晰但信息量巨大，可以考虑租用语音导览，或者跟着一位明显知识渊博的老爷爷导游团后面悄悄听。
湖边和公园小路多为砂石或不平整的砖石，穿一双舒适防滑的鞋子远比漂亮的皮鞋来得重要。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡公园东南角的“园林宫殿”出发，沿着蜿蜒的小径穿过高大的橡树林，让城堡的轮廓在枝叶间若隐若现地引导你。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要绕到城堡北侧的湖畔步道，找一张正对城堡主立面的长椅坐下，静静看天鹅和野鸭在城堡倒影里划出长长的水痕。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过那座标志性的石拱桥进入城堡岛，先在庭院中央旋转一圈，抬头数一数那些姿态各异的塔楼和金光闪闪的风向标。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走进博物馆，别错过二层那间“祖先画廊”，看着墙上数十位大公家族成员的肖像，感受历史凝视的重量。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在“镶嵌厅”里蹲下来，仔细看地上那由十五种不同木材拼成的、复杂到令人屏息的几何图案。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">登上城堡的某个塔楼（如果开放），感受寒风拂面，将整个什未林城、七大湖泊和远处无尽的平原尽收眼底。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡出来，沿着湖岸走到南侧的“橘园”咖啡馆，在温室的玻璃穹顶下点一块经典的德国苹果卷，回味刚才的所见。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">等到日落后灯光亮起，再次回到拱桥中央，看城堡的窗格像金色的宝石一样在深蓝的夜幕中一颗颗被点亮。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡北侧勃艮第湖沿岸长椅区</h4>
                  <p className="text-sm text-gray-700">下午三点至日落前，阳光从西侧照亮城堡正面，利用湖面倒影构图，可将天鹅游过的动态作为前景，营造宁静童话感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 城堡南侧花园拱桥尽头</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，站在拱桥上拍摄城堡主体建筑与它在平静运河中的倒影，形成完美的对称构图，特别适合拍摄全景。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 金色宴会厅水晶灯下</h4>
                  <p className="text-sm text-gray-700">室内拍摄需使用高感光度相机或稳定手机，等待一束阳光从高侧窗射入，与璀璨的水晶灯光芒交织时按下快门，捕捉巴洛克式的奢华光影。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 城堡公园“观景台”小土丘</h4>
                  <p className="text-sm text-gray-700">位于公园东部，是一个较少人知的制高点。黄昏时分，从此处可以拍摄到城堡剪影映衬在绚烂晚霞中的全景，城市灯火初上，画面层次极丰富。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 橘园温室内部向外拍</h4>
                  <p className="text-sm text-gray-700">以温室的古典铸铁框架和茂盛的热带植物为画框，拍摄窗外雨中的城堡，能拍出极具故事感和反差感的独特照片。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用无人机拍摄需极度谨慎，城堡及周边空域可能因议会安保原因受到严格管制，务必提前查询当地法规。</li>
                <li>• 拍摄议会区域外部及岗哨时应保持尊重距离，避免使用长镜头对准警卫或窗户，以防误解。</li>
                <li>• 三脚架在室内博物馆通常不允许使用，但可尝试在庭院或花园中使用，尤其在光线较弱的清晨傍晚。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">湖景公寓之选</h4>
                  <p className="text-sm text-blue-800">老城区紧邻城堡湖的百年公寓楼顶层，房东是个退休艺术教授，屋内满是古董家具和画作，推开窗就是无遮挡的城堡全景，晚上能听到湖浪轻拍堤岸。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">历史氛围沉浸</h4>
                  <p className="text-sm text-green-800">由一栋19世纪贵族宅邸改造的精品酒店，距离城堡仅一街之隔，房间挑高极高，保留了原始的石膏雕花天花板和壁炉，早餐在布满鲜花的庭院里享用。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">现代设计据点</h4>
                  <p className="text-sm text-yellow-800">火车站附近由旧邮局改建的设计师酒店，工业风混搭北欧简约，是探索古城后放松的完美 contrast，屋顶酒吧能看到远眺城堡的城市天际线。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">奢华庄园体验</h4>
                  <p className="text-sm text-purple-800">位于市郊湖畔的五星级度假酒店，坐拥私人森林和码头，房间自带面向湖泊的露台或阳台，提供桑拿船游览项目，从水上以最私密的角度欣赏城堡。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旅游旺季（5-9月）及州议会重要会期期间，什未林市中心住宿非常紧俏，尤其是周末，务必提前至少一个月预订。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城区多为石板路，自驾游客需注意酒店是否提供停车场，或提前预定附近的公共车库，拖着行李箱长距离行走会是个挑战。</p>
              <p className="text-gray-700 leading-relaxed mb-4">选择湖边住宿时，问清楚窗户是否隔音，否则初夏夜晚天鹅的叫声可能会比你想象中更响亮（也更浪漫）。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开什未林很久之后，我闭上眼睛，脑海里浮现的并不是某个具体的房间或雕像，而是一种感觉——那种轻盈与厚重不可思议地交织在一起的感觉。它明明是一座用巨石砌成的、承载了千年权谋与战争的城堡，却偏偏选择建在水上，用无数的尖塔试图挣脱地心引力，像一个关于飞翔的梦。这大概就是它最触动我的地方：它展示了历史可以有另一种存在方式，不是一味地沉重与训诫，而是可以充满幻想、美感，并温柔地融入每个人的日常。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求效率、一切都被加速的世界里，什未林城堡像一个温柔的提醒。它告诉我们，权力可以褪去狰狞而变得优雅，历史不必尘封在玻璃柜里而是可以继续参与生活，甚至一座建筑也可以像天鹅一样，既有扎根现实的蹼足，又有向往天空的翅膀。它不仅仅是一个“景点”，更是一个关于平衡、融合与持续演变的鲜活寓言。每一位热爱深度游的旅人，都该来感受一下这种走在童话与议会、倒影与实墙、过去与未来之间的奇妙步行。你会发现，最美的风景，往往存在于那些看似对立的边界之上。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
