import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮奥当 Piódão｜探访葡萄牙“蓝色星星”般的深山片岩秘境 - 最佳欧洲景点',
  description: '车子在最后一个急弯处甩过，眼前豁然开朗。那一瞬间，你会忘记呼吸。对面陡峭的山坡上，密密麻麻的棕黑色小盒子，像一群紧紧依偎在一起、正在沉睡的甲虫，又像是山体本身自然剥落的一片巨大鳞甲，层层叠叠，毫无间隙地堆砌出一个完整的、有生命的村落。这就是皮奥当给你的第一眼，不是精美，不是宏伟，而是一种带着原始力量...',
}

export default function PiodaoSchistVillagePortugalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '皮奥当', href: '/attractions/piodao-schist-village-portugal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮奥当・Piódão・葡萄牙・阿尔瓦科阿（科英布拉区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在最后一个急弯处甩过，眼前豁然开朗。那一瞬间，你会忘记呼吸。对面陡峭的山坡上，密密麻麻的棕黑色小盒子，像一群紧紧依偎在一起、正在沉睡的甲虫，又像是山体本身自然剥落的一片巨大鳞甲，层层叠叠，毫无间隙地堆砌出一个完整的、有生命的村落。这就是皮奥当给你的第一眼，不是精美，不是宏伟，而是一种带着原始力量和惊人协调感的生存奇观。空气中弥漫着清冽的山风气味，混合着远处燃烧木柴的淡淡烟熏味，这是属于大地的、最本真的芬芳。
走近它，脚下的路从柏油变成了被岁月打磨得光滑温润的片岩石板路，一级一级向上延伸，窄得仅容两人擦肩。石墙粗糙的质感触手可及，每一块石头都形状各异，未经雕琢，却严丝合缝地垒在一起，缝隙间偶尔探出几株顽强的小草。耳边安静极了，只有风声、远处隐约的溪流声，以及你自己的脚步声在迷宫般的巷弄里回荡。你突然意识到，这里几乎没有“街道”的概念，只有连接一户户人家的“通道”和“台阶”。邻居的阳台可能就是你家屋顶，你家的烟囱或许正对着楼上的厨房窗口。这种极致的紧凑，构建了一种超乎想象的亲密社群关系。
在这个由深浅不一的棕黑与灰构成的单色调世界里，唯一一抹跳脱的亮色，就是村落中心那座小巧的圣母升天教堂。它的墙面被刷成了干净的白色，门窗轮廓勾勒着独特的“皮奥当蓝”。关于这抹蓝色的来历众说纷纭，有人说是因为当年只有这一种颜料，有人说是为了模仿天空和海洋，给被群山包围的人们一个心灵的出口。无论如何，它成了整个村落的灵魂坐标，像一颗坠落在黑色山坳里的蓝白色星星，在阳光下静静地发着光。你会发现，这里的时间流速是不同的。老人们坐在自家低矮的门槛上，用你听不懂的方言缓慢地交谈；主妇在公共洗衣池边捶打衣物，水声潺潺；商店一周只开两三天，卖些简单的杂货和手工品。皮奥当的魅力，不在于看一场表演，而在于体验一种近乎停滞的、自给自足的山居岁月。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在最后一个急弯处甩过，眼前豁然开朗。那一瞬间，你会忘记呼吸。对面陡峭的山坡上，密密麻麻的棕黑色小盒子，像一群紧紧依偎在一起、正在沉睡的甲虫，又像是山体本身自然剥落的一片巨大鳞甲，层层叠叠，毫无间隙地堆砌出一个完整的、有生命的村落。这就是皮奥当给你的第一眼，不是精美，不是宏伟，而是一种带着原始力量和惊人协调感的生存奇观。空气中弥漫着清冽的山风气味，混合着远处燃烧木柴的淡淡烟熏味，这是属于大地的、最本真的芬芳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近它，脚下的路从柏油变成了被岁月打磨得光滑温润的片岩石板路，一级一级向上延伸，窄得仅容两人擦肩。石墙粗糙的质感触手可及，每一块石头都形状各异，未经雕琢，却严丝合缝地垒在一起，缝隙间偶尔探出几株顽强的小草。耳边安静极了，只有风声、远处隐约的溪流声，以及你自己的脚步声在迷宫般的巷弄里回荡。你突然意识到，这里几乎没有“街道”的概念，只有连接一户户人家的“通道”和“台阶”。邻居的阳台可能就是你家屋顶，你家的烟囱或许正对着楼上的厨房窗口。这种极致的紧凑，构建了一种超乎想象的亲密社群关系。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个由深浅不一的棕黑与灰构成的单色调世界里，唯一一抹跳脱的亮色，就是村落中心那座小巧的圣母升天教堂。它的墙面被刷成了干净的白色，门窗轮廓勾勒着独特的“皮奥当蓝”。关于这抹蓝色的来历众说纷纭，有人说是因为当年只有这一种颜料，有人说是为了模仿天空和海洋，给被群山包围的人们一个心灵的出口。无论如何，它成了整个村落的灵魂坐标，像一颗坠落在黑色山坳里的蓝白色星星，在阳光下静静地发着光。你会发现，这里的时间流速是不同的。老人们坐在自家低矮的门槛上，用你听不懂的方言缓慢地交谈；主妇在公共洗衣池边捶打衣物，水声潺潺；商店一周只开两三天，卖些简单的杂货和手工品。皮奥当的魅力，不在于看一场表演，而在于体验一种近乎停滞的、自给自足的山居岁月。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮奥当`} />
                <InfoRow label="英文名称" value={`Piódão`} />
                <InfoRow label="正式名称" value={`Aldeia Histórica de Piódão`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`阿尔瓦科阿（科英布拉区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个因避难和隐居而生的“活化石”村落，代表了葡萄牙内陆山区最传统、最坚韧的社群生活方式。`} />
                <InfoRow label="建筑特色" value={`数百座棕黑色片岩房屋如天然生长般紧密依山而建，层叠错落，唯有一座白墙蓝边的小教堂点缀其中，形成极具视觉冲击力的和谐画面。`} />
                <InfoRow label="建筑风格" value={`葡萄牙山区 vernacular architecture（乡土建筑）的典范，完全采用本地片岩、木材和板岩，无任何外来建筑风格影响。`} />
                <InfoRow label="文化价值" value={`它是葡萄牙“片岩村落网络”中最耀眼的一颗明珠，承载着一段关于迁徙、生存、信仰和社区凝聚力的集体记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村落本身全天开放。村内主要的圣母升天教堂（Igreja Matriz）开放时间较为灵活，通常为上午9点至下午1点，下午2点至5点。村史解说中心（Casa da Aldeia）夏季（6月-9月）开放时间较长，约为10:00-13:00 & 14:00-18:00；冬季开放时间缩短或仅在周末开放。建议出行前查询当地旅游局最新信息，公共假期可能关闭。`} />
              <InfoRow label="门票价格" value={`进入村落免费。圣母升天教堂内部参观免费（可自愿捐赠）。村史解说中心门票约2欧元，学生及65岁以上老人有优惠。`} />
              <InfoRow label="地址" value={`Aldeia do Piódão, 3320-999, Arganil, Portugal`} />
              <InfoRow label="交通方式" value={`皮奥当深藏于葡萄牙中部的埃什特雷拉山脉腹地，抵达本身就是一场探险。最便捷的出发点是科英布拉市。从科英布拉的火车站或汽车站，你可以乘坐Rede Expressos巴士前往阿尔瓦科阿（Arganil），车程约1.5小时，每天班次有限（通常上下午各1-2班）。抵达阿尔瓦科阿后，前往皮奥当的公共交通极为稀少且不便，强烈建议租车自驾。从阿尔瓦科阿开车上山，沿着蜿蜒但维护良好的EN342-1公路行驶约40分钟，穿过壮丽的山谷和森林，才能抵达这座与世隔绝的村庄。自驾是探索这一地区周边多个片岩村落（Aldeias do Xisto）的唯一推荐方式。山路弯多，请谨慎驾驶。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解皮奥当为何在此，就得把时钟拨回到更久远的动荡年代。这片崎岖的埃什特雷拉山脉，自古就是避难所。有历史学者认为，最早来此定居的，可能是在公元8世纪前后，为躲避北非摩尔人入侵而逃入深山的基督徒。对他们而言，贫瘠、陡峭、难以抵达，反而是最大的安全保障。他们利用脚下取之不尽的片岩，垒起最简陋的遮风避雨之所，在山间有限的平地上开辟梯田，种植黑麦和土豆，饲养山羊，过上了与世隔绝的生活。山，既是屏障，也是母亲，给予了他们生存的一切材料和空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`另一个深刻塑造皮奥当社群身份的历史浪潮，是宗教迫害。传说在17-18世纪，许多“新基督徒”（即被迫改信天主教的犹太人）为了躲避葡萄牙宗教裁判所的残酷迫害，也选择遁入这片迷宫般的群山。他们带来了不同的知识和技能，或许也带来了更为谨慎和团结的社群组织方式。在皮奥当，你几乎看不到任何富丽堂皇的建筑装饰，这种极度的朴素与实用主义，或许也与这段需要隐藏身份、避免引起外界注意的历史记忆有关。生存，是这里唯一的美学。人们像苔藓一样，紧紧附着在岩石上，沉默而坚韧地延续着香火。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`村庄并非一日建成。我们现在看到的层叠景观，是一个缓慢“生长”了几个世纪的结果。最初的定居点可能在更高或更隐蔽处。随着人口自然增长和家族繁衍，新的家庭需要在原有的“蜂巢”上寻找位置。于是，儿子在父亲房子的上方或侧方，用同样的片岩，以同样的方式，再垒出一间屋子。没有总体规划，只有最朴素的扩张逻辑：依山势，不占宝贵的耕地，并最大限度地靠近家族和社群。就这样，一代叠一代，房屋长在房屋上，阶梯连着阶梯，最终形成了这座令人惊叹的“岩石瀑布”或“露天剧场”。每一道石墙，都是一本无字的家谱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`皮奥当并非一直如此宁静。它经历过繁荣，也濒临过消亡。19世纪末到20世纪中叶，随着葡萄牙沿海和城市的发展，以及巴西等地的移民机会出现，山里艰苦的生活让年轻一代大量出走，“空心化”危机严重。最萧条时，村里只剩下几十位不愿离开故土的老人。转折点出现在20世纪末，随着“片岩村落”整体被认定为国家级文化遗产，以及乡村旅游概念的兴起，皮奥当这颗蒙尘的明珠被重新发现。一些有远见的本地人和回归者开始修缮老屋，开设小客栈和餐馆。政府也投资改善了基础设施。旅游业像一股温和的活水，注入了这个濒临干涸的社群。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的皮奥当，走在一条微妙的平衡木上。它被誉为“葡萄牙最美的村庄”之一，吸引了世界各地的游客。周末和旺季，小巷里会响起不同的语言。但当你避开人流，在清晨或黄昏漫步，依然能感受到那股强大的、源自历史的沉静力量。许多老房子被改造成了度假屋，但主人可能仍住在隔壁；咖啡馆里坐着游客，也坐着讨论村里事务的老人。皮奥当的故事，是一个关于避难、坚守与适度新生的故事。它不是博物馆里的标本，而是一棵老树，在旧的枝干上，正在小心翼翼地发出新的嫩芽。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在午后抵达皮奥当，先入住并适应环境。真正的深度游览从傍晚开始，持续到次日中午。傍晚光线柔和，是拍照和感受村落宁静氛围的黄金时间。天黑后，村落灯光亮起，又是另一番奇幻景象。第二天清晨，趁大批一日游游客还未上山，独自探索空无一人的小巷和周边步道，最能体会村落的灵魂。整体节奏务必放慢，这里不适合匆忙打卡，适合用脚步丈量每一级石阶，用身体感受空间的逼仄与开阔的交替。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`村庄巷道极其陡峭且石板湿滑，务必穿一双防滑性能极好的徒步鞋或运动鞋，高跟鞋在这里是“灾难级”选择。
