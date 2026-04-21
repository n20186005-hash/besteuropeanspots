import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塔尔图大学城 Tartu University Town｜波罗的海的“雅典”，在古老学院穹顶下与思想相遇 - 最佳欧洲景点',
  description: '第一次踏入塔尔图大学城，你会感觉像闯进了一本厚重的精装书里。空气里有股特殊的味道——是秋天厚厚的橡树叶在潮湿石板路上慢慢腐烂的 earthy 气息，混合着从老建筑石缝里透出来的、几个世纪积累下的凉意，还有不远处咖啡馆飘来的新鲜研磨咖啡豆的香气。耳朵里听到的是多层声音的叠奏：脚踏在凹凸不平的鹅卵石上清...',
}

export default function TartuUniversityOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '爱沙尼亚', href: '/destinations/estonia' },
            { label: '塔尔图大学城', href: '/attractions/tartu-university-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塔尔图大学城・Tartu University Town・爱沙尼亚・塔尔图`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次踏入塔尔图大学城，你会感觉像闯进了一本厚重的精装书里。空气里有股特殊的味道——是秋天厚厚的橡树叶在潮湿石板路上慢慢腐烂的 earthy 气息，混合着从老建筑石缝里透出来的、几个世纪积累下的凉意，还有不远处咖啡馆飘来的新鲜研磨咖啡豆的香气。耳朵里听到的是多层声音的叠奏：脚踏在凹凸不平的鹅卵石上清脆的“咔哒”声，某个院子里传来模糊的钢琴练习曲片段，学生们三五成群，用爱沙尼亚语快速而轻柔地交谈，间或爆发出清亮的笑声。这一切都被包裹在一种独特的、黄灰色的柔和光线里，那是波罗的海天空特有的、仿佛被云层过滤过的漫射光。
这里最动人的，不是某个单一的宏伟建筑，而是一种无处不在的、流动的“场”。学生们不是匆匆过客，而是这片土地真正的主人。你会看到他们坐在13世纪教堂的台阶上热烈讨论，在18世纪教授故居改造的图书馆里埋头苦读，或者在广场的喷泉边晒着太阳吃三明治。学术生活与历史肌理在这里水乳交融，知识不是被供奉在玻璃柜里，而是活生生地流淌在每一条街道、每一扇彩窗之后。那种感觉，就像闯进了一个持续运转了四百年的、巨大的“思想工作坊”。
大学城的核心魅力，在于它那种举重若轻的智慧氛围。它庄严，却不令人生畏。新古典主义的大学主楼有着宏伟的柱廊和三角楣，但门口总停着几辆随意摆放的自行车。著名的“被囚禁的天使”雕塑静静立于庭院，而旁边的布告栏上却贴着最新摇滚音乐会的海报。这种反差——永恒的学术追求与鲜活的青春生命力的并置——是塔尔图独有的韵律。在这里，你会真切地感受到，智慧不是尘封的过去，而是一种持续进行、充满呼吸的现在。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次踏入塔尔图大学城，你会感觉像闯进了一本厚重的精装书里。空气里有股特殊的味道——是秋天厚厚的橡树叶在潮湿石板路上慢慢腐烂的 earthy 气息，混合着从老建筑石缝里透出来的、几个世纪积累下的凉意，还有不远处咖啡馆飘来的新鲜研磨咖啡豆的香气。耳朵里听到的是多层声音的叠奏：脚踏在凹凸不平的鹅卵石上清脆的“咔哒”声，某个院子里传来模糊的钢琴练习曲片段，学生们三五成群，用爱沙尼亚语快速而轻柔地交谈，间或爆发出清亮的笑声。这一切都被包裹在一种独特的、黄灰色的柔和光线里，那是波罗的海天空特有的、仿佛被云层过滤过的漫射光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最动人的，不是某个单一的宏伟建筑，而是一种无处不在的、流动的“场”。学生们不是匆匆过客，而是这片土地真正的主人。你会看到他们坐在13世纪教堂的台阶上热烈讨论，在18世纪教授故居改造的图书馆里埋头苦读，或者在广场的喷泉边晒着太阳吃三明治。学术生活与历史肌理在这里水乳交融，知识不是被供奉在玻璃柜里，而是活生生地流淌在每一条街道、每一扇彩窗之后。那种感觉，就像闯进了一个持续运转了四百年的、巨大的“思想工作坊”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`大学城的核心魅力，在于它那种举重若轻的智慧氛围。它庄严，却不令人生畏。新古典主义的大学主楼有着宏伟的柱廊和三角楣，但门口总停着几辆随意摆放的自行车。著名的“被囚禁的天使”雕塑静静立于庭院，而旁边的布告栏上却贴着最新摇滚音乐会的海报。这种反差——永恒的学术追求与鲜活的青春生命力的并置——是塔尔图独有的韵律。在这里，你会真切地感受到，智慧不是尘封的过去，而是一种持续进行、充满呼吸的现在。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塔尔图大学城`} />
                <InfoRow label="英文名称" value={`Tartu University Town`} />
                <InfoRow label="正式名称" value={`塔尔图大学城（历史学术区）`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`塔尔图`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`爱沙尼亚乃至波罗的海地区最古老、最负盛名的学术摇篮与精神文化中心。`} />
                <InfoRow label="建筑特色" value={`新古典主义风格的庄严主楼与散落各处、历经几个世纪的朴素学者住宅、哥特式教堂尖塔及苏联时期功能建筑的奇妙融合。`} />
                <InfoRow label="建筑风格" value={`以19世纪初的新古典主义为主体，混杂了巴洛克、哥特复兴及20世纪现代主义的痕迹。`} />
                <InfoRow label="文化价值" value={`这里不仅是知识的殿堂，更是爱沙尼亚民族意识觉醒、语言复兴和独立运动的思想策源地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`大学城公共区域（街道、广场）全天24小时开放。具体建筑开放时间各异：大学主楼（University of Tartu Main Building）通常为周一至周五 10:00-18:00，周末 12:00-17:00；大学艺术博物馆（Tartu University Art Museum）周二至周日 11:00-17:00。注意，大学学期期间（9月至次年6月）校园内活动更多、氛围更浓；暑假（7-8月）部分设施可能缩短开放时间或维护。重大节日如独立日（2月24日）、仲夏节（6月24日）可能有特别活动或闭馆安排。`} />
              <InfoRow label="门票价格" value={`漫步大学城街区本身免费。进入核心建筑需购票：大学主楼历史展厅及“被囚禁的天使”雕塑门票约为5欧元；大学艺术博物馆门票约4欧元。学生、儿童及65岁以上长者享有折扣票（通常半价）。持有塔尔图旅游卡（Tartu Card）可免费进入多数博物馆并享受公共交通优惠。`} />
              <InfoRow label="地址" value={`Ülikooli 18, 51003 Tartu, Estonia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是塔尔图机场（Tartu Airport，约5公里），航班较少。大多数游客会先飞抵首都塔林（Tallinn），然后转乘交通工具。从塔林出发最推荐火车：塔林中央火车站（Tallinn Balti jaam）乘坐舒适电气火车直达塔尔图火车站（Tartu jaam），车程约2小时10分钟，班次频繁（约每小时一班），可通过Eesti Liinirongid官网或App提前购票。抵达塔尔图火车站后，步行即可轻松到达大学城核心区，距离仅1.2公里，约15-20分钟惬意步行，沿途已开始感受大学城的学术氛围。市内公共交通便利，但步行是探索这片紧凑区域的最佳方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事得从一位遥远的瑞典国王说起。1632年，瑞典国王古斯塔夫二世·阿道夫，那位北方雄狮，在征战途中做出了一个深远影响波罗的海命运的决定：在当时的利沃尼亚地区（今爱沙尼亚南部）建立一所大学。他的初衷或许混合了帝国教化与军事需求，但这粒种子，却在塔尔图这片土地上扎下了不可动摇的根。最初名为“古斯塔夫学院”的学府，在瑞典统治下蹒跚起步，教授神学、法律和哲学，为波罗的海德意志贵族和本地精英提供教育。然而，北方大战的烽火席卷而来，大学在17世纪末一度关闭，仿佛刚萌芽的智慧之火，在战乱的风中摇曳欲熄。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机在19世纪初随着俄罗斯帝国而来。1802年，大学在沙皇亚历山大一世的支持下重新开张，并正式更名为“塔尔图大学”。这个时期是关键性的“塑造期”。帝国从德国聘请了大批杰出学者——想想那些星光熠熠的名字：生物学家卡尔·恩斯特·冯·贝尔， embryology 的奠基人；物理学家格奥尔格·弗里德里希·帕尔罗特，他在这里建造了观测台。他们将德意志严谨的学术传统带到了这里，同时，大学的主建筑群也在此时拔地而起，由里加建筑师约翰·威廉·克劳斯设计的新古典主义风格主楼，奠定了今天大学城庄严而和谐的建筑基调。这段时间，大学城成了一个奇特的“文化飞地”，德语是学术语言，但周围是爱沙尼亚的乡村与农民。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的灵魂注入，发生在19世纪中后期。这就是著名的“民族觉醒”时代。塔尔图大学，尽管最初由德意志精英主导，却不可思议地成为了爱沙尼亚民族文化复兴的温床。学生们开始收集民间诗歌、研究爱沙尼亚语、追溯本土历史。雅各布·赫特这样的学者，毕生致力于爱沙尼亚语言和文化研究。大学成为了孕育民族知识分子和未来国家领袖的摇篮。这股思潮在建筑上也有体现，一些爱沙尼亚民族浪漫主义风格的学生会建筑开始出现，为严谨的新古典主义街区增添了不一样的情感色彩。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪的疾风骤雨给了大学城最严酷的考验。两次世界大战，尤其是苏联的占领与统治，对这里是巨大的创伤。大学被国有化，意识形态控制收紧，许多教授流亡海外或被镇压。然而，韧性就在这里体现。学术的火种在地下、在私下的讨论中、在隐秘的手稿传递中保存了下来。古老的建筑虽然蒙尘，但石墙记住了每一次思想的低语。令人惊叹的是，1987年，正是在塔尔图大学的校园里，爆发了首次公开要求恢复爱沙尼亚独立的大规模青年抗议。这所学府，再次站在了历史转折的风口浪尖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天漫步于此，你脚下踩着的每一块石头，都见证过这所有的变迁：瑞典的雄心、德意志的学术、俄罗斯帝国的规划、爱沙尼亚民族的呐喊、苏联时期的沉默与抗争，以及最终重获独立后的蓬勃重生。它不是一座凝固的博物馆，而是一层又一层历史与思想沉积而成的活体地层，至今仍在生长新的年轮。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味塔尔图大学城的精髓，我强烈建议你安排一整个白天，从清晨持续到傍晚。早晨九点左右抵达最佳，这时游客尚未涌入，阳光柔和，正是学生们夹着书本匆匆赶往讲堂的时候，你能捕捉到最本真的学术生活节奏。整体游览耗时约6-8小时，节奏宜张弛有度：上午精力充沛时探访核心历史建筑与博物馆，下午漫步于更生活化的学院街区和花园，傍晚则留给自己在广场或河岸边发呆，看天色变幻。这样的安排能让你由表及里，从宏伟的建筑外观深入到它内在的人文脉搏，最后以宁静的沉思收尾。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周一前往，因为许多博物馆和室内场馆会在周一闭馆，会让你错过很多精彩内容。这里的石板路和鹅卵石街道对行李箱轮子和高跟鞋极不友好，务必穿一双舒适耐走的平底鞋。爱沙尼亚人普遍英语很好且乐于助人，但主动问路时请保持礼貌和微笑，一句简单的“Tere”（你好）就能迅速拉近距离。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地标性的大学主楼（Ülikooli 18）的宏伟柱廊下开始，仰头细看三角门楣上的拉丁文铭文和智慧女神密涅瓦的雕像`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入主楼中庭，寻找那座静默而充满力量的“被囚禁的天使”雕塑，感受它如何在方寸之地诉说自由与约束的永恒命题`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上主楼古老的木质楼梯，参观历史悠久的“封印厅”和大学艺术博物馆，让眼睛掠过几个世纪以来的校长肖像与学术珍宝`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主楼后门穿出，沿着满是书卷气的Lossi街缓步下行，你会路过一排排色彩柔和、曾是教授住宅的古典小楼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在Toomemägi（座堂山）山脚下驻足，仰望那座仅存残垣却更显壮美的塔尔图大教堂遗址，以及如今置身其中的大学历史博物馆`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间爬上座堂山，在绿树成荫的公园长椅上坐下，俯瞰红瓦黄墙的大学城全景与蜿蜒的埃马约吉河`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后钻进Jaani街附近的狭窄小巷，探索那些由老建筑改造的独立书店、学生咖啡馆和二手唱片店，尝尝本地学生热爱的馅饼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到市政厅广场（Raekoja plats），在著名的“情侣之吻”雕塑旁的咖啡馆外摆张椅子，点一杯当地啤酒，看日落金光逐渐染红整个广场的建筑立面`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大学主楼柱廊的侧面视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的斜阳会为白色的柱廊打上长长的、富有戏剧性的阴影，退后几步用广角镜头可以拍出建筑的纵深与学子匆匆走过的动态感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`座堂山公园的“天使桥”上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或雨后的黄昏，站在桥中央向西眺望，可以将残破的大教堂拱门、大学历史博物馆的红色屋顶以及远处的城市轮廓一同收入镜中，雾气氤氲时氛围绝佳`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Lossi街与Küüni街转角处`}</h4>
                  <p className="text-sm text-gray-700">{`这里有一栋明黄色的巴洛克风格老房子与背后朴素的功能主义苏联建筑形成鲜明对比，等待一个骑自行车的学生穿过画面中央，能瞬间捕捉到时空交汇的趣味`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`市政厅广场的喷泉边低角度仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`以喷泉溅起的水珠为前景，仰拍后方色彩缤纷的联排房屋和市政钟楼，最佳光线是晴朗日子的正午前后，色彩饱和度最高`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`大学主楼内部旋转楼梯的俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`从楼梯最高处的平台向下拍摄螺旋形的木质楼梯井，利用自然光从侧面窗户照射进来的光线，可以拍出极具几何美感和岁月质感的明暗对比`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`爱沙尼亚人对隐私比较看重，拍摄正在学习或交谈的学生时请尽量保持距离，使用长焦镜头或征得同意。冬季（12月-2月）的塔尔图白天很短，但“蓝色时刻”（日出前和日落后的深蓝色天光）会持续很久，是拍摄灯光初亮的建筑和街景的魔法时间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`学生氛围之选`}</h4>
                  <p className="text-sm text-blue-800">{`座堂山脚下由老学生宿舍改造的精品旅舍，房间简洁明亮，公共厨房里总能遇见来自世界各地的年轻学者和背包客，信息交流本身就是旅途的一部分`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-green-800">{`位于大学城主街一栋19世纪教授宅邸内的精品酒店，保留了高高的天花板、镶木地板和复古家具，清晨在窗边就能看到教授们曾经看到过的街景`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计美学之选`}</h4>
                  <p className="text-sm text-yellow-800">{`埃马约吉河对岸新建的设计酒店，房间拥有俯瞰整个大学城和老城的全景落地窗，现代极简的风格与对岸的历史景观形成有趣对话，是思考过去与未来的完美空间`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-purple-800">{`离大学城步行十分钟的一处安静街区，房东是一位退休的大学图书馆员，她的公寓里满是书籍，早餐时会和你分享关于塔尔图知识界最生动的趣闻轶事`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`大学城核心区的住宿在毕业季（6月）和开学季（9月初）非常紧俏，务必提前数月预订。选择河对岸的住宿虽然视角绝佳，但夜间往返需要过桥，冬季河风会非常寒冷，需做好准备。爱沙尼亚治安总体良好，大学区更是如此，夜晚独自步行也很安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开塔尔图大学城好些日子了，但那种独特的“思想的气场”却始终萦绕不去。它不像那些仅供仰望的宏伟古迹，给人带来的是瞬间的震撼，而后渐渐模糊。它更像一种缓慢释放的、温和而坚定的渗透。你会记得在街角咖啡馆听到邻桌关于哲学命题的激烈辩论，会记得在古老图书馆里触摸书脊时指尖传来的微凉触感，会记得夕阳下学生们坐在数百年前的台阶上，就像无数前辈曾经做过的那样，畅想着未来。这里的时间是双层的：一层是凝固在石头里的厚重历史，另一层是奔涌在年轻血液里的、鲜活迸发的当下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、信息碎片化的时代，塔尔图大学城的存在本身就是一个温柔的抵抗。它提醒我们，有些地方，其核心价值不在于消费和观光，而在于持续的思考、对话与创造。它告诉我们，智慧需要容器，需要时间的包浆，需要一代又一代人安静地坐在同一盏灯下，去接力完成那些关于真理、美与自由的巨大拼图。每一位渴望深度游的旅人，都应该来这里住上几日。不是为了打卡，而是为了让自己沉浸在这种“被智慧包裹”的体验里。在这里，你不仅能看见欧洲的历史，更能触摸到人类思想那跳动不息、温暖而坚韧的脉搏。这趟旅程，最终会成为一次对自己内心的叩问与滋养。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tartu-university-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu University City</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tartu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/parnu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    派
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">派尔努老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pärnu Old Town</p>
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
