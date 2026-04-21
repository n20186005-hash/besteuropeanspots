import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '德瓦城堡 Deva Fortress｜乘倾斜缆车登顶火山锥，探访特兰西瓦尼亚的“石冠”废墟 - 最佳欧洲景点',
  description: '第一眼看到德瓦城堡时，你会感觉它不像人造物，而像是大地本身的一个奇崛的梦。那座巨大的、近乎完美的褐色火山锥，就那么孤傲地从特兰西瓦尼亚平原的边缘拔地而起，山顶上，城堡废墟的轮廓在天空下勾勒出锯齿状的剪影，仿佛是巨人为自己雕刻的项圈。你站在山脚下的市民公园里，耳边是罗马尼亚老人们下棋时的轻声交谈和孩子',
}

export default function DevaFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗马尼亚', href: '/destinations/europe' },
            { label: '德瓦', href: '/destinations/europe' },
            { label: '德瓦城堡', href: '/attractions/deva-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`德瓦城堡・Deva Fortress・罗马尼亚・德瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到德瓦城堡时，你会感觉它不像人造物，而像是大地本身的一个奇崛的梦。那座巨大的、近乎完美的褐色火山锥，就那么孤傲地从特兰西瓦尼亚平原的边缘拔地而起，山顶上，城堡废墟的轮廓在天空下勾勒出锯齿状的剪影，仿佛是巨人为自己雕刻的项圈。你站在山脚下的市民公园里，耳边是罗马尼亚老人们下棋时的轻声交谈和孩子追逐足球的笑声，空气里有刚割过的青草味和远处小吃摊飘来的“米蒂泰伊”烤肠的香气。这一刻，这座曾令敌人胆寒的堡垒，完美地镶嵌在当地人闲适的日常里。
要登上这座“石冠”，必须搭乘那趟倾斜角度极大的红色缆车。坐进去，关上门，车厢便开始近乎垂直地向上攀升。你的身体能清晰地感受到重力的拉扯，手心微微冒汗。但视线却被强行推向窗外：脚下绿意盎然的公园越变越小，德瓦城红瓦黄墙的房子像玩具般铺展开，而山顶那些沉默的巨石墙垣则越来越近，压迫感与兴奋感交织。当缆车“咔嗒”一声抵达终点，你推门而出，迎接你的是山顶毫无遮拦的风——它呼啸着穿过残破的拱门和箭窗，发出低沉如呜咽又清冽如哨音的声响，瞬间卷走了所有尘世的嘈杂。
漫步在废墟之中，触感变得无比清晰。你的指尖拂过被数百年风雨打磨得粗糙而温润的石块，安山岩特有的孔隙感停留在皮肤的记忆里。你踩在碎石和小野花之间，脚下是历史坍塌后的颗粒。这里没有华丽的复原，只有真实的残缺：宴会厅只剩下一排巨大的拱廊骨架，仿佛巨兽的肋骨；小教堂的穹顶早已消失，阳光直接倾泻在长满青苔的地板上；曾经的守卫塔楼，如今是乌鸦最好的瞭望台。这种毫无修饰的荒凉，反而赋予此地一种直击人心的力量。它不试图告诉你一个完整的故事，而是邀请你用想象去填充那些空白。
站在城堡最高的残垣上极目远眺，才是理解其魅力的终极时刻。一边是秩序井然的德瓦老城和平原，另一边是绵延起伏、森林密布的阿普塞尼山脉。你瞬间明白了“特兰西瓦尼亚钥匙”这个称号的含义——这里就是文明平原与野性山地的交界，是历史上兵家必争的咽喉。风依然在吹，带着远山松林和脚下百里香的气息。你会看到本地的一家人铺开野餐毯，孩子在不远处的废墟间探险；也会看到独行的旅人静静坐在一堵断墙下素描。历史并未死去，它化作了风景、风和此刻的宁静，供每一个登顶的人分享。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到德瓦城堡时，你会感觉它不像人造物，而像是大地本身的一个奇崛的梦。那座巨大的、近乎完美的褐色火山锥，就那么孤傲地从特兰西瓦尼亚平原的边缘拔地而起，山顶上，城堡废墟的轮廓在天空下勾勒出锯齿状的剪影，仿佛是巨人为自己雕刻的项圈。你站在山脚下的市民公园里，耳边是罗马尼亚老人们下棋时的轻声交谈和孩子追逐足球的笑声，空气里有刚割过的青草味和远处小吃摊飘来的“米蒂泰伊”烤肠的香气。这一刻，这座曾令敌人胆寒的堡垒，完美地镶嵌在当地人闲适的日常里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要登上这座“石冠”，必须搭乘那趟倾斜角度极大的红色缆车。坐进去，关上门，车厢便开始近乎垂直地向上攀升。你的身体能清晰地感受到重力的拉扯，手心微微冒汗。但视线却被强行推向窗外：脚下绿意盎然的公园越变越小，德瓦城红瓦黄墙的房子像玩具般铺展开，而山顶那些沉默的巨石墙垣则越来越近，压迫感与兴奋感交织。当缆车“咔嗒”一声抵达终点，你推门而出，迎接你的是山顶毫无遮拦的风——它呼啸着穿过残破的拱门和箭窗，发出低沉如呜咽又清冽如哨音的声响，瞬间卷走了所有尘世的嘈杂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在废墟之中，触感变得无比清晰。你的指尖拂过被数百年风雨打磨得粗糙而温润的石块，安山岩特有的孔隙感停留在皮肤的记忆里。你踩在碎石和小野花之间，脚下是历史坍塌后的颗粒。这里没有华丽的复原，只有真实的残缺：宴会厅只剩下一排巨大的拱廊骨架，仿佛巨兽的肋骨；小教堂的穹顶早已消失，阳光直接倾泻在长满青苔的地板上；曾经的守卫塔楼，如今是乌鸦最好的瞭望台。这种毫无修饰的荒凉，反而赋予此地一种直击人心的力量。它不试图告诉你一个完整的故事，而是邀请你用想象去填充那些空白。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "站在城堡最高的残垣上极目远眺，才是理解其魅力的终极时刻。一边是秩序井然的德瓦老城和平原，另一边是绵延起伏、森林密布的阿普塞尼山脉。你瞬间明白了“特兰西瓦尼亚钥匙”这个称号的含义——这里就是文明平原与野性山地的交界，是历史上兵家必争的咽喉。风依然在吹，带着远山松林和脚下百里香的气息。你会看到本地的一家人铺开野餐毯，孩子在不远处的废墟间探险；也会看到独行的旅人静静坐在一堵断墙下素描。历史并未死去，它化作了风景、风和此刻的宁静，供每一个登顶的人分享。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`德瓦城堡`} />
                <InfoRow label="英文名称" value={`Deva Fortress`} />
                <InfoRow label="正式名称" value={`Deva Fortress (Cetatea Deva)`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`德瓦`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`特兰西瓦尼亚历史上最重要的军事堡垒之一，被誉为“特兰西瓦尼亚的钥匙”。`} />
                <InfoRow label="建筑特色" value={`一座与安山岩火山锥地形完美融合、层次分明的庞大防御工事群，远望如从山体自然生长出的王冠。`} />
                <InfoRow label="建筑风格" value={`以13-14世纪的哥特式军事堡垒为核心，后期融合了文艺复兴与巴洛克式的宫殿元素。`} />
                <InfoRow label="文化价值" value={`罗马尼亚民族坚韧精神的物理象征，其废墟状态本身即诉说着一部关于抵抗、荣耀与接受无常的史诗。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡遗址区全年开放，但最佳访问时间为四月至十月。夏季（6月-8月）开放时间通常为上午9:00至晚上20:00；春秋季（4月-5月，9月-10月）开放时间缩短为上午10:00至傍晚18:00；冬季（11月-次年3月）开放情况不稳定，常因天气（雪、冰）关闭，且缆车会进行年度维护，出行前务必查询官网。每周一上午部分区域可能关闭清洁。`} />
              <InfoRow label="门票价格" value={`进入城堡遗址本身免费。登山缆车（Teleferic）收费：成人往返票约为25罗马尼亚列伊（约5欧元），单程票约为15列伊。儿童、学生及65岁以上长者享有约30%折扣。缆车票可在山脚站购买，支持现金和部分信用卡。山顶的小型历史展览馆可能收取象征性费用（约5列伊）。`} />
              <InfoRow label="地址" value={`Strada Cetăţii, Deva 335700, Hunedoara, Romania`} />
              <InfoRow label="交通方式" value={`最近的国际机场是克卢日-纳波卡国际机场（CLJ），距离德瓦约1.5小时车程。从机场可乘坐预付费出租车或租车前往。最经典的方式是火车：从布加勒斯特或克卢日-纳波卡乘坐火车抵达德瓦中央火车站（Gara Deva），车程分别约为4.5小时和2小时。火车站出站后，城堡火山锥就在眼前。步行约15-20分钟即可穿过美丽的市民公园（Parcul Cetăţii）到达缆车山脚站。也可在站前乘坐本地出租车，5分钟即到。缆车班次频繁，约每15-20分钟一班，天气晴好时运营。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德瓦的火山锥，自古就是一个不言自明的瞭望台。早在罗马帝国甚至更早的达契亚时期，人们就意识到这座孤山的战略价值，山顶很可能已有木质防御工事。但真正的传奇始于13世纪中叶。当时，匈牙利国王为了巩固对特兰西瓦尼亚这片富饶土地的统治，决定在此建造一座“不可攻克”的石堡。第一批石匠在山顶敲下基石时，他们建造的不只是一座城堡，更是一个权力的符号，俯瞰着脚下通往匈牙利平原和瓦拉几亚的要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的命运与几个显赫的家族紧紧缠绕。15世纪，它成为匈牙利名将兼摄政王匈雅提·亚诺什的财产之一。这位“白骑士”是抵抗奥斯曼帝国入侵的中流砥柱，德瓦城堡作为其家族堡垒网络的一环，得到了加强。你可以想象，在那个动荡的年代，烽火从这座山顶燃起，照亮夜空，传递着军情。后来，城堡转到了特兰西瓦尼亚大公加布里埃尔·贝特伦手中。他不仅是一位军事家，更是一位文艺复兴的拥护者。在他的时代，冰冷的军事堡垒开始注入人文气息，增建了更为舒适、带有文艺复兴风格的宫殿厢房，或许还有过藏书室和举办过宴会的厅堂，让石头堡垒里也曾短暂地流淌过音乐与诗歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，特兰西瓦尼亚的命运始终在帝国与民族的夹缝中摇摆。17世纪，它落入哈布斯堡王朝手中，被进一步军事化，成为了帝国边境堡垒链上的重要一环。驻军在此，警惕着来自东方的一切威胁。城堡的墙体被加厚，火炮被架设上新建的棱堡。但坚固的石头挡不住历史的洪流。城堡最戏剧性、也最具悲剧色彩的一刻，发生在1849年8月，匈牙利革命期间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，城堡被奥地利帝国军队占据，而渴望独立的匈牙利革命军正在围攻它。战斗激烈而残酷。关于城堡最后毁灭的瞬间，流传着不同版本：有的说是守军为了防止弹药落入敌手而自行引爆了主火药库；也有的说是围攻的炮火不幸击中了这个致命的仓库。无论如何，结果都是惊天动地的大爆炸。一声巨响，火光冲天，城堡的核心部分在瞬间被撕裂、抛向空中，然后又化为碎石之雨落下。几个世纪的建造、荣耀与权谋，在那一刻被炸回了原始状态。爆炸造成的破坏是如此彻底，以至于城堡再也没有被重建，从此以废墟的姿态，凝固在了历史的那一页。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自那以后，德瓦城堡便一直以这种壮烈的残缺美存在着。它经历了两次世界大战的动荡，却奇迹般地未被进一步损毁。在社会主义时期，它成为国家保护的历史遗迹。而那趟建于20世纪70年代的倾斜缆车，则像一道机械桥梁，连接了现代城市的便利与中世纪废墟的孤绝。今天的废墟，不再有烽火，不再有驻军。它是一座露天的博物馆，一个全民的公园，一个让所有登顶者都能用自己的方式解读历史、感受自然的纪念碑。它的故事，从建造到爆炸再到静默，恰恰隐喻了特兰西瓦尼亚这片土地自身复杂、层叠而又坚韧的历史。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受德瓦城堡的魔力，建议预留至少半天时间。最佳抵达时间是工作日的清晨（缆车刚开时）或傍晚日落前两小时。这两个时段光线最富戏剧性，游客相对较少，能让你拥有与废墟独处的珍贵时刻。整体节奏宜慢不宜快，这是一次需要调动全部感官和想象力的攀登与漫步。建议路线是：先乘缆车直达山顶，在废墟中由外向内、由低向高自由探索，沉浸于历史与景观之中；然后乘缆车或选择步行小道下山（体力好者推荐），最后在山脚下的市民公园和城市历史博物馆完成对整个故事的补全。这样的安排既能体验标志性的缆车，又能从不同角度欣赏城堡雄姿，还能融入本地生活场景。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双结实防滑的鞋子，废墟内路面不平，多有碎石和杂草。夏季山顶毫无遮拦，务必携带充足的饮用水、防晒霜和帽子，正午时分阳光极其强烈。出行前务必在官网或当地信息中心确认缆车当天是否运行，大风或雷雨天气缆车会停运。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着清晨的凉爽和人流未至，在缆车站买好票，体验一次那近乎垂直上升、心跳微微加速的独特旅程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出山顶站台后先别急着进入废墟核心，向左沿着小径走到一个开阔的西侧平台，让城堡庞大的废墟群与脚下无垠的特兰西瓦尼亚平原构成你的第一眼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的入口拱门进入，用手触摸那些因爆炸而扭曲变形的巨大石块，想象1849年那声改变一切的巨响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着残存的城墙漫步，寻找那些昔日宫殿窗户的遗迹，透过空荡的窗框望出去，风景如同一幅幅被精心装裱的流动画作。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并站在曾经的小教堂遗址中央，抬头是蓝天，脚下是野花，感受神圣空间化为自然神殿的奇妙宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬到整个废墟的最高点——曾经的指挥塔基座，转一圈，将360度的全景，从城市到穆列什河再到远山，贪婪地收入眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，不要错过山脚下的德瓦历史博物馆，那里收藏着从城堡遗址出土的武器、陶器和装饰碎片，能让你触摸到更具体的历史质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，融入市民公园的日常，在长椅上坐一会儿，或者买一个冰淇淋，看着缆车像红色甲虫一样在绿意中缓缓上下。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从市民公园的草坪远眺`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，太阳在西侧，用长焦镜头从公园湖面附近拍摄，可以捕捉到火山锥和城堡废墟沐浴在金色暖光中、倒映在水面的完美对称画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`废墟拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`进入主废墟区后，找到一个保存相对完好的石拱门，让人物站在门内阴影中，以门外广阔的平原和天空为背景拍摄剪影，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`东侧城墙锯齿剪影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳从城堡背后升起时，走到废墟东侧边缘，以晨曦中泛着紫红色光的天空为背景，拍摄城墙参差不齐的锯齿状轮廓，充满力量与苍凉美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`缆车车厢内向上仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`乘坐缆车时，将相机镜头贴近车厢玻璃，向上拍摄前方陡峭的轨道和山顶越来越近的废墟，能拍出极具动感和视觉冲击力的“朝圣之路”。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`山顶野花与断壁微距`}</h4>
                  <p className="text-sm text-gray-700">{`下午的侧光下，蹲下来，用大光圈镜头聚焦在废墟墙根处顽强生长的紫色野花或苔藓上，将斑驳的石墙作为虚化的背景，诉说生命与时间的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`早晚的侧光或逆光最能勾勒出废墟石头的质感和城堡的雄伟轮廓，尽量避免正午顶光拍摄。利用好罗马尼亚变幻莫测的天气，暴风雨来临前的乌云或雨后的彩虹都是绝佳的天幕。尊重遗址，不要为了拍照攀爬禁止进入的脆弱墙体，也不要使用无人机（通常在此类历史遗址上空禁飞）。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`德瓦市中心火车站附近的公寓式酒店，房间宽敞带小厨房，下楼就是餐厅和超市，步行去缆车站只要十分钟，适合预算有限又希望位置便利的旅行者。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色家庭体验`}</h4>
                  <p className="text-sm text-green-800">{`城堡山脚下安静街区里的百年老屋改造的民宿，房东妈妈会为你准备丰盛的自制早餐，包括特兰西瓦尼亚奶酪和果酱，晚上在花园里就能仰望被灯光微微点亮的城堡轮廓。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端历史沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`距离德瓦车程约40分钟，位于胡内多阿拉乡间的文艺复兴风格庄园酒店，本身就是一个修复的历史建筑，拥有大片森林和牧场，让你在探索完城堡的粗粝后，彻底沉入特兰西瓦尼亚乡村的宁静与奢华。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）是旅游旺季，建议至少提前一个月预订住宿，尤其是特色民宿。德瓦老城区域整体治安良好，夜晚街道照明可能不如大城市明亮，独自出行建议选择主干道附近的住宿。如果选择郊外的庄园酒店，最好具备自驾条件，否则出行会不太方便。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开德瓦很久以后，闭上眼睛，我依然能感觉到那股山顶的风，听到它穿过石缝的声音。德瓦城堡教给我的，或许不是某一段具体的历史知识，而是一种关于“废墟”的全新认知。它没有试图被修复得金碧辉煌来讨好游客，它坦然展示着自己的伤口和残缺。这种坦诚，反而带来一种惊人的力量。它让我们明白，历史的价值不仅仅在于辉煌的完成态，更在于它真实存在过的痕迹、经历过的创伤以及时间赋予它的那种不可复制的质感。在这里，衰败不是终点，而是一种更为深沉、更具哲学意味的存在形式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在一切都追求高效、崭新、即时满足的今天，德瓦城堡像一位沉默的智者，矗立在火山锥上。它邀请你付出一点体力，乘上一段令人心跳的缆车，去拜访一个没有顶盖的教堂，去抚摸爆炸撕裂的墙壁。这个过程本身，就是一种对抗浮躁的修行。它告诉你，有些美需要攀登才能看见，有些感悟需要面对残缺才能获得。对于每一位厌倦了打卡式旅行、渴望与目的地进行精神对话的深度游者来说，德瓦城堡绝对应该列入你的清单。它不是欧洲城堡群像中最华丽的那一个，但它一定是最能让你内心安静、继而生出无限遐想的那一个。在这里，你不是历史的旁观者，你是风、光和石头的共谋者，共同撰写着关于永恒与变迁的私人诗篇。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/corvin-castle-hunedoara" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡内多阿拉科尔文城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corvin Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rasnov-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    勒
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">勒什诺夫要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Râșnov Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sighisoara-dracula-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡吉什瓦拉（吸血鬼故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sighișoara</p>
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
