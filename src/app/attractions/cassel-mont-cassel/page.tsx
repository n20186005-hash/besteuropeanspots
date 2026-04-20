import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡塞尔 Cassel｜法属法兰德斯的明珠，漫步在云端的山丘小镇 - 最佳欧洲景点',
  description: '第一次听说卡塞尔，朋友只是神秘地说：“带你去一个离天空最近的小镇。” 直到车子驶出平坦的佛兰德斯平原，视线尽头突然隆起一座郁郁葱葱的孤山，山顶上密密麻麻的屋舍像童话里的积木一样叠在一起，在午后的阳光下泛着温暖的砖红色，你才真正明白这句话的意思。车子开始盘旋上山，鼻腔里平原上湿润的泥土气息渐渐被山上更...',
}

export default function CasselMontCasselPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卡塞尔', href: '/attractions/cassel-mont-cassel' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡塞尔・Cassel・法国・卡塞尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次听说卡塞尔，朋友只是神秘地说：“带你去一个离天空最近的小镇。” 直到车子驶出平坦的佛兰德斯平原，视线尽头突然隆起一座郁郁葱葱的孤山，山顶上密密麻麻的屋舍像童话里的积木一样叠在一起，在午后的阳光下泛着温暖的砖红色，你才真正明白这句话的意思。车子开始盘旋上山，鼻腔里平原上湿润的泥土气息渐渐被山上更清冽的、混合着青草与古老石墙的味道取代。当你终于站在小镇中心的广场上，耳边只剩下风声、教堂偶尔的钟鸣，以及远处咖啡馆传来的模糊的法语和当地方言交错的谈笑声，那一刻，你感觉自己真的站在了世界的一个宁静的屋顶上。
这座山城不是冰冷的博物馆，它是鲜活的。本地老人们坐在长椅上，用你听不懂的弗拉芒语系方言聊着天，手边放着刚从市集买来的新鲜奶酪和熏肉。面包店飘出浓郁的黄油和酵母的香气，那种香味厚重而朴实，立刻把你拽进最地道的北法生活图景里。你会发现，这里几乎没有行色匆匆的游客，有的只是提着菜篮的主妇、骑着自行车叮当作响的邮差，还有在狭窄小巷里追逐嬉戏的孩子。时间在这里不是被“消磨”的，而是像山顶的云一样，缓慢、自然地从屋檐上流淌过去。
最打动人心的，莫过于那种极致的反差与和谐。你身处一个完完全全的法国小镇，却时刻能感受到咫尺之隔的比利时佛兰德斯的灵魂。建筑的山墙是弗拉芒式的，菜单上却写着最地道的法餐；人们聊着法兰西的时事，嘴里却可能哼着古老的弗拉芒民谣小调。这种文化上的“暧昧”与交融，赋予了卡塞尔一种难以言喻的独特魅力。它不像巴黎那样光芒万丈，也不像普罗旺斯那样明媚热烈，它就像一块被历史反复摩挲的温润玉石，安静、内敛，却蕴含着无比丰富的光泽与层次，等待着愿意放慢脚步的人来细细品读。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次听说卡塞尔，朋友只是神秘地说：“带你去一个离天空最近的小镇。” 直到车子驶出平坦的佛兰德斯平原，视线尽头突然隆起一座郁郁葱葱的孤山，山顶上密密麻麻的屋舍像童话里的积木一样叠在一起，在午后的阳光下泛着温暖的砖红色，你才真正明白这句话的意思。车子开始盘旋上山，鼻腔里平原上湿润的泥土气息渐渐被山上更清冽的、混合着青草与古老石墙的味道取代。当你终于站在小镇中心的广场上，耳边只剩下风声、教堂偶尔的钟鸣，以及远处咖啡馆传来的模糊的法语和当地方言交错的谈笑声，那一刻，你感觉自己真的站在了世界的一个宁静的屋顶上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座山城不是冰冷的博物馆，它是鲜活的。本地老人们坐在长椅上，用你听不懂的弗拉芒语系方言聊着天，手边放着刚从市集买来的新鲜奶酪和熏肉。面包店飘出浓郁的黄油和酵母的香气，那种香味厚重而朴实，立刻把你拽进最地道的北法生活图景里。你会发现，这里几乎没有行色匆匆的游客，有的只是提着菜篮的主妇、骑着自行车叮当作响的邮差，还有在狭窄小巷里追逐嬉戏的孩子。时间在这里不是被“消磨”的，而是像山顶的云一样，缓慢、自然地从屋檐上流淌过去。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，莫过于那种极致的反差与和谐。你身处一个完完全全的法国小镇，却时刻能感受到咫尺之隔的比利时佛兰德斯的灵魂。建筑的山墙是弗拉芒式的，菜单上却写着最地道的法餐；人们聊着法兰西的时事，嘴里却可能哼着古老的弗拉芒民谣小调。这种文化上的“暧昧”与交融，赋予了卡塞尔一种难以言喻的独特魅力。它不像巴黎那样光芒万丈，也不像普罗旺斯那样明媚热烈，它就像一块被历史反复摩挲的温润玉石，安静、内敛，却蕴含着无比丰富的光泽与层次，等待着愿意放慢脚步的人来细细品读。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡塞尔`} />
                <InfoRow label="英文名称" value={`Cassel`} />
                <InfoRow label="正式名称" value={`Cassel`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`卡塞尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座雄踞于172米高山丘上的小镇，是法属法兰德斯地区的历史心脏与战略制高点，素有“两海（北海与英吉利海峡）守望者”之称。`} />
                <InfoRow label="建筑特色" value={`一个完整保存在山巅的“天空之城”，拥有蜿蜒的铺石街道、环绕中心的传统广场、以及点缀其间的弗拉芒风格砖石建筑和古老的风车。`} />
                <InfoRow label="建筑风格" value={`浓郁的法兰德斯风格与法国乡村特色的完美融合，以红砖、阶梯形山墙、彩色木筋墙和陡峭的瓦片屋顶为标志。`} />
                <InfoRow label="文化价值" value={`是法兰德斯文化在法国境内活态传承的珍贵样本，其市集、节庆、方言和饮食都深深烙印着这片土地独特的文化交融印记。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇街道及公共空间全天开放。主要观景台、风车及大部分餐厅商店的开放时间通常为上午9点至傍晚7点。每周三和周六上午有露天市集，气氛最热闹。镇上的博物馆（如佛兰德斯博物馆）开放时间较为固定，一般为周二至周日的10:00-12:30，14:00-18:00，周一闭馆。建议避开冬季清晨的浓雾时段，春秋季的午后光线最佳，能见度最高。`} />
              <InfoRow label="门票价格" value={`进入卡塞尔小镇本身无需门票。山丘上的公共观景区域免费开放。若参观镇上的佛兰德斯博物馆（Musée de Flandre），成人票价约为5欧元，学生及优惠票约3欧元。小镇偶尔举办的特定文化展览或进入私人花园可能需要额外支付小额费用（通常在2-5欧元）。自驾游客需注意，山脚下的停车场通常免费，但靠近山顶的有限车位可能需要支付少量停车费。`} />
              <InfoRow label="地址" value={`Mont Cassel, 59670 Cassel, France`} />
              <InfoRow label="交通方式" value={`卡塞尔位于法国北部，最近的国际枢纽是里尔机场（Aéroport de Lille）。从里尔机场出发，最便捷的方式是租车自驾，沿A25公路向北行驶约50公里，车程约45分钟即可抵达卡塞尔山脚下。若使用公共交通，可从里尔火车站（Gare de Lille Flandres）搭乘区域列车（TER）至阿兹布鲁克站（Hazebrouck），车程约25分钟，班次频繁。在阿兹布鲁克站转乘前往卡塞尔的本地巴士（通常为Line 12或Line 20），车程约20分钟，但巴士班次较少，建议提前查询时刻表。从加来海峡隧道驾车前来也仅需约1小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡塞尔的故事，要从它脚下这片一马平川的土地说起。佛兰德斯平原肥沃富庶，却也无险可守。于是，早在罗马军团北征的时代，敏锐的统帅们就发现了这座拔地而起的山丘。他们在这里设立瞭望哨，称之为“Castellum”，意为堡垒。从此，这座山丘的命运就与“俯瞰”和“守卫”紧紧绑定。它像一位沉默的巨人，见证了脚下平原上无数王朝的更迭、商队的往来与战火的燃起又熄灭。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪是卡塞尔第一个辉煌时期。它成了佛兰德斯伯爵领地内重要的封邑。商人们沿着陡峭的山路将羊毛、布料和谷物运上运下，山巅逐渐形成了繁荣的市镇。那时的卡塞尔，不仅是经济中心，更是文化熔炉。来自法国、低地国家和英格兰的影响在此交汇，塑造了它独特的建筑风貌和生活方式。你可以想象，穿着各异服饰的商人在广场上讨价还价，不同口音的语言在酒馆里交织，而坚固的城堡则庇护着这一切的繁荣。直到今天，你漫步在那些以中世纪行会命名的街道上，仿佛还能听到铁匠铺的叮当声和织布机的哐啷声在石壁间回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，地理位置注定它无法永远宁静。十六、十七世纪，西班牙哈布斯堡王朝与法兰西王国为了争夺富庶的佛兰德斯，展开了长达百年的拉锯战，卡塞尔成了兵家必争的战略要地。它数次易主，城墙在炮火中倒塌又重建。最著名的一役发生在1677年，太阳王路易十四御驾亲征，法国军队经过激烈战斗，最终从西班牙人手中夺下了卡塞尔。这次胜利标志着法国对“法属佛兰德斯”地区统治的巩固。路易十四的工程师沃邦甚至亲自考察过这里的防御工事。战争的伤痕深深烙在了小镇的肌体上，但也将法兰西的文化基因更深刻地注入了它的血脉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入近现代，卡塞尔的军事角色在二战期间达到了顶峰。1940年，著名的“卡塞尔战役”在此打响，英国和法国军队在此英勇阻击了德军的闪电推进，为敦刻尔克大撤退赢得了宝贵时间。德军占领期间，陆军元帅格特·冯·伦德施泰特甚至将他的西线总司令部设在了卡塞尔一栋不起眼的别墅里。小镇再次默默承载了沉重的历史。如今，山丘上的战争纪念碑和博物馆里的旧照片，无声地诉说着那段烽火岁月。令人感慨的是，无论经历多少战乱，山下的平原被犁过多少次，这座山巅小镇总是能在硝烟散尽后，拍拍尘土，让面包房的炊烟重新升起，让教堂的钟声照常敲响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的卡塞尔，早已卸下了沉重的军事铠甲，化身为一座从容淡定的生活之山。它的历史不是被封存在玻璃柜里的标本，而是化作了广场石砖的纹路、老屋墙砖的颜色、以及当地人眉宇间那种见过世面后的平和。当你走在它的街道上，你走过的不仅是空间，更是一层层叠加的时间。从罗马的瞭望塔到中世纪的市集，从太阳王的旗帜到二战的硝烟，最后归于一杯醇香的本地啤酒和一片无敌的平原日落——这就是卡塞尔，一座用石头和记忆堆砌起来的天空之城。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的卡塞尔之旅，建议安排一个完整的下午，连同一个黄昏。大约午后两点左右抵达山脚下，此时上午的市集人群已散，午后的阳光正将小镇渲染得金黄。全程步行是唯一的方式，整体耗时约4-5小时，节奏务必放慢。这样安排的原因在于，卡塞尔的魅力不在某个单一景点，而在于沉浸式的漫步体验。从山脚“攀爬”至山顶的过程本身就是一种仪式，能让你逐步脱离平原的喧嚣，进入山城特有的宁静时空。最后在黄昏时分，于山顶静候日落平原的壮丽景色，为旅程画上完美句号。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适的步行鞋，小镇几乎所有道路都是凹凸不平的古老铺石路面，高跟鞋或硬底鞋会是一场灾难
