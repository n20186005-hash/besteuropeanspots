import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特雷比涅老城 Trebinje Old Town｜沉静于时光之河，探访波黑最温柔边城的奥斯曼灵魂 - 最佳欧洲景点',
  description: '穿过那座低矮的、被岁月染成蜜糖色的石拱门，你就一脚踏进了另一个时间的维度。声音先于景象包裹了你——不是喧嚣，而是一种被柔化了的背景音：咖啡馆外瓷杯轻碰的脆响，悬铃木巨大叶片在亚得里亚海微风中的沙沙声，以及，那无处不在的、潺潺的流水声。特雷比什尼察河，这条翡翠般的丝带，就这么毫无预兆地在你眼前铺开，将...',
}

export default function TrebinjeOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '波黑', href: '/destinations/bosnia-and-herzegovina' },
            { label: '特雷比涅老城', href: '/attractions/trebinje-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特雷比涅老城・Trebinje Old Town・波黑・特雷比涅`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过那座低矮的、被岁月染成蜜糖色的石拱门，你就一脚踏进了另一个时间的维度。声音先于景象包裹了你——不是喧嚣，而是一种被柔化了的背景音：咖啡馆外瓷杯轻碰的脆响，悬铃木巨大叶片在亚得里亚海微风中的沙沙声，以及，那无处不在的、潺潺的流水声。特雷比什尼察河，这条翡翠般的丝带，就这么毫无预兆地在你眼前铺开，将整个老城一分为二，又用几座古老的石桥温柔地缝合。空气里飘着混合的香气：刚烘焙好的波斯尼亚咖啡那浓郁焦苦的香味，从河边餐厅飘来的烤鱼和蔬菜炖肉的暖香，还有石墙缝隙里野生薄荷清凉的气息。
这里的时光仿佛是黏稠而缓慢的。老人们坐在河畔的长椅上，一坐就是一个下午，他们沉默地看着河水，或者进行着一盘似乎永远下不完的象棋。孩子们光着脚丫在浅浅的河滩边嬉戏，笑声清脆地撞在古老的石墙上又弹回来。你脚下的石板路被几个世纪的脚步打磨得光滑如镜，在午后斜阳下泛起温润的光泽。这不是一个被圈养起来的“景区”，而是一个仍然在从容呼吸的、活生生的社区。晾晒的床单在奥斯曼风格住宅的木制凸窗（称为“卡皮亚”）外飘扬，阳台上摆满了天竺葵，每一扇门后都是一个绵延了数百年的家族故事。
最打动人心的，是那种深植于日常的、毫不张扬的和谐。河的这边，矗立着奥斯曼时代留下的公共饮水泉（Sebilj），其木制顶棚精巧优雅；仅仅几步之遥，一座塞尔维亚东正教教堂的圆顶在阳光下闪烁金光。穆斯林老者在咖啡馆里抽着水烟，隔壁桌的年轻人可能是东正教徒，他们聊着足球，分享同一壶茶。这种平静的共处，在特雷比涅是如此自然，仿佛本该如此。它没有大声宣扬自己的历史，只是将它泡在一杯浓浓的咖啡里，砌在每一块石头中，流淌在永不疲倦的河水里，等待懂得慢下来的人，细细品味。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那座低矮的、被岁月染成蜜糖色的石拱门，你就一脚踏进了另一个时间的维度。声音先于景象包裹了你——不是喧嚣，而是一种被柔化了的背景音：咖啡馆外瓷杯轻碰的脆响，悬铃木巨大叶片在亚得里亚海微风中的沙沙声，以及，那无处不在的、潺潺的流水声。特雷比什尼察河，这条翡翠般的丝带，就这么毫无预兆地在你眼前铺开，将整个老城一分为二，又用几座古老的石桥温柔地缝合。空气里飘着混合的香气：刚烘焙好的波斯尼亚咖啡那浓郁焦苦的香味，从河边餐厅飘来的烤鱼和蔬菜炖肉的暖香，还有石墙缝隙里野生薄荷清凉的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的时光仿佛是黏稠而缓慢的。老人们坐在河畔的长椅上，一坐就是一个下午，他们沉默地看着河水，或者进行着一盘似乎永远下不完的象棋。孩子们光着脚丫在浅浅的河滩边嬉戏，笑声清脆地撞在古老的石墙上又弹回来。你脚下的石板路被几个世纪的脚步打磨得光滑如镜，在午后斜阳下泛起温润的光泽。这不是一个被圈养起来的“景区”，而是一个仍然在从容呼吸的、活生生的社区。晾晒的床单在奥斯曼风格住宅的木制凸窗（称为“卡皮亚”）外飘扬，阳台上摆满了天竺葵，每一扇门后都是一个绵延了数百年的家族故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种深植于日常的、毫不张扬的和谐。河的这边，矗立着奥斯曼时代留下的公共饮水泉（Sebilj），其木制顶棚精巧优雅；仅仅几步之遥，一座塞尔维亚东正教教堂的圆顶在阳光下闪烁金光。穆斯林老者在咖啡馆里抽着水烟，隔壁桌的年轻人可能是东正教徒，他们聊着足球，分享同一壶茶。这种平静的共处，在特雷比涅是如此自然，仿佛本该如此。它没有大声宣扬自己的历史，只是将它泡在一杯浓浓的咖啡里，砌在每一块石头中，流淌在永不疲倦的河水里，等待懂得慢下来的人，细细品味。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特雷比涅老城`} />
                <InfoRow label="英文名称" value={`Trebinje Old Town`} />
                <InfoRow label="正式名称" value={`Trebinje Old Town`} />
                <InfoRow label="国家" value={`波黑`} />
                <InfoRow label="城市" value={`特雷比涅`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在奥斯曼帝国与奥匈帝国文明的夹缝中，宁静生长了五个多世纪的边城，是黑塞哥维那地区保存最完好的奥斯曼时期城镇之一。`} />
                <InfoRow label="建筑特色" value={`以特雷比什尼察河为生命线，完美融合了奥斯曼东方风格的石灰岩建筑、精致的石桥与葱郁的悬铃木，构成一幅“水、石、绿”和谐共生的诗意画卷。`} />
                <InfoRow label="建筑风格" value={`以奥斯曼巴尔干风格为主，辅以后期奥匈帝国时期引入的折衷主义与塞尔维亚东正教建筑元素，形成独特的文化层叠景观。`} />
                <InfoRow label="文化价值" value={`是波斯尼亚和黑塞哥维那多元文化平和共存的活态见证，在这里，东正教堂的钟声与清真寺的唤礼声在同一个山谷里回响，诠释着真正的巴尔干精神。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城街道与公共区域全天24小时开放。老城内部分小博物馆、艺术画廊等开放时间不固定，通常为周一至周五上午9点至下午5点，夏季（5月至9月）可能延长至晚上7点。奥斯曼时期的公共饮水泉（Sebilj）和大部分咖啡馆、商铺通常在上午8点左右开始营业，直至深夜。建议在旅游信息中心确认具体景点当日的开放安排。`} />
              <InfoRow label="门票价格" value={`进入特雷比涅老城本身完全免费。老城内部分由私人经营的微型博物馆或历史建筑（如一些老宅改造的艺廊）可能收取象征性的门票，价格通常在2-5波黑马克（约合1-2.5欧元）之间。城内最主要的景点——特雷比什尼察河畔的步行区和奥斯曼古桥均无需门票。`} />
              <InfoRow label="地址" value={`Stari Grad, Trebinje, Bosnia and Herzegovina`} />
              <InfoRow label="交通方式" value={`最近的国际机场是克罗地亚杜布罗夫尼克机场（DBV），距离特雷比涅约40公里。从机场出发，最方便的方式是提前预订接驳车或租车自驾，车程约45分钟至1小时，沿途是壮丽的达尔马提亚海岸线和山景。也可先乘坐机场大巴到杜布罗夫尼克主巴士站，再换乘前往特雷比涅的跨境巴士，班次每日约4-6班，车程约1.5小时，需在边境准备护照。若从波黑首都萨拉热窝出发，可乘坐长途巴士，车程约5-6小时，沿途风光如画。老城面积不大，所有精华景点均可步行轻松抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特雷比涅的故事，就像流过它的特雷比什尼察河，表面平静，深处却暗流涌动。早在罗马时代，这里就是一条重要的贸易通道上的驿站，但真正赋予它灵魂的，是奥斯曼土耳其人的到来。大约在15世纪后期，奥斯曼帝国征服了这片土地，他们看中了这里肥沃的河谷和战略位置，开始兴建带有鲜明东方特色的城镇。工匠们用当地开采的乳白色石灰岩，建造起低矮但坚固的住宅，带有内庭院和封闭的阳台，以确保家庭的私密性——这是伊斯兰建筑的典型思维。那座美丽的石拱桥，阿尔斯兰贝格桥，传说就是在16世纪由一位奥斯曼贵族出资修建，它不仅连接两岸，更连接了不同的社群与经济生活，桥下的水磨坊日夜不息，滋养着整个城镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，特雷比涅并非一直平静。它地处帝国边缘，是奥斯曼势力与威尼斯共和国、以及后来的奥匈帝国反复争夺的前线。城墙一次次被加固，又一次次在战火中损毁。但有趣的是，每次征服者带来新的文化印记，都没有完全抹去旧的。当奥匈帝国在19世纪末接管波黑后，他们带来了中欧的规划理念和折衷主义建筑风格。你会看到一些建筑悄然发生了变化：窗户变得更大，引入了彩绘玻璃和装饰性的灰泥，但建筑的基调和石材依旧。这种“层叠”而非“覆盖”，成了特雷比涅建筑美学的核心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪的风暴席卷了整个巴尔干，特雷比涅也未能幸免。两次世界大战的阴影，以及上世纪九十年代那场惨烈的波黑战争，都在它身上留下了伤痕。一些古老的建筑被炮火损坏，一些家庭被迫流离失所。但特雷比涅人似乎从他们的石头和河流中继承了某种坚韧。战争结束后，人们没有急于用崭新的现代建筑取代一切，而是小心翼翼地、一块石头一块石头地修复他们的老城。这个过程缓慢而艰难，却充满了尊严。他们修复的不仅是房子，更是共同记忆和身份认同的锚点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你漫步在老城，你看到的是一部立体的、石质的历史教科书。那栋有着精美木雕阳台的房子，可能底层是奥斯曼时期的石砌结构，而上层是奥匈时期扩建的木板墙。那座东正教堂，其钟楼可能建于相对和平的十九世纪。而河边新开的艺术工作室，则象征着年轻一代试图用当代语言与古老传统对话。特雷比涅没有在历史的激流中试图成为一块顽石，而是选择成为一株水草，随着水流摆动，却将根须深深地扎在河床的泥土里，吸收每一个时代的养分，最终长成了自己独一无二的模样。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受特雷比涅老城的精髓，请务必给它完整的一天。建议在上午九点左右抵达，此时阳光正好洒满河面，本地人开始一天的生活，游客尚未涌入，是最佳的探索时刻。整体的节奏应该是“慢”。你可以先沿着河流由东向西漫步，建立整体的空间感，然后深入北岸迷宫般的小巷，最后在傍晚时分回到河边，见证老城从金黄色染成玫瑰色的魔幻时刻。这样的安排既能捕捉到晨光与夕照下完全不同的城市表情，又能让你有时间坐下来，像本地人一样喝杯咖啡，发发呆，让这个城市的节奏真正渗透进你的心里。总耗时约8-10小时，其中至少留出2小时用于无所事事的“沉浸”。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城部分小巷路面是原始的石块路，且有一定坡度，请务必穿一双舒适防滑的鞋子。在咖啡馆或餐厅消费时，不必急于付账离开，这里服务节奏很慢，催促会被视为不礼貌。夏季正午阳光强烈，尽量在树荫或室内活动，当地人都有午间小憩的习惯。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从东侧的“Gradska Plaža”城市沙滩开始，脱掉鞋袜感受特雷比什尼察河清晨冰凉的河水，看对岸红瓦屋顶在阳光中苏醒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着北岸的奥斯曼时期石砌步道向西慢行，你会经过一连串悬铃木遮蔽的露天咖啡馆，找一张靠河的位置坐下，点一杯地道的波斯尼亚咖啡，看鸭子排队游过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过地标性的阿尔斯兰贝格石拱桥到达南岸，在桥中央停留片刻，感受脚下流淌了几个世纪的河水与时光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在南岸回头仰望北岸老城错落有致的全景，然后钻进“Stara Čaršija”老集市区，在那些售卖自制蜂蜜、羊毛制品和旧书的小店里淘宝。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着烤肉的香气找到一家由老宅庭院改造的“aćinica”传统餐馆，在葡萄藤架下享用一顿以蔬菜炖肉和烤肉拼盘为主的漫长午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后沿着蜿蜒陡峭的小巷向上探索，目标是位于老城西侧高处的“Fortress of Trebinje”城堡遗址，虽然只剩残垣，但这里是俯瞰整个河谷全景的绝佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前下山，回到河边，选择南岸的酒吧点一杯本地产的“Trebišnjica”啤酒或白葡萄酒，看着夕阳将古老的石桥和建筑染成一片温暖的蜜色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当灯光陆续亮起，河面倒映出点点星光时，再去北岸找一家有现场“sevdah”（波黑传统民谣）演奏的小酒馆，让忧伤而深情的旋律为这一天画上句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`阿尔斯兰贝格桥侧面长焦拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点，太阳西斜时，站在南岸下游方向的河畔，用长焦镜头压缩空间，将石拱桥、桥上行人与背景层叠的老城建筑一同框入画面，暖色调的光线会让石灰岩建筑呈现金色。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`北岸小巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后阳光垂直射入狭窄巷道时，寻找那些有藤蔓植物垂下或挂着老旧灯笼的角落，利用明暗对比拍摄建筑细节和光影构成的几何图案，建议使用定焦镜头捕捉质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡遗址全景俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时抵达城堡所在的山坡，面向东方拍摄老城与特雷比什尼察河蜿蜒的全景，此时光线柔和，天空色彩丰富，河流会反射出天光，使用广角镜头并适当收小光圈以获得更大景深。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Sebilj饮水泉特写`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或雨后，石灰岩的饮水泉表面颜色更深、质感更润，从较低角度仰拍，将其精巧的木制顶棚与后方奥斯曼风格建筑的窗户一同构图，捕捉水从泉眼细细流出的动态。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人时，请务必先微笑并用手势征得同意，他们通常很友善，但直接的镜头会被视为冒犯。河面反光强烈，如需拍摄水中倒影，建议使用偏振镜（CPL）来消除反光、增强饱和度。老城夜晚灯光昏暗且色调偏暖，拍摄夜景建议使用三脚架，并尝试白平衡，保留那种独特的温馨氛围。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔秘境之选`}</h4>
                  <p className="text-sm text-blue-800">{`一座由19世纪奥斯曼风格大宅改造的精品民宿，房间窗户直接面向特雷比什尼察河，晚上枕着潺潺水声入眠，清晨房东会为你准备装在传统铜壶里的自制酸奶和果酱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城心脏体验`}</h4>
                  <p className="text-sm text-green-800">{`位于Stara Čaršija集市广场上的石头小屋客栈，楼下就是热闹的咖啡馆，房子保留了原始的石墙和木梁结构，你就像住进了一个活的历史博物馆，出门就能融入本地人的日常喧嚣。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静山腰 retreat`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在老城西侧山坡上的家庭式公寓，带一个可以俯瞰整个红瓦屋顶河谷的绝美露台，需要步行一小段上山路，但换来的私密全景和与房东一家共进家常晚餐的机会绝对超值。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感隐居`}</h4>
                  <p className="text-sm text-purple-800">{`由本地艺术家夫妇经营的迷你设计酒店，仅有四间房，每间都以一位特雷比涅历史人物为主题进行装饰，融合了复古家具与现代艺术装置，并提供私人导览服务。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是旅游旺季，尽管特雷比涅相对小众，但河边最好的住宿仍会提前订满，建议至少提前一个月预订。老城内的住宿多以老建筑改造，可能没有电梯，且隔音相对现代酒店稍差，但这正是体验的一部分。住在北岸更接近核心生活圈，南岸则相对更安静、视野更开阔。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特雷比涅好些日子了，我发现自己最常回味的，不是某个具体的建筑或画面，而是一种感觉。那种感觉叫“妥帖”。就像一件穿旧了的棉麻衬衫，它不华丽，不崭新，却因为浸润了主人的气息和岁月的抚摸，而变得无比贴合身体，让你感到安全和放松。在这个追求效率、热衷打卡的世界里，特雷比涅老城固执地保持着自己的步调。它不试图惊艳你，只是平静地展开它的河流、石巷和午后斑驳的光影，邀请你进来，坐下，把旅行的指针从“赶路”拨到“感受”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这正是深度旅行者苦苦寻觅的东西——一个地方真实的脉搏。特雷比涅的脉搏，就跳动在咖啡馆老人缓慢搅动咖啡的勺子里，在河边母亲呼唤孩子回家的拖长语调里，在石桥缝隙里顽强生长的青苔上。它告诉我们，历史不总是轰轰烈烈的纪念碑，更多时候，它是生活本身一层层的沉淀。它教会我们，美可以存在于不同信仰的尖塔共享同一片天空的和解中，存在于战火伤痛后被精心修复的一块石头所代表的希望中。来这里，不是为了收集一个地名，而是为了让自己被这种深沉而温柔的韧性所浸染，然后带着这份平静，继续前行。如果你也相信，旅行是为了找到内心与世界的共鸣，那么特雷比涅这条沉静的时光之河，值得你为之驻足。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
