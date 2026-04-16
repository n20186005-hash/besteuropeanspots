import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维斯比中世纪城墙 Visby City Wall｜北欧保存最完好的中世纪环形城墙，现实版童话镇的守护者 - 最佳欧洲景点',
  description: '当你第一眼看到维斯比城墙时，恐怕会瞬间失语。它不是你在欧洲大陆常见的那种依附于城堡的片段式遗迹，而是一条完整的、活生生的、灰白色的“石质缎带”，温柔而坚定地环绕着整个老城。我的第一印象来自一个海雾弥漫的清晨，从渡轮码头走出来，一抬头，那道雄伟的、带着无数锯齿状塔楼的轮廓就静静地耸立在坡地上，沉默地俯...',
}

export default function VisbyCityWallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维斯比中世纪城墙', href: '/attractions/visby-city-wall' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">维斯比中世纪城墙・Visby City Wall・瑞典・维斯比（哥特兰岛）</h1>
          <p className="text-lg text-gray-600 mb-6">
            当你第一眼看到维斯比城墙时，恐怕会瞬间失语。它不是你在欧洲大陆常见的那种依附于城堡的片段式遗迹，而是一条完整的、活生生的、灰白色的“石质缎带”，温柔而坚定地环绕着整个老城。我的第一印象来自一个海雾弥漫的清晨，从渡轮码头走出来，一抬头，那道雄伟的、带着无数锯齿状塔楼的轮廓就静静地耸立在坡地上，沉默地俯视着波罗的海。空气里有咸湿的海风气味，混合着老石头在晨雾中散发的、微微凉润的矿物质气息。耳边是海鸥清亮的鸣叫，和远处隐约传来的、行李箱轮子滚过鹅卵石路面的“咕噜”声。
