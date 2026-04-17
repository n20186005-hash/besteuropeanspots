import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔特亚 Altea｜白色海岸上铺满鹅卵石街道和蓝顶教堂的地中海明珠 - 最佳欧洲景点',
  description: '车子刚刚绕过最后一个弯道，阿尔特亚就像一枚被上帝无意间遗落在海边的、过于精致的白色贝壳，猝不及防地撞进你的视线。它不是那种气势磅礴的景观，而是一种温柔的、弥漫性的存在。整座老城，从山脚到山顶的教堂，被成千上万栋方方正正的小房子严丝合缝地拼贴在一起，每一面墙都白得耀眼，在西班牙炽热的阳光下，仿佛自身就...',
}

export default function AlteaOldTownWhiteCoastPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿尔特亚', href: '/attractions/altea-old-town-white-coast' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔特亚・Altea・西班牙・阿尔特亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚刚绕过最后一个弯道，阿尔特亚就像一枚被上帝无意间遗落在海边的、过于精致的白色贝壳，猝不及防地撞进你的视线。它不是那种气势磅礴的景观，而是一种温柔的、弥漫性的存在。整座老城，从山脚到山顶的教堂，被成千上万栋方方正正的小房子严丝合缝地拼贴在一起，每一面墙都白得耀眼，在西班牙炽热的阳光下，仿佛自身就在发光。你的第一感觉不是“看”，而是“呼吸”——深吸一口气，那里面混杂着海风的咸涩、九重葛和橘子花的甜香，还有从某家敞开的大门里飘出的、蒜香味橄榄油在平底锅里滋滋作响的温暖气息。
顺着主路把车停好，真正的探险从踏上一级鹅卵石台阶开始。这些被几个世纪的脚步磨得光滑温润的石头，在你的脚下发出沉闷而古老的“嗒嗒”声，仿佛是小镇沉睡的心跳。小巷窄得只能容两人侧身而过，两侧的白墙高耸，墙头探出艳红的三角梅或苍翠的仙人掌，在白色的画布上投下变幻莫测的影子。你会不断迷路，但又有什么关系呢？每一次转弯都可能遇见一个挂满陶罐的蓝色木门，一个摆着两把椅子和一盆天竺葵的静谧角落，或者一个突然打开的豁口，将一整片宝石蓝的地中海毫无保留地推到你面前。这里的猫比游客还多，它们慵懒地躺在阳光斑驳的石阶上，对你的经过毫不在意。
而这一切蜿蜒曲折的终点，最终都汇聚到山顶的那个广场——教堂广场。这里是阿尔特亚跳动的心脏。无论你从哪条迷宫般的小巷钻出来，一抬头，必然会看到那座圣母教堂令人屏息的蓝白相间圆顶，由无数片小型瓷砖（azulejos）拼贴而成，在晴空下闪烁着陶瓷特有的、既清凉又深邃的光泽。广场上永远有三两两的人：老人在长椅上读报，画家支起画板试图捕捉光影的瞬息万变，游客则坐在露天咖啡馆的藤椅里，点一杯咖啡或桑格利亚酒，看着这一切发呆。教堂的钟声缓慢地敲响，声音浑厚，沿着白色的山壁滚落，一直滚进海里。这时你会明白，阿尔特亚的魅力不在于某个孤立的景点，而在于这种完整的、沉浸式的“生活感”。它是一座活着的老城，居民在这里买菜、闲聊、祈祷、恋爱，而你，只是一个被允许短暂分享这份美好的过客。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚刚绕过最后一个弯道，阿尔特亚就像一枚被上帝无意间遗落在海边的、过于精致的白色贝壳，猝不及防地撞进你的视线。它不是那种气势磅礴的景观，而是一种温柔的、弥漫性的存在。整座老城，从山脚到山顶的教堂，被成千上万栋方方正正的小房子严丝合缝地拼贴在一起，每一面墙都白得耀眼，在西班牙炽热的阳光下，仿佛自身就在发光。你的第一感觉不是“看”，而是“呼吸”——深吸一口气，那里面混杂着海风的咸涩、九重葛和橘子花的甜香，还有从某家敞开的大门里飘出的、蒜香味橄榄油在平底锅里滋滋作响的温暖气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着主路把车停好，真正的探险从踏上一级鹅卵石台阶开始。这些被几个世纪的脚步磨得光滑温润的石头，在你的脚下发出沉闷而古老的“嗒嗒”声，仿佛是小镇沉睡的心跳。小巷窄得只能容两人侧身而过，两侧的白墙高耸，墙头探出艳红的三角梅或苍翠的仙人掌，在白色的画布上投下变幻莫测的影子。你会不断迷路，但又有什么关系呢？每一次转弯都可能遇见一个挂满陶罐的蓝色木门，一个摆着两把椅子和一盆天竺葵的静谧角落，或者一个突然打开的豁口，将一整片宝石蓝的地中海毫无保留地推到你面前。这里的猫比游客还多，它们慵懒地躺在阳光斑驳的石阶上，对你的经过毫不在意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切蜿蜒曲折的终点，最终都汇聚到山顶的那个广场——教堂广场。这里是阿尔特亚跳动的心脏。无论你从哪条迷宫般的小巷钻出来，一抬头，必然会看到那座圣母教堂令人屏息的蓝白相间圆顶，由无数片小型瓷砖（azulejos）拼贴而成，在晴空下闪烁着陶瓷特有的、既清凉又深邃的光泽。广场上永远有三两两的人：老人在长椅上读报，画家支起画板试图捕捉光影的瞬息万变，游客则坐在露天咖啡馆的藤椅里，点一杯咖啡或桑格利亚酒，看着这一切发呆。教堂的钟声缓慢地敲响，声音浑厚，沿着白色的山壁滚落，一直滚进海里。这时你会明白，阿尔特亚的魅力不在于某个孤立的景点，而在于这种完整的、沉浸式的“生活感”。它是一座活着的老城，居民在这里买菜、闲聊、祈祷、恋爱，而你，只是一个被允许短暂分享这份美好的过客。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔特亚`} />
                <InfoRow label="英文名称" value={`Altea`} />
                <InfoRow label="正式名称" value={`Altea`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`阿尔特亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从摩尔人堡垒演变为渔民小镇，最终成为地中海白色海岸（Costa Blanca）上最具艺术气质与原生魅力的守护者。`} />
                <InfoRow label="建筑特色" value={`层层叠叠的纯白立方体房屋，沿着山丘蔓延至海边，被蜿蜒曲折的鹅卵石小巷串联，簇拥着那座标志性的蓝白瓷砖圆顶教堂。`} />
                <InfoRow label="建筑风格" value={`地中海乡土建筑与摩尔式遗留的融合，以“白墙、红瓦、蓝顶”构成了经典的西班牙海滨小镇风貌。`} />
                <InfoRow label="文化价值" value={`是逃离大规模旅游开发、体验真实西班牙沿海社区生活节奏与艺术灵感的活态样本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区全天开放。核心地标圣母教堂（Iglesia de Nuestra Señora del Consuelo）开放时间较为灵活，通常为上午10点至下午1点，下午5点至晚上8点开放参观。夏季开放时间可能延长，冬季或午休时间可能关闭。小镇上的商店和餐厅有各自的营业时间，许多小店在下午2点至5点间会关门休息。`} />
              <InfoRow label="门票价格" value={`进入阿尔特亚老城区本身完全免费。参观圣母教堂内部免费，但欢迎小额捐赠以支持维护。若登上教堂旁的瞭望台，可能需要支付1-2欧元的象征性费用。小镇内无其他强制性门票。`} />
              <InfoRow label="地址" value={`Plaza de la Iglesia, 1, 03590 Altea, Alicante, Spain`} />
              <InfoRow label="交通方式" value={`从最近的阿利坎特-埃尔切机场出发，最便捷的方式是搭乘出租车或预约接送车，车程约45分钟，费用约50-60欧元。
