import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普罗万中世纪古城 Provins｜穿越回香槟集市鼎盛时代的中世纪活化石 - 最佳欧洲景点',
  description: '当你把车停在城墙外的停车场，或者从火车站那条略有坡度的路慢慢走上来，第一眼看到普罗万那连绵的、带着赭石色斑驳的城墙时，时间感会瞬间错乱。那不是修复得崭新的仿古墙，而是真的被风雨和岁月啃噬过的石头，缝隙里长着倔强的野草。穿过圣让门，脚下的鹅卵石路被几百年的脚步磨得光滑锃亮，在午后的阳光下泛着温润的光泽...',
}

export default function ProvinsMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '普罗万中世纪古城', href: '/attractions/provins-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普罗万中世纪古城・Provins・法国・普罗万`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你把车停在城墙外的停车场，或者从火车站那条略有坡度的路慢慢走上来，第一眼看到普罗万那连绵的、带着赭石色斑驳的城墙时，时间感会瞬间错乱。那不是修复得崭新的仿古墙，而是真的被风雨和岁月啃噬过的石头，缝隙里长着倔强的野草。穿过圣让门，脚下的鹅卵石路被几百年的脚步磨得光滑锃亮，在午后的阳光下泛着温润的光泽。空气里有股特别的味道，是石头晒热后散发出的尘土气，混杂着从某户人家窗台飘出的咖啡香，还有远处草坪刚被修剪过的青草味。
这里不像一些热门古城那样充斥着纯粹的游客喧嚣。你会看到当地的老太太挎着篮子不紧不慢地买菜，面包店门口排着队的人们低声闲聊，孩子们在倾斜的小广场上追鸽子。古城是活着的，是他们的客厅和后院。那种感觉非常奇妙——你不是闯入了一个博物馆式的标本，而是轻轻地踏进了一个依然按照自己舒缓节奏呼吸的古老生命体。耳边没有汽车鸣笛，只有脚步声、风声，偶尔从高塔传来几声悠远的钟鸣，或是夏日里鹰猎表演时苍鹰划破长空的唳叫。
最打动人的，或许是那种“完整性”。你不是来看一座孤零零的教堂或城堡，而是进入了一整套完整的中世纪城市系统。高大的城墙定义了边界，蜿蜒的街道自然地将你引向市集广场，宏伟的教堂和威严的领主塔楼占据着制高点，而地下，则隐藏着那个时代的经济命脉——巨大的储藏室和秘密通道。走在其中，你几乎能脑补出身穿粗布衣的羊毛商、牵着骆驼的东方客商、以及喧嚣的货币兑换人，如何在同一个广场上讨价还价。这里的核心魅力，就是这种沉浸式的时空穿越感，它不靠声光电，全靠保存完好的实物和空间，以及你漫步其间的想象力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你把车停在城墙外的停车场，或者从火车站那条略有坡度的路慢慢走上来，第一眼看到普罗万那连绵的、带着赭石色斑驳的城墙时，时间感会瞬间错乱。那不是修复得崭新的仿古墙，而是真的被风雨和岁月啃噬过的石头，缝隙里长着倔强的野草。穿过圣让门，脚下的鹅卵石路被几百年的脚步磨得光滑锃亮，在午后的阳光下泛着温润的光泽。空气里有股特别的味道，是石头晒热后散发出的尘土气，混杂着从某户人家窗台飘出的咖啡香，还有远处草坪刚被修剪过的青草味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不像一些热门古城那样充斥着纯粹的游客喧嚣。你会看到当地的老太太挎着篮子不紧不慢地买菜，面包店门口排着队的人们低声闲聊，孩子们在倾斜的小广场上追鸽子。古城是活着的，是他们的客厅和后院。那种感觉非常奇妙——你不是闯入了一个博物馆式的标本，而是轻轻地踏进了一个依然按照自己舒缓节奏呼吸的古老生命体。耳边没有汽车鸣笛，只有脚步声、风声，偶尔从高塔传来几声悠远的钟鸣，或是夏日里鹰猎表演时苍鹰划破长空的唳叫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那种“完整性”。你不是来看一座孤零零的教堂或城堡，而是进入了一整套完整的中世纪城市系统。高大的城墙定义了边界，蜿蜒的街道自然地将你引向市集广场，宏伟的教堂和威严的领主塔楼占据着制高点，而地下，则隐藏着那个时代的经济命脉——巨大的储藏室和秘密通道。走在其中，你几乎能脑补出身穿粗布衣的羊毛商、牵着骆驼的东方客商、以及喧嚣的货币兑换人，如何在同一个广场上讨价还价。这里的核心魅力，就是这种沉浸式的时空穿越感，它不靠声光电，全靠保存完好的实物和空间，以及你漫步其间的想象力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普罗万中世纪古城`} />
                <InfoRow label="英文名称" value={`Provins`} />
                <InfoRow label="正式名称" value={`Provins, Ville Médiévale`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`普罗万`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪欧洲最重要的香槟集市举办地之一，见证了12-13世纪西欧商业与文化的辉煌交流。`} />
                <InfoRow label="建筑特色" value={`完整保存了长达1.2公里的中世纪城墙、地下粮仓与通道系统、以及作为城市权力象征的巨型塔楼。`} />
                <InfoRow label="建筑风格" value={`以罗曼式与早期哥特式军事及民用建筑为主体，展现出中世纪防御性城市的典型布局与风貌。`} />
                <InfoRow label="文化价值" value={`一座被时光“冻结”的中世纪城市，其城市肌理、建筑遗产和每年再现的节庆活动，共同构成了理解中世纪西欧市民生活与远程贸易的活态教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身为开放式区域，全年24小时可进入。主要收费景点（如凯撒塔、蒂博伯爵塔、城墙、地下通道等）开放时间通常为每年4月至9月：上午10:00至下午6:30；10月至次年3月：上午10:00至下午5:30。每周二、部分法国公共假日（如1月1日、5月1日、12月25日）及1月整月可能关闭维护。建议行前务必在官网核实具体日期。`} />
              <InfoRow label="门票价格" value={`推荐购买“普罗万通行证”，包含所有主要景点（凯撒塔、城墙、地下通道、蒂博伯爵塔等），成人票价约14.5欧元。也有单个景点的门票，如仅参观凯撒塔约7.5欧元。优惠票价适用于学生、儿童及团体。每年6月至9月，会有额外的中世纪主题表演，观看表演需单独购票或购买包含表演的套票。`} />
              <InfoRow label="地址" value={`Rue des Remparts, 77160 Provins, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最为便捷。在巴黎东站（Gare de l‘Est）乘坐开往普罗万（Provins）的P线郊区火车（Transilien），车程约1小时20分钟。工作日班次较多，约每小时一班，周末及节假日班次会减少，务必提前在SNCF官网或车站查看时刻表。抵达普罗万火车站后，古城核心区就在步行约15-20分钟的上坡路上，沿途有清晰标识。自驾从巴黎出发约1.5小时，古城外围有多个收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`普罗万的命运，与一条看不见的经济动脉紧紧捆绑在一起——那就是闻名遐迩的香槟集市。要说清楚普罗万的崛起，就得先聊聊12世纪的欧洲。那时候，北欧的佛兰德斯需要意大利的丝绸和香料，而南欧的商人渴望佛兰德斯的呢绒和北方的皮毛。位于法国北部的香槟地区，正好是南北商路交汇的十字路口。而普罗万，凭借其易守难攻的地形和当地领主——香槟伯爵的强力保护，成为了这个庞大贸易网络中最闪亮的明珠之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下每年集市开张时的盛况吧。来自整个已知世界的商旅汇聚于此：佛罗伦萨的银行家、热那亚的船主、德国的矿工、英国的羊毛商、甚至遥远大马士革的丝绸和香料贩子。整个城市瞬间变成了一座巨大的、喧闹的、多语言的国际营地。上城（Ville Haute）的广场上，支起了连绵的帐篷和摊位，呢绒、皮革、金银器、东方奇珍堆积如山。空气中弥漫着牲畜、香料、皮革和人群混杂的浓烈气味。交易不仅仅是用钱，复杂的信贷体系和汇票在这里成熟发展。可以说，普罗万是那个时代的“华尔街”兼“世博会”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这一切繁荣的基石，是强大的蒂博家族，即香槟伯爵们。他们不仅提供武装保护，确保集市安全，还制定了详尽的“集市法”，建立了公平的仲裁体系。我们今天看到的宏伟遗迹，大多是他们的手笔。那座敦实厚重的凯撒塔，并非罗马人所建，而是13世纪初的伯爵为了彰显权威而修筑的瞭望塔和可能的国库。长达1.2公里的城墙，也是在那个黄金时代修建起来的，它既是为了防御外敌，也像是给这座“经济发动机”套上了一个坚固的外壳，宣告着这里的财富与重要。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，所有的盛宴都有散场之时。13世纪末，随着海上贸易路线的开辟和法国王室中央集权的加强，香槟集市逐渐衰落。更重要的是，连年的战争和黑死病的打击，让欧洲的经济格局天翻地覆。普罗万慢慢褪去了国际商业中心的华服，变成了一座安静的区域性城镇。或许正是这种“被遗忘”，反而成了它最大的幸运。因为没有经历后来大规模的工业化改造和战争摧毁，中世纪的骨骼被奇迹般地保存了下来。那些为集市而建的大型地下仓库（名为“低地”），后来被蘑菇种植户利用，阴差阳错地避免了被填埋的命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，当我们今天漫步普罗万，我们看到的不是断壁残垣，而是一个功能齐全的中世纪城市“琥珀”。2001年，联合国教科文组织将其列入世界遗产名录，理由是“它见证了西欧大陆早期贸易集市的雏形，以及由此催生的国际金融、商业管理系统的诞生”。它不再喧嚣，但石头的每一道纹理里，都凝固着那段让欧洲心跳加速的贸易史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受普罗万的精髓，建议安排整整一天时间。最佳方式是清晨从巴黎出发，赶在上午10点左右抵达，这时旅行团大军还未到来，晨光给石头镀上金边，古城最为宁静。游览节奏宜慢不宜快，核心是体验“上城”的完整格局。建议的路线是一个环线：从圣让门进入上城，先登高俯瞰建立宏观印象，再深入地下探索隐秘角落，最后在城墙漫步中回味。整体耗时约6-8小时，包括午餐和闲坐发呆的时间。下午时分，光线最适合拍摄城墙和街景，傍晚则是感受古城本地生活气息的黄金时段。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适的步行鞋，这里的鹅卵石路和上下坡对脚踝是真正的考验。许多地下景点内部阴冷潮湿，即便夏天也建议带一件薄外套。如果时间有限，务必购买“通行证”并优先参观凯撒塔、城墙和地下通道，这是理解普罗万城市逻辑的三把钥匙。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过圣让门后别急着往里冲，先在门洞内的阴影里站一会儿，触摸一下冰凉粗糙的墙砖，感受内外世界的温差与气氛转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向城市最高处的凯撒塔，买票登上塔顶，在猎猎风声中360度俯瞰整个普罗万：红色屋顶的海洋、蜿蜒的城墙、以及远处无垠的香槟平原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔上下来，漫步到仅一街之隔的圣基利亚斯 collegiate church，不要只盯着彩窗，找一张长椅坐下，静静听一会儿管风琴的试音或唱诗班的排练。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拿着通行证去探索那迷宫般的“低地”地下通道，在导游的解说中，借着昏黄的灯光想象这里堆满粮食、布匹和中世纪宝藏的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地下重返人间，沿着主街溜达到蒂博伯爵塔脚下，仰望这座曾是领主权力中心的堡垒，感受它与凯撒塔一东一西的威严对峙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花上一个小时，慢悠悠地徒步走一段保存最完好的南侧城墙，从垛口窥探城外的田园风光和城内的庭院生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市集广场旁的咖啡馆或小餐馆找个露天座位，点一份当地特色的玫瑰味甜品（普罗万以玫瑰种植闻名），看着广场上的鸽子起起落落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，随意钻进一条偏离主街的斜坡小巷，那里几乎没有游客，只有居民窗台上的天竺葵和门缝里飘出的晚餐香气，这是古城最真实的呼吸。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣让门外侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，从护城河草坪的位置向上拍摄，能捕捉到城门塔楼与背后连绵城墙的雄伟剪影，构图时纳入一些绿树前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`凯撒塔顶环形长廊`}</h4>
                  <p className="text-sm text-gray-700">{`利用塔顶石柱作为天然框架，拍摄下方圣基利亚斯教堂的哥特式后殿和成片的红瓦屋顶，光线在清晨或傍晚最为柔和立体。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地下通道入口的光影`}</h4>
                  <p className="text-sm text-gray-700">{`参加地下导览时，在进入主要洞穴的阶梯处，等待一束自然光从头顶的通风口射入，照亮古老的石阶和参观者的轮廓，拍出神秘的光影戏剧。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙徒步中段`}</h4>
                  <p className="text-sm text-gray-700">{`在南侧城墙的某个豁口处，将镜头对准城墙内的一处私家花园或宁静街道，让古老的石墙作为前景，营造“窥见”中世纪日常生活的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`市集广场咖啡馆视角`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，坐在广场边，用长焦镜头捕捉远处凯撒塔在暖黄色灯光下逐渐亮起的瞬间，前景是咖啡馆热闹的露天座，形成古今交融的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机在普罗万上空拍摄需要特别许可，且古城上空常有鹰猎表演的飞鸟，非常危险，不建议飞行。拍摄居民和他们的房屋时请务必保持尊重，微笑示意或最好征得同意。室内及地下景点通常禁止使用闪光灯和三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城中心石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由13世纪石材房屋改造的民宿，厚重的墙壁让夏夜格外清凉，早晨被透过小方格窗的阳光和附近面包店的香味唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城墙脚下的花园酒店`}</h4>
                  <p className="text-sm text-green-800">{`一家由老宅改建的小型精品酒店，房间环绕着一个静谧的 inner courtyard，晚上可以坐在花园里，看着被灯光点亮的城墙底座。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`郊外乡村庄园体验`}</h4>
                  <p className="text-sm text-yellow-800">{`如果自驾，可以选择古城几公里外的一座17世纪庄园改造的酒店，享受宽阔的田园视野、泳池和真正的法式大早餐，开车进城只需五分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济实用的城门旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`对于预算有限的旅行者，位于圣让门附近的一家家庭式旅馆是不错的选择，房间干净简洁，老板会热情地给你手绘古城美食地图。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量有限且非常抢手，尤其是夏季和周末，务必提前数月预订。住在城内固然方便，但夜间非常安静，几乎没有夜生活。如果选择城外住宿，请确认是否有便利的停车位或接送服务。普罗万整体治安很好，夜晚独行也很安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开普罗万的时候，我的背包里没有多出什么纪念品，但脑海里却仿佛装下了一整个鲜活的时代。那种感觉很奇怪，你不是带着参观完毕的满足感离开，而是带着一种淡淡的、类似于乡愁的眷恋。眷恋那种由石头、阳光和缓慢节奏构成的确定性，眷恋那个在想象中 reconstructed 的、充满冒险与机遇的集市日。这座城市没有试图讨好你，它只是坦然地将自己的每一道皱纹、每一块伤疤都展示给你看，让你自己去解读和感受。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都在飞速数字化、虚拟化的时代，普罗万的存在像一个坚定的锚点。它提醒我们，有一些价值无法被加速——比如石头的风化，比如一条街道名字背后承载的千年记忆，比如一个社区在古老空间里延续的日常。它不仅仅是一处“景点”，更是一个关于时间、关于留存、关于人类社群如何与历史遗产共存的深沉思考。每一位热爱深度游的旅人都该来这里，不是为了打卡，而是为了体验一次真正的“时间旅行”，并在离开时，带走一点点中世纪的耐心，来应对我们过于喧嚣的当下。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/beauvais-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博韦大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beauvais Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/saint-emilion" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣埃米利翁古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Saint-Émilion</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-pontivy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蓬
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蓬蒂维城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Pontivy</p>
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
