import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '比托夫城堡 Bítov Castle｜悬崖之巅的千年古堡与神秘猎犬标本室 - 最佳欧洲景点',
  description: '朋友，想象一下这个画面：你开着车，在捷克南部起伏的丘陵和静谧的森林间穿行，导航显示目的地就在前方，可眼前除了树就是天。忽然一个转弯，森林向两侧退去，一片巨大的、绿得发蓝的水面豁然展开，而在水面对岸，一座笔直的、近乎垂直的悬崖拔地而起。就在那悬崖的顶端，是的，就在那看起来根本无法立足的岩石尖上，一组灰',
}

export default function BitovCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比托夫城堡', href: '/attractions/bitov-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`比托夫城堡・Bítov Castle・捷克・南摩拉维亚州，比托夫村附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下这个画面：你开着车，在捷克南部起伏的丘陵和静谧的森林间穿行，导航显示目的地就在前方，可眼前除了树就是天。忽然一个转弯，森林向两侧退去，一片巨大的、绿得发蓝的水面豁然展开，而在水面对岸，一座笔直的、近乎垂直的悬崖拔地而起。就在那悬崖的顶端，是的，就在那看起来根本无法立足的岩石尖上，一组灰白色的塔楼、尖顶和城墙，以一种近乎挑衅的姿态刺向天空——那就是比托夫城堡。你的第一反应很可能是踩下刹车，发出一声轻轻的“哇哦”。那种视觉冲击力，是任何照片都无法完全传递的。它不像那些修缮完美的童话城堡，它更粗粝，更孤傲，带着一种“我就在这里，谁也别想轻易上来”的霸气。
把车停在山脚下的村庄，你得沿着一条之字形的林间小径往上爬。脚下的落叶沙沙作响，空气里是松针和泥土湿润的芬芳。爬得越高，身后的迪耶河水库就展得越开，像一块巨大的、被群山环抱的绿松石。当你气喘吁吁地抵达城堡大门，穿过厚重门洞的瞬间，外界的声音仿佛被隔绝了。里面是一个由石头围墙圈起的世界，阳光把塔楼的影子拉得老长，投在鹅卵石铺就的庭院里。风在这里变得具体可感，它穿过箭孔，绕过墙角，发出呜呜的低吟，那是数百年来守卫者听惯的声音。你能触摸到墙砖，冰凉而粗糙，有些地方覆盖着墨绿色的苔藓。这里没有繁华市井的喧嚣，只有一种凝固了的、沉思般的寂静。
然而，这座城堡最打动人心的，或者说最令人难忘的核心魅力，恰恰隐藏在这片庄严肃穆之下，带着一丝难以言喻的诡异与忧伤。那就是城堡主楼里那个举世无双的“猎犬标本室”。当你跟随导游走进那个光线略显昏暗的房间时，准备好倒吸一口凉气吧。四周的墙壁上，密密麻麻地陈列着超过五十具狗的标本。它们大小不一，品种各异，都被精心制作成立足、蹲坐或警戒的姿态，玻璃珠做的眼睛在灯光下反射着永恒的目光。房间中央甚至还有一驾小马车，由几只标本狗“拉着”。这股浓烈的、属于另一个时代的收藏癖好，混合着防腐剂淡淡的、陈旧的气味，瞬间将你从中世纪的堡垒拉进了维多利亚时代某个贵族光怪陆离的私人沙龙。这种极致的险峻自然与极致的古怪人文的碰撞，正是比托夫独一无二的灵魂所在。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下这个画面：你开着车，在捷克南部起伏的丘陵和静谧的森林间穿行，导航显示目的地就在前方，可眼前除了树就是天。忽然一个转弯，森林向两侧退去，一片巨大的、绿得发蓝的水面豁然展开，而在水面对岸，一座笔直的、近乎垂直的悬崖拔地而起。就在那悬崖的顶端，是的，就在那看起来根本无法立足的岩石尖上，一组灰白色的塔楼、尖顶和城墙，以一种近乎挑衅的姿态刺向天空——那就是比托夫城堡。你的第一反应很可能是踩下刹车，发出一声轻轻的“哇哦”。那种视觉冲击力，是任何照片都无法完全传递的。它不像那些修缮完美的童话城堡，它更粗粝，更孤傲，带着一种“我就在这里，谁也别想轻易上来”的霸气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在山脚下的村庄，你得沿着一条之字形的林间小径往上爬。脚下的落叶沙沙作响，空气里是松针和泥土湿润的芬芳。爬得越高，身后的迪耶河水库就展得越开，像一块巨大的、被群山环抱的绿松石。当你气喘吁吁地抵达城堡大门，穿过厚重门洞的瞬间，外界的声音仿佛被隔绝了。里面是一个由石头围墙圈起的世界，阳光把塔楼的影子拉得老长，投在鹅卵石铺就的庭院里。风在这里变得具体可感，它穿过箭孔，绕过墙角，发出呜呜的低吟，那是数百年来守卫者听惯的声音。你能触摸到墙砖，冰凉而粗糙，有些地方覆盖着墨绿色的苔藓。这里没有繁华市井的喧嚣，只有一种凝固了的、沉思般的寂静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这座城堡最打动人心的，或者说最令人难忘的核心魅力，恰恰隐藏在这片庄严肃穆之下，带着一丝难以言喻的诡异与忧伤。那就是城堡主楼里那个举世无双的“猎犬标本室”。当你跟随导游走进那个光线略显昏暗的房间时，准备好倒吸一口凉气吧。四周的墙壁上，密密麻麻地陈列着超过五十具狗的标本。它们大小不一，品种各异，都被精心制作成立足、蹲坐或警戒的姿态，玻璃珠做的眼睛在灯光下反射着永恒的目光。房间中央甚至还有一驾小马车，由几只标本狗“拉着”。这股浓烈的、属于另一个时代的收藏癖好，混合着防腐剂淡淡的、陈旧的气味，瞬间将你从中世纪的堡垒拉进了维多利亚时代某个贵族光怪陆离的私人沙龙。这种极致的险峻自然与极致的古怪人文的碰撞，正是比托夫独一无二的灵魂所在。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`比托夫城堡`} />
                <InfoRow label="英文名称" value={`Bítov Castle`} />
                <InfoRow label="正式名称" value={`Bítov Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南摩拉维亚州，比托夫村附近`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`捷克最古老、保存最完好的城堡之一，历史上是摩拉维亚南部至关重要的边境防御要塞，以其险要地势和独特的贵族收藏闻名。`} />
                <InfoRow label="建筑特色" value={`傲然矗立于迪耶河（现已成水库）上方近80米的陡峭玄武岩山脊上，建筑群随山势起伏，宛如从岩石中自然生长出来。`} />
                <InfoRow label="建筑风格" value={`最初为罗马式堡垒，后经多次重建，现主体呈现19世纪浪漫的新哥特式风格，内部仍保留有早期哥特式及文艺复兴时期的痕迹。`} />
                <InfoRow label="文化价值" value={`不仅是一座军事堡垒的实体见证，更因城堡内光怪陆离的“猎犬标本室”而成为反映19世纪末中欧贵族奇异收藏癖好与时代精神的文化现象标本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常开放时间为四月至十月。具体月份有差异：四月和十月仅在周末及节假日开放（上午9点至下午4点）；五月、六月、九月为周二至周日开放（上午9点至下午5点）；七月、八月为每天开放（上午9点至下午6点）。冬季（十一月至次年三月）基本关闭维护。城堡内部参观必须跟随导游团，英语导游团次每日有限，通常在下午1点或2点。强烈建议出行前在其官网确认最新时刻表。`} />
              <InfoRow label="门票价格" value={`门票根据游览线路不同。标准成人票价约为180捷克克朗（约7欧元），包含主要宫殿和猎犬标本室。优惠票（学生、老人、儿童）约为120捷克克朗。家庭套票约为480捷克克朗。仅参观城堡庭院和外围是免费的。部分特殊展览或登上塔楼可能需要额外付费。建议准备捷克克朗现金，现场信用卡支付有时不太稳定。`} />
              <InfoRow label="地址" value={`Bítov 1, 671 10 Bítov, Czech Republic`} />
              <InfoRow label="交通方式" value={`比托夫城堡位置较为偏远，公共交通需要耐心和规划。最近的主要城市是布尔诺或布拉格。
