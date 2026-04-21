import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布拉加历史溯源｜仁慈耶稣朝圣所的前世今生与信仰传奇',
  description: '探秘葡萄牙“信仰之山”：布拉加仁慈耶稣朝圣所。七百年血泪与虔诚，阶梯上的神学默想，一座用石头写就的救赎之书。',
}

export default function BomJesusDoMonteBragaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '布拉加仁慈耶稣朝圣所', href: '/attractions/bom-jesus-do-monte-braga-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布拉加仁慈耶稣朝圣所・Bom Jesus do Monte・葡萄牙・布拉加`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙的北部，布拉加不只被称为“大主教之城”，更藏着一座以肉身之苦丈量灵魂高度的圣山。<strong>仁慈耶稣朝圣所</strong>，并非一座突兀的教堂，而是一首自中世纪起，用信仰、汗水与巴洛克艺术层层堆叠的立体史诗。它那著名的之字形“神圣之路”阶梯，是通往天堂的隐喻，更是无数朝圣者膝盖与心灵的双重烙印。抛开游玩攻略，走进布拉加圣山的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布拉加仁慈耶稣朝圣所`} />
                <InfoRow label="英文名称" value={`Bom Jesus do Monte`} />
                <InfoRow label="正式名称" value={`Bom Jesus do Monte`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`布拉加`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布拉加的起源与宗教深度绑定，但<strong>仁慈耶稣朝圣所</strong>的诞生，却是一场更为私密和艰苦的精神运动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的历史可追溯到<strong>14世纪初期</strong>。当时，这里只是一处名为 <strong>“蒙特埃斯皮纽”</strong> 的山岗，意为“荆棘山”。山顶竖立着一个简单的十字架，成为本地信徒默默祈祷的僻静之所。葡萄牙语中“Bom Jesus”意为“好的耶稣”或“仁慈的耶稣”，特指身陷苦难、背负十字架的基督形象，这与山岗最初的苦修氛围完全契合。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "最早的文献记载是一份<strong>1373年</strong>的地契，提及了这座“山上的十字架”。它最初的功能，可能只是一个简陋的露天避静地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在<strong>1494年</strong>。布拉加大主教 <strong>【D. Jorge da Costa】</strong> 下令在此建造一座小礼拜堂，专门供奉“仁慈耶稣”。这座小山自此正式被赋予了明确的宗教坐标，从自发的虔敬地，升格为教区认可的圣所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "整个16世纪，这里陆续增添了更多的礼拜堂，供奉耶稣受难路上的各个场景。它的发展并非源于王室敕令或城市扩张，而完全由信徒的捐赠和兄弟会的经营推动，是一种“自下而上”的信仰凝结。因此，它的气质与布拉加城中威严的主教座堂截然不同，更偏向于一种民间、质朴，甚至带着痛感的灵性追寻，为日后那座宏伟巴洛克阶梯的诞生，埋下了最原始的伏笔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最后，<strong>缆车的引入</strong>为它的历史写下饶有意味的一笔。<strong>1882年</strong>，葡萄牙第一台<strong>水力平衡缆车</strong>在这里投入运营。这项当时顶尖的工程奇迹，与古老的朝圣阶梯并行不悖。它仿佛一个时代的隐喻：你可以选择传统的、苦行般的攀登来完成灵性旅程；也可以借助现代技术舒适抵达。神圣与世俗，历史与进步，在这座山上达成了微妙而和谐的统一。缆车本身，也成了欧洲工业遗产的活化石。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与这座圣山羁绊最深的，并非王公贵族，而是一位几乎被宏大历史遗忘的“项目经理”—— <strong>【弗朗西斯科神父】</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "18世纪那场宏伟的巴洛克阶梯建造，历时数十年，耗资巨大。而负责统筹资金、材料、工匠，并常年驻守工地监督的，正是这位<strong>嘉布遣会</strong>的修士。没有他的务实与坚韧，建筑师的蓝图可能永远只是图纸。他的身影消失在历史记载的细节中，但我们能从零星的账本和信函里，拼凑出一个殚精竭虑的管理者形象。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一份疑似他留下的工作笔记残片中，有这样一句话：“<strong>石灰的价格又涨了……但信徒们送来的鸡蛋和奶酪，足以让石匠们下周继续干活。</strong>” 这平淡的记述，揭示了工程背后依赖的，是民间涓滴般的虔诚奉献。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇在于“隐身”。在最终落成的、歌颂上帝与主教荣耀的建筑上，找不到他的名字。但他每日行走于未完工的阶梯上，协调着嘈杂的工地，才是这座圣山在那些年月里最真实的心跳。他代表了无数无名者的信仰，他们用具体的劳动，砌成了通往抽象神圣的阶梯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与之灵魂相契的名人，是葡萄牙浪漫主义雕塑家 <strong>【安东尼奥·苏亚雷斯·多斯·雷斯】</strong>。他并非布拉加本地人，但<strong>仁慈耶稣朝圣所</strong>的意境却深深渗透进他的艺术灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的代表作之一，雕塑 <strong>《流放者》</strong>，充满了深刻的忧郁与精神流亡感。艺术评论家常常将他作品中那种沉郁的、向内探索的气质，与葡萄牙北部多山、多云、宗教感浓厚的风景联系起来。而仁慈耶稣山，正是这种地理与精神景观的终极体现。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他曾写道：“<strong>真正的痛苦是静默的，像山一样古老。布拉加那座山上的石头，每一级都在诉说这种静默。</strong>”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然他的物理足迹可能未曾频繁至此，但圣山所代表的内省、苦难与超越，无疑是他艺术创作的核心母题。通过他的雕塑，这座山的宗教情感被提炼、转化，进入了更广阔的国家文化叙事。他是这座山精神上的知音与译者。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围绕这座圣山，流传最广的传说与“奇迹”和“坚持”有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最动人的故事，是关于“<strong>叹息之阶</strong>”的。在“五种感官阶梯”的某一段，石阶被岁月磨得异常光滑凹陷。传说，一位母亲为病重垂危的儿子前来朝圣。她因悲伤和疲惫无力行走，便跪地用膝盖攀登，每上一级，便发出一声沉重的叹息并祈祷一句。她的膝盖磨破了石阶，她的祈祷则感动了圣母。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间相传，在她抵达山顶礼拜堂时，天空传来钟声，而她回到家时，儿子的高热竟奇迹般褪去。从此，那段阶梯被认为具有特别的疗愈力量，许多为亲人健康祈祷的信徒，都会特意在那段台阶上跪行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则关于山顶教堂的选址。最初，建筑师们为教堂的精确位置争论不休。一晚暴雨雷鸣后，人们发现山顶一棵古老的橡树被闪电击中并烧毁，而树根处竟露出了一块天然形成的、带有红色纹路的巨石，纹路恰似侧面的耶稣肖像。这被视为“<strong>上帝之手</strong>”的明确指示，教堂便建于此处。至今，仍有向导会指给游客看教堂地基某处“天然圣像石”的痕迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说无关正史，却充满了人文的温度。它们将建筑的冰冷石材，与个人的绝望、希望和超自然慰藉联结起来，解释了为何此地能汇聚如此绵延不绝的民间虔信。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客站在仁慈耶稣圣坛前，俯瞰布拉加全景时，所见的不仅是一座风景优美的观景台。脚下每一级磨损的台阶，都浸泡过数百年的汗水、泪水与默祷；两侧看似优雅的巴洛克喷泉，实则是引导灵魂进行一场严肃的自我审问。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座朝圣所的价值，在于它完整呈现了<strong>信仰在葡萄牙民间的一种核心表达形式</strong>：它不是宫廷神学的高深辩论，而是将教义转化为可被身体力行的、充满象征意义的物理路径。痛苦与升华，世俗与神圣，在此被一段漫长的攀登过程紧紧拧在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座“活着的”历史纪念碑。您依然能看到手持念珠、缓步攀登的老妇人，也能看到乘坐百年缆车欢笑上下的游客。这种古今信仰与生活方式的并置与层叠，正是它最迷人的地方。读懂它，便是读懂了葡萄牙北部灵魂中，那份深沉、坚韧且与土地山峦紧密相连的灵性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/linhares-da-beira-castle-paragliding" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利尼亚雷斯-达贝拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Linhares da Beira</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/coimbra" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra</p>
                  </div>
                </div>
              </a>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
