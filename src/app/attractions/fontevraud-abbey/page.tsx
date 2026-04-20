import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '丰特夫罗修道院 Fontevraud Abbey｜探秘法国王室最后的安眠地与惊世跨界文化实验场 - 最佳欧洲景点',
  description: '车子缓缓驶入卢瓦尔河谷南缘的静谧乡野，当一片巨大的、蜜糖色石灰岩建筑群突然从林荫道尽头浮现时，你几乎会忘记呼吸。那不是一座孤立的教堂，而是一座完整的、自带城墙的石头小镇，安静地卧在绿色山谷的怀抱里。第一印象是压倒性的宁静与尺度感。阳光把几百年历史的石墙晒得暖烘烘的，空气里有割草后的青草味，混合着远处...',
}

export default function FontevraudAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '丰特夫罗修道院', href: '/attractions/fontevraud-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`丰特夫罗修道院・Fontevraud Abbey・法国・曼恩-卢瓦尔省（菲亚克-丰特夫罗市）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶入卢瓦尔河谷南缘的静谧乡野，当一片巨大的、蜜糖色石灰岩建筑群突然从林荫道尽头浮现时，你几乎会忘记呼吸。那不是一座孤立的教堂，而是一座完整的、自带城墙的石头小镇，安静地卧在绿色山谷的怀抱里。第一印象是压倒性的宁静与尺度感。阳光把几百年历史的石墙晒得暖烘烘的，空气里有割草后的青草味，混合着远处花园飘来的古老玫瑰的淡香。除了几声鸟鸣和你自己的脚步声，世界仿佛被调低了音量。
走进这座“修道院之城”，你会立刻发现它的与众不同。这里没有那种令人屏息的、直插云霄的哥特式尖顶，取而代之的是一种敦厚、恢宏而平衡的美。巨大的修道院教堂像一位沉默的巨人，而围绕它的修女院、修士院、医务所、作坊、花园，构成了一个自给自足的微观世界。最打动人的是，这里至今仍流淌着生活的气息。你可能会碰到当地人在回廊下遛狗，艺术家在古老的宿舍里布展，游客坐在昔日的食堂里品尝用修道院菜园香草烹调的午餐。神圣与世俗，历史与当下，在这里达成了奇妙的共生。
它的核心魅力，远不止于建筑。当你踏入凉爽的教堂中殿，目光被尽头那四尊静静平躺的彩绘石雕卧像锁定时，时间仿佛凝固了。那是英格兰国王亨利二世、他的妻子阿基坦的埃莉诺、他们的儿子理查一世（狮心王）……这些只在历史书中出现的传奇人物，他们的“容颜”就如此真切地躺在你面前。彩绘虽已斑驳，但王冠的轮廓、衣袍的褶皱、平静的面容，依然散发着惊人的存在感。站在这里，你瞬间触摸到了金雀花王朝的脉搏，感受到了权力、爱情、背叛与死亡的全部重量。这不仅仅是一座建筑，它是一个王朝的句点，也是一段横跨英法历史的永恒注脚。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子缓缓驶入卢瓦尔河谷南缘的静谧乡野，当一片巨大的、蜜糖色石灰岩建筑群突然从林荫道尽头浮现时，你几乎会忘记呼吸。那不是一座孤立的教堂，而是一座完整的、自带城墙的石头小镇，安静地卧在绿色山谷的怀抱里。第一印象是压倒性的宁静与尺度感。阳光把几百年历史的石墙晒得暖烘烘的，空气里有割草后的青草味，混合着远处花园飘来的古老玫瑰的淡香。除了几声鸟鸣和你自己的脚步声，世界仿佛被调低了音量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进这座“修道院之城”，你会立刻发现它的与众不同。这里没有那种令人屏息的、直插云霄的哥特式尖顶，取而代之的是一种敦厚、恢宏而平衡的美。巨大的修道院教堂像一位沉默的巨人，而围绕它的修女院、修士院、医务所、作坊、花园，构成了一个自给自足的微观世界。最打动人的是，这里至今仍流淌着生活的气息。你可能会碰到当地人在回廊下遛狗，艺术家在古老的宿舍里布展，游客坐在昔日的食堂里品尝用修道院菜园香草烹调的午餐。神圣与世俗，历史与当下，在这里达成了奇妙的共生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，远不止于建筑。当你踏入凉爽的教堂中殿，目光被尽头那四尊静静平躺的彩绘石雕卧像锁定时，时间仿佛凝固了。那是英格兰国王亨利二世、他的妻子阿基坦的埃莉诺、他们的儿子理查一世（狮心王）……这些只在历史书中出现的传奇人物，他们的“容颜”就如此真切地躺在你面前。彩绘虽已斑驳，但王冠的轮廓、衣袍的褶皱、平静的面容，依然散发着惊人的存在感。站在这里，你瞬间触摸到了金雀花王朝的脉搏，感受到了权力、爱情、背叛与死亡的全部重量。这不仅仅是一座建筑，它是一个王朝的句点，也是一段横跨英法历史的永恒注脚。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`丰特夫罗修道院`} />
                <InfoRow label="英文名称" value={`Fontevraud Abbey`} />
                <InfoRow label="正式名称" value={`Royal Abbey of Our Lady of Fontevraud`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`曼恩-卢瓦尔省（菲亚克-丰特夫罗市）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲现存规模最大的修道院建筑群之一，曾是中世纪欧洲最独特、最有权势的“双修”修道院帝国，并演变为安茹-金雀花王朝的王室陵寝。`} />
                <InfoRow label="建筑特色" value={`罗马式与哥特式风格完美融合的恢宏建筑群，以独特的八边形穹顶厨房和雕刻精美的皇家卧像闻名于世。`} />
                <InfoRow label="建筑风格" value={`以朴素的罗马式风格为基础，逐步融入了精致的安茹哥特式元素。`} />
                <InfoRow label="文化价值" value={`从神圣的宗教圣地到严酷的国家监狱，再到前卫的艺术文化中心，它本身就是一部浓缩的、活着的法国千年史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但开放时间随季节变化。通常为：1月至3月、11月至12月：上午10点至下午5点（最后入场时间为下午4点15分）；4月至6月、9月至10月：上午10点至下午6点；7月至8月：上午10点至下午7点。修道院每周二闭馆，1月1日、5月1日、11月1日、12月25日闭馆。部分特殊展览或文化活动的开放时间可能延长，建议出发前在其官方网站确认。`} />
              <InfoRow label="门票价格" value={`标准成人票为12欧元。优惠票适用于学生、12-25岁青年及10人以上团体，价格为8欧元。18岁以下青少年、欧盟26岁以下居民及残疾人可免费入场。持有“法国国家古迹通行证”也可免费。门票通常包含语音导览器（提供中文服务），该导览内容极为详尽，是深度游览的必备工具。`} />
              <InfoRow label="地址" value={`Abbaye Royale de Fontevraud, 49590 Fontevraud-l'Abbaye, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是图尔卢瓦尔河谷机场（TUF），距离约75公里，或南特亚特兰蒂克机场（NTE），距离约120公里。从巴黎出发最便捷的方式是乘坐TGV高速列车至索米尔（Saumur）火车站，车程约1小时45分钟。从索米尔火车站出来，有专门的“Abbaye de Fontevraud”公交车专线（班次有限，需提前查好时刻表），车程约30分钟。更灵活的方式是在索米尔火车站租车自驾或预订出租车，自驾沿D947公路行驶约20分钟即可抵达。这里的公共交通不算频繁，提前规划衔接时间是关键。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1101年讲起，一个特立独行的传道士——罗贝尔·达布里谢尔，来到了这片名为“丰特夫罗”（意为“源泉”）的荒凉山谷。他的想法在当时堪称惊世骇俗：他要建立一个男女共同修行、但由女性最高领袖管理的宗教社区。这在以男性为主导的教会体系中无异于一场革命。凭借其非凡的个人魅力和贵族支持，他的梦想迅速生根发芽。丰特夫罗修道院很快发展成一个庞大的“修道院联邦”，下辖修女院、修士院、麻风病院和忏悔修女院，所有分支都统一听从一位女修道院长的领导。这第一位女院长，便是罗贝尔亲自指定的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪的丰特夫罗达到了权力的巅峰。它受到罗马教廷的特别庇护，财富和土地不断扩张，成为欧洲最富有的修道院之一。而真正将它推上历史前台的是12世纪的婚姻与政治。当阿基坦的埃莉诺——这位欧洲最富有的女继承人，先后成为法国王后和英格兰王后——她的孙子最终成为了安茹伯爵。金雀花王朝的君主们，特别是亨利二世和埃莉诺本人（她在晚年选择在此隐居并度过余生），将丰特夫罗视为他们的精神家园和家族墓地。教堂里那四尊著名的彩绘卧像，便是这段王室渊源的永恒见证。修道院因此蒙上了浓厚的皇家色彩，其女院长往往出身于最高贵的家族，权势堪比公主。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，时代的洪流无人能挡。随着宗教战争和王权更迭，丰特夫罗的命运急转直下。法国大革命的风暴彻底摧毁了它的宗教功能。1792年，修女们被驱逐，这座宏伟的建筑群被国家没收。更富戏剧性的是，拿破仑·波拿巴在1804年将其改造为一座国家监狱，而且是法国最严酷的中央监狱之一。你能想象吗？昔日祈祷的教堂变成了车间，宁静的回廊筑起了高墙，修士的小室成了牢房。近一个半世纪里，这里关押着成千上万的囚犯，墙壁上留下了无数刻痕与涂鸦，与中世纪的石雕共存，形成了一种极其诡异而深刻的历史层次。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在1963年，最后一批囚犯离开。法国政府开始对其进行浩大的修复工程。但丰特夫罗的故事并未回归纯粹的“古迹”模式。自1975年起，它被赋予了全新的灵魂，成为“西欧文化中心”。古老的建筑里进驻了艺术家工作室、举办国际性的音乐节、展览和哲学研讨会。昔日的修士宿舍变成了设计酒店，食堂成为高级餐厅，马厩成为当代艺术画廊。这个跨越千年的地方，完成了一次惊心动魄的转型：从宗教圣地到皇家陵寝，从黑暗监狱到光明文化殿堂。它不再只是被观看的历史，而是正在被书写、被演奏、被思考的活态现场。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在上午十点前抵达，此时光线柔和，游客尚少，能独享修道院清晨的宁静。整体游览需要预留至少4到5小时，这还不包括在餐厅悠闲午餐的时间。节奏上宜慢不宜快，这里适合漫步和沉思。可以先从外围感受其整体气势，再深入建筑内部细品历史和艺术，最后在花园中放松回味。一定要租用语音导览器，里面的故事和细节会让每一块石头都变得鲜活。这样的安排能让你由远及近、由表及里地，完整体验这座“活古迹”的多个层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末和节假日午后是游客高峰，教堂内会非常拥挤，务必赶早。部分当代艺术展览区域可能需要单独购票或预约，行前最好在官网确认。教堂和回廊内石地板很光滑且不平，请务必穿一双舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从游客中心出来后别急着进门，先绕到建筑群东侧的小坡上，那里能俯瞰整个修道院建筑群与小镇屋顶交织的全景，感受它作为一座“城”的尺度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的大门进入主庭院，让你的眼睛慢慢适应，首先去凝视修道院教堂那庄严而质朴的罗马式正立面，寻找岁月在石头上留下的不同色泽与痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地径直走进教堂内部，在昏暗中径直走向唱诗班席位后方，让那四尊沐浴在微弱光线下的王室卧像给你第一次历史震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂南门出来，步入被阳光切割出几何光影的圣器室回廊，触摸那些温润的柱头，仔细看上面雕刻的奇异生物和圣经故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那座标志性的、像童话城堡一样的八角形大厨房，走进它的内部，仰望那奇妙的悬链式石砌穹顶和无数个烟囱通道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过回廊来到曾经的修女宿舍区，现在这里常举办当代艺术展，感受古老石墙与先锋作品之间产生的奇妙化学反应。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留足时间给圣约翰教堂旁的药草园和更大的修道院花园，沿着整齐的香草垄散步，嗅闻迷迭香和薰衣草的味道，坐在长椅上听风声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后前往昔日的修道院食堂，如今的米其林推荐餐厅“Fontevraud Le Restaurant”，用一顿以本地食材和花园香草烹制的午餐为旅程画上完美句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主庭院东南角仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能完美勾勒出修道院教堂罗马式立面的厚重质感与层次，将前景的绿树或拱门框架纳入构图，能增加深度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`王室卧像侧后方机位`}</h4>
                  <p className="text-sm text-gray-700">{`避开正面人群，从亨利二世卧像的侧后方低角度拍摄，利用石柱作为天然画框，聚焦雕像沉静的面容和彩绘的细节，营造一种静谧的窥视感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大厨房内部穹顶仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光会从屋顶的采光孔直射下来，形成神圣的光柱，使用超广角镜头垂直向上拍摄，可以捕捉到穹顶复杂的石砌结构在光影下的魔幻几何美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣器室回廊长廊`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗日子的上午，阳光会斜射进拱廊，在地上拉出长长的影子，站在回廊一端用长焦镜头压缩空间，能拍出富有韵律感和纵深感的光影走廊。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`修道院花园远眺建筑群`}</h4>
                  <p className="text-sm text-gray-700">{`从花园最南端回望修道院建筑，特别是在初夏玫瑰盛开或秋季树叶金黄时，将花园作为前景，能拍摄到建筑群与自然完美融合的田园诗般画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内允许不使用闪光灯拍照，但请保持绝对安静和尊重，尤其在卧像陵寝前。使用三脚架在室内通常需要提前申请许可。航拍无人机在整个修道院上空是严格禁止的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式历史体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接下榻于修道院建筑群内的“Fontevraud L'Hôtel”，客房由昔日的修士宿舍改造，保留了原始的石头墙壁和拱顶，夜晚当游客散去，你便能独享千年古迹的星空与寂静。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园风光民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择修道院附近村庄里的家庭式“Chambre d‘Hôte”，房东太太会为你准备丰盛的卢瓦尔河谷家常早餐，从房间窗户望出去就是绵延的葡萄园和向日葵田。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`住在车程15分钟外的索米尔镇，那里有由古老酒窖改造的精品酒店，风格现代又兼具工业复古风，晚上可以去小镇河边散步，感受热闹的市井生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居式庄园酒店`}</h4>
                  <p className="text-sm text-purple-800">{`若追求极致宁静与奢华，可以寻找隐藏在卢瓦尔河谷森林或葡萄园深处的私人城堡酒店，享受管家服务、私人花园和绝对的避世感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`修道院内部的酒店非常热门，尤其是夏季的音乐节期间，务必提前数月预订。周边乡村治安极好，但夜间照明有限，自驾需注意狭窄的乡间小路。如果预订民宿，很多主人只说法语，简单的法语问候会让他们非常开心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开丰特夫罗很久之后，那种复杂的感受依然萦绕心头。它不像那些仅供仰望的、被玻璃罩起来的博物馆式古迹。在这里，你真切地感受到历史不是一条死去的河流，而是一层又一层不断覆盖、不断对话的鲜活土壤。你能在同一空间里，触摸到12世纪石匠的虔诚、15世纪修女的寂寥、19世纪囚徒的绝望，和21世纪艺术家的思考。这种时间的“层叠感”所带来的震撼，远比任何单一辉煌的时代印记都要深刻得多。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、热衷贴标签的世界里，丰特夫罗修道院是一个美妙的“异数”。它拒绝被简单地定义——既是陵寝也是监狱，既是古迹也是画廊，既是终点也是起点。它告诉我们，历史场所的生命力，不在于将其真空封存，而在于以尊重的姿态，为它注入符合当代精神的、新的灵魂。在这里漫步，你不仅是在学习历史，更是在参与一场关于永恒与变迁、记忆与创新的安静对话。对于任何一位不满足于走马观花，渴望在旅途中获得思想回响的深度行者来说，丰特夫罗都是你必须来一次的地方。它会让你慢下来，让你思考，并最终在你心里，留下一口名为“丰特夫罗”——“源泉”的深井。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/perouges" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁日古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/orange-roman-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥朗日凯旋门与古罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orange Roman Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pont-du-gard" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加尔桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pont du Gard</p>
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
