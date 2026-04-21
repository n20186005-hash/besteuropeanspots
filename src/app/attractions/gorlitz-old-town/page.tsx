import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格尔利茨老城 Görlitz Old Town｜横跨德波边境的时光胶囊，未被游客淹没的文艺复兴宝藏 - 最佳欧洲景点',
  description: '当你从现代化的格尔利茨火车站走出来，穿过一片安静的公园，几乎没有任何过渡，就一脚踏进了另一个时间维度。那种感觉不是“到达”，而是“跌入”。第一眼看到的不是某个地标，而是一整片完整的、呼吸着的旧世界。脚下是几个世纪以来被马车轮和无数鞋底打磨得温润光滑的鹅卵石路，发出独特的、沉闷而踏实的声响。空气里有一...',
}

export default function GorlitzOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '格尔利茨老城', href: '/attractions/gorlitz-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格尔利茨老城・Görlitz Old Town・德国・格尔利茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从现代化的格尔利茨火车站走出来，穿过一片安静的公园，几乎没有任何过渡，就一脚踏进了另一个时间维度。那种感觉不是“到达”，而是“跌入”。第一眼看到的不是某个地标，而是一整片完整的、呼吸着的旧世界。脚下是几个世纪以来被马车轮和无数鞋底打磨得温润光滑的鹅卵石路，发出独特的、沉闷而踏实的声响。空气里有一种混合的气味——老建筑石材的微凉湿气，从某扇半掩门扉后飘出的旧书页和木地板蜡的味道，还有街角面包房刚刚出炉的“格尔利茨蛋糕”那甜蜜的、带着杏仁香的暖意。
阳光在这里扮演着魔术师。它斜射过狭窄的“走廊街”，在那些色彩斑斓的文艺复兴建筑立面上切割出锐利的光影。你会忍不住伸手去触摸那些外墙：砂岩雕刻的华丽门楣、栩栩如生的动物和人像排水口、镀金的日晷、还有那些讲述着古老行会故事的浮雕。每一个窗台都可能摆着天竺葵，每一扇厚重的木门都装着造型奇特的黄铜门环。这里没有为了游客而设置的喧嚣商店链，取而代之的是安静的手工钟表店、散发着皮革味的老式文具店、以及本地人日常光顾的肉铺和花店。钟楼的报时声悠扬地回荡在迷宫般的巷子里，那是一种缓慢的、不容置疑的时间节拍。
最动人的，或许是这座老城的“活着”的状态。它不是一个被圈起来的博物馆街区，而是格尔利茨人真实生活的心脏。清晨，你会看到主妇们在老市场边的喷泉旁闲聊；下午，退休的老先生们坐在教堂台阶上晒着太阳读报；傍晚，年轻人们骑着自行车叮铃铃地穿过拱门。它有一种沉静的自信，不讨好，不张扬，只是静静地、完好地存在着，仿佛时间在这里仁慈地放慢了脚步，允许过去和现在温柔地重叠在一起。这份未经打扰的完整性与生活气息，正是它最核心的、无可替代的魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从现代化的格尔利茨火车站走出来，穿过一片安静的公园，几乎没有任何过渡，就一脚踏进了另一个时间维度。那种感觉不是“到达”，而是“跌入”。第一眼看到的不是某个地标，而是一整片完整的、呼吸着的旧世界。脚下是几个世纪以来被马车轮和无数鞋底打磨得温润光滑的鹅卵石路，发出独特的、沉闷而踏实的声响。空气里有一种混合的气味——老建筑石材的微凉湿气，从某扇半掩门扉后飘出的旧书页和木地板蜡的味道，还有街角面包房刚刚出炉的“格尔利茨蛋糕”那甜蜜的、带着杏仁香的暖意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`阳光在这里扮演着魔术师。它斜射过狭窄的“走廊街”，在那些色彩斑斓的文艺复兴建筑立面上切割出锐利的光影。你会忍不住伸手去触摸那些外墙：砂岩雕刻的华丽门楣、栩栩如生的动物和人像排水口、镀金的日晷、还有那些讲述着古老行会故事的浮雕。每一个窗台都可能摆着天竺葵，每一扇厚重的木门都装着造型奇特的黄铜门环。这里没有为了游客而设置的喧嚣商店链，取而代之的是安静的手工钟表店、散发着皮革味的老式文具店、以及本地人日常光顾的肉铺和花店。钟楼的报时声悠扬地回荡在迷宫般的巷子里，那是一种缓慢的、不容置疑的时间节拍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最动人的，或许是这座老城的“活着”的状态。它不是一个被圈起来的博物馆街区，而是格尔利茨人真实生活的心脏。清晨，你会看到主妇们在老市场边的喷泉旁闲聊；下午，退休的老先生们坐在教堂台阶上晒着太阳读报；傍晚，年轻人们骑着自行车叮铃铃地穿过拱门。它有一种沉静的自信，不讨好，不张扬，只是静静地、完好地存在着，仿佛时间在这里仁慈地放慢了脚步，允许过去和现在温柔地重叠在一起。这份未经打扰的完整性与生活气息，正是它最核心的、无可替代的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格尔利茨老城`} />
                <InfoRow label="英文名称" value={`Görlitz Old Town`} />
                <InfoRow label="正式名称" value={`Görlitz Old Town`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`格尔利茨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲保存最完好的文艺复兴与哥特风格城市之一，被誉为“伸向西部的东方前哨”。`} />
                <InfoRow label="建筑特色" value={`超过4000座被精心保护与修复的建筑，涵盖了从哥特式到新艺术运动五个世纪的风格，如同一部立体的欧洲建筑史教科书。`} />
                <InfoRow label="建筑风格" value={`多元风格和谐共存，以晚期哥特式和文艺复兴式为主，点缀着巴洛克、古典主义及青年风格派建筑。`} />
                <InfoRow label="文化价值" value={`一座在二战中奇迹般完好无损、又在两德分裂时期被“冻结”保存的活着的建筑博物馆，其命运与欧洲近代史紧密交织。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天24小时开放。城内各博物馆、教堂、塔楼等独立景点开放时间各异，通常为周二至周日上午10点至下午5点，周一多数闭馆。圣诞市场期间（11月底至12月23日）老城广场区域全天充满活动。建议行前查阅具体景点官网，冬季部分景点开放时间会缩短。`} />
              <InfoRow label="门票价格" value={`漫步老城街区本身完全免费。进入主要景点需购票：圣彼得和保罗教堂塔楼登顶约3欧元；格尔利茨最精华的“圣经之家”博物馆门票约8欧元；上劳西茨博物馆门票约6欧元。建议购买“格尔利茨卡”，可在多家博物馆和公共交通上享受折扣。学生、儿童、团体均有优惠。`} />
              <InfoRow label="地址" value={`Untermarkt 1, 02828 Görlitz, Germany`} />
              <InfoRow label="交通方式" value={`从最近的国际机场德累斯顿机场出发，乘坐机场快线巴士或S-Bahn至德累斯顿中央火车站，车程约25分钟。从德累斯顿中央火车站乘坐RE（区域快车）或RB（区域列车）直达格尔利茨，班次频繁，每小时至少有1-2班，车程约1小时15分钟至1小时40分钟。从柏林中央火车站也有直达列车，车程约3小时。抵达格尔利茨火车站后，出站步行穿过公园，仅需10分钟即可踏入老城区域。强烈建议购买萨克森州州票，适合多人同行且性价比高。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`格尔利茨的故事，始于一条古老的贸易路线。早在中世纪，它就因位于连接西欧和东欧的“皇家之路”上而繁荣起来。你可以想象13、14世纪的景象：满载着佛兰德斯布料、波希米亚玻璃和东方香料的商队在这里停留，缴纳通行税，补给物资。巨大的财富随之涌入，城市的标志性建筑——圣彼得和保罗教堂那高耸的双塔开始拔地而起，商人行会竞相建造最华丽的房屋来展示实力。老市场周边那些令人惊叹的连排建筑，许多都诞生于这个“白银时代”，它们的山墙形状各异，仿佛一场静默的建筑竞赛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正塑造了格尔利茨今日面貌的，是一场灾难中的幸运。1547年，一场毁灭性的大火几乎吞噬了整个城市。这场火劫之后，城市以一种惊人的决心进行了重建。这次重建没有遵循旧的哥特风格，而是拥抱了当时欧洲最时髦的潮流——文艺复兴。来自意大利和波希米亚的建筑师和工匠被请来，于是，我们今天看到的那些带有精美彩绘外墙、优雅拱廊庭院和雕刻着寓言人物山墙的住宅，如同凤凰涅槃般从灰烬中升起。那个时期的商人兼市长汉斯·海因里希，他的宅邸（现为市政厅）就是这种新风格的典范，也奠定了整座城市后续几个世纪的审美基调。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到19世纪，工业革命的火车汽笛也传到了这里。格尔利茨成为了纺织业重镇，新的财富催生了新一轮的建筑热潮。但与许多彻底拆旧建新的城市不同，格尔利茨的市民似乎对祖先的遗产有着深厚的敬畏。他们在老城区边缘建设新城区，而将古老的核心小心翼翼地保留下来。更幸运的是，当两次世界大战的阴影笼罩欧洲时，格尔利茨奇迹般地逃过了大规模的轰炸。据说，一位美军指挥官因为被其无与伦比的美丽所震撼，下令放弃空袭计划。这个传说的真伪已难考证，但结果是确凿的：它是德国极少数完全没有遭受战火破坏的历史古城之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后欧洲的重划版图，却给格尔利茨带来了另一种“冻结”。尼斯河成了新的边界，城市的一半划归波兰，成为兹戈热莱茨。格尔利茨一夜之间从中心城市变成了铁幕下的边境小镇，经济发展陷入停滞，人口流失。然而，塞翁失马，焉知非福。正因为缺乏资金进行“现代化”改造，整个老城区的历史建筑得以原封不动地保存下来，仿佛被时光胶囊封存。两德统一后，一项史无前例的、由匿名捐赠者长期资助的修复计划启动了，这位被称为“老城捐赠者”的神秘人投入巨资，一砖一瓦地修复了数百座濒危建筑。这仿佛是一个关于守护的现代童话，让格尔利茨从沉睡中苏醒，光彩更胜往昔。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受格尔利茨老城的层次，建议安排整整一天时间。最佳抵达时间是早上九点前，这时游客还未涌入，阳光柔和，是拍照和体会老城静谧氛围的黄金时刻。整体节奏应该放慢，以徒步探索为主，路线呈一个松散的环状，从外围逐渐深入核心。上午精力充沛时，可以先登高望远把握全貌，然后深入街巷感受细节；中午在历史悠久的餐厅用餐；下午参观核心博物馆和教堂内部，理解其精神内核；傍晚则适合在河边漫步，看落日将对岸的波兰小镇染成金色。这样的安排既有宏观视角，又有微观体验，张弛有度。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午老市场有热闹的每周集市，适合体验本地生活，但也最为拥挤，单纯想感受建筑静谧感的旅人建议避开此时段。
许多最美的文艺复兴庭院属于私人住宅或办公场所，门口若有标志写明“ Privat”或“ Büro”，请勿擅自闯入，在门口欣赏大门即可。
一定要穿一双绝对舒适、适合长时间在凹凸不平的鹅卵石路上行走的鞋子，这是探索这里最重要的装备。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出发，沿着柏林大街轻松步行十分钟，在穿过公园后从布雷斯劳门这座古老的城门正式进入老城世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接前往上劳西茨博物馆的塔楼，趁着早晨清醒一口气爬上去，将红屋顶的海洋、教堂尖塔和远处波兰境内的风景尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的尼克拉街下行，像寻宝一样留意两侧建筑立面上各种有趣的细节，从滑稽的滴水兽到充满象征意义的浮雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老市场选一家带拱廊的咖啡馆坐下，点一杯咖啡和一片当地的“ Baumkuchen”年轮蛋糕，静静观察广场上的市井生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣彼得和保罗教堂，让你的眼睛适应内部的幽暗，然后仰望那座令人屏息的星穹状晚期哥特式网状拱顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访“圣经之家”，这座德国最古老的公民文艺复兴建筑，在其宛如珠宝盒般的彩绘黄金大厅里感受16世纪的极致奢华。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过狭窄的“走廊街”，用手触摸那冰凉的石壁，想象几个世纪以来人们在此擦肩而过的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分漫步到尼斯河畔，走过老桥站在中线，一脚德国一脚波兰，看夕阳为两岸的历史建筑披上同样的暖金色外衣。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`上劳西茨博物馆露台`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，可以拍到老城连绵起伏的屋顶与圣彼得和保罗教堂双塔同框的经典明信片角度，使用长焦镜头压缩空间感尤为震撼。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣彼得和保罗教堂内部中殿`}</h4>
                  <p className="text-sm text-gray-700">{`选择晴朗日子的正午，阳光会透过高高的彩绘玻璃窗射入，在中殿石柱和地面上投下梦幻般的彩色光斑，蹲低机位拍摄能获得极强的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老市场东南角拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光刚好斜射在广场西侧一排文艺复兴建筑的山墙上，利用拱廊作为天然画框进行构图，能拍出富有层次和故事感的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`尼斯河老桥中央`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻（日落后约20分钟），面向德国一侧的老城，灯光初上，天空呈现深蓝色，河水倒映着建筑与天光，能拍出静谧而富有历史感的对称画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“走廊街”巷内`}</h4>
                  <p className="text-sm text-gray-700">{`任何晴朗的白天，走进这条极窄的巷子，抬头向上拍摄一线天般的视角，两侧沧桑的石墙夹着狭长的蓝天，极具视觉冲击力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`利用清晨和黄昏的“黄金小时”光线，能极大提升建筑立面的质感，让那些石雕的阴影细节分外动人。`}</li>
                <li>• {`尊重当地居民隐私，避免将镜头直接对准住宅窗户内或私人庭院中的居民，如需拍摄人物，建议采用远景或背影等环境人像手法。`}</li>
                <li>• {`许多建筑的门环、门锁、窗饰本身就是精美的艺术品，不妨用微距或特写镜头记录这些迷人的细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`火车站附近由家族经营的温馨 pension（公寓式旅馆），房间整洁明亮，主人会热情地为你手绘老城探索地图，并送上自家果园的苹果。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住老城内一栋经过精心修复的文艺复兴时期商人住宅改造的精品酒店，睡在古老的木梁下，清晨被附近教堂的钟声温柔唤醒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`尼斯河畔一座新艺术风格的水畔设计酒店，拥有面对河流和波兰风景的绝佳露台，内部将历史元素与现代舒适完美融合，提供顶级的 Spa 服务。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于老城边缘安静街区的优雅民宿，由一位退休建筑师经营，每个房间的装饰都不同，充满艺术气息，后花园里种满了玫瑰。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`强烈推荐至少有一晚住在老城墙范围内的住宿，这样才能体验入夜后游客散去、古城完全属于本地人的那种静谧魔幻时刻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`格尔利茨治安非常好，即使夜晚独自在老城小巷漫步也倍感安全，可以尽情享受夜间打光后建筑别样的美感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果计划在圣诞市场期间或夏季音乐节期间到访，务必提前数月预订住宿，这时老城内的房间非常抢手。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开格尔利茨许久后，我发现自己最常回味的，不是某一张具体的照片，也不是某一个著名的建筑立面，而是一种整体的、包裹身心的“氛围感”。那是一种由无数细节——脚底石头的触感、空气中清冷的气息、视线所及处和谐的色彩与线条——共同编织而成的宁静与完整。在这个一切都追求更快、更亮、更刺激的世界里，格尔利茨老城的存在本身就像一个温柔的悖论。它不争不抢，只是从容地展示着时间可能带来的另一种结果：不是摧毁，而是沉淀；不是遗忘，而是层叠般的记忆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这就是深度旅行者应该来这里的原因。它不仅仅是为了看“老房子”，而是为了体验一种连续性的价值。在这里，你能真切地触摸到历史不是教科书上断裂的章节，而是像树木的年轮一样，一圈一圈安静地生长在当下生活的肌理之中。它让我们相信，美可以被守护，记忆可以被留存，人类在创造辉煌与应对变迁的过程中，总有一些珍贵的核心值得被小心翼翼、一代一代地传递下去。格尔利茨就是这份信念的实体，是欧洲灵魂深处一个依然平稳跳动着的心脏。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bamberg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班贝格老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bamberg Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ribe" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里伯（丹麦最古老小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ribe</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trebinje" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特雷比涅老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trebinje</p>
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
