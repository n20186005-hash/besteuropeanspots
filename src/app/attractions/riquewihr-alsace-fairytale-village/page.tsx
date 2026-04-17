import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里屈埃维 Riquewihr｜沉醉在阿尔萨斯的童话绘本与葡萄美酒中 - 最佳欧洲景点',
  description: '你转过一个弯，它就这么毫无预兆地、完整地铺展在你面前。那一刻，你感觉自己不像是一个游客，而像是无意中闯进了一本被遗忘在阁楼上的精装童话书的扉页。空气里有股甜丝丝的味道，混合着刚出炉的kougelhopf蛋糕的黄油香，和从每一扇木窗棂下溢出的天竺葵与矮牵牛的花香。目之所及，是挤挤挨挨、向着天空倾斜的尖...',
}

export default function RiquewihrAlsaceFairytaleVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '里屈埃维', href: '/attractions/riquewihr-alsace-fairytale-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里屈埃维・Riquewihr・法国・里屈埃维`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你转过一个弯，它就这么毫无预兆地、完整地铺展在你面前。那一刻，你感觉自己不像是一个游客，而像是无意中闯进了一本被遗忘在阁楼上的精装童话书的扉页。空气里有股甜丝丝的味道，混合着刚出炉的kougelhopf蛋糕的黄油香，和从每一扇木窗棂下溢出的天竺葵与矮牵牛的花香。目之所及，是挤挤挨挨、向着天空倾斜的尖顶屋，它们的木梁是深巧克力色的，墙壁却是明快的鹅黄色、温柔的桃粉色、甚至是薄荷绿，仿佛一位童心未泯的巨人在很久以前，用尽了他调色盘里所有最欢快的颜色。
沿着中央那条唯一的主街——法庭街慢慢走，脚下是几个世纪以来被无数脚步和马车轮打磨得光滑圆润的鹅卵石，发出轻微的、好听的“喀拉”声。阳光从两边屋顶的缝隙里斜切下来，在石板路上画出明明暗暗的光带。你的耳朵里灌满了生活的声音：楼上老太太推开百叶窗的吱呀声，隔壁酒窖里传来酒农用木桶滚酒的闷响，还有露天咖啡馆里，酒杯轻轻碰撞的清脆叮当。这里不是舞台布景，它是活着的。那些挂着华丽铁艺招牌的店铺里，面包师傅正在揉面团，酒庄主人正给游客讲解雷司令的风土，而阳台上晾晒的床单，在微风里飘得像温柔的旗帜。
最打动人心的，是这里无处不在的“慢”。时间在这里不是被切割成分钟和秒，而是跟着葡萄的生长季，跟着教堂的钟声，跟着季节集市的开张与收摊缓缓流淌。你很容易就忘记了自己原本的行程，愿意花上一个下午，就坐在广场边的长椅上，看光影在彩色的墙壁上缓慢爬行，或者钻进一家家族经营了十代人的酒窖，听主人用带着浓重阿尔萨斯口音的法语，讲述去年秋天的那场丰收。这里的核心魅力，不在于某个地标，而在于一种整体的、沉浸式的氛围——它让你相信，美好、宁静、色彩斑斓的中世纪小镇梦，是真实存在，并且依然在呼吸的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你转过一个弯，它就这么毫无预兆地、完整地铺展在你面前。那一刻，你感觉自己不像是一个游客，而像是无意中闯进了一本被遗忘在阁楼上的精装童话书的扉页。空气里有股甜丝丝的味道，混合着刚出炉的kougelhopf蛋糕的黄油香，和从每一扇木窗棂下溢出的天竺葵与矮牵牛的花香。目之所及，是挤挤挨挨、向着天空倾斜的尖顶屋，它们的木梁是深巧克力色的，墙壁却是明快的鹅黄色、温柔的桃粉色、甚至是薄荷绿，仿佛一位童心未泯的巨人在很久以前，用尽了他调色盘里所有最欢快的颜色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着中央那条唯一的主街——法庭街慢慢走，脚下是几个世纪以来被无数脚步和马车轮打磨得光滑圆润的鹅卵石，发出轻微的、好听的“喀拉”声。阳光从两边屋顶的缝隙里斜切下来，在石板路上画出明明暗暗的光带。你的耳朵里灌满了生活的声音：楼上老太太推开百叶窗的吱呀声，隔壁酒窖里传来酒农用木桶滚酒的闷响，还有露天咖啡馆里，酒杯轻轻碰撞的清脆叮当。这里不是舞台布景，它是活着的。那些挂着华丽铁艺招牌的店铺里，面包师傅正在揉面团，酒庄主人正给游客讲解雷司令的风土，而阳台上晾晒的床单，在微风里飘得像温柔的旗帜。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是这里无处不在的“慢”。时间在这里不是被切割成分钟和秒，而是跟着葡萄的生长季，跟着教堂的钟声，跟着季节集市的开张与收摊缓缓流淌。你很容易就忘记了自己原本的行程，愿意花上一个下午，就坐在广场边的长椅上，看光影在彩色的墙壁上缓慢爬行，或者钻进一家家族经营了十代人的酒窖，听主人用带着浓重阿尔萨斯口音的法语，讲述去年秋天的那场丰收。这里的核心魅力，不在于某个地标，而在于一种整体的、沉浸式的氛围——它让你相信，美好、宁静、色彩斑斓的中世纪小镇梦，是真实存在，并且依然在呼吸的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里屈埃维`} />
                <InfoRow label="英文名称" value={`Riquewihr`} />
                <InfoRow label="正式名称" value={`Riquewihr`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`里屈埃维`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿尔萨斯葡萄酒之路上的明珠，被誉为“阿尔萨斯葡萄园的活博物馆”。`} />
                <InfoRow label="建筑特色" value={`保存完好的16世纪半木结构房屋，外墙被刷成糖果般的粉、黄、蓝、绿等色彩，装饰着精美的雕刻和繁花。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪晚期至文艺复兴时期阿尔萨斯木筋墙建筑风格。`} />
                <InfoRow label="文化价值" value={`是阿尔萨斯地区历史、葡萄酒文化和传统生活方式的完美凝结与生动展示。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄全年24小时开放。但内部的小型博物馆（如酒博物馆、都德之屋等）及大多数品酒屋的开放时间各异，一般为每年四月至十月，上午10点至下午6点开放，冬季（十一月至三月）许多会缩短开放时间或仅周末开放。建议出行前查询具体场馆的官网。圣诞节期间会有热闹的圣诞集市，延长夜间开放时间。`} />
              <InfoRow label="门票价格" value={`进入村庄本身免费。参观个别博物馆或历史建筑需单独购票，票价一般在3-8欧元之间。品酒体验多数免费，但若深入酒窖品鉴特定年份或高级别葡萄酒，可能需要支付5-15欧元的费用，通常可在消费后抵扣。`} />
              <InfoRow label="地址" value={`1 Rue de la Couronne, 68340 Riquewihr, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是斯特拉斯堡机场或巴塞尔-米卢斯-弗赖堡欧洲机场。从斯特拉斯堡中央火车站出发，乘坐开往塞尔奈的TER列车，约45分钟后在塞尔奈站下车。然后转乘106路或109路公共汽车，约20-25分钟即可直达里屈埃维村口。巴士班次大约每小时一班，周末会减少，务必提前查看时刻表。自驾是最方便的方式，从科尔马出发沿D1bis/D3公路行驶约15公里，村庄外围有大型付费停车场，切记不可将车驶入村内狭窄的石板路。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲里屈埃维的故事，就不能不提葡萄酒。它的命运，自中世纪起，就和那一串串晶莹的葡萄紧紧绑在了一起。大约在8世纪，这里就开始有系统的葡萄种植，但真正让村庄富甲一方、留下今天我们看到这些华丽建筑的，是16世纪。那时，里屈埃维属于符腾堡公爵的领地，公爵们非常精明，他们深知这片向阳坡地上生产的葡萄酒价值连城，于是给予了村民们极大的自治权和税收优惠。葡萄酒贸易带来了滚滚财富，那些成功的酒商和贵族们，便开始竞相建造最能彰显自己身份与品位的住宅。他们请来最好的工匠，用粗壮坚实的橡木搭建房屋骨架，在木梁末端雕刻上象征繁荣的葡萄藤、太阳纹章或是家族徽记，然后把墙面刷上当时最昂贵、最鲜亮的颜料。这些房子，与其说是家，不如说是一个个立体的财富宣言，它们肩并肩站在一起，共同构成了我们今天看到的、宛如凝固的欢乐颂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的剧本从不只有甜美。这片富饶的土地一直是法德两国争夺的焦点，里屈埃维在战争与和平的夹缝中数次易主。尤其是十七世纪的三十年战争，给村庄带来了深重灾难。但阿尔萨斯人骨子里有种坚韧，战争过后，他们擦去血迹，又重新拿起锄头，回到被踩踏的葡萄园里。奇迹般地，这些美丽的木筋房在数次战火中得以幸存，或许连征服者也舍不得摧毁这样的美好。进入19世纪，根瘤蚜虫病席卷欧洲葡萄园，里屈埃维也未能幸免，那是一段黯淡的岁月。但村民们再次展现了顽强的生命力，他们引进抗病砧木，从头开始，一点一点重建自己的葡萄园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`让里屈埃维从单纯的酒村转变为世界闻名的“童话镇”，要归功于两个人：画家和作家。19世纪末20世纪初，许多艺术家被这里独特的景致吸引，他们用画笔将彩色的房屋、弯曲的小巷定格在画布上，这些画作流传出去，为村庄披上了一层浪漫的艺术面纱。而法国作家都德，虽然他并未久居于此，但其作品与阿尔萨斯的深刻联结，也让人们将情感投射在这片土地上，村庄里甚至有一栋“都德之屋”。真正的保护发生在二战后，法国政府将其列为“法国最美乡村”，制定了极其严格的保护法规。今天的居民不能随意更改房屋外墙的颜色和结构，哪怕换一扇窗，都需要经过专门委员会的批准。正是这种近乎偏执的保护，让时间在这里停下了匆忙的脚步。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，里屈埃维的故事，就从一部波澜壮阔的葡萄酒商业史诗，变成了一曲温柔守护的现代田园诗。它不再仅仅是酒农们的家园，也成了全世界旅人寻找失落童话的梦境入口。那些曾经装载着葡萄酒驶往欧洲各大宫廷的马车，如今运载着的是惊叹的目光和相机快门的轻响。它的历史，就酿在每一杯金色的琼浆玉液里，也画在每一面彩色的墙壁上。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要独占里屈埃维的静谧之美，你必须做一个早起者。建议在上午九点前抵达，这时旅游巴士还未涌入，村庄才刚睁开惺忪的睡眼。整体游览可以安排大半天，上午专注于探索建筑、小巷和拍照，节奏可以很慢；中午享受一顿地道的阿尔萨斯午餐；下午则深入酒窖品酒，并参观一两个小型博物馆。这样的安排能让你体验到村庄从宁静到热闹，再回归宁静的完整韵律。如果你留宿一夜，将能收获清晨无人的街道和夜晚灯火阑珊的魔法时刻，那将是完全不同的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要尝试在中午至下午三点之间开车进村或寻找核心区停车位，那会是一场噩梦，务必使用外围停车场。
村里很多小店和酒窖只收现金，尤其是小额消费，记得提前备好一些欧元零钱。
穿一双绝对舒适、防滑的平底鞋，那些美丽的鹅卵石路对高跟鞋和行李箱轮子是极不友好的。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从村口的下城门进入，让自己第一时间被那条蜿蜒上升、两旁矗立着糖果色房屋的鹅卵石主街完全吸引。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要急于前进，拐进主街旁第一条狭窄得只容一人通过的小巷，用手触摸那些冰凉而斑驳的石墙，感受真正的历史肌理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到主街中段的古老喷泉广场，坐在长椅上看来往的当地人如何互相用方言问候，并去旁边的面包店买一个刚出炉的“布雷策”蝴蝶结面包。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开一家家族酒窖厚重的木门，走下阴凉的石阶，在弥漫着橡木桶和酒香的幽暗空间里，品尝一杯带着燧石气息的干型雷司令。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那栋被称为“强盗城堡”的醒目塔楼，从它脚下仰视，想象它当年作为防御工事和监狱的森严气势。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间走进“阿尔萨斯酒博物馆”，看看那些古老的压榨机、酿酒工具，读懂每一瓶酒背后农民的血汗与智慧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳西下前，沿着标有“葡萄园小径”的指示牌向上走一段，从村外的葡萄田回望，看金色的阳光如何为整个村庄镀上温暖的轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值圣诞季，傍晚时分一定要去圣诞集市，捧一杯热红酒，在挂满星星灯的木屋间穿梭，让香料和糖霜的香气充满鼻腔。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`下城门内仰拍主街`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光刚好照亮街道尽头升起的坡道，站在城门拱券下，用广角镜头捕捉鹅卵石路引导视线通向彩色房屋纵深的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“强盗城堡”塔楼侧面小巷`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光呈侧光，能完美勾勒出塔楼石砖的质感，找一个挂满鲜花的二楼窗户作为前景，构图会立刻生动起来。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`葡萄园俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，从村庄西侧的上坡路（去往Hunawihr方向）的一个弯道处，可以拍到村庄全景被葡萄园环绕，温暖的光线让每一栋房子的色彩都饱和到极致。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某扇彩色的门前`}</h4>
                  <p className="text-sm text-gray-700">{`避开正午的顶光，在上午或下午的柔和光线下，选择一扇蓝色的门或粉色的墙，等待一个当地人骑车经过或推开窗的瞬间，让照片充满故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`航拍在这里是严格禁止的，因为村庄属于严格的保护区域，请务必遵守规定。`}</li>
                <li>• {`拍摄当地居民或商店内部时，请务必先微笑示意并获得同意，阿尔萨斯人很友善，但同样注重隐私。`}</li>
                <li>• {`尝试拍摄一些细节：门环上的雕刻、窗台上的陶罐、光影投射在木筋墙上的几何图案，这些特写比全景更能传递氛围。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋16世纪酒商豪宅改造的精品酒店，房间里有暴露的原始木梁和石墙，窗户正对着内院宁静的回廊，晚上能听到远处酒窖传来的微弱声响。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温馨之选`}</h4>
                  <p className="text-sm text-green-800">{`由本地夫妇经营的民宿，位于村庄安静一隅，女主人会为你准备丰盛的阿尔萨斯早餐，包括自制果酱和蜂蜜，并热情推荐她表弟家的酒窖。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在村庄外围自家葡萄园中心的现代设计酒店，拥有无敌的田园景观露台，可以在私人温泉浴中看着星空品饮酒店自产的顶级琼瑶浆。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居爱好`}</h4>
                  <p className="text-sm text-purple-800">{`距离村庄步行15分钟的一个古老农庄，独立的小屋配备简易厨房，你可以在当地市场买菜回来烹饪，享受完全融入乡间的宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季和圣诞季）的住宿非常紧俏，务必提前至少三个月预订，尤其是周末。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在村内虽然价格较高，但能享受清晨和夜晚无人打扰的秘境时刻，这份体验远超价差。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你选择村外的住宿，请确认是否有方便的停车位，并且了解夜间步行回村的路况和照明情况。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开里屈埃维好些日子了，但闭上眼，我还能清晰地闻到那股混合了酒香、花香和石头气息的味道。它给我的触动，不仅仅在于视觉的惊艳，更在于一种“可触摸的真实感”。在这里，美不是被供奉在玻璃罩里仅供瞻仰的，而是弥漫在空气中，流淌在酒杯里，雕刻在门楣上，浸润在日常生活的每一个褶皱里。它让我相信，人类对于家园的美好想象，那种色彩斑斓、安宁富足、与土地紧密相连的生活，并非虚无的乌托邦，而是可以通过一代代人的珍视与坚守，变成确凿无疑的现实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、一切都在飞速迭代的世界里，里屈埃维像是一个温柔的“减速带”。它固执地保持着缓慢的节奏，遵循着季节的律动，守护着祖先传下来的面貌。它提醒着我们，除了向前奔跑，还有一种生活叫“沉淀”；除了颠覆创造，还有一种价值叫“传承”。每一位热爱深度游的旅人都该来这里，不仅仅是为了拍一张明信片般的照片，更是为了让自己沉浸在这种“慢”与“美”共同酿造的时空里，重新校准内心对于幸福和丰盛的定义。你会发现，最深的旅行，不是去了多远的地方，而是灵魂在某个瞬间，找到了故乡般的宁静与共鸣。里屈埃维，就是这样一个能让你灵魂共鸣的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/conques-abbey-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔克小镇与修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Conques</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/metz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Metz Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fontevraud-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    丰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">丰特夫罗修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fontevraud Abbey</p>
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
