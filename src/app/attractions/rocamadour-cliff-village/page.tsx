import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗卡马杜尔悬崖城 Rocamadour｜悬崖上的信仰之城与中世纪奇迹 - 最佳欧洲景点',
  description: '车子在法国多尔多涅地区蜿蜒的丘陵间穿行，两旁是茂密的橡树林和宁静的牧场。就在你觉得这田园风光将要无限延续下去时，公路猛地拐过一个山坳——那一瞬间，我保证你会忍不住惊呼出声，甚至一脚踩下刹车。前方，一道巨大、灰白、近乎垂直的悬崖像被巨斧劈开般陡然升起，而就在这悬崖近乎中段的崖壁上，密密麻麻、层层叠叠地...',
}

export default function RocamadourCliffVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗卡马杜尔悬崖城', href: '/attractions/rocamadour-cliff-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`罗卡马杜尔悬崖城・Rocamadour・法国・洛特省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在法国多尔多涅地区蜿蜒的丘陵间穿行，两旁是茂密的橡树林和宁静的牧场。就在你觉得这田园风光将要无限延续下去时，公路猛地拐过一个山坳——那一瞬间，我保证你会忍不住惊呼出声，甚至一脚踩下刹车。前方，一道巨大、灰白、近乎垂直的悬崖像被巨斧劈开般陡然升起，而就在这悬崖近乎中段的崖壁上，密密麻麻、层层叠叠地“粘”着一片房屋、教堂和塔楼。那不是建在山上，那根本就是山的一部分。罗卡马杜尔，它就这样毫无预兆地、带着近乎傲慢的壮观，闯进你的视野。阳光洒在那些古老的石墙上，泛着蜂蜜般的暖光，而悬崖底部的阴影深邃如墨，强烈的对比让整个景象宛如一幅超现实的浮雕。
停好车，沿着指示牌走向入口。空气里有干燥的尘土味，混合着远处森林飘来的清新松脂香。真正的体验从“朝圣者之门”开始。你需要徒步攀爬那著名的“圣路”——一段依着崖壁开凿、拥有216级石阶的陡峭坡道。中世纪的信徒们是跪着爬完这些台阶的，如今我们虽不用如此，但拾级而上时，肌肉的酸痛、呼吸的急促，都奇妙地让你与历史产生了某种联结。耳边是各国游客的低声交谈、导游的讲解，还有自己心跳的声音。越往上，峡谷的风就越明显，它穿过石缝和拱门，发出呜呜的轻吟，仿佛是几个世纪以来无数祈祷者的回声。
当你终于穿过古老的城门，抵达那个被七座教堂和礼拜堂环绕的狭小广场时，感官会再次被征服。这里的光线是经过过滤的——高耸的悬崖挡住了部分天光，让整个空间笼罩在一种静谧、幽蓝的调子里。空气冰凉，弥漫着一股特有的、混合了潮湿岩石、燃烧蜂蜡（来自无数许愿蜡烛）和古老木头的复杂气味。最震撼的是声音的消逝。尽管游客不少，但在这里，人声仿佛被厚重的石壁和庄严的氛围吸收了，只剩下偶尔响起的教堂钟声，清澈、悠远，在悬崖间来回碰撞，久久不散。你会看到当地人——不仅是神职人员，还有小店店主、餐厅服务员——他们步履从容，眼神平和，这座悬在空中的城不仅是景点，更是他们生活的家园和精神的锚点。一位坐在广场长椅上晒太阳的老先生，他的皱纹就像岩壁上的沟壑，他本身就是风景的一部分。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在法国多尔多涅地区蜿蜒的丘陵间穿行，两旁是茂密的橡树林和宁静的牧场。就在你觉得这田园风光将要无限延续下去时，公路猛地拐过一个山坳——那一瞬间，我保证你会忍不住惊呼出声，甚至一脚踩下刹车。前方，一道巨大、灰白、近乎垂直的悬崖像被巨斧劈开般陡然升起，而就在这悬崖近乎中段的崖壁上，密密麻麻、层层叠叠地“粘”着一片房屋、教堂和塔楼。那不是建在山上，那根本就是山的一部分。罗卡马杜尔，它就这样毫无预兆地、带着近乎傲慢的壮观，闯进你的视野。阳光洒在那些古老的石墙上，泛着蜂蜜般的暖光，而悬崖底部的阴影深邃如墨，强烈的对比让整个景象宛如一幅超现实的浮雕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，沿着指示牌走向入口。空气里有干燥的尘土味，混合着远处森林飘来的清新松脂香。真正的体验从“朝圣者之门”开始。你需要徒步攀爬那著名的“圣路”——一段依着崖壁开凿、拥有216级石阶的陡峭坡道。中世纪的信徒们是跪着爬完这些台阶的，如今我们虽不用如此，但拾级而上时，肌肉的酸痛、呼吸的急促，都奇妙地让你与历史产生了某种联结。耳边是各国游客的低声交谈、导游的讲解，还有自己心跳的声音。越往上，峡谷的风就越明显，它穿过石缝和拱门，发出呜呜的轻吟，仿佛是几个世纪以来无数祈祷者的回声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于穿过古老的城门，抵达那个被七座教堂和礼拜堂环绕的狭小广场时，感官会再次被征服。这里的光线是经过过滤的——高耸的悬崖挡住了部分天光，让整个空间笼罩在一种静谧、幽蓝的调子里。空气冰凉，弥漫着一股特有的、混合了潮湿岩石、燃烧蜂蜡（来自无数许愿蜡烛）和古老木头的复杂气味。最震撼的是声音的消逝。尽管游客不少，但在这里，人声仿佛被厚重的石壁和庄严的氛围吸收了，只剩下偶尔响起的教堂钟声，清澈、悠远，在悬崖间来回碰撞，久久不散。你会看到当地人——不仅是神职人员，还有小店店主、餐厅服务员——他们步履从容，眼神平和，这座悬在空中的城不仅是景点，更是他们生活的家园和精神的锚点。一位坐在广场长椅上晒太阳的老先生，他的皱纹就像岩壁上的沟壑，他本身就是风景的一部分。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`罗卡马杜尔悬崖城`} />
                <InfoRow label="英文名称" value={`Rocamadour`} />
                <InfoRow label="正式名称" value={`罗卡马杜尔朝圣城`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`洛特省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪欧洲最重要的圣母玛利亚朝圣地之一，与罗马、圣地亚哥-德孔波斯特拉齐名。`} />
                <InfoRow label="建筑特色" value={`建筑物如同燕巢般垂直紧贴在阿尔祖峡谷的石灰岩绝壁上，形成令人目眩的立体村落景观。`} />
                <InfoRow label="建筑风格" value={`以质朴坚固的罗曼式风格为主，混搭后期哥特式元素，整体呈现浑然天成的中世纪风貌。`} />
                <InfoRow label="文化价值" value={`一处生动展现了信仰、自然与人类坚韧意志如何共同塑造景观的非凡文化栖息地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`圣城建筑群全年开放，可自由漫步于外部街道与广场。圣母圣殿与城堡的室内开放时间依季节变化：四月至九月为9:00-18:00；十月至次年三月为10:00-17:00。珍宝室与小教堂的开放时间更短，通常为下午时段。请注意，每周日上午为主要弥撒时间，游客参观可能受限。冬季（11月至2月）部分次要景点可能不定期关闭维护，建议行前在官网复核。`} />
              <InfoRow label="门票价格" value={`进入罗卡马杜尔古镇及主要宗教区域（包括圣殿、忏悔礼拜堂等）免费。参观圣母圣殿内的著名黑圣母像免费。但以下景点收费：登上山顶城堡的电梯费用为成人5.2欧元；圣母圣殿珍宝室门票为3欧元；圣米歇尔礼拜堂门票为2.5欧元。提供城堡+珍宝室的联票，价格约7欧元。65岁以上老人及学生有约1欧元的优惠，10岁以下儿童免费。在大型宗教节日期间，所有收费项目可能暂停。`} />
              <InfoRow label="地址" value={`Le Bourg, 46500 Rocamadour, France`} />
              <InfoRow label="交通方式" value={`罗卡马杜尔位置较为偏僻，公共交通需要耐心规划。最近的机场是布里夫-苏亚克机场（Brive–Souillac），约40公里。从机场出发，最便捷的方式是租车自驾，沿D840和D673公路行驶约50分钟。若乘坐火车，最近的主要火车站是布里夫拉盖拉德站（Brive-la-Gaillarde）或苏亚克站（Souillac），从巴黎奥斯特里茨车站有直达列车，约4-5小时。从这两个火车站到罗卡马杜尔需换乘地区巴士（LR 106线），班次稀少，每天可能只有2-3班，车程约1-1.5小时，务必提前在TER Occitanie官网查好时刻表。自驾是最推荐的方式，古镇入口处有大型收费停车场（约5欧元/天），然后需要步行或乘坐付费电梯进入核心区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的开端，总是与奇迹和传说缠绕在一起。罗卡马杜尔（Rocamadour）这个名字，据说源自于一位隐居于此的圣人阿马杜尔（Amadour）。相传他并非等闲之辈，而是曾在圣地侍奉过圣母玛利亚的木匠撒该（Zacchaeus），在妻子圣女维罗妮卡去世后，他漂洋过海来到法国，选择了这处与世隔绝的绝壁作为苦修之地。当然，这是传说。有史可考的历史，始于1166年。那一年，工人们在古老的圣母小教堂祭坛下，发现了一具保存完好的、未曾腐烂的遗体。消息像野火般传开，人们立刻认定，这就是圣阿马杜尔本人的圣髑。一个地方一旦拥有了圣髑，尤其在笃信奇迹的中世纪，便拥有了无法估量的吸引力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但真正让罗卡马杜尔声名鹊起、成为欧洲基督教世界核心朝圣地的，是这里供奉的一尊黑圣母像。这尊用胡桃木雕刻的圣母抱子像，尺寸不大，面容黝黑（据信是几个世纪蜡烛烟熏的结果），却充满了难以言喻的慈爱与威严。关于她的神迹故事层出不穷：水手在风暴中呼求她而得救、重病者在她面前祈祷而康复、甚至一位被误判绞刑的囚犯在向她祈求后，绳索竟连续三次断裂……这些故事被僧侣们仔细记录在《神迹之书》里。到了12世纪末，罗卡马杜尔已经与罗马、耶路撒冷、圣地亚哥-德孔波斯特拉并列，成为最重要的朝圣中心之一。国王、贵族、骑士和平民，沿着危险的古道蜂拥而至。英格兰的亨利二世、法国的路易九世（圣路易）都曾来此朝圣，祈求保佑或感恩痊愈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，悬崖上的辉煌并非坚不可摧。命运的第一次重击来自宗教战争。16世纪的法国宗教战争期间，新教胡格诺派视圣母崇拜和圣髑敬礼为迷信。1562年，他们攻占了罗卡马杜尔。那是一场灾难：圣阿马杜尔的圣髑被付之一炬，珍贵的祭坛装饰被洗劫，许多建筑遭到严重破坏。曾经日夜不息的祈祷之声，被战火与掠夺的喧嚣取代。黑圣母像虽被虔诚的教士提前藏匿得以幸存，但朝圣的洪流几乎就此断绝，罗卡马杜尔陷入了长达两个多世纪的漫长沉寂与荒芜。它像一位被遗忘的巨人，在悬崖上默默风化。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在19世纪。那是浪漫主义思潮席卷欧洲的时代，人们重新对中世纪、对废墟、对“如画”的风景产生了狂热兴趣。历史学家、作家和画家们“重新发现”了罗卡马杜尔。维克多·雨果等文豪在著作中描绘它的壮丽与神秘，画家们用画笔捕捉它惊心动魄的轮廓。它不再仅仅是一个宗教遗址，更成为一个民族历史与文化遗产的象征。以此为契机，一场大规模、谨慎的修复运动展开了。建筑师们力图恢复其罗曼式风格的质朴原貌，清理废墟，加固危崖上的建筑。最重要的是，宗教生活被重新点燃，黑圣母像被恭迎回她原来的位置，中断的朝圣传统得以续接。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的罗卡马杜尔，依然是一个活的信仰中心，每年吸引着大批朝圣者，尤其是在重要的宗教节日。但它也欣然接纳着来自世界各地、带着不同目的的旅行者。它经历了一场奇妙的转型——从纯粹的中世纪朝圣圣殿，演变为一个集精神性、历史厚重感和极致自然景观于一体的独特存在。它的故事，是一部关于信仰如何创造奇迹，灾难如何带来毁灭，而时间与人的热爱又如何让奇迹重生的漫长史诗，并且，这部史诗就镌刻在那150米高的、沉默的悬崖之上。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正领略罗卡马杜尔的灵魂，我强烈建议安排一整天，并在小镇住上一晚。完美的行程从下午开始：在午后阳光最饱满、色彩最浓郁时抵达，先在河谷对岸的观景台远眺全景，让震撼的第一印象充分发酵。然后驱车前往镇上停车场，轻装徒步，沿着传统的“朝圣者之路”缓缓上行，此时旅游大巴团队已开始离去，小镇会恢复些许宁静。傍晚时分进入核心的圣城区域，此时光线金黄，游人稀少，最适合感受那份神圣与苍凉交织的氛围。第二天上午，趁着大批一日游游客还未涌入，细细参观圣母圣殿、点燃一支蜡烛，并探索那些隐秘的小礼拜堂和古城巷道。下午则可以攀登至最顶端的城堡，或在河谷中进行一次轻松的徒步，从不同角度回望这座奇迹之城。这样的节奏让你既能捕捉到最美的光影，也能避开人潮高峰，体验从喧闹到静谧的完整循环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的徒步鞋，这里的上下坡台阶多且陡峭，石板路在潮湿时非常滑。
警惕声称能带你“快速通道”进入圣殿的所谓向导，所有正规参观路径都是清晰免费的，唯一收费的电梯在明显位置有售票处。
如果时间允许，尽量避开七月和八月的周末，这是法国本土游客的高峰期，狭窄的街道和圣殿会变得异常拥挤。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先将车停在卢尔杜河河谷对面的“罗卡马杜尔观景台”，用长焦镜头和双眼尽情吞噬那座悬挂在绝壁上的中世纪城池全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场出发，放弃便捷的电梯，选择沿着古老而陡峭的“朝圣者大阶梯”徒步上行，用脚步丈量朝圣者的虔敬之路，感受石阶被岁月打磨出的光滑凹痕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过低矮的“圣马丁门”进入被七座教堂环绕的圣殿广场，立刻被那股混合了蜡烛、石头与历史感的特殊气息包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在昏暗而肃穆的圣母圣殿内，静静瞻仰那尊著名的黑圣母像，观察她黝黑面容上慈悲的神情，以及周围无数还愿牌讲述的无声故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续攀爬至圣殿上方的“剑之石”，传说中骑士罗兰的巨剑杜兰达尔曾劈入此石，在这里你能获得俯瞰整个圣城建筑群和远处峡谷的绝佳视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宗教区域走出来，钻进古城蜿蜒起伏、铺着鹅卵石的窄巷“大弯路”，两旁是石头房子改建的工艺品店、咖啡馆和小酒馆，感受生活的烟火气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花上几欧元乘坐外挂式升降机直抵悬崖最顶端的城堡平台，体验从上帝视角垂直俯瞰整个罗卡马杜尔“立体村庄”和阿尔祖峡谷的极度震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前沿着“十字架之路”小径进行一段轻松的徒步，从侧面不同的角度回望被夕阳染成金红色的崖壁与建筑，结束完美的探访。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河谷对岸观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时光线最佳，使用长焦镜头压缩空间，将层层叠叠的房屋、教堂与巨大的悬崖岩壁一同纳入画面，等待峡谷泛起薄雾时拍摄更有仙气。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从圣殿广场仰拍城堡与悬崖`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，当阳光直射崖壁顶部时，站在广场寻找一个能将古老的石头建筑作为前景、以高耸入云的城堡和裸露岩壁为背景的角度，构图极具冲击力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣母圣殿中殿侧廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择在上午十点或下午三点左右，当阳光透过高处的侧窗射入昏暗的中殿时，捕捉光束中飞舞的微尘与古老石柱、拱廊形成的戏剧性明暗对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣米歇尔礼拜堂外立面细节`}</h4>
                  <p className="text-sm text-gray-700">{`下午的斜射光能完美勾勒出这座嵌在岩壁上的小礼拜堂外墙上精美的12世纪浮雕（描绘末日审判等场景），用中焦段镜头聚焦于浮雕的纹理与光影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`古城“大弯路”拱门街景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚游客稀少时，寻找一个有着漂亮拱门或爬满藤蔓的石墙作为框架，拍摄巷子纵深感的照片，等待一位当地居民或穿着黑袍的修士走过，为画面注入灵魂。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`准备一个轻便的三脚架或充分利用石栏进行稳定拍摄，因为峡谷内和圣殿内光线通常较暗，需要较低的快门速度。`}</li>
                <li>• {`使用偏振镜可以有效减少岩石和屋顶瓦片上的反光，让天空更蓝，建筑的色彩饱和度更高。`}</li>
                <li>• {`在圣母圣殿内部拍摄时，务必遵守规定，关闭闪光灯并保持绝对安静，拍摄神像和宗教仪式更需谨慎并心怀敬意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在“圣城”下方步行五分钟的现代街区家庭旅馆，房间干净明亮，老板会给你手绘地图并推荐只有本地人才知道的峡谷徒步小径，清晨在鸟鸣和教堂钟声中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`入住悬崖古城内部由中世纪石屋改造的精品酒店，房间的墙壁就是原始的岩壁，古老的木梁低垂，从房间的小窗望出去直接就是峡谷深渊，夜晚无比宁静，仿佛睡在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受之选`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻位于罗卡马杜尔附近丘陵葡萄园中的一座19世纪庄园城堡酒店，拥有无边泳池和米其林推荐餐厅，在露台上一边品尝当地的黑松露和卡奥尔红酒，一边远眺月光下被灯光点亮的悬崖城全景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`朝圣者精神之选`}</h4>
                  <p className="text-sm text-purple-800">{`预订圣殿附近一家简朴但一尘不染的朝圣者旅社，提供宿舍和简单单间，晚餐是与来自世界各地的朝圣者、步行者共享的长桌餐，分享故事，体验最本真的社区精神。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`悬崖古城内的住宿数量极少且异常抢手，必须提前数月预订，尤其是在夏季和宗教节日期间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在镇上，夜晚和清晨是体验罗卡马杜尔魔力的黄金时间，当一日游的人潮退去，整座山城只属于住客和本地人，氛围截然不同。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在周边乡村的酒店，请确保有自驾车，因为夜间没有任何公共交通。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开罗卡马杜尔好几天，闭上眼睛，那片悬崖的轮廓依然清晰地印在脑海里。它给我的触动，不仅仅在于视觉的奇观。在当今这个追求高效、便捷、一切都被平滑化的世界里，罗卡马杜尔的存在本身就是一个“反叛”。它拒绝平坦，拥抱陡峭；它不求容易，崇尚艰辛（至少对朝圣者而言）。它告诉你，有些地方，有些体验，必须付出汗水、放缓脚步、虔诚仰望才能获得。这种“抵达”的过程本身，就是意义的一部分。站在圣殿广场，摸着冰凉的石壁，你会感到一种厚重的静谧。那不是空虚的安静，而是沉淀了无数祈祷、希望、绝望与重生的静。千百年来，人们来到这里，带着身体的病痛、心灵的负重、对生命的疑问，他们将这一切托付给悬崖、托付给黑暗中的圣母，然后获得某种继续前行的力量。这种人类共通的情感需求，穿越了宗教的具体形式，直抵人心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，罗卡马杜尔绝不仅仅是一个拍照打卡的“网红”悬崖村。它是一个坐标，一个提醒。提醒我们，自然可以多么宏伟而严酷，人类的信念又可以多么坚韧而富有创造力，以至于能在垂直的绝壁上开辟出一片精神的栖息地。它不适合匆匆掠过，只适合静静停留。在这里，你放下的不只是行李，更是都市里那种惯性的浮躁。你会开始倾听风声、钟声和自己的呼吸声。每一位热爱深度游的旅人，都应该来一次罗卡马杜尔。不是为了收集又一个景点，而是为了让自己的心灵经历一次小小的“朝圣”——在攀登中感受坚持，在绝境前看见奇迹，在古老的宁静里，重新找到与自己对话的频道。这趟旅程，终将让你从崖壁上带走的，比一张完美的照片多得多。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/place-vendome" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roussillon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁西永（红土城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roussillon</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vezelay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦兹莱修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vézelay Abbey</p>
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
