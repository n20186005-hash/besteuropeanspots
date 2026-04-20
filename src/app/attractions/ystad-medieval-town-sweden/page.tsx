import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '于斯塔德 Ystad｜漫步在《千禧年》作者笔下的真实世界，探寻瑞典最迷人鹅卵石街道 - 最佳欧洲景点',
  description: '如果你问我瑞典南部斯科讷省藏着什么宝藏，我会毫不犹豫地拉着你的手说：“走，去于斯塔德。”火车缓缓进站，空气最先告诉你答案——那是一种混合了波罗的海微咸水汽、老木头散发出的淡淡霉香，还有从街角面包店飘来的、浓郁得化不开的肉桂卷甜香。走出车站，几步之遥，时间就仿佛被调慢了数个世纪。脚下是几个世纪以来被无...',
}

export default function YstadMedievalTownSwedenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '于斯塔德', href: '/attractions/ystad-medieval-town-sweden' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`于斯塔德・Ystad・瑞典・于斯塔德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你问我瑞典南部斯科讷省藏着什么宝藏，我会毫不犹豫地拉着你的手说：“走，去于斯塔德。”火车缓缓进站，空气最先告诉你答案——那是一种混合了波罗的海微咸水汽、老木头散发出的淡淡霉香，还有从街角面包店飘来的、浓郁得化不开的肉桂卷甜香。走出车站，几步之遥，时间就仿佛被调慢了数个世纪。脚下是几个世纪以来被无数鞋底磨得光滑发亮的鹅卵石，硌着脚底，却奇异地让人感到踏实。
在这里，眼睛会忙不过来。糖果色的半木结构房子一栋挨着一栋，白色窗框，赭石色或鹅黄色的墙面，倾斜的屋顶仿佛童话书的插图。但这些房子不是博物馆里冷冰冰的展品，阳台上晾着衣服，窗台边摆着天竺葵，门廊下停着自行车。清晨，你会听到清脆的马蹄声“哒哒”响起，那是穿着传统制服的马车夫，载着游客或干脆就是本地人，慢悠悠地穿过狭窄的街道。声音在古老的墙壁间碰撞、回荡，成了这座小镇最独特的背景音。
最打动人的，是它那种毫不刻意的、融入骨子里的生活感。它不像某些被过度美化的古镇，这里没有迎合游客的喧嚣酒吧街。周末的圣玛丽教堂广场上，本地农夫会摆开摊位，售卖刚挖出来的土豆、带着露水的鲜花和自家腌制的鲱鱼。老人们坐在长椅上，就着一杯咖啡能聊上大半天。它就像一本被翻得起了毛边的精装旧书，每一页都写着真实的故事。它的核心魅力，就在于这种“被使用着的美好”，历史不是过去式，而是进行时，你随时可以走进去，成为这宁静画卷中自然的一笔。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你问我瑞典南部斯科讷省藏着什么宝藏，我会毫不犹豫地拉着你的手说：“走，去于斯塔德。”火车缓缓进站，空气最先告诉你答案——那是一种混合了波罗的海微咸水汽、老木头散发出的淡淡霉香，还有从街角面包店飘来的、浓郁得化不开的肉桂卷甜香。走出车站，几步之遥，时间就仿佛被调慢了数个世纪。脚下是几个世纪以来被无数鞋底磨得光滑发亮的鹅卵石，硌着脚底，却奇异地让人感到踏实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，眼睛会忙不过来。糖果色的半木结构房子一栋挨着一栋，白色窗框，赭石色或鹅黄色的墙面，倾斜的屋顶仿佛童话书的插图。但这些房子不是博物馆里冷冰冰的展品，阳台上晾着衣服，窗台边摆着天竺葵，门廊下停着自行车。清晨，你会听到清脆的马蹄声“哒哒”响起，那是穿着传统制服的马车夫，载着游客或干脆就是本地人，慢悠悠地穿过狭窄的街道。声音在古老的墙壁间碰撞、回荡，成了这座小镇最独特的背景音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是它那种毫不刻意的、融入骨子里的生活感。它不像某些被过度美化的古镇，这里没有迎合游客的喧嚣酒吧街。周末的圣玛丽教堂广场上，本地农夫会摆开摊位，售卖刚挖出来的土豆、带着露水的鲜花和自家腌制的鲱鱼。老人们坐在长椅上，就着一杯咖啡能聊上大半天。它就像一本被翻得起了毛边的精装旧书，每一页都写着真实的故事。它的核心魅力，就在于这种“被使用着的美好”，历史不是过去式，而是进行时，你随时可以走进去，成为这宁静画卷中自然的一笔。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`于斯塔德`} />
                <InfoRow label="英文名称" value={`Ystad`} />
                <InfoRow label="正式名称" value={`Ystad`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`于斯塔德`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是瑞典保存最完好的中世纪城镇之一，也是斯堪的纳维亚通往欧洲大陆的重要汉萨同盟港口。`} />
                <InfoRow label="建筑特色" value={`密集排列的超过300栋半木结构房屋，搭配着鹅卵石铺就的蜿蜒街道和宁静的庭院。`} />
                <InfoRow label="建筑风格" value={`北欧中世纪风格与汉萨同盟时期砖石及半木结构建筑的迷人混合。`} />
                <InfoRow label="文化价值" value={`这里不仅是历史建筑的露天博物馆，更是当代瑞典慢生活哲学的鲜活体现，因作家斯蒂格·拉尔森的《千禧年》系列而闻名遐迩。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇本身全天24小时开放。各博物馆、景点开放时间各异：Ystad剧院博物馆和修道院博物馆通常在夏季（6月至8月）每天上午10点至下午5点开放；冬季（9月至次年5月）开放时间缩短，多为周二至周日开放。建议行前在官方旅游网站查询具体日期，许多室内景点在瑞典的公共假日（如仲夏节、圣诞节）可能关闭。`} />
              <InfoRow label="门票价格" value={`漫步于斯塔德迷人的街道和港口完全免费。进入主要博物馆如Ystad剧院博物馆，成人票价约80-100瑞典克朗；Ystad修道院博物馆门票约60瑞典克朗。18岁以下青少年通常免费。持有斯科讷省旅游卡可享受部分折扣。部分小型画廊或历史建筑可能收取象征性费用，约20-40瑞典克朗。`} />
              <InfoRow label="地址" value={`Stortorget 1, 271 31 Ystad, Sweden`} />
              <InfoRow label="交通方式" value={`从最近的主要国际机场出发：哥本哈根凯斯楚普机场（CPH）是最佳选择，机场内有直达于斯塔德的火车。在机场火车站乘坐“Öresundståg”列车，方向马尔默/于斯塔德，全程约1小时20分钟，班次频繁，约每20-30分钟一班，非常便利。购票建议使用“Skånetrafiken”APP或直接在车站售票机购买，选择“Ystad”为目的地即可。如果从瑞典国内过来，从马尔默中央火车站乘坐同一线路火车，车程仅约45分钟。小镇中心火车站步行至老城核心区仅需5分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我们把时间拨回到一千多年前。于斯塔德的名字最早出现在11世纪的北欧文献里，那时它还只是波罗的海沿岸一个不起眼的维京人定居点，渔民和农夫在这里繁衍生息。命运的转折点发生在13世纪，当汉萨同盟——这个中世纪北欧最强大的商业和政治联盟——将触角延伸至此。于斯塔德凭借其优良的天然港湾，迅速崛起为连接斯堪的纳维亚内陆与吕贝克、但泽等汉萨核心城市的枢纽。你可以想象，当时的码头是何等繁忙：来自瑞典的木材、铁矿石和毛皮被装上船，运往欧洲大陆；而欧洲的布匹、盐和葡萄酒则在这里卸货，再分销到北欧各地。财富如潮水般涌来，小镇开始膨胀，我们今天看到的许多砖石结构仓库和商行，就是在那个黄金时代打下地基的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的繁荣总是伴随着刀光剑影。位于瑞典最南端的于斯塔德，不幸成为了丹麦和瑞典两大王国反复争夺的焦点。在漫长的岁月里，它的城墙数次被攻破，旗帜多次易主。最惨烈的一次发生在16世纪，瑞典国王古斯塔夫·瓦萨的军队为了从丹麦手中夺取斯科讷省，几乎将小镇焚为平地。我们现在看到的那些迷人的半木结构房屋，大部分都是在17世纪那场毁灭性的大火之后重建的。有趣的是，灾难反而催生了更统一的规划。当时的城镇规划者（或许就是某位有远见的市长）规定，新建房屋必须使用木框架和砖石填充，并且要紧密排列以节省空间、抵御海风。于是，那些窄窄的、彩色的“于斯塔德面孔”就这样被批量塑造出来，形成了今天我们看到的、如此协调又密集的街道景观。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪是于斯塔德的又一个转型期。随着更大型的现代化港口在马尔默兴起，它的贸易地位逐渐衰落。但塞翁失马，焉知非福。经济的放缓反而让大规模的城市改造失去了动力，那些中世纪的街道布局和建筑奇迹般地逃过了工业革命的推土机。小镇转向了农业和疗养旅游，富裕的哥本哈根人和斯德哥尔摩人开始热衷于来这里享受海滨空气。宁静，成为了它新的财富。时间快进到20世纪末21世纪初，一位名叫斯蒂格·拉尔森的瑞典记者兼作家，决定将他的侦探小说女主角莉丝·莎兰德的故事背景，设定在于斯塔德及周边地区。随着《龙文身的女孩》等《千禧年》三部曲风靡全球，无数书迷和影迷涌向这里，寻找小说中描述的“安全港”和那些阴郁而迷人的场景。于斯塔德坦然接受了这份关注，却没有被它改变内核，它依然保持着那份不疾不徐的节奏，只是多了一份文学的神秘滤镜。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味于斯塔德，你需要至少一整天，并准备好一双舒适的步行鞋。最佳抵达时间是清晨九点之前，那时旅游巴士还未到达，小镇还沐浴在柔和的金色晨光中，属于本地人的日常生活刚刚展开。我建议你从火车站出来后，直接无视地图，让自己先在小镇边缘的居民区迷路十分钟，感受一下那份宁静的社区氛围。然后，再慢慢向中心广场靠拢。整体游览节奏应该像本地人喝咖啡一样——慢。重点是体验，而不是打卡。上午专注于探索老城核心区和小巷，中午在广场或港口午餐，下午可以参观一两个博物馆，或者干脆找个咖啡馆的户外座位发呆、看人。这样的安排能让你完整感受到小镇从清晨的苏醒，到午间的活力，再到傍晚重归宁静的全过程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇中心虽然不大，但鹅卵石路面穿高跟鞋或硬底鞋简直是灾难，请务必选择舒适的运动鞋或平底鞋。
许多小商店和咖啡馆在下午五点甚至更早就关门，周日营业时间更短，计划购物或用餐要趁早。
不必执着于寻找《千禧年》小说的具体取景地，整个小镇就是最大的取景地，放松心情去感受比按图索骥更有趣。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从火车站西侧那片安静的、布满蔷薇花墙的住宅区开始漫步，听听鸟儿鸣叫和居民推开窗的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让双脚带领你走向圣玛利亚教堂那高耸的红色砖塔，它是老城永远的方向标。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在Stortorget主广场的鹅卵石地面上站一会儿，看看市政厅古老的外墙，想象几个世纪前商人在这里交易的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进那些窄得只容一人通过的小巷，比如Klostergatan附近，伸手就能同时触摸到两侧有着数百年历史的温暖木墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到保存完好的中世纪圣彼得教堂遗址，坐在那片绿草如茵的废墟上，感受历史在阳光下静静呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到老港口，看看那些停泊的白色帆船和古老的木制起重机，海鸥的叫声会提醒你这里与海洋千丝万缕的联系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午去Ystad剧院博物馆转一转，不必看懂所有瑞典语展品，单是感受那座老建筑本身的气氛就足够了。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，请务必再次回到老城迷宫般的小巷中，那时游人散去，夕阳给所有的木房子镀上金边，窗内的灯光一盏盏亮起，那是于斯塔德一天中最温柔的时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Klostergatan小巷深处仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的斜阳最能勾勒出两侧半木结构房屋凹凸有致的纹理和深邃的阴影，构图时让小巷在画面中形成天然的引导线，延伸向尽头的亮光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣玛利亚教堂钟楼俯拍（如果开放登顶）`}</h4>
                  <p className="text-sm text-gray-700">{`这是拍摄于斯塔德红色屋顶海洋全景的绝佳位置，最佳光线在日出后一小时或日落前一小时，柔和的光线会让屋顶的色彩层次更加丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老港口木桥侧拍帆船`}</h4>
                  <p className="text-sm text-gray-700">{`清晨顺光时，以古老的木制港口起重机为前景，白色帆船为中景，背景是彩色的老房子，能完美融合海洋与古镇两大元素。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`任意一个安静的庭院入口向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`许多漂亮的庭院（如靠近广场的某些拱门内）是私人的，但可以从门口向内拍摄，利用门框自然成画框，捕捉院内鲜花、桌椅和建筑内部结构的宁静画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`火车站出来的那条林荫大道回望老城`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，从这里可以拍到老城区建筑群在夕阳下的剪影，前景的行道树能增加画面的纵深感和生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`瑞典的“Allemansrätten”（公众通行权）允许你在户外拍摄，但请务必尊重私人住宅和庭院，不要将相机伸进别人家的窗户或花园。`}</li>
                <li>• {`夏季北欧的“白夜”现象意味着晚上十点后天光依然很亮，是拍摄“蓝色时刻”魔幻氛围的绝佳时机，但冬季日照极短，下午三点后光线就迅速变差，需提前规划。`}</li>
                <li>• {`尝试在画面中加入动态元素，比如一辆正在通过的复古马车、一只路过的猫、或是一位骑自行车的老人的背影，能让照片瞬间充满故事感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`设计迷之选`}</h4>
                  <p className="text-sm text-blue-800">{`由古老邮局改造的精品设计酒店，裸露的原始砖墙搭配北欧极简家具，楼下就是镇上口碑最好的咖啡烘焙坊，香气从清晨飘进你的梦乡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-green-800">{`一栋17世纪的商人宅邸改造的家庭式酒店，房间的天花板是粗大的原始木梁，窗户推开就是鹅卵石街道，晚上能听到远处教堂隐约的钟声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`海滨疗愈之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇边缘一座19世纪海滨别墅内的静谧民宿，每个房间都面朝波罗的海，主人会为你准备好包含自制越橘酱的丰盛早餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`庄园体验之选`}</h4>
                  <p className="text-sm text-purple-800">{`距离小镇中心约3公里、被大片农田环绕的18世纪贵族庄园酒店，拥有巨大的花园和室内泳池，适合想要彻底逃离、享受田园诗般宁静的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`于斯塔德非常安全，即使深夜独自行走在小巷中也无需担心，但选择住宿时还是建议尽量靠近老城中心，这样能最大程度地享受清晨和夜晚无人打扰的古镇氛围。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6月至8月）是绝对旺季，心仪的特色住宿可能需要提前数月预订，尤其是周末。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多家庭经营的民宿不设24小时前台，预订时务必确认好入住时间并保持沟通畅通，瑞典人的守时是出了名的。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开于斯塔德好些天了，但我闭上眼，还能清晰地感觉到脚下那些鹅卵石的触感，还有海风混合着木头与咖啡的复杂气味。这个地方给我的，远不止是一组漂亮的照片或几段历史知识。它提供了一种珍贵的“时间感”。在这个万物飞速迭代的时代，于斯塔德像一颗被琥珀温柔封存起来的水滴，内部的一切——建筑的尺度、街道的走向、甚至人们打招呼的方式——都还保持着一种令人安心的缓慢与恒定。它让你相信，有些美好是可以不被时间冲刷掉的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被过度消费、只剩下喧闹外壳的“古镇”，如果你渴望的旅行不是匆忙的盖章，而是一次真正的心灵散步，那么请把于斯塔德放进你的清单。来这里，不是为了寻找刺激或震撼，而是为了学习如何“慢下来”，如何在一杯咖啡的时间里，看光影在四百年的木墙上移动一寸。你会发现，最深的旅行，不是去了多远的地方，而是你的心，在这样一个安静的小镇里，能够沉静到什么程度。于斯塔德不会给你一场狂欢，但它会赠你一片可供终身回味的、宁静的琥珀时光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/linkping" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林雪平老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Linköping</p>
                  </div>
                </div>
              </a>
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
              <a href="/attractions/uppsala-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌普萨拉大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uppsala Cathedral</p>
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