沿着城墙根慢慢走，你会发现它早已深深嵌入了维斯比人的日常生活。城墙不再是分隔内外的屏障，而变成了一个巨大的、多功能的公共空间。你会看到慢跑者沿着城墙下的草地小径呼吸着新鲜空气；有老人坐在某段墙根的长椅上，就着一杯咖啡安静地读报；更有趣的是，许多当地人的后院就直接“长”在了城墙里——他们花园的篱笆或许就是一段古老的墙基，而爬满蔷薇的塔楼废墟，就成了最浪漫的背景墙。这种历史遗迹与日常生活的无缝交融，毫无疏离感，是维斯比城墙最动人的魅力之一。
触摸那些巨大的石灰岩块，手感粗粝而凉爽。阳光透过塔楼间的垛口，在古老的石砖步道上投下明明暗暗的光影棋盘。爬上一段阶梯，站在某座塔楼的平台上，视角瞬间切换：向内，是一片童话般的红顶木屋、教堂废墟和蜿蜒的石板小巷，时间仿佛停留在14世纪；向外，则是现代化的港口、蓝色的波罗的海和更广阔的天地。这道墙就像是一个时光过滤器，静静地划分了两个世界。最打动人心的，或许是在黄昏时分，当夕阳把整面城墙染成温暖的金色，塔楼的影子被拉得老长，你独自一人走在城墙上，听着风声穿过箭孔发出的轻微呜咽，那一刻，你真的能听见历史在石头里呼吸。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">当你第一眼看到维斯比城墙时，恐怕会瞬间失语。它不是你在欧洲大陆常见的那种依附于城堡的片段式遗迹，而是一条完整的、活生生的、灰白色的“石质缎带”，温柔而坚定地环绕着整个老城。我的第一印象来自一个海雾弥漫的清晨，从渡轮码头走出来，一抬头，那道雄伟的、带着无数锯齿状塔楼的轮廓就静静地耸立在坡地上，沉默地俯视着波罗的海。空气里有咸湿的海风气味，混合着老石头在晨雾中散发的、微微凉润的矿物质气息。耳边是海鸥清亮的鸣叫，和远处隐约传来的、行李箱轮子滚过鹅卵石路面的“咕噜”声。</p>
              <p className="text-gray-700 leading-relaxed mb-4">沿着城墙根慢慢走，你会发现它早已深深嵌入了维斯比人的日常生活。城墙不再是分隔内外的屏障，而变成了一个巨大的、多功能的公共空间。你会看到慢跑者沿着城墙下的草地小径呼吸着新鲜空气；有老人坐在某段墙根的长椅上，就着一杯咖啡安静地读报；更有趣的是，许多当地人的后院就直接“长”在了城墙里——他们花园的篱笆或许就是一段古老的墙基，而爬满蔷薇的塔楼废墟，就成了最浪漫的背景墙。这种历史遗迹与日常生活的无缝交融，毫无疏离感，是维斯比城墙最动人的魅力之一。</p>
              <p className="text-gray-700 leading-relaxed mb-4">触摸那些巨大的石灰岩块，手感粗粝而凉爽。阳光透过塔楼间的垛口，在古老的石砖步道上投下明明暗暗的光影棋盘。爬上一段阶梯，站在某座塔楼的平台上，视角瞬间切换：向内，是一片童话般的红顶木屋、教堂废墟和蜿蜒的石板小巷，时间仿佛停留在14世纪；向外，则是现代化的港口、蓝色的波罗的海和更广阔的天地。这道墙就像是一个时光过滤器，静静地划分了两个世界。最打动人心的，或许是在黄昏时分，当夕阳把整面城墙染成温暖的金色，塔楼的影子被拉得老长，你独自一人走在城墙上，听着风声穿过箭孔发出的轻微呜咽，那一刻，你真的能听见历史在石头里呼吸。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="维斯比中世纪城墙" />
                <InfoRow label="英文名称" value="Visby City Wall" />
                <InfoRow label="正式名称" value="Visby City Wall" />
                <InfoRow label="国家" value="瑞典" />
                <InfoRow label="城市" value="维斯比（哥特兰岛）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="北欧地区保存最完好、最长的中世纪环形防御城墙，是汉萨同盟鼎盛时期海上贸易霸权的沉默见证者，也是维斯比被列入联合国教科文组织世界文化遗产名录的核心要素。" />
                <InfoRow label="建筑特色" value="一条绵延3.4公里的灰白色石灰岩城墙，拥有超过50座姿态各异的塔楼和若干座气势恢宏的城门，完美地将中世纪老城与现代城区分隔开来，形成一道“冻结在时间中”的立体景观带。" />
                <InfoRow label="建筑风格" value="以罗马式建筑为基础，在后期加固中融入了哥特式军事防御建筑的特点，风格质朴、厚重、实用，体现了北欧中世纪防御工事的典型风貌。" />
                <InfoRow label="文化价值" value="它不仅是一座军事工程，更是维斯比作为“汉萨女王”辉煌历史的物理边界与精神象征，是理解波罗的海贸易史、中世纪城市生活以及瑞典文化遗产不可替代的活态教材。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="城墙本身为露天遗址，全天24小时开放，可随时沿步道漫步。城墙上的几座主要塔楼（如 Powder Tower, Kruttornet）及相连的 Fornsalen 博物馆开放时间有季节性变化：通常夏季（6月至8月）为每天10:00-18:00；春秋季（5月及9月）开放时间缩短，可能为11:00-16:00；冬季（10月至次年4月）塔楼内部基本关闭，仅可外部参观。具体开放时间建议行前查阅哥特兰岛旅游局官网。元旦、圣诞节等主要节假日关闭。" />
              <InfoRow label="门票价格" value="漫步城墙本身完全免费。进入塔楼内部或参观 Fornsalen 博物馆需购票：成人票约120瑞典克朗，学生及青少年票约80瑞典克朗，12岁以下儿童通常免费。可购买涵盖多个博物馆的联票，约250瑞典克朗。购票可在博物馆入口处或通过官网提前预订。" />
              <InfoRow label="地址" value="Visby City Wall, 621 56 Visby, Gotland, Sweden" />
              <InfoRow label="交通方式" value="抵达维斯比最便捷的方式是先飞往斯德哥尔摩（ARN或BMA机场）。从斯德哥尔摩市中心乘坐地铁或机场巴士到中央火车站，换乘前往尼奈斯港（Nynäshamn）的列车（约1小时，班次频繁）。从尼奈斯港搭乘 Destination Gotland 公司的渡轮前往维斯比（约3小时15分钟，夏季班次多，冬季减少，务必提前在官网预订船票，特别是车辆舱位）。此外，斯德哥尔摩阿兰达机场和哥特兰岛维斯比机场（VBY）之间有固定航班，飞行时间约40分钟，之后从机场乘坐巴士或出租车约15分钟即可抵达老城城墙下。在维斯比老城内，所有景点均可轻松步行到达。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要理解这道城墙，就必须回到那个被称为“汉萨同盟”的传奇时代。大约从12世纪开始，位于波罗的海中心的哥特兰岛，因其得天独厚的地理位置，成为了连接俄罗斯、北欧和西欧的贸易十字路口。而维斯比，就是这颗十字路口上最璀璨的明珠。来自德国吕贝克的商人们蜂拥而至，在这里建立了繁荣的海外商站。到了13世纪，维斯比已经富甲一方，被称为“波罗的海的女王”。财富带来了繁荣，也引来了贪婪的目光。海盗、竞争对手、乃至邻国的国王，都对这个装满毛皮、蜂蜡、白银和布匹的宝库垂涎三尺。</p>
              <p className="text-gray-700 leading-relaxed mb-4">于是，筑墙自保成了必然选择。城墙的修建并非一蹴而就，它是一场持续了近百年的“马拉松”。最早的部分建于13世纪中叶，起初只是为了保护德国商人聚居的“新城”。你如果仔细观察，还能发现早期城墙相对低矮、敦厚的罗马式风格。然而，真正的建设高潮与一场巨大的灾难紧密相连。1361年，丹麦国王瓦尔德马四世带着一支精锐的军队登陆哥特兰岛。关于那场战斗的传说充满了悲壮色彩——据说，富有的维斯比市民和农民们仓促组织起来，在城墙外与职业军队血战，最终惨败，留下了著名的“战场坟冢”。奇怪的是，坚固的城墙在当时似乎并未发挥决定性作用。有一种说法是，市民们或许是为了保护城外的农田和财产，选择出城迎战。这场惨败，像一记响亮的警钟，彻底惊醒了幸存者。</p>
              <p className="text-gray-700 leading-relaxed mb-4">大败之后，维斯比人痛定思痛，开始了史无前例的城墙加固和扩建工程。他们将原先只保护部分城区的城墙，延长、连接，最终形成了今天我们看到的、全长约3.4公里的完整闭环。这个时期的建筑风格明显转向更强调防御的哥特式军事建筑：城墙被加高到平均9米以上，新建和加固了超过50座塔楼，这些塔楼不再是简单的装饰，而是配备了射击孔和瞭望台的致命武器。他们还修建了气势恢宏的城门，比如如今依然是交通要道的“北门”和“南门”，但当时都配有沉重的吊闸和多重门闩。这道墙，是用鲜血和黄金的教训浇铸而成的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">城墙建成后的几个世纪里，它经历了多次围攻的考验，包括1525年吕贝克军队的猛烈攻击，那场战斗在城墙上留下了至今可见的炮弹痕迹。随着汉萨同盟的衰落和火炮技术的进步，城墙的军事价值逐渐降低。它慢慢沉寂下来，成了城市风景的一部分，甚至有些段落被民居侵占或当作了采石场。直到19世纪浪漫主义思潮兴起，人们才开始重新欣赏它的历史与美学价值，并开始了系统的保护和修复。如今，那些看起来古朴甚至有些“粗野”的修补痕迹，本身就是历史层累的一部分。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要深度感受维斯比城墙，我强烈推荐安排一个完整的下午，从三点左右开始，一直游览到日落时分。这样既能避开正午最烈的阳光（夏季哥特兰岛日照很长），又能捕捉到一天中最美的“黄金时刻”光影。整体耗时大约3-4小时，节奏宜缓不宜急，这是一场与历史和自然的散步对话。建议从北门（Norreport）附近开始，因为这里是城墙与现代城市连接最紧密、也最具生活气息的一段，然后顺时针方向漫步。这样的路线，你会先经历城墙与城市的交融，再逐渐进入更具野趣和历史沧桑感的东段与南段，最后在西南角的山丘上，迎接俯瞰老城与大海的壮丽日落，为旅程画上完美句号。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>一定要穿一双舒适耐走的平底鞋，城墙步道和周边的鹅卵石路面对脚踝是巨大考验。夏季即便是傍晚，紫外线也可能很强，务必做好防晒，并携带一瓶水，城墙上没有售卖点。注意，城墙上的海鸥在繁殖季（春夏季）非常具有攻击性，请勿靠近它们的巢穴，并小心头顶“空袭”。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从宏伟的北门（Norreport）内侧开始，仰头看看城门拱顶上那些历经风雨的古老纹章和石雕。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">顺着城墙内侧的坡道向东走，在“火药塔”（Kruttornet）停下，用手触摸外墙被海风侵蚀出无数孔洞的沧桑石面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">继续前行至东面城墙中段，这里有一段开阔的草地，找张长椅坐下，看着波罗的海的货轮缓缓驶过，感受海风直接扑面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从“爱神塔”附近的台阶爬上城墙步道，第一次以“守卫者”的视角，俯瞰老城内如积木玩具般的红顶房子和教堂废墟。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着城墙步道向南漫步，注意观察脚下石砖的磨损程度和墙面上不同年代修补留下的“补丁”。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走到南门（Soderport）附近，这里是城墙最壮观的门户之一，想象一下中世纪商队从这里进出的繁忙景象。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从南门继续沿城墙向西，来到一段被茂密野玫瑰和灌木丛包围的城墙脚下，这里的野趣和荒凉感最为强烈。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">最后，爬上老城西南角的“高地”，这里虽不是城墙最高点，却是俯瞰整个环形城墙、老城全貌和远处大海的绝佳观景台。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 北门外仰拍全景</h4>
                  <p className="text-sm text-gray-700">下午时分，站在北门外的现代街道上，用广角镜头仰拍城门与后方高耸塔楼的组合，将古老的石门与现代的行人、车辆一同纳入画面，形成时光交错感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 东城墙“玫瑰丛”前景</h4>
                  <p className="text-sm text-gray-700">夏季傍晚，在东城墙那段野玫瑰盛开的地方，以鲜艳的玫瑰花丛作为前景虚化，聚焦后方古朴的灰白色城墙和塔楼，营造出“钢铁柔情”的浪漫对比。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 南门日落剪影</h4>
                  <p className="text-sm text-gray-700">日落前半小时，赶到南门外的空地上，等待夕阳位置正好落在城门拱洞一侧时，拍摄行人或骑行者的剪影穿过金光闪闪的门洞，极具故事性和神圣感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 高地俯瞰全景</h4>
                  <p className="text-sm text-gray-700">日落时分，在老城西南角的高地上，用长焦镜头压缩空间，拍摄一段蜿蜒的城墙、几座塔楼与远处波罗的海和天际线的合影，这是维斯比的标准“证件照”。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 塔楼窗口框架式构图</h4>
                  <p className="text-sm text-gray-700">如果塔楼内部开放，一定寻找一个面向老城的窄小窗口，将相机贴近窗口石壁，以石壁作为天然画框，拍摄窗外如童话世界般的老城屋顶风光。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尝试使用偏振镜（CPL）来增强石头质感和天空的蓝色，尤其是在拍摄石灰岩城墙与蓝天大海的对比时。尽量避免在正午顶光下拍摄城墙，那时的阴影生硬缺乏层次；清晨的侧光和傍晚的黄金光是最佳选择。请务必尊重当地居民隐私，不要将镜头对准那些与城墙毗邻的私人花园和住宅内部。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">预算之选</h4>
                  <p className="text-sm text-blue-800">老城墙内侧几步之遥的温馨家庭旅馆，房间虽小却充满了瑞典式的设计感，女主人会为你手绘一张标记着本地人最爱面包店的秘密地图。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">特色体验</h4>
                  <p className="text-sm text-green-800">由一座17世纪商人宅邸改造的精品酒店，厚重的石墙隔开了外界的喧嚣，庭院里有一棵古老的苹果树，早餐是直接在庭院里享用的有机农场套餐。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">高端享受</h4>
                  <p className="text-sm text-yellow-800">坐落在老城中心广场旁的五星级酒店，由几栋中世纪建筑巧妙连通而成，部分房间的窗户正对着古老的城墙塔楼，晚上可以伴着石头缝里透出的灯光入眠。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">独特露营</h4>
                  <p className="text-sm text-purple-800">如果你在夏季来访，不妨尝试城墙外不远处的海滨露营地，租一间小木屋，晚上听着海浪声，抬头就能看见被灯光微微照亮的城墙轮廓，像一条沉睡的龙。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">维斯比夏季（尤其是七月的“中世纪周”期间）住宿极其紧张，价格飙升，务必提前至少三个月预订。选择住在老城墙内固然方便，但请注意，老城街道全是鹅卵石，拖行李箱会是一场噩梦，建议轻装或选择提供行李搬运服务的酒店。大多数老建筑内的酒店没有电梯，预订时若介意需提前确认。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开维斯比很多天后，我脑海里反复出现的，不是某个具体的塔楼或城门，而是一种感觉——一种被一道温柔的、坚实的边界所保护着的感觉。在这个边界模糊、一切都在加速流动的时代，维斯比城墙像一个固执的提醒者：有些界限是必要的，它们定义了“我们是谁”，保护了那些脆弱而珍贵的记忆与文化内核。它告诉我们，家园不仅是一个地理概念，更需要一道看得见、摸得着的物理轮廓来承载情感与认同。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这道城墙之所以能如此深刻地打动人心，或许正是因为它超越了纯粹的防御功能。它从一部充满血与火的斗争史中走来，最终却演化成了一座巨大的露天剧场、一条风景长廊、一个社区的后花园。它没有成为隔绝交流的冰冷屏障，反而变成了连接过去与现在、人与自然、遗产与日常生活的生命纽带。每一位热爱深度游的旅人都应该来这里，不只是为了看“北欧保存最完好的中世纪城墙”这个名号，更是为了亲身去体会，历史如何以最谦逊又最恒久的方式，融入风吹过野玫瑰的香气里，融入傍晚遛狗老人平静的微笑里，融入你自己踩在古老石阶上那一下踏实的心跳里。在这里，你会找到一种久违的、关于“持久”的安慰。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
