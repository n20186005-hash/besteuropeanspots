import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗里萨赫 Friesach｜探访奥地利克恩顿最古老护城河小镇， 活生生的中世纪时间胶囊 - 最佳欧洲景点',
  description: '想象一下， 你离开现代的公路， 步行穿过一片绿意盎然的草地， 然后， 它就在你面前豁然展开：一道宽阔的、绿得发幽的护城河， 像一条沉睡的翡翠龙， 静静环绕着一圈厚重斑驳的石墙。一座石桥通向高大的城门洞， 门洞深得像能把时光吸进去。这就是你对弗里萨赫的第一眼。当你走过桥， 穿过那凉飕飕的城门阴影， 外...',
}

export default function FriesachMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '弗里萨赫， 克恩顿州', href: '/destinations/austria' },
            { label: '弗里萨赫', href: '/attractions/friesach-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗里萨赫・Friesach・奥地利・弗里萨赫， 克恩顿州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下， 你离开现代的公路， 步行穿过一片绿意盎然的草地， 然后， 它就在你面前豁然展开：一道宽阔的、绿得发幽的护城河， 像一条沉睡的翡翠龙， 静静环绕着一圈厚重斑驳的石墙。一座石桥通向高大的城门洞， 门洞深得像能把时光吸进去。这就是你对弗里萨赫的第一眼。当你走过桥， 穿过那凉飕飕的城门阴影， 外面的世界——汽车的噪音、广告牌的炫光——瞬间被过滤掉了。取而代之的是脚下被无数足迹打磨得温润发亮的石板路， 是马蹄轻轻叩击石头的嘚嘚声（没错， 镇上真有观光马车）， 是空气里隐约飘来的新鲜烤面包的酵母香气， 混合着老石墙上苔藓的湿润味道。
你发现自己站在主广场上。这里没有蜂拥的旅游团， 只有几个本地老人坐在长椅上晒太阳， 眯着眼看着教堂的尖顶。广场周围的房屋外墙色彩柔和， 黄、粉、绿， 像被岁月调和过的水彩， 窗台上无一例外地怒放着天竺葵， 红得像一小团一小团的火。圣巴特洛梅教堂那红白相间的钟楼沉稳地俯瞰着一切， 它的存在感不是咄咄逼人的， 而是像一位沉默的守护者， 已经在这里站立了八百年。这里的核心魅力， 就是一种近乎奢侈的“真实性”。它不是迪士尼式的布景， 而是一个仍然在呼吸、在生活的中世纪社区骨架。护城河不是干涸的展览品， 里面真的有水， 有鸭子游过；城墙不是围起来的禁区， 你可以亲手触摸那些冰凉的、粗糙的石头， 感受历史的质地。
最打动人的， 是那种从容的节奏。时间在这里不是被切割成碎片， 而是像护城河的水一样， 缓慢、完整地流淌。你很快会忘记看手表， 而是跟着光影在街道上的移动来感知时辰。午后， 阳光斜斜地照亮半条街， 把对面房屋的阴影拉得老长；咖啡馆外座的人们， 一杯咖啡可以消磨整个下午， 不是为了打卡， 就是为了享受这份被古老城墙包裹起来的宁静。在这里， 历史不是教科书上的名词， 而是你脚下踩着的石板、指尖掠过的墙垣、眼中所见的每一帧安宁画面。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下， 你离开现代的公路， 步行穿过一片绿意盎然的草地， 然后， 它就在你面前豁然展开：一道宽阔的、绿得发幽的护城河， 像一条沉睡的翡翠龙， 静静环绕着一圈厚重斑驳的石墙。一座石桥通向高大的城门洞， 门洞深得像能把时光吸进去。这就是你对弗里萨赫的第一眼。当你走过桥， 穿过那凉飕飕的城门阴影， 外面的世界——汽车的噪音、广告牌的炫光——瞬间被过滤掉了。取而代之的是脚下被无数足迹打磨得温润发亮的石板路， 是马蹄轻轻叩击石头的嘚嘚声（没错， 镇上真有观光马车）， 是空气里隐约飘来的新鲜烤面包的酵母香气， 混合着老石墙上苔藓的湿润味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你发现自己站在主广场上。这里没有蜂拥的旅游团， 只有几个本地老人坐在长椅上晒太阳， 眯着眼看着教堂的尖顶。广场周围的房屋外墙色彩柔和， 黄、粉、绿， 像被岁月调和过的水彩， 窗台上无一例外地怒放着天竺葵， 红得像一小团一小团的火。圣巴特洛梅教堂那红白相间的钟楼沉稳地俯瞰着一切， 它的存在感不是咄咄逼人的， 而是像一位沉默的守护者， 已经在这里站立了八百年。这里的核心魅力， 就是一种近乎奢侈的“真实性”。它不是迪士尼式的布景， 而是一个仍然在呼吸、在生活的中世纪社区骨架。护城河不是干涸的展览品， 里面真的有水， 有鸭子游过；城墙不是围起来的禁区， 你可以亲手触摸那些冰凉的、粗糙的石头， 感受历史的质地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的， 是那种从容的节奏。时间在这里不是被切割成碎片， 而是像护城河的水一样， 缓慢、完整地流淌。你很快会忘记看手表， 而是跟着光影在街道上的移动来感知时辰。午后， 阳光斜斜地照亮半条街， 把对面房屋的阴影拉得老长；咖啡馆外座的人们， 一杯咖啡可以消磨整个下午， 不是为了打卡， 就是为了享受这份被古老城墙包裹起来的宁静。在这里， 历史不是教科书上的名词， 而是你脚下踩着的石板、指尖掠过的墙垣、眼中所见的每一帧安宁画面。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗里萨赫`} />
                <InfoRow label="英文名称" value={`Friesach`} />
                <InfoRow label="正式名称" value={`Friesach`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`弗里萨赫， 克恩顿州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是克恩顿州最古老、保存最完好的中世纪护城河城镇， 一部用石头和流水写成的奥地利边疆编年史。`} />
                <InfoRow label="建筑特色" value={`双重护城河与巍峨城墙构成的完整中世纪防御体系， 与城内宁静的广场、高耸的教堂和古朴民居形成戏剧性对比。`} />
                <InfoRow label="建筑风格" value={`以罗曼式和哥特式为主的中世纪城镇建筑群， 历经数百年修补与融合， 呈现出一种和谐而真实的岁月包浆。`} />
                <InfoRow label="文化价值" value={`作为一个“活着的”中世纪社区， 它不仅是历史遗迹， 更是理解阿尔卑斯山前沿地区商业、宗教与防御如何塑造日常生活的最佳范本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天24小时开放。主要景点如圣巴特洛梅教堂、镇博物馆、城堡废墟等开放时间不一， 通常为夏季（5月至9月）上午10点至下午5点， 冬季（10月至次年4月）部分景点可能缩短开放时间或仅周末开放， 甚至关闭维护。强烈建议出发前在其官网或当地旅游信息中心确认最新时间。每年七月下旬的中世纪节期间， 整个小镇化身为大型露天剧场， 所有历史景点都会配合节日有特别安排。`} />
              <InfoRow label="门票价格" value={`漫步小镇本身是免费的， 完全沉浸在公共空间中无需任何费用。进入单个室内景点（如镇博物馆）门票约为5-8欧元。部分景点提供组合票。12岁以下儿童通常免费， 学生和老人享有折扣。参加中世纪节或特定导览团需额外付费， 价格在15-30欧元不等。`} />
              <InfoRow label="地址" value={`Hauptplatz 1, 9360 Friesach, Austria`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是克拉根福。从克拉根福机场或火车站出发， 最经典且推荐的方式是乘坐奥地利国铁ÖBB的Regionalzug（区域火车）， 前往弗里萨赫站。车次频繁， 大约每小时一班， 车程在40分钟到1小时之间， 沿途会经过克恩顿州典型的翠绿丘陵和宁静湖泊， 风景本身就是旅途的一部分。出站后， 小镇核心区就在步行10-15分钟的范围内， 跟着路标轻松可达。如果自驾， A2高速公路有清晰出口， 小镇外围设有多个免费或收费低廉的停车场， 非常方便， 但请记住， 老城中心是步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`弗里萨赫的故事， 始于一条“白色的黄金”之路——盐道。早在公元860年的文献中， 就出现了它的名字。它的战略位置太关键了， 正好卡在从北方威尼斯通往中欧的重要商路上。谁控制了这里， 谁就掐住了财富的咽喉。于是， 萨尔茨堡的大主教们， 这些手握神权与世俗权柄的君主， 将目光投向了这里。12世纪， 他们开始大兴土木， 不是为了建造一座宫殿， 而是要打造一个坚固的财富堡垒。双重护城河、高达8米的城墙、30座防御塔楼……一套当时最先进的军事防御体系拔地而起。你可以想象， 中世纪的商队驮着丝绸、香料和盐块， 远远看到这水上雄城时的那种安全感与敬畏感。缴纳了通行税， 他们穿过城门， 在广场上交易， 喧闹声、牲畜的叫声、不同口音的叫卖声， 让弗里萨赫成了一个繁华的边境集市。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`繁荣带来了野心， 也引来了灾祸。13世纪初， 一场神秘的大火几乎将木结构为主的小镇吞噬殆尽。但弗里萨赫像一只浴火重生的凤凰， 人们用石头重建了家园， 我们今天看到的许多建筑基石， 就源于那个时期。教堂被扩建得更加雄伟， 富商们竞相建造华丽的房屋， 小镇在灰烬中变得更加坚固和美丽。然而， 历史的浪潮总是起伏不定。随着新的贸易路线的开辟和军事技术的变革， 弗里萨赫的战略地位逐渐下降。那曾经让它骄傲的、花费巨资维护的庞大护城河与城墙体系， 慢慢变成了一个沉重而略显过时的负担。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它没有在衰落中死去， 而是选择了沉睡。就像童话里被施了魔法的城堡， 时间在这里流速变缓。它没有经历后来大规模的工业化改造， 也没有在二战中遭到毁灭性破坏（这本身就是一个奇迹）。那些城墙和塔楼没有被拆掉去盖新房子， 只是因为， 在当时看来， 那工程太费钱费力了。于是， 这份中世纪的“遗产”被意外地、完整地保存了下来。到了现代， 当人们开始珍视历史时， 才惊异地发现， 弗里萨赫几乎原封不动地保留着它中世纪鼎盛时期的风貌。它不再是边疆要塞， 而变成了一枚珍贵的时间胶囊。当地人也欣然接受了这个新角色， 他们精心维护着祖辈传下的房屋， 在护城河里放养水禽， 并创办了闻名遐迩的中世纪节。他们不再是盐道上的征税官或商人， 而是这段活历史的守护者和讲述者。从防御堡垒到商业枢纽， 再到沉睡的古镇， 最终成为活态的文化遗产——弗里萨赫的每一次转身， 都深深地烙刻在它的石头与流水之中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味弗里萨赫， 你需要一整天， 并把节奏彻底放慢。建议在上午9点左右抵达， 这时晨雾可能还未从护城河上完全散去， 光线柔和， 游客稀少， 是拍照和感受古镇苏醒气息的黄金时间。整体游览耗时约6-8小时， 遵循“由外及内， 由下至上”的逻辑。先从外围的护城河与城墙开始， 建立对小镇防御体系的宏观印象；然后深入核心区， 漫步街巷， 体验日常生活场景；最后登高至城堡废墟， 在黄昏时分收获全景作为一天的完美句点。这样的安排能让你逐步深入， 从宏观到微观， 最后再回到宏观的视角， 完整地理解这座小镇的空间与历史层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`千万不要只是中午来打卡两小时， 那时一日游的巴士游客最多， 会破坏古镇的宁静氛围。小镇石板路多且略有起伏， 务必穿一双绝对舒适、能抓地的步行鞋。如果时间允许， 尽量将行程安排在七月下旬， 亲身参与其举世闻名的中世纪节， 那时整个小镇会“穿越”回过去， 体验无与伦比。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从南侧的主停车场出发， 先别急着进城， 而是沿着外护城河安静地走上一段， 看天鹅的倒影如何被古老的城墙切割成柔软的碎片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那座标志性的石桥与深深的城门洞， 让自己正式进入中世纪的时间场， 在主广场的喷泉边驻足， 听水声如何成为广场白噪音的基底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意钻进一条从主广场辐射出去的小巷， 比如Judengasse， 用指尖触碰两边房屋那些因为百年风化而变得像海绵一样柔软的石墙表面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣巴特洛梅教堂， 不要只盯着祭坛看， 而是找一个角落的长椅坐下， 让眼睛适应昏暗的光线， 静静观察光影如何透过古老的彩绘玻璃在石柱上缓慢爬行。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到通往城墙步道的入口（信息中心会给你地图）， 花半小时在上面行走， 从防御者的视角俯瞰红瓦屋顶的海洋和自家后院的小花园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访小镇博物馆， 不看那些宏大的历史叙述， 专门寻找关于普通市民生活的展品：一个中世纪孩童的玩具， 一封商人的家书， 一件磨损严重的工具。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在本地人推荐的Gasthof（传统餐馆）用一顿漫长的午餐， 必点克恩顿州特色的Kasnudeln（奶酪饺子）， 并和热情的店主聊上几句。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将最后充沛的体力留给爬上市政厅后方的城堡山， 沿着林间小径抵达废墟脚下， 在夕阳将天空染成金粉色时， 俯瞰被完整护城河环绕的整个小镇全景。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`外护城河东南角弧形拐弯处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚， 利用平静的水面拍摄城墙与塔楼的完整倒影， 对称构图能最大化其静谧而强大的防御美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主城门洞内部向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`站在门洞深处的阴影里， 对着外面阳光照耀下的广场和彩色的房屋取景， 形成强烈的明暗与色彩对比， 框架构图讲述“穿越”的故事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡山废墟的瞭望台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时， 面向西方， 将城堡残存的拱门作为前景框架， 聚焦远处沐浴在金色夕阳下的小镇全景， 营造史诗感的时空对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣巴特洛梅教堂侧翼小巷`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时， 寻找一条狭窄的小巷， 拍摄光线将晾衣绳、窗台鲜花和古老石墙照得透亮的日常诗意场景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`镇博物馆顶层的小窗口`}</h4>
                  <p className="text-sm text-gray-700">{`从一个极其狭窄的古老石窗望出去， 拍摄一幅被窗框严格限定的“画中画”， 内容可能是教堂尖顶的一角、一片屋顶或一棵树， 极富趣味。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除护城河水面不必要的反光， 让倒影更清澈， 同时增强中世纪建筑石材的质感。小镇内部街巷光线对比强烈， 建议使用RAW格式拍摄， 为后期保留更多阴影和高光细节。拍摄居民和他们的私人空间时， 请务必保持尊重， 先微笑示意， 获得默许后再举起相机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`主广场旁的家庭经营旅馆“金狮”， 房间虽小但一尘不染， 老板娘的早餐 Homemade 果酱能让你尝到克恩顿果园的阳光， 晚上还能听到广场隐约传来的音乐声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`“城墙之门”历史酒店， 由一座中世纪塔楼和相邻的古老民居改造而成， 部分房间的窗户直接开在古老的城墙里， 睡在真正的历史结构中是独一无二的体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`城堡山脚下的“骑士庄园”精品套房， 由贵族宅邸修复， 拥有私密的庭院和古董家具， 提供的洗浴用品都是当地草药品牌， 晚上有专人点燃壁炉。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度融入`}</h4>
                  <p className="text-sm text-purple-800">{`选择小镇外几分钟车程的郊外农庄“菩提树下”， 住进真正的奥地利农家， 清晨被奶牛铃声唤醒， 晚餐品尝农场自产食材， 获得田园与古镇的双重体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季和中世纪节期间）住宿非常紧俏， 务必提前数月预订。选择老城内的住宿意味着完全的沉浸感， 但可能需面对夜晚的绝对宁静（对一些人来说是优点）。如果自驾， 预订时一定要确认停车安排， 老城内停车位是稀缺资源。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开弗里萨赫时， 我背包里没有多出什么纪念品， 但心里却好像被那护城河的水， 温柔地注满了一种沉静的力量。这个地方教会我的， 不是某个具体的历史知识， 而是一种关于“时间”的全新感知。在一个追求更快、更高、更炫的世界里， 弗里萨赫骄傲地、安静地扮演着“慢”和“旧”的守护者。它的魅力不在于惊心动魄的传奇， 而在于那种完好无损的连续性。当你触摸那里的城墙， 你触摸的不是一个被玻璃罩起来的“文物”， 而是依然在履行着“围合一个家园”功能的实体。这种历史与生活的无缝交融， 产生了一种不可思议的治愈感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它就像一个精神的减震器。来到这里， 你会不自觉地放下手机， 调慢步伐， 开始用眼睛去观察光影的移动， 用耳朵去分辨不同的钟声， 用鼻子去捕捉空气里变化的气息。你会意识到， 生活可以不必被切割成无数个焦虑的碎片， 它可以是一条完整的、缓慢流淌的河。对于每一位热爱深度游的旅人而言， 弗里萨赫不仅仅是一个“景点”， 它是一堂关于如何与历史共存、如何在现代世界中安放内心的实践课。它用最温柔的方式提醒我们：真正的财富， 有时不是向前狂奔获取更多， 而是守护好那些让心灵安宁的、古老的“护城河”。这， 正是它值得被列入一生必去清单的、无可替代的理由。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gmunden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/feldkirch-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔德基希老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Feldkirch Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schlossberg-graz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉茨城堡山</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schlossberg</p>
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
