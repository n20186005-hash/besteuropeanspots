import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿奎莱亚考古遗址 Aquileia｜探秘“第二个罗马”与千年马赛克地下宝库 - 最佳欧洲景点',
  description: '想象一下，你从一条安静的意大利乡村小路拐进来，眼前突然出现一座气势恢宏的砖红色钟楼，它矗立在一片看似平凡无奇的田野和现代房屋之间。这就是阿奎莱亚给你的第一印象——一种巨大的反差感。空气里是青草、泥土和淡淡野花的味道，远处偶尔传来拖拉机工作的嗡嗡声，这里首先是当地人生活的地方，然后才是一个世界遗产。 ...',
}

export default function AquileiaArchaeologicalSitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿奎莱亚考古遗址', href: '/attractions/aquileia-archaeological-site' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿奎莱亚考古遗址・Aquileia・意大利・阿奎莱亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你从一条安静的意大利乡村小路拐进来，眼前突然出现一座气势恢宏的砖红色钟楼，它矗立在一片看似平凡无奇的田野和现代房屋之间。这就是阿奎莱亚给你的第一印象——一种巨大的反差感。空气里是青草、泥土和淡淡野花的味道，远处偶尔传来拖拉机工作的嗡嗡声，这里首先是当地人生活的地方，然后才是一个世界遗产。
但当你推开那座中世纪外观的大教堂厚重的木门，一切都不一样了。光线骤然变暗，一股古老石头特有的、略带潮湿的凉意包裹了你。然后，你的眼睛适应了光线，脚下的一切让你瞬间屏住呼吸。那不是普通的地板，那是一整片延展开来的、色彩依然鲜活的马赛克海洋。上千平米的地面，被无数细小的彩色石块拼成繁复的图案：成群的鱼儿、叼着橄榄枝的鸽子、好牧人、孔雀、葡萄藤……它们不是冰冷的历史碎片，而是近两千年前人们信仰与生活的鲜活叙事，直接铺展在你行走的地方。那种冲击力，不是仰望，而是俯视，仿佛一脚踏入了时间的断层。
走出教堂，阳光刺眼。你得重新调整视角，因为真正的宝藏还在“地下”。跟随指示走下大教堂旁的阶梯，你进入了一个巨大的地下考古世界。这里才是古罗马城市的地平面！你走在真实的罗马街道上，两旁是货仓、住宅墙壁的遗迹，能清晰地看到马车轮在石板上碾出的深深凹痕。想象一下，脚下踩着的不是泥土，而是一整个被掩埋的辉煌都城。地面上，现代人在骑车遛狗；地面下，你正穿梭在凯撒时代商贾云集的港口仓库间。这种时空叠压的眩晕感，是阿奎莱亚最独特的魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你从一条安静的意大利乡村小路拐进来，眼前突然出现一座气势恢宏的砖红色钟楼，它矗立在一片看似平凡无奇的田野和现代房屋之间。这就是阿奎莱亚给你的第一印象——一种巨大的反差感。空气里是青草、泥土和淡淡野花的味道，远处偶尔传来拖拉机工作的嗡嗡声，这里首先是当地人生活的地方，然后才是一个世界遗产。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但当你推开那座中世纪外观的大教堂厚重的木门，一切都不一样了。光线骤然变暗，一股古老石头特有的、略带潮湿的凉意包裹了你。然后，你的眼睛适应了光线，脚下的一切让你瞬间屏住呼吸。那不是普通的地板，那是一整片延展开来的、色彩依然鲜活的马赛克海洋。上千平米的地面，被无数细小的彩色石块拼成繁复的图案：成群的鱼儿、叼着橄榄枝的鸽子、好牧人、孔雀、葡萄藤……它们不是冰冷的历史碎片，而是近两千年前人们信仰与生活的鲜活叙事，直接铺展在你行走的地方。那种冲击力，不是仰望，而是俯视，仿佛一脚踏入了时间的断层。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走出教堂，阳光刺眼。你得重新调整视角，因为真正的宝藏还在“地下”。跟随指示走下大教堂旁的阶梯，你进入了一个巨大的地下考古世界。这里才是古罗马城市的地平面！你走在真实的罗马街道上，两旁是货仓、住宅墙壁的遗迹，能清晰地看到马车轮在石板上碾出的深深凹痕。想象一下，脚下踩着的不是泥土，而是一整个被掩埋的辉煌都城。地面上，现代人在骑车遛狗；地面下，你正穿梭在凯撒时代商贾云集的港口仓库间。这种时空叠压的眩晕感，是阿奎莱亚最独特的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿奎莱亚考古遗址`} />
                <InfoRow label="英文名称" value={`Aquileia`} />
                <InfoRow label="正式名称" value={`Aquileia`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`阿奎莱亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是罗马帝国最重要的城市之一，被誉为“第二个罗马”，也是早期基督教在欧洲传播的关键枢纽。`} />
                <InfoRow label="建筑特色" value={`其核心是拥有全欧洲最大、最精美的早期基督教马赛克地板的大教堂，以及在地下沉睡千年、规模宏大的古罗马城市街道与建筑遗址。`} />
                <InfoRow label="建筑风格" value={`以古罗马城市规划和建筑为基础，叠加了早期基督教巴西利卡式教堂风格，并融入了拜占庭艺术元素。`} />
                <InfoRow label="文化价值" value={`是古罗马文明向中世纪基督教文明过渡的独一无二的活化石，其马赛克艺术是研究早期基督教图像学的无价之宝。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`考古区域（户外遗址）：全年开放，全天可自由参观。大教堂及地下考古区：通常为夏季（4月-9月）上午9:00-下午7:00；冬季（10月-3月）上午9:00-下午5:00。请注意大教堂在周日弥撒期间（通常上午）可能限制游客进入。具体时间可能微调，建议行前查看官网。`} />
              <InfoRow label="门票价格" value={`大教堂及其地下考古区域：免费进入。毗邻的考古博物馆（Museo Archeologico Nazionale di Aquileia）收费，全票约10欧元，欧盟18-25岁公民有优惠票，18岁以下及特定日期免费。建议购买与附近其他遗址的联票。`} />
              <InfoRow label="地址" value={`Piazza Capitolo, 1, 33051 Aquileia UD, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是的里雅斯特弗留利-威尼斯朱利亚机场（TRS），距离约50公里。从机场可搭乘出租车（约50分钟，费用较高）或先乘巴士到的里雅斯特火车站。最方便的方式是从的里雅斯特中央火车站（Trieste Centrale）乘坐区域性火车前往切尔维尼亚诺（Cervignano）站，车程约30分钟，班次频繁。在切尔维尼亚诺站出口换乘前往阿奎莱亚的巴士（APL公司，约15分钟车程），巴士班次约每小时一班，周日减少。建议使用Trenitalia App购买火车票，巴士票可上车购买。自驾沿A4威尼斯-的里雅斯特高速公路，从“Palmanova”出口驶出，跟随指示牌约15分钟即达，遗址周边有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从公元前181年讲起。罗马共和国为了抵御北方“野蛮人”的侵袭，选中了这片靠近纳蒂松河入海口、通往亚得里亚海的战略要地，建立了一个军事殖民地。他们给这座城市取名阿奎莱亚，这个名字可能源于当地清澈的水源。谁也想不到，这个一开始的边防要塞，会因其绝佳的地理位置而一发不可收拾。它很快成了罗马向多瑙河地区和巴尔干半岛扩张的桥头堡，更成了连接地中海世界与中欧的贸易黄金枢纽。香料、琥珀、玻璃、葡萄酒、奴隶……所有你能想到的奢侈品都在这座城市的港口吞吐。到了公元初期，它已经是帝国第四大城市，繁荣程度仅次于罗马、亚历山大和安条克，名副其实的“第二个罗马”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`帝国的光环在公元4世纪开始面临动荡，而阿奎莱亚的命运也随之迎来了戏剧性的转折。一场地震、几次外族入侵，特别是公元452年“上帝之鞭”阿提拉领导的匈人大军的彻底摧毁，让这座石头之城化为废墟。城市的心脏停止了跳动，纳蒂松河也渐渐淤塞，昔日的港口沦为沼泽。表面上看，这是一场彻底的悲剧。然而，历史的吊诡之处就在于此。正是这次毁灭，为另一场伟大的诞生铺平了道路。早期基督教的信徒们没有离开，他们在废墟之上，利用旧神庙的石柱和砖块，开始建造一座全新的巴西利卡式大教堂。这不是毁灭后的苟且，而是一种精神上的凤凰涅槃。教堂的地基，直接打在了罗马富商豪宅的遗址上，而那些豪宅里精美绝伦的异教主题马赛克地板，则被巧妙地覆盖、保存，并成为了新教堂华丽地板的基础层。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，你看到了今天那个令人震撼的景象：大教堂地下层层叠叠的考古剖面，就像一本立体的历史书。最下层是罗马共和国的街道，中间是帝国时期的豪宅马赛克，最上层是中世纪早期基督教大教堂的地基。阿奎莱亚大主教区在早期基督教世界地位崇高，这里曾是整个中欧的传教中心。大教堂历经多次扩建和装饰，特别是在11世纪重建了我们现在看到的雄伟钟楼，并在13世纪为那些无与伦比的马赛克地板加盖了一层新的石板地面——这一保护性的覆盖，阴差阳错地让这些4世纪的马赛克在黑暗中完美沉睡，躲过了数百年的磨损和破坏，直到20世纪初才被考古学家重新发现，得以惊艳世人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的阿奎莱亚，安静地躺在弗留利平原上。它没有罗马的喧嚣，也没有威尼斯的浮华。它的辉煌不是矗立着的，而是平铺着的，甚至是深埋着的。它用这种谦卑而深邃的姿态，讲述着一个关于帝国兴衰、信仰更迭、文明如何在毁灭的灰烬中转换形态并顽强延续的漫长故事。走在那些半人高的石墙遗迹间，你触摸的不是冰冷的石头，而是一整段被压缩的时光。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味阿奎莱亚，你需要一整天的时间，并抱着“考古学家”般探索的心态。建议早上9点左右抵达，先避开可能的团队游客，把最精华的大教堂及地下区域细细看完。上午光线从东侧窗户射入，是欣赏中殿马赛克细节的最佳时刻。参观完室内，在镇上简单午餐后，开启下午的“户外探索模式”。整个考古公园面积很大，但核心遗迹相对集中，步行即可。你可以按照古罗马城市的脉络，从宗教中心（大教堂）走到行政商业中心（论坛），再到经济命脉（港口区），最后用考古博物馆的珍贵出土文物为整个游览画上完美的句号。黄昏时分，当游客散去，不妨再次回到大教堂广场，感受那份穿越千年的宁静。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`户外遗址几乎没有遮阳处，夏季务必携带防晒帽、太阳镜和充足饮用水，并穿着舒适耐走的鞋子，因为你要在古老的石头和草地上行走。
大教堂是活跃的宗教场所，请保持肃静，衣着得体（避免过于暴露的背心、短裤），并严格遵守室内禁止使用闪光灯的规定。
遗址范围较大且指示牌多为意大利语，建议提前在游客中心（位于大教堂广场旁）获取一份英文地图，或使用官方音频导览App，能极大提升参观的深度和理解。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开大教堂正门，立刻低头，让眼睛花十分钟适应昏暗，然后沿着中殿缓缓行走，辨识脚下马赛克讲述的《约拿与鲸鱼》、《好牧人》等圣经故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从祭坛右侧的楼梯走下，进入凉爽的地下考古区，沿着玻璃步道近距离观察层层叠压的罗马街道、豪宅地基以及早期基督教洗礼池的遗迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂，来到阳光下的“考古公园”，从教堂后的古罗马市集遗址开始，想象着这里曾是喧嚣的贸易中心，脚下是货摊的基石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着清晰标识的“decumanus maximus”（古罗马主干道）向西漫步，路旁散落着豪宅的柱础和精美的马赛克残片，它们就这么裸露在天空下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到道路尽头，眼前的景象会豁然开朗：那是一片巨大的、长满青草的低洼地，排列着整齐的石墩，这就是古罗马港口仓库的遗址，站在这里能最直观感受到这座“水上城市”昔日的规模。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返向东，穿过一片民居，寻找那座小巧但保存完好的古罗马陵墓“Mausoleo”，它孤独地立在田野中，是思考生命与永恒的绝佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，一定要留足时间给国家考古博物馆，那里收藏着从遗址出土的璀璨玻璃器皿、精美的珠宝、雕像和日常用品，让刚才看到的石头废墟瞬间有了血肉和温度。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大教堂中殿全景`}</h4>
                  <p className="text-sm text-gray-700">{`退到教堂最后方的唱诗班席台阶上，用广角镜头拍摄整个中殿和祭坛，重点捕捉地面马赛克的宏大图案与拱顶形成的纵深空间感，上午十点左右室内光线最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`港口遗址的黄昏`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，走到港口仓库遗址的西侧边缘，将长满青草的遗址、残存的石柱作为前景，以被晚霞染成金红色的乡村景色和远处的大教堂钟楼为背景，构图充满苍凉的历史感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地下考古区的细节光影`}</h4>
                  <p className="text-sm text-gray-700">{`利用地下考古区的人造灯光，贴近玻璃围栏，对准某一片保存完好的罗马时期马赛克或砖墙纹理进行特写拍摄，侧光能完美勾勒出石块的质感和色彩。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从田野遥望大教堂`}</h4>
                  <p className="text-sm text-gray-700">{`沿着小镇边缘的农田小路走到北面，在一片油菜花田（春季）或麦田（夏季）中，以广阔的田野为前景，拍摄那座孤立于平原之上的红砖钟楼，画面宁静而富有诗意。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄大教堂马赛克时，请务必关闭闪光灯，强烈的闪光会对历经千年的矿物颜料造成不可逆的伤害，高ISO和稳定手持或使用小三角架是更好的选择。`}</li>
                <li>• {`户外遗址允许无人机飞行，但必须严格遵守意大利关于无人机飞行高度、远离人群和私人领地的法律法规，最好提前在空旷的港口区远距离拍摄全景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式体验`}</h4>
                  <p className="text-sm text-blue-800">{`选择阿奎莱亚镇上由古老石屋改造的精品民宿，推开木窗就能看到大教堂的钟楼，夜晚能听到石板路上回荡的自己的脚步声，彻底融入千年古镇的节奏。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园风情`}</h4>
                  <p className="text-sm text-green-800">{`住在遗址区外围被葡萄园或果园环绕的“Agriturismo”（农家乐），享受家庭自产的葡萄酒和农场新鲜早餐，白天探索历史，晚上回归宁静的意大利乡村生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷城市基地`}</h4>
                  <p className="text-sm text-yellow-800">{`如果希望有更丰富的晚餐和夜生活选择，可以住在15分钟车程外的历史小镇格拉多（Grado）或切尔维尼亚诺，前者是风景如画的潟湖海滨度假地，后者交通枢纽功能完备，酒店选择更多。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端设计之选`}</h4>
                  <p className="text-sm text-purple-800">{`驱车半小时返回的里雅斯特，下榻由历史宫殿改造的奢华酒店，在享用完亚得里亚海鲜大餐后，回味白天在阿奎莱亚感受到的古老文明冲击。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿奎莱亚镇本身非常小且宁静，住宿选择有限且很快订满，尤其是在夏季和周末，务必提前数月预订以确保心仪的住处。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`周边乡村地区治安极好，但夜间照明较少，如果选择住在偏远的农庄，建议租车出行会更加方便自由。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿奎莱亚的时候，我的鞋底沾着那里的泥土，脑海里不再是孤立的石头或精美的图案，而是一幅完整的、流动的文明画卷。它教会我的，不是去仰视某个伟大的建筑巅峰，而是去俯身聆听大地深处的多重回响。在这里，历史不是教科书上按朝代分割的章节，而是一个连续不断的进程——罗马的律法、基督的福音、商人的算计、工匠的巧思、入侵者的火焰、农民的犁铧，全部一层压着一层，沉默地存在于同一片土地之下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求即时满足和视觉刺激的时代，阿奎莱亚是一种“反高潮”的存在。它不提供打卡式的壮丽外观，它的震撼需要你付出耐心、想象力和一点点弯腰低头的谦卑。它邀请你进行的，是一场关于时间本质的沉思。你会明白，文明如同地层，看似断裂毁灭之处，往往孕育着新生的种子。这就是为什么每个热爱深度游的旅人都该来这里。它不仅是一个景点，更是一座露天的哲学课堂。在这里走上一遭，你带走的将不仅仅是照片，而是一种更为深邃的视角——看待历史、看待变迁、看待我们自身在时间长河中位置的，平静而智慧的视角。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/the-ancient-city-of-acerenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿切伦扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Ancient City of Acerenza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perugia-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁贾老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Perugia Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto-historic-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
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
