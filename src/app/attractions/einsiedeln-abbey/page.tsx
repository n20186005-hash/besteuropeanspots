import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '艾因西德伦修道院 Einsiedeln Abbey｜探访瑞士灵魂深处的黑圣母巴洛克圣殿 - 最佳欧洲景点',
  description: '记得我第一次走近它的时候，是一个秋日的清晨。薄雾像柔软的羊毛毯子，轻轻覆盖着施维茨州连绵的绿色山丘。然后，它出现了——艾因西德伦修道院。不是慢慢浮现，而是带着一种沉稳的、巨大的存在感，骤然占据了你全部的视野。那对洁白的巴洛克式双塔直指清冷的天空，巨大的穹顶如同王冠，整座建筑不是坐落在那里，更像是从这...',
}

export default function EinsiedelnAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '艾因西德伦修道院', href: '/attractions/einsiedeln-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`艾因西德伦修道院・Einsiedeln Abbey・瑞士・施维茨州，艾因西德伦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`记得我第一次走近它的时候，是一个秋日的清晨。薄雾像柔软的羊毛毯子，轻轻覆盖着施维茨州连绵的绿色山丘。然后，它出现了——艾因西德伦修道院。不是慢慢浮现，而是带着一种沉稳的、巨大的存在感，骤然占据了你全部的视野。那对洁白的巴洛克式双塔直指清冷的天空，巨大的穹顶如同王冠，整座建筑不是坐落在那里，更像是从这片土地里生长出来的、一个关于信仰与坚韧的实体宣言。空气里有柴火烟囱的淡淡气味，混合着远方牧场飘来的草香，周遭安静得能听见自己踩在鹅卵石路上的脚步声。
推开那扇厚重的木门，瞬间就被另一种空气包裹了。那是蜡烛燃烧的微暖蜡味、老木头经年累月的醇厚气息，以及一种清冷的、属于石头的洁净感。而视觉的冲击，则让呼吸为之一滞。天哪，这哪里是教堂内部，这分明是一个金色的梦境！目光所及，每一寸墙壁、每一根立柱、每一个拱顶，都覆盖着繁复到令人屏息的金色灰泥装饰、雪白的大理石和色彩绚烂的湿壁画。光线从高侧窗洒下，在金色浮雕上跳跃，让整个空间流淌着一种温暖而神圣的光辉。但最打动我的不是这炫目的奢华，而是这片辉煌中，那些静静移动的黑色身影——身着传统黑袍的本笃会修士。他们悄无声息地走过，或跪在角落祈祷，或在圣坛前准备仪式，为这个金光闪闪的空间注入了沉静而绵长的生命力。你会立刻明白，这里不是一个仅供参观的博物馆，而是一个依然强劲搏动着的心脏。
然后，你会被人流温柔地引向教堂中心那个小小的、被无数蜡烛照亮的礼拜堂——黑圣母小礼拜堂。这里的气氛截然不同，金光褪去，取而代之的是一种亲密的、被无数祈祷焐热的黑暗与温暖。小礼拜堂中央，身着华服的“黑圣母”像在摇曳烛光中显得无比慈祥又神秘。四周是低声的祷告、抚摸墙壁的指尖、以及人们眼中那份不容错辨的虔诚。这一刻，感官的震撼让位于心灵的触动。你看到的不再是巴洛克艺术的巅峰，而是一千年以来，无数普通人在这里寻找慰藉、表达感恩所堆积起来的那份厚重情感。它既是瑞士最辉煌的巴洛克杰作，也是一个村庄般温暖的精神家园。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`记得我第一次走近它的时候，是一个秋日的清晨。薄雾像柔软的羊毛毯子，轻轻覆盖着施维茨州连绵的绿色山丘。然后，它出现了——艾因西德伦修道院。不是慢慢浮现，而是带着一种沉稳的、巨大的存在感，骤然占据了你全部的视野。那对洁白的巴洛克式双塔直指清冷的天空，巨大的穹顶如同王冠，整座建筑不是坐落在那里，更像是从这片土地里生长出来的、一个关于信仰与坚韧的实体宣言。空气里有柴火烟囱的淡淡气味，混合着远方牧场飘来的草香，周遭安静得能听见自己踩在鹅卵石路上的脚步声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重的木门，瞬间就被另一种空气包裹了。那是蜡烛燃烧的微暖蜡味、老木头经年累月的醇厚气息，以及一种清冷的、属于石头的洁净感。而视觉的冲击，则让呼吸为之一滞。天哪，这哪里是教堂内部，这分明是一个金色的梦境！目光所及，每一寸墙壁、每一根立柱、每一个拱顶，都覆盖着繁复到令人屏息的金色灰泥装饰、雪白的大理石和色彩绚烂的湿壁画。光线从高侧窗洒下，在金色浮雕上跳跃，让整个空间流淌着一种温暖而神圣的光辉。但最打动我的不是这炫目的奢华，而是这片辉煌中，那些静静移动的黑色身影——身着传统黑袍的本笃会修士。他们悄无声息地走过，或跪在角落祈祷，或在圣坛前准备仪式，为这个金光闪闪的空间注入了沉静而绵长的生命力。你会立刻明白，这里不是一个仅供参观的博物馆，而是一个依然强劲搏动着的心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，你会被人流温柔地引向教堂中心那个小小的、被无数蜡烛照亮的礼拜堂——黑圣母小礼拜堂。这里的气氛截然不同，金光褪去，取而代之的是一种亲密的、被无数祈祷焐热的黑暗与温暖。小礼拜堂中央，身着华服的“黑圣母”像在摇曳烛光中显得无比慈祥又神秘。四周是低声的祷告、抚摸墙壁的指尖、以及人们眼中那份不容错辨的虔诚。这一刻，感官的震撼让位于心灵的触动。你看到的不再是巴洛克艺术的巅峰，而是一千年以来，无数普通人在这里寻找慰藉、表达感恩所堆积起来的那份厚重情感。它既是瑞士最辉煌的巴洛克杰作，也是一个村庄般温暖的精神家园。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`艾因西德伦修道院`} />
                <InfoRow label="英文名称" value={`Einsiedeln Abbey`} />
                <InfoRow label="正式名称" value={`艾因西德伦修道院`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`施维茨州，艾因西德伦`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是德语世界最重要的圣母玛利亚朝圣地，也是瑞士最具精神影响力的本笃会修道院之一。`} />
                <InfoRow label="建筑特色" value={`一座宏伟的巴洛克风格建筑群，以其巨大的穹顶、双塔立面以及内部极尽奢华的金色灰泥装饰和湿壁画而闻名。`} />
                <InfoRow label="建筑风格" value={`以巴洛克风格为主，尤其是教堂内部，是瑞士最杰出的巴洛克艺术代表作之一。`} />
                <InfoRow label="文化价值" value={`它不仅是宗教圣地，更是承载了瑞士建国传说与地区身份认同的“记忆之所”，其一年一度的“骑马圣餐游行”被列入瑞士非物质文化遗产名录。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院教堂全年每天清晨5:30开放至晚上8:00。黑圣母小礼拜堂（Gnadenkapelle）开放时间相同。图书馆和修道院博物馆开放时间较短，通常为周二至周日下午1:30至5:00。请注意，每日举行多场弥撒，期间游客需保持安静，部分区域可能临时关闭。圣诞节、复活节及8月15日圣母升天节等重大宗教节日时，开放时间可能延长且活动密集，但也可能因仪式需要调整公众参观区域。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂及黑圣母小礼拜堂完全免费。修道院博物馆门票为成人8瑞士法郎，学生及团体有优惠。图书馆参观通常包含在博物馆门票内或需额外支付少量导览费。所有参观均为自愿捐献，教堂入口处设有捐献箱，用于维护这处珍贵的文化遗产。`} />
              <InfoRow label="地址" value={`Klosterplatz 1, 8840 Einsiedeln, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世国际机场（ZRH）出发最为便捷。在机场火车站直接乘坐开往“Chur”或“Arth-Goldau”方向的城际列车（S-Bahn），在“Wädenswil”换乘前往“Einsiedeln”的火车即可。全程约1小时10分钟，班次频繁，每小时至少有2-3班直达或一次换乘的列车。从苏黎世主火车站出发更简单，有直达艾因西德伦的火车，车程约50分钟。购买瑞士旅行通票（Swiss Travel Pass）这段路程完全覆盖。到达艾因西德伦火车站后，修道院那巨大的巴洛克穹顶就是天然路标，步行约8-10分钟穿过宁静的小镇广场即可抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一个孤独的男人说起。公元9世纪中叶，一位名叫圣梅纳德的法兰克贵族，决定离开喧嚣的世界。他翻山越岭，来到这片当时还是荒野森林的湖边山谷，模仿早期的沙漠教父，搭建起一个简陋的小屋，过起了彻底隐居的生活。陪伴他的，只有一尊他从家乡带来的小型圣母木雕像。关于这尊雕像为何后来变黑，传说众多，最动人的说法是数百年蜡烛与油灯的烟熏，将木质熏成了深色，仿佛岁月与祈祷共同留下的烙印。梅纳德在这里祈祷、劳作，直到861年不幸被强盗杀害。但他的隐居所和那尊圣母像，却像一粒种子，埋在了这片土地里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这颗种子很快发芽。追随梅纳德精神的修士们陆续到来，在隐修所（Einsiedeln，在德语中正是“隐修所”之意）周围聚居。934年，在当时神圣罗马帝国皇帝的支持下，这里正式建立了一座本笃会修道院。那尊小小的圣母像被虔诚地供奉起来。奇迹开始流传——关于治愈、关于庇佑的故事越传越远。到了中世纪，艾因西德伦已经发展成为阿尔卑斯山以北最重要的朝圣地之一，无数 pilgrims 从德意志、奥地利甚至更远的地方徒步而来，只为在黑圣母像前片刻祈祷。修道院的财富与影响力也随之增长，开始建造更大、更坚固的罗马式教堂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正的蜕变发生在18世纪。那时的修道院院长决心赋予这座千年圣地一个配得上其荣耀的新外壳。于是，一场轰轰烈烈的巴洛克化改造开始了。请来了当时最杰出的建筑师和艺术家，比如负责壁画与装饰的兄弟档科斯马斯·达米安·阿萨姆。他们的任务很明确：创造天堂在人间的映像。于是，我们看到了今天这座殿堂——它用戏剧性的光线、无限延伸的透视、金色的漩涡和栩栩如生的天国人物壁画，将天主教反宗教改革的辉煌与自信表达得淋漓尽致。这不是炫耀，而是一种神学表达：通过极致的感官之美，引领灵魂抵达至高之境。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但历史的考验从未停止。1798年，法国大革命军队的铁蹄踏入瑞士，修道院遭到劫掠和关闭，修士被驱散，许多珍宝流失。那尊珍贵的黑圣母像被修士们冒死秘密转移，躲过了毁灭。直到拿破仑失败后，修士们才得以返回，在废墟上开始了艰难的复兴。他们修复的不仅仅是建筑，更是社区的信心。进入20世纪，两次世界大战的阴影下，艾因西德伦始终是许多人寻求内心平静的灯塔。如今，当你看到修士们依然严格遵循圣本笃的教规，每日数次在辉煌的教堂中咏唱日课，你会明白，这里穿越风雨的力量，不仅来自于石木，更来自于那条从未中断的、寂静而坚韧的精神脉络。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点前抵达，这是避开大型旅行团、享受教堂清晨宁静之光的最佳时刻。整体游览需要留出至少3到4小时，节奏宜慢不宜快，因为这地方的精髓需要用心去浸染。先从外部感受其恢宏气势，再进入内部让感官逐步适应并深入，最后以围绕修道院的静谧漫步收尾。这样的安排能让你从宏观到微观，从建筑到灵性，完整地体验艾因西德伦的多重维度。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`教堂内禁止使用闪光灯拍照，且弥撒期间绝对不能随意走动或拍照，请务必保持绝对的肃静与尊重。穿着需得体，避免过于暴露的短裤或吊带裙。小镇周四和周六上午有集市，非常热闹，可以规划在同一天体验，但届时教堂广场人也会较多。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，先别急着直奔修道院，绕到小镇主街看看那些装饰着湿壁画的老房子和售卖蜡烛与宗教用品的小店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在广阔的修道院广场上，后退几步，好好仰视那白色双塔与巨大穹顶构成的雄伟巴洛克立面，感受它与背后蓝天山脉的比例关系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开教堂主门，不要立刻往前走，就在门口站上一分钟，让你的眼睛适应那扑面而来的金色辉煌，并聆听空间里回荡的脚步声与远处祭坛的细微声响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着右侧走，自然而然地被烛光吸引，进入那座被包裹在宏大教堂体内的、温暖而私密的黑圣母小礼拜堂，观察信徒们触摸墙壁、点燃蜡烛的虔诚仪轨。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从礼拜堂出来，沿着主殿缓缓走向祭坛，抬头细细品味拱顶上描绘圣母生平的巨幅湿壁画，那些云端的人物仿佛要破顶而出。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一张靠边的长椅坐下，静静地等待或聆听一场修士们举行的拉丁文格里高利圣咏，让那古朴而悠扬的歌声在金色的穹顶下将你包裹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完主教堂后，如果开放，一定不要错过修道院博物馆，那里珍藏的圣物箱、中世纪手稿和那架著名的管风琴会为你补全历史的拼图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后从侧门走出，绕着庞大的修道院建筑群走半圈，看看修士们生活的庭院、古老的马厩，以及后方那片宁静的树林与远山。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`修道院广场喷泉前侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出巴洛克立面的立体感和双塔的挺拔线条，将喷泉作为前景，能增加画面的层次与生动感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`黑圣母小礼拜堂侧面逆光拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，烛光最盛时，站在礼拜堂入口侧面，利用栏杆做框架，拍摄信徒在黑色圣母像前祈祷的剪影，能捕捉到最动人的信仰瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主殿中轴线仰拍穹顶湿壁画`}</h4>
                  <p className="text-sm text-gray-700">{`躺在主殿正中的地毯上（如果允许且人少时），用超广角镜头垂直向上拍摄，能将科斯马斯·达米安·阿萨姆绘制的、充满动态的天国景象完整收纳，视觉冲击力极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院后方山坡远眺全景`}</h4>
                  <p className="text-sm text-gray-700">{`从小镇南侧的小路徒步上山约15分钟，有一片开阔的草地，从这里可以回望整个修道院建筑群安然卧于山谷中的全景，尤其是日出或日落时分，景色尤为壮丽。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`图书馆长廊纵深透视`}</h4>
                  <p className="text-sm text-gray-700">{`如果参观图书馆，一定要捕捉那个著名的洛可可风格图书馆长廊，站在一端，利用两排精美的木制书架形成的强烈透视线，拍出知识的深邃与宁静。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄人物（尤其是祈祷的信徒或修士）时，务必保持距离并征得同意，他们的隐私和神圣时刻比一张照片更重要。室内光线复杂，调高ISO使用大光圈镜头比依赖闪光灯更明智，闪光灯会破坏神圣氛围且被严格禁止。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`朝圣者之家的朴素体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接由修道院经营的“Haus Bethanien”，房间简朴洁净，价格亲民，包含早餐，最重要的是你能在清晨第一缕阳光洒进教堂时就加入修士的晨祷。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`小镇中心的温馨民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择主街上一栋有百年历史的木结构老屋改造的民宿，老板娘会给你讲她祖辈来朝圣的故事，晚上能听到隐约的教堂钟声，像睡在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`俯瞰山谷的设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇稍高处的现代风格酒店，房间拥有巨大的落地窗和私人阳台，可以将修道院穹顶和连绵山景作为你早餐的“配菜”，享受宁静的奢华。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`修道院侧翼的古老客栈`}</h4>
                  <p className="text-sm text-purple-800">{`一家由修道院古老附属建筑改造的精品酒店，石墙木梁保存完好，内部装饰是现代简约与历史元素的融合，位置隐秘而安静，仿佛住在修道院的故事中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`每年8月15日圣母升天节前后是朝圣高峰，住宿非常紧张，务必提前数月预订。小镇治安极好，夜晚非常宁静。选择住在修道院附近，能让你在游客散去后的黄昏或清晨，独享那份难以言喻的平和。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开艾因西德伦很久之后，我发现自己最常回味的，不是那些金光璀璨的穹顶壁画——虽然它们足够惊艳——而是两种反差极大的感觉：一种是进入教堂时那种几乎令人目眩的、排山倒海般的感官盛宴；另一种，则是坐在黑圣母小礼拜堂边，看着一位老农模样的信徒，用长满老茧的手颤巍巍地点燃一支细烛时，内心涌起的那股无比深邃的平静。艾因西德伦的精妙，就在于它将这二者完美地融合在了一起。它毫不掩饰地用人类最极致的艺术才华去荣耀信仰，却又在最核心处，为最朴素、最个人的那份祈祷，保留了一个温暖、黑暗、不受干扰的角落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、即时、透明的时代，艾因西德伦像一块古老的磁石，提醒着我们另一种时间维度，和另一种内在需求。它见证了权力更迭、战火劫掠，却始终因为那尊被烟熏黑的朴素木像，而将根深深扎在普通人的希望与慰藉之中。它告诉我们，真正的力量，可以既恢宏又温柔，既永恒又贴近心跳。所以，无论你是否信仰宗教，都值得来一次艾因西德伦。来感受一下，当巴洛克的辉煌乐章与一个人沉默的祈祷，在同一空间里共振时，所产生的那种奇妙而治愈的和声。那是一种能让你在喧嚣世界之外，突然触碰到宁静本源的力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spiez-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施皮茨城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiez Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/thun-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/romainmotier-priory" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗曼穆捷隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Romainmôtier Priory</p>
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
