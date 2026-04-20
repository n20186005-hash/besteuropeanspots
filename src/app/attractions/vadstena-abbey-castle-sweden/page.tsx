import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦斯泰纳修道院及城堡 Vadstena Abbey and Castle｜中世纪圣徒之城与维特恩湖畔的文艺复兴瑰宝 - 最佳欧洲景点',
  description: '你第一眼看到瓦斯泰纳，可能不是那座著名的城堡，而是维特恩湖无边无际的、像融化的钢水一样平静的蓝色。风从湖面吹来，带着湿润的水草气息和一丝凉意。然后，你的视线才会顺着鹅卵石铺就的、被岁月磨得发亮的主街，落在那片沉稳的、暗红色的建筑群上——那就是修道院。它没有那种咄咄逼人的尖顶，反而低矮、宽阔，像一位穿...',
}

export default function VadstenaAbbeyCastleSwedenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瓦斯泰纳修道院及城堡', href: '/attractions/vadstena-abbey-castle-sweden' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦斯泰纳修道院及城堡・Vadstena Abbey and Castle・瑞典・瓦斯泰纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到瓦斯泰纳，可能不是那座著名的城堡，而是维特恩湖无边无际的、像融化的钢水一样平静的蓝色。风从湖面吹来，带着湿润的水草气息和一丝凉意。然后，你的视线才会顺着鹅卵石铺就的、被岁月磨得发亮的主街，落在那片沉稳的、暗红色的建筑群上——那就是修道院。它没有那种咄咄逼人的尖顶，反而低矮、宽阔，像一位穿着朴素的僧侣，安静地跪在湖边祈祷了六个世纪。小镇的节奏慢得能听见心跳，自行车铃叮当作响，面包店飘出刚出炉的肉桂卷甜香，当地人提着篮子不慌不忙地走过。这里有一种奇特的宁静，不是死寂，而是一种被漫长时光抚慰过的、笃定的平和。
走到小镇的另一头，画风陡然一变。一座被宽阔护城河环绕的、有着粉色外墙和巨大圆筒形塔楼的城堡，像从童话书里直接搬出来的一样，倒映在清澈的水中。这就是瓦斯泰纳城堡。与修道院的出世感截然不同，它散发着坚固、威严，甚至有些浪漫的气息。你可以想象穿着华丽裙摆的贵族女士在城墙边漫步，或是骑士们从吊桥上策马而出。一边是面向天国的精神堡垒，一边是巩固尘世权力的军事要塞，两者相距不过步行二十分钟，却浓缩了整个欧洲从中世纪向文艺复兴过渡的史诗。
最打动人的，或许是这种并置所产生的微妙张力。你在修道院空旷的教堂里，看着从十四世纪保留至今的圣布里吉特遗骨龛，感受那种直抵人心的虔敬与简朴。然后，你踱步到城堡宏大的骑士大厅，看着墙上描绘狩猎场景的壁画和巨大的石砌壁炉，仿佛能听到宴会上的酒杯碰撞与欢声笑语。神权与王权，灵性与世俗，在这座小镇里不是对抗，而是以一种非常北欧的、务实又诗意的方式共处着。你不需要是信徒或历史学家，也能被这种穿越时空的对话深深吸引。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到瓦斯泰纳，可能不是那座著名的城堡，而是维特恩湖无边无际的、像融化的钢水一样平静的蓝色。风从湖面吹来，带着湿润的水草气息和一丝凉意。然后，你的视线才会顺着鹅卵石铺就的、被岁月磨得发亮的主街，落在那片沉稳的、暗红色的建筑群上——那就是修道院。它没有那种咄咄逼人的尖顶，反而低矮、宽阔，像一位穿着朴素的僧侣，安静地跪在湖边祈祷了六个世纪。小镇的节奏慢得能听见心跳，自行车铃叮当作响，面包店飘出刚出炉的肉桂卷甜香，当地人提着篮子不慌不忙地走过。这里有一种奇特的宁静，不是死寂，而是一种被漫长时光抚慰过的、笃定的平和。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到小镇的另一头，画风陡然一变。一座被宽阔护城河环绕的、有着粉色外墙和巨大圆筒形塔楼的城堡，像从童话书里直接搬出来的一样，倒映在清澈的水中。这就是瓦斯泰纳城堡。与修道院的出世感截然不同，它散发着坚固、威严，甚至有些浪漫的气息。你可以想象穿着华丽裙摆的贵族女士在城墙边漫步，或是骑士们从吊桥上策马而出。一边是面向天国的精神堡垒，一边是巩固尘世权力的军事要塞，两者相距不过步行二十分钟，却浓缩了整个欧洲从中世纪向文艺复兴过渡的史诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是这种并置所产生的微妙张力。你在修道院空旷的教堂里，看着从十四世纪保留至今的圣布里吉特遗骨龛，感受那种直抵人心的虔敬与简朴。然后，你踱步到城堡宏大的骑士大厅，看着墙上描绘狩猎场景的壁画和巨大的石砌壁炉，仿佛能听到宴会上的酒杯碰撞与欢声笑语。神权与王权，灵性与世俗，在这座小镇里不是对抗，而是以一种非常北欧的、务实又诗意的方式共处着。你不需要是信徒或历史学家，也能被这种穿越时空的对话深深吸引。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦斯泰纳修道院及城堡`} />
                <InfoRow label="英文名称" value={`Vadstena Abbey and Castle`} />
                <InfoRow label="正式名称" value={`Vadstena Kloster och Slott`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`瓦斯泰纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`北欧地区最重要的中世纪朝圣中心之一，瑞典唯一完整保存的布里吉特修会母院，以及瑞典保存最完好的文艺复兴风格皇家城堡。`} />
                <InfoRow label="建筑特色" value={`修道院是朴素庄严的哥特式红砖建筑群，围合着宁静的中庭；城堡则是拥有厚重圆塔、护城河与华丽宴会厅的防御性与生活性结合的典范。`} />
                <InfoRow label="建筑风格" value={`修道院为北欧砖砌哥特式风格；城堡为瑞典文艺复兴风格，带有明显的荷兰与德国防御工事影响。`} />
                <InfoRow label="文化价值" value={`它是瑞典国家认同与基督教精神遗产的物理承载，见证了从中世纪虔敬到文艺复兴王权，再到现代历史保护的完整脉络。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院教堂全年向公众开放，内部博物馆及特定区域开放时间为：5月至9月，每日10:00-17:00；10月至次年4月，仅周末12:00-16:00开放，且部分室内展厅关闭。瓦斯泰纳城堡的开放季节性强，通常仅在6月中旬至8月每日开放（11:00-16:00），其他月份仅周末或预约开放，冬季（12月至2月）基本关闭维护。重要提示：具体日期每年微调，行前务必查阅官网。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂区域免费。修道院博物馆（Bridgettine Museum）成人票约80瑞典克朗，学生及青少年有优惠。瓦斯泰纳城堡门票约120瑞典克朗，持斯德哥尔摩通票可能享有折扣。夏季有时提供城堡与博物馆的联票，性价比更高。`} />
              <InfoRow label="地址" value={`Klosterområdet 1, 592 32 Vadstena, Sweden (修道院) / Slottsvägen, 592 32 Vadstena, Sweden (城堡)`} />
              <InfoRow label="交通方式" value={`最近的国际机场是斯德哥尔摩阿兰达机场(ARN)。从斯德哥尔摩中央火车站乘坐区间列车（Pågatågen或Öresundståg）前往林雪平（Linköping），约2小时车程，班次频繁。在林雪平换乘前往穆塔拉（Motala）方向的巴士（如公交100路），约45分钟抵达瓦斯泰纳巴士总站。从巴士站步行至修道院或城堡均在10-15分钟内，整个小镇非常适合步行探索。自驾则沿E4高速公路转55号公路，小镇外围有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一个非凡的女人说起——圣布里吉特。十四世纪，她不仅是瑞典的贵族夫人、八个孩子的母亲，更是一位神秘主义者、政治谏言者和朝圣者。她在罗马得到了神圣启示，要建立一个新的修会，即布里吉特修会。这个修会非常特别，它由男女修道院共同组成，但严格分隔，共同在一位女院长的领导下进行崇拜。1346年，瑞典国王马格努斯四世和他的妻子布兰卡，将瓦斯泰纳的皇家庄园赠予布里吉特，作为她修会的基地。虽然布里吉特本人大部分时间在罗马度过并最终在那里去世，但她的女儿圣卡琳将她的遗骨带回瓦斯泰纳，并在此地建立了坚实的修道院社区。1384年，修道院教堂祝圣，瓦斯泰纳迅速成为北欧最重要的朝圣目的地，信徒们跋涉千里，只为在圣布里吉特的墓前祈祷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`修道院的繁荣持续了近两百年，直到宗教改革的浪潮席卷瑞典。十六世纪，古斯塔夫·瓦萨国王为了巩固王权、夺取教会财富，切断了瑞典与罗马教廷的联系。1537年，布里吉特修会被正式解散，修道院的财产被王室没收。僧侣和修女们被迫离开，宏伟的建筑群被改作仓库、医院，甚至是一段时期的监狱。然而，故事在这里发生了有趣的转折。古斯塔夫·瓦萨国王在夺取修道院的同时，却决定在瓦斯泰纳建造一座全新的、最现代化的城堡。原因很实际：这里地处维特恩湖畔，水路交通便利，是控制瑞典中部地区的战略要地；同时，用一座象征新教王权的坚固城堡，“覆盖”掉旧天主教朝圣圣地的光环，无疑具有强大的政治象征意义。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，从1545年开始，一座融合了文艺复兴美学与中世纪防御需求的城堡在湖边拔地而起。设计深受当时欧洲大陆，特别是荷兰防御工事的影响。它拥有厚重的城墙、圆形的角塔（能更好地抵御火炮）、以及一条引湖水而成的护城河。然而，它内部又设有宽敞明亮的宴会厅、国王套房，装饰着精美的壁画。这座城堡与其说是一个纯粹的军事堡垒，不如说是一座“展示力量的宫殿”。瓦萨王朝的几位国王都曾在此居住和理政。有趣的是，城堡的建筑材料，据说部分就来自被拆毁的修道院附属建筑，历史在这里完成了一次物质的循环。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着瑞典帝国中心北移，城堡在十七世纪后逐渐失去了政治重要性，先后被用作省级档案馆、粮仓。而修道院建筑更是命运多舛，屡遭火灾，大部分区域沦为废墟。直到十九世纪浪漫民族主义兴起，瑞典人开始重新审视自己的中世纪遗产。修道院教堂和部分建筑得到修复，重新成为路德宗教堂。二十世纪以来，一场持续而精细的考古与修复工作展开，人们努力厘清这片土地上层层叠叠的历史。今天，你看到的并非某一时刻的定格，而是一部活着的、仍在被阅读的石砌史书。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你安排一整天（约8-9小时）来沉浸式体验瓦斯泰纳。最好在上午9点半左右抵达，这时旅行团尚未涌入，晨光柔和。游览节奏宜慢不宜快，核心在于“感受”而非“打卡”。建议先从修道院区域开始，因为这里是精神与历史的起点，上午的宁静更能让你体会其神圣氛围。随后漫步小镇主街午餐，下午将重点放在城堡及其周边。这样的安排符合历史的时间线（从中世纪到文艺复兴），也符合感官的节奏（从内省到开阔）。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（6-8月）是旅游旺季，城堡内部可能拥挤，尽量选择工作日早晨或傍晚前往。进入修道院教堂请务必保持安静，尊重正在祷告的信徒。小镇石板路多，建议穿一双舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站或停车场出来，先别急着找地图，而是任由自己迷失在通往修道院的小巷里，感受脚下凹凸不平的古老石路和两旁糖果色的小木屋`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开修道院教堂那扇厚重的木门，让眼睛适应内部昏暗的光线，静静坐在长椅上聆听几乎能触摸到的寂静，观察阳光透过高窗在红色砖墙上移动的轨迹`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要参加一次（哪怕是简短跟随）修道院博物馆的导览，听讲解员用温柔的瑞典口音英语讲述圣布里吉特和修女们每日诵读的《天启》与具体的生活细节`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从修道院中庭的拱廊下穿过，在花园的长椅上坐一会儿，想象几个世纪前修女们在此默想时闻到的泥土与草药气息与今日并无不同`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Storgatan主街漫步，在百年老店“Vadstena Gästgivaregård”或某家临湖的咖啡馆享用一顿用维特恩湖鱼鲜制作的午餐`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午信步走向城堡，别急着进去，先沿着护城河走完整整一圈，从每一个角度欣赏城堡倒映在水中的完美对称与不同塔楼的雄姿`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡内部，用手触摸骑士大厅里那些冰冷而巨大的石柱，抬头仔细辨认壁画上已然斑驳却依然生动的狩猎与神话场景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间与季节允许，租一艘小船或只是坐在湖边的木栈道上，在傍晚的金色光线里，回望城堡与小镇的剪影，结束这趟时空穿梭之旅`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡护城河东南角`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前一小时，阳光将城堡染成金色，在此位置可以拍到城堡主体与其在水中完整的倒影，利用水面垂柳做前景更添韵味。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`修道院教堂内部中殿尽头`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的上午，站在祭坛前回望入口方向，可以捕捉到阳光从西侧窗户射入，形成一道道光柱穿透教堂内部灰尘的“神圣之光”。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小镇主街与教堂塔楼视角`}</h4>
                  <p className="text-sm text-gray-700">{`从Storgatan街中段，利用长焦镜头压缩空间，将前方彩色的低矮木屋与后方耸立的修道院教堂砖塔一同纳入画面，构成生活与信仰的层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡城墙之上`}</h4>
                  <p className="text-sm text-gray-700">{`登上城堡的城墙漫步道，以巨大的圆形角塔为框架，拍摄远处波光粼粼的维特恩湖和点点白帆，构图充满故事感和纵深感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在瓦斯泰纳上空有严格限制，尤其靠近城堡和修道院空域，放飞前务必查阅当地法规。室内拍摄禁用闪光灯，保护珍贵的壁画和文物。当地人非常注重隐私，拍摄居民或私人花园前最好微笑示意或询问。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔历史民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在由18世纪商人宅邸改造的B&B里，房间窗户正对维特恩湖，清晨在波光与海鸥鸣叫中醒来，主人会为你准备丰盛的本地特色早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`修道院旁的宁静旅馆`}</h4>
                  <p className="text-sm text-green-800">{`选择紧邻修道院遗址的精品小酒店，由老房子改造，内饰是干净的斯堪的纳维亚风格，夜晚极其安静，出门即是数百年的历史氛围。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色庄园体验`}</h4>
                  <p className="text-sm text-yellow-800">{`租住在小镇外围一座十九世纪的红色木制庄园里，拥有自己的小花园和露台，体验一把瑞典乡村“夏日别墅”的悠闲与私密。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城堡景观酒店`}</h4>
                  <p className="text-sm text-purple-800">{`入住镇上唯一能直接望见城堡全景的现代设计酒店，在顶楼的公共桑拿房蒸完后，可以裹着毯子到露台，欣赏夜色中被灯光点亮的城堡，宛如梦境。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季的住宿非常紧俏，尤其是周末，务必提前数月预订。瓦斯泰纳治安极好，夜晚可以安心散步。许多民宿和酒店不设24小时前台，需提前沟通抵达时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开瓦斯泰纳时，你带走的可能不是一堆照片，而是一种罕见的、完整的历史触感。在这个小小的方圆之地，你亲眼见到了信仰如何从一颗心灵的火花，燃成一座照亮北欧的灯塔；又见到世俗的权力如何巧妙地接管并重塑这片圣地，建立起稳固而美丽的现实秩序。它们没有互相抹杀，而是像维特恩湖的水与岸一样，彼此依存，共同构成了今天这片土地的深厚肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求瞬时刺激、碎片化信息的快节奏世界里，瓦斯泰纳提供了一种截然相反的旅行价值：深度与宁静。它要求你慢下来，用脚步丈量，用想象力填补砖石之间的空白。它不提供炫目的奇观，却馈赠你一种内心的平静和对时间更辽阔的感知。在这里，你不仅是游客，更是一个时间的阅读者，在一本由石头、湖水与光影写成的厚重书卷中，读到了关于坚持、变迁与共存的永恒故事。这，正是深度游的灵魂所在，也是每一个渴望在旅程中寻找意义的人，应当把它列入清单的理由。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sigtuna-sweden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡格蒂纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigtuna</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/visby" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯比老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Visby</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gripsholm-castle-national-portrait-gallery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格利普霍姆堡（国家肖像画廊）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gripsholm Castle (National Portrait Gallery)</p>
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
