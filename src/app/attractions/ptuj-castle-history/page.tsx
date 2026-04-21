import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普图伊历史溯源｜中世纪城堡、修道院与龙骑士传说的前世今生',
  description: '穿越千年，探秘斯洛文尼亚最古老小镇普图伊。从罗马军团驻地到十字军城堡，从葡萄酒窖到龙骑士传说，揭开多瑙河支流畔被时光封存的层叠史诗。',
}

export default function PtujCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '普图伊城堡', href: '/attractions/ptuj-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普图伊城堡・Ptuj Castle・斯洛文尼亚・普图伊`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯洛文尼亚东北部，德拉瓦河温柔地拐了一个弯，河畔山丘上，<strong>普图伊城堡</strong>的红瓦屋顶在阳光下格外醒目。这座城市骄傲地自称“斯洛文尼亚最古老的小镇”，其历史确如脚下层叠的考古土层般深厚。然而，普图伊的魅力远非一个“古”字可以概括。它是葡萄酒与音乐之城，也是十字军与龙骑士传奇的舞台。抛开游玩攻略，走进普图伊的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普图伊城堡`} />
                <InfoRow label="英文名称" value={`Ptuj Castle`} />
                <InfoRow label="正式名称" value={`Ptuj Castle`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`普图伊`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普图伊的脉搏，与德拉瓦河一同跳动。它的故事开端，远比城堡的石墙更为古老。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在石器时代，此处已有先民活动的踪迹。但城市真正的雏形，源于公元前一世纪左右。强大的<strong>凯尔特人</strong>部落在此建立了名为“<em>Poetovio</em>”的定居点。这个名字，便是今天“Ptuj”的源头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“<em>Poetovio</em>”在凯尔特语中意为“河流渡口”或“河流之地”，精准地定义了它的地理命脉——控制着德拉瓦河的重要渡口。这个战略位置，注定它将卷入更大的历史洪流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元一世纪，罗马帝国的铁骑向北推进，将这片土地纳入<strong>潘诺尼亚行省</strong>。精明的罗马人立刻认识到<em>Poetovio</em>的价值。它不仅是军事要冲，更位于连接亚得里亚海与多瑙河边境的琥珀之路上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座庞大的<strong>罗马军团驻地</strong>与繁华城镇在此拔地而起。鼎盛时期，这里驻扎着庞大的<strong>罗马第六“铁甲”军团</strong>，人口超过三万，拥有发达的城市设施。从地下挖掘出的豪华马赛克、罗马浴场遗迹和密特拉教神庙，无声诉说着当年的富庶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国崩溃后，城市历经斯拉夫人定居、法兰克人统治，但其作为区域中心的地位从未被遗忘。它的名字在历史流转中，从<em>Poetovio</em>演变为<em>Petau</em>，最终定格为今日的<strong>Ptuj</strong>。每一次改名，都覆盖上一层新的文明地层。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普图伊城堡并非凭空出现，它是这座城市千年动荡与重生的最坚硬结晶。它的故事，是普图伊历史的微缩史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：城堡的崛起与“修道院-堡垒”的双重身份</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们现在看到的城堡主体，源于<strong>12世纪</strong>。当时，这片土地属于萨尔茨堡大主教区。大主教们为了巩固边境，在罗马时代遗留的防御工事基础上，开始兴建一座坚固的城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但最初的建造者并非骑士，而是<strong>奥古斯丁修会</strong>的教士。这里首先是一座<strong>修道院</strong>。然而，位于基督教世界与东方势力交锋的前沿，宁静的祈祷注定要被战鼓声打断。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“为了抵御异教徒的持续威胁，我们不得不将神圣的迴廊，同时也铸成坚固的壁垒。”——一份13世纪的教会文书残篇如此记载。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，这座建筑奇特地融合了宗教与军事功能：修士的居所拥有厚重的城墙和防御塔楼。这种“修道院-堡垒”的混合体，在欧洲极为罕见，是普图伊独特地缘政治的活化石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：贵族时代的黄金岁月与奥斯曼的阴影</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "14世纪，城堡和城镇的控制权转移到了世俗贵族手中。其中最显赫的是<strong>图尔恩伯爵家族</strong>。他们大幅扩建城堡，增加了舒适的文艺复兴风格宫殿，将其从单纯的堡垒转变为代表权力与财富的贵族府邸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，奢华宴会与艺术收藏的背后，始终笼罩着<strong>奥斯曼帝国</strong>的战争阴云。整个16世纪，奥斯曼骑兵对中欧的劫掠如火如荼，普图伊多次面临直接威胁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的防御体系被一次次加固。我们今天看到的巍峨外观、瞭望塔和城墙，许多都带有那个紧张时代的烙印。城堡不仅是家园，更是方圆数十公里内平民的避难所。它的存在，维系着生的希望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记三：从军事前线到文化灯塔</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着奥斯曼威胁消退，城堡的军事功能逐渐淡化。它历经多次转手，一度濒临荒废。直到20世纪中期，它被收归国有，并开始了系统性的修复。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，它作为<strong>普图伊地区博物馆</strong>的核心馆舍，完成了从“持剑者”到“持烛者”的华丽转身。馆内收藏从新石器时代到近代的浩瀚文物，那些曾用于征战的厅堂，现在安静陈列着中世纪的骑士甲胄、珍贵的哥特雕塑和古代乐器。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡本身，就是最珍贵的展品。站在城堡露台上俯瞰红屋顶的老城与蜿蜒的德拉瓦河，你凝视的，是一部立体的、石质的地方史全书。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在普图伊漫长的历史星图中，有这样一个人，他并非生于斯，却将生命最后的激情与失落永远留在了这座城堡的墙壁上。他是<strong>弗雷德里克九世</strong>，一位“没有王国的国王”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇人物：弗雷德里克九世，哈布斯堡的“龙骑士”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>弗雷德里克</strong>（1289-1330）出身显赫，是德意志国王<strong>阿尔布雷希特一世</strong>的幼子，哈布斯堡家族的正统王子。他本应拥有广阔天地，但命运却开了一个残酷的玩笑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1314年，德意志爆发了著名的“双王之争”，他的哥哥<strong>腓特烈三世</strong>与巴伐利亚的路德维希四世同时被选为罗马人民的国王。弗雷德里克坚定地支持兄长，并成为其最重要的军事统帅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，1322年，在决定性的<strong>米尔多夫战役</strong>中，哈布斯堡军队惨败。弗雷德里克与兄长一同被俘，囚禁数年。获释后，他的人生跌入谷底，政治前途尽毁。大约在1326年，这位失意的王子来到了普图伊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，普图伊城堡属于他的亲戚——戈尔茨伯爵。弗雷德里克似乎在此获得了一块栖身之地。远离政治中心的倾轧，他将余生的精力投入了两件事：<strong>对圣乔治的狂热崇拜，以及用壁画装饰城堡小教堂。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>与普图伊的永恒羁绊：圣乔治礼拜堂壁画</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在城堡内，他主持修建或装饰了<strong>圣乔治礼拜堂</strong>。这里的壁画，是他的精神遗嘱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "壁画的核心主题是<strong>圣乔治屠龙</strong>。在基督教 iconography（图像学）中，这象征着善战胜恶，信仰战胜异教。但对弗雷德里克而言，这具有极其强烈的个人隐喻。<strong>龙，或许就代表着击败他兄弟的政敌路德维希，乃至一切让他壮志未酬的命运之力。</strong>" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "艺术史学家指出，壁画中圣乔治的形象，可能融入了弗雷德里克本人的面容特征。这位王子，在画中化身为自己崇拜的骑士，完成了一场在现实中无法实现的胜利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了圣乔治，壁画还描绘了<strong>圣母加冕</strong>、<strong>基督受难</strong>等场景，笔法精湛，色彩浓郁，是中世纪晚期该地区最杰出的艺术作品之一。弗雷德里克可能从帕多瓦或意大利其他艺术中心聘请了画师，将最新的艺术风格带到了这个偏远城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1330年，弗雷德里克在普图伊去世</strong>，据信安葬于城堡附近。他没有留下王国，却留下了一座艺术珍宝。如今，游客步入这座略显昏暗的小教堂，依然能被壁画中炽烈的情感所震撼。那是一位王子用颜料和信仰进行的最后抗争与救赎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗雷德里克的故事，让普图伊城堡超越了单纯的建筑或博物馆，成为一个充满悲剧性与人性深度的历史现场。他使“龙骑士”的传说，在这座城堡中有了一个真实而忧伤的注脚。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在普图伊，历史与传说的界限常常变得模糊。最著名的传说，与城堡小教堂壁画的主题、甚至与整座城市的身份认同紧密交织——那就是<strong>圣乔治屠龙</strong>的本地化版本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在远古时代，德拉瓦河畔的沼泽中盘踞着一条<strong>恶龙</strong>。它喷吐毒气，污染水源，勒索村民，要求定期献上少女作为祭品。整个地区笼罩在恐惧之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当又一轮抽签选中了当地领主的女儿时，绝望达到了顶点。这时，一位年轻的<strong>骑士</strong>出现了。他身着闪亮盔甲，手持长矛与盾牌，誓言为民除害。经过一番惊天动地的搏斗，骑士用长矛刺穿了恶龙的心脏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "龙血浸染大地，奇怪的是，被龙血洒过的山坡，后来竟生长出异常茂盛的葡萄藤，结出的葡萄酿成的酒，色泽深红，馥郁芬芳。人们相信，这是龙的血脉赋予了土地魔力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而那位屠龙骑士，自然被认定为<strong>圣乔治</strong>。这个传说解释了普图伊地区（特别是<strong>普图伊山下</strong>的葡萄园）为何以出产优质红酒闻名。传说更赋予了这座城市一个英勇的守护神形象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到今天，圣乔治仍是普图伊的守护圣徒。每年四月，<strong>普图伊狂欢节</strong>的高潮便是“<strong>库伦特</strong>”游行——人们戴着狰狞的木雕面具，身披彩色羊毛服饰，佩戴巨大铃铛，扮演成驱逐冬天与邪灵的“狂欢节怪兽”。而在这场原始的、充满生命力的仪式背后，依稀可见那个远古的、关于战胜恶龙之恐惧的集体记忆。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地有句老话：“我们的红酒里，流淌着龙的血与勇气。” 这不仅是营销口号，更是一种深植于土地的历史人文想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，在普图伊，你品饮的每一口本地红酒，你看到的每一幅圣乔治画像，甚至狂欢节上震耳欲聋的铃铛声，都可能是那个古老传说在不同维度的回响。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在普图伊，你是在阅读一部“活页”的欧洲编年史。从罗马街道的碎石，到中世纪城堡的塔楼，再到文艺复兴立面的壁画，每一层都清晰可辨，未曾被粗暴的现代化完全覆盖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小城的伟大之处，不在于某一段历史的极度辉煌，而在于这种<strong>近乎完整的连续性</strong>。它像一个耐心的记录者，经历了帝国边疆、蛮族迁徙、中世纪信仰、贵族纷争、外敌威胁，最终沉淀为今日这座宁静、优雅且充满文化自信的小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的历史不是博物馆里僵死的标本，而是融入街头巷尾、酒窖歌声和节庆面具中的生命记忆。在普图伊城堡俯瞰全城的那一刻，你会理解，历史从未远去，它只是换了一种方式，在德拉瓦河的流淌中，在葡萄园的四季轮回里，继续呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂普图伊，便是读懂一种欧洲小镇的典型命运与非凡韧性——在历史巨轮的缝隙中，如何保存自我，并让每一段过往都开出独特的人文之花。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/postojna-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波斯托伊纳溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Postojna Cave</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kranj-historic-town-underground-tunnels" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉尼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kranj</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vipava-slovenia-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维帕瓦河谷小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vipava</p>
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
