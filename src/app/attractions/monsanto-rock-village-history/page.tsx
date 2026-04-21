import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊达尼亚-阿诺瓦历史溯源｜巨石小镇蒙桑图的前世今生与传奇故事',
  description: '探索葡萄牙“最葡萄牙的村庄”蒙桑图。揭秘巨石与房屋共生的千年奇观，讲述永不陷落城堡的传奇，追寻抵抗与共生的不朽史诗。一段被封印在花岗岩中的历史。',
}

export default function MonsantoRockVillageHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '伊达尼亚-阿诺瓦', href: '/destinations/europe' },
            { label: '蒙桑图（巨石小镇）', href: '/attractions/monsanto-rock-village-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙桑图（巨石小镇）・Monsanto・葡萄牙・伊达尼亚-阿诺瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙东部荒凉而美丽的贝拉地区，时间仿佛被凝固在了花岗岩之中。<strong>蒙桑图</strong>，一个将人类居所大胆地镶嵌在巨大滚石之间的村庄，它的历史本身就是一部关于抵抗、适应与顽强生存的史诗。这里没有平坦的街道，只有从巨石中开凿出的石阶；这里的屋顶常常就是另一块巨石的底部。这座村庄在1938年荣获“<strong>葡萄牙最葡萄牙的村庄</strong>”称号，但它的灵魂远比这个称号古老和深邃。抛开游玩攻略，走进蒙桑图的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙桑图（巨石小镇）`} />
                <InfoRow label="英文名称" value={`Monsanto`} />
                <InfoRow label="正式名称" value={`Monsanto`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`伊达尼亚-阿诺瓦`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙桑图的故事，始于地质的奇迹与人类最初的好奇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片土地的历史脉搏，可以追溯到遥远的旧石器时代。早期的居民已被这些如同神祇游戏后遗落的庞然花岗岩所吸引。但真正有迹可循的定居，始于<strong>卢西塔尼亚人</strong>，他们是伊比利亚半岛的古老部落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后，<strong>罗马人</strong>的到来留下了更深的烙印。他们在山顶建立了军事哨所和祭祀点。<strong>“Monsanto”</strong> 这个名字本身，就源于拉丁语的 <strong>“Mons Sanctus”</strong>，意为“圣山”。这个名字揭示了它最初的功能：一个兼具防御与神圣意义的制高点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元12世纪，是蒙桑图现代篇章的起点。1165年，葡萄牙第一位国王<strong>阿方索·恩里克斯</strong>从摩尔人手中收复了这片区域。为了巩固边疆，他下令在此建造坚固的<strong>城堡</strong>，并授予其特许状，正式确立了蒙桑图的城镇地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "国王此举意图明确：将蒙桑图打造成抵御东方莱昂王国和南方摩尔势力的一道磐石防线。最初的 settlers（定居者）很可能是士兵、冒险家以及寻求庇护的农民，他们在国王的承诺与巨石的天然屏障下，开始了与岩石共舞的独特生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "地名“圣山”与山顶的城堡，共同定义了它的基因——既是精神的寄托，也是武力的象征。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙桑图的历史，刻在城堡的残垣与房屋的巨石之上。它并非繁华都城，却屡次在葡萄牙的关键命运节点上，扮演着不屈的配角。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个无法绕过的印记，是<strong>1190年</strong>那场传奇的围城。莱昂王国的军队兵临城下，意图拔掉这颗边境钉子。据传说，守军和居民在弹尽粮绝之际，展现出了惊人的智慧与勇气。他们将最后一头小牛喂饱，然后从城墙最高处将它抛向敌军阵营。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "看到如此“奢侈”地浪费食物，围攻者误以为城内粮草依然充足，士气高昂，足以长期坚守，最终心灰意冷地撤军。这个传说如此深入人心，以至于成为了蒙桑图精神的核心象征。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们宁愿将最后的食物扔给敌人，也绝不交出我们的石头。”——当地民谚如是说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了嘉奖这种不屈，国王<strong>桑乔一世</strong>在<strong>1209年</strong>授予蒙桑图一项至高无上的荣誉：允许其在镇徽上使用<strong>“永不陷落之山”</strong>的铭文，并将城堡顶上巨大的铁制<strong>“银花瓶”</strong>（其实是一个铁球）永远置于那里，象征着王权的庇护与城镇的永恒。这个铁球，至今仍矗立在城堡塔楼之巅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，发生在<strong>18世纪</strong>，它关乎人与石的日常抗争。随着人口增长，巨石对建筑的阻碍日益明显。但蒙桑图人没有选择简单地炸毁它们，而是选择了更具挑战性的融合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最具代表性的事件，是村民决定在一处巨型花岗岩下方建造一座小教堂。他们巧妙地利用岩石作为天然屋顶和墙壁，只在前面砌上门面。这就是著名的<strong>“一颗巨石下的教堂”</strong>。这个过程没有具体年份，却是一个持续数个世纪的集体选择，定义了村庄的最终样貌：不是征服自然，而是邀请自然成为家的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，则是它在<strong>拿破仑战争</strong>时期的角色。19世纪初，法国军队入侵葡萄牙。蒙桑图的城堡虽已年久失修，但其险要地势再次被记起。它成为当地抵抗力量的一个据点，见证了葡萄牙人民为独立而战的又一段烽火。战火虽再次侵蚀了古老的城墙，却未能磨灭石缝中生长出的意志。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙桑图的传奇，不只属于宏大的历史事件，更镌刻在那些与顽石命运交织的个体生命之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“顽石市长”曼努埃尔·弗拉戈索·达库尼亚</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要找一位最能体现蒙桑图“硬骨头”精神的人物，非<strong>曼努埃尔·弗拉戈索·达库尼亚</strong>莫属。他并非王侯将相，而是19世纪末20世纪初蒙桑图的一位普通市长。他的传奇，源于一场与中央政府的“石头战争”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，葡萄牙中央政府计划修建一条连接周边地区的现代公路。对于偏远的蒙桑图而言，这本是发展的福音。然而，规划路线要求<strong>炸毁挡在路上的一系列标志性巨石</strong>，其中一些巨石上甚至建有房屋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对于外界，这些只是碍事的石头；但对于蒙桑图人，它们是祖先的遗产、是家园的支柱、是身份的象征。达库尼亚市长挺身而出，坚决反对这个方案。他据理力争，四处奔走，甚至不惜顶撞上级。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“它们（巨石）比我们任何人都老，它们是我们房屋的屋顶，是我们街道的墙壁。炸掉它们，就是炸掉蒙桑图的脊梁。”——据说，这是达库尼亚在里斯本陈情时掷地有声的话语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场抗争旷日持久，最终，达库尼亚和他的乡亲们赢得了胜利。公路为巨石让路，选择了更曲折但更尊重自然的路线。这位“顽石市长”因此被载入地方史册，他守护的不仅是几块石头，更是蒙桑图人与环境共存的古老哲学和独特文化景观。没有他的坚持，今日我们看到的蒙桑图奇观，将不复存在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“圣殿骑士”与守护者格雷戈里奥神父</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙桑图山顶城堡的历史，与<strong>圣殿骑士团</strong>有着千丝万缕的联系。在国王阿方索·恩里克斯收复此地后，城堡及其广袤土地一度被委托给圣殿骑士团管理，以利用其强大的军事和财力巩固边疆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然骑士团早已消失在历史长河，但他们的守护精神似乎找到了另类的传承。一个名为<strong>格雷戈里奥神父</strong>的当地牧师的故事，至今仍在老人口中流传。时间大约是19世纪，在一次严重的饥荒中，村庄赖以生存的粮仓——“面包篮”所在地面临危机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说格雷戈里奥神父日夜守护着最后的粮种，防止被盗或腐败。他向上帝虔诚祈祷，最终在城堡附近一块巨石的裂缝中，发现了野生的可食用根茎，帮助村民度过了难关。从此，那块石头被称为“神父之石”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故事或许经过美化，但却真实反映了在这片贫瘠石山中，信仰与生存如何紧密相连。神父的角色，接续了圣殿骑士“守护”的象征，从守护领土，转化为守护社群生存的希望。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在蒙桑图，每一块看似随意放置的巨石，都可能藏着一个故事。最动人的传说，关乎爱情、牺牲与永恒的守望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>迷失的摩尔公主与骑士之爱</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在摩尔人统治时期，或是基督教收复失地运动的混乱年代，一位美丽的<strong>摩尔人公主</strong>与一位葡萄牙基督教骑士坠入爱河。他们的爱情为世所不容，于是决定私奔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在逃亡途中，他们被追兵逼至蒙桑图附近险峻的山地。绝望之际，公主向她的神明祈祷，希望得到庇护。突然，大地轰鸣，他们面前出现了一道深邃的裂缝，那是由两块倾靠在一起的巨石形成的狭窄石缝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这对恋人躲了进去。追兵赶到，却无论如何也找不到入口——因为在他们眼中，那只是两块普通的巨石。追兵离去后，恋人却发现他们再也无法从原路出来。巨石仿佛有了生命，将他们温柔地囚禁，也永久地保护了起来。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们说，在风穿过“恋人石”缝隙的夜晚，仔细听，能听到低声的絮语和轻柔的叹息。而那石缝中终年不见阳光的阴凉处，则是他们爱情永恒的寝室。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说解释了当地许多巨石奇特结构的由来，更将蒙桑图严酷的石景，赋予了柔情与庇护的浪漫色彩。它也是伊比利亚半岛上基督教与伊斯兰文明数百年交融、冲突背景下，一个关于超越界限之爱的永恒隐喻。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，漫步在蒙桑图蜿蜒的石巷，抚摸那些被无数代人脚步磨光的阶梯，你触摸的并非一个静态的“古董村”。你感受的，是一股绵延了近千年的生命力。这是一种极具韧性的生存哲学：面对无法移动、无法摧毁的巨力，人类最智慧的选择不是蛮干，而是<strong>邀请、适应、融合</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山顶城堡的废墟，诉说着军事边疆的荣光与伤痛；而山下与巨石共生的屋舍，则吟唱着日常生活的坚韧与诗意。这里的历史价值，不在于出了多少帝王将相，而在于一个普通社群如何将极端的地理条件，锻造成为自己独一无二的文化身份与精神堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“永不陷落”的，从来不只是那座石头城堡，更是生活其中的人们那股“与石共存”的执着精神。蒙桑图，最终活成了它名字“圣山”的真正模样——一个因人类的顽强信仰与创造力而被神圣化的家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂这座城，便是读懂一种在困境中开出生机的可能。它是一首刻在花岗岩上的立体史诗，等待每一位访客来阅读石头的语言，聆听风中的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castelo-de-vide-judaica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特卢-迪维迪（阿连特茹的犹太遗风小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo de Vide</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/batalha-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴塔利亚修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Batalha Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tavira-portugal-algarve" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔维拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tavira</p>
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
