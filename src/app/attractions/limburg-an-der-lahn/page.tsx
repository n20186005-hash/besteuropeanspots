import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '林堡（兰河畔）Limburg an der Lahn｜邂逅德国保存最完好的中世纪童话，七峰教堂下的千年流光 - 最佳欧洲景点',
  description: '当你从林堡火车站走出来，第一眼看到的景象就足以定格整个旅程的基调。兰河像一条墨绿色的丝带，静静地穿城而过，而河的对岸，一座布满密密麻麻、色彩鲜艳房屋的山丘陡然拔地而起，山顶上，一座拥有七座尖塔的砂岩大教堂如同从童话绘本里直接走出来一般，威严又梦幻地耸立在蓝天之下。那感觉不像是在 approachin...',
}

export default function LimburgAnDerLahnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '黑森州', href: '/destinations/germany' },
            { label: '林堡（兰河畔的中世纪彩绘大教堂小镇）', href: '/attractions/limburg-an-der-lahn' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`林堡（兰河畔的中世纪彩绘大教堂小镇）・Limburg an der Lahn・德国・黑森州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从林堡火车站走出来，第一眼看到的景象就足以定格整个旅程的基调。兰河像一条墨绿色的丝带，静静地穿城而过，而河的对岸，一座布满密密麻麻、色彩鲜艳房屋的山丘陡然拔地而起，山顶上，一座拥有七座尖塔的砂岩大教堂如同从童话绘本里直接走出来一般，威严又梦幻地耸立在蓝天之下。那感觉不像是在 approaching 一个景点，更像是不小心闯进了一幅被时间遗忘的中世纪水彩画。
走过那座有着近八百年历史的老石桥，桥下河水潺潺，天鹅悠闲。开始沿着蜿蜒的、被无数脚步打磨得光滑发亮的石板路向上攀登。空气里混合着好闻的味道——从河边飘来的淡淡水汽，从老房子木窗里溢出的咖啡香，还有面包房刚出炉的“林堡奶酪蛋糕”那种温暖的、甜腻的香气。你的耳朵也不会闲着，远处教堂浑厚的钟声定时敲响，近处巷子里传来清脆的门铃响动和居民们用当地方言交谈的细碎声音。这里不是博物馆式的保护区，而是活生生的家园，阳台上垂挂着天竺葵，门洞里停着自行车，生活的烟火气就萦绕在每一栋有着四五百年历史的木筋屋之间。
而当你终于气喘吁吁地站到教堂前的广场上，回过身俯瞰，整个小镇如同一个精致的模型在你脚下铺开。那些房子——粉的、黄的、蓝的、绿的——它们的木筋结构在阳光下清晰可见，像老人手背上温柔的脉络。你会发现，林堡最动人的魅力，不在于某个孤立的建筑杰作，而在于这种惊人的整体性。从11世纪的大教堂，到13世纪的石桥，再到15、16世纪繁荣时期商人们建造的华丽木筋屋，各个时代层叠在一起，却异常和谐。它没有在历史中凝固，而是像一棵老树，不断地生长出新的年轮，却从未忘记最初的形状。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从林堡火车站走出来，第一眼看到的景象就足以定格整个旅程的基调。兰河像一条墨绿色的丝带，静静地穿城而过，而河的对岸，一座布满密密麻麻、色彩鲜艳房屋的山丘陡然拔地而起，山顶上，一座拥有七座尖塔的砂岩大教堂如同从童话绘本里直接走出来一般，威严又梦幻地耸立在蓝天之下。那感觉不像是在 approaching 一个景点，更像是不小心闯进了一幅被时间遗忘的中世纪水彩画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走过那座有着近八百年历史的老石桥，桥下河水潺潺，天鹅悠闲。开始沿着蜿蜒的、被无数脚步打磨得光滑发亮的石板路向上攀登。空气里混合着好闻的味道——从河边飘来的淡淡水汽，从老房子木窗里溢出的咖啡香，还有面包房刚出炉的“林堡奶酪蛋糕”那种温暖的、甜腻的香气。你的耳朵也不会闲着，远处教堂浑厚的钟声定时敲响，近处巷子里传来清脆的门铃响动和居民们用当地方言交谈的细碎声音。这里不是博物馆式的保护区，而是活生生的家园，阳台上垂挂着天竺葵，门洞里停着自行车，生活的烟火气就萦绕在每一栋有着四五百年历史的木筋屋之间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你终于气喘吁吁地站到教堂前的广场上，回过身俯瞰，整个小镇如同一个精致的模型在你脚下铺开。那些房子——粉的、黄的、蓝的、绿的——它们的木筋结构在阳光下清晰可见，像老人手背上温柔的脉络。你会发现，林堡最动人的魅力，不在于某个孤立的建筑杰作，而在于这种惊人的整体性。从11世纪的大教堂，到13世纪的石桥，再到15、16世纪繁荣时期商人们建造的华丽木筋屋，各个时代层叠在一起，却异常和谐。它没有在历史中凝固，而是像一棵老树，不断地生长出新的年轮，却从未忘记最初的形状。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`林堡（兰河畔的中世纪彩绘大教堂小镇）`} />
                <InfoRow label="英文名称" value={`Limburg an der Lahn`} />
                <InfoRow label="正式名称" value={`Limburg an der Lahn`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`黑森州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`林堡大教堂是德国最古老、保存最完好的罗马式与早期哥特式过渡时期的建筑典范之一，其存在奠定了小镇千年来的精神与地理中心地位。`} />
                <InfoRow label="建筑特色" value={`七座错落有致的尖塔群构成独一无二的天际线，教堂本身巧妙地建造在坚硬的玄武岩山丘上，与山下色彩斑斓的木筋结构房屋形成戏剧性的垂直对话。`} />
                <InfoRow label="建筑风格" value={`以晚期罗马式风格为基调，融入了最早期的哥特式元素，这种“转折期”风格在德国境内极为稀有和珍贵。`} />
                <InfoRow label="文化价值" value={`这座小镇是活生生的中世纪剖面，完美融合了教会权威、商贸活力与市民生活，见证了莱茵兰与黑森地区文化交融的漫长历史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。林堡大教堂内部开放时间通常为夏季（4月至10月）上午9:00至下午6:00，冬季（11月至3月）上午10:00至下午5:00；教堂塔楼和珍宝馆开放时间较短，一般为下午1:00至4:00，且周一常闭。老桥、城堡庭院等外部景点无时间限制。请注意，教堂在举行礼拜仪式期间（通常为周日早晨及特殊节日）不接待游客参观，重大宗教节日如圣诞节、复活节期间开放时间会有较大变动，建议行前在官网二次确认。`} />
              <InfoRow label="门票价格" value={`进入林堡大教堂主体免费。登临教堂塔楼参观费用约为3欧元（成人），优惠票约2欧元。教堂附属的珍宝馆门票约4欧元。小镇本身无门票。提供家庭票及与当地博物馆的联票选择。学生、儿童、残疾人及团体享有相应折扣，需出示有效证件。`} />
              <InfoRow label="地址" value={`Domplatz 3, 65549 Limburg an der Lahn, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福国际机场（FRA）出发最为便捷。在机场火车站乘坐开往科隆（Köln）方向的城际快车（ICE）或区域快车（RE），约35-40分钟即可直达林堡火车站。班次非常频繁，高峰时段每15-20分钟一班。从林堡火车站出站后，眼前就是兰河与老桥，雄伟的大教堂矗立在对面山丘上，步行过桥再爬一段缓坡即可到达老城中心，全程约需15-20分钟，是最经典也最震撼的接近方式。建议购买黑森州州票或周末票，适合多人同行且计划周边游览。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解林堡，你得先从脚下这座山丘说起。早在罗马时代，这里就是一个重要的渡口和战略高地。但真正让林堡登上历史舞台的，是查理曼大帝和他的继任者们。公元910年，康拉德公爵在这里的山顶上建造了一座城堡，用以抵御来自东部的入侵，“林堡”这个名字第一次被记载。城堡守护着通往法兰克福和科隆的重要商道，地理位置决定了它注定不凡的命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮转到13世纪，这是一个决定性的百年。大约在1200年左右，不知名的工匠们开始在山顶城堡旁，为林堡的主教建造一座配得上其地位的教堂。最初的规划是纯粹的罗马式风格，厚重、坚固、如同堡垒。然而，建筑进行到一半时，一种来自法国的新风潮——哥特式风格——正沿着莱茵河悄然传播。于是，你看到了建筑史上奇妙的一幕：教堂的下半部分，比如地下室和部分墙壁，是典型的罗马式圆拱和粗壮立柱；而越往上走，特别是唱诗班席和高耸的塔楼，开始出现了尖拱、肋状拱顶和更修长的比例。林堡大教堂因此成了一个“建筑学上的化石”，清晰地记录了欧洲审美从罗马式的沉稳向哥特式的轻盈飞跃的那个瞬间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`教堂的建造与小镇的繁荣同步。1214年，兰河上的石桥建成，这简直是给小镇的经济引擎注入了最强动力。林堡一跃成为法兰克福与科隆之间最重要的贸易中转站之一。富有的葡萄酒商人、布匹商和金属工匠们沿着通往教堂的主干道定居，他们竞相建造最能显示财富和品味的住宅。于是，我们今天看到的那些令人眼花缭乱的木筋结构房屋诞生了。这些房子不仅是家，还是仓库、店铺和行会会馆。每一根彩绘的梁木，每一扇雕刻精美的门楣，都在诉说着一个家族的故事。小镇的格局就此定型：山顶是神圣的教权（大教堂），山坡是富足的市民（商贾住宅），山脚是流动的财富（兰河与桥梁）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，千年历史不可能一帆风顺。宗教改革、三十年战争、拿破仑的征服……林堡都一一经历。但幸运的是，它从未遭受过毁灭性的战火或火灾。甚至在上世纪四十年代那场席卷欧洲的浩劫中，盟军的轰炸机也奇迹般地绕过了这座古镇，据说是因为飞行员被其绝美的景色所震撼，不忍破坏。战后，德国人开始了漫长而精细的修复工作，不是推倒重建，而是像修补一件珍贵的古董家具，最大限度地保留其原始材料和历史痕迹。今天的林堡人，就生活在这些修复好的历史里，每周日依旧去那座千年教堂做礼拜，节日里市场广场依旧熙熙攘攘。历史在这里不是课本，而是伸手便可触摸的日常生活。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的林堡深度游需要一整天时间，节奏宜慢不宜快。建议在上午九点左右抵达，这时旅行团尚未涌入，晨光正好温柔地洒在教堂东侧的外墙上。整个游览的核心逻辑是“先远观，再沉浸，后回味”。从火车站开始的过桥攀登，是无可替代的序幕。进入老城后，不要执着于直线抵达教堂，而是在迷宫般的小巷里尽情迷失。将参观教堂内部和登塔安排在中午前后，此时教堂内的光线最为充沛。下午则留给探索那些静谧的后街和河畔漫步，傍晚时分在某个能看到全景的露台喝一杯当地产的雷司令，看落日将七座塔尖染成金色。这样一天下来，你不仅看到了林堡，更呼吸到了它的空气，听懂了它的节奏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和公共假期上午集市广场及主巷道人流会非常多，喜欢清静请尽量避开。
小镇道路多为数百年的不规则石板路，务必穿一双绝对舒适防滑的鞋子，高跟鞋在这里是“灾难级”选择。
参观教堂时请保持安静，若遇礼拜或弥撒，应静坐后排观摩或暂时离开，这是基本的尊重。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出发，一定要步行穿过古老的兰河石桥，在桥中央停下，转身拍下大教堂雄踞山丘的经典全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着石板坡道“石巷”向上，让你的指尖划过那些冰冷而光滑的墙石，感受几个世纪的温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走进集市广场，让自己被四周童话般的彩色木筋屋三百六十度包围，找一张露天咖啡座观察小镇如何醒来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入林堡大教堂那略显低矮的罗马式大门，瞬间被内部空间的高度和那些13世纪保留至今的鲜艳壁画所震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间寻找教堂里那些有趣的细节，比如那个被称为“林堡笑脸”的调皮石雕怪兽，或者地下室里的古老墓碑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧面绕出，钻进“医师街”或“铁匠街”这样名字古意盎然的小巷，这里游客稀少，藏着最原汁原味的生活场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙的遗迹散步，走到老城堡的庭院，从这里可以收获一个俯瞰城镇屋顶和远处青山的独特视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后下到兰河的另一岸，坐在河边的长椅上，看着天鹅游弋，从对岸回望你刚刚探索过的整个山丘小镇。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老桥南端仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，阳光能勾勒出教堂和山丘房屋的立体轮廓，使用广角镜头将石桥作为前景，能拍出极具纵深感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`集市广场中心低角度拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光会为彩色的木筋屋外墙打上暖色调，蹲下来放低机位，以鹅卵石地面为引导线，能将广场建筑和远处教堂尖塔一同收入镜中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大教堂内部中殿后部`}</h4>
                  <p className="text-sm text-gray-700">{`中午时分，阳光穿透唱诗班席后巨大的彩色玻璃窗，会在古老的石柱和地板上投下梦幻般的光斑与色彩，等待一束光正好照亮壁画或祭坛的瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡庭院瞭望台`}</h4>
                  <p className="text-sm text-gray-700">{`下午顺光时分，这里是拍摄小镇屋顶海洋和兰河蜿蜒S形河湾的绝佳地点，层层叠叠的红瓦、木筋和绿树构成丰富的纹理。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`兰河北岸的河滨步道`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后，利用平静的河面拍摄教堂山丘的倒影，华灯初上时，灯火倒映在水中，能获得魔幻般的对称构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`小镇居民以自家美丽的房屋为荣，但拍摄私人住宅门窗内部时请务必谨慎，最好快速抓拍或征得同意。`}</li>
                <li>• {`三脚架在教堂内部通常不允许使用，手持拍摄需注意提高ISO保证快门速度，利用柱子和墙壁稳定身体。`}</li>
                <li>• {`雨后的石板路反光能拍出非常迷人的效果，不要因为天气不好就放弃拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城山脚下由百年民居改造的温馨家庭旅馆，房间虽小却满是风情，老板会为你手绘一份只有当地人才知道的秘密散步地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在兰河畔一栋真正的16世纪木筋结构房屋里，木头梁柱在你头顶低语历史，推开窗就能看到天鹅在晨雾中划过水面。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于附近葡萄园山丘上的浪漫城堡酒店，不仅拥有四柱床和华美内饰，更坐拥无遮挡的、俯瞰整个林堡河谷的绝美全景露台。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居之选`}</h4>
                  <p className="text-sm text-purple-800">{`距离老城步行15分钟的一座宁静修道院客栈，由修女打理，简朴而神圣，带围墙的花园里只有鸟鸣，适合寻求内心平静的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿房间可能偏小且不设电梯（受历史建筑限制），但地理位置无可匹敌，开窗即是风景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季旅游旺季和圣诞市场期间，住宿非常紧俏，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安极好，夜晚巷道照明充足，独自夜归也十分安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开林堡很久以后，闭上眼，脑海中浮现的不是某个具体的建筑画面，而是一种整体的、氤氲的氛围。是那种石板路的冰凉触感，是木筋屋油漆混合着咖啡的复杂气味，是教堂钟声在狭窄巷弄里回荡的空灵声响。这个地方教会我的，是一种“慢下来”的历史感知方式。它不像那些宏伟的宫殿或博物馆，把历史包装好、陈列在玻璃后面供你瞻仰。在这里，历史就是你家隔壁那面颜色剥落的墙，是脚下那块被磨出凹坑的门槛石，是面包店老板和你打招呼时那口传承了不知多少代的方言口音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求崭新、快速和高效的时代，林堡的存在像一个温柔的提醒。它告诉我们，美可以在时间里沉淀得更加醇厚，生活可以与历史共处而不只是将其供奉。那七座尖塔守候的，不仅是一片地理的山丘，更是一种时间的质感，一种从容不迫的生活哲学。每一位热爱深度游的旅人，都应该来这里住上一晚，在游客散去后，听听这座千年小镇自己的心跳。你会发现，它诉说的，是关于传承、韧性以及人类对家园那份永恒眷恋的故事，而这，正是我们穿越千里、不断旅行的最终意义。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hameln-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈默尔恩老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hameln Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lorsch-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛尔施修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lorsch Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/regensburg-stone-bridge" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷根斯堡石桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Regensburg Stone Bridge</p>
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