村里餐馆不多且规模小，旺季晚餐最好提前询问客栈主人帮忙预订，否则可能面临无饭可吃的窘境。
这里是宁静的居民区，晚上十点后请保持安静，拍照时也请尊重当地居民的隐私，避免将镜头直接对准屋内或居民的脸。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在村口上方的免费停车场，先别急着进村，站在观景台（Miradouro）深吸一口气，将那片震撼的层叠全景像底片一样印在脑海里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主路下行，让脚步引领你迷失在那片片岩的迷宫中，不必看地图，去感受石墙的冰凉触感和巷道突然转向带来的小小惊喜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那颗“蓝白色星星”——圣母升天教堂，轻轻推开厚重的木门，感受内部由蓝色瓷砖和金色祭坛营造出的、与外部粗犷截然相反的精致虔诚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂前的小广场（Largo）石凳上坐一会儿，看当地老人缓慢经过，听他们用浓重口音打招呼，直到夕阳把对面房屋的片岩墙面染成温暖的赤金色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意走进一家家庭经营的小餐馆，点一锅用柴火慢炖的山羊肉或豆子炖肉，配上本地面包和红酒，用味蕾连接这片土地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天早起，跟随指示牌沿着村后的“环村步道”走一小段，从不同高度和角度回望村庄，你会理解它和山体是如何融为一体的。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访村史解说中心，看看老照片和旧物，听管理员（如果他会说英语）讲讲那些没有写在牌子上的家族轶事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，去村口那家小小的手工艺品店，带走一块真正的片岩镇纸或一件蓝色陶器，让这段记忆有一个沉甸甸的载体。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村口上方主停车场观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时至日落后蓝调时刻，使用中长焦镜头压缩空间，能拍出村庄层叠错落、如同模型般的戏剧性全景，夜间长曝光可捕捉灯火如繁星点缀山间的景象。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣母升天教堂正前方的小广场`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光刚刚照亮教堂白墙而大部分民居还处在阴影中时，利用明暗对比突出教堂作为视觉中心的位置，构图时纳入蜿蜒而上的石阶作为引导线。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`村落中部某条狭窄陡峭的巷弄`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，光线会在高耸的石墙间形成强烈的明暗分割，寻找一道有特色的木门或一扇窗户作为焦点，拍出具有几何美感和岁月质感的特写。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`村庄下方河谷的对面山坡`}</h4>
                  <p className="text-sm text-gray-700">{`需要沿步道徒步约15-20分钟到达，这里是拍摄村庄与背后壮丽山体全景的绝佳位置，上午顺光，能清晰展现村庄与自然环境的融合关系。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`片岩的反光率很低，在光线不足的巷子里拍摄时，可以适当提高感光度（ISO）或使用三脚架进行长曝光，以保留暗部细节。航拍在这里可能受到限制，请务必提前了解当地法规并尊重居民隐私，绝对不要在民居上空飞行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住由百年片岩老屋改造而成的客栈，房间低矮但无比温馨，厚重的石墙让夏夜清凉冬夜温暖，早晨会被天窗洒下的阳光和远处教堂的钟声唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`景观首选`}</h4>
                  <p className="text-sm text-green-800">{`位于村庄较高处的客房，带有一个小小的石头阳台，不用出门就能俯瞰大半个村落的瓦顶和远山，是拍摄日出和村庄晨雾的私人机位。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计之选`}</h4>
                  <p className="text-sm text-yellow-800">{`村庄边缘一栋经过现代简约风格改造的片岩屋，保留了原始的石墙和木梁，但内部配备了舒适的现代设施和落地窗，在传统与舒适间找到完美平衡。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山居情怀`}</h4>
                  <p className="text-sm text-purple-800">{`选择村庄下方河谷边独栋的片岩农舍改造的民宿，拥有自己的小花园，夜晚极其静谧，可以清晰看到银河，适合追求完全避世体验的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`皮奥当的住宿数量非常有限，尤其是带有特色和景观的，在夏季和节假日必须提前数月预订。所有住宿都需要步行一段陡峭的石阶才能到达，请务必轻装简行，大件行李会是个麻烦。入住当地民宿是了解村落故事的最佳方式，主人往往就是最好的导游和历史讲述者。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开皮奥当，沿着盘山路蜿蜒而下，后视镜里那个黑色的“蜂巢”越来越小，最终消失在山峦的褶皱里。但你知道，有些东西留下来了。那不是几张照片，而是一种关于“家园”的全新想象。在效率至上的时代，我们习惯了平地起高楼，习惯了规划、设计和整齐划一。而皮奥当的存在，像一声沉默的质问：家，是否可以是与大地共生、从材料到情感都完全源自本土的产物？它那不规则的、有机的形态，恰恰是数个世纪以来，一个社群与严酷自然达成的最深刻妥协与最亲密拥抱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人追逐网红地标、快餐式旅游盛行的世界里，皮奥当提供了一种反向的旅行价值。它不讨好，不便捷，甚至带着一丝倔强的“不便”。它要求你付出时间和体力，穿过蜿蜒的山路，用双脚去攀登它的躯体。而作为回报，它赠予你的是一种稀缺的“沉浸感”——不仅仅是空间的沉浸，更是时间的沉浸。走在那些石阶上，你仿佛能触摸到十几代人的手温，能听到几个世纪以来，同样的山风穿过同样的巷弄。它让你慢下来，不仅是脚步，更是心境。来这里，不是为了收集一个地名，而是为了体验一种截然不同的生活可能性，一种在坚固岩石上建立起来的、脆弱而又坚韧的人类生存诗篇。这才是深度旅行的真谛：去往那些被时间遗忘的角落，不是为了逃离现代，而是为了更深刻地理解我们来自何处，以及“家园”一词，所能承载的、如此厚重而美丽的重量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/obidos-wedding-town-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥比杜什婚礼之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Óbidos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/almourol-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔莫罗城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Almourol Castle</p>
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
