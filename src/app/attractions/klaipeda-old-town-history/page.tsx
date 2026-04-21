import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克莱佩达历史溯源｜波罗的海“琥珀与钢铁之城”的前世今生与汉萨传奇',
  description: '探索立陶宛唯一海港克莱佩达的尘封往事。从条顿骑士团城堡到汉萨同盟重镇，穿越700年德意志与立陶宛文化交织的史诗，聆听黑幽灵的传说。',
}

export default function KlaipedaOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '立陶宛', href: '/destinations/europe' },
            { label: '克莱佩达县', href: '/destinations/europe' },
            { label: '克莱佩达老城', href: '/attractions/klaipeda-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克莱佩达老城・Klaipėda Old Town・立陶宛・克莱佩达县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在立陶宛西海岸，琥珀色的阳光与钢铁般的海风，共同雕刻出一座与众不同的城市。这里不是维尔纽斯，也不是特拉凯，而是立陶宛通往世界的海上门户——<strong>克莱佩达</strong>。它的老城石板路上，回荡着德语名字“梅梅尔”的余韵，每一座彩色木构建筑里，都封存着一段在普鲁士、瑞典、沙俄与立陶宛之间数次易手的边境传奇。抛开游玩攻略，走进克莱佩达的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克莱佩达老城`} />
                <InfoRow label="英文名称" value={`Klaipėda Old Town`} />
                <InfoRow label="正式名称" value={`Klaipėda Old Town`} />
                <InfoRow label="国家" value={`立陶宛`} />
                <InfoRow label="城市" value={`克莱佩达县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克莱佩达的故事，始于<strong>波罗的海骑士的铁蹄与贸易的野心</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1252年</strong>，条顿骑士团在此地的库尔什潟湖与波罗的海交汇处，建立了一座坚固的城堡。它最初的拉丁语名字叫“Castrum Memele”，意为“梅梅尔河上的城堡”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这条河，便是城市命名的核心。然而，这个名字本身，就是一段复杂历史的开篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“梅梅尔”源于古普鲁士语，而“克莱佩达”则来自立陶宛语对周围沼泽地貌的描述。一座城，两个名字，预示了它未来数百年作为<strong>文化边界与争夺焦点</strong>的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "骑士团建立城堡的目的非常明确：征服并基督教化当地的异教部落，同时控制这条关键的水道。城堡很快吸引了商人和手工业者，一个定居点在城堡外围成长起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1258年</strong>，它获得了卢贝克城市法，正式成为城市。这意味着它被纳入了强大的汉萨同盟网络，规则与贸易模式与吕贝克、里加等城市一脉相承。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的克莱佩达（梅梅尔），是一个标准的<strong>条顿骑士团国家前沿要塞</strong>。它并非为浪漫而生，而是为征服、统治与征税而建。坚固的城堡俯瞰着河流与潟湖，掌控着琥珀、木材、粮食的贸易航线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种与生俱来的“边境”与“堡垒”基因，深深烙印在城市的性格里，即使后来的砖木建筑显得柔和，其内核依然是坚韧与务实的。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在此处，梅梅尔河注入库尔泻湖，形成天然良港。骑士团于此筑堡，如利剑插入萨莫吉希亚之地，上帝之事业与世俗之商利，在此合而为一。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 摘自条顿骑士团编年史残片" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "七百多年间，克莱佩达老城的命运随着大国博弈的潮汐不断起伏，其中两个印记最为深刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个印记：汉萨同盟的繁荣与普鲁士的底色。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在条顿骑士团国衰落并世俗化为普鲁士公国后，梅梅尔（克莱佩达）的重要性并未减弱。作为<strong>普鲁士王国最北端的港口</strong>，它成为了王国重要的对外贸易窗口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>17至18世纪</strong>，城市迎来了第一次繁荣。那些今天我们看到的、色彩柔和、带有精美山墙的<strong>半木结构房屋</strong>，正是在这个时期大量修建。它们并非立陶宛传统建筑，而是典型的<strong>北德建筑风格</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "狭窄的街道规划，也保留了中世纪汉萨城市的格局。当时的梅梅尔，商船云集，出口普鲁士的粮食、木材，进口来自西欧的盐、布匹和鲱鱼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的市民说德语，遵循德意志的法律与习俗。<strong>直到20世纪初，它都是一座不折不扣的德国城市</strong>，被誉为“普鲁士的摇篮”之一。这段长达六个多世纪的德意志时期，为老城赋予了无法抹去的文化肌理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二个印记：二十世纪的动荡与“克莱佩达地区”的争议。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1919年凡尔赛条约</strong>后，梅梅尔城及周边地区被从战败的德国分离，由国际联盟托管。<strong>1923年</strong>，立陶宛军队和支持者发动起义，最终将这一地区并入立陶宛，城市也正式改名为克莱佩达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是立陶宛获得出海口的决定性一步，但也埋下了巨大隐患。纳粹德国一直对此地宣称主权。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“1939年3月22日，我站在剧院广场。德国战舰‘石勒苏益格-荷尔斯泰因号’就停泊在港口，黑压压的人群在欢呼‘希特勒万岁’。一夜之间，街上的立陶宛语标识全换成了德语。那不是回家，那是一次冰冷的占领。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 摘自当地一位老居民的回忆录" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1939年</strong>，纳粹德国最后通牒，兵不血刃地夺回了该地区。二战末期，克莱佩达经历了残酷的争夺战，几乎<strong>85%的老城建筑毁于战火</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后，它再次归属苏联立陶宛。立陶宛人、俄罗斯人迁移至此，取代了被驱逐或逃离的德裔居民。我们今天看到的克莱佩达老城，绝大部分是在<strong>苏联时期依照原样精心重建</strong>的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它像一个历史的标本，凝固了其德国起源的样貌，却由立陶宛人守护。这种反差，正是它最深刻的历史印记。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座边境之城，文化的交融催生了一些独特的人物。其中，诗人<strong>西蒙·达赫</strong>的故事最为动人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>西蒙·达赫</strong>并非家喻户晓的文学巨匠，但他却是<strong>17世纪德国巴洛克诗歌的重要代表</strong>，更重要的是，他人生的大部分时光都与梅梅尔（克莱佩达）紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1605年</strong>，他出生在梅梅尔一个说低地德语的商人家庭。他曾在柯尼斯堡大学学习，后游历欧洲，最终回到故乡，从<strong>1633年起直至去世，一直担任梅梅尔拉丁文学校的校长</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的生活圈子就在老城之内，每日穿行于教堂、学校与码头之间。他的诗歌，既有巴洛克式的华丽与对生命易逝的感伤，也带着波罗的海海岸的清新与朴实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最著名的作品《塔嫩贝格之歌》虽非在此创作，但他在梅梅尔写下了大量描绘故乡风物、抒发个人情感的诗歌。他是这座城市<strong>第一个真正意义上的文化名人</strong>，将德意志文学的精妙，播种在这片偏远的波罗的海土地上。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“梅梅尔，我宁静的小城，被潟湖与海浪轻拥。你的橡木房舍，是我灵感的港湾，你的海风咸味，是我诗句的韵脚。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 西蒙·达赫《致故乡梅梅尔》节选" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与另一位诗人<strong>海因里希·阿尔贝特</strong>的友谊也被传为佳话，两人共同奠定了“柯尼斯堡诗派”的基础，而梅梅尔正是这个文学圈子的重要支点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与克莱佩达结缘的名人，则来自遥远的美国——建筑师<strong>厄内斯特·约翰逊</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战后，满目疮痍的克莱佩达面临重建。苏联当局决定恢复老城的历史风貌，但标准的苏联式建筑图纸并不适用。这时，他们意外地找到了一批珍贵的<strong>18世纪末至19世纪初的建筑测绘图</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而绘制这些图纸的，正是这位在<strong>1795-1804年间游历波罗的海地区</strong>的美国建筑师。他的图纸细致标注了每一栋建筑的立面、结构和装饰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在20世纪下半叶，立陶宛的建筑师们手持近两百年前的美国图纸，一砖一木地重建了这座德国风格的老城。<strong>约翰逊本人从未想过，他的工作会成为异国城市重生的蓝本</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场跨越时空的对话，让克莱佩达老城的重建格外“正宗”，避免了战后许多城市历史街区重建的“迪士尼化”倾向。一位美国人的细致，阴差阳错地帮助保留了一片欧洲的历史记忆。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在克莱佩达老城，历史不仅是档案，更活在人们的口耳相传中，化身为一个神秘的影子——<strong>“黑幽灵”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在<strong>19世纪中期</strong>，每当夜幕降临，老城狭窄的街巷里，就会出现一个高大的黑色身影。他身披斗篷，面容隐藏在阴影中，悄无声息地穿行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但这个幽灵并非带来恐惧。相反，他被视为一座<strong>隐秘的审判官与慈善家</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，他会出现在为富不仁的商人窗外，用沉默施加无形的压力，直至其悔改。更多的时候，他会将钱袋悄悄放在贫病交加的市民门阶上，或是在严冬为赤贫者留下取暖的木柴。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的曾祖母告诉我，她小时候家里穷得揭不开锅。一个寒冷的圣诞夜清晨，门口发现了一篮食物和一小袋硬币，上面没有任何标记。邻居都说，那是‘黑幽灵’来过了。他从不说话，但他的存在，让富人心存忌惮，让穷人在绝望中保有希望。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 当地世代相传的故事" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他的真实身份，众说纷纭。有人说是<strong>一位在战争中失去一切的贵族</strong>，有人说是<strong>一位良心不安的富商</strong>，甚至有人说他是<strong>城市守护圣徒的化身</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说之所以在克莱佩达如此根深蒂固，或许正隐喻了这座城市自身的性格：在多次战争与政权更迭的残酷历史中，底层民众之间默默传递着的坚韧、互助与微弱的希望之光。“黑幽灵”就是这种集体潜意识的化身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，在老城的旅游纪念品店，你还能看到“黑幽灵”的玩偶或画像。他甚至有了自己的青铜雕像，藏身于老城一隅的门洞阴影中，成为游客寻找的趣味景点。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在克莱佩达老城，你踩踏的不仅是石板路，更是层层叠叠的时间地质层。德意志的秩序、汉萨的商贸、普鲁士的严谨、战火的伤痕、苏联的修复、立陶宛的重生……全部压缩在这片不大的区域里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有维尔纽斯巴洛克的恢弘，也没有特拉凯城堡的浪漫。它的魅力在于一种<strong>厚重的复杂性</strong>。在这里，你能清晰触摸到欧洲历史中“边境”的实质——它不是一条线，而是一个流动的、充满撕扯与交融的地带。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一栋重建的木屋，都是一句无声的宣言：我们失去了很多，但我们选择记住，并小心翼翼地复原。这种态度，让克莱佩达超越了一个单纯的“景点”，成为一个关于<strong>记忆、身份与韧性的人文课堂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂克莱佩达，便能读懂波罗的海沿岸小国在强邻环伺中生存与自持的缩影。它是琥珀，温润中封存着远古的时光；它也是钢铁，在无数次淬炼中锻造出不变的形貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kernav--archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克尔纳韦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kernavė</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kaunas-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考纳斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kaunas Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/anyksciai" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尼克什奇艾</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Anykščiai</p>
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
