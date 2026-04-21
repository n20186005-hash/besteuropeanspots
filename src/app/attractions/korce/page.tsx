import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔察旅游攻略：阿尔巴尼亚“小巴黎”老城漫步与咖啡文化深度游指南',
  description: '探索科尔察（Korçë），阿尔巴尼亚的“小巴黎”。本攻略带你深度游这座历史名城，揭秘东正教复兴大教堂、沉醉于浓郁的街头咖啡文化，并提供实用自由行路线与避坑指南。',
}

export default function KorcePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '阿尔巴尼亚', href: '/destinations/albania' },
            { label: '科尔察', href: '/attractions/korce' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科尔察・Korçë・阿尔巴尼亚・科尔察州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友！如果厌倦了人挤人的热门景点，今天这份科尔察私藏旅游攻略，就是为你准备的。它藏在阿尔巴尼亚东南部，靠近希腊边境的群山怀抱里，被当地人亲切地称为“小巴黎”。别误会，这里的“巴黎”指的可不是奢华，而是一种慵懒的优雅、无处不在的咖啡馆，和那些奥斯曼与欧陆风情交织的古老街道。作为你的专属向导，这份自由行指南会带你穿越时光，从气势恢宏的东正教复兴大教堂，到飘着咖啡香和烤饼（byrek）香味的老城街区。我们会一起躲开那些套路化的旅行陷阱，像本地人一样，找张街边藤椅，点一杯浓香的土耳其咖啡，看阳光如何为这座石头之城镀上金色。准备好了吗？我们的科尔察深度游，现在开始。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友！如果厌倦了人挤人的热门景点，今天这份科尔察私藏旅游攻略，就是为你准备的。它藏在阿尔巴尼亚东南部，靠近希腊边境的群山怀抱里，被当地人亲切地称为“小巴黎”。别误会，这里的“巴黎”指的可不是奢华，而是一种慵懒的优雅、无处不在的咖啡馆，和那些奥斯曼与欧陆风情交织的古老街道。作为你的专属向导，这份自由行指南会带你穿越时光，从气势恢宏的东正教复兴大教堂，到飘着咖啡香和烤饼（byrek）香味的老城街区。我们会一起躲开那些套路化的旅行陷阱，像本地人一样，找张街边藤椅，点一杯浓香的土耳其咖啡，看阳光如何为这座石头之城镀上金色。准备好了吗？我们的科尔察深度游，现在开始。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科尔察`} />
                <InfoRow label="英文名称" value={`Korçë`} />
                <InfoRow label="正式名称" value={`Korçë`} />
                <InfoRow label="国家" value={`阿尔巴尼亚`} />
                <InfoRow label="城市" value={`科尔察州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`科尔察的历史，是一部在帝国夹缝中书写自我认同的史诗。在漫长的奥斯曼帝国统治时期（15世纪至20世纪初），它是重要的贸易和手工艺中心，以编织、酿造闻名。但让它真正在阿尔巴尼亚民族复兴史上留下浓墨重彩一笔的，是19世纪末20世纪初。那时，阿尔巴尼亚民族意识觉醒，科尔察成为了文化启蒙运动的重镇之一。这里的知识分子、作家和爱国者积极推动阿尔巴尼亚语教育，出版刊物，为国家的独立（1912年）奠定了思想基础。正因如此，后来建成的巍峨大教堂，不仅仅是一座宗教建筑，更是一座民族精神的纪念碑。进入20世纪，它经历了共产主义时期，那段历史在今天的城市肌理和博物馆里仍留有痕迹。这种复杂的历史层次——奥斯曼的底色、民族复兴的荣光、封闭时代的印记——共同构成了科尔察独一无二的、坚韧而深沉的城市性格。`} />
                <InfoRow label="建筑特色" value={`说到建筑，科尔察最不容错过的，绝对是那座令人过目不忘的复活基督东正教大教堂。它矗立在市中心，像一位庄严的白色巨人。走近看，你会发现它的主体由当地开采的浅色石材砌成，质感温润而厚重。教堂的穹顶是典型的拜占庭式风格，数个大小不一的圆顶簇拥着中央主穹顶，覆盖着铅灰色的金属，在阿尔巴尼亚清澈的蓝天下显得肃穆而神圣。最精彩的是它的正立面：巨大的拱形门廊上方，是精心雕刻的宗教图案和阿尔巴尼亚语铭文。两侧是高耸的钟楼，线条笔直向上，带有新古典主义的严谨。阳光照射时，建筑立面上凹凸的雕刻产生丰富的光影，尤其是那些精美的石雕窗棂，让整座建筑在雄浑中透出细腻。它不追求繁复的装饰，而是以恢弘的比例和纯净的白色，传递出一种震撼人心的力量与宁静。`} />
                <InfoRow label="建筑风格" value={`科尔察大教堂是东正教复兴式建筑的杰出代表。这种风格在19世纪末的巴尔干地区非常流行，你可以把它理解为一种“复古与创新的结合体”。建筑师们回溯到拜占庭帝国和早期基督教建筑的根源（比如巨大的中央穹顶、集中式布局），但又大胆融入了当时欧洲流行的新古典主义、甚至一丝罗马风元素（如对称的钟楼、规整的拱廊）。在科尔察，这种风格被赋予了强烈的民族意义。它摒弃了奥斯曼时期清真寺的尖塔和圆顶形态，转而拥抱基督教欧洲的建筑语汇，这本身就是阿尔巴尼亚民族身份觉醒和文化独立的宣言。因此，你看到的不仅是一座教堂，更是一座用石头写成的“民族宣言书”。它的每一根线条、每一个穹顶，都在诉说着这个国家从帝国废墟中重建自我、寻找文化根源的渴望。`} />
                <InfoRow label="文化价值" value={`对于科尔察人乃至阿尔巴尼亚人来说，这座城市是“文化摇篮”。它的价值深深烙印在日常生活的节奏里。首先，咖啡文化是它的灵魂。这里咖啡馆的密度惊人，从清晨到深夜，人们不是在咖啡馆，就是在去咖啡馆的路上。这不仅仅是为了提神，更是一种社交仪式，是谈天说地、谈论政治、分享生活的核心场所。这种慢悠悠的、充满交谈声的生活哲学，定义了科尔察的脉搏。其次，它还是阿尔巴尼亚啤酒酿造的传统重镇，“科尔察啤酒”是全国知名的品牌。每年夏季的啤酒节，更是全城欢庆的盛事，音乐、美食与泡沫交融，展现了这座城市轻松、享乐的一面。最后，遍布老城的博物馆、画廊和保存完好的奥斯曼风格老宅，让历史并非尘封的过去，而是可触摸、可感受的现在。科尔察教会人们：文化，是在一杯咖啡的氤氲热气中，在一栋老建筑的斑驳墙面上，被持续呼吸和传承的。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 科尔察一日游经典打卡路线攻略：从大教堂到咖啡馆的完美漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，攻略在手，我们这就出发！我建议你把一整天都慷慨地交给科尔察老城，它的美需要步行来丈量，用闲逛的心态来品味。
上午（沉浸历史与信仰）： 直接从地标复活基督东正教大教堂开始。早晨的阳光最适合拍照，内部圣像屏的金色光辉也最为夺目。静静坐一会儿，感受这里的宁静。出来后，穿过共和国大道（Bulevardi Republika），这条林荫大道本身就很美。接着前往科尔察国家中世纪艺术博物馆（就在大教堂附近），这里收藏了众多珍贵的宗教圣像和文物，能帮你理解这片土地的信仰脉络。
中午（味蕾的时间旅行）： 该吃饭了！拐进老城迷宫般的石板街巷，比如“Pazari i Vjetër”（老市集）区域。找一家家庭式小馆，一定要点一份热乎乎的byrek（奶酪或肉馅酥饼）和一碗地道的taverna炖菜。记得配上一杯本地酸奶饮料。
下午（咖啡、老城与生活）： 午后是体验“小巴黎”精髓的时候。在老城区找一家有露天座位的传统咖啡馆，点一杯土耳其咖啡或macchiato，像本地人一样无所事事地待上一两个小时，看行人来来往往。之后，随意逛逛老城的奥斯曼时期老宅，看看那些精致的木结构阳台和石墙。如果对近代史感兴趣，阿尔巴尼亚共产主义迫害博物馆（前监狱）能提供一段沉重的思考。
傍晚（日落与闲适尾声）： 晚餐前，可以散步到理想之地公园稍作休憩。晚餐就在老城选择一家更有情调的餐厅，尝尝阿尔巴尼亚烤肉。入夜后，街头咖啡馆的灯火和人们的谈笑声会更加浓郁，不妨再喝一杯，彻底融入科尔察慢悠悠的夜晚节奏。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  大教堂内部的“金色深渊”：走进大教堂内部，请一定抬头看那高耸的穹顶。阳光透过穹顶底部的窗户射入，在空气中形成几道光柱，尘埃在其中缓缓舞动。而最震撼的是覆盖整面东墙的圣像屏，它由繁复的木雕贴满金箔制成，上面绘制着庄严的圣像。当烛光摇曳，整面屏风仿佛在微微发光，那些圣徒的眼神似乎穿透时间凝视着你，一种混合着敬畏与宁静的独特氛围将你包裹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  老城咖啡馆的“瞬间凝固”：找一家有老旧藤椅和矮桌的街边咖啡馆坐下。观察你旁边的老爷爷们，他们可能一整个下午都保持着同样的姿势——微微后仰，手里捏着小咖啡杯，眼睛半眯着看向街道，或者沉浸在一盘永无止境的西洋双陆棋中。时间在这里失去了紧迫感，只有咖啡壶在炉子上发出的轻微嘶嘶声，和棋子落在棋盘上的清脆响声。这个瞬间，就是科尔察灵魂的切片。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  石板路上的光影乐章：午后，在老城狭窄的巷道里漫步。阳光被两侧古老建筑的山墙切割成锐利的光与影，斜斜地铺在凹凸不平的鹅卵石路面上。你的影子被拉得很长，随着你的步伐在光斑间跳跃。注意看那些历经风雨的石墙，赭石色、土黄色的墙面在光照下呈现出丰富的质感，墙头偶尔探出的三角梅或藤蔓，为这曲“光与石的乐章”添上一个柔和的绿色音符。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  “第一所阿尔巴尼亚语学校”的无声呐喊：在阿尔巴尼亚教育博物馆（原第一所阿尔巴尼亚语学校）里，静立于那些简陋的课桌、泛黄的教科书和爱国者的肖像前。想象一下在奥斯曼禁令下，这里的师生是怀着怎样的勇气和热忱，秘密地学习和传播本民族的语言。这个安静的空间，回响着一个民族为保存自己文化身份所发出的、最坚定有力的无声呐喊。`}</p>
            </div>
          </Section>

          <Section title={`5. 科尔察自由行避坑指南与行前关键贴士`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  最佳游览时间与穿着：春季（5-6月）和秋季（9-10月）是最佳季节，天气温和，阳光灿烂。夏季白天较热，但晚上凉爽；冬季山区较冷。无论何时，一双舒适耐走的平底鞋是绝对必需品！ 老城全是鹅卵石路，高跟鞋会是一场灾难。此外，进入东正教大教堂时，着装需得体（避免过于暴露的背心、短裤），女性有时会被要求包头巾（门口通常有提供）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  完美避开人流：科尔察本身不算热门旅游区，但周末和夏季傍晚，主街和咖啡馆会比较热闹。想要绝对清净，就安排在工作日的上午游览大教堂和博物馆。真正的“人潮”更多是本地人的生活流，这恰恰是你应该观察和融入的，而不是避开。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与现金实用贴士：从地拉那等地过来，长途巴士是主要方式，车站离市中心不远，打车或步行均可。城内基本靠步行。阿尔巴尼亚列克是当地货币，虽然不少地方接受欧元，但小额消费（如咖啡馆、市场）和找零绝对用列克更划算、方便。出发前或在当地ATM取现即可。物价相比西欧非常友好，可以放心享受美食。`}</p>
            </div>
          </Section>

          <Section title={`6. 科尔察特色住宿与美食全攻略：住在老城，吃在街头`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想真正感受科尔察的晨昏，建议住在老城区（Pazari i Vjetër）或共和国大道附近。这里有几家由奥斯曼老宅改建的精品酒店或宾馆，石墙、木梁、内庭院，氛围感十足，晚上出门散步找咖啡馆也极其方便。如果预算有限，大道上也有不错的现代酒店选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`餐饮是重头戏！早餐不要错过任何一家面包店的byrek。午餐推荐老市集里的家庭餐馆，比如尝试“Tavë Kosi”（酸奶烤羊肉），是阿尔巴尼亚国菜，科尔察的做法尤为出名。晚餐可以升级一下，找一家花园餐厅，享用炭火烤制的混合烤肉拼盘。咖啡馆推荐：一定要去“Komiteti” 这家传奇咖啡馆，它本身就像个杂乱的博物馆，收藏了无数共产主义时期的老物件，提供数十种传统果酱拉基酒（Raki）——即使不喝酒，去参观一下也很有趣。想喝传统咖啡，任何街角坐着老人的小店都不会错。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间有富余，强烈推荐两个短途选择：`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  沃斯科波亚（Voskopojë）遗址：距离科尔察约30分钟车程。这座小山城在18世纪曾是重要的文化、学术和商业中心，拥有“巴尔干半岛的弗洛伦萨”之称，现存多座中世纪教堂废墟和精美壁画（需找当地钥匙保管人开门）。这里荒凉、寂静，与科尔察的生机形成强烈对比，是探索阿尔巴尼亚更深层历史的绝佳之地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  “勃列日涅夫”式度假村——德伦诺瓦（Drenova）：就在城郊的山上。这里有一片共产主义时期为精英建造的、充满未来主义风格的度假建筑群，如今虽有些破败，但巨大奇特的混凝土结构在森林中显得超现实而震撼。适合对特殊建筑和时代印记感兴趣的探索者。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`科尔察的灵魂，在于它将历史的沉重举重若轻地化入了一杯咖啡的闲适之中。在这里，你既能触摸到一个民族为独立与文化存续而奋斗的滚烫记忆，也能在下一个转角，被寻常巷陌里飘出的咖啡香和人们的微笑所治愈。它告诉你，生活本身就是最深度的旅行。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/berat-thousand-windows" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    培
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">培拉特（千窗之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Berat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gjirokastra-castle-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉诺卡斯特（千阶之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gjirokastër</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kruja-castle-bazaar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克鲁亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kruja</p>
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