从布尔诺出发：在布尔诺 hlavní nádraží（主火车站）乘坐火车前往小镇弗拉诺夫（Vranov nad Dyjí），车程约1.5-2小时，班次每天约4-5趟。抵达弗拉诺夫后，需要换乘当地的公共巴士（前往比托夫方向，班次稀少，尤其是周末）或直接预订一辆当地的出租车（约15分钟车程）前往城堡山脚。从山脚停车场到城堡入口还需步行约15分钟的上坡路。
从布拉格出发：更推荐自驾，车程约2.5小时。或者乘坐火车到兹诺伊莫（Znojmo），再转乘巴士，但全程可能需要4小时以上，且接驳复杂。最省心的方式是参加从布尔诺或布拉格出发的一日游团。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比托夫的故事，得从一千多年前说起。大约在11世纪，这片俯瞰迪耶河（当时还是一条湍急的河流）的玄武岩山嘴，就被波西米亚的普热米斯尔王朝选中，建造了一个前哨木堡。它的使命从一开始就写在了地理上：扼守摩拉维亚与奥地利的边境，监视河上往来，是个纯粹的军事产物。到了13世纪，石头取代了木头，一座坚固的罗马式城堡在此奠基，成为了王室重要的边境堡垒之一。它就像一颗钉在边境线上的顽石，见证了无数领主更迭和边境摩擦，城墙越垒越厚，塔楼越建越高。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的命运在14世纪后与几个显赫的家族紧密相连。它曾属于伦贝格家族，后来又归到了强大的利希滕贝格家族名下。这些贵族不仅仅是军事领主，他们开始把这里当作家园经营。城堡的内部空间被扩展，增加了更舒适的生活区域，防御工事也适应着火炮的出现而不断改进。十六、十七世纪，文艺复兴的风也吹到了这座悬崖上的堡垒，内部装饰增添了一些人文气息的壁画和雕饰。然而，真正的浩劫发生在三十年战争期间。1645年，瑞典军队攻陷并严重破坏了城堡。战火之后，它虽被修复，但军事价值已随着时代变迁而降低，逐渐从一座要塞转变为一个带有强烈个人色彩的贵族庄园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间来到19世纪，比托夫迎来了它历史上最奇特，也是塑造了其今日面貌的一位主人——达克斯伯爵，或者更准确地说，是酷爱打猎的伯爵们。尤其是19世纪下半叶的某几任伯爵，他们是狂热的猎人。城堡的险峻地势和周边广袤的森林为他们提供了绝佳的猎场。但与其他贵族将猎物的头颅挂在墙上不同，这几位伯爵对他们的猎犬有着超乎寻常的情感。于是，一个前所未有的主意诞生了：将他们心爱的、死去的猎犬制成标本，永久保存。一代又一代，这个收藏不断扩大，最终形成了那个令人过目不忘的标本室。这行为在当时或许是一种深情的纪念，在今天看来却充满了超现实的色彩。为了与这种“浪漫”的收藏癖好相匹配，城堡也在19世纪经历了一场大规模的“浪漫化”改造，外观被加上了当时流行的新哥特式尖顶和雉堞，使其更像人们想象中中世纪城堡的模样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪的战火与政权更迭再次改变了城堡的命运。二战后期它遭到轰炸，部分受损。战后，根据贝奈斯法令，城堡被收归国有，并对公众开放。那些沉默的猎犬标本，连同城堡里收藏的大量武器、油画和家具，都成为了国家博物馆的财产。如今，它不再属于任何一个家族，而是属于每一个沿着陡峭小径攀爬上来，想要一睹其险峻容颜和聆听其中古怪故事的旅人。从军事要塞到贵族私邸，再到向公众敞开大门的博物馆，比托夫城堡的每一块石头，标本室里的每一道目光，都在诉说着中欧这片土地复杂而层叠的历史。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受比托夫的双重魅力——外在的险峻与内在的奇诡，我建议你安排至少4-5小时的深度游览。最佳抵达时间是上午10点前，既能避开可能到来的旅游巴士团，又能享受清晨柔和的光线拍摄城堡外景。整体节奏应该是“由外至内，由宏至微”：先花足够时间在城堡外围和庭院感受其地势与氛围，然后跟随一场英语导游团深入宫殿内部和猎犬标本室，最后若有精力可登上塔楼（如开放）俯瞰全景作为高潮收尾。别忘了在城堡咖啡馆歇歇脚，让刚才接收的强烈印象慢慢沉淀。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网核查英语导游团的具体时间并预留名额，现场购买可能因团满而需漫长等待或错过。参观猎犬标本室时请保持安静和尊重，这个空间对某些游客（特别是儿童）可能造成不适，请自行判断。穿着绝对舒适的徒步鞋，因为从停车场到城堡的爬坡路段和城堡内部不平整的石阶都需要好脚力。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在森林边的停车场，先别急着上山，走到水库边的观景平台，好好仰视一下那座仿佛粘在悬崖顶上的城堡全貌，拍下它最经典的水中倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着被森林覆盖的蜿蜒坡道缓缓向上攀登，过程中不时回望，看迪耶河水库如何在脚下变得越来越辽阔，像一块铺开的绿丝绒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的拱形城门，踏入鹅卵石铺就的宁静内院，触摸那些被风雨侵蚀出深深纹路的古老石墙，感受从河面吹上来的风。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导游团进入宫殿内部，在挂满祖先肖像和狩猎 trophies 的走廊与大厅里，想象几个世纪前贵族们在此的生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`怀着忐忑又好奇的心情，轻轻推开猎犬标本室的门，让自己沉浸在那个由五十多双玻璃眼睛注视下的、时间静止的奇异空间里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果开放，一定要顺着狭窄的螺旋石阶爬上最高的塔楼，让360度的风包围你，俯瞰脚下墨绿色的水库和远处波浪般起伏的森林与丘陵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束后，在城堡庭院一角的咖啡馆点一杯捷克啤酒或咖啡，坐在露台上，对着悬崖下的风景，慢慢消化刚才经历的一切。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`水库南岸远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，从城堡对岸的公路边（有小型观景台）拍摄，能获得城堡与它在水库中完整倒影的对称构图，晨雾时分尤为梦幻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡入口拱门框景`}</h4>
                  <p className="text-sm text-gray-700">{`站在内院入口的拱门下，用门洞作为天然画框，拍摄远处的主塔楼和蓝天，形成强烈的纵深感和明暗对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`猎犬标本室窗外一瞥`}</h4>
                  <p className="text-sm text-gray-700">{`在标本室内，尝试将窗外的迪耶河水库风光与室内一两具标本的剪影一同纳入镜头，营造出一种现实与虚幻并置的超现实感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔楼顶俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`在塔楼顶，使用广角镜头垂直向下拍摄城堡屋顶的瓦片、错综复杂的建筑体块与下方深渊般的水库，视觉效果极具冲击力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部大部分区域（尤其是标本室）禁止使用闪光灯和三脚架，请提前调高相机感光度或使用大光圈镜头。拍摄水库和远景时，偏振镜（CPL）可以很好地消除水面反光，让森林和天空的色彩更饱和。尊重隐私，不要拍摄其他游客在标本室内不适或惊恐的表情。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔静谧小屋`}</h4>
                  <p className="text-sm text-blue-800">{`住在迪耶河水库边的弗拉诺夫小镇，那里有许多家庭经营的 pension（客栈），开窗即是湖光山色，晚上安静得只能听到水波声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择在更具中世纪风情的兹诺伊莫城住宿，那里有美丽的广场和地下酒窖，从城堡驱车约半小时可达，晚上可以在古城里散步品尝摩拉维亚葡萄酒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`乡村庄园体验`}</h4>
                  <p className="text-sm text-yellow-800">{`预订城堡附近乡村的Agroturistika（农家乐），入住传统的农庄，早晨在鸡鸣声中醒来，品尝主人自制的果酱和奶酪，体验真正的南摩拉维亚乡村生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`布尔诺城市便捷`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求交通便利和更多餐饮选择，可以住在摩拉维亚首府布尔诺，以这里为基地辐射游览比托夫及周边的其他城堡和葡萄园产区。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）是南摩拉维亚的旅游旺季，水库周边的住宿非常紧俏，务必提前数月预订。乡村地区治安良好，但夜间照明不足，如果晚上外出散步建议携带手电。许多家庭旅馆提供含早餐的半膳服务，是体验当地家常风味的好机会。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开比托夫城堡很久以后，我的脑海里依然会交替浮现两个画面：一个是阳光下它那孤绝于悬崖之巅的雄浑剪影，另一个是标本室里那些在昏黄光线下凝固的、充满诉说感的眼神。这座城堡教会我一件事：真正深刻的目的地，从来不是单一面孔的。它既是大自然鬼斧神工与人类坚韧意志共同完成的工程奇迹，让你在攀爬时由衷敬畏；同时，它也是人类情感、癖好乃至某种时代精神的奇怪容器，那间标本室就像一个琥珀，封存了19世纪末贵族阶层某种难以言明的忧伤、占有欲和对永恒的幼稚追求。这种矛盾与复杂，恰恰构成了比托夫无法被复制的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在一切都追求平滑、高效、可预测的现代世界里，比托夫的存在是一种温柔的叛逆。它不讨好，不妥协，你需要付出一点汗水才能抵达，需要鼓起一点勇气才能面对它最古怪的秘密。但正是这份“不易”与“意外”，让旅行超越了简单的观光，变成了一次触及历史肌理与人性幽微之处的对话。它提醒我们，欧洲的深度远不止那些众所周知的地标，更在于这些散落在大地角落、带着各自伤痕与故事的“个性者”。如果你也厌倦了千篇一律的风景，渴望一场能撩动心弦甚至略微刺激神经的探险，那么，请把比托夫列入你的清单。去站在那座悬崖上，让风穿透你，然后，走进那个房间，与那些沉默的猎犬对视片刻——我保证，那将是你旅途记忆中，一块绝不会褪色的、独特而坚硬的烙印。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/thun-castle-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle and Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/predjama-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普列加马城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Predjama Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jindrichuv-hradec-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因德日赫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jindřichův Hradec Castle</p>
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
