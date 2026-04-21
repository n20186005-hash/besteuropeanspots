import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱希河畔兰茨贝格 Landsberg am Lech｜罗曼蒂克大道上的色彩之城，巴伐利亚的时光琥珀 - 最佳欧洲景点',
  description: '嘿，朋友，如果你厌倦了慕尼黑啤酒馆的喧嚣，想找一个能让心跳和脚步都慢下来的地方，那我必须把你推到莱希河畔兰茨贝格的面前。我的第一眼，是从那座奶油黄色的拜仁门开始的。穿过深邃的门洞，就像穿过一个时光隧道，门内的世界瞬间被调高了饱和度。眼前的老街不是严肃的灰，而是扑面而来的粉、鹅黄、薄荷绿和陶土红，一栋...',
}

export default function LandsbergAmLechPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '莱希河畔兰茨贝格', href: '/attractions/landsberg-am-lech' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱希河畔兰茨贝格・Landsberg am Lech・德国・兰茨贝格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了慕尼黑啤酒馆的喧嚣，想找一个能让心跳和脚步都慢下来的地方，那我必须把你推到莱希河畔兰茨贝格的面前。我的第一眼，是从那座奶油黄色的拜仁门开始的。穿过深邃的门洞，就像穿过一个时光隧道，门内的世界瞬间被调高了饱和度。眼前的老街不是严肃的灰，而是扑面而来的粉、鹅黄、薄荷绿和陶土红，一栋挨着一栋，像上帝打翻的颜料盘，又像一块巨大的、甜蜜的杏仁糖。阳光斜斜地切下来，在那些绘着圣经故事和神话传说的湿壁画上跳跃，空气里有咖啡香，也有从河边飘来的、带着水汽的青草味。
你很快会发现，这座城的灵魂是那条名叫“莱希”的河。它不是什么奔腾的大江，而是静静流淌的碧绿绸带，完美地绕城而过，把倒影里的塔楼、山墙和蓝天白云都揉碎了又铺平。当地人生活的节奏，就跟着河水的流速。早晨，你会看到老太太提着篮子从桥上走过，去河对岸的面包房；下午，年轻的情侣坐在古老的堤坝上，脚悬在半空，什么也不说；傍晚，天鹅一家排着队，从容不迫地从拱桥下游过。这里的声响是温和的——教堂整点的钟声、石板路上行李箱轮子的咕噜声、露天咖啡馆杯碟轻微的碰撞声。它不像一个景点，更像一个被精心保养的、还在呼吸的梦。
最打动人心的，莫过于这种“活着的古董”状态。那些挂着花箱、色彩斑斓的房子里，住着真实的人家。一楼可能是设计师小店或家庭餐馆，楼上窗户晾着衣服。你在欣赏一幅18世纪描绘丰收的壁画时，隔壁可能正传来烤苹果派的焦糖香气。这里没有那种博物馆式的冰冷距离感，历史和日常以一种最温暖的方式交织在一起。走在其中，你不由自主地会挺直腰板，放轻脚步，生怕惊扰了这份沉淀了数百年的宁静与美好。它就像一个巨大的安慰剂，告诉你：慢下来，生活本可以这样精致而从容。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了慕尼黑啤酒馆的喧嚣，想找一个能让心跳和脚步都慢下来的地方，那我必须把你推到莱希河畔兰茨贝格的面前。我的第一眼，是从那座奶油黄色的拜仁门开始的。穿过深邃的门洞，就像穿过一个时光隧道，门内的世界瞬间被调高了饱和度。眼前的老街不是严肃的灰，而是扑面而来的粉、鹅黄、薄荷绿和陶土红，一栋挨着一栋，像上帝打翻的颜料盘，又像一块巨大的、甜蜜的杏仁糖。阳光斜斜地切下来，在那些绘着圣经故事和神话传说的湿壁画上跳跃，空气里有咖啡香，也有从河边飘来的、带着水汽的青草味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这座城的灵魂是那条名叫“莱希”的河。它不是什么奔腾的大江，而是静静流淌的碧绿绸带，完美地绕城而过，把倒影里的塔楼、山墙和蓝天白云都揉碎了又铺平。当地人生活的节奏，就跟着河水的流速。早晨，你会看到老太太提着篮子从桥上走过，去河对岸的面包房；下午，年轻的情侣坐在古老的堤坝上，脚悬在半空，什么也不说；傍晚，天鹅一家排着队，从容不迫地从拱桥下游过。这里的声响是温和的——教堂整点的钟声、石板路上行李箱轮子的咕噜声、露天咖啡馆杯碟轻微的碰撞声。它不像一个景点，更像一个被精心保养的、还在呼吸的梦。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，莫过于这种“活着的古董”状态。那些挂着花箱、色彩斑斓的房子里，住着真实的人家。一楼可能是设计师小店或家庭餐馆，楼上窗户晾着衣服。你在欣赏一幅18世纪描绘丰收的壁画时，隔壁可能正传来烤苹果派的焦糖香气。这里没有那种博物馆式的冰冷距离感，历史和日常以一种最温暖的方式交织在一起。走在其中，你不由自主地会挺直腰板，放轻脚步，生怕惊扰了这份沉淀了数百年的宁静与美好。它就像一个巨大的安慰剂，告诉你：慢下来，生活本可以这样精致而从容。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱希河畔兰茨贝格`} />
                <InfoRow label="英文名称" value={`Landsberg am Lech`} />
                <InfoRow label="正式名称" value={`Landsberg am Lech`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`兰茨贝格`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是中世纪重要的盐路贸易枢纽，巴伐利亚公爵的铸币中心，也是一战末期希特勒撰写《我的奋斗》的所在地。`} />
                <InfoRow label="建筑特色" value={`保存完好的中世纪城市肌理，以绚丽的文艺复兴及巴洛克风格立面、宏伟的城门塔楼和蜿蜒的莱希河共同构成一幅立体画卷。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式为基础，大量融合了文艺复兴、巴洛克及洛可可式的湿壁画与外立面装饰。`} />
                <InfoRow label="文化价值" value={`是一座活生生的中世纪城市博物馆，生动展现了南德小城从商业繁荣到战争创伤，再到宁静复兴的完整生命历程。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整个老城区全天可游览。主要的博物馆和地标建筑如拜仁门博物馆开放时间为周二至周日的10:00至17:00，冬季（11月至3月）可能缩短为13:00至16:00。市政厅塔楼登顶通常在5月至10月的周末及节假日开放，具体时间常变，建议提前在旅游局官网核对。圣诞节期间广场有市集，但多数室内景点在12月24日、25日及31日关闭。`} />
              <InfoRow label="门票价格" value={`漫步古城本身免费。拜仁门博物馆门票约5欧元，学生及团体有优惠。登上市政厅历史塔楼（Historischer Stadtturm）门票约2欧元。部分教堂内的珍宝室可能收取1-2欧元的自愿捐赠。推荐购买“兰茨贝格卡”（约10欧元），可涵盖城内主要博物馆和一次塔楼登顶。`} />
              <InfoRow label="地址" value={`Hauptplatz 152, 86899 Landsberg am Lech, Germany`} />
              <InfoRow label="交通方式" value={`从慕尼黑中央火车站（München Hbf）出发最便捷。搭乘区域火车（RB）或快车（RE）前往兰茨贝格（Lech）站，方向多为兰茨贝格或林道，车程约40-50分钟，班次频繁，几乎每小时都有2-3班。出站后，步行穿过莱希河上的桥，大约15分钟即可到达老城中心。从慕尼黑机场而来，可先乘S-Bahn到中央火车站再转火车。自驾车可将车停在老城边缘的公共停车场（如Parkhaus am Papierbach），步行进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起兰茨贝格的命运，绕不开两样东西：盐和河流。早在12世纪，当巴伐利亚公爵“狮子”亨利在这里筑起城堡（可惜如今只剩废墟），它的战略地位就注定了。但真正让它富得流油的，是那条连接萨尔茨堡和奥格斯堡的“盐路”。莱希河成了天然的交通动脉，满载着白色黄金的驳船在这里停靠、交易、纳税。到了14世纪，它已经阔气到能修建起令人惊叹的防御工事——包括我们今天看到的拜仁门和那绵延的城墙。财富涌进来，市民的腰包鼓了，第一个建设高潮随之到来，哥特式的市政厅和圣约翰教堂拔地而起，奠定了老城的骨架。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的繁荣总伴随着劫难。1633年，三十年战争的烽火烧到了这里，瑞典军队的炮火几乎将城市夷为平地。可谁能想到，这场灾难却成了它凤凰涅槃的契机。重建带来了新的风尚——巴洛克和洛可可。18世纪是它的“黄金时代”，那些我们今天为之惊叹的绚丽外立面，大多诞生于这个时期。富商和行会争相聘请艺术家，用湿壁画和灰泥装饰把自家门面变成艺术品，仿佛在进行一场无声的炫富比赛。你看到的那些栩栩如生的天使、丰腴的水果和优雅的帷幔，都是那个乐观、奢华时代的回声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的转折有时充满了讽刺。20世纪初，这座宁静小城被卷入世界大战的漩涡。1918年，一个名叫阿道夫·希特勒的奥地利下士，在城外的监狱里（现在是一座青年旅社）服刑。就在那个小房间里，他口述了那本后来将世界拖入深渊的《我的奋斗》。这段黑暗记忆，像一道伤疤刻在城市的历史上。当地人不愿多提，但也没有刻意抹去，只是在老城从容的步调中，沉默地展示着和平的可贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二战末期，兰茨贝格再次遭受猛烈空袭，部分建筑被毁。但战后，德国人展现了惊人的“修补”精神。他们不是推倒重来，而是像修复一件珍贵的瓷器，一砖一瓦地按照原样复原。这种对历史的尊重，让老城几乎完整保留了战前的风貌。今天，它不再是一个战略要冲或贸易中心，而是找到了自己新的定位：罗曼蒂克大道上一颗宁静的明珠，一个让人逃离现实、浸润在色彩与历史中的桃源。从盐路重镇到囚禁恶魔的牢笼，再到治愈心灵的色彩之城，它的故事，比任何小说都更加跌宕起伏。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要给兰茨贝格留出完整的一天，才能真正品味它的韵味。建议早上9点左右抵达，这时旅行团尚未涌入，阳光柔和，是拍摄色彩建筑的最佳时机。整体游览节奏应极度放松，以步行探索老城为核心，结合一次塔楼登高望远，一次河边静坐发呆，再穿插进咖啡馆和博物馆的室内时光。路线设计成一个环线，从拜仁门进入，沿着主干道感受繁华，再钻进小巷发现细节，最后在莱希河畔结束，让流动的河水为旅程画上宁静的句号。这样的安排既能把握主要地标，又留足了漫无目的闲逛的惊喜空间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午老城广场有热闹的市集，是体验本地生活的好时机，但也会非常拥挤，喜欢清静的话建议避开。
进入教堂等场所请保持安静，穿着避免过于暴露，这是对当地宗教习俗的基本尊重。
许多小巷铺着鹅卵石，请务必穿一双舒适耐走的平底鞋，高跟鞋在这里绝对是灾难。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过高大雄伟的拜仁门，仰头细看门洞内顶古老的木结构，瞬间完成从中世纪防御工事到童话王国的切换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街（Hauptplatz）慢慢逛，让眼睛饱餐两侧建筑立面上那些华丽到炫目的巴洛克湿壁画和洛可可装饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进狭窄的“制革匠巷”，触摸两边墙壁粗糙的质感，想象中世纪工匠在此忙碌的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上市政厅的历史塔楼，在狭窄的旋转楼梯后收获一个将彩色屋顶、河流与远处田野尽收眼底的360度全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进略显昏暗的圣约翰教堂，等待眼睛适应后，欣赏祭坛上那尊震撼人心的“泪之基督”木雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在莱希河畔找一张长椅坐下，什么都不做，就看天鹅巡游、柳枝轻拂和对岸色彩房子的完美倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观拜仁门内的市立博物馆，在小房间里了解这座城从盐路贸易到黑暗二战的全部秘密。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分回到老城广场，找一家有露天座位的餐馆，点一份巴伐利亚奶酪面疙瘩，看着广场建筑在夕照下变成温暖的蜜糖色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`莱希河上的新桥中段`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，将相机放低贴近水面，能拍出建筑群及其完美倒影的对称构图，天鹅入画则更添灵动。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅历史塔楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后，将镜头从垛口伸出，以近处红色的屋顶和远处绿色的田野为前景，勾勒老城天际线的起伏轮廓。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`拜仁门内侧门洞`}</h4>
                  <p className="text-sm text-gray-700">{`站在门内阴影处，向外拍摄被门框精确“裁切”出的、阳光照耀下的彩色街道，形成强烈的明暗与色彩对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣母升天教堂内部`}</h4>
                  <p className="text-sm text-gray-700">{`下午光线从西窗射入时，站在中殿后方，捕捉光束穿过略显烟雾的空气，照亮华丽祭坛的“神圣之光”效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`制革匠巷的转角`}</h4>
                  <p className="text-sm text-gray-700">{`利用小巷天然的纵深感和两侧古老的墙壁作为引导线，等待一个当地人骑车或打伞走过的瞬间，增加故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄私人住宅的美丽立面时请尽量迅速、低调，避免长时间对准别人窗户，尊重居民隐私。`}</li>
                <li>• {`巴洛克湿壁画在柔和的侧光下（上午或下午）细节最丰富，正午的顶光反而会让画面缺乏立体感。`}</li>
                <li>• {`使用偏振镜可以有效消除河面反光，让水下的石头和倒影更加清澈通透。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济精选`}</h4>
                  <p className="text-sm text-blue-800">{`老城边缘一家由传统木桁架房屋改造的温馨家庭旅馆，房间窗户正对着内院的小花园，晚上能听到教堂悠远的钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`“盐路”上的历史客栈，建筑本身可以追溯到16世纪，木梁低矮，楼梯吱呀，但早餐的蜂蜜是房东自家蜂场产的，味道独一无二。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在莱希河畔一座新古典主义宫殿建筑内的精品酒店，房间拥有极高的天花板和华丽的石膏线，在河景阳台上享用早餐是至高享受。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代便利`}</h4>
                  <p className="text-sm text-purple-800">{`位于火车站附近的新建设计酒店，风格简约明快，交通极其方便，适合赶早班火车或自驾的旅客，并提供不错的自助早餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量有限且非常抢手，尤其是夏季和圣诞市集期间，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在河畔虽然风景绝佳，但夏季可能会有蚊虫，建议选择有纱窗的房间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`兰茨贝格整体治安极好，即使是边缘区域的住宿也非常安全，可以放心夜归。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开兰茨贝格好些天了，我闭上眼，脑海里浮现的不是某个具体的雕塑或教堂，而是一种整体的、温暖的色调，和一种河水般平静流淌的心境。在这个追求效率和刺激的世界里，它像一个固执的守梦者，小心翼翼地保护着一种近乎失传的生活美学——那种对家园的精雕细琢，对日常的郑重其事，以及对历史伤疤的坦然与修复。走在它的街道上，你能感受到时间不是一条直线，而是一个环，过去工匠的虔诚、战火的灼痛与今日咖啡馆的闲适，都沉淀在同一块石板之下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你问我为什么一定要来兰茨贝格？我会说，它不仅仅是一个“景点”。它是一个证明，证明人类在历经沧桑后，依然有能力创造并守护美好；它是一个提醒，提醒我们生活可以拥有色彩、细节和从容不迫的尊严。在这里，你消费的不是门票和纪念品，而是一段被温柔包裹的时光。对于每一位真正的深度旅者而言，它就像罗曼蒂克大道上一颗被忽略的珍珠，不张扬，却有着最温润的光泽。来这里，把自己浸入这片色彩的河流，你会带走一份关于“宁静”和“治愈”的力量，这或许才是旅行最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stralsund" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施特拉尔松德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stralsund</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pienza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮恩扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pienza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zadar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    扎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">扎达尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zadar</p>
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
