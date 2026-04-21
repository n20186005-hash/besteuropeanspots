import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿德蒙特修道院图书馆｜世界最美藏书阁与百万年冰河化石对话 - 最佳欧洲景点',
  description: '朋友，你想象过走入一本巨大的、活着的书里是什么感觉吗？在奥地利施蒂利亚州深深的山谷里，阿德蒙特修道院图书馆就给了我这样的震撼。穿过略显朴素的修道院建筑，推开那扇厚重的门，时间“嗡”地一声静止了。眼前不是房间，而是一条70米长的、纯白与灿金交织的“知识长廊”。高耸的科林斯式立柱，精美的木雕书架，天花板...',
}

export default function AdmontAbbeyLibraryIceAgeEncounterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '阿德蒙特修道院图书馆（与冰河世纪的相遇）', href: '/attractions/admont-abbey-library-ice-age-encounter' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿德蒙特修道院图书馆（与冰河世纪的相遇）・Admont Abbey Library (Encounter with the Ice Age)・奥地利・阿德蒙特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，你想象过走入一本巨大的、活着的书里是什么感觉吗？在奥地利施蒂利亚州深深的山谷里，阿德蒙特修道院图书馆就给了我这样的震撼。穿过略显朴素的修道院建筑，推开那扇厚重的门，时间“嗡”地一声静止了。眼前不是房间，而是一条70米长的、纯白与灿金交织的“知识长廊”。高耸的科林斯式立柱，精美的木雕书架，天花板是连绵起伏的拱顶，上面绘满了宏大的壁画——那是艺术、科学、神学、哲学……所有人类智慧的领域，都在头顶的天穹上交相辉映。最奇妙的是光线，从高侧窗温柔地倾泻下来，空气里浮动着微尘，混合着古老纸张、上光蜡和历经三个世纪的橡木散发出的、无比安详的复杂气味。这里安静得能听到自己的心跳，却仿佛又充满了历代修士与学者无声的辩论与低语。
这座图书馆最打动人心的，恰恰是它并非一个冰冷的陈列柜。你看到的每一个细节，从书架顶端的寓言人物雕像，到地板上光滑的大理石纹路，都在诉说着一个坚定的信念：知识是神圣的，追求知识本身就是一种朝圣。当地的老馆长曾对我说，这里至今仍是修士们研习和沉思的地方。下午时分，你或许会偶遇一位穿着黑袍的修士，安静地从某个书架深处取下一本厚重的皮面书，那份专注与几个世纪前并无二致。图书馆不只是景点，它是这个古老修道院社区仍在跳动的心脏。
而当你以为这场巴洛克艺术的盛宴已经抵达高潮时，别忘了你的通票还包含着另一个世界。走下图书馆光洁的大理石台阶，穿过回廊，你就进入了“与冰河世纪的相遇”——修道院庞大的自然历史博物馆。这里收藏着超过20万件的矿物、昆虫、动植物标本。最令人屏息的，是那些来自阿尔卑斯山冰川的史前化石与骨骼：猛犸象的巨大臼齿，洞熊的完整骨架，在灯光下泛着冷峻的光泽。上一秒还在金碧辉煌的人类智慧圣殿，下一秒就直面着数十万年前地球的蛮荒与冰冷。这种极致的反差与对话，是阿德蒙特独一无二的魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，你想象过走入一本巨大的、活着的书里是什么感觉吗？在奥地利施蒂利亚州深深的山谷里，阿德蒙特修道院图书馆就给了我这样的震撼。穿过略显朴素的修道院建筑，推开那扇厚重的门，时间“嗡”地一声静止了。眼前不是房间，而是一条70米长的、纯白与灿金交织的“知识长廊”。高耸的科林斯式立柱，精美的木雕书架，天花板是连绵起伏的拱顶，上面绘满了宏大的壁画——那是艺术、科学、神学、哲学……所有人类智慧的领域，都在头顶的天穹上交相辉映。最奇妙的是光线，从高侧窗温柔地倾泻下来，空气里浮动着微尘，混合着古老纸张、上光蜡和历经三个世纪的橡木散发出的、无比安详的复杂气味。这里安静得能听到自己的心跳，却仿佛又充满了历代修士与学者无声的辩论与低语。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座图书馆最打动人心的，恰恰是它并非一个冰冷的陈列柜。你看到的每一个细节，从书架顶端的寓言人物雕像，到地板上光滑的大理石纹路，都在诉说着一个坚定的信念：知识是神圣的，追求知识本身就是一种朝圣。当地的老馆长曾对我说，这里至今仍是修士们研习和沉思的地方。下午时分，你或许会偶遇一位穿着黑袍的修士，安静地从某个书架深处取下一本厚重的皮面书，那份专注与几个世纪前并无二致。图书馆不只是景点，它是这个古老修道院社区仍在跳动的心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你以为这场巴洛克艺术的盛宴已经抵达高潮时，别忘了你的通票还包含着另一个世界。走下图书馆光洁的大理石台阶，穿过回廊，你就进入了“与冰河世纪的相遇”——修道院庞大的自然历史博物馆。这里收藏着超过20万件的矿物、昆虫、动植物标本。最令人屏息的，是那些来自阿尔卑斯山冰川的史前化石与骨骼：猛犸象的巨大臼齿，洞熊的完整骨架，在灯光下泛着冷峻的光泽。上一秒还在金碧辉煌的人类智慧圣殿，下一秒就直面着数十万年前地球的蛮荒与冰冷。这种极致的反差与对话，是阿德蒙特独一无二的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿德蒙特修道院图书馆（与冰河世纪的相遇）`} />
                <InfoRow label="英文名称" value={`Admont Abbey Library (Encounter with the Ice Age)`} />
                <InfoRow label="正式名称" value={`Admont Abbey Library (Encounter with the Ice Age)`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`阿德蒙特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座将巴洛克精神推向极致的修道院图书馆，本身就是一部用建筑、雕塑和书籍写成的百科全书。`} />
                <InfoRow label="建筑特色" value={`长达70米的恢宏大厅，以金白二色为主调，七座穹顶 fresco 壁画描绘人类知识的各个领域，宛如一座“知识的圣殿”。`} />
                <InfoRow label="建筑风格" value={`晚期巴洛克风格，并深受启蒙运动思想影响，整体设计充满理性和光明的隐喻。`} />
                <InfoRow label="文化价值" value={`不仅是藏书之所，更是启蒙时代“光即知识”这一理念的实体化表达，并与当代自然史收藏形成跨越时空的对话。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年4月初至11月初每日开放，时间为上午10:00至下午5:00。7月和8月旺季延长至下午5:30。冬季（11月至次年3月）仅限预约团体参观，且图书馆部分可能因维护关闭。圣诞节期间及新年首周不开放。具体日期每年微调，务必出发前在官网确认。`} />
              <InfoRow label="门票价格" value={`成人票13欧元。优惠票（学生、65岁以上长者、团体）11欧元。家庭票（2成人+最多3名儿童）28欧元。6岁以下儿童免费。门票包含图书馆、修道院博物馆（含自然历史、现代艺术、历史收藏等所有分馆）的全程通票。官网提前购票可避免排队，但无折扣。`} />
              <InfoRow label="地址" value={`Kirchplatz 1, 8911 Admont, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是格拉茨机场（GRZ）或萨尔茨堡机场（SZG）。从格拉茨中央火车站（Hauptbahnhof）出发，乘坐奥地利联邦铁路（ÖBB）的Regional-Express列车，方向利岑（Liezen）或塞基尔兴（Selzthal），在阿德蒙特站（Bahnhof Admont）下车。车程约1小时45分钟，班次每小时1-2班。从萨尔茨堡出发需在塞基尔兴换乘，总时长约2.5小时。火车站距离修道院约1.2公里，步行15分钟即达，也可乘坐寥寥无几的出租车（最好请酒店或信息中心帮忙呼叫）。自驾是最方便的选择，从A9高速公路Admont出口下，有清晰路标，修道院设有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿德蒙特修道院的故事，始于1074年，大主教格布哈德用虔诚的信念在这片山谷打下了第一块基石。起初，它和许多本笃会修道院一样，是信仰与知识的避风港。但真正的转折点，要等到将近七百年后的巴洛克时代。1774年，在启蒙思想的浪潮席卷欧洲时，修道院做出了一个大胆的决定：要建造一座前所未有的图书馆，不仅用来藏书，更要成为“知识殿堂”本身的象征。他们请来了当时杰出的建筑师约瑟夫·胡贝尔，而内部的雕塑与装饰，则交给了天才艺术家约瑟夫·斯塔梅尔和他的作坊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下那个时代的雄心吧。工匠们日以继夜地雕刻着橡木，艺术家们在高高的脚手架上，将整个天花板变成了一幅巨大的“知识地图”。中央穹顶描绘着“神圣的启示”，周围的拱顶则依次展开了神学、哲学、医学、法学等学科。这不仅仅是装饰，这是一场盛大而理性的宣告：所有的知识最终都通向神圣的真理。值得一提的是，当时的奥地利女皇玛丽亚·特蕾莎对修道院颇为支持，她的改革精神或许也间接为这座充满“光明”色彩的图书馆注入了力量。图书馆在1776年落成，迅速被誉为“世界第八大奇迹”，它完美捕捉了那个时代对理性、秩序与光明近乎狂热的追求。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运总是充满戏剧性。就在图书馆建成后不到一百年，1865年，一场灾难性的大火席卷了修道院的大部分建筑。据说，当时的修士和镇民们拼死抢救，第一目标就是图书馆。他们组成人链，将数以万计的珍贵书籍和手稿传递到安全地带。奇迹发生了，这座木结构的辉煌殿堂竟然在烈火中幸存了下来，只有少量烟熏的痕迹。这场火像一个残酷的试炼，反而让图书馆在人们心中的神圣地位更加稳固。重建后的修道院其他部分采用了新哥特式风格，唯有图书馆，被原封不动地保留了下来，成为穿越时间的琥珀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪，修道院的角色继续演变。它设立了现代化的博物馆，将其在数百年间积累的自然科学藏品公之于众。其中最引人注目的，就是来自阿尔卑斯山冰川的史前发现。当工人们在修建铁路或登山者偶然发现巨大的骨骼时，这些沉睡万年的冰河世纪居民，便被送到了这里。于是，图书馆所代表的人类理性探索精神，与博物馆里陈列的自然演化史诗，形成了某种哲学意义上的闭环。我们从哪里来？我们如何认识世界？这些问题，在金碧辉煌的壁画下，在冰冷的化石前，变得无比具体而深刻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的阿德蒙特，依然是一个活跃的宗教与文化中心。修士们管理着学校、经营着庄园，而图书馆和博物馆则向全世界敞开大门。它不再仅仅是本笃会的骄傲，更是全人类共同的文化遗产。当你站在大厅中央，感受到的不仅是巴洛克艺术的冲击，更是一段跨越近千年、关于信仰、求知、灾难与重生的鲜活历史。它不是博物馆里的标本，而是一棵依然在生长的、枝繁叶茂的知识古树。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议你将整个游览安排出至少4-5小时的充裕时间，最好在上午10点开门时就抵达。这样的安排能让你在图书馆刚刚苏醒、游客尚稀时，独自享受那份殿堂级的宁静与光影。整体的节奏应该是“先抑后扬再沉淀”：从相对平实的修道院教堂和历史展厅开始，作为铺垫；然后在人流渐多前，步入图书馆主厅，接受最强烈的视觉与文化震撼；之后转入自然历史博物馆，在冰河世纪的寂静中冷静头脑；最后在修道院花园或咖啡馆回味。这条路线顺应了建筑布局，也契合了情绪起伏的曲线。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要在下午旅行团扎堆的时候才进入图书馆，那人潮会彻底毁掉它的空灵之美。参观图书馆时保持安静是对这个地方最基本的尊重，手机务必静音。博物馆区域光线较暗且地面不平，建议穿着舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从修道院的教堂开始，让眼睛适应一下巴洛克风格的华丽装饰，听听管风琴若有似无的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开图书馆侧门，别急着往前走，就在入口处静静站一分钟，让那条无尽的金白色长廊完全占据你的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着中轴线慢慢踱步，不时抬头细看穹顶上不同主题的壁画，试着辨认那些代表不同学科的女性寓言形象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到大厅尽头，转身回望来路，感受对称美学带来的极致秩序感与神圣氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从图书馆南侧的小门下楼，瞬间穿越到自然历史博物馆，在昏暗的灯光下寻找那头镇馆之宝——完整的洞熊骨架。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在博物馆的昆虫和鸟类标本展厅里，留意那些排列得像彩虹一样精美的甲虫和蝴蝶，那是另一种形式的收藏癖与美学。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`别忘了参观现代艺术展馆，看看当代艺术家如何与这座古老修道院的灵魂进行对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览结束后，一定要去修道院自营的商店旁的咖啡馆，点一块经典的苹果卷，对着窗外的花园慢慢消化一天的见闻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`图书馆入口内侧回眸`}</h4>
                  <p className="text-sm text-gray-700">{`站在进门后几步的位置，面向入口大门拍摄，能将长长的走廊、精美的门框和远处光影一并收入镜中，最佳时间是上午十点半左右，阳光刚好斜射入窗。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中轴线对称构图点`}</h4>
                  <p className="text-sm text-gray-700">{`站在图书馆正中央，将相机贴近地面向上仰拍，可以完美捕捉两侧对称的书架、立柱以及穹顶壁画，形成强烈的纵深感与神圣感，全天均可，但避开正午顶光。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“天启”穹顶下的特写`}</h4>
                  <p className="text-sm text-gray-700">{`位于第二个穹顶下方，专注于拍摄壁画中“神圣启示”的细节以及周围精美的灰泥装饰，需要长焦镜头，光线在下午时分更为柔和均匀。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`自然历史博物馆的“对话”视角`}</h4>
                  <p className="text-sm text-gray-700">{`在古生物展厅，找到一个角度能将巨大的冰河世纪化石与墙上关于地质年代的图表同时纳入画面，形成自然与知识的时空对话，需使用高感光度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`修道院外南侧全景`}</h4>
                  <p className="text-sm text-gray-700">{`从停车场通往主入口的道路上，回头拍摄修道院建筑群与背后苍翠山峦的全景，特别是图书馆所在的白色翼楼，傍晚的蓝调时刻尤为优美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`图书馆内严格禁止使用闪光灯和三脚架（除非有特殊许可），高感光度的相机或手机夜间模式非常有用。拍摄壁画和雕塑时，尽量寻找有自然光照亮的局部，效果远胜于人工照明。在博物馆拍摄化石和标本时，请注意玻璃反光，可以尝试用身体或深色衣物遮挡光源。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山谷温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在阿德蒙特镇上当地人开设的家庭旅馆，房间布置着手工刺绣的窗帘，早餐有女主人自制的果酱和新鲜牛奶，晚上能听到溪流声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`修道院静修客栈`}</h4>
                  <p className="text-sm text-green-800">{`由修道院直接经营管理的简朴客房，位于修道院建筑群安静的侧翼，虽然设施简单，但能让你在游客散尽后，独享整个庭院的寂静夜晚，需提前很久预订。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`森林景观酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟可达的周边村镇（如格森多夫）的特色酒店，坐落在山坡上，房间阳台正对达赫斯坦山脉的森林，清晨在鸟鸣和薄雾中醒来。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感历史酒店`}</h4>
                  <p className="text-sm text-purple-800">{`住在半小时车程外的利岑镇，那里有由老邮局或贵族宅邸改造的精品设计酒店，将现代舒适与历史痕迹完美结合，适合对住宿品质有要求的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿德蒙特镇本身很小，住宿选择有限且非常抢手，尤其是在夏季音乐节期间，务必提前数月预订。如果住在周边村镇，虽然选择更多且可能更便宜，但务必确认好晚间公共交通近乎为零，自驾是必需条件。整个地区治安极好，民风淳朴，可以放心散步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿德蒙特许久，我的脑海里依然会交替浮现两种画面：一种是那无限延伸的、被金色光线浸透的白色长廊，另一种则是黑暗中，史前巨兽骨骼沉默的轮廓。这真是一个奇妙的地方，它用一种近乎极致的美学方式，将人类对“内在世界”（精神与知识）的探索，和对“外在世界”（自然与宇宙）的追问，并置在了同一个时空里。在图书馆，我们被人类的理性、秩序与创造力所震撼；在博物馆，我们又立刻被自然的浩瀚、偶然与时间的威力所折服。它没有给出答案，却提供了最深刻的思考场域。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个信息爆炸、一切知识似乎都能被数字化的快时代，阿德蒙特的存在像一种固执的提醒。它告诉我们，知识的获取曾经是一种需要穿越山岭、步入圣殿、亲手触摸羊皮纸的庄严仪式；对世界的理解，需要同时怀抱对理性的信念与对自然的敬畏。来这里，不只是看一个“世界最美图书馆”的标签，更是体验一次心灵的“校准”。你会感受到，在喧哗的世界之外，还有这样一种沉静、深邃而充满智慧光芒的生活可能。这或许就是为什么，每个热爱深度游的灵魂，都应该来一次阿德蒙特，在这座山谷中的奇迹里，与自己进行一场关于知识、时间与永恒的真诚对话。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/scharding-baroque-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    谢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">谢尔丁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schärding</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bregenz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷根茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bregenz Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/melk-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Melk Abbey</p>
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
