import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科英布拉大学城 Coimbra | 探寻欧洲最古老学府的知识圣殿与青春悸动 - 最佳欧洲景点',
  description: '还记得我第一次爬上科英布拉那座陡峭山丘时的感觉吗？气喘吁吁，但一回头，整条蒙德古河像一条银色的绶带，静静铺在脚下城市的红瓦屋顶之间。而当你转过身，面前就是那扇沉重的“铁门”，它仿佛一道时光结界。跨进去，世界的喧嚣瞬间被过滤掉了，空气里飘着旧书页、石壁青苔和远处咖啡的混合气味。穿着黑色长袍的学生夹着书...',
}

export default function CoimbraUniversityCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '科英布拉大学城', href: '/attractions/coimbra-university-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科英布拉大学城・Coimbra・葡萄牙・科英布拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次爬上科英布拉那座陡峭山丘时的感觉吗？气喘吁吁，但一回头，整条蒙德古河像一条银色的绶带，静静铺在脚下城市的红瓦屋顶之间。而当你转过身，面前就是那扇沉重的“铁门”，它仿佛一道时光结界。跨进去，世界的喧嚣瞬间被过滤掉了，空气里飘着旧书页、石壁青苔和远处咖啡的混合气味。穿着黑色长袍的学生夹着书本，三三两两从你身边快步走过，袍角翻飞，他们的交谈声、笑声在古老的石砌回廊里碰撞出奇妙的回响，那是持续了七百多年的青春韵律。
这里不像一个封闭的校园，它就是一座垂直的城市，一座为知识而建的山城。小巷陡峭如迷宫，连接着各个学院、教堂和学生聚居的古老屋舍。午后的阳光把蜂蜜色的石头晒得发烫，光影在雕刻着大学纹章的墙面上缓慢移动。你能在巴洛克图书馆的绝对寂静中，听到自己的心跳；也能在下一秒，从某扇敞开的窗户里，听到吉他拨弦和学生练习法多歌声的深情嘶哑。这种神圣与世俗、永恒与瞬息的交织，是科英布拉最迷人的呼吸。
当地人生活完全与大学融为一体。咖啡馆里，老教授在激烈争论，旁边桌上则是熬夜赶论文的学生。山脚下的老城区市场，摊主会用带着骄傲的语气向你推荐“我们大学的纪念品”。傍晚，最好的风景不在观景台，而在那些不起眼的阶梯转角，看落日把整个大学城的塔楼和屋顶染成金红，而山下城市的灯火渐次亮起，仿佛知识的光晕正在向人间播撒。它的核心魅力，就在于这种“活着的遗产”状态——它不是博物馆里冰冷的展品，而是一颗仍然在强劲跳动、塑造着一代代年轻人灵魂的古老心脏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得我第一次爬上科英布拉那座陡峭山丘时的感觉吗？气喘吁吁，但一回头，整条蒙德古河像一条银色的绶带，静静铺在脚下城市的红瓦屋顶之间。而当你转过身，面前就是那扇沉重的“铁门”，它仿佛一道时光结界。跨进去，世界的喧嚣瞬间被过滤掉了，空气里飘着旧书页、石壁青苔和远处咖啡的混合气味。穿着黑色长袍的学生夹着书本，三三两两从你身边快步走过，袍角翻飞，他们的交谈声、笑声在古老的石砌回廊里碰撞出奇妙的回响，那是持续了七百多年的青春韵律。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不像一个封闭的校园，它就是一座垂直的城市，一座为知识而建的山城。小巷陡峭如迷宫，连接着各个学院、教堂和学生聚居的古老屋舍。午后的阳光把蜂蜜色的石头晒得发烫，光影在雕刻着大学纹章的墙面上缓慢移动。你能在巴洛克图书馆的绝对寂静中，听到自己的心跳；也能在下一秒，从某扇敞开的窗户里，听到吉他拨弦和学生练习法多歌声的深情嘶哑。这种神圣与世俗、永恒与瞬息的交织，是科英布拉最迷人的呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人生活完全与大学融为一体。咖啡馆里，老教授在激烈争论，旁边桌上则是熬夜赶论文的学生。山脚下的老城区市场，摊主会用带着骄傲的语气向你推荐“我们大学的纪念品”。傍晚，最好的风景不在观景台，而在那些不起眼的阶梯转角，看落日把整个大学城的塔楼和屋顶染成金红，而山下城市的灯火渐次亮起，仿佛知识的光晕正在向人间播撒。它的核心魅力，就在于这种“活着的遗产”状态——它不是博物馆里冰冷的展品，而是一颗仍然在强劲跳动、塑造着一代代年轻人灵魂的古老心脏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科英布拉大学城`} />
                <InfoRow label="英文名称" value={`Coimbra`} />
                <InfoRow label="正式名称" value={`科英布拉大学（阿尔塔与索菲亚校区）`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`科英布拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙最古老、也是世界上持续运作历史最悠久的大学之一，数个世纪以来一直是该国知识与精英教育的绝对心脏。`} />
                <InfoRow label="建筑特色" value={`一座雄踞山丘之上的“空中学院城”，建筑群随山势错落铺展，完美融合了庄严的学术殿堂与蜿蜒的中世纪老街巷。`} />
                <InfoRow label="建筑风格" value={`一部活生生的建筑史教科书，从厚重的罗马式、华丽的曼努埃尔式、繁复的巴洛克到新古典主义风格，层层叠加，清晰可见。`} />
                <InfoRow label="文化价值" value={`联合国教科文组织世界遗产，象征着葡萄牙语世界的知识传承，更是法多音乐（法多德科英布拉）的诞生地，体现了学术严谨与青春激情独一无二的共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`大学建筑群（如乔安娜图书馆、皇家宫殿、圣米格尔礼拜堂）开放时间通常为工作日上午9:30至晚上7点，夏季（4月至10月）可能延长至晚上7:30，周末和节假日下午开放时间会缩短，具体需查询官网。整个大学城的历史街区与公共广场则全天24小时开放。需特别注意，乔安娜图书馆实行分时段预约制以控制人流，且每年1月1日、复活节周日、5月1日和12月25日闭馆。`} />
              <InfoRow label="门票价格" value={`大学历史建筑群联票（包含乔安娜图书馆、皇家宫殿、圣米格尔礼拜堂）约为12.5欧元。单独参观乔安娜图书馆约为10欧元。学生（需出示有效国际学生证）、65岁以上老人及12岁以下儿童享有折扣。大学塔楼登顶需额外支付约2欧元。部分学院建筑免费开放。`} />
              <InfoRow label="地址" value={`科英布拉大学，Praça da Porta Férrea, 3000-447 Coimbra, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本东方火车站乘坐城际火车（IC或阿尔法列车），约1小时45分钟即可抵达科英布拉-B站。从波尔图-坎帕汉站出发，车程约1小时15分钟。科英布拉有两个主要火车站，前往大学城请在“Coimbra-B”下车，然后转乘当地穿梭火车（约5分钟）或乘坐1路、6路、7路公交车（约15分钟）即可到达大学山脚下。自驾可将车停放在山下的停车场（如Praça do Comércio附近），然后步行上山，古城内街道狭窄且多为单行线，不建议驾驶。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1290年说起，国王迪尼斯一世在里斯本创立了这所大学，但它的早年岁月可谓颠沛流离，在里斯本和科英布拉之间来回搬迁了好几次。直到1537年，国王若昂三世一锤定音，将大学永久安置在科英布拉这座山顶的王宫之内。想想看，把国王的家腾出来给学生们读书，这决心可真不小。从此，这座俯瞰河流的宫殿，正式变身为葡萄牙的“智慧之冠”。最初的岁月，课程围绕神学、法学和医学展开，整个学术空气深受天主教耶稣会的影响，严谨甚至有些刻板。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点在18世纪，那位以铁腕和开明著称的庞巴尔侯爵上台了。他驱逐了耶稣会，对大学进行了一场大刀阔斧的现代化改革。他引入了牛顿的物理学、新兴的自然科学，更新了医学教学，那些古老的宫殿建筑里，开始增设实验室、解剖室和丰富的自然历史收藏。你能在今天大学的科学博物馆里，看到那个时代留下的、令人惊叹的物理学和动物学标本，它们沉默地诉说着一场静默的知识革命。也是在这个时期，那座举世闻名的乔安娜图书馆被建造起来，它不仅是藏书的圣殿，更是启蒙思想与艺术奢华的完美结合体，金碧辉煌的洛可可风格，仿佛在宣告：追求知识，是世上最华美、最值得投入的事业。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，有知识的地方就有青春，有青春的地方就有反叛与浪漫。于是，科英布拉发展出了自己独特而浓郁的学生文化。标志性的黑色长袍，最初是为了让学生们不分贫富、看起来整齐划一，后来却成了身份与传统的象征。学生们会组建自己的“共和国”——一种自发自治的学生宿舍，里面充满了兄弟情谊、深夜辩论和酒精。更美妙的是，这里孕育了独一无二的“法多德科英布拉”。与里斯本法多的哀怨缠绵不同，科英布拉的法多是男性的、学术的、充满理想主义的。它通常在夜色中，由穿着黑袍的学生在窗前或街头唱起，歌词常常引用诗歌，主题围绕着爱情、离别、对学术时光的怀念，吉他伴奏也更清晰、更富有叙事性。这种歌声，是学术灵魂最感性的出口。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几百年来，这所大学目睹了王国的兴衰、战争的动荡、思想的禁锢与解放。它像一座坚固的灯塔，即使在最黑暗的独裁时期，也暗中庇护着自由思考的火种。一代又一代的政治家、作家、科学家从这里走出，塑造了葡萄牙乃至整个葡语世界的面貌。2013年，联合国教科文组织将科英布拉大学列入世界遗产名录，理由正是其独特的“大学-城市”融合模式，以及它作为葡语文化圈中心持续发挥的影响力。今天，你走在这里，脚下每一块被磨得光滑的石板，墙面上每一处斑驳的涂鸦，空气里每一缕咖啡香，都层叠着七个世纪的重量。它不只是古老的，它是以一种无比鲜活的方式，将厚重的历史化为了当下蓬勃的日常。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受科英布拉，你需要一整天的时间，并做好爬山的心理准备。最佳的游览节奏是“由外至内，自下而上，最后沉浸”。建议在上午9点前抵达，先从山脚下的蒙德古河边和老商业广场开始，感受城市的生活气息，然后沿着蜿蜒的阶梯或乘坐古老的缆车（Elevador do Mercado）上山。上午光线最佳时，重点攻克需要门票的核心历史建筑群（图书馆、宫殿）。中午在大学区附近的传统小餐馆解决午餐。下午放缓节奏，探索散落在各处的学院、隐秘的庭院和“学生共和国”所在的古老街巷。傍晚时分，一定要找一个能俯瞰全城的角落等待日落，入夜后，则去搜寻一场地道的法多表演。这样安排，既能避开图书馆最拥挤的时段，又能完整体验从日到夜、从学术庄严到青春浪漫的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在科英布拉大学官网预订乔安娜图书馆的参观时段，尤其是旺季，现场很可能一整天都没票。穿着绝对要舒适，特别是鞋子，一整天都在上下台阶和坡道，考验脚力。每年的五月是毕业季高峰期，会异常热闹且拥挤，如果喜欢清静，可以避开这个时段。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从蒙德古河畔的“葡萄牙小径”散步开始，逆着光看大学城巍峨的轮廓倒映在平静的河水里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过热闹的“8号门”商业广场，坐上古旧的缆车，让它把你缓缓拉升到大学山城的入口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“铁门”前驻足，然后径直前往乔安娜图书馆，在开门的第一时间走进那个被金色与深红包裹的寂静圣殿，感受三百年前的学识光辉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从图书馆的震撼中平复心情，走进毗邻的圣米格尔礼拜堂，让眼睛适应绚丽的彩绘天花板和那座镀金管风琴的华丽巴洛克交响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上皇家宫殿的“大礼堂”，站在曾经国王加冕的地方，想象无数毕业典礼在此举行，学子们在此接过学位。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到位于地下层的学生监狱，看看几个世纪前调皮学生被关禁闭时在墙上留下的涂鸦和名字。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬大学塔楼狭窄的螺旋石阶，让科英布拉全城的红屋顶、蜿蜒的河流和远方的山峦成为你视野的奖赏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落后，钻进大学区后巷里一家名叫“A Capela”或“À Capela”的古老学生酒吧，在烛光、旧书和吉他声中等待法多歌者的即兴演出。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`蒙德古河对岸的圣克拉拉修道院附近`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，利用长焦镜头可以压缩空间，拍出大学建筑群鳞次栉比、雄踞山巅的恢宏全景，河水作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大学塔楼顶层`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚柔和光线时，以塔楼古老的石栏和钟盘为前景框架，拍摄下方城市屋顶的海洋和蜿蜒的河流，画面富有层次和故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣米格尔礼拜堂内部`}</h4>
                  <p className="text-sm text-gray-700">{`避开正午强光，在上午侧光射入时，抬高镜头拍摄那令人震撼的“天堂之眼”彩绘木天花板，利用建筑的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`乔安娜图书馆外庭院回廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，站在回廊一角，拍摄阳光将罗马柱廊的影子长长投射在石地板上的几何光影，人物行走其中可增添动感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“铁门”入口处的石阶小路`}</h4>
                  <p className="text-sm text-gray-700">{`华灯初上时，使用三脚架长曝光，拍下穿着黑袍的学生背影行走在昏黄路灯下的石板路，捕捉“夜归学者”的古典意境。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`乔安娜图书馆内部严禁使用任何闪光灯、三脚架和自拍杆，只能用高感光度相机或手机悄悄记录，务必保持绝对安静。拍摄当地学生或法多表演者时，请先微笑示意并征得同意，这是基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景性价比之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于蒙德古河左岸的现代风格酒店，房间阳台正对大学山城全景，清晨在波光与山影中醒来，搭乘步行桥五分钟即可进入老城。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心特色客栈`}</h4>
                  <p className="text-sm text-green-800">{`由17世纪贵族宅邸改建，隐藏在大学山城一条静谧的石板巷弄里，木质楼梯吱呀作响，早餐在天井花园享用，完全融入中世纪氛围。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`大学区精品设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落于大学建筑群边缘，由老建筑改造，内部是极简现代风格，却保留着原始的石头墙面，完美诠释了新与旧的对话。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外庄园静谧享受`}</h4>
                  <p className="text-sm text-purple-800">{`位于科英布拉近郊小山上的19世纪庄园酒店，被巨大的花园和泳池环绕，远离喧嚣，是白天暴走探索后完美回归宁静的避世之所。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住在山上老城区固然有韵味，但请注意拖着行李箱在陡峭的鹅卵石路上行走会非常吃力，预订时最好确认酒店是否提供接送或行李搬运服务。毕业季（五月）和开学季（九月）的住宿非常紧俏，务必提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科英布拉许久，那种独特的“混合气息”依然萦绕不散。它不像那些仅供仰望的纪念碑，而是一个巨大的、温暖的、持续运转的生命体。在这里，你触摸到的历史不是隔着玻璃的冰冷陈列，而是正在被年轻人书写进论文、唱进歌里、融进一杯咖啡闲聊中的活生生的现在。你会真切地感受到，知识是如何成为一种可触摸的传统，像血液一样在一代代人之间传递。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速成和即时满足的时代，科英布拉大学城的存在本身，就是一种温柔而坚定的抵抗。它告诉你，有些事物需要时间的沉淀，需要几个世纪的攀登与积累，才能形成如此厚重而富有层次的人文景观。它让你相信，青春与古老可以如此和谐地共舞，严肃的学术与浪漫的诗歌可以出自同一颗心灵。对于每一位深度旅者而言，这里不仅仅是一个目的地，更是一场关于时间、传承与生命力的深刻体验。来科英布拉，不只是看一所大学，更是去见证一颗七百多岁却依然年轻炽热的心脏，如何有力地跳动。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
