import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里屈埃维历史溯源｜葡萄酒与战争的淬炼，一座阿尔萨斯小镇的前世今生',
  description: '走进法国阿尔萨斯“葡萄园中的宝石”里屈埃维。穿越八百年时光，聆听三十年战争的炮火、品味“阿尔萨斯王子”的传奇，在鹅卵石小巷中触摸一部活着的欧洲史。',
}

export default function RiquewihrHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '里屈埃维', href: '/destinations/europe' },
            { label: '里屈埃维', href: '/attractions/riquewihr-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里屈埃维・Riquewihr・法国・里屈埃维`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国阿尔萨斯绵延的葡萄园深处，藏着一枚被时光遗忘的琥珀——里屈埃维。它的标签不是单一的“童话小镇”，而是一部用石头、葡萄酒与战争写就的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从神圣罗马帝国的边疆，到“阿尔萨斯王子”的辉煌酒都，再到近代烽火中幸存的不朽见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进里屈埃维的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里屈埃维`} />
                <InfoRow label="英文名称" value={`Riquewihr`} />
                <InfoRow label="正式名称" value={`Riquewihr`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`里屈埃维`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "里屈埃维的故事，始于葡萄藤蔓缠绕之前。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，源自日耳曼语“Richo”与“Wihr”，意为“里科的领地”。这片土地最初的居民并非贵族，而是勤恳的农夫与早期的葡萄种植者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元8世纪左右，阿尔萨斯地区处于法兰克王国的统治下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的僧侣们系统地在此推广葡萄栽培，为小镇的未来埋下了金色的种子。但直到<strong>12世纪</strong>，文献中才首次明确出现“Riquewihr”之名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，它只是温策内姆伯爵领地内一个普通的村庄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正改变命运的，是<strong>1291年</strong>。统治此地的里伯皮埃尔领主，授予了小镇一项至关重要的特权——筑城权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这道命令，让里屈埃维从一个开放的村落，转身变为一座拥有坚固城墙的设防城镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城墙不仅意味着安全，更象征着独立的身份与繁荣的贸易潜力。小镇的雏形，就在这石墙的环抱中固定下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的地理位置，也注定了其不凡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "位于阿尔萨斯葡萄酒之路的中心，坐拥孚日山脉东麓最优质的向阳坡地。这得天独厚的风土，是它日后被称为“葡萄园中的宝石”最坚实的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "名字是冰冷的，土地是沉默的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但当你走进小镇，脚下那些被岁月磨光的鹅卵石，仿佛还在诉说着最初领主划分疆域、僧侣栽下第一株葡萄藤的遥远清晨。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城墙筑起，故事便与纷争和繁荣交织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道深刻的印记，来自<strong>17世纪</strong>那场席卷中欧的浩劫——三十年战争。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿尔萨斯成为各方势力反复争夺的战场。<strong>1635年</strong>，里屈埃维被瑞典军队攻占并焚毁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战火几乎将它从地图上抹去。但顽强的小镇在废墟中重生，我们今天看到的许多精美半木结构房屋，正是战后的<strong>17、18世纪</strong>重建的杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们不是原始的中世纪遗存，却凝聚了劫后余生者对美与安宁最炽热的渴望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，镌刻在它的财富与防御上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪</strong>是里屈埃维的“黄金时代”。温策内姆伯爵的统治带来了稳定，葡萄园出产的顶级雷司令和琼瑶浆葡萄酒享誉欧洲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "财富吸引了贪婪的目光。于是，小镇迎来了它历史上最著名的“守护神”——<strong>塞巴斯蒂安·勒·普雷斯特·德·沃邦</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位法国伟大的军事工程师虽未亲自到访，但他的防御体系理念深刻影响了这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>18世纪</strong>初，小镇按照沃邦的“星形要塞”理念进行了现代化改造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "坚固的城门、带有射击孔的城墙、深邃的护城河（如今部分已填平为花园），将这座富庶的酒镇武装成了一座难以攻克的堡垒。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们必须保护王冠上这颗最珍贵的明珠，它的价值堪比一支军队的给养。”——据传出自一位巡视里屈埃维防务的法国军官日记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，则更为沉痛与近代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>20世纪</strong>的两次世界大战，阿尔萨斯在法德之间反复易手。里屈埃维奇迹般地避开了大规模的轰炸与巷战。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当1945年初，法国第一军解放阿尔萨斯时，他们发现的是一座几乎完好无损的中世纪瑰宝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不是幸运，而是因为它作为“文化象征”的价值，让它在战争的疯狂中得以幸免。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古老的城门“下城门”，石头上至今可见当年马车铁轮碾出的深深凹痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那不仅是商业繁荣的痕迹，也是几个世纪以来，军队、难民、庆典队伍一次次穿行其下的无声证词。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "里屈埃维的历史，并非仅由王侯将相书写。两位与葡萄藤息息相关的灵魂，定义了它的精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是赋予它肉体与骨骼的“葡萄酒王子”——<strong>让-巴蒂斯特·格雷芬斯坦</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非国王，却是一个王朝的缔造者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格雷芬斯坦家族是<strong>16至18世纪</strong>间里屈埃维最显赫的葡萄酒商兼领主代表。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>让-巴蒂斯特</strong>生于小镇的黄金时代，他不仅是一位精明的商人，更是一位具有远见卓识的建设者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇在于将商业财富转化为不朽的城市风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天小镇中心最壮观的建筑群，大多与他有关。他建造了宏伟的<strong>“格雷芬斯坦宅邸”</strong>（现为阿尔萨斯葡萄酒博物馆），其华丽的文艺复兴风格立面，彰显着家族的财富与品位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，他出资重建了战争中被毁的市政厅、教堂，并赞助了众多市民房屋的修建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他深刻理解，只有整个社区都美丽繁荣，个人的财富才有真正的根基。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的酒窖里藏着莱茵河对岸选帝侯都称赞的佳酿，但比这更让我自豪的，是我家乡每一块被重新竖起的木筋墙。”——一段后世归于他名下的乡绅感言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的一生，就是里屈埃维葡萄酒经济的化身：从土地中汲取精华，通过智慧与劳力将其变为黄金，再用这黄金反哺滋养他的土地与人民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，则是一位用画笔为小镇“封存灵魂”的旅人——<strong>汉斯·梅姆林</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位<strong>15世纪</strong>的弗莱芒绘画大师，与里屈埃维的关联是一段美妙的意外。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，里屈埃维的葡萄酒远销北欧，贸易网络将小镇与繁荣的佛兰德斯地区紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇教堂渴望一幅能与自身财富匹配的祭坛画，他们找到了当时已负盛名的梅姆林。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在遥远的布鲁日工作室里，梅姆林根据委托人的描述，创作了《圣尼古拉斯的祭坛画》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "画中圣人的面容宁静，衣褶处理闪烁着典型的弗莱芒画派的光泽。这幅画历经漂泊，最终回到小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "画作本身并非描绘里屈埃维的风景，但它代表了小镇在<strong>15世纪</strong>就已达到的经济与文化高度——足以聘请欧洲顶尖的艺术家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它像一位沉默的使者，连接着阿尔萨斯的葡萄园与北海之滨的艺术之都。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格雷芬斯坦用石头建造了小镇的躯体，梅姆林则用颜料为它的精神世界注入了超越地域的尊贵与美感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位是本土的实践者，一位是外来的赋予者。他们的传奇共同诉说着一个真理：真正的繁荣，必定是物质与精神的并蒂花开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在“公爵庭院”古老的酒窖巷，你仿佛仍能闻到格雷芬斯坦家族酒桶的陈香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而抬头仰望教堂的尖塔，那来自佛兰德斯的艺术之光，似乎依旧在阿尔萨斯的晴空下微微闪烁。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在史书之外，里屈埃维的鹅卵石间，还流淌着魔幻的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说围绕着“<strong>盗贼塔</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座建于<strong>16世纪</strong>的坚固塔楼，独立于主城墙之外，曾是关押囚犯的地方。传说，塔楼地下有一条秘密通道，直通数公里外的里博维莱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这条通道并非用于军事，而是为了一位特殊的“囚犯”——一位温策内姆伯爵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说他因爱上一位平民女子而被家族反对，囚禁于此。忠实的仆人们通过密道为他传送食物与情书，最终助他逃脱，与爱人远走高飞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说，则与小镇无处不在的<strong>鹳鸟</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿尔萨斯，鹳鸟被视为送子与吉祥的象征。里屈埃维的屋顶常能看到鹳鸟巢。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说很久以前，小镇曾有一年遭遇严冬，葡萄几乎绝收。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "绝望之际，一群鹳鸟提前归来，它们盘旋鸣叫，指引农民在一处山坳背风处发现了未被冻伤的珍贵葡萄藤。小镇因此得救。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，居民们将鹳鸟视为守护神，精心保护它们的巢穴。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当鹳鸟在‘下城门’的尖顶上筑巢时，那年的收成必定醇美；若它们选择市政厅的烟囱，则预示着议会将有睿智的决策。”——古老的里屈埃维民谚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而关于那些精美木筋墙房屋的繁复雕刻，也有说法。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那些太阳、月亮、葡萄串、心形图案，不仅是装饰。民间相信，它们是一种古老的保护咒语，用来驱赶邪灵、祈求丰收与家庭和睦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尤其是那些扭曲如绳索状的木条“野人纹”，相传能捆住路过的恶魔，让其无法入室作恶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，让冰冷的建筑充满了温度与灵性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史或许记载战争的日期，但传说守护着人们的情感、恐惧与希望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在里屈埃维，每一扇雕花的木门后，可能都藏着一个未被书写的小小神话。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客沉醉于里屈埃维明信片般的景致时，他们触摸的远不止风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一本立体的、可居住的欧洲史书。每一页，都由城墙的砂岩、酒窖的湿气、木筋墙的纹理写成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它回响着中世纪城邦自治的余音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“下城门”与城墙，是封建时代自我保护意识的凝结。那些狭小的窗户和坚固的大门，曾守护着一代代居民的安宁与来之不易的财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它回荡着早期资本主义萌芽的喧嚣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格雷芬斯坦家族的故事，是文艺复兴后商人阶层崛起、用经济实力塑造城市空间的典型范例。这里不是王宫所在地，却是市民荣耀的丰碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它更是一曲阿尔萨斯命运的悠长挽歌与赞歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法德之间数百年的拉锯中，里屈埃维如同一个坚韧的细胞，完整保存了自身的文化基因。它的建筑是德式的木筋墙，生活方式却是法式的葡萄园艺术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种独特的融合，本身就是阿尔萨斯历史的浓缩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂里屈埃维，便是读懂了欧洲边疆地区文化的韧性、商业的力量，以及普通人对家园最深沉的塑造与眷恋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，伟大不独属于首都与战场，也属于这些在历史洪流中，努力保持自我、并绽放出独特光芒的“小地方”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史从未被博物馆化。它就在你手中的酒杯里，在你脚下的石路上，在你抬眼所见的每一片屋瓦与雕刻之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它依然活着，呼吸着，带着葡萄的微醺和岁月的沉香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/locronan-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛克罗南</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Locronan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bergheim-alsace-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔盖姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bergheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-villandry" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维朗德里城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Villandry</p>
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
