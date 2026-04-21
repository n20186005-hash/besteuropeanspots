import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '玛丽安堡旅游攻略：北方的天鹅堡，国王送给盲人王后的绝美浪漫指南',
  description: '探寻德国汉诺威附近的玛丽安堡(Schloss Marienburg)，一份深度的新哥特式城堡游览攻略，揭秘末代国王的浪漫爱情故事与建筑奇观。',
}

export default function MarienburgSchlossPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '玛丽安堡', href: '/attractions/marienburg-schloss' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`玛丽安堡・Schloss Marienburg・德国・下萨克森州（靠近汉诺威）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你已经对“正宗”天鹅堡的人潮感到疲惫，今天这份私藏的**玛丽安堡自由行指南**，就是为你准备的。它静静地矗立在汉诺威西南约20公里的小山丘上，被绿意盎然的卡伦伯格山环抱，被誉为“北方的天鹅堡”。但它的故事，远比童话更动人——这是汉诺威末代国王乔治五世，献给他挚爱却双目失明的王后玛丽的一份看得见的礼物。这份**深度游攻略**，不仅要带你走进这座宛如从童话书页中直接搬出来的梦幻城堡，更会像一位老朋友一样，提醒你如何避开旅行团、捕捉最美的光影，以及听懂每一块砖石诉说的爱情密语。准备好，我们要去拜访一段被凝固在石头里的浪漫了。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你已经对“正宗”天鹅堡的人潮感到疲惫，今天这份私藏的<strong>玛丽安堡自由行指南</strong>，就是为你准备的。它静静地矗立在汉诺威西南约20公里的小山丘上，被绿意盎然的卡伦伯格山环抱，被誉为“北方的天鹅堡”。但它的故事，远比童话更动人——这是汉诺威末代国王乔治五世，献给他挚爱却双目失明的王后玛丽的一份看得见的礼物。这份<strong>深度游攻略</strong>，不仅要带你走进这座宛如从童话书页中直接搬出来的梦幻城堡，更会像一位老朋友一样，提醒你如何避开旅行团、捕捉最美的光影，以及听懂每一块砖石诉说的爱情密语。准备好，我们要去拜访一段被凝固在石头里的浪漫了。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`玛丽安堡`} />
                <InfoRow label="英文名称" value={`Schloss Marienburg`} />
                <InfoRow label="正式名称" value={`Schloss Marienburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`下萨克森州（靠近汉诺威）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`在欧洲星罗棋布的城堡中，玛丽安堡的身份极为特殊。它并非源于中世纪的战火与防御，而是19世纪浪漫主义思潮下，一个王国最后的爱情诗篇。汉诺威王国在1866年被普鲁士吞并，末代国王乔治五世被迫流亡。然而，在这之前，出于对王后玛丽深沉的爱，他决定送她一份独一无二的礼物。王后因疾病逐渐失明，乔治五世希望建造一座“她能用心看到的”宫殿。因此，玛丽安堡从1858年开始兴建，它承载的并非王权的炫耀，而是一个丈夫对妻子细腻的关怀与浪漫的补偿。在德国统一的大历史背景下，这座城堡成了汉诺威王权一个美丽而哀伤的句点，也是欧洲皇家爱情最具象的纪念碑之一。它不像新天鹅堡那样承载着路德维希二世的孤寂政治理想，这里的每一处设计，出发点都纯粹是“爱”。`} />
                <InfoRow label="建筑特色" value={`远远望去，玛丽安堡就像用奶油和巧克力糖霜堆砌而成的巨大蛋糕，精致得令人屏息。它的主体采用醒目的深红色砖石砌成，这种温暖的颜色在阳光下尤其悦目。然而，最吸睛的是大量使用的浅色砂岩装饰——那些环绕塔楼的精致浮雕、窗棂上细密的雕花、以及支撑阳台的优雅立柱，都是这种米白色的石材，与红砖形成鲜明而和谐的对比。数座高低错落的圆锥形塔楼是它的标志，塔顶覆盖着深灰色的板岩，尖顶直指天空。城堡的轮廓线极为丰富，你几乎找不到一面单调的墙，到处是凸出的飘窗、小巧的阳台和装饰性的小尖塔。走近看，窗户是典型的新哥特式尖拱窗，许多还镶嵌着彩绘玻璃。城堡的入口并不显得威严，反而像一个精致礼盒的丝带扣，欢迎着访客进入这个爱的内核。`} />
                <InfoRow label="建筑风格" value={`玛丽安堡是**新哥特式**建筑的典范之作。什么是新哥特式？简单说，就是19世纪的人们对中世纪哥特风潮的一次深情“复古”与浪漫想象。它不像科隆大教堂那样追求极致的垂直升腾与神圣感，而是更注重浪漫的画面感和居住的舒适性。在这里，哥特风格被“软化”和“家居化”了。你看那些**尖拱形的门窗和走廊**，它们营造出轻盈向上的线条感，但比例更为优雅，不像教堂那般迫人。**装饰性的城垛和小塔楼**遍布屋顶，这致敬了中世纪的城堡防御元素，但在这里纯粹是为了美观，像蛋糕上的裱花。内部大量运用了**肋状拱顶**，但空间并不幽暗，反而因为巧妙设计的窗户而充满光影游戏。建筑师用现代（19世纪）的技术和材料，重新演绎了中世纪的建筑语汇，只为创造一个符合“童话”与“爱情”主题的梦境之家。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，玛丽安堡早已超越了皇家宫殿的意义。它是下萨克森州乃至整个北德地区重要的文化符号和浪漫地标。每年吸引着无数新婚夫妇前来拍摄婚纱照，它的故事本身，就是关于忠诚、奉献与超越逆境之爱的永恒教材。城堡如今作为博物馆向公众开放，里面保存完好的室内装饰、王室的私人藏品（包括那架著名的钢琴），让历史变得可触可感。它也成为当地社区的文化活动中心，举办古典音乐会、圣诞市集和历史主题展览。在现代社会，当一切都追求效率和速成时，玛丽安堡的存在，就像一个温柔的提醒：真正的奢华，是倾注时间与心意，为所爱之人创造一个完整的世界。它激励着人们重新相信爱情的力量，并在建筑美学上，展示了“复古”与“创新”如何能完美融合，创造出独一无二的文化遗产。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 玛丽安堡一日游打卡路线攻略：从汉诺威出发的完美一日浪漫之旅`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线与时间安排`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份**自由行指南**会帮你把一天安排得明明白白，又充满随性的惊喜。**上午**，建议你从汉诺威主火车站（Hauptbahnhof）搭乘Regionalbahn区域火车前往Nordstemmen站（约25分钟），出站后换乘出租车（约10分钟）直达城堡山脚下。别急着上山，先在停车场旁的观景台远眺全景，拍下城堡与远山相依的标准照。然后步行上山，这段10分钟的坡路绿树成荫，是调整心情的序曲。**上午的核心**是参加城堡的导览团（务必提前官网预订！），在专业讲解中领略国王厅、宴会厅的华丽，并在王后的私人空间里感受那份独特的温情。**中午**，就在城堡内的咖啡馆或山下的“Schlosshotel Marienburg”餐厅享用一顿简餐，尝尝下萨克森风味的菜肴。**下午**，你可以自由探索城堡的**英式风景花园**，沿着蜿蜒小径散步，寻找眺望威悉河平原的最佳角度。别忘了去那个宛如童话场景的**小礼拜堂**静静坐一会儿。如果时间充裕，可以去城堡的马厩博物馆看看。**傍晚**，在落日金色的余晖中再次回望城堡，这时光线最美，然后心满意足地返回汉诺威，结束这充实的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>国王书房里的“盲文钢琴乐谱”</strong>：在乔治五世的书房里，陈列着一架精美的钢琴。最动人的细节是，乐谱架上的乐谱并非普通印刷品，而是用凸起的金属钉制成的“盲文”乐谱。这是国王为了让失明的王后玛丽也能继续享受音乐，特意命人制作的。想象一下，王后修长的手指拂过冰冷却充满信息的金属钉，旋律在她心中响起，而国王或许就在一旁静静聆听——这个细节无声，却震耳欲聋地诉说着何为体贴入微的爱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>王后客厅的“银莲花”墙纸</strong>：在王后的私人客厅，墙壁覆盖着一种特制的丝绸墙纸，上面手工绘制着精美的银莲花图案。银莲花的花语是“期待与希望”，也象征着短暂的美丽。对于一位失去光明的王后，这满墙的细腻花纹她或许无法用眼睛看见，但丝绸的柔软触感、植物图案所代表的生机寓意，以及丈夫选择这个花种的深意，共同构成了一个她用其他感官可以沉浸其中的、充满安全感与美好期盼的私密世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>中央塔楼的螺旋石阶</strong>：攀登通往城堡主塔楼顶部的螺旋楼梯是一次奇妙的体验。石阶狭窄而陡峭，被岁月磨得光滑。当你旋转而上，从石墙的狭长射击孔（如今是窗户）中透进来的光线，会在你移动时不断变化，像一道流动的光带扫过古老的石壁。你能闻到石头清凉微湿的气味，听到自己脚步的回声和远处隐约的风声。登顶那一刻，豁然开朗，整个下萨克森的田园风光在脚下铺开，你会瞬间理解国王为何选择此地——他要将最美的风景，作为礼物的一部分，赠予他的爱人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>小礼拜堂的彩绘玻璃光影</strong>：城堡内的小礼拜堂规模不大，却极其精美。当阳光穿过东面那扇巨大的新哥特式彩绘玻璃窗时，整个空间便沐浴在宝石般绚烂的色彩之中。红、蓝、绿、金的光斑在地上、长椅上缓慢移动、交织。仔细观察玻璃上的图案，多是宗教圣徒和天使，但在这样一个充满个人情感的城堡里，它们也仿佛在默默守护着一段世俗而神圣的爱情誓言。坐在这里，光影在肌肤上流转，宁静而神圣，是旅程中最值得沉浸的几分钟。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，<strong>避开人流的关键是“早”和“工作日”</strong>。城堡内部参观必须跟导览团（德语或英语），且有人数限制。热门时段（周末、夏季午后）的团很快会订满。最聪明的做法是：提前在官网预订工作日早上开门后（通常9点或10点）的第一批导览票。这样你不仅能享受清净的城堡内部，下午花园的光线也正好。其次，<strong>穿着建议</strong>：城堡位于山上，花园是自然路径，且内部有许多石阶和螺旋楼梯。请务必！务必！穿一双<strong>舒适防滑的鞋子</strong>（别穿高跟鞋或硬底皮鞋）。上下山和攀登塔楼会让你感谢这个决定。第三，<strong>交通与门票</strong>：从Nordstemmen火车站到城堡的出租车并不总是随时等候，最好让去程的司机给你一个预约电话，或提前通过酒店预约回程车。门票建议选择包含导览的“Palace Tour”套票，不要只买花园票而错过精华。自驾的朋友注意，城堡停车场空间有限，旺季同样要早到。" }} />
            </div>
          </Section>

          <Section title={`6. 玛丽安堡周边住宿与美食攻略：住在风景里与地道北德风味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果想获得更沉浸的体验，强烈推荐就在城堡山脚下的 <strong>“Schlosshotel Marienburg”</strong> 。这家酒店本身由历史建筑改造，部分房间拥有直面城堡的绝美视角。清晨或傍晚，当游客散去，你仿佛独享这座“天鹅堡”。它的餐厅也值得一试，可以品尝到诸如“汉诺威式炖肉”（Hannoversches Blindhuhn，其实是一种丰盛的蔬菜豆子炖肉）等地方菜。如果预算有限或想享受更多城市便利，住在汉诺威市中心是更佳选择。从汉诺威出发一日游非常轻松。餐饮方面，在Nordstemmen火车站附近或汉诺威老城区，可以找到传统的德式餐厅，点一份香煎猪肘（Eisbein）搭配酸菜和下萨克森特有的“吕讷堡石楠蜜”啤酒，为浪漫之旅注入扎实的本地风味。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从玛丽安堡出发，有两个方向值得延伸探索。一是向东北方向车程约15分钟，可以去到<strong>佩尔彭塔城堡废墟</strong>。与精心修复的玛丽安堡截然不同，这座13世纪的中世纪城堡只剩下断壁残垣，野草蔓生，充满了苍凉的历史感。站在废墟上眺望另一角度的山谷，你会对“城堡”的功能与变迁有更深刻的理解。另一个方向是返回汉诺威后，不妨去逛逛<strong>威廉·布施博物馆</strong>。威廉·布施是德国著名的诗人、画家，也是漫画先驱。他的作品幽默犀利，充满生活气息。在经历了玛丽安堡的极致浪漫之后，来这里感受一下德式冷幽默与市井哲学，能让你的文化体验层次更加丰富有趣。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛丽安堡的灵魂，不在于它是“北方的天鹅堡”这个名号，而在于它自诞生之初，就摒弃了所有权力的傲慢与建筑的功利，它的每一块砖、每一扇窗、每一幅壁画，都只为诠释一个简单却永恒的命题：爱，是竭尽所能，为你在黑暗中，点亮一整座看得见的星空。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/moritzburg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫里茨堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schloss Moritzburg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/partnachklamm" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕特纳赫峡谷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Partnachklamm</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trier-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔主教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trier Cathedral</p>
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
