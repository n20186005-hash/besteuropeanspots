import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃伯巴赫修道院 Eberbach Abbey｜《玫瑰之名》取景地的隐秘葡萄酒王国 - 最佳欧洲景点',
  description: '车子驶离莱茵河畔的喧嚣，拐进一条被高大山毛榉夹道的寂静小路。当森林突然退去，一片巨大的、蜂蜜色的石墙毫无预兆地撞进视野，那种震撼难以言喻。它不是矗立在山巅让你仰望，而是沉稳地“坐”在陶努斯山南麓的缓坡上，被无边的葡萄园温柔地环抱着，像一头休憩的巨兽，安静，却充满不容忽视的力量。把车停好，推开门走下去...',
}

export default function EberbachAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '黑森州，埃尔特维尔附近', href: '/destinations/germany' },
            { label: '埃伯巴赫修道院', href: '/attractions/eberbach-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃伯巴赫修道院・Eberbach Abbey・德国・黑森州，埃尔特维尔附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离莱茵河畔的喧嚣，拐进一条被高大山毛榉夹道的寂静小路。当森林突然退去，一片巨大的、蜂蜜色的石墙毫无预兆地撞进视野，那种震撼难以言喻。它不是矗立在山巅让你仰望，而是沉稳地“坐”在陶努斯山南麓的缓坡上，被无边的葡萄园温柔地环抱着，像一头休憩的巨兽，安静，却充满不容忽视的力量。把车停好，推开门走下去，第一口呼吸到的空气是清冷的，混杂着潮湿石头、陈年橡木桶，还有远处泥土与葡萄藤蔓的复杂气息。周遭太安静了，只有风穿过拱廊的微弱呜咽，和某个角落依稀可辨的、缓慢而规律的滴水声。时间在这里，仿佛被石墙吸走了声音，变得黏稠而缓慢。
这里绝不仅仅是一个“景点”。在本地人心里，埃伯巴赫首先是“葡萄酒”的代名词。那些沿着山坡展开的、如同绿色等高线般精确优美的葡萄园，是黑森州葡萄酒的金字招牌。你遇到的当地人，谈起修道院的酒窖和它每年秋季那场声名远播的拍卖会，眼睛里闪烁的光芒可能比谈起教堂的彩窗还要热烈。修士们早已离去，但他们对土地的智慧与虔诚，转化成了橡木桶中流淌的液态黄金。你会看到穿着工装的大叔开着拖拉机从古老的修士门洞进出，空气中飘着淡淡的发酵香味，这种“仍在工作”的生命力，让古老的石头也透着暖意。
最打动人的，是那种极度克制的庄严感。走进主教堂，你会立刻明白西多会“戒除虚荣”的教规意味着什么。没有璀璨的金箔壁画，没有令人眼花缭乱的巴洛克装饰。有的只是高耸的、赤裸的砂岩柱，支撑着简朴的肋骨拱顶。光线从高侧窗冰冷地射入，在粗糙的石壁上游走，形成明明暗暗的、极具几何感的光影分割。这种空旷与简朴，最初会让人感到一丝寒意，但静立片刻，一种更深沉的东西会漫上心头——那是专注于信仰与劳作本身所带来的、近乎神圣的平静。你的脚步声在巨大的空间里产生悠长的回响，那仿佛是几个世纪前修士们吟诵晚祷的回音，至今未曾散去。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离莱茵河畔的喧嚣，拐进一条被高大山毛榉夹道的寂静小路。当森林突然退去，一片巨大的、蜂蜜色的石墙毫无预兆地撞进视野，那种震撼难以言喻。它不是矗立在山巅让你仰望，而是沉稳地“坐”在陶努斯山南麓的缓坡上，被无边的葡萄园温柔地环抱着，像一头休憩的巨兽，安静，却充满不容忽视的力量。把车停好，推开门走下去，第一口呼吸到的空气是清冷的，混杂着潮湿石头、陈年橡木桶，还有远处泥土与葡萄藤蔓的复杂气息。周遭太安静了，只有风穿过拱廊的微弱呜咽，和某个角落依稀可辨的、缓慢而规律的滴水声。时间在这里，仿佛被石墙吸走了声音，变得黏稠而缓慢。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不仅仅是一个“景点”。在本地人心里，埃伯巴赫首先是“葡萄酒”的代名词。那些沿着山坡展开的、如同绿色等高线般精确优美的葡萄园，是黑森州葡萄酒的金字招牌。你遇到的当地人，谈起修道院的酒窖和它每年秋季那场声名远播的拍卖会，眼睛里闪烁的光芒可能比谈起教堂的彩窗还要热烈。修士们早已离去，但他们对土地的智慧与虔诚，转化成了橡木桶中流淌的液态黄金。你会看到穿着工装的大叔开着拖拉机从古老的修士门洞进出，空气中飘着淡淡的发酵香味，这种“仍在工作”的生命力，让古老的石头也透着暖意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种极度克制的庄严感。走进主教堂，你会立刻明白西多会“戒除虚荣”的教规意味着什么。没有璀璨的金箔壁画，没有令人眼花缭乱的巴洛克装饰。有的只是高耸的、赤裸的砂岩柱，支撑着简朴的肋骨拱顶。光线从高侧窗冰冷地射入，在粗糙的石壁上游走，形成明明暗暗的、极具几何感的光影分割。这种空旷与简朴，最初会让人感到一丝寒意，但静立片刻，一种更深沉的东西会漫上心头——那是专注于信仰与劳作本身所带来的、近乎神圣的平静。你的脚步声在巨大的空间里产生悠长的回响，那仿佛是几个世纪前修士们吟诵晚祷的回音，至今未曾散去。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃伯巴赫修道院`} />
                <InfoRow label="英文名称" value={`Eberbach Abbey`} />
                <InfoRow label="正式名称" value={`Eberbach Abbey`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`黑森州，埃尔特维尔附近`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲保存最完好的中世纪西多会修道院之一，也是德国葡萄酒文化的摇篮与精神象征。`} />
                <InfoRow label="建筑特色" value={`一座没有繁复装饰、却以宏大体量、严谨几何布局和卓越石工技术震撼人心的罗马式与早期哥特式混合建筑群。`} />
                <InfoRow label="建筑风格" value={`以简朴、坚固、实用的西多会罗马式风格为主，后期部分建筑体现了向哥特式的过渡。`} />
                <InfoRow label="文化价值" value={`它不仅是宗教建筑的典范，更是一部活着的欧洲葡萄酒经济史，其静谧的庭院曾激发哲学家沉思，其幽深的回廊也化身为电影中扑朔迷离的传奇舞台。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院建筑群及博物馆的开放时间通常为每年4月至10月，每日上午10点至下午6点；11月至次年3月开放时间缩短，通常为上午11点至下午5点，且每周一闭馆（节假日除外）。葡萄酒窖导览和品酒体验需要提前预约，时间不固定。夏季经常举办音乐会和文化活动，届时开放时间可能延长。建议行前务必查阅官网确认最新安排。`} />
              <InfoRow label="门票价格" value={`成人标准门票约为8欧元，含语音导览。优惠票（学生、残疾人、团体）约为6欧元。6岁以下儿童免费。深度导览游（含葡萄酒窖）价格约为15-25欧元不等，需单独预订。每年秋季的葡萄酒拍卖会期间，参观门票可能上浮或需要特殊通行证。`} />
              <InfoRow label="地址" value={`Eberbach Abbey, 65346 Eltville am Rhein, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福国际机场出发是最佳选择。在机场火车站乘坐区域快车（RE）或城际快车（IC），约40-50分钟即可抵达美因茨中央火车站。在美因茨换乘前往科布伦茨方向的列车，在“埃尔特维尔”站下车，车程约15分钟。从埃尔特维尔火车站前，换乘前往“埃伯巴赫修道院”的公共汽车（班次有限，约每小时一班），车程约15分钟；或直接搭乘出租车，约10分钟即达。如果自驾，从法兰克福沿A66号高速公路前往，从埃尔特维尔出口驶出，跟随棕色旅游指示牌“Kloster Eberbach”行驶约10分钟即可到达停车场。强烈建议下载当地交通APP（如RMV）查询实时公交信息，山区班车在周末和冬季可能减少。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1136年说起。一队来自法国克莱尔沃、奉行极端苦修与禁欲主义的西多会修士，在圣伯尔纳铎的追随者带领下，来到了这片当时还荒芜的莱茵高森林。他们选择这里，并非因为风景秀丽，而是看中了它的偏僻、贫瘠与靠近水源——这正是西多会远离世俗、自给自足理想的绝佳试验田。最初的建筑简陋得超乎想象，修士们亲手砍伐木材，挖掘地基，与当地的石匠一起，一凿一斧地开辟出祈祷、劳作和栖身的空间。你如今看到的那些巨大石料，很多都是从几公里外的采石场靠人力和牛车拖运而来，光是这份工程量，就足以让人对那股原始的信仰力量肃然起敬。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`修道院的命运转折点，在于修士们发现了这片土地的真正天赋——种植葡萄。他们系统地清理森林，将陡峭的山坡开垦成一级级的梯田，并引入了更精良的葡萄品种与酿酒技术。到了13世纪，埃伯巴赫已经成为莱茵地区最大、最富有的修道院之一，其拥有的葡萄园面积广袤，酿造的葡萄酒远近闻名，甚至成为欧洲许多王室和教廷的贡品。财富并没有让修士们背离简朴的誓言，他们将这些收入用于扩建修道院、资助学术以及慈善事业。你现在漫步其间的宏伟酒窖，那些可容纳数十万升葡萄酒的巨型橡木桶阵列，就是那个黄金时代最沉默而雄辩的证人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的辉煌并未永续。十六世纪的宗教改革风暴和随之而来的农民战争波及了这里，修道院虽未遭彻底摧毁，但也元气大伤。真正的劫难是十九世纪初的世俗化运动。1803年，修道院被黑森-达姆施塔特公国没收，修士们被迫离开，持续了近七百年的修道院生活戛然而止。建筑被改为监狱、精神病院和贫民收容所，昔日的圣咏被痛苦的呻吟取代，华丽的回廊里堆满了杂物，这是一种比战争更令人唏嘘的荒诞与落寞。直到二十世纪后期，人们才重新认识到它的历史与建筑价值，开始了漫长而细致的修复工作。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而让它重获全球性关注的，是一场“美丽的意外”。1986年，法国导演让-雅克·阿诺在为悬疑巨作《玫瑰之名》寻找一座“能够完美再现中世纪修道院封闭、神秘与知识重量感”的外景地时，几乎是一眼就相中了埃伯巴赫。电影里，肖恩·康纳利饰演的威廉修士在这里探寻连环命案，镜头扫过阴冷的回廊、幽深的图书馆（实为修道院教堂）和雾气弥漫的庭院，埃伯巴赫那与生俱来的庄重、神秘与一丝不易察觉的忧郁气质，被永久地镌刻在了胶片上。这部电影让这座沉睡的修道院以一种充满故事性的方式，重新回到了世界文化的视野之中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的埃伯巴赫之旅，应该从上午开始，预留至少4到5小时的充裕时间。清晨的阳光能温柔地照亮建筑东立面，而且旅游团尚未大批抵达，你可以独享修道院苏醒时的静谧。建议的节奏是“先地下，后地上，最后融入自然”。首先参加一场葡萄酒窖的导览（通常需要预约上午的场次），在微凉的酒香中理解这座修道院的灵魂所在。然后从修士教堂开始，由内而外地感受其建筑空间的震撼力，接着漫步回廊与各个庭院，让历史的细节慢慢浮现。最后，一定要走出建筑群，花至少一小时沿着标识清晰的葡萄园小径走一走，从外部和制高点回望这座建筑，你会获得完全不同的感悟。这样的安排由具体到抽象，由历史内核到自然语境，能让你层层深入地读懂埃伯巴赫。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双非常舒适、鞋底柔软的鞋子，因为修道院内大部分地面是原始的石板或砖块，且需要上下楼梯探索酒窖。参加酒窖导览是理解此地精髓的关键，务必提前在官网预订，尤其是英语导览团非常抢手。如果你的行程包含品酒环节，建议将其安排在游览末尾，微醺之后正好可以悠闲地逛葡萄园，体验更佳。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在游客中心领取语音导览器，先别急着进院，听听介绍里关于西多会修士如何在此白手起家的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的罗马式门洞，直接左转下到地下层，参加预约好的酒窖导览，让眼睛逐渐适应昏暗，并在讲解员指引下辨认那些巨桶上几个世纪前的刻字。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从酒窖的古老台阶拾级而上，突然进入修士教堂那无比高大、冰冷而空旷的中殿，静静站一会儿，感受光线从高窗倾泻而下的路径与尘埃共舞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着北侧回廊慢慢走，仔细观察每一个石柱柱头，上面雕刻的不是圣徒，而是极其写实又略带诙谐的动植物形象，那是石匠们偷偷留下的人间烟火气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进昔日的修士宿舍，如今是葡萄酒博物馆，看看那些古老的榨酒器、玻璃瓶和泛黄的地契，想象一下修道士们既是神学家又是顶级农艺师的双重人生。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从修士食堂后的门走出去，来到被三面建筑围合的“天堂庭院”，这里绿草如茵，中央有一口古井，是坐下来发呆、消化所有历史信息的最佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必沿着指示牌走上修道院背后的山坡葡萄园，在半山腰的长椅上坐下，回头俯瞰整个修道院建筑群如何像一方巨大的棋盘，严谨地铺展在翠绿的山谷之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`结束游览前，绕到修道院东侧的世俗教堂（教区教堂），它的规模小很多，风格也更亲和，这里能让你体会到修道院与周边村庄百姓之间那种紧密而日常的连接。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`葡萄园仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前两小时，从修道院东南方向的山坡葡萄园小径回望，用广角镜头捕捉修道院建筑群与层层叠叠的葡萄梯田构成的几何构图，晨雾或夕阳光晕是绝佳加分项。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`酒窖拱廊对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`在最大的酒窖“圣器室酒窖”入口处，将相机放在地面，低角度仰拍两排巨大的橡木桶形成的、无限延伸的拱形走廊，开启手机的HDR模式以平衡昏暗光线与高光窗户。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`回廊拱窗框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在北回廊内侧，透过一个罗马式拱窗去拍摄对面的回廊或庭院中的一棵孤树，让厚重的石框成为天然画框，勾勒出一幅活的中世纪风景画。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`天堂庭院倒影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`雨后初晴时，找到“天堂庭院”中古井附近的小水洼，放低机位拍摄修道院建筑在积水中的倒影，能获得一种抽象而宁静的超现实效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`教堂中殿光影线条`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗日子的正午时分，站在修士教堂中殿的末端，等待一束强烈的阳光从高侧窗射入，拍摄光线切割昏暗空间形成的清晰、锐利的光柱与阴影线条。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部和博物馆区域，通常禁止使用闪光灯和三脚架（以防绊倒他人和损坏文物），请调高相机感光度或依靠稳定手持拍摄。拍摄修士教堂内部时，尝试将几个正在仰头凝视拱顶的游客也纳入构图，以人的渺小衬托建筑的宏伟，让照片更有故事感。尊重宗教场所的肃穆氛围，避免在举行小型弥撒或纪念活动时进行 intrusive 的拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`葡萄园农舍体验`}</h4>
                  <p className="text-sm text-blue-800">{`租下修道院附近山坡上一栋由葡萄农打理的古老石屋，清晨推开窗就是漫山遍野的葡萄藤，晚上在私人露台上就能用修道院产的雷司令搭配本地奶酪。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`住在埃尔特维尔老城中心一栋半木结构的家族酒店里，房间梁柱歪斜充满故事，步行即可到达莱茵河畔，既能享受小镇的便利与浪漫，开车去修道院也仅十分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代设计酒庄旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`选择一家由先锋派酿酒师经营的当代风格旅馆，位于自家的顶级葡萄园中央，设计简约而奢华，住宿费里包含私人酒窖参观和与酿酒师共进晚餐的独特体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`森林静谧度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`在陶努斯山林深处预订一个独栋小木屋，被百年古树环绕，晚上只能听到虫鸣和风声，适合想要彻底逃离、并在静谧中回味白日修道院之旅的沉思者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`每年九月葡萄收获季和十月葡萄酒拍卖会期间，周边住宿非常紧张，价格也会飙升，务必提前数月预订。埃伯巴赫本身是一个非常安静的村落，夜间几乎没有商业活动，喜欢夜生活的游客更适合以埃尔特维尔或吕德斯海姆为基地。如果计划深入探索莱茵高地区多个酒庄和城堡，租车是最自由的选择，尽管修道院本身有公交可达。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃伯巴赫很久之后，那股混合着石头、旧木和淡淡酒酸的独特气味，还会偶尔在记忆中浮现。它给我的触动，并非那种惊艳的、立刻想要分享给所有人的兴奋，而是一种沉静的、需要慢慢反刍的共鸣。在这个一切追求快速、炫目和感官刺激的时代，埃伯巴赫像一位沉默的智者，它不讨好你，不试图用任何浮夸的东西吸引你的目光。它只是在那里，用它的空旷告诉你简朴的力量，用它的石墙告诉你时间的重量，用它仍在流淌的酒液告诉你，真正的传承不在于固守形式，而在于将一种精神注入到持续的生产与创造之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不仅仅是一座被拍进电影的古迹，更是一个能让你心跳和呼吸都慢下来的“场域”。在修士教堂里，你会被迫与自己独处；在葡萄园的小径上，你会重新思考人与自然劳作的关系。它让我们看到，历史并非僵死的标本，当它与土地、与季候、与人的技艺依然血肉相连时，它就依然是活的，依然能给予现代人珍贵的滋养——关于专注，关于耐心，关于在简朴中寻求丰盛。每一位热爱深度游的旅人，都该来埃伯巴赫住上一天，不是为了打卡，而是为了让自己被这种深沉的、源自中世纪却又超越时空的宁静所浸染，然后带着一份被石头和葡萄藤过滤过的清澈心境，重新走回喧闹的世界。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/meersburg-castle-old-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔斯堡旧堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meersburg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/liebfrauenkirche-limburg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林堡圣母教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Liebfrauenkirche Limburg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lorsch-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛尔施隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lorsch Abbey</p>
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
