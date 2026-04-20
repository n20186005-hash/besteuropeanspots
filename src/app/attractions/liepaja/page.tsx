import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '利耶帕亚深度旅游攻略：风之城的新艺术、白沙滩与秘密军港漫步指南',
  description: '探索拉脱维亚利耶帕亚(Liepāja)深度游攻略，揭秘“风之城”的木质新艺术建筑、欧洲最美白沙滩及震撼的苏联潜艇基地废墟。这份自由行指南带你体验海滨城市的独特反差魅力。',
}

export default function LiepajaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '利耶帕亚', href: '/attractions/liepaja' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`利耶帕亚・Liepāja・拉脱维亚・库尔泽梅`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你觉得波罗的海的旅行只有里加和老城，那今天这份利耶帕亚私藏旅游攻略，可得收好了。想象一下：海风永远不知疲倦地吹拂着彩色的木头房子，脚下是砂糖般细腻、延绵数公里的白沙滩，而转身不远处，却是庞大、冷峻、带着铁锈气息的前苏联秘密军港废墟。利耶帕亚就是这样一个充满奇妙反差的“风之城”。作为你的专属向导，这份自由行指南的目的，就是带你绕开常规旅游团的路线，深入这座城市的肌理——从它最温柔的艺术灵魂，到最硬核的历史伤疤。在这里，你需要的不是赶路，而是感受，感受风、木头、沙粒和钢铁共同讲述的，关于波罗的海的复杂故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你觉得波罗的海的旅行只有里加和老城，那今天这份利耶帕亚私藏旅游攻略，可得收好了。想象一下：海风永远不知疲倦地吹拂着彩色的木头房子，脚下是砂糖般细腻、延绵数公里的白沙滩，而转身不远处，却是庞大、冷峻、带着铁锈气息的前苏联秘密军港废墟。利耶帕亚就是这样一个充满奇妙反差的“风之城”。作为你的专属向导，这份自由行指南的目的，就是带你绕开常规旅游团的路线，深入这座城市的肌理——从它最温柔的艺术灵魂，到最硬核的历史伤疤。在这里，你需要的不是赶路，而是感受，感受风、木头、沙粒和钢铁共同讲述的，关于波罗的海的复杂故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`利耶帕亚`} />
                <InfoRow label="英文名称" value={`Liepāja`} />
                <InfoRow label="正式名称" value={`Liepāja`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`库尔泽梅`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`利耶帕亚的历史地位，就像它海边的天气一样，充满了变幻的风云。在沙俄帝国时期，凭借其天然不冻港的优势，它被打造为重要的海军基地，开启了其作为军事重镇的篇章。拉脱维亚第一次独立期间（1918-1940年），利耶帕亚更是迎来了“黄金时代”，繁荣的贸易和造船业让它赢得了“拉脱维亚的利物浦”美誉，那时建造的大量精美木质新艺术建筑，至今仍是城市的瑰宝。然而，二战及其后的苏联占领时期，彻底改变了它的命运。城市北部的整个卡拉奥斯塔（Karosta）区被划为封闭的苏联波罗的海舰队潜艇基地，普通市民甚至无法进入。这座城市被一分为二：一半是充满生活气息的市民之城，另一半是笼罩在神秘与恐惧中的军事禁区。这段历史让利耶帕亚成为冷战前线一个鲜活的缩影，这种军民共存的撕裂感，直到1990年代苏联解体后才逐渐愈合，但也为它留下了独一无二、震撼人心的工业遗产景观。`} />
                <InfoRow label="建筑特色" value={`利耶帕亚最迷人的建筑特色，无疑是它那如童话般铺展开的木质新艺术风格住宅。走在如Kungu iela这样的街道上，你会忍不住一次次抬头。这些房子不是冷冰冰的石材，而是温暖的木材。工匠们仿佛把森林的精灵请到了屋檐上：窗楣上雕刻着拉脱维亚的太阳符号、麦穗与橡树叶，扭曲盘绕的藤蔓线条构成了阳台的栏杆，山墙的顶端可能蹲着一只神秘的猫头鹰或一张面孔。色彩更是大胆而和谐：鹅蛋黄的外墙配着翡翠绿的装饰线条，淡粉色的墙面衬着深蓝色的木雕花纹。阳光穿过云层，在这些浮雕上投下流动的光影，让静止的建筑仿佛有了呼吸。海风的常年吹拂，给木材表面留下了温润的包浆和浅浅的风痕，非但不显破败，反而增添了一层时光滤镜。这些房子不是博物馆里的展品，而是依然有人居住、晾晒着衣物的家，炊烟与咖啡香从精美的窗格里飘出，让艺术彻底融入了日常。`} />
                <InfoRow label="建筑风格" value={`这里的主流建筑风格是 “新艺术运动”，特别是其在拉脱维亚的独特分支——“民族浪漫主义”。与里加华丽的石质立面不同，利耶帕亚的新艺术更多地体现在木结构上，这本身就是一种本土化的体现。通俗点说，这种风格拒绝死板的直线和对称，拥抱一切来自自然的曲线和生命力。你看到的不是希腊神话人物，而是拉脱维亚大地上的动植物、民间传说中的精灵和象征丰收与力量的图腾。比如，建筑上频繁出现的“太阳”雕刻，源自波罗的海地区古老的太阳崇拜；交叉的麦捆图案，代表着农业根基。这种风格在20世纪初的利耶帕亚盛行，正是拉脱维亚民族意识觉醒、追求独立与文化自信的产物。建筑师们用本地最常见的木材，将民族的灵魂与对自由的向往，雕刻在了每一栋住宅的门楣和窗框上。所以，欣赏这些建筑，你不仅是在看漂亮房子，更是在阅读一部立体的、充满隐喻的民族史诗。`} />
                <InfoRow label="文化价值" value={`利耶帕亚的文化价值，在于它那种“在风中歌唱”的坚韧与转化能力。它自称“风起之城”，这不仅是气象描述，更是精神写照。这里孕育了拉脱维亚伟大的作曲家Emīls Dārziņš，音乐是城市血液的一部分。每年盛大的“风之城”国际音乐节，让古典、摇滚、爵士乐的声音与永恒的海风共鸣，象征着艺术对灰色历史的冲刷与超越。而它最独特的文化景观，无疑是苏联军事遗产的当代转化。那个曾经令人恐惧的卡拉奥斯塔军港区，如今被艺术家、历史学家和探险者重新打开。庞大的潜艇维修库、废弃的军官宿舍、阴森的监狱，没有被简单拆除，而是被保留为一座露天博物馆和艺术创作基地。在这里，你会看到涂鸦艺术爬上了混凝土堡垒，戏剧演出在废弃的教堂里上演。这种将创伤性地标转化为反思与创作空间的过程，本身就是一种强大的文化行为。它告诉世界，也告诉自己：历史无法抹去，但我们可以选择如何与之共存，并从中生长出新的意义。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 利耶帕亚一日游精华打卡路线攻略：从新艺术老城到神秘军港`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行步行与公交结合路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，攻略的核心来了，咱们这就出发！我设计的这条一日游路线，能让你在一天内高效又深度地触摸利耶帕亚的多元面貌。上午，我们从城市心脏——玫瑰广场开始，在圣三一大教堂的管风琴声中醒来。然后沿着Kungu iela和Teātra iela漫步，这里是木质新艺术建筑的露天画廊，记得带好相机，每个转角都有惊喜。在附近找家可爱的咖啡馆，比如“Fonda”，用一杯拉脱维亚特色的姜饼拿铁开启早晨。中午，向北出发，前往利耶帕亚南部防波堤和白色沙丘。脱掉鞋子，踩在被誉为欧洲最白的细沙上，感受波罗的海的风与浪。可以在海滩边的“Lighthouse”餐厅享用一顿新鲜的海鲜午餐。下午，是时候感受历史的重量了。乘坐公交车或打车前往北部的卡拉奥斯塔区。这里曾是禁地，如今是探险乐园。重点参观前苏联潜艇官兵教堂（现在是艺术空间）和庞大的北海海军堡垒废墟。穿行在巨型混凝土掩体之间，氛围感拉满。傍晚，返回市中心，在Peldu iela街区的特色餐厅享用晚餐，最后可以逛一逛夜市或听一场小型的现场音乐，结束这充实而反差巨大的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  新艺术之窗的“太阳神”：在Kungu iela 22-24号附近的建筑上，仔细寻找一扇窗户的顶部浮雕。那里雕刻着一个庄严的人脸，被夸张的、光芒四射的线条包围——这是典型的拉脱维亚“太阳神”象征。下午的阳光斜射时，光斑会恰好滑过神祇的脸颊，让石刻的眼睛仿佛在眨动。它静静地俯视着街道，提醒着人们这座城市对光明与自然力量的古老崇拜，是新艺术风格本土化最动人的注解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  玫瑰广场的“宁静一刻”：广场中央的圣约瑟夫大教堂前，找一张长椅坐下。忽略游客，专注于声音：呼啸的风声、教堂隐约的管风琴练习曲、远处有轨电车驶过的叮当声。然后抬头看广场周围建筑屋顶上那些形态各异的风信鸡（拉脱维亚标志）。它们在海风中吱呀转动，指向不停变幻的方向。这一刻的嘈杂与宁静并存，正是利耶帕亚日常生活的节奏，你会瞬间理解“风之城”名字里包含的生动与不安。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  白色沙丘上的“感官剥离”：走到南部海滩的沙丘地带，背对城市躺下。闭上眼睛，世界里只剩下三种东西：触觉——身下白沙极致的细腻与冰凉，像粉末一样从指缝流走；听觉——风在耳边持续的、催眠般的呜咽，以及规律的海浪白噪音；嗅觉——纯净的、带着咸腥和海藻清冽的空气。这种近乎感官实验室般的纯粹体验，能瞬间洗净所有疲惫和杂念，是这座城市馈赠的最奢侈的“自然疗法”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  卡拉奥斯塔的“钢铁与涂鸦”：在北海堡垒的某个巨型混凝土潜艇掩体内，你会看到最强烈的视觉冲击。一面是冰冷、粗糙、布满水渍的苏联时代混凝土墙，厚重得令人窒息；而另一面，可能是当代艺术家用喷罐画上的、色彩绚烂充满生命力的抽象涂鸦或人物肖像。生锈的巨大铁门与鲜活的现代艺术并置，历史的重压与当下的宣泄在此直接对话。用手触摸墙壁，一边是刺骨的湿冷，一边是颜料的颗粒感，这种触觉上的反差，会让你对“历史”这个词有全新的、立体的理解。`}</p>
            </div>
          </Section>

          <Section title={`5. 利耶帕亚自由行避坑指南与行前关键贴士`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`记住这几点，你的利耶帕亚之旅会顺利很多！第一，永远敬畏“风”：这不是文艺比喻，是物理现实。这里风大且变化无常，尤其在海岸和军港废墟，毫无遮挡。即使夏季晴天，也务必带一件防风外套，帽子最好有系绳。长发朋友备好发绳，不然全程“风中凌乱”拍照。第二，巧妙避开“虚无”时刻：卡拉奥斯塔军港区范围极大且空旷，部分室内博物馆（如监狱博物馆）有固定开放时间，提前官网查好，避免白跑。周末一些咖啡馆可能关门较早。建议将户外废墟探索安排在白天光线好的时候，室内参观严格按时间表。第三，交通与穿着务实：市中心到卡拉奥斯塔区有几公里，步行较远，推荐使用本地公交（谷歌地图查路线）或打车（Bolt应用很好用）。探索军港废墟时，务必穿结实的、防滑的鞋子！ 那里地面不平，常有碎石和金属残骸，高跟鞋或薄底鞋是“灾难”。最后，整体治安良好，但在偏远废墟区域，建议结伴而行，并注意个人财物。`}</p>
            </div>
          </Section>

          <Section title={`6. 利耶帕亚住宿与美食全攻略：住在故事里，尝遍海风味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想沉浸式体验，我强烈推荐住在Peldu iela或旧城附近。这里有大量由新艺术风格历史建筑改造的民宿和精品酒店，比如“Villa Immermann”或“Liepājas sezona nams”。房间可能保留着雕花木天花板和老式壁炉，推开窗就是风景如画的街道，真正是“住在历史里”。早餐尝一下本地黑麦面包配鲱鱼。美食方面，必须试试海鲜！去“Lielais dzintars”或海滩边的“Lighthouse”，点一份烟熏波罗的海鲱鱼，或当日捕捞的煎鳕鱼，配上一杯拉脱维亚本地啤酒。想找有情调的咖啡馆，“Fontaine Delis”有超赞的甜品和悠闲氛围。如果想体验更特别的，可以去卡拉奥斯塔区由旧军营改造的“KAņepes Kultūras centrs”，那里有很酷的酒吧和简餐，能感受前卫的社区文化。记住，在拉脱维亚餐厅，饭后习惯喝一小杯当地香草利口酒“Rīgas Melnais Balzams”（里加黑药酒），勇敢尝试，那是地道的味道。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果有一天时间，强烈推荐深入探索这两个地方：第一，卡拉奥斯塔监狱体验。这不仅仅是参观，而是参与式的戏剧导览。你会由“狱卒”带领，了解这座曾关押苏联逃兵的真实监狱历史，甚至可能被“关”进牢房片刻。这种浸入式体验带来的是直击心灵的历史震撼，远比看展板深刻。第二，驱车或骑行前往“Pērkone”自然公园。它位于城市以南的海岸线，这里有更原始的海滩、沙丘和松林。你可以找到二战时期的德国海岸防御堡垒“Bunker Nr.1”，它半掩在沙中，像一头沉睡的混凝土巨兽，与自然景观形成奇异的融合。在这里散步，你能找到只有风声和海鸥叫声的绝对宁静，是消化利耶帕亚复杂历史后的最佳“精神SPA”。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`利耶帕亚的灵魂，是一曲由海风、木雕、白沙和锈铁谱成的复调音乐。它从不试图隐藏自己的任何一段历史——艺术的荣光、军事的创伤、自然的野性——而是让它们全部裸露在外，在波罗的海永不停止的风中，交织、对话、最终达成一种粗粝而真实的和谐。这座城市教会你的，不是单一的美丽，而是一种强大的包容力：如何带着所有伤痕，继续在风中挺立，并依然歌唱。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kemeri-national-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯梅里国家公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ķemeri National Park</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aglona-basilica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿格洛纳大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aglona Basilica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cesis-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采西斯古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cēsis Old Town</p>
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
