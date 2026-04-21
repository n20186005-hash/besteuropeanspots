import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃施叙尔叙尔历史溯源｜卢森堡隐秘河谷的中世纪堡垒、工业往事与艺术传奇',
  description: '深入卢森堡小瑞士腹地，探索埃施叙尔叙尔悬崖城堡的千年烽烟、19世纪羊毛厂的轰鸣，以及画家笔下被拯救的河谷。一段被时光雕刻的史诗。',
}

export default function EschSurSureHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '埃施叙尔叙尔', href: '/destinations/europe' },
            { label: '埃施叙尔叙尔', href: '/attractions/esch-sur-sure-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃施叙尔叙尔・Esch-sur-Sûre・卢森堡・埃施叙尔叙尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢森堡“小瑞士”嶙峋的岩壁与蜿蜒的叙尔河之间，藏着一座如模型般精巧的古镇。它的名字直接宣示了命运：<strong>埃施（Esch，意为“白蜡树”）</strong> 生于河岸，而 <strong>“叙尔叙尔（sur-Sûre）”</strong> 则意味着它被河流紧紧环抱、守护，也意味着禁锢与挑战。千年来，它从一座峭壁上的军事前哨，演变为轰鸣的工业飞地，最终归于令人心碎的宁静。抛开游玩攻略，走进埃施叙尔叙尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃施叙尔叙尔`} />
                <InfoRow label="英文名称" value={`Esch-sur-Sûre`} />
                <InfoRow label="正式名称" value={`Esch-sur-Sûre`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`埃施叙尔叙尔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事始于岩石与水。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约在<strong>公元927年</strong>的一份土地赠与契约中，首次出现了“Asch”这个名字。但这片土地真正登上历史舞台，是在三个世纪后。<strong>1270年</strong>左右，卢森堡伯爵<strong>亨利五世（Henry V）</strong> 的目光锁定了这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他看到的不是田园诗，而是一个天生的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "叙尔河在此处几乎完成了一个<strong>360度的环形回旋</strong>，形成一座被水隔绝的天然半岛。半岛中央，一座陡峭的砂岩山拔地而起。亨利五世下令，在山顶建造城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，<strong>“埃施叙尔叙尔”</strong> 的雏形诞生了——一个为防御而生的定居点。名字直白地揭示了它的地理本质：“埃施”可能源于古老的“Ask”，指代河岸常见的白蜡树；而“sur-Sûre”（在叙尔河上）则是它无法剥离的地理烙印。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的居民，无疑是士兵、工匠和他们的家属。他们依偎在领主城堡的影子里，在悬崖边缘搭建起木屋石舍，唯一的通道由城堡控制。这不是一座自然生长的商业城镇，它从第一块基石起，就是一件<strong>军事杰作</strong>。河流是它的护城河，悬崖是它的城墙，孤独与险峻，是它生存的代价，也是它存续至今的密码。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光在岩石上镌刻下三层迥异的印记：<strong>中世纪军事、工业革命、现代静谧</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一层印记属于<strong>城堡与围攻</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那座13世纪的城堡并非一直固若金汤。在漫长的岁月里，它经历了无数次围攻与易主。最惨烈的篇章写在<strong>1794年法国大革命战争</strong>期间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法国革命军席卷而来，这座象征着封建权力的城堡成为了必须拔除的钉子。在猛烈的炮火下，城堡遭受了毁灭性破坏。它没有被修复，而是被遗弃，任由风雨剥蚀，最终在<strong>19世纪被部分拆除</strong>，石材被当地人取去建造房屋。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地流传，城堡最后的守卫者在陷落前，将伯爵的财宝沉入了叙尔河最深的漩涡中。至今，月圆之夜，河心仍会有幽光闪烁，据说那是黄金在寻找它旧日的主人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的废墟，如同一个巨大的沉默问号，矗立在镇子顶端，提醒着人们武力征服的终极归宿是荒芜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二层印记，是<strong>工业的脉搏</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪中叶，宁静的河谷被蒸汽机的轰鸣惊醒。充沛的水力资源吸引了敏锐的工业家。<strong>1851年</strong>，一座现代化的<strong>羊毛纺织厂</strong>在河边建立起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工厂需要工人，小镇人口迅速膨胀。新的住宅区在古老城墙外沿河铺开，一座高大的<strong>新哥特式教堂</strong>也在<strong>1890年</strong>建成，以满足新兴社区的精神需求。小镇的肌理被彻底改变，从一座军事堡垒，转型为繁荣的工业社区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，工业的顶峰也是转折。<strong>1951年</strong>，工厂最终关闭。但河流的力量被重新诠释——一座<strong>水力发电站</strong>在镇子上游建成。那轰鸣声从制造布料，转为点亮灯火。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇的寂静山谷，曾吸引并滋养了两位独特的灵魂，他们用画笔和商业头脑，分别记录了它的伤痕与新生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 埃米尔·梅思 (Émile Mousel) —— 为消逝的风景赋形</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>埃米尔·梅思（1892-1974）</strong> 并非出生于此，但他的一生与埃施叙尔叙尔及其所在的叙尔河谷紧密相连。他是卢森堡著名的<strong>后印象派画家</strong>，被誉为“叙尔河的国家画家”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的艺术生涯，恰逢河谷经历剧变。他目睹了传统农业社会的尾声，也见证了早期旅游业的萌芽。他背着画架，走遍河谷的每一个角落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他笔下最动人的主题，往往是那些<strong>即将被现代化浪潮淹没的角落</strong>：古老的磨坊、偏僻的农舍、被遗忘的村中小径。他的画作色彩浓郁、笔触坚实，充满对这片土地深沉的眷恋。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的日记中，他曾写道：“我不是在画风景，我是在为记忆建造避难所。推土机和水泥到来之前，我必须完成我的工作。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当<strong>上叙尔河水库（Upper Sûre Lake）</strong> 于<strong>20世纪60年代</strong>开始蓄水，淹没了河谷底部的古老村庄和农田时，梅思的画作成为了无可替代的<strong>视觉档案</strong>。他描绘了水下的故乡，让后人得以知晓，那片蔚蓝的湖水之下，曾有炊烟与田园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃施叙尔叙尔，你仍能感受到他画作中的视角——从对岸眺望古镇全貌，那教堂尖塔与废墟映在平静河面上的景象，几乎就是他画布的复现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 戈特弗里德·斯托克 (Gottfried Stuck) —— 工业时代的推手</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与艺术家不同，<strong>戈特弗里德·斯托克</strong>是一位实干家。他是<strong>19世纪</strong>当地羊毛工业发展的核心人物之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为工厂的管理者或所有者（具体记载已模糊），他代表着将新技术、资本与本地水力资源结合的那一代企业家。他带来的不仅是机器，更是一整套现代生产组织和生活方式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他的经营下，工厂为小镇提供了数百个就业岗位，吸引了来自卢森堡各地甚至邻国的工人。他支持建造了新教堂、学校，推动了小镇从封闭走向开放。他的宅邸，无疑是镇上最体面的建筑之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇更在于一个艰难的<strong>道德抉择</strong>。当20世纪初经济动荡，工厂面临困境时，据说他为了保住大多数工人的饭碗，毅然抵押了自己的全部个人资产，甚至最终失去了对工厂的控制权。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老工人回忆：“斯托克先生离开那天，没有坐马车，他一个人提着旧皮箱，步行穿过了石桥。所有人都站在窗前，但没有人敢下去送别。那份寂静，比机器的噪音更让人难受。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故事，是埃施叙尔叙尔工业黄金时代的缩影，也预示了其终将落幕的悲情。他的痕迹不在博物馆，而在那些红砖的厂房遗址、整齐的工人住宅区，以及老一辈人模糊的家族记忆里。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "环绕古镇的叙尔河，不仅是地理屏障，也是传说的源泉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说是关于<strong>“叙尔河的女神”</strong>。她并非总是温柔。传说她居住在河流最深处的漩涡中，守护着水下的秘密与财富。她会奖励尊重河流的渔夫，赠予他们满网的鱼获；但也会惩罚贪婪和污染河水的人，用暗流将他们拖入深渊。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在工厂最兴盛的时候，废水染红了河水。老人们说，那之后整整三年，河里钓不到一条鱼。那是女神在发怒。”——一位当地老人的讲述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与<strong>城堡废墟</strong>有关。据说在圣诞夜或施洗约翰节（夏至）的午夜，城堡的幽灵守卫会再次现身，沿着残破的城墙无声巡逻。他们守护的不是财宝，而是一个<strong>未完成的誓言</strong>或一段<strong>被遗忘的和平协议</strong>。若能在这时胆敢登上废墟，并保持绝对沉默，就有可能看到昔日城堡完整辉煌的幻影，但一旦发出声响，幻影就会瞬间消散，只留下冰冷的断壁残垣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，本质上是人与自然、与历史关系的隐喻。它们让冰冷的岩石与流水，充满了灵性与故事，指引着当地人世代遵循着某种敬畏。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的埃施叙尔叙尔，是一座完美的“历史剖面图”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从山顶向下阅读：<strong>13世纪的城堡废墟</strong>代表军事封建时代；其脚下<strong>拥挤的中世纪街巷</strong>代表平民的聚居生活；山脚及河对岸的<strong>19世纪工业建筑与工人住宅</strong>，铭刻着工业革命的印记；而环绕一切的<strong>静谧湖水与森林</strong>，则是现代人对于自然与遗产保护的共识。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不再生产武器，也不再纺出毛线。它“生产”的，是<strong>一段可被漫步阅读的时光</strong>。走在其中，你仿佛能听见石缝间骑士的耳语、水流中纺机的回响、以及画家笔下挽歌般的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有宏大的广场与宫殿，它的震撼力来自于极致的<strong>反差与凝聚</strong>：天然险峻与人文坚韧的反差，历史喧嚣与当下宁静的反差。这一切，都被浓缩在河流画出的小小一圈之内。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂埃施叙尔叙尔，便是读懂欧洲无数小众城镇的缩影——它们并非历史的中心，却是历史最真实、最层叠的载体。它的美，不在于“曾是什么”，而在于“一切都在这里了”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、徒步打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/abbey-of-echternach" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃希特纳赫修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbey of Echternach</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esch-sur-sure" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃施河畔绍尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esch-sur-Sûre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/remich-luxembourg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷米希</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Remich</p>
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
