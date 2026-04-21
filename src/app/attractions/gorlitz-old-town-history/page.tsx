import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格尔利茨历史溯源｜一座“时间褶皱”中的德国秘境，胶片之都的前世今生与分裂传奇',
  description: '探索德国东部的宝藏小城格尔利茨。千年历史未毁于战火，从繁荣商都到“胶片之都”，再到一城两国的分裂传奇。倾听建筑无声的史诗。',
}

export default function GorlitzOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '格尔利茨', href: '/destinations/europe' },
            { label: '格尔利茨老城', href: '/attractions/gorlitz-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格尔利茨老城・Görlitz Old Town・德国・格尔利茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德国的最东端，有一座被时光遗忘，却又被时光完美封存的古城。它拥有近四千座受保护的历史建筑，从哥特到文艺复兴，从巴洛克到青春艺术风格，宛若一部立体的欧洲建筑编年史。二战中毫发无伤，冷战时被一分为二，它既是“胶片之都”，也是欧洲和解的活化石。抛开游玩攻略，走进格尔利茨的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格尔利茨老城`} />
                <InfoRow label="英文名称" value={`Görlitz Old Town`} />
                <InfoRow label="正式名称" value={`Görlitz Old Town`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`格尔利茨`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格尔利茨的故事，始于斯拉夫部落与德意志东向移民运动的交汇处。早在公元7世纪，西斯拉夫索布人便在此定居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1071年</strong>，一份皇帝亨利四世授予迈森伯爵的证书中，首次提到了“Goreliz”这个地名。它的名字源于斯拉夫语“gora”（山丘），意为“烧荒垦殖的山丘”，清晰地揭示了其最初的拓荒底色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的真正奠基，是在<strong>1210年左右</strong>。当时，波西米亚国王奥托卡一世在此授予其城市权利。优越的地理位置决定了它的命运：它正处在连接波罗的海与南欧，西欧与东欧的“皇家大道”与“琥珀之路”上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "很快，格尔利茨凭借繁荣的布料贸易，特别是高品质的“格尔利茨呢绒”，积累了惊人的财富。<strong>1346年</strong>，它加入了强大的城市联盟——“劳西茨六城联盟”，与齐陶、鲍岑等城共进退，奠定了其作为上劳西茨地区经济文化中心的地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座从商贸中崛起的城市，最初的规划便围绕着市场和交通。其不规则的卵形老城轮廓，至今仍清晰可见。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格尔利茨的历史并非一条平静的长河，而是在几次重大转折中，塑造了其坚韧而独特的个性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个深刻印记，是<strong>宗教改革</strong>。16世纪初，新教思潮如野火燎原。格尔利茨的市民和市议会，在<strong>1525年</strong>毅然决定接受马丁·路德的学说，整座城市皈依了新教。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一转变带来了深刻的文化影响。市政权力加强，拉丁语学校转变为注重人文的新教中学。城市的天际线也为之改变——古老的圣彼得与保罗教堂的塔楼，正是在改教后不久 (<strong>1536年</strong>) 以文艺复兴风格重建，成为信仰更迭的石头见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更大的考验来自 <strong>1618-1648年的三十年战争</strong>。这场席卷欧洲的宗教与霸权混战，将格尔利茨拖入深渊。它数次被各方军队占领、勒索。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最惊险的一刻在 <strong>1641年</strong>。瑞典军队兵临城下，意图强攻。传说，当时一位勇敢的市议员只身前往瑞典军营谈判。他并未携带黄金，而是展示了城市的贫困与居民的坚韧意志。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们已一无所有，唯有誓死守卫家园的决心。你们可以夺走我们的生命，但征服不了一颗颗准备为自由殉道的心。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "或许是被这份孤勇打动，或许觉得这座疲惫小城已无油水可榨，瑞典指挥官竟意外下令撤围。格尔利茨奇迹般地躲过了一场几乎注定毁灭的劫掠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，二十世纪的<strong>分裂</strong>，给了格尔利茨最独特、也最伤痛的印记。<strong>1945年</strong>，根据《波茨坦协定》，奥得河-尼斯河线被定为德国新东部边界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格尔利茨被这条边界线残忍地切开：奥得河右岸的老城主体留在了德国（东德），而左岸的部分则划归波兰，并更名为<strong>兹戈热莱茨</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一道边界，两重世界。老城的建筑留在了东德，但其历史肌理的一部分——河对岸的视野与关联——被硬生生割断。直到两德统一、波兰加入申根区后，分隔数十年的双子城才重新紧密相连，成为欧洲一体化最动人的象征之一。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在格尔利茨漫长的星空中，<strong>约翰内斯·朔伊希策</strong> 并非最耀眼的那颗，却是与城市命运捆绑最紧密的一位。他生于 <strong>1612年</strong>，卒于 <strong>1676年</strong>，一生几乎与动荡的十七世纪重合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一名律师，更是格尔利茨市议会的终身秘书。但他留给后世最宝贵的遗产，是长达数十卷的《格尔利茨编年史》。在三十年战争的硝烟与瘟疫的阴影下，朔伊希策以惊人的毅力，日复一日地记录着城市的点滴：市政决议、物价波动、婚礼葬礼、天气异象，乃至街头巷尾的流言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的记载冷静、细致，充满人道主义的观察。他写战争带来的饥荒：“<strong>1642年</strong>的冬天，人们吃狗、猫，甚至从绞刑架上割下死者的肉。” 他也写战争间歇难得的平静与市民的韧性。这部编年史，让格尔利茨的十七世纪不再是一个模糊的历史概念，而是一个充满呼吸与脉搏的鲜活世界。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“今天，我为我的城市书写历史，但愿未来的子孙能从中读到教训，也读到希望。” —— 朔伊希策在手稿边页的注记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朔伊希策的故居，一栋精致的文艺复兴风格建筑，至今仍矗立在老城集市广场旁。他仿佛从未离开，仍是这座城市的守护者与书记官。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与格尔利茨深度绑定的人物，是艺术史学家 <strong>维克托·克伦佩雷</strong>。是的，他与那位以《第三帝国语言》闻名于世的语言学家同名同姓，正是其堂弟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>维克托·克伦佩雷</strong> 于 <strong>1881年</strong> 出生在一个犹太裔家庭。他对格尔利茨的热爱，源于其无与伦比的建筑遗产。他是最早系统研究并极力推崇这座小城建筑价值的学者之一。他的著作，将格尔利茨从区域性的认知，推向了更广阔的艺术史视野。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，纳粹的上台改变了一切。作为犹太人，克伦佩雷被剥夺教职，著作被禁。<strong>1942年</strong>，他被关押在格尔利茨的监狱，随后被转运至特莱西恩施塔特集中营。他奇迹般地幸存下来，但战争结束仅两年后 (<strong>1947年</strong>)，便因长期折磨导致的健康恶化在德累斯顿去世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克伦佩雷的命运，为格尔利茨辉煌的建筑史蒙上了一层阴影。他毕生研究的美丽城市，最终成了囚禁他的牢笼的一部分。他的故事提醒着世人，格尔利茨的石头不仅诉说着美，也沉默地见证了二十世纪最黑暗的篇章。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在格尔利茨，历史与传说交织，最著名的故事与那座最高的地标——<strong>圣彼得与保罗教堂的塔楼</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在重建塔楼时（即<strong>1536年</strong>那次），工程遇到了难以解决的难题，或是资金短缺，或是技术瓶颈。苦恼的建筑师或市长，在绝望中与<strong>魔鬼</strong>达成了契约：魔鬼将在一夜之间完成最复杂的塔尖部分，作为交换，他将取走第一个进入教堂的生物的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "魔鬼如期完成了鬼斧神工般的塔尖石雕。智慧的市民们识破了他的诡计。第二天清晨，他们并未驱使人进入教堂，而是将<strong>一只公鸡</strong>从大门扔了进去。魔鬼只能愤怒地带走公鸡的灵魂，并在震怒中猛踹塔楼墙壁，留下了一个凹痕（至今有砖块指向这个“魔鬼之爪”印）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说围绕着<strong>圣尼古拉喷泉</strong>。这座位于集市广场的美丽喷泉，其雕像并非圣尼古拉本人，而是一位手持城市模型、头戴王冠的“正义女神”。民间却将她称为“饥饿圣母”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在某个饥荒年份，一位神秘的妇人每日清晨出现在市场，向最饥饿的穷人分发面包，然后悄然消失。人们相信，她就是圣母玛利亚的化身，守护着城市的贫苦百姓。于是，“饥饿圣母”的昵称与喷泉一起，成为了格尔利茨慈悲与社区精神的象征。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步格尔利茨，你读懂的不是单一的故事，而是一本摊开的、包罗万象的欧洲史。每一块砖石，都是一个句子；每一条街巷，都是一个章节。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从斯拉夫聚落到汉萨同盟式的商都，从宗教改革的先锋到战争蹂躏的幸存者，从“胶片之都”（冷战时期曾是东德电影胶片生产中心）的隐秘辉煌到一城两国的分裂之痛，再到重获新生的欧洲桥梁——格尔利茨将历史的层理，无比清晰地展露在外。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座<strong>幸存的奇迹</strong>。二战中未被轰炸，使它成为德国保存最完好的历史名城之一。它又是一面<strong>分裂的镜子</strong>，照见冷战欧洲的伤痕与愈合。最终，它成为一个<strong>和解的符号</strong>，当人们自由穿梭于德国格尔利茨与波兰兹戈热莱茨之间时，便是在亲身实践欧洲最珍贵的和平理念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，旅行超越了观光，成为一场与时间、与历史记忆的深刻对话。你触摸的不仅是古老的墙面，更是欧洲大陆跳动了千年的脉搏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/holstentor-lubeck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吕贝克霍尔斯滕门</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Holstentor</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meissen-porcelain-albrecht-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈森</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meissen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/altstadt-amberg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    安
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">安贝格老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amberg Old Town</p>
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
