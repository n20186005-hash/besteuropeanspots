import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩拉斯特 Perast｜亚得里亚海峡湾的双岛明珠与巴洛克时光胶囊 - 最佳欧洲景点',
  description: '车子沿着科托尔湾的公路蜿蜒，当你以为眼前的峡湾山水已经足够惊艳时，佩拉斯特就像一枚被时光精心珍藏的贝壳，突然出现在水湾的对岸。第一眼看见它，你会不由自主地屏住呼吸——那不是一座普通的小镇，而是一幅直接铺展在墨绿色水面与苍灰色山峦之间的立体油画。一排蜂蜜色、淡粉色的石头房子，紧密却不拥挤地依偎在狭窄的...',
}

export default function PerastBayOfKotorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '佩拉斯特', href: '/attractions/perast-bay-of-kotor' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩拉斯特・Perast・黑山・佩拉斯特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着科托尔湾的公路蜿蜒，当你以为眼前的峡湾山水已经足够惊艳时，佩拉斯特就像一枚被时光精心珍藏的贝壳，突然出现在水湾的对岸。第一眼看见它，你会不由自主地屏住呼吸——那不是一座普通的小镇，而是一幅直接铺展在墨绿色水面与苍灰色山峦之间的立体油画。一排蜂蜜色、淡粉色的石头房子，紧密却不拥挤地依偎在狭窄的海岸线上，每一栋房子的顶上，都竖立着一座挺拔的钟楼，像一支支指向天空的古老桅杆。
下车，走进小镇。耳边瞬间安静下来，只有海浪轻轻拍打石堤的哗哗声，以及从某扇打开的窗户里飘出的、断断续续的小提琴练习曲。空气里有咸腥的海风味，混合着岸边咖啡馆飘出的浓缩咖啡香，还有老石墙上日晒雨淋后特有的、略带凉意的尘土气息。这里没有科托尔那样如织的游人，只有三两只懒猫在阳光下发呆，几位老人在海堤边的长椅上用我听不懂的语言低声交谈。你会立刻感觉到，佩拉斯特的节奏，是以潮汐和钟声来计算的。
它的核心魅力，就在于这种极致的宁静与浓缩的华丽所形成的巨大张力。你脚下是朴素得发亮的鹅卵石小径，身旁的墙壁可能已经斑驳，但一抬头，就能看见门楣上雕刻着精美繁复的家族纹章，或是透过铁艺栏杆，瞥见一个被九重葛装点得生机勃勃的隐秘庭院。这里曾居住着富可敌国的航海贵族，他们的财富没有用来建造庞大的城堡，而是化作了十几座彼此争奇斗艳的宫殿和教堂，像一串璀璨的珍珠，小心翼翼地镶嵌在这短短一公里多的海岸线上。最妙的是，小镇正对的海湾中央，两座小岛如翡翠般点缀——长着柏树的圣乔治岛神秘而不可接近，而人工建造的圣母岩岛则像一枚精致的婚礼蛋糕，稳稳地浮在水中央。这种构图，完美得近乎不真实。
在佩拉斯特，你能触摸到一种“逝去的精英社会”最后的体温。它不是一个死去的博物馆，而是一个沉静地、优雅地老去的贵族。当地人依然住在那些有着数百年历史的宫殿里，楼上是自家的生活区，楼下可能开着一个小画廊或家庭餐馆。当教堂的钟声在黄昏敲响，回荡在整个峡湾，你会明白，这里最珍贵的不是某一件具体的文物，而是整个空间所包裹的那份凝固了的时间感，以及人与自然、与历史共处的和谐哲学。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着科托尔湾的公路蜿蜒，当你以为眼前的峡湾山水已经足够惊艳时，佩拉斯特就像一枚被时光精心珍藏的贝壳，突然出现在水湾的对岸。第一眼看见它，你会不由自主地屏住呼吸——那不是一座普通的小镇，而是一幅直接铺展在墨绿色水面与苍灰色山峦之间的立体油画。一排蜂蜜色、淡粉色的石头房子，紧密却不拥挤地依偎在狭窄的海岸线上，每一栋房子的顶上，都竖立着一座挺拔的钟楼，像一支支指向天空的古老桅杆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`下车，走进小镇。耳边瞬间安静下来，只有海浪轻轻拍打石堤的哗哗声，以及从某扇打开的窗户里飘出的、断断续续的小提琴练习曲。空气里有咸腥的海风味，混合着岸边咖啡馆飘出的浓缩咖啡香，还有老石墙上日晒雨淋后特有的、略带凉意的尘土气息。这里没有科托尔那样如织的游人，只有三两只懒猫在阳光下发呆，几位老人在海堤边的长椅上用我听不懂的语言低声交谈。你会立刻感觉到，佩拉斯特的节奏，是以潮汐和钟声来计算的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的宁静与浓缩的华丽所形成的巨大张力。你脚下是朴素得发亮的鹅卵石小径，身旁的墙壁可能已经斑驳，但一抬头，就能看见门楣上雕刻着精美繁复的家族纹章，或是透过铁艺栏杆，瞥见一个被九重葛装点得生机勃勃的隐秘庭院。这里曾居住着富可敌国的航海贵族，他们的财富没有用来建造庞大的城堡，而是化作了十几座彼此争奇斗艳的宫殿和教堂，像一串璀璨的珍珠，小心翼翼地镶嵌在这短短一公里多的海岸线上。最妙的是，小镇正对的海湾中央，两座小岛如翡翠般点缀——长着柏树的圣乔治岛神秘而不可接近，而人工建造的圣母岩岛则像一枚精致的婚礼蛋糕，稳稳地浮在水中央。这种构图，完美得近乎不真实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在佩拉斯特，你能触摸到一种“逝去的精英社会”最后的体温。它不是一个死去的博物馆，而是一个沉静地、优雅地老去的贵族。当地人依然住在那些有着数百年历史的宫殿里，楼上是自家的生活区，楼下可能开着一个小画廊或家庭餐馆。当教堂的钟声在黄昏敲响，回荡在整个峡湾，你会明白，这里最珍贵的不是某一件具体的文物，而是整个空间所包裹的那份凝固了的时间感，以及人与自然、与历史共处的和谐哲学。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩拉斯特`} />
                <InfoRow label="英文名称" value={`Perast`} />
                <InfoRow label="正式名称" value={`Perast`} />
                <InfoRow label="国家" value={`黑山`} />
                <InfoRow label="城市" value={`佩拉斯特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`亚得里亚海东岸保存最完好的巴洛克小镇之一，曾是与威尼斯共和国结盟的繁荣航海共和国，以精湛的航海技艺和富庶的船长家族闻名。`} />
                <InfoRow label="建筑特色" value={`沿着峡湾海岸线一字排开的十六座高耸钟楼与十七座庄严的宫殿，构成了如舞台布景般精致的海岸天际线。`} />
                <InfoRow label="建筑风格" value={`以威尼斯巴洛克风格为主导，混合了哥特式晚期和文艺复兴时期的元素，形成独特而和谐的滨海建筑群。`} />
                <InfoRow label="文化价值" value={`一个活生生的航海贵族文化博物馆，见证了奥斯曼帝国与威尼斯共和国角力下，一个小城通过智慧、财富与文化自信维系自身独立的传奇。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。主要景点“圣母岩岛”上的教堂博物馆开放时间通常为夏季（5月至9月）每天 9:00 - 19:00，冬季（10月至4月）开放时间缩短，可能为 10:00 - 16:00，且周一可能闭馆。另一岛屿“圣乔治岛”为私人所有，通常不对外开放登陆。所有开放时间可能因天气、宗教活动或私人活动临时调整，建议行前在当地旅游信息中心核实。`} />
              <InfoRow label="门票价格" value={`进入佩拉斯特小镇免费。乘船前往“圣母岩岛”的渡船费用约每人5-10欧元（往返），价格可议。登岛后，进入岛上的“圣母岩教堂”博物馆需另付门票，约5欧元。无明显的学生票，但有时船夫会提供包含船票和门票的打包优惠。`} />
              <InfoRow label="地址" value={`Perast, Bay of Kotor, Montenegro 85336`} />
              <InfoRow label="交通方式" value={`最近的机场是蒂瓦特机场（TIV）或波德戈里察机场（TGD）。最推荐的路线是从科托尔出发：在科托尔老城外的巴士总站乘坐开往新海尔采格方向的本地巴士，告诉司机在佩拉斯特下车，车程约20-25分钟，班次夏季较为频繁（约每小时一班），冬季较少。票价低廉，约2-3欧元。更灵活的方式是自驾或打车，从科托尔沿E65/ M2公路向北行驶，约15分钟即可抵达，沿途峡湾风景绝佳。小镇主街禁止外来车辆进入，需在入口处的停车场停车（收费）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佩拉斯特的故事，是一部关于海洋、勇气与精致文化的史诗。它的命运，始终与那片深邃的科托尔湾紧紧相连。早在中世纪，这里就是一个重要的航运点，但真正的黄金时代始于15世纪。当强大的奥斯曼帝国向内陆不断扩张，佩拉斯特与海湾对岸的科托尔等城市，选择投入威尼斯共和国的羽翼之下，成为“阿尔巴尼亚威尼斯”（Venetian Albania）的一部分。这个选择无比明智——威尼斯需要忠诚的水手和坚固的前哨，而佩拉斯特需要贸易特权和安全保障。于是，一代又一代的佩拉斯特人，驾驶着他们的商船和战船，为威尼斯效力，穿梭于地中海世界。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`财富随着每一次成功的航行涌入这个小镇。最鼎盛时，这里拥有一支超过一百艘大型商船的船队。船长的地位至高无上，他们不仅是勇士，更是学者、艺术赞助人和精明的政治家。每个显赫的家族都渴望建立自己的“宫殿”（实际上更像是豪华的宅邸）和专属的家庭小教堂，以彰显荣耀。你如今看到的那些美丽宅邸，比如布约维奇宫、斯梅克贾宫，它们的名字都属于那个时代叱咤风云的船长家族。建筑竞赛在绅士之间优雅地进行着，他们从威尼斯请来最好的工匠，用粉红色的大理石、精美的石雕、宏伟的露台和充满象征意义的纹章，将家乡妆点成亚得里亚海东岸最耀眼的一颗明珠。小镇甚至拥有自己的航海学校，培养的领航员被誉为全地中海最优秀的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的浪潮总有起伏。1667年的一场大地震严重摧毁了小镇，但顽强的居民们用原址上的石头重建了家园，我们今天看到的巴洛克风貌，大多源自那次重建后的辉煌。18世纪是它最后的华彩乐章。根据当地动人的传说，1452年，渔民们在海中的礁石上发现了圣母圣像，此后人们便开始了持续几个世纪的“抛石仪式”——每次安全返航，船只都会向那块礁石投下一块石头，并沉没旧船。最终，一座人工岛屿被奇迹般地建造起来，这就是“圣母岩岛”。岛上精美绝伦的教堂内部装饰，几乎是一座威尼斯巴洛克艺术的宝库，也寄托了所有水手和家庭对平安最深切的祈愿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着拿破仑战争的炮火和威尼斯共和国的终结，佩拉斯特的航海时代缓缓落幕。它先后被法国、奥地利帝国统治，不再是航线的中心。财富的源泉枯竭了，但那份骨子里的骄傲和高雅文化却沉淀了下来。它没有走向工业化或大规模扩张，而是选择了一种优雅的“休眠”。两次世界大战和南斯拉夫时期，它都偏安一隅，仿佛被时代遗忘，却也因而躲过了破坏性的开发。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你漫步在佩拉斯特，你走过的是石板路，也是层层叠叠的历史。那些紧闭的宫殿大门后，可能是一个普通家庭的生活，也可能是某个船长家族最后的血脉。圣乔治岛上那座本笃会修道院的故事早已随风飘散，只留下静谧的柏树林和不可登陆的神秘感。佩拉斯特就像一个看过世间所有繁华与沧桑的老人，如今静静地坐在家门口，对着永恒的峡湾与双岛，回味着曾经乘风破浪的岁月。它的历史不是断裂的，而是像海湾的水一样，深沉、连贯，将所有辉煌与平静都融为了一体。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味佩拉斯特，强烈建议你安排一整天的时间，并尽量在此住上一晚。完美的深度游从清晨开始，趁大批一日游的游客尚未从科托尔抵达，独享小镇的宁静晨光。上午的核心是乘船探访双岛，特别是登上圣母岩岛细细参观。中午回到镇上，沿着海滨大道漫步，参观一两座内部开放的宫殿博物馆。下午可以找个水边的咖啡馆发呆，或者向北沿着海岸小路散步，从不同角度回望小镇全景。傍晚时分，等待日落将整个峡湾和石头建筑染成金红色，这是一天中最魔幻的时刻。这样安排的节奏张弛有度，既能覆盖所有精华，又能让你沉浸在小镇特有的缓慢时空里。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免在中午11点至下午3点之间登岛，那是大型旅游团抵达的高峰期，小船码头会非常拥挤。
小镇路面多为光滑的鹅卵石，务必穿一双绝对舒适防滑的鞋子，高跟鞋在这里寸步难行。
当地船夫报价可能因人而异，不妨微笑地问一句“最好的价格是多少？”，通常会有惊喜，但服务质量都很有保障。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清早第一件事就是去主码头，找一位船夫带你驶向海湾中央，在平静如镜的晨光中近距离环绕神秘的圣乔治岛，然后登上如梦幻般的圣母岩岛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在圣母岩教堂里花时间凝视那令人震撼的68幅大理石浮雕祭坛，并听守岛人讲讲关于“抛石建岛”的古老传说和当地渔民的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到镇上，走进海滨最显眼的布约维奇宫，如今的海事博物馆，用手指拂过那些古老航海图的复制品，想象船长们如何在此规划远航至地中海的路线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去圣尼古拉斯教堂爬上一百多级台阶的钟楼，从至高点俯瞰整个小镇如模型玩具般铺展在蓝绿色峡湾边，以及那两座岛屿恰到好处的布局。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着海滨大道向北慢慢走，留意每一座宫殿门楣上不同的家族纹章，试着解读上面的帆船、狮子、星星所代表的航海荣耀与家族秘密。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在当地人推荐的家庭餐馆“Conte Hotel”露台或“Pirat”餐厅，点一份当天捕捞的墨鱼仔或黑山风味炖鱼，面对无敌海景享用一顿漫长的午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租一艘皮划艇或站立式桨板，在下午温和的阳光下，用自己的节奏划行在海湾平静的水面上，从另一个维度感受被宫殿群和群山环抱的沉浸感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当黄昏降临，不去餐厅，而是买一瓶本地葡萄酒和一些小吃，坐在海堤的石头台阶上，看天空从橘红变为粉紫，小镇的灯火逐一亮起，倒映在漆黑的水中。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`峡湾公路俯拍点`}</h4>
                  <p className="text-sm text-gray-700">{`从科托尔开往佩拉斯特方向，在即将进入小镇前的一个大拐弯处（有护栏），可将车停在安全区域，用长焦镜头捕捉小镇全景、双岛与背后巍峨山峰的经典明信片角度，最佳光线在日出后或日落前一小时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主码头侧拍双岛`}</h4>
                  <p className="text-sm text-gray-700">{`站在主码头最右侧的堤岸上，将最近处的古朴小石屋作为前景，中景是泊着的彩色小船，远景则是海中央的圣乔治岛与圣母岩岛，构图层次极丰富，适合清晨顺光拍摄。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣尼古拉斯教堂钟楼顶`}</h4>
                  <p className="text-sm text-gray-700">{`这是小镇的制高点，用广角镜头可以拍下鳞次栉比的红色屋顶、各具特色的钟楼以及蜿蜒的海岸线，更能捕捉到居民在自家屋顶露台上生活的生动细节，全天皆可，但下午光线更柔和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某座老宅的临水阳台`}</h4>
                  <p className="text-sm text-gray-700">{`如果你入住了带阳台的临水酒店或民宿（如Hotel Conte），无需奔波，在阳台上架好三脚架，就能拍摄从晨雾、日落到星夜不同时段下，峡湾水面光影与对岸山峦的细腻变化。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇北端小径回望`}</h4>
                  <p className="text-sm text-gray-700">{`向北步行出小镇约200米，有一条沿海小径，从这里回望，可以将佩拉斯特最具代表性的那排钟楼宫殿群作为一个整体拍摄，背景是辽阔的峡湾水面，尤其适合在蓝调时刻拍摄灯火初上的梦幻场景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一枚覆盖广角到中长焦的变焦镜头（如24-105mm），足以应对从宏大景观到建筑细节的所有拍摄需求。`}</li>
                <li>• {`飞无人机理论上需要提前申请，且务必尊重当地居民隐私，绝对避开圣乔治岛（私人领地）和密集居住区，峡湾开阔水域上空是相对安全的选择。`}</li>
                <li>• {`拍摄当地居民，尤其是老人和孩童，请务必先微笑示意并获得同意，他们通常很友善，但未经允许的近距离特写是不礼貌的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接下榻在由17世纪宫殿改造的“Hotel Conte”，房间就有面朝双岛的拱形窗户或阳台，在古典四柱床上入睡，仿佛成了船长家族的客人。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐居体验`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇北端山腰上为数不多的家庭公寓，如“Apartments Bokeski”，需要爬一小段台阶，但换来的是无人打扰的静谧和俯瞰全镇与海湾的绝美露台。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`寻找那些由老石头房子精心改造的现代设计民宿，内部是干净的北欧风，外部是厚重的历史石墙，新旧对话的感觉非常奇妙，比如“Apartment Perast View”。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华享受`}</h4>
                  <p className="text-sm text-purple-800">{`实际上，佩拉斯特的奢华在于位置而非星级。最能被称为享受的，是包下一整栋带私人码头和小花园的古老石屋，邀请朋友同住，彻底过几天与世隔绝的峡湾生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佩拉斯特的住宿数量非常有限，尤其在夏季，必须提前数月预订。许多最佳房源并不在大型预订平台上，尝试通过本地旅游网站或直接联系酒店询问。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇夜晚极其安静安全，几乎没有夜生活，唯一的“喧嚣”可能是晚归渔船的引擎声和教堂的报时钟声，这正是它的魅力所在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在镇上意味着你可以拥有游客散尽后和到来前，独享圣母岩岛晨昏美景的特权，这绝对是值得的投资。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开佩拉斯特许久，我的脑海中依然清晰地留存着那幅画面：黄昏，我坐在冰凉的石堤上，脚边是轻轻荡漾的海水，对岸的圣乔治岛渐渐变成深色的剪影，而圣母岩岛的轮廓被最后一缕夕阳勾勒出金边。没有喧哗，没有匆忙，只有时间像海水一样，缓慢而有力地流淌而过。那一刻，我忽然明白了佩拉斯特馈赠给旅人最宝贵的东西是什么——不是历史的碎片，而是一种完整的、关于“如何优雅地存在”的示范。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、规模和新鲜刺激的世界里，佩拉斯特倔强地选择了一种小而美、静而深的活法。它曾拥抱过最大的冒险（远航），也经历过极致的繁荣，但最终，它回归到了海湾的怀抱，将所有的故事都沉淀为建筑立面上的一道纹路、咖啡馆里的一句闲谈、钟楼每日准时敲响的回声。它告诉你，深度不是走得多远，看得多少，而是能否在一个地方，让自己慢下来，让感官完全打开，去听石头呼吸，去看光影在百年立面上爬行，去想象另一段截然不同却充满尊严的人生。对于每一位厌倦了景点打卡、渴望在旅途中获得内心宁静与历史共鸣的深度游者来说，佩拉斯特不是清单上的一个名字，而是旅途中的一次深呼吸，一次与自己、与往昔时光的深刻对话。它值得你专程为它而来，并给它一整天，以及一个安静的夜晚。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sveti-stefan" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣斯特凡岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sveti Stefan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kolain" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科拉欣</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kolašin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cetinje" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采蒂涅老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cetinje</p>
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
