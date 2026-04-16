import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '昆卡悬屋 Casas Colgadas｜探访西班牙最惊心动魄的悬崖之家 - 最佳欧洲景点',
  description: '第一眼看到昆卡悬屋，你的下巴可能会忘记合上。那不是一个“景点”，而是一个巨大的问号，被时光凝固在悬崖边。你会忍不住问：他们是怎么想的？又怎么敢住进去？从圣保罗木桥望过去，三栋刷着白墙、有着深色木框窗棂的房子，就那么毫无征兆地从一片灰黄色的岩石顶端“长”了出来，像岩石本身吐出的几个倔强的方块。河谷里的...',
}

export default function CasasColgadasCuencaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '昆卡悬屋', href: '/attractions/casas-colgadas-cuenca' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">昆卡悬屋・Cuenca's Hanging Houses・西班牙・昆卡</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一眼看到昆卡悬屋，你的下巴可能会忘记合上。那不是一个“景点”，而是一个巨大的问号，被时光凝固在悬崖边。你会忍不住问：他们是怎么想的？又怎么敢住进去？从圣保罗木桥望过去，三栋刷着白墙、有着深色木框窗棂的房子，就那么毫无征兆地从一片灰黄色的岩石顶端“长”了出来，像岩石本身吐出的几个倔强的方块。河谷里的风永不停歇，穿过桥下的峡谷，发出呜呜的低吼，仿佛在提醒你脚下虚空的存在。而悬屋，就在这风的乐章里，沉默地悬挂了几个世纪。
走近它，感官的冲击会更加具体。你能闻到峡谷底部飘上来的、带着水汽和青苔的清凉气味，混合着老木头在阳光下散发出的、类似谷仓的干燥暖香。用手指触摸那些支撑房屋的、巨大而古老的木梁末端，木头已经被风雨打磨得无比光滑，纹理里嵌着历史的尘埃。窗户里偶尔会闪过人影，或者透出博物馆里抽象画作的鲜艳色块——如今悬屋的一部分是西班牙抽象艺术博物馆。这奇妙的并置感让人恍惚：几个世纪前，这里的主人在同样的窗口，担忧的可能是风雨和战争；而今的访客，则在欣赏线条与色彩构成的现代精神世界。悬屋就这样，从一个生存的奇迹，变成了一个艺术的容器。
在当地人心中，悬屋早已超越了建筑的范畴。它是城市的徽章，印在明信片、餐馆菜单和本地啤酒的标签上。孩子们从小听着关于它的传说长大，老人们则把它当作一个方向标——“在悬屋那边见”。它不像马德里皇宫那样威严，也不像圣家堂那样神圣，它更像一个固执的邻居，用一种近乎鲁莽的方式，定义着这座山城的性格：冒险、坚韧，并且深深扎根于这片险峻的土地。它的魅力不在于金碧辉煌，而在于那种将生活置于边缘的、令人屏息的勇气。当你站在它的阴影下，仰望那些似乎 defy gravity 的木结构时，你会感到一种纯粹的、关于人类创造力的敬畏。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一眼看到昆卡悬屋，你的下巴可能会忘记合上。那不是一个“景点”，而是一个巨大的问号，被时光凝固在悬崖边。你会忍不住问：他们是怎么想的？又怎么敢住进去？从圣保罗木桥望过去，三栋刷着白墙、有着深色木框窗棂的房子，就那么毫无征兆地从一片灰黄色的岩石顶端“长”了出来，像岩石本身吐出的几个倔强的方块。河谷里的风永不停歇，穿过桥下的峡谷，发出呜呜的低吼，仿佛在提醒你脚下虚空的存在。而悬屋，就在这风的乐章里，沉默地悬挂了几个世纪。</p>
              <p className="text-gray-700 leading-relaxed mb-4">走近它，感官的冲击会更加具体。你能闻到峡谷底部飘上来的、带着水汽和青苔的清凉气味，混合着老木头在阳光下散发出的、类似谷仓的干燥暖香。用手指触摸那些支撑房屋的、巨大而古老的木梁末端，木头已经被风雨打磨得无比光滑，纹理里嵌着历史的尘埃。窗户里偶尔会闪过人影，或者透出博物馆里抽象画作的鲜艳色块——如今悬屋的一部分是西班牙抽象艺术博物馆。这奇妙的并置感让人恍惚：几个世纪前，这里的主人在同样的窗口，担忧的可能是风雨和战争；而今的访客，则在欣赏线条与色彩构成的现代精神世界。悬屋就这样，从一个生存的奇迹，变成了一个艺术的容器。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在当地人心中，悬屋早已超越了建筑的范畴。它是城市的徽章，印在明信片、餐馆菜单和本地啤酒的标签上。孩子们从小听着关于它的传说长大，老人们则把它当作一个方向标——“在悬屋那边见”。它不像马德里皇宫那样威严，也不像圣家堂那样神圣，它更像一个固执的邻居，用一种近乎鲁莽的方式，定义着这座山城的性格：冒险、坚韧，并且深深扎根于这片险峻的土地。它的魅力不在于金碧辉煌，而在于那种将生活置于边缘的、令人屏息的勇气。当你站在它的阴影下，仰望那些似乎 defy gravity 的木结构时，你会感到一种纯粹的、关于人类创造力的敬畏。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="昆卡悬屋" />
                <InfoRow label="英文名称" value="Cuenca's Hanging Houses" />
                <InfoRow label="正式名称" value="Casas Colgadas" />
                <InfoRow label="国家" value="西班牙" />
                <InfoRow label="城市" value="昆卡" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="中世纪建筑奇迹，是西班牙乃至整个欧洲将民用住宅建于极端地形之上的最著名、最具象征意义的范例之一。" />
                <InfoRow label="建筑特色" value="三栋连排的木结构房屋，其主体房间如同阳台般从坚硬的岩石悬崖边缘凌空探出，下方就是深达数十米的韦卡尔河谷。" />
                <InfoRow label="建筑风格" value="哥特式民用建筑，融合了穆德哈尔式的木工技艺，其大胆的结构远超当时普通民居的范畴，更像一个防御性与生活性结合的空中堡垒。" />
                <InfoRow label="文化价值" value="不仅是昆卡古城的灵魂标志，更因其不可思议的存在，成为了西班牙文学、绘画和电影中关于“冒险”、“边缘”与“生存”的永恒隐喻。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="悬屋外观全天可参观。作为博物馆的悬屋内部（西班牙抽象艺术博物馆）开放时间为：周二至周五 11:00-14:00 & 16:00-18:00；周六 11:00-14:00 & 16:00-20:00；周日及节假日 11:00-14:30。周一闭馆（节假日除外）。冬季（11月至次年2月）下午开放时间会提前至15:00开始，夏季（6月至9月）晚上闭馆时间可能延长。圣诞节、元旦及当地重要节日（如圣周）开放时间会有临时调整，建议出行前在其官网再次确认。" />
              <InfoRow label="门票价格" value="欣赏悬屋外部建筑及在圣保罗桥上观景完全免费。进入悬屋内部（西班牙抽象艺术博物馆）需购票，全票约3欧元，65岁以上长者、学生及团体票有优惠，约1.5欧元。每周周日及部分公众假日（如5月18日国际博物馆日）可免费进入。购票可在博物馆入口处直接购买，无需提前预约。" />
              <InfoRow label="地址" value="Casas Colgadas, 16001 Cuenca, Spain" />
              <InfoRow label="交通方式" value="从马德里出发最为方便。你可以选择乘坐高速火车（AVE）从马德里阿托查火车站前往昆卡-费尔南多·索维尔站，车程约50分钟，班次频繁，建议提前在Renfe官网或APP购票以获取折扣。抵达昆卡火车站后，出站乘坐1路或2路市区巴士，约15分钟即可抵达古城脚下的“昆卡城堡”站，从这里开始你的徒步上山之旅。如果你从马德里自驾，沿A-3和A-40高速公路行驶，约1小时45分钟即可抵达，但请注意古城内道路狭窄且多为单行线，建议将车停在古城外的公共停车场（如“Parking San Fernando”），然后步行进入。昆卡本地的小型机场主要服务于私人航班，普通游客无需考虑。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要讲悬屋的故事，得先回到昆卡城的诞生。公元8世纪，摩尔人看中了这个三面环河的天然岩石高地，在此修建了坚固的城堡，昆卡（在阿拉伯语中意为“河谷”）由此成为重要的军事要塞。基督徒收复失地运动后，城市在基督教王国手中继续发展。到了15世纪，随着人口增长和商业繁荣，城墙内平坦的土地变得寸土寸金。于是，一些胆大心细（或者说被逼无奈）的市民和工匠，将目光投向了圣马丁教堂旁边那片垂直的、俯瞰韦卡尔河的悬崖。他们或许从城堡的碉楼得到灵感，决定向空中索取居住空间。</p>
              <p className="text-gray-700 leading-relaxed mb-4">没有起重机，没有钢结构图纸，全凭经验丰富的石匠和木匠。他们先在坚固的岩石上凿出基座，然后用巨大的橡木梁作为悬臂，一端深深锚固在岩石里，另一端则勇敢地探出悬崖。接着，在这些凌空的木梁上搭建地板和墙体。墙壁是石块和灰泥，窗框和支撑结构则是厚重的木材。这不仅仅是为了炫技。在拥挤的中世纪城市，这样一个向外突出的“观景台”意味着更好的采光、更流通的空气，或许还能在夏天享受到峡谷上升的凉风。当然，它也像鹰巢一样易守难攻。最初的悬屋不止这三栋，而是一整排，是当时富有的贵族或行会首领的宅邸，是身份和实力的象征——敢于（并且能够）在悬崖上安家的人，绝非等闲之辈。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，时间与自然的力量是公平的。几个世纪的风吹雨打、冬天的严寒和木材本身的腐朽，让大多数悬屋逐渐垮塌或被人为拆除。到了20世纪初，仅存的这几栋也已破败不堪，摇摇欲坠，窗户破损，墙体开裂，几乎成了被遗忘的危房。它们命运的转折点，与一位名叫费尔南多·索维尔的本地艺术家兼收藏家紧密相连。他被这些建筑顽强的生命力所震撼，看到了其中无与伦比的历史与美学价值。在他的大力游说和保护下，当地政府终于决定出手干预。</p>
              <p className="text-gray-700 leading-relaxed mb-4">上世纪60年代，一场精心的、如外科手术般的修复工程启动了。工人们小心翼翼地替换了内部腐烂的木结构，用现代技术加固了岩石锚点，但最大程度保留了外观的历史风貌。修复完成后，索维尔做出了一个天才般的决定：将他收藏的大量西班牙抽象艺术画作放入其中一栋悬屋，创立了西班牙抽象艺术博物馆。这个决定在当时看来可能有些离经叛道——将最前卫的艺术放进最古老的躯壳。但如今看来，这简直是神来之笔。抽象艺术中那种打破常规、探索边界的的精神，与悬屋本身挑战地心引力的存在完美共鸣。古老的建筑因此获得了全新的灵魂，不再只是一个供人惊叹的化石，而是一个持续呼吸、与当代对话的文化空间。它从濒临消失的废墟，一跃成为西班牙文化保护的典范和昆卡旅游复兴的绝对核心。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  想要深度感受悬屋的魅力，建议预留至少半天时间。最佳抵达时间是清晨（9点左右）或下午三点后，这两个时段光线最为柔和，能拍出悬屋和峡谷的最佳质感，也能避开一日游旅行团的人潮。整体游览节奏应是“由远及近，由外至内”。先从远处、从不同角度欣赏其全貌，理解它与环境的关系；再走近触摸其肌理；最后进入内部，感受空间与艺术的交融。整个行程轻松漫步约需3-4小时，包括拍照、喝咖啡和发呆的时间。这样安排能让你层层递进地理解这座建筑，而不只是匆匆打卡。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>圣保罗木桥是木结构，走在上面会有晃动感且能看到桥下的深渊，恐高者需谨慎并抓稳扶手。
