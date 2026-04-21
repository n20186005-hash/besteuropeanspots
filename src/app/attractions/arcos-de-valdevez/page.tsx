import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿科斯-迪瓦尔德韦什深度旅游攻略：维斯河谷的十九世纪庄园与罗马桥漫步指南',
  description: '探索葡萄牙北部隐秘宝藏Arcos de Valdevez！这份深度游攻略带你漫步罗马石桥、探访优雅庄园，揭秘河谷小镇的最佳打卡路线与避坑指南。',
}

export default function ArcosDeValdevezPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '阿科斯-迪瓦尔德韦什', href: '/attractions/arcos-de-valdevez' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿科斯-迪瓦尔德韦什・Arcos de Valdevez・葡萄牙・维亚纳堡区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，如果你正在找一个人少景美、连时间都舍不得走太快的地方，那今天这份阿科斯-迪瓦尔德韦什私藏旅游攻略，就是为你准备的。别被它的长名字吓到——这个藏在葡萄牙北部绿色褶皱里的小镇，就像被维斯河（Rio Vez）轻轻搂在怀里的梦境。河水是那种透亮的翡翠色，温柔得几乎听不见流淌声，只映着两岸十九世纪的庄园白墙与红瓦，还有那座静静躺了上千年的罗马石桥。作为你的专属向导，这份自由行指南会带你避开游客团，像本地人一样，在河岸野餐、在桥上看日落、在庄园花园里闻橘子花的香气。这里没有匆忙的打卡清单，只有值得你住下来慢慢呼吸的葡萄牙灵魂。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，如果你正在找一个人少景美、连时间都舍不得走太快的地方，那今天这份阿科斯-迪瓦尔德韦什私藏旅游攻略，就是为你准备的。别被它的长名字吓到——这个藏在葡萄牙北部绿色褶皱里的小镇，就像被维斯河（Rio Vez）轻轻搂在怀里的梦境。河水是那种透亮的翡翠色，温柔得几乎听不见流淌声，只映着两岸十九世纪的庄园白墙与红瓦，还有那座静静躺了上千年的罗马石桥。作为你的专属向导，这份自由行指南会带你避开游客团，像本地人一样，在河岸野餐、在桥上看日落、在庄园花园里闻橘子花的香气。这里没有匆忙的打卡清单，只有值得你住下来慢慢呼吸的葡萄牙灵魂。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿科斯-迪瓦尔德韦什`} />
                <InfoRow label="英文名称" value={`Arcos de Valdevez`} />
                <InfoRow label="正式名称" value={`Arcos de Valdevez`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`维亚纳堡区`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看阿科斯现在恬静得像一幅水彩画，它在葡萄牙历史上可是个“以和为贵”的关键见证者。1141年，这里发生了一场奇特的“骑士单挑对决”（Torneio de Arcos de Valdevez），解决了葡萄牙王国与莱昂王国之间几乎要爆发的全面战争。传说双方各派出一队骑士进行象征性比武，葡萄牙方取胜后，莱昂国王阿方索七世终于承认了阿方索·恩里克斯（葡萄牙首任国王）的统治权。这场没有流血的较量，被史学家视为葡萄牙独立道路上的重要转折点。而镇上那座古罗马桥，更是贯穿了千年交通脉络——罗马人、西哥特人、中世纪商队都曾从这桥上进过城。走在桥上，你踩着的不仅是石头，更是伊比利亚半岛北部文明交织的层叠记忆。`} />
                <InfoRow label="建筑特色" value={`小镇的建筑会说话，用的是一种“柔软而庄重”的语法。维斯河畔的十九世纪庄园（Solares）最迷人：它们不像宫殿那般咄咄逼人，而是以奶油色的石灰墙为主体，配着酒红色的陶土屋顶，窗框和阳台栏杆是手工锻造的黑铁，弯出藤蔓一样的曲线。阳光透过高大的法国窗，在室内拼花木地板上投下菱形光斑。外墙常爬满紫藤或九重葛，春天时像倾泻而下的紫色瀑布。而那座罗马桥则是另一种语言——灰黄色的花岗岩墩柱沉稳地立在翡翠色的河水中，桥面由不规则但严丝合缝的石板铺成，被岁月磨出了温润的光泽。桥拱低矮而宽厚，倒影在水面画出一串完整的圆，当清晨水汽氤氲时，桥与倒影连成一片，仿佛通往另一个时空的隧道。`} />
                <InfoRow label="建筑风格" value={`阿科斯的建筑是场“浪漫主义与民间传统的悄然对话”。十九世纪庄园属于典型的葡萄牙北方庄园建筑风格（Arquitetura de Solar），它吸收了新古典主义的对称端庄，却又剔除了宫廷式的华丽，转而采用本地材料与工匠技法：外墙用石灰混合本地沙土粉刷，呈现出柔和的米黄色；屋顶坡度舒缓，铺着维亚纳堡区特产的“canudo”陶瓦；铁艺阳台则深受浪漫主义影响，卷草纹饰轻盈优雅。而罗马桥则是纯粹的“罗马式实用工程”典范——没有装饰性雕刻，所有美感都来自结构本身：半圆形拱券、楔形石块砌法、桥面微微隆起的弧度，都是为了分散水流冲击力。站在桥头看，这些元素在河谷雾气中勾勒出一种跨越千年的功能之美，仿佛能看到罗马工程师蹲在河边计算水流速度的身影。`} />
                <InfoRow label="文化价值" value={`对于当地人来说，阿科斯不是“景点”，而是生活本身。每年九月“河谷节”（Feiras do Rio Vez）时，你会看到这种文化生命的绽放：老人们穿着黑白格纹围裙在河边烤沙丁鱼，年轻人则在罗马桥畔弹奏葡萄牙吉他，歌声混着烤栗子的甜香飘过水面。更深刻的是，小镇守护着一种“河谷生态智慧”——居民至今保持着在河边集体清洗地毯的传统（lavagem dos tapetes），不用化学洗涤剂，而是利用活水流动与鹅卵石摩擦。这种人与河流的共生关系，让维斯河保持了难以置信的清澈度，河里还能见到鳟鱼群。现代游客带走的不仅是照片，更是一种启示：原来人类聚落可以如此轻柔地栖息在自然脉络之上，连时间都可以被流水重新定义。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 阿科斯-迪瓦尔德韦什一日游打卡路线攻略：从罗马桥到庄园花园的慢时光漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`早上九点，我们先从“罗马桥”（Ponte Romana）开始。别急着过桥——站在北岸，看晨光把桥拱染成蜜金色，河面雾气正在散去。过桥后沿着Rua do Sol往坡上走，十分钟就能抵达“母教堂”（Igreja Matriz），摸摸门口那只被信徒抚摸得光滑如玉的圣徒石像手掌。接着拐进小巷，寻找“卡斯特罗家族庄园”（Solar dos Castros）的绿色木门（通常上午开放参观花园），坐在蓝花楹树下喝杯本地草药茶。中午回到河边，在“塔沃加餐厅”（Tavoga）的露天座吃炭烤鳟鱼，记得点一杯绿酒（Vinho Verde）。下午沿“河边生态步道”（Passeio Fluvial）往上游走，你会经过一片白杨林和几个小型水力磨坊遗址。傍晚前一定要回到罗马桥西侧的“观景台”（Miradouro da Ponte），那是整个河谷的最佳摄影点——夕阳会把所有庄园的窗户点燃成一片暖橙色。晚餐后若还有精力，去主广场（Largo do Conselheiro）听街头艺人唱法多（Fado），歌词里也许正唱着这条河的故事。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1. <strong>罗马桥第三拱的“罗马砖”</strong>：走到桥正中央，蹲下来仔细看第三个桥拱内侧，会发现几块明显不同的红色砖块嵌在花岗岩之间。那是罗马工程师留下的“签名”——一种特制的薄型陶砖，用于调节砌体张力。午后阳光斜射时，这些砖会泛出暗红色光泽，像沉在石头里的古老血管。伸手触摸，竟能感受到与周围花岗岩不同的微温，仿佛千年前烧制它们的窑火余温还未散尽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2. <strong>庄园铁门上的“葡萄藤锁扣”</strong>：卡斯特罗庄园的黑铁大门上，有个巴掌大的锁扣被锻造成葡萄藤缠绕酒壶的形状。巧妙的是，当下午阳光从西侧射来，这个锁扣的投影会落在门内地砖的特定位置——正好是家族徽章图案中葡萄叶的轮廓。这是十九世纪铁匠与石匠共同设计的“日光密码”，只有在夏至前后的晴天才会完美显现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3. <strong>河边洗衣台的“音阶石板”</strong>：生态步道中段有几个废弃的公共洗衣台，其中第二块洗衣石板暗藏玄机。当维斯河水位上升到特定高度，水流漫过石板边缘的六个凹槽时，会发出do、re、mi等不同音高的潺潺声。这是过去洗衣妇女的“天然计时器”——当六个音都响起，说明水位达到最佳洗衣高度。把耳朵贴近石板，还能听见如同编钟般的细微回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4. <strong>母教堂彩窗的“河谷晨雾蓝”</strong>：下午两点左右走进母教堂，不要看祭坛，而是转身面向入口上方的圆形彩窗。那时阳光正好穿透窗户，会把一种特殊的淡蓝色光斑投射在中殿石柱上。这种蓝色玻璃是十六世纪本地匠人用河沙与钴矿特制的，调色时参照了冬季清晨维斯河谷雾霭的颜色。光斑随着云朵飘过缓缓移动，像一片会走动的河谷天空被请进了室内。" }} />
            </div>
          </Section>

          <Section title={`5. 阿科斯-迪瓦尔德韦什自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "• <strong>最佳时间与天气陷阱</strong>：小镇最美是5-6月（庄园花园花期）和9月（河谷节），但切记避开8月15日前后——那是葡萄牙全国假期，北部居民会涌来这里度假。雨季（10-3月）维斯河水会涨得很美，但部分河边步道可能临时关闭，出行前务必查看市政网站“Câmara Municipal de Arcos de Valdevez”的公告。<strong>穿着关键</strong>：务必穿防滑舒适的平底鞋！罗马桥和河岸鹅卵石路面在潮湿时非常滑，本地老太太看到穿高跟鞋的游客都会摇头。夏季早晚温差大，薄外套+披肩组合最聪明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "• <strong>避开人流的秘密时刻</strong>：旅行团通常在上午10点到下午2点聚集在罗马桥拍照。两个黄金空窗期：一是清晨7-8点，晨雾中的桥如同水墨画；二是傍晚6点半后，旅行团离开而晚餐人群未至，整条河都属于你。<strong>隐藏拍照点</strong>：不要只挤在桥头，过桥后右拐走50米，有个不起眼的石阶通往下方河滩，那里可以拍到桥拱与庄园的完整倒影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "• <strong>防盗与消费提示</strong>：小镇治安极好，但河边露天座位仍需注意手机不要放桌边。<strong>门票陷阱</strong>：小镇本身免费，但庄园内部参观可能需要预约（卡斯特罗庄园花园建议提前邮件预约）。<strong>交通坑</strong>：从波尔图自驾来的朋友注意，最后20公里是蜿蜒山路，Google地图可能会导到极窄的农用道路——请一定选择EN202公路主线。火车站离镇中心有1.5公里上坡路，带大行李的建议提前联系住宿接送。" }} />
            </div>
          </Section>

          <Section title={`6. 阿科斯-迪瓦尔德韦什周边住宿与美食全攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想真正沉浸在这片河谷的呼吸节奏里，建议至少住一晚。<strong>庄园改造的精品酒店</strong>“Casa do Adro”是我的心头好——它由十八世纪庄园改建，房间保留着原始石墙与木梁，但配备了地暖与现代卫浴。最妙的是每个房间窗户都对着不同的风景：有的直面罗马桥全景，有的俯视厨房花园，清晨会被修剪香草的声音温柔唤醒。预算有限的背包客可以选择河边青年旅舍“HI Arcos de Valdevez”，它的露台直接悬在维斯河上方，晚上能听见鳟鱼跃出水面的“噗通”声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>美食是这里的灵魂篇章</strong>。午餐一定要去家庭经营了四代的“塔沃加餐厅”（Tavoga），点他们的招牌菜“鳟鱼阿科斯风格”（Truta à moda de Arcos）——用河岸香草与橄榄油慢烤的整条鳟鱼，搭配用磨坊石磨现磨的玉米面包。若想体验更地道的吃法，每周二上午主广场有农民市集，买一块刚出锅的“血肠面包”（Broa de sangue），配着摊贩送的绿橄榄，坐在教堂台阶上吃。下午茶请锁定“Padaria Ribeiro”面包房，他家“河谷蛋糕”（Bolo do Rio）中间夹的是本地野莓与乳清奶酪，甜度克制成刚刚好的微笑。晚餐后若想小酌，河边的“Pérola do Vez”酒吧有自家浸制的樱桃利口酒（Ginja），喝的时候老板可能会跟你聊起他祖父在罗马桥下钓鱼的故事。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "• <strong>索托镇徒步环线（Peneda do Soajo）</strong>：从小镇开车25分钟就能抵达这个被联合国教科文组织列为生物保护区的秘境。这里保存着葡萄牙最古老的“社区粮仓群”（Espigueiros do Soajo）——几十个花岗岩柱支撑的粮仓像一排石器时代的科幻建筑，傍晚时分牧民赶着黑面羊群穿过石阵，画面魔幻如中世纪版《星球大战》。建议参加当地向导的2小时轻徒步，他们会带你寻找伊比利亚狼的踪迹（不用担心，狼群极其怕人）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "• <strong>林多索水车迷宫（Moinhos de Lindoso）</strong>：向东驱车30分钟，你会见到整个伊比利亚半岛最壮观的水车群落。67座石砌水车沿着阶梯状溪流排列，部分仍在研磨玉米。春末水量充沛时，所有水车同时转动发出的轰鸣声，仿佛大地深处传来的低沉合唱。最有趣的是寻找“情人水车”——两座水车的出水口设计成交叉弧线，水流在空中相遇形成心形水幕，据说是十八世纪一对磨坊主儿女的私奔暗号。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿科斯教给我的，是一种“温柔的栖居哲学”——人类不必总想着征服山川河流，而是可以像那座罗马桥一样，成为自然脉络的一部分，让流水决定时间的形状，让老庄园的墙壁学会呼吸晨雾与夕照。当你离开时，带走的不会是喧闹的记忆，而是一段被维斯河重新校准过的生命节拍：缓慢、清澈，且带着花岗岩被阳光晒暖后的朴素温度。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/foz-do-arello" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    福
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">福斯-杜阿雷柳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Foz do Arelho</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belmonte-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔蒙特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belmonte</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belem-tower-lisbon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝伦塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belém Tower</p>
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
