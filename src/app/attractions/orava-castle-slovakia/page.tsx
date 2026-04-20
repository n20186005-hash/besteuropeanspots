import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥拉瓦城堡 Orava Castle｜吸血鬼电影鼻祖取景地，雄踞悬崖的斯洛伐克之魂 - 最佳欧洲景点',
  description: '第一眼看到奥拉瓦城堡，你会瞬间屏住呼吸。它不像那些修建在平地上或矮丘上的宫殿，而是以一种近乎霸道的生命力，从一片高达112米的险峻石灰岩悬崖上“炸”了出来。暗色的石墙与下方墨绿色的奥拉瓦河、远处绵延无尽的Beskydy山脉森林融为一体，像一头沉睡的巨兽，又像一枚钉在大地褶皱里的古老徽章。车子在山路上...',
}

export default function OravaCastleSlovakiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥拉瓦城堡', href: '/attractions/orava-castle-slovakia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥拉瓦城堡・Orava Castle・斯洛伐克・日利纳州，奥拉瓦村`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到奥拉瓦城堡，你会瞬间屏住呼吸。它不像那些修建在平地上或矮丘上的宫殿，而是以一种近乎霸道的生命力，从一片高达112米的险峻石灰岩悬崖上“炸”了出来。暗色的石墙与下方墨绿色的奥拉瓦河、远处绵延无尽的Beskydy山脉森林融为一体，像一头沉睡的巨兽，又像一枚钉在大地褶皱里的古老徽章。车子在山路上盘旋时，它总在树影间忽隐忽现，那种压迫感和神秘感，随着每一个拐角层层递进。
走近它，需要跨过一座吱呀作响的木桥。桥下是深邃的峡谷，河水的声音混着林间风过的沙沙响，还有远处传来的、不知是乌鸦还是某种鹰隼的啼叫。空气里是潮湿的岩石、陈年木头和泥土的混合气息。触摸那些被无数代守军和工匠的手磨得发亮的石头护栏，冰凉的感觉直透指尖。你忽然就明白了，这不是一个被精心打扮好的“景点”，而是一个仍然充满荒野能量的地方。当地人来这里，不只是参观，更像是一种朝圣——对自然之力的敬畏，对先祖在这等险地求生并建立家园的骄傲。
它的核心魅力，正在于这种“野蛮生长”的几何美学与史诗般的孤独感。没有对称的花园，没有修剪整齐的树篱，城堡的每一个部分——从最下层的防御工事，到中层的宫殿庭院，再到高耸入云的上层塔楼——都严格遵循着岩石本身的走势。你沿着狭窄的之字形阶梯向上攀爬，身体能清晰地感受到海拔和角度的剧烈变化，仿佛不是在参观建筑，而是在攀爬一座活的历史岩层。光线在石壁间切割出锐利的阴影，某个转角，一束光可能正好打在一扇狭小的箭窗上，瞬间让你幻视出几百年前弓箭手在此警戒的身影。这种沉浸感，是任何平面图纸或博物馆模型都无法给予的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到奥拉瓦城堡，你会瞬间屏住呼吸。它不像那些修建在平地上或矮丘上的宫殿，而是以一种近乎霸道的生命力，从一片高达112米的险峻石灰岩悬崖上“炸”了出来。暗色的石墙与下方墨绿色的奥拉瓦河、远处绵延无尽的Beskydy山脉森林融为一体，像一头沉睡的巨兽，又像一枚钉在大地褶皱里的古老徽章。车子在山路上盘旋时，它总在树影间忽隐忽现，那种压迫感和神秘感，随着每一个拐角层层递进。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近它，需要跨过一座吱呀作响的木桥。桥下是深邃的峡谷，河水的声音混着林间风过的沙沙响，还有远处传来的、不知是乌鸦还是某种鹰隼的啼叫。空气里是潮湿的岩石、陈年木头和泥土的混合气息。触摸那些被无数代守军和工匠的手磨得发亮的石头护栏，冰凉的感觉直透指尖。你忽然就明白了，这不是一个被精心打扮好的“景点”，而是一个仍然充满荒野能量的地方。当地人来这里，不只是参观，更像是一种朝圣——对自然之力的敬畏，对先祖在这等险地求生并建立家园的骄傲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正在于这种“野蛮生长”的几何美学与史诗般的孤独感。没有对称的花园，没有修剪整齐的树篱，城堡的每一个部分——从最下层的防御工事，到中层的宫殿庭院，再到高耸入云的上层塔楼——都严格遵循着岩石本身的走势。你沿着狭窄的之字形阶梯向上攀爬，身体能清晰地感受到海拔和角度的剧烈变化，仿佛不是在参观建筑，而是在攀爬一座活的历史岩层。光线在石壁间切割出锐利的阴影，某个转角，一束光可能正好打在一扇狭小的箭窗上，瞬间让你幻视出几百年前弓箭手在此警戒的身影。这种沉浸感，是任何平面图纸或博物馆模型都无法给予的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥拉瓦城堡`} />
                <InfoRow label="英文名称" value={`Orava Castle`} />
                <InfoRow label="正式名称" value={`Orava Castle (Oravský hrad)`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`日利纳州，奥拉瓦村`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中欧防御体系的杰作，见证了匈牙利王国北部边境近千年的权力更迭与烽火传奇。`} />
                <InfoRow label="建筑特色" value={`一座从石灰岩悬崖上“生长”出来的庞大建筑群，依山势分为上、中、下三座城堡，层层叠加，形似鹰巢。`} />
                <InfoRow label="建筑风格" value={`融合了早期罗马式基础、哥特式核心结构、文艺复兴时期加固与巴洛克内部装饰的混合风格。`} />
                <InfoRow label="文化价值" value={`不仅是斯洛伐克的国家文化纪念碑，更因1922年经典默片《诺斯费拉图》在此取景而成为流行文化中吸血鬼城堡的视觉原型之一。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年开放时间根据季节变化。
通常五月至九月：每天上午9:00至下午5:00（最后入场时间下午4:30）。
十月至次年四月：开放时间缩短，通常为上午10:00至下午3:00，且周一和周二可能关闭。
十一月通常有数周冬季维护闭馆期。
具体日期每年可能微调，强烈建议出行前在其官方网站或当地旅游信息中心确认。国家假日可能有关闭或特殊开放安排。`} />
              <InfoRow label="门票价格" value={`成人票：10欧元。
优惠票（学生、青少年、老年人）：5欧元。
家庭票（2成人+最多3名儿童）：25欧元。
6岁以下儿童免费。
城堡提供多种导览游选项，包括标准历史游、夜间游和专题游（如“吸血鬼传说”主题游），价格从12欧元到20欧元不等，需提前预约。
门票可在城堡入口处的售票处购买，旺季（7-8月）排队较长。`} />
              <InfoRow label="地址" value={`Oravský Podzámok 1, 027 41 Oravský Podzámok, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是波兰的克拉科夫机场或斯洛伐克的波普拉德-塔特拉机场，但都需要转车。最实际的方式是从斯洛伐克首都布拉迪斯拉发或第二大城市科希策出发。
从布拉迪斯拉发：乘坐火车或长途巴士到兹沃伦或特伦钦，再换乘地区巴士前往奥拉瓦村。全程耗时约4-5小时。自驾是最便捷的选择，沿E50和E77公路向北，车程约3.5小时。
从科希策：乘坐火车到波普拉德，再换乘地区巴士。全程耗时约3-4小时。
地区巴士班次频率不高，尤其是周末和淡季，务必提前在“cp.sk”（斯洛伐克铁路）或当地车站查询时刻表并预留充裕时间。自驾者可将车停在山下村庄的付费停车场，然后步行上山（约10-15分钟陡峭山路）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于谁第一个在这块“飞来之石”上钉下木桩，历史已经语焉不详。但可以肯定的是，早在13世纪中叶，蒙古骑兵如旋风般席卷欧洲之后，匈牙利国王贝拉四世推行了轰轰烈烈的城堡建设计划，奥拉瓦这块天险，自然进入了王国防御北线的蓝图。最初的城堡很可能只是个简陋的木石结构据点，用来监控奥拉瓦河谷这条重要的贸易与军事通道。它的命运，从一开始就与“边境”、“守护”和“危险”这些词紧密相连。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡真正的崛起和塑形，与一个显赫的家族密不可分——图尔佐家族。16世纪，这个凭借矿业和贸易富可敌国的家族获得了奥拉瓦领地。面对日益严峻的奥斯曼土耳其帝国的威胁，他们投入巨资，将城堡从一个边境哨所，扩建改造为一个几乎不可能被攻克的堡垒兼豪华住所。我们今天看到的许多文艺复兴风格的宫殿、拱廊和内部装饰，都烙着图尔佐的印记。想象一下那个画面：在外有强敌虎视眈眈的紧张时代，城堡内部却在举办着人文主义者参与的沙龙，回荡着拉丁语的诗句和鲁特琴的乐声。战备与文明，在这里以一种奇异的方式并存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，火与剑的考验从未停止。城堡经历了数次大火的摧残，最严重的一次在1800年，烈焰几乎吞噬了所有木制结构，只留下被熏黑的石壳。它一度被遗弃，沦为废墟，任风雨和藤蔓侵蚀。转折点出现在19世纪浪漫主义时期，欧洲的知识分子开始痴迷于中世纪、废墟和民族精神。奥拉瓦城堡残破而雄壮的姿态，恰好成了斯洛伐克民族复兴的完美象征。一场长达数十年的系统性修复开始了，这次修复并非完全还原历史，而是带着浪漫主义的想象，旨在“恢复”它作为民族纪念碑的崇高形象。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`让它从东欧众多城堡中脱颖而出、蜚声国际的，则是一个意外的文化事件。1922年，德国表现主义电影大师F·W·茂瑙正在为他的开山之作《诺斯费拉图——恐怖交响曲》寻找一个能完美诠释“不祥”与“古老厄运”的外景地。当他看到奥拉瓦城堡的照片时，立刻被击中了。那锯齿般的轮廓、阴森的塔楼、与世隔绝的氛围，简直就是他心中吸血鬼伯爵奥洛克老巢的实体化身。尽管电影中只出现了城堡的几个剪影和轮廓，但它那嶙峋、尖锐、仿佛能刺破天空的形象，从此定义了后世几乎所有影视作品中“吸血鬼城堡”的视觉基调。一段真实的中世纪防御史，就这样与一个现代哥特神话永久地绑定在了一起。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受奥拉瓦城堡的灵魂，务必预留至少4小时。强烈建议在上午9点开门时就抵达，这时旅行团尚未涌入，晨雾可能还未从河面完全散尽，你能独享城堡苏醒时分的静谧与魔幻氛围。游览节奏应是“慢爬-细看-沉浸”。整体路线是由下至上的征服过程：从山脚村庄开始仰望，过桥进入下层庭院，逐步探索中层的宫殿和生活区，最后挑战最陡峭的阶梯登上顶层塔楼，完成从仰视到俯视的视角转换。这样的安排能让你身体力行地体会城堡建造的逻辑——从易守难攻的入口到至高无上的权位象征，每一米海拔的提升都伴随着视野和历史厚重感的叠加。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内许多楼梯极为陡峭、湿滑且没有现代扶手，务必穿一双防滑性能极好的徒步鞋或运动鞋，女士请避免裙装和高跟鞋。夏季是旅游旺季，中午至下午三点人最多，尽量早到或晚到以避开人流。参加一次斯洛伐克语或英语的导览游非常值得，导游会讲述很多散客无法获知的历史细节和民间传说。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚村庄的停车场出发，别急着上山，先穿过小径走到奥拉瓦河边，找一个能完整看到城堡倒映在水中的位置，静静看几分钟这史诗级的画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过那座充满摇曳感的古老木桥，手扶粗糙的原木栏杆，听着脚下峡谷传来的风声和水声，正式进入城堡的领域。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下层庭院的拱门下驻足，摸摸那些被武器和马车磨损出凹痕的石壁，想象士兵和仆役在此匆忙穿行的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入中层城堡的核心——图尔佐宫，让眼睛适应内部昏暗的光线后，仔细欣赏文艺复兴风格的壁画、古老的瓷砖火炉和那些从窗口透进来的、切割着尘埃的光柱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过城堡内的小教堂，那里有保存完好的哥特式肋状拱顶和残存的壁画，感受在战争堡垒中心保留一处精神慰藉之地的反差。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着最狭窄、几乎仅容一人通行的螺旋石梯，手脚并用地攀爬上最高的“骑士塔”，在喘息中抵达塔顶的观景台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在观景台的垛口后，让360度的狂风扑面而来，俯瞰如绿色绒毯般的森林、缎带般的奥拉瓦河以及远处星星点点的红色屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山前，绕到城堡东侧的“恐怖走廊”，这里曾是监狱和刑讯室，感受石墙渗出的寒意，联想它与吸血鬼传说的关联。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`奥拉瓦河对岸远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时或傍晚日落前两小时，阳光会给城堡染上金色或玫瑰色，使用长焦镜头压缩空间，将城堡、森林和河流一同纳入构图，能拍到最经典的全景明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡入口木桥中段`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻，以木桥的绳索和木板为前景框架，拍摄后方被灯光微微照亮的城堡主体，能营造出强烈的神秘感和故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`上层“骑士塔”的箭窗内`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光从侧面射入塔内，站在箭窗内向外拍摄，可以将古老的石窗作为画框，框住窗外广阔的森林和山谷，形成强烈的明暗对比和空间纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`图尔佐宫拱廊庭院`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射庭院时，捕捉拱廊下整齐排列的光影柱廊，人物可以走在光影交界处，拍出极具几何美感和文艺复兴氛围的人文照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡东侧悬崖小径`}</h4>
                  <p className="text-sm text-gray-700">{`从侧面仰拍城堡建筑群与背后悬崖融为一体、仿佛从岩石中生长出来的震撼画面，突出其险峻和天然防御的地形特点。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部大部分区域禁止使用闪光灯和三脚架（尤其是博物馆展厅），以保护古老的壁画和文物。拍摄外部全景时，建议使用偏振镜（CPL）来消除河面及树叶的反光，让绿色和天空的色彩更饱和浓郁。无人机飞行在城堡上空有严格限制，需提前向斯洛伐克相关部门申请许可，切勿擅自起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住奥拉瓦村由百年石屋改造的家庭旅馆，主人会为你生起传统的瓷砖壁炉，早晨用自家果园的果酱和新鲜羊奶酪款待你，晚上还能听到关于城堡幽灵的民间故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山林隐居`}</h4>
                  <p className="text-sm text-green-800">{`选择距离城堡几公里外、隐藏在Beskydy山森林中的小木屋民宿，晚上没有光污染，可以看见璀璨的银河，白天在露台上就能远眺城堡的剪影。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在日利纳州稍大的城镇如杜尔日·库宾，那里有更多现代化的酒店和餐厅选择，开车往返城堡约半小时，适合追求便利和多样餐饮的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`驱车一小时前往塔特拉山脚下的波普拉德或斯崔博，入住四星级以上的度假酒店，将城堡探险与高山温泉、徒步相结合，获得更丰富的行程体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`奥拉瓦村本身的住宿数量有限且条件相对简单，夏季务必提前数月预订。如果选择住在此处，请享受这份原始的宁静，但要对夜间娱乐设施稀少有心理准备。该地区治安良好，民风淳朴。自驾是最灵活的住宿选择，否则需仔细研究有限的公交时刻表。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥拉瓦城堡很久以后，脑海里挥之不去的，不是某个具体的房间或展品，而是一种整体的“感觉”。那是一种坚硬的、沉默的、与时间和大山角力后留存下来的韧性。在现代社会，我们习惯了一切都被打磨得光滑、便捷、安全，而奥拉瓦却毫不掩饰它的陡峭、昏暗和不便。正是这种“不友好”，恰恰成了它最动人的告白——它告诉你，历史从来不是温顺的，生存从来不是容易的，美也常常与危险和荒凉并肩而立。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它之所以应该被列入每一位深度旅行者的清单，正是因为它提供了一种稀缺的体验：一种祛除了所有浪漫粉饰的、真实的“中世纪感”。这里没有迪士尼式的童话滤镜，只有石头、森林、河流和天空构成的原始力量。当你气喘吁吁地爬上塔顶，被狂风包裹时，你连接的不只是一段匈牙利的贵族史或一个吸血鬼的电影彩蛋，你连接的是人类在自然力量面前，那种既渺小又不屈的永恒精神。在这个被快速消费和扁平化形象充斥的世界里，奥拉瓦城堡像一个固执的坐标，提醒我们：有些地方，仍然需要你付出汗水，调动所有感官，才能真正抵达它的灵魂深处。这趟旅程，本身就是一次对耐心和好奇心的犒赏。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourscheid-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔沙伊德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourscheid Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castel-del-monte" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯泰尔德尔蒙特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castel del Monte</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rapperswil-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉珀斯维尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rapperswil Castle</p>
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
