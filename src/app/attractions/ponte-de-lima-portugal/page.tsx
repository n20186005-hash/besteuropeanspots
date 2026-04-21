import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蓬蒂-迪利马 Ponte de Lima｜漫步葡萄牙最古老小镇，触摸千年罗马古桥的灵魂 - 最佳欧洲景点',
  description: '车子刚驶近蓬蒂-迪利马，我就被窗外那幅画给定住了。利马河像一条宽阔的、懒洋洋的银绿色绸带，在午后的阳光下泛着细碎的光。而横跨其上的，就是那座传说中的罗马古桥。它没有那种咄咄逼人的宏伟，反而有种历经风霜后的沉静与谦和。一部分是敦实厚重的罗马桥墩，浸在清凉的河水里，长着茸茸的青苔；另一部分是后来重建的、...',
}

export default function PonteDeLimaPortugalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '蓬蒂-迪利马', href: '/destinations/portugal' },
            { label: '蓬蒂-迪利马', href: '/attractions/ponte-de-lima-portugal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蓬蒂-迪利马・Ponte de Lima・葡萄牙・蓬蒂-迪利马`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚驶近蓬蒂-迪利马，我就被窗外那幅画给定住了。利马河像一条宽阔的、懒洋洋的银绿色绸带，在午后的阳光下泛着细碎的光。而横跨其上的，就是那座传说中的罗马古桥。它没有那种咄咄逼人的宏伟，反而有种历经风霜后的沉静与谦和。一部分是敦实厚重的罗马桥墩，浸在清凉的河水里，长着茸茸的青苔；另一部分是后来重建的、更显纤细优雅的石拱。历史和时光在这里不是断裂的，而是像河水一样，自然而然地从古流到了今。
停好车，我迫不及待地走向河边。空气里混合着好几种气味：河水湿润的清新感，岸边百年悬铃木散发的植物气息，还有从老城区飘来的、若有若无的咖啡香和新鲜烤面包的甜味。耳朵里灌满了声音——潺潺的水流声是背景音，桥上偶尔驶过老式汽车的嗡嗡声，河边步道上当地人慢跑的脚步声，以及咖啡馆露天座传来的、清脆的葡萄牙语交谈声和杯碟碰撞声。这座桥，绝不是一个仅供观赏的“文物”，它就是小镇的客厅、走廊和阳台，人们在这里散步、遛狗、约会、发呆，生活就这样日复一日地在古老的石头上流淌。
我沿着河岸漫步，左侧是幽深宁静的古老花园（Jardins do Arnado），右侧是开阔的河景与对岸无垠的绿野。转过身，老城区那些刷着白色、鹅黄色外墙，镶着灰色花岗岩窗框的房屋，层层叠叠地铺展在小山坡上。最奇妙的感觉在于，你完全不会觉得自己闯入了一个博物馆式的古镇。晾晒的衣物在微风中轻摆，阳台上绽放着天竺葵，老太太提着菜篮从古老的拱门下走过。历史在这里不是被封存的，而是像呼吸一样自然。蓬蒂-迪利马最打动人的，正是这种“活着的古老”。它毫不费力地将公元1世纪的罗马智慧、中世纪的信仰之路与21世纪的悠闲生活，编织在了一起。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚驶近蓬蒂-迪利马，我就被窗外那幅画给定住了。利马河像一条宽阔的、懒洋洋的银绿色绸带，在午后的阳光下泛着细碎的光。而横跨其上的，就是那座传说中的罗马古桥。它没有那种咄咄逼人的宏伟，反而有种历经风霜后的沉静与谦和。一部分是敦实厚重的罗马桥墩，浸在清凉的河水里，长着茸茸的青苔；另一部分是后来重建的、更显纤细优雅的石拱。历史和时光在这里不是断裂的，而是像河水一样，自然而然地从古流到了今。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，我迫不及待地走向河边。空气里混合着好几种气味：河水湿润的清新感，岸边百年悬铃木散发的植物气息，还有从老城区飘来的、若有若无的咖啡香和新鲜烤面包的甜味。耳朵里灌满了声音——潺潺的水流声是背景音，桥上偶尔驶过老式汽车的嗡嗡声，河边步道上当地人慢跑的脚步声，以及咖啡馆露天座传来的、清脆的葡萄牙语交谈声和杯碟碰撞声。这座桥，绝不是一个仅供观赏的“文物”，它就是小镇的客厅、走廊和阳台，人们在这里散步、遛狗、约会、发呆，生活就这样日复一日地在古老的石头上流淌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我沿着河岸漫步，左侧是幽深宁静的古老花园（Jardins do Arnado），右侧是开阔的河景与对岸无垠的绿野。转过身，老城区那些刷着白色、鹅黄色外墙，镶着灰色花岗岩窗框的房屋，层层叠叠地铺展在小山坡上。最奇妙的感觉在于，你完全不会觉得自己闯入了一个博物馆式的古镇。晾晒的衣物在微风中轻摆，阳台上绽放着天竺葵，老太太提着菜篮从古老的拱门下走过。历史在这里不是被封存的，而是像呼吸一样自然。蓬蒂-迪利马最打动人的，正是这种“活着的古老”。它毫不费力地将公元1世纪的罗马智慧、中世纪的信仰之路与21世纪的悠闲生活，编织在了一起。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蓬蒂-迪利马`} />
                <InfoRow label="英文名称" value={`Ponte de Lima`} />
                <InfoRow label="正式名称" value={`Ponte de Lima`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`蓬蒂-迪利马`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是葡萄牙官方授予“城镇”称号最早的地方（1125年），其罗马古桥是葡萄牙北部通往圣地亚哥朝圣之路上的关键地标。`} />
                <InfoRow label="建筑特色" value={`利马河上矗立着古朴雄健的罗马桥墩与优雅的哥特式桥拱相结合的石桥，与河岸两旁绵延的悬铃木、古老的石砌房屋及花园浑然一体。`} />
                <InfoRow label="建筑风格" value={`以罗马式桥墩为基础，融合了中世纪哥特式重建的拱桥风格，周边建筑群则体现了典型的葡萄牙北部米尼奥地区传统民居特色。`} />
                <InfoRow label="文化价值" value={`这座桥与小镇共同构成了一幅活生生的历史画卷，不仅是交通要道，更是当地社区生活的中心，完美诠释了“遗产”如何在现代日常生活中呼吸与延续。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`罗马古桥及古镇公共区域全天24小时开放。镇内部分博物馆、宫殿及教堂的开放时间各异，通常为周二至周日 10:00-12:30 & 14:00-18:00，周一闭馆。建议出行前查阅具体场馆的官方网站。每周一上午古镇有大型露天市集，气氛热烈。`} />
              <InfoRow label="门票价格" value={`古镇及罗马古桥区域免费参观。镇内部分小型博物馆可能需要2-5欧元的门票，联票通常更划算。65岁以上老人及12岁以下儿童普遍享受免费或半价优惠。`} />
              <InfoRow label="地址" value={`Ponte de Lima, 4990-090 Viana do Castelo, Portugal`} />
              <InfoRow label="交通方式" value={`从波尔图（Porto）出发最为便捷。从波尔图弗朗西斯科·萨·卡内罗机场（OPO）或市区，可乘坐火车或长途巴士前往维亚纳堡（Viana do Castelo），车程约1.5小时。抵达维亚纳堡后，换乘当地区域巴士（如AV Minho公司的班车）前往蓬蒂-迪利马，车程约30分钟，班次每小时1-2班。自驾是最灵活的方式，从波尔图沿A3/A27高速公路向北行驶约1小时即可抵达，古镇入口处有充足的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说来有趣，这座桥和小镇的命运，从一开始就和“路”紧紧绑在一起。大约在公元1世纪左右，罗马帝国为了加强对其最西端省份卢西塔尼亚的控制和资源运输，决定在这里的利马河上建造一座坚固的石桥。利马河看似平静，实则水量丰沛，罗马工程师们选择了最稳妥的策略：用巨大的花岗岩石块垒砌成船型的桥墩，以分开水势，减少冲击。你可以想象，近两千年前，骡马、士兵、商旅第一次稳稳当当地从河这边走到河那边，该是多么激动人心。这座桥成了连接布拉加（Bracara Augusta）与阿斯托加（Asturica Augusta）这两大罗马城市重要道路上的咽喉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马帝国衰落后，桥依然屹立，但岁月和战乱带来了损坏。真正让“蓬蒂-迪利马”这个名字载入史册的，是葡萄牙的第一位国王阿方索·恩里克斯。在摩尔人势力逐渐被驱赶的背景下，为了鼓励人们向北方新收复的土地迁徙和定居，他于1125年正式授予这个桥头聚居地“城镇”特许状。这是葡萄牙历史上第一份这样的文件，“蓬蒂-迪利马”因此骄傲地戴上了“葡萄牙最古老城镇”的桂冠。桥，不仅是物理的通道，更成了王国权力与秩序的象征，吸引着商人、手工艺人和农民在它的两端安家。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪是朝圣的黄金时代。无数来自欧洲各地的虔诚教徒，踏上了前往西班牙圣地亚哥·德孔波斯特拉的漫漫朝圣路。蓬蒂-迪利马的这座桥，成为了葡萄牙之路（Caminho Português）上一个无法绕过的关键节点。想象一下那些风尘仆仆的朝圣者，当他们看到利马河和这座坚实的石桥时，该是怎样的慰藉。过桥，意味着又克服了一段艰辛，离灵魂的目标更近一步。小镇也因此繁荣起来，为朝圣者服务的旅舍、医院、教堂相继建立。哥特式的拱门取代了部分更古老的桥段，仿佛是为了让这条信仰之路走得更加顺畅、庄严。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的河流总有湍急处。14世纪后期，葡萄牙与卡斯蒂利亚王国之间战火重燃，这座战略要冲的桥成了兵家必争之地。为了防御，人们在桥的一端修建了高大的碉楼和坚固的城墙。你至今仍能看到那些遗迹，冰冷的石头诉说着曾经的剑拔弩张。和平年代，桥又恢复了它作为交流和商业枢纽的职能。小镇周围肥沃的土地孕育了著名的“Vinho Verde”（绿酒）产区，河边的土地被开垦成繁茂的菜园和葡萄园。每周一，桥边的空地上都会举办盛大的市集，这个传统从中世纪延续至今，农民们带着新鲜的农产品、手工制品赶来，热闹非凡，那才是小镇心跳最快的时候。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到现代，古桥经历了科学的修复和加固，但它的核心功能从未改变。它不再承载军队或大量商队，但每天仍有无数自行车骑手、徒步旅行者（尤其是现代朝圣者）、本地居民和像我们这样的游客从上面走过。当我们脚踩在那些被磨得光滑温润的石块上，指尖触摸到粗糙斑驳的桥栏时，我们触摸的不仅仅是一座桥，而是一整部流动的葡萄牙史诗——从罗马军团的铁蹄，到国王的特许令；从朝圣者疲惫而坚定的脚步，到防御者的警惕目光；再到今天，孩子奔跑的笑声和恋人依偎的甜蜜。它沉默地见证了所有，并将一切融合成河边这座色彩柔和、生活节奏舒缓的迷人小镇。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味蓬蒂-迪利马，请务必预留一整天时间，并且从上午开始你的探索。这样的安排能让你感受到小镇从晨雾中苏醒的宁静，体验热闹的午间市集（如果是周一），并在夕阳下领略古桥最温柔的时刻。整体节奏应该放慢，这里不适合赶路，只适合沉浸。建议先从外围感受它的全景和气场，再深入老城的脉络，最后回归河边，以一场悠闲的晚餐或散步结束。深度游的精髓在于，把自己想象成一个本地人，而不是匆匆过客。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`除非你想体验极致热闹，否则尽量避免在夏季（7-8月）的周末或法定假日前往，那时游客和本地度假者会非常多。
参观教堂或博物馆内部时，着装需得体，避免过于暴露的背心或短裤，这是一个基本的尊重。
小镇石板路多且略有起伏，请务必穿一双绝对舒适防滑的鞋子，高跟鞋在这里将是灾难。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上午先从河岸东侧开始，沿着被巨大悬铃木荫蔽的散步道（Passeio 25 de Abril）缓缓行走，从最佳角度远眺罗马古桥与老城同框的经典画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`带着第一印象，亲自走上那座斑驳的古桥，在中段的拱顶下驻足，感受河风，低头观察水中坚实的罗马桥墩和它们激起的涟漪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从桥的西端进入老城核心，穿过古老的石拱门（Torre da Cadeia Velha），立刻把自己丢进狭窄而迷人的石板路网络里，比如Rua do Amparo。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻访镇上的宗教艺术博物馆（Museu dos Terceiros），它由两座相连的巴洛克教堂构成，内部的金色木雕奢华精美到令人窒息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城中心寻找那些被称为“Casa do Adro”的古老骑士或贵族宅邸，留意它们花岗岩外墙上精美的纹章雕刻，每一块都藏着一个家族故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐时间，一定要去阿玛斯广场（Largo de Camões）附近，找一家有露天座位的传统餐馆，点一份用利马河鱼做的特色菜或米尼奥炖肉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后消食，去探索河南岸的“时空主题花园”（Jardins Temáticos），尤其是复制的中世纪花园和文艺复兴花园，仿佛走进了不同的历史植物绘本。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把下午的最后时光留给相对小众的“恐怖玩具博物馆”（Museu do Brinquedo Português），看看葡萄牙的老式玩具，有趣又怀旧，视角独特。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河岸东侧散步道中段`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时或日落前一小时，阳光会为古桥和老城建筑染上金边，利用悬铃木的枝叶作为前景框架，构图极为优美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`古桥中段面向下游方向`}</h4>
                  <p className="text-sm text-gray-700">{`蹲低身体，用广角镜头贴近桥面石板，将引导线指向远方河面与绿野，能拍出桥的纵深感与历史沧桑。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城内Rua do Amparo石板路`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，两侧高墙会形成强烈的明暗对比，等待一个当地人或一只猫走过光影交界线的瞬间，故事感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`河边咖啡馆“Café 33”的露天座位`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，点一杯咖啡，将隔壁古老洗衣池（Fonte do Arame）依然在洗衣服的当地妇人与背景古桥一同纳入镜头，捕捉活生生的遗产。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`爬上老城西侧小山坡的圣安东尼奥教堂（Igreja de Santo António）前`}</h4>
                  <p className="text-sm text-gray-700">{`这里可以俯拍整个老城连绵的红色屋顶和远处的利马河谷，黄昏时分的蓝调时刻最美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`柔和的光线是古镇的朋友，尽量利用清晨和傍晚的“黄金时刻”与“蓝色时刻”进行拍摄，正午的强光容易让画面生硬。`}</li>
                <li>• {`当地人非常友善且习惯了游客的镜头，但在拍摄人物特写前，一个微笑和手势征得同意，会收获更温暖的笑容作为回报。`}</li>
                <li>• {`使用无人机拍摄前，务必确认当地法规，尤其注意避开人群和私人住宅区域，古镇上空有时会有禁飞限制。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城墙边由百年石屋改造的家庭旅馆，房间小巧温馨，主人会为你手绘一张只有本地人才知道的秘密角落地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在利马河畔的复古庄园（Quinta）里，房间窗外就是葡萄园和河流，早晨在鸟鸣和庄园自产的蜂蜜早餐中醒来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择位于历史中心一座18世纪宫殿内的精品酒店，内部是现代设计美学与古老石墙、木梁的完美对话，配备一流的米其林推荐餐厅。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特选择`}</h4>
                  <p className="text-sm text-purple-800">{`租住河边一栋传统的“ Casa de Abrigo”（朝圣者旅舍风格房子），体验极简而宁静的庇护所感觉，夜晚能听到最纯粹的流水声。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果恰逢镇上著名的“Vaca das Cordas”（奔牛节，6月）或“Feiras Novas”（9月）等传统节庆期间前往，务必提前至少3-4个月预订住宿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择河景房固然美妙，但夏季需做好防蚊措施，河边的生态环境太好了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安极好，夜晚散步非常安全，但无论住在哪里，保管好贵重物品仍是旅行通行的好习惯。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开蓬蒂-迪利马时，我的背包里没有多出什么纪念品，但心里却装满了一种沉甸甸的踏实感。这种踏实，来自于你亲眼见证了一样东西如何穿越两千年，不仅没有成为废墟，反而越来越深地融入了人们的血脉和日常。这座桥，这个镇，它教会你的不是对过往辉煌的凭吊，而是一种关于“延续”的智慧。石头会磨损，样式会改变，王朝会更迭，但只要生活还在河边继续，只要人们还需要相遇、需要交易、需要走过对岸去探望亲人或开始新的旅程，这座桥就永远有存在的意义。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个什么都追求“新”、追求“快”的世界里，蓬蒂-迪利马像一个温柔的提醒。它告诉你，真正的深度不是去追逐一个又一个打卡点，而是停下来，在一个地方感受时间的层次。当你脚踩罗马的石块，眼中看到的是中世纪朝圣者的背影，耳中听到的是当代咖啡馆的笑语，鼻尖闻到的是河水与咖啡交融的气息——那一刻，你不再是历史的旁观者，你成了时间流中的一部分。这才是旅行能带给我们的、最珍贵的礼物：一种连接感，与过去，与土地，与另一种生活节奏的连接。所以，如果你也渴望在旅途中找到一份内心的宁静与丰盈，请一定要来蓬蒂-迪利马，走过那座桥，让利马河的水声，也流进你的记忆里。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/coimbra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viseu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belem-tower-lisbon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝伦塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belém Tower</p>
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
