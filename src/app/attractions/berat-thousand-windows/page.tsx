import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '培拉特 Berat｜走进“千窗之城”，在奥斯曼老屋与拜占庭城堡间漫步时光 - 最佳欧洲景点',
  description: '车子沿着奥苏姆河谷行驶，转过一个弯，眼前景象会让你忍不住喊司机停车。河对岸，一整面山坡像被上帝不小心打翻的牛奶盒浸染过，密密麻麻、方方正正的白色房子，从河岸一直堆叠到山顶城堡的脚下，在亚得里亚海耀眼的阳光下，白得晃眼。而真正让这片白色活起来的，是那成千上万扇深色的木格窗——它们整齐又错落地排列着，像...',
}

export default function BeratThousandWindowsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '培拉特（千窗之城）', href: '/attractions/berat-thousand-windows' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">培拉特（千窗之城）・Berat・阿尔巴尼亚・培拉特</h1>
          <p className="text-lg text-gray-600 mb-6">
            车子沿着奥苏姆河谷行驶，转过一个弯，眼前景象会让你忍不住喊司机停车。河对岸，一整面山坡像被上帝不小心打翻的牛奶盒浸染过，密密麻麻、方方正正的白色房子，从河岸一直堆叠到山顶城堡的脚下，在亚得里亚海耀眼的阳光下，白得晃眼。而真正让这片白色活起来的，是那成千上万扇深色的木格窗——它们整齐又错落地排列着，像无数只沉静的眼睛，正一言不发地凝视着你，凝视着流淌了千年的河水。这就是培拉特给你的第一眼，一种近乎失语的震撼。