悬屋内部博物馆空间不大且多为古老的木地板，请务必轻声细语、缓慢行走，以免影响他人观赏体验。
昆卡古城内全是上下坡的石头路，请务必穿一双舒适防滑的步行鞋，高跟鞋在这里是“刑具”。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从古城主入口（奥达米达门）进入，沿着弯弯曲曲、铺着鹅卵石的上坡路慢慢走，让古城的生活气息作为序幕</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走到市长广场，在广场边缘第一次毫无防备地瞥见悬屋那惊心动魄的侧影，抓紧你同伴的胳膊</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过广场，沿着狭窄的“悬屋街”走到圣保罗木桥的桥头，这是观赏和拍摄悬屋经典全景的绝对C位</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">勇敢地走过吱呀作响的木桥，从对岸的悬崖回望，你会获得一个更完整、更具距离感的视角</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">折返回来，走到悬屋的正下方，抬头仰望那些巨大的木梁和斑驳的石壁，感受建筑的压迫感与力量</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从侧面的小门进入西班牙抽象艺术博物馆，在那些古老的木梁和石墙之间，欣赏色彩与线条的现代舞蹈</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">参观完毕后，绕到建筑后方（悬崖顶部）的小花园，这里安安静静，可以俯视峡谷并思考人生</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">最后，在黄昏时分回到圣保罗桥或桥头的悬崖咖啡馆，点一杯酒，看夕阳为白色的悬屋和深谷披上金色的外衣</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 圣保罗木桥中段</h4>
                  <p className="text-sm text-gray-700">下午四点后的侧光时分，以木桥的绳索和木板为前景框架，将三栋悬屋完整纳入画面，能拍出最具戏剧张力的明信片角度。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 悬屋正下方的岩石小径</h4>
                  <p className="text-sm text-gray-700">清晨阳光刚刚照亮悬崖顶端时，采用广角镜头极度仰拍，让木梁以夸张的透视感直插蓝天，突出其险峻。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 西班牙抽象艺术博物馆内某个朝西的窗口</h4>
                  <p className="text-sm text-gray-700">日落前半小时，将窗框作为天然画框，拍摄窗外峡谷对岸的古城建筑和天空变幻的色彩，创造一幅“画中画”。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 从对岸悬崖的观景小路远眺</h4>
                  <p className="text-sm text-gray-700">使用长焦镜头在晴朗的午后拍摄，可以压缩空间，让悬屋与后方宏伟的昆卡主座教堂同框，讲述古城整体的层次故事。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 市长广场东南角的石头栏杆边</h4>
                  <p className="text-sm text-gray-700">利用上午的顺光，拍摄悬屋与广场上色彩鲜艳的民居阳台同在一个画面的生活化场景，体现其融入日常的一面。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 峡谷内水汽较重，清晨和傍晚容易产生薄雾或霞光，这是拍摄悬屋梦幻氛围的绝佳时机，请准备好相机并耐心等待。</li>
                <li>• 使用无人机航拍能获得无比震撼的视角，但务必提前了解当地法规，并绝对避开人群，强风天气请勿冒险飞行。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城心跳</h4>
                  <p className="text-sm text-blue-800">入住悬屋步行三分钟内的历史建筑改造酒店，躺在房间里就能透过百叶窗听见峡谷的风声，仿佛与传奇共眠。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">艺术之家</h4>
                  <p className="text-sm text-green-800">选择由画家工作室改建的精品民宿，房间充满个性装饰，老板能跟你聊上一整晚关于昆卡和抽象艺术的故事。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">隐逸山居</h4>
                  <p className="text-sm text-yellow-800">住在古城对面悬崖上的小型乡间旅舍，推开窗就是直面悬屋和整个古城天际线的无敌全景，夜晚星空璀璨。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">现代便利</h4>
                  <p className="text-sm text-purple-800">对于自驾者，可以选择古城脚下步行十分钟可达的现代四星级酒店，停车方便，设施崭新，同时不失探索古城的便捷。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">古城内的住宿多为老建筑，房间格局可能不规则，隔音效果也可能不如现代酒店，但这份历史的质感无可替代。</p>
              <p className="text-gray-700 leading-relaxed mb-4">夏季和圣周期间是绝对旺季，务必提前数月预订，尤其是那些景观绝佳的特色住所。</p>
              <p className="text-gray-700 leading-relaxed mb-4">昆卡治安良好，但深夜独自在古城僻静的小巷行走时，保持基本的警惕总是好的。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开昆卡很久以后，我脑海中反复回放的，不是某一张具体的明信片画面，而是一种感觉——那种站在边缘，既感到危险，又感到无比自由的感觉。悬屋教会我的，不是关于建筑学的精密计算，而是关于生活的某种隐喻。我们大多数人终其一生，都在寻找平坦、安全、稳固的地基，这无可厚非。但总有一些灵魂，他们选择在悬崖边建造家园。这不是自杀式的冒险，而是在充分知晓深渊存在的前提下，依然决定向外探出身体，去拥抱更辽阔的风和风景。这种勇气，让石头和木头都获得了飞翔的姿态。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求效率、追求标准答案的快节奏世界里，昆卡悬屋像一首古老的、不押韵的诗。它不实用，不经济，甚至有些“不合理”。但正是这种“不合理”，构成了它无法被复制的灵魂。它提醒着我们，人类文明中最动人的篇章，往往是由那些敢于打破常规、在不可能之处创造可能的“疯子”书写的。每一位热爱深度游的旅人都该来此，不仅仅是为了一眼惊叹，更是为了来感受这种精神上的“悬空”时刻。站在圣保罗桥上，让峡谷的风穿透你，你会问自己：在我的生活中，是否也有那么一处“悬屋”，等待我去建造，或至少，去勇敢地眺望？</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
