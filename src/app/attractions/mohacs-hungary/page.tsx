import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫哈奇 Mohács｜亲历多瑙河畔的悲壮古战场与狂野布绍节面具游行 - 最佳欧洲景点',
  description: '走下从布达佩斯开来的巴士，第一口呼吸到的空气就带着多瑙河特有的、混着水汽与湿木头的清冽味道。莫哈奇和我想象中的“历史名城”完全不同——没有高耸入云的城堡尖顶，也没有挤满游客的华丽广场。它安静得甚至有些朴素，沿着主街走，两旁是色彩柔和的两三层小楼，阳台上挂着晾晒的衣物，咖啡馆里传出低低的谈话声。多瑙河',
}

export default function MohacsHungaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '莫哈奇', href: '/destinations/europe' },
            { label: '莫哈奇', href: '/attractions/mohacs-hungary' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫哈奇・Mohács・匈牙利・莫哈奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`走下从布达佩斯开来的巴士，第一口呼吸到的空气就带着多瑙河特有的、混着水汽与湿木头的清冽味道。莫哈奇和我想象中的“历史名城”完全不同——没有高耸入云的城堡尖顶，也没有挤满游客的华丽广场。它安静得甚至有些朴素，沿着主街走，两旁是色彩柔和的两三层小楼，阳台上挂着晾晒的衣物，咖啡馆里传出低低的谈话声。多瑙河就在不远处缓缓流淌，宽阔平静，你几乎无法相信，眼前这片宁静的河畔草地，曾是欧洲历史上最惨烈的屠场之一。那种感觉很奇怪，历史的雷霆万钧与当下的日常安宁，在这里毫无过渡地叠放在一起。
直到你走到城外的战役纪念公园。风毫无阻挡地吹过开阔的田野，乌鸦在光秃秃的树梢上啼叫。几座造型抽象、带着撕裂感的现代雕塑和纪念碑矗立在那里，沉默而有力。站在这片土地上，你不需要任何解说，皮肤就能感受到一种沉重的寒意。当年近两万匈牙利贵族与精锐士兵，就在这里，被奥斯曼帝国苏丹苏莱曼一世的军队如镰刀割麦般击溃。那种集体性的、决定命运的陨落，给这片土地留下了某种难以消散的“场”。然而，莫哈奇人没有选择永远沉浸在悲情中。
真正的灵魂，藏在那些不起眼的民居作坊里。如果你在非节庆季来，可以去拜访一位制作“布绍”面具的匠人。推开工作室的门，松木和油漆的味道扑面而来。架子上、墙上，挂满了尚未完成的狰狞面孔——长着巨大弯曲羊角的魔鬼、吐着长舌的怪物、咧开血红大嘴的奇兽。它们静止时是精致的手工艺品，但你仿佛能听到它们被戴上、被舞动起来时，那木头与木头撞击的咔嗒声，和从面具后发出的、低沉的吼叫。这就是莫哈奇最打动人心的核心魅力：它用一种近乎狂野的、原始的艺术形式，来对抗、驱散历史的幽灵与严冬的寒冷。悲伤与狂欢，死亡与重生，在这里不是对立面，而是同一枚硬币的两面。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走下从布达佩斯开来的巴士，第一口呼吸到的空气就带着多瑙河特有的、混着水汽与湿木头的清冽味道。莫哈奇和我想象中的“历史名城”完全不同——没有高耸入云的城堡尖顶，也没有挤满游客的华丽广场。它安静得甚至有些朴素，沿着主街走，两旁是色彩柔和的两三层小楼，阳台上挂着晾晒的衣物，咖啡馆里传出低低的谈话声。多瑙河就在不远处缓缓流淌，宽阔平静，你几乎无法相信，眼前这片宁静的河畔草地，曾是欧洲历史上最惨烈的屠场之一。那种感觉很奇怪，历史的雷霆万钧与当下的日常安宁，在这里毫无过渡地叠放在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到你走到城外的战役纪念公园。风毫无阻挡地吹过开阔的田野，乌鸦在光秃秃的树梢上啼叫。几座造型抽象、带着撕裂感的现代雕塑和纪念碑矗立在那里，沉默而有力。站在这片土地上，你不需要任何解说，皮肤就能感受到一种沉重的寒意。当年近两万匈牙利贵族与精锐士兵，就在这里，被奥斯曼帝国苏丹苏莱曼一世的军队如镰刀割麦般击溃。那种集体性的、决定命运的陨落，给这片土地留下了某种难以消散的“场”。然而，莫哈奇人没有选择永远沉浸在悲情中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的灵魂，藏在那些不起眼的民居作坊里。如果你在非节庆季来，可以去拜访一位制作“布绍”面具的匠人。推开工作室的门，松木和油漆的味道扑面而来。架子上、墙上，挂满了尚未完成的狰狞面孔——长着巨大弯曲羊角的魔鬼、吐着长舌的怪物、咧开血红大嘴的奇兽。它们静止时是精致的手工艺品，但你仿佛能听到它们被戴上、被舞动起来时，那木头与木头撞击的咔嗒声，和从面具后发出的、低沉的吼叫。这就是莫哈奇最打动人心的核心魅力：它用一种近乎狂野的、原始的艺术形式，来对抗、驱散历史的幽灵与严冬的寒冷。悲伤与狂欢，死亡与重生，在这里不是对立面，而是同一枚硬币的两面。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫哈奇`} />
                <InfoRow label="英文名称" value={`Mohács`} />
                <InfoRow label="正式名称" value={`Mohács`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`莫哈奇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`1526年那场终结了匈牙利中世纪王国独立性的决定性战役的发生地，从此改写了整个中欧的历史版图。`} />
                <InfoRow label="建筑特色" value={`一座低调度过日常的多瑙河畔小镇，其真正的“建筑”是每年二月末那场席卷全城、充满了原始生命力的木质面具与毛皮大衣的流动景观。`} />
                <InfoRow label="建筑风格" value={`混合了匈牙利传统的民居风格、奥斯曼帝国占领时期留下的些许痕迹，以及为了纪念历史而修建的简约现代主义纪念碑。`} />
                <InfoRow label="文化价值" value={`一个将民族最深重的历史创伤，通过一场荒诞、喧闹而充满生命韧性的冬季节庆进行疗愈与纪念的活态文化范本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市公共区域全天开放。莫哈奇战役历史纪念公园（Mohácsi Csatamező）每日上午9点开放至黄昏，冬季（11月至次年3月）可能提前至下午5点关闭。莫哈奇市立博物馆（Mohácsi Múzeum）开放时间为周二至周日上午10点至下午6点，周一闭馆。布绍节（Busójárás）每年在冬末春初举行，具体日期根据基督教传统“油腻星期二”（忏悔星期二）而定，为期约6天，节庆期间全城化为露天剧场。建议出行前务必查询具体年份的节庆日历。`} />
              <InfoRow label="门票价格" value={`莫哈奇战役历史纪念公园免费进入。莫哈奇市立博物馆成人票约1500福林（约4欧元），学生及老人优惠票约750福林。布绍节游行及大部分街头活动免费观看，部分室内音乐会或工作坊可能需要单独购票。`} />
              <InfoRow label="地址" value={`匈牙利，巴兰尼亚州，莫哈奇，7621`} />
              <InfoRow label="交通方式" value={`最便捷的方式是从匈牙利首都布达佩斯出发。从布达佩斯李斯特·费伦茨国际机场（BUD），可先乘坐机场快线（100E巴士）到市中心德亚克广场地铁站。在布达佩斯南部的 Népliget 长途汽车站乘坐长途巴士，班次频繁（约每小时一班），车程约2.5至3小时，直达莫哈奇汽车站，这是最推荐的方式。也可以从布达佩斯火车南站（Déli pályaudvar）乘坐火车，但车次较少且速度较慢，需时约3-4小时，优点是沿途可欣赏多瑙河乡村风光。自驾则沿M6高速公路向南，约2小时车程。城内主要景点步行即可轻松抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从1526年的夏天讲起。那一年，年仅二十岁的匈牙利国王拉约什二世，接到了一封来自东方的、措辞傲慢的战书。强大的奥斯曼帝国苏丹苏莱曼一世，率领着近十万大军和数百门火炮，已经越过了边境。拉约什匆忙集结了一支约两万五千人的军队，其中包含了匈牙利几乎所有的封建贵族精英。在选择战场时，他们看中了莫哈奇附近这片开阔的沼泽平原，认为这里可以限制奥斯曼骑兵的机动性。然而，这却成了一个致命的错误。那个闷热的八月午后，当奥斯曼军队如乌云般压境时，一场突如其来的雷暴席卷了战场。大雨让匈牙利骑士沉重的盔甲和战马深陷泥泞，而更适应地形的奥斯曼西帕希骑兵和训练有素的耶尼切里军团，则展开了无情的屠杀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战役在几小时内就结束了。血流成河，国王拉约什二世在溃逃中坠入附近的一条小河溺亡。近两万匈牙利战士阵亡，贵族阶层几乎被一扫而空。这场“莫哈奇的灾难”，不仅仅是一场军事失败。它直接导致了匈牙利王国的分裂，中部被奥斯曼帝国占领长达一个半世纪，而西部则落入哈布斯堡王朝之手。匈牙利作为独立王国的中世纪黄金时代，就此戛然而止。伤痛深深刻入了民族的记忆里，莫哈奇这个名字，成了悲剧的代名词。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史还有另一层更模糊、更富民间智慧的叙事。关于“布绍节”的起源，有一个口耳相传的传说。正是在奥斯曼人占领时期，莫哈奇附近的沼泽森林里，住着一群逃难而来的塞尔维亚人或克罗地亚人。他们不堪压迫，计划起义。某个智慧的老人想出奇招：让男人们用木头雕刻出最恐怖骇人的面具，披上翻面的羊皮袄，在冬末的夜晚点燃火炬，敲打着锅碗瓢盆，如从地狱归来的鬼怪般冲向土耳其人的营地。占领者被这些从未见过的“怪物”吓得魂飞魄散，以为邪灵作祟，仓皇逃走。这个传说真假难辨，但它将反抗的精神与驱邪的古老民俗完美结合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一种独特的文化愈合机制在这里诞生。每年冬末，当白天依然短暂寒冷，人们内心渴望春天驱走严寒时，莫哈奇人便化身为“布绍”。他们戴上那些代代相传、不断被赋予新创意的恐怖木雕面具，披上厚重的羊皮大衣，腰间挂上巨大的牛铃。他们不再是平日里温和的邻居、面包师或老师。在震耳欲聋的铃铛声、鼓声和原始吼叫声中，他们变成一股混沌而强大的力量。他们游行、舞蹈、恶作剧，用喧闹和“恐怖”的形象，象征性地驱赶的不仅是冬天，更是几个世纪以来盘踞在这片土地上的“邪恶”——战争、死亡、压迫的幽灵。这是一种集体的心理治疗，用极致的狂欢来直面极致的悲伤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的布绍节，已经发展成为匈牙利规模最大、最独特的民俗节庆之一，被列入联合国教科文组织非物质文化遗产。它保留了其原始的内核，也增加了花车游行、音乐会、手工艺市集等现代元素。那些面具，从单纯的恐怖，演化出无尽的幽默与讽刺形象，甚至能看到当代政治人物的面孔。莫哈奇人用这种方式告诉世界：我们没有忘记那场战役的痛，但我们选择用一种充满生命力的、创造性的方式去铭记和超越。历史在这里不是躺在教科书里，而是在每年二月末，随着铿锵的铃声和腾跃的火光，一次次地重生。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一整天的时间来深度感受莫哈奇的双重灵魂。最好在非节庆日的平日前来，才能静静体会历史的重量，并想象节日时的疯狂对比。上午九点左右抵达，先前往城外的古战场遗址，在清晨的静谧中感受历史的肃穆。随后回到城内参观博物馆，系统了解背景。下午将重点放在探寻布绍文化的民间作坊和街头巷尾，并在多瑙河畔漫步。这样的安排由静至动，由历史至当下，能让你层层剥开这座小镇的内涵。如果恰逢布绍节期间到访，则需要完全调整节奏，将自己投入连续数日的游行与人潮中，那将是另一种永生难忘的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观战役纪念公园时请保持肃穆，这是匈牙利人心中的民族圣地。若非节庆期间，镇上餐馆关门较早，建议提早安排晚餐。冬季前来务必穿戴足够御寒的衣物，多瑙河畔的风寒冷刺骨。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔城西的莫哈奇战役历史纪念公园，在旷野的晨风和鸟鸣中独自面对那些沉默的纪念碑，触摸冰冷的石头上镌刻的阵亡者名单。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进莫哈奇市立博物馆，仔细端详那幅描绘战役的巨型油画、出土的骑士铠甲碎片，以及一个完整陈列历代布绍面具的、令人眼花缭乱的展厅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻访一家本地手工艺人的工作室，看他如何将一块普通的椴木，用刻刀和彩漆一步步变成一张张或狰狞或滑稽的传奇面孔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇中心找一家传统的“契尔达”（csárda）餐馆坐下，点一份浓郁的鱼汤（Halászlé），这是多瑙河赐予的馈赠，感受本地生活的温热滋味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后沿着多瑙河堤岸慢慢散步，看货轮缓缓驶过，对岸就是克罗地亚的森林，想象几百年前大军在此集结的纷乱景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，去圣凯瑟琳教堂看看，这座18世纪的巴洛克教堂内部简洁，是战后重建的象征，提供一个安静反思的空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，回到主街，找一家咖啡馆坐下，观察放学回家的孩子和买菜归来的老人，试着将眼前平和的小镇生活与它所承载的厚重历史重叠在一起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`战役纪念公园的主纪念碑前`}</h4>
                  <p className="text-sm text-gray-700">{`选择在阴天或日落前拍摄，低角度的侧光能让纪念碑抽象的裂缝与扭曲造型产生强烈的戏剧性阴影，将天空的凝重感纳入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`布绍面具作坊内部`}</h4>
                  <p className="text-sm text-gray-700">{`征得匠人同意后，拍摄他正在雕刻面具的特写，焦点对准他专注的眼神或布满木屑的双手，用大光圈虚化背景中悬挂的无数已完成的面具，形成层次感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`多瑙河畔与城市轮廓`}</h4>
                  <p className="text-sm text-gray-700">{`从河对岸（需乘船或绕行至附近桥梁）拍摄莫哈奇小镇的全景，最佳时间是蓝调时刻（日落后的半小时），小镇灯光初上，河水映出深邃的蓝色，画面宁静而富有故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`布绍节游行高潮`}</h4>
                  <p className="text-sm text-gray-700">{`节庆时在主要游行街道两侧的二楼阳台或窗户后寻找机位，俯拍下方汹涌的、由面具和毛皮组成的“洪流”，使用慢速快门（如1/30秒）可以拍出动感模糊，突出游行队伍的疯狂动态与力量。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄布绍节游行时，务必尊重参与者，使用长焦镜头进行抓拍比近距离闪光灯直射更礼貌，也更能捕捉自然瞬间。许多戴面具的“布绍”乐于摆姿势，但最好先有眼神或手势交流。博物馆内部通常禁止使用闪光灯和三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔宁静之选`}</h4>
                  <p className="text-sm text-blue-800">{`一栋位于多瑙河岸边的翻新老房子民宿，房间窗户正对缓缓流淌的河水，清晨能看到薄雾从河面升起，夜晚安静得只能听到水波轻拍岸边的声音。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心民宿`}</h4>
                  <p className="text-sm text-green-800">{`由一对年轻夫妇经营的市中心公寓，装修现代舒适，主人是本地通，能告诉你哪些面包房最古老、哪里能找到最好的手工面具匠人，早晨会为你准备地道的匈牙利早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色体验居所`}</h4>
                  <p className="text-sm text-yellow-800">{`节庆期间才开放的特别客房，本身就在一栋存放着大量古董布绍面具的民俗收藏家宅邸里，仿佛睡在一座小型博物馆中，氛围独一无二。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`镇汽车站附近的一家干净简单的家庭旅馆，价格实惠，交通方便，主人热情好客，是预算有限或短暂停留的务实选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布绍节期间住宿异常紧张，价格也会飙升，必须提前至少三个月至半年预订。非节庆季则选择很多，可以到了再慢慢挑选。小镇治安非常好，夜间行走十分安全。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开莫哈奇的时候，我背包里多了一个小小的、不那么恐怖的布绍面具钥匙扣。它不像我在作坊里看到的那些巨兽般的面具那样有冲击力，但它弯弯的木头眼睛和一抹红色油彩，总让我想起那里独特的空气——一种混合了泥土、河水、木头和记忆的味道。这个地方教会我，历史不一定是沉重的负担，也可以是一种创造力的源泉。莫哈奇人没有在古战场旁建起一座哭泣的纪念馆，而是选择用雕刻、用舞蹈、用震耳欲聋的铃声，年复一年地上演一场盛大的“驱魔仪式”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求高效和即时满足的快节奏世界里，莫哈奇的存在像一个温暖的悖论。它提醒我们，有些伤痛需要被仪式化地反复言说，有些快乐需要穿上恐怖的外衣才能尽情释放。它告诉我们，一个社区的韧性，不仅在于承受了什么，更在于他们选择以何种方式记住、转化并庆祝他们的集体故事。对于热爱深度游的旅人来说，莫哈奇不是一张漂亮的明信片，而是一本打开的书，书页里既有冰冷的战争编年史，也有滚烫的民间血液。来这里，你不仅是在参观一个地点，而是在体验一种如何与历史共存的、鲜活而智慧的态度。这，或许才是旅行能带给我们的最深刻的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/visegrad-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维谢格拉德（多瑙河湾的云端皇宫遗址）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Visegrád</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szentendre-art-town-hungary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣安德烈（艺术小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szentendre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fuzer-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    菲
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">菲泽尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Füzér Castle</p>
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
