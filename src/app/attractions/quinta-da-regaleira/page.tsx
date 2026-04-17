import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '雷加莱拉庄园 Quinta da Regaleira｜隐藏着神秘共济会倒立塔和迷宫地道的暗黑童话庄园 - 最佳欧洲景点',
  description: '第一眼看到雷加莱拉庄园的大门，你可能会误以为闯进了一个过于甜美的童话。阳光穿过高大的树林，在嫩绿的苔藓上投下光斑，远处宫殿的白色外墙和精致雕刻，像极了公主的夏日行宫。空气中是辛特拉特有的、混合了湿润泥土、百年古树和淡淡花香的气息，偶尔还能听到不知名鸟类的清脆鸣叫。一切都那么宁静、美好，甚至有些寻常。...',
}

export default function QuintaDaRegaleiraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '雷加莱拉庄园', href: '/attractions/quinta-da-regaleira' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`雷加莱拉庄园・Quinta da Regaleira・葡萄牙・辛特拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到雷加莱拉庄园的大门，你可能会误以为闯进了一个过于甜美的童话。阳光穿过高大的树林，在嫩绿的苔藓上投下光斑，远处宫殿的白色外墙和精致雕刻，像极了公主的夏日行宫。空气中是辛特拉特有的、混合了湿润泥土、百年古树和淡淡花香的气息，偶尔还能听到不知名鸟类的清脆鸣叫。一切都那么宁静、美好，甚至有些寻常。
但请别急着下结论。当你拿着那张看似普通的地图，开始向花园深处走去时，某种微妙的变化开始发生。精心修剪的步道旁，开始出现表情怪异的石刻雕像；看似普通的亭子，其天花板壁画描绘的却是晦涩的星座图。那种感觉，就像是你最信任的童年故事书，翻到中间几页，突然变成了用密码写成的黑暗寓言。你的好奇心被轻轻勾起，又带着一丝不安，仿佛这片土地本身在低声邀请你：“再往里走一点，真相藏在光找不到的地方。”
而真正的转折点，发生在一个不起眼的岩洞入口。弯下腰钻进去，世界瞬间切换了模式。温暖的地面阳光被隔绝在外，取而代之的是地下通道里永恒的阴凉。石壁渗出的水珠带来冰冷的触感，脚步声在狭窄的空间里产生空洞的回响，唯一的光源是前方不知何处透来的、幽绿色的微光。就在这种混合着探险兴奋与隐隐恐惧的感官刺激中，你来到了那个传说中的地方——启动井。站在井口向下望，螺旋下降的楼梯深不见底，仿佛直通地心。这一刻你才恍然大悟，这座庄园最迷人的核心魅力，并非地上的华丽，而是这份精心设计的、引领你从光明坠入黑暗，再寻求重生的神秘仪式感。它是一场沉浸式的戏剧，而你就是其中的主角。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到雷加莱拉庄园的大门，你可能会误以为闯进了一个过于甜美的童话。阳光穿过高大的树林，在嫩绿的苔藓上投下光斑，远处宫殿的白色外墙和精致雕刻，像极了公主的夏日行宫。空气中是辛特拉特有的、混合了湿润泥土、百年古树和淡淡花香的气息，偶尔还能听到不知名鸟类的清脆鸣叫。一切都那么宁静、美好，甚至有些寻常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但请别急着下结论。当你拿着那张看似普通的地图，开始向花园深处走去时，某种微妙的变化开始发生。精心修剪的步道旁，开始出现表情怪异的石刻雕像；看似普通的亭子，其天花板壁画描绘的却是晦涩的星座图。那种感觉，就像是你最信任的童年故事书，翻到中间几页，突然变成了用密码写成的黑暗寓言。你的好奇心被轻轻勾起，又带着一丝不安，仿佛这片土地本身在低声邀请你：“再往里走一点，真相藏在光找不到的地方。”`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正的转折点，发生在一个不起眼的岩洞入口。弯下腰钻进去，世界瞬间切换了模式。温暖的地面阳光被隔绝在外，取而代之的是地下通道里永恒的阴凉。石壁渗出的水珠带来冰冷的触感，脚步声在狭窄的空间里产生空洞的回响，唯一的光源是前方不知何处透来的、幽绿色的微光。就在这种混合着探险兴奋与隐隐恐惧的感官刺激中，你来到了那个传说中的地方——启动井。站在井口向下望，螺旋下降的楼梯深不见底，仿佛直通地心。这一刻你才恍然大悟，这座庄园最迷人的核心魅力，并非地上的华丽，而是这份精心设计的、引领你从光明坠入黑暗，再寻求重生的神秘仪式感。它是一场沉浸式的戏剧，而你就是其中的主角。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`雷加莱拉庄园`} />
                <InfoRow label="英文名称" value={`Quinta da Regaleira`} />
                <InfoRow label="正式名称" value={`Quinta da Regaleira (Palácio da Regaleira)`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`辛特拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一处集浪漫主义建筑、神话隐喻与共济会、圣殿骑士团等神秘主义符号于一体的私人庄园，被誉为辛特拉“文化景观”皇冠上最神秘的一颗宝石。`} />
                <InfoRow label="建筑特色" value={`将曼努埃尔式、哥特式、文艺复兴及浪漫主义风格融为一体，并隐藏着庞大的地下隧道网络、岩洞、湖泊和象征“入会之旅”的倒立深井。`} />
                <InfoRow label="建筑风格" value={`以浪漫主义为基调，混搭了曼努埃尔式、哥特式和文艺复兴式的折衷主义风格。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一座庄园，更是一本用石头、水和光影写就的“启蒙之书”，直观反映了19世纪末20世纪初欧洲知识分子对神秘学、炼金术和宗教哲学的痴迷与探索。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月至9月）：上午9:30至晚上8:00，最晚入场时间为晚上7:00。
冬季（10月至3月）：上午10:00至下午6:30，最晚入场时间为下午5:30。
圣诞节和元旦当天关闭。开放时间可能因天气或特殊活动略有调整，建议出发前在其官网确认。`} />
              <InfoRow label="门票价格" value={`标准成人票：12欧元。
6-17岁青少年及65岁以上长者：7欧元。
家庭票（2成人+2儿童）：35欧元。
网上提前购票通常无需排队，但价格相同。庄园内部分导游讲解项目需额外付费。`} />
              <InfoRow label="地址" value={`R. Barbosa du Bocage 5, 2710-567 Sintra, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发是最佳选择。在里斯本的罗西奥火车站（Rossio Station）乘坐前往辛特拉的火车，班次频繁，约每20-30分钟一班，车程约40分钟。抵达辛特拉火车站后，出站右转步行约15分钟即可到达庄园正门，沿途有清晰路标。如果你不想爬山，火车站门口有434路旅游环线巴士，购买一日票可随意上下，在“Regaleira”站下车即可。自驾的话，辛特拉老城道路狭窄且停车困难，不推荐。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`雷加莱拉庄园的故事，始于一个对神秘学极度痴迷的百万富翁。这片土地的历史可以追溯到17世纪，历经多次转手，但真正赋予它灵魂的，是1892年将其购入的安东尼奥·奥古斯托·卡瓦略·蒙特罗。这位在巴西靠咖啡和宝石贸易积累了巨额财富的葡萄牙绅士，可不是一个普通的土豪。他是一个博学的“绅士学者”，对哲学、科学、尤其是共济会、圣殿骑士团和玫瑰十字会的象征主义有着近乎狂热的兴趣。他买下这里，不是为了炫耀财富，而是为了实现一个宏大的梦想：建造一个实体化的“微观宇宙”，一个能体现他从物质世界通往精神启蒙之旅的象征性空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`为了实现这个奇幻又深邃的构想，蒙特罗找到了绝佳的合作伙伴——意大利建筑师兼舞台设计师路易吉·马尼尼。马尼尼不仅是一位建筑师，更像一位造梦师。他深受但丁《神曲》、卡蒙斯《卢济塔尼亚人之歌》以及瓦格纳歌剧的影响。两人一拍即合，从1894年到1910年，投入巨大心血，将原本普通的农庄改造成了我们今天看到的奇迹。马尼尼的设计天马行空，他像编排一幕宏大歌剧一样布局整个庄园。地上的宫殿、教堂、喷泉、亭台是华丽的序幕和间奏，而地下的隧道、洞穴和水系，则是通往高潮剧情的秘密通道。每一处雕刻、每一座建筑的朝向、甚至水流的路径，都被赋予了复杂的象征意义。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`庄园的核心隐喻，围绕着“入会仪式”展开。这在那个神秘的“启动井”（又称“倒立塔”）体现得淋漓尽致。这口深27米的井，井口朝上，共有9层螺旋楼梯，象征着但丁笔下的九层地狱或共济会启蒙的九个阶段。参观者沿着楼梯盘旋而下，意味着从光明世界（地表）堕入黑暗与无知（井底），经历考验与净化。而井底通过一条黑暗的隧道，与一个被称作“未完成之井”的地方相连，那里有一块凸起的石头，踏上去便仿佛“重生”。最后，穿过一段必须弯腰前行的低矮隧道（象征分娩的通道），你会豁然开朗，重新回到阳光下的湖泊边。这一整套动线，完美复刻了古代密教中“死亡与重生”的启蒙旅程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`蒙特罗去世后，庄园几经易主，甚至一度荒废，那些精妙的象征意义也被世人逐渐淡忘，它沦为导游册上一处“风景不错的公园”。直到1997年，辛特拉市政府将其收购并进行了浩大而细致的修复工程，尘封的隧道被清理，模糊的雕刻被小心保护，学者们重新开始解读每一处细节背后的密码。它才终于从沉睡中醒来，向世界重新展示其双重面貌：既是浪漫主义美学的极致体现，也是一座庞大而复杂的石头谜语。如今，每一个走下深井的游客，都在不知不觉中，参与了一场百年前精心设计的精神游戏。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整体验雷加莱拉庄园的明暗两面，至少需要预留4到5个小时。强烈建议在开园后一小时内抵达，这时晨雾未完全散去，光线柔和，游客稀少，最能感受庄园静谧神秘的原初氛围。游览节奏宜慢不宜快，这是一场需要调动想象力的探索，而不是打卡集邮。整体路线建议遵循“由明到暗，再由暗归明”的哲学：先游览地上相对华丽的建筑，建立对主人审美与财富的认知；然后深入地下迷宫，完成象征性的“启蒙之旅”；最后回到花园高地，俯瞰全景，消化内心的震撼。记得穿一双绝对防滑且你不介意弄脏的结实的鞋子，因为地下通道潮湿且不平。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`地下通道网络复杂，虽然有指示但依旧容易迷路，建议与同伴同行，并确保手机电量充足以充当手电。
庄园内几乎没有食品出售，仅入口处有小型咖啡馆，请自备少量饮用水和零食，但请务必带走所有垃圾。
某些地下通道非常低矮湿滑，且楼梯陡峭，穿长裙、高跟鞋或行动不便者需格外小心，最好有同伴搀扶。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门进入后，先别急着找深井，沿着主路漫步到宫殿正面，细细欣赏其曼努埃尔式风格的精致窗棂和象征航海发现的石刻绳结。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入宫殿内部（如果开放），留意大厅的壁画和瓷砖，它们描绘的往往是神话和探险场景，是理解主人精神世界的钥匙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完宫殿后，绕到后面的小教堂，虽然小巧，但其内部装饰和天花板的绘画隐藏着诸多共济会与圣殿骑士团的象征符号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`现在，开始寻找地下世界的入口：从教堂附近或湖边的某个不起眼的岩洞钻进去，让自己瞬间被黑暗和凉意包裹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在手电筒或手机微光的指引下，在错综复杂的隧道中摸索前进，感受方向感的迷失，最终找到那口令人屏息的螺旋深井。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气沿着井壁的楼梯盘旋而下，触摸冰凉的石壁，倾听自己脚步的回声，体验“坠入深渊”的仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从井底穿过象征重生的低矮隧道，突然重见天日，发现自己站在一片美丽的湖泊前，回头望向来路，恍如隔世。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着花园小径爬上庄园的至高点，从“莱达之洞”附近的观景台回望整个庄园，将刚才经历的一切明暗景观尽收眼底。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`启动井井口俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前或下午四点后，阳光能以一定角度射入井口上层，产生神圣的光柱效果，站在顶层平台边缘向下垂直拍摄，能捕捉到螺旋楼梯极具几何美感和纵深感的震撼画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`湖泊重生隧道出口`}</h4>
                  <p className="text-sm text-gray-700">{`从隧道里走出来的一刹那，以隧道口为画框，将门外阳光下的湖泊、瀑布和绿树作为背景，拍摄人物剪影或背影，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`宫殿侧面阳台`}</h4>
                  <p className="text-sm text-gray-700">{`避开正面的游客，绕到宫殿侧面的小阳台，以阳台精美的石栏为前景，拍摄远处茂密森林和辛特拉山若隐若现的其他宫殿屋顶，层次丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`莱达之洞观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时左右，光线最为金黄柔和，在此可以拍到雷加莱拉宫殿全景以及更远处的辛特拉山脉，是全景打卡的绝佳位置。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`地下隧道微光构图`}</h4>
                  <p className="text-sm text-gray-700">{`在隧道中，将相机或手机放在地面低角度，利用隧道尽头透出的自然光作为唯一光源，拍摄延伸的拱廊和地面上积水反射的光斑，营造神秘幽闭的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`地下环境光线极度昏暗，建议使用大光圈镜头或手机夜景模式，并尽量保持手机稳定以避免模糊。`}</li>
                <li>• {`尊重庄园氛围，避免使用过于刺眼的闪光灯或自拍灯，以免破坏他人沉浸体验及历史环境。`}</li>
                <li>• {`部分区域（如小教堂内部）可能禁止拍照，请留意现场标识。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在辛特拉历史中心由19世纪贵族别墅改造的精品酒店，房间铺着老木地板，窗外就是蜿蜒的石板路，步行至雷加莱拉庄园仅十分钟，夜晚非常安静。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`选择庄园附近一处被巨大花园包围的乡村客栈，早晨在鸟鸣声中醒来，坐在露台上就能望见雷加莱拉庄园的塔楼尖顶，仿佛住在童话的隔壁。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端避世之选`}</h4>
                  <p className="text-sm text-yellow-800">{`入住坐落在辛特拉山间、拥有百年历史的五星级宫殿酒店，享受古董家具、华丽花园和无敌山景，并提供专车接送服务，让你完全沉浸于“山间贵族”的度假氛围。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客社交之选`}</h4>
                  <p className="text-sm text-purple-800">{`辛特拉火车站附近有设计感十足的现代青年旅舍，提供干净的宿舍和私人房间，有一个可以结识世界各地旅行者的大露台，交通极其便利。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`辛特拉是热门旅游地，夏季和周末住宿非常紧张且价格高昂，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在历史中心虽然方便，但夜间娱乐选择较少，且多为山坡地形，拖行李行走较吃力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`山间早晚温差大，无论什么季节，都建议备一件保暖外套。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开雷加莱拉庄园很久以后，我脑海里反复回放的，不是宫殿的华丽，也不是花园的秀美，而是那只身处于深井之底时，抬头望向那一小片圆形天空的瞬间。那种被大地包裹的静谧与孤独，奇异地带给我一种深沉的平静。它让我意识到，这座庄园最伟大的地方，不在于它诠释了多少神秘的符号，而在于它提供了一种罕见的、可亲身经历的“隐喻”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切体验都被加速、被扁平化的时代，我们习惯于快速浏览，被动接收信息。但雷加莱拉强迫你慢下来，去摸索，去迷失，甚至去感到一丝微不足道的恐惧。你需要弯腰钻进黑暗，需要数着台阶一步步走向未知，需要在重见光明时，长长地舒一口气。这个过程本身，就是一种对抗浮躁的冥想。它用一种近乎游戏的方式提醒我们：真正的理解与启蒙，从来不是轻而易举的观光，它需要你亲身“坠入”，经历困惑与黑暗，才能收获那一刻豁然开朗的珍贵光亮。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都该来这里看看。它不仅仅是一个景点，更是一面镜子。你带着怎样的内心世界进入那些隧道，就会从中映照出怎样的感悟。无论是将它看作一个巨大的艺术装置，一次心理冒险，还是一堂关于符号学的生动课业，雷加莱拉庄园都会在你心里留下独一无二的刻痕。它告诉我们，最深刻的旅程，目的地往往不是某个地方，而是我们对自己内心的一次更深层的探访。在这座暗黑童话庄园里走一遭，你或许不会破解任何古老密教的谜题，但你很可能会，遇见一个更安静、也更勇敢的自己。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/viseu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/amarante-portugal-tamega-river" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿马兰特（塔梅加河畔的浪漫小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amarante</p>
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
