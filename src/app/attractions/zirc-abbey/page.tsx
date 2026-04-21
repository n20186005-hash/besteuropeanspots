import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '齐尔茨修道院 Zirc Abbey｜包科尼山脉深处的隐秘瑰宝与绝美图书馆 - 最佳欧洲景点',
  description: '车子在包科尼山脉浓得化不开的绿色里穿行了不知多久，当你几乎要以为导航出错时，一个转弯，整座修道院就这样毫无征兆地出现在山谷的怀抱里。它不是耸立在悬崖上的那种戏剧性存在，而是带着一种沉静的、土地般的稳重感，奶黄色与赭石色的外墙，在午后的阳光下像是被蜂蜜浸泡过一样温润。第一印象是极致的静，不是没有声音，...',
}

export default function ZircAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '齐尔茨修道院', href: '/attractions/zirc-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`齐尔茨修道院・Zirc Abbey・匈牙利・齐尔茨（Zirc）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在包科尼山脉浓得化不开的绿色里穿行了不知多久，当你几乎要以为导航出错时，一个转弯，整座修道院就这样毫无征兆地出现在山谷的怀抱里。它不是耸立在悬崖上的那种戏剧性存在，而是带着一种沉静的、土地般的稳重感，奶黄色与赭石色的外墙，在午后的阳光下像是被蜂蜜浸泡过一样温润。第一印象是极致的静，不是没有声音，而是风穿过巨大山毛榉林的沙沙声、远处隐约的教堂钟声，共同编织成了一种更深的静谧，瞬间过滤掉你从城市带来的所有喧嚣。
走近了，空气里有一股好闻的复合气味——是陈年木料、古老纸张、石墙上苔藓的湿润气息，混合着从修士小花园飘来的迷迭香和薰衣草的清苦香味。修道院的正立面并不华丽到令人窒息，对称的巴洛克线条透着理性的庄严。但你知道，真正的宝藏藏在里面。当你踏进那座传说中的图书馆大厅，呼吸真的会暂停几秒。那不是一种张扬的美，而是一种将时光凝固的、近乎神圣的秩序之美。高大的书架从地面直抵绘有华丽湿壁画的天花板，成千上万册古籍的皮质书脊构成了一个由深红、墨绿、古铜色组成的、深邃而温暖的色谱。阳光从高高的窗户斜射进来，在拼花地板上拉出长长的光柱，你能看见光柱里缓缓舞动的微尘，仿佛它们是几个世纪以来，无数在此沉思的修士们留下的思想微粒。
这里不是那种被游客塞满的标本式景点。在回廊里，你会偶遇身穿白色会衣、匆匆走过的西多会修士，他们向你点头致意时，眼神里有种与世无争的平和。下午时分，本地居民会三三两两走进教堂，坐在长椅上安静祈祷，阳光透过彩绘玻璃，在他们身上投下变幻的色彩。修道院不只是游客的目的地，它更是这个小镇跳动的心脏和灵魂归宿，你能感受到一种活生生的、延续了数百年的信仰与社区生活。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在包科尼山脉浓得化不开的绿色里穿行了不知多久，当你几乎要以为导航出错时，一个转弯，整座修道院就这样毫无征兆地出现在山谷的怀抱里。它不是耸立在悬崖上的那种戏剧性存在，而是带着一种沉静的、土地般的稳重感，奶黄色与赭石色的外墙，在午后的阳光下像是被蜂蜜浸泡过一样温润。第一印象是极致的静，不是没有声音，而是风穿过巨大山毛榉林的沙沙声、远处隐约的教堂钟声，共同编织成了一种更深的静谧，瞬间过滤掉你从城市带来的所有喧嚣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，空气里有一股好闻的复合气味——是陈年木料、古老纸张、石墙上苔藓的湿润气息，混合着从修士小花园飘来的迷迭香和薰衣草的清苦香味。修道院的正立面并不华丽到令人窒息，对称的巴洛克线条透着理性的庄严。但你知道，真正的宝藏藏在里面。当你踏进那座传说中的图书馆大厅，呼吸真的会暂停几秒。那不是一种张扬的美，而是一种将时光凝固的、近乎神圣的秩序之美。高大的书架从地面直抵绘有华丽湿壁画的天花板，成千上万册古籍的皮质书脊构成了一个由深红、墨绿、古铜色组成的、深邃而温暖的色谱。阳光从高高的窗户斜射进来，在拼花地板上拉出长长的光柱，你能看见光柱里缓缓舞动的微尘，仿佛它们是几个世纪以来，无数在此沉思的修士们留下的思想微粒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是那种被游客塞满的标本式景点。在回廊里，你会偶遇身穿白色会衣、匆匆走过的西多会修士，他们向你点头致意时，眼神里有种与世无争的平和。下午时分，本地居民会三三两两走进教堂，坐在长椅上安静祈祷，阳光透过彩绘玻璃，在他们身上投下变幻的色彩。修道院不只是游客的目的地，它更是这个小镇跳动的心脏和灵魂归宿，你能感受到一种活生生的、延续了数百年的信仰与社区生活。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`齐尔茨修道院`} />
                <InfoRow label="英文名称" value={`Zirc Abbey`} />
                <InfoRow label="正式名称" value={`Zirc Abbey`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`齐尔茨（Zirc）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利境内最重要、保存最完好的西多会修道院之一，是包科尼地区的精神与文化中心。`} />
                <InfoRow label="建筑特色" value={`一座宏大的巴洛克风格建筑群，以拥有“匈牙利最美图书馆之一”的古典主义图书馆大厅而闻名。`} />
                <InfoRow label="建筑风格" value={`主体为18世纪重建的巴洛克风格，内部图书馆是纯净的古典主义风格，整体庄严而和谐。`} />
                <InfoRow label="文化价值" value={`它不仅是一座活跃的修道院，更是保存着无价中世纪手稿、珍贵古籍和自然科学收藏的文化宝库。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院建筑群（含教堂、图书馆、博物馆）的开放时间因季节和区域而异。通常，教堂每日上午9点至下午6点开放供祈祷与参观。著名的图书馆和修道院博物馆开放时间为周二至周日上午10点至下午5点，冬季（11月至3月）可能缩短至下午4点闭馆，且周一全天关闭。修道院花园全年日出至日落开放。请注意，宗教节日（如圣诞节、复活节）期间开放时间会有较大变动，部分区域可能不对外开放，建议出行前务必在其官方网站核对最新时间表。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂区域免费。参观核心景点——巴洛克图书馆与修道院博物馆需购买联票。成人票约为2500匈牙利福林（约合6.5欧元）。学生、65岁以上长者享有折扣票，约为1500福林。6岁以下儿童免费。家庭套票（2成人+2儿童）约为6000福林。门票可在图书馆入口处的售票处购买，仅接受匈牙利福林现金或当地银行卡支付，不支持国际信用卡，请提前备好现金。`} />
              <InfoRow label="地址" value={`Zirc Abbey, 8420 Zirc, Zrínyi Miklós u. 1, Hungary`} />
              <InfoRow label="交通方式" value={`从匈牙利首都布达佩斯出发最为便捷。首先，从布达佩斯汽车站（Népliget Autóbusz-állomás）乘坐前往维斯普雷姆（Veszprém）或松博特海伊（Szombathely）方向的长途巴士，在齐尔茨（Zirc）镇巴士站下车，车程约1.5-2小时，班次平日每小时1-2班，周末减少。更灵活的方式是自驾，从布达佩斯沿M7高速公路转8号公路，驶入包科尼山脉的蜿蜒林道，约1小时40分钟即可抵达，沿途风景如画。齐尔茨镇内没有火车站，从最近的维斯普雷姆火车站打车前来约需30分钟。镇子很小，从巴士站步行至修道院仅需10-15分钟，沿途会经过宁静的镇中心。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`齐尔茨修道院的故事，就像包科尼山脉的岩石一样层叠起伏。它的起源可以追溯到12世纪，大约1182年，一队来自法国的西多会修士，遵循他们“在荒野中寻找上帝”的教规，看中了这片被茂密森林环绕的幽静山谷。最初的建筑是朴素的罗马式风格，修士们在此过着极其清贫、自律的生活，垦荒、祈祷、抄写经文。西多会以农业和知识闻名，齐尔茨很快成为地区知识和农业技术的中心，它的羊皮纸手稿和改良的葡萄种植技术声名远扬。然而，中世纪的宁静被奥斯曼帝国入侵的洪流彻底打破。16世纪，修道院在战火中被毁，修士们被迫流亡，这片神圣之地荒废了长达一百五十年之久，只剩下断壁残垣在诉说着往日的辉煌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在18世纪。随着奥斯曼势力被驱逐，匈牙利迎来了复兴时期。1739年，在一位富有远见和资源的修道院长——拉吉托特·费伦茨的领导下，修道院的重建工程轰轰烈烈地开始了。他们请来了当时最好的建筑师和工匠，没有选择重建中世纪的朴素，而是拥抱了那个时代辉煌的巴洛克风格。我们现在看到的宏伟教堂和规整的四方庭院，基本都是这个时期的产物。但拉吉托特院长的梦想不止于建筑，他是一位狂热的藏书家和博物学家，他决心要在这里建立一座知识的圣殿。于是，修道院的核心灵魂——那座无与伦比的图书馆开始孕育。他倾尽财力，从欧洲各地收集珍本书籍、科学著作和艺术图册。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让图书馆登上巅峰的，是下一位关键人物：修道院长兼杰出植物学家——齐拉吉·亚诺什。他是18世纪匈牙利自然科学的重要人物，几乎将毕生精力都投入了对包科尼山脉植物群的研究和藏书建设。在他的经营下，图书馆不仅藏书量激增，更拥有了极其珍贵的植物标本集和科学仪器。这里成了一个独特的地方：修士的祈祷声与学者翻动古籍、讨论植物分类的细语交织在一起。然而，历史的考验再次降临。约瑟夫二世皇帝在18世纪末推行宗教改革，解散了许多修道院，齐尔茨虽侥幸存留，但元气大伤。紧接着是二十世纪的两次世界大战和四十多年的共产主义时期，修道院被国有化，修士再次被驱逐，图书馆的珍宝被封存或面临散佚的风险。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到1990年后，随着政权更迭，修道院终于完整地归还给了西多会。修士们回来了，他们面对的不仅是建筑的破败，更是时代断层带来的挑战。但他们一步步地、耐心地进行修复，重新点燃祭坛的蜡烛，也重新打开图书馆的大门。今天，当你走在其中，你能触摸到的不仅是18世纪的巴洛克石膏花纹，更是穿越了八个多世纪的坚韧信仰。这座建筑见证了王朝的兴衰、帝国的铁蹄、思想的禁锢与解放，它本身就像一本用石头、木材和羊皮纸写就的立体史书，而它的故事，还在被那些身穿白袍的身影，安静地续写着。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受齐尔茨修道院的灵魂，建议安排至少4-5小时的深度游览。最佳抵达时间是工作日的上午10点左右，既能避开可能出现的极小规模旅游团，又能享受到图书馆内上午侧光带来的绝美光影。整体节奏宜慢不宜快，先从外部的宏大步入内部的精微，最后在宁静中收尾。建议顺序为：首先在修道院外围和花园感受整体氛围与自然环境，然后进入教堂体验其宗教内核，接着将高潮留给图书馆的震撼参观，随后在博物馆了解其深厚历史，最后以漫步回廊和修士花园作为沉思的尾声。这样的安排符合从环境到核心、从感官到认知、最后回归内心的深度体验逻辑。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`图书馆内严禁使用闪光灯，且务必保持绝对安静，交谈请用气声，这是对仍在其中工作和研究的修士们最基本的尊重。
修道院是仍在运作的宗教场所，参观教堂时请着装得体（避免无袖上衣、过短裤裙），若遇到弥撒进行，请静坐后排观摩或悄悄离开，不要走动拍照。
小镇餐馆不多且午休时间长，建议自备一点简餐和水，或在参观结束后驱车15分钟到附近更大的城镇用餐。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇边的免费停车场，先别急着走向正门，沿着修道院东侧被栗子树荫覆盖的小径缓步绕行，从侧面和后方欣赏这座建筑群如何与背后的森林山峦融为一体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入宽阔的修道院前庭，静静仰望圣伯纳德教堂那庄严的巴洛克正立面，听一听从门内传来的管风琴练习声或唱诗班的隐约和声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开教堂沉重的木门，让眼睛适应内部相对昏暗的光线，然后沿着侧廊慢慢走，感受从彩色玻璃窗滤过的、洒在古老木长椅上的斑斓光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`怀着期待的心情走向图书馆的独立入口，在售票处换取那张小小的纸质门票，仿佛领取一把通往知识秘境的钥匙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入图书馆大厅的瞬间，请一定在门口驻足片刻，让整个空间的色彩、气息和肃穆的秩序感完全包裹你，然后沿着中央过道缓缓走向最深处的珍本陈列柜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完图书馆后，下楼进入修道院博物馆，在这里透过古老的手稿、修士的日用器物和齐拉吉院长的植物标本，触摸那段鲜活的过往。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，沿着二层那阳光充沛的拱廊慢慢走一圈，这里是观察修道院四方庭院几何之美的最佳地点，也是拍摄建筑对称结构的绝佳位置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从回廊的小门步入修士打理的后花园，坐在一棵老菩提树下的长椅上，什么都不做，只是听着蜜蜂的嗡嗡声，回味刚才经历的一切。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`图书馆中央过道仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至十一点间，阳光从南侧高窗射入，站在大厅中央，将相机贴近地板向上仰拍，能完美捕捉到两侧通天书架的纵深感、华丽的天花板湿壁画以及光束穿透尘埃的丁达尔效应。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`修道院回廊的几何光影`}</h4>
                  <p className="text-sm text-gray-700">{`晴日下午三点左右，阳光斜射进二层拱廊，会在对面的墙壁和地板上投下规律的拱形光斑，站在回廊一端，利用拱门作为天然画框进行对称构图，能拍出极具韵律感和空间深度的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`教堂侧廊彩色玻璃窗特写`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光最强时（约1-3点），选择一扇人物或图案精美的彩窗，从室内拍摄其逆光效果，让五彩光芒成为主体，虚化窗下的祈祷蜡烛或木椅作为前景，营造神圣静谧的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院后花园远景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，从花园最南侧的草坪回望修道院建筑群，温暖的夕阳光将建筑物的奶黄色墙壁染成金色，利用花园的花丛或树木枝叶作为前景框架，可以拍出建筑与自然和谐共处、充满温暖生活气息的画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在图书馆内，尽量使用高感光度性能好的相机或手机，并调至静音模式，任何快门声在此都显得格外突兀。`}</li>
                <li>• {`尊重修士和当地信徒的隐私，绝对不要拍摄正在进行私人祷告或忏悔的人的面部特写，这是基本的礼貌和宗教禁忌。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭客栈`}</h4>
                  <p className="text-sm text-blue-800">{`住在修道院步行五分钟可达的镇中心家庭客栈里，房间窗外就是红色的屋顶和教堂钟楼，清晨在房东自家烤制的肉桂卷香气中醒来，傍晚可以和主人一起喝杯当地草药茶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林疗愈民宿`}</h4>
                  <p className="text-sm text-green-800">{`距离修道院约3公里、坐落在包科尼森林边缘的独栋小木屋，完全被自然环绕，晚上可以枕着松涛入眠，白天在露台就能看到修道院的尖顶从树梢间探出。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史风格酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`入住维斯普雷姆市中心一家由百年老建筑改造的精品设计酒店，在享受现代舒适的同时感受古城风情，白天开车来齐尔茨探索，晚上回到城市享受更丰富的餐饮选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`修道院静修客房（需提前申请并尊重规约）`}</h4>
                  <p className="text-sm text-purple-800">{`对于追求极致深度体验的旅行者，可以尝试通过修道院官网提前很久申请极其有限的静修客房，体验极简、宁静、与修士作息同步的数日生活，这是真正融入其精神世界的唯一途径。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`齐尔茨镇本身非常小且宁静，夜晚几乎没有任何商业活动，治安极好，但喜欢夜生活的游客可能会觉得过于安静，请根据自身需求选择住在镇上还是邻近的城市。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和重大宗教节日期间，修道院周边的住宿非常紧俏，尤其是静修客房，务必提前数月规划预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开齐尔茨修道院很久以后，我脑海里反复回响的不是某个具体的画面，而是一种“完整”的感觉。在这个碎片化的时代，我们习惯了打卡、速览、收集照片，但齐尔茨强迫你慢下来。它不是一个被抽空了内容的美丽空壳，而是一个仍然在呼吸、在思考、在生产的有机生命体。你在这里同时看到了信仰、知识、艺术、历史，以及一群活生生的人如何将这些宏大的概念，具体为每日的祈祷、对古籍的呵护、对花园的修剪。这种延续性本身，就具有一种震撼人心的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它或许没有巴黎圣母院那样的举世闻名，也没有圣米歇尔山那样的夺目奇观，但正是它的隐秘与沉静，构成了它无可替代的价值。它像一处深藏于山脉褶皱中的精神绿洲，提醒着我们，在追求效率与速度的世界之外，还存在另一种时间的尺度——一种以世纪为单位生长，以沉默为语言，以内在秩序为美的生活可能。对于每一位厌倦了表面游览、渴望触及一个地方灵魂的旅人来说，齐尔茨修道院不仅仅是一个景点，更是一次与自己内心宁静重逢的契机。来这里，不只是看一座图书馆，更是体验一种“完整”的可能性。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/szekesfehervar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡赫塔圣捷尔吉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Székesfehérvár</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/early-christian-necropolis-pecs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩奇早期基督教陵墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Early Christian Necropolis of Pécs</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eszterhaza-palace-fertod" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔特德埃斯泰尔哈兹宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eszterháza Palace</p>
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