尊重当地居民的隐私，许多最美的建筑是私人住宅，拍照时请注意不要窥探庭院或窗户
小镇非常安静，请尽量降低谈话音量，让自己融入这片宁静，你会收获更多`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚主要的免费停车场出发，沿着那条被称为“山羊小径”的古老坡道开始你的攀登，感受脚步与历史石阶的接触`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入中心的大广场（Grand‘Place），立刻被四周色彩柔和的弗拉芒风格建筑立面环绕，找个长椅坐下，观察本地人的生活节奏`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场，拐进狭窄的Rue de Dunkerque小巷，让两侧古老的砖石墙和高耸的山墙将你引向镇子的更高处`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访简朴而庄严的科尔修道院遗址和旁边的圣心教堂，感受宗教在这座小镇留下的宁静力量`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直奔山顶的地标——那座名为“和平”的古老风车，站在它的基座旁，360度环视无垠的佛兰德斯平原，仿佛站在世界的瞭望台`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从风车旁的小径下行，寻找那尊著名的“卡塞尔三山”青铜雕塑，理解这座山丘地理意义的精髓所在`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步到小镇东侧的英式花园和战争纪念碑，在绿荫与沉默中回顾二十世纪的那段惨烈历史`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，选择一家广场边缘的咖啡馆或餐厅，点一杯当地啤酒或苹果酒，就着逐渐降临的暮色，看小镇的灯火一盏盏亮起`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大广场北侧拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到五点，阳光斜射，利用拱廊的框架结构拍摄广场上的人物与建筑，光影对比极具故事感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从“和平”风车下方朝西眺望`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，使用长焦镜头压缩空间，将风车作为前景，捕捉平原上河流、农田、小镇被金色夕阳笼罩的史诗级画面`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Rue des Écoles小巷中段`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，寻找两侧山墙投下的强烈几何阴影，拍摄黑白或高对比度照片，突出建筑的线条与质感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡废墟的残垣断壁旁`}</h4>
                  <p className="text-sm text-gray-700">{`利用废墟的石拱或窗口作为天然画框，框住远处平原的现代田园风光，形成历史与当下的对话`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇东南角观景台的黄昏蓝调时刻`}</h4>
                  <p className="text-sm text-gray-700">{`日落后十分钟，天空呈深蓝色，小镇灯光初上，用三脚架长曝光，拍下冷暖色调交融的梦幻夜景`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`佛兰德斯平原天气多变，山丘上风大，拍摄日出日落时务必做好防风措施，稳定三脚架`}</li>
                <li>• {`当地居民对于被拍摄比较宽容，但拍摄人物特写前，一个友好的微笑和眼神征询是必要的礼仪`}</li>
                <li>• {`耐心等待一缕穿透云层的“圣光”照亮平原上的某个村庄或教堂，那将是可遇不可求的神来之笔`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于山腰的“山丘旅馆”，家庭式经营，房间虽小但一尘不染，早餐的女主人自制的果酱和佛兰德斯华夫饼能让你元气满满地开始探索`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`“风车视野”民宿，由一栋17世纪商人的房子改造，房间保留了原始的橡木梁和壁炉，最棒的是阁楼房间的天窗，晚上可以躺着看星星`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`小镇唯一的精品酒店“卡塞尔公爵府”，坐落在一座经过精心修复的历史建筑内，拥有一个可以俯瞰部分平原的隐秘花园，浴缸是古典爪足式的，极致浪漫`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居之选`}</h4>
                  <p className="text-sm text-purple-800">{`距离小镇中心步行十分钟的乡村农庄改建的客房，完全被田野包围，夜晚极其静谧，只有虫鸣，是真正逃离尘嚣的选择`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡塞尔的住宿资源非常有限，尤其是特色民宿，强烈建议至少提前一个月预订，夏季和周末更是一房难求`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`由于小镇位于山顶，自驾游客需确认住宿地是否有私人停车场，否则可能需要将车停在山脚的公共停车场再步行上去`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果想深度体验当地生活，选择提供“房东家宴”的住宿，一顿由本地食材烹制的家常晚餐，胜过任何高档餐厅`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡塞尔很久以后，我常常会想起那个黄昏，坐在风车下的长椅上，看着脚下那片广袤的平原逐渐沉入暮色。火车像发光的虫子一样在田野间缓慢移动，远处城镇的灯光次第亮起，如同倒映在地面的星空。那一刻，心里没有震撼，只有一种深沉的平静。我突然明白了这座山城存在的意义——在一切都在追求速度、效率和扁平化的今天，它固执地耸立着，提醒着我们“高度”的价值。这个高度不是海拔，而是一种生活的视角，一种与日常琐碎暂时拉开距离，回望历史、俯瞰大地、内观自我的可能。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都该来一次卡塞尔。它不会用惊世骇俗的景观冲击你，却会用一种近乎疗愈的方式浸润你。来这里，不是为了收集又一个景点打卡，而是为了体验一种截然不同的生命节奏。来学习像这座山一样，历经风霜战火，依然能温柔地庇护一方烟火，在每一个平凡的清晨，准时送出面包的香气和教堂的钟声。当你沿着那些被岁月打磨得光滑的石阶走下山，重新回到平原，你会感到双脚更加踏实，而内心，却多了一片可以随时回去眺望的“天空之城”。这便是卡塞尔，一个教你如何同时扎根大地又仰望星空的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cordouan-lighthouse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔多昂灯塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cordouan Lighthouse</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beziers-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝兹道城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Béziers Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-malbrouck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Malbrouck</p>
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
