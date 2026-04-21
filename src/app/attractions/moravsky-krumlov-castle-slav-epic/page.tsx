import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '摩拉维亚克鲁姆洛夫 Moravský Krumlov｜探寻马蹄形河湾与慕夏《斯拉夫史诗》的隐秘瑰宝 - 最佳欧洲景点',
  description: '说实话，当你第一眼从远处望向摩拉维亚克鲁姆洛夫时，你会有点迷惑。它不像CK小镇那样以明信片般的尖塔群亮相，也不像特尔奇那样色彩规整。它更像一个秘密，半遮半掩地躺在南摩拉维亚起伏的丘陵间。你的视线会首先被那条河——罗克特纳河——吸引，它以一种近乎任性的温柔，绕着小镇画了一个巨大的、近乎封闭的马蹄形圆圈',
}

export default function MoravskyKrumlovCastleSlavEpicPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '南摩拉维亚州', href: '/destinations/europe' },
            { label: '摩拉维亚克鲁姆洛夫', href: '/attractions/moravsky-krumlov-castle-slav-epic' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`摩拉维亚克鲁姆洛夫・Moravský Krumlov・捷克・南摩拉维亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，当你第一眼从远处望向摩拉维亚克鲁姆洛夫时，你会有点迷惑。它不像CK小镇那样以明信片般的尖塔群亮相，也不像特尔奇那样色彩规整。它更像一个秘密，半遮半掩地躺在南摩拉维亚起伏的丘陵间。你的视线会首先被那条河——罗克特纳河——吸引，它以一种近乎任性的温柔，绕着小镇画了一个巨大的、近乎封闭的马蹄形圆圈。晨雾从河面升起，包裹着河心小岛上的树林，而那座有着黄白色外墙的城堡，就静静地矗立在圆圈内侧的悬崖上，像一位沉思的守护者，守着圈内的红屋顶、石板路，和几百年的旧梦。
把车停在河对岸，徒步过桥走进小镇，感官才真正打开。空气里有股好闻的混合味道：刚割过的青草气息，从老房子砖缝里渗出的、带着点潮气的石头味儿，还有不知从哪家后院飘来的烧烤烟熏味。脚下的路不是平整的，是那种被无数马车轮子和鞋底磨得光润的鹅卵石路，走起来需要一点注意力。声音是慵懒的，远处拖拉机的嗡鸣，教堂偶尔敲响的钟声，还有咖啡馆露天座传来杯碟碰撞的清脆响声。这里没有汹涌的人潮，你会看到本地老太太提着网兜慢悠悠地走过广场，店主不紧不慢地擦拭着橱窗。时间在这里，仿佛被那个马蹄形的河湾给兜住了，流得格外缓慢。
而真正让这个地方拥有直击灵魂的重量的，是城堡里曾经长达数十年的守护。当你穿过城堡朴素的庭院，走进那座原本是骑术学校的大厅时，虽然慕夏的巨幅画作《斯拉夫史诗》已于2012年迁回布拉格，但空间里依然残留着某种庄严的寂静。你可以想象，二十幅比墙面还高的画布曾如何在这里排开，描绘着斯拉夫民族神话与历史中的悲欢离合。那一刻，你站立的不仅仅是一个贵族城堡的展厅，更是一个民族在寻求自我认同时，所选定的精神圣殿。这种“曾经存在”的痕迹，比永久陈列更让人浮想联翩，它让这座小镇的宁静，染上了一层深邃的文化乡愁。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，当你第一眼从远处望向摩拉维亚克鲁姆洛夫时，你会有点迷惑。它不像CK小镇那样以明信片般的尖塔群亮相，也不像特尔奇那样色彩规整。它更像一个秘密，半遮半掩地躺在南摩拉维亚起伏的丘陵间。你的视线会首先被那条河——罗克特纳河——吸引，它以一种近乎任性的温柔，绕着小镇画了一个巨大的、近乎封闭的马蹄形圆圈。晨雾从河面升起，包裹着河心小岛上的树林，而那座有着黄白色外墙的城堡，就静静地矗立在圆圈内侧的悬崖上，像一位沉思的守护者，守着圈内的红屋顶、石板路，和几百年的旧梦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在河对岸，徒步过桥走进小镇，感官才真正打开。空气里有股好闻的混合味道：刚割过的青草气息，从老房子砖缝里渗出的、带着点潮气的石头味儿，还有不知从哪家后院飘来的烧烤烟熏味。脚下的路不是平整的，是那种被无数马车轮子和鞋底磨得光润的鹅卵石路，走起来需要一点注意力。声音是慵懒的，远处拖拉机的嗡鸣，教堂偶尔敲响的钟声，还有咖啡馆露天座传来杯碟碰撞的清脆响声。这里没有汹涌的人潮，你会看到本地老太太提着网兜慢悠悠地走过广场，店主不紧不慢地擦拭着橱窗。时间在这里，仿佛被那个马蹄形的河湾给兜住了，流得格外缓慢。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而真正让这个地方拥有直击灵魂的重量的，是城堡里曾经长达数十年的守护。当你穿过城堡朴素的庭院，走进那座原本是骑术学校的大厅时，虽然慕夏的巨幅画作《斯拉夫史诗》已于2012年迁回布拉格，但空间里依然残留着某种庄严的寂静。你可以想象，二十幅比墙面还高的画布曾如何在这里排开，描绘着斯拉夫民族神话与历史中的悲欢离合。那一刻，你站立的不仅仅是一个贵族城堡的展厅，更是一个民族在寻求自我认同时，所选定的精神圣殿。这种“曾经存在”的痕迹，比永久陈列更让人浮想联翩，它让这座小镇的宁静，染上了一层深邃的文化乡愁。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`摩拉维亚克鲁姆洛夫`} />
                <InfoRow label="英文名称" value={`Moravský Krumlov`} />
                <InfoRow label="正式名称" value={`Moravský Krumlov Castle and Historic Town`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南摩拉维亚州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座被马蹄形河湾天然护城河守护了七个多世纪的战略要塞与贵族领地，更是二十世纪大部分时间里，新艺术巨匠阿尔丰斯·慕夏史诗级画作《斯拉夫史诗》的独家珍藏与展示地。`} />
                <InfoRow label="建筑特色" value={`文艺复兴与巴洛克风格的城堡雄踞于山脊，俯瞰着脚下罗克特纳河勾勒出的近乎完美的Ω形河湾，自然与人文防御工事的绝妙结合。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主体，在多次重建中融入了巴洛克与古典主义元素，形成一种敦厚而优雅的中欧贵族庄园气质。`} />
                <InfoRow label="文化价值" value={`它不仅是摩拉维亚地区历史的物理载体，更因曾庇护《斯拉夫史诗》系列而成为捷克民族精神与斯拉夫文化认同的一个重要象征性地标。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡及慕夏画廊开放时间通常为4月至10月，周二至周日 9:00-17:00，周一闭馆；11月至3月仅周末开放或需预约。古镇区域全天开放。具体时间每年微调，建议行前查阅官网。冬季部分服务可能减少。`} />
              <InfoRow label="门票价格" value={`城堡及慕夏画廊联票约180捷克克朗，学生及老年人优惠票约120捷克克朗。仅参观城堡庭院免费。提供英语导览服务，需额外付费并提前预约。`} />
              <InfoRow label="地址" value={`Zámek 1, 672 01 Moravský Krumlov, Czechia`} />
              <InfoRow label="交通方式" value={`最近的国际机场在布尔诺或维也纳。从布尔诺中央火车站乘坐区域火车（S-Bahn）前往“Moravský Krumlov”站，车程约1小时，班次每小时1-2班。出火车站后，步行约15-20分钟上坡即可抵达城堡和老城广场。自驾是最灵活的方式，从布尔诺出发约50分钟车程，古镇外围有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要听懂摩拉维亚克鲁姆洛夫的低语，你得把手放在它城堡那些冰凉的石墙上，感受纹路里的故事。一切始于13世纪中叶，波西米亚国王普热米斯尔·奥托卡二世的一个决定。他看中了罗克特纳河这个鬼斧神工的马蹄形弯道，这简直是天然的护城河。于是，一座带有早期哥特式宫殿的城堡在这里拔地而起，成为监控摩拉维亚南部重要商道、抵御来自东南方威胁的前哨。最初的领主是王室，后来几经转手，在贵族间流转。中世纪的日子并不平静，胡斯战争的烽火也曾烧到这里，城堡在战乱中受损、加固，见证着王国版图上的每一次悸动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点在文艺复兴的晨光中到来。16世纪，这座城堡迎来了它历史上最重要的家族之一——霍夫曼家族。尤其是利希滕斯坦的贵族约翰·霍夫曼，他决定赋予这座军事堡垒以新的面貌。于是，粗糙的防御工事被逐步改建成舒适宜居的文艺复兴式庄园。我们今天看到的城堡主体格局，那种四翼围合、中央设有拱廊庭院的优雅形制，正是在那个时期定型的。你可以想象，当时的大厅里回荡着乐声，窗外是修剪整齐的花园，贵族们在这里谈论艺术、政治与远方，战争的阴云似乎暂时被关在了马蹄形河湾之外。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的浪潮总有起伏。三十年战争期间，城堡被瑞典军队占领并遭受严重破坏。硝烟散去后，它迎来了巴洛克时代的修复与美化，内部装饰增添了华丽的灰泥浮雕和壁画，外观也更加规整。但它的军事价值已然褪色，更多是作为一处庞大的世袭领地和行政管理中心存在。在接下来的几个世纪里，它像一位沉默的贵族老者，看着脚下的镇民生活，经历着奥匈帝国的繁荣与衰微，自身则在不同贵族家族间传承，内部空间根据时代趣味被不断改造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正让摩拉维亚克鲁姆洛夫的名字超越地域，写入捷克乃至世界艺术史的，是20世纪初的一个决定。1921年，新艺术运动大师阿尔丰斯·慕夏，这位以描绘优雅女性闻名的画家，却将自己晚年全部心血倾注于宏大的民族主题——《斯拉夫史诗》。这是一系列描绘斯拉夫民族从神话到19世纪历史瞬间的巨型画作，高达六米，长达八米。完成之后，需要一个合适的展出地。当时布拉格没有现成的场馆能容纳它们。于是，摩拉维亚克鲁姆洛夫城堡宽敞的骑术大厅进入了视野。经过谈判，小镇欣然接受了这份文化馈赠（或者说重担）。从1928年开始，整整二十幅巨作在这里悬挂、展出，直到二战爆发。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争和其后的共产主义时期是阴郁的篇章。纳粹曾觊觎这些画作，战后它们虽回归，但城堡被国有化，一度作为仓库和工厂宿舍， condition日益恶化。慕夏的作品因其“资产阶级民族主义”主题而不受当时政权待见，在缺乏维护的大厅里蒙尘。但小镇的人们，以及一些有识之士，在艰难中依然尽力守护着这份珍宝。直到1989年天鹅绒革命后，城堡和画作的命运才迎来转机。尽管关于画作最终归属地的争议不断，但无可否认，长达八十余年的羁绊，已将这《斯拉夫史诗》的魂，永久地镌刻在了摩拉维亚克鲁姆洛夫的记忆里。今天的修复与开放，是对这段漫长守护史的致敬。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一个完整的白天来沉浸于此。最好在上午九点左右抵达，这时晨光柔和，旅游团还未涌入。整个游览节奏宜慢不宜快，核心是感受“空间”与“痕迹”。先从外部领略河湾与城堡的整体气势，然后深入城堡内部感受历史的层叠，最后在古镇里迷失，体验当下的生活气息。整体耗时约6-8小时，包括一顿悠闲的午餐和咖啡时间。这样的安排能让你既抓住摄影的黄金光线，又能避开午后可能出现的零星人流高峰，更重要的是，留出足够的时间让这座小镇的宁静氛围渗透进你的旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部展览信息以捷克语为主，虽有英语摘要但建议提前在手机上下载好官方导览APP或了解背景知识，体验会深刻得多。
小镇餐饮选择有限且关门较早，最好在下午两点前解决午餐，晚餐选择更少，若非住宿于此建议规划好离开时间。
穿着绝对舒适的步行鞋，古镇内全是高低起伏的鹅卵石路，高跟鞋或硬底鞋会是一场灾难。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在河湾北岸的观景台附近，先徒步一小段路到最佳观景点，屏息凝望整个马蹄形河湾将小镇温柔环抱、城堡巍然屹立的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石桥进入古镇范围，任由自己迷失在通往城堡的上坡小巷里，用脚尖感受每一块被岁月打磨得光滑的鹅卵石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡庭院，别急着钻进室内，先绕着拱廊慢慢走一圈，抬头看那些文艺复兴风格的彩绘窗楣和斑驳的家族徽章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少两小时沉浸在城堡辟出的“慕夏与斯拉夫史诗”纪念展厅，虽然真迹已不在，但通过高清复制品、详尽的史料和那空阔高大的展厅本身，去感受那段守护岁月的重量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧门走出，沿着城墙边的步道缓缓下行，一路俯瞰河湾不同角度的景致和镇民们打理得井井有条的后花园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到老城广场，在带有拱廊的某家本地餐馆户外座坐下，点一份摩拉维亚风味的烤鸭配酸菜馒头片，边吃边看广场上的日常生活剧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后不必设定目的地，随意钻进广场辐射出去的某条小巷，邂逅巴洛克式的瘟疫纪念柱、粉彩外墙的小房子，或者一家藏着老爷爷手艺人的传统玩具店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，再次回到河湾边，选择与上午不同的另一侧漫步，看夕阳的余晖将城堡的轮廓染成金红色，河水倒映着天光云影，为一日的探访画上圆满句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河湾北侧高地观景台`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，使用长焦镜头压缩空间，将城堡、小镇红屋顶与前景的河流弯道一同纳入画框，形成完美的几何构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡庭院拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光斜射入庭院时，站在拱廊阴影中向外拍摄，利用拱门形成天然画框，焦点对准被阳光照亮的中庭石砖或对面建筑细节，光影对比强烈。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城广场东南角`}</h4>
                  <p className="text-sm text-gray-700">{`下午时段，蹲低身体用广角镜头仰拍，将广场色彩柔和的巴洛克式建筑立面、古老的喷泉以及远处城堡的塔楼一同收入镜头，营造丰富的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`罗克特纳河沿岸步道`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻，在河湾南岸寻找一棵形态优美的树作为前景，拍摄对岸城堡和民居灯光初上的倒影，水面平静时效果最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡后方花园边缘`}</h4>
                  <p className="text-sm text-gray-700">{`从这里可以捕捉到城堡厚重墙体与下方蜿蜒河流、葱郁林木的同框画面，尤其春季树木新绿或秋季层林尽染时，色彩对比极具视觉冲击力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄全景前，务必查询当地最新法规，并绝对尊重居民隐私，避免在住宅区上空悬停。`}</li>
                <li>• {`拍摄当地居民，尤其是老人或孩童，请务必先微笑示意并获得对方同意，这是一种基本的礼貌和尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河湾景观民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在马蹄形河湾内侧的老房子里，推开窗就是潺潺流水与对岸的城堡视图，夜晚安静得只能听到水声与虫鸣。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城堡附近家庭公寓`}</h4>
                  <p className="text-sm text-green-800">{`由城堡附近一栋历史住宅改造，房东老太太会为你准备丰盛的摩拉维亚早餐，并讲述她童年时在城堡院子里玩耍的故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`镇外乡村庄园`}</h4>
                  <p className="text-sm text-yellow-800">{`若自驾，可选择距离小镇车程十分钟内的乡村庄园改建酒店，享受广阔的田野风光、自家酒窖的葡萄酒，以及彻底的田园寂静。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`布尔诺城市酒店+当日往返`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更多的餐饮夜生活选择，可以住在区域中心布尔诺，当天乘火车或驾车往返，虽少了晨昏的静谧，但更为便利灵活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇内住宿数量非常有限，尤其在夏季和周末，务必提前数月预订，临时寻找几乎不可能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在镇上能获得独一无二的清晨与夜晚体验，整个小镇仿佛是你的私人庭院，这份宁静是布尔诺等大城市无法比拟的。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开摩拉维亚克鲁姆洛夫的时候，我背包里好像没有多出什么纪念品，但心里却沉甸甸地装满了一种复杂的情绪。那不只是对美景的赞叹，更多的是一种“幸会”的感慨。幸会了，这个不争不抢、安于河湾一隅的小镇；幸会了，那段将民族艺术瑰宝默默珍藏于怀的厚重历史。在这个人人追逐热门打卡地的时代，它提供了一种截然不同的旅行价值：不是震撼，而是浸润；不是喧嚣的展示，而是沉默的诉说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它教会我，有些地方的意义，不在于它永恒拥有什么，而在于它曾经守护过什么。城堡大厅里那些空旷的挂钩痕迹，比挂满画作时更令人深思。它像一位完成了重要使命的长者，如今可以平和地晒着太阳，看着河水依旧绕着弯子流淌。对于渴望深度游的灵魂来说，这里是一处绝佳的“呼吸之所”。它让你从布拉格的炫目和CK的拥挤中抽离出来，真正感受到中欧大地的心跳——那种沉稳、内敛、带着些许忧伤却又无比坚韧的心跳。来这里，不是为了收集另一个地名，而是为了在一条马蹄形的河流边，聆听时间流淌的另一种声音，并在这种声音里，找到与自己内心对话的片刻宁静。这，或许才是旅行能带给我们的、最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kokorin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科科日恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kokořín Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lednice-valtice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱德尼采–瓦尔季采庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lednice–Valtice Cultural Landscape</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/karlovy-vary-colonnades" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡罗维发利温泉回廊</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlovy Vrum Colonnades</p>
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
