import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '久洛城堡 Gyula Castle｜欧洲唯一平原水上砖堡的静谧时光 - 最佳欧洲景点',
  description: '第一眼看到久洛城堡，你会忘了呼吸。不是因为它有多雄伟险峻——它安静地卧在匈牙利一望无际的大平原上，没有山丘依托，像一座直接从水中生长出来的、由红砖和倒影构成的梦境。护城河的水面平静得像一块深绿色的天鹅绒，完美地倒映着锯齿状的城墙和锥形的塔楼。那股混合了湿润泥土、古老砖石和水生植物淡淡腥气的味道，是平...',
}

export default function GyulaWaterCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '久洛城堡', href: '/attractions/gyula-water-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`久洛城堡・Gyula Castle・匈牙利・久洛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到久洛城堡，你会忘了呼吸。不是因为它有多雄伟险峻——它安静地卧在匈牙利一望无际的大平原上，没有山丘依托，像一座直接从水中生长出来的、由红砖和倒影构成的梦境。护城河的水面平静得像一块深绿色的天鹅绒，完美地倒映着锯齿状的城墙和锥形的塔楼。那股混合了湿润泥土、古老砖石和水生植物淡淡腥气的味道，是平原特有的、带着时间重量的空气。四周安静得能听见自己的心跳，只有几只水鸟掠过水面，或是风穿过墙头雉堞的细微声响。它不像布达佩斯的城堡那样游人如织，这里的时间流速仿佛都慢了下来。
走近了看，城堡的砖墙在阳光下呈现出一种温暖的、深浅不一的赭红色，有些砖块已经风化，边缘变得圆润，那是几个世纪风雨的吻痕。护城河上的木桥吱呀作响，你仿佛能听见当年骑士的马蹄声和铁匠铺里的敲打声。它就这么孤零零地矗立着，却一点也不孤单。你会发现，它早已融入了久洛镇居民的生活脉搏里。傍晚，当地人会在护城河边散步、遛狗；周末，父母带着孩子在城堡前的草坪上野餐。它不是一个被供起来的标本，而是社区的后花园，是小镇历史记忆的活心脏。
最打动人的，正是这份“活着”的宁静与坚韧。在欧洲，你看过太多山巅或崖边的城堡，但一座如此完整、被水环绕、矗立在绝对平坦大地上的砖砌城堡，是独一无二的。它没有险要地势可依仗，它的防御全部来自于人类匠心砌筑的墙壁和环绕它的河水。这种在平坦土地上创造出的、充满几何美感的防御工事，体现了一种截然不同的、属于平原人民的智慧和固执。站在它的庭院中心，被四面高墙和天空包围，你会感到一种奇特的、被温柔包裹的安全感。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到久洛城堡，你会忘了呼吸。不是因为它有多雄伟险峻——它安静地卧在匈牙利一望无际的大平原上，没有山丘依托，像一座直接从水中生长出来的、由红砖和倒影构成的梦境。护城河的水面平静得像一块深绿色的天鹅绒，完美地倒映着锯齿状的城墙和锥形的塔楼。那股混合了湿润泥土、古老砖石和水生植物淡淡腥气的味道，是平原特有的、带着时间重量的空气。四周安静得能听见自己的心跳，只有几只水鸟掠过水面，或是风穿过墙头雉堞的细微声响。它不像布达佩斯的城堡那样游人如织，这里的时间流速仿佛都慢了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了看，城堡的砖墙在阳光下呈现出一种温暖的、深浅不一的赭红色，有些砖块已经风化，边缘变得圆润，那是几个世纪风雨的吻痕。护城河上的木桥吱呀作响，你仿佛能听见当年骑士的马蹄声和铁匠铺里的敲打声。它就这么孤零零地矗立着，却一点也不孤单。你会发现，它早已融入了久洛镇居民的生活脉搏里。傍晚，当地人会在护城河边散步、遛狗；周末，父母带着孩子在城堡前的草坪上野餐。它不是一个被供起来的标本，而是社区的后花园，是小镇历史记忆的活心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，正是这份“活着”的宁静与坚韧。在欧洲，你看过太多山巅或崖边的城堡，但一座如此完整、被水环绕、矗立在绝对平坦大地上的砖砌城堡，是独一无二的。它没有险要地势可依仗，它的防御全部来自于人类匠心砌筑的墙壁和环绕它的河水。这种在平坦土地上创造出的、充满几何美感的防御工事，体现了一种截然不同的、属于平原人民的智慧和固执。站在它的庭院中心，被四面高墙和天空包围，你会感到一种奇特的、被温柔包裹的安全感。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`久洛城堡`} />
                <InfoRow label="英文名称" value={`Gyula Castle`} />
                <InfoRow label="正式名称" value={`Gyula Castle`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`久洛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城堡是14-16世纪匈牙利南部防御奥斯曼帝国入侵的关键要塞之一，也是欧洲平原地区唯一完整保留护城河系统与砖砌主体结构的水上城堡。`} />
                <InfoRow label="建筑特色" value={`独特的砖砌哥特式与文艺复兴风格融合体，拥有完整的环形护城河、高耸的角楼、红砖砌筑的厚重城墙以及一座优雅的晚期哥特式小教堂。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式为核心，融合了早期文艺复兴元素，并在后续修复中谨慎地加入了新浪漫主义风格的细节。`} />
                <InfoRow label="文化价值" value={`它不仅是一座军事建筑遗迹，更是匈牙利大平原（阿尔弗尔德）地区历史、艺术与集体记忆的鲜活载体，其修复过程本身就是一部生动的现代文化遗产保护史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡博物馆及历史展览开放时间：4月1日至10月31日，周二至周日 10:00-18:00；11月1日至3月31日，周二至周日 10:00-16:00。城堡庭院及外部区域全年每日开放至日暮。每周一闭馆（若周一是法定节假日，则顺延至次日）。夏季（7-8月）通常无休。特殊节庆活动（如中世纪节、圣诞市集）期间开放时间会延长，具体需查看官网公告。`} />
              <InfoRow label="门票价格" value={`全票：3000匈牙利福林（约8欧元）。优惠票（学生、老人）：1500福林。家庭套票（2大2小）：7500福林。6岁以下儿童免费。持有匈牙利国家博物馆通票者可免费进入。门票包含城堡所有开放区域、常设历史展览、临时特展及地牢参观。导览器租赁费用另计，约为500福林，有中文选项。`} />
              <InfoRow label="地址" value={`Gyula, Kossuth Lajos u. 33, 5700 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发是最佳选择。在布达佩斯南部的Népliget汽车站乘坐直达久洛的长途大巴，车程约2.5-3小时，班次每天约4-6班，建议提前在menetrendek.hu网站查询并预订。火车也是一种选择，在布达佩斯-Keleti火车站乘坐前往塞格德方向的列车，在久洛站下车，车程约3小时，班次较少但沿途平原风光宁静。抵达久洛镇后，城堡位于镇中心，从汽车站或火车站步行约15-20分钟即可到达，沿途标志清晰。镇内也有出租车，但数量不多。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`久洛城堡的故事，始于一片空旷的平原和一条名叫费凯特-科罗斯的宁静河流。14世纪初，匈牙利安茹王朝的国王查理一世，为了巩固对南部疆域的控制，将这片土地赐给了忠诚的贵族久洛家族。城堡的雏形，就在那时以一座简单的土垒木堡的形式出现了。但真正改变它命运的，是15世纪强大的匈雅提家族。大名鼎鼎的“白骑士”亚诺什·匈雅提的儿子，国王马加什一世的兄弟，米哈伊·匈雅提成为了这里的主人。在他的经营下，原本简陋的堡垒开始用坚固的砖石重建，逐渐形成了我们今天看到的矩形布局和角楼雏形。城堡不仅是军事要塞，也成为了一个繁荣的贵族庄园中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`16世纪，奥斯曼帝国的阴影笼罩了整个匈牙利。久洛城堡因其战略位置，成了基督教世界抵抗土耳其入侵的前沿堡垒之一。城墙被不断加厚，护城河被拓宽挖深。你可以想象那些紧张的年月：烽火台时刻有人守望，铁匠日夜不停地打造兵器，地窖里储满粮食。它经历了数次围困，最惨烈的一次是在1566年，守军最终不敌，城堡落入了奥斯曼帝国手中。接下来的近一个半世纪，城堡的主楼被改造成了清真寺，墙壁上绘上了新的图案，空气中回荡着不一样的祈祷声。这段时期在城堡的建筑上留下了独特的文化层叠印记。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1685年，哈布斯堡王朝的军队从奥斯曼人手中夺回了城堡，但它已伤痕累累。随着军事技术的进步，这种中世纪风格的城堡失去了战略价值，渐渐被遗弃。它先后被用作军营、粮仓，甚至一度面临被拆毁的命运。墙体坍塌，护城河淤塞，它就像一位被遗忘的老兵，在平原的风雨中静静衰败。转机出现在20世纪初，一位当地的历史学家兼艺术家格佐·拉克发现了它的价值，并倾尽毕生心血倡导保护和修复。修复工程断断续续，跨越了大半个世纪，尤其在二战后得以系统进行。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的久洛城堡，是几代人执着努力的成果。修复者没有选择将它恢复到某个单一的“黄金时代”，而是像一个诚实的历史讲述者，保留了不同时期的痕迹：哥特式的窗棂、文艺复兴风格的拱门、奥斯曼时期的墙基、以及20世纪修复时添加的新浪漫主义元素。它就像一本立体的历史书，每一层砖石都是一段往事。1996年，一场大火烧毁了部分屋顶，但随后的重建让它再次新生。如今，它作为博物馆，不仅陈列着盔甲和农具，更讲述着这片土地和它的人民跨越七百年的坚韧故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味久洛城堡的魂，请务必安排一个完整的上午或下午，预留至少3到4小时。最佳抵达时间是早上9点开门后不久，或下午2点以后。清晨光线柔和，城堡倒影最为清晰，游客稀少，能独享那份静谧。下午则避开了正午的强光，且游览结束后正好可以欣赏城堡在夕阳下的金色轮廓。整体节奏宜慢不宜快，先从外部环绕感受它的气场，再深入内部探寻细节，最后在庭院或河边长椅上静静回味。这样的安排能让你从宏观到微观，全面体验这座水上堡垒的时空层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季记得携带驱蚊水，护城河周边植被茂密，蚊虫较多。参观地牢和部分展室时温度较低，即使夏天也建议带一件薄外套。城堡内部指示牌以匈牙利语为主，但关键处有英语，强烈建议租用中文语音导览器，否则会错过大量生动细节。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡正门（东侧）的木桥开始，慢步过桥时停下来，感受脚下流水的声响并仔细观察砖墙在水中的完美倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入主庭院后先别急着进室内，顺时针绕庭院走一圈，仰头看看四角不同的塔楼和墙面上各异的砖砌花纹与古老的排水口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`重点探访西北角的骑士厅和小教堂，在那些有着菱形肋状拱顶的房间里，想象一下中世纪贵族宴会和祈祷的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的螺旋石阶登上南侧的瞭望塔，在塔顶的窗口将一望无际的匈牙利大平原和脚下红屋顶的小镇尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过地下一层的地牢和历史展览，那里用实物和老照片讲述着城堡从建造、围困、衰落到重生的完整故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西侧的小门出去，沿着护城河畔的泥土小径走半圈，从不同角度欣赏城堡与水面、绿树构成的如画风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到城堡入口附近的纪念品商店，这里的文创产品很有品位，不妨找一本关于城堡修复历史的英文小册子作为纪念。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东侧桥梁正中`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，将相机放低贴近水面，可以拍摄到城堡主体与其完整倒影的对称构图，天空的霞光会让画面充满戏剧性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主庭院中心仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入院，站在庭院中心用广角镜头向上拍摄，能将四周高耸的红砖墙、塔楼和一方蓝天全部纳入画面，极具几何感和压迫感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡西北角外侧的河畔`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时，这个位置可以拍到城堡最具代表性的角楼连同水面倒影，结合岸边的垂柳，营造出油画般的静谧感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`南侧塔楼顶层窗口`}</h4>
                  <p className="text-sm text-gray-700">{`利用窗口作为天然画框，拍摄窗外绵延至天际线的匈牙利平原风光和小镇星星点点的红屋顶，寓意“穿越历史的眺望”。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡西侧背阴面的砖墙特写`}</h4>
                  <p className="text-sm text-gray-700">{`在柔和的散射光下（阴天或清晨），近距离拍摄砖墙的风化纹理、蔓生的青苔和古老的砖砌工艺细节，诉说时光的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除护城河水面的反光，让倒影更清晰。航拍能够完美展现城堡在平原和水系中的独特形态，但起飞前务必确认当地法规并尊重他人隐私。拍摄室内展品时请严格遵守禁用闪光灯的规定，保护脆弱的历史文物。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适`}</h4>
                  <p className="text-sm text-blue-800">{`住在镇中心广场旁的“三公牛”家庭旅馆，主人会为你准备丰盛的匈牙利农家早餐，晚上还能听到关于小镇的趣闻轶事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择城堡步行五分钟可达的“费凯特科罗斯”精品酒店，由老房子改造，房间里有裸露的原木梁，部分房间拥有直接观赏城堡塔楼的私密视角。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十五分钟前往郊外的“阿尔弗尔德庄园酒店”，住在传统的平原农庄式建筑里，享受温泉浴场和地道的匈牙利鹅肝晚餐，体验贵族般的田园宁静。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`预订城堡附属建筑内极少量的客房（需提前数月），体验入夜后游客散尽，独享整个城堡领域，聆听猫头鹰叫声划过夜空的中世纪之夜。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`久洛镇非常安全宁静，夜间散步毫无压力。夏季旅游旺季和每年八月的中世纪节期间住宿非常紧张，务必提前至少两三个月预订。如果选择庄园酒店，建议租车，因为小镇夜间出租车服务有限。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开久洛城堡很久以后，我脑海里最清晰的画面，不是某一块砖或某一间展室，而是那份弥漫在空气中的、宽广的宁静。在这个追求速度和刺激的时代，这样一座城堡的存在，像是一个温柔的提醒。它告诉我们，美和力量不一定需要险峻山峰的衬托，它们可以在最平坦的土地上，凭借匠心、坚持和对家园的眷恋，从水中生长出来，屹立数百年。它的故事里没有不可一世的征服，更多的是坚守、适应、遗忘和重生，这何尝不是大多数普通人历史的写照？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被游客包围的明星景点，渴望一次真正能走进历史纹理、与自己对话的旅行，请来久洛。专程为它而来是值得的。它不会用喧嚣的表演迎接你，只会用一池静水、一圈红墙和一片无垠的天空拥抱你。在这里，你可以花一个下午，什么都不做，就看着光影在砖墙上缓慢移动，直到心也像那护城河的水一样，沉淀下来，映照出最真实的自己。这座平原上的水上砖堡，是一位沉默的智者，等待着那些愿意慢下来、听它用砖石与流水讲述故事的旅人。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stolzenfels-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施托尔岑费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolzenfels Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/miskolc" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米什科尔茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miskolc</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gradara-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉达拉城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gradara</p>
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
