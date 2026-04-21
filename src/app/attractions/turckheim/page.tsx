import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒂尔凯姆深度旅游攻略：漫步阿尔萨斯中世纪小镇，邂逅守夜人传统',
  description: '探索法国蒂尔凯姆(Turckheim)，阿尔萨斯保存完好的中世纪珍宝。这份深度游攻略带你走进古城门与守夜人的世界，体验穿越时光的旅行。',
}

export default function TurckheimPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '蒂尔凯姆', href: '/attractions/turckheim' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒂尔凯姆・Turckheim・法国・上莱茵省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了斯特拉斯堡的人潮，又觉得科尔马过于“精致”，那今天这份**蒂尔凯姆私藏旅游攻略**，就是为你准备的。它藏在葡萄酒之路的怀抱里，像个被时光轻轻吻过、却不愿声张的秘密。想象一下：你穿过一道真实的、带着箭孔和铁闸痕迹的古城门，脚下是几百年磨得温润的石板路，空气里飘着木筋房老木头和远处葡萄园的混合香气。这可不是主题公园，而是一个依然鲜活跳动的中世纪心脏。作为你的专属向导，这份**蒂尔凯姆自由行指南**，不仅要带你打卡那三座傲然屹立的古城门，更关键的是，教你如何“卡准”那个欧洲几乎绝迹的“守夜人”巡街时刻。这份**避坑指南**的精髓就在于：如何从一名匆匆过客，变成一夜“中世纪居民”。准备好了吗？我们的时光漫步，就从下一行字开始。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你厌倦了斯特拉斯堡的人潮，又觉得科尔马过于“精致”，那今天这份<strong>蒂尔凯姆私藏旅游攻略</strong>，就是为你准备的。它藏在葡萄酒之路的怀抱里，像个被时光轻轻吻过、却不愿声张的秘密。想象一下：你穿过一道真实的、带着箭孔和铁闸痕迹的古城门，脚下是几百年磨得温润的石板路，空气里飘着木筋房老木头和远处葡萄园的混合香气。这可不是主题公园，而是一个依然鲜活跳动的中世纪心脏。作为你的专属向导，这份<strong>蒂尔凯姆自由行指南</strong>，不仅要带你打卡那三座傲然屹立的古城门，更关键的是，教你如何“卡准”那个欧洲几乎绝迹的“守夜人”巡街时刻。这份<strong>避坑指南</strong>的精髓就在于：如何从一名匆匆过客，变成一夜“中世纪居民”。准备好了吗？我们的时光漫步，就从下一行字开始。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒂尔凯姆`} />
                <InfoRow label="英文名称" value={`Turckheim`} />
                <InfoRow label="正式名称" value={`Turckheim`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`上莱茵省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`蒂尔凯姆的历史分量，你得用手摸一摸它那敦实的城墙才能体会。公元9世纪，它就已出现在文献中。到了13世纪，凭借神圣罗马帝国皇帝授予的“自由城市”特许状，它一跃成为上阿尔萨斯地区举足轻重的重镇。它的核心地位，直接体现在一套完整且保存惊人的中世纪城防体系上。在那个战乱频仍的年代，城墙和城门就是城市的生命线。蒂尔凯姆的城墙曾长达1.5公里，配备有24座塔楼，而最令人惊叹的是，其中三座主要城门——白城门、布兰德门和法国门——竟然完好无损地挺过了无数次战争与岁月侵蚀，从中世纪一直“值班”到今天。这在整个欧洲都极为罕见。它不仅是阿尔萨斯葡萄酒之路上的军事与贸易枢纽，更是中世纪城市自治与市民生活的一个活化石。当你站在门下，仰头看那些为倾倒滚烫沥青而设的“狼嘴”孔洞时，你触摸的是一部没有间断的、关于守护与生存的厚重史书。`} />
                <InfoRow label="建筑特色" value={`蒂尔凯姆的建筑是一首用石头、木材与时光谱写的交响诗。最震撼的当然是那三座城门。**白城门**是小镇的封面，淡黄色的砂岩在午后阳光下散发着蜂蜜般的光泽，巨大的拱门深邃，上方是带着陡峭瓦顶的哨塔，墙壁上深深嵌入的家族纹章盾牌，仿佛还在低声讲述古老的盟约。**布兰德门**则更显粗犷军事风，深色的石材显得厚重沧桑，它旁边的城墙段落保存得最好，你能清晰看到不同年代修补的痕迹，像树木的年轮。**法国门**最为精巧，它融合了防御与晚期哥特式的装饰元素，门洞上的雕刻更为细腻。而城门内，是迷宫般的木筋房世界。这些房子绝非千篇一律：有的涂着鲜艳的阿尔萨斯绿或砖红色，木筋结构洁白如新；有的则露出经年累月深褐近乎黑色的原木，填充墙是温柔的鹅黄色灰泥。窗台上永远盛开着天竺葵，红的、粉的，在斜斜的木筋线条间跳跃。屋顶的瓦片是古老的“鲱鱼骨”式铺法，在夕阳下泛着鱼鳞般的细碎光泽。石头是冷的，木头是暖的，鲜花是活的——这就是蒂尔凯姆的建筑密码。`} />
                <InfoRow label="建筑风格" value={`蒂尔凯姆是**阿尔萨斯木筋房风格**的集大成教科书。这种风格通俗讲，就是用深色的木材构架出房屋的“骨架”，然后在骨架之间用砖石或泥灰填充“血肉”。走在镇上，你就像在阅读一本立体的建筑图谱：早期的房子（16世纪前）木筋结构往往狂野不羁，呈现“X”形、“人”字形甚至复杂的菱形网格，透着一股实用至上的民间力量；而后期（尤其是17-18世纪重建的）则规整许多，水平与垂直线条主导，显得优雅稳重，反映了市民阶层的财富与审美提升。这里的木筋房不仅仅是“好看”，它深深根植于本地地理：盛产的木材提供了骨架，莱茵河平原的粘土制作砖块，而陡峭的屋顶是为了应对阿尔萨斯冬季的丰沛降雪。更妙的是，许多房子的二层会故意比一层突出一些，这不是为了怪异，而是中世纪智慧的体现——为了在狭窄的街巷中争取更多居住空间。每一根倾斜的支柱，每一个雕刻在梁托上的小太阳或葡萄串装饰，都不是随意为之，它们是家庭的手艺、信仰的符号，甚至是行会的标志。在这里，建筑风格就是活生生的生活史。`} />
                <InfoRow label="文化价值" value={`蒂尔凯姆的文化灵魂，由一个延续了数百年的声音所定义——那就是**守夜人**。每晚十点（旅游旺季），当小镇归于宁静，你会听到一声悠长的号角，随后是沉稳的脚步声和古老的德语吟唱。一位身着传统斗篷、头戴宽檐帽、手持戟和灯笼的守夜人，会像他的祖先数百年来做的那样，穿行在迷宫般的街巷中，报时并祝祷居民“夜安”。这个传统从中世纪一直延续至今，仅在两次世界大战期间短暂中断，是欧洲现存极少数的、非旅游表演性质的真实城市守夜制度。它早已超越了原始的防火防盗功能，成为了社区凝聚力的神圣仪式。对于当地人，这声音是安全感，是身份的认同，是与祖先最直接的听觉纽带。对于现代访客，它是一次直击心灵的时空对话。守夜人吟唱的“你们要警醒”（Hüet dich, Guet Nacht…），提醒着在高速数字时代迷失的我们：有些守护，关乎社区，关乎传统，关乎对平凡一夜的敬畏。这个活着的传统，让蒂尔凯姆的木石城墙有了温度，让历史书上的“中世纪日常生活”有了呼吸和声音。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 蒂尔凯姆一日游打卡路线攻略：从古城门到守夜人巡游`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行步行路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，我的专属攻略地图现在展开。假设你有一个完整的白天加晚上，跟着我走，绝对精华不绕路。**上午（9:00-12:30）**：我们的**打卡攻略**从地标**白城门**开始。别急着冲进去，先在城门外的小桥和护城河（现在已是花园）边拍个全景。穿过城门，你正式踏入中世纪。沿着主街Grand‘Rue慢慢逛，别怕迷路，两边的木筋房和精致小店就是最好的向导。目标是中心的**圣安娜教堂**，进去感受一下哥特式空间的肃穆与彩绘玻璃的光影。**中午（12:30-14:00）**：教堂广场附近就有好几家地道酒馆（Winstub）。一定要点一份阿尔萨斯酸菜腌肉锅（Choucroute），配上一杯本地产的琼瑶浆白葡萄酒，这才是“入乡随俗”。**下午（14:00-18:00）**：饭后消食，去探访另外两座城门——**布兰德门**和**法国门**，感受它们不同的性格。之后可以钻进任何一条吸引你的小巷，比如Rue des Vignerons（葡萄农街），这里游客更少，生活气息更浓。对历史着迷的话，**城门博物馆**（设在法国门内）小而精，能帮你串联起所有见闻。**晚上（18:00后）**：晚餐后，重中之重来了！**提前查好当晚守夜人巡游是否举行（通常旺季每晚10点），并提前15分钟到白城门或市政厅前等待**。这是整个**蒂尔凯姆深度游**的高光时刻，不容错过。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>守夜人的灯笼与戟影</strong>：当守夜人走近，请屏息观察。他手中那盏摇晃的油灯，在古老的石墙上投下巨大、跳动、变幻莫测的光影，仿佛将沉睡的石头精灵唤醒。光影掠过木筋房凹凸不平的表面，让那些古老纹章和雕刻瞬间拥有了生命。他肩上的戟并非道具，其金属尖端在昏暗光线下寒光微闪，与温和的报时吟唱形成奇特的张力——这是和平年代对古老职责的庄严复刻，极具戏剧感染力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>白城门拱顶的“回响”</strong>：独自或趁人少时站在白城门巨大的拱顶正下方。抬头看，是层层叠叠的石砌穹窿。试着轻轻拍手或低声说句话，你会听到一种浑厚、包裹式的回响。几个世纪以来，马蹄声、商队的车轮声、士兵的脚步声、归家者的笑语都曾在这里共鸣。此刻的回响，是石头录下的时光低语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>某扇窗上的“啤酒花”木雕</strong>：在老城的木筋房上，请留意那些支撑梁托（俗称“牛腿”）上的雕刻。除了常见的太阳、月亮、爱心，试着寻找“啤酒花”图案。蒂尔凯姆历史上啤酒酿造业发达，拥有酿造权的家庭会骄傲地将啤酒花刻在房子最醒目的位置。找到它，你就“破译”了这户人家数百年前的身份与荣耀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>圣安娜教堂的“葡萄”彩绘玻璃</strong>：走进圣安娜教堂，别只看正中祭坛。在侧面的彩绘玻璃窗上寻找以“葡萄”和“葡萄藤”为主题的画面。这并非单纯的宗教装饰，而是阿尔萨斯葡萄酒文化深入信仰体系的直接体现。阳光穿透这些深红、紫罗兰色的玻璃，将葡萄的意象化作一片神圣而绚丽的光影，洒在地上，仿佛神祇对这片土地最温柔的赐福。" }} />
            </div>
          </Section>

          <Section title={`5. 蒂尔凯姆自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，<strong>时间就是一切</strong>。想体验完整的蒂尔凯姆，务必<strong>安排过夜</strong>。很多一日游团队在下午5点前就离开了，你会错过灵魂般的守夜人巡游（旺季每晚10点开始）。巡游是免费的，但请务必提前在旅游局官网或现场公告栏确认当天是否举行（冬季可能减少或取消）。其次，<strong>穿着舒适防滑的鞋子</strong>！中世纪石板路美丽但凹凸不平，高跟鞋和光滑底的鞋简直是“刑具”。小镇很小，全程步行，轻装上阵最佳。第三，<strong>避开人流高峰</strong>。上午10点后至下午，主街可能迎来旅游团。建议早到，或把主街游览安排在午餐前后，清晨和黄昏去探索小巷，光线美且静谧。自驾的朋友，<strong>不要试图开车进入老城</strong>，迷宫般的单行道和狭窄街道会让你崩溃。使用镇外规划良好的免费停车场（如Porte de France附近）。最后，虽然治安很好，但<strong>在餐厅户外座或拥挤处，仍要看管好随身物品</strong>。记住，这里不是巴黎，但基本的旅行警惕心永远没错。" }} />
            </div>
          </Section>

          <Section title={`6. 蒂尔凯姆周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想真正“拥有”蒂尔凯姆的晨昏，强烈推荐住在老城内或城墙脚下的<strong>特色家庭旅馆</strong>或<strong>葡萄农民宿</strong>。比如位于一栋16世纪木筋房内的“Auberge du Brand”，房间低矮的木梁、古老的地板会给你最地道的中世纪入住体验，醒来推开窗就是一幅活生生的市井画。餐饮方面，<strong>Le Brand</strong> 餐厅是本地人的心头好，不仅酸菜锅地道，它的火焰薄饼（Tarte Flambée）酥脆咸香，配上当地雷司令，绝了。想吃点更精致的，可以尝试 <strong>A l’Arbre Vert</strong>，庭院环境优美，擅长用现代手法演绎阿尔萨斯传统菜肴。早餐或下午茶，一定要去面包店 <strong>Boulangerie Pâtisserie Gilg</strong> 买一个“Kougelhopf”（阿尔萨斯葡萄干杏仁圆蛋糕），配一杯咖啡，坐在广场上看人来人往。住宿的核心氛围是“沉浸感”——你不仅是访客，更是小镇今夜短暂的居民。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从蒂尔凯姆出发，你有两个绝佳的延伸选择，都无需复杂交通。第一，穿上好走的鞋，直接跟着指示牌走上<strong>周围的葡萄园小径</strong>。只需十几分钟，你就能置身于连绵起伏的葡萄藤梯田中，回头俯瞰被城墙和红色屋顶包裹的小镇全景，像一颗镶嵌在绿丝绒上的宝石。这是理解“葡萄酒之路”精髓的最佳视角。第二，如果你还意犹未尽，可以乘坐短途巴士或开车（约15分钟）前往被誉为“阿尔萨斯最美小镇”的<strong>埃吉桑</strong>。它与蒂尔凯姆气质不同：埃吉桑如彩色的同心圆，精致如童话；而蒂尔凯姆是线性的、防御性的，更加质朴雄浑。一天内体验这两颗明珠，你会对阿尔萨斯多元的中世纪小镇风貌有更立体的认识。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒂尔凯姆的灵魂，不在于它有多么惊天动地的地标，而在于那份<strong>静谧的延续感</strong>。当守夜人的号角声融入夜色，当最后一位酒馆客人的笑声消失在巷尾，你仿佛能听到这座小镇均匀而有力的心跳——那是在漫长岁月里，一代代人用日常的坚守，守护下来的一份关于“家”与“传统”的鲜活记忆。它告诉我们，真正的遗产，不是锁在玻璃柜里的古董，而是依然在夜晚街巷中回响的，那句古老的“夜安”。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/obernai" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥贝奈</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Obernai</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/entrevaux-fortified-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    昂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">昂特勒沃</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Entrevaux</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sainte-enimie" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣埃尼米</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sainte-Enimie</p>
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
