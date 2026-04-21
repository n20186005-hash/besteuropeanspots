import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯日马罗克历史溯源｜斯洛伐克木构之城的前世今生与名人传奇',
  description: '走进斯洛伐克塔特拉山下的“木构瑰宝”凯日马罗克。探索其罕见的木制极地教堂、聆听宗教改革传说、追随探险家足迹，揭开这座中欧古镇被时光尘封的往事。',
}

export default function KezmarokWoodenChurchOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '凯日马罗克（木制极地教堂及老城）', href: '/attractions/kezmarok-wooden-church-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯日马罗克（木制极地教堂及老城）・Kežmarok・斯洛伐克・普列索夫州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯洛伐克高耸的塔特拉山脚下，藏着一座用木头与石头写就编年史的古城。它不是布拉格，也不是布达佩斯，而是<strong>凯日马罗克</strong>——一个将文艺复兴、宗教冲突与民间智慧凝练于无数精美木雕中的“露天建筑博物馆”。这里的空气，弥漫着刨花的清香与旧日拉丁语学校的书卷气，更回响着敢于挑战雪峰的探险家心跳。抛开游玩攻略，走进凯日马罗克的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯日马罗克（木制极地教堂及老城）`} />
                <InfoRow label="英文名称" value={`Kežmarok`} />
                <InfoRow label="正式名称" value={`Kežmarok`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`普列索夫州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "凯日马罗克的故事始于一片被森林与河流滋养的富饶之地。早在<strong>1251年</strong>的文献中，便出现了它的踪迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的定居点由斯拉夫部族建立。但真正赋予其城市骨架与名字的，是一批来自<strong>德意志的撒克逊殖民者</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们在<strong>13世纪中叶</strong>受匈牙利国王邀请而来，带来了先进的手工艺、采矿技术与城市自治理念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Kežmarok”这个名字本身，就是一部微缩的语言融合史。它被认为源于德语词汇 <strong>“Käsemarkt”</strong>，意为“奶酪集市”，直白地揭示了其早期作为农牧产品交易中心的经济角色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，斯洛伐克语学者提出了更富画面感的本地解读：可能与古斯拉夫语中“kosiť”（意为“收割”或“砍伐”）有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这指向了城市起源的另一面——对周边茂密森林的开发利用。木材，从一开始就是这座城市命运的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与许多依托城堡发展的欧洲小镇不同，凯日马罗克的核心是<strong>市民广场</strong>与<strong>自治权</strong>。这种独特的基因，预示了它未来数个世纪作为<strong>手工艺、教育与文化中心</strong>的繁荣之路，而非仅仅是一个军事要塞的附庸。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "凯日马罗克的历史肌理上，镌刻着几个决定性的印记，它们共同塑造了其独一无二的面貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个印记，由信仰与木头刻下：木制圣十字教堂。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>1717年</strong>，这座城市完成了一项看似不可能的建筑奇迹。当时，占多数的<strong>路德教派</strong>信徒急需一座新教堂，但天主教的哈布斯堡王朝颁布法令，严禁用“持久性材料”（如石头）修建非天主教教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "凯日马罗克的工匠们用智慧回应了歧视。他们转向最古老、最丰富的资源——木材。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间智慧流传：“既然石头被禁止，那就让森林为我们祈祷。”工匠们深入塔特拉山，挑选最上乘的木材，誓言要建一座“让石头都嫉妒的木头圣殿”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "结果便是举世罕见的<strong>木制 articular church</strong>。它完全由橡木和云杉榫接而成，未用一根铁钉。内部的三层画廊、精美的祭坛与管风琴，全部是木雕艺术的巅峰。这座教堂不仅是一座礼拜场所，更是市民韧性、手工艺传统与宗教宽容精神的<strong>木质宣言</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二个印记，是皇家特许状与“黄金时代”。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1463年</strong>，匈牙利国王<strong>马加什一世</strong>授予凯日马罗克全面的皇家城市特权。这纸文书如同城市的“成年礼”，带来了贸易垄断、司法自主和修建城墙的权利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "16至17世纪，凯日马罗克迎来了它的文艺复兴鼎盛期。富商与行会建造起一座座装饰着华丽<strong>山形墙</strong>与<strong>外墙彩绘</strong>的宅邸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "同时，它成为了<strong>斯皮什地区</strong>重要的教育中心。<strong>拉丁语学校</strong>吸引着来自四面八方的学子，学者、印刷商云集，让这里赢得了“斯洛伐克雅典”的美誉。这段时期的繁荣，凝固在老城广场周围那些色彩柔和、线条优雅的建筑立面上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三个印记，是大火与重生。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，木材赋予城市灵魂，也带来灾难。历史上，凯日马罗克多次遭受毁灭性火灾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最严重的一次发生在<strong>1797年</strong>，几乎将整个木结构的老城区化为灰烬。但凯日马罗克人再次证明了他们的坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们以当时流行的<strong>古典主义风格</strong>重建家园，但巧妙保留了原有的城市布局与部分古老地基。今天漫步老城，你能看到巴洛克、文艺复兴与古典主义风格和谐共存，这本身就是一部关于灾难、重建与不息生命力的立体史书。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "凯日马罗克的历史星空，闪耀着几位独特的人物，他们的故事与这座城紧密交织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>弗拉基米尔·克拉勒：塔特拉的征服者与民族之魂</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要找一位最能体现凯日马罗克“山缘”气质的人物，非<strong>弗拉基米尔·克拉勒</strong>莫属。他于<strong>1848年</strong>出生于此，那正是欧洲民族意识觉醒的年代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为斯洛伐克民族复兴的关键人物，他首先是一位杰出的<strong>登山家、探险家和博物学家</strong>。他的目光，始终投向城市背景板上那雄伟的<strong>高塔特拉山</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当时，这座山脉许多高峰仍被认为是“不可攀登的”。克拉勒用科学精神和无畏勇气挑战了这一切。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅首次登上了包括<strong>杰朗峰</strong>在内的数座险峰，更系统性地绘制了塔特拉山区的地图，记录了其地质、动植物生态。他的探险笔记，是科学与文学的完美结合：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "克拉勒在日记中写道：“每一次攀登，都不是对山峰的征服，而是对斯洛伐克祖国山河的一次认知。我们在山顶插下的，不是旗帜，而是知识的界碑。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，克拉勒的抱负远不止于登山。他是 <strong>“斯洛伐克登山协会”</strong> 的联合创始人，该组织不仅是体育团体，更是<strong>培育斯洛伐克民族认同</strong>的重要文化阵地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将登山活动与民族教育、爱国情怀紧密结合。在凯日马罗克，他的故居至今被保存，成为后人缅怀这位“塔特拉山之子”的场所。他的精神遗产，让凯日马罗克永远地与那片巍峨的山脉联系在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>塞贝斯蒂安·蒂索：从拉丁语诗人到地方史官</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在克拉勒之前两个世纪，凯日马罗克的文脉已由另一位学者型人物深深滋养——<strong>塞贝斯蒂安·蒂索</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他生于<strong>1636年</strong>，逝世于<strong>1705年</strong>，一生几乎都与这座城市的拉丁语学校有关。他是一位卓越的<strong>新教学者、诗人和历史学家</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒂索最重要的贡献，在于他用优美的拉丁文诗歌记录了这座城市的历史与生活。他的史诗作品不仅具有文学价值，更是研究<strong>17世纪斯洛伐克城镇社会、宗教与文化生活</strong>的珍贵史料。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在反宗教改革的压力下，他坚定地维护着路德教派的信仰与文化传承，通过教育和写作，为凯日马罗克的知识分子阶层保存了精神火种。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的安息之地——凯日马罗克古老的<strong>新教墓园</strong>，至今仍可寻访。墓碑上的铭文，沉默地诉说着一个学者如何用笔与信仰，定义了一座城市的文化高度。通过蒂索，我们看到了凯日马罗克作为地区“文化灯塔”的另一个坚实注脚。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在凯日马罗克，历史不仅写在羊皮纸上，也流传于工匠的斧凿之间和炉火旁的絮语里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于那座举世闻名的<strong>木制教堂</strong>，有一个充满奇幻色彩的传说。据说，当年工匠们为如何不用一钉一铁建造如此宏伟的建筑而愁眉不展。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "某天夜里，一位神秘的<strong>小精灵</strong>出现在首席木匠的梦中。它蹦跳着，将一堆木屑变成了一个精巧无比的<strong>榫卯模型</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老木匠们口耳相传：“那不是精灵，是森林的守护神。它见我们诚心，又珍惜树木，才将连接天与地、木与木的秘密，托梦相授。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "梦醒后，木匠恍然大悟，带领团队创造了那套复杂而坚固的纯木构架系统。人们都说，若在寂静的傍晚将耳朵贴近教堂的梁柱，仿佛还能听到当年精灵敲击试音的细微回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城市的<strong>守护</strong>有关。凯日马罗克市政厅塔楼上的风向标，是一只金色的<strong>公鸡</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在中世纪一次外敌围城、即将破城的危急时刻，全城的公鸡在深夜突然齐声啼叫。这意外的“晨鸣”让守军惊醒，误以为拂晓已至、援军到来，从而士气大振，击退了昏暗中攻城的敌人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，公鸡被奉为唤醒警觉、带来幸运的象征，屹立于城市之巅，俯瞰着它所守护的红色屋瓦与宁静时光。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的凯日马罗克，依然是一座活着的<strong>历史百科全书</strong>。它的每一栋木屋、每一块广场石板、教堂的每一道木纹，都在低声讲述着关于<strong>信仰的韧性、市民的自豪、技艺的传承</strong>与<strong>山野的呼唤</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂凯日马罗克，便是读懂一种在限制中创造伟大的智慧（木制教堂），一种依托知识与贸易而挺立的城市精神（拉丁学校与商宅），以及一种人与自然深刻共鸣的文化血脉（克拉勒的探险）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它或许没有帝国都城那样的恢弘叙事，却以其<strong>完好的原真性</strong>与<strong>层叠的历史密度</strong>，为渴望深度人文体验的旅人提供了一片珍贵的秘境。在这里，历史不是玻璃后的展品，而是呼吸着的空气，是脚下的路，是目光所及处一首沉默而壮丽的木石史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cachtice-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    恰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">恰赫季采城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Čachtice Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ochtinska-aragonite-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥赫廷斯卡文石洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ochtinská Aragonite Cave</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kezmarok-wooden-artic-church-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯日马罗克（木制极地教堂及老城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kežmarok</p>
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
