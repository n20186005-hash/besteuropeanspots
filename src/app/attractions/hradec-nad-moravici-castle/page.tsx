import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '赫拉德茨城堡深度旅游攻略：探秘“西里西亚凡尔赛”与贝多芬的钢琴时光',
  description: '赫拉德茨-纳德莫拉维齐城堡（Hradec nad Moravicí）是捷克隐藏的珍宝，曾接待贝多芬与李斯特。本攻略涵盖一日游路线、避坑指南与小众玩法，带你深度游这座红砖白墙的浪漫城堡。',
}

export default function HradecNadMoraviciCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '赫拉德茨-纳德莫拉维齐城堡', href: '/attractions/hradec-nad-moravici-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`赫拉德茨-纳德莫拉维齐城堡・Hradec nad Moravicí Castle・捷克・摩拉维亚-西里西亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，如果你已经看腻了布拉格的人山人海，今天这份赫拉德茨城堡私藏旅游攻略，就带你躲进摩拉维亚的森林与丘陵之间，探访一座连很多捷克本地人都未必深入了解的“西里西亚凡尔赛”。它不像常规景点那样张扬，反而像一位低调的贵族，静静矗立在莫拉维齐河畔。红砖墙、白窗框、连绵的塔楼与拱廊——第一眼看到它，你会以为自己不小心闯入了某个童话绘本。但更动人的是它的故事：这里曾是欧洲音乐巨匠的灵感驿站，贝多芬和李斯特都曾在此留下足迹与琴声。作为你的专属向导，这份自由行指南请收好，我会告诉你如何避开观光团，在哪扇窗户前等日落最迷人，以及怎样静静聆听这座城堡对你诉说的百年往事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，如果你已经看腻了布拉格的人山人海，今天这份赫拉德茨城堡私藏旅游攻略，就带你躲进摩拉维亚的森林与丘陵之间，探访一座连很多捷克本地人都未必深入了解的“西里西亚凡尔赛”。它不像常规景点那样张扬，反而像一位低调的贵族，静静矗立在莫拉维齐河畔。红砖墙、白窗框、连绵的塔楼与拱廊——第一眼看到它，你会以为自己不小心闯入了某个童话绘本。但更动人的是它的故事：这里曾是欧洲音乐巨匠的灵感驿站，贝多芬和李斯特都曾在此留下足迹与琴声。作为你的专属向导，这份自由行指南请收好，我会告诉你如何避开观光团，在哪扇窗户前等日落最迷人，以及怎样静静聆听这座城堡对你诉说的百年往事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`赫拉德茨-纳德莫拉维齐城堡`} />
                <InfoRow label="英文名称" value={`Hradec nad Moravicí Castle`} />
                <InfoRow label="正式名称" value={`Hradec nad Moravicí Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`摩拉维亚-西里西亚州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城堡的历史，简直是一部欧洲贵族文化与艺术赞助史的微缩剧本。最早这里是一座中世纪要塞，守护着摩拉维亚与西里西亚之间的重要商路。但让它真正登上历史舞台的，是18世纪末到19世纪的利希滕斯坦家族（Lichnovský）——他们是当时中欧最有影响力的艺术赞助人之一。家族成员不仅是政治家、将军，更是狂热的音乐爱好者。他们不惜重金将城堡改造成新古典主义与浪漫主义风格交织的殿堂，并专门修建了豪华客房和音乐厅，只为了邀请当时欧洲最顶尖的艺术家前来居住创作。1806年和1811年，路德维希·范·贝多芬两度受邀前来，据说他的《第四交响曲》部分灵感就诞生于此。几十年后，弗朗茨·李斯特也曾在此演奏。这使得城堡超越了普通贵族的乡间别墅，成为连接维也纳、布拉格音乐圈的重要沙龙，一个真正的“艺术避难所”。即使在二战后被收归国有，它作为音乐殿堂的灵魂从未褪色，至今每年夏天仍会举办古典音乐节，琴声依旧在古老的墙壁间回荡。`} />
                <InfoRow label="建筑特色" value={`走近城堡，你首先会被那大片温暖而沉稳的暗红色砖墙击中——它不是那种鲜艳的红，而是经历了百年风雨后，透着一点灰褐调的、类似陶土般的色泽，在阳光下尤其显得厚实而宁静。墙面并非单调一片，而是用白色灰浆勾画出清晰的砖块轮廓，形成一种细腻的网格纹理。与红墙形成绝妙对比的，是层层叠叠的纯白色窗框、门框、栏杆和装饰性壁柱，线条干净利落，像给建筑镶上了精致的蕾丝边。城堡由“白堡”和“红堡”两部分组成，但它们是优雅地连接在一起的，并非生硬拼接。白堡更显端庄，有着对称的立面和高耸的方塔；红堡则更浪漫，拥有尖顶塔楼、拱形连廊和大量装饰性雉堞。最迷人的细节在屋顶：各种形状的深灰色石板瓦屋顶组合在一起，尖顶、圆顶、斜坡，错落有致，烟囱造型也各不相同。记得仔细观察墙角那些石雕的排水口，很多都被雕刻成了兽首的形状，雨水会从它们的“嘴里”吐出，既实用又充满趣味。`} />
                <InfoRow label="建筑风格" value={`赫拉德茨城堡是“哥特复兴式”与“新古典主义”风格一次非常成功的“跨界融合”。通俗点说，就是建筑师既想要中世纪城堡那种浪漫、神秘甚至带点戏剧性的轮廓（这是19世纪浪漫主义时期的流行审美），又舍不得古典主义那种对称、理性、优雅的比例。所以你会看到：城堡整体布局和许多装饰元素（如尖塔、雉堞、拱窗）是向哥特式致敬的，营造出一种童话般的、防御性的外观。但当你细看它的立面分割、窗户的排列方式以及门廊的设计，又会发现严格遵循了新古典主义的对称法则和几何美感。例如，主入口的门廊采用标准的三角形山花和圆柱，这是古希腊神庙的典型元素。这种混搭并非偶然，它精准反映了城堡主人利希滕斯坦公爵的品味——他既是一位崇尚理性与秩序的贵族，也是一位充满激情、热爱自然与艺术的浪漫主义者。建筑本身，就是他双重人格的实体化。在这里，你不会感到风格的冲突，只会觉得一种独特的和谐：庄严但不呆板，浪漫却不轻浮。`} />
                <InfoRow label="文化价值" value={`对今天的捷克人，尤其是摩拉维亚-西里西亚地区的居民而言，这座城堡远不止是一个旅游景点。它是一枚“文化活化石”，持续滋养着本地的艺术生态。每年夏季的“贝多芬赫拉德茨”音乐节，会把世界级的音乐家和乐迷吸引到这个宁静的小镇，古老的音乐厅再次被交响乐充满，仿佛时光倒流。本地学校经常组织学生前来，不是走马观花，而是让他们坐在花园里写生，或者在骑士大厅里听一堂关于19世纪欧洲历史的生动课。城堡的存在，让这个地理位置稍显偏僻的地区，保持了一种高雅的文化自信。此外，它也是当地人重要的休闲空间：城堡周边巨大的英式风景公园（占地超过100公顷）是居民散步、慢跑、遛狗的首选。人们在这里享受自然，同时也与历史共存。在现代社会快节奏的背景下，城堡及其公园提供了一个让心灵慢下来的“缓冲地带”，它提醒人们：艺术、自然与沉思，这些看似“无用”的事物，恰恰是生活品质的核心。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 赫拉德茨城堡一日游打卡路线攻略：从白堡到红堡的音乐时光漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`朋友，假设我们有一个完整的白天，那就跟我这样走，保证你既不累，又能把精华看全，还能捕捉到城堡最美的光影。上午（10点-12点30）：从容探秘白堡。 建议你稍微早点到，先去游客中心买好联票（包含白堡和红堡）。上午的光线柔和，适合拍照，我们先从白堡开始。跟着导览（有英文的），你会依次参观保存完好的贵族套房、宴会厅，重点在音乐厅——一定要在这里多停留一会儿，想象贝多芬在此弹琴的画面。中午（12点30-14点）：花园野餐或小镇午餐。 从白堡出来，穿过拱门就进入了城堡的后花园。我强烈推荐你在花园的长椅上，面对池塘和远处的红堡来个简单野餐（可以提前在小镇面包店买好）。如果想吃热食，可以步行10分钟下山，到小镇广场找一家叫“U Kastelána”的传统餐馆，尝尝摩拉维亚风格的烤鸭。下午（14点-17点）：深入浪漫红堡与公园漫步。 下午参观红堡，这里的房间更私密，装饰更浪漫，不要错过顶层的小塔楼观景台。之后，把时间留给巨大的英式风景公园。沿着标记好的小径，一直走到公园深处的“贝多芬静思亭”，这是一天中最宁静的时刻。傍晚（17点后）：捕捉金色时刻。 在离开前，一定要绕到城堡东侧的远景处，等待日落。当夕阳把整片红砖墙染成金黄色，倒映在护城河水中时，你会觉得这一整天都值了。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  音乐厅的那架古老钢琴：在白堡的音乐厅里，静静陈列着一架19世纪初的三角钢琴。它并非贝多芬弹过的原物（原物已毁），但却是同时期、同工艺的珍贵遗存。当你靠近，可以看到深色木头上细微的磨损痕迹，琴键因年代久远而微微泛黄。最动人的是，房间保持了当年的 acoustics设计，即使无人演奏，也仿佛有一种空旷的共鸣感萦绕在耳边。试着在游客稀少时静静站在它面前，你会听到的也许不是声音，而是一段被封印的时光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  红堡塔楼的螺旋石阶：爬上红堡主塔楼的螺旋楼梯是一次小小的探险。石阶狭窄而陡峭，被无数人的脚步磨得中间微微凹陷，光滑如镜。内侧的石墙冰凉粗糙，透过狭长的箭窗，光线被切割成一道细长的光柱，灰尘在光中飞舞。当你盘旋而上，每上一层，窗外的风景就变化一次：从城堡内院的屋顶瓦片，到远处绵延的森林树冠。这个过程本身，就像在阅读城堡建筑的立体剖面图。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  骑士大厅的铠甲与壁画：在红堡的骑士大厅，站立着一套完整的16世纪骑士铠甲。它不是僵硬的摆设，而是被巧妙地摆出稍息的姿态，头盔微微偏向一侧，仿佛一位疲惫的守卫刚刚小憩。更精彩的是环绕四壁的巨型壁画，描绘着利希滕斯坦家族传奇的狩猎场景。注意看画面边缘的森林细节，画家用极其精细的笔触画出了橡树叶的脉络和狗身上的毛发，让整个房间充满了生动的野性与故事性。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  后花园的“镜面池塘”：从白堡二楼的一扇特定窗户（通常是东南角的休息室）望出去，或者直接走到花园里，你会看到一个设计精巧的长方形池塘。它的位置经过精确计算，能够将红堡的整个倒影完美地纳入水中，上下对称，如同一幅双生画卷。清晨或无风的傍晚，水面平静如镜，城堡的红白身影清晰无比，这个视角是摄影师和画家们的最爱，也最能体现城堡建筑与自然景观融合的匠心。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`首先，时间选择是关键。绝对要避开周一，因为城堡内部（白堡和红堡的展厅）周一基本都闭馆，你只能逛外围公园，损失太大。最佳游览季节是5-6月或9月，春天花园鲜花盛开，秋天公园层林尽染，且游客比盛夏暑期少很多。如果想参加夏季音乐节，务必提前数月在网上订票。其次，穿着与装备。城堡内部参观需要上下很多楼梯，且部分石阶很滑，请务必穿一双防滑舒适的鞋子，千万别穿高跟鞋。即使夏天，城堡内部也较为阴凉，带一件薄外套是明智的。另外，公园面积巨大且是自然土路，蚊虫较多，建议穿长裤并带上驱蚊液。最后，交通与防坑。城堡位于小镇边缘的山丘上，从最近的火车站或巴士站步行上山需要20-30分钟，全是上坡路，如果拖着大行李或体力不佳，建议提前联系小镇的出租车（数量很少，最好让酒店帮忙预约）。自驾的话停车场很大，但指示牌不太明显，跟着“Zámek”的路标走就行。关于安全，小镇和城堡都非常安宁，但公园深处人迹罕至，建议不要独自在黄昏后深入。购买门票时，直接买“白堡+红堡”的联票最划算，学生证有优惠。`}</p>
            </div>
          </Section>

          <Section title={`6. 赫拉德茨城堡周边住宿与美食攻略：住在音乐家曾下榻的小镇`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住宿方面，我强烈推荐你直接住在赫拉德茨-纳德莫拉维齐小镇上，而不是赶回奥洛穆茨或俄斯特拉发等大城市。小镇有几家家庭经营的民宿（如Penzion Hradec），房子本身就很有历史感，房间干净温馨，主人通常非常热情，能给你讲很多旅行指南上没有的本地故事。关键是，清晨或夜晚，当一日游的游客散去，你可以独享城堡公园的寂静，那种体验是无价的。餐饮上，除了之前提到的“U Kastelána”，还有一家叫“Café Bellevue”的咖啡馆值得一去。它就位于上山的路口，拥有一座能看到城堡塔楼的小露台。这里的招牌是现磨的摩拉维亚咖啡和 homemade的苹果派，酥皮香脆，苹果馅酸甜适中。正餐一定要试试摩拉维亚的地方菜，比如“Moravský vrabec”（其实不是麻雀，而是用洋葱和香料慢炖的猪肩肉）配上面饺子（knedlíky）和酸白菜（zeli），味道浓郁扎实，是农民和贵族都爱的传统味道。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间还有富余，有两个地方值得你顺道探索。第一个是圣彼得与保罗教堂（Kostel sv. Petra a Pavla），它就在小镇中心的广场上，步行即可到达。这座巴洛克风格的教堂外表并不起眼，但内部装饰极为华丽，尤其是天花板上描绘圣徒升天的湿壁画，气势磅礴。更重要的是，利希滕斯坦家族的许多成员就安息于此，教堂的地下墓室可以参观（需预约），让你更直接地触碰这片土地的历史。第二个是拉德文（Raduň）城堡，开车大约20分钟。这是一个更小巧、更童话的城堡，被一片美丽的湖水环绕。它与赫拉德茨城堡属于同一历史时期和贵族圈，但风格更偏浪漫主义，像个精致的玩具城堡。去那里的人少得多，你可以悠闲地划船，或者只是在湖边发呆，感受另一种静谧的城堡氛围。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`赫拉德茨-纳德莫拉维齐城堡教会我一件事：真正的贵族气质，不在于建筑的宏伟炫耀，而在于它为美与思想提供的庇护。当贝多芬的琴声穿过红砖拱廊，当李斯特的指尖触碰琴键，这座城堡便完成了它最神圣的使命——它不只是砖石的组合，更是一个容器，盛放了几个世纪以来人类对艺术、自然与宁静生活的永恒渴望。在这里，你触摸到的每一块砖，都仿佛带着音符的温度。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/adrspach-teplice-rocks" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿德尔什帕赫-特普利采岩石群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Adršpach-Teplice Rocks</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/olomouc" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥洛穆茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Olomouc</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sedlec-ossuary-kutna-hora-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库特纳霍拉（人骨教堂及老城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kutná Hora (Sedlec Ossuary & Old Town)</p>
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
