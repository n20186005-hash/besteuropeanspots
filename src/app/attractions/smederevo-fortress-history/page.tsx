import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯梅代雷沃要塞历史溯源｜多瑙河畔中世纪堡垒的前世今生与末代君主传奇',
  description: '穿越六百年风雨，探寻多瑙河畔规模最大的水上要塞——斯梅代雷沃堡垒背后，塞尔维亚末代君主的雄心、奥斯曼的铁蹄与永恒的传说。',
}

export default function SmederevoFortressHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '塞尔维亚', href: '/destinations/europe' },
            { label: '斯梅代雷沃', href: '/destinations/europe' },
            { label: '斯梅代雷沃要塞', href: '/attractions/smederevo-fortress-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯梅代雷沃要塞・Smederevo Fortress・塞尔维亚・斯梅代雷沃`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "多瑙河的波光在这里变得沉郁，因为河水冲刷的，是一座用“野心、悲剧与铁蹄”写就的石头史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不是童话里的城堡，而是塞尔维亚中世纪王国最后的倔强心脏。<strong>斯梅代雷沃要塞</strong>，这片欧洲最大、保存最完好的水上平原堡垒，沉默地诉说着一个时代的终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进斯梅代雷沃的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯梅代雷沃要塞`} />
                <InfoRow label="英文名称" value={`Smederevo Fortress`} />
                <InfoRow label="正式名称" value={`Smederevo Fortress`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`斯梅代雷沃`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市与堡垒的故事，始于一次迫不得已的迁徙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1427年</strong>，强大的匈牙利王国收回了当时的塞尔维亚首都<strong>贝尔格莱德</strong>。塞尔维亚专制君主<strong>Đurađ Branković</strong> 瞬间失去了国都。他需要一个新的权力中心，一个既能防御，又能掌控多瑙河这条黄金水道的据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的目光，落在了多瑙河与耶泽瓦河交汇处的这片广阔冲积平原上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1430年</strong>，新都城的建造正式开始。地址选得极具战略眼光：三面环水，形成天然护城河；开阔的平原视野极佳，足以预警来自陆路的任何威胁。堡垒被设计成一个近乎完美的三角形，直接嵌入多瑙河的怀抱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它被命名为<strong>斯梅代雷沃</strong>。关于这个名字的起源众说纷纭，最迷人的一种说法，是它可能源于拉丁语 <strong>“semper vivus”</strong>，意为“永远活着”或“常青”。对于一个诞生于流亡、意图永续的王国而言，这个名字承载了最深切的渴望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一座为防御而生的城市，从诞生之初，就预示了它未来的命运。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯梅代雷沃的城墙，是塞尔维亚中世纪建筑技艺的绝唱，也是其悲剧命运的忠实记录者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是它的“速成”与坚固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了尽快安置宫廷与政府，整个工程进展神速。核心的<strong>小城堡</strong> 最先完工，供<strong>Đurađ Branković</strong> 家族居住和理政。随后，规模宏大、供军队与平民居住的<strong>大城堡</strong> 被建造起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "令人惊叹的是其建筑智慧。城墙厚达2米以上，由石头与砖块交替砌成，异常坚固。25座高耸的塔楼如同巨人的手指，扼守着每一个角落。最独特的是，整个城堡直接以<strong>多瑙河岸</strong> 作为北墙根基，让滔滔河水成为了它最忠诚的卫士。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座当时巴尔干最宏伟的堡垒之一，仅用几年便拔地而起，展现了王国最后的国力与决心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是 <strong>1459年</strong> 那无法避免的陷落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管固若金汤，斯梅代雷沃终究没能抵挡住历史的洪流。在<strong>Đurađ Branković</strong> 去世后，内部纷争削弱了王国。奥斯曼帝国大军兵临城下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "经过长期的围困，斯梅代雷沃最终沦陷。这不仅仅是<strong>一座城市的失落</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“随着斯梅代雷沃的钥匙被交出，塞尔维亚中世纪国家的最后一道门，在奥斯曼苏丹面前永远关闭了。”——后世史学家评述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，塞尔维亚丧失了国家地位，开始了长达近四个世纪的奥斯曼统治时期。堡垒上的塞尔维亚旗帜，就此落下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，是二战期间一场骇人听闻的爆炸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间跳到<strong>1941年</strong>。纳粹德国占领了这里，并将要塞变成了一个巨型军火库。6月的一天，灾难降临。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地一位年迈的居民回忆：“那声巨响，我以为多瑙河倒流了，天空裂开了。整个城市都在颤抖，玻璃全碎了，烟尘像黑色的蘑菇云吞噬了要塞。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "爆炸原因至今成谜（可能是游击队袭击或意外）。其后果是毁灭性的：要塞内部建筑被彻底摧毁，城墙严重受损，城内超过2500人丧生。这次创伤，在古老的石墙上，又叠加了一层现代的悲怆。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯梅代雷沃的故事，与末代君主<strong>Đurađ Branković</strong> 的命运紧紧缠绕，他的一生，就是一部在强权夹缝中求存的悲剧史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>Đurađ Branković</strong> （约1377-1456）被称为“天使般的公爵”，但历史给他的角色却毫无天使的仁慈。他是一位精明的政治家、无奈的妥协者，也是一位命运多舛的父亲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的统治，是一场高难度的平衡术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一边是虎视眈眈的<strong>奥斯曼帝国</strong>，另一边是并不总是可靠的<strong>匈牙利王国</strong>。为了保全国家，他不得不周旋其间，时而缴纳沉重的贡品以求和平，时而联合匈牙利抗击外敌。建造斯梅代雷沃，正是他构建最后堡垒、延续国祚的核心战略。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他的妥协策略，特别是与奥斯曼的协议，也让他背负了骂名。他被一些人视为懦弱者，但更多人看到的是，在绝对的实力差距面前，他别无选择的困境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与斯梅代雷沃最深的羁绊，莫过于将家人与未来都托付于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不仅是他最后的宫廷，更见证了他最惨痛的个人损失。为了取信于奥斯曼苏丹<strong>穆拉德二世</strong>，他被迫将自己最小的两个女儿<strong>Mara</strong> 和<strong>Katarina</strong> 送往奥斯曼宫廷。这并非联姻，而是实质性的<strong>人质</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更残酷的是，当后来战事再起，暴怒的苏丹竟下令，将<strong>Đurađ Branković</strong> 的两个儿子<strong>Grgur</strong> 和<strong>Stefan</strong> <strong>刺瞎双目</strong>！这位父亲承受的屈辱与痛苦，深深刻进了斯梅代雷沃的基石之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇，还终结于一则神秘的预言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，一位塞尔维亚圣僧曾预言<strong>Đurađ</strong> 将死于“一条来自匈牙利的狗”。为此，君主终身警惕，远离匈牙利。然而，<strong>1456年</strong>，他最终在斯梅代雷沃堡垒中去世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "死因众说纷纭。最广为流传的版本是：他并非死于刀剑或毒药，而是因为听闻匈牙利守将<strong>亚诺什·匈雅提</strong> 率领的贝尔格莱德守军，奇迹般地击退了奥斯曼大军的围攻。这位一生对抗奥斯曼的宿敌（匈牙利人）带来的“好消息”，带来的巨大情绪冲击，终结了他的生命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "预言以最意想不到的方式应验了。他毕生建造的堡垒，成为了他命运的终点。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "石头会记忆，河水会诉说。关于这座巨堡，多瑙河的风传播着许多口耳相传的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最凄美的，是关于“<strong>哭泣的石头</strong>”的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们说，在堡垒南墙的某些古老砖石上，每逢阴雨或月色清冷的夜晚，会渗出晶莹的水珠，仿佛在默默垂泪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说那是<strong>Đurađ Branković</strong> 被掳走的女儿们的泪水。她们被迫远离故土与亲人，灵魂的一部分永远留在了父亲建造的这座堡垒里。她们的哀伤浸透了石墙，在数百年的岁月中，每当天地同悲时，便化作泪滴显现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与堡垒的<strong>守夜人</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，在万籁俱寂的深夜里，偶尔能听到城墙上有沉重而规律的脚步声，仿佛有看不见的卫兵仍在巡逻。老人们说，那是堡垒的第一批守卫者的英灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们誓言保卫这座城至最后一刻。即使肉体早已消亡，他们的忠诚依然被束缚于此，继续执行着永恒的守望任务，确保任何邪祟不敢侵扰这片悲伤而神圣的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，将宏大的历史悲剧，化为了可感可触的民间情感，让冰冷的巨石，拥有了的温度与灵性。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你站在斯梅代雷沃要塞空旷的腹地，风穿过破损的窗洞，多瑙河在脚下平静流淌，你会感受到的，远不止建筑的宏伟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你站在一个<strong>文明的十字路口</strong>上。这里是中世纪塞尔维亚精神的最后堡垒，是奥斯曼帝国西进的铁证，也刻着现代战争残酷的伤疤。每一层破损，都是一页被撕开的历史教科书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂斯梅代雷沃，便是读懂了一种“<strong>在陷落中不朽</strong>”的悖论。它的陷落标志着一个时代的终结，但正因这终结的悲壮与完整，它的躯体得以保存，成为塞尔维亚民族记忆中最具象、最坚韧的图腾。它未曾赢得战争，却最终赢得了历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有金碧辉煌的装饰，只有巨石无声的倾诉。它邀请每一位来访者，用想象力去填补那片空旷，去聆听风声中的金戈铁马，去触摸砖石上的雄心与泪痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sombor-serbia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    松
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">松博尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sombor</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/felix-romuliana-zajecar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费利克斯·罗穆利亚纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Felix Romuliana (Zaječar)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sremski-karlovci-baroque-wine-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯雷姆斯基卡尔洛夫奇（巴洛克酒乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sremski Karlovci</p>
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