停好车，走过那座古老的戈里察石桥，吱呀的木板声混着河水哗哗的声响，你就正式进入了“千窗”的迷宫。空气里飘着好闻的味道——新烤的面包香从某扇窗后溢出，混合着木头被太阳晒暖的气味，还有墙角不知名野花的淡淡清香。路是陡峭的，由光滑的鹅卵石铺成，走起来要小心。你会看到窗台上一盆盆开得正艳的天竺葵，看到晾晒在窗外的彩色床单在微风里轻轻摆动，看到老爷爷坐在自家门口，就着一小杯土耳其咖啡，静静地看着巷子里的猫。这里不是一个冰冷的博物馆，而是一个活着的、呼吸着的社区。孩子们抱着足球从你身边跑过，用阿尔巴尼亚语大声嬉笑；主妇从窗口探出身来，和隔壁邻居隔空聊天。每一扇窗后，都是一个真实的家。
爬上某个高处的平台喘息时，回头一望，你才真正理解这座城市的魔法。那些窗户，远看是整齐划一的几何韵律，近看却各有各的性格：有的窗框漆成了天空蓝，有的保持着木头原色；有的挂着精美的蕾丝窗帘，有的则大方地敞开着，任由屋内的生活景象一览无余。它们不仅仅是建筑的构件，更是生活的画框，将日常的烟火气装裱起来，展示给山、给河、给所有仰望它的人。培拉特最动人的魅力，就在于这种宏大的秩序感与细腻的生活感不可思议的结合。它不是为游客搭建的布景，它就是生活本身，坚韧、朴素，又充满诗意地悬挂在时光的斜坡上。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">车子沿着奥苏姆河谷行驶，转过一个弯，眼前景象会让你忍不住喊司机停车。河对岸，一整面山坡像被上帝不小心打翻的牛奶盒浸染过，密密麻麻、方方正正的白色房子，从河岸一直堆叠到山顶城堡的脚下，在亚得里亚海耀眼的阳光下，白得晃眼。而真正让这片白色活起来的，是那成千上万扇深色的木格窗——它们整齐又错落地排列着，像无数只沉静的眼睛，正一言不发地凝视着你，凝视着流淌了千年的河水。这就是培拉特给你的第一眼，一种近乎失语的震撼。</p>
              <p className="text-gray-700 leading-relaxed mb-4">停好车，走过那座古老的戈里察石桥，吱呀的木板声混着河水哗哗的声响，你就正式进入了“千窗”的迷宫。空气里飘着好闻的味道——新烤的面包香从某扇窗后溢出，混合着木头被太阳晒暖的气味，还有墙角不知名野花的淡淡清香。路是陡峭的，由光滑的鹅卵石铺成，走起来要小心。你会看到窗台上一盆盆开得正艳的天竺葵，看到晾晒在窗外的彩色床单在微风里轻轻摆动，看到老爷爷坐在自家门口，就着一小杯土耳其咖啡，静静地看着巷子里的猫。这里不是一个冰冷的博物馆，而是一个活着的、呼吸着的社区。孩子们抱着足球从你身边跑过，用阿尔巴尼亚语大声嬉笑；主妇从窗口探出身来，和隔壁邻居隔空聊天。每一扇窗后，都是一个真实的家。</p>
              <p className="text-gray-700 leading-relaxed mb-4">爬上某个高处的平台喘息时，回头一望，你才真正理解这座城市的魔法。那些窗户，远看是整齐划一的几何韵律，近看却各有各的性格：有的窗框漆成了天空蓝，有的保持着木头原色；有的挂着精美的蕾丝窗帘，有的则大方地敞开着，任由屋内的生活景象一览无余。它们不仅仅是建筑的构件，更是生活的画框，将日常的烟火气装裱起来，展示给山、给河、给所有仰望它的人。培拉特最动人的魅力，就在于这种宏大的秩序感与细腻的生活感不可思议的结合。它不是为游客搭建的布景，它就是生活本身，坚韧、朴素，又充满诗意地悬挂在时光的斜坡上。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="培拉特（千窗之城）" />
                <InfoRow label="英文名称" value="Berat" />
                <InfoRow label="正式名称" value="Berat Castle and Historic Quarters" />
                <InfoRow label="国家" value="阿尔巴尼亚" />
                <InfoRow label="城市" value="培拉特" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="被誉为“阿尔巴尼亚的精神堡垒”，是持续有人居住超过2400年的活态古城，也是联合国教科文组织世界遗产。" />
                <InfoRow label="建筑特色" value="最震撼的特色是奥斯曼时期留下的、依陡峭山势层叠而建的数百栋白色石屋，每一栋都拥有数量众多、朝向一致的方形木格窗，从奥苏姆河对岸望去，宛如一座巨大的、布满眼睛的白色阶梯剧场。" />
                <InfoRow label="建筑风格" value="独特的奥斯曼帝国时期巴尔干民居风格，完美适应山地地形，并与山顶的拜占庭时期城堡防御体系融为一体。" />
                <InfoRow label="文化价值" value="生动展示了阿尔巴尼亚在漫长历史中，基督教与伊斯兰教、东方与西方文化和谐共存、相互交融的独特范例。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="培拉特城堡区域全天24小时开放，但城堡内的博物馆、小教堂等内部景点通常开放时间为夏季（4月-9月）9:00-18:00，冬季（10月-3月）9:00-16:00，周一可能闭馆。建议出发前再次确认具体小景点的开放时间。老城区的街道和公共区域可随时漫步。" />
              <InfoRow label="门票价格" value="进入培拉特城堡区域本身是免费的。但城堡内的部分博物馆和小景点需单独购票，如“Onufri”圣像博物馆门票约700列克（约6欧元），其他小教堂门票通常在200-300列克。学生、儿童及团体通常有优惠。" />
              <InfoRow label="地址" value="Berat Castle, Rruga Mihal Komnena, Berat 5001, Albania" />
              <InfoRow label="交通方式" value="从阿尔巴尼亚首都地拉那的国际机场出发，最方便的方式是租车自驾或乘坐小巴（Furgon）。自驾沿SH4公路南下，路况良好，车程约2小时。如果乘坐小巴，需要先从地拉那机场打车到市区“South and North Bus Terminal”车站，那里有频繁发往培拉特的小巴，车程约2.5-3小时，票价约500列克。小巴没有固定严格时刻表，人满即走，建议预留足够时间。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">培拉特的故事，得从公元前4世纪说起。那时候，伊利里亚人——阿尔巴尼亚人的直系祖先——就看中了这座陡峭的山丘，在此建立据点，称它为“安蒂帕特雷亚”。它的地理位置太重要了，扼守着内陆与海岸之间的通道，谁控制了这里，谁就掌握了这片土地的钥匙。所以，罗马人来了，把它变成了繁荣的城镇；东罗马帝国（拜占庭）接手后，在山巅修筑了宏伟的城堡防御工事，我们今天看到的城堡雏形，主要就来自那个时期。那时候，它有了一个新名字——“贝里格勒”，意思是“城堡之城”。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但真正让培拉特拥有今天这副“面孔”的，是奥斯曼土耳其人的到来。15世纪中叶，奥斯曼帝国征服了这里。与许多地方的血腥镇压不同，奥斯曼统治者在这里实行了相对宽容的宗教政策。他们并没有拆毁山上的基督教教堂，而是在山脚下、河流沿岸，为迁入的穆斯林居民兴建新的居住区。于是，一种独特的建筑模式诞生了：为了在陡峭的山坡上获得最大的居住空间和采光，同时遵守社区规划，建筑师们设计出了这种拥有多个楼层、每一层都带有一排巨大方形窗户的白色石屋。房子紧贴着山坡垂直向上生长，你家的屋顶，可能就是我家的庭院。这种建筑不仅解决了地形问题，还形成了一种令人惊叹的集体美学——当几百栋这样的房子聚集在一起，面向河流和阳光展开时，“千窗之城”的传奇便诞生了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">几个世纪里，培拉特成了一个罕见的和谐共存之地。山顶城堡围墙内，生活着基督徒，他们守护着古老的拜占庭教堂，其中一些教堂里保存着阿尔巴尼亚国宝级圣像画家Onufri的杰作，他用一种独特的红色颜料描绘圣徒，至今鲜艳夺目。而山腰和山脚下，则是穆斯林社区，矗立着精致的清真寺。他们共用同一套供水系统，在同一条石板路上交易，庆祝彼此的重大节日。这种和谐的“平行社区”模式，让培拉特成为了巴尔干地区多元文化融合的灯塔。</p>
              <p className="text-gray-700 leading-relaxed mb-4">当然，历史并非总是宁静的画卷。二十世纪，阿尔巴尼亚经历了法西斯占领、漫长的共产主义孤立时期。培拉特变得封闭而沉默，那些美丽的窗户后面，是外人难以窥探的生活。幸运的是，由于将其视为重要的文化遗产，即便在那个年代，大规模的破坏也得以避免。当阿尔巴尼亚在90年代初重新向世界敞开大门时，培拉特就像一位沉睡良久的美人，虽然衣衫略显陈旧，但风骨犹存，惊鸿一瞥便再次征服了世人。联合国教科文组织在2005年将其列为世界遗产，不仅因为其建筑，更因为它所代表的“共存精神”。</p>
              <p className="text-gray-700 leading-relaxed mb-4">今天，你漫步在老城里，依然能清晰地读到这些历史层次：山顶是粗粝的拜占庭城墙和宁静的小教堂；山腰是奥斯曼时期如迷宫般的石屋小巷，窗台上花儿盛开；山脚下，则有了些现代生活的气息。培拉特没有在时光中凝固，它只是把每一段历史都小心翼翼地叠放起来，像一本可以漫步其中的立体史书，每一扇窗，都是书页的一角。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要完美体验培拉特，建议安排整整一天时间。最佳节奏是“从上到下，从静到闹”。清晨（8点左右）出发，趁阳光还温柔、大批一日游游客尚未抵达时，直接上城堡。在城堡里慢慢探索2-3小时，感受历史的宁静和俯瞰全城的壮丽。中午下山，在城堡山脚下的曼加莱姆区找一家传统餐馆享用午餐。下午的时光全部交给老城区，从曼加莱姆区开始，沿着蜿蜒的小路向下，穿过戈里察石桥，探索对岸的戈里察区，感受最原汁原味的奥斯曼街巷生活。傍晚时分，在奥苏姆河边找一家咖啡馆坐下，看着夕阳将“千窗”染成金色，等待灯光一点点亮起。这样的安排避开了最热的正午爬山，也抓住了晨昏最美的光线。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>一定要穿一双绝对舒适防滑的鞋子，城堡内和古城的所有路都是光滑的鹅卵石或石板斜坡。当地很多散养的狗，都很温和，但请勿随意逗弄或表现出恐惧。随身带一瓶水，古城里的小商店不多，且爬山很容易口渴。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">清晨从山脚的“征服者之门”开始，沿着古老的之字形步道缓缓向上，感受石阶被岁月打磨出的光滑质感，聆听鸟鸣和自己逐渐加重的呼吸声。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过厚重的城堡主城门，仿佛穿越时空，迎面而来是一片开阔的“城中城”，里面有民居、小巷、废墟和教堂，宁静得能听见风吹过野草的声音。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要找到那座不起眼的“神圣三一教堂”，推开厚重的木门，里面是Onufri绘制的华丽圣像壁，在烛光中闪烁着宝石般的光芒。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在城堡最西侧的城墙边找一个缺口倚靠，眼前是毫无遮挡的360度全景，脚下的千窗之城、如绿丝带般的奥苏姆河、以及远方连绵的群山尽收眼底。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">下山后钻进曼加莱姆区迷宫般的巷子，放任自己迷路，去邂逅那些爬满藤蔓的院墙、虚掩的古老木门和坐在门口对你微笑的老人。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走过吱呀作响的戈里察老石桥，到河对岸回望，你会获得那张最经典的“千窗之城”明信片视角，此时光线正好。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在河岸边的“传统餐馆”点一份用陶罐慢炖的“塔夫”羊肉和一份当地特色烤饼，就着冰镇的白葡萄酒，看桥上的行人来来往往。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">日落前，爬到戈里察区半山腰的一个家庭咖啡馆露台，点一杯土耳其咖啡，看着夕阳如何一寸寸地将对面白色的房屋染成蜜糖色，再变成深邃的蓝。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡西侧城墙缺口全景位</h4>
                  <p className="text-sm text-gray-700">日落前一到两小时，光线最为柔和金黄，用广角镜头可以同时捕捉到城堡残垣、山下层层叠叠的白屋和蜿蜒的河流，构图时可将残墙作为前景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 戈里察老石桥中段</h4>
                  <p className="text-sm text-gray-700">清晨太阳刚从城堡后方升起时，顺光拍摄对岸曼加莱姆区密密麻麻的“千窗”立面，此时空气通透，房屋的白色和窗户的深色对比最鲜明。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 奥苏姆河南岸公路边</h4>
                  <p className="text-sm text-gray-700">利用长焦镜头压缩空间，聚焦于某一片窗户排列极具韵律感的房屋群落，等待一扇窗户后出现居民的身影或飘动的窗帘，为静态画面注入生命。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 曼加莱姆区内部小巷仰拍</h4>
                  <p className="text-sm text-gray-700">下午时分，阳光斜射入狭窄的巷子，站在低处仰拍被两边高耸白墙框出的蓝天，以及那些错落有致的窗户和阳台，形成强烈的几何构图。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 从戈里察区某家咖啡馆露台拍摄夜景</h4>
                  <p className="text-sm text-gray-700">日落后天空呈蓝调时刻，对面城堡和山屋的灯光星星点点亮起，用三脚架长曝光，能拍出静谧而温暖的“星空之城”效果。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄居民和他们的窗户时，请务必保持尊重和距离，最好使用长焦镜头，避免直接怼脸或侵入私人空间。许多阿尔巴尼亚老人不习惯被拍，一个微笑和手势询问是基本的礼貌。当地人对游客普遍友好，但未经允许拍摄室内或特定人物可能会引起不快。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城心脏里的石头小屋</h4>
                  <p className="text-sm text-blue-800">选择曼加莱姆区一栋经过精心修复的奥斯曼老宅改造的客栈，睡在古老的木梁下，清晨被邻家烤面包的香味和教堂钟声唤醒。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">城堡内的独家体验</h4>
                  <p className="text-sm text-green-800">极少数的民宿位于城堡围墙之内，拥有无与伦比的静谧和历史感，夜晚游客散去后，整个城堡仿佛只属于你，可以独享星空下的千年废墟。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">奥苏姆河畔的设计酒店</h4>
                  <p className="text-sm text-yellow-800">喜欢现代舒适与古老景观结合，可以选择河岸边的精品酒店，房间带有一个可以直面“千窗之城”全景的阳台，在私密空间里欣赏晨昏光影秀。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">戈里察区的家庭旅馆</h4>
                  <p className="text-sm text-purple-800">住在河对岸的宁静社区，由热情的家庭经营，主人可能会邀请你共饮一杯自家酿的拉基酒，并提供最地道的旅行建议，深入体验当地生活。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（6-9月）建议提前数周预订，尤其是城堡内和河景房非常抢手。老城内的住宿大多需要步行一段石板路才能到达，行李过多会是个挑战。阿尔巴尼亚的住宿性价比极高，可以用中端价格享受到很有特色的体验。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开培拉特好多天了，闭上眼睛，那片白色的山城和无数双沉静的眼睛般的窗户，依然清晰地浮现在脑海。它给我的触动，远不止于视觉的奇观。在当今这个常常以墙壁和隔阂定义世界的地方，培拉特像是一个来自过去的、温柔的提醒。它告诉我们，不同的信仰、不同的民族、不同的生活形态，是可以像这些房子一样，虽然各自独立，却紧紧依偎，共同构成一幅和谐而壮丽的图景。这种“和而不同”的智慧，就写在那每一扇窗棂、每一块石头里。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这里没有浮躁的商业气息，没有刻意营造的浪漫。有的只是生活本身笨拙而坚韧的重量——老人蹒跚的脚步，孩童纯真的笑声，主妇在公共水渠边洗衣的闲聊。它让你慢下来，让你觉得，旅行不是去征服另一个景点，而是去轻轻地走进别人的生活场景里，做一会儿安静的旁观者。培拉特，这座时光斜坡上的城市，它教会我的，或许就是一种“凝视”的能力：凝视历史如何沉淀为风景，凝视日常如何升华为艺术，凝视差异如何融合为美。它值得你穿越山海而来，不只为了拍下一张照片，更为了让那双“千窗之眼”，也深深地，看一眼你内心的风景。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
