import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卓宁霍姆宫 Drottningholm Palace｜瑞典王室私藏的“北方凡尔赛”，在洛可可宫殿与古老剧院间做一场白日梦 - 最佳欧洲景点',
  description: '船还没靠岸，你就已经懂了它为什么叫“北方凡尔赛”。不是那种咄咄逼人的辉煌，而是一种清冷又明媚的气场。卓宁霍姆宫就那么静静地躺在梅拉伦湖边的皇家领地上，鹅黄色的外墙被北欧特有的、倾斜而清澈的阳光洗得发亮，倒影在湖水里，随着水波轻轻摇晃。空气里有湖水微腥的气息，混着远处花园刚割过的草香，还有从宫殿敞开的...',
}

export default function DrottningholmPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卓宁霍姆宫', href: '/attractions/drottningholm-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卓宁霍姆宫・Drottningholm Palace・瑞典・斯德哥尔摩市-埃克勒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`船还没靠岸，你就已经懂了它为什么叫“北方凡尔赛”。不是那种咄咄逼人的辉煌，而是一种清冷又明媚的气场。卓宁霍姆宫就那么静静地躺在梅拉伦湖边的皇家领地上，鹅黄色的外墙被北欧特有的、倾斜而清澈的阳光洗得发亮，倒影在湖水里，随着水波轻轻摇晃。空气里有湖水微腥的气息，混着远处花园刚割过的草香，还有从宫殿敞开的某扇窗里飘出的、若有似无的柠檬油混着旧书本的气味。喷泉的水声哗哗的，不是凡尔赛那种交响乐式的磅礴，更像是背景白噪音，衬得四周更静了。你会看到推着婴儿车的本地妈妈在碎石小路上散步，跑步的人戴着耳机从你身边掠过——这座宫殿对他们而言，不是遥远的纪念碑，而是周末散步时的背景板，是生活的一部分。
而最奇妙的感知在于，你知道国王和王后今天可能就在那扇窗户后面。是的，南翼那不起眼的部分，窗帘拉着，阳台上摆着几盆普通的鲜花，那就是现任瑞典国王卡尔十六世·古斯塔夫的家。这种“王室就在隔壁”的感觉，彻底打破了你对皇宫的想象。它不再是冰冷的博物馆，而是一个有炊烟、有生活的家。警卫穿着笔挺的制服，神情却松弛，偶尔会对好奇张望的孩子微笑。这种亲近感，是任何其他欧洲宫殿都无法给予的。
它的核心魅力，藏在主宫殿金光闪闪的大门之后，更藏在那些看似不起眼的附属建筑里。当你走进那座名为“中国宫”的奇异建筑时，会有一瞬间的恍惚。这根本不是东方的复刻，而是18世纪欧洲人对“中国”一场华丽、天真又充满创造力的白日梦。镀金的龙纹缠绕着北欧的松木，漆画上的亭台楼阁里站着穿清装却有着瑞典面孔的人物。这里没有历史的沉重，只有一场跨越时空的、趣味横生的对话。而当你踏入那座古老的宫廷剧院，灯光暗下，你几乎能听到两百多年前的掌声，闻到蜡烛和脂粉的味道。这里的一切，从舞台机械到布景，都原封不动，时间在这里仁慈地停下了脚步。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`船还没靠岸，你就已经懂了它为什么叫“北方凡尔赛”。不是那种咄咄逼人的辉煌，而是一种清冷又明媚的气场。卓宁霍姆宫就那么静静地躺在梅拉伦湖边的皇家领地上，鹅黄色的外墙被北欧特有的、倾斜而清澈的阳光洗得发亮，倒影在湖水里，随着水波轻轻摇晃。空气里有湖水微腥的气息，混着远处花园刚割过的草香，还有从宫殿敞开的某扇窗里飘出的、若有似无的柠檬油混着旧书本的气味。喷泉的水声哗哗的，不是凡尔赛那种交响乐式的磅礴，更像是背景白噪音，衬得四周更静了。你会看到推着婴儿车的本地妈妈在碎石小路上散步，跑步的人戴着耳机从你身边掠过——这座宫殿对他们而言，不是遥远的纪念碑，而是周末散步时的背景板，是生活的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而最奇妙的感知在于，你知道国王和王后今天可能就在那扇窗户后面。是的，南翼那不起眼的部分，窗帘拉着，阳台上摆着几盆普通的鲜花，那就是现任瑞典国王卡尔十六世·古斯塔夫的家。这种“王室就在隔壁”的感觉，彻底打破了你对皇宫的想象。它不再是冰冷的博物馆，而是一个有炊烟、有生活的家。警卫穿着笔挺的制服，神情却松弛，偶尔会对好奇张望的孩子微笑。这种亲近感，是任何其他欧洲宫殿都无法给予的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，藏在主宫殿金光闪闪的大门之后，更藏在那些看似不起眼的附属建筑里。当你走进那座名为“中国宫”的奇异建筑时，会有一瞬间的恍惚。这根本不是东方的复刻，而是18世纪欧洲人对“中国”一场华丽、天真又充满创造力的白日梦。镀金的龙纹缠绕着北欧的松木，漆画上的亭台楼阁里站着穿清装却有着瑞典面孔的人物。这里没有历史的沉重，只有一场跨越时空的、趣味横生的对话。而当你踏入那座古老的宫廷剧院，灯光暗下，你几乎能听到两百多年前的掌声，闻到蜡烛和脂粉的味道。这里的一切，从舞台机械到布景，都原封不动，时间在这里仁慈地停下了脚步。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卓宁霍姆宫`} />
                <InfoRow label="英文名称" value={`Drottningholm Palace`} />
                <InfoRow label="正式名称" value={`Drottningholm Palace`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`斯德哥尔摩市-埃克勒`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`瑞典首个被列入联合国教科文组织世界遗产的景点，也是当今瑞典王室的永久住所。`} />
                <InfoRow label="建筑特色" value={`巴洛克式主宫殿与法式几何园林浑然一体，内部极尽洛可可的繁复优雅，并罕见地完整保存着18世纪的宫廷剧院与中国风情展馆。`} />
                <InfoRow label="建筑风格" value={`北欧巴洛克建筑的典范，并融合了洛可可、中国风及19世纪浪漫主义园林等多种风格。`} />
                <InfoRow label="文化价值" value={`一座仍在呼吸、被使用的“活态”文化遗产，完美诠释了瑞典从欧洲强权到现代君主立宪国的优雅转身。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿主体：每年5月至8月10:00-16:30；9月10:00-15:30；10月至次年4月仅周末及特定节假日12:00-15:30开放，且必须参加导览团。花园全年全天开放。中国宫与宫廷剧院开放时间更短，且随季节变动剧烈，夏季（6-8月）通常为11:00-16:30。强烈建议出行前在其官网核对最新时刻表，瑞典的公共假期（如仲夏节）可能全天关闭。`} />
              <InfoRow label="门票价格" value={`夏季套票（含宫殿、中国宫、剧院）：成人190瑞典克朗，学生及青少年95瑞典克朗。单独宫殿门票：成人140瑞典克朗。花园免费进入。家庭套票（2大2小）常有优惠。持有斯德哥尔摩卡可免费进入大部分区域。注意：冬季门票价格及包含项目会大幅缩减。`} />
              <InfoRow label="地址" value={`Drottningholm, 178 02 Drottningholm, Sweden`} />
              <InfoRow label="交通方式" value={`最诗意的方式是从斯德哥尔摩市中心的Stromkajen码头乘坐前往卓宁霍姆的渡轮（SL公司的82路航线），航行约45分钟，沿途穿越梅拉伦湖的群岛风光，宛如进入王室度假的序幕。班次夏季约每20-30分钟一班，冬季减少。更经济快捷的方式是搭乘地铁（绿线）到Brommaplan站，转乘公交177或178路，约15分钟直达宫殿门口。购买斯德哥尔摩交通通票（SL Access card）可覆盖所有公交和渡轮。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一座小小的石头屋说起。16世纪中期，瑞典国王古斯塔夫·瓦萨为了他的王后卡塔莉娜，在这里建起了一个名为“龙”的狩猎行宫。那时的它朴素简单，无非是国王歇脚的地方。真正改变它命运的，是1661年冬天的一场大火，几乎把旧宫殿烧成了白地。这场火灾，却意外地引出了一位传奇的女性——摄政王太后海德薇格·埃莉诺拉。丈夫去世，儿子年幼，这位坚强的女性不仅掌控着国家大权，也决心为自己建造一个寄托哀思与权力的避世之所。她看中了这片湖畔的土地，聘请了当时瑞典最顶尖的建筑师小尼哥底母·特辛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`特辛父子是那个时代的天才组合。父亲老尼哥底母是工程师，设计了斯德哥尔摩的许多宏伟建筑；儿子则是艺术家，深受法国凡尔赛宫的影响。他们为卓宁霍姆描绘的蓝图，是一个标准的巴洛克梦想：严格对称的宫殿主体，朝向一片宽阔的、几何图案式的法式花园，轴线一直延伸到远处的湖泊和山丘。宫殿建了整整四十年，海德薇格王太后在这里度过了她的余生，看着花园里的橡树苗慢慢长高，喷泉第一次喷出水花。她把自己的房间装点得奢华无比，尤其是那间“彩绘厅”，天花板画着天神，墙壁是深红色的丝绸，仿佛一个永恒的、华丽的茧房。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，宫殿的命运总是和王朝的婚姻紧密相连。18世纪中叶，它迎来了另一位杰出的女主人——洛维萨·乌尔里卡王后，普鲁士的公主，国王阿道夫·弗雷德里克的妻子。她是一位狂热的艺术与科学赞助人，伏尔泰的笔友，她为卓宁霍姆注入了洛可可的灵巧与启蒙时代的好奇心。我们今天看到的宫殿内部那些轻盈、俏皮、布满金色卷草纹和粉彩绘画的装饰，大多出自她的授意。更神奇的是，她对异域文化充满兴趣，于是便有了那座奇妙的“中国宫”，一个瑞典版的“中国热”结晶。她还大力支持了她的御用建筑师阿德尔克朗兹，建造了那座奇迹般的宫廷剧院。1754年，剧院落成首演，王后本人甚至登台演出。舞台下的机械装置可以模拟雷鸣、海浪，甚至让神祇从天而降。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`戏剧总有落幕时。随着瑞典王权的衰落和时代审美的变迁，卓宁霍姆在19世纪一度被冷落。浪漫主义的风潮吹来，人们觉得僵硬的巴洛克花园不够“自然”，于是宫殿北面又被改造出了一片英式风景园林，有弯曲的小径、仿古的亭子和看似随意的树丛。直到20世纪中期，瑞典王室决定将这里定为永久居所，一场浩大而精细的修复工程开始了。目标不是重建，而是“唤醒”。修复者们用最谨慎的态度，一层层剥落后来的油漆，让18世纪的色彩重见天日；他们找到古老的图纸，让剧院的舞台机械重新运转。1991年，当联合国教科文组织将这里列入世界遗产时，给出的评语精准无比：它是“18世纪北欧皇家宫殿的典范”，并且“保存状态异常完好”。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览应该从中午前开始，预留至少5到6个小时，才能不慌不忙地领略它的多重性格。建议先乘船抵达，让湖上航程作为完美的序章。抵达后，别急着冲进主宫。先在广阔的巴洛克花园里走一走，适应一下这里的尺度与光线，从远处欣赏宫殿的全景。随后进入宫殿内部，跟随导览或语音讲解（强烈推荐），仔细看那些房间。下午的重头戏应该留给中国宫和宫廷剧院，这两处开放时间更短，且内涵极为独特。最后，把黄昏时分留给浪漫的英式花园和湖岸，看着夕阳把宫殿染成蜜糖色。这样的节奏，由外而内，由宏大到精妙，再由历史回归自然，是一场完整的感官与精神旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`宫廷剧院内部导览必须提前在官网预约，现场几乎不可能有空位，这是游览精华中的精华，切勿错过。宫殿内部分房间地板古老光滑，且楼梯较多，建议穿着绝对舒适防滑的鞋子。夏季花园草木繁茂，记得携带防蚊液，否则你的湖边漫步回忆会多出一份“甜蜜的烦恼”。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从渡轮码头走上岸，首先穿过林荫道让目光越过巨大的草坪和喷泉阵列与宫殿的正面来一次郑重其事的对视。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入宫殿大门后立刻右转从海德薇格·埃莉诺拉王太后那间奢华至极、挂满名家画作的“彩绘厅”开始感受巴洛克时代的权力与哀愁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着国王与王后的套间缓缓前行特别注意洛维萨·乌尔里卡王后那间洛可可风格的书房小巧的书架上仿佛还留有她与伏尔泰通信的墨香。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿北门走出瞬间踏入另一个世界在英式风景园的蜿蜒小径上寻找那座可爱的“中国亭”并在此休息片刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返至花园东侧探访那栋外表看似普通木屋、内部却充满奇幻东方想象力的“中国宫”仔细看那些漆画上中西合璧的有趣人物。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`提前预约好时间参加宫廷剧院那场仅30分钟却价值连城的导览在昏暗的光线中听讲解员演示古老的舞台机械发出雷鸣与海浪的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览结束前一定要再次回到主喷泉前的长椅上坐一会儿看着归巢的鸟群飞过宫殿的三角楣感受这座“活着的宫殿”在暮色中渐渐沉静下来的气息。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`巴洛克花园主轴线上`}</h4>
                  <p className="text-sm text-gray-700">{`站在第二层平台的回身拍摄宫殿全景，最佳时间是下午三至五点，阳光西斜，为鹅黄色宫殿打上金色的侧光，将喷泉和修剪整齐的树篱一同构图，展现几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中国宫侧面小径`}</h4>
                  <p className="text-sm text-gray-700">{`找到那扇漆成绿色的“假门”，以其为前景框架，拍摄中国宫色彩斑斓的侧面墙体，阳光透过树叶形成的光斑洒在墙上时尤为梦幻。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`宫廷剧院观众席`}</h4>
                  <p className="text-sm text-gray-700">{`导览时允许拍摄，迅速走到二楼正对舞台的中央位置，用广角镜头拍下整个金红色调的剧院内景，将华美的包厢和舞台帷幕尽收眼底。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`英式花园的“凯旋门”处`}</h4>
                  <p className="text-sm text-gray-700">{`从这个石制门洞向外拍，可以完美框住远处的宫殿主体和一部分湖面，形成古典的画框式构图，傍晚光线柔和时效果最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`返回斯德哥尔摩的渡轮上`}</h4>
                  <p className="text-sm text-gray-700">{`船开动后立刻到船尾甲板，用长焦镜头捕捉卓宁霍姆宫在湖面上渐行渐远的全景，湖水荡漾的倒影会让照片充满离别诗意。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`宫殿内部大部分区域禁止使用闪光灯和三脚架，高感光度能力强的相机在这里会更有优势。拍摄花园时，尝试放低机位，将前景的郁金香或玫瑰与宫殿一同入镜，能增加画面的层次和季节感。尊重隐私，切勿试图拍摄或对准王室私人居住区域的窗户。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济优选`}</h4>
                  <p className="text-sm text-blue-800">{`埃克勒小镇上的温馨B&B，房间小巧干净，房东会为你准备丰盛的北欧式早餐，并告诉你只有本地人才知道的湖边散步小径。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`卓宁霍姆宫殿酒店（Drottningholms Slottshotell），与宫殿一墙之隔，由古老建筑改造，部分房间能直接望见宫殿花园，在历史的气息中入睡和醒来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`梅拉伦湖边的现代设计酒店，拥有全景落地窗和私人阳台，在私密空间里独享湖泊与宫殿的日落，酒店桑拿房是放松徒步后疲惫双腿的绝佳去处。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`王室相邻（极难预订）`}</h4>
                  <p className="text-sm text-purple-800">{`实际上并无对外营业的酒店，但关注瑞典王室财产办公室的网站，极偶尔会有王室领地内历史建筑改造的短租公寓放出，那将是独一无二的体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卓宁霍姆宫位于斯德哥尔摩郊区，晚间非常安静，娱乐和餐饮选择有限，更适合追求宁静和深度体验的旅行者。如果住在附近，建议购买一些零食饮料。夏季和圣诞季是预订高峰期，至少提前三个月规划住宿。许多斯德哥尔摩市中心的酒店也提供包含卓宁霍姆船票的套餐，是不错的折中选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卓宁霍姆宫很久之后，我脑海里反复出现的，不是那些金碧辉煌的大厅，而是一个细微的画面：在宫廷剧院里，向导拉动一个古老的杠杆，头顶的木制云朵开始缓缓移动，并发出“吱呀”的、两百多年前一样的声响。那一刻，时间不是一条直线，而成了一个圆环。我们与18世纪那位热爱戏剧的王后，看到了同样的景象，听到了同样的声音。这种穿越时间的真切触碰，远比看到一件孤零零的展品更令人震撼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是卓宁霍姆宫最独特的意义。它不像许多博物馆化的宫殿，只供人遥望缅怀。它是活的。国王在此居住，花园被精心照料，剧院的舞台偶尔还会为特别演出而点亮。它告诉我们，文化遗产最好的状态不是被封存在玻璃罩里，而是温柔地融入现代生活的脉搏，继续被使用、被爱护、被赋予新的记忆。在这个追求速度和刺激的世界里，卓宁霍姆宫提供了一种北欧式的、低调而坚韧的生活哲学：真正的奢华不是无尽的占有，而是有传承的居住，是与自然和历史和谐共处的能力。来这里，不只是看一座“北方凡尔赛”，更是体验一种可能的生活方式，一种关于时间、家族与文明的，宁静而深邃的思考。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/melk-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Melk Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/visby" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯比老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Visby</p>
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