经济之选是乘坐公共交通：先从机场外的巴士站乘坐C-6巴士前往阿利坎特市中心巴士站（约20分钟），然后换乘前往阿尔特亚的城际巴士（由Subus公司运营，线路如L1、L2、L4等），车程约50-60分钟，班次每小时1-2班，车票可在巴士站购买或上车刷卡。从瓦伦西亚方向也可乘坐火车到卡尔佩站，再转乘短途巴士或出租车前往阿尔特亚（约10分钟车程）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂阿尔特亚的故事，你得先听懂它的名字。这个名字很可能源于阿拉伯语“Al-talia”，意为“健康之地”。早在伊比利亚人和罗马人时期，这里就因俯瞰海湾的优越地势而被占领，但真正为它奠定最初格局的，是公元8世纪登陆伊比利亚半岛的摩尔人。他们在如今老城所在的山顶上，建立了一座坚固的城堡和防御工事，那些狭窄曲折、易于防守的巷弄基因，或许从那时起就刻在了这片土地的肌理里。山下的平原与海岸则被开垦为果园与农田，摩尔人精妙的灌溉技术让这里绿意盎然。那时的阿尔特亚，是地中海复杂棋盘上一个不起眼但坚固的据点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在1244年，基督教王国阿拉贡的军队在海梅一世的率领下，从摩尔人手中收复了这片土地。城堡被拆毁，山顶上开始兴建起基督教的教堂，摩尔式的生活印记逐渐被覆盖，但那种适应地中海气候与地形的建筑智慧——厚重的白墙用来隔热，狭小的窗户用以遮阳，内向的庭院创造私密荫凉——却被深深地保留了下来，演变成了我们今天看到的白色民居的雏形。随后的几个世纪，阿尔特亚一直是一个默默无闻的渔村和农业小镇。渔民清晨驾着小船出海，带回沙丁鱼和章鱼；农民在山坡种植葡萄、橄榄和杏仁。生活围绕着大海与土地缓慢循环，教堂的钟声和海浪的涛声是唯一的背景音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的指针拨到19世纪末20世纪初，一场意想不到的“灾难”悄然改变了小镇的命运。一种席卷欧洲葡萄园的根瘤蚜虫病，摧毁了当地重要的葡萄种植业。许多居民被迫离开土地，转向大海寻求更多生计，渔业得到加强。然而，正是这种传统经济的挫折，也使得阿尔特亚意外地避开了早期工业化的浪潮，它的古朴风貌得以完整封存。与此同时，第一批“外来者”开始被这里的宁静与美丽吸引。他们不是普通的游客，而是诗人、画家、音乐家和知识分子。他们租下便宜的海边小屋，在这里寻找灵感，躲避都市的喧嚣。阿尔特亚的“艺术之魂”由此悄悄点燃。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了20世纪60年代，当西班牙其他海岸线开始被大型酒店和公寓楼“吞噬”时，阿尔特亚的居民和那批早期的艺术家居民，共同形成了一种微妙的共识：拒绝大规模的商业化开发。政府出台了严格的建筑法规，规定所有新建或修缮的房屋外墙必须刷成白色，屋顶保持传统的红瓦。这不是为了取悦游客的明信片美学，而是一种文化自觉的防御工事。于是，我们今天看到的这片令人惊叹的纯白景象，其实是一项非常现代、非常有意识的保护行动的结果。蓝顶教堂也在20世纪经历了重建和装饰，那些美丽的瓷砖圆顶成为小镇最骄傲的符号。如今的阿尔特亚，在旅游与生活之间找到了一个珍贵的平衡点，它既是一个世界闻名的美丽小镇，更是一个西班牙人自己深深热爱并居住着的家园。它的历史，就是一部关于坚守、适应与自我定义的鲜活史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底品味阿尔特亚，强烈建议安排一整天的时间，并在此住上一晚。最佳节奏是“慢”。上午十点前抵达，这时阳光明亮却未至酷热，旅游团大巴尚未涌入，你能独占那些宁静的小巷。用整个上午和午后在老城中漫无目的地迷失，感受光影在白色墙壁上的移动。下午最热的时段，适合在教堂广场的咖啡馆阴凉处坐下，观察本地生活，或者下山到卵石海滩泡个海水澡。傍晚时分再次上山，迎接日落和夜晚华灯初上的魔幻时刻。这样的安排能让你体验到小镇从晨昏到日暮不同侧面的美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适、防滑的平底鞋，对付那些光滑的鹅卵石坡道是头等大事，高跟鞋在这里等同于“刑具”。小镇很多小巷坡度很大，步行是唯一方式，请评估自身体力。尽量避免七八月盛夏的正午在毫无遮阴的小巷长时间行走，容易中暑，随身带足饮用水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下的主停车场（Avenida del Mestre Pere）开始，随意选择一条向上延伸的鹅卵石坡道，把自己交给直觉而非地图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷宫中刻意寻找那些被称为“蓝门”（Puertas Azules）的古老木门，它们往往是艺术家工作室或私宅的入口，门上的蓝色深浅不一，是绝佳的摄影主题。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要用手触摸一下那些洁白墙壁的粗糙质感，那是多层石灰浆刷涂留下的生命痕迹，在阳光下微微发烫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`努力登上小镇至高点教堂广场，先在广场边缘的矮墙边找个位置，静静俯瞰整个海湾和远处卡尔佩的巨岩佩尼翁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣母教堂内部，感受与外部烈日截然相反的幽暗与清凉，抬头凝视装饰繁复的祭坛和从圆顶小窗洒下的神圣光束。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场另一侧的小巷下山，探索那些更为安静的生活区，听听从厨房窗户传出的收音机里播放的西语新闻或弗拉门戈音乐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后沿着海滨长廊（Paseo Marítimo）散步，从海平面的角度回望白色山城，然后在海滩边的 Chiringuito（沙滩酒吧）点一份炸小鱼和啤酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`入夜后再次沿着亮起暖黄色壁灯的小巷上山，看广场在星空下变成温暖的客厅，教堂圆顶在灯光映衬下呈现出与白日不同的神秘蓝色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`海湾全景侧拍点`}</h4>
                  <p className="text-sm text-gray-700">{`从老城东侧外围的 Calle de la Purísima 小巷寻找缺口，傍晚日落前一小时，光线最柔和，能将层叠的白色房屋、蓝色教堂圆顶与波光粼粼的海面一同收入镜框，构图时带入一些三角梅作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`教堂圆顶特写与广场生活`}</h4>
                  <p className="text-sm text-gray-700">{`站在教堂广场西南角的拱门下，利用拱门形成自然画框，上午阳光能照亮教堂正面和圆顶，同时捕捉广场上咖啡馆里的人们，营造故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`经典明信片角度`}</h4>
                  <p className="text-sm text-gray-700">{`位于老城下方港口区的堤坝上，清晨太阳从背后升起时，可以拍到整个阿尔特亚老城在平静海面上的完整倒影，画面纯净而对称。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`光影迷宫小巷`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，当阳光直射进狭窄小巷，会在白墙上投下强烈的明暗分界线和窗格、植物的影子，寻找一条有层次感的Z字形小巷，拍摄黑白或高对比度照片，极具几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`蓝色大门与细节`}</h4>
                  <p className="text-sm text-gray-700">{`不必追求宏大场景，下午散射光时，专注于拍摄那些不同色号的蓝色木门，门上锈蚀的门环、旁边的陶罐或门缝里透出的光，都是充满生活气息的绝佳小品。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄门窗和庭院内部前，请务必征得同意，很多看似公共的小巷其实通往私人住宅天井。无人机飞行在人口密集的老城上空通常被禁止，起飞前务必查清当地法规。最佳光线永远是日出后和日落前一小时的“黄金时刻”，正午光线生硬，但适合拍摄高对比度的结构抽象画面。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由百年老宅改造的精品公寓，拥有原始的石头墙壁和木梁，推开木窗就是教堂广场的钟声，晚上能听到邻居家传来的细微生活声响。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`海景阳台梦幻之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城半山腰的家族式小旅馆，房间不多但每个都带一个面向地中海的私人小露台，早餐会直接送到露台，让你在橘子花香中面对湛蓝大海开始一天。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感成人酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘一座经过彻底现代化改造的建筑内，极简纯白风格与老城呼应，拥有一个可俯瞰全镇的无边泳池，是享受宁静与设计感的完美结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山下便利舒适之选`}</h4>
                  <p className="text-sm text-purple-800">{`港口区附近的现代公寓或酒店式公寓，空间宽敞，停车方便，步行上山仅需十分钟，适合家庭或需要更多便利设施的旅客，晚上可以在海滨享受热闹的餐厅选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿通常需要爬很多台阶才能到达，行李搬运会是挑战，预定前请确认酒店是否提供搬运服务。夏季（6-9月）务必提前数月预订，尤其是周末。选择港口区住宿晚上可能更热闹，有酒吧音乐声；选择老城高处则极致宁静，但出行完全依赖步行。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿尔特亚好些天了，但闭上眼，那片漫山遍野、在阳光下安静燃烧的白色，依然清晰地烙在视网膜上。它不像那些宏伟的纪念碑式景点，用历史的重量压得你喘不过气，也不像某些过度包装的度假村，提供一种悬浮于真实生活之上的真空式享受。阿尔特亚给予的，是一种罕见的“平衡感”。它美得毋庸置疑，足以让任何镜头疯狂，但这美并非与世隔绝的标本。你能看到晾晒在阳台上的彩色床单，闻到飘散的饭菜香，听到主妇在窗口呼喊孩子回家吃饭。它的美，是根植于每一天的、活生生的烟火气之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个全世界都在加速奔向同质化的时代，阿尔特亚像一位从容的智者，选择了一条不同的路。它用一道“所有墙壁必须刷白”的简单法令，守卫了自己的灵魂。这白色，于是成了一种宣言，一种抵抗，一种将日常生活升华成艺术的能力。它告诉我们，深度旅行寻找的，未必是惊天动地的传奇，而恰恰是这种在简单中寻得的丰盛，在宁静中听到的回响。来到阿尔特亚，你不是来“打卡”，而是来学习一种“如何生活”的可能性——如何在面朝大海的风景里，依然专注于门前的一花一木；如何在全世界游客的注视下，依然保持自己从容不迫的日常节奏。这，或许才是这颗“地中海明珠”留给每一位过客，最珍贵的一份行李。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/avila-walls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿维拉古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Walls of Ávila</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jaen-historic-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈恩古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Historic Quarter of Jaén</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/torre-del-oro" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞维利亚黄金塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Torre del Oro</p>
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
