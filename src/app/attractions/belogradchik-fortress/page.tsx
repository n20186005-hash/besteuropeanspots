import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝洛格拉奇克要塞 Belogradchik Fortress｜与千万年红色怪岩融为一体的史诗堡垒 - 最佳欧洲景点',
  description: '朋友，想象一下，当你开车穿过保加利亚西北部那片宁静到有些寂寞的丘陵地带，昏昏欲睡时，天际线上突然跳出一排排巨大的、赤红色的身影。它们不像山，更像一群被时间凝固的巨人、骆驼、僧侣，甚至是神话中的怪兽，以暗红和赭石的色调，沉默地屹立在蔚蓝的天穹下。而贝洛格拉奇克要塞，就镶嵌在这群巨岩之中，你第一眼甚至分...',
}

export default function BelogradchikFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '贝洛格拉奇克要塞', href: '/attractions/belogradchik-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝洛格拉奇克要塞・Belogradchik Fortress・保加利亚・贝洛格拉奇克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你开车穿过保加利亚西北部那片宁静到有些寂寞的丘陵地带，昏昏欲睡时，天际线上突然跳出一排排巨大的、赤红色的身影。它们不像山，更像一群被时间凝固的巨人、骆驼、僧侣，甚至是神话中的怪兽，以暗红和赭石的色调，沉默地屹立在蔚蓝的天穹下。而贝洛格拉奇克要塞，就镶嵌在这群巨岩之中，你第一眼甚至分不清哪里是岩石的尽头，哪里是城墙的开始。车越近，那种超现实的感觉就越强烈，空气里是干燥的泥土和野草的气息，偶尔有乌鸦的叫声从岩顶掠过，更显天地空旷。
走进小镇，你会发现这些高达数十层楼的奇岩就是当地人生活的日常背景。老太太在自家院子里浇花，抬头就能看到“骆驼岩”的侧影；孩子们踢足球的荒地，尽头就是陡峭如刀削的红色岩壁。生活在这里有一种奇特的平静感，仿佛被这些存在了数千万年的岩石守护着，也稀释了。但当你开始朝要塞入口走去，那种平静逐渐被一种史诗感取代。风穿过岩缝发出呜呜的低鸣，像是历史的回响。
这座要塞最打动人心的，正是这种“非典型”的壮美。它不像那些精雕细琢的宫殿城堡，追求对称与奢华。它的美是野性的、实用的、与大地筋骨相连的。你的震撼，来自于看到人类没有试图征服或铲平自然，而是像藤蔓一样，巧妙地攀附、利用、加固这些天生的屏障。抚摸那些粗糙的、带着砂砾感的城墙，你会感觉到两种时间的碰撞：一种是地质时间，缓慢而宏大，创造了这些岩石；另一种是人类历史时间，短暂而激烈，在岩石上留下了炮眼、台阶和守望的痕迹。在这里，你不是在参观一个“建筑”，而是在体验一个“情境”——一个关于边界、防御、生存以及与自然谈判的、充满力量的故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，当你开车穿过保加利亚西北部那片宁静到有些寂寞的丘陵地带，昏昏欲睡时，天际线上突然跳出一排排巨大的、赤红色的身影。它们不像山，更像一群被时间凝固的巨人、骆驼、僧侣，甚至是神话中的怪兽，以暗红和赭石的色调，沉默地屹立在蔚蓝的天穹下。而贝洛格拉奇克要塞，就镶嵌在这群巨岩之中，你第一眼甚至分不清哪里是岩石的尽头，哪里是城墙的开始。车越近，那种超现实的感觉就越强烈，空气里是干燥的泥土和野草的气息，偶尔有乌鸦的叫声从岩顶掠过，更显天地空旷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进小镇，你会发现这些高达数十层楼的奇岩就是当地人生活的日常背景。老太太在自家院子里浇花，抬头就能看到“骆驼岩”的侧影；孩子们踢足球的荒地，尽头就是陡峭如刀削的红色岩壁。生活在这里有一种奇特的平静感，仿佛被这些存在了数千万年的岩石守护着，也稀释了。但当你开始朝要塞入口走去，那种平静逐渐被一种史诗感取代。风穿过岩缝发出呜呜的低鸣，像是历史的回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座要塞最打动人心的，正是这种“非典型”的壮美。它不像那些精雕细琢的宫殿城堡，追求对称与奢华。它的美是野性的、实用的、与大地筋骨相连的。你的震撼，来自于看到人类没有试图征服或铲平自然，而是像藤蔓一样，巧妙地攀附、利用、加固这些天生的屏障。抚摸那些粗糙的、带着砂砾感的城墙，你会感觉到两种时间的碰撞：一种是地质时间，缓慢而宏大，创造了这些岩石；另一种是人类历史时间，短暂而激烈，在岩石上留下了炮眼、台阶和守望的痕迹。在这里，你不是在参观一个“建筑”，而是在体验一个“情境”——一个关于边界、防御、生存以及与自然谈判的、充满力量的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝洛格拉奇克要塞`} />
                <InfoRow label="英文名称" value={`Belogradchik Fortress`} />
                <InfoRow label="正式名称" value={`Belogradchik Fortress`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`贝洛格拉奇克`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座跨越古罗马、中世纪保加利亚与奥斯曼帝国三个时代的边境军事要塞，更是人类智慧与自然鬼斧神工协作的非凡见证。`} />
                <InfoRow label="建筑特色" value={`并非纯粹的人工造物，而是将数十座高达200米的侏罗纪红色砂岩天然巨岩作为城墙、塔楼和防御核心，实现了建筑与景观的完美共生。`} />
                <InfoRow label="建筑风格" value={`层叠式防御工事，融合了罗马基础的实用性、保加利亚中世纪的坚固感以及奥斯曼时期为适应火炮而进行的扩建，风格粗粝而写实。`} />
                <InfoRow label="文化价值" value={`既是保加利亚西北部边境动荡历史的沉默讲述者，也是其独特“岩石森林”自然奇观的文化锚点，象征着人类在非凡自然环境中寻求生存与防御的永恒故事。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但季节影响显著。夏季（4月至10月）开放时间为上午9:00至下午7:00，最后入场时间为下午6:15。冬季（11月至次年3月）开放时间缩短，通常为上午9:00至下午5:00，且可能因恶劣天气临时关闭。节假日开放时间可能调整，建议出发前查阅当地旅游网站。`} />
              <InfoRow label="门票价格" value={`成人票：6保加利亚列弗（约3欧元）。学生及老年人凭证件可享折扣票，价格为2列弗。6岁以下儿童免费。家庭套票（2大2小）有优惠。门票包含要塞主体和主要观景平台的参观，但不包含专业导游讲解（需额外预约付费）。`} />
              <InfoRow label="地址" value={`Belogradchik Fortress, 3900 Belogradchik, Vidin Province, Bulgaria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是保加利亚首都索非亚机场（SOF）。从索非亚出发，最佳方式是乘坐长途巴士或火车前往维丁市（Vidin），车程约3-4小时，班次每天数趟但不算频繁，建议提前在网上或中央巴士站购票。抵达维丁后，需要换乘前往贝洛格拉奇克镇的当地巴士，这趟车次更少，车程约40分钟，每天可能只有3-4班，务必在维丁巴士站确认好返程时间。自驾是最灵活的选择，从索非亚驱车约3小时，道路状况良好，沿途风景壮丽。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说来话长，这片岩石的故事比任何人类王朝都要古老得多。大约两亿多年前的侏罗纪时期，这里还是一片温暖的浅海，沙粒和矿物质层层沉积，经过地壳运动的挤压和抬升，又经过千万年的风霜雨雪精雕细琢，才形成了今天我们看到的这些形状怪诞、色彩斑斓的巨岩群。人类到来之前，它们只是寂静的地质奇观。直到罗马帝国的铁蹄踏足巴尔干，敏锐的罗马工程师一眼就看中了这里。大约在1到3世纪，他们首次在这些易于防守的天然岩石间，用石块垒起了简单的墙体和瞭望塔，建立了一个边防哨所。目的很单纯：监视道路，控制这片区域。那时的要塞规模很小，更像是嵌在岩石里的一个前哨站，石头缝里或许还驻扎着百无聊赖的罗马士兵，望着北方未知的领土。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马帝国衰落后，这里一度被遗忘在荒草中。直到中世纪保加利亚第二帝国迎来它的强盛时期，特别是沙皇伊万·阿森二世和他的继任者们，才重新发现了这块宝地。大约在13到14世纪，保加利亚人极大地扩展了要塞。他们沿着岩石天然形成的屏障，修建了更加厚实高大的城墙，将更多的巨岩纳入防御体系内部，并增建了塔楼和兵营。这个时期的工程，已经有了鲜明的保加利亚中世纪城堡特色——坚固、实用，充分利用地形。据说，当时这里成了一个重要的行政和军事中心，守护着帝国的西北边境，抵御来自匈牙利王国等势力的侵扰。岩石间的通道被加固成秘密路径，最高的岩顶设立了烽火台。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在奥斯曼土耳其帝国征服保加利亚之后。起初，征服者们也继承了这座要塞，但到了19世纪初，局势变得紧张。巴尔干各民族起义风起云涌，奥斯曼帝国需要巩固其统治。于是，在1805年至1837年间，一批法国和意大利的工程师（受雇于奥斯曼帝国）对要塞进行了最后一次，也是最具“现代性”的大规模改建。他们不是为了美观，而是为了应对新时代的战争——火炮。城墙被加厚以承受炮击，新的、适应火炮射击的棱堡和炮台被修建起来，特别是面向最容易受攻击的方向。这次扩建，赋予了要塞今天我们看到的基本轮廓。它成了一个强大的火药库和军事据点，冷兵器时代的岩石屏障，装上了热兵器的獠牙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的讽刺在于，这座被不断加固的要塞，最终在战争中陷落，并非因为城墙不够坚固。在1877-1878年的俄土战争（也是保加利亚的解放战争）中，俄国军队和保加利亚志愿军包围了贝洛格拉奇克。经过激烈的战斗，奥斯曼守军最终投降，要塞回到了保加利亚人手中。但自此，它的军事使命彻底结束了。火炮沉寂，士兵离去，它重新变回岩石的一部分，在二十世纪的大部分时间里慢慢倾颓，直到被人们重新评估其历史与自然价值，经过谨慎的修复，才成为今天这个令人惊叹的露天博物馆。从罗马哨所到奥斯曼炮台，它的每一块石头都记录着边境的紧张、帝国的兴衰，以及人类如何依赖脚下这片古老土地的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受要塞的魔力，建议预留至少3-4小时，最好安排一整天，连带探索周边的岩石森林。最佳抵达时间是清晨开门后，或下午三点以后。清晨光线柔和，能拍出岩石和城堡最富戏剧性的照片，且游客稀少，你能独享那份苍凉与宁静。下午游览则可以避开最热的日头，并在黄昏时分欣赏到赭红色岩石在夕照下如火燃烧的绝景。游览节奏宜慢不宜快，这不是打卡点，而是一个需要用心去“阅读”和“感受”的空间。路线核心是从外到内，从下到上，先远观其磅礴气势，再深入其历史肌理。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对防滑、支撑性好的登山鞋或运动鞋，部分石阶陡峭且表面被磨得光滑，尤其在潮湿天气非常危险。夏季务必携带充足饮用水和遮阳帽，要塞内几乎没有任何遮阴处，阳光直射强烈。切勿尝试攀爬没有防护栏的岩石或越过安全警戒线，地质结构看似坚固实则可能有松动风险，安全第一。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从主入口进入，不要急着爬上核心要塞，而是沿着外侧步道缓行，从多个角度仰望那些与城墙咬合在一起的巨型岩柱，感受建筑与自然的共生关系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过第一道厚重的石门“贝尔格莱德门”，踏入要塞的第一庭院，这里曾是驻军和补给区，摸摸那些被岁月磨光的石板，想象昔日士兵的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`开始沿着在天然岩体上开凿出的陡峭石阶向上攀爬，手脚并用间，体会守军据险而守的地理优势，并在中途平台回头俯瞰小镇如积木般铺展在脚下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上要塞的核心防御区“第二庭院”，这里炮台遗迹犹存，站在古老的奥斯曼炮位旁，眺望北方山谷，那是历史上外敌来犯的方向，风声鹤唳感瞬间袭来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找连接两块巨岩的空中石砌廊桥，勇敢地走上去，感受身处悬崖与天空之间的战栗，这是要塞内最惊险也最迷人的视角之一。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访位于最高岩石下方的蓄水池和小型礼拜堂遗迹，这些生活与信仰的痕迹提醒你，这里不仅仅是战场，也是一个长期存在的社区。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，一定要沿着标记清晰的路径，继续深入要塞背后的“贝洛格拉奇克岩石群”，近距离观察“亚当与夏娃”、“骆驼”、“修女岩”等著名岩阵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在日落前回到要塞西侧的观景平台，找一块平滑的石头坐下，静静地看夕阳将整个岩石要塞群染成金红，直到星斗初现。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`要塞南侧外围公路的转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，从这里可以拍摄到整个要塞建筑群依托着层叠巨岩的经典全景，暖色调光线会让红色砂岩和城墙呈现油画般的质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`第一庭院仰望“主岩”与城墙结合部`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光能清晰照亮岩壁的纹理和墙砖的细节，利用广角镜头仰拍，能拍出建筑与自然巨物碰撞的压迫感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`连接两块巨岩的空中廊桥上`}</h4>
                  <p className="text-sm text-gray-700">{`任何光线充足的时候，将相机贴近地面石面，拍摄廊桥延伸至远方岩石和天空的引导线构图，人物可以小小地点缀在桥的另一端，突出险峻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“修道者”岩石顶部的残垣旁`}</h4>
                  <p className="text-sm text-gray-700">{`需要一点徒步，但黄昏时分站在这里，可以以残墙为前景，拍摄夕阳下远处要塞主体和整个小镇的壮阔全景，光影层次极其丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`奥斯曼时期炮台的正后方`}</h4>
                  <p className="text-sm text-gray-700">{`利用炮筒作为天然的前景框架，对准远方山谷或起伏的山丘，营造一种历史凝视着现代风景的深度叙事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`岩石和沙地在正午阳光下容易过曝且色彩发白，建议使用RAW格式拍摄以便后期找回细节。航拍能获得震撼视角，但务必提前查询并严格遵守当地关于历史遗迹上空的无人机飞行规定，通常禁飞或需特殊许可。尊重环境，不要为了拍照踩踏受保护的脆弱岩层或植被。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`镇上由老房子改造的客栈，主人会端出自家酿的果酱和热茶，晚上在安静的小花园里能仰望星空下要塞岩石的黑色剪影。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`岩石景观民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择一栋窗户正对着“骆驼岩”或“修女岩”的民宿，清晨在咖啡香中醒来，第一眼就是被晨曦染红的天然雕塑，仿佛住在巨人的庭院里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色山林小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`位于要塞后方森林边缘的独栋木屋，体验真正的隐居感，晚上只能听到风声和虫鸣，白天徒步探索岩石森林无比方便。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`维丁市舒适酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更完善的设施，可以住在40分钟车程外的维丁市多瑙河畔酒店，将要塞之旅与多瑙河沿岸风光结合，行程更悠闲。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`贝洛格拉奇克镇非常小且宁静，夜间几乎无娱乐活动，选择住在这里是为了深度体验与岩石共存的静谧感，而非都市便利。夏季和周末建议提前数周预订，选择非常有限。小镇治安极好，但夜间街道照明较暗，散步时建议携带手电。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开贝洛格拉奇克很久以后，脑海里挥之不去的，不是某个具体的塔楼或炮口，而是一种整体的感觉——那种人类造物在时间与自然伟力面前，既显得渺小，又透着一股顽强生命力的矛盾美感。这座要塞没有试图炫耀权力或财富，它所有的设计都指向最原始的需求：生存、观看、抵御。它不优雅，但无比诚实。这种诚实，在当今这个常常被粉饰和虚拟包裹的世界里，显得格外有力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它教会我一种不同的“观看”方式。我们旅行，常常是去追逐那些被明确标识的“伟大”——辉煌的教堂、华丽的宫殿。但在这里，伟大是散落的，是自然与人文交织而成的。你需要调动想象力，去填补城墙的缺口，去聆听风声中的历史低语。它不在热闹的旅游主干道上，它需要你绕一点路，费一点力，才能抵达。但正是这种“抵达”的过程，让最后的相见变得如此深刻。对于每一位厌倦了表面打卡，渴望在旅途中触碰地球的筋骨与人类历史真实纹理的旅人来说，贝洛格拉奇克要塞不是一个景点，它是一个启示。它静静地立在那片红色的岩石中，提醒我们：最动人的故事，往往写在天地之间最本真的篇章里。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/plovdiv-roman-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗夫迪夫古罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Plovdiv Roman Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veliko-tarnovo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    大
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">大特尔诺沃（沙皇之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veliko Tarnovo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roman-theatre-plovdiv" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗夫迪夫罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Theatre of Plovdiv</p>
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
